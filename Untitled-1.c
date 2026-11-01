#include "raylib.h"
#include "raymath.h"
#include <math.h>

#define MAX_OBSTACLES 8

typedef struct {
    Vector3 position;
    bool active;
} Obstacle;

int main(void)
{
    const int screenWidth = 1280;
    const int screenHeight = 720;

    InitWindow(screenWidth, screenHeight, "CYBER RACER 3D");
    SetTargetFPS(60);

    // Camera follows the player car
    Camera3D camera = { 0 };
    camera.position = (Vector3){ 0.0f, 6.0f, 12.0f };
    camera.target = (Vector3){ 0.0f, 0.0f, 0.0f };
    camera.up = (Vector3){ 0.0f, 1.0f, 0.0f };
    camera.fovy = 60.0f;
    camera.projection = CAMERA_PERSPECTIVE;

    Vector3 carPosition = { 0.0f, 0.5f, 0.0f };

    float speed = 0.0f;
    float steering = 0.0f;
    float distance = 0.0f;

    Obstacle obstacles[MAX_OBSTACLES];

    for (int i = 0; i < MAX_OBSTACLES; i++) {
        obstacles[i].position = (Vector3){
            (float)GetRandomValue(-4, 4),
            0.5f,
            (float)(-20 - i * 18)
        };
        obstacles[i].active = true;
    }

    while (!WindowShouldClose())
    {
        float dt = GetFrameTime();

        // Acceleration and braking
        if (IsKeyDown(KEY_W) || IsKeyDown(KEY_UP))
            speed += 12.0f * dt;
        else
            speed -= 3.0f * dt;

        if (IsKeyDown(KEY_S) || IsKeyDown(KEY_DOWN))
            speed -= 15.0f * dt;

        if (speed < 0.0f) speed = 0.0f;
        if (speed > 35.0f) speed = 35.0f;

        // Steering
        steering = 0.0f;

        if (IsKeyDown(KEY_A) || IsKeyDown(KEY_LEFT))
            steering = -1.0f;

        if (IsKeyDown(KEY_D) || IsKeyDown(KEY_RIGHT))
            steering = 1.0f;

        carPosition.x += steering * (4.0f + speed * 0.15f) * dt;

        // Keep car on the road
        if (carPosition.x < -4.0f) carPosition.x = -4.0f;
        if (carPosition.x > 4.0f) carPosition.x = 4.0f;

        distance += speed * dt;

        // Move obstacles toward the player
        for (int i = 0; i < MAX_OBSTACLES; i++) {
            obstacles[i].position.z += speed * dt;

            // Reset obstacles after passing the player
            if (obstacles[i].position.z > 8.0f) {
                obstacles[i].position.z = -100.0f;
                obstacles[i].position.x =
                    (float)GetRandomValue(-4, 4);
                obstacles[i].active = true;
            }
        }

        // Camera follows the car
        camera.position = (Vector3){
            carPosition.x,
            6.0f,
            carPosition.z + 12.0f
        };

        camera.target = (Vector3){
            carPosition.x,
            0.0f,
            carPosition.z - 8.0f
        };

        BeginDrawing();
        ClearBackground((Color){ 100, 180, 240, 255 });

        BeginMode3D(camera);

        // Grass
        DrawCube(
            (Vector3){ 0.0f, -0.15f, -40.0f },
            200.0f, 0.2f, 200.0f,
            GREEN
        );

        // Road
        DrawCube(
            (Vector3){ 0.0f, 0.0f, -40.0f },
            10.0f, 0.1f, 200.0f,
            DARKGRAY
        );

        // Road boundaries
        DrawCube(
            (Vector3){ -5.0f, 0.1f, -40.0f },
            0.25f, 0.2f, 200.0f,
            WHITE
        );

        DrawCube(
            (Vector3){ 5.0f, 0.1f, -40.0f },
            0.25f, 0.2f, 200.0f,
            WHITE
        );

        // Moving road markings
        for (int i = 0; i < 25; i++) {
            float z = -100.0f + i * 8.0f
                    + fmodf(distance, 8.0f);

            DrawCube(
                (Vector3){ 0.0f, 0.08f, z },
                0.15f, 0.03f, 3.0f,
                YELLOW
            );
        }

        // Player car body
        DrawCube(
            (Vector3){
                carPosition.x,
                carPosition.y,
                carPosition.z
            },
            2.0f, 0.7f, 3.5f,
            RED
        );

        // Car cabin
        DrawCube(
            (Vector3){
                carPosition.x,
                carPosition.y + 0.55f,
                carPosition.z + 0.1f
            },
            1.35f, 0.65f, 1.65f,
            MAROON
        );

        // Wheels
        for (int side = -1; side <= 1; side += 2) {
            for (int frontBack = -1; frontBack <= 1; frontBack += 2) {
                DrawCube(
                    (Vector3){
                        carPosition.x + side * 1.0f,
                        carPosition.y - 0.2f,
                        carPosition.z + frontBack * 1.1f
                    },
                    0.35f, 0.45f, 0.7f,
                    BLACK
                );
            }
        }

        // Traffic obstacles
        for (int i = 0; i < MAX_OBSTACLES; i++) {
            if (obstacles[i].active) {
                DrawCube(
                    obstacles[i].position,
                    1.8f, 1.0f, 2.0f,
                    BLUE
                );

                DrawCubeWires(
                    obstacles[i].position,
                    1.8f, 1.0f, 2.0f,
                    WHITE
                );
            }
        }

        EndMode3D();

        // Game HUD
        DrawRectangle(15, 15, 270, 115,
                      (Color){ 0, 0, 0, 180 });

        DrawText("CYBER RACER 3D", 30, 25, 24, LIME);
        DrawText(TextFormat("Speed: %.0f km/h", speed * 4),
                 30, 60, 20, WHITE);

        DrawText(TextFormat("Distance: %.0f m", distance),
                 30, 90, 20, WHITE);

        DrawText("W/UP: Accelerate  S/DOWN: Brake",
                 15, screenHeight - 55, 18, WHITE);

        DrawText("A/LEFT and D/RIGHT: Steer",
                 15, screenHeight - 30, 18, WHITE);

        EndDrawing();
    }

    CloseWindow();

    return 0;
}