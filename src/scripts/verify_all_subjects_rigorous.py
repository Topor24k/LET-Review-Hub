import os
import re

files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

print(f"Rigorous verification across {len(files)} files...")

all_stems = {}
total_questions = 0
suspicious_options = []

for pf in files:
    path = os.path.join('src/data/exams', pf)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # parse questions
    m = re.findall(r'\{\s*"id":\s*(\d+),\s*"topicRef":\s*"([^"]*)",\s*"question":\s*"([^"]*)",\s*"options":\s*\[(.*?)\]\s*,\s*"correctAnswer":\s*"([A-D])",\s*"explanation":\s*"([^"]*)"', content, re.DOTALL)
    
    stems_in_file = set()
    for qid, topic, question, opts_str, ans, exp in m:
        total_questions += 1
        norm_stem = question.lower().strip()
        if norm_stem in stems_in_file:
            print(f"DUPLICATE IN FILE {pf}: Q{qid} - {question[:60]}")
        stems_in_file.add(norm_stem)
        
        opts = re.findall(r'\{\s*"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"\s*\}', opts_str)
        opt_lengths = [len(t) for k, t in opts]
        avg_len = sum(opt_lengths) / len(opt_lengths) if opt_lengths else 0
        
        for k, t in opts:
            # check if option has giveaway parenthetical
            if '(' in t and ')' in t and not any(math_c in t for math_c in ['sqrt', '^', 'v', '+', '-', '/', '=']):
                suspicious_options.append((pf, qid, k, t, "Contains non-math parenthesis"))
            # check if option is > 3x longer than others
            if len(t) > 120 and len(t) > 3 * min(opt_lengths):
                suspicious_options.append((pf, qid, k, t, f"Unequal length ({len(t)} vs avg {avg_len:.1f})"))

print(f"Total files checked: {len(files)}")
print(f"Total questions verified: {total_questions} (Expected: 1275)")
print(f"Total suspicious options found: {len(suspicious_options)}")
for s in suspicious_options[:20]:
    print(f"  [{s[0]} Q{s[1]} {s[2]}]: {s[3]} --> Reason: {s[4]}")
