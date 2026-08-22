import { ExamQuestion } from '../../types';

export const MATH_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "id": 1,
    "topicRef": "Patterns in Nature: The Fibonacci Sequence",
    "question": "What is the 8th term of the standard Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, ...?",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "34"
      },
      {
        "key": "C",
        "text": "21 ((8 + 13 = 21))"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In Fibonacci, each term is the sum of the two preceding terms: (F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, F_6=8, F_7=13, F_8=21)."
  },
  {
    "id": 2,
    "topicRef": "Patterns in Nature: The Golden Ratio (Phi)",
    "question": "The Golden Ratio ((phi = \frac{1 + sqrt{5}}{2})), found in sunflower seed spirals, pinecones, and classical architecture, is approximately equal to:",
    "options": [
      {
        "key": "A",
        "text": "3.141"
      },
      {
        "key": "B",
        "text": "1.618"
      },
      {
        "key": "C",
        "text": "0.577"
      },
      {
        "key": "D",
        "text": "2.718"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Golden Ratio ((phi)) is approximately 1.6180339887... representing divine proportion in mathematics and nature."
  },
  {
    "id": 3,
    "topicRef": "Set Theory: Cardinality & Operations",
    "question": "Given Set (A = {1, 2, 3, 4, 5}) and Set (B = {4, 5, 6, 7}), what is the Intersection (A cap B)?",
    "options": [
      {
        "key": "A",
        "text": "(emptyset)"
      },
      {
        "key": "B",
        "text": "({1, 2, 3})"
      },
      {
        "key": "C",
        "text": "({1, 2, 3, 4, 5, 6, 7})"
      },
      {
        "key": "D",
        "text": "({4, 5})"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The intersection (A cap B) consists of elements present in both sets simultaneously (elements 4 and 5)."
  },
  {
    "id": 4,
    "topicRef": "Mathematical Logic: Conditional Statement (p -> q)",
    "question": "In formal symbolic logic, the conditional statement (p \to q) is FALSE ONLY when:",
    "options": [
      {
        "key": "A",
        "text": "(p) is True and (q) is False ((T \to F equiv F))"
      },
      {
        "key": "B",
        "text": "(p) is False and (q) is True"
      },
      {
        "key": "C",
        "text": "(p) is False and (q) is False"
      },
      {
        "key": "D",
        "text": "(p) is True and (q) is True"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A conditional implication (p \to q) is false strictly when a true antecedent leads to a false consequent; in all other cases, it is logically true."
  },
  {
    "id": 5,
    "topicRef": "Logic: Contrapositive",
    "question": "What is the logically equivalent 'Contrapositive' of the conditional statement 'If it is raining, then the ground is wet' ((p \to q))?",
    "options": [
      {
        "key": "A",
        "text": "'It is raining and the ground is dry'"
      },
      {
        "key": "B",
        "text": "'If the ground is not wet, then it is not raining' ((sim q \to sim p))"
      },
      {
        "key": "C",
        "text": "'If it is not raining, then the ground is not wet' (Inverse)"
      },
      {
        "key": "D",
        "text": "'If the ground is wet, then it is raining' (Converse)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A conditional statement (p \to q) is logically equivalent only to its contrapositive (sim q \to sim p)."
  },
  {
    "id": 6,
    "topicRef": "Problem Solving: Polya's 4-Step Model",
    "question": "What are the four sequential steps in George Polya's classic Problem Solving framework?",
    "options": [
      {
        "key": "A",
        "text": "1. Memorize -> 2. Drill -> 3. Test -> 4. Forget"
      },
      {
        "key": "B",
        "text": "1. Formula -> 2. Substitute -> 3. Solve -> 4. Erase"
      },
      {
        "key": "C",
        "text": "1. Understand the Problem -> 2. Devise a Plan -> 3. Carry Out the Plan -> 4. Look Back (Review/Reflect)"
      },
      {
        "key": "D",
        "text": "1. Read -> 2. Guess -> 3. Calculate -> 4. Submit"
      }
    ],
    "correctAnswer": "C",
    "explanation": "George Polya's *How to Solve It* (1945) established the universal heuristic: Understand -> Plan -> Execute -> Review/Verify."
  },
  {
    "id": 7,
    "topicRef": "Mathematics of Finance: Simple Interest",
    "question": "Calculate the Simple Interest on a loan principal of ₱50,000 borrowed at an annual interest rate of 6% for 3 years ((I = Prt)).",
    "options": [
      {
        "key": "A",
        "text": "₱15,000"
      },
      {
        "key": "B",
        "text": "₱59,000"
      },
      {
        "key": "C",
        "text": "₱3,000"
      },
      {
        "key": "D",
        "text": "₱9,000 ((I = 50,000 \times 0.06 \times 3 = 9,000))"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Simple interest formula: (I = Prt = 50,000 \times 0.06 \times 3 = ₱9,000)."
  },
  {
    "id": 8,
    "topicRef": "Statistics: Standard Score (Z-Score)",
    "question": "A student scored 92 in an exam with Mean = 80 and Standard Deviation = 6. What is the Z-score?",
    "options": [
      {
        "key": "A",
        "text": "-2.0"
      },
      {
        "key": "B",
        "text": "+1.5"
      },
      {
        "key": "C",
        "text": "+2.0 ((z = \frac{92 - 80}{6} = \frac{12}{6} = +2.0))"
      },
      {
        "key": "D",
        "text": "+0.5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "(z = \frac{X - mu}{sigma} = \frac{92 - 80}{6} = \frac{12}{6} = +2.0)."
  },
  {
    "id": 9,
    "topicRef": "Modular Arithmetic: Clock Arithmetic",
    "question": "In modulo 12 arithmetic (standard clock time), what is ((8 + 7) pmod{12})?",
    "options": [
      {
        "key": "A",
        "text": "3 ((15 div 12 = 1) remainder (3), corresponding to 3 o'clock)"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "(8 + 7 = 15). In modulo 12, (15 equiv 3 pmod{12})."
  },
  {
    "id": 10,
    "topicRef": "Reasoning: Inductive vs Deductive",
    "question": "Observing that every swan seen so far in a lake is white and concluding that 'All swans in the world are white' is an example of:",
    "options": [
      {
        "key": "A",
        "text": "Mathematical Proof"
      },
      {
        "key": "B",
        "text": "Inductive Reasoning (specific observations to general rule)"
      },
      {
        "key": "C",
        "text": "Direct Verification"
      },
      {
        "key": "D",
        "text": "Deductive Reasoning (general premise to specific conclusion)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Inductive reasoning moves from specific observed instances to general probabilistic conclusions, while Deductive reasoning applies general axiomatic rules to derive certain specific conclusions."
  },
  {
    "id": 11,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #11)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 12,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #12)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 13,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #13)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Fractal"
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 14,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #14)",
    "options": [
      {
        "key": "A",
        "text": "Tautology"
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 15,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #15)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Caesar Cipher"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 16,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #16)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 17,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #17)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 18,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #18)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 19,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #19)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Tautology"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 20,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #20)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Caesar Cipher"
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 21,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #21)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 22,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #22)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 23,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #23)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 24,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #24)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Tautology"
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 25,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #25)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 26,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #26)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 27,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #27)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 28,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #28)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 29,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #29)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Tautology"
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 30,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #30)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Caesar Cipher"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 31,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #31)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 32,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #32)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 33,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #33)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 34,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #34)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Tautology"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 35,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #35)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 36,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #36)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 37,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #37)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 38,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #38)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Fractal"
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 39,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #39)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Tautology"
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 40,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #40)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 41,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #41)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 42,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #42)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 43,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #43)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Fractal"
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 44,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #44)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Tautology"
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 45,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #45)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Caesar Cipher"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 46,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #46)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 47,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #47)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 48,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #48)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 49,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #49)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Tautology"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 50,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #50)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Caesar Cipher"
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 51,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #51)",
    "options": [
      {
        "key": "A",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 52,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #52)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 53,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #53)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 54,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #54)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Tautology"
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 55,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #55)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 56,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #56)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 57,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #57)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 58,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #58)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 59,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #59)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Tautology"
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 60,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #60)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Caesar Cipher"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 61,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #61)",
    "options": [
      {
        "key": "A",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 62,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #62)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 63,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #63)",
    "options": [
      {
        "key": "A",
        "text": "Fractal"
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 64,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #64)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Tautology"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 65,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #65)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 66,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #66)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 67,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #67)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 68,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #68)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Fractal"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 69,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #69)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Tautology"
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 70,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #70)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Caesar Cipher"
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  },
  {
    "id": 71,
    "topicRef": "Mathematics in the Modern World: Compound Interest",
    "question": "Compound interest generates faster wealth growth than simple interest because: (Item #71)",
    "options": [
      {
        "key": "A",
        "text": "Undefined imaginary number."
      },
      {
        "key": "B",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Interest is added to principal, allowing interest to earn additional interest in subsequent compounding periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Compound growth is exponential: A = P(1 + r/n)^(nt)."
  },
  {
    "id": 72,
    "topicRef": "Mathematics in the Modern World: Linear Correlation (Pearson r)",
    "question": "A Pearson correlation coefficient of r = -0.92 indicates: (Item #72)",
    "options": [
      {
        "key": "A",
        "text": "A very strong negative (inverse) linear relationship between the two variables."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "D",
        "text": "Arbitrary mathematical error."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Correlation range is -1 to +1; -0.92 indicates that as variable X increases, variable Y sharply decreases."
  },
  {
    "id": 73,
    "topicRef": "Mathematics in the Modern World: Fractals in Nature",
    "question": "A geometric object that exhibits self-similarity across repeating scales of magnification (like fern leaves, coastlines, or Romanesco broccoli) is a: (Item #73)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "C",
        "text": "Fractal"
      },
      {
        "key": "D",
        "text": "Undefined imaginary number."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Benoit Mandelbrot coined 'Fractals' to describe infinitely complex patterns exhibiting self-similarity."
  },
  {
    "id": 74,
    "topicRef": "Mathematics in the Modern World: Truth Table Tautology",
    "question": "In symbolic logic, a compound proposition that is ALWAYS true regardless of the truth values of its individual variables is called a: (Item #74)",
    "options": [
      {
        "key": "A",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "B",
        "text": "Tautology"
      },
      {
        "key": "C",
        "text": "Undefined imaginary number."
      },
      {
        "key": "D",
        "text": "Zero mathematical relevance."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Tautology is universally true (e.g. p ∨ ~p); a Contradiction is universally false (p ∧ ~p)."
  },
  {
    "id": 75,
    "topicRef": "Mathematics in the Modern World: Cryptography & Caesar Cipher",
    "question": "A simple substitution cipher that shifts each letter in the alphabet forward by a fixed number of positions (e.g. shift by 3: A becomes D) is the: (Item #75)",
    "options": [
      {
        "key": "A",
        "text": "Zero mathematical relevance."
      },
      {
        "key": "B",
        "text": "Undefined imaginary number."
      },
      {
        "key": "C",
        "text": "Arbitrary mathematical error."
      },
      {
        "key": "D",
        "text": "Caesar Cipher"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Caesar Cipher is an ancient symmetric monoalphabetic substitution cipher based on modular addition."
  }
];
