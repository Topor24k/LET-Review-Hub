import os
import re

files = [
    'artAppreciationExams.ts',
    'purposiveCommExams.ts',
    'understandingSelfExams.ts',
    'rizalExams.ts',
    'mathExams.ts',
    'stsExams.ts',
    'socialStudiesExams.ts',
    'filipinoExams.ts'
]

for pf in files:
    path = os.path.join('src/data/exams', pf)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    topics = re.findall(r'"topicRef":\s*"([^"]*)"', content)
    unique_topics = set(topics)
    print(f"{pf:28}: {len(topics)} total, {len(unique_topics)} unique topics")
