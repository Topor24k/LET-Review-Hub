import os
import re
import json

files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

for fn in files:
    p = os.path.join('src/data/exams', fn)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not var_match: continue
    questions = json.loads(var_match.group(2))

    corr_longest = 0
    max_gap_list = []
    for q in questions:
        opts = q['options']
        corr_key = q['correctAnswer']
        corr_opt = next((o for o in opts if o['key'] == corr_key), None)
        if not corr_opt: continue
        
        lens = [len(o['text']) for o in opts]
        corr_len = len(corr_opt['text'])
        max_gap = max(lens) - min(lens)
        max_gap_list.append(max_gap)
        if corr_len == max(lens) and max_gap > 10:
            corr_longest += 1

    avg_gap = sum(max_gap_list) / len(max_gap_list) if max_gap_list else 0
    print(f"{fn:30} | Total: {len(questions)} | Correct is longest (>10 gap): {corr_longest:2} | Avg Gap: {avg_gap:.1f}")
