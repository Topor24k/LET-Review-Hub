import os
import re

exam_files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

def clean_pass3(text):
    text = text.strip()
    
    # 1. Remove any trailing (Parenthetical) at the end of the sentence
    # e.g. "Some text here (Term)." -> "Some text here."
    # e.g. "$T = 65$ ($50 + 10(1.5) = 65$)." -> "$T = 65$."
    # e.g. "Mean < Median < Mode (Negatively Skewed)." -> "Mean < Median < Mode."
    # e.g. "95.44% (within \pm 2\sigma)." -> "95.44%."
    text = re.sub(r'\s*\([^)]*\)\s*\.?$', '.', text)
    
    # 2. Remove parentheticals following acronyms or terms if they define the term
    # e.g. "Actual (tactile) texture" -> "Actual tactile texture" or "Tactile texture"
    text = re.sub(r'Actual\s*\(tactile\)', 'Tactile', text, flags=re.IGNORECASE)
    text = re.sub(r'Implied\s*\(visual\)', 'Visual', text, flags=re.IGNORECASE)
    text = re.sub(r'Post-and-lintel\s*\(trabeated\)', 'Post-and-lintel', text, flags=re.IGNORECASE)
    text = re.sub(r'Oil\s*\(grease\)', 'Oil', text, flags=re.IGNORECASE)
    text = re.sub(r'Written Work\s*\(WW\)', 'Written Work', text)
    text = re.sub(r'Performance Tasks\s*\(PT\)', 'Performance Tasks', text)
    text = re.sub(r'Quarterly Assessment\s*\(QA\)', 'Quarterly Assessment', text)
    text = re.sub(r'Always Observed\s*\(AO\)', 'Always Observed', text)
    text = re.sub(r'Sometimes Observed\s*\(SO\)', 'Sometimes Observed', text)
    text = re.sub(r'Rarely Observed\s*\(RO\)', 'Rarely Observed', text)
    text = re.sub(r'Not Observed\s*\(NO\)', 'Not Observed', text)
    text = re.sub(r'Intended Learning Outcomes\s*\(ILOs\)', 'Intended Learning Outcomes', text)
    text = re.sub(r'Teaching and Learning Activities\s*\(TLAs\)', 'Teaching and Learning Activities', text)
    text = re.sub(r'Assessment Tasks\s*\(ATs\)', 'Assessment Tasks', text)
    
    # Clean up double spaces or trailing punctuation
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r',\s*\.', '.', text)
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
        cleaned = clean_pass3(orig_text)
        return f'"key": "{key}",\n        "text": "{cleaned}"'
        
    new_data = re.sub(r'"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"', opt_repl, data)
    
    with open(p, 'w', encoding='utf-8') as f:
        f.write(new_data)

print("Pass 3 option cleanup complete.")
