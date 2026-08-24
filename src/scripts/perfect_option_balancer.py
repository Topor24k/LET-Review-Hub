import os
import re
import json

files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

def perfect_balance():
    for fn in files:
        p = os.path.join('src/data/exams', fn)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()

        var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
        if not var_match: continue
        var_name = var_match.group(1)
        questions = json.loads(var_match.group(2))

        is_filipino = 'filipino' in fn.lower()

        for q in questions:
            opts = q['options']
            corr_key = q['correctAnswer']
            corr_opt = next((o for o in opts if o['key'] == corr_key), None)
            if not corr_opt: continue
            
            corr_len = len(corr_opt['text'])
            
            for o in opts:
                if o['key'] != corr_key:
                    w_len = len(o['text'])
                    if w_len < corr_len - 8:
                        w_text = o['text'].rstrip('.')
                        if is_filipino:
                            w_text += ", na may kaugnayan sa opisyal na konteksto at pangkalahatang tuntunin"
                        else:
                            if 'math' in fn.lower():
                                w_text += ", computed via standard arithmetic axioms and deductive proof steps"
                            elif 'sts' in fn.lower() or 'tech' in fn.lower():
                                w_text += ", following established technological standards and empirical criteria"
                            elif 'filipino' in fn.lower():
                                w_text += ", sang-ayon sa opisyal na ortograpiya at diskursong pang-akademiko"
                            else:
                                w_text += ", adhering to established institutional guidelines and academic conventions"
                        
                        w_text = re.sub(r'\s+', ' ', w_text).strip()
                        if not w_text.endswith('.'): w_text += '.'
                        o['text'] = w_text

        formatted = json.dumps(questions, indent=2, ensure_ascii=False)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")

perfect_balance()
print("Perfect balancing executed.")
