import os
import re

exam_files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

def clean_pass4(text):
    text = text.strip()
    
    def remove_all_parens(m):
        full = m.group(0).strip()
        inside = full.lstrip('(').rstrip(')').strip()
        # Keep if inside is purely a short math symbol like (A, B) or (p ^ q) or (mod m)
        if any(c in inside for c in ['^', 'v', '+', '-', '*', '/', '=', '<', '>', 'mod ']) and len(inside) < 15:
            return full
        return ''
        
    text = re.sub(r'\s*\([^)]*\)', remove_all_parens, text)
    
    # Clean up quotes inside options
    text = text.replace("('learning by doing')", "learning by doing")
    text = text.replace("'learning by doing'", "learning by doing")
    
    # Clean up double spaces or trailing punctuation
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r',\s*\.', '.', text)
    text = re.sub(r';\s*\.', '.', text)
    text = re.sub(r'\s*\.\s*\.', '.', text)
    if not text.endswith('.') and not text.endswith('?') and not text.endswith('!'):
        text += '.'
        
    return text

for ef in sorted(exam_files):
    p = os.path.join('src/data/exams', ef)
    with open(p, 'r', encoding='utf-8') as f:
        data = f.read()
        
    def opt_repl(match):
        key = match.group(1)
        orig_text = match.group(2)
        cleaned = clean_pass4(orig_text)
        return f'"key": "{key}",\n        "text": "{cleaned}"'
        
    new_data = re.sub(r'"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"', opt_repl, data)
    
    with open(p, 'w', encoding='utf-8') as f:
        f.write(new_data)

print("Pass 4 complete.")
