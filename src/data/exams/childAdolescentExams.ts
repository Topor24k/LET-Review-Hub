import { ExamQuestion } from '../../types';

export const CHILD_ADOLESCENT_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "In Jean Piaget's Theory of Cognitive Development, at which stage does a child achieve 'Object Permanence' (realizing that objects continue to exist even when unseen)?",
    options: [
      { key: 'A', text: 'Sensorimotor Stage (0 to 2 years)' },
      { key: 'B', text: 'Preoperational Stage (2 to 7 years)' },
      { key: 'C', text: 'Concrete Operational Stage (7 to 11 years)' },
      { key: 'D', text: 'Formal Operational Stage (11+ years)' }
    ],
    correctAnswer: 'A',
    explanation: 'Object permanence develops during the sensorimotor stage (typically around 8–9 months), transitioning infants from reflexes to intentional goal-directed action.',
    topicRef: '1.0 Piaget Cognitive Development'
  },
  {
    id: 2,
    question: "A child in Piaget's Preoperational Stage believes that pouring water from a short wide glass into a tall thin glass makes the water quantity increase. Which cognitive limitation does this demonstrate?",
    options: [
      { key: 'A', text: 'Lack of Conservation and Centration' },
      { key: 'B', text: 'Object Permanence' },
      { key: 'C', text: 'Abstract Deductive Reasoning' },
      { key: 'D', text: 'Metacognition' }
    ],
    correctAnswer: 'A',
    explanation: 'Preoperational children struggle with conservation (understanding that quantity remains constant despite perceptual changes) due to centration (focusing only on one dimension like height).',
    topicRef: '1.0 Piaget Cognitive Development'
  },
  {
    id: 3,
    question: "According to Erik Erikson's Psychosocial Stages of Development, what is the core psychosocial crisis faced by adolescents (ages 12 to 18)?",
    options: [
      { key: 'A', text: 'Identity vs. Role Confusion' },
      { key: 'B', text: 'Industry vs. Inferiority' },
      { key: 'C', text: 'Trust vs. Mistrust' },
      { key: 'D', text: 'Intimacy vs. Isolation' }
    ],
    correctAnswer: 'A',
    explanation: 'Adolescents experience "Identity vs. Role Confusion" as they explore personal values, career aspirations, beliefs, and forge an integrated sense of self.',
    topicRef: '2.0 Erikson Psychosocial Stages'
  },
  {
    id: 4,
    question: "In Erikson's fourth stage (Industry vs. Inferiority, ages 6 to 12 / elementary school age), what is the key developmental task?",
    options: [
      { key: 'A', text: 'Developing a sense of pride and competence in academic, social, and physical skills' },
      { key: 'B', text: 'Learning to walk and talk' },
      { key: 'C', text: 'Forming romantic relationships' },
      { key: 'D', text: 'Reflecting on a long life with wisdom' }
    ],
    correctAnswer: 'A',
    explanation: 'Elementary school children develop "Industry" when encouraged to master academic and motor skills; if disparaged or overly criticized, they develop feelings of "Inferiority."',
    topicRef: '2.0 Erikson Psychosocial Stages'
  },
  {
    id: 5,
    question: "In Lawrence Kohlberg's Theory of Moral Development, what motivates moral choices at the 'Preconventional' Level (Stages 1 and 2)?",
    options: [
      { key: 'A', text: 'Obedience to avoid physical punishment (Stage 1) and personal self-interest / mutual exchange (Stage 2)' },
      { key: 'B', text: 'Universal ethical principles and human rights' },
      { key: 'C', text: 'Maintaining social order and pleasing authority figures' },
      { key: 'D', text: 'Democratic social contracts' }
    ],
    correctAnswer: 'A',
    explanation: 'At the Preconventional level, morality is externally controlled: actions are judged solely based on direct consequences (punishment vs. reward/self-benefit).',
    topicRef: '3.0 Kohlberg Moral Development'
  },
  {
    id: 6,
    question: "A person refuses to break the law because 'laws maintain social order and if everyone broke the rules, society would descend into chaos.' Which Kohlberg moral stage is this?",
    options: [
      { key: 'A', text: 'Stage 4: Law and Order / Social-System Morality' },
      { key: 'B', text: 'Stage 1: Punishment and Obedience' },
      { key: 'C', text: 'Stage 2: Individualism and Exchange' },
      { key: 'D', text: 'Stage 6: Universal Ethical Principles' }
    ],
    correctAnswer: 'A',
    explanation: 'Stage 4 (Conventional level) focuses on duty, respecting authority, maintaining the social fabric, and upholding laws for societal stability.',
    topicRef: '3.0 Kohlberg Moral Development'
  },
  {
    id: 7,
    question: "In Albert Bandura's Social Learning Theory (Social Cognitive Theory), what was demonstrated by the famous 'Bobo Doll Experiment'?",
    options: [
      { key: 'A', text: 'Children learn aggressive behaviors by observing and imitating adult models (Observational Learning / Modeling)' },
      { key: 'B', text: 'Children only learn through direct physical reinforcement' },
      { key: 'C', text: 'Dolls improve mathematical computation' },
      { key: 'D', text: 'Genetics is the sole determinant of human behavior' }
    ],
    correctAnswer: 'A',
    explanation: 'Bandura proved that children acquire complex novel behaviors through observation, vicarious reinforcement, and imitation without direct conditioning.',
    topicRef: '4.0 Bandura Social Cognitive Theory'
  },
  {
    id: 8,
    question: "In Urie Bronfenbrenner's Bioecological Systems Theory, what system encompasses the direct, immediate settings in which the child interacts daily (e.g., family, classroom, peers, neighborhood)?",
    options: [
      { key: 'A', text: 'Microsystem' },
      { key: 'B', text: 'Mesosystem' },
      { key: 'C', text: 'Exosystem' },
      { key: 'D', text: 'Macrosystem' }
    ],
    correctAnswer: 'A',
    explanation: 'The Microsystem is the innermost layer comprising face-to-face, bidirectional relationships directly experienced by the child (home, school, peer group).',
    topicRef: '5.0 Bronfenbrenner Bioecological Systems'
  },
  {
    id: 9,
    question: "In Bronfenbrenner's theory, what is the 'Mesosystem'?",
    options: [
      { key: 'A', text: 'The interconnections and relationships between two or more of the child\'s microsystems (e.g., parent-teacher partnership)' },
      { key: 'B', text: 'The broad cultural values and laws of the country' },
      { key: 'C', text: 'Settings where the child is not physically present but is affected (e.g., parent\'s workplace)' },
      { key: 'D', text: 'The passage of historical time' }
    ],
    correctAnswer: 'A',
    explanation: 'The Mesosystem connects microsystems—for instance, how a child\'s family interacts with their school community directly influences their developmental outcomes.',
    topicRef: '5.0 Bronfenbrenner Bioecological Systems'
  },
  {
    id: 10,
    question: "In Howard Gardner's Theory of Multiple Intelligences, which intelligence is characterized by strong self-reflection, understanding one's own emotional states, strengths, and metacognitive awareness?",
    options: [
      { key: 'A', text: 'Intrapersonal Intelligence' },
      { key: 'B', text: 'Interpersonal Intelligence' },
      { key: 'C', text: 'Spatial Intelligence' },
      { key: 'D', text: 'Naturalistic Intelligence' }
    ],
    correctAnswer: 'A',
    explanation: 'Intrapersonal intelligence is self-smart: the capacity to understand oneself, one\'s inner feelings, motivations, fears, and personal goals.',
    topicRef: '6.0 Gardner Multiple Intelligences'
  },
  {
    id: 11,
    question: "Which of Gardner's intelligences is exhibited by individuals who excel at understanding other people, reading social cues, mediating conflicts, and leading groups?",
    options: [
      { key: 'A', text: 'Interpersonal Intelligence' },
      { key: 'B', text: 'Intrapersonal Intelligence' },
      { key: 'C', text: 'Bodily-Kinesthetic Intelligence' },
      { key: 'D', text: 'Logical-Mathematical Intelligence' }
    ],
    correctAnswer: 'A',
    explanation: 'Interpersonal intelligence is people-smart: the ability to empathize, communicate effectively, understand others\' perspectives, and collaborate.',
    topicRef: '6.0 Gardner Multiple Intelligences'
  },
  {
    id: 12,
    question: "In Sigmund Freud's Psychosexual Stages of Development, during which stage (ages 6 to puberty) are sexual drives dormant and energy is channeled into academic learning, sports, and friendships?",
    options: [
      { key: 'A', text: 'Latency Stage' },
      { key: 'B', text: 'Oral Stage' },
      { key: 'C', text: 'Phallic Stage' },
      { key: 'D', text: 'Genital Stage' }
    ],
    correctAnswer: 'A',
    explanation: 'The Latency stage (school-age years) features repressed sexual impulses while children invest their psychic energy in intellectual, social, and motor development.',
    topicRef: '7.0 Freud Psychosexual Stages'
  },
  {
    id: 13,
    question: "According to Ivan Pavlov's Classical Conditioning, what was the meat powder in the famous dog experiment before conditioning occurred?",
    options: [
      { key: 'A', text: 'Unconditioned Stimulus (UCS)' },
      { key: 'B', text: 'Conditioned Stimulus (CS)' },
      { key: 'C', text: 'Conditioned Response (CR)' },
      { key: 'D', text: 'Extinction' }
    ],
    correctAnswer: 'A',
    explanation: 'The meat powder naturally and automatically triggered salivation without prior training, making it the Unconditioned Stimulus (UCS).',
    topicRef: '8.0 Classical Conditioning'
  },
  {
    id: 14,
    question: "In B.F. Skinner's Operant Conditioning, what is 'Negative Reinforcement'?",
    options: [
      { key: 'A', text: 'Removing or terminating an unpleasant/aversive stimulus following a desired behavior to increase the likelihood of that behavior recurring' },
      { key: 'B', text: 'Spanking a child for misbehavior' },
      { key: 'C', text: 'Ignoring good behavior' },
      { key: 'D', text: 'Taking away a child\'s favorite toy' }
    ],
    correctAnswer: 'A',
    explanation: 'Negative reinforcement strengthens a desired behavior by removing an aversive condition (e.g., turning off an annoying buzzer once a seatbelt is fastened).',
    topicRef: '8.0 Operant Conditioning'
  },
  {
    id: 15,
    question: "What is 'Egocentrism' in Piaget's Preoperational Stage of cognitive development?",
    options: [
      { key: 'A', text: 'The child\'s inability to perceive a physical situation or perspective from someone else\'s point of view' },
      { key: 'B', text: 'Extreme selfishness and greed' },
      { key: 'C', text: 'Advanced leadership ability' },
      { key: 'D', text: 'High self-esteem' }
    ],
    correctAnswer: 'A',
    explanation: 'Piaget demonstrated through the Three Mountain Task that young children assume everyone sees, hears, and feels exactly what they do.',
    topicRef: '1.0 Piaget Preoperational Thought'
  },
  {
    id: 16,
    question: "In Lev Vygotsky's theory, what is 'Private Speech' in young children?",
    options: [
      { key: 'A', text: 'Self-directed talk used by children to guide, regulate, and plan their own thinking and problem-solving actions before it becomes internalized as inner thought' },
      { key: 'B', text: 'Whispering gossip to friends' },
      { key: 'C', text: 'A speech impediment' },
      { key: 'D', text: 'Talking in one\'s sleep' }
    ],
    correctAnswer: 'A',
    explanation: 'Vygotsky viewed private speech (talking aloud to oneself) as a critical metacognitive tool that facilitates self-regulation and executive control.',
    topicRef: '9.0 Vygotsky Socio-Cultural Theory'
  },
  {
    id: 17,
    question: "In Information Processing Theory, what are the three basic structural memory stores?",
    options: [
      { key: 'A', text: 'Sensory Memory, Short-Term / Working Memory, and Long-Term Memory' },
      { key: 'B', text: 'Hard drive, RAM, and Monitor' },
      { key: 'C', text: 'Conscious, Subconscious, and Unconscious' },
      { key: 'D', text: 'Oral, Anal, and Phallic' }
    ],
    correctAnswer: 'A',
    explanation: 'The Atkinson-Shiffrin model organizes memory flow from brief Sensory Memory (milliseconds) to Working Memory (7±2 items) to permanent Long-Term Memory.',
    topicRef: '10.0 Information Processing Theory'
  },
  {
    id: 18,
    question: "What is 'Schema' (or Scheme) in Piaget's cognitive theory?",
    options: [
      { key: 'A', text: 'A cognitive framework or mental building block of knowledge that helps individuals organize and interpret information' },
      { key: 'B', text: 'A devious criminal plot' },
      { key: 'C', text: 'A written syllabus outline' },
      { key: 'D', text: 'A multiple choice question' }
    ],
    correctAnswer: 'A',
    explanation: 'Schemata are mental structures that organize categories of knowledge and relationships.',
    topicRef: '1.0 Piagetian Concepts'
  },
  {
    id: 19,
    question: "What is 'Accommodation' compared to 'Assimilation' in Piaget's equilibration process?",
    options: [
      { key: 'A', text: 'Assimilation fits new information into existing schemas; Accommodation modifies or creates new schemas when new information contradicts existing understanding' },
      { key: 'B', text: 'Accommodation is physical lodging' },
      { key: 'C', text: 'Assimilation is forgetting; accommodation is remembering' },
      { key: 'D', text: 'There is no difference' }
    ],
    correctAnswer: 'A',
    explanation: 'Assimilation integrates new inputs into pre-existing cognitive structures, while accommodation reshapes cognitive structures in response to novel disequilibrium.',
    topicRef: '1.0 Piaget Assimilation vs Accommodation'
  },
  {
    id: 20,
    question: "In John Bowlby and Mary Ainsworth's Attachment Theory, which attachment style is characterized by a child who explores freely in the caregiver's presence, is distressed when the caregiver leaves, and is easily soothed upon the caregiver's return?",
    options: [
      { key: 'A', text: 'Secure Attachment' },
      { key: 'B', text: 'Insecure-Avoidant Attachment' },
      { key: 'C', text: 'Insecure-Resistant / Ambivalent Attachment' },
      { key: 'D', text: 'Disorganized Attachment' }
    ],
    correctAnswer: 'A',
    explanation: 'Secure attachment stems from sensitive, responsive parenting, providing the child with a secure emotional base for healthy socio-emotional exploration.',
    topicRef: '11.0 Attachment Theory'
  },
  {
    id: 21,
    question: "What is 'Animism' in Piaget's Preoperational stage?",
    options: [
      { key: 'A', text: 'The belief that inanimate objects (such as the sun, toys, or rocks) have lifelike qualities, feelings, and intentions' },
      { key: 'B', text: 'Loving biological animals' },
      { key: 'C', text: 'Drawing cartoon animations' },
      { key: 'D', text: 'Fear of insects' }
    ],
    correctAnswer: 'A',
    explanation: 'Preoperational children naturally attribute human consciousness, thoughts, and emotions to non-living objects (e.g., "The sidewalk was mad at me and tripped me").',
    topicRef: '1.0 Piaget Preoperational Stage'
  },
  {
    id: 22,
    question: "In Diana Baumrind's Parenting Styles, which parenting style is characterized by high warmth and high expectations, open communication, and democratic reasoning?",
    options: [
      { key: 'A', text: 'Authoritative Parenting' },
      { key: 'B', text: 'Authoritarian Parenting' },
      { key: 'C', text: 'Permissive Parenting' },
      { key: 'D', text: 'Neglectful / Uninvolved Parenting' }
    ],
    correctAnswer: 'A',
    explanation: 'Authoritative parenting produces the highest emotional resilience, academic self-efficacy, and social competence in children and youth.',
    topicRef: '12.0 Parenting Styles & Development'
  },
  {
    id: 23,
    question: "What is 'Self-Efficacy' in Albert Bandura's theory?",
    options: [
      { key: 'A', text: 'An individual\'s belief in their own capability to successfully execute specific tasks and achieve designated performance outcomes' },
      { key: 'B', text: 'General high self-esteem' },
      { key: 'C', text: 'Being selfish and arrogant' },
      { key: 'D', text: 'Physical hand strength' }
    ],
    correctAnswer: 'A',
    explanation: 'Self-efficacy (task-specific confidence) determines how much effort people expend, their persistence in the face of obstacles, and their resilience.',
    topicRef: '4.0 Bandura Self-Efficacy'
  },
  {
    id: 24,
    question: "What is 'Metacognition' and its two primary components identified by John Flavell?",
    options: [
      { key: 'A', text: 'Knowledge of Cognition (person, task, strategy) and Regulation of Cognition (planning, monitoring, evaluating)' },
      { key: 'B', text: 'IQ score and EQ score' },
      { key: 'C', text: 'Input and output' },
      { key: 'D', text: 'Short-term memory and long-term memory' }
    ],
    correctAnswer: 'A',
    explanation: 'Flavell defined metacognition as awareness of one\'s own cognitive processes (knowledge) and the conscious control over those processes (self-regulation).',
    topicRef: '10.0 Metacognitive Development'
  },
  {
    id: 25,
    question: "In Lawrence Kohlberg's Heinz Dilemma, if a participant argues that Heinz should steal the drug because 'a human life is inherently worth more than a pharmacist\'s property right and universal human dignity must be protected,' which stage is represented?",
    options: [
      { key: 'A', text: 'Stage 6: Universal Ethical Principles' },
      { key: 'B', text: 'Stage 1: Punishment and Obedience' },
      { key: 'C', text: 'Stage 3: Good Boy / Nice Girl' },
      { key: 'D', text: 'Stage 4: Law and Order' }
    ],
    correctAnswer: 'A',
    explanation: 'Stage 6 represents postconventional reasoning grounded in universal ethical principles of justice, equality, and the absolute sanctity of human life.',
    topicRef: '3.0 Kohlberg Heinz Dilemma'
  },
  {
    id: 26,
    question: "In Maria Montessori's educational philosophy, what are 'Sensitive Periods' in child development?",
    options: [
      { key: 'A', text: 'Genetically programmed time windows during early childhood where the brain is exceptionally receptive to acquiring specific skills (e.g., language, order, movement)' },
      { key: 'B', text: 'Times when a child is crying' },
      { key: 'C', text: 'Periods of severe physical illness' },
      { key: 'D', text: 'Recess breaks' }
    ],
    correctAnswer: 'A',
    explanation: 'Montessori identified sensitive periods where children have an intense, natural fascination and effortless capacity for mastering particular developmental competencies.',
    topicRef: '13.0 Montessori Developmental Principles'
  },
  {
    id: 27,
    question: "What is 'Centration' in Piaget's Preoperational Stage?",
    options: [
      { key: 'A', text: 'The tendency of young children to focus on only one salient aspect of a situation while completely ignoring other relevant dimensions' },
      { key: 'B', text: 'Sitting in the exact center of a classroom' },
      { key: 'C', text: 'Meditating quietly' },
      { key: 'D', text: 'Balancing a scale' }
    ],
    correctAnswer: 'A',
    explanation: 'Centration limits preoperational logical reasoning because the child fixes attention on one visual clue (like water height) while neglecting width.',
    topicRef: '1.0 Piaget Preoperational Stage'
  },
  {
    id: 28,
    question: "In Erikson's psychosocial model, what is the crisis experienced during Toddlerhood (ages 1 to 3)?",
    options: [
      { key: 'A', text: 'Autonomy vs. Shame and Doubt' },
      { key: 'B', text: 'Generativity vs. Stagnation' },
      { key: 'C', text: 'Ego Integrity vs. Despair' },
      { key: 'D', text: 'Identity vs. Role Confusion' }
    ],
    correctAnswer: 'A',
    explanation: 'Toddlers develop "Autonomy" when given supportive opportunities to make simple choices (potty training, dressing); over-control or ridicule breeds "Shame and Doubt."',
    topicRef: '2.0 Erikson Psychosocial Stages'
  },
  {
    id: 29,
    question: "What is 'Cephalocaudal' development in physical motor growth?",
    options: [
      { key: 'A', text: 'Development proceeds from the head downward to the feet (Head-to-Toe progression)' },
      { key: 'B', text: 'Development proceeds from the center of the body outward to the extremities' },
      { key: 'C', text: 'Development proceeds from right to left' },
      { key: 'D', text: 'Development that occurs only during sleep' }
    ],
    correctAnswer: 'A',
    explanation: 'Cephalocaudal pattern (head-to-tail) dictates that infants gain control over neck and facial muscles first, followed by arms, torso, and finally legs.',
    topicRef: '14.0 Physical & Motor Development'
  },
  {
    id: 30,
    question: "What is 'Proximodistal' development in physical motor growth?",
    options: [
      { key: 'A', text: 'Development proceeds from the center / trunk of the body outward toward the extremities (limbs, fingers, and toes)' },
      { key: 'B', text: 'Head to toe' },
      { key: 'C', text: 'Back to front' },
      { key: 'D', text: 'Outer skin to inner organs' }
    ],
    correctAnswer: 'A',
    explanation: 'Proximodistal progression explains why children develop gross motor arm and leg control before mastering fine motor finger dexterity.',
    topicRef: '14.0 Physical & Motor Development'
  },
  {
    id: 31,
    question: "In Thorndike's Connectionism, what does the 'Law of Effect' state?",
    options: [
      { key: 'A', text: 'Responses followed by satisfying consequences are strengthened and more likely to recur; responses followed by discomfort are weakened' },
      { key: 'B', text: 'Practice makes perfect automatically without feedback' },
      { key: 'C', text: 'Students learn only when threatened' },
      { key: 'D', text: 'Learning occurs in one second' }
    ],
    correctAnswer: 'A',
    explanation: 'Edward Thorndike\'s Law of Effect formed the historical foundation for operant conditioning: positive outcomes reinforce stimulus-response connections.',
    topicRef: '8.0 Thorndike Laws of Learning'
  },
  {
    id: 32,
    question: "What is 'Premack Principle' (Grandma's Rule) in behavioral motivation?",
    options: [
      { key: 'A', text: 'A high-probability / preferred behavior (e.g., playing video games) can be used to reinforce a low-probability / less-preferred behavior (e.g., finishing math homework)' },
      { key: 'B', text: 'Grandmothers should teach all primary grades' },
      { key: 'C', text: 'Giving dessert before dinner' },
      { key: 'D', text: 'Punishing children with chores' }
    ],
    correctAnswer: 'A',
    explanation: 'The Premack Principle states that access to a desirable activity serves as a powerful contingent reinforcer for completing a less desirable task.',
    topicRef: '8.0 Behavioral Principles'
  },
  {
    id: 33,
    question: "What is 'Personal Fable' in adolescent cognitive egocentrism (David Elkind)?",
    options: [
      { key: 'A', text: 'An adolescent\'s belief that their feelings and experiences are completely unique, and that they are invulnerable to harm or tragedy ("It won\'t happen to me")' },
      { key: 'B', text: 'Writing an autobiography in English class' },
      { key: 'C', text: 'Telling lies to parents' },
      { key: 'D', text: 'A fairy tale read by children' }
    ],
    correctAnswer: 'A',
    explanation: 'Personal fable leads adolescents to feel special, misunderstood, and invincible, often contributing to high-risk behaviors.',
    topicRef: '1.0 Adolescent Egocentrism'
  },
  {
    id: 34,
    question: "What is 'Imaginary Audience' in adolescent cognitive egocentrism (David Elkind)?",
    options: [
      { key: 'A', text: 'An adolescent\'s belief that everyone around them is constantly watching, judging, and scrutinizing their appearance and actions' },
      { key: 'B', text: 'Listening to an empty radio frequency' },
      { key: 'C', text: 'Performing on a theatre stage with no spectators' },
      { key: 'D', text: 'Having an imaginary childhood friend' }
    ],
    correctAnswer: 'A',
    explanation: 'Imaginary audience causes acute self-consciousness in teens, who feel they are permanently on stage under public evaluation.',
    topicRef: '1.0 Adolescent Egocentrism'
  },
  {
    id: 35,
    question: "In Noam Chomsky's Nativist Theory of Language Acquisition, what is the 'Language Acquisition Device' (LAD)?",
    options: [
      { key: 'A', text: 'An innate biological brain mechanism pre-wired with universal grammar principles that enables children to rapidly acquire spoken language' },
      { key: 'B', text: 'A digital audio translator gadget' },
      { key: 'C', text: 'A grammar textbook' },
      { key: 'D', text: 'A microphone used by speech teachers' }
    ],
    correctAnswer: 'A',
    explanation: 'Chomsky argued that human children possess an innate biological LAD that explains how language is acquired so swiftly without explicit formal training.',
    topicRef: '15.0 Language Development'
  },
  {
    id: 36,
    question: "In Erikson's Psychosocial Theory, what is the positive virtue resulting from successful resolution of the crisis 'Trust vs. Mistrust' in Infancy?",
    options: [
      { key: 'A', text: 'Hope' },
      { key: 'B', text: 'Will' },
      { key: 'C', text: 'Purpose' },
      { key: 'D', text: 'Competence' }
    ],
    correctAnswer: 'A',
    explanation: 'Consistent, loving caregiving in infancy instills a fundamental trust in the world, cultivating the enduring psychosocial strength of "Hope."',
    topicRef: '2.0 Erikson Virtues'
  },
  {
    id: 37,
    question: "What is 'Reversibility' in Piaget's Concrete Operational Stage (ages 7 to 11)?",
    options: [
      { key: 'A', text: 'The cognitive understanding that actions and operations can be mentally undone or reversed back to their original state (e.g., 3 + 2 = 5, so 5 - 2 = 3)' },
      { key: 'B', text: 'Walking backwards' },
      { key: 'C', text: 'Rewinding a video' },
      { key: 'D', text: 'Writing in mirror script' }
    ],
    correctAnswer: 'A',
    explanation: 'Reversibility enables concrete operational children to grasp conservation, mathematical inverses, and logical transformations.',
    topicRef: '1.0 Piaget Concrete Operations'
  },
  {
    id: 38,
    question: "In Bronfenbrenner's ecological model, what is the 'Chronosystem'?",
    options: [
      { key: 'A', text: 'The temporal dimension encompassing life transitions, socio-historical events, and the passage of time over a person\'s lifespan (e.g., living through a pandemic or war)' },
      { key: 'B', text: 'A classroom wall clock' },
      { key: 'C', text: 'The child\'s peer circle' },
      { key: 'D', text: 'The school curriculum' }
    ],
    correctAnswer: 'A',
    explanation: 'The Chronosystem captures how socio-historical epochs, technological changes, and timing of family transitions (e.g., divorce) impact development over time.',
    topicRef: '5.0 Bronfenbrenner Bioecological Systems'
  },
  {
    id: 39,
    question: "What did John B. Watson demonstrate in the controversial 'Little Albert' experiment?",
    options: [
      { key: 'A', text: 'Emotional responses (like fear) can be classically conditioned and generalized to similar stimuli (stimulus generalization)' },
      { key: 'B', text: 'Children are born with natural math skills' },
      { key: 'C', text: 'Rats make great childhood pets' },
      { key: 'D', text: 'Fear is 100% hereditary' }
    ],
    correctAnswer: 'A',
    explanation: 'Watson and Rayner paired a white rat with a loud clang, conditioning Little Albert to fear white rats and generalizing the phobia to other furry white objects.',
    topicRef: '8.0 Behavioral Conditioning'
  },
  {
    id: 40,
    question: "In Lawrence Kohlberg's theory, what is 'Stage 3' (Conventional Level) moral reasoning?",
    options: [
      { key: 'A', text: 'Good Boy / Nice Girl Orientation (Interpersonal Concordance, seeking social approval and being liked by significant others)' },
      { key: 'B', text: 'Punishment Avoidance' },
      { key: 'C', text: 'Social Contract' },
      { key: 'D', text: 'Universal Human Rights' }
    ],
    correctAnswer: 'A',
    explanation: 'Stage 3 judges actions by intentions and conformity to peer and family expectations, seeking approval and avoiding interpersonal disapproval.',
    topicRef: '3.0 Kohlberg Conventional Morality'
  },
  {
    id: 41,
    question: "What is 'Seriation' in Piaget's Concrete Operational stage?",
    options: [
      { key: 'A', text: 'The ability to logically arrange objects along a quantitative dimension, such as length, weight, or size (e.g., ordering sticks from shortest to longest)' },
      { key: 'B', text: 'Watching television series' },
      { key: 'C', text: 'Counting numbers aloud' },
      { key: 'D', text: 'Drawing straight lines' }
    ],
    correctAnswer: 'A',
    explanation: 'Seriation reflects operational logic, allowing learners to order elements systematically along a continuum.',
    topicRef: '1.0 Piaget Concrete Operations'
  },
  {
    id: 42,
    question: "In Carol Gilligan's critique of Lawrence Kohlberg's moral development model, what was her primary argument?",
    options: [
      { key: 'A', text: 'Kohlberg\'s model was biased toward a male "Ethic of Justice," neglecting female moral development centered around an "Ethic of Care," empathy, and relationships' },
      { key: 'B', text: 'Kohlberg studied only animals' },
      { key: 'C', text: 'Morality does not exist in children' },
      { key: 'D', text: 'Kohlberg used invalid math equations' }
    ],
    correctAnswer: 'A',
    explanation: 'Carol Gilligan (In a Different Voice) demonstrated that females often frame moral decisions around relationships, care, and responsibility rather than abstract justice.',
    topicRef: '3.0 Gilligan Ethic of Care'
  },
  {
    id: 43,
    question: "In Lev Vygotsky's theory, who can serve as a 'More Knowledgeable Other' (MKO)?",
    options: [
      { key: 'A', text: 'Anyone who has a better understanding or a higher ability level than the learner for a specific task (a teacher, peer, parent, coach, or even software)' },
      { key: 'B', text: 'Only university professors with doctorates' },
      { key: 'C', text: 'Only biological parents' },
      { key: 'D', text: 'Only government officials' }
    ],
    correctAnswer: 'A',
    explanation: 'An MKO is anyone with superior competence in a specific task, including more advanced classmates during peer tutoring.',
    topicRef: '9.0 Vygotsky Socio-Cultural Theory'
  },
  {
    id: 44,
    question: "What is 'Epigenetics' in modern developmental psychology?",
    options: [
      { key: 'A', text: 'The study of how environmental influences and life experiences (nutrition, stress, toxins) alter gene expression without changing the underlying DNA sequence' },
      { key: 'B', text: 'A mathematical formula for IQ' },
      { key: 'C', text: 'A physical posture exercise' },
      { key: 'D', text: 'An ancient writing system' }
    ],
    correctAnswer: 'A',
    explanation: 'Epigenetics demonstrates that Nature (genes) and Nurture (environment) dynamically interact: environmental factors can turn gene expressions on or off.',
    topicRef: '14.0 Nature vs Nurture & Genetics'
  },
  {
    id: 45,
    question: "What is 'Chunking' in working memory strategies?",
    options: [
      { key: 'A', text: 'Grouping individual pieces of information into meaningful, larger cognitive units to overcome working memory capacity limitations (e.g., 0917-123-4567)' },
      { key: 'B', text: 'Eating heavy snacks while studying' },
      { key: 'C', text: 'Throwing away textbook pages' },
      { key: 'D', text: 'Memorizing dictionary definitions backward' }
    ],
    correctAnswer: 'A',
    explanation: 'Chunking expands short-term memory capacity by consolidating isolated digits or words into structured, recognizable semantic packages.',
    topicRef: '10.0 Memory & Cognitive Strategies'
  },
  {
    id: 46,
    question: "What is 'Transductive Reasoning' in Piaget's Preoperational stage?",
    options: [
      { key: 'A', text: 'Faulty logic that connects two particular events that occur close in time, assuming one caused the other (e.g., "I haven\'t taken my afternoon nap, so it is not afternoon yet")' },
      { key: 'B', text: 'Formal algebraic deduction' },
      { key: 'C', text: 'Inductive scientific reasoning' },
      { key: 'D', text: 'Mathematical calculus' }
    ],
    correctAnswer: 'A',
    explanation: 'Transductive thinking reasons from particular to particular rather than from general to specific (deduction) or specific to general (induction).',
    topicRef: '1.0 Piaget Preoperational Stage'
  },
  {
    id: 47,
    question: "In Erikson's Psychosocial Theory, what is the core crisis of Young Adulthood (ages 18 to 40)?",
    options: [
      { key: 'A', text: 'Intimacy vs. Isolation' },
      { key: 'B', text: 'Generativity vs. Stagnation' },
      { key: 'C', text: 'Industry vs. Inferiority' },
      { key: 'D', text: 'Initiative vs. Guilt' }
    ],
    correctAnswer: 'A',
    explanation: 'Young adults grapple with forming deep, committed, reciprocal loving relationships (Intimacy); failure leads to emotional isolation and loneliness.',
    topicRef: '2.0 Erikson Psychosocial Stages'
  },
  {
    id: 48,
    question: "What is 'Decentration' in Piaget's Concrete Operational stage?",
    options: [
      { key: 'A', text: 'The ability to pay attention to multiple aspects of a problem or object simultaneously (e.g., considering both height and width when assessing volume)' },
      { key: 'B', text: 'Moving to the corner of a room' },
      { key: 'C', text: 'Losing one\'s balance' },
      { key: 'D', text: 'Daydreaming' }
    ],
    correctAnswer: 'A',
    explanation: 'Decentration is the cognitive milestone where a child overcomes tunnel-vision centration and coordinates multiple dimensions of reality.',
    topicRef: '1.0 Piaget Concrete Operations'
  },
  {
    id: 49,
    question: "In Sigmund Freud's Structural Model of Personality, what represents the moral conscience and internalized societal ideals?",
    options: [
      { key: 'A', text: 'Superego' },
      { key: 'B', text: 'Id' },
      { key: 'C', text: 'Ego' },
      { key: 'D', text: 'Libido' }
    ],
    correctAnswer: 'A',
    explanation: 'The Superego operates as the moral compass, internalizing parental and societal values to judge righteousness and induce guilt.',
    topicRef: '7.0 Freud Structural Personality Model'
  },
  {
    id: 50,
    question: "Why is a thorough understanding of Child and Adolescent Development vital for classroom teachers?",
    options: [
      { key: 'A', text: 'It allows teachers to design developmentally appropriate instruction, anticipate behavioral challenges, scaffold learning effectively, and support holistic well-being' },
      { key: 'B', text: 'To predict the future lottery numbers of students' },
      { key: 'C', text: 'To assign identical punishments to everyone' },
      { key: 'D', text: 'To force all students into a single mold' }
    ],
    correctAnswer: 'A',
    explanation: 'Developmental science provides the pedagogical foundation for responsive teaching, authentic empathy, and effective learning design.',
    topicRef: '1.0 Pedagogical Implications of Development'
  }
];
