import { ExamQuestion } from '../../types';

export const ASSESSMENT_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "id": 1,
    "topicRef": "TMAE Framework: Test vs Measurement vs Assessment vs Evaluation",
    "question": "A teacher administers a 50-item paper-and-pencil instrument. The instrument itself is the:",
    "options": [
      {
        "key": "A",
        "text": "Measurement"
      },
      {
        "key": "B",
        "text": "Evaluation"
      },
      {
        "key": "C",
        "text": "Assessment"
      },
      {
        "key": "D",
        "text": "Test"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Test is a formal, standardized instrument or set of questions designed to elicit a specific sample of student behavior or knowledge."
  },
  {
    "id": 2,
    "topicRef": "TMAE: Measurement",
    "question": "Assigning the raw numerical score of '45 out of 50' or determining that a student reads at '120 words per minute' is an act of:",
    "options": [
      {
        "key": "A",
        "text": "Evaluation"
      },
      {
        "key": "B",
        "text": "Placement"
      },
      {
        "key": "C",
        "text": "Measurement (the quantitative assignment of numbers according to rules)"
      },
      {
        "key": "D",
        "text": "Formative Intervention"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Measurement is the quantitative process of assigning numerical values to student attributes, traits, or performance without making value judgments."
  },
  {
    "id": 3,
    "topicRef": "TMAE: Assessment",
    "question": "The comprehensive, multifaceted process of gathering, gathering, and synthesizing qualitative and quantitative evidence from tests, observations, and projects to understand student learning is:",
    "options": [
      {
        "key": "A",
        "text": "Assessment"
      },
      {
        "key": "B",
        "text": "Measurement"
      },
      {
        "key": "C",
        "text": "Testing only"
      },
      {
        "key": "D",
        "text": "Grading only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Assessment is the broad process of collecting, reviewing, and interpreting information about student learning from multiple sources to inform instruction."
  },
  {
    "id": 4,
    "topicRef": "TMAE: Evaluation",
    "question": "When a school committee reviews comprehensive test data, portfolios, and course grades to make a qualitative value judgment: 'This curriculum program is highly successful and shall be continued', they are conducting:",
    "options": [
      {
        "key": "A",
        "text": "Evaluation (making a value judgment based on criteria and evidence)"
      },
      {
        "key": "B",
        "text": "Testing"
      },
      {
        "key": "C",
        "text": "Item Analysis"
      },
      {
        "key": "D",
        "text": "Measurement"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Evaluation is the qualitative act of passing a judgment of worth, merit, or value regarding student performance or educational programs against defined standards."
  },
  {
    "id": 5,
    "topicRef": "Assessment FOR Learning (Formative)",
    "question": "A teacher conducts a short 5-minute unrecorded 'Ticket-out-the-Door' quiz at the end of class solely to check which concepts need re-teaching tomorrow. This is:",
    "options": [
      {
        "key": "A",
        "text": "Assessment OF Learning (Summative Assessment)"
      },
      {
        "key": "B",
        "text": "Terminal Evaluation"
      },
      {
        "key": "C",
        "text": "Assessment AS Learning (Self-Assessment)"
      },
      {
        "key": "D",
        "text": "Assessment FOR Learning (Formative Assessment)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Assessment FOR Learning is formative, occurring during instruction to diagnose gaps, provide real-time feedback, and guide teacher instructional adjustments."
  },
  {
    "id": 6,
    "topicRef": "Assessment OF Learning (Summative)",
    "question": "A final quarterly departmental examination administered at the end of the semester to determine final letter grades, honors, and promotion is:",
    "options": [
      {
        "key": "A",
        "text": "Assessment AS Learning"
      },
      {
        "key": "B",
        "text": "Assessment OF Learning (Summative Assessment)"
      },
      {
        "key": "C",
        "text": "Assessment FOR Learning"
      },
      {
        "key": "D",
        "text": "Diagnostic Assessment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Assessment OF Learning is summative, occurring at the conclusion of an instructional unit to certify mastery, assign grades, and judge overall achievement."
  },
  {
    "id": 7,
    "topicRef": "Assessment AS Learning (Self-Assessment / Metacognition)",
    "question": "Students maintain reflective learning journals where they evaluate their own study strategies, track personal progress toward goals, and self-correct errors. This embodies:",
    "options": [
      {
        "key": "A",
        "text": "Assessment OF Learning"
      },
      {
        "key": "B",
        "text": "Norm-Referenced Grading"
      },
      {
        "key": "C",
        "text": "Assessment AS Learning"
      },
      {
        "key": "D",
        "text": "Summative Assessment"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Assessment AS Learning empowers students as autonomous metacognitive assessors of their own learning, fostering self-monitoring, goal-setting, and reflection."
  },
  {
    "id": 8,
    "topicRef": "Diagnostic Assessment",
    "question": "An assessment administered BEFORE instruction starts to identify specific underlying learning weaknesses, persistent misconceptions, or prerequisite skill deficits is a:",
    "options": [
      {
        "key": "A",
        "text": "Diagnostic Assessment"
      },
      {
        "key": "B",
        "text": "Terminal Assessment"
      },
      {
        "key": "C",
        "text": "Placement Assessment"
      },
      {
        "key": "D",
        "text": "Summative Assessment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Diagnostic assessments are given prior to or during instruction to pinpoint the specific root causes of persistent learning difficulties for targeted remediation."
  },
  {
    "id": 9,
    "topicRef": "Placement Assessment",
    "question": "A university entrance examination administered to high school graduates to determine whether they should be placed in advanced calculus, regular algebra, or remedial math is a:",
    "options": [
      {
        "key": "A",
        "text": "Continuous Assessment"
      },
      {
        "key": "B",
        "text": "Formative Assessment"
      },
      {
        "key": "C",
        "text": "Peer Assessment"
      },
      {
        "key": "D",
        "text": "Placement Assessment"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Placement assessments determine entry-level capabilities to assign students to appropriate instructional groups, courses, or academic tracks."
  },
  {
    "id": 10,
    "topicRef": "Norm-Referenced vs Criterion-Referenced Assessment",
    "question": "How does a 'Norm-Referenced Test (NRT)' differ from a 'Criterion-Referenced Test (CRT)'?",
    "options": [
      {
        "key": "A",
        "text": "NRT is for elementary while CRT is for college."
      },
      {
        "key": "B",
        "text": "NRT compares a student's score against a peer norm group (e.g. 90th percentile rank), while CRT measures student performance against an absolute predetermined mastery standard or learning criterion (e.g. 85% correct)."
      },
      {
        "key": "C",
        "text": "CRT grades on a curved bell distribution."
      },
      {
        "key": "D",
        "text": "There is no difference."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Norm-Referenced (NRT) determines relative standing among peers (percentiles); Criterion-Referenced (CRT) evaluates whether specific standard competencies have been mastered regardless of peers."
  },
  {
    "id": 11,
    "topicRef": "Validity: Definition",
    "question": "In psychometrics and educational measurement, 'Validity' refers to:",
    "options": [
      {
        "key": "A",
        "text": "The number of questions on the exam."
      },
      {
        "key": "B",
        "text": "The degree to which an assessment tool accurately measures what it purports to measure and the appropriateness of inferences based on test scores."
      },
      {
        "key": "C",
        "text": "The consistency and repeatability of test scores."
      },
      {
        "key": "D",
        "text": "The physical printing quality of the test paper."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Validity is the most fundamental property of assessment: ensuring the test genuinely measures the intended construct and supports valid educational inferences."
  },
  {
    "id": 12,
    "topicRef": "Content Validity: Table of Specifications (TOS)",
    "question": "What is the primary instructional purpose of constructing a 'Table of Specifications (TOS)' prior to writing a test?",
    "options": [
      {
        "key": "A",
        "text": "To guarantee Content Validity by ensuring that test items proportionally represent the curriculum objectives, instructional time, and cognitive levels taught."
      },
      {
        "key": "B",
        "text": "To calculate teacher bonuses."
      },
      {
        "key": "C",
        "text": "To grade tests faster."
      },
      {
        "key": "D",
        "text": "To assign classroom seat numbers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "A TOS is a two-way grid aligning learning competencies and cognitive levels (Bloom) with item distribution, ensuring comprehensive content validity."
  },
  {
    "id": 13,
    "topicRef": "Criterion-Related Validity: Concurrent vs Predictive",
    "question": "When scores on a newly developed college readiness test are correlated with students' future first-year college GPAs one year later, which validity is being established?",
    "options": [
      {
        "key": "A",
        "text": "Construct Validity only"
      },
      {
        "key": "B",
        "text": "Face Validity"
      },
      {
        "key": "C",
        "text": "Concurrent Validity"
      },
      {
        "key": "D",
        "text": "Predictive Validity (Criterion-Related)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Predictive Validity correlates test performance with a future criterion behavior; Concurrent Validity correlates test performance with an established criterion measured simultaneously."
  },
  {
    "id": 14,
    "topicRef": "Construct Validity",
    "question": "Establishing 'Construct Validity' involves demonstrating that a test genuinely measures an unobservable psychological attribute or theoretical construct (e.g. self-esteem, mathematical anxiety) through:",
    "options": [
      {
        "key": "A",
        "text": "Counting test pages."
      },
      {
        "key": "B",
        "text": "Checking spelling errors in the test title."
      },
      {
        "key": "C",
        "text": "Convergent and Discriminant evidence, factor analysis, and theoretical alignment."
      },
      {
        "key": "D",
        "text": "Asking students if the test looks pretty."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Construct validity evaluates whether test scores correlate strongly with related psychological traits (convergent) and correlate weakly with unrelated traits (discriminant)."
  },
  {
    "id": 15,
    "topicRef": "Reliability: Definition & Methods",
    "question": "'Reliability' of a test refers to:",
    "options": [
      {
        "key": "A",
        "text": "How easy the questions are."
      },
      {
        "key": "B",
        "text": "The consistency, stability, and dependability of test scores across repeated administrations or different forms."
      },
      {
        "key": "C",
        "text": "How fast students can finish the test."
      },
      {
        "key": "D",
        "text": "Whether the test measures the right subject."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reliability is the precision, consistency, and repeatability of test scores under identical or equivalent testing conditions."
  },
  {
    "id": 16,
    "topicRef": "Reliability: Test-Retest Method",
    "question": "Administering the exact same test to the same group of students at two different points in time (e.g., 2 weeks apart) measures which type of reliability?",
    "options": [
      {
        "key": "A",
        "text": "Measure of Equivalence (Parallel Forms)"
      },
      {
        "key": "B",
        "text": "Measure of Internal Consistency"
      },
      {
        "key": "C",
        "text": "Inter-Rater Reliability"
      },
      {
        "key": "D",
        "text": "Measure of Stability (Test-Retest Reliability)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Test-Retest establishes score stability over time by computing the Pearson correlation coefficient between test administrations on two occasions."
  },
  {
    "id": 17,
    "topicRef": "Reliability: Parallel-Forms / Alternate-Forms",
    "question": "Creating two equivalent versions (Form A and Form B) of a test with identical specifications and administering them to the same students measures:",
    "options": [
      {
        "key": "A",
        "text": "Measure of Equivalence (Parallel-Forms Reliability)"
      },
      {
        "key": "B",
        "text": "Split-Half Reliability"
      },
      {
        "key": "C",
        "text": "Face Validity"
      },
      {
        "key": "D",
        "text": "Predictive Validity"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Parallel Forms assesses score equivalence across two distinct but parallel test versions measuring the same content domain."
  },
  {
    "id": 18,
    "topicRef": "Reliability: Internal Consistency (Cronbach's Alpha / KR-20)",
    "question": "Which statistical formula is used to measure the Internal Consistency of a test containing dichotomously scored items (Right/Wrong, 1 or 0)?",
    "options": [
      {
        "key": "A",
        "text": "Kuder-Richardson Formula 20 (KR-20)"
      },
      {
        "key": "B",
        "text": "Chi-Square Test"
      },
      {
        "key": "C",
        "text": "Cronbach's Alpha (for polytomous/Likert scale items)"
      },
      {
        "key": "D",
        "text": "Spearman-Brown Prophecy Formula"
      }
    ],
    "correctAnswer": "A",
    "explanation": "KR-20 measures internal consistency for dichotomous (binary 1/0) tests; Cronbach's Alpha measures internal consistency for multi-point Likert or partial-credit scales."
  },
  {
    "id": 19,
    "topicRef": "Reliability: Inter-Rater Reliability (Cohen's Kappa / ICC)",
    "question": "When evaluating subjective performance assessments (e.g. speech declamation, gymnastics routine), why are two or more independent judges used?",
    "options": [
      {
        "key": "A",
        "text": "To establish Inter-Rater / Scorer Reliability and reduce individual scorer bias."
      },
      {
        "key": "B",
        "text": "To double the scores."
      },
      {
        "key": "C",
        "text": "Because judges are not allowed to be alone."
      },
      {
        "key": "D",
        "text": "To make the competition last twice as long."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Inter-Rater Reliability measures the degree of scoring agreement between independent evaluators, ensuring objective, reliable scoring."
  },
  {
    "id": 20,
    "topicRef": "Validity vs Reliability Relationship",
    "question": "Which statement accurately describes the foundational relationship between Validity and Reliability?",
    "options": [
      {
        "key": "A",
        "text": "A test can be valid without being reliable."
      },
      {
        "key": "B",
        "text": "They are completely unrelated."
      },
      {
        "key": "C",
        "text": "Validity guarantees reliability automatically."
      },
      {
        "key": "D",
        "text": "A test can be highly reliable without being valid, but a test CANNOT be valid unless it is first reliable. (Reliability is a necessary but not sufficient condition for validity)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "A broken scale can yield consistent, reliable weights (always off by 10 lbs), but it is invalid. Thus, reliability is a prerequisite for validity, but does not guarantee it."
  },
  {
    "id": 21,
    "topicRef": "Multiple Choice: Anatomy of an Item",
    "question": "In a multiple-choice item, what are the technical terms for the question statement, the correct answer, and the incorrect plausible options?",
    "options": [
      {
        "key": "A",
        "text": "Thesis, Hypothesis, and Antagonists"
      },
      {
        "key": "B",
        "text": "Prompt, Target, and Decoys"
      },
      {
        "key": "C",
        "text": "Stem (problem statement), Key (correct answer), and Distractors (incorrect options / foils)"
      },
      {
        "key": "D",
        "text": "Root, Branch, and Leaves"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Standard test taxonomy: Stem = problem presentation; Key = keyed correct option; Distractors = incorrect alternatives designed to attract uninformed test-takers."
  },
  {
    "id": 22,
    "topicRef": "Multiple Choice Flaws: Grammatical Clues",
    "question": "Which of the following violates the professional rules of multiple-choice item construction by providing an unintended grammatical clue?",
    "options": [
      {
        "key": "A",
        "text": "Ending the stem with 'an' when only one option begins with a vowel."
      },
      {
        "key": "B",
        "text": "Avoiding negative stems."
      },
      {
        "key": "C",
        "text": "Keeping all options approximately equal in length."
      },
      {
        "key": "D",
        "text": "Using clear, unambiguous language in the stem."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Using 'an' at the end of the stem gives away the answer if only one option starts with a vowel. Stems should use 'a/an' or place articles inside options."
  },
  {
    "id": 23,
    "topicRef": "Multiple Choice Flaws: 'All of the Above'",
    "question": "Why should test writers strictly avoid using 'All of the above' as an option in multiple choice items?",
    "options": [
      {
        "key": "A",
        "text": "Because it makes the test too long."
      },
      {
        "key": "B",
        "text": "Because machines cannot scan the letter D."
      },
      {
        "key": "C",
        "text": "If a student recognizes that at least two options are correct, they can deduce 'All of the above' without knowing the validity of the third option, encouraging guessing."
      },
      {
        "key": "D",
        "text": "Because it is copyrighted."
      }
    ],
    "correctAnswer": "C",
    "explanation": "'All of the above' rewards partial knowledge: recognizing two correct options guarantees the answer, while recognizing one false option eliminates it."
  },
  {
    "id": 24,
    "topicRef": "Multiple Choice Flaws: Absolute Qualifiers",
    "question": "Options containing absolute qualifiers such as 'Always', 'Never', 'All', or 'None' are poor test items because:",
    "options": [
      {
        "key": "A",
        "text": "They increase test anxiety."
      },
      {
        "key": "B",
        "text": "They are too short to read."
      },
      {
        "key": "C",
        "text": "They confuse scoring machines."
      },
      {
        "key": "D",
        "text": "Test-wise students know that absolute generalizations in human sciences are rarely true, allowing them to eliminate distractors easily."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Absolute words ('never', 'always') are easily identified as false by savvy test-takers; relative words ('often', 'generally') are more plausible."
  },
  {
    "id": 25,
    "topicRef": "Rubrics: Holistic vs Analytic Rubrics",
    "question": "What is the primary difference between a 'Holistic Rubric' and an 'Analytic Rubric'?",
    "options": [
      {
        "key": "A",
        "text": "Analytic rubrics have zero criteria."
      },
      {
        "key": "B",
        "text": "A Holistic rubric yields a single overall score for the entire performance based on global impression; an Analytic rubric scores separate individual criteria/dimensions independently with detailed diagnostic feedback."
      },
      {
        "key": "C",
        "text": "Holistic is only for math while Analytic is for art."
      },
      {
        "key": "D",
        "text": "Holistic rubrics take 10 times longer to grade."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Holistic rubrics evaluate work as a unified whole (fast, summative); Analytic rubrics break performance into distinct criteria (e.g. content, grammar, delivery) providing formative diagnostic feedback."
  },
  {
    "id": 26,
    "topicRef": "Item Analysis: Index of Difficulty (P)",
    "question": "What is the mathematical formula for calculating the Difficulty Index ((P)) of a test item?",
    "options": [
      {
        "key": "A",
        "text": "(P = R_U - R_L)"
      },
      {
        "key": "B",
        "text": "(P = \frac{R_U + R_L}{N}) (where (R_U) = correct in Upper group, (R_L) = correct in Lower group, and (N) = total students in both groups)"
      },
      {
        "key": "C",
        "text": "(P = R_U \times R_L)"
      },
      {
        "key": "D",
        "text": "(P = \frac{N}{R_U})"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Difficulty Index (P) is the proportion of total test-takers who answered the item correctly: (P = \frac{\text{Total Correct in Upper & Lower Groups}}{\text{Total Number of Students in Upper & Lower Groups}})."
  },
  {
    "id": 27,
    "topicRef": "Item Analysis: Difficulty Interpretation",
    "question": "A test item has a calculated Difficulty Index of (P = 0.95). How should this item be evaluated?",
    "options": [
      {
        "key": "A",
        "text": "Very Easy item (95% answered correctly); should be revised or discarded unless used as a warmup confidence-builder."
      },
      {
        "key": "B",
        "text": "Ideal moderate difficulty item."
      },
      {
        "key": "C",
        "text": "Invalid item."
      },
      {
        "key": "D",
        "text": "Very Difficult item."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Difficulty Interpretation: 0.00-0.20 = Very Difficult; 0.21-0.80 = Moderate / Good; 0.81-1.00 = Very Easy. (Note: Higher P means easier item)."
  },
  {
    "id": 28,
    "topicRef": "Item Analysis: Ideal Difficulty Range",
    "question": "For a standard 4-option multiple-choice examination, what is the optimum target range for the Index of Difficulty ((P))?",
    "options": [
      {
        "key": "A",
        "text": "0.90 to 1.00"
      },
      {
        "key": "B",
        "text": "0.00 to 0.10"
      },
      {
        "key": "C",
        "text": "Exactly 0.00"
      },
      {
        "key": "D",
        "text": "0.30 to 0.70 (optimal average around 0.50 to 0.60 to maximize discrimination variance)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Items with moderate difficulty (0.30–0.70, peaking near 0.50) maximize test score variance and discrimination power."
  },
  {
    "id": 29,
    "topicRef": "Item Analysis: Index of Discrimination (D)",
    "question": "What is the formula for calculating the Discrimination Index ((D)) of a test item?",
    "options": [
      {
        "key": "A",
        "text": "(D = \frac{n}{R_U - R_L})"
      },
      {
        "key": "B",
        "text": "(D = \frac{R_U - R_L}{n}) (where (R_U) = correct in Upper group, (R_L) = correct in Lower group, and (n) = number of students in ONE group)"
      },
      {
        "key": "C",
        "text": "(D = R_U + R_L)"
      },
      {
        "key": "D",
        "text": "(D = \frac{R_U}{R_L})"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Discrimination Index (D) measures an item's ability to differentiate between high-achieving (Upper 27%) and low-achieving (Lower 27%) students: (D = \frac{R_U - R_L}{n})."
  },
  {
    "id": 30,
    "topicRef": "Item Analysis: Negative Discrimination Index",
    "question": "A test item has a Discrimination Index of (D = -0.35). What does this negative value indicate, and what must the teacher do?",
    "options": [
      {
        "key": "A",
        "text": "The item is excellent and should be retained."
      },
      {
        "key": "B",
        "text": "The item is too easy."
      },
      {
        "key": "C",
        "text": "More students in the lower-achieving group got the item right than students in the upper-achieving group; the item is seriously flawed (miskeyed, ambiguous, or misleading) and must be REJECTED / DISCARDED."
      },
      {
        "key": "D",
        "text": "All students mastered the concept."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A negative discrimination index indicates that low-scoring students outscored high-scoring students on that item, signaling an ambiguous stem, miskeyed answer, or deceptive trick. It must be discarded or fundamentally revised."
  },
  {
    "id": 31,
    "topicRef": "Item Analysis: Discrimination Index Thresholds",
    "question": "According to Ebel's standard criteria, an item with a Discrimination Index of (D = 0.42) is classified as:",
    "options": [
      {
        "key": "A",
        "text": "Reasonably good item ((0.30 - 0.39))"
      },
      {
        "key": "B",
        "text": "Poor item ((D < 0.20)) -> Discard"
      },
      {
        "key": "C",
        "text": "Marginal item ((0.20 - 0.29))"
      },
      {
        "key": "D",
        "text": "Very Good item ((D ge 0.40)) -> Retain without modification"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Ebel's Guidelines: (D ge 0.40) = Very Good; (0.30 - 0.39) = Reasonably Good; (0.20 - 0.29) = Marginal (needs revision); (D < 0.20) = Poor (discard/revise)."
  },
  {
    "id": 32,
    "topicRef": "Item Analysis: Effective Distractor Analysis",
    "question": "What defines an 'Effective Distractor' in a multiple-choice item analysis?",
    "options": [
      {
        "key": "A",
        "text": "It is plausible enough to attract more students from the lower-performing group than from the upper-performing group."
      },
      {
        "key": "B",
        "text": "Nobody chooses it."
      },
      {
        "key": "C",
        "text": "It attracts 100% of the upper group."
      },
      {
        "key": "D",
        "text": "It is identical to the key."
      }
    ],
    "correctAnswer": "A",
    "explanation": "A good distractor acts as an effective foil: it attracts uninformed students (more Lower group than Upper group). A distractor chosen by nobody is non-functional and should be replaced."
  },
  {
    "id": 33,
    "topicRef": "Measures of Central Tendency: Mean",
    "question": "Calculate the Arithmetic Mean of the following quiz scores: 12, 15, 18, 20, 25.",
    "options": [
      {
        "key": "A",
        "text": "18 ((\frac{12 + 15 + 18 + 20 + 25}{5} = \frac{90}{5} = 18))"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "90"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Mean is the arithmetic average: sum of all scores divided by the total number of cases ((90 / 5 = 18))."
  },
  {
    "id": 34,
    "topicRef": "Measures of Central Tendency: Median",
    "question": "What is the Median of the following data set: 8, 10, 14, 16, 22, 28?",
    "options": [
      {
        "key": "A",
        "text": "16"
      },
      {
        "key": "B",
        "text": "15 (average of two middle scores: (\frac{14 + 16}{2} = 15))"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Median is the 50th percentile / middle value. For an even number of scores ((N=6)), average the 3rd (14) and 4th (16) values: (\frac{14+16}{2} = 15)."
  },
  {
    "id": 35,
    "topicRef": "Measures of Central Tendency: Extreme Outliers",
    "question": "When a score distribution is heavily skewed with extreme outlier scores (e.g. one billionaire in a classroom of low-income families), which measure of central tendency is the MOST stable and representative?",
    "options": [
      {
        "key": "A",
        "text": "The Mean (heavily pulled toward outliers)"
      },
      {
        "key": "B",
        "text": "The Mode"
      },
      {
        "key": "C",
        "text": "The Range"
      },
      {
        "key": "D",
        "text": "The Median (unaffected by extreme values)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Median is positional and resistant to extreme outliers, making it the best measure of central tendency for highly skewed distributions."
  },
  {
    "id": 36,
    "topicRef": "Measures of Central Tendency: Mode",
    "question": "Find the Mode of the score distribution: 75, 82, 85, 85, 88, 90, 90, 90, 95.",
    "options": [
      {
        "key": "A",
        "text": "88"
      },
      {
        "key": "B",
        "text": "90 (occurs with the highest frequency: 3 times)"
      },
      {
        "key": "C",
        "text": "85"
      },
      {
        "key": "D",
        "text": "75"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Mode is the score that occurs with the greatest frequency (here, 90 occurs three times)."
  },
  {
    "id": 37,
    "topicRef": "Measures of Variability: Standard Deviation (SD)",
    "question": "Class A and Class B both have an identical Mean exam score of 80. However, Class A has a Standard Deviation of 2.5 while Class B has a Standard Deviation of 12.0. What does this indicate?",
    "options": [
      {
        "key": "A",
        "text": "Class B is more homogeneous."
      },
      {
        "key": "B",
        "text": "Class B is smarter than Class A."
      },
      {
        "key": "C",
        "text": "Class A is Homogeneous (scores tightly clustered near the mean); Class B is Heterogeneous (wide spread of high and low ability levels)."
      },
      {
        "key": "D",
        "text": "Class A took a harder test."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Standard Deviation measures score dispersion. A small SD indicates high homogeneity (clustered scores); a large SD indicates high heterogeneity (broadly scattered scores)."
  },
  {
    "id": 38,
    "topicRef": "Measures of Variability: Range",
    "question": "In a test with scores 42, 55, 68, 74, 91, what is the Range?",
    "options": [
      {
        "key": "A",
        "text": "49 ((91 - 42 = 49))"
      },
      {
        "key": "B",
        "text": "66"
      },
      {
        "key": "C",
        "text": "42"
      },
      {
        "key": "D",
        "text": "91"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Range is the simplest measure of variability: Highest Score minus Lowest Score ((91 - 42 = 49))."
  },
  {
    "id": 39,
    "topicRef": "Normal Distribution (Bell Curve)",
    "question": "In a perfectly symmetrical Normal Distribution (Bell Curve), what is the relationship among the Mean, Median, and Mode?",
    "options": [
      {
        "key": "A",
        "text": "(\text{Mean} > \text{Median} > \text{Mode})"
      },
      {
        "key": "B",
        "text": "(\text{Mode} > \text{Median} > \text{Mean})"
      },
      {
        "key": "C",
        "text": "They never touch each other."
      },
      {
        "key": "D",
        "text": "(\text{Mean} = \text{Median} = \text{Mode}) (all coincide at the exact center)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In a perfect normal distribution, the curve is completely symmetrical, and the Mean, Median, and Mode are identical at the center apex."
  },
  {
    "id": 40,
    "topicRef": "Empirical Rule (68-95-99.7 Rule)",
    "question": "In a normal distribution with Mean = 70 and SD = 5, approximately what percentage of student scores fall between 65 and 75 ((pm 1 \text{ SD}))?",
    "options": [
      {
        "key": "A",
        "text": "95.44%"
      },
      {
        "key": "B",
        "text": "Approximately 68.26% of all scores"
      },
      {
        "key": "C",
        "text": "99.74%"
      },
      {
        "key": "D",
        "text": "50%"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Empirical Rule dictates that ~68% of scores fall within (pm 1 \text{ SD}), ~95% within (pm 2 \text{ SD}), and ~99.7% within (pm 3 \text{ SD})."
  },
  {
    "id": 41,
    "topicRef": "Positively Skewed Distribution (Skewed to the Right)",
    "question": "When an examination is extremely difficult and the vast majority of students score very low with only a tiny tail of high achievers, the resulting score distribution is:",
    "options": [
      {
        "key": "A",
        "text": "Bimodal Symmetrical"
      },
      {
        "key": "B",
        "text": "Positively Skewed (Skewed to the Right, with (\text{Mean} > \text{Median} > \text{Mode}))"
      },
      {
        "key": "C",
        "text": "Negatively Skewed (Skewed to the Left)"
      },
      {
        "key": "D",
        "text": "Normal Bell Curve"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A difficult test creates a Positively Skewed curve: the bulk of scores cluster on the left (low scores), and the long tail stretches rightward toward high positive values ((\text{Mean} > \text{Median} > \text{Mode}))."
  },
  {
    "id": 42,
    "topicRef": "Negatively Skewed Distribution (Skewed to the Left)",
    "question": "When a test is very easy or teaching is exceptionally effective so that most students score high with only a few failing scores, the distribution is:",
    "options": [
      {
        "key": "A",
        "text": "Platykurtic"
      },
      {
        "key": "B",
        "text": "Leptokurtic"
      },
      {
        "key": "C",
        "text": "Negatively Skewed (Skewed to the Left, with (\text{Mode} > \text{Median} > \text{Mean}))"
      },
      {
        "key": "D",
        "text": "Positively Skewed"
      }
    ],
    "correctAnswer": "C",
    "explanation": "An easy test creates a Negatively Skewed curve: scores cluster on the right (high scores), with a tail stretching left toward negative/low values ((\text{Mode} > \text{Median} > \text{Mean}))."
  },
  {
    "id": 43,
    "topicRef": "Kurtosis: Leptokurtic vs Platykurtic vs Mesokurtic",
    "question": "A distribution that is extremely tall, sharply peaked, and has thin tails because student scores are clustered very tightly around the mean is described as:",
    "options": [
      {
        "key": "A",
        "text": "Bimodal"
      },
      {
        "key": "B",
        "text": "Mesokurtic (normal curve)"
      },
      {
        "key": "C",
        "text": "Platykurtic (flat curve)"
      },
      {
        "key": "D",
        "text": "Leptokurtic"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kurtosis describes peakness: Leptokurtic = sharp, high peak (low variance); Platykurtic = broad, flat curve (high variance); Mesokurtic = moderate bell shape."
  },
  {
    "id": 44,
    "topicRef": "Standard Scores: Z-Score Calculation",
    "question": "A student scores 85 on a test with a Mean ((mu)) of 75 and a Standard Deviation ((sigma)) of 5. What is the student's Z-score?",
    "options": [
      {
        "key": "A",
        "text": "+1.0"
      },
      {
        "key": "B",
        "text": "-2.0"
      },
      {
        "key": "C",
        "text": "+2.0 ((z = \frac{85 - 75}{5} = \frac{10}{5} = +2.0))"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Formula: (z = \frac{X - mu}{sigma}). Here, (\frac{85 - 75}{5} = +2.0), meaning the score is exactly 2 standard deviations above the class mean."
  },
  {
    "id": 45,
    "topicRef": "Standard Scores: T-Score Calculation",
    "question": "Convert a Z-score of (z = +1.5) into a standard T-score using the formula (T = 50 + 10z).",
    "options": [
      {
        "key": "A",
        "text": "55"
      },
      {
        "key": "B",
        "text": "65 ((T = 50 + 10(1.5) = 50 + 15 = 65))"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "75"
      }
    ],
    "correctAnswer": "B",
    "explanation": "T-scores transform z-scores into a positive scale with Mean = 50 and SD = 10: (T = 50 + 10(1.5) = 65)."
  },
  {
    "id": 46,
    "topicRef": "Standard Scores: Stanines",
    "question": "What is a 'Stanine' score in standardized testing?",
    "options": [
      {
        "key": "A",
        "text": "A grade given to 9-year-olds."
      },
      {
        "key": "B",
        "text": "A test with 9 questions."
      },
      {
        "key": "C",
        "text": "A standard score scale dividing a normal distribution into nine (9) standard bands (1 to 9), with a Mean of 5 and SD of 2."
      },
      {
        "key": "D",
        "text": "A score from 1 to 100."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Stanine ('Standard Nine') compresses normal distributions into 9 units (1 = lowest, 5 = average, 9 = superior), with Mean = 5 and SD = 2."
  },
  {
    "id": 47,
    "topicRef": "Standard Scores: Percentile Rank Interpretation",
    "question": "If a student achieves a Percentile Rank of (PR = 85) on the National Achievement Test (NAT), what does this mean?",
    "options": [
      {
        "key": "A",
        "text": "The student scored equal to or higher than 85% of all examinees in the national norm group."
      },
      {
        "key": "B",
        "text": "The student answered 85% of the test questions correctly."
      },
      {
        "key": "C",
        "text": "The student failed 15 subjects."
      },
      {
        "key": "D",
        "text": "The student's raw score was 85 points."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Percentile Rank is a relative norm-referenced comparison: (PR = 85) means the examinee outperformed or tied 85% of test-takers nationwide."
  },
  {
    "id": 48,
    "topicRef": "DepEd Order No. 8, s. 2015: Assessment Components",
    "question": "Under DepEd Order No. 8, s. 2015 (Policy Guidelines on Classroom Assessment for the K to 12 Basic Education Program), what are the three summative assessment components used in grading?",
    "options": [
      {
        "key": "A",
        "text": "Written Work (WW), Performance Tasks (PT), and Quarterly Assessment (QA)"
      },
      {
        "key": "B",
        "text": "Midterms, Final Exam, and Cleanliness"
      },
      {
        "key": "C",
        "text": "Attendance, Uniform, and Behavior"
      },
      {
        "key": "D",
        "text": "Quizzes, Homework, and Recitation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "DO 8, s. 2015 establishes 3 summative components: Written Work (WW), Performance Tasks (PT), and Quarterly Assessment (QA)."
  },
  {
    "id": 49,
    "topicRef": "DO 8, s. 2015: Weights for Languages, AP, and EsP (Grades 1-10)",
    "question": "What are the percentage weights for Written Work, Performance Tasks, and Quarterly Assessment in Languages (English/Filipino/MTB), Araling Panlipunan (AP), and Edukasyon sa Pagpapakatao (EsP)?",
    "options": [
      {
        "key": "A",
        "text": "Written Work: 50% | Performance Tasks: 30% | Quarterly Assessment: 20%"
      },
      {
        "key": "B",
        "text": "Written Work: 30% | Performance Tasks: 50% | Quarterly Assessment: 20%"
      },
      {
        "key": "C",
        "text": "Written Work: 20% | Performance Tasks: 60% | Quarterly Assessment: 20%"
      },
      {
        "key": "D",
        "text": "Written Work: 40% | Performance Tasks: 40% | Quarterly Assessment: 20%"
      }
    ],
    "correctAnswer": "B",
    "explanation": "For Languages, AP, and EsP in Grades 1-10: WW = 30%, PT = 50%, and QA = 20%."
  },
  {
    "id": 50,
    "topicRef": "DO 8, s. 2015: Weights for Science and Mathematics (Grades 1-10)",
    "question": "What are the percentage weights for Written Work, Performance Tasks, and Quarterly Assessment in Science and Math (Grades 1 to 10)?",
    "options": [
      {
        "key": "A",
        "text": "Written Work: 20% | Performance Tasks: 60% | Quarterly Assessment: 20%"
      },
      {
        "key": "B",
        "text": "Written Work: 50% | Performance Tasks: 20% | Quarterly Assessment: 30%"
      },
      {
        "key": "C",
        "text": "Written Work: 30% | Performance Tasks: 50% | Quarterly Assessment: 20%"
      },
      {
        "key": "D",
        "text": "Written Work: 40% | Performance Tasks: 40% | Quarterly Assessment: 20%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "For Science and Math (Grades 1-10): WW = 40%, PT = 40%, and QA = 20%."
  },
  {
    "id": 51,
    "topicRef": "DO 8, s. 2015: Weights for MAPEH and EPP/TLE (Grades 1-10)",
    "question": "In MAPEH and EPP / TLE (Grades 1 to 10), which component carries the highest weight of 60%?",
    "options": [
      {
        "key": "A",
        "text": "Quarterly Assessment (QA = 60%)"
      },
      {
        "key": "B",
        "text": "Written Work (WW = 60%)"
      },
      {
        "key": "C",
        "text": "Performance Tasks (PT = 60%, WW = 20%, QA = 20%)"
      },
      {
        "key": "D",
        "text": "Attendance (60%)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In skills-heavy subjects (MAPEH, EPP, TLE), Performance Tasks carry 60%, Written Work carries 20%, and Quarterly Assessment carries 20%."
  },
  {
    "id": 52,
    "topicRef": "DO 8, s. 2015: Base-60 Transmutation & Passing Grade",
    "question": "Under DepEd Order No. 8, s. 2015, what is the minimum Initial Grade percentage required to obtain a passing Transmuted Grade of 75 in the report card?",
    "options": [
      {
        "key": "A",
        "text": "An Initial Grade of at least 60.00% (Base-60 Transmutation)"
      },
      {
        "key": "B",
        "text": "An Initial Grade of 75.00%"
      },
      {
        "key": "C",
        "text": "An Initial Grade of 0.00%"
      },
      {
        "key": "D",
        "text": "An Initial Grade of 50.00%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "DepEd uses a Base-60 grading formula: a raw initial grade of 60% transmutes exactly to the minimum passing grade of 75."
  },
  {
    "id": 53,
    "topicRef": "DO 8, s. 2015: Formative Assessment Recording",
    "question": "According to DepEd Order 8, s. 2015, how should Formative Assessments be recorded by the teacher?",
    "options": [
      {
        "key": "A",
        "text": "They must never be written down."
      },
      {
        "key": "B",
        "text": "They replace quarterly exams."
      },
      {
        "key": "C",
        "text": "They must be recorded in the teacher's log to track learning progress, but are NOT included in the formal computation of final quarterly grades."
      },
      {
        "key": "D",
        "text": "They make up 100% of the final grade."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Formative assessments are recorded to track learning trends and evaluate instructional effectiveness, but are strictly excluded from summative grade calculations."
  },
  {
    "id": 54,
    "topicRef": "DO 8, s. 2015: Descriptors for Grading Scale",
    "question": "In DepEd's K to 12 grading scale, what is the official descriptor for a Transmuted Grade of 90–100?",
    "options": [
      {
        "key": "A",
        "text": "Very Satisfactory (85-89)"
      },
      {
        "key": "B",
        "text": "Fairly Satisfactory (75-79)"
      },
      {
        "key": "C",
        "text": "Satisfactory (80-84)"
      },
      {
        "key": "D",
        "text": "Outstanding"
      }
    ],
    "correctAnswer": "D",
    "explanation": "DepEd Grading Descriptors: 90-100 = Outstanding; 85-89 = Very Satisfactory; 80-84 = Satisfactory; 75-79 = Fairly Satisfactory; Below 75 = Did Not Meet Expectations."
  },
  {
    "id": 55,
    "topicRef": "DO 8, s. 2015: Remediation and Promotion",
    "question": "Under DepEd guidelines, if a student fails one (1) or two (2) learning areas at the end of the school year, what is required before promotion?",
    "options": [
      {
        "key": "A",
        "text": "The student is expelled from school."
      },
      {
        "key": "B",
        "text": "The student must take remedial classes and obtain a recomputed final grade of at least 75 in the failed learning areas to be promoted."
      },
      {
        "key": "C",
        "text": "The student is automatically retained in the same grade level without remediation."
      },
      {
        "key": "D",
        "text": "The student skips to college."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Students who fail 1–2 subjects undergo remedial classes during summer; failing 3 or more subjects results in grade retention."
  },
  {
    "id": 56,
    "topicRef": "Authentic Assessment: Process-Oriented vs Product-Oriented",
    "question": "Observing and evaluating a nursing student's sterile technique and step-by-step hand hygiene procedure during a clinical simulation is an example of:",
    "options": [
      {
        "key": "A",
        "text": "Process-Oriented Performance Assessment"
      },
      {
        "key": "B",
        "text": "Product-Oriented Performance Assessment"
      },
      {
        "key": "C",
        "text": "Norm-Referenced Test"
      },
      {
        "key": "D",
        "text": "Paper-and-Pencil Assessment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Process-Oriented assessment focuses on how the student executes the procedural steps/technique, while Product-Oriented assessment focuses on the finished tangible output."
  },
  {
    "id": 57,
    "topicRef": "Authentic Assessment: Product-Oriented",
    "question": "Evaluating a student's completed wooden dining chair based on craftsmanship, durability, aesthetic finish, and structural stability is a:",
    "options": [
      {
        "key": "A",
        "text": "Product-Oriented Assessment"
      },
      {
        "key": "B",
        "text": "Diagnostic Test"
      },
      {
        "key": "C",
        "text": "Standardized Battery"
      },
      {
        "key": "D",
        "text": "Process-Oriented Assessment"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Product-Oriented assessment evaluates the quality, functionality, and craftsmanship of the final tangible artifact or creative output."
  },
  {
    "id": 58,
    "topicRef": "Portfolio Assessment: Types of Portfolios",
    "question": "A portfolio containing a student's initial drafts, revised edits, teacher feedback sheets, and final masterpiece to document progress over time is a:",
    "options": [
      {
        "key": "A",
        "text": "Evaluation / Assessment Portfolio"
      },
      {
        "key": "B",
        "text": "Showcase / Best-Works Portfolio"
      },
      {
        "key": "C",
        "text": "Employment Portfolio"
      },
      {
        "key": "D",
        "text": "Growth / Development Portfolio"
      }
    ],
    "correctAnswer": "D",
    "explanation": "A Growth Portfolio captures learning development over time through chronological drafts, reflections, and revisions."
  },
  {
    "id": 59,
    "topicRef": "Portfolio Assessment: Showcase Portfolio",
    "question": "A curated collection displaying only the student's highest-quality, polished, and award-winning final artistic creations for an exhibition is a:",
    "options": [
      {
        "key": "A",
        "text": "Working / Process Portfolio"
      },
      {
        "key": "B",
        "text": "Showcase / Display Portfolio"
      },
      {
        "key": "C",
        "text": "Diagnostic Portfolio"
      },
      {
        "key": "D",
        "text": "Remedial Portfolio"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Showcase Portfolio highlights the student's pinnacle accomplishments, best works, and exemplary artifacts."
  },
  {
    "id": 60,
    "topicRef": "Assessment Bias & Cultural Fairness",
    "question": "A word problem on a national math exam uses terminology and cultural references familiar only to wealthy urban students (e.g., ski resorts, golf country clubs). This test suffers from:",
    "options": [
      {
        "key": "A",
        "text": "High Content Validity"
      },
      {
        "key": "B",
        "text": "Internal Consistency"
      },
      {
        "key": "C",
        "text": "Cultural / Socio-Economic Assessment Bias"
      },
      {
        "key": "D",
        "text": "Construct Underrepresentation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Assessment bias occurs when test items contain offensive or unfairly unfamiliar cultural/socioeconomic contexts that disadvantage specific student sub-groups."
  },
  {
    "id": 61,
    "topicRef": "Standard Error of Measurement (SEM)",
    "question": "What does the Standard Error of Measurement (SEM) estimate in educational testing?",
    "options": [
      {
        "key": "A",
        "text": "The amount of error or variation expected in an individual's observed score compared to their hypothetical 'True Score'."
      },
      {
        "key": "B",
        "text": "The total number of questions."
      },
      {
        "key": "C",
        "text": "The cost of printing test booklets."
      },
      {
        "key": "D",
        "text": "The teacher's grading speed."
      }
    ],
    "correctAnswer": "A",
    "explanation": "SEM measures test score precision: (\\text{Observed Score} = \\text{True Score} pm \\text{Error}). A higher test reliability yields a smaller SEM."
  },
  {
    "id": 62,
    "topicRef": "Construct-Irrelevant Variance",
    "question": "A mathematics word problem uses overly dense, convoluted vocabulary, causing a student with weak English reading skills to fail despite having superior math abilities. This is an example of:",
    "options": [
      {
        "key": "A",
        "text": "Criterion Mastery"
      },
      {
        "key": "B",
        "text": "High Predictive Power"
      },
      {
        "key": "C",
        "text": "Construct Representation"
      },
      {
        "key": "D",
        "text": "Construct-Irrelevant Variance (unintended variables contaminating test validity)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Construct-irrelevant variance occurs when unrelated factors (e.g. complex reading hurdles in a pure math test) interfere with measuring the true target construct."
  },
  {
    "id": 63,
    "topicRef": "Construct Underrepresentation",
    "question": "When a 100-item final exam covers only Chapter 1 and completely omits Chapters 2 to 10 of the syllabus, the test suffers from:",
    "options": [
      {
        "key": "A",
        "text": "High Reliability"
      },
      {
        "key": "B",
        "text": "Construct Underrepresentation (failing to sample the full breadth of the learning domain)"
      },
      {
        "key": "C",
        "text": "Construct Overextension"
      },
      {
        "key": "D",
        "text": "Split-Half Equivalence"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Construct underrepresentation happens when an assessment is too narrow, failing to measure important aspects of the intended learning domain."
  },
  {
    "id": 64,
    "topicRef": "Objective vs Subjective Scoring",
    "question": "Which of the following test formats has the HIGHEST Scorer Reliability and objective scoring?",
    "options": [
      {
        "key": "A",
        "text": "Oral Interview"
      },
      {
        "key": "B",
        "text": "Multiple Choice / Binary Choice (True-False) with an answer key"
      },
      {
        "key": "C",
        "text": "Dramatic Acting Roleplay"
      },
      {
        "key": "D",
        "text": "Extended Response Essay"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Selected-response objective items have predetermined unambiguous keys, yielding 100% scorer reliability regardless of who grades the test."
  },
  {
    "id": 65,
    "topicRef": "Halo Effect in Grading",
    "question": "A teacher awards a high grade on an essay to a student simply because the student is well-behaved, polite, and handsome, rather than evaluating the essay content. This cognitive bias is the:",
    "options": [
      {
        "key": "A",
        "text": "Horn Effect"
      },
      {
        "key": "B",
        "text": "Leniency Error"
      },
      {
        "key": "C",
        "text": "Central Tendency Bias"
      },
      {
        "key": "D",
        "text": "Halo Effect"
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Halo Effect occurs when an evaluator's positive general impression of a student's personality or demeanor influences the grading of unrelated academic work."
  },
  {
    "id": 66,
    "topicRef": "Horn Effect in Grading",
    "question": "A teacher harshly grades a student's well-written research paper with a low score because the teacher dislikes the student's messy hair. This bias is the:",
    "options": [
      {
        "key": "A",
        "text": "Horn Effect"
      },
      {
        "key": "B",
        "text": "Hawthorne Effect"
      },
      {
        "key": "C",
        "text": "Halo Effect"
      },
      {
        "key": "D",
        "text": "Placebo Effect"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Horn Effect is the reverse halo effect: allowing an unfavorable personal perception to unfairly deflate academic evaluations."
  },
  {
    "id": 67,
    "topicRef": "Generosity / Leniency Error vs Severity Error",
    "question": "A teacher who gives all students passing marks of 95 regardless of quality to avoid conflict is committing:",
    "options": [
      {
        "key": "A",
        "text": "Measurement Precision"
      },
      {
        "key": "B",
        "text": "Severity Error"
      },
      {
        "key": "C",
        "text": "Leniency / Generosity Error"
      },
      {
        "key": "D",
        "text": "Central Tendency Error"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Leniency Error occurs when a rater constantly scores students too generously; Severity Error occurs when a rater grades too harshly."
  },
  {
    "id": 68,
    "topicRef": "Central Tendency Error in Rating",
    "question": "When a rater avoids using extreme high or extreme low ratings on a rubric and assigns all students middle-range scores (e.g. 3 out of 5), the rater commits:",
    "options": [
      {
        "key": "A",
        "text": "Sampling Error"
      },
      {
        "key": "B",
        "text": "Central Tendency Error"
      },
      {
        "key": "C",
        "text": "Halo Error"
      },
      {
        "key": "D",
        "text": "Contrast Error"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Central Tendency Error is the reluctance of a rater to assign extreme high or low scores, clustering all evaluations in the safe middle."
  },
  {
    "id": 69,
    "topicRef": "Blind Grading Strategy",
    "question": "How can teachers effectively mitigate halo effect and subjective bias when scoring essay examinations?",
    "options": [
      {
        "key": "A",
        "text": "Ask students to grade their own papers with permanent ink."
      },
      {
        "key": "B",
        "text": "Flip a coin for each essay."
      },
      {
        "key": "C",
        "text": "Grade all papers while looking at student photos."
      },
      {
        "key": "D",
        "text": "Mask or hide student names (Blind Grading) and grade all Question 1s for the entire class before moving to Question 2."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Blind grading (anonymizing papers) and question-by-question scoring ensure consistency across criteria and eliminate subconscious student-identity bias."
  },
  {
    "id": 70,
    "topicRef": "Testing Matching Items: Column Design",
    "question": "When constructing Matching-Type test items, why should the number of Options (Column B) exceed the number of Premises (Column A)?",
    "options": [
      {
        "key": "A",
        "text": "To make Column B look longer."
      },
      {
        "key": "B",
        "text": "To prevent students from arriving at the final correct answer through mere process of elimination without genuine knowledge."
      },
      {
        "key": "C",
        "text": "Because odd numbers are lucky."
      },
      {
        "key": "D",
        "text": "To increase paper weight."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Having extra options in Column B eliminates guessing through process of elimination on the final remaining items."
  },
  {
    "id": 71,
    "topicRef": "Constructing Essay Items",
    "question": "Which of the following is a well-formulated essay prompt that elicits higher-order thinking skills?",
    "options": [
      {
        "key": "A",
        "text": "'Compare and contrast the economic impacts of the Spanish Encomienda system versus American free trade policies on 20th-century Philippine agriculture. Support your thesis with at least three historical examples.'"
      },
      {
        "key": "B",
        "text": "'List the names of all Philippine presidents.'"
      },
      {
        "key": "C",
        "text": "'Write anything you know about Philippine history.'"
      },
      {
        "key": "D",
        "text": "'What year did Magellan arrive in the Philippines?'"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Effective essay prompts provide clear scope, specific analytical cognitive tasks (compare/contrast, evaluate), and explicit performance criteria."
  },
  {
    "id": 72,
    "topicRef": "Dynamic Assessment (Feuerstein)",
    "question": "Reuven Feuerstein's 'Dynamic Assessment' utilizes a 'Test-Intervene-Retest' model to evaluate:",
    "options": [
      {
        "key": "A",
        "text": "Rote memory capacity."
      },
      {
        "key": "B",
        "text": "Reading speed."
      },
      {
        "key": "C",
        "text": "A learner's Cognitive Modifiability and learning potential when provided with mediated learning scaffolding."
      },
      {
        "key": "D",
        "text": "Static IQ score."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dynamic Assessment evaluates learning potential and structural cognitive modifiability within Vygotsky's ZPD through interactive mediation."
  },
  {
    "id": 73,
    "topicRef": "Authentic Assessment: GRASPS Model (Wiggins & McTighe)",
    "question": "In Understanding by Design (UbD), what do the letters in the GRASPS authentic performance task model stand for?",
    "options": [
      {
        "key": "A",
        "text": "General, Regular, Academic, Standard, Performance, and System"
      },
      {
        "key": "B",
        "text": "Growth, Readiness, Ability, Skill, Practice, and Success"
      },
      {
        "key": "C",
        "text": "Grades, Rubrics, Assessment, Science, Projects, and Scores"
      },
      {
        "key": "D",
        "text": "Goal, Role, Audience, Situation, Product/Performance, and Standards for Success"
      }
    ],
    "correctAnswer": "D",
    "explanation": "GRASPS contextualizes authentic performance tasks: Goal (real-world objective), Role (student's persona), Audience (target clients), Situation (context), Product (deliverable), and Standards (rubric criteria)."
  },
  {
    "id": 74,
    "topicRef": "Feedback Principles (Hattie & Timperley)",
    "question": "According to John Hattie and Helen Timperley, powerful learning feedback must answer which three fundamental questions for the student?",
    "options": [
      {
        "key": "A",
        "text": "Who is to blame? | Why did I fail? | How much is the fee?"
      },
      {
        "key": "B",
        "text": "What is my rank? | What is my grade? | Who got the highest?"
      },
      {
        "key": "C",
        "text": "Where am I going? (Feed Up) | How am I doing? (Feed Back) | Where to next? (Feed Forward)"
      },
      {
        "key": "D",
        "text": "When is the test? | What page is it? | Is it multiple choice?"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Effective pedagogical feedback clarifies learning goals (Feed Up), provides descriptive progress data (Feed Back), and provides actionable next steps for growth (Feed Forward)."
  },
  {
    "id": 75,
    "topicRef": "Holistic Purpose of Assessment",
    "question": "In 21st-century learner-centered education, what is the ultimate purpose of educational assessment?",
    "options": [
      {
        "key": "A",
        "text": "To humiliate and weed out struggling students."
      },
      {
        "key": "B",
        "text": "To empower, support, and enhance student learning, guide pedagogical improvement, and verify authentic achievement of meaningful life competencies."
      },
      {
        "key": "C",
        "text": "To generate paperwork for school archives."
      },
      {
        "key": "D",
        "text": "To rank students into superior and inferior human categories."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Modern assessment is educational and transformative: its core purpose is to nurture student growth, inform responsive teaching, and build lifelong competence."
  }
];
