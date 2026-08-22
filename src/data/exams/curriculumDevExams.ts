import { ExamQuestion } from '../../types';

export const CURRICULUM_DEV_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Under Republic Act 10533 (Enhanced Basic Education Act of 2013), which curriculum design principle ensures that concepts are introduced at an early age in basic form and revisited in subsequent grade levels with increasing depth and complexity?",
    options: [
      { key: 'A', text: 'Linear Curriculum' },
      { key: 'B', text: 'Spiral Progression Approach' },
      { key: 'C', text: 'Discipline-Based Modular Approach' },
      { key: 'D', text: 'Rote Sequential Drill' }
    ],
    correctAnswer: 'B',
    explanation: 'Spiral Progression (inspired by Jerome Bruner) revisits key concepts repeatedly across grade levels with deepening complexity, building on prior knowledge.',
    topicRef: '1.0 DepEd K-12 Framework & Legal Foundations'
  },
  {
    id: 2,
    question: "In Ralph Tyler's Classical Curriculum Model (1949), what are the four fundamental questions in curriculum development?",
    options: [
      { key: 'A', text: 'Purpose, Educational Experiences, Organization of Experiences, Evaluation' },
      { key: 'B', text: 'Budget, Staffing, Building, Grading' },
      { key: 'C', text: 'Philosophy, Sociology, Psychology, History' },
      { key: 'D', text: 'Memorization, Drill, Practice, Testing' }
    ],
    correctAnswer: 'A',
    explanation: 'Tyler\'s Rationale is structured around 4 questions: 1) What educational purposes/objectives should the school seek to attain? 2) What experiences can be provided? 3) How can they be organized? 4) How will effectiveness be evaluated?',
    topicRef: '2.0 Classical Curriculum Models'
  },
  {
    id: 3,
    question: "How did Hilda Taba's Grassroots Inverted Approach differ fundamentally from Ralph Tyler's model?",
    options: [
      { key: 'A', text: 'Taba believed the curriculum should be designed inductively by classroom teachers starting with specific instructional units, rather than top-down by administrative decree' },
      { key: 'B', text: 'Taba eliminated all written objectives from the curriculum' },
      { key: 'C', text: 'Taba advocated for purely oral examinations' },
      { key: 'D', text: 'Taba removed teachers from the curriculum planning committee' }
    ],
    correctAnswer: 'A',
    explanation: 'Hilda Taba proposed an inductive, teacher-driven grassroots approach, arguing that teachers who teach the curriculum should be the primary designers who develop teaching-learning units.',
    topicRef: '2.0 Taba Grassroots Model'
  },
  {
    id: 4,
    question: "In Wiggins and McTighe's Understanding by Design (UbD) / Backward Design framework, what is the correct order of the three stages?",
    options: [
      { key: 'A', text: 'Stage 1: Plan Learning Experiences → Stage 2: Determine Objectives → Stage 3: Test Students' },
      { key: 'B', text: 'Stage 1: Identify Desired Results → Stage 2: Determine Acceptable Evidence (Assessment) → Stage 3: Plan Learning Experiences and Instruction' },
      { key: 'C', text: 'Stage 1: Administer Pretest → Stage 2: Lecture → Stage 3: Posttest' },
      { key: 'D', text: 'Stage 1: Choose Textbook → Stage 2: Follow Chapters → Stage 3: Compute Grades' }
    ],
    correctAnswer: 'B',
    explanation: 'Backward Design begins with the end in mind: 1) Identify Desired Results/Big Ideas, 2) Determine Assessment Evidence, 3) Plan Instructional Experiences.',
    topicRef: '2.0 Backward Design (UbD)'
  },
  {
    id: 5,
    question: "Which type of curriculum consists of the unintended, unwritten lessons, values, cultural norms, and perspectives that students learn informally in school?",
    options: [
      { key: 'A', text: 'Explicit / Recommended Curriculum' },
      { key: 'B', text: 'Hidden / Implicit Curriculum' },
      { key: 'C', text: 'Assessed Curriculum' },
      { key: 'D', text: 'Taught Curriculum' }
    ],
    correctAnswer: 'B',
    explanation: 'The Hidden Curriculum refers to the tacit lessons, social norms, behaviors, and values conveyed through the school environment, routines, and interpersonal dynamics.',
    topicRef: '3.0 Types of Curriculum'
  },
  {
    id: 6,
    question: "What is the 'Null Curriculum' as conceptualized by Elliot Eisner?",
    options: [
      { key: 'A', text: 'Curriculum written in invisible ink' },
      { key: 'B', text: 'Topics, perspectives, and skills that schools intentionally or unintentionally choose NOT to teach' },
      { key: 'C', text: 'A failed curriculum that is cancelled by DepEd' },
      { key: 'D', text: 'The curriculum taught during recess time' }
    ],
    correctAnswer: 'B',
    explanation: 'The Null Curriculum consists of what schools do not teach, sending a message to learners about what knowledge is considered unimportant or excluded.',
    topicRef: '3.0 Types of Curriculum'
  },
  {
    id: 7,
    question: "Which curriculum design centers on traditional academic disciplines (e.g., separate subjects like History, Geography, Biology, Chemistry) taught in isolated compartmentalized periods?",
    options: [
      { key: 'A', text: 'Subject-Centered Curriculum Design' },
      { key: 'B', text: 'Learner-Centered Design' },
      { key: 'C', text: 'Problem-Centered Design' },
      { key: 'D', text: 'Experience-Centered Design' }
    ],
    correctAnswer: 'A',
    explanation: 'Subject-Centered design is the most traditional structure, organizing curriculum into discrete subject matter areas focusing on discipline mastery.',
    topicRef: '4.0 Curriculum Design Frameworks'
  },
  {
    id: 8,
    question: "In Allan Glatthorn's categories of operational curriculum, what is the 'Supported Curriculum'?",
    options: [
      { key: 'A', text: 'The materials, textbooks, laboratories, software, and instructional resources available to support teaching and learning' },
      { key: 'B', text: 'The curriculum recommended by CHED or DepEd' },
      { key: 'C', text: 'The test papers stored in the principal\'s cabinet' },
      { key: 'D', text: 'The grades recorded in the report card' }
    ],
    correctAnswer: 'A',
    explanation: 'Supported Curriculum includes physical and digital resources (books, facilities, audiovisuals, teacher training) allocated to facilitate curriculum delivery.',
    topicRef: '3.0 Glatthorn Curriculum Classifications'
  },
  {
    id: 9,
    question: "What is the 'Learned Curriculum'?",
    options: [
      { key: 'A', text: 'The lesson plans written by the teacher' },
      { key: 'B', text: 'The actual learning outcomes, competencies, knowledge, and values acquired and retained by the students' },
      { key: 'C', text: 'The syllabus printed in the course catalog' },
      { key: 'D', text: 'The teacher\'s master\'s degree thesis' }
    ],
    correctAnswer: 'B',
    explanation: 'Learned Curriculum refers to the bottom-line results: the actual changes in behavior, knowledge, skills, and values demonstrated by learners.',
    topicRef: '3.0 Glatthorn Curriculum Classifications'
  },
  {
    id: 10,
    question: "In the context of the DepEd K to 12 Reform, what does 'Contextualization' entail according to Section 5 of R.A. 10533?",
    options: [
      { key: 'A', text: 'Translating all English books into Latin' },
      { key: 'B', text: 'Making the curriculum relevant, meaningful, and adaptable to local conditions, cultures, and diverse learner backgrounds (Localization and Indigenization)' },
      { key: 'C', text: 'Importing foreign textbooks without any modifications' },
      { key: 'D', text: 'Memorizing facts without understanding their real-world application' }
    ],
    correctAnswer: 'B',
    explanation: 'Contextualization adapts learning content to the personal, social, and cultural context of students, encompassing both localization (using local materials) and indigenization (aligning with indigenous cultures).',
    topicRef: '1.0 Contextualization & Localization'
  },
  {
    id: 11,
    question: "What is the key difference between 'Localization' and 'Indigenization' in curriculum implementation?",
    options: [
      { key: 'A', text: 'Localization uses local materials and examples while maintaining national standards; Indigenization embeds the learning within the specific worldview, language, and cultural heritage of an Indigenous Cultural Community (ICC)' },
      { key: 'B', text: 'Localization is illegal while Indigenization is mandatory' },
      { key: 'C', text: 'They are completely identical with no differences' },
      { key: 'D', text: 'Localization only applies to Metro Manila schools' }
    ],
    correctAnswer: 'A',
    explanation: 'Localization relates curriculum content to local information and materials in the community; Indigenization enhances curriculum competencies with indigenous knowledge systems and practices.',
    topicRef: '1.0 Contextualization & Indigenization'
  },
  {
    id: 12,
    question: "Which philosophical foundation views education as the transmission of universal truths, everlasting classics, and great books that have stood the test of time?",
    options: [
      { key: 'A', text: 'Perennialism' },
      { key: 'B', text: 'Progressivism' },
      { key: 'C', text: 'Reconstructionism' },
      { key: 'D', text: 'Existentialism' }
    ],
    correctAnswer: 'A',
    explanation: 'Perennialism (Robert Hutchins, Mortimer Adler) emphasizes timeless, unchanging truths, classical literature, and cultivation of the intellect through perennial ideas.',
    topicRef: '5.0 Philosophical Foundations of Curriculum'
  },
  {
    id: 13,
    question: "Which educational philosophy, pioneered by John Dewey, asserts that schools must teach children how to think rather than what to think, focusing on experiential learning and real-world democratic problem-solving?",
    options: [
      { key: 'A', text: 'Progressivism' },
      { key: 'B', text: 'Essentialism' },
      { key: 'C', text: 'Perennialism' },
      { key: 'D', text: 'Behaviorism' }
    ],
    correctAnswer: 'A',
    explanation: 'Progressivism (John Dewey) advocates for child-centered, experiential learning where students learn through inquiry, social interaction, and hands-on problem solving.',
    topicRef: '5.0 Philosophical Foundations of Curriculum'
  },
  {
    id: 14,
    question: "Which educational philosophy focuses on basic essential skills (the 3 Rs: Reading, Writing, Arithmetic) and traditional academic disciplines to prepare students for civilized society?",
    options: [
      { key: 'A', text: 'Essentialism' },
      { key: 'B', text: 'Existentialism' },
      { key: 'C', text: 'Reconstructionism' },
      { key: 'D', text: 'Humanism' }
    ],
    correctAnswer: 'A',
    explanation: 'Essentialism (William Bagley) champions a back-to-basics core curriculum that ensures all students master essential knowledge, skills, and disciplined study habits.',
    topicRef: '5.0 Philosophical Foundations of Curriculum'
  },
  {
    id: 15,
    question: "Which educational philosophy, championed by Theodore Brameld and George Counts, views schools as agents of social change, social justice, and societal transformation?",
    options: [
      { key: 'A', text: 'Social Reconstructionism' },
      { key: 'B', text: 'Perennialism' },
      { key: 'C', text: 'Behaviorism' },
      { key: 'D', text: 'Scholasticism' }
    ],
    correctAnswer: 'A',
    explanation: 'Social Reconstructionism emphasizes addressing social inequities, climate justice, poverty, and restructuring society for a more democratic, egalitarian world.',
    topicRef: '5.0 Philosophical Foundations of Curriculum'
  },
  {
    id: 16,
    question: "In the CIPP Curriculum Evaluation Model developed by Daniel Stufflebeam, what does CIPP stand for?",
    options: [
      { key: 'A', text: 'Context, Input, Process, and Product Evaluation' },
      { key: 'B', text: 'Content, Instruction, Pedagogy, Performance' },
      { key: 'C', text: 'Classroom, Interaction, Participation, Promotion' },
      { key: 'D', text: 'Competence, Intellect, Practice, Portfolio' }
    ],
    correctAnswer: 'A',
    explanation: 'The CIPP model evaluates Context (needs and goals), Input (resources and plans), Process (implementation activities), and Product (actual outcomes and impact).',
    topicRef: '2.0 Curriculum Evaluation Models'
  },
  {
    id: 17,
    question: "In curriculum organization, what does 'Horizontal Alignment' (Scope and Integration) refer to?",
    options: [
      { key: 'A', text: 'Ensuring that content taught across different subjects within the same grade level connects meaningfully (e.g., Science and Math reinforcing each other in Grade 7)' },
      { key: 'B', text: 'Lining up student chairs horizontally' },
      { key: 'C', text: 'Passing a student from Grade 1 to Grade 2' },
      { key: 'D', text: 'Painting school walls the same color' }
    ],
    correctAnswer: 'A',
    explanation: 'Horizontal alignment ensures coherence and interdisciplinary connection across subjects within a single grade level.',
    topicRef: '4.0 Curriculum Alignment & Articulation'
  },
  {
    id: 18,
    question: "What does 'Vertical Alignment' (Continuity and Sequence) in curriculum design ensure?",
    options: [
      { key: 'A', text: 'That learning competencies smoothly build from one grade level to the next without unwarranted gaps or redundant duplication' },
      { key: 'B', text: 'That the tallest student sits in the back row' },
      { key: 'C', text: 'That lessons are written on vertical flip charts' },
      { key: 'D', text: 'That tuition fees increase vertically each year' }
    ],
    correctAnswer: 'A',
    explanation: 'Vertical articulation ensures continuity and logical progression of competencies across sequential grade levels (from Kindergarten through Senior High).',
    topicRef: '4.0 Curriculum Alignment & Articulation'
  },
  {
    id: 19,
    question: "In DepEd's 2023 'MATATAG' Curriculum Agenda, what are the four critical pillars represented by the acronym MATATAG?",
    options: [
      { key: 'A', text: 'MAke curriculum relevant; TAke steps to accelerate basic education; TAke good care of learners; Give support to teachers' },
      { key: 'B', text: 'Manage; Assist; Train; Assess; Teach; Advance; Grow' },
      { key: 'C', text: 'Mathematics; Arts; Technology; Agriculture; Trade; Administration; Governance' },
      { key: 'D', text: 'Memorize; Ask; Translate; Apply; Test; Aggregate; Grade' }
    ],
    correctAnswer: 'A',
    explanation: 'DepEd\'s MATATAG agenda: MAke curriculum relevant to produce competent job-ready citizens; TAke steps to accelerate basic education facilities; TAke good care of learners\' well-being; Give support to teachers.',
    topicRef: '1.0 DepEd MATATAG Curriculum Agenda'
  },
  {
    id: 20,
    question: "What is a 'Correlated Curriculum' design?",
    options: [
      { key: 'A', text: 'Two or more separate subjects are linked together to show their mutual relationships without losing their individual subject identity (e.g., studying Philippine Literature alongside Philippine History)' },
      { key: 'B', text: 'Eliminating all textbooks completely' },
      { key: 'C', text: 'Teaching only physical education all day' },
      { key: 'D', text: 'Forcing students to memorize two dictionaries' }
    ],
    correctAnswer: 'A',
    explanation: 'A correlated curriculum intentionally links concepts between distinct subjects (such as connecting historical eras with corresponding literature) while maintaining separate subject boundaries.',
    topicRef: '4.0 Interdisciplinary Curriculum Designs'
  },
  {
    id: 21,
    question: "What is the 'Broad Fields' curriculum design?",
    options: [
      { key: 'A', text: 'Teaching class in an open agricultural field' },
      { key: 'B', text: 'Merging related distinct subjects into a broader umbrella discipline (e.g., combining Botany, Zoology, Chemistry, and Physics into General Science; or History, Economics, and Sociology into Social Studies)' },
      { key: 'C', text: 'Expanding the school campus perimeter' },
      { key: 'D', text: 'Using ultra-wide projector screens' }
    ],
    correctAnswer: 'B',
    explanation: 'Broad fields design integrates closely related specialized subjects into a single comprehensive field (e.g., Language Arts, Social Studies, General Science).',
    topicRef: '4.0 Subject-Centered Variations'
  },
  {
    id: 22,
    question: "In Tyler\'s curriculum model, which screen filters objectives to ensure they align with what is known about human growth, learning stages, and memory retention?",
    options: [
      { key: 'A', text: 'Psychological Screen' },
      { key: 'B', text: 'Philosophical Screen' },
      { key: 'C', text: 'Financial Screen' },
      { key: 'D', text: 'Architectural Screen' }
    ],
    correctAnswer: 'A',
    explanation: 'Tyler uses two screens to filter raw objectives: the Philosophical Screen (school\'s educational philosophy) and the Psychological Screen (psychology of learning/developmental appropriateness).',
    topicRef: '2.0 Tylerian Curriculum Development'
  },
  {
    id: 23,
    question: "What is the 'Core Curriculum' design in secondary and tertiary education?",
    options: [
      { key: 'A', text: 'A designated set of common, essential learning experiences and competencies that all students must take regardless of their specialization or track' },
      { key: 'B', text: 'The curriculum chosen exclusively by the school principal' },
      { key: 'C', text: 'Electives that only honor students are permitted to take' },
      { key: 'D', text: 'Curriculum designed solely for physical fitness' }
    ],
    correctAnswer: 'A',
    explanation: 'The Core Curriculum provides common foundational knowledge, civic values, and skills required for all learners to function as effective citizens in society.',
    topicRef: '4.0 Core Curriculum Design'
  },
  {
    id: 24,
    question: "In Saylor, Alexander, and Lewis's Curriculum Planning Model (1981), what are the four major domains of curriculum development?",
    options: [
      { key: 'A', text: 'Goals/Objectives, Curriculum Designing, Curriculum Implementation, Curriculum Evaluation' },
      { key: 'B', text: 'Reading, Writing, Reciting, Reporting' },
      { key: 'C', text: 'Inputs, Finances, Buildings, Equipment' },
      { key: 'D', text: 'Elementary, Secondary, Tertiary, Vocational' }
    ],
    correctAnswer: 'A',
    explanation: 'The Saylor-Alexander model views curriculum planning as an ongoing cyclical process of setting goals, creating designs, executing implementation, and conducting evaluation.',
    topicRef: '2.0 Saylor-Alexander Model'
  },
  {
    id: 25,
    question: "What is 'Curriculum Implementation' in the curriculum development cycle?",
    options: [
      { key: 'A', text: 'Printing syllabus covers on glossy paper' },
      { key: 'B', text: 'Putting the planned curriculum into actual instructional practice in classrooms and schools' },
      { key: 'C', text: 'Writing a theoretical paper about education' },
      { key: 'D', text: 'Deleting obsolete software' }
    ],
    correctAnswer: 'B',
    explanation: 'Curriculum implementation is the dynamic phase of putting designed programs, syllabi, materials, and pedagogical strategies into action in the classroom.',
    topicRef: '1.0 Curriculum Change & Implementation'
  },
  {
    id: 26,
    question: "Which of the following describes a 'Teacher-Centered' curriculum orientation?",
    options: [
      { key: 'A', text: 'The teacher is the primary transmitter of authoritative knowledge, while students are passive recipients' },
      { key: 'B', text: 'Students create their own curriculum based on daily whims' },
      { key: 'C', text: 'There is no teacher in the classroom' },
      { key: 'D', text: 'Students lecture each other while the teacher sleeps' }
    ],
    correctAnswer: 'A',
    explanation: 'Teacher-centered orientation positions the instructor as the primary source of expertise and authority, emphasizing lectures, direct instruction, and standardized exams.',
    topicRef: '4.0 Teacher-Centered vs Learner-Centered'
  },
  {
    id: 27,
    question: "What is 'Stakeholder Involvement' in curriculum development?",
    options: [
      { key: 'A', text: 'Engaging parents, community leaders, industry partners, teachers, and students in curriculum planning and review' },
      { key: 'B', text: 'Restricting all decisions to a private committee of three people' },
      { key: 'C', text: 'Selling school shares on the stock exchange' },
      { key: 'D', text: 'Buying barbecue stakes for the school fair' }
    ],
    correctAnswer: 'A',
    explanation: 'Engaging diverse stakeholders ensures curriculum relevance, democratic accountability, alignment with labor market needs, and community support.',
    topicRef: '1.0 Stakeholder Engagement'
  },
  {
    id: 28,
    question: "In the 2013 Enhanced Basic Education Act (RA 10533), what language medium is mandated for instruction in the early grades (Kindergarten to Grade 3) under the Mother Tongue-Based Multilingual Education (MTB-MLE) policy?",
    options: [
      { key: 'A', text: 'Learner\'s native language / mother tongue' },
      { key: 'B', text: 'English only' },
      { key: 'C', text: 'Spanish and Latin' },
      { key: 'D', text: 'Mandarin' }
    ],
    correctAnswer: 'A',
    explanation: 'MTB-MLE establishes that children learn reading and foundational cognitive skills most effectively in their primary home language before transitioning to Filipino and English.',
    topicRef: '1.0 MTB-MLE Framework'
  },
  {
    id: 29,
    question: "What is 'Curriculum Alignment'?",
    options: [
      { key: 'A', text: 'Ensuring that intended learning objectives, instructional activities, and assessment tasks are coherently matched and congruent' },
      { key: 'B', text: 'Aligning textbook pages with a physical ruler' },
      { key: 'C', text: 'Setting test start times at exactly 8:00 AM' },
      { key: 'D', text: 'Arranging student desks in alphabetical lines' }
    ],
    correctAnswer: 'A',
    explanation: 'Constructive alignment (John Biggs) guarantees that learning outcomes, teaching methods, and evaluative assessments support and measure the exact same competencies.',
    topicRef: '4.0 Constructive Alignment'
  },
  {
    id: 30,
    question: "In Ornstein and Hunkins' curriculum components, what are the four fundamental parts of any formal curriculum?",
    options: [
      { key: 'A', text: 'Aims/Objectives, Content/Subject Matter, Learning Experiences, Evaluation Approaches' },
      { key: 'B', text: 'Principal, Teachers, Students, Janitors' },
      { key: 'C', text: 'Chalk, Eraser, Blackboard, Desk' },
      { key: 'D', text: 'Morning, Afternoon, Evening, Night' }
    ],
    correctAnswer: 'A',
    explanation: 'The four essential structural components of curriculum are: 1) Curriculum Goals and Objectives, 2) Content/Subject Matter, 3) Learning Experiences/Methods, and 4) Evaluation.',
    topicRef: '4.0 Components of Curriculum Design'
  },
  {
    id: 31,
    question: "What is 'Curriculum Evaluation'?",
    options: [
      { key: 'A', text: 'The systematic process of collecting and analyzing data to judge the value, effectiveness, efficiency, and worth of a curriculum' },
      { key: 'B', text: 'Assigning letter grades to student conduct only' },
      { key: 'C', text: 'Counting the number of chairs in a classroom' },
      { key: 'D', text: 'Calculating the total salary of faculty members' }
    ],
    correctAnswer: 'A',
    explanation: 'Curriculum evaluation determines whether intended educational outcomes are being realized and guides decision-making on whether to maintain, revise, or terminate programs.',
    topicRef: '2.0 Curriculum Evaluation'
  },
  {
    id: 32,
    question: "What is 'Formative Curriculum Evaluation' compared to 'Summative Curriculum Evaluation'?",
    options: [
      { key: 'A', text: 'Formative evaluation occurs during development and pilot testing to improve the curriculum; Summative evaluation occurs after full implementation to judge overall final success' },
      { key: 'B', text: 'Formative evaluation is optional while summative is illegal' },
      { key: 'C', text: 'Formative is done by students while summative is done by parents' },
      { key: 'D', text: 'There is no difference between them' }
    ],
    correctAnswer: 'A',
    explanation: 'Formative evaluation (Michael Scriven) provides iterative data for ongoing refinement during design/piloting, whereas summative evaluation judges final outcomes.',
    topicRef: '2.0 Formative vs Summative Evaluation'
  },
  {
    id: 33,
    question: "Which of the following is an example of an 'Experience-Centered' curriculum design?",
    options: [
      { key: 'A', text: 'Curriculum organized around children\'s real-time interests, needs, and spontaneous emerging curiosities rather than fixed textbook tables of contents' },
      { key: 'B', text: 'Memorizing Latin grammar rules' },
      { key: 'C', text: 'Solving 100 repetitive arithmetic problems from page 1' },
      { key: 'D', text: 'Listening to an 8-hour historical lecture' }
    ],
    correctAnswer: 'A',
    explanation: 'Experience-centered designs emerge organically from learner experiences, immediate concerns, and natural developmental questions.',
    topicRef: '4.0 Learner-Centered Curriculum'
  },
  {
    id: 34,
    question: "What is 'Curriculum Change' in educational leadership?",
    options: [
      { key: 'A', text: 'A dynamic process of introducing new ideas, practices, materials, or philosophies into existing educational systems' },
      { key: 'B', text: 'Changing the color of student uniforms' },
      { key: 'C', text: 'Replacing a broken chalkboard eraser' },
      { key: 'D', text: 'Moving to a different classroom room number' }
    ],
    correctAnswer: 'A',
    explanation: 'Curriculum change represents a transformation in philosophy, content, structure, or pedagogical methods aimed at improving student learning and institutional responsiveness.',
    topicRef: '1.0 Curriculum Change & Innovation'
  },
  {
    id: 35,
    question: "Which of the following is a classic cause of 'Curriculum Implementation Failure'?",
    options: [
      { key: 'A', text: 'Lack of adequate teacher professional development, insufficient learning resources, and top-down mandates without teacher buy-in' },
      { key: 'B', text: 'Providing too much teacher training and excessive instructional materials' },
      { key: 'C', text: 'Having enthusiastic student engagement' },
      { key: 'D', text: 'Having a clearly articulated vision' }
    ],
    correctAnswer: 'A',
    explanation: 'Top-down curriculum changes frequently fail when frontline teachers lack training, resources, conceptual understanding, and institutional support.',
    topicRef: '1.0 Curriculum Implementation Barriers'
  },
  {
    id: 36,
    question: "In DepEd Order No. 42, s. 2016, what are the basic components required in a Daily Lesson Log (DLL) / Detailed Lesson Plan (DLP)?",
    options: [
      { key: 'A', text: 'Objectives, Content, Learning Resources, Procedures, Remarks, and Reflection' },
      { key: 'B', text: 'Teacher bio, Attendance sheet, Lunch menu, Cleanliness rating' },
      { key: 'C', text: 'Budget, Receipts, Inventory, Requisitions' },
      { key: 'D', text: 'School motto, National anthem, Prayer, Dismissal' }
    ],
    correctAnswer: 'A',
    explanation: 'DepEd Order 42 s. 2016 prescribes the standard instructional planning format: Objectives (Content & Performance Standards), Content, Resources, Procedures (Before, During, After Lesson), Remarks, and Reflection.',
    topicRef: '1.0 DepEd Instructional Planning Guidelines'
  },
  {
    id: 37,
    question: "What is a 'Content Standard' in the Philippine Basic Education Curriculum?",
    options: [
      { key: 'A', text: 'What students should know, understand, and be able to grasp conceptually (declarative and conceptual benchmarks)' },
      { key: 'B', text: 'The weight of a student textbook in grams' },
      { key: 'C', text: 'The price of an approved school uniform' },
      { key: 'D', text: 'The number of minutes in a class period' }
    ],
    correctAnswer: 'A',
    explanation: 'Content Standards define the essential facts, concepts, and principles that learners are expected to understand.',
    topicRef: '1.0 Content vs Performance Standards'
  },
  {
    id: 38,
    question: "What is a 'Performance Standard' in the Philippine Basic Education Curriculum?",
    options: [
      { key: 'A', text: 'What learners should be able to DO with what they know; how proficiently they can apply concepts in authentic real-world tasks' },
      { key: 'B', text: 'The volume of the teacher\'s voice during lectures' },
      { key: 'C', text: 'The number of questions on the final exam' },
      { key: 'D', text: 'How quickly students run during physical education' }
    ],
    correctAnswer: 'A',
    explanation: 'Performance Standards describe the abilities and proficiency levels learners must demonstrate when applying knowledge in meaningful tasks.',
    topicRef: '1.0 Content vs Performance Standards'
  },
  {
    id: 39,
    question: "In curriculum development, what does 'Curriculum Mapping' accomplish?",
    options: [
      { key: 'A', text: 'Drawing a geographical map of the school grounds' },
      { key: 'B', text: 'Creating an explicit visual index of what is taught, when it is taught, and how competencies align with assessments across calendar timelines and grade levels' },
      { key: 'C', text: 'Locating nearby bookstores with GPS' },
      { key: 'D', text: 'Printing bus routes for school field trips' }
    ],
    correctAnswer: 'B',
    explanation: 'Curriculum mapping (Heidi Hayes Jacobs) documents the relationship between operational curriculum elements to identify gaps, misalignments, and redundancies.',
    topicRef: '4.0 Curriculum Mapping'
  },
  {
    id: 40,
    question: "Which model of curriculum design focuses on societal problems, persistent life situations, and civic community challenges?",
    options: [
      { key: 'A', text: 'Problem-Centered / Life-Situations Design' },
      { key: 'B', text: 'Discipline-Based Subject Design' },
      { key: 'C', text: 'Rote Memorization Model' },
      { key: 'D', text: 'Grammar-Translation Design' }
    ],
    correctAnswer: 'A',
    explanation: 'Problem-centered designs (e.g., Florence Stratemeyer\'s persistent life situations) organize learning around authentic societal challenges, community issues, and human survival needs.',
    topicRef: '4.0 Problem-Centered Curriculum'
  },
  {
    id: 41,
    question: "What is the primary role of the teacher as a 'Curriculum Implementer'?",
    options: [
      { key: 'A', text: 'To passively copy slides onto the board without thought' },
      { key: 'B', text: 'To translate intended curriculum goals into meaningful, engaging, and differentiated classroom learning experiences' },
      { key: 'C', text: 'To cancel classes whenever new policies are released' },
      { key: 'D', text: 'To ignore student diversity completely' }
    ],
    correctAnswer: 'B',
    explanation: 'Teachers are the critical bridge who breathe life into the written curriculum by tailoring instruction to their specific learners\' needs and contexts.',
    topicRef: '1.0 Teacher Roles in Curriculum'
  },
  {
    id: 42,
    question: "What is the 'Enacted Curriculum'?",
    options: [
      { key: 'A', text: 'The curriculum as it is actually delivered, enacted, and experienced during live classroom interactions between teacher and students' },
      { key: 'B', text: 'A law passed by Congress that is never funded' },
      { key: 'C', text: 'A theatrical play performed at graduation' },
      { key: 'D', text: 'A textbook stored in the library warehouse' }
    ],
    correctAnswer: 'A',
    explanation: 'The Enacted/Taught curriculum is the actual operational reality of what occurs in the classroom during lesson delivery.',
    topicRef: '3.0 Glatthorn Classifications'
  },
  {
    id: 43,
    question: "What is 'Differentiated Curriculum'?",
    options: [
      { key: 'A', text: 'Adapting content depth, pacing, instructional materials, and learning pathways to cater to the diverse cognitive abilities, learning profiles, and backgrounds of students' },
      { key: 'B', text: 'Teaching different subjects at the same time to the same student' },
      { key: 'C', text: 'Giving one student an A and everyone else an F' },
      { key: 'D', text: 'Using 5 different textbooks for one paragraph' }
    ],
    correctAnswer: 'A',
    explanation: 'Differentiating the curriculum ensures equity by providing personalized learning pathways that challenge advanced learners while supporting struggling students.',
    topicRef: '1.0 Differentiated Curriculum'
  },
  {
    id: 44,
    question: "Which of the following is a major rationale for the Senior High School (Grades 11 & 12) tracks in the Philippine educational system?",
    options: [
      { key: 'A', text: 'To provide specialized pathways (Academic, TVL, Arts & Design, Sports) that prepare graduates for Higher Education, Employment, Entrepreneurship, or Middle-Level Skills Development' },
      { key: 'B', text: 'To delay student graduation indefinitely' },
      { key: 'C', text: 'To keep teenagers out of shopping malls' },
      { key: 'D', text: 'To reduce the number of college professors' }
    ],
    correctAnswer: 'A',
    explanation: 'Senior High School tracks offer specialized pathways tailored to diverse career goals: College, Livelihood/Employment, Entrepreneurship, and Skills.',
    topicRef: '1.0 K-12 Senior High School Tracks'
  },
  {
    id: 45,
    question: "What is 'Curriculum Articulation'?",
    options: [
      { key: 'A', text: 'Speaking with perfect diction during a lecture' },
      { key: 'B', text: 'The smooth, interconnected relationship and coordination among various elements and levels of the curriculum (vertical and horizontal consistency)' },
      { key: 'C', text: 'Writing curriculum documents in calligraphy' },
      { key: 'D', text: 'The volume control on a classroom loudspeaker' }
    ],
    correctAnswer: 'B',
    explanation: 'Curriculum articulation refers to the systematic alignment and harmony between courses, grade levels, and subject areas.',
    topicRef: '4.0 Articulation & Continuity'
  },
  {
    id: 46,
    question: "In curriculum foundations, what does 'Sociological Foundation' emphasize?",
    options: [
      { key: 'A', text: 'How societal culture, demographic trends, social changes, and community values influence educational goals and curricula' },
      { key: 'B', text: 'The architectural design of school buildings' },
      { key: 'C', text: 'The chemical composition of classroom chalk' },
      { key: 'D', text: 'The electrical wiring of school lights' }
    ],
    correctAnswer: 'A',
    explanation: 'Sociological foundations analyze the reciprocal relationship between society, culture, social institutions, and educational curricula.',
    topicRef: '5.0 Foundations of Curriculum'
  },
  {
    id: 47,
    question: "What is 'Spiral Learning' (Jerome Bruner)?",
    options: [
      { key: 'A', text: 'Revisiting fundamental principles over time with increasing levels of sophistication, abstraction, and cognitive demand' },
      { key: 'B', text: 'Spinning around in circles before answering an exam' },
      { key: 'C', text: 'Binding notebooks with spiral metal wires' },
      { key: 'D', text: 'Teaching lessons in reverse chronological order' }
    ],
    correctAnswer: 'A',
    explanation: 'Bruner\'s spiral curriculum posits that any subject can be taught effectively in some intellectually honest form to any child at any stage of development.',
    topicRef: '1.0 Spiral Progression'
  },
  {
    id: 48,
    question: "Which of the following is a key characteristic of the 'Recommended Curriculum'?",
    options: [
      { key: 'A', text: 'It comes from professional educational bodies, government policy agencies (DepEd, CHED, TESDA), and policy think tanks' },
      { key: 'B', text: 'It is secretly written by students in study halls' },
      { key: 'C', text: 'It is only found on social media blogs' },
      { key: 'D', text: 'It has no official authority' }
    ],
    correctAnswer: 'A',
    explanation: 'The Recommended Curriculum stems from authoritative educational organizations and state ministries specifying what should be taught.',
    topicRef: '3.0 Glatthorn Types of Curriculum'
  },
  {
    id: 49,
    question: "What is the primary purpose of 'Needs Assessment' before designing a new curriculum?",
    options: [
      { key: 'A', text: 'To identify the gap between current student competencies and desired societal/learning standards to establish relevant objectives' },
      { key: 'B', text: 'To calculate teacher salary bonuses' },
      { key: 'C', text: 'To buy new furniture for administrative offices' },
      { key: 'D', text: 'To count empty lockers in school' }
    ],
    correctAnswer: 'A',
    explanation: 'Needs assessment diagnoses the discrepancy between "what is" and "what should be," providing the empirical rationale for curriculum revision.',
    topicRef: '1.0 Needs Assessment & Planning'
  },
  {
    id: 50,
    question: "Why is 'Continuous Curriculum Evaluation' considered an essential element of a quality education system?",
    options: [
      { key: 'A', text: 'Because societal demands, technological innovations, global standards, and learner needs evolve continuously over time' },
      { key: 'B', text: 'To generate endless paperwork for teachers' },
      { key: 'C', text: 'To change textbook publishers every month' },
      { key: 'D', text: 'To keep school principals constantly busy' }
    ],
    correctAnswer: 'A',
    explanation: 'Curriculum is never static; dynamic evaluation ensures education stays responsive, innovative, and aligned with 21st-century realities.',
    topicRef: '2.0 Continuous Curriculum Improvement'
  }
];
