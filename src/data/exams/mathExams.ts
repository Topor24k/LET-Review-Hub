import { ExamQuestion } from '../../types';

export const MATH_EXAM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // 1.0 BASIC MATH: PEMDAS, PRIME FACTORIZATION, LCM & GCF
  // =========================================================================
  {
    id: 1,
    question: "Using the order of operations (PEMDAS), what is the value of: 5 + (3 × 1)² + 4 – 5 ?",
    options: [
      { key: 'A', text: '13' },
      { key: 'B', text: '15' },
      { key: 'C', text: '17' },
      { key: 'D', text: '11' }
    ],
    correctAnswer: 'A',
    explanation: 'Parenthesis: (3 × 1) = 3; Exponent: (3)² = 9; Addition and Subtraction from left to right: 5 + 9 + 4 – 5 = 14 + 4 – 5 = 18 – 5 = 13.',
    topicRef: '1.0 Order of Operations (PEMDAS)'
  },
  {
    id: 2,
    question: "Evaluate the expression: 7 × 3 + 10 × (25 – 5)",
    options: [
      { key: 'A', text: '221' },
      { key: 'B', text: '420' },
      { key: 'C', text: '241' },
      { key: 'D', text: '620' }
    ],
    correctAnswer: 'A',
    explanation: 'Parenthesis: (25 – 5) = 20; Multiplication: 7 × 3 = 21, and 10 × 20 = 200; Addition: 21 + 200 = 221.',
    topicRef: '1.0 Order of Operations (PEMDAS)'
  },
  {
    id: 3,
    question: "What are the prime factors of 52?",
    options: [
      { key: 'A', text: '13 × 2 × 2' },
      { key: 'B', text: '11 × 2 × 3' },
      { key: 'C', text: '23 × 2' },
      { key: 'D', text: '2 × 2 × 2 × 3' }
    ],
    correctAnswer: 'A',
    explanation: '52 = 4 × 13 = 2 × 2 × 13. All factors (2 and 13) are prime numbers and their product is 52.',
    topicRef: '1.0 Prime Factorization'
  },
  {
    id: 4,
    question: "What is the prime factorization of 60?",
    options: [
      { key: 'A', text: '2² × 3 × 5' },
      { key: 'B', text: '2³ × 3 × 5' },
      { key: 'C', text: '4 × 15' },
      { key: 'D', text: '2 × 3² × 5' }
    ],
    correctAnswer: 'A',
    explanation: '60 = 4 × 15 = (2 × 2) × (3 × 5) = 2² × 3 × 5.',
    topicRef: '1.0 Prime Factorization'
  },
  {
    id: 5,
    question: "What is the Least Common Multiple (LCM) of 5 and 9?",
    options: [
      { key: 'A', text: '45' },
      { key: 'B', text: '25' },
      { key: 'C', text: '40' },
      { key: 'D', text: '50' }
    ],
    correctAnswer: 'A',
    explanation: 'Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45... Multiples of 9: 9, 18, 27, 36, 45... The smallest common multiple is 45.',
    topicRef: '1.0 LCM & GCF'
  },
  {
    id: 6,
    question: "What is the Greatest Common Factor (GCF) of 36 and 18?",
    options: [
      { key: 'A', text: '18' },
      { key: 'B', text: '9' },
      { key: 'C', text: '6' },
      { key: 'D', text: '3' }
    ],
    correctAnswer: 'A',
    explanation: '18 divides both 18 (18÷18=1) and 36 (36÷18=2) exactly, making 18 the highest common factor.',
    topicRef: '1.0 LCM & GCF'
  },
  {
    id: 7,
    question: "Camryn practices the trumpet every 11th day and the flute every 3rd day. If she practiced both today, in how many days will she practice both instruments again on the same day?",
    options: [
      { key: 'A', text: '33 days' },
      { key: 'B', text: '22 days' },
      { key: 'C', text: '45 days' },
      { key: 'D', text: '23 days' }
    ],
    correctAnswer: 'A',
    explanation: 'Find the LCM of 11 and 3: since 11 and 3 are prime, LCM(11, 3) = 11 × 3 = 33 days.',
    topicRef: '1.0 LCM & GCF Word Problems'
  },
  {
    id: 8,
    question: "Josefa is making bead necklaces. She has 90 green beads and 108 blue beads. What is the greatest number of identical necklaces she can make using all beads?",
    options: [
      { key: 'A', text: '18' },
      { key: 'B', text: '15' },
      { key: 'C', text: '12' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'A',
    explanation: 'Find the GCF of 90 and 108: 90 = 18 × 5, 108 = 18 × 6. GCF = 18 identical necklaces (each having 5 green and 6 blue beads).',
    topicRef: '1.0 LCM & GCF Word Problems'
  },

  // =========================================================================
  // 2.0 RATIO AND PROPORTION
  // =========================================================================
  {
    id: 9,
    question: "An orchard has 28 apple trees, 27 orange trees, and 14 cherry trees. In simplest form, what is the ratio of apple trees to cherry trees?",
    options: [
      { key: 'A', text: '2:1' },
      { key: 'B', text: '28:14' },
      { key: 'C', text: '1:2' },
      { key: 'D', text: '4:2' }
    ],
    correctAnswer: 'A',
    explanation: 'Ratio of apple to cherry = 28/14 = (28 ÷ 14) / (14 ÷ 14) = 2/1 or 2:1.',
    topicRef: '2.0 Ratio and Proportion'
  },
  {
    id: 10,
    question: "If two pencils cost 3 dollars, how many pencils can you buy with 9 dollars (assuming direct proportion)?",
    options: [
      { key: 'A', text: '6 pencils' },
      { key: 'B', text: '5 pencils' },
      { key: 'C', text: '8 pencils' },
      { key: 'D', text: '12 pencils' }
    ],
    correctAnswer: 'A',
    explanation: 'Direct proportion: 2 / 3 = x / 9 -> 3x = 18 -> x = 6 pencils.',
    topicRef: '2.0 Direct Proportion'
  },
  {
    id: 11,
    question: "It takes 6 hours for 4 workers to repair a road section. How long will it take 8 workers to finish the same job at the same working rate?",
    options: [
      { key: 'A', text: '3 hours' },
      { key: 'B', text: '4 hours' },
      { key: 'C', text: '12 hours' },
      { key: 'D', text: '2 hours' }
    ],
    correctAnswer: 'A',
    explanation: 'Inverse proportion: (x₁)(y₁) = (x₂)(y₂) -> (4)(6) = (8)(t) -> 24 = 8t -> t = 3 hours.',
    topicRef: '2.0 Inverse Proportion'
  },
  {
    id: 12,
    question: "In a class of 40 students, the ratio of boys to girls is 3:5. How many are boys and how many are girls?",
    options: [
      { key: 'A', text: '15 boys and 25 girls' },
      { key: 'B', text: '12 boys and 28 girls' },
      { key: 'C', text: '18 boys and 22 girls' },
      { key: 'D', text: '20 boys and 20 girls' }
    ],
    correctAnswer: 'A',
    explanation: 'Partitive proportion: 3x + 5x = 40 -> 8x = 40 -> x = 5. Boys = 3(5) = 15; Girls = 5(5) = 25.',
    topicRef: '2.0 Partitive Proportion'
  },

  // =========================================================================
  // 3.0 PERCENT, PRB TRIANGLE & BUSINESS MATHEMATICS
  // =========================================================================
  {
    id: 13,
    question: "What is 30% of 700?",
    options: [
      { key: 'A', text: '210' },
      { key: 'B', text: '217' },
      { key: 'C', text: '340' },
      { key: 'D', text: '162' }
    ],
    correctAnswer: 'A',
    explanation: 'Percentage = Base × Rate = 700 × 0.30 = 210.',
    topicRef: '3.0 Percentage, Rate & Base'
  },
  {
    id: 14,
    question: "What percent of 60 is 30?",
    options: [
      { key: 'A', text: '50%' },
      { key: 'B', text: '40%' },
      { key: 'C', text: '47%' },
      { key: 'D', text: '52%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rate = Percentage / Base = 30 / 60 = 0.50 = 50%.',
    topicRef: '3.0 Percentage, Rate & Base'
  },
  {
    id: 15,
    question: "60 is 20% of what number?",
    options: [
      { key: 'A', text: '300' },
      { key: 'B', text: '350' },
      { key: 'C', text: '450' },
      { key: 'D', text: '500' }
    ],
    correctAnswer: 'A',
    explanation: 'Base = Percentage / Rate = 60 / 0.20 = 300.',
    topicRef: '3.0 Percentage, Rate & Base'
  },
  {
    id: 16,
    question: "A student answered 80 problems on a test correctly and received a score of 40%. How many total problems were on the test?",
    options: [
      { key: 'A', text: '200 problems' },
      { key: 'B', text: '120 problems' },
      { key: 'C', text: '150 problems' },
      { key: 'D', text: '250 problems' }
    ],
    correctAnswer: 'A',
    explanation: 'Base = Percentage / Rate = 80 / 0.40 = 200 total test problems.',
    topicRef: '3.0 PRB Word Problems'
  },
  {
    id: 17,
    question: "Out of 45 carpenters in a construction crew, 9 were present. What percent showed up for work?",
    options: [
      { key: 'A', text: '20%' },
      { key: 'B', text: '2%' },
      { key: 'C', text: '22%' },
      { key: 'D', text: '42%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rate = Percentage / Base = 9 / 45 = 1/5 = 0.20 = 20%.',
    topicRef: '3.0 PRB Word Problems'
  },
  {
    id: 18,
    question: "How much simple interest will be paid on a bank loan of ₱10,000.00 at a 2% annual interest rate for 5 years?",
    options: [
      { key: 'A', text: '₱1,000.00' },
      { key: 'B', text: '₱500.00' },
      { key: 'C', text: '₱1,500.00' },
      { key: 'D', text: '₱2,000.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Simple Interest I = Prt = (10,000)(0.02)(5) = ₱1,000.00.',
    topicRef: '3.0 Simple Interest'
  },
  {
    id: 19,
    question: "How much interest would be paid on a loan of ₱30,000.00 for 6 months at 10% annual interest?",
    options: [
      { key: 'A', text: '₱1,500.00' },
      { key: 'B', text: '₱1,000.00' },
      { key: 'C', text: '₱2,000.00' },
      { key: 'D', text: '₱3,000.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Time in years t = 6/12 = 0.5. I = Prt = (30,000)(0.10)(0.5) = ₱1,500.00.',
    topicRef: '3.0 Simple Interest'
  },
  {
    id: 20,
    question: "What is the total amount due (maturity value) on a principal of ₱12,000.00 after adding annual simple interest of 8% for 3 years?",
    options: [
      { key: 'A', text: '₱14,880.00' },
      { key: 'B', text: '₱16,800.00' },
      { key: 'C', text: '₱15,880.00' },
      { key: 'D', text: '₱15,800.00' }
    ],
    correctAnswer: 'A',
    explanation: 'I = Prt = (12,000)(0.08)(3) = ₱2,880.00. Total Amount A = P + I = 12,000 + 2,880 = ₱14,880.00.',
    topicRef: '3.0 Simple Interest'
  },
  {
    id: 21,
    question: "A store pays ₱30.00 for an item and applies a markup of 20%. What is the Selling Price?",
    options: [
      { key: 'A', text: '₱36.00' },
      { key: 'B', text: '₱32.00' },
      { key: 'C', text: '₱24.00' },
      { key: 'D', text: '₱40.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Markup = Cost × Rate = 30 × 0.20 = ₱6.00. Selling Price = Cost + Markup = 30 + 6 = ₱36.00.',
    topicRef: '3.0 Business Math: Markup & Selling Price'
  },
  {
    id: 22,
    question: "Elise bought a dress that was discounted 30% off the original price of ₱200.00. What was the amount of discount and the sale price?",
    options: [
      { key: 'A', text: 'Discount: ₱60.00; Sale Price: ₱140.00' },
      { key: 'B', text: 'Discount: ₱40.00; Sale Price: ₱160.00' },
      { key: 'C', text: 'Discount: ₱70.00; Sale Price: ₱130.00' },
      { key: 'D', text: 'Discount: ₱80.00; Sale Price: ₱120.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Discount = Price × Rate = 200 × 0.30 = ₱60.00. Sale Price = 200 – 60 = ₱140.00.',
    topicRef: '3.0 Business Math: Discount & Sale Price'
  },
  {
    id: 23,
    question: "Maria receives a 15% commission on all sales. If she sold ₱23,000.00 worth of goods this month, what is her commission?",
    options: [
      { key: 'A', text: '₱3,450.00' },
      { key: 'B', text: '₱3,500.00' },
      { key: 'C', text: '₱3,700.00' },
      { key: 'D', text: '₱4,000.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Commission = Amount Sold × Rate = 23,000 × 0.15 = ₱3,450.00.',
    topicRef: '3.0 Business Math: Commission'
  },

  // =========================================================================
  // 4.0 ALGEBRA: NUMBER PROPERTIES, EXPRESSIONS, EQUATIONS & POLYNOMIALS
  // =========================================================================
  {
    id: 24,
    question: "Evaluate the absolute value expression: |6² ÷ 2² – 5|",
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '19' },
      { key: 'C', text: '16' },
      { key: 'D', text: '36' }
    ],
    correctAnswer: 'A',
    explanation: '|6² ÷ 2² – 5| = |36 ÷ 4 – 5| = |9 – 5| = |4| = 4.',
    topicRef: '4.0 Absolute Value'
  },
  {
    id: 25,
    question: "Which number property is demonstrated by the equation: 3(8 + 5) = 3(8) + 3(5) ?",
    options: [
      { key: 'A', text: 'Distributive Property' },
      { key: 'B', text: 'Associative Property' },
      { key: 'C', text: 'Commutative Property' },
      { key: 'D', text: 'Identity Property' }
    ],
    correctAnswer: 'A',
    explanation: 'The factor 3 is distributed to both terms inside the sum, illustrating the Distributive Property of Multiplication over Addition.',
    topicRef: '4.0 Number Properties'
  },
  {
    id: 26,
    question: "Which property states that changing the order of addends does not affect the sum (e.g., 12 + 2 = 2 + 12)?",
    options: [
      { key: 'A', text: 'Commutative Property of Addition' },
      { key: 'B', text: 'Associative Property of Addition' },
      { key: 'C', text: 'Closure Property' },
      { key: 'D', text: 'Additive Inverse Property' }
    ],
    correctAnswer: 'A',
    explanation: 'The Commutative Property allows changing the order of operands without changing the result.',
    topicRef: '4.0 Number Properties'
  },
  {
    id: 27,
    question: "Translate the verbal phrase into an algebraic expression: 'Seven times a number increased by 5'",
    options: [
      { key: 'A', text: '7x + 5' },
      { key: 'B', text: '7(x + 5)' },
      { key: 'C', text: '7x – 5' },
      { key: 'D', text: 'x / 7 + 5' }
    ],
    correctAnswer: 'A',
    explanation: '\'Seven times a number\' is 7x; \'increased by 5\' adds 5 -> 7x + 5.',
    topicRef: '4.0 Translating Algebraic Expressions'
  },
  {
    id: 28,
    question: "Solve for x: 2x + 3x + 2 = 42",
    options: [
      { key: 'A', text: 'x = 8' },
      { key: 'B', text: 'x = 10' },
      { key: 'C', text: 'x = 6' },
      { key: 'D', text: 'x = 7' }
    ],
    correctAnswer: 'A',
    explanation: 'Combine like terms: 5x + 2 = 42 -> 5x = 42 – 2 -> 5x = 40 -> x = 8.',
    topicRef: '4.0 Algebraic Equations'
  },
  {
    id: 29,
    question: "How is the algebraic expression '2xy² – 3z' classified based on its number of terms?",
    options: [
      { key: 'A', text: 'Binomial' },
      { key: 'B', text: 'Monomial' },
      { key: 'C', text: 'Trinomial' },
      { key: 'D', text: 'Multinomial (4 terms)' }
    ],
    correctAnswer: 'A',
    explanation: 'It contains exactly two terms (2xy² and -3z) separated by a subtraction operator, making it a Binomial.',
    topicRef: '4.0 Polynomials'
  },
  {
    id: 30,
    question: "Multiply the binomials: (x + 3)(x + 4)",
    options: [
      { key: 'A', text: 'x² + 7x + 12' },
      { key: 'B', text: 'x² + 7x – 12' },
      { key: 'C', text: 'x² + 3x + 5' },
      { key: 'D', text: 'x² – 7x – 12' }
    ],
    correctAnswer: 'A',
    explanation: 'FOIL method: x² + 4x + 3x + 12 = x² + 7x + 12.',
    topicRef: '4.0 Operations on Polynomials'
  },
  {
    id: 31,
    question: "Factor completely: x² + 13x + 30",
    options: [
      { key: 'A', text: '(x + 3)(x + 10)' },
      { key: 'B', text: '(x + 3)(x – 10)' },
      { key: 'C', text: '(x – 3)(x – 10)' },
      { key: 'D', text: '(x + 5)(x + 6)' }
    ],
    correctAnswer: 'A',
    explanation: 'Find two factors of +30 whose sum is +13: 3 × 10 = 30 and 3 + 10 = 13. Factors are (x + 3)(x + 10).',
    topicRef: '4.0 Factoring Polynomials'
  },
  {
    id: 32,
    question: "Divide: (x² + 7x + 12) ÷ (x + 3)",
    options: [
      { key: 'A', text: 'x + 4' },
      { key: 'B', text: 'x – 3' },
      { key: 'C', text: 'x – 4' },
      { key: 'D', text: 'x + 5' }
    ],
    correctAnswer: 'A',
    explanation: 'Factor numerator: (x + 3)(x + 4) ÷ (x + 3) = x + 4.',
    topicRef: '4.0 Dividing Polynomials'
  },
  {
    id: 33,
    question: "Simplify the rational expression to lowest terms: (7x + 35) / (x² + 5x)",
    options: [
      { key: 'A', text: '7 / x' },
      { key: 'B', text: 'x / 7' },
      { key: 'C', text: 'x + 7' },
      { key: 'D', text: '7 – x' }
    ],
    correctAnswer: 'A',
    explanation: 'Factor numerator and denominator: 7(x + 5) / [x(x + 5)] = 7 / x.',
    topicRef: '4.0 Rationalizing Expressions'
  },
  {
    id: 34,
    question: "A right triangle has legs of lengths a = 3 m and b = 4 m. Using the Pythagorean Theorem (c² = a² + b²), what is the length of the hypotenuse c?",
    options: [
      { key: 'A', text: '5 m' },
      { key: 'B', text: '7 m' },
      { key: 'C', text: '6 m' },
      { key: 'D', text: '25 m' }
    ],
    correctAnswer: 'A',
    explanation: 'c² = 3² + 4² = 9 + 16 = 25 -> c = √25 = 5 m.',
    topicRef: '4.0 Pythagorean Theorem'
  },
  {
    id: 35,
    question: "The hypotenuse of a right triangle is 25 feet. If one leg is 24 feet, what is the length of the other leg?",
    options: [
      { key: 'A', text: '7 feet' },
      { key: 'B', text: '5 feet' },
      { key: 'C', text: '6 feet' },
      { key: 'D', text: '20 feet' }
    ],
    correctAnswer: 'A',
    explanation: 'b² = c² – a² = 25² – 24² = 625 – 576 = 49 -> b = √49 = 7 feet.',
    topicRef: '4.0 Pythagorean Theorem'
  },

  // =========================================================================
  // 5.0 PROBABILITY
  // =========================================================================
  {
    id: 36,
    question: "A gumball machine contains 18 total gumballs (6 blue, 5 yellow, and 7 red). What is the probability of selecting a yellow gumball?",
    options: [
      { key: 'A', text: '5 / 18' },
      { key: 'B', text: '6 / 18 (1/3)' },
      { key: 'C', text: '7 / 18' },
      { key: 'D', text: '1 / 2' }
    ],
    correctAnswer: 'A',
    explanation: 'P(Yellow) = Favorable / Total = 5 / 18.',
    topicRef: '5.0 Probability'
  },
  {
    id: 37,
    question: "Using the same gumball machine (6 blue, 5 yellow, 7 red; total = 18), what is the probability of selecting a blue gumball in simplest form?",
    options: [
      { key: 'A', text: '1 / 3' },
      { key: 'B', text: '5 / 18' },
      { key: 'C', text: '7 / 18' },
      { key: 'D', text: '1 / 6' }
    ],
    correctAnswer: 'A',
    explanation: 'P(Blue) = 6 / 18 = 1 / 3.',
    topicRef: '5.0 Probability'
  },
  {
    id: 38,
    question: "Which of the following statements about probability rules is TRUE?",
    options: [
      { key: 'A', text: 'The probability of any event must be a real number from 0 to 1 inclusive' },
      { key: 'B', text: 'An impossible event has a probability of -1' },
      { key: 'C', text: 'A certain event has a probability of 100' },
      { key: 'D', text: 'The sum of probabilities in a sample space can exceed 1' }
    ],
    correctAnswer: 'A',
    explanation: 'Rule 1: 0 ≤ P(E) ≤ 1. Impossible events equal 0, certain events equal 1, and the total sample space sum equals 1.',
    topicRef: '5.0 Rules of Probability'
  },

  // =========================================================================
  // 6.0 GEOMETRY: ANGLES, POLYGONS & QUADRILATERALS
  // =========================================================================
  {
    id: 39,
    question: "Two angles are complementary. If the first angle measures 35°, what is the measure of the second angle?",
    options: [
      { key: 'A', text: '55°' },
      { key: 'B', text: '145°' },
      { key: 'C', text: '65°' },
      { key: 'D', text: '45°' }
    ],
    correctAnswer: 'A',
    explanation: 'Complementary angles add up to 90°: 90° – 35° = 55°.',
    topicRef: '6.0 Special Angle Pairs'
  },
  {
    id: 40,
    question: "Two angles are supplementary. If one angle measures 110°, what is the measure of the other angle?",
    options: [
      { key: 'A', text: '70°' },
      { key: 'B', text: '80°' },
      { key: 'C', text: '90°' },
      { key: 'D', text: '250°' }
    ],
    correctAnswer: 'A',
    explanation: 'Supplementary angles add up to 180°: 180° – 110° = 70°.',
    topicRef: '6.0 Special Angle Pairs'
  },
  {
    id: 41,
    question: "What is the sum of the interior angles of a Hexagon (6 sides)?",
    options: [
      { key: 'A', text: '720°' },
      { key: 'B', text: '540°' },
      { key: 'C', text: '900°' },
      { key: 'D', text: '1080°' }
    ],
    correctAnswer: 'A',
    explanation: 'Sum = (n – 2) × 180° = (6 – 2) × 180° = 4 × 180° = 720°.',
    topicRef: '6.0 Polygons & Interior Angles'
  },
  {
    id: 42,
    question: "What is the measure of EACH interior angle of a regular Dodecagon (12-sided polygon)?",
    options: [
      { key: 'A', text: '150°' },
      { key: 'B', text: '120°' },
      { key: 'C', text: '135°' },
      { key: 'D', text: '144°' }
    ],
    correctAnswer: 'A',
    explanation: 'Each angle = (n – 2) × 180° / n = (12 – 2) × 180° / 12 = (10 × 180°) / 12 = 1800° / 12 = 150°.',
    topicRef: '6.0 Polygons & Interior Angles'
  },
  {
    id: 43,
    question: "According to the quadrilateral hierarchy, which of the following statements is ALWAYS TRUE?",
    options: [
      { key: 'A', text: 'A square is a rhombus' },
      { key: 'B', text: 'A rhombus is always a square' },
      { key: 'C', text: 'A trapezoid is a parallelogram' },
      { key: 'D', text: 'A kite is a rectangle' }
    ],
    correctAnswer: 'A',
    explanation: 'A square possesses all properties of a rhombus (all sides equal), making every square a rhombus (bottom to top is TRUE).',
    topicRef: '6.0 Quadrilateral Classification'
  },

  // =========================================================================
  // 7.0 PERIMETER, AREA & SOLID GEOMETRY (VOLUME & TOTAL SURFACE AREA)
  // =========================================================================
  {
    id: 44,
    question: "Madi is hanging decorative flowers around the perimeter of a rectangular deck that is 30 feet long and 24 feet wide. How long is the flower garland needed?",
    options: [
      { key: 'A', text: '108 feet' },
      { key: 'B', text: '54 feet' },
      { key: 'C', text: '48 feet' },
      { key: 'D', text: '60 feet' }
    ],
    correctAnswer: 'A',
    explanation: 'Perimeter P = 2(L + W) = 2(30 + 24) = 2(54) = 108 feet.',
    topicRef: '7.0 Perimeter of Plane Figures'
  },
  {
    id: 45,
    question: "What is the area of a rectangular swimming pool that is 30 meters long and 20 meters wide?",
    options: [
      { key: 'A', text: '600 sq. m.' },
      { key: 'B', text: '500 sq. m.' },
      { key: 'C', text: '400 sq. m.' },
      { key: 'D', text: '900 sq. m.' }
    ],
    correctAnswer: 'A',
    explanation: 'Area A = L × W = 30 × 20 = 600 sq. m.',
    topicRef: '7.0 Area of Plane Figures'
  },
  {
    id: 46,
    question: "One side of a square measures 6 inches. What are the perimeter and area of this square?",
    options: [
      { key: 'A', text: 'Perimeter: 24 in; Area: 36 in²' },
      { key: 'B', text: 'Perimeter: 16 in; Area: 20 in²' },
      { key: 'C', text: 'Perimeter: 14 in; Area: 16 in²' },
      { key: 'D', text: 'Perimeter: 25 in; Area: 30 in²' }
    ],
    correctAnswer: 'A',
    explanation: 'Perimeter P = 4s = 4(6) = 24 in. Area A = s² = 6² = 36 in².',
    topicRef: '7.0 Perimeter & Area of Square'
  },
  {
    id: 47,
    question: "A right triangle has a base of 12 inches and a height of 3 inches. What is the area of the triangle?",
    options: [
      { key: 'A', text: '18 in²' },
      { key: 'B', text: '36 in²' },
      { key: 'C', text: '144 in²' },
      { key: 'D', text: '9 in²' }
    ],
    correctAnswer: 'A',
    explanation: 'Area of triangle A = ½ bh = ½(12)(3) = 6 × 3 = 18 in².',
    topicRef: '7.0 Area of Triangle'
  },
  {
    id: 48,
    question: "A circular drum head has a radius of 7 inches. What is its circumference (using π ≈ 22/7 or 3.1416)?",
    options: [
      { key: 'A', text: '44 inches' },
      { key: 'B', text: '154 inches' },
      { key: 'C', text: '110 inches' },
      { key: 'D', text: '36 inches' }
    ],
    correctAnswer: 'A',
    explanation: 'Circumference C = 2πr = 2 × (22/7) × 7 = 44 inches.',
    topicRef: '7.0 Circumference & Area of Circle'
  },
  {
    id: 49,
    question: "A rectangular wooden container has a length of 6 m, width of 3 m, and height of 2 m. What is its Total Surface Area (TSA)?",
    options: [
      { key: 'A', text: '72 sq. m.' },
      { key: 'B', text: '56 sq. m.' },
      { key: 'C', text: '65 sq. m.' },
      { key: 'D', text: '90 sq. m.' }
    ],
    correctAnswer: 'A',
    explanation: 'TSA = 2(LW + WH + HL) = 2[(6)(3) + (3)(2) + (2)(6)] = 2[18 + 6 + 12] = 2[36] = 72 sq. m.',
    topicRef: '7.0 Solid Geometry: Total Surface Area'
  },
  {
    id: 50,
    question: "What is the Volume of a moving truck\'s cargo space that is 10 meters long, 5 meters wide, and 2 meters tall?",
    options: [
      { key: 'A', text: '100 cubic meters' },
      { key: 'B', text: '250 cubic meters' },
      { key: 'C', text: '300 cubic meters' },
      { key: 'D', text: '480 cubic meters' }
    ],
    correctAnswer: 'A',
    explanation: 'Volume V = L × W × H = 10 × 5 × 2 = 100 cubic meters (m³).',
    topicRef: '7.0 Solid Geometry: Volume'
  }
];
