import os
import re

exam_files = sorted([f for f in os.listdir('src/data/exams') if f.endswith('Exams.ts')])

def balance_question(q_dict):
    opts = q_dict['options']
    # Check lengths
    lengths = [len(o['text']) for o in opts]
    max_len = max(lengths)
    min_len = min(lengths)
    
    # If one option is > 2.2x the min length and > 100 chars, let's tighten long options or expand short ones
    for o in opts:
        text = o['text'].strip()
        # Tighten overly wordy introductory clauses
        text = re.sub(r'^(Because|Since)\s+it\s+(is|fosters|provides|ensures|requires)\s+', '', text, flags=re.IGNORECASE)
        text = re.sub(r'^(Involves|Consists of|Refers to|Is defined as)\s+', '', text, flags=re.IGNORECASE)
        # Clean double spaces
        text = re.sub(r'\s+', ' ', text).strip()
        if not text.endswith('.') and not text.endswith('?') and not text.endswith('!'):
            text += '.'
        o['text'] = text
        
    return q_dict

for ef in exam_files:
    p = os.path.join('src/data/exams', ef)
    with open(p, 'r', encoding='utf-8') as f:
        data = f.read()
        
    # parse JSON-like objects
    # write back balanced files
