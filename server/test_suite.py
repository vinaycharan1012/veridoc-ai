import urllib.request
import json
import sys

def test_url(method, path, data=None):
    url = f"http://127.0.0.1:8000{path}"
    req = urllib.request.Request(url, method=method)
    req.add_header("Content-Type", "application/json")
    body = json.dumps(data).encode("utf-8") if data else None
    try:
        with urllib.request.urlopen(req, data=body, timeout=5) as resp:
            content_type = resp.headers.get("Content-Type", "")
            raw = resp.read()
            if "application/json" in content_type:
                res_data = json.loads(raw.decode("utf-8"))
            else:
                res_data = len(raw)
            print(f"PASS [{resp.status}] {method} {path}")
            return True, res_data
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8", errors="ignore")[:120]
        print(f"FAIL [{e.code}] {method} {path} - {err_msg}")
        return False, None
    except Exception as ex:
        print(f"ERROR {method} {path} - {ex}")
        return False, None

print("=== VERIFYING VERIDOC ENDPOINTS ===")
tests = [
    ("GET", "/"),
    ("GET", "/manifest.json"),
    ("GET", "/api/health"),
    ("GET", "/api/dashboard/stats"),
    ("GET", "/api/documents"),
    ("GET", "/api/applications"),
    ("GET", "/api/compliance-rules"),
    ("GET", "/api/fraud/intelligence"),
    ("GET", "/api/template/compare"),
    ("GET", "/api/audit-logs"),
    ("POST", "/api/auth/login", {"email": "officer@veridoc.gov", "password": "password123"}),
    ("POST", "/api/digilocker/verify", {"doc_type": "aadhaar", "identifier": "9812-4412-8801"}),
    ("POST", "/api/digilocker/fetch", {"doc_type": "pan", "identifier": "ABCDE1234F"}),
    ("POST", "/api/digilocker/pull", {"doc_type": "degree", "identifier": "DEG-2024-8891"}),
    ("POST", "/api/biometrics/verify", {"mode": "match"}),
    ("POST", "/api/compliance/audit", {"category": "Land Registry & Infrastructure Deed"}),
    ("POST", "/api/chat", {"message": "What are the missing fields in APH?"}),
    ("POST", "/api/ai/chat", {"message": "Explain biometric verification"}),
    ("POST", "/api/ai/regulatory-assistant", {"message": "How does blockchain anchoring work?"}),
    ("GET", "/api/blockchain/verify/1"),
    ("POST", "/api/documents/demo", {}),
    ("POST", "/api/applications/daily-refresh", {}),
]

passed = 0
failed = 0
for item in tests:
    if len(item) == 2:
        m, p = item
        d = None
    else:
        m, p, d = item
    ok, res = test_url(m, p, d)
    if ok:
        passed += 1
    else:
        failed += 1

# Now test dynamic endpoints for document and application
print("\n=== TESTING DYNAMIC RECORD ENDPOINTS ===")
ok, apps = test_url("GET", "/api/applications")
if ok and isinstance(apps, list) and len(apps) > 0:
    first_app_id = apps[0]["id"]
    ok1, _ = test_url("GET", f"/api/applications/{first_app_id}")
    ok2, _ = test_url("POST", f"/api/applications/{first_app_id}/decision", {"decision": "VERIFIED", "remarks": "Automated verification complete"})
    if ok1: passed += 1
    else: failed += 1
    if ok2: passed += 1
    else: failed += 1

ok, docs = test_url("GET", "/api/documents")
if ok and isinstance(docs, list) and len(docs) > 0:
    first_doc_id = docs[0]["id"]
    ok3, _ = test_url("GET", f"/api/documents/{first_doc_id}")
    ok4, _ = test_url("GET", f"/api/documents/{first_doc_id}/certificate")
    if ok3: passed += 1
    else: failed += 1
    if ok4: passed += 1
    else: failed += 1

print(f"\n==========================================")
print(f"RESULTS: {passed} PASSED, {failed} FAILED (TOTAL {passed + failed})")
print(f"==========================================")
if failed > 0:
    sys.exit(1)
