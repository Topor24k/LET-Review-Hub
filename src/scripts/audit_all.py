import os
import re

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

for pf in files:
    path = os.path.join('src/data/exams', pf)
    if not os.path.exists(path):
        print(f"MISSING: {pf}")
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    stems = re.findall(r'"question":\s*"([^"]*)"', content)
    unique_stems = set(s.lower().strip() for s in stems)
    print(f"{pf:32}: {len(stems)} items, {len(unique_stems)} unique stems")
