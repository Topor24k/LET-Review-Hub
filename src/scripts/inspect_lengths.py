import os
import re
import json

exam_files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

total_q = 0
correct_is_longest_count = 0
large_diff_count = 0

for fn in exam_files:
    p = os.path.join('src/data/exams', fn)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    var_match = re.search(r'export const ([A-Z_]+):\s*ExamQuestion\[\]\s*=\s*(\[.*\]);', content, re.DOTALL)
    if not var_match: continue
    questions = json.loads(var_match.group(2))

    for q in questions:
        total_q += 1
        opts = q['options']
        corr_key = q['correctAnswer']
        corr_opt = next((o for o in opts if o['key'] == corr_key), None)
        if not corr_opt: continue
        
        lens = [len(o['text']) for o in opts]
        corr_len = len(corr_opt['text'])
        max_len = max(lens)
        min_len = min(lens)
        
        if corr_len == max_len and corr_len > min_len + 15:
            correct_is_longest_count += 1
            if corr_len > min_len + 30:
                large_diff_count += 1

print(f"Total questions analyzed: {total_q}")
print(f"Questions where correct answer is the longest by >15 chars: {correct_is_longest_count}")
print(f"Questions where correct answer is the longest by >30 chars: {large_diff_count}")
