import os
import re
import json

def equalize_questions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not var_match: return
    var_name = var_match.group(1)
    questions = json.loads(var_match.group(2))

    for q in questions:
        opts = q['options']
        corr_key = q['correctAnswer']
        corr_opt = next((o for o in opts if o['key'] == corr_key), None)
        if not corr_opt: continue

        target_len = len(corr_opt['text'])
        
        # If correct answer is much longer than others, expand short distractors or trim correct
        for o in opts:
            if o['key'] != corr_key:
                w_text = o['text'].rstrip('.')
                curr_len = len(w_text)
                gap = target_len - curr_len
                
                # If distractor is significantly shorter than correct answer, expand with plausible academic qualifiers
                if gap > 20:
                    # Enrich depending on context
                    if len(w_text.split()) <= 4:
                        # Short phrase/term - expand with plausible academic context
                        if 'law' in w_text.lower() or 'statute' in w_text.lower():
                            w_text += " enacted through standard legislative procedures and judicial statutory precedents"
                        elif 'moral' in w_text.lower() or 'ethical' in w_text.lower():
                            w_text += " derived strictly from prevailing societal norms and traditional customary practices"
                        elif 'art' in w_text.lower() or 'aesthetic' in w_text.lower():
                            w_text += " evaluated solely through established historical conventions and decorative standards"
                        elif 'culture' in w_text.lower() or 'social' in w_text.lower():
                            w_text += " governed entirely by dominant institutional frameworks and peer expectations"
                        elif 'psychological' in w_text.lower() or 'self' in w_text.lower():
                            w_text += " shaped exclusively by unconscious biological impulses and early childhood conditioning"
                        elif 'theory' in w_text.lower() or 'concept' in w_text.lower():
                            w_text += " operating under traditional empirical paradigms and formal theoretical models"
                        elif 'stage' in w_text.lower() or 'level' in w_text.lower():
                            w_text += " emphasizing compliance with external authority figures and institutional mandates"
                        else:
                            w_text += " based primarily upon standard historical interpretations and documented observations"
                    else:
                        # Moderate phrase - add plausible contextual justification
                        if not any(conj in w_text.lower() for conj in ['because', 'leading to', 'ensuring', 'derived from', 'governed by', 'operating under']):
                            w_text += ", operating under conventional assumptions and standard institutional guidelines"
                
                # Ensure proper punctuation
                w_text = re.sub(r'\s+', ' ', w_text).strip()
                if not w_text.endswith('.') and not w_text.endswith('?') and not w_text.endswith('!'):
                    w_text += '.'
                o['text'] = w_text

    formatted = json.dumps(questions, indent=2, ensure_ascii=False)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")
    print(f"Processed and balanced {os.path.basename(file_path)}")

files = [
    'src/data/exams/ethicsExams.ts',
    'src/data/exams/artAppreciationExams.ts',
    'src/data/exams/purposiveCommExams.ts',
    'src/data/exams/understandingSelfExams.ts',
    'src/data/exams/rizalExams.ts'
]
for f in files:
    equalize_questions(f)
