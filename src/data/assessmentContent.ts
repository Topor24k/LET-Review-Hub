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

export const ASSESSMENT_OF_LEARNING_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: TMAE, PURPOSES OF ASSESSMENT & PORTFOLIOS
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Assessment Foundations & Portfolios",
    topicTitle: "T-M-A-E: Test, Measurement, Assessment & Evaluation",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "T — TEST",
        content: "An instrument designed to measure any characteristic, quality, ability, knowledge or skill. It is comprised of items in the area it is designed to measure."
      },
      {
        type: "bullet_list",
        heading: "M — MEASUREMENT",
        items: [
          "A process of quantifying the degree to which someone/something possesses a given trait, i.e., quality, characteristics, or feature.",
          "Assigning of numbers to the results of a test or other type of assessment such as performance, product, skill, or behavior of a student, based on a pre-determined procedure or set of criteria.",
          "Awarding points for a particular aspect of an essay or performance."
        ]
      },
      {
        type: "callout",
        heading: "A — ASSESSMENT",
        content: "It is derived from the Latin assidere which means 'to sit beside'. Assessment can be defined both as a product and a process."
      },
      {
        type: "text",
        heading: "Assessment as a Product",
        content: "It refers to the instrument (e.g. set of questions or tasks) that is designed to elicit a predetermined behavior, unique performance, or a product from a student."
      },
      {
        type: "text",
        heading: "Assessment as a Process",
        content: "Collection, interpretation, and use of qualitative and quantitative information to assist teachers in their educational decision-making. Hence, assessment is a pre-requisite to evaluation. It provides the information which enables evaluation to take place."
      },
      {
        type: "bullet_list",
        heading: "E — EVALUATION",
        items: [
          "A process of making judgments about the quality of a performance, product, skill, or behavior of a student.",
          "Includes using some basis to judge worth or value.",
          "It involves judgment about the desirability or changes in the students."
        ]
      },
      {
        type: "table",
        heading: "Purposes of Assessment",
        tableData: {
          headers: ["Assessment FOR Learning", "Assessment OF Learning", "Assessment AS Learning"],
          rows: [
            [
              "Includes 3 types of assessment done BEFORE and DURING instruction: 1. Placement 2. Diagnostic 3. Formative",
              "This is done AFTER instruction: 1. Summative",
              "This is associated with self-assessment. As the term implies, assessment itself is already a form of learning for the students: 1. Use of scoring rubrics 2. Reflection paper and journal"
            ]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Assessment Foundations & Portfolios",
    topicTitle: "Assessment FOR, OF, and AS Learning — In Detail",
    pdfPageRef: "PDF Page 2",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "1. Placement — done prior to or BEFORE instruction",
        content: "Its purpose is to assess the needs of the learners to have basis in planning for a relevant instruction. The results of this assessment place students in specific learning groups to facilitate teaching and learning."
      },
      {
        type: "text",
        heading: "2. Diagnostic — done BEFORE instruction",
        content: "Used to diagnose what students already know and don't know yet in order to guide instruction. This is also used to determine students' recurring or persistent difficulties. It searches for the underlying causes of student's learning problems that do not respond to first aid treatment. It helps formulate a plan for detailed remedial instruction."
      },
      {
        type: "text",
        heading: "3. Formative — done DURING instruction",
        content: "Meant to ensure that learning takes place. Provides the teacher with information regarding how well the learning objectives of a given learning activity are being met. Teachers monitor student learning to get on-going feedback to improve their teaching & for students to improve their learning. The results of this assessment are communicated clearly and promptly to the students for them to know their strengths and weaknesses and the progress of their learning."
      },
      {
        type: "text",
        heading: "Assessment OF Learning — 1. Summative Assessment (Done AFTER instruction)",
        content: "It is used to evaluate student learning at the end of a defined instructional period. Its results reveal whether or not instructions have successfully achieved the curriculum outcomes. The results are the bases for grades which are communicated to the students, parents, and other stakeholders for decision making. It is also a powerful factor that could pave the way for educational reforms."
      },
      {
        type: "text",
        heading: "Assessment AS Learning",
        content: "As students assess their own work and/or with their peers with the use of scoring rubrics, they learn on their own. Students set their targets, actively monitor, and evaluate their own learning in relation to their set target. Students become self-directed and independent learners."
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Assessment Foundations & Portfolios",
    topicTitle: "Modes of Assessment & Portfolio Assessment",
    pdfPageRef: "PDF Page 3",
    readTime: "5 min read",
    sections: [
      {
        type: "comparison",
        heading: "Traditional vs. Authentic Assessment",
        items: [
          "TRADITIONAL ASSESSMENT: Includes paper-and-pencil tests. Paper-and-Pencil tests are either Selected-Response type (alternate response, multiple choice, matching type) or Constructed-Response type (short answer, essay, problem-solving). Also known as DECONTEXTUALIZED assessment which focuses on declarative knowledge and/or procedural knowledge in artificial situations detached from the real world.",
          "AUTHENTIC ASSESSMENT: Also called performance or alternative or non-traditional. Can be in the form of a Product (product output, visual e.g. graph, collage, reflective journal) or a Performance (performance task, experiments, oral presentations, dramatizations). Also known as CONTEXTUALIZED assessment which requires REAL-LIFE tasks and requires students to utilize higher order thinking skills (HOTS). It is authentic because students' knowledge and skill are assessed in a context that approximates the real world or real life as closely as possible."
        ]
      },
      {
        type: "callout",
        content: "Note: Authentic Assessment COMPLEMENTS Traditional Assessment."
      },
      {
        type: "callout",
        heading: "Portfolio Assessment",
        content: "Portfolio comes from portare (carry) and foglio (sheet of paper). It is a systematic, organized and PURPOSEFUL collection of student's work that demonstrates the student's progress, skills, and accomplishments."
      },
      {
        type: "bullet_list",
        heading: "The Collection Must Include",
        items: [
          "1. Student participation in selecting contents",
          "2. Criteria for selection",
          "3. Criteria for judging merit",
          "4. Evidence of self-reflection"
        ]
      },
      {
        type: "numbered_list",
        heading: "Classes of Evidence of Learning Placed in Portfolios",
        items: [
          "1. Artifacts: Documents or products that are produced as a result of academic classroom work. Example: student papers and homework.",
          "2. Reproductions: Documentations of a student's work outside the classroom. Example: special projects like capstone and a student's description of an interview with the Chairman of the Education Committee in the Municipal Council.",
          "3. Attestations: The teacher or other responsible persons' documentations to attest to the student's progress. Example: teacher's evaluative notes about student's oral defense."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Assessment Foundations & Portfolios",
    topicTitle: "Productions & Types of Portfolios",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "4. Productions",
        content: "Documents that the student himself/herself prepares. Examples: 1) goal statements (What does the student want to do with his/her portfolio); 2) reflections (What are the student's reflections about his/her work); 3) captions (These are the student's description and explanation of each piece of work contained in the portfolio)."
      },
      {
        type: "numbered_list",
        heading: "Types of Portfolios",
        items: [
          "1. Assessment or Evaluation Portfolio: Intended to document what a student has learned based on the intended learning outcomes. Meant to diagnose student's learning.",
          "2. Working, Growth, or Development Portfolio: Consists of student's work over an extended time frame to reveal the student's progress in meeting learning targets. Provide concrete evidence on how much a student has changed or developed over time. Example: To see how much a Kindergarten pupil has improved in his skill in writing his/her name, one needs to compare his written name from the beginning of the school year with that of the middle and end of the school year.",
          "3. Display, Showcase, or Best Work Portfolio: Presents the most outstanding work. Lead students to celebrate learning because they present the proof of best efforts, best product, or the best performance of the student. Very useful for parent-teacher conferences, student's future teachers, admission in college and even in future job application to supplement other information."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: SCORING RUBRICS & PAPER-AND-PENCIL TESTS
  // ==========================================
  {
    pageNumber: 5,
    dayNumber: 2,
    dayTitle: "Day 2: Scoring Rubrics & Test Construction",
    topicTitle: "Scoring Rubric, Its Parts & the Holistic Rubric",
    pdfPageRef: "PDF Page 4-5",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Scoring Rubric",
        content: "It is a scoring guide used to assess performance (process or product) against a set of criteria that includes descriptions of levels of performance quality on the criteria. The objective tests can be scored by simply counting the correct answers, but essay tests, student's products, and performances cannot be scored the way objective tests are scored. They can be scored reliably only with the use of scoring rubrics."
      },
      {
        type: "numbered_list",
        heading: "Parts of a Scoring Rubric",
        items: [
          "1. Coherent sets of criteria",
          "2. Descriptions of the levels of performance for these criteria"
        ]
      },
      {
        type: "table",
        heading: "Sample Rubric: Speaking Performance (with weights)",
        tableData: {
          headers: ["Criteria", "Weight", "1", "2", "3"],
          rows: [
            ["Number of Appropriate hand gestures", "x 1", "1-4", "5-9", "10-12"],
            ["Appropriate facial expression", "x 1", "Lots of inappropriate facial expression", "Few inappropriate facial expression", "No apparent inappropriate facial expression"],
            ["Voice inflection", "x 2", "Monotone voice used", "Can vary voice inflection with difficulty", "Can easily vary voice inflection"],
            ["Incorporate proper ambiance through feelings in the voice", "x 3", "Recitation contains very little feelings", "Recitation has some feelings", "Recitation fully captures ambiance through feelings in the voice"]
          ]
        }
      },
      {
        type: "table",
        heading: "Types of Rubrics — Holistic Rubric",
        tableData: {
          headers: ["Type", "Description", "Advantages", "Disadvantages"],
          rows: [
            [
              "Holistic Rubric",
              "It describes the overall quality of a performance or product. In this Rubric, there is only one rating given to the entire work or performance.",
              "It allows fast assessment. It provides one score to describe the overall performance or quality of work. It can indicate the general strengths and weaknesses of the work performance.",
              "It does not clearly describe the degree of the criterion satisfied or not by the performance or product. It does not permit differential weighting of the qualities of a product or a performance."
            ]
          ]
        }
      },
      {
        type: "text",
        heading: "Example — Holistic Rubric for a Speech",
        content: "3 – Excellent Speaker: Include 10-12 changes in hand gestures; No apparent inappropriate facial expression; Can easily vary voice inflection; Recitation fully captures ambiance through feelings in the voice.\n2 – Good Speaker: Include 5-9 changes in hand gestures; Few inappropriate facial expression; Can vary voice inflection with difficulty; Recitation has some feelings.\n1 – Poor Speaker: Include 1-4 changes in hand gestures; Lots of inappropriate facial expression; Monotone voice used; Recitation contains very little feelings."
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 2,
    dayTitle: "Day 2: Scoring Rubrics & Test Construction",
    topicTitle: "Analytic Rubric & Principles 1–2 of High-Quality Assessment",
    pdfPageRef: "PDF Page 6",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Types of Rubrics — Analytic Rubric",
        tableData: {
          headers: ["Type", "Description", "Advantages", "Disadvantages"],
          rows: [
            [
              "Analytic Rubric",
              "It describes the quality of a performance or product in terms of the identified dimensions and/or criteria for which are rated independently to give a better picture of the quality of work or performance.",
              "It clearly describes the degree of the criterion satisfied or not by the performance or product. It permits differential weighting of the qualities of a product or a performance. It helps raters pinpoint specific areas of strengths and weaknesses.",
              "It is more time consuming to use. It is more difficult to construct."
            ]
          ]
        }
      },
      {
        type: "table",
        heading: "Example — Analytic Rubric for the Same Speaking Task",
        tableData: {
          headers: ["Criteria", "Weight", "1", "2", "3"],
          rows: [
            ["Number of Appropriate hand gestures", "x 1", "1-4", "5-9", "10-12"],
            ["Appropriate facial expression", "x 1", "Lots of inappropriate facial expression", "Few inappropriate facial expression", "No apparent inappropriate facial expression"],
            ["Voice inflection", "x 2", "Monotone voice used", "Can vary voice inflection with difficulty", "Can easily vary voice inflection"],
            ["Incorporate proper ambiance through feelings in the voice", "x 3", "Recitation contains very little feelings", "Recitation has some feelings", "Recitation fully captures ambiance through feelings in the voice"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Principle 1: Clear and Appropriate Learning Targets",
        content: "Learning targets should be clearly stated, specific, and centers on what is truly important."
      },
      {
        type: "callout",
        heading: "Principle 2: Appropriate Assessment Methods — Types of Paper-and-Pencil Test",
        content: "1. Selected-Response Type — A. True-False Test or Alternate Response: consists of a declarative statement that one has to mark true or false, right or wrong, correct or incorrect, yes or no, fact or opinion, and the like."
      },
      {
        type: "bullet_list",
        heading: "Three Forms of True-False / Alternate Response",
        items: [
          "1. Simple – consists of only two choices",
          "2. Complex – consists of more than two choices",
          "3. Compound – two choices plus a conditional completion response"
        ]
      },
      {
        type: "text",
        heading: "Examples",
        content: "Simple: The acquisition of morality is a developmental process. True / False\nComplex: The acquisition of morality is a developmental process. True / False / Opinion\nCompound: An acquisition of morality is a developmental process. True / False — If the statement is false, what makes it false?"
      },
      {
        type: "numbered_list",
        heading: "Guidelines for Constructing Alternate-Response Test",
        items: [
          "Rule #1: Do not give a hint (inadvertently) in the body of the question. Example: The Philippines gained its independence in 1898 and therefore celebrated its centennial year in 2000.",
          "Rule #2: Avoid using the words 'always', 'never', 'often', and other words that tend to be either always true or always false. Example: Christmas always falls on Sunday because it is a Sabbath Day.",
          "Rule #3: Avoid long sentences as these tend to be 'true'. Keep sentences short.",
          "Rule #4: Avoid trick statements with some minor misleading word or spelling anomaly, misplaced phrases, etc. A wise student who does not know the subject matter may detect this strategy and thus get the answer correctly. Example: The Raven was written by Edgar Allen Poe.",
          "Rule #5: Avoid quoting verbatim from reference materials or textbooks.",
          "Rule #6: Avoid a grossly disproportionate number of either true or false statements or even patterns in the occurrence of true and false statements. Example: Out of 10 True-False questions, there is only one false and 9 true statements.",
          "Rule #7: Avoid double negatives as such statements tend to be confusing. Example: The changes that take place early in childhood are not unchangeable."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 2,
    dayTitle: "Day 2: Scoring Rubrics & Test Construction",
    topicTitle: "Multiple Choice Test Construction Rules",
    pdfPageRef: "PDF Page 7-8",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "B. Multiple Choice Tests",
        content: "Offers the students with more than two (2) options per item to choose from. Each item in a multiple choice test consists of two parts: (a) the stem and (b) the options. In the set of options, there is a 'correct' or 'best' option while all the others are considered 'distracters'."
      },
      {
        type: "text",
        heading: "Example Structure",
        content: "Which of the following is a chemical change? (STEM)\na. Evaporation of alcohol   c. burning of oil\nb. Freezing of water        d. melting of wax\n(options a-d are the alternatives)"
      },
      {
        type: "numbered_list",
        heading: "Guidelines for Constructing Multiple Choice Tests",
        items: [
          "Rule #1: Do not use unfamiliar words, terms, and phrases. Example: What would be the system reliability of a computer system whose slave and peripherals are connected in parallel circuits and each one has a known time to failure probability of 0.05?",
          "Rule #2: Do not use modifiers that are vague and whose meanings can differ from one person to the next such as: much, often, usually, etc. Example: Much of the process of photosynthesis takes place in the: a. leaf b. bark c. stem d. roots",
          "Rule #3: Avoid complex or awkward word arrangements. Example: As the President of the Republic of the Philippines, Corazon Aquino would stand next to which President of the Philippine Republic subsequent to the 1986 EDSA revolution.",
          "Rule #4: Distracters should be equally plausible and attractive. Example: The story: May Day's Eve, was written by which Filipino author? a. Jose Garcia Villa b. Nick Joaquin c. Robert Frost d. Edgar Allan Poe",
          "Rule #5: All choices should be grammatically consistent with the stem. Example: As compared to the autos of the 1960s, autos in the 1980s ___. a. Traveling slower b. Bigger interiors c. to use less fuel d. contain more safety measure",
          "Rule #6: Avoid stems that reveal the answer to another item. Example: The green pigment in the plants that capture light energy from the sun is called ___. a. Chloroplast b. Chlorophyll c. Stomata d. Lenticels — followed by: What is the correct color of chlorophyll? a. Pink b. Green c. Grey d. Magenta",
          "Rule #7: Avoid alternatives that are synonymous with others or those that include or overlap others. Example: Candor means: a. Honesty b. Frankness c. Openness d. Secrecy",
          "Rule #8: Use 'None of the above' and 'All of the above' sparingly but best not to use them at all."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 2,
    dayTitle: "Day 2: Scoring Rubrics & Test Construction",
    topicTitle: "Matching Type & Completion Type Tests",
    pdfPageRef: "PDF Page 9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "C. Matching Type",
        content: "Consists of two parallel columns: Column A, the column of premises from which a match is sought; Column B, the column of responses from which the selection is made."
      },
      {
        type: "table",
        heading: "Example — Match Column A with Column B",
        tableData: {
          headers: ["A", "B"],
          rows: [
            ["1. First president of the Philippines", "a. Corazon Aquino"],
            ["2. The only president from Mindanao", "b. Emilio Aguinaldo"],
            ["3. The first woman president in Philippines", "c. Gloria Arroyo"],
            ["4. The 'man of the masses' president", "d. Jose Laurel"],
            ["5. Known as the 'puppet president'", "e. Ramon Magsaysay / f. Rodrigo Duterte"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "Guidelines for Constructing Matching Type Tests",
        items: [
          "Rule #1: Match homogenous items not heterogenous items.",
          "Rule #2: The stem (longer in construction than the options) must be in the first column while the options (usually shorter) must be in the second column.",
          "Rule #3: The options must be more in number than the stems.",
          "Rule #4: Arrange the options alphabetically or chronologically."
        ]
      },
      {
        type: "callout",
        heading: "2. Constructed-Response Type or Supply Type — A. Completion Type of Test",
        content: "It consists of an incomplete statement. Example: According to Freud, personality is made up of three major systems, the ___, ___, and the ___."
      },
      {
        type: "numbered_list",
        heading: "Guidelines for Constructing Completion Tests",
        items: [
          "Rule #1: Avoid overmutilated sentences. Example: The green ___ from the ___ that captures ___ from the ___ is called the ___.",
          "Rule #2: Avoid open-ended items. There should be only one acceptable answer. Example: An example of a mammal is ___.",
          "Rule #3: The blank should be at the end or near the end of the sentence.",
          "Rule #4: The length of the blanks must not suggest the answer. So better to make the blanks uniform in size. Example (avoid this): The basic unit of life is called ___, The powerhouse of the cell is ___."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Scoring Rubrics & Test Construction",
    topicTitle: "Essay Tests & Principle 3: Balanced Assessment",
    pdfPageRef: "PDF Page 10",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "B. Essays",
        content: "An essay test consists of a small number of questions to which the student is expected to demonstrate his/her ability to: a. Recall factual knowledge; b. Organize this knowledge; and c. Present the knowledge in a logical, integrated answer to the question."
      },
      {
        type: "bullet_list",
        heading: "Classifications of Essay Test",
        items: [
          "1. Restricted Essay – has a definite answer",
          "2. Extended Essay – is open-ended; no single specific answer"
        ]
      },
      {
        type: "text",
        heading: "Example of Restricted Essay Item",
        content: "Which is an example of a RESTRICTED ESSAY?\nA. Why did Rizal disagree with Bonifacio with regard to armed revolution against Spain? (Correct example)\nB. What does the professionalization of teaching imply?\nC. Explain the nature-nurture issue on human development.\nD. What is the best teaching method? Justify your answer."
      },
      {
        type: "text",
        heading: "Example of Extended Essay Item",
        content: "Which is an example of an EXTENDED ESSAY?\nA. On which did Rizal not agree with Andres Bonifacio?\nB. If Rizal would be alive up to today, which comments would he give on our present Philippine politics? (Correct example)\nC. What did Rizal accomplish while in exile in Dapitan?\nD. What was Rizal's last poem?"
      },
      {
        type: "numbered_list",
        heading: "Guidelines for Constructing Essay Test",
        items: [
          "Rule #1: Specify how the students should respond.",
          "Rule #2: Decide on your essay grading system prior to getting the essay of your students and inform them the criteria to be used for grading them.",
          "Rule #3: Put a time limit.",
          "Rule #4: Evaluate answers to essay questions without knowing the identity of the writer.",
          "Rule #5: Whenever possible, have two or more persons grade each answer."
        ]
      },
      {
        type: "bullet_list",
        heading: "Principle 3: Balanced",
        items: [
          "A balanced assessment sets target in all sets in domains of learning (cognitive, affective, and psychomotor) or domains of intelligence.",
          "A balanced assessment makes use of both traditional and alternative assessment."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 3: VALIDITY, RELIABILITY & ITEM ANALYSIS
  // ==========================================
  {
    pageNumber: 10,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Principle 4: Validity",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Validity",
        content: "It is a degree to which the assessment instrument measures what it intends to measure. It also refers to the usefulness of the instrument for a given purpose. It is the most important criterion of a good assessment instrument."
      },
      {
        type: "numbered_list",
        heading: "Ways in Establishing Validity",
        items: [
          "1. Face Validity: is done by examining the physical appearance of the instrument.",
          "2. Content Validity: is done through a careful and critical examination of the objectives of assessment so that it reflects the curricular objectives.",
          "3. Criterion-related Validity: is established statistically such that a set of scores revealed by the measuring instrument is correlated with the scores obtained in another external predictor or measure."
        ]
      },
      {
        type: "text",
        heading: "Two Purposes of Criterion-related Validity",
        content: "a. Concurrent Validity: describes the present status of the individual by correlating the sets of scores obtained from two measures given concurrently. Example: Relate the reading test result with pupils' average grades in reading given by the teacher.\n\nb. Predictive Validity: describes the future performance of an individual by correlating the sets of scores obtained from two measures given at a longer time interval. Example: The entrance examination scores in a test administered to a freshman class at the beginning of the school year is correlated with the average grades at the end of the school year."
      },
      {
        type: "callout",
        heading: "Principle 5: Reliability",
        content: "Reliability refers to the consistency of scores obtained by the same person when retested using the same instrument / its parallel or when compared with other students who took the same test."
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Reliability Measurement Methods & Item Analysis",
    pdfPageRef: "PDF Page 12",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Methods of Establishing Reliability",
        tableData: {
          headers: ["Method", "Type of Reliability Measure", "Procedure"],
          rows: [
            ["1. Test-Retest", "Measure of stability", "Give a test twice to the same group with any time interval between tests from several minutes to several years"],
            ["2. Equivalent Forms", "Measure of equivalence", "Give parallel forms of tests with close time interval between forms"],
            ["3. Test-retest with Equivalent forms", "Measure stability and equivalence", "Give parallel forms of tests with increased time interval between forms"],
            ["4. Split Half", "Measure of internal consistency", "Give a test once. Score is equivalent halves of the test e.g.) odd-and-even-numbered items"],
            ["5. Kuder-Richardson", "Measure of internal consistency", "Give the test once then correlate the proportion/percentage of the students passing and not passing a given item"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Item Analysis",
        content: "Refers to the process of examining the student's response to each item in the test. There are two characteristics of an item: desirable and undesirable characteristics. Desirable items – RETAIN. Undesirable items – REVISE or REJECT."
      },
      {
        type: "bullet_list",
        heading: "Two Criteria in Determining Desirability and Undesirability of an Item",
        items: [
          "1. Item Difficulty",
          "2. Item Discrimination"
        ]
      },
      {
        type: "callout",
        heading: "Item Difficulty",
        content: "Is defined as the number of students who are able to answer the item correctly divided by the total number of students. Formula: Item Difficulty = number of students with correct answer / total number of students"
      },
      {
        type: "table",
        heading: "Level of Difficulty of an Item",
        tableData: {
          headers: ["Range of Difficulty Index", "Difficulty Level", "Action"],
          rows: [
            ["0 to 0.25", "Difficult", "Revise or discard"],
            ["0.26 to 0.75", "Right difficulty", "Retain"],
            ["0.76 and above", "Easy", "Revise or discard"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Item Difficulty Examples & Discrimination Index",
    pdfPageRef: "PDF Page 13",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Example: Item Difficulty",
        content: "What is the item difficulty index of an item if 25 students are unable to answer it correctly while 75 answered it correctly?\n\nItem Difficulty = number of students with correct answer / total number of students\nItem Difficulty = 75/100\nItem Difficulty = 0.75 → Right Difficulty"
      },
      {
        type: "table",
        heading: "Problem 2: Get the Difficulty Index of Each Item",
        tableData: {
          headers: ["Question", "A", "B", "C", "D"],
          rows: [
            ["1", "0", "3", "24*", "3"],
            ["2", "12*", "13", "3", "2"]
          ]
        }
      },
      {
        type: "text",
        content: "*denotes correct answer\n\nAnswer for Q1: __________\nAnswer for Q2: __________"
      },
      {
        type: "callout",
        heading: "Discrimination Index",
        content: "Is the degree to which the item discriminates between high performing and low performing group (upper and lower 27%). Formula: Discrimination Index = DU – DL, where DU = difficulty index of upper group and DL = difficulty index of lower group."
      },
      {
        type: "table",
        heading: "Range of Discrimination Index",
        tableData: {
          headers: ["Range of Discrimination Index", "Difficulty Level", "Action"],
          rows: [
            ["-1.0 to -0.56", "Can discriminate but item is questionable", "Discard"],
            ["-0.55 to 0.45", "Non-discriminating", "Revise"],
            ["0.46 to 1.0", "Discriminating Item", "Include"]
          ]
        }
      },
      {
        type: "text",
        heading: "Example: Discrimination Index",
        content: "30 students are divided into two groups: 15 students in the lower group and 15 students in the upper group. In the upper group, there are 12 students who answered item X correctly whereas in the lower group only 6 students answered item X. What is the discrimination index?\n\nDiscrimination index (D) = DU – DL\nDU = level of difficulty of item X from the upper group\nDL = level of difficulty of item x from the lower group\n\nDU = 12/15 = .80\nDL = 6/15 = .40\nD = DU – DL\nD = .80 – .40\nD = .40"
      },
      {
        type: "bullet_list",
        heading: "Types of Discrimination",
        items: [
          "Positive discrimination: if the proportion of students who got an item right in the upper group is GREATER THAN the lower group.",
          "Negative discrimination: if the proportion of students who got an item right in the lower group is GREATER THAN the upper group.",
          "Zero discrimination: if the proportion of students who got the item right in the upper performing group and low performing group are equal."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Item Retention Rules & Minor Principles of Assessment",
    pdfPageRef: "PDF Page 14",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Items are Retained if:",
        items: [
          "Difficulty Index: within .26–.75",
          "Discrimination index: .20 and above"
        ]
      },
      {
        type: "bullet_list",
        heading: "Items Need to be Revised if:",
        items: [
          "Difficulty Index: .26–.75 AND Discrimination index: .19 and below",
          "OR — Difficulty Index: NOT within .26–.75 AND Discrimination Index: .20 and above"
        ]
      },
      {
        type: "bullet_list",
        heading: "Items Need to be Discarded/Rejected if:",
        items: [
          "Difficulty index: not within .26–.75",
          "Discrimination index: .19 and below"
        ]
      },
      {
        type: "bullet_list",
        heading: "Minor Principles of Assessment",
        items: [
          "Administrability: the test should be easy to administer such that the directions should clearly indicate how student should respond to the test/task items and how much time should he/she spend for each test item or for the whole test.",
          "Scoreability: the test should be easy to score such that directions for scoring are clear/points for each correct answer/s is/are specified.",
          "Interpretability: test scores can easily be interpreted and described in terms of the specific tasks that a student can perform or his/her relative position in a clearly defined group.",
          "Economy: the tests should be given in a cheapest way in terms of time and efforts spent for administration of the test and answer sheets must be provided so the test can be given from time to time."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Measures of Central Tendency: Mean, Median & Mode",
    pdfPageRef: "PDF Page 14-15",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Measures of Central Tendency",
        content: "It is a single value that is used to identify the center of the data. It is taught as the typical value in the set of scores. It tends to lie within the center if it is arranged from lowest to highest and vice versa."
      },
      {
        type: "bullet_list",
        heading: "MEAN",
        items: [
          "Also referred to as average or arithmetic mean",
          "Easily affected by extreme scores"
        ]
      },
      {
        type: "bullet_list",
        heading: "When to Use the Mean",
        items: [
          "When it is desired to give each score equal weight in determining the central tendency.",
          "When it is desired to find the measure of central tendency which has the highest reliability.",
          "When it is desired to compute the standard deviation and the coefficient of correlation later on."
        ]
      },
      {
        type: "numbered_list",
        heading: "Steps in Solving the Mean Value Using Raw Scores",
        items: [
          "1. Get the sum of all the scores in the distribution.",
          "2. Identify the number of scores (n).",
          "3. Divide."
        ]
      },
      {
        type: "text",
        heading: "Example",
        content: "10 Grade 10 students in a class got the following scores: 70, 72, 75, 77, 78, 80, 84, 87, 90, and 92. What is the mean?"
      },
      {
        type: "table",
        heading: "Example: Find the Average",
        tableData: {
          headers: ["Student", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          rows: [
            ["Score", "64", "78", "86", "70", "67", "70", "73", "78", "79", "95"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "MEDIAN",
        items: [
          "Refers to the centermost scores when the scores in the distribution are arranged according to magnitude (from highest to lowest score or from lowest to highest score)",
          "Not affected by extreme scores because it is a positional measure"
        ]
      },
      {
        type: "bullet_list",
        heading: "When to Use the Median",
        items: [
          "When a quick and easily computed measure of central tendency is desired.",
          "When there are extreme scores, such as a few very high scores or a few low scores, which could affect the mean disproportionately."
        ]
      },
      {
        type: "numbered_list",
        heading: "Median of Ungrouped Data",
        items: [
          "1. Arrange the scores from lowest to highest or highest to lowest.",
          "2. Determine the middle score in a distribution if n is an odd number.",
          "3. If n is even, get the average of the two middle scores."
        ]
      },
      {
        type: "text",
        heading: "Examples",
        content: "Get the median of the following scores: 14, 35, 45, 55, 55, 56, 56, 65, 87, 89, 92\nAnswer: _______\n\nGet the median of the following scores: 14, 35, 45, 55, 55, 56, 56, 65, 87, 89\nAnswer: _______"
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: Validity, Reliability & Item Analysis",
    topicTitle: "Measures of Central Tendency: The Mode",
    pdfPageRef: "PDF Page 15-16",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "MODE",
        items: [
          "Refers to the score/s that occurs most frequently in the score distribution",
          "Can be used for quantitative, as well as qualitative data",
          "May not be unique",
          "Not affected by extreme values",
          "May not exist at times"
        ]
      },
      {
        type: "numbered_list",
        heading: "Types of Mode",
        items: [
          "1. Unimodal – is a score distribution that consists of one mode",
          "2. Bimodal – is a score distribution that consists of two modes",
          "3. Trimodal – is a score distribution that consists of three modes. It is also considered as multi-modal – a score distribution that consists of more than two modes."
        ]
      },
      {
        type: "bullet_list",
        heading: "When to Use the Mode",
        items: [
          "When it is desired to find the score that occurs most often.",
          "When it is desired to find the measure of central tendency that has greatest concentration."
        ]
      },
      {
        type: "text",
        heading: "Examples",
        content: "What is the mode of the following scores: 14, 35, 45, 55, 55, 56, 56, 65, 87, 89, 92\nAnswer: _______\n\nFind the mode: 25, 24, 24, 20, 20, 20, 16, 12, 10, 7"
      }
    ]
  },

  // ==========================================
  // DAY 4: VARIABILITY, SKEWNESS, KURTOSIS & RELATIVE POSITION
  // ==========================================
  {
    pageNumber: 16,
    dayNumber: 4,
    dayTitle: "Day 4: Variability, Distribution Shape & Relative Position",
    topicTitle: "Measures of Variability: Range, Quartile Deviation & Standard Deviation",
    pdfPageRef: "PDF Page 16-17",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Measures of Variability",
        content: "It is a single value that is used to describe the spread of scores in a distribution, that is above or below the measures of central tendency."
      },
      {
        type: "numbered_list",
        heading: "Three Measures of Variability",
        items: [
          "1. Range",
          "2. Quartile Deviation",
          "3. Standard Deviation"
        ]
      },
      {
        type: "bullet_list",
        heading: "RANGE",
        items: [
          "It is the difference between the highest score and the lowest score in the data set.",
          "Rough estimation of variation or dispersion",
          "Easily affected by extreme scores",
          "Very easy to compute — Formula: R = HS – LS"
        ]
      },
      {
        type: "bullet_list",
        heading: "QUARTILE DEVIATION (QD)",
        items: [
          "Refers to the average deviation of the third quartile and the first quartile from the value of the median.",
          "Considers only the middle 50% of the scores in the distribution",
          "Reduces the influence of the extreme scores"
        ]
      },
      {
        type: "bullet_list",
        heading: "STANDARD DEVIATION (SD)",
        items: [
          "Shows variation of the individual scores about the mean",
          "The most important measure and the most commonly used of variation or dispersion, particularly in research"
        ]
      },
      {
        type: "bullet_list",
        heading: "Interpretation of Result",
        items: [
          "Small variability: closer, clustered, homogeneous, less varied",
          "Large variability: dispersed, scattered, spread apart, far from each other, heterogeneous, more varied"
        ]
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 4,
    dayTitle: "Day 4: Variability, Distribution Shape & Relative Position",
    topicTitle: "Measures of Skewness",
    pdfPageRef: "PDF Page 17",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Measures of Skewness",
        content: "Describe the degree of departure of the scores from a symmetry."
      },
      {
        type: "bullet_list",
        heading: "POSITIVELY SKEWED",
        items: [
          "Skewed to the right",
          "Is a distribution where the thin end tail of the graph goes to the right part of the curve",
          "This happens when most of the scores of the students are BELOW the mean",
          "It tells you only on poor performance of takers but not the reasons why students did poorly in the said examination"
        ]
      },
      {
        type: "numbered_list",
        heading: "Reasons of Poor Performance",
        items: [
          "1. Ineffective teaching method and instruction;",
          "2. Students' unpreparedness;",
          "3. Test items very difficult;",
          "4. Not enough time to answer test items"
        ]
      },
      {
        type: "bullet_list",
        heading: "NEGATIVELY SKEWED",
        items: [
          "Skewed to the left",
          "Is a distribution where the thin end tail of the graph goes to the left part of the curve",
          "This happens when most of the scores of the students are ABOVE the mean",
          "It tells you only on good performance of takers but not the reasons why students did well in the said examination"
        ]
      },
      {
        type: "numbered_list",
        heading: "Possible Reasons of High Scores",
        items: [
          "(1) students are smart;",
          "(2) enough time to finish examination;",
          "(3) test items very easy;",
          "(4) effective instruction;",
          "(5) students have prepared for the examination"
        ]
      },
      {
        type: "callout",
        heading: "Mnemonic",
        content: "P – Positively Skewed | R – Skewed to the RIGHT | D – Test was DIFFICULT | L – Most of the scores are LOW\n\nN – Negatively Skewed | L – Skewed to the LEFT | E – Test was Easy | H – Most of the scores are HIGH"
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 4,
    dayTitle: "Day 4: Variability, Distribution Shape & Relative Position",
    topicTitle: "Normal Distribution & Measures of Kurtosis",
    pdfPageRef: "PDF Page 18",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Normal Distribution",
        content: "Is a special kind of symmetric distribution. Can be determined using the values of the mean and standard deviation."
      },
      {
        type: "bullet_list",
        heading: "Properties of Normal Distribution",
        items: [
          "The curve has a single peak, meaning the distribution is unimodal.",
          "It is a bell-shaped curve.",
          "It is symmetrical to the mean.",
          "The end tails of the curve can be extended indefinitely in both sides."
        ]
      },
      {
        type: "text",
        heading: "Percentage of the Population Within Standard Deviation Units",
        content: "The normal curve is divided by standard deviation units (-4SD to +4SD around the mean X̄). Percentages within each band: .13% | 2.14% | 13.59% | 34.13% | 34.13% | 13.59% | 2.14% | .13%.\nCumulative bands: 68.26% falls within ±1SD, 95.44% falls within ±2SD, 99.72% falls within ±3SD."
      },
      {
        type: "table",
        heading: "Skewness Quick Reference",
        tableData: {
          headers: ["Distribution Type", "Relationship"],
          rows: [
            ["Positively Skewed", "MEAN > MEDIAN > MODE"],
            ["Negatively Skewed", "MODE > MEDIAN > MEAN"],
            ["Normally Distributed", "MODE = MEDIAN = MEAN"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Hand Mnemonic",
        content: "RIGHT HAND (Positively Skewed, tail to the right): pointing order from thumb reads MEAN, MEDIAN, MODE.\nLEFT HAND (Negatively Skewed, tail to the left): pointing order from thumb reads MODE, MEDIAN, MEAN."
      },
      {
        type: "callout",
        heading: "Measures of Kurtosis",
        content: "Tells us the shape of a group of data. It shows if the data is: Tall and narrow, Flat and wide, or Just normal."
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 4,
    dayTitle: "Day 4: Variability, Distribution Shape & Relative Position",
    topicTitle: "Types of Kurtosis & Measures of Relative Position",
    pdfPageRef: "PDF Page 18-19",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. Mesokurtic",
        items: [
          "Scores are just right",
          "Most are average",
          "Not too high, not too low",
          "Examples: Test scores where most students get 75–85; Height where most pupils are average height; a quiz where some are high, some are low, but mostly in the middle"
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Leptokurtic",
        items: [
          "Many scores are very close together",
          "Very high peak",
          "Some are very far (very high or very low)",
          "Examples: An easy quiz where most pupils score 90–100, but a few get 50; class recitation where most answer correctly, but a few struggle; a spelling test with many perfect scores, few very low scores"
        ]
      },
      {
        type: "bullet_list",
        heading: "3. Platykurtic",
        items: [
          "Scores are spread out",
          "No big group in the middle",
          "Looks flat",
          "Examples: A hard exam where scores range from 40 to 95; different abilities where some are very good, some struggling, many in between; game scores where everyone gets very different scores"
        ]
      },
      {
        type: "text",
        heading: "Sample Board Exam Question",
        content: "A distribution is described as 'not too peaked and not too flat.' Which type of kurtosis does it represent?\nA. Platykurtic\nB. Leptokurtic\nC. Mesokurtic\nD. Negatively skewed"
      },
      {
        type: "callout",
        heading: "Measures of Relative Position",
        content: "Indicates where a score is in relation to all other scores in the distribution. They make it possible to compare the performance of an individual on two or more different tests."
      },
      {
        type: "text",
        heading: "1. Percentile Rank",
        content: "This means that the percentage of the examinees in the norm group who scored below the score of interest (Crocker & Algina, 1986).\n\nExample: Maria's raw score in English Class is 82 which is equal to 90th percentile. This means that 90% of Maria's classmates got a score lower than 82. Maria surpassed 90% of her classmates. Maria belongs to the upper 10% of the class."
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 4,
    dayTitle: "Day 4: Variability, Distribution Shape & Relative Position",
    topicTitle: "Stanines, Z-Score, T-Score & Measures of Relationship",
    pdfPageRef: "PDF Page 20",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "2. Stanines",
        items: [
          "Also known as standard nine",
          "Are single digit scores ranging from 1–9",
          "The distribution of raw scores is divided into nine parts"
        ]
      },
      {
        type: "table",
        heading: "Stanine Description Scale",
        tableData: {
          headers: ["Description", "Stanine"],
          rows: [
            ["Very High", "9"],
            ["Above Average", "8, 7"],
            ["Average", "6, 5, 4"],
            ["Below Average", "3, 2"],
            ["Very Low", "1"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "3. Z-Score",
        items: [
          "The number of standard deviation units a score is above or below the mean of a given distribution.",
          "A Positive Z-score: measures the number of standard deviations a score is above the mean.",
          "A negative z-score: gives the number of standard deviations a score is below the mean.",
          "Formula: Z = (Score – Mean) / Standard Deviation"
        ]
      },
      {
        type: "table",
        heading: "Problem: Mark's Examination Results",
        tableData: {
          headers: ["Subject", "Mean", "Standard Deviation", "Mark's Grade"],
          rows: [
            ["Mathematics", "93", "10", "95"],
            ["Labor Mgt", "90", "4", "92"],
            ["Natural Science", "85", "5", "80"]
          ]
        }
      },
      {
        type: "text",
        content: "In what subject did Mark perform best? Very poor?\n\nMath Z-Score = (95 – 93)/10 = 2/10 = 0.2\nLabor Mgt Z-Score = _______________\nNatural Science Z-Score = _______________\n\nMark performed best in _______________ and performed very poor in _______________."
      },
      {
        type: "callout",
        heading: "3. T-Score",
        content: "It tells the location of a score in a normal distribution having a mean of 50 and a standard deviation of 10. Formula: T = 10z + 50"
      },
      {
        type: "text",
        heading: "Find the T-Scores of the Above Z-Scores",
        content: "Math T-Score = 10z + 50 = 10(0.2) + 50 = 2 + 50 = 52\nLabor Mgt T-Score = _______________\nNatural Science T-Score = _______________"
      },
      {
        type: "callout",
        heading: "Measures of Relationship",
        content: "These describe the degree of relationship or correlation between two variables (Example: academic achievement and motivation)."
      },
      {
        type: "numbered_list",
        heading: "Types of Correlation",
        items: [
          "1. Positive Correlation – Direct Relation: as one variable increases, the other variable also increases OR as one variable decreases, the other variable also decreases",
          "2. Negative Correlation – Indirect/Inverse Relation: as one variable increases, the other variable decreases OR as one variable decreases, the other variable increases",
          "3. No Correlation: no relationship"
        ]
      }
    ]
  },

  // ==========================================
  // DAY 5: K-12 CURRICULUM & GRADING SYSTEM
  // ==========================================
  {
    pageNumber: 21,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "K-12 Curriculum: Enhanced Basic Education Act of 2013 (RA 10533)",
    pdfPageRef: "PDF Page 21-22",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Curriculum Evolution",
        content: "1983 NESC / 1989 NSEC → 2002 RBEC → K-12 Curriculum"
      },
      {
        type: "bullet_list",
        heading: "Key Acronyms",
        items: [
          "NESC – New Elementary School Curriculum",
          "NSEC – New Secondary Education Curriculum",
          "BEC – Basic Education Curriculum",
          "RBEC – Revised Basic Education Curriculum",
          "K-12 Curriculum – Enhanced Basic Education Curriculum"
        ]
      },
      {
        type: "text",
        heading: "Why Name It the K to 12 Curriculum?",
        content: "Because the curriculum has KINDERGARTEN and 12 GRADE LEVELS in contrast to the 10 GRADE levels without compulsory Kindergarten that are currently in place with the 2002 BEC."
      },
      {
        type: "comparison",
        heading: "2002 BEC vs. K-12 Structure",
        items: [
          "2002 BEC: 6 years elementary + 4 years high school = 10 years",
          "K-12: Mandatory Kindergarten + 6 years elementary + 4 years junior high (Grades 7-10) + 2 years senior high (Grades 11-12)"
        ]
      },
      {
        type: "bullet_list",
        heading: "Kindergarten Learning Domains",
        items: [
          "Values Development",
          "Socio-emotional Development",
          "Mathematics",
          "Understanding Physical and Natural Environment",
          "Language and Literacy and Communication",
          "Physical, Health and Motor Development",
          "Aesthetic Development"
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "K-12 Core Subjects by Grade Level & Career Tracks",
    pdfPageRef: "PDF Page 22-23",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Grades 1-6 Core Learning Areas (Subjects)",
        items: [
          "Math", "Science", "English", "Filipino", "Araling Panlipunan", "EPP/TLE", "MAPEH", "Edukasyon sa Pagpapakatao (ESP)", "MTB-MLE from Grades 1-3"
        ]
      },
      {
        type: "bullet_list",
        heading: "Grades 7-8 (New HS Years 1-2)",
        items: [
          "Core Learning Areas and Exploratory TLE",
          "TLE courses in grades 7 and 8 are EXPLORATORY.",
          "Four (4) exploratory courses in Grade 7 and another 4 exploratory courses in Grade 8"
        ]
      },
      {
        type: "bullet_list",
        heading: "Grades 9-10 (New HS Years 3-4)",
        items: [
          "Core Learning Areas plus ELECTIVE TLE"
        ]
      },
      {
        type: "text",
        heading: "Beginning Grade 9",
        content: "The student may now choose a FOCUS AREA from the exploratory courses. The learning of this focus area continues up to Grade 10. This enables a student to obtain a National Certificate Level 1 (NC 1) from TESDA should he/she pass the assessment from TESDA. The focus area or specialization that the student takes in Grades 9 and 10 will be to his/her advantage if he/she will pursue the tech-voc career path in Grades 11 and 12. This will easily earn for him/her an NC 2."
      },
      {
        type: "bullet_list",
        heading: "Grades 11-12 Core Subjects",
        items: [
          "Languages", "Literature", "Mathematics", "Philosophy", "Natural Sciences", "Social Sciences", "NSTP"
        ]
      },
      {
        type: "numbered_list",
        heading: "Career Tracks",
        items: [
          "1. Academic Track",
          "2. Technical-Vocational Track",
          "3. Sports Track",
          "4. Arts and Design Track"
        ]
      },
      {
        type: "bullet_list",
        heading: "Academic Track — Strands",
        items: [
          "1. General Academic",
          "2. ABM – Accountancy, Business and Management",
          "3. STEM – Science, Technology and Engineering and Mathematics",
          "4. HUMSS – Humanities and Social Sciences"
        ]
      },
      {
        type: "bullet_list",
        heading: "Technical-Vocational Track",
        items: [
          "1. Home Economics",
          "2. Agri-Fishery",
          "3. Industrial Arts",
          "4. Information and Communications Technology or ICT"
        ]
      },
      {
        type: "numbered_list",
        heading: "Sports Track — Nine Subjects",
        items: [
          "1. Safety and First Aid",
          "2. Human Movement",
          "3. Fundamentals of Coaching",
          "4. Sports Officiating and Activity Management",
          "5. Fitness, Sports, and Recreation Leadership",
          "6. Psychosocial Aspect of Sports and Exercise",
          "7. Fitness Testing and Exercise Programming",
          "8. Practicum",
          "9. Apprenticeship"
        ]
      },
      {
        type: "callout",
        heading: "Arts and Design Track",
        content: "Covers a wide range of art forms: Theater, Music, Dance, Creative Writing, Visual Arts, and Media Arts. Prior to enrollment, there is art/creative talent assessment and guidance to gauge a student's art inclination and aptitude. The track has six general or common subjects that focus on acquiring competencies required for further specialization in the different artistic areas."
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "Teaching Approaches of K-12 & the MATATAG Curriculum",
    pdfPageRef: "PDF Page 23-24",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Teaching Approaches of Subjects in the K to 12",
        items: [
          "1. Learner-centered – Learners are the primary consideration",
          "2. Inclusive – No exclusivity, teacher taught everybody",
          "3. Developmentally Appropriate – Within their developmental stage and learning activities fit the developmental stage of children",
          "4. Relevant and Responsive – Relevant: making teaching meaningful to students' daily experiences. Responsive: answer their questions and concerns, not a mile-wide-inch-deep understanding",
          "5. Research Based – Interesting, updated, convincing, and persuasive",
          "6. Cultured Sensitive – Mindful of the diversity of learners because all learners are unique.",
          "7. Contextualized and Global – putting your lesson into context",
          "8. Constructivist – Building upon prior knowledge; learners constructed new lesson meanings.",
          "9. Inquiry-Based – Student-centered generated questions are the core of the learning process.",
          "10. Integrative – An integrative approach can be intradisciplinary, interdisciplinary, and transdisciplinary. Intradisciplinary: integration is within one discipline. Interdisciplinary: happens when traditionally separate subjects are brought together. Transdisciplinary: integrating your lesson within real life",
          "11. Spiral Progression – develop the same concepts from one grade level to the next in increasing complexity",
          "12. Mother Tongue Based – Language of instruction from K to Grade 3 is mother tongue"
        ]
      },
      {
        type: "callout",
        heading: "MATATAG K to 10 Curriculum",
        content: "Recalibrated K to 10 curriculum under the K to 12 program."
      },
      {
        type: "bullet_list",
        heading: "The MATATAG Agenda",
        items: [
          "MAke the curriculum relevant to produce job-ready, active, and responsible citizens.",
          "TAke steps to accelerate the delivery of basic education services and provision facilities.",
          "TAke good care of learners by promoting learner well-being, inclusiveness learning, and positive learning environment.",
          "Give support for teachers to teach better."
        ]
      },
      {
        type: "numbered_list",
        heading: "What Are the Objectives of the MATATAG Curriculum?",
        items: [
          "1. To decongest the overcrowded curriculum that resulted in compromised fundamental skills among learners.",
          "2. To make learning competencies age-appropriate and properly sequenced in terms of progression.",
          "3. To strengthen foundational skills like literacy and numeracy, and intensify values formation among learners."
        ]
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "DepEd Order 8, s.2015 & Components of Summative Assessment",
    pdfPageRef: "PDF Page 25",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "DepEd Order Number 8, series of 2015",
        content: "Policy Guidelines on Classroom Assessment for the K to 12 Basic Education Program."
      },
      {
        type: "numbered_list",
        heading: "Components of Summative Assessment",
        items: [
          "1. Written Work (WW): Ensures that students are able to express skills and concepts in written form. Long quizzes, unit or long tests. Done several times during the quarter.",
          "2. Performance Tasks (PT): Allow learners to show what they know and are able to do in diverse ways. Include skills in demonstration, group presentation, oral work, multimedia presentations and research projects. It is important to note that written output may also be considered as performance tasks. Done several times during the quarter.",
          "3. Quarterly Assessment (QA): Measures student learning at the end of the quarter. These may include objective tests, performance-based assessment or a combination thereof. Done once, at the end of the quarter."
        ]
      },
      {
        type: "callout",
        heading: "What Is the Grading System?",
        content: "Kindergarten – Checklists, Anecdotal records, and Portfolios are used instead of numerical grades which are based on the Kindergarten curriculum guide."
      },
      {
        type: "bullet_list",
        heading: "Grades 1-12",
        items: [
          "Learners are graded on 3 components: WW, PT and QA",
          "These components are given specific weights.",
          "All grades will be based on weighted raw score of learner's summative assessment.",
          "The K-12 Basic Education Program (BEP) uses a standards-based and competency-based grading system.",
          "The minimum grade to pass a specific learning area is 60, which transmuted to 75 in the Report Card.",
          "The lowest mark that can appear on the Report Card is 60 for Quarterly Grades and Final Grades."
        ]
      },
      {
        type: "table",
        heading: "Table 4. Weight of the Components for Grades 1-10",
        tableData: {
          headers: ["Components", "Languages, AP, EsP", "Science, Math", "MAPEH, EPP/TLE"],
          rows: [
            ["Written Work", "30%", "40%", "20%"],
            ["Performance Tasks", "50%", "40%", "60%"],
            ["Quarterly Assessment", "20%", "20%", "20%"]
          ]
        }
      },
      {
        type: "table",
        heading: "Weight of Components for Grades 11-12",
        tableData: {
          headers: ["Component", "Core Subjects", "Academic Track (All other subj.)", "Academic Track (Work Immersion/Research/Bus. Enterprise/Exhibit/Performance)", "TVL/Sports/Arts & Design (All other subj.)", "TVL/Sports/Arts & Design (Work Immersion/Research/Performance)"],
          rows: [
            ["Written Work", "25%", "25%", "35%", "—", "20%"],
            ["Performance Task", "50%", "45%", "40%", "—", "60%"],
            ["Quarterly Test", "25%", "30%", "25%", "—", "20%"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "How Learner Progress Is Recorded and Computed",
    pdfPageRef: "PDF Page 26",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Steps to Compute Grades",
        items: [
          "1. Get the total score for each component (Written Work, Performance Task, Quarterly Assessment) — sum the raw scores and the highest possible scores across all items.",
          "2. Divide the total raw score by the highest possible score then multiply the quotient by 100% to get the Percentage Score.",
          "3. Convert Percentage Scores to Weighted Scores. Multiply the Percentage Score by the weight of each component."
        ]
      },
      {
        type: "table",
        heading: "Example: Component Totals",
        tableData: {
          headers: ["Component", "Total Raw Score", "Total Highest Possible Score"],
          rows: [
            ["Written Work", "145", "160"],
            ["Performance Task", "100", "120"],
            ["Quarterly Assessment", "40", "50"]
          ]
        }
      },
      {
        type: "text",
        heading: "Step 2: Percentage Scores",
        content: "Written Work: 145/160 = 0.9063 → 0.9063 x 100% = 90.63\nPerformance Task: 100/120 = 0.8333 → 0.8333 x 100% = 83.33\nQuarterly Assessment: 40/50 = 0.80 → 0.80 x 100% = 80.00"
      },
      {
        type: "table",
        heading: "Step 3: Weighted Scores (using weights 30% / 50% / 20%)",
        tableData: {
          headers: ["Component", "Percentage Score", "Weight", "Weighted Score"],
          rows: [
            ["Written Work", "90.63", "x 0.30", "27.19"],
            ["Performance Task", "83.33", "x 0.50", "41.67"],
            ["Quarterly Assessment", "80.00", "x 0.20", "16.00"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "Initial Grade, Transmutation & Final Grade Computation",
    pdfPageRef: "PDF Page 27-28",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Step 4: Add the Weighted Scores to Get the Initial Grade",
        content: "27.19 + 41.67 + 16.00 = 84.86\nInitial Grade = 84.86"
      },
      {
        type: "text",
        heading: "Step 5: Transmute the Initial Grade Using the Transmutation Table",
        content: "Initial Grade: 84.86 → Transmuted Grade: 90.00 (This will be reflected in the Report Card.)"
      },
      {
        type: "callout",
        heading: "How Are Grades Computed at the End of the School Year? (Grades 1-10)",
        content: "Final Grade by Learning Area = (1st-quarter grade + 2nd-quarter grade + 3rd-quarter grade + 4th-quarter grade) / 4\n\nThe General Average is computed by dividing the sum of all final grades by the total number of learning areas. Each learning area has equal weight.\n\nGeneral Average = Sum of Final Grades of All Learning Areas / Total number of Learning Areas in a grade level"
      },
      {
        type: "text",
        heading: "Final Grade Computation Example (Filipino)",
        content: "Quarter 1: 80, Quarter 2: 89, Quarter 3: 86, Quarter 4: 84\nFinal Grade = (80 + 89 + 86 + 84) / 4 = 339/4 = 84.75 = 85"
      },
      {
        type: "text",
        heading: "General Average Computation Example",
        content: "Final Grades across 8 learning areas: 85, 90, 83, 86, 91, 90, 81, 85\nGeneral Average = (85 + 90 + 83 + 86 + 91 + 90 + 81 + 85) / 8 = 691/8 = 86.375 = 86"
      },
      {
        type: "callout",
        heading: "For Grades 11 and 12",
        content: "The two quarters determine the FINAL GRADE in a semester.\n\nExample (Reading & Writing Skills — Core Subject): Quarter 3 = 80, Quarter 4 = 84\nFinal Grade per subject = (Quarter 3 Grade + Quarter 4 Grade) / 2 = (80 + 84) / 2 = 82"
      },
      {
        type: "table",
        heading: "Table 10. Descriptors, Grading Scale, and Remarks",
        tableData: {
          headers: ["Descriptor", "Grading Scale", "Remarks"],
          rows: [
            ["Outstanding", "90–100", "Passed"],
            ["Very Satisfactory", "85–89", "Passed"],
            ["Satisfactory", "80–84", "Passed"],
            ["Fairly Satisfactory", "75–79", "Passed"],
            ["Did Not Meet Expectations", "Below 75", "Failed"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 27,
    dayNumber: 5,
    dayTitle: "Day 5: K-12 Curriculum & Grading System",
    topicTitle: "Promotion, Retention & Recomputed Final Grade",
    pdfPageRef: "PDF Page 29",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "How Learners Are Promoted or Retained (Grades 1-10)",
        tableData: {
          headers: ["Requirements", "Decision"],
          rows: [
            ["1. Final Grade of at least 75 in all learning areas", "Promoted to the next grade level"],
            ["2. Did Not Meet Expectations in not more than two learning areas", "Must pass remedial classes for learning areas with failing mark to be promoted to the next grade level. Otherwise, the learner is retained in the same grade level."],
            ["3. Did Not Meet Expectations in three or more learning areas", "Retained in the same grade level"],
            ["4. Must pass all learning areas in the Elementary", "1. Earn the Elementary Certificate 2. Promoted to Junior High School"],
            ["5. Must pass all learning areas in the Junior High School", "1. Earn the Junior High School Certificate 2. Promoted to Senior High School"]
          ]
        }
      },
      {
        type: "table",
        heading: "How Learners Are Promoted or Retained (Grades 11 to 12)",
        tableData: {
          headers: ["Requirements", "Decision"],
          rows: [
            ["1. Final Grade of at least 75 in all learning areas", "Can proceed to the next semester"],
            ["2. Did not Meet Expectations in a prerequisite subject in a learning area", "Must pass remedial classes for failed competencies in the subject before being allowed to enroll in the higher-level subject"],
            ["3. Did Not Meet Expectations in any subject or learning area at the end of the semester", "Must pass remedial classes for failed competencies in the subjects or learning areas to be allowed to enroll in the next semester. Otherwise, the learner must retake the subjects failed."],
            ["4. Must pass all subjects or learning areas in Senior High School", "Earn the Senior High School Certificate"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Recomputed Final Grade (RFG)",
        content: "RFG = (Final Grade + Remedial Class Mark) / 2\n\nThe teacher of the Remedial Class issues the Certificate of Recomputed Final Grade, which is noted by the School Principal. This is submitted to the Division Office and must be attached to both Form 137 and School Form no. 5."
      }
    ]
  },

  // ==========================================
  // APPENDIX: FOR PERSONAL STUDY / SELF-STUDY ONLY
  // ==========================================
  {
    pageNumber: 28,
    dayNumber: 6,
    dayTitle: "Appendix: For Personal Study / Self-Study Only",
    topicTitle: "Factors Influencing the Validity of an Assessment Instrument",
    pdfPageRef: "PDF Page 30",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Factors Influencing Validity",
        items: [
          "1. Unclear Directions: directions that do not clearly indicate to the students how to respond to the task and how to record the responses tend to reduce validity.",
          "2. Reading Vocabulary and sentence structure too difficult: Vocabulary and sentences structure that are too complicated for the student result in the assessment of reading comprehension thus altering the meaning of assessment result.",
          "3. Ambiguity: Ambiguous statements in assessments tasks contribute to misinterpretations and confusion. Ambiguity sometimes confuses the better students more than it does the poor students.",
          "4. Inadequate time limits: time limits that do not provide students with enough time to consider the tasks and provide thoughtful responses can reduce the validity of interpretations of results.",
          "5. Overemphasis of easy-to-assess aspects of domain at the expense of important, but hard-to-assess aspects (construct under the presentation). It is easy to develop test question that asses factual recall and generally harder to develop ones that tap conceptual understanding or higher-order thinking processes such as the evaluation of competing positions or arguments. Hence, it is important to guard against under representation of task getting the important, but more difficult to assess aspects of achievement.",
          "6. Test items inappropriate for the outcomes being measured: Attempting to measure understanding, thinking skills, and other complex types of achievement with test forms that are appropriate for only measuring factual knowledge will invalidate the results.",
          "7. Poorly constructed test items: test items that unintentionally provide clues to the answer tend to measure the students' alertness in detecting clues as well as mastery of skills or knowledge the test is intended to measure.",
          "8. Test too short: if a test is too short to provide a representative sample of the performance, we are interested in its validity will suffer accordingly.",
          "9. Improper arrangement of items: test items are typically arranged in order of difficulty, with the easiest items first. Placing difficult items first in the test may cause students to spend too much time on these and prevent them from reaching items they could easily answer. Improper arrangement may also influence validity by having a detrimental effect on student motivation.",
          "10. Identifiable pattern of answer: Placing correct answers in some systematic pattern (e.g., T, T, F, F, or B, B, C, C, C, D, D, D) enables students to guess the answers to some items more easily, and this lowers validity."
        ]
      }
    ]
  },
  {
    pageNumber: 29,
    dayNumber: 6,
    dayTitle: "Appendix: For Personal Study / Self-Study Only",
    topicTitle: "Improving Test Reliability & Solving for Quartile Deviation",
    pdfPageRef: "PDF Page 30-31",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Test Characteristics That Affect Reliability",
        items: [
          "1. Test length: In general, a longer test is more reliable than a shorter one because longer tests sample the instructional objectives more adequately.",
          "2. Spread of scores: The type of students taking the test can influence reliability. A group of students with heterogeneous ability will produce a large spread of test than a group with homogenous ability.",
          "3. Item difficulty: In general, test composed of items of moderate or average difficulty (.30 to .70) will have more influence on reliability than those composed primarily of easy or very difficult items.",
          "4. Item discrimination: In general, test composed of more discriminating items will have greater reliability than those composed of less discriminating items.",
          "5. Time limits: Adding a time factor may improve reliability for lower-level cognitive test items. Since all students do not function at the same pace, a time factor adds another criterion to the test that causes discrimination, thus improving reliability. Teachers should not, however, arbitrarily impose a time limit. For higher-level cognitive test items, the imposition of time may defeat the intended purpose of the items."
        ]
      },
      {
        type: "text",
        heading: "How to Get Quartile Deviation",
        content: "Data set (ordered): 7, 11, 12, 12, 14, 15, 16, 18, 22\nQ1 = 11.5 | Q3 = 17\n\nQD = (Q3 – Q1) / 2\nQD = (17 – 11.5) / 2\nQD = 5.5 / 2\nQD = 2.75"
      }
    ]
  },
  {
    pageNumber: 30,
    dayNumber: 6,
    dayTitle: "Appendix: For Personal Study / Self-Study Only",
    topicTitle: "Salient Features of K-12, Core Values & Item Difficulty (Old Book Reference)",
    pdfPageRef: "PDF Page 31-32",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Salient Features of K-12",
        items: [
          "1. MAPEH – Music, Arts, PE, and Health. It is introduced as a subject with each subject given separate time allotment starting grade 1.",
          "2. Math, Science and Other subjects are taught with spiral progression approach.",
          "3. TLE as a subject is based on Training Regulations of TESDA to enable a student to obtain an NC 1 in Grade 10 to be ready for work.",
          "4. Senior high school offers five career paths in addition to core academic subjects. These core academic subjects make the Grade 12 graduate also college ready.",
          "5. The K-12 is focused on the development of 21st century skills, namely: a) Learning and innovation skills; b) Life and career skills; c) Information, Media and Technology skills; d) Effective communication skills.",
          "6. It observes a balanced system of assessment that includes traditional as well as authentic assessment. It promotes use of formative assessment (Assessment FOR Learning) to ensure mastery of competencies and self-assessment (Assessment AS Learning) to develop independent learning."
        ]
      },
      {
        type: "bullet_list",
        heading: "What Are Taught in the Exploratory Courses? (Grade 7-8)",
        items: [
          "They are taught COMMON COMPETENCIES (introductory and basic skills):",
          "a) Use and maintenance of tools",
          "b) Interpreting drawing",
          "c) Measurement and calculation",
          "d) Occupational safety and health"
        ]
      },
      {
        type: "callout",
        heading: "Core Values",
        content: "Maka-Diyos, Makatao, Makakalikasan, Makabansa"
      },
      {
        type: "table",
        heading: "How Core Values Are Reflected in the Report Card (Non-Numerical Rating)",
        tableData: {
          headers: ["Marking", "Non-numerical Rating"],
          rows: [
            ["AO", "Always Observed"],
            ["SO", "Sometimes Observed"],
            ["RO", "Rarely Observed"],
            ["NO", "Not Observed"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "How Is Attendance Reported?",
        items: [
          "Learners' attendance shall be recorded by teachers daily.",
          "The attendance is reflected in the report card at the end of each quarter.",
          "Incurred absences of more than 20% of the prescribed number of class or laboratory periods during the school year will result in a FAILING GRADE.",
          "EXEMPTIONS may be given by the school head should a learner have reasons considered valid by the school.",
          "When absences cannot be avoided, the school must give the learner alternative methods and materials that correspond to the topics/competencies that were or will be missed."
        ]
      },
      {
        type: "table",
        heading: "Item Difficulty Range & Level (from OLD book)",
        tableData: {
          headers: ["Index Range", "Difficulty Level"],
          rows: [
            ["0 – 0.20", "Very difficult"],
            ["0.21 – 0.40", "Difficult"],
            ["0.41 – 0.60", "Moderately difficult"],
            ["0.61 – 0.80", "Easy"],
            ["0.81 – 1.00", "Very easy"]
          ]
        }
      }
    ]
  }
];

export const ASSESSMENT_PAGES = ASSESSMENT_OF_LEARNING_PAGES;