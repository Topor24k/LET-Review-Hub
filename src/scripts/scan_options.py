import os
import re
import json

files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

issues = []

for pf in sorted(files):
    path = os.path.join('src/data/exams', pf)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # parse questions
    m = re.findall(r'\{\s*"id":\s*(\d+),\s*"topicRef":\s*"([^"]*)",\s*"question":\s*"([^"]*)",\s*"options":\s*\[(.*?)\]\s*,\s*"correctAnswer":\s*"([A-D])",\s*"explanation":\s*"([^"]*)"', content, re.DOTALL)
    
    for item in m:
        qid, topic, question, opts_str, ans, exp = item
        opts = re.findall(r'\{\s*"key":\s*"([A-D])",\s*"text":\s*"([^"]*)"\s*\}', opts_str)
        
        # Check for parentheses in options
        for key, text in opts:
            if '(' in text and ')' in text:
                issues.append((pf, qid, key, text, [t for k, t in opts]))

print(f"Total options with parentheses: {len(issues)}")
for pf, qid, key, text, all_opts in issues[:20]:
    print(f"[{pf} Q{qid} {key}]: {text}")
