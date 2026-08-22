export interface LessonPage {
  pageNumber: number;
  dayNumber: number;
  dayTitle: string;
  topicTitle: string;
  pdfPageRef: string;
  readTime: string;
  sections: {
    heading?: string;
    subheading?: string;
    type: 'text' | 'bullet_list' | 'numbered_list' | 'table' | 'quote' | 'callout' | 'comparison';
    content?: string;
    items?: string[];
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export const MATHEMATICS_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: BASIC MATH
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Basic Math",
    topicTitle: "Order of Operations (PEMDAS) & Prime Factorization",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Clue: PEMDAS",
        content: "P – parenthesis. E – exponents. MD – multiply and divide from left to right. AS – add and subtract from left to right."
      },
      {
        type: "text",
        heading: "Example 1",
        content: "5 + (3 × 1)² + 4 – 5 = 5 + (3)² + 4 – 5 = 5 + 9 + 4 – 5 = 14 + 4 – 5 = 18 – 5 = ____"
      },
      {
        type: "text",
        heading: "Example 2",
        content: "7 x 3 + 10 x (25 – 5) = 7 x 3 + 10 x ___ = ____ + 10 x 20 = 21 + ___ = ______"
      },
      {
        type: "callout",
        heading: "Prime Factorization",
        content: "Prime Factorization is the process of obtaining prime numbers that must be multiplied together in order to get a particular number. A Prime Number is a number greater than 1 and has only 2 factors: 1 and itself."
      },
      {
        type: "text",
        heading: "Factor Tree Example",
        content: "60 branches into 4 and 15; 4 branches into 2 × 2; 15 branches into 3 × 5. Therefore, the prime factors of 60 are 2, 2, 3 and 5."
      },
      {
        type: "text",
        heading: "Board Exam Question",
        content: "1. What are the prime factors of 52?\nA. 11 x 2 x 3   C. 23 x 2\nB. 13 x 2 x 2   D. 2 x 2 x 2 x 3\n\nTwo conditions must be met: (1) when you multiply the numbers, it should be equal to 52; (2) all numbers multiplied resulting to 52 must be prime numbers.\n\nA. 11 x 2 x 3 = 66, not 52\nB. 13 x 2 x 2 = 52, so B is the answer\nC. 23 x 2 = 46, not 52\nD. 2 x 2 x 2 x 3 = 18, not 52"
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Basic Math",
    topicTitle: "Least Common Multiple (LCM) & Greatest Common Factor (GCF)",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Least Common Multiple (LCM)",
        content: "The Least Common Multiple is the smallest number divisible by all of the numbers in a set. Technique: Find the smallest number in the options that is divisible by all of the numbers in the question. TIP: BOTTOM to TOP."
      },
      {
        type: "text",
        heading: "Example",
        content: "1. What is the least common multiple of 5 and 9?\nA. 25   C. 45\nB. 40   D. 50"
      },
      {
        type: "callout",
        heading: "Greatest Common Factor (GCF)",
        content: "The Greatest Common Factor is the highest number that divides exactly two or more numbers. Technique: Divide the numbers in the question with the biggest number in the option. TIP: TOP to BOTTOM."
      },
      {
        type: "text",
        heading: "Example",
        content: "1. What is the GCF of 36 and 18?\nA. 18   C. 9\nB. 3    D. 6"
      },
      {
        type: "text",
        heading: "LCM Word Problem",
        content: "1. Camryn practices the trumpet every 11th day and the flute every 3rd day. Camryn practiced both the trumpet and the flute today. How many DAYS until Camryn practices the trumpet and flute again in the same day?\nA. 22   C. 23\nB. 45   D. 33"
      },
      {
        type: "text",
        heading: "GCF Word Problem",
        content: "1. Josefa is making bead necklaces. She has 90 green beads and 108 blue beads. What is the greatest number of identical necklaces she can make if she wants to use all of the beads?\nA. 12   C. 16\nB. 15   D. 18"
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Basic Math",
    topicTitle: "Ratio and Proportion",
    pdfPageRef: "PDF Page 2-4",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "What is a Ratio?",
        content: "A ratio is a comparison of two quantities by division. You can write a ratio in different ways: A is to B (in words), A:B (in colon form), A/B (in fraction form). ALWAYS REDUCE TO LOWEST TERM."
      },
      {
        type: "text",
        heading: "Example: Ratio",
        content: "Mang Dino has a farm located south of North Carolina. In his farm, there are 50 cows, 40 chickens, and 100 horses. What is the ratio of cows to chickens?\nColon Form: 50:40 → 5:4 | Words: 50 is to 40 → 5 is to 4 | Fraction: 50/40 → 5/4\n\nAn orchard has 28 apple trees, 27 orange trees, and 14 cherry trees. What is the ratio of apple trees to cherry trees?\nColon Form: 28:14 → 2:1 | Words: 28 is to 14 → 2 is to 1 | Fraction: 28/14 → 2/1"
      },
      {
        type: "callout",
        heading: "What is a Proportion?",
        content: "A proportion is an equality of two ratios – for example, 6/9 = 8/12."
      },
      {
        type: "text",
        heading: "A. Direct Proportion",
        content: "Both quantities increase or both decrease. Formula: x₁/y₁ = x₂/y₂\n\nExample: If two pencils cost 3 dollars, how many pencils can you buy with 9 dollars?\n2/3 = x/9 → Cross multiply → 3x = 18 → Divide both sides by 3 → x = 6"
      },
      {
        type: "text",
        heading: "B. Inverse Proportion",
        content: "One quantity increases, the other decreases and vice versa. Formula: (x₁)(y₁) = (x₂)(y₂)\n\nExample: It takes 6 hours for 4 men to repair a road. How long will it take 8 men to do the job if they work at the same rate?\n(4)(6) = (8)(x) → 24 = 8x → Divide both sides by 8 → x = 3"
      },
      {
        type: "text",
        heading: "C. Partitive Proportion",
        content: "One quantity is being partitioned into different proportions.\n\nExample: In a class of 40, the ratio of boys to girls is 3:5. How many are girls? How many are boys?\n3x + 5x = 40 → 8x = 40 → x = 5\nBoys = 3x = 3(5) = 15\nGirls = 5x = 5(5) = 25"
      }
    ]
  },

  // ==========================================
  // DAY 2: PERCENT, PBR & BUSINESS MATHEMATICS
  // ==========================================
  {
    pageNumber: 4,
    dayNumber: 2,
    dayTitle: "Day 2: Percent, PBR & Business Math",
    topicTitle: "Percent Conversion & Percentage, Rate, Base (PRB)",
    pdfPageRef: "PDF Page 4-5",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Percent",
        content: "Percent means 'per hundred'."
      },
      {
        type: "text",
        heading: "A. Percent to Decimal",
        content: "To convert a percent to decimal, remove the percent symbol and move the decimal point two places to the left.\n55% → .55\n7% → .07"
      },
      {
        type: "text",
        heading: "B. Decimal to Percent",
        content: "To convert decimal to percent, move the decimal point two places to the right and affix the percent symbol.\n.34 → 34%\n.06 → 6%"
      },
      {
        type: "callout",
        heading: "Percentage, Rate and Base — Key Terms",
        content: "'of' usually means multiply. 'is' usually means equals. Percentage (P) – a part of the whole. Base (B) – the whole. Rate (R) – the number usually in percent %."
      },
      {
        type: "text",
        heading: "PRB Formulas",
        content: "P = B × R\nB = P / R\nR = P / B\n(Triangle diagram: PERCENTAGE on top, BASE and RATE on the bottom row)"
      },
      {
        type: "text",
        heading: "Sample Problem on Percentage",
        content: "1. What is the 30% of 700?\nA. 340   C. 162\nB. 217   D. 210\nSolution: P = B x R = 700 x .3 = 210"
      },
      {
        type: "text",
        heading: "Sample Problem on Rate",
        content: "1. What percent of 60 is 30?\nA. 50%   C. 40%\nB. 47%   D. 52%\nSolution: R = P/B = 30/60 = 1/2 = 0.5 = 50%"
      },
      {
        type: "text",
        heading: "Sample Problem on Base",
        content: "1. 60 is 20% of what number?\nA. 350   C. 450\nB. 300   D. 500\nSolution: B = P/R = 60/.2 = 300"
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 2,
    dayTitle: "Day 2: Percent, PBR & Business Math",
    topicTitle: "PBR Word Problems & Simple Interest",
    pdfPageRef: "PDF Page 6-7",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Word Problems on PBR",
        content: "1. A student answered 80 problems on a test correctly and received a grade of 40%. How many problems were on the test, if all the problems were worth the same number of points? (Round to the nearest whole number)\nA. 120   C. 200\nB. 150   D. 250\n\n2. A student earned a grade of 80% on a math test that had 20 problems. How many problems on this test did the student answer correctly?\nA. 14   C. 16\nB. 15   D. 17\n\n3. There are 45 carpenters in a crew. On a certain day, 9 were present. What percent showed up for work?\nA. 2%   C. 22%\nB. 20%  D. 42%"
      },
      {
        type: "callout",
        heading: "Simple Interest",
        content: "Interest paid only on the principal amount. Formula: I = Prt, A = P + I, where I is the simple interest, P is the principal amount, r is the rate, t is the time (in years), and A is the amount due."
      },
      {
        type: "text",
        heading: "Example 1",
        content: "You are starting your own small business in Davao City. You borrow P10,000.00 from the bank at a 2% rate for 5 years. Find the interest you will pay on this loan.\nA. 500   C. 1,500\nB. 1,000  D. 2,000\nSolution: I = Prt = (10,000)(.02)(5) = ________"
      },
      {
        type: "text",
        heading: "Example 2",
        content: "How much interest would be paid on a bank loan of P30,000 for 6 months at 10% annual interest?\nA. P1,000  C. P2,000\nB. P1,500  D. P3,000\nSolution: I = Prt = (30,000)(0.10)(6/12) = ________"
      },
      {
        type: "text",
        heading: "Example 3",
        content: "What is the amount due on P12,000.00 after adding the annual interest of 8% for 3 years?\nA. P14,880.00   C. P15,880.00\nB. P16,800.00   D. P15,800.00"
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 2,
    dayTitle: "Day 2: Percent, PBR & Business Math",
    topicTitle: "Markup, Selling Price, Discount, Sale Price & Commission",
    pdfPageRef: "PDF Page 7-9",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "A. Markup",
        content: "To make a profit, stores charge more for merchandise than they pay for it. The amount of increase is called the markup. Formula: Markup = cost x rate."
      },
      {
        type: "text",
        heading: "Markup Examples",
        content: "1. A music store's percent of markup is 50%. A CD costs the store 30 pesos. Find the markup.\nA. 10 pesos  C. 20 pesos\nB. 15 pesos  D. 25 pesos\nSolution: Markup = cost x rate = (30)(.5) = ______\n\n2. A computer store used a markup rate of 40%. Find the price increase of a computer game that cost the retailer P50.00.\nA. 10  C. 30\nB. 20  D. 40"
      },
      {
        type: "callout",
        heading: "B. Selling Price",
        content: "The cost price of an item; the amount which a seller pays to. Formula: Selling price = cost + markup."
      },
      {
        type: "text",
        heading: "Selling Price Examples",
        content: "1. A store pays P30.00 for a bag of candy. If the store wants to mark up the price 20%, for how much will the store sell the bag of candy?\nA. 6  C. 24\nB. 12  D. 36\nSolution: Markup = 30 x .2 = ___ | Selling price = 30 + 6 = _____\n\n2. A computer store pays 600 pesos for a computer mouse. The percent of markup is 50%. Find the mouse's selling price.\nA. 300  C. 550\nB. 500  D. 900"
      },
      {
        type: "callout",
        heading: "C. Discount",
        content: "When an item is on sale, the amount of the price decrease. Formula: Discount = price x rate."
      },
      {
        type: "text",
        heading: "Discount Examples",
        content: "1. Athletic shoes that regularly sell for 10,000 pesos are on sale for 20% off. Find the discount.\nA. 2000 pesos  C. 4500 pesos\nB. 3000 pesos  D. 7000 pesos\nSolution: Discount = (10,000)(.2) = ________\n\n2. Elise bought a dress that was discounted 30% off of the original price of P200.00. What was the amount of discount?\nA. 40  C. 70\nB. 60  D. 80"
      },
      {
        type: "callout",
        heading: "D. Sale Price",
        content: "The price of a good or service that is being offered at a discount. Formula: Sale price = price – discount."
      },
      {
        type: "text",
        heading: "Sale Price Examples",
        content: "1. Regala Company manufactures beds; in its catalogue, a double bed is priced at P5,000.00 less a discount of 20%. What will Rizza have to pay for the bed she ordered?\nA. 500  C. 3000\nB. 1000  D. 4000\nSolution: Sale price = 5,000 – (5,000 x 0.20) = 5,000 – 1,000 = ________\n\n2. Kahuyan Company manufactures beds; in its catalogue, a double bed is priced at P10,000.00 less a discount of 20%. What will Alan have to pay for the bed he ordered?\nA. 5,000  C. 7,000\nB. 6,000  D. 8,000"
      },
      {
        type: "callout",
        heading: "E. Commission",
        content: "A fee paid for services, usually a percentage of the total cost. Formula: Commission = Amount Sold x Rate."
      },
      {
        type: "text",
        heading: "Commission Examples",
        content: "1. Maria makes money by commission rates. She gets 15% of everything she sells. If Maria sold 23,000 pesos worth of items this month, what is her salary for the month?\nA. 3,450  C. 3,700\nB. 3,500  D. 4,000\nSolution: Commission = 23,000 x 0.15 = ______\n\n2. Andres makes money by commission rates. He gets 21% of everything he sells. If Andres sold 27,000 pesos worth of items this month, what is his salary for this month?\nA. 5,760 pesos  C. 5,076 pesos\nB. 5,670 pesos  D. 5,607 pesos"
      }
    ]
  },

  // ==========================================
  // DAY 3: ALGEBRA
  // ==========================================
  {
    pageNumber: 7,
    dayNumber: 3,
    dayTitle: "Day 3: Algebra",
    topicTitle: "Absolute Value & Number Properties",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Absolute Value",
        content: "ALWAYS POSITIVE — the number of units a number is away from 0 on a number line."
      },
      {
        type: "text",
        heading: "Examples",
        content: "|-7| = 7\n|-7 + 3| = |-4| = 4\n|8 + 4 – 3| = |12 – 3| = |9| = 9\n\n1. Solve: |6² ÷ 2² - 5|\nA. 4   C. 16\nB. 19  D. 36"
      },
      {
        type: "bullet_list",
        heading: "Number Properties",
        items: [
          "A. Closure Property: When we add or multiply any element in a set of numbers, the sum or the product is a unique real number which belongs to the SAME SET. Example: 125 + 34 = 159",
          "B. Commutative Property: CHANGING THE POSITION of the addends or the factors does not affect the sum or the product. Example: 12 + 2 = 2 + 12 (Addition); 13 × 3 = 3 × 13 (Multiplication)",
          "C. Associative Property: CHANGING THE GROUPING of the addends in a sum or the grouping of the factors in a product does not change the resulting sum or product. Example: (2 + 3) + 4 = 2 + (3 + 4); (5 × 3) × 2 = 5 × (3 × 2)",
          "D. Identity Property of Addition: The sum of any number and zero is the same number. 0 is the identity. Example: 34 + 0 = 34",
          "E. Identity Property of Multiplication: The product of any number and 1 is the same number. 1 is the identity. Example: 32 x 1 = 32",
          "F. Distributive Property: When a number is multiplied by the SUM of two other numbers, the first number can be handed out or distributed to both of those two numbers and multiplied by each of them separately. Example: 3(8 + 5) = 3(8) + 3(5)"
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 3,
    dayTitle: "Day 3: Algebra",
    topicTitle: "Algebraic Expressions, Equations & Polynomials",
    pdfPageRef: "PDF Page 10-12",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Algebraic Expression",
        content: "Contains numbers, variables, and operations to state a relationship. Examples: 2t + 3, y² + 3y + 10."
      },
      {
        type: "table",
        heading: "Translating Algebraic Expressions",
        tableData: {
          headers: ["Add", "Subtract", "Multiply", "Divide", "Equals"],
          rows: [
            ["plus, sum, increased by, more than, exceeds", "minus, difference, decreased by, reduced, less than, subtracted from", "times, multiplied by, product, of, twice, thrice", "divide by, quotient, the ratio of", "is, equals, is equal to"]
          ]
        }
      },
      {
        type: "text",
        heading: "Translation Examples",
        content: "Addition: a number increased by 10 → x + 10\nSubtraction: a number decreased by 5 → x – 5\nMultiplication: twice a number → 2x\nDivision: a number divided by 3 → x ÷ 3\nCombination: seven times a number increased by 5 → 7x + 5"
      },
      {
        type: "callout",
        heading: "Algebraic Equation",
        content: "Two algebraic expressions set equal to each other."
      },
      {
        type: "text",
        heading: "Equation Examples",
        content: "1. x + 2x = 30 → Combine x and 2x → 3x = 30 → Divide both sides by 3 → x = ___\n2. 2x + 3x + 2 = 42 → Transpose +2 → 2x + 3x = 42 – 2 → Combine → 5x = 40 → Divide both sides by 5 → x = ___"
      },
      {
        type: "callout",
        heading: "Polynomials",
        content: "An expression consisting of variables and coefficients that involve only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables. Example: 2x² – 4x + 7."
      },
      {
        type: "bullet_list",
        heading: "Types of Coefficients",
        items: [
          "Numerical Coefficient – number part",
          "Literal Coefficient – variable and exponent"
        ]
      },
      {
        type: "numbered_list",
        heading: "A. Types of Polynomials",
        items: [
          "1. MONOMIAL: a constant, or the product of a constant and one or more variables raised to a whole number. It has ONE TERM. Example: -6x²y³z",
          "2. BINOMIAL: a polynomial consisting of exactly TWO TERMS. Example: 2xy² – 3z",
          "3. TRINOMIAL: a polynomial consisting of exactly THREE TERMS. Example: x³ – x + 4",
          "4. POLYNOMIAL: consists of FOUR or MORE TERMS. Example: 4x³y² – 3z + 9x²y – 2xz³"
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 3,
    dayTitle: "Day 3: Algebra",
    topicTitle: "Operations on Polynomials (Add, Subtract, Multiply, Factor, Divide, Rationalize)",
    pdfPageRef: "PDF Page 12-14",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Addition & Subtraction of Polynomials",
        content: "TIP: COMBINE LIKE TERMS — only like terms can be combined."
      },
      {
        type: "text",
        heading: "Addition Examples",
        content: "1. 5x + 2y + 3x = 8x + 2y\n2. 2a + 3b + 4a – 2b"
      },
      {
        type: "text",
        heading: "Subtraction Examples",
        content: "1. 18x² – 13x – 14x² = 4x² – 13x\n2. 3a + 4ab – a – 2ab"
      },
      {
        type: "text",
        heading: "Multiplying Polynomials",
        content: "1. Multiply (x + 3) and (x + 4)\nA. x² + 7x + 12   C. x² + 3x + 5\nB. x² + 7x – 12   D. x² – 7x – 12\n\nSubstitute 2 for x in the problem: (x + 3)(x + 4) = (2 + 3)(2 + 4) = (5)(6) = 30\nCheck Option A: x² + 7x + 12 = (2)² + 7(2) + 12 = 4 + 14 + 12 = 30\nBoth equal 30, hence the answer is Option A."
      },
      {
        type: "text",
        heading: "Factoring Polynomials",
        content: "1. Factor x² + 13x + 30\nA. (x + 3)(x – 10)   C. (x – 3)(x – 10)\nB. (x + 3)(x + 10)   D. (x – 3)(x – 10)\n\nSubstitute 2 for x: x² + 13x + 30 = (2)² + 13(2) + 30 = 60\nCheck Option B: (x + 3)(x + 10) = (2 + 3)(2 + 10) = 60\nBoth equal 60, hence the answer is Option B."
      },
      {
        type: "text",
        heading: "Dividing Polynomials",
        content: "1. Divide (x² + 7x + 12) by (x + 3).\nA. x – 3   C. x – 4\nB. x + 4   D. x + 5\n\nSubstitute 2 for x: (x² + 7x + 12) ÷ (x + 3) = (4 + 14 + 12) ÷ (2 + 3) = 30 ÷ 5 = 6\nCheck Option B: x + 4 = 2 + 4 = 6\nBoth equal 6, hence the answer is Option B."
      },
      {
        type: "callout",
        heading: "Rationalizing Expressions",
        content: "Simplifying a rational expression means writing it in lowest terms or simplest form."
      },
      {
        type: "text",
        heading: "Example",
        content: "1. Simplify the expression: (7x + 35) / (x² + 5x)\nA. 7/x   C. x/7\nB. x + 7  D. 7 – x\n\nSubstitute 2 for x: (7(2) + 35)/((2)² + 5(2)) = (14 + 35)/(4 + 10) = 49/14 = 7/2\nCheck Option A: 7/x = 7/2\nBoth equal 7/2, hence the answer is Option A."
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 3,
    dayTitle: "Day 3: Algebra",
    topicTitle: "Pythagorean Theorem",
    pdfPageRef: "PDF Page 13-14",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Pythagorean Theorem",
        content: "In a right triangle, the sum of the squares of the lengths of the two legs is equal to the square of the length of the hypotenuse."
      },
      {
        type: "text",
        heading: "Formulas",
        content: "c² = a² + b²\na² = c² – b²\nb² = c² – a²\n(Diagram: right triangle with hypotenuse c, legs a and b labeled)"
      },
      {
        type: "text",
        heading: "Example: Find the value of c",
        content: "A right triangle has legs of 4 m and 3 m.\nA. 2   C. 4\nB. 3   D. 5\n\nSolution:\nc² = a² + b²\nc² = 4² + 3²\nc² = 16 + 9\nc² = 25\n√c² = √25\nc = ____"
      },
      {
        type: "text",
        heading: "Example: Find the missing leg",
        content: "The hypotenuse of a right-angle triangle is 25 feet. If one leg is 24 feet, what is the length of the other leg?\nA. 5 ft   C. 20 ft\nB. 6 ft   D. 7 ft\n\nSolution:\nb² = c² – a²\nb² = 25² – 24²\nb² = 625 – 576\nb² = 49\n√b² = √49\nb = ____"
      }
    ]
  },

  // ==========================================
  // DAY 4: PROBABILITY & GEOMETRY
  // ==========================================
  {
    pageNumber: 11,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Probability",
    pdfPageRef: "PDF Page 14",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Probability",
        content: "Probability simply means 'chances'. Formula: P(E) = Number of favorable outcomes / Total number of possible outcomes."
      },
      {
        type: "text",
        heading: "Examples",
        content: "A gumball machine has 18 pieces remaining (6 blue, 5 yellow, 7 red).\n\n1. The probability of getting a yellow gumball is\nA. 6/18   C. 7/18\nB. 1/3    D. 5/18\nP(E) = 5/18\n\n2. The probability of getting a blue gumball is\nA. 6/18   C. 7/18\nB. 1/3    D. 5/18\nP(E) = 6/18 or 1/3"
      },
      {
        type: "numbered_list",
        heading: "Rules of Probability",
        items: [
          "Rule 1: The probability of any event will always be a number from zero to one.",
          "Rule 2: When an event cannot occur, the probability will be zero.",
          "Rule 3: When an event is certain to occur, the probability is one.",
          "Rule 4: The sum of the probabilities of all of the outcomes in the sample space is 1.",
          "Rule 5: The probability that an event will not occur is equal to 1 minus the probability that the event will occur."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Angles & Special Angle Pairs",
    pdfPageRef: "PDF Page 15",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Angles",
        content: "Formed by two rays sharing a common endpoint."
      },
      {
        type: "numbered_list",
        heading: "A. Classification of Angles",
        items: [
          "1. Acute Angle – measure is less than 90 degrees",
          "2. Right Angle – measures exactly 90 degrees",
          "3. Obtuse Angle – measure is more than 90 degrees but less than 180 degrees",
          "4. Straight Angle – measure is exactly 180 degrees"
        ]
      },
      {
        type: "numbered_list",
        heading: "B. Special Angle Pairs",
        items: [
          "1. Complementary Angles – any two angles whose combined measures equal to 90 degrees",
          "2. Supplementary Angles – any two angles whose combined measure equal to 180 degrees",
          "3. Vertical Angles – 2 angles formed by intersecting lines. They cannot be adjacent, and they are always equal in measure. They are across from one another.",
          "4. Adjacent Angles – 2 angles which share a vertex, share a side but do not overlap."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Polygons & Sum of Interior Angles",
    pdfPageRef: "PDF Page 15-17",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Polygons",
        content: "A closed figure with straight sides, no curves, and no overlapping."
      },
      {
        type: "table",
        heading: "A. Types of Polygons According to Sides",
        tableData: {
          headers: ["Polygon", "Description"],
          rows: [
            ["Triangle", "3-sided figure, sum of interior angles is 180°"],
            ["Quadrilateral", "4-sided figure, sum of interior angles is 360°"],
            ["Pentagon", "5-sided figure, sum of interior angles is 540°"],
            ["Hexagon", "6-sided figure, sum of interior angles is 720°"],
            ["Heptagon", "7-sided figure, sum of interior angles is 900°"],
            ["Octagon", "8-sided figure, sum of interior angles is 1080°"],
            ["Nonagon", "9-sided figure, sum of interior angles is 1260°"],
            ["Decagon", "10-sided polygon, sum of interior angles is 1440°"],
            ["Undecagon", "11-sided polygon, sum of interior angles is 1620°"],
            ["Dodecagon", "12-sided polygon, sum of interior angles is 1800°"]
          ]
        }
      },
      {
        type: "text",
        heading: "A. Sum of the Interior Angles of a Polygon",
        content: "Formula: (n − 2) × 180\n\nExample: What is the sum of the interior angles of a hexagon?\n(6 − 2) × 180 = 4 × 180 = ______"
      },
      {
        type: "text",
        heading: "B. Each Interior Angle of a Polygon",
        content: "Formula: (n − 2) × 180 / n\n\nExample: What is the measure of each interior angle of a dodecagon?\n(12 − 2) × 180 / 12 = _____"
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Quadrilaterals & Classification",
    pdfPageRef: "PDF Page 17-18",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Quadrilaterals",
        content: "A quadrilateral has four sides and four interior angles."
      },
      {
        type: "text",
        heading: "Quadrilateral Family Tree",
        content: "Quadrilateral branches into Kite, Parallelogram, and Trapezoid. Parallelogram branches into Rectangle and Rhombus. Rectangle and Rhombus branch into Square. Trapezoid branches into Isosceles Trapezoid."
      },
      {
        type: "callout",
        heading: "Technique",
        content: "Top to Bottom is FALSE. Bottom to Top is TRUE.\nExample: 'A square is a rhombus' – TRUE. 'A rhombus is a square' – FALSE."
      },
      {
        type: "table",
        heading: "Classification of Quadrilaterals",
        tableData: {
          headers: ["Quadrilateral", "Properties"],
          rows: [
            ["Trapezoid", "One pair of parallel sides"],
            ["Parallelogram", "Two pairs of parallel sides; opposite sides equal; opposite angles equal"],
            ["Rectangle", "Two pairs of parallel sides; opposite sides equal; opposite angles equal; all right angles"],
            ["Rhombus", "All sides equal; opposite angles equal"],
            ["Square", "All sides equal; all right angles"],
            ["Kite", "Two separate pairs of equal adjacent sides"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Perimeter and Area of Plane Figures",
    pdfPageRef: "PDF Page 18-19",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Perimeter and Area Formulae of Plane Figures",
        tableData: {
          headers: ["Plane Figure", "Perimeter", "Area"],
          rows: [
            ["Rectangle", "P = 2L + 2W = 2(L + W)", "A = L × W"],
            ["Square", "P = 4s", "A = s²"],
            ["Triangle", "P = s₁ + s₂ + s₃", "A = ½bh"],
            ["Circle", "C = 2πr", "A = πr²"]
          ]
        }
      },
      {
        type: "text",
        heading: "Perimeter of Rectangle",
        content: "Madi is hanging a string of flowers on the perimeter of a rectangular pool deck. The deck is 30 feet long and 24 feet wide. How long does the string of flowers need to be?\nA. 108 ft   C. 48 ft\nB. 54 ft    D. 60 ft\nSolution: P = 2(L + W) = 2(___ + __) = 2(____) = ________"
      },
      {
        type: "text",
        heading: "Area of Rectangle",
        content: "What is the area of a rectangular pool that has a length of 30 meters and a width of 20 meters?\nA. 50 sq. m.   C. 600 sq. m.\nB. 400 sq. m.  D. 900 sq. m.\nSolution: A = L × W = _____ × _____ = _______"
      },
      {
        type: "text",
        heading: "Perimeter and Area of Square",
        content: "One side of a square measures 6 inches. What are the perimeter and area of this square respectively?\nA. 24 & 36   C. 14 & 16\nB. 16 & 20   D. 25 & 30\nSolution: P = 4s = 4(___) = _____ | A = s² = ___² = _______"
      },
      {
        type: "text",
        heading: "Perimeter of Triangle",
        content: "The sides of a triangle are 30, 55, 67, respectively. What is the perimeter of the triangle?\nA. 152   C. 144\nB. 160   D. 165\nSolution: P = s₁ + s₂ + s₃ = ____ + ____ + ____ = _________"
      },
      {
        type: "text",
        heading: "Area of Right Triangle",
        content: "A triangle has a base of 12 inches and a height of 3 inches. What is the area of the triangle?\nA. 36 in²   C. 144 in²\nB. 18 in²   D. 9 in²\nSolution: A = ½bh = ½(__)(__) = ½(______) = ______"
      },
      {
        type: "text",
        heading: "Circumference of Circle",
        content: "The shape of a snare drum head is a circle. The radius of the drum head is 7 inches. What is the circumference?\nA. 154   C. 110\nB. 44    D. 36\nSolution: C = 2πr = 2(3.14)(___) = _________"
      },
      {
        type: "text",
        heading: "Area of Circle",
        content: "The shape of a snare drum head is a circle. The radius of the drum head is 4 inches. What is the area?\nA. 50   C. 45\nB. 60   D. 55\nSolution: A = πr² = (3.14)(_²) = (3.14)(__) = ______"
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 4,
    dayTitle: "Day 4: Probability & Geometry",
    topicTitle: "Total Surface Area & Volume of Solid Figures",
    pdfPageRef: "PDF Page 19-20",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Total Surface Area and Volume of Solid Figures",
        tableData: {
          headers: ["Solid Figure", "Total Surface Area (TSA)", "Volume"],
          rows: [
            ["Rectangular Prism", "TSA = 2LW + 2WH + 2HL = 2(LW + WH + HL)", "V = L × W × H"],
            ["Cube", "TSA = 6s²", "V = s³"]
          ]
        }
      },
      {
        type: "text",
        heading: "TSA of Rectangular Prism",
        content: "A rectangular wooden box has a length of 6 m, width of 3 m, and height of 2 m. What is the surface area, in square meters, if it is completely painted on all sides?\nA. 56 sq. m.   C. 72 sq. m.\nB. 65 sq. m.   D. 90 sq. m.\nSolution: TSA = 2(LW + WH + HL) = 2[(6)(3) + (3)(2) + (2)(6)] = 2(___ + __ + _) = 2(__) = ______"
      },
      {
        type: "text",
        heading: "Volume of Rectangular Prism",
        content: "What is the volume of a moving truck's storage area that is 10 m long, 5 m across, and 2 m tall?\nA. 100 cubic meters   C. 300 cubic meters\nB. 250 cubic meters   D. 480 cubic meters\nSolution: V = 10 × 5 × 2 = ___ × 2 = _____"
      },
      {
        type: "text",
        heading: "TSA of Cube",
        content: "Find the total surface area of a cube of side 5 cm.\nA. 5 cm²   C. 125 cm²\nB. 150 cm²  D. 256 cm²\nSolution: TSA = 6s² = 6(5²) = 6(__) = _____"
      },
      {
        type: "text",
        heading: "Volume of Cube",
        content: "What is the volume of a cube of side 10 cm?\nA. 10 cm³   C. 1,000 cm³\nB. 100 cm³  D. 10,000 cm³\nSolution: V = s³ = ___³ = ________"
      }
    ]
  }
];

export const MATH_PAGES = MATHEMATICS_PAGES;