import os
import re
import json

exam_files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

def clean_option_text(text):
    text = text.strip()
    
    # Clean leading/trailing quotes
    if text.startswith('"') and text.endswith('"'):
        text = text[1:-1].strip()
        
    # Check if option has an explanatory parenthetical like "Term (definition / explanation)"
    # Examples:
    # "Utilitarianism (producing the greatest preventive health benefit for the largest number of citizens)" -> "Utilitarianism"
    # "Tabúngaw (functional, weatherproof all-weather hat crafted from a polished upo gourd)" -> "Tabúngaw"
    # "Kudyapi (two-stringed fretted boat lute)" -> "Kudyapi"
    # "Substitution (direct tech substitute with no functional change)" -> "Substitution"
    # "Positive Interdependence (we sink or swim together)" -> "Positive Interdependence"
    # "Level 6 (Baccalaureate degree level)" -> "Level 6"
    # "Deductive approach (rule to examples)" -> "Deductive approach"
    # "Inductive approach (examples to general principle)" -> "Inductive approach"
    # "Pre-Conventional Stage 1 (Punishment and Obedience)" -> "Pre-Conventional Stage 1"
    # "Authoritative Parenting (high warmth, firm boundaries)" -> "Authoritative Parenting"
    # "68% (within ±1 standard deviation)" -> "68.26%"
    
    # Match patterns like: "Word/Phrase (long definition text)" where word/phrase is short (< 40 chars) and inside parens is an explanation
    m = re.match(r'^([A-Za-z0-9\s,\'’\-\/]{2,45})\s*\((?:e\.g\.,\s*)?([^)]+)\)\.?$', text)
    if m:
        head = m.group(1).strip()
        inside = m.group(2).strip()
        # If head is a clear term like "Utilitarianism", "Tabungaw", "Level 6", "Tier 1", "Stage 2"
        # We can clean it to head or keep it clean
        # Let's ensure head ends with clean punctuation
        if len(head) > 1 and not head.lower().startswith('such as') and not head.lower().startswith('because'):
            return head + '.' if not head.endswith('.') else head
            
    # Also clean expressions where inside parens is an explanation after a comma or period
    # e.g., "Post-and-lintel (trabeated) construction, where horizontal beams rest on vertical columns."
    # -> "Post-and-lintel (trabeated) construction."
    if ', where ' in text:
        text = text.split(', where ')[0].strip() + '.'
    if ', meaning ' in text:
        text = text.split(', meaning ')[0].strip() + '.'
    if ', which means ' in text:
        text = text.split(', which means ')[0].strip() + '.'
    if ', as seen in ' in text:
        text = text.split(', as seen in ')[0].strip() + '.'
        
    return text

print(f"Checking {len(exam_files)} files...")
for ef in exam_files:
    p = os.path.join('src/data/exams', ef)
    with open(p, 'r', encoding='utf-8') as f:
        data = f.read()
    
    # regex replace options
    def opt_repl(match):
        key = match.group(1)
        orig_text = match.group(2)
        cleaned = clean_option_text(orig_text)
        return f'"key": "{key}",\n        "text": "{cleaned}"'
        
    new_data = re.sub(r'"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"', opt_repl, data)
    
    with open(p, 'w', encoding='utf-8') as f:
        f.write(new_data)
        
print("Finished basic cleaning.")
