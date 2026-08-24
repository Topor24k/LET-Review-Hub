import json
import os

def create_q(q_id, topic, question, correct, wrongs, exp):
    items = [
        {"text": correct, "isCorrect": True},
        {"text": wrongs[0], "isCorrect": False},
        {"text": wrongs[1], "isCorrect": False},
        {"text": wrongs[2], "isCorrect": False}
    ]
    keys = ['A', 'B', 'C', 'D']
    offset = q_id % 4
    rotated = [items[(i + offset) % 4] for i in range(4)]
    correct_key = 'A'
    options = []
    for idx, item in enumerate(rotated):
        k = keys[idx]
        if item["isCorrect"]:
            correct_key = k
        options.append({"key": k, "text": item["text"]})
    return {
        "id": q_id,
        "topicRef": topic,
        "question": question,
        "options": options,
        "correctAnswer": correct_key,
        "explanation": exp
    }

print("Generator engine ready.")
