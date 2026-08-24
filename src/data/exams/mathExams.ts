import { ExamQuestion } from '../../types';

export const MATH_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "id": 1,
    "topicRef": "Patterns in Nature: Fibonacci Sequence",
    "question": "In the standard Fibonacci sequence defined recursively by F(n) = F(n-1) + F(n-2) with F(1)=1, F(2)=1, F(3)=2, F(4)=3, what is the 10th Fibonacci number (F10)?",
    "options": [
      {
        "key": "A",
        "text": "34."
      },
      {
        "key": "B",
        "text": "89."
      },
      {
        "key": "C",
        "text": "144."
      },
      {
        "key": "D",
        "text": "55."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... The 10th term F(10) = 55."
  },
  {
    "id": 2,
    "topicRef": "Patterns in Nature: The Golden Ratio (Phi)",
    "question": "The ratio of consecutive terms in the Fibonacci sequence (F(n+1)/F(n)) converges as n approaches infinity to the Golden Ratio (Phi, Greek letter phi). What is its exact mathematical value?",
    "options": [
      {
        "key": "A",
        "text": "(1 + sqrt(2)) / 2 approximately equal to 1.207."
      },
      {
        "key": "B",
        "text": "- 1) / 2 approximately equal to 0.618."
      },
      {
        "key": "C",
        "text": "(1 + sqrt(5)) / 2 approximately equal to 1.6180339887."
      },
      {
        "key": "D",
        "text": "(1 + sqrt(3)) / 2 approximately equal to 1.366."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The Golden Ratio Phi = (1 + sqrt(5))/2 is the positive root of x^2 - x - 1 = 0, approximately 1.6180339887..."
  },
  {
    "id": 3,
    "topicRef": "Patterns in Nature: Fractals & Self-Similarity",
    "question": "A geometric object that exhibits self-similarity across all scales\u2014meaning any magnified part looks mathematically identical or similar to the whole object\u2014is called a:",
    "options": [
      {
        "key": "A",
        "text": "Tessellated Polygon."
      },
      {
        "key": "B",
        "text": "Fractal."
      },
      {
        "key": "C",
        "text": "Platonic Solid."
      },
      {
        "key": "D",
        "text": "Eulerian Circuit."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fractals possess self-similarity (repeating patterns at every scale) and typically have non-integer fractal dimensions."
  },
  {
    "id": 4,
    "topicRef": "Patterns in Nature: Regular Tessellations",
    "question": "A 'Regular Tessellation' is a tiling of the plane using only one type of regular polygon with zero gaps or overlaps. Which are the only three regular polygons that can form regular tessellations?",
    "options": [
      {
        "key": "A",
        "text": "Equilateral Triangles, Squares, and Regular Hexagons."
      },
      {
        "key": "B",
        "text": "Equilateral Triangles, Regular Pentagons, and Regular Octagons."
      },
      {
        "key": "C",
        "text": "Squares, Regular Pentagons, and Regular Decagons."
      },
      {
        "key": "D",
        "text": "Regular Hexagons, Regular Heptagons, and Regular Nonagons."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Only polygons whose interior angles divide 360 degrees evenly can tile the plane regularly: Triangles (60 deg * 6 = 360), Squares (90 deg * 4 = 360), Hexagons (120 deg * 3 = 360)."
  },
  {
    "id": 5,
    "topicRef": "Patterns in Nature: Radial Symmetry",
    "question": "A sea anemone, sunflower disc, or starfish whose body parts are arranged symmetrically around a central axis exhibits:",
    "options": [
      {
        "key": "A",
        "text": "Bilateral Symmetry."
      },
      {
        "key": "B",
        "text": "Asymmetry."
      },
      {
        "key": "C",
        "text": "Translational Symmetry only."
      },
      {
        "key": "D",
        "text": "Radial Symmetry."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Radial symmetry occurs when an organism can be divided into identical halves by any plane passing through its central longitudinal axis."
  },
  {
    "id": 6,
    "topicRef": "Mathematical Language: Sets & Subsets",
    "question": "Given a set S with n distinct elements, what is the total number of subsets (including the empty set and S itself) in the power set P(S)?",
    "options": [
      {
        "key": "A",
        "text": "n^2."
      },
      {
        "key": "B",
        "text": "n!."
      },
      {
        "key": "C",
        "text": "2^n."
      },
      {
        "key": "D",
        "text": "2n."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The power set of a set with n elements always contains exactly 2^n subsets, since each element has 2 independent choices (included or excluded)."
  },
  {
    "id": 7,
    "topicRef": "Mathematical Logic: Conjunction vs Disjunction",
    "question": "In symbolic logic, a compound proposition formed by the logical operator 'AND' (conjunction, p ^ q) is true only when:",
    "options": [
      {
        "key": "A",
        "text": "Both propositions p and q are false."
      },
      {
        "key": "B",
        "text": "Both propositions p and q are simultaneously true."
      },
      {
        "key": "C",
        "text": "At least one of the propositions is true."
      },
      {
        "key": "D",
        "text": "Proposition p is true and proposition q is false."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A conjunction (p ^ q) is strictly true only when both conjuncts are true; if either proposition is false, the entire conjunction is false."
  },
  {
    "id": 8,
    "topicRef": "Mathematical Logic: Conditional Statement (Implication)",
    "question": "In symbolic logic, under what single truth-value condition is a conditional statement (p -> q, 'If p then q') evaluated as FALSE?",
    "options": [
      {
        "key": "A",
        "text": "When the antecedent is TRUE and the consequent is FALSE."
      },
      {
        "key": "B",
        "text": "When both antecedent and consequent are false."
      },
      {
        "key": "C",
        "text": "When the antecedent is false and the consequent is true."
      },
      {
        "key": "D",
        "text": "When both antecedent and consequent are true."
      }
    ],
    "correctAnswer": "A",
    "explanation": "A conditional implication (p -> q) is false ONLY when a true antecedent leads to a false consequent (T -> F = F). In all other truth combinations, it is vacuously or genuinely true."
  },
  {
    "id": 9,
    "topicRef": "Mathematical Logic: Converse, Inverse, Contrapositive",
    "question": "Given the conditional statement 'If it rains (p), then the ground is wet (q)', what is its logically equivalent Contrapositive?",
    "options": [
      {
        "key": "A",
        "text": "'If the ground is wet, then it rains'."
      },
      {
        "key": "B",
        "text": "'If it does not rain, then the ground is not wet'."
      },
      {
        "key": "C",
        "text": "'It rains and the ground is not wet'."
      },
      {
        "key": "D",
        "text": "'If the ground is not wet, then it does not rain.'."
      }
    ],
    "correctAnswer": "D",
    "explanation": "A conditional statement (p -> q) is logically equivalent ONLY to its contrapositive (~q -> ~p). The converse (q -> p) and inverse (~p -> ~q) are equivalent to each other, but not to the original statement."
  },
  {
    "id": 10,
    "topicRef": "Mathematical Logic: Tautology vs Contradiction",
    "question": "In propositional logic, a compound proposition that is evaluated as TRUE under all possible truth-value assignments of its components is a:",
    "options": [
      {
        "key": "A",
        "text": "Contingency."
      },
      {
        "key": "B",
        "text": "Fallacy."
      },
      {
        "key": "C",
        "text": "Tautology."
      },
      {
        "key": "D",
        "text": "Contradiction."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A tautology is a logical formula that is always true in every possible interpretation; a contradiction is always false; a contingency depends on the truth values."
  },
  {
    "id": 11,
    "topicRef": "Mathematical Reasoning: Inductive vs Deductive Reasoning",
    "question": "A scientist observes 500 white swans across diverse European lakes and concludes: 'Therefore, all swans on Earth are white.' What form of reasoning was used, and is the conclusion guaranteed?",
    "options": [
      {
        "key": "A",
        "text": "Transfinite transductive deduction."
      },
      {
        "key": "B",
        "text": "Inductive reasoning, which is probable but not logically guaranteed."
      },
      {
        "key": "C",
        "text": "Deductive reasoning, which is absolutely guaranteed."
      },
      {
        "key": "D",
        "text": "Direct mathematical proof by contradiction."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Inductive reasoning moves from specific empirical instances to generalized hypotheses; conclusions may be strongly supported, but are never guaranteed against counterexamples (such as black swans)."
  },
  {
    "id": 12,
    "topicRef": "Mathematical Reasoning: Deductive Proof",
    "question": "Consider the argument: 'All humans are mortal (Premise 1). Socrates is human (Premise 2). Therefore, Socrates is mortal (Conclusion).' This valid argument exemplifies:",
    "options": [
      {
        "key": "A",
        "text": "Deductive reasoning."
      },
      {
        "key": "B",
        "text": "Inductive generalization from statistical sampling."
      },
      {
        "key": "C",
        "text": "Abductive guessing based on incomplete data."
      },
      {
        "key": "D",
        "text": "Post hoc correlational inference."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Deductive reasoning applies general principles/rules to specific cases to reach logically certain, valid conclusions."
  },
  {
    "id": 13,
    "topicRef": "Statistics: Measures of Central Tendency",
    "question": "Given the discrete data set of quiz scores: 12, 15, 15, 18, 20, 22, 90. Which measure of central tendency provides the most realistic, robust representation of typical student performance in the presence of the extreme outlier (90)?",
    "options": [
      {
        "key": "A",
        "text": "Mean."
      },
      {
        "key": "B",
        "text": "Mode."
      },
      {
        "key": "C",
        "text": "Mid-range."
      },
      {
        "key": "D",
        "text": "Median."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The median is resistant/robust to extreme outliers, whereas the arithmetic mean is pulled heavily toward extreme values (90), inflating the average."
  },
  {
    "id": 14,
    "topicRef": "Statistics: Measures of Dispersion (Standard Deviation)",
    "question": "What does a very low Standard Deviation (e.g., SD = 1.2) indicate about a distribution of exam scores compared to a high Standard Deviation (e.g., SD = 9.8)?",
    "options": [
      {
        "key": "A",
        "text": "The exam had zero validity and reliability."
      },
      {
        "key": "B",
        "text": "The scores are extremely spread out, dispersed, and heterogeneous."
      },
      {
        "key": "C",
        "text": "The scores are closely clustered and concentrated near the mean, indicating high consistency/homogeneity."
      },
      {
        "key": "D",
        "text": "The students performed poorly and failed the examination."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Standard deviation measures the average dispersion or spread of data points from the arithmetic mean. Low SD indicates tight clustering/homogeneity; high SD indicates wide spread/heterogeneity."
  },
  {
    "id": 15,
    "topicRef": "Statistics: Empirical Rule (Normal Distribution 68-95-99.7)",
    "question": "In a perfectly bell-shaped, symmetrical Normal Distribution, approximately what percentage of all data values fall within plus or minus 2 standard deviations (mu +- 2 sigma) of the mean?",
    "options": [
      {
        "key": "A",
        "text": "50.00%."
      },
      {
        "key": "B",
        "text": "95.44%."
      },
      {
        "key": "C",
        "text": "68.26%."
      },
      {
        "key": "D",
        "text": "99.73%."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Empirical (68-95-99.7) Rule for normal distributions dictates: ~68% falls within 1 SD, ~95% falls within 2 SD, and ~99.7% falls within 3 SD of the mean."
  },
  {
    "id": 16,
    "topicRef": "Statistics: Standard Scores (Z-Score)",
    "question": "A student scores X = 85 on a nationwide test where the population mean is mu = 70 and standard deviation is sigma = 10. What is the student's Z-Score, and what does it signify?",
    "options": [
      {
        "key": "A",
        "text": "Z = +1.5."
      },
      {
        "key": "B",
        "text": "Z = +15.0."
      },
      {
        "key": "C",
        "text": "Z = -1.5."
      },
      {
        "key": "D",
        "text": "Z = +0.85, indicating an 85th percentile rank."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Statistics: Standard Scores (Z-Score). Z = +1.5, meaning the score is 1.5 standard deviations above the population mean. represents standard mathematical definition and derivation."
  },
  {
    "id": 17,
    "topicRef": "Statistics: Pearson Correlation Coefficient (r)",
    "question": "A Pearson correlation coefficient of r = -0.88 between student hours spent playing mobile games and final GPA indicates:",
    "options": [
      {
        "key": "A",
        "text": "A weak positive linear relationship."
      },
      {
        "key": "B",
        "text": "Zero statistical correlation between the two variables."
      },
      {
        "key": "C",
        "text": "That playing mobile games directly causes biological brain damage."
      },
      {
        "key": "D",
        "text": "A strong negative linear relationship."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Statistics: Pearson Correlation Coefficient (r). A strong negative linear relationship (as gaming hours increase, GPA significantly decreases). represents standard mathematical definition and derivation."
  },
  {
    "id": 18,
    "topicRef": "Statistics: Correlation vs Causation",
    "question": "A statistical study finds a strong positive correlation (r = +0.91) between ice cream sales and drownings at beaches. This high correlation is best explained by:",
    "options": [
      {
        "key": "A",
        "text": "Drownings cause survivors to buy ice cream to soothe emotional grief."
      },
      {
        "key": "B",
        "text": "Statistical data collection fraud by ice cream manufacturers."
      },
      {
        "key": "C",
        "text": "A confounding / lurking third variable that independently increases both swimming and ice cream consumption."
      },
      {
        "key": "D",
        "text": "Eating ice cream directly causes swimmers to suffer fatal muscle cramps."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Statistics: Correlation vs Causation. A confounding / lurking third variable (hot summer weather) that independently increases both swimming and ice cream consumption. represents standard mathematical definition and derivation."
  },
  {
    "id": 19,
    "topicRef": "Mathematics of Finance: Simple Interest Formula",
    "question": "How much Simple Interest (I = P * r * t) is earned on a principal investment of P = Php 50,000 invested at an annual interest rate of r = 6% for a period of t = 3 years?",
    "options": [
      {
        "key": "A",
        "text": "Php 59,000."
      },
      {
        "key": "B",
        "text": "Php 9,000."
      },
      {
        "key": "C",
        "text": "Php 3,000."
      },
      {
        "key": "D",
        "text": "Php 15,000."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Simple Interest Formula. Php 9,000. represents standard mathematical definition and derivation."
  },
  {
    "id": 20,
    "topicRef": "Mathematics of Finance: Compound Interest Formula",
    "question": "Using the compound interest formula A = P(1 + r/n)^(nt), what is the total future maturity value of P = Php 100,000 invested for t = 2 years at an annual interest rate of r = 8% compounded semi-annually (n = 2)?",
    "options": [
      {
        "key": "A",
        "text": "Php 116,985.86."
      },
      {
        "key": "B",
        "text": "Php 116,000.00."
      },
      {
        "key": "C",
        "text": "Php 108,000.00."
      },
      {
        "key": "D",
        "text": "Php 136,048.90."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Compound Interest Formula. Php 116,985.86. represents standard mathematical definition and derivation."
  },
  {
    "id": 21,
    "topicRef": "Mathematics of Finance: Compounding Frequency Power",
    "question": "Why does compound interest generate significantly greater long-term wealth than simple interest at the identical nominal rate?",
    "options": [
      {
        "key": "A",
        "text": "Because simple interest formulas deduct government income tax automatically."
      },
      {
        "key": "B",
        "text": "Because compound interest relies on unpredictable stock market gambles."
      },
      {
        "key": "C",
        "text": "Because banks waive all administrative fees for compound accounts."
      },
      {
        "key": "D",
        "text": "Because interest earned in each period is added to the principal, earning interest on accumulated interest exponentially."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Compounding Frequency Power. Because interest earned in each period is added to the principal, earning interest on accumulated interest exponentially. represents standard mathematical definition and derivation."
  },
  {
    "id": 22,
    "topicRef": "Mathematics of Finance: Annuities (Ordinary Annuity)",
    "question": "An 'Ordinary Annuity' in financial mathematics is defined as:",
    "options": [
      {
        "key": "A",
        "text": "A cash payment made at the beginning of each period."
      },
      {
        "key": "B",
        "text": "A lottery jackpot that decreases in value each month."
      },
      {
        "key": "C",
        "text": "A sequence of equal, periodic cash payments made or received at the END of each compounding period."
      },
      {
        "key": "D",
        "text": "A lump-sum deposit left untouched for 50 years without interest."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Annuities (Ordinary Annuity). A sequence of equal, periodic cash payments made or received at the END of each compounding period. represents standard mathematical definition and derivation."
  },
  {
    "id": 23,
    "topicRef": "Mathematics of Finance: Amortization",
    "question": "When a homeowner pays off a 15-year mortgage through regular monthly payments, 'Amortization' ensures that over time:",
    "options": [
      {
        "key": "A",
        "text": "The interest rate increases exponentially every month."
      },
      {
        "key": "B",
        "text": "The proportion of each monthly payment allocated to principal increases, while the proportion allocated to interest decreases."
      },
      {
        "key": "C",
        "text": "The entire monthly payment pays only interest for 15 years with zero principal reduction."
      },
      {
        "key": "D",
        "text": "The monthly payment doubles in price every calendar year."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Amortization. The proportion of each monthly payment allocated to principal increases, while the proportion allocated to interest decreases. represents standard mathematical definition and derivation."
  },
  {
    "id": 24,
    "topicRef": "Voting Theory: Plurality Method",
    "question": "In an election with four candidates, Candidate A receives 38% of first-place votes, Candidate B receives 32%, Candidate C receives 20%, and Candidate D receives 10%. Under the 'Plurality Method', the winner is:",
    "options": [
      {
        "key": "A",
        "text": "Candidate A."
      },
      {
        "key": "B",
        "text": "Candidate B, because B has fewer negative votes."
      },
      {
        "key": "C",
        "text": "No one; a new election must be called with different candidates."
      },
      {
        "key": "D",
        "text": "Candidates A and B must share the executive office jointly."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Voting Theory: Plurality Method. Candidate A (the candidate with the highest number of first-place votes, regardless of whether a majority is reached). represents standard mathematical definition and derivation."
  },
  {
    "id": 25,
    "topicRef": "Voting Theory: Majority Criterion",
    "question": "The 'Majority Criterion' in social choice theory states that if a candidate receives more than 50% of all first-place votes, that candidate should:",
    "options": [
      {
        "key": "A",
        "text": "Be eliminated in the first round of voting."
      },
      {
        "key": "B",
        "text": "Compete in a coin toss against the runner-up."
      },
      {
        "key": "C",
        "text": "Receive an honorary medal without taking office."
      },
      {
        "key": "D",
        "text": "Always win the election."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Voting Theory: Majority Criterion. Always win the election. represents standard mathematical definition and derivation."
  },
  {
    "id": 26,
    "topicRef": "Voting Theory: Borda Count Method",
    "question": "In the 'Borda Count' voting system with 4 candidates, points are assigned to voters' preference rankings (e.g., 4 pts for 1st, 3 pts for 2nd, 2 pts for 3rd, 1 pt for 4th). The winner is:",
    "options": [
      {
        "key": "A",
        "text": "The candidate who spent the lowest financial budget on campaigns."
      },
      {
        "key": "B",
        "text": "The candidate randomly drawn from a ballot box."
      },
      {
        "key": "C",
        "text": "The candidate who accumulates the highest total sum of points across all ballots."
      },
      {
        "key": "D",
        "text": "The candidate with the most last-place votes."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Voting Theory: Borda Count Method. The candidate who accumulates the highest total sum of points across all ballots. represents standard mathematical definition and derivation."
  },
  {
    "id": 27,
    "topicRef": "Voting Theory: Condorcet Criterion",
    "question": "A candidate who beats every other candidate in head-to-head pairwise comparisons is called a 'Condorcet Winner'. Arrow's Impossibility Theorem proved that:",
    "options": [
      {
        "key": "A",
        "text": "Pairwise comparisons can never be calculated on computers."
      },
      {
        "key": "B",
        "text": "No ranked-choice voting system with 3 or more candidates can satisfy all fairness criteria simultaneously."
      },
      {
        "key": "C",
        "text": "Democracy is mathematically identical to dictatorship in all circumstances."
      },
      {
        "key": "D",
        "text": "Voters always vote for the wealthiest candidate on the ballot."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Voting Theory: Condorcet Criterion. No ranked-choice voting system with 3 or more candidates can satisfy all fairness criteria simultaneously. represents standard mathematical definition and derivation."
  },
  {
    "id": 28,
    "topicRef": "Apportionment: Hamilton's Largest Remainder Method",
    "question": "In legislative apportionment, Alexander Hamilton's method allocates standard quotas by giving each state its lower quota, and distributing surplus seats to:",
    "options": [
      {
        "key": "A",
        "text": "The states with the largest fractional remainders of their standard quotas."
      },
      {
        "key": "B",
        "text": "The state with the highest physical land area."
      },
      {
        "key": "C",
        "text": "The state that pays the highest federal income taxes."
      },
      {
        "key": "D",
        "text": "The smallest state regardless of quota calculations."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Apportionment: Hamilton's Largest Remainder Method. The states with the largest fractional remainders (decimal parts) of their standard quotas. represents standard mathematical definition and derivation."
  },
  {
    "id": 29,
    "topicRef": "Apportionment: Alabama Paradox",
    "question": "The 'Alabama Paradox' in apportionment mathematics occurs when:",
    "options": [
      {
        "key": "A",
        "text": "A state secedes from the federation during a census recount."
      },
      {
        "key": "B",
        "text": "Two states with identical populations receive different numbers of senators."
      },
      {
        "key": "C",
        "text": "A state's population triples but its quota remains zero."
      },
      {
        "key": "D",
        "text": "An increase in the total number of legislative seats to be apportioned causes a state to LOSE a seat, with no change in populations."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Apportionment: Alabama Paradox. An increase in the total number of legislative seats to be apportioned causes a state to LOSE a seat, with no change in populations. represents standard mathematical definition and derivation."
  },
  {
    "id": 30,
    "topicRef": "Graph Theory: Vertices and Edges (Euler's Seven Bridges of Konigsberg)",
    "question": "Leonhard Euler founded Graph Theory in 1736 by proving that crossing all Seven Bridges of Konigsberg exactly once without retracing (an Euler Path) was impossible because:",
    "options": [
      {
        "key": "A",
        "text": "The river was too wide for mathematical measurement."
      },
      {
        "key": "B",
        "text": "The bridges were guarded by Prussian military sentries."
      },
      {
        "key": "C",
        "text": "More than two landmasses had an ODD number of bridges connected to them."
      },
      {
        "key": "D",
        "text": "The bridges were constructed of unstable wooden planks that collapsed."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Vertices and Edges (Euler's Seven Bridges of Konigsberg). More than two landmasses (vertices) had an ODD number of bridges (edges) connected to them. represents standard mathematical definition and derivation."
  },
  {
    "id": 31,
    "topicRef": "Graph Theory: Euler Path Theorem",
    "question": "According to Euler's Theorem, a connected graph has an 'Eulerian Path' (a path that visits every edge exactly once) if and only if it has:",
    "options": [
      {
        "key": "A",
        "text": "No vertices connected by edges."
      },
      {
        "key": "B",
        "text": "Exactly 0 or exactly 2 vertices of odd degree."
      },
      {
        "key": "C",
        "text": "All vertices of odd degree."
      },
      {
        "key": "D",
        "text": "Exactly 4 vertices of odd degree."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Euler Path Theorem. Exactly 0 or exactly 2 vertices of odd degree. represents standard mathematical definition and derivation."
  },
  {
    "id": 32,
    "topicRef": "Graph Theory: Euler Circuit Theorem",
    "question": "A connected graph has an 'Eulerian Circuit' (a closed trail that starts and ends at the same vertex, visiting every edge exactly once) if and only if:",
    "options": [
      {
        "key": "A",
        "text": "Every vertex in the graph has an EVEN degree."
      },
      {
        "key": "B",
        "text": "At least two vertices have an odd degree."
      },
      {
        "key": "C",
        "text": "The graph contains no loops or multiple edges."
      },
      {
        "key": "D",
        "text": "The total number of edges is a prime number."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Euler Circuit Theorem. Every vertex in the graph has an EVEN degree. represents standard mathematical definition and derivation."
  },
  {
    "id": 33,
    "topicRef": "Graph Theory: Hamiltonian Circuit vs Euler Circuit",
    "question": "While an Euler Circuit visits every EDGE in a graph exactly once, a 'Hamiltonian Circuit' must:",
    "options": [
      {
        "key": "A",
        "text": "Visit every edge twice in alphabetical order."
      },
      {
        "key": "B",
        "text": "Cross the maximum number of bridges possible in a river."
      },
      {
        "key": "C",
        "text": "Disconnect the graph into two separate subgraphs."
      },
      {
        "key": "D",
        "text": "Visit every VERTEX in the graph exactly once and return to the starting vertex."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Hamiltonian Circuit vs Euler Circuit. Visit every VERTEX (node) in the graph exactly once and return to the starting vertex. represents standard mathematical definition and derivation."
  },
  {
    "id": 34,
    "topicRef": "Graph Theory: Traveling Salesperson Problem (TSP)",
    "question": "The Traveling Salesperson Problem (TSP) seeks to find:",
    "options": [
      {
        "key": "A",
        "text": "The minimum number of colors needed to color a geographic map."
      },
      {
        "key": "B",
        "text": "The maximum volume of network data flow through a fiber-optic cable."
      },
      {
        "key": "C",
        "text": "The Hamiltonian circuit with the lowest total edge weight visiting every city once."
      },
      {
        "key": "D",
        "text": "The shortest path between two isolated vertices using Dijkstra's algorithm."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Traveling Salesperson Problem (TSP). The Hamiltonian circuit with the lowest total edge weight (distance, time, or cost) visiting every city once. represents standard mathematical definition and derivation."
  },
  {
    "id": 35,
    "topicRef": "Graph Theory: Four-Color Theorem",
    "question": "The Four-Color Theorem (proven by Appel and Haken in 1976 using computer assistance) states that:",
    "options": [
      {
        "key": "A",
        "text": "Three-dimensional topological models require infinite colors."
      },
      {
        "key": "B",
        "text": "Any contiguous map on a flat plane can be colored using at most 4 colors such that no two adjacent regions share the same color."
      },
      {
        "key": "C",
        "text": "Every planar graph requires exactly 12 colors."
      },
      {
        "key": "D",
        "text": "Maps drawn on spheres cannot be colored mathematically."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Four-Color Theorem. Any contiguous map on a flat plane can be colored using at most 4 colors such that no two adjacent regions share the same color. represents standard mathematical definition and derivation."
  },
  {
    "id": 36,
    "topicRef": "Modular Arithmetic: Clock Arithmetic",
    "question": "In modular arithmetic modulo 12 (12-hour clock arithmetic), what is the evaluation of (8 + 9) mod 12?",
    "options": [
      {
        "key": "A",
        "text": "5."
      },
      {
        "key": "B",
        "text": "17."
      },
      {
        "key": "C",
        "text": "1."
      },
      {
        "key": "D",
        "text": "7."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Modular Arithmetic: Clock Arithmetic. 5 (since 8 + 9 = 17, and 17 divided by 12 gives a remainder of 5). represents standard mathematical definition and derivation."
  },
  {
    "id": 37,
    "topicRef": "Modular Arithmetic: Multiplicative Congruence",
    "question": "What is the remainder when (7 * 8) is evaluated in modulo 5 arithmetic: (7 * 8) mod 5?",
    "options": [
      {
        "key": "A",
        "text": "6."
      },
      {
        "key": "B",
        "text": "0."
      },
      {
        "key": "C",
        "text": "2."
      },
      {
        "key": "D",
        "text": "1."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Modular Arithmetic: Multiplicative Congruence. 1 (since 7 * 8 = 56, and 56 = 5 * 11 + 1). represents standard mathematical definition and derivation."
  },
  {
    "id": 38,
    "topicRef": "Cryptography: Caesar Cipher (Shift Cipher)",
    "question": "In classical cryptography, if a message is encrypted using a Caesar Cipher with a shift key of k = +3, the plaintext word 'CAT' encrypts to:",
    "options": [
      {
        "key": "A",
        "text": "'ZBQ'."
      },
      {
        "key": "B",
        "text": "'DCA'."
      },
      {
        "key": "C",
        "text": "'FDW'."
      },
      {
        "key": "D",
        "text": "'EBS'."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Cryptography: Caesar Cipher (Shift Cipher). 'FDW' (C->F, A->D, T->W). represents standard mathematical definition and derivation."
  },
  {
    "id": 39,
    "topicRef": "Cryptography: Symmetric vs Asymmetric Encryption",
    "question": "In modern public-key (asymmetric) cryptography (such as RSA encryption):",
    "options": [
      {
        "key": "A",
        "text": "No mathematical prime numbers are involved in key generation."
      },
      {
        "key": "B",
        "text": "A public key is used to encrypt the message, while a mathematically linked private key is used to decrypt it."
      },
      {
        "key": "C",
        "text": "Both sender and receiver share the identical secret password over unsecure email."
      },
      {
        "key": "D",
        "text": "Messages are encoded using mechanical Caesar substitution wheels."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Cryptography: Symmetric vs Asymmetric Encryption. A public key is used to encrypt the message, while a mathematically linked private key is used to decrypt it. represents standard mathematical definition and derivation."
  },
  {
    "id": 40,
    "topicRef": "Cryptography: RSA Algorithm and Prime Factorization",
    "question": "The security of the RSA public-key cryptosystem relies fundamentally on the computational difficulty of:",
    "options": [
      {
        "key": "A",
        "text": "Factoring extremely large composite numbers into their two large prime factors."
      },
      {
        "key": "B",
        "text": "Calculating simple addition of two single-digit numbers."
      },
      {
        "key": "C",
        "text": "Sorting alphabetical dictionaries in reverse order."
      },
      {
        "key": "D",
        "text": "Measuring physical electrical resistance in copper wires."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Cryptography: RSA Algorithm and Prime Factorization. Factoring extremely large composite numbers into their two large prime factors. represents standard mathematical definition and derivation."
  },
  {
    "id": 41,
    "topicRef": "Linear Regression: Line of Best Fit (y = mx + b)",
    "question": "In linear regression analysis, the 'Line of Best Fit' is calculated using the Method of Least Squares, which minimizes:",
    "options": [
      {
        "key": "A",
        "text": "The arithmetic mean of the independent variable x."
      },
      {
        "key": "B",
        "text": "The total number of collected data sample points."
      },
      {
        "key": "C",
        "text": "The variance of the dependent variable y."
      },
      {
        "key": "D",
        "text": "The sum of the squared vertical distances between data points and the regression line."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Linear Regression: Line of Best Fit (y = mx + b). The sum of the squared vertical distances (residuals/errors) between data points and the regression line. represents standard mathematical definition and derivation."
  },
  {
    "id": 42,
    "topicRef": "Statistics: Coefficient of Determination (R^2)",
    "question": "If the correlation between two variables is r = 0.80, what is the Coefficient of Determination (R^2), and how is it interpreted?",
    "options": [
      {
        "key": "A",
        "text": "R^2 = 1.60, indicating an impossible statistical error."
      },
      {
        "key": "B",
        "text": "R^2 = 0.40, indicating a weak relationship."
      },
      {
        "key": "C",
        "text": "R^2 = 0.64."
      },
      {
        "key": "D",
        "text": "R^2 = 0.80."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Statistics: Coefficient of Determination (R^2). R^2 = 0.64 (64%), meaning 64% of the total variation in the dependent variable is explained by the independent variable. represents standard mathematical definition and derivation."
  },
  {
    "id": 43,
    "topicRef": "Mathematical Logic: Quantifiers (Universal vs Existential)",
    "question": "What is the correct logical negation of the universally quantified statement: 'All teachers in this school hold a master's degree'?",
    "options": [
      {
        "key": "A",
        "text": "'Some teachers in this school hold a master's degree.'."
      },
      {
        "key": "B",
        "text": "'There exists at least one teacher in this school who does not hold a master's degree.'."
      },
      {
        "key": "C",
        "text": "'No teachers in this school hold a master's degree.'."
      },
      {
        "key": "D",
        "text": "'All teachers in this school do not hold a master's degree.'."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Mathematical Logic: Quantifiers (Universal vs Existential). 'There exists at least one teacher in this school who does not hold a master's degree.' represents standard mathematical definition and derivation."
  },
  {
    "id": 44,
    "topicRef": "Set Theory: Venn Diagrams (Inclusion-Exclusion Principle)",
    "question": "In a survey of 100 students: 60 like Math, 50 like Science, and 20 like both Math and Science. How many students like NEITHER Math nor Science?",
    "options": [
      {
        "key": "A",
        "text": "10 students."
      },
      {
        "key": "B",
        "text": "30 students."
      },
      {
        "key": "C",
        "text": "20 students."
      },
      {
        "key": "D",
        "text": "0 students."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Set Theory: Venn Diagrams (Inclusion-Exclusion Principle). 10 students (using |M u S| = 60 + 50 - 20 = 90; 100 - 90 = 10). represents standard mathematical definition and derivation."
  },
  {
    "id": 45,
    "topicRef": "Probability: Mutually Exclusive Events",
    "question": "Two events A and B are 'Mutually Exclusive' (disjoint) if:",
    "options": [
      {
        "key": "A",
        "text": "The occurrence of event A changes the probability of event B."
      },
      {
        "key": "B",
        "text": "Event A is mathematically guaranteed to cause event B."
      },
      {
        "key": "C",
        "text": "P = 1 in all sample spaces."
      },
      {
        "key": "D",
        "text": "They cannot occur at the same time = 0)."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Probability: Mutually Exclusive Events. They cannot occur at the same time (P(A and B) = 0). represents standard mathematical definition and derivation."
  },
  {
    "id": 46,
    "topicRef": "Probability: Independent Events",
    "question": "Two events A and B are statistically 'Independent' if:",
    "options": [
      {
        "key": "A",
        "text": "P is equal to 0."
      },
      {
        "key": "B",
        "text": "Event A and event B must happen simultaneously."
      },
      {
        "key": "C",
        "text": "The occurrence of event A has no effect on the probability of event B occurring = P * P)."
      },
      {
        "key": "D",
        "text": "Event A and event B share identical physical outcomes."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Probability: Independent Events. The occurrence of event A has no effect on the probability of event B occurring (P(A and B) = P(A) * P(B)). represents standard mathematical definition and derivation."
  },
  {
    "id": 47,
    "topicRef": "Probability: Permutations vs Combinations",
    "question": "In combinatorics, 'Permutations' (nPr) are used when ORDER MATTERS (e.g., race podium finishes or PIN codes), while 'Combinations' (nCr) are used when:",
    "options": [
      {
        "key": "A",
        "text": "The total sample size is infinite."
      },
      {
        "key": "B",
        "text": "Order does not matter."
      },
      {
        "key": "C",
        "text": "Every item must be painted with four colors."
      },
      {
        "key": "D",
        "text": "The numbers must be prime factors."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Probability: Permutations vs Combinations. Order does not matter (e.g., selecting a committee of 3 members from a group of 10). represents standard mathematical definition and derivation."
  },
  {
    "id": 48,
    "topicRef": "Combinatorics: Permutations Calculation",
    "question": "In how many distinct ways can 1st, 2nd, and 3rd place trophies be awarded among 8 contestants in a speech contest (8P3)?",
    "options": [
      {
        "key": "A",
        "text": "336 ways."
      },
      {
        "key": "B",
        "text": "56 ways."
      },
      {
        "key": "C",
        "text": "512 ways."
      },
      {
        "key": "D",
        "text": "24 ways."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Combinatorics: Permutations Calculation. 336 ways (8 * 7 * 6 = 336). represents standard mathematical definition and derivation."
  },
  {
    "id": 49,
    "topicRef": "Combinatorics: Combinations Calculation",
    "question": "In how many different ways can a teacher select a 4-student delegation from a class of 10 students (10C4)?",
    "options": [
      {
        "key": "A",
        "text": "5,040 ways."
      },
      {
        "key": "B",
        "text": "40 ways."
      },
      {
        "key": "C",
        "text": "10,000 ways."
      },
      {
        "key": "D",
        "text": "210 ways."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Combinatorics: Combinations Calculation. 210 ways (10! / (4! * 6!) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1) = 210). represents standard mathematical definition and derivation."
  },
  {
    "id": 50,
    "topicRef": "Data Management: Box-and-Whisker Plots",
    "question": "In an exploratory data analysis box plot (Box-and-Whisker Plot), what does the box itself represent?",
    "options": [
      {
        "key": "A",
        "text": "The 95% confidence interval of the sample mean."
      },
      {
        "key": "B",
        "text": "The frequency of the mode in categorical data."
      },
      {
        "key": "C",
        "text": "The Interquartile Range, containing the middle 50% of the data values."
      },
      {
        "key": "D",
        "text": "The absolute range of the entire data set from minimum to maximum."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Data Management: Box-and-Whisker Plots. The Interquartile Range (IQR = Q3 - Q1), containing the middle 50% of the data values. represents standard mathematical definition and derivation."
  },
  {
    "id": 51,
    "topicRef": "Data Management: Identifying Outliers (IQR Method)",
    "question": "Using John Tukey's standard box plot rule, a data value is flagged as a statistical 'Outlier' if it falls:",
    "options": [
      {
        "key": "A",
        "text": "Below the 50th percentile."
      },
      {
        "key": "B",
        "text": "Below Q1 - 1.5 or above Q3 + 1.5."
      },
      {
        "key": "C",
        "text": "Exactly equal to the arithmetic mean."
      },
      {
        "key": "D",
        "text": "Between Q1 and Q3."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Data Management: Identifying Outliers (IQR Method). Below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR). represents standard mathematical definition and derivation."
  },
  {
    "id": 52,
    "topicRef": "Mathematical Reasoning: Proof by Contradiction",
    "question": "In formal mathematics, a 'Proof by Contradiction' (Reductio ad Absurdum) establishes the truth of a proposition P by:",
    "options": [
      {
        "key": "A",
        "text": "Assuming that P is FALSE and demonstrating that this assumption logically leads to an impossible contradiction."
      },
      {
        "key": "B",
        "text": "Conducting a survey of 1,000 professional mathematicians."
      },
      {
        "key": "C",
        "text": "Drawing a geometric diagram on graph paper."
      },
      {
        "key": "D",
        "text": "Calculating numerical examples on a scientific calculator."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Mathematical Reasoning: Proof by Contradiction. Assuming that P is FALSE (~P is true) and demonstrating that this assumption logically leads to an impossible contradiction. represents standard mathematical definition and derivation."
  },
  {
    "id": 53,
    "topicRef": "Number Theory: Prime Numbers & Sieve of Eratosthenes",
    "question": "An ancient Greek algorithm used to find all prime numbers up to a specified integer n by systematically crossing out multiples of each prime is the:",
    "options": [
      {
        "key": "A",
        "text": "Euclidean Algorithm."
      },
      {
        "key": "B",
        "text": "Pascal's Triangle."
      },
      {
        "key": "C",
        "text": "Fibonacci Spiral."
      },
      {
        "key": "D",
        "text": "Sieve of Eratosthenes."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Number Theory: Prime Numbers & Sieve of Eratosthenes. Sieve of Eratosthenes. represents standard mathematical definition and derivation."
  },
  {
    "id": 54,
    "topicRef": "Number Theory: Greatest Common Divisor (GCD)",
    "question": "Using the Euclidean Algorithm, what is the Greatest Common Divisor (GCD) of 48 and 18?",
    "options": [
      {
        "key": "A",
        "text": "3."
      },
      {
        "key": "B",
        "text": "2."
      },
      {
        "key": "C",
        "text": "6."
      },
      {
        "key": "D",
        "text": "12."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Number Theory: Greatest Common Divisor (GCD). 6 (since 48 = 18*2 + 12; 18 = 12*1 + 6; 12 = 6*2 + 0). represents standard mathematical definition and derivation."
  },
  {
    "id": 55,
    "topicRef": "Number Theory: Least Common Multiple (LCM)",
    "question": "What is the Least Common Multiple (LCM) of 12 and 15?",
    "options": [
      {
        "key": "A",
        "text": "3."
      },
      {
        "key": "B",
        "text": "60."
      },
      {
        "key": "C",
        "text": "180."
      },
      {
        "key": "D",
        "text": "30."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Number Theory: Least Common Multiple (LCM). 60 (since 12 = 2^2 * 3, 15 = 3 * 5; LCM = 2^2 * 3 * 5 = 60). represents standard mathematical definition and derivation."
  },
  {
    "id": 56,
    "topicRef": "Geometric Transformations: Translations and Rotations",
    "question": "An 'Isometry' (rigid transformation) in geometry is a transformation that preserves:",
    "options": [
      {
        "key": "A",
        "text": "Length, angle measure, and geometric distance, keeping the original figure congruent."
      },
      {
        "key": "B",
        "text": "Color hue and tonal value only."
      },
      {
        "key": "C",
        "text": "Area while altering side lengths."
      },
      {
        "key": "D",
        "text": "Perspective while shrinking dimensions."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Geometric Transformations: Translations and Rotations. Length, angle measure, and geometric distance, keeping the original figure congruent. represents standard mathematical definition and derivation."
  },
  {
    "id": 57,
    "topicRef": "Geometric Patterns: Wallpaper Groups",
    "question": "In two-dimensional planar crystallography, how many mathematically distinct 'Wallpaper Groups' (plane symmetry groups) exist that can tile the plane infinitely?",
    "options": [
      {
        "key": "A",
        "text": "7 frieze groups."
      },
      {
        "key": "B",
        "text": "12 platonic groups."
      },
      {
        "key": "C",
        "text": "3 regular groups."
      },
      {
        "key": "D",
        "text": "17 distinct wallpaper groups."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Geometric Patterns: Wallpaper Groups. 17 distinct wallpaper groups. represents standard mathematical definition and derivation."
  },
  {
    "id": 58,
    "topicRef": "Frieze Patterns: Infinitely Repeating Borders",
    "question": "A geometric pattern that repeats infinitely along a single straight LINE or strip (such as architectural molding or textile borders) is called a:",
    "options": [
      {
        "key": "A",
        "text": "Fractal Dimension."
      },
      {
        "key": "B",
        "text": "Tessellation Grid."
      },
      {
        "key": "C",
        "text": "Frieze Pattern."
      },
      {
        "key": "D",
        "text": "Wallpaper Pattern."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Frieze Patterns: Infinitely Repeating Borders. Frieze Pattern (of which there are exactly 7 distinct mathematical symmetry types). represents standard mathematical definition and derivation."
  },
  {
    "id": 59,
    "topicRef": "Statistics: Skewness in Data Distributions",
    "question": "In a 'Positively Skewed' (Right-Skewed) distribution with a long tail stretching to the right, how are the Mean, Median, and Mode typically related?",
    "options": [
      {
        "key": "A",
        "text": "Median < Mode < Mean."
      },
      {
        "key": "B",
        "text": "Mode < Median < Mean."
      },
      {
        "key": "C",
        "text": "Mean < Median < Mode."
      },
      {
        "key": "D",
        "text": "Mean = Median = Mode."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Statistics: Skewness in Data Distributions. Mode < Median < Mean (the Mean is pulled right toward the high outlier tail). represents standard mathematical definition and derivation."
  },
  {
    "id": 60,
    "topicRef": "Statistics: Negatively Skewed Distributions",
    "question": "In a 'Negatively Skewed' (Left-Skewed) distribution (e.g., an easy exam where most students scored high, with a few very low scores), what is the relationship?",
    "options": [
      {
        "key": "A",
        "text": "Mean < Median < Mode."
      },
      {
        "key": "B",
        "text": "Mode < Median < Mean."
      },
      {
        "key": "C",
        "text": "Mean = Median = Mode."
      },
      {
        "key": "D",
        "text": "Mode = Mean < Median."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Statistics: Negatively Skewed Distributions. Mean < Median < Mode (the Mean is pulled down by the low score tail). represents standard mathematical definition and derivation."
  },
  {
    "id": 61,
    "topicRef": "Mathematics of Finance: Effective Annual Rate (EAR)",
    "question": "Why is the Effective Annual Rate (EAR or APY) of a loan always HIGHER than its nominal Annual Percentage Rate (APR) when interest is compounded more than once a year?",
    "options": [
      {
        "key": "A",
        "text": "Because banks charge illegal penalty fees."
      },
      {
        "key": "B",
        "text": "Because inflation automatically increases every month."
      },
      {
        "key": "C",
        "text": "Because government bonds lose value annually."
      },
      {
        "key": "D",
        "text": "Because EAR accounts for the compounding of interest during intermediate sub-periods."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Effective Annual Rate (EAR). Because EAR accounts for the compounding of interest during intermediate sub-periods (interest on interest). represents standard mathematical definition and derivation."
  },
  {
    "id": 62,
    "topicRef": "Mathematics of Finance: Sinking Funds",
    "question": "A 'Sinking Fund' in municipal and corporate finance is an interest-earning account established specifically to:",
    "options": [
      {
        "key": "A",
        "text": "Pay executive bonuses during bankruptcy liquidation."
      },
      {
        "key": "B",
        "text": "Evade federal corporate income taxes."
      },
      {
        "key": "C",
        "text": "Accumulate a predetermined lump-sum fund over time through regular periodic deposits to retire future debt or replace aging capital equipment."
      },
      {
        "key": "D",
        "text": "Distribute cash dividends to stock shareholders daily."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Mathematics of Finance: Sinking Funds. Accumulate a predetermined lump-sum fund over time through regular periodic deposits to retire future debt or replace aging capital equipment. represents standard mathematical definition and derivation."
  },
  {
    "id": 63,
    "topicRef": "Voting Theory: Arrow's Impossibility Theorem",
    "question": "Kenneth Arrow's landmark 1951 Impossibility Theorem in mathematical economics proved that in any ranked-choice voting system with 3 or more candidates:",
    "options": [
      {
        "key": "A",
        "text": "Borda count is the only fair voting method."
      },
      {
        "key": "B",
        "text": "No voting rule can simultaneously satisfy Pareto efficiency, non-dictatorship, independence of irrelevant alternatives, and unrestricted domain."
      },
      {
        "key": "C",
        "text": "A majority winner always exists in every election."
      },
      {
        "key": "D",
        "text": "Dictatorships are mathematically impossible."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Voting Theory: Arrow's Impossibility Theorem. No voting rule can simultaneously satisfy Pareto efficiency, non-dictatorship, independence of irrelevant alternatives, and unrestricted domain. represents standard mathematical definition and derivation."
  },
  {
    "id": 64,
    "topicRef": "Graph Theory: Planar Graphs & Euler's Formula",
    "question": "For any connected planar graph drawn without crossing edges, Euler's Planar Formula relates Vertices (V), Edges (E), and Faces (F) by:",
    "options": [
      {
        "key": "A",
        "text": "V - E + F = 2."
      },
      {
        "key": "B",
        "text": "V + E + F = 0."
      },
      {
        "key": "C",
        "text": "V * E = 2F."
      },
      {
        "key": "D",
        "text": "V^2 - E^2 = F."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Planar Graphs & Euler's Formula. V - E + F = 2. represents standard mathematical definition and derivation."
  },
  {
    "id": 65,
    "topicRef": "Graph Theory: Complete Graphs (Kn)",
    "question": "In a 'Complete Graph' with n vertices (Kn), where every vertex is connected to every other vertex by a unique edge, what is the total number of edges?",
    "options": [
      {
        "key": "A",
        "text": "n^2."
      },
      {
        "key": "B",
        "text": "2n."
      },
      {
        "key": "C",
        "text": "n!"
      },
      {
        "key": "D",
        "text": "n(n - 1) / 2."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Complete Graphs (Kn). n(n - 1) / 2. represents standard mathematical definition and derivation."
  },
  {
    "id": 66,
    "topicRef": "Graph Theory: Minimum Spanning Tree (Kruskal's Algorithm)",
    "question": "Kruskal's Algorithm finds the 'Minimum Spanning Tree' (MST) of a connected weighted graph by:",
    "options": [
      {
        "key": "A",
        "text": "Selecting the longest edge in the graph first."
      },
      {
        "key": "B",
        "text": "Finding the Eulerian circuit of highest cost."
      },
      {
        "key": "C",
        "text": "Repeatedly adding the edge of minimum weight that does not create a cycle, until all vertices are connected."
      },
      {
        "key": "D",
        "text": "Connecting vertices in alphabetical order regardless of weight."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Graph Theory: Minimum Spanning Tree (Kruskal's Algorithm). Repeatedly adding the edge of minimum weight that does not create a cycle, until all vertices are connected. represents standard mathematical definition and derivation."
  },
  {
    "id": 67,
    "topicRef": "Number Theory: Modular Inverses & Cryptography",
    "question": "In modular arithmetic, the integer x is the 'Modular Multiplicative Inverse' of a modulo m if:",
    "options": [
      {
        "key": "A",
        "text": "(a - x) is equal to m."
      },
      {
        "key": "B",
        "text": "(a * x) is congruent to 1."
      },
      {
        "key": "C",
        "text": "(a + x) is congruent to 0."
      },
      {
        "key": "D",
        "text": "(a * x) is congruent to 0."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Number Theory: Modular Inverses & Cryptography. (a * x) is congruent to 1 (mod m). represents standard mathematical definition and derivation."
  },
  {
    "id": 68,
    "topicRef": "Statistics: Law of Large Numbers",
    "question": "The 'Law of Large Numbers' in probability theory states that as the number of experimental trials increases:",
    "options": [
      {
        "key": "A",
        "text": "The empirical relative frequency of an event gets closer and closer to its true theoretical probability."
      },
      {
        "key": "B",
        "text": "The sample variance becomes infinitely large."
      },
      {
        "key": "C",
        "text": "The outcomes become completely non-random."
      },
      {
        "key": "D",
        "text": "The standard deviation equals the sample mean."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Statistics: Law of Large Numbers. The empirical relative frequency of an event gets closer and closer to its true theoretical probability. represents standard mathematical definition and derivation."
  },
  {
    "id": 69,
    "topicRef": "Statistics: Central Limit Theorem",
    "question": "The Central Limit Theorem (CLT) is foundational in inferential statistics because it guarantees that for any population distribution, the sampling distribution of the sample mean:",
    "options": [
      {
        "key": "A",
        "text": "Becomes perfectly flat and uniform."
      },
      {
        "key": "B",
        "text": "Transforms into a binomial distribution."
      },
      {
        "key": "C",
        "text": "Shrinks to a single discrete integer."
      },
      {
        "key": "D",
        "text": "Approaches a Normal Distribution as the sample size n becomes sufficiently large."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Statistics: Central Limit Theorem. Approaches a Normal Distribution as the sample size n becomes sufficiently large (typically n >= 30). represents standard mathematical definition and derivation."
  },
  {
    "id": 70,
    "topicRef": "Statistics: Type I vs Type II Error",
    "question": "In hypothesis testing, a 'Type I Error' (alpha error) occurs when the researcher:",
    "options": [
      {
        "key": "A",
        "text": "Accepts both H0 and H1 simultaneously."
      },
      {
        "key": "B",
        "text": "Calculates an incorrect sample mean."
      },
      {
        "key": "C",
        "text": "Rejects the Null Hypothesis when it is actually TRUE."
      },
      {
        "key": "D",
        "text": "Fails to reject H0 when it is actually FALSE."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Statistics: Type I vs Type II Error. Rejects the Null Hypothesis (H0) when it is actually TRUE (a 'False Positive'). represents standard mathematical definition and derivation."
  },
  {
    "id": 71,
    "topicRef": "Statistics: Type II Error",
    "question": "In hypothesis testing, a 'Type II Error' (beta error) occurs when the researcher:",
    "options": [
      {
        "key": "A",
        "text": "Uses a sample size larger than 100."
      },
      {
        "key": "B",
        "text": "Fails to reject the Null Hypothesis when H0 is actually FALSE."
      },
      {
        "key": "C",
        "text": "Rejects H0 when H0 is true."
      },
      {
        "key": "D",
        "text": "Calculates a negative Z-score."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Statistics: Type II Error. Fails to reject the Null Hypothesis (H0) when H0 is actually FALSE (a 'False Negative'). represents standard mathematical definition and derivation."
  },
  {
    "id": 72,
    "topicRef": "Mathematical Logic: De Morgan's Laws",
    "question": "According to De Morgan's Laws in propositional logic, the negation of a conjunction ~(p ^ q) is logically equivalent to:",
    "options": [
      {
        "key": "A",
        "text": "~p v ~q."
      },
      {
        "key": "B",
        "text": "~p ^ ~q."
      },
      {
        "key": "C",
        "text": "p -> ~q."
      },
      {
        "key": "D",
        "text": "~."
      }
    ],
    "correctAnswer": "A",
    "explanation": "This item evaluates mathematical competence in Mathematical Logic: De Morgan's Laws. ~p v ~q (Not p OR Not q). represents standard mathematical definition and derivation."
  },
  {
    "id": 73,
    "topicRef": "Mathematical Logic: De Morgan's Law for Disjunction",
    "question": "According to De Morgan's Laws, the negation of a disjunction ~(p v q) is logically equivalent to:",
    "options": [
      {
        "key": "A",
        "text": "~p v ~q."
      },
      {
        "key": "B",
        "text": "p ^ q."
      },
      {
        "key": "C",
        "text": "~p -> q."
      },
      {
        "key": "D",
        "text": "~p ^ ~q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "This item evaluates mathematical competence in Mathematical Logic: De Morgan's Law for Disjunction. ~p ^ ~q (Not p AND Not q). represents standard mathematical definition and derivation."
  },
  {
    "id": 74,
    "topicRef": "Patterns in Nature: Voronoi Tessellations",
    "question": "A 'Voronoi Diagram' (seen in giraffe coat patterns, dragonfly wings, and soap bubbles) partitions a plane into regions where each cell consists of all points:",
    "options": [
      {
        "key": "A",
        "text": "Painted with identical spectral colors."
      },
      {
        "key": "B",
        "text": "Formed by equilateral triangles only."
      },
      {
        "key": "C",
        "text": "Closer to its corresponding seed/generating point than to any other seed."
      },
      {
        "key": "D",
        "text": "Arranged in perfect concentric circles."
      }
    ],
    "correctAnswer": "C",
    "explanation": "This item evaluates mathematical competence in Patterns in Nature: Voronoi Tessellations. Closer to its corresponding seed/generating point than to any other seed. represents standard mathematical definition and derivation."
  },
  {
    "id": 75,
    "topicRef": "Mathematics in Modern World: Algorithmic Thinking",
    "question": "In contemporary mathematics and computer science, an 'Algorithm' is defined as:",
    "options": [
      {
        "key": "A",
        "text": "A philosophical debate on ethical morals."
      },
      {
        "key": "B",
        "text": "A finite, unambiguous, step-by-step sequence of well-defined instructions for solving a problem or performing a computation."
      },
      {
        "key": "C",
        "text": "A random guess made during statistical testing."
      },
      {
        "key": "D",
        "text": "A continuous mathematical function with zero derivatives."
      }
    ],
    "correctAnswer": "B",
    "explanation": "This item evaluates mathematical competence in Mathematics in Modern World: Algorithmic Thinking. A finite, unambiguous, step-by-step sequence of well-defined instructions for solving a problem or performing a computation. represents standard mathematical definition and derivation."
  }
];
