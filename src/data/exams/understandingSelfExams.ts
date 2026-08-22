import { ExamQuestion } from '../../types';

export const UNDERSTANDING_SELF_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Which classical Greek philosopher declared 'Know Thyself' (Gnothi Seauton) and asserted that 'The unexamined life is not worth living'?",
    options: [
      { key: 'A', text: 'Socrates' },
      { key: 'B', text: 'Plato' },
      { key: 'C', text: 'Aristotle' },
      { key: 'D', text: 'Epicurus' }
    ],
    correctAnswer: 'A',
    explanation: 'Socrates centered philosophy on self-knowledge, claiming true wisdom begins with confronting one\'s ignorance and examining one\'s moral soul.',
    topicRef: '1.0 Philosophical Perspectives: Socrates'
  },
  {
    id: 2,
    question: "According to Plato, what are the three parts of the Tripartite Soul (Psyche)?",
    options: [
      { key: 'A', text: 'Rational (Reason/Mind), Spirited (Emotions/Will/Courage), and Appetitive (Bodily Desires/Hunger/Lust)' },
      { key: 'B', text: 'Id, Ego, and Superego' },
      { key: 'C', text: 'Physical, Chemical, and Biological' },
      { key: 'D', text: 'Past, Present, and Future' }
    ],
    correctAnswer: 'A',
    explanation: 'Plato\'s Republic illustrates the Tripartite Soul using the Charioteer metaphor (Reason guiding the noble Spirited horse and the unruly Appetitive horse).',
    topicRef: '1.0 Philosophical Perspectives: Plato'
  },
  {
    id: 3,
    question: "Who coined the famous philosophical proposition 'Cogito, ergo sum' (I think, therefore I am) establishing the mind as the fundamental foundation of self-existence?",
    options: [
      { key: 'A', text: 'René Descartes' },
      { key: 'B', text: 'John Locke' },
      { key: 'C', text: 'David Hume' },
      { key: 'D', text: 'Immanuel Kant' }
    ],
    correctAnswer: 'A',
    explanation: 'Descartes established Cartesian dualism through radical doubt: even if all sensory data is deceived, the act of doubting proves the existence of a thinking mind (res cogitans).',
    topicRef: '1.0 Philosophical Perspectives: Descartes'
  },
  {
    id: 4,
    question: "Which British empiricist philosopher described the human mind at birth as a 'Tabula Rasa' (Blank Slate), asserting that all identity and knowledge derive from sensory experience?",
    options: [
      { key: 'A', text: 'John Locke' },
      { key: 'B', text: 'David Hume' },
      { key: 'C', text: 'Thomas Hobbes' },
      { key: 'D', text: 'George Berkeley' }
    ],
    correctAnswer: 'A',
    explanation: 'John Locke argued that humans are born without innate ideas; identity is constructed through accumulated empirical sensation and conscious memory reflection.',
    topicRef: '1.0 Philosophical Perspectives: John Locke'
  },
  {
    id: 5,
    question: "Which philosopher radicalized empiricism by claiming that there is 'No Self' (Bundle Theory), asserting that the self is merely a collection of fleeting, fluctuating perceptions?",
    options: [
      { key: 'A', text: 'David Hume' },
      { key: 'B', text: 'Immanuel Kant' },
      { key: 'C', text: 'René Descartes' },
      { key: 'D', text: 'Gilbert Ryle' }
    ],
    correctAnswer: 'A',
    explanation: 'David Hume argued that introspection reveals only passing thoughts, emotions, and impressions—never an unchanging, unified continuous "self".',
    topicRef: '1.0 Philosophical Perspectives: David Hume'
  },
  {
    id: 6,
    question: "Who synthesized Rationalism and Empiricism by proposing that the self is an actively synthesizing mind that organizes raw sensory data through innate categories of Space and Time?",
    options: [
      { key: 'A', text: 'Immanuel Kant' },
      { key: 'B', text: 'John Locke' },
      { key: 'C', text: 'Paul Churchland' },
      { key: 'D', text: 'Maurice Merleau-Ponty' }
    ],
    correctAnswer: 'A',
    explanation: 'Kant proposed the "Transcendental Unity of Apperception," where the conscious self actively structures, synthesizes, and makes coherent sense of sensory impressions.',
    topicRef: '1.0 Philosophical Perspectives: Immanuel Kant'
  },
  {
    id: 7,
    question: "Which behaviorist philosopher rejected Cartesian dualism as the 'Ghost in the Machine' category mistake, claiming that 'the self is manifested in observable human behavior'?",
    options: [
      { key: 'A', text: 'Gilbert Ryle' },
      { key: 'B', text: 'Paul Churchland' },
      { key: 'C', text: 'Sigmund Freud' },
      { key: 'D', text: 'William James' }
    ],
    correctAnswer: 'A',
    explanation: 'Gilbert Ryle argued that the mind is not a mysterious phantom inside a body, but the physical disposition and patterned behavior of the organism.',
    topicRef: '1.0 Philosophical Perspectives: Gilbert Ryle'
  },
  {
    id: 8,
    question: "Which neurophilosopher espoused 'Eliminative Materialism', asserting that mental states (beliefs, desires, soul) will be replaced by neurobiological brain science ('The brain is the self')?",
    options: [
      { key: 'A', text: 'Paul Churchland' },
      { key: 'B', text: 'Maurice Merleau-Ponty' },
      { key: 'C', text: 'David Hume' },
      { key: 'D', text: 'Socrates' }
    ],
    correctAnswer: 'A',
    explanation: 'Paul and Patricia Churchland argue that folk psychology will be superseded by advanced neuroscience mapping neural circuitry.',
    topicRef: '1.0 Philosophical Perspectives: Churchland'
  },
  {
    id: 9,
    question: "Which phenomenologist argued that the self is an inextricably 'Embodied Subjectivity'—where the physical body and conscious mind are an indivisible unified entity experiencing the world?",
    options: [
      { key: 'A', text: 'Maurice Merleau-Ponty' },
      { key: 'B', text: 'René Descartes' },
      { key: 'C', text: 'John Locke' },
      { key: 'D', text: 'Gilbert Ryle' }
    ],
    correctAnswer: 'A',
    explanation: 'Merleau-Ponty\'s Phenomenology of Perception emphasizes that we do not merely "have" a body, but we "are" our lived body perceiving reality.',
    topicRef: '1.0 Philosophical Perspectives: Merleau-Ponty'
  },
  {
    id: 10,
    question: "In sociological perspectives, what is Charles Horton Cooley\'s 'Looking-Glass Self' concept?",
    options: [
      { key: 'A', text: 'Our self-concept is constructed through our perception of how others see, judge, and evaluate us in social interaction' },
      { key: 'B', text: 'Looking into a physical glass mirror every morning' },
      { key: 'C', text: 'Buying fashionable sunglasses' },
      { key: 'D', text: 'A camera lens technology' }
    ],
    correctAnswer: 'A',
    explanation: 'Cooley\'s Looking-Glass Self consists of three elements: imagining our appearance to others, imagining their judgment, and developing self-feelings (pride/mortification).',
    topicRef: '1.0 Sociological Perspectives: Cooley'
  },
  {
    id: 11,
    question: "In George Herbert Mead\'s Theory of the Social Self, what are the 'I' and the 'Me'?",
    options: [
      { key: 'A', text: 'The "I" is the spontaneous, creative, unsocialized, impulsive actor; the "Me" is the socialized, reflective self adopting the norms of the "Generalized Other"' },
      { key: 'B', text: 'The "I" is a child; the "Me" is an adult' },
      { key: 'C', text: 'They are identical grammatical terms' },
      { key: 'D', text: 'The "I" is the physical body; the "Me" is the clothing' }
    ],
    correctAnswer: 'A',
    explanation: 'Mead showed how social interaction balances the subjective agent ("I") with the internal internalization of societal expectations ("Me").',
    topicRef: '1.0 Sociological Perspectives: Mead'
  },
  {
    id: 12,
    question: "What are the three developmental stages of self-formation according to George Herbert Mead?",
    options: [
      { key: 'A', text: 'Preparatory/Imitation Stage (0-2 yrs), Play Stage (role-taking of significant others), and Game Stage (internalizing the Generalized Other and complex rules)' },
      { key: 'B', text: 'Infancy, Childhood, and Adulthood' },
      { key: 'C', text: 'Oral, Anal, and Phallic' },
      { key: 'D', text: 'Sensory, Motor, and Cognitive' }
    ],
    correctAnswer: 'A',
    explanation: 'Mead\'s stages illustrate how children progress from mindless imitation to adopting specific roles (play) to grasping collective social rules (games).',
    topicRef: '1.0 Sociological Perspectives: Mead\'s Stages'
  },
  {
    id: 13,
    question: "In Sigmund Freud\'s Psychoanalytic Theory of Personality, what is the 'Id' driven by?",
    options: [
      { key: 'A', text: 'The Pleasure Principle—seeking immediate gratification of primal biological drives, instincts, and urges without regard for reality or morality' },
      { key: 'B', text: 'The Reality Principle' },
      { key: 'C', text: 'Moral perfection' },
      { key: 'D', text: 'Logical reasoning' }
    ],
    correctAnswer: 'A',
    explanation: 'The Id is the primitive, unconscious component operating purely on the Pleasure Principle.',
    topicRef: '2.0 Psychological Perspectives: Freud'
  },
  {
    id: 14,
    question: "In Freud\'s personality structure, which component operates on the 'Reality Principle', mediating between instinctual desires and societal constraints?",
    options: [
      { key: 'A', text: 'Ego' },
      { key: 'B', text: 'Id' },
      { key: 'C', text: 'Superego' },
      { key: 'D', text: 'Subconscious' }
    ],
    correctAnswer: 'A',
    explanation: 'The Ego is the rational executive mediator employing defense mechanisms to satisfy the Id\'s urges in realistic, socially acceptable ways.',
    topicRef: '2.0 Psychological Perspectives: Freud'
  },
  {
    id: 15,
    question: "In Freud\'s model, what is the 'Superego'?",
    options: [
      { key: 'A', text: 'The internalized moral conscience and ego-ideal representing societal ethics, parental values, and striving for perfection (producing guilt)' },
      { key: 'B', text: 'A superhero power' },
      { key: 'C', text: 'The physical nervous system' },
      { key: 'D', text: 'The primitive hunger drive' }
    ],
    correctAnswer: 'A',
    explanation: 'The Superego internalizes cultural morals and ethical ideals, punishing wrongdoing with guilt and rewarding moral behavior with pride.',
    topicRef: '2.0 Psychological Perspectives: Freud'
  },
  {
    id: 16,
    question: "What is Carl Rogers\' Humanistic Concept of 'Congruence' in self-theory?",
    options: [
      { key: 'A', text: 'A high degree of alignment and harmony between one\'s Real Self (who one actually is) and Ideal Self (who one aspires to be)' },
      { key: 'B', text: 'Having multiple distinct personalities' },
      { key: 'C', text: 'Total detachment from reality' },
      { key: 'D', text: 'Obeying orders without question' }
    ],
    correctAnswer: 'A',
    explanation: 'Carl Rogers posited that psychological well-being and self-actualization occur when the Real Self matches the Ideal Self (congruence).',
    topicRef: '2.0 Humanistic Psychology: Carl Rogers'
  },
  {
    id: 17,
    question: "What is Albert Bandura\'s concept of 'Self-Efficacy'?",
    options: [
      { key: 'A', text: 'An individual\'s belief in their own capability to organize and execute the actions required to successfully accomplish specific tasks and goals' },
      { key: 'B', text: 'How much physical strength a person possesses' },
      { key: 'C', text: 'The amount of money in one\'s bank account' },
      { key: 'D', text: 'Selfish pride and arrogance' }
    ],
    correctAnswer: 'A',
    explanation: 'Self-efficacy (Bandura) determines how people think, motivate themselves, persevere through adversity, and achieve academic/personal success.',
    topicRef: '2.0 Psychological Perspectives: Bandura'
  },
  {
    id: 18,
    question: "What are the four primary sources of Self-Efficacy according to Albert Bandura?",
    options: [
      { key: 'A', text: 'Mastery Experiences (past successes), Vicarious Experiences (modeling others), Social/Verbal Persuasion, and Physiological/Emotional States' },
      { key: 'B', text: 'Food, Water, Sleep, and Shelter' },
      { key: 'C', text: 'Age, Race, Gender, and Wealth' },
      { key: 'D', text: 'Luck, Astrology, Fortune, and Fate' }
    ],
    correctAnswer: 'A',
    explanation: 'Bandura identified mastery performance as the strongest source, reinforced by seeing relatable models succeed and receiving encouraging feedback.',
    topicRef: '2.0 Sources of Self-Efficacy'
  },
  {
    id: 19,
    question: "What is William James\' distinction between the 'I' (Self as Knower) and the 'Me' (Self as Known)?",
    options: [
      { key: 'A', text: 'The "I" is the pure subjective stream of conscious awareness; the "Me" is the empirical self comprising the Material Self, Social Self, and Spiritual Self' },
      { key: 'B', text: 'The "I" is a teacher; the "Me" is a student' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'The "Me" is only the physical body' }
    ],
    correctAnswer: 'A',
    explanation: 'William James (Father of American Psychology) divided the self into the subjective thinker ("I") and the objective aggregate of attributes ("Me").',
    topicRef: '2.0 William James Self Theory'
  },
  {
    id: 20,
    question: "What is 'Metacognition' (John Flavell)?",
    options: [
      { key: 'A', text: 'Thinking about thinking; higher-order awareness, monitoring, and regulation of one\'s own cognitive processes and learning strategies' },
      { key: 'B', text: 'A medical brain surgery' },
      { key: 'C', text: 'Reading a book upside down' },
      { key: 'D', text: 'Daydreaming during class' }
    ],
    correctAnswer: 'A',
    explanation: 'Metacognition involves metacognitive knowledge (knowing what you know) and metacognitive regulation (planning, monitoring, and evaluating learning).',
    topicRef: '3.0 Metacognition & Study Skills'
  },
  {
    id: 21,
    question: "What does the 'PQ4R' study method stand for in metacognitive learning?",
    options: [
      { key: 'A', text: 'Preview, Question, Read, Reflect, Recite, and Review' },
      { key: 'B', text: 'Practice, Quiz, Repeat, Remember, Rest, and Recover' },
      { key: 'C', text: 'Prepare, Query, Research, Record, Report, and React' },
      { key: 'D', text: 'Print, Quote, Rephrase, Reorganize, Rewrite, and Resubmit' }
    ],
    correctAnswer: 'A',
    explanation: 'PQ4R (developed by Thomas and Robinson) is an evidence-based active reading and deep comprehension learning system.',
    topicRef: '3.0 PQ4R Study Method'
  },
  {
    id: 22,
    question: "What is Carol Dweck\'s 'Growth Mindset' compared to a 'Fixed Mindset'?",
    options: [
      { key: 'A', text: 'Growth Mindset believes intelligence and abilities can be developed through effort, strategies, and learning from failure; Fixed Mindset views talent as innate and unchangeable' },
      { key: 'B', text: 'Growth Mindset means eating healthy food; Fixed Mindset is not exercising' },
      { key: 'C', text: 'They are personality disorders' },
      { key: 'D', text: 'Fixed Mindset is always superior for test scores' }
    ],
    correctAnswer: 'A',
    explanation: 'Carol Dweck showed that embracing challenges and seeing effort as the path to mastery (Growth Mindset) unlocks extraordinary achievement.',
    topicRef: '3.0 Growth Mindset'
  },
  {
    id: 23,
    question: "What is Edwin Locke and Gary Latham\'s 'Goal-Setting Theory' for maximizing human performance?",
    options: [
      { key: 'A', text: 'Specific, challenging, and clear goals accompanied by actionable feedback lead to significantly higher performance than vague "do your best" goals' },
      { key: 'B', text: 'Setting no goals prevents disappointment' },
      { key: 'C', text: 'Only setting easy goals guarantees success' },
      { key: 'D', text: 'Letting others decide your goals for you' }
    ],
    correctAnswer: 'A',
    explanation: 'Locke & Latham demonstrated that goal clarity, challenge, commitment, feedback, and task complexity drive peak performance.',
    topicRef: '4.0 Goal-Setting Theory'
  },
  {
    id: 24,
    question: "In the SMART goals framework, what does the acronym 'SMART' stand for?",
    options: [
      { key: 'A', text: 'Specific, Measurable, Attainable/Achievable, Relevant/Realistic, and Time-bound' },
      { key: 'B', text: 'Simple, Meaningful, Artistic, Rapid, and Tough' },
      { key: 'C', text: 'Systematic, Methodical, Academic, Rational, and Thorough' },
      { key: 'D', text: 'Strong, Mighty, Active, Resilient, and Talented' }
    ],
    correctAnswer: 'A',
    explanation: 'SMART criteria provide a structured template for designing actionable, concrete, and achievable objectives.',
    topicRef: '4.0 SMART Goals'
  },
  {
    id: 25,
    question: "What is Hans Selye\'s 'General Adaptation Syndrome' (GAS) model of stress?",
    options: [
      { key: 'A', text: 'The body\'s physiological response to chronic stress progressing through three stages: Alarm Reaction, Resistance, and Exhaustion' },
      { key: 'B', text: 'A psychiatric brain surgery' },
      { key: 'C', text: 'A fitness exercise program' },
      { key: 'D', text: 'A sleep cycle pattern' }
    ],
    correctAnswer: 'A',
    explanation: 'Hans Selye (Father of Stress Research) showed that prolonged unmanaged stressors deplete physiological resources, leading from alarm to bodily exhaustion.',
    topicRef: '4.0 Stress: General Adaptation Syndrome'
  },
  {
    id: 26,
    question: "What is the distinction between 'Eustress' and 'Distress' in stress psychology?",
    options: [
      { key: 'A', text: 'Eustress is positive, motivating, and performance-enhancing stress; Distress is negative, overwhelming, debilitating, and harmful stress' },
      { key: 'B', text: 'Eustress is physical; distress is emotional' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'Distress occurs only in children' }
    ],
    correctAnswer: 'A',
    explanation: 'Eustress stimulates growth, focus, and excitement (e.g., preparing for graduation), whereas distress triggers chronic anxiety and burnout.',
    topicRef: '4.0 Eustress vs Distress'
  },
  {
    id: 27,
    question: "According to Richard Lazarus and Susan Folkman, what are the two main types of coping strategies for stress?",
    options: [
      { key: 'A', text: 'Problem-Focused Coping (taking direct action to alter the stressor) and Emotion-Focused Coping (regulating emotional distress)' },
      { key: 'B', text: 'Screaming and Crying' },
      { key: 'C', text: 'Eating and Sleeping' },
      { key: 'D', text: 'Exercising and Running' }
    ],
    correctAnswer: 'A',
    explanation: 'Problem-focused coping addresses the root cause of the problem; emotion-focused coping manages feelings via mindfulness, reframing, or social support.',
    topicRef: '4.0 Lazarus Coping Mechanisms'
  },
  {
    id: 28,
    question: "What is the 'Digital Self' in 21st-century cyberpsychology (Russell Belk)?",
    options: [
      { key: 'A', text: 'The persona, identity, and extended self curated, projected, and expressed across online platforms, social media, and digital avatars' },
      { key: 'B', text: 'A mechanical robot' },
      { key: 'C', text: 'A computer motherboard' },
      { key: 'D', text: 'An electric battery' }
    ],
    correctAnswer: 'A',
    explanation: 'The digital self reflects identity construction in cyberspace, encompassing self-presentation, digital footprints, and online disinhibition effects.',
    topicRef: '2.0 The Digital Self'
  },
  {
    id: 29,
    question: "What is John Suler\'s 'Online Disinhibition Effect'?",
    options: [
      { key: 'A', text: 'The psychological phenomenon where people feel looser, less restrained, and more willing to open up (benign) or act aggressively/toxically (toxic) online due to anonymity and invisibility' },
      { key: 'B', text: 'A fast internet connection speed' },
      { key: 'C', text: 'A computer virus attack' },
      { key: 'D', text: 'Forgetting an account password' }
    ],
    correctAnswer: 'A',
    explanation: 'Anonymity, asynchronicity, and physical distance reduce inhibitions online, leading to either heightened self-disclosure or toxic flaming.',
    topicRef: '2.0 Online Disinhibition Effect'
  },
  {
    id: 30,
    question: "What is 'Self-Compassion' (Kristin Neff) and its three core components?",
    options: [
      { key: 'A', text: 'Self-Kindness vs Self-Judgment, Common Humanity vs Isolation, and Mindfulness vs Over-Identification' },
      { key: 'B', text: 'Pride, Vanity, and Narcissism' },
      { key: 'C', text: 'Money, Status, and Fame' },
      { key: 'D', text: 'Diet, Exercise, and Sleep' }
    ],
    correctAnswer: 'A',
    explanation: 'Kristin Neff defines self-compassion as treating oneself with warmth during hardship, recognizing suffering as part of the shared human condition, and holding emotions in mindful balance.',
    topicRef: '4.0 Self-Compassion'
  },
  {
    id: 31,
    question: "In anthropology, what is Clifford Geertz\'s view of the human self in 'The Interpretation of Cultures'?",
    options: [
      { key: 'A', text: 'Humans are unfinished animals who complete themselves through culture—a web of shared symbols, meanings, and customs' },
      { key: 'B', text: 'Humans are purely biological machines with no culture' },
      { key: 'C', text: 'Culture is a disease' },
      { key: 'D', text: 'All humans are identical worldwide' }
    ],
    correctAnswer: 'A',
    explanation: 'Geertz argued that without the cultural scaffolding of symbols and traditions, human behavior would be virtually unguided and chaotic.',
    topicRef: '1.0 Anthropological Perspectives: Geertz'
  },
  {
    id: 32,
    question: "What is 'Egocentrism' compared to 'Sociocentrism' in cultural views of the self (Murray Wax)?",
    options: [
      { key: 'A', text: 'Egocentric view (Western/Individualistic) sees the self as autonomous, self-contained, and independent; Sociocentric view (Eastern/Collectivistic) sees the self as relational, interdependent, and rooted in community' },
      { key: 'B', text: 'Egocentrism is good; sociocentrism is evil' },
      { key: 'C', text: 'They are psychiatric disorders' },
      { key: 'D', text: 'Sociocentrism means living alone in the wilderness' }
    ],
    correctAnswer: 'A',
    explanation: 'Western cultures generally cultivate independent construals of the self, whereas Asian/collectivistic cultures foster interdependent communal bonds.',
    topicRef: '1.0 Cultural Conceptions: Individualism vs Collectivism'
  },
  {
    id: 33,
    question: "In Filipino psychology (Sikolohiyang Pilipino, Virgilio Enriquez), what is 'Kapwa'?",
    options: [
      { key: 'A', text: 'The core concept of Filipino personhood meaning "shared identity" or "the unity of self and others" (Ibang Tao vs Hindi Ibang Tao)' },
      { key: 'B', text: 'A financial loan system' },
      { key: 'C', text: 'A traditional dance weapon' },
      { key: 'D', text: 'A regional language dialect' }
    ],
    correctAnswer: 'A',
    explanation: 'Virgilio Enriquez established Kapwa as the cornerstone of Sikolohiyang Pilipino, recognizing that the Filipino self is inherently communal and relational.',
    topicRef: '1.0 Sikolohiyang Pilipino: Kapwa'
  },
  {
    id: 34,
    question: "In Sikolohiyang Pilipino, what is 'Pakikiramdam'?",
    options: [
      { key: 'A', text: 'Shared inner perception; the pivotal interpersonal value of active sensitivity, empathy, and intuitive reading of non-verbal cues before acting' },
      { key: 'B', text: 'Having a high fever' },
      { key: 'C', text: 'Speaking loudly in public' },
      { key: 'D', text: 'Ignoring someone\'s feelings' }
    ],
    correctAnswer: 'A',
    explanation: 'Pakikiramdam functions as the emotional heuristic radar that guides culturally harmonious social navigation in Filipino society.',
    topicRef: '1.0 Sikolohiyang Pilipino: Pakikiramdam'
  },
  {
    id: 35,
    question: "What is 'Body Image' in the physical self?",
    options: [
      { key: 'A', text: 'A person\'s subjective mental perception, thoughts, beliefs, and emotional feelings about their physical appearance, shape, and attractiveness' },
      { key: 'B', text: 'A medical X-ray scan' },
      { key: 'C', text: 'A photograph taken with a phone' },
      { key: 'D', text: 'Height measured in centimeters' }
    ],
    correctAnswer: 'A',
    explanation: 'Body image is an internal psychological construct deeply influenced by media beauty standards, culture, self-esteem, and peer comparisons.',
    topicRef: '2.0 The Physical Self: Body Image'
  },
  {
    id: 36,
    question: "What is 'Self-Esteem' compared to 'Self-Concept'?",
    options: [
      { key: 'A', text: 'Self-concept is the descriptive cognitive knowledge one has about oneself; Self-esteem is the emotional evaluative rating of one\'s self-worth' },
      { key: 'B', text: 'They are exact synonyms' },
      { key: 'C', text: 'Self-esteem is always negative' },
      { key: 'D', text: 'Self-concept applies only to adults' }
    ],
    correctAnswer: 'A',
    explanation: 'Self-concept answers "Who am I?", while self-esteem answers "How do I feel about who I am?".',
    topicRef: '2.0 Self-Concept vs Self-Esteem'
  },
  {
    id: 37,
    question: "In Erik Erikson\'s Psychosocial Theory, what is the central crisis of Adolescence (ages 12-18)?",
    options: [
      { key: 'A', text: 'Identity vs Role Confusion' },
      { key: 'B', text: 'Trust vs Mistrust' },
      { key: 'C', text: 'Intimacy vs Isolation' },
      { key: 'D', text: 'Generativity vs Stagnation' }
    ],
    correctAnswer: 'A',
    explanation: 'Adolescents explore personal values, career aspirations, and social roles to forge a unified sense of personal identity.',
    topicRef: '2.0 Erikson: Identity vs Role Confusion'
  },
  {
    id: 38,
    question: "In Erik Erikson\'s stages, what is the central psychosocial crisis of Young Adulthood (ages 18-40)?",
    options: [
      { key: 'A', text: 'Intimacy vs Isolation' },
      { key: 'B', text: 'Autonomy vs Shame and Doubt' },
      { key: 'C', text: 'Industry vs Inferiority' },
      { key: 'D', text: 'Integrity vs Despair' }
    ],
    correctAnswer: 'A',
    explanation: 'Young adults focus on forming committed, loving, vulnerable, and deep romantic/platonic relationships versus suffering isolation.',
    topicRef: '2.0 Erikson: Intimacy vs Isolation'
  },
  {
    id: 39,
    question: "What is James Marcia\'s 'Identity Status Theory' (Four Identity Statuses)?",
    options: [
      { key: 'A', text: 'Identity Diffusion, Identity Foreclosure, Identity Moratorium, and Identity Achievement (based on exploration of crisis and commitment)' },
      { key: 'B', text: 'Physical, Mental, Emotional, and Spiritual' },
      { key: 'C', text: 'Alpha, Beta, Gamma, and Delta' },
      { key: 'D', text: 'Child, Teen, Adult, and Senior' }
    ],
    correctAnswer: 'A',
    explanation: 'Marcia categorized identity resolution based on whether an adolescent has undergone active exploration and made firm personal commitments.',
    topicRef: '2.0 James Marcia Identity Statuses'
  },
  {
    id: 40,
    question: "What is 'Identity Foreclosure' in James Marcia\'s framework?",
    options: [
      { key: 'A', text: 'Making a firm commitment to an identity, religion, or career handed down by parents without having independently explored alternatives' },
      { key: 'B', text: 'Having no commitments and no desire to explore' },
      { key: 'C', text: 'Actively exploring options in a state of crisis' },
      { key: 'D', text: 'Losing one\'s house to a bank' }
    ],
    correctAnswer: 'A',
    explanation: 'Identity Foreclosure represents high commitment without prior independent exploration (e.g., "I will be a lawyer because my father said so").',
    topicRef: '2.0 Marcia: Identity Foreclosure'
  },
  {
    id: 41,
    question: "What is 'Identity Moratorium' in Marcia\'s model?",
    options: [
      { key: 'A', text: 'Actively exploring various identities, careers, and beliefs in the midst of a crisis, but without having made final commitments yet' },
      { key: 'B', text: 'A total lack of interest in personal identity' },
      { key: 'C', text: 'Blindly copying friends' },
      { key: 'D', text: 'A permanent retirement status' }
    ],
    correctAnswer: 'A',
    explanation: 'Moratorium is a healthy active exploratory phase (college exploration) where commitments remain fluid.',
    topicRef: '2.0 Marcia: Identity Moratorium'
  },
  {
    id: 42,
    question: "What is 'Emotional Intelligence' (EQ, Daniel Goleman) and its five core domains?",
    options: [
      { key: 'A', text: 'Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills' },
      { key: 'B', text: 'Reading, Writing, Math, Science, and History' },
      { key: 'C', text: 'Anger, Fear, Sadness, Joy, and Disgust' },
      { key: 'D', text: 'Sight, Hearing, Smell, Taste, and Touch' }
    ],
    correctAnswer: 'A',
    explanation: 'Daniel Goleman demonstrated that emotional intelligence (EQ) is often a greater predictor of career success and life satisfaction than pure academic IQ.',
    topicRef: '2.0 Emotional Intelligence: Goleman'
  },
  {
    id: 43,
    question: "What is Viktor Frankl\'s 'Logotherapy' (Man\'s Search for Meaning)?",
    options: [
      { key: 'A', text: 'A humanistic psychotherapy based on the premise that the primary human motivational force is the "Will to Meaning"—finding purpose even in unavoidable suffering' },
      { key: 'B', text: 'Treating illnesses with computerized logos' },
      { key: 'C', text: 'Taking herbal medicine' },
      { key: 'D', text: 'A financial investment scheme' }
    ],
    correctAnswer: 'A',
    explanation: 'Surviving Auschwitz, Viktor Frankl taught that humans can endure any hardship if they discover deep existential purpose and meaning.',
    topicRef: '1.0 Existential Perspectives: Viktor Frankl'
  },
  {
    id: 44,
    question: "What is 'Self-Actualization' in Abraham Maslow\'s Hierarchy of Needs?",
    options: [
      { key: 'A', text: 'The highest pinnacle of psychological development where an individual realizes and fulfills their full personal potential, talents, and creative capabilities' },
      { key: 'B', text: 'Satisfying physical hunger and thirst' },
      { key: 'C', text: 'Buying an expensive luxury car' },
      { key: 'D', text: 'Winning a popularity contest' }
    ],
    correctAnswer: 'A',
    explanation: 'Maslow placed Self-Actualization at the summit of his hierarchy, representing peak human growth, truth, beauty, and purpose.',
    topicRef: '2.0 Maslow\'s Hierarchy of Needs'
  },
  {
    id: 45,
    question: "What is 'Mindfulness' in modern mental health and self-care?",
    options: [
      { key: 'A', text: 'The practice of maintaining moment-by-moment non-judgmental awareness of our thoughts, feelings, bodily sensations, and surrounding environment' },
      { key: 'B', text: 'Thinking about 100 things simultaneously' },
      { key: 'C', text: 'Memorizing thousands of textbook pages' },
      { key: 'D', text: 'Sleeping for 14 hours straight' }
    ],
    correctAnswer: 'A',
    explanation: 'Mindfulness (Jon Kabat-Zinn) grounds attention in the present moment with openness and acceptance, drastically reducing cortisol and anxiety.',
    topicRef: '4.0 Mindfulness & Mental Health'
  },
  {
    id: 46,
    question: "In biological psychology, which brain structure is known as the emotional alarm bell responsible for processing fear and the 'fight-or-flight' response?",
    options: [
      { key: 'A', text: 'Amygdala' },
      { key: 'B', text: 'Hippocampus' },
      { key: 'C', text: 'Prefrontal Cortex' },
      { key: 'D', text: 'Cerebellum' }
    ],
    correctAnswer: 'A',
    explanation: 'The Amygdala detects threats and instantly triggers the sympathetic nervous system and adrenal glands for fight-or-flight survival.',
    topicRef: '2.0 Biological Self: Neuroanatomy'
  },
  {
    id: 47,
    question: "Which brain region is responsible for executive functions, impulse control, long-term planning, moral judgment, and rational decision-making?",
    options: [
      { key: 'A', text: 'Prefrontal Cortex' },
      { key: 'B', text: 'Occipital Lobe' },
      { key: 'C', text: 'Medulla Oblongata' },
      { key: 'D', text: 'Pons' }
    ],
    correctAnswer: 'A',
    explanation: 'The Prefrontal Cortex matures into early adulthood, governing deliberate self-regulation, reasoning, and impulse inhibition.',
    topicRef: '2.0 Biological Self: Prefrontal Cortex'
  },
  {
    id: 48,
    question: "What is 'Imposter Syndrome' in self-perception psychology?",
    options: [
      { key: 'A', text: 'A psychological pattern where high-achieving individuals doubt their accomplishments and suffer a persistent internalized fear of being exposed as a fraud' },
      { key: 'B', text: 'A criminal pretending to be a police officer' },
      { key: 'C', text: 'An actor wearing a disguise' },
      { key: 'D', text: 'A computer software glitch' }
    ],
    correctAnswer: 'A',
    explanation: 'Imposter syndrome leads capable individuals to attribute genuine success to luck rather than competence, fueling chronic self-doubt.',
    topicRef: '2.0 Self-Perception Psychology'
  },
  {
    id: 49,
    question: "What is 'Locus of Control' (Julian Rotter)?",
    options: [
      { key: 'A', text: 'The degree to which people believe that they have control over the outcome of events in their lives (Internal) versus external forces/luck (External)' },
      { key: 'B', text: 'A remote control device for television' },
      { key: 'C', text: 'A traffic control tower at an airport' },
      { key: 'D', text: 'A map of the human brain' }
    ],
    correctAnswer: 'A',
    explanation: 'Individuals with an internal locus of control take agency over their destiny, whereas an external locus attributes outcomes to fate or luck.',
    topicRef: '2.0 Rotter: Locus of Control'
  },
  {
    id: 50,
    question: "Why is 'Understanding the Self' an indispensable foundation for future professional teachers?",
    options: [
      { key: 'A', text: 'Because deep self-awareness, emotional maturity, resilience, and empathy enable educators to manage stress, model integrity, and effectively inspire diverse learners' },
      { key: 'B', text: 'To learn how to avoid interacting with other faculty' },
      { key: 'C', text: 'To memorize philosophical quotes for casual conversation' },
      { key: 'D', text: 'Because teachers only need to think about themselves' }
    ],
    correctAnswer: 'A',
    explanation: 'Self-knowledge empowers educators to cultivate authentic teacher identities, regulate their emotional responses, and foster empathetic classrooms.',
    topicRef: '1.0 Self-Awareness & Teacher Formation'
  }
];
