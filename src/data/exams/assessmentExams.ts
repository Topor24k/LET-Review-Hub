import { ExamQuestion } from '../../types';

export const ASSESSMENT_EXAM_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // 1.0 TMAE & PURPOSES OF ASSESSMENT (FOR, OF, AS LEARNING)
  // =========================================================================
  {
    id: 1,
    question: "Teacher Clarissa wants to quantify the performance of her students by assigning numerical scores to their essays based on a pre-determined rubric. In the TMAE framework, which process is she performing?",
    options: [
      { key: 'A', text: 'Measurement' },
      { key: 'B', text: 'Evaluation' },
      { key: 'C', text: 'Testing' },
      { key: 'D', text: 'Assessment' }
    ],
    correctAnswer: 'A',
    explanation: 'Measurement is the process of quantifying traits or assigning numbers/scores to student performance based on a set procedure or rubric criteria.',
    topicRef: '1.0 TMAE Framework'
  },
  {
    id: 2,
    question: "Which of the following best defines 'Evaluation' in educational measurement?",
    options: [
      { key: 'A', text: 'A process of making qualitative judgments and determining the value or worth of student performance or changes' },
      { key: 'B', text: 'The tool or paper-and-pencil instrument containing questions' },
      { key: 'C', text: 'The numerical score obtained by a student on a quiz' },
      { key: 'D', text: 'The act of sitting beside a learner during a task' }
    ],
    correctAnswer: 'A',
    explanation: 'Evaluation involves passing qualitative judgments and deciding the worth, value, or desirability of student achievement or behavior.',
    topicRef: '1.0 TMAE Framework'
  },
  {
    id: 3,
    question: "At the start of the academic year, the school administers a test to group incoming Grade 7 students into sections according to their readiness and learning needs. What type of assessment is this?",
    options: [
      { key: 'A', text: 'Placement Assessment' },
      { key: 'B', text: 'Diagnostic Assessment' },
      { key: 'C', text: 'Summative Assessment' },
      { key: 'D', text: 'Formative Assessment' }
    ],
    correctAnswer: 'A',
    explanation: 'Placement assessment is conducted prior to instruction to assess learners\' entry needs and place them in appropriate instructional levels or groups.',
    topicRef: '1.0 Purposes of Assessment'
  },
  {
    id: 4,
    question: "A student consistently struggles with reading comprehension despite regular classroom remedial drills. Teacher Joy administers an individualized test to discover the underlying root causes of the recurring difficulty. What type of assessment is Teacher Joy utilizing?",
    options: [
      { key: 'A', text: 'Diagnostic Assessment' },
      { key: 'B', text: 'Placement Assessment' },
      { key: 'C', text: 'Formative Assessment' },
      { key: 'D', text: 'Summative Assessment' }
    ],
    correctAnswer: 'A',
    explanation: 'Diagnostic assessment searches for the underlying causes of persistent or recurring learning difficulties that do not respond to initial instructional intervention.',
    topicRef: '1.0 Purposes of Assessment'
  },
  {
    id: 5,
    question: "During a lesson on fractions, Teacher Dan asks quick check-up questions and gives a 5-item ungraded drill to monitor whether students are keeping up with the concept. This practice exemplifies:",
    options: [
      { key: 'A', text: 'Assessment FOR Learning (Formative)' },
      { key: 'B', text: 'Assessment OF Learning (Summative)' },
      { key: 'C', text: 'Assessment AS Learning' },
      { key: 'D', text: 'Placement Evaluation' }
    ],
    correctAnswer: 'A',
    explanation: 'Assessment FOR Learning (such as formative checks during instruction) provides ongoing feedback to adjust teaching and help students improve.',
    topicRef: '1.0 Purposes of Assessment'
  },
  {
    id: 6,
    question: "Teacher Elena provides students with a self-assessment checklist and scoring rubric so they can evaluate their own science projects and set goals for revision. Which assessment paradigm is demonstrated?",
    options: [
      { key: 'A', text: 'Assessment AS Learning' },
      { key: 'B', text: 'Assessment OF Learning' },
      { key: 'C', text: 'Assessment FOR Learning' },
      { key: 'D', text: 'Traditional Testing' }
    ],
    correctAnswer: 'A',
    explanation: 'Assessment AS Learning involves students monitoring, reflecting upon, and evaluating their own learning using rubrics, promoting self-regulated and independent learning.',
    topicRef: '1.0 Purposes of Assessment'
  },
  {
    id: 7,
    question: "Quarterly examinations and final achievement tests are administered primarily to assign grades and certify student mastery at the end of a unit. These serve as:",
    options: [
      { key: 'A', text: 'Assessment OF Learning' },
      { key: 'B', text: 'Assessment FOR Learning' },
      { key: 'C', text: 'Assessment AS Learning' },
      { key: 'D', text: 'Diagnostic Assessment' }
    ],
    correctAnswer: 'A',
    explanation: 'Assessment OF Learning is summative; it takes place after instruction to evaluate achievement against standards for grading and certification.',
    topicRef: '1.0 Purposes of Assessment'
  },

  // =========================================================================
  // 2.0 TRADITIONAL VS AUTHENTIC ASSESSMENT & PORTFOLIOS
  // =========================================================================
  {
    id: 8,
    question: "Why is traditional paper-and-pencil testing referred to as 'decontextualized assessment'?",
    options: [
      { key: 'A', text: 'It assesses declarative and procedural knowledge in artificial testing settings detached from real-world contexts' },
      { key: 'B', text: 'It is always invalid and unreliable' },
      { key: 'C', text: 'It cannot be scored objectively' },
      { key: 'D', text: 'It is strictly oral in nature' }
    ],
    correctAnswer: 'A',
    explanation: 'Traditional tests are decontextualized because they measure knowledge isolated in artificial multiple-choice or paper formats rather than authentic real-life application.',
    topicRef: '2.0 Traditional vs Authentic Assessment'
  },
  {
    id: 9,
    question: "Which of the following is an example of an Authentic Performance Assessment?",
    options: [
      { key: 'A', text: 'Conducting a simulated mock trial in a Social Studies class' },
      { key: 'B', text: 'Answering a 50-item multiple-choice exam on court terminology' },
      { key: 'C', text: 'Matching legal terms with their definitions' },
      { key: 'D', text: 'Filling in the blanks with legal principles' }
    ],
    correctAnswer: 'A',
    explanation: 'Authentic assessment requires contextualized real-world performance tasks (such as a mock trial, laboratory experiment, or speech).',
    topicRef: '2.0 Traditional vs Authentic Assessment'
  },
  {
    id: 10,
    question: "In a student portfolio, what do 'Artifacts' specifically represent?",
    options: [
      { key: 'A', text: 'Documents or products produced directly as a result of regular academic classroom work' },
      { key: 'B', text: 'Documentations of student activities conducted outside the school' },
      { key: 'C', text: 'Written attestations and evaluations by the teacher or peers' },
      { key: 'D', text: 'The student\'s personal reflection and goal statement' }
    ],
    correctAnswer: 'A',
    explanation: 'Artifacts are direct academic products created from classroom assignments (e.g., student essays, homework, completed lab sheets).',
    topicRef: '2.0 Portfolio Assessment'
  },
  {
    id: 11,
    question: "In a portfolio, the student writes personal statements detailing why each entry was selected and what was learned from creating it. These student-written descriptions are classified as:",
    options: [
      { key: 'A', text: 'Productions (Captions & Reflections)' },
      { key: 'B', text: 'Attestations' },
      { key: 'C', text: 'Reproductions' },
      { key: 'D', text: 'Artifacts' }
    ],
    correctAnswer: 'A',
    explanation: 'Productions are documents prepared by the student themselves, including goal statements, reflections, and captions explaining each work piece.',
    topicRef: '2.0 Portfolio Assessment'
  },
  {
    id: 12,
    question: "A teacher collects a kindergarten pupil's handwriting samples from June, October, and March to demonstrate how letter formation improved over time. What type of portfolio is this?",
    options: [
      { key: 'A', text: 'Working, Growth, or Development Portfolio' },
      { key: 'B', text: 'Showcase or Best Work Portfolio' },
      { key: 'C', text: 'Assessment / Evaluation Portfolio' },
      { key: 'D', text: 'Employment Portfolio' }
    ],
    correctAnswer: 'A',
    explanation: 'A Growth/Development portfolio tracks and demonstrates student improvement, changes, and progress over an extended time frame.',
    topicRef: '2.0 Portfolio Assessment'
  },
  {
    id: 13,
    question: "Which type of portfolio is best utilized during parent-teacher conferences and college admission applications to showcase a student's finest accomplishments?",
    options: [
      { key: 'A', text: 'Display, Showcase, or Best Work Portfolio' },
      { key: 'B', text: 'Working or Process Portfolio' },
      { key: 'C', text: 'Diagnostic Portfolio' },
      { key: 'D', text: 'Placement Portfolio' }
    ],
    correctAnswer: 'A',
    explanation: 'A Showcase / Best Work portfolio displays the student\'s most outstanding works and best performances to celebrate learning and present to external audiences.',
    topicRef: '2.0 Portfolio Assessment'
  },

  // =========================================================================
  // 3.0 SCORING RUBRICS & TEST CONSTRUCTION GUIDELINES
  // =========================================================================
  {
    id: 14,
    question: "What is the key advantage of using an 'Analytic Rubric' over a 'Holistic Rubric'?",
    options: [
      { key: 'A', text: 'It assesses dimensions separately, pinpointing specific strengths, weaknesses, and areas for improvement' },
      { key: 'B', text: 'It takes much less time to construct and score' },
      { key: 'C', text: 'It gives only a single overall score for the entire task' },
      { key: 'D', text: 'It eliminates the need for clear performance criteria' }
    ],
    correctAnswer: 'A',
    explanation: 'Analytic rubrics rate separate criteria independently, providing detailed diagnostic feedback on specific strengths and weaknesses.',
    topicRef: '3.0 Scoring Rubrics'
  },
  {
    id: 15,
    question: "When a teacher needs to score 150 student speech performances quickly to obtain an overall holistic rating of oral proficiency, which rubric type is most efficient?",
    options: [
      { key: 'A', text: 'Holistic Rubric' },
      { key: 'B', text: 'Analytic Rubric' },
      { key: 'C', text: 'Checklist without descriptors' },
      { key: 'D', text: 'Table of Specifications' }
    ],
    correctAnswer: 'A',
    explanation: 'A Holistic rubric provides a single global score for overall quality, allowing fast and efficient assessment.',
    topicRef: '3.0 Scoring Rubrics'
  },
  {
    id: 16,
    question: "In constructing True-False items, why should teachers avoid terms like 'always', 'never', 'all', and 'solely'?",
    options: [
      { key: 'A', text: 'They serve as specific determiners that cue students to guess that the statement is false' },
      { key: 'B', text: 'They make the sentence too short to read' },
      { key: 'C', text: 'They increase the readability grade level' },
      { key: 'D', text: 'They make the item automatically true' }
    ],
    correctAnswer: 'A',
    explanation: 'Absolute modifiers (always, never, none) are specific determiners that usually make statements false and provide unwarranted clues to test-wise students.',
    topicRef: '3.0 Test Construction Rules'
  },
  {
    id: 17,
    question: "Which of the following True-False items violates the guideline against double negatives?",
    options: [
      { key: 'A', text: 'Early childhood behavioral changes are not unchangeable.' },
      { key: 'B', text: 'Plants synthesize glucose in the presence of sunlight.' },
      { key: 'C', text: 'Water boils at 100 degrees Celsius at sea level.' },
      { key: 'D', text: 'The Philippines is an archipelago.' }
    ],
    correctAnswer: 'A',
    explanation: 'The phrase \'not unchangeable\' contains a confusing double negative that tests linguistic trickiness rather than actual subject mastery.',
    topicRef: '3.0 Test Construction Rules'
  },
  {
    id: 18,
    question: "In constructing Multiple Choice questions, what role do 'distracters' play?",
    options: [
      { key: 'A', text: 'They must be plausible, attractive incorrect options designed to draw students who have not mastered the concept' },
      { key: 'B', text: 'They are obvious joke answers that anyone can identify' },
      { key: 'C', text: 'They give direct clues pointing to the key answer' },
      { key: 'D', text: 'They are grammatical errors placed intentionally in the stem' }
    ],
    correctAnswer: 'A',
    explanation: 'Good distracters must be plausible and grammatically aligned with the stem to attract students who lack comprehensive knowledge.',
    topicRef: '3.0 Test Construction Rules'
  },
  {
    id: 19,
    question: "Which is a major guideline when designing a Matching Type test?",
    options: [
      { key: 'A', text: 'Ensure the items in Column A and Column B are homogeneous, with more response options than premises' },
      { key: 'B', text: 'Mix presidents, capitals, and mathematical formulas in the same match' },
      { key: 'C', text: 'Make the premise column shorter in text than the options column' },
      { key: 'D', text: 'Provide an equal number of premises and options to make it 1-to-1' }
    ],
    correctAnswer: 'A',
    explanation: 'Matching items must be homogeneous (same category), with Column A holding longer premise stems and Column B having shorter options with 1-2 extra choices to prevent elimination guessing.',
    topicRef: '3.0 Test Construction Rules'
  },
  {
    id: 20,
    question: "Which of the following completion/fill-in-the-blank items is flawed due to 'overmutilation'?",
    options: [
      { key: 'A', text: 'The green ___ in the ___ that captures ___ from the ___ is called ___.' },
      { key: 'B', text: 'The green pigment in plant leaves that absorbs sunlight is called chlorophyll.' },
      { key: 'C', text: 'The organelle responsible for cellular energy production is the mitochondrion.' },
      { key: 'D', text: 'In physics, force equals mass multiplied by acceleration.' }
    ],
    correctAnswer: 'A',
    explanation: 'An overmutilated completion item contains so many blanks that the sentence loses meaning and becomes an impossible guessing puzzle.',
    topicRef: '3.0 Test Construction Rules'
  },
  {
    id: 21,
    question: "What distinguishes an 'Extended Essay' from a 'Restricted Essay'?",
    options: [
      { key: 'A', text: 'An extended essay allows students freedom to select, integrate, and organize complex ideas without narrow limits on content or response form' },
      { key: 'B', text: 'A restricted essay has no scoring rubric' },
      { key: 'C', text: 'An extended essay has only one definite factual answer' },
      { key: 'D', text: 'A restricted essay is given only to graduate students' }
    ],
    correctAnswer: 'A',
    explanation: 'Extended essays offer broad scope for evaluation and synthesis (e.g., \'Analyze the economic impacts of globalization\'), whereas restricted essays constrain content and scope (e.g., \'State three causes of erosion\').',
    topicRef: '3.0 Test Construction Rules'
  },

  // =========================================================================
  // 4.0 VALIDITY, RELIABILITY & ITEM ANALYSIS
  // =========================================================================
  {
    id: 22,
    question: "Teacher Renz prepares a Table of Specifications (TOS) before constructing his periodic examination. Which type of validity is he directly establishing?",
    options: [
      { key: 'A', text: 'Content Validity' },
      { key: 'B', text: 'Predictive Validity' },
      { key: 'C', text: 'Face Validity' },
      { key: 'D', text: 'Concurrent Validity' }
    ],
    correctAnswer: 'A',
    explanation: 'A Table of Specifications ensures that test items match curricular learning competencies and cognitive levels, establishing Content Validity.',
    topicRef: '4.0 Validity & Reliability'
  },
  {
    id: 23,
    question: "A university entrance examination score is correlated with students' GPA at the end of their 4-year degree program to determine if it accurately forecasted academic success. What validity is being tested?",
    options: [
      { key: 'A', text: 'Predictive Validity' },
      { key: 'B', text: 'Concurrent Validity' },
      { key: 'C', text: 'Face Validity' },
      { key: 'D', text: 'Construct Validity' }
    ],
    correctAnswer: 'A',
    explanation: 'Predictive validity measures how effectively test scores predict future performance or criteria over an extended time interval.',
    topicRef: '4.0 Validity & Reliability'
  },
  {
    id: 24,
    question: "Which reliability method assesses the internal consistency of a test by dividing the test into odd and even numbered items and correlating the two half-scores?",
    options: [
      { key: 'A', text: 'Split-Half Method' },
      { key: 'B', text: 'Test-Retest Method' },
      { key: 'C', text: 'Parallel-Forms Method' },
      { key: 'D', text: 'Inter-Rater Method' }
    ],
    correctAnswer: 'A',
    explanation: 'The Split-Half method splits a single test administration into two halves (e.g., odd vs even items) to measure internal consistency reliability.',
    topicRef: '4.0 Validity & Reliability'
  },
  {
    id: 25,
    question: "If a test is administered twice to the same group of students with a two-week interval between testing dates, what type of reliability measure is being established?",
    options: [
      { key: 'A', text: 'Measure of Stability (Test-Retest)' },
      { key: 'B', text: 'Measure of Equivalence (Parallel Forms)' },
      { key: 'C', text: 'Measure of Internal Consistency' },
      { key: 'D', text: 'Measure of Content Validity' }
    ],
    correctAnswer: 'A',
    explanation: 'Test-Retest establishes a measure of stability over time by repeating the test on the same cohort across an interval.',
    topicRef: '4.0 Validity & Reliability'
  },
  {
    id: 26,
    question: "Out of 100 students who took an item, 75 answered it correctly. What is the Difficulty Index of the item and how should it be evaluated?",
    options: [
      { key: 'A', text: '0.75 — Right / Ideal Difficulty (Retain)' },
      { key: 'B', text: '0.25 — Very Difficult (Discard)' },
      { key: 'C', text: '0.75 — Very Easy (Discard)' },
      { key: 'D', text: '0.50 — Non-discriminating (Revise)' }
    ],
    correctAnswer: 'A',
    explanation: 'Difficulty Index = Correct / Total = 75/100 = 0.75. An index between 0.26 and 0.75 represents ideal/right difficulty and should be retained.',
    topicRef: '4.0 Item Analysis'
  },
  {
    id: 27,
    question: "An item has a difficulty index of 0.12. What does this mean and what action is recommended?",
    options: [
      { key: 'A', text: 'The item is very difficult (only 12% passed); revise or discard' },
      { key: 'B', text: 'The item is very easy (88% failed); retain' },
      { key: 'C', text: 'The item is perfectly balanced; retain' },
      { key: 'D', text: 'The item has negative discrimination' }
    ],
    correctAnswer: 'A',
    explanation: 'A difficulty index of 0.00–0.25 is categorized as \'Difficult\'; because very few answered correctly, the teacher should revise or discard it.',
    topicRef: '4.0 Item Analysis'
  },
  {
    id: 28,
    question: "In a class of 30 students (15 upper group, 15 lower group), 12 in the upper group answered Item 5 correctly, while only 6 in the lower group answered it correctly. What is the Discrimination Index (D)?",
    options: [
      { key: 'A', text: '+0.40' },
      { key: 'B', text: '+0.60' },
      { key: 'C', text: '-0.40' },
      { key: 'D', text: '+0.80' }
    ],
    correctAnswer: 'A',
    explanation: 'DU = 12/15 = 0.80; DL = 6/15 = 0.40. Discrimination Index D = DU - DL = 0.80 - 0.40 = +0.40 (Positive discrimination).',
    topicRef: '4.0 Item Analysis'
  },
  {
    id: 29,
    question: "What does 'Negative Discrimination' in an item analysis report signify?",
    options: [
      { key: 'A', text: 'More students in the lower-performing group answered the item correctly than students in the upper-performing group' },
      { key: 'B', text: 'More students in the upper group passed the item than the lower group' },
      { key: 'C', text: 'Both groups had equal percentage of correct responses' },
      { key: 'D', text: 'All students left the item blank' }
    ],
    correctAnswer: 'A',
    explanation: 'Negative discrimination happens when DL > DU (more low performers got it right), which suggests ambiguity, miskeying, or misleading distracters.',
    topicRef: '4.0 Item Analysis'
  },
  {
    id: 30,
    question: "Under the standard item analysis decision rules, when should a test item be RETAINED without modification?",
    options: [
      { key: 'A', text: 'When Difficulty Index is within 0.26–0.75 AND Discrimination Index is 0.20 and above' },
      { key: 'B', text: 'When Difficulty Index is below 0.20 and Discrimination Index is 0.10' },
      { key: 'C', text: 'When Discrimination Index is negative regardless of difficulty' },
      { key: 'D', text: 'When Difficulty Index is above 0.90' }
    ],
    correctAnswer: 'A',
    explanation: 'An item is retained when it is within moderate difficulty (0.26–0.75) and possesses adequate positive discrimination (≥ 0.20).',
    topicRef: '4.0 Item Analysis'
  },

  // =========================================================================
  // 5.0 MEASURES OF CENTRAL TENDENCY & VARIABILITY
  // =========================================================================
  {
    id: 31,
    question: "A teacher computed the scores of 5 students: 80, 82, 85, 88, and 15 (due to severe illness during exam). Which measure of central tendency provides the most realistic representation of typical class achievement?",
    options: [
      { key: 'A', text: 'Median' },
      { key: 'B', text: 'Mean' },
      { key: 'C', text: 'Range' },
      { key: 'D', text: 'Standard Deviation' }
    ],
    correctAnswer: 'A',
    explanation: 'The median is a positional measure that is resistant to extreme outliers (such as the score of 15), unlike the mean which gets dragged down disproportionately.',
    topicRef: '5.0 Measures of Central Tendency'
  },
  {
    id: 32,
    question: "What is the Median of the following score distribution: 14, 35, 45, 55, 55, 56, 58, 65, 87, 89, 92 (n = 11)?",
    options: [
      { key: 'A', text: '56' },
      { key: 'B', text: '55' },
      { key: 'C', text: '58' },
      { key: 'D', text: '65' }
    ],
    correctAnswer: 'A',
    explanation: 'With 11 ordered scores, the 6th score is the middle value: 14, 35, 45, 55, 55, [56], 58, 65, 87, 89, 92 -> Median = 56.',
    topicRef: '5.0 Measures of Central Tendency'
  },
  {
    id: 33,
    question: "In the score set: 25, 24, 24, 20, 20, 20, 16, 12, 10, 7, what is the Mode?",
    options: [
      { key: 'A', text: '20 (Unimodal)' },
      { key: 'B', text: '24 (Unimodal)' },
      { key: 'C', text: '20 and 24 (Bimodal)' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'A',
    explanation: 'The score 20 appears three times, which is more frequent than any other value (24 appears only twice), making it Unimodal with a mode of 20.',
    topicRef: '5.0 Measures of Central Tendency'
  },
  {
    id: 34,
    question: "If Class A has a Standard Deviation of 2.15 while Class B has a Standard Deviation of 8.90 on the same test, how do the two classes compare?",
    options: [
      { key: 'A', text: 'Class A is more homogeneous (scores are clustered close to the mean), while Class B is more heterogeneous (scores are widely dispersed)' },
      { key: 'B', text: 'Class B performed better than Class A overall' },
      { key: 'C', text: 'Class A had higher scores than Class B' },
      { key: 'D', text: 'Class A is heterogeneous and Class B is homogeneous' }
    ],
    correctAnswer: 'A',
    explanation: 'A smaller standard deviation indicates less variability and greater homogeneity around the mean, whereas a larger SD indicates greater spread and heterogeneity.',
    topicRef: '5.0 Measures of Variability'
  },
  {
    id: 35,
    question: "What is the primary limitation of the 'Range' as a measure of variability?",
    options: [
      { key: 'A', text: 'It relies solely on the two extreme scores (Highest - Lowest) and ignores the distribution of all scores in between' },
      { key: 'B', text: 'It is too complicated and time-consuming to calculate' },
      { key: 'C', text: 'It can only be used with categorical qualitative data' },
      { key: 'D', text: 'It cannot be computed if n is an even number' }
    ],
    correctAnswer: 'A',
    explanation: 'Range = Highest Score - Lowest Score. It is a crude measure heavily distorted by a single extreme outlier.',
    topicRef: '5.0 Measures of Variability'
  },

  // =========================================================================
  // 6.0 SKEWNESS, KURTOSIS, NORMAL DISTRIBUTION & STANDARD SCORES
  // =========================================================================
  {
    id: 36,
    question: "When a test was extremely difficult and most students scored very low while only a few got high marks, what is the shape of the score distribution?",
    options: [
      { key: 'A', text: 'Positively Skewed (skewed to the right; tail extends to the right; Mean > Median > Mode)' },
      { key: 'B', text: 'Negatively Skewed (skewed to the left; Mode > Median > Mean)' },
      { key: 'C', text: 'Mesokurtic / Normal Distribution' },
      { key: 'D', text: 'Platykurtic' }
    ],
    correctAnswer: 'A',
    explanation: 'When most scores are low and the long tail extends to the right (high end), the distribution is Positively Skewed (Mean > Median > Mode). Mnemonic: P-R-D-L (Positive, Right, Difficult, Low).',
    topicRef: '6.0 Skewness & Distribution Shapes'
  },
  {
    id: 37,
    question: "If an exam was very easy and majority of students achieved high grades with only a few failing scores, what skewness relationship is observed?",
    options: [
      { key: 'A', text: 'Negatively Skewed (Mode > Median > Mean; tail to the left)' },
      { key: 'B', text: 'Positively Skewed (Mean > Median > Mode; tail to the right)' },
      { key: 'C', text: 'Bimodal with equal symmetry' },
      { key: 'D', text: 'Leptokurtic standard normal' }
    ],
    correctAnswer: 'A',
    explanation: 'Negatively skewed curves occur when most scores cluster at the high end, dragging the mean lower than the mode (Mode > Median > Mean; tail to the left). Mnemonic: N-L-E-H (Negative, Left, Easy, High).',
    topicRef: '6.0 Skewness & Distribution Shapes'
  },
  {
    id: 38,
    question: "In a perfectly symmetrical Normal Distribution curve, which relationship between the measures of central tendency is TRUE?",
    options: [
      { key: 'A', text: 'Mean = Median = Mode' },
      { key: 'B', text: 'Mean > Median > Mode' },
      { key: 'C', text: 'Mode > Median > Mean' },
      { key: 'D', text: 'Mean + Median = Mode' }
    ],
    correctAnswer: 'A',
    explanation: 'In a standard normal bell curve, the mean, median, and mode coincide at the exact center (Mean = Median = Mode).',
    topicRef: '6.0 Normal Distribution'
  },
  {
    id: 39,
    question: "In a normal distribution with Mean = 75 and Standard Deviation = 5, approximately what percentage of students scored between 70 and 80 (within ±1 SD)?",
    options: [
      { key: 'A', text: '68.26%' },
      { key: 'B', text: '95.44%' },
      { key: 'C', text: '99.72%' },
      { key: 'D', text: '50.00%' }
    ],
    correctAnswer: 'A',
    explanation: 'Under the empirical rule of the normal curve, approximately 68.26% (34.13% x 2) of cases fall within ±1 standard deviation from the mean.',
    topicRef: '6.0 Normal Distribution'
  },
  {
    id: 40,
    question: "A distribution that is extremely peaked with very small score dispersion because almost all students obtained identical scores is described as:",
    options: [
      { key: 'A', text: 'Leptokurtic' },
      { key: 'B', text: 'Platykurtic' },
      { key: 'C', text: 'Mesokurtic' },
      { key: 'D', text: 'Rectangular' }
    ],
    correctAnswer: 'A',
    explanation: 'Leptokurtic curves are tall and slender with a sharp peak, indicating low variability and homogeneous scores.',
    topicRef: '6.0 Kurtosis'
  },
  {
    id: 41,
    question: "A flat, broad score distribution with high variability and wide score differences across students is known as:",
    options: [
      { key: 'A', text: 'Platykurtic' },
      { key: 'B', text: 'Leptokurtic' },
      { key: 'C', text: 'Mesokurtic' },
      { key: 'D', text: 'Unimodal bell' }
    ],
    correctAnswer: 'A',
    explanation: 'Platykurtic curves are flat-topped with broad tails, showing high variability and heterogeneous student scores.',
    topicRef: '6.0 Kurtosis'
  },
  {
    id: 42,
    question: "Student Carlo obtained a raw score of 85 on a test with a Mean of 75 and a Standard Deviation of 5. What is Carlo's Z-Score?",
    options: [
      { key: 'A', text: '+2.0' },
      { key: 'B', text: '+1.5' },
      { key: 'C', text: '-2.0' },
      { key: 'D', text: '+1.0' }
    ],
    correctAnswer: 'A',
    explanation: 'Z = (X - Mean) / SD = (85 - 75) / 5 = 10 / 5 = +2.0.',
    topicRef: '6.0 Standard Scores'
  },
  {
    id: 43,
    question: "Using the formula T = 10(Z) + 50, what is the equivalent T-Score for a student whose Z-score is +2.0?",
    options: [
      { key: 'A', text: '70' },
      { key: 'B', text: '60' },
      { key: 'C', text: '80' },
      { key: 'D', text: '50' }
    ],
    correctAnswer: 'A',
    explanation: 'T-score = 10(Z) + 50 = 10(+2.0) + 50 = 20 + 50 = 70.',
    topicRef: '6.0 Standard Scores'
  },
  {
    id: 44,
    question: "If a student's score is at the 84th percentile rank in a normally distributed examination, what does this indicate?",
    options: [
      { key: 'A', text: 'The student scored higher than or equal to 84% of all examinees who took the test' },
      { key: 'B', text: 'The student answered 84 out of 100 questions correctly' },
      { key: 'C', text: 'The student failed the exam by 16 points' },
      { key: 'D', text: 'The test had an 84% passing mark' }
    ],
    correctAnswer: 'A',
    explanation: 'Percentile rank indicates relative standing: an 84th percentile rank means the examinee scored better than 84% of the norm group (equivalent to ~ +1 SD).',
    topicRef: '6.0 Standard Scores'
  },

  // =========================================================================
  // 7.0 DEPED K-12 GRADING SYSTEM (DO 8, s. 2015)
  // =========================================================================
  {
    id: 45,
    question: "Under DepEd Order No. 8, s. 2015 (Policy Guidelines on Classroom Assessment for K to 12), what are the three summative assessment components used to compute grades in Grades 1 to 10?",
    options: [
      { key: 'A', text: 'Written Work (WW), Performance Tasks (PT), and Quarterly Assessment (QA)' },
      { key: 'B', text: 'Quizzes, Attendance, and Periodic Test' },
      { key: 'C', text: 'Projects, Recitation, and Final Exam' },
      { key: 'D', text: 'Seatwork, Assignment, and Unit Test' }
    ],
    correctAnswer: 'A',
    explanation: 'DepEd DO 8 s. 2015 establishes three components: Written Work (WW), Performance Tasks (PT), and Quarterly Assessment (QA).',
    topicRef: '7.0 DepEd K-12 Grading System'
  },
  {
    id: 46,
    question: "In Grades 1 to 10, what are the component percentage weights for Languages (English, Filipino), Araling Panlipunan, and Edukasyon sa Pagpapakatao (EsP)?",
    options: [
      { key: 'A', text: 'Written Work: 30% | Performance Tasks: 50% | Quarterly Assessment: 20%' },
      { key: 'B', text: 'Written Work: 40% | Performance Tasks: 40% | Quarterly Assessment: 20%' },
      { key: 'C', text: 'Written Work: 20% | Performance Tasks: 60% | Quarterly Assessment: 20%' },
      { key: 'D', text: 'Written Work: 50% | Performance Tasks: 30% | Quarterly Assessment: 20%' }
    ],
    correctAnswer: 'A',
    explanation: 'Languages, AP, and EsP follow the 30% WW - 50% PT - 20% QA distribution.',
    topicRef: '7.0 DepEd K-12 Grading System'
  },
  {
    id: 47,
    question: "In Grades 1 to 10, what are the component percentage weights for Science and Mathematics?",
    options: [
      { key: 'A', text: 'Written Work: 40% | Performance Tasks: 40% | Quarterly Assessment: 20%' },
      { key: 'B', text: 'Written Work: 30% | Performance Tasks: 50% | Quarterly Assessment: 20%' },
      { key: 'C', text: 'Written Work: 20% | Performance Tasks: 60% | Quarterly Assessment: 20%' },
      { key: 'D', text: 'Written Work: 50% | Performance Tasks: 25% | Quarterly Assessment: 25%' }
    ],
    correctAnswer: 'A',
    explanation: 'Science and Math allocate equal emphasis to concept mastery and application: 40% WW - 40% PT - 20% QA.',
    topicRef: '7.0 DepEd K-12 Grading System'
  },
  {
    id: 48,
    question: "In MAPEH, EPP, and TLE in Grades 1 to 10, which assessment component holds the largest weight of 60%?",
    options: [
      { key: 'A', text: 'Performance Tasks (PT)' },
      { key: 'B', text: 'Written Work (WW)' },
      { key: 'C', text: 'Quarterly Assessment (QA)' },
      { key: 'D', text: 'Periodical Examination' }
    ],
    correctAnswer: 'A',
    explanation: 'For skill-heavy subjects (MAPEH, EPP, TLE), Performance Tasks carry 60%, Written Work carries 20%, and Quarterly Assessment carries 20%.',
    topicRef: '7.0 DepEd K-12 Grading System'
  },
  {
    id: 49,
    question: "Under the DepEd K to 12 Transmutation Table, what is the minimum initial (raw) grade required to obtain the passing transmuted grade of 75?",
    options: [
      { key: 'A', text: '60.00' },
      { key: 'B', text: '50.00' },
      { key: 'C', text: '70.00' },
      { key: 'D', text: '75.00' }
    ],
    correctAnswer: 'A',
    explanation: 'Under DepEd Order 8 s. 2015, an initial raw grade of 60.00 transmutes to the minimum passing mark of 75.',
    topicRef: '7.0 DepEd K-12 Grading System'
  },
  {
    id: 50,
    question: "A student receives a final transmuted grade of 87 in a subject. According to DepEd's descriptor scale, what is the student's level of proficiency?",
    options: [
      { key: 'A', text: 'Proficient (85–89)' },
      { key: 'B', text: 'Advanced (90–100)' },
      { key: 'C', text: 'Approaching Proficiency (80–84)' },
      { key: 'D', text: 'Developing (75–79)' }
    ],
    correctAnswer: 'A',
    explanation: 'DepEd Grade Descriptors: Outstanding (90–100), Very Satisfactory / Proficient (85–89), Satisfactory / Approaching Proficiency (80–84), Fairly Satisfactory / Developing (75–79), Did Not Meet Expectations (Below 75).',
    topicRef: '7.0 DepEd K-12 Grading System'
  }
];
