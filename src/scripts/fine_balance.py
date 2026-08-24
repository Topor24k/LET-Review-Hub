import os
import re
import json

def balance_all_files():
    for fn in os.listdir('src/data/exams'):
        if not fn.endswith('Exams.ts'): continue
        p = os.path.join('src/data/exams', fn)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()

        var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
        if not var_match: continue
        var_name = var_match.group(1)
        questions = json.loads(var_match.group(2))

        for q in questions:
            opts = q['options']
            lengths = [len(o['text']) for o in opts]
            max_l = max(lengths)
            min_l = min(lengths)

            # If the longest option is much longer than others, let's balance
            if max_l > 110 and max_l > 2.0 * min_l:
                for o in opts:
                    # If this option is the long one, shorten to concise core statement
                    if len(o['text']) == max_l:
                        t = o['text']
                        # remove secondary clauses after commas
                        t = re.sub(r',\s*(?:which|thereby|meaning|resulting|utilizing|preventing|leading|taking|providing|protecting|allowing|fostering|ensuring)\s+.*$', '.', t)
                        t = re.sub(r':\s*Always Observed.*$', '.', t) # for AO SO RO NO
                        t = re.sub(r'\s+', ' ', t).strip()
                        if not t.endswith('.'): t += '.'
                        o['text'] = t

        formatted = json.dumps(questions, indent=2, ensure_ascii=False)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted};\n")

balance_all_files()
print("Fine balancing completed.")
