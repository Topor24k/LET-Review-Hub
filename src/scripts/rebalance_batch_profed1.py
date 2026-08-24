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
                    if 'tech' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " implemented through standard hardware utilities and basic instructional software tools"
                        else:
                            w_text += ", utilizing basic digital media platforms without modifying underlying pedagogical structures"
                    elif 'curriculum' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " designed according to traditional syllabus guidelines and linear sequence models"
                        else:
                            w_text += ", adhering strictly to conventional administrative outlines and prescribed textbook chapters"
                    elif 'literac' in file_path.lower():
                        if len(w_text.split()) <= 4:
                            w_text += " focusing on basic informational comprehension and procedural skill execution"
                        else:
                            w_text += ", emphasizing routine operational compliance without addressing deeper sociopolitical impacts"
                    else: # methods & strategies
                        if len(w_text.split()) <= 4:
                            w_text += " applied through traditional teacher-centered lectures and direct instructional pacing"
                        else:
                            w_text += ", maintaining conventional classroom seating and standardized drill-and-practice routines"
                
                w_text = re.sub(r'\s+', ' ', w_text).strip()
                if not w_text.endswith('.') and not w_text.endswith('?') and not w_text.endswith('!'):
                    w_text += '.'
                o['text'] = w_text

    formatted = json.dumps(questions, indent=2, ensure_ascii=False)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")
    print(f"Processed and balanced {os.path.basename(file_path)}")

files = [
    'src/data/exams/methodsAndStrategiesExams.ts',
    'src/data/exams/techTeachingLearningExams.ts',
    'src/data/exams/curriculumDevExams.ts',
    'src/data/exams/buildingLiteraciesExams.ts'
]
for f in files:
    equalize_questions(f)
