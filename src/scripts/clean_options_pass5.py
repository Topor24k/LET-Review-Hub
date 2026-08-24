import os
import re

exam_files = [f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')]

# Clean specific remaining parentheticals
fixes = {
    r'\$T = 65\$\(\$50 \+ 10\(1\.5\) = 65\)\.?': '$T = 65.$',
    r'Accuracy\(verifiability\)': 'Accuracy',
    r'Oral\(0-1\), Anal\(1-3\), Phallic\(3-6\), Latency\(6-12\), and Genital\.?': 'Oral, Anal, Phallic, Latency, and Genital.',
    r'Autonomy\(choice/agency\)': 'Autonomy',
    r'Cognitive\(Knowledge/Head\), Affective, and Psychomotor\.?': 'Cognitive, Affective, and Psychomotor.',
    r'next\(vertical\)': 'next',
    r'Resource Room\(Pull-out\)': 'Resource Room',
    r'landmasses\(vertices\)': 'landmasses',
    r'210 ways\(10! / \(4! \* 6!\) =\(10 \* 9 \* 8 \* 7\) /\(4 \* 3 \* 2 \* 1\) = 210\)\.?': '210 ways.',
    r'The Interquartile Range\(IQR = Q3 - Q1\), containing the middle 50% of the data values\.?': 'The Interquartile Range, containing the middle 50% of the data values.',
    r'Critical\(Evaluative\) Listening\.?': 'Critical Listening.',
    r'Functional\(Skills-Based\) Resume\.?': 'Functional Resume.'
}

for ef in sorted(exam_files):
    p = os.path.join('src/data/exams', ef)
    with open(p, 'r', encoding='utf-8') as f:
        data = f.read()
        
    for pat, rep in fixes.items():
        data = re.sub(pat, rep, data)
        
    with open(p, 'w', encoding='utf-8') as f:
        f.write(data)

print("Pass 5 specific option cleanup completed.")
