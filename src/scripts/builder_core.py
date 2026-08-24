import os
import json

def q(id_num, topic, stem, correct, wrongs, exp):
    items = [{'text': correct, 'isCorrect': True}, {'text': wrongs[0], 'isCorrect': False}, {'text': wrongs[1], 'isCorrect': False}, {'text': wrongs[2], 'isCorrect': False}]
    keys = ['A', 'B', 'C', 'D']
    offset = id_num % 4
    rotated = [items[(i + offset) % 4] for i in range(4)]
    correct_key = 'A'
    options = []
    for idx, item in enumerate(rotated):
        k = keys[idx]
        if item['isCorrect']: correct_key = k
        options.append({'key': k, 'text': item['text']})
    return {'id': id_num, 'topicRef': topic, 'question': stem, 'options': options, 'correctAnswer': correct_key, 'explanation': exp}

def save(filename, var_name, questions):
    content = f"import {{ ExamQuestion }} from '../../types';\n\nexport const {var_name}: ExamQuestion[] = " + json.dumps(questions, indent=2) + ";\n"
    with open(os.path.join('src/data/exams', filename), 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved {filename} with {len(questions)} items.")
