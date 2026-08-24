import os
import re
import json

files = [
    'methodsAndStrategiesExams.ts',
    'techTeachingLearningExams.ts',
    'curriculumDevExams.ts',
    'buildingLiteraciesExams.ts',
    'inclusiveEducationExams.ts',
    'socialDimensionsExams.ts',
    'childAdolescentExams.ts',
    'assessmentExams.ts',
    'ethicsExams.ts',
    'artAppreciationExams.ts',
    'purposiveCommExams.ts',
    'understandingSelfExams.ts',
    'rizalExams.ts',
    'mathExams.ts',
    'stsExams.ts',
    'socialStudiesExams.ts',
    'filipinoExams.ts'
]

results = []
grand_total = 0

for pf in files:
    path = os.path.join('src/data/exams', pf)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    stems = re.findall(r'"question":\s*"([^"]*)"', content)
    topics = re.findall(r'"topicRef":\s*"([^"]*)"', content)
    answers = re.findall(r'"correctAnswer":\s*"([A-D])"', content)
    exps = re.findall(r'"explanation":\s*"([^"]*)"', content)
    
    unique_stems = set(s.lower().strip() for s in stems)
    unique_topics = set(topics)
    short_exps = [e for e in exps if len(e) < 40]
    
    dist = { 'A': answers.count('A'), 'B': answers.count('B'), 'C': answers.count('C'), 'D': answers.count('D') }
    
    results.append({
        'file': pf,
        'total': len(stems),
        'unique_stems': len(unique_stems),
        'unique_topics': len(unique_topics),
        'ans_dist': dist,
        'short_exps': len(short_exps)
    })
    grand_total += len(stems)

print("="*80)
print(f"COMPLETE AUDIT REPORT — ALL 17 SUBJECTS (GRAND TOTAL: {grand_total} ITEMS)")
print("="*80)
print(f"{'Subject File':32} | {'Total':5} | {'Unique Stems':12} | {'Unique Topics':13} | {'Answers (A/B/C/D)':17} | {'Short Exp':9}")
print("-"*80)
for r in results:
    dist_str = f"{r['ans_dist']['A']}/{r['ans_dist']['B']}/{r['ans_dist']['C']}/{r['ans_dist']['D']}"
    print(f"{r['file']:32} | {r['total']:<5} | {r['unique_stems']:<12} | {r['unique_topics']:<13} | {dist_str:17} | {r['short_exps']:<9}")
print("="*80)
