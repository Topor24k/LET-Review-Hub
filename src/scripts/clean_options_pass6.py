import os
import re

fixes = {
    r'\$T = 65\$\(\$50 \+ 10\(1\.5\) = 65\)\.?': '$T = 65.$',
    r'communist rebellion\(CPP-NPA\)': 'communist rebellion',
    r'fertility rates\(TFR < 2\.1\)': 'fertility rates',
    r'working-age population\(15-64\)': 'working-age population',
    r'Spirited\(passions/will\)': 'Spirited',
    r'someone\(love\)': 'someone',
    r'Common Humanity\(vs isolation\)': 'Common Humanity'
}

for ef in os.listdir('src/data/exams'):
    if ef.endswith('Exams.ts'):
        p = os.path.join('src/data/exams', ef)
        with open(p, 'r', encoding='utf-8') as f:
            data = f.read()
        for pat, rep in fixes.items():
            data = re.sub(pat, rep, data)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(data)

print("Pass 6 complete.")
