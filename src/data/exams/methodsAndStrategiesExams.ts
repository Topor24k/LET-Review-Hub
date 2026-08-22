import { ExamQuestion } from '../../types';

export const METHODS_AND_STRATEGIES_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Teacher Clara believes that knowledge is actively constructed by the learner through personal experiences and prior knowledge rather than passively absorbed from the teacher. Which learning philosophy or theory is this grounded in?",
    options: [
      { key: 'A', text: 'Behaviorism' },
      { key: 'B', text: 'Constructivism' },
      { key: 'C', text: 'Essentialism' },
      { key: 'D', text: 'Perennialism' }
    ],
    correctAnswer: 'B',
    explanation: 'Constructivism (advanced by Piaget, Vygotsky, and Bruner) posits that learners actively build their own understanding and knowledge of the world through experiencing things and reflecting on those experiences.',
    topicRef: '1.0 Learner-Centered Pedagogies'
  },
  {
    id: 2,
    question: "When a teacher begins a lesson with specific examples, experiments, or observations and guides students to derive a general rule or concept, what instructional approach is being applied?",
    options: [
      { key: 'A', text: 'Deductive Method' },
      { key: 'B', text: 'Inductive Method' },
      { key: 'C', text: 'Expository Method' },
      { key: 'D', text: 'Direct Instruction' }
    ],
    correctAnswer: 'B',
    explanation: 'The Inductive Method goes from specific instances/examples to general principles (Specific to General). The Deductive method goes from General rules to Specific applications.',
    topicRef: '2.0 Direct & Indirect Instructional Approaches'
  },
  {
    id: 3,
    question: "In Jacob Kounin's classroom management model, a teacher who can attend to two or more separate classroom events simultaneously demonstrates which quality?",
    options: [
      { key: 'A', text: 'Withitness' },
      { key: 'B', text: 'Overlapping' },
      { key: 'C', text: 'Smoothness' },
      { key: 'D', text: 'Momentum' }
    ],
    correctAnswer: 'B',
    explanation: 'Overlapping is the teacher\'s ability to handle two or more simultaneous classroom events or issues smoothly without disrupting the ongoing instruction.',
    topicRef: '4.0 Classroom Management Techniques'
  },
  {
    id: 4,
    question: "A teacher notices a misbehavior at the back of the classroom and makes direct eye contact or moves closer to the student without interrupting the lecture. Which Kounin technique is this?",
    options: [
      { key: 'A', text: 'Withitness' },
      { key: 'B', text: 'Stimulus Bound' },
      { key: 'C', text: 'Thrust' },
      { key: 'D', text: 'Dangle' }
    ],
    correctAnswer: 'A',
    explanation: 'Withitness is the teacher\'s awareness of what is going on in all parts of the classroom at all times ("eyes at the back of the head").',
    topicRef: '4.0 Classroom Management Techniques'
  },
  {
    id: 5,
    question: "Which of the following is a classic manifestation of a 'Dangle' in Kounin's transition disruptions?",
    options: [
      { key: 'A', text: 'The teacher suddenly bursts into an activity with an unannounced instruction.' },
      { key: 'B', text: 'The teacher leaves an activity hanging, talks about something else, and never returns to it.' },
      { key: 'C', text: 'The teacher spends too much time on minor details.' },
      { key: 'D', text: 'The teacher breaks a unified activity into unnecessary small parts.' }
    ],
    correctAnswer: 'B',
    explanation: 'A Dangle occurs when a teacher starts an activity or gives instructions, gets distracted or leaves it hanging without closure or resolution.',
    topicRef: '4.0 Classroom Management Techniques'
  },
  {
    id: 6,
    question: "According to Rudolph Dreikurs, what are the four mistaken goals of misbehaving students?",
    options: [
      { key: 'A', text: 'Fear, Greed, Anger, Jealousy' },
      { key: 'B', text: 'Attention Seeking, Power Struggle, Revenge, Display of Inadequacy' },
      { key: 'C', text: 'Aggression, Depression, Anxiety, Regression' },
      { key: 'D', text: 'Boredom, Fatigue, Confusion, Defiance' }
    ],
    correctAnswer: 'B',
    explanation: 'Dreikurs identified four mistaken goals: 1) Attention Seeking, 2) Power & Control, 3) Revenge, and 4) Display of Inadequacy / Assumed Disability.',
    topicRef: '4.0 Classroom Management & Discipline Strategies'
  },
  {
    id: 7,
    question: "When a student misbehaves to seek revenge, what is the underlying emotional root identified in Dreikurs' model?",
    options: [
      { key: 'A', text: 'The student wants to be noticed.' },
      { key: 'B', text: 'The student feels deeply hurt and wants to inflict hurt on others to feel significant.' },
      { key: 'C', text: 'The student wants to prove the teacher cannot boss them around.' },
      { key: 'D', text: 'The student has given up all hope of succeeding.' }
    ],
    correctAnswer: 'B',
    explanation: 'Revenge-seeking students believe they are only significant when they hurt others because they have been deeply hurt themselves.',
    topicRef: '4.0 Classroom Management & Discipline Strategies'
  },
  {
    id: 8,
    question: "Which questioning technique is characterized by questions that require analysis, evaluation, and creation with multiple acceptable answers?",
    options: [
      { key: 'A', text: 'Convergent Questions' },
      { key: 'B', text: 'Divergent Questions' },
      { key: 'C', text: 'Literal Questions' },
      { key: 'D', text: 'Recall Questions' }
    ],
    correctAnswer: 'B',
    explanation: 'Divergent questions (Higher Order Thinking) open up possibilities and have multiple valid responses, encouraging creativity and critical evaluation.',
    topicRef: '5.0 Questioning Techniques & HOTS'
  },
  {
    id: 9,
    question: "What is the recommended 'Wait Time' after asking a higher-order question before calling on a student or probing further?",
    options: [
      { key: 'A', text: '0 to 1 second' },
      { key: 'B', text: '3 to 5 seconds' },
      { key: 'C', text: '15 to 20 seconds' },
      { key: 'D', text: '1 minute' }
    ],
    correctAnswer: 'B',
    explanation: 'Research by Mary Budd Rowe shows that increasing teacher wait time to 3–5 seconds significantly increases the quality, length, and cognitive complexity of student responses.',
    topicRef: '5.0 Questioning Techniques & HOTS'
  },
  {
    id: 10,
    question: "In the 5E Instructional Model (Bybee), in which phase do students actively manipulate materials, conduct experiments, and test hypotheses?",
    options: [
      { key: 'A', text: 'Engage' },
      { key: 'B', text: 'Explore' },
      { key: 'C', text: 'Explain' },
      { key: 'D', text: 'Elaborate' }
    ],
    correctAnswer: 'B',
    explanation: 'In the Explore phase of the 5E model, students have hands-on experiences to investigate the concept and build shared background.',
    topicRef: '3.0 Inquiry-Based & Experiential Models'
  },
  {
    id: 11,
    question: "Which of the following describes the 'Jigsaw' cooperative learning strategy?",
    options: [
      { key: 'A', text: 'Students compete individually in a tournament format.' },
      { key: 'B', text: 'Each group member becomes an expert on one section of material, meets with other experts, and returns to teach their home group.' },
      { key: 'C', text: 'Students write ideas on cards and rotate around the room.' },
      { key: 'D', text: 'The teacher asks a question, students think individually, pair up, and share.' }
    ],
    correctAnswer: 'B',
    explanation: 'In Elliot Aronson\'s Jigsaw method, each student is assigned part of a topic, meets with expert group peers, and returns to teach their home group teammates.',
    topicRef: '3.0 Cooperative Learning'
  },
  {
    id: 12,
    question: "In Bloom's Revised Taxonomy (Anderson & Krathwohl), what is the highest cognitive process dimension?",
    options: [
      { key: 'A', text: 'Evaluating' },
      { key: 'B', text: 'Creating' },
      { key: 'C', text: 'Analyzing' },
      { key: 'D', text: 'Applying' }
    ],
    correctAnswer: 'B',
    explanation: 'The revised taxonomy inverted the top two levels: Remembering, Understanding, Applying, Analyzing, Evaluating, and Creating (highest).',
    topicRef: '5.0 Questioning Techniques & HOTS'
  },
  {
    id: 13,
    question: "Which type of lesson plan contains detailed teacher speech and anticipated student responses verbatim?",
    options: [
      { key: 'A', text: 'Brief Lesson Plan' },
      { key: 'B', text: 'Semi-Detailed Lesson Plan' },
      { key: 'C', text: 'Detailed Lesson Plan (DLP)' },
      { key: 'D', text: 'Daily Lesson Log (DLL)' }
    ],
    correctAnswer: 'C',
    explanation: 'A Detailed Lesson Plan includes two side-by-side columns: Teacher\'s Activity (dialogue and questions) and Students\' Activity (expected replies).',
    topicRef: '1.0 Instructional Planning'
  },
  {
    id: 14,
    question: "What is the primary role of the teacher in Problem-Based Learning (PBL)?",
    options: [
      { key: 'A', text: 'Sole lecturer providing definitions and answers' },
      { key: 'B', text: 'Facilitator, guide, and metacognitive coach' },
      { key: 'C', text: 'Silent observer who does not intervene under any circumstance' },
      { key: 'D', text: 'Disciplinary authority scoring every minute task' }
    ],
    correctAnswer: 'B',
    explanation: 'In PBL, the teacher acts as a facilitator and cognitive coach who scaffolds learning, asks guiding questions, and helps learners reflect on their problem-solving process.',
    topicRef: '3.0 Problem-Based Learning'
  },
  {
    id: 15,
    question: "When a teacher continuously repeats instructions that were already clearly understood by the whole class, what Kounin error is being committed?",
    options: [
      { key: 'A', text: 'Fragmentation' },
      { key: 'B', text: 'Overdwelling' },
      { key: 'C', text: 'Flip-Flop' },
      { key: 'D', text: 'Thrust' }
    ],
    correctAnswer: 'B',
    explanation: 'Overdwelling occurs when a teacher dwells on a topic, behavior, or instruction far longer than necessary, boring the students and dragging momentum down.',
    topicRef: '4.0 Classroom Management Techniques'
  },
  {
    id: 16,
    question: "Which instructional model follows the sequence: Anticipatory Set, Direct Instruction, Guided Practice, and Independent Practice?",
    options: [
      { key: 'A', text: 'Madeline Hunter\'s Direct Instruction Model' },
      { key: 'B', text: 'Ausubel\'s Advance Organizer Model' },
      { key: 'C', text: 'Bruner\'s Discovery Learning' },
      { key: 'D', text: 'Kolb\'s Experiential Learning Cycle' }
    ],
    correctAnswer: 'A',
    explanation: 'Madeline Hunter\'s Explicit/Direct Instruction Model includes Anticipatory Set, Objective, Input, Modeling, Checking for Understanding, Guided Practice, and Independent Practice.',
    topicRef: '2.0 Direct & Indirect Instructional Approaches'
  },
  {
    id: 17,
    question: "David Kolb's Experiential Learning Cycle consists of four stages in which recurring order?",
    options: [
      { key: 'A', text: 'Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation' },
      { key: 'B', text: 'Abstract Conceptualization → Concrete Experience → Active Experimentation → Evaluation' },
      { key: 'C', text: 'Active Experimentation → Planning → Doing → Testing' },
      { key: 'D', text: 'Observation → Deduction → Application → Generalization' }
    ],
    correctAnswer: 'A',
    explanation: 'Kolb\'s 4-stage cycle starts with Concrete Experience (feeling/doing), followed by Reflective Observation (watching/reflecting), Abstract Conceptualization (thinking/theorizing), and Active Experimentation (trying/applying).',
    topicRef: '3.0 Experiential Learning'
  },
  {
    id: 18,
    question: "Which type of classroom power (French & Raven) is exhibited when students follow a teacher because they deeply admire, respect, and identify with the teacher\'s personal character and warmth?",
    options: [
      { key: 'A', text: 'Legitimate Power' },
      { key: 'B', text: 'Referent Power' },
      { key: 'C', text: 'Coercive Power' },
      { key: 'D', text: 'Expert Power' }
    ],
    correctAnswer: 'B',
    explanation: 'Referent power comes from interpersonal rapport, charisma, mutual respect, and student admiration for the teacher\'s personality and virtues.',
    topicRef: '4.0 Classroom Management Styles & Teacher Powers'
  },
  {
    id: 19,
    question: "A teacher uses 'Fishbowl Technique' in a social studies discussion. What does this technique entail?",
    options: [
      { key: 'A', text: 'Students write anonymous questions and drop them in a bowl.' },
      { key: 'B', text: 'An inner circle of students discusses a controversial topic while an outer circle observes, listens, and takes notes on arguments.' },
      { key: 'C', text: 'Students catch plastic fish with math questions attached.' },
      { key: 'D', text: 'The teacher sits in the middle and lectures while students form circles.' }
    ],
    correctAnswer: 'B',
    explanation: 'In the Fishbowl technique, an inner group discusses a topic or models a skill while the outer group analyzes the interaction before roles rotate.',
    topicRef: '3.0 Discussion Strategies'
  },
  {
    id: 20,
    question: "What is the primary characteristic of an 'Authoritative' classroom management style (Diana Baumrind model)?",
    options: [
      { key: 'A', text: 'High control, low warmth; strict compliance without explanation' },
      { key: 'B', text: 'High expectations, high warmth; firm limits with open communication and reasoning' },
      { key: 'C', text: 'Low demands, high warmth; complete freedom without structure' },
      { key: 'D', text: 'Low demands, low warmth; indifference and disengagement' }
    ],
    correctAnswer: 'B',
    explanation: 'The Authoritative style balances firm behavioral standards with warmth, emotional responsiveness, and rational explanations. It produces the most self-disciplined students.',
    topicRef: '4.0 Classroom Management Styles'
  },
  {
    id: 21,
    question: "Which principle of differentiated instruction emphasizes adjusting the complexity of tasks based on students' readiness levels, interests, and learning profiles?",
    options: [
      { key: 'A', text: 'Differentiating Content, Process, Product, and Learning Environment' },
      { key: 'B', text: 'Standardized Teaching' },
      { key: 'C', text: 'Direct Instruction Exclusively' },
      { key: 'D', text: 'Ability Grouping Permanence' }
    ],
    correctAnswer: 'A',
    explanation: 'Carol Ann Tomlinson\'s Differentiated Instruction framework focuses on varying Content (what is learned), Process (how it is learned), Product (how learning is demonstrated), and Environment.',
    topicRef: '1.0 Learner-Centered Pedagogies'
  },
  {
    id: 22,
    question: "A teacher asks a student to elaborate on an initial answer by asking, 'What evidence from the text supports your claim?' What type of questioning is this?",
    options: [
      { key: 'A', text: 'Probing Question' },
      { key: 'B', text: 'Leading Question' },
      { key: 'C', text: 'Rhetorical Question' },
      { key: 'D', text: 'Trick Question' }
    ],
    correctAnswer: 'A',
    explanation: 'Probing questions follow up on student responses to prompt deeper thinking, clarification, justification, or extension of ideas.',
    topicRef: '5.0 Questioning Techniques & HOTS'
  },
  {
    id: 23,
    question: "In Lev Vygotsky\'s Socio-Cultural Theory, what is the 'Zone of Proximal Development' (ZPD)?",
    options: [
      { key: 'A', text: 'The range of tasks a learner can perform completely independently without any aid' },
      { key: 'B', text: 'The distance between what a learner can do independently and what they can achieve with the guidance of a More Knowledgeable Other (MKO)' },
      { key: 'C', text: 'The maximum physiological limit of cognitive memory retention' },
      { key: 'D', text: 'The physical arrangement of seating desks in cooperative learning' }
    ],
    correctAnswer: 'B',
    explanation: 'ZPD is the sweet spot of learning where tasks are too difficult for the student to master alone, but can be learned with scaffolding from a more knowledgeable peer or teacher.',
    topicRef: '1.0 Learner-Centered Pedagogies'
  },
  {
    id: 24,
    question: "Which of the following is a classic example of Jerome Bruner's 'Enactive' stage of intellectual representation?",
    options: [
      { key: 'A', text: 'A child learning addition by counting actual physical pebbles with their hands' },
      { key: 'B', text: 'A child looking at pictures of apples to understand multiplication' },
      { key: 'C', text: 'A student writing algebraic formulas with abstract symbols' },
      { key: 'D', text: 'A student reading a textbook paragraph silently' }
    ],
    correctAnswer: 'A',
    explanation: 'Bruner\'s 3 modes of representation: Enactive (action-based / physical manipulation), Iconic (image/visual-based), and Symbolic (language/mathematical symbols).',
    topicRef: '1.0 Bruner Modes of Representation'
  },
  {
    id: 25,
    question: "What happens during a 'Flip-Flop' transition error according to Jacob Kounin?",
    options: [
      { key: 'A', text: 'A teacher stops an ongoing activity, returns to an earlier completed activity, and then jumps back again.' },
      { key: 'B', text: 'A teacher allows two students to switch seats constantly.' },
      { key: 'C', text: 'A teacher grades exam papers during a lecture.' },
      { key: 'D', text: 'A teacher gives contradictory multiple-choice choices on an exam.' }
    ],
    correctAnswer: 'A',
    explanation: 'A Flip-Flop occurs when a teacher terminates one activity, begins a new one, and then suddenly jumps back to the previous one before resuming the new one.',
    topicRef: '4.0 Classroom Management Techniques'
  },
  {
    id: 26,
    question: "Which mnemonic or acronym is used in setting effective learning objectives?",
    options: [
      { key: 'A', text: 'SWOT (Strengths, Weaknesses, Opportunities, Threats)' },
      { key: 'B', text: 'SMART (Specific, Measurable, Attainable, Result-oriented/Relevant, Time-bound)' },
      { key: 'C', text: 'PESTLE (Political, Economic, Social, Technological, Legal, Environmental)' },
      { key: 'D', text: 'POSDCoRB (Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting)' }
    ],
    correctAnswer: 'B',
    explanation: 'SMART objectives ensure learning targets are clear, assessable, achievable within the lesson time, and aligned with intended competencies.',
    topicRef: '1.0 Instructional Planning & Objectives'
  },
  {
    id: 27,
    question: "When formulating behavioral objectives in lesson planning, which component in the ABCD model indicates the standard or acceptable level of performance?",
    options: [
      { key: 'A', text: 'Audience' },
      { key: 'B', text: 'Behavior' },
      { key: 'C', text: 'Condition' },
      { key: 'D', text: 'Degree' }
    ],
    correctAnswer: 'D',
    explanation: 'In the ABCD model of objectives (Heinich et al.): Audience (Learners), Behavior (Observable action), Condition (Tools/Context), Degree (Accuracy standard, e.g., "with 85% accuracy").',
    topicRef: '1.0 ABCD Objective Formulation'
  },
  {
    id: 28,
    question: "Which cooperative learning strategy involves each student in a group writing ideas on paper and passing it silently around the circle to build upon teammates' thoughts?",
    options: [
      { key: 'A', text: 'Round Robin' },
      { key: 'B', text: 'Round Table / Silent Brainstorming' },
      { key: 'C', text: 'Numbered Heads Together' },
      { key: 'D', text: 'Gallery Walk' }
    ],
    correctAnswer: 'B',
    explanation: 'Round Table is the written equivalent of Round Robin; one piece of paper and pen are passed around a group as each member records a response.',
    topicRef: '3.0 Cooperative Learning'
  },
  {
    id: 29,
    question: "In the 'Numbered Heads Together' strategy, what is the primary educational purpose of having the teacher call a random number after group discussion?",
    options: [
      { key: 'A', text: 'To ensure positive interdependence and individual accountability among all members' },
      { key: 'B', text: 'To save time during roll call' },
      { key: 'C', text: 'To rank students from lowest to highest score' },
      { key: 'D', text: 'To punish uncooperative students' }
    ],
    correctAnswer: 'A',
    explanation: 'Numbered Heads Together promotes positive interdependence and individual accountability because any student could be called upon to represent the team\'s consensus.',
    topicRef: '3.0 Cooperative Learning'
  },
  {
    id: 30,
    question: "What is an 'Advance Organizer' as conceptualized by David Ausubel?",
    options: [
      { key: 'A', text: 'A student planner used for tracking homework deadlines' },
      { key: 'B', text: 'An introductory statement or cognitive bridge presented prior to instruction to anchor new information into existing cognitive structures' },
      { key: 'C', text: 'A mechanical device that displays slide transparencies' },
      { key: 'D', text: 'A syllabus given on the last day of the semester' }
    ],
    correctAnswer: 'B',
    explanation: 'Ausubel\'s Advance Organizer provides a high-level conceptual framework introduced before detailed material to facilitate meaningful subsumption into prior knowledge.',
    topicRef: '2.0 Ausubel Meaningful Reception Learning'
  },
  {
    id: 31,
    question: "Which of the following describes the 'Socratic Method' of instruction?",
    options: [
      { key: 'A', text: 'A lecture delivery where students take verbatim notes' },
      { key: 'B', text: 'A disciplined, guided questioning dialogue that challenges assumptions and leads students to discover truth or contradiction' },
      { key: 'C', text: 'A silent reading period followed by a written quiz' },
      { key: 'D', text: 'A lab demonstration where students follow a prescribed recipe' }
    ],
    correctAnswer: 'B',
    explanation: 'The Socratic method uses probing, disciplined questioning to examine underlying ideas, reveal contradictions, and stimulate critical inquiry.',
    topicRef: '5.0 Questioning Techniques'
  },
  {
    id: 32,
    question: "Which Dale's Cone of Experience level provides the highest degree of learner abstraction?",
    options: [
      { key: 'A', text: 'Direct Purposeful Experiences' },
      { key: 'B', text: 'Verbal Symbols (Text / Words)' },
      { key: 'C', text: 'Dramatized Experiences' },
      { key: 'D', text: 'Field Trips' }
    ],
    correctAnswer: 'B',
    explanation: 'Verbal symbols (words, spoken/written text) sit at the pinnacle of Edgar Dale\'s Cone, representing the highest degree of abstraction and lowest concreteness.',
    topicRef: '2.0 Dale Cone of Experience'
  },
  {
    id: 33,
    question: "According to Dale's Cone of Experience, which instructional activity lies at the base, offering the most concrete, authentic learning experience?",
    options: [
      { key: 'A', text: 'Direct, Purposeful Experiences' },
      { key: 'B', text: 'Demonstrations' },
      { key: 'C', text: 'Visual Symbols' },
      { key: 'D', text: 'Educational Television' }
    ],
    correctAnswer: 'A',
    explanation: 'Direct, Purposeful Experiences (hands-on real-world practice utilizing all senses) form the foundation of Dale\'s Cone.',
    topicRef: '2.0 Dale Cone of Experience'
  },
  {
    id: 34,
    question: "What is 'Metacognition' most simply defined as in pedagogy?",
    options: [
      { key: 'A', text: 'Memorizing facts quickly' },
      { key: 'B', text: 'Thinking about one\'s own thinking and regulating one\'s learning processes' },
      { key: 'C', text: 'The ability to score high on standardized exams' },
      { key: 'D', text: 'Physical hand-eye coordination' }
    ],
    correctAnswer: 'B',
    explanation: 'Coined by John Flavell, Metacognition refers to higher-order cognitive monitoring: "thinking about thinking," knowledge of one\'s own cognition, and regulation of learning strategies.',
    topicRef: '1.0 Metacognition & Cognitive Principles'
  },
  {
    id: 35,
    question: "Which of the following is an example of an 'Affective Domain' objective according to Krathwohl's taxonomy?",
    options: [
      { key: 'A', text: 'The student will dissect a frog accurately.' },
      { key: 'B', text: 'The student will display empathy and respect towards classmates during group discussions.' },
      { key: 'C', text: 'The student will solve five quadratic equations.' },
      { key: 'D', text: 'The student will recite the periodic table from memory.' }
    ],
    correctAnswer: 'B',
    explanation: 'The Affective domain (Krathwohl, Bloom, Masia) deals with attitudes, values, appreciation, emotions, and ethical dispositions.',
    topicRef: '1.0 Educational Taxonomies'
  },
  {
    id: 36,
    question: "In Anita Harrow's Psychomotor Domain Taxonomy, what is the highest level of motor development?",
    options: [
      { key: 'A', text: 'Reflex Movements' },
      { key: 'B', text: 'Fundamental Movements' },
      { key: 'C', text: 'Perceptual Abilities' },
      { key: 'D', text: 'Non-Discursive Communication (Expressive / Creative Movement)' }
    ],
    correctAnswer: 'D',
    explanation: 'Non-discursive communication (creative dance, mime, expressive choreography) represents the apex of Harrow\'s psychomotor taxonomy.',
    topicRef: '1.0 Psychomotor Taxonomy'
  },
  {
    id: 37,
    question: "When a teacher structures classroom rules collaboratively with students at the start of the school year, which management principle is being exemplified?",
    options: [
      { key: 'A', text: 'Democratic ownership and shared accountability' },
      { key: 'B', text: 'Laissez-faire abdication of authority' },
      { key: 'C', text: 'Authoritarian decree' },
      { key: 'D', text: 'Overdwelling on protocol' }
    ],
    correctAnswer: 'A',
    explanation: 'Collaborative rule-making fosters mutual respect, internal locus of control, and student buy-in, transforming rules from external impositions into shared community norms.',
    topicRef: '4.0 Classroom Management & Discipline'
  },
  {
    id: 38,
    question: "Which of the following best defines 'Scaffolding' in instructional delivery?",
    options: [
      { key: 'A', text: 'Building wooden fixtures for stage production' },
      { key: 'B', text: 'Temporary supportive structures provided by the teacher that are gradually removed as the learner gains independence' },
      { key: 'C', text: 'Giving students the answer whenever they pause for more than two seconds' },
      { key: 'D', text: 'Testing students without prior review' }
    ],
    correctAnswer: 'B',
    explanation: 'Scaffolding (Wood, Bruner, & Ross) refers to adjustable support provided by teachers or peers to help students accomplish tasks within their ZPD, faded gradually over time.',
    topicRef: '1.0 Scaffolding & Pedagogy'
  },
  {
    id: 39,
    question: "What is the 'Ripple Effect' in classroom management as described by Jacob Kounin?",
    options: [
      { key: 'A', text: 'Water dripping from the classroom ceiling' },
      { key: 'B', text: 'The phenomenon where correcting one student\'s misbehavior influences and prevents other students around them from misbehaving' },
      { key: 'C', text: 'A student spreading gossip across multiple sections' },
      { key: 'D', text: 'When one student sneezes and the whole row sneezes' }
    ],
    correctAnswer: 'B',
    explanation: 'The Ripple Effect occurs when a teacher\'s prompt, fair correction of an individual student affects the behavior of observing peers positively.',
    topicRef: '4.0 Kounin Classroom Management'
  },
  {
    id: 40,
    question: "When a teacher uses 'Thrust' in classroom momentum, what error is occurring?",
    options: [
      { key: 'A', text: 'The teacher bursts in with instructions while students are engrossed in another task, without checking for readiness.' },
      { key: 'B', text: 'The teacher speaks in a quiet whisper.' },
      { key: 'C', text: 'The teacher leaves class 10 minutes early.' },
      { key: 'D', text: 'The teacher asks a student to write on the board.' }
    ],
    correctAnswer: 'A',
    explanation: 'Thrust is an abrupt intrusion where the teacher suddenly inserts a new instruction without preparing the students or assessing whether they are ready.',
    topicRef: '4.0 Kounin Classroom Management'
  },
  {
    id: 41,
    question: "Which teaching technique is most suitable for developing students' empathy, conflict resolution skills, and social perspective-taking?",
    options: [
      { key: 'A', text: 'Rote memorization drills' },
      { key: 'B', text: 'Role-Playing and Sociodrama' },
      { key: 'C', text: 'Silent seatwork' },
      { key: 'D', text: 'True or False standardized testing' }
    ],
    correctAnswer: 'B',
    explanation: 'Role-playing and sociodrama allow learners to step into the shoes of others, experience diverse perspectives, and rehearse emotional/social decision-making safely.',
    topicRef: '3.0 Experiential & Social Strategies'
  },
  {
    id: 42,
    question: "In the Deductive Method of teaching, which step comes first?",
    options: [
      { key: 'A', text: 'Giving specific examples and observations' },
      { key: 'B', text: 'Stating the general rule, formula, or principle' },
      { key: 'C', text: 'Group synthesis and reflection' },
      { key: 'D', text: 'Testing hypothesis in the field' }
    ],
    correctAnswer: 'B',
    explanation: 'Deductive instruction (General to Specific) starts with the statement of the general rule/law, followed by demonstration, and lastly application in specific problems.',
    topicRef: '2.0 Deductive vs Inductive Teaching'
  },
  {
    id: 43,
    question: "A teacher observes that a student intentionally knocks over chairs and makes loud animal noises whenever the teacher looks away. When the teacher scolds the student, the student smiles. What mistaken goal is operating here according to Dreikurs?",
    options: [
      { key: 'A', text: 'Attention Seeking' },
      { key: 'B', text: 'Power Struggle' },
      { key: 'C', text: 'Revenge' },
      { key: 'D', text: 'Assumed Inadequacy' }
    ],
    correctAnswer: 'A',
    explanation: 'Attention-seeking misbehavior is satisfied even by negative attention (scolding). The student feels significant only when being noticed.',
    topicRef: '4.0 Dreikurs Mistaken Goals'
  },
  {
    id: 44,
    question: "How should a teacher respond to a student whose mistaken goal is 'Power and Control'?",
    options: [
      { key: 'A', text: 'Engage in a shouting match to prove who is in charge' },
      { key: 'B', text: 'Refuse to fight or engage in power struggles; give the student legitimate choices and leadership responsibilities' },
      { key: 'C', text: 'Publicly humiliate the student in front of the whole school' },
      { key: 'D', text: 'Ignore the student completely forever' }
    ],
    correctAnswer: 'B',
    explanation: 'Dreikurs recommends avoiding a power duel (which feeds the power struggle) and instead redirecting the student\'s energy into constructive leadership and choices.',
    topicRef: '4.0 Dreikurs Mistaken Goals'
  },
  {
    id: 45,
    question: "Which of the following is a key feature of 'Inquiry-Based Learning'?",
    options: [
      { key: 'A', text: 'Students are given a complete manual with all answers pre-printed.' },
      { key: 'B', text: 'Students formulate questions, gather and analyze data, and draw evidence-based conclusions.' },
      { key: 'C', text: 'The teacher reads the entire textbook aloud without student participation.' },
      { key: 'D', text: 'Students only perform rote handwriting exercises.' }
    ],
    correctAnswer: 'B',
    explanation: 'Inquiry-based learning places students\' questions, investigations, and problem-solving at the center of the learning experience.',
    topicRef: '3.0 Inquiry-Based Learning'
  },
  {
    id: 46,
    question: "What is 'Pacing' in instructional delivery?",
    options: [
      { key: 'A', text: 'Walking back and forth across the front of the classroom rapidly' },
      { key: 'B', text: 'The speed and rhythm at which a teacher moves through content and instructional activities' },
      { key: 'C', text: 'The distance between the teacher\'s desk and the door' },
      { key: 'D', text: 'The number of pages in a textbook' }
    ],
    correctAnswer: 'B',
    explanation: 'Instructional pacing refers to managing the speed, momentum, and transitions of a lesson so that it is neither too fast for comprehension nor too slow to cause boredom.',
    topicRef: '4.0 Lesson Delivery & Classroom Momentum'
  },
  {
    id: 47,
    question: "Which cognitive level of Bloom's Taxonomy is targeted when a teacher asks: 'Compare and contrast the economic policies of the Spanish colonial government and the American regime in the Philippines'?",
    options: [
      { key: 'A', text: 'Remembering' },
      { key: 'B', text: 'Understanding' },
      { key: 'C', text: 'Analyzing' },
      { key: 'D', text: 'Creating' }
    ],
    correctAnswer: 'C',
    explanation: 'Comparing and contrasting, deconstructing components, and identifying relationships are core cognitive skills of the Analyzing level.',
    topicRef: '5.0 Bloom Revised Taxonomy'
  },
  {
    id: 48,
    question: "What is the primary benefit of using a 'KWL Chart' (Know, Want to know, Learned) in reading and science instruction?",
    options: [
      { key: 'A', text: 'It acts as an active metacognitive reading organizer that activates prior knowledge and tracks conceptual growth.' },
      { key: 'B', text: 'It prevents students from asking questions.' },
      { key: 'C', text: 'It serves as a punitive detention record.' },
      { key: 'D', text: 'It replaces all summative assessments.' }
    ],
    correctAnswer: 'A',
    explanation: 'Donna Ogle\'s KWL chart activates prior knowledge (K), establishes learning purposes (W), and prompts reflection on new insights acquired (L).',
    topicRef: '1.0 Metacognitive Organizers'
  },
  {
    id: 49,
    question: "When a teacher uses 'Positive Reinforcement' according to B.F. Skinner's Operant Conditioning, what occurs?",
    options: [
      { key: 'A', text: 'An unpleasant stimulus is presented to reduce behavior.' },
      { key: 'B', text: 'A rewarding or pleasant stimulus is presented immediately following a desired behavior to increase the likelihood of its repetition.' },
      { key: 'C', text: 'A student privilege is taken away.' },
      { key: 'D', text: 'The teacher ignores the good behavior.' }
    ],
    correctAnswer: 'B',
    explanation: 'Positive reinforcement involves adding a desirable stimulus (praise, tokens, privileges) following a behavior to strengthen and maintain that behavior.',
    topicRef: '4.0 Behavioral Principles in Classroom Management'
  },
  {
    id: 50,
    question: "Which term refers to the teacher's ability to smoothly move from one lesson segment or topic to another without dead spots or chaotic lags?",
    options: [
      { key: 'A', text: 'Smoothness & Momentum' },
      { key: 'B', text: 'Stimulus Bound' },
      { key: 'C', text: 'Overdwelling' },
      { key: 'D', text: 'Fragmentation' }
    ],
    correctAnswer: 'A',
    explanation: 'In Kounin\'s research, Smoothness and Momentum are key management behaviors that sustain learner engagement and minimize disruption during instructional transitions.',
    topicRef: '4.0 Kounin Classroom Management'
  }
];
