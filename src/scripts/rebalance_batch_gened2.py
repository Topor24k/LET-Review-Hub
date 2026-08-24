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

    is_filipino = 'filipino' in file_path.lower()

    for q in questions:
        opts = q['options']
        corr_key = q['correctAnswer']
        corr_opt = next((o for o in opts if o['key'] == corr_key), None)
        if not corr_opt: continue

        target_len = len(corr_opt['text'])
        
        for o in opts:
            if o['key'] != corr_key:
                w_text = o['text'].rstrip('.')
                curr_len = len(w_text)
                gap = target_len - curr_len
                
                if gap > 20:
                    if is_filipino:
                        if len(w_text.split()) <= 4:
                            w_text += " batay sa tradisyonal na pamantayang panggramatika at kontekstong kultural"
                        else:
                            w_text += ", na nakasalig sa pangkalahatang panuntunan ng lingguwistika at komunikasyon"
                    else:
                        if 'science' in w_text.lower() or 'technology' in w_text.lower() or 'sts' in file_path.lower():
                            if len(w_text.split()) <= 4:
                                w_text += " analyzed through standard empirical methodologies and technological frameworks"
                            else:
                                w_text += ", operating under conventional scientific models and technological assumptions"
                        elif 'global' in w_text.lower() or 'state' in w_text.lower() or 'social' in file_path.lower():
                            if len(w_text.split()) <= 4:
                                w_text += " influenced primarily by geopolitical dynamics and macroeconomic institutional policies"
                            else:
                                w_text += ", shaped by prevailing international agreements and multilateral conventions"
                        elif 'math' in file_path.lower():
                            if len(w_text.split()) <= 4:
                                w_text += " derived using standard algebraic transformations and linear computational algorithms"
                            else:
                                w_text += ", following classic geometric properties and arithmetic theorems"
                        else:
                            w_text += " based upon standard empirical classifications and historical documentation"
                
                w_text = re.sub(r'\s+', ' ', w_text).strip()
                if not w_text.endswith('.') and not w_text.endswith('?') and not w_text.endswith('!'):
                    w_text += '.'
                o['text'] = w_text

    formatted = json.dumps(questions, indent=2, ensure_ascii=False)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")
    print(f"Processed and balanced {os.path.basename(file_path)}")

files = [
    'src/data/exams/mathExams.ts',
    'src/data/exams/stsExams.ts',
    'src/data/exams/socialStudiesExams.ts',
    'src/data/exams/filipinoExams.ts'
]
for f in files:
    equalize_questions(f)
