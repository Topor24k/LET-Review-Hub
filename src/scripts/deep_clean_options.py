import os
import re

exam_files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

def clean_opt(text):
    text = text.strip()
    
    # Remove trailing parentheticals that contain definitions or explanations
    # e.g. "Term (some long explanation inside parens)"
    # But keep essential acronyms if needed or clean them completely
    # If the parenthetical starts with lowercase or contains words like 'such as', 'e.g.', 'producing', 'direct', 'indicating', 'meaning', 'which', 'an initial', 'the item', 'serving', 'fostering', 'suggesting', 'an act', 'avoiding', 'high ', 'low ', 'rule ', 'we sink', 'from ', 'to '
    
    def repl_paren(m):
        inside = m.group(1).strip()
        # If inside is just acronym like (WW) or (RA 10533) or (PBL) or (ASD), check
        # But if inside is an explanation or definition, remove it!
        explanation_triggers = [
            'producing', 'direct', 'indicating', 'meaning', 'which', 'an initial', 
            'the item', 'serving', 'fostering', 'suggesting', 'an act', 'avoiding', 
            'high ', 'low ', 'rule ', 'we sink', 'from ', 'to ', 'all-weather', 
            'two-stringed', 'plucked', 'crafted', 'functional', 'monitoring', 
            'identifying', 'determining', 'assessing', 'adding', 'using', 'e.g.', 
            'such as', 'representing', 'frequen', 'ratio', 'distribution', 
            'Math &', 'MAPEH &', 'evaluating', 'deductive', 'inductive', 
            'we do', 'i do', 'you do', 'eyes in', 'managing', 'maintaining', 
            'bored', 'clearly', 'pausing', 'prompting', 'step-by-step', 
            'activating', 'redirect', 'satisfy', 'establishing', 'connecting', 
            'predicting', 'temporary', 'introductory', 'experiential', 
            'keeping', 'visual', 'applying', 'action', 'organized', 
            'critically', 'fals', 'nobody', 'nobody\'s', 'nobody', 
            'pook', 'layunin', 'wipe', 'apply', 'spread', 'open', 
            'close', 'middle', 'middle 50%', 'since', 'mod', 'not p', 
            'not q', 'not p or', 'not p and', 'standing', 'mere', 
            'bringing', '1 billionth', 'nanometer', 'approx', 'short-term', 
            'balance', 'long-term', 'infrastructure', 'adjudicate', 
            'binding', 'individual', 'who', 'how', 'what', 'why', 
            'where', 'when', 'underlying', 'origin'
        ]
        if any(trig in inside.lower() for trig in explanation_triggers) or len(inside) > 25:
            return ''
        return m.group(0)

    text = re.sub(r'\s*\(([^)]+)\)', repl_paren, text)
    
    # Clean up double spaces or trailing punctuation
    text = re.sub(r'\s+', ' ', text).strip()
    # Clean up dangling commas before period or at end
    text = re.sub(r',\s*\.', '.', text)
    text = re.sub(r',\s*$', '.', text)
    
    if text.endswith('..'):
        text = text[:-1]
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
        cleaned = clean_opt(orig_text)
        return f'"key": "{key}",\n        "text": "{cleaned}"'
        
    new_data = re.sub(r'"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"', opt_repl, data)
    
    with open(p, 'w', encoding='utf-8') as f:
        f.write(new_data)

print("Deep cleaning of options completed.")
