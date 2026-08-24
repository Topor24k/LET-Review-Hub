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
        
        for o in opts:
            if o['key'] != corr_key:
                w_text = o['text'].rstrip('.')
                curr_len = len(w_text)
                gap = target_len - curr_len
                
                if gap > 20:
                    if 'inclusive' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " provided within segregated clinical environments under standardized medical supervision"
                        else:
                            w_text += ", emphasizing separate remedial placement without modifying general classroom instruction"
                    elif 'social' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " shaped by macroeconomic institutional hierarchies and historical class stratification"
                        else:
                            w_text += ", reproducing established social class inequalities and conventional power dynamics"
                    elif 'child' in file_path.lower() or 'adolescent' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " governed by maturational biological schedules and traditional developmental benchmarks"
                        else:
                            w_text += ", reflecting typical sensorimotor behaviors and chronological milestone expectations"
                    else: # assessment
                        if len(w_text.split()) <= 4:
                            w_text += " evaluated through standardized normative percentiles and traditional scoring tables"
                        else:
                            w_text += ", measuring recall accuracy through conventional multiple-choice testing instruments"
                
                w_text = re.sub(r'\s+', ' ', w_text).strip()
                if not w_text.endswith('.') and not w_text.endswith('?') and not w_text.endswith('!'):
                    w_text += '.'
                o['text'] = w_text

    formatted = json.dumps(questions, indent=2, ensure_ascii=False)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")
    print(f"Processed and balanced {os.path.basename(file_path)}")

files = [
    'src/data/exams/inclusiveEducationExams.ts',
    'src/data/exams/socialDimensionsExams.ts',
    'src/data/exams/childAdolescentExams.ts',
    'src/data/exams/assessmentExams.ts'
]
for f in files:
    equalize_questions(f)
