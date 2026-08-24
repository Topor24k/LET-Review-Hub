import os
import re
import json

exam_files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

def equalize_file(filename):
    path = os.path.join('src/data/exams', filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the exported variable name
    var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not var_match:
        print(f"Could not match variable in {filename}")
        return

    var_name = var_match.group(1)
    raw_json = var_match.group(2)

    try:
        questions = json.loads(raw_json)
    except Exception as e:
        print(f"JSON parse error in {filename}: {e}")
        return

    for q in questions:
        opts = q['options']
        
        # 1. Clean any trailing explanations or uneven wording from options
        for opt in opts:
            t = opt['text'].strip()
            # Clean common trailing definition patterns
            t = re.sub(r'\s*\([^)]*\)', '', t) # remove all parens
            t = re.sub(r',\s*which\s+.*$', '.', t)
            t = re.sub(r',\s*meaning\s+.*$', '.', t)
            t = re.sub(r',\s*allowing\s+.*$', '.', t)
            t = re.sub(r',\s*resulting\s+in\s+.*$', '.', t)
            t = re.sub(r',\s*fostering\s+.*$', '.', t)
            t = re.sub(r',\s*serving\s+to\s+.*$', '.', t)
            t = re.sub(r',\s*aimed\s+at\s+.*$', '.', t)
            t = re.sub(r',\s*characterized\s+by\s+.*$', '.', t)
            
            # Clean double spaces and punctuation
            t = re.sub(r'\s+', ' ', t).strip()
            t = re.sub(r'[\.,;\s]+$', '', t)
            if not t.endswith('?') and not t.endswith('!'):
                t += '.'
            opt['text'] = t

        # 2. Check if all options are short terms (e.g. all < 40 chars)
        lengths = [len(opt['text']) for opt in opts]
        max_l = max(lengths)
        min_l = min(lengths)
        
        # If one option is > 2.5x longer than the minimum, tighten the longest option
        if max_l > 2.5 * min_l and max_l > 80:
            for opt in opts:
                if len(opt['text']) == max_l:
                    # tighten by trimming to first clause or main phrase if compound
                    parts = re.split(r'[,;]\s*(?:and|while|where|such as|including)\s+', opt['text'])
                    if len(parts) > 1 and len(parts[0]) > 20:
                        trimmed = parts[0].strip()
                        if not trimmed.endswith('.'): trimmed += '.'
                        opt['text'] = trimmed

    # Re-serialize
    formatted_json = json.dumps(questions, indent=2, ensure_ascii=False)
    new_file_content = f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = {formatted_json};\n"

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_file_content)

    print(f"Successfully equalized and formatted {filename} ({len(questions)} items)")

for ef in exam_files:
    equalize_file(ef)

print("All 17 files equalized successfully.")
