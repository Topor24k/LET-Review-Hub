import os
import re
import json

files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

samples = []

for fn in files:
    p = os.path.join('src/data/exams', fn)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not var_match: continue
    questions = json.loads(var_match.group(2))

    for q in questions:
        opts = q['options']
        corr_key = q['correctAnswer']
        corr_opt = next((o for o in opts if o['key'] == corr_key), None)
        if not corr_opt: continue
        
        lens = [len(o['text']) for o in opts]
        corr_len = len(corr_opt['text'])
        wrong_lens = [len(o['text']) for o in opts if o['key'] != corr_key]
        avg_w = sum(wrong_lens) / len(wrong_lens) if wrong_lens else 0
        
        if corr_len > avg_w + 30:
            samples.append({
                'file': fn,
                'id': q['id'],
                'stem': q['question'],
                'corr': corr_opt['text'],
                'corr_len': corr_len,
                'wrongs': [o['text'] for o in opts if o['key'] != corr_key],
                'wrong_lens': wrong_lens
            })

print(f"Found {len(samples)} questions needing length balancing.")
print("\nSample 1:", samples[0]['file'], f"Q{samples[0]['id']}")
print("  Stem:", samples[0]['stem'])
print(f"  Correct ({samples[0]['corr_len']} chars):", samples[0]['corr'])
print("  Wrongs:", samples[0]['wrongs'])
print("  Wrong lengths:", samples[0]['wrong_lens'])

print("\nSample 2:", samples[10]['file'], f"Q{samples[10]['id']}")
print("  Stem:", samples[10]['stem'])
print(f"  Correct ({samples[10]['corr_len']} chars):", samples[10]['corr'])
print("  Wrongs:", samples[10]['wrongs'])
print("  Wrong lengths:", samples[10]['wrong_lens'])
