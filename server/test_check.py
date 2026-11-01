import re
import os

filepath = os.path.join(os.path.dirname(__file__), 'static', 'index.html')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's inspect the entire file for matching HTML / JSX tags
tokens = re.finditer(r'<(/?[a-zA-Z0-9_.]+)([^>]*)>', content)
stack = []
errors = []

for m in tokens:
    tag = m.group(1)
    attrs = m.group(2).strip()
    pos = m.start()
    lnum = content[:pos].count('\n') + 1

    # Skip comments or doctype
    if tag.startswith('!') or tag.startswith('?'):
        continue
    # Skip self-closing
    if attrs.endswith('/') or tag in ['input', 'img', 'br', 'hr', 'link', 'meta']:
        continue
    # In index.html, there's <script>...</script> and regular HTML
    if tag.startswith('/'):
        closing = tag[1:]
        if not stack:
            errors.append((lnum, f"Extra closing </{closing}>"))
        else:
            open_tag, open_line, open_str = stack.pop()
            if open_tag != closing:
                errors.append((lnum, f"Mismatched </{closing}>, expected </{open_tag}> from line {open_line} ({open_str})"))
    else:
        # Get line text
        line_str = content.split('\n')[lnum - 1].strip()[:60]
        stack.append((tag, lnum, line_str))

print(f"Total errors: {len(errors)}")
for err in errors:
    print(f"Line {err[0]}: {err[1]}")

print(f"\nTotal unclosed: {len(stack)}")
for s in stack:
    print(f"Line {s[1]}: <{s[0]}> -> {s[2]}")
