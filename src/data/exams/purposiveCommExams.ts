import { ExamQuestion } from '../../types';

export const PURPOSIVE_COMM_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Which of the following sentences adheres correctly to the rules of Subject-Verb Agreement with compound subjects joined by 'neither... nor'?",
    options: [
      { key: 'A', text: 'Neither the principal nor the teachers are present at the convocation.' },
      { key: 'B', text: 'Neither the principal nor the teachers is present at the convocation.' },
      { key: 'C', text: 'Neither the teachers nor the principal are present at the convocation.' },
      { key: 'D', text: 'Neither the principal nor the teacher were present at the convocation.' }
    ],
    correctAnswer: 'A',
    explanation: 'Rule of Proximity: When subjects are joined by "either... or" or "neither... nor," the verb agrees with the closer subject ("teachers" is plural, so use "are").',
    topicRef: '2.0 Subject-Verb Agreement Rules'
  },
  {
    id: 2,
    question: "Identify the sentence that uses the correct verb form with expressions of quantity followed by 'of':",
    options: [
      { key: 'A', text: 'Two-thirds of the cake was eaten by the children.' },
      { key: 'B', text: 'Two-thirds of the cake were eaten by the children.' },
      { key: 'C', text: 'Two-thirds of the students was absent yesterday.' },
      { key: 'D', text: 'All of the water are contaminated.' }
    ],
    correctAnswer: 'A',
    explanation: 'With fractions and percentages, the verb agrees with the noun in the prepositional phrase ("cake" is non-count/singular -> "was"; "students" is plural -> "were").',
    topicRef: '2.0 Subject-Verb Agreement: Fractions & Quantifiers'
  },
  {
    id: 3,
    question: "Choose the correct sentence regarding titles of books, films, or creative works:",
    options: [
      { key: 'A', text: 'Gulliver\'s Travels is an iconic satirical novel by Jonathan Swift.' },
      { key: 'B', text: 'Gulliver\'s Travels are an iconic satirical novel by Jonathan Swift.' },
      { key: 'C', text: 'Gulliver\'s Travels were written as multiple volumes.' },
      { key: 'D', text: 'The Canterbury Tales are a single masterpiece.' }
    ],
    correctAnswer: 'A',
    explanation: 'Titles of individual books, movies, paintings, or musical compositions take singular verbs even if their titles end in a plural "s".',
    topicRef: '2.0 Subject-Verb Agreement: Titles'
  },
  {
    id: 4,
    question: "Which sentence demonstrates the correct use of the 'Third Conditional' (unreal past condition with hypothetical past outcome)?",
    options: [
      { key: 'A', text: 'If she had studied diligently, she would have passed the licensure exam.' },
      { key: 'B', text: 'If she studied diligently, she will pass the exam.' },
      { key: 'C', text: 'If she studies, she would have passed.' },
      { key: 'D', text: 'If she had studied, she would pass the exam yesterday.' }
    ],
    correctAnswer: 'A',
    explanation: 'Third Conditional structure: If + past perfect (had studied), ... would have + past participle (would have passed).',
    topicRef: '4.0 The Four Conditionals'
  },
  {
    id: 5,
    question: "In the sentence: 'The committee has submitted ___ annual report to the board,' which pronoun correctly completes the agreement?",
    options: [
      { key: 'A', text: 'its' },
      { key: 'B', text: 'their' },
      { key: 'C', text: 'his' },
      { key: 'D', text: 'it\'s' },
    ],
    correctAnswer: 'A',
    explanation: 'When a collective noun ("committee") acts as a single unified entity, it takes singular verbs and the singular neuter possessive pronoun "its".',
    topicRef: '1.0 Pronoun-Antecedent Agreement'
  },
  {
    id: 6,
    question: "Which figure of speech is exemplified in: 'The relentless wind howled and whistled through the barren trees'?",
    options: [
      { key: 'A', text: 'Personification' },
      { key: 'B', text: 'Oxymoron' },
      { key: 'C', text: 'Hyperbole' },
      { key: 'D', text: 'Synecdoche' }
    ],
    correctAnswer: 'A',
    explanation: 'Personification attributes human qualities, emotions, or intentional actions (howling, whistling) to inanimate entities or natural phenomena.',
    topicRef: '4.0 Figures of Speech: Personification'
  },
  {
    id: 7,
    question: "In the sentence: 'She gave me an exact estimate of the expenses,' what figure of speech is 'exact estimate'?",
    options: [
      { key: 'A', text: 'Oxymoron' },
      { key: 'B', text: 'Litotes' },
      { key: 'C', text: 'Metonymy' },
      { key: 'D', text: 'Apostrophe' }
    ],
    correctAnswer: 'A',
    explanation: 'An oxymoron pairs two contradictory or incongruous terms ("exact" vs "estimate") side-by-side.',
    topicRef: '4.0 Figures of Speech: Oxymoron'
  },
  {
    id: 8,
    question: "What figure of speech is demonstrated when one uses 'the White House' to refer to the presidential administration, or 'the Crown' to represent the monarch?",
    options: [
      { key: 'A', text: 'Metonymy' },
      { key: 'B', text: 'Synecdoche' },
      { key: 'C', text: 'Euphemism' },
      { key: 'D', text: 'Alliteration' }
    ],
    correctAnswer: 'A',
    explanation: 'Metonymy substitutes the name of an object or concept with something closely associated with or related to it.',
    topicRef: '4.0 Figures of Speech: Metonymy'
  },
  {
    id: 9,
    question: "What figure of speech is used when a part of something represents the whole, such as 'All hands on deck' (hands = sailors) or 'Check out my new wheels' (wheels = car)?",
    options: [
      { key: 'A', text: 'Synecdoche' },
      { key: 'B', text: 'Metonymy' },
      { key: 'C', text: 'Irony' },
      { key: 'D', text: 'Hyperbole' }
    ],
    correctAnswer: 'A',
    explanation: 'Synecdoche is a specific figure where a physical part signifies the whole entity, or the whole represents a part.',
    topicRef: '4.0 Figures of Speech: Synecdoche'
  },
  {
    id: 10,
    question: "Which figure of speech expresses an affirmative truth through the negation of its opposite (e.g., 'He is no fool' meaning he is very smart)?",
    options: [
      { key: 'A', text: 'Litotes' },
      { key: 'B', text: 'Hyperbole' },
      { key: 'C', text: 'Paradox' },
      { key: 'D', text: 'Apostrophe' }
    ],
    correctAnswer: 'A',
    explanation: 'Litotes is a deliberate understatement formed by denying the contrary (e.g., "not bad" for good, "not a minor achievement").',
    topicRef: '4.0 Figures of Speech: Litotes'
  },
  {
    id: 11,
    question: "In the sentence: 'O Liberty, what crimes are committed in thy name!' which figure of speech is being used?",
    options: [
      { key: 'A', text: 'Apostrophe' },
      { key: 'B', text: 'Simile' },
      { key: 'C', text: 'Metaphor' },
      { key: 'D', text: 'Pun' }
    ],
    correctAnswer: 'A',
    explanation: 'Apostrophe is an exclamatory rhetorical figure addressing an absent person, an inanimate object, or an abstract concept (like Liberty) as if it were present and alive.',
    topicRef: '4.0 Figures of Speech: Apostrophe'
  },
  {
    id: 12,
    question: "Identify the correct verb tense in: 'By next December, Dr. Santos ___ at this university for twenty-five years.'",
    options: [
      { key: 'A', text: 'will have been teaching' },
      { key: 'B', text: 'will teach' },
      { key: 'C', text: 'is teaching' },
      { key: 'D', text: 'has been teaching' }
    ],
    correctAnswer: 'A',
    explanation: 'Future Perfect Progressive (will have been teaching) indicates an action that will continue up until a specific milestone point in the future.',
    topicRef: '3.0 12 Verb Tenses & Aspects'
  },
  {
    id: 13,
    question: "What is the correct pronoun in the predicate nominative case: 'The winners of the research competition were Maria and ___'?",
    options: [
      { key: 'A', text: 'I' },
      { key: 'B', text: 'me' },
      { key: 'C', text: 'myself' },
      { key: 'D', text: 'mine' }
    ],
    correctAnswer: 'A',
    explanation: 'Subject pronouns (I, he, she, they) must be used following linking verbs (were) as predicate nominatives/subject complements.',
    topicRef: '1.0 Pronoun Cases: Subjective Case'
  },
  {
    id: 14,
    question: "Identify the sentence with the correct Objective Case pronoun:",
    options: [
      { key: 'A', text: 'Between you and me, the decision was completely fair.' },
      { key: 'B', text: 'Between you and I, the decision was completely fair.' },
      { key: 'C', text: 'Between you and myself, the decision was fair.' },
      { key: 'D', text: 'Between he and I, there are no secrets.' }
    ],
    correctAnswer: 'A',
    explanation: 'Prepositions ("between") require objective case pronouns ("me", "him", "her", "them"). "Between you and me" is grammatically correct.',
    topicRef: '1.0 Pronoun Cases: Objective Case'
  },
  {
    id: 15,
    question: "What type of sentence is: 'Although the rain was pouring heavily, the players continued the championship game, and the fans cheered loudly'?",
    options: [
      { key: 'A', text: 'Compound-Complex Sentence' },
      { key: 'B', text: 'Simple Sentence' },
      { key: 'C', text: 'Compound Sentence' },
      { key: 'D', text: 'Complex Sentence' }
    ],
    correctAnswer: 'A',
    explanation: 'A compound-complex sentence contains at least two independent clauses and at least one dependent/subordinate clause ("Although the rain...").',
    topicRef: '1.0 Sentence Structures & Clauses'
  },
  {
    id: 16,
    question: "In the Shannon-Weaver Model of Communication, what is 'Noise'?",
    options: [
      { key: 'A', text: 'Any physical, physiological, psychological, or semantic barrier that disrupts, distorts, or interferes with the transmission of the message' },
      { key: 'B', text: 'Loud music from a radio only' },
      { key: 'C', text: 'The vocal pitch of the speaker' },
      { key: 'D', text: 'The language spoken by the receiver' }
    ],
    correctAnswer: 'A',
    explanation: 'In communication theory, noise is any interference (environmental, psychological bias, linguistic ambiguity) that hinders clear decoding of the message.',
    topicRef: '5.0 Communication Models: Shannon-Weaver'
  },
  {
    id: 17,
    question: "What are the four components of David Berlo\'s SMCR Model of Communication?",
    options: [
      { key: 'A', text: 'Source, Message, Channel, and Receiver' },
      { key: 'B', text: 'Speaker, Meeting, Conference, and Room' },
      { key: 'C', text: 'Sound, Motion, Color, and Rhythm' },
      { key: 'D', text: 'Subject, Meaning, Context, and Result' }
    ],
    correctAnswer: 'A',
    explanation: 'Berlo\'s SMCR model outlines the flow from Source (encoder) -> Message (content/code) -> Channel (5 senses) -> Receiver (decoder).',
    topicRef: '5.0 Communication Models: Berlo SMCR'
  },
  {
    id: 18,
    question: "In J.L. Austin\'s Speech Act Theory, what is an 'Illocutionary Act'?",
    options: [
      { key: 'A', text: 'The social function, intention, or communicative force behind the utterance (e.g., promising, warning, requesting, ordering)' },
      { key: 'B', text: 'The physical acoustic act of uttering words' },
      { key: 'C', text: 'The consequential effect of the utterance on the listener (fear, persuasion)' },
      { key: 'D', text: 'A grammar error in pronunciation' }
    ],
    correctAnswer: 'A',
    explanation: 'Speech acts comprise: Locutionary (saying words), Illocutionary (intended performative force/purpose), and Perlocutionary (effect on the hearer).',
    topicRef: '5.0 Speech Act Theory'
  },
  {
    id: 19,
    question: "What is 'Kinesics' in non-verbal communication?",
    options: [
      { key: 'A', text: 'The study of body movement, facial expressions, eye contact, gestures, and posture in conveying meaning' },
      { key: 'B', text: 'The study of personal space and distance' },
      { key: 'C', text: 'The study of vocal tone and pitch' },
      { key: 'D', text: 'The study of touch and physical contact' }
    ],
    correctAnswer: 'A',
    explanation: 'Kinesics (Ray Birdwhistell) analyzes non-verbal communication expressed through bodily motions, expressions, and gestures.',
    topicRef: '5.0 Non-Verbal Communication: Kinesics'
  },
  {
    id: 20,
    question: "What is 'Proxemics' (Edward T. Hall) in intercultural communication?",
    options: [
      { key: 'A', text: 'The study of how people perceive and use personal space and physical distance in interpersonal interactions (Intimate, Personal, Social, Public distance)' },
      { key: 'B', text: 'The study of time management' },
      { key: 'C', text: 'The study of facial makeup' },
      { key: 'D', text: 'The study of written font size' }
    ],
    correctAnswer: 'A',
    explanation: 'Proxemics examines spatial zones of comfort across cultures and contexts: Intimate (0-1.5 ft), Personal (1.5-4 ft), Social (4-12 ft), and Public (12+ ft).',
    topicRef: '5.0 Non-Verbal Communication: Proxemics'
  },
  {
    id: 21,
    question: "What is 'Haptics' in non-verbal communication?",
    options: [
      { key: 'A', text: 'Communication through touch, such as handshakes, hugs, pats on the back, or guiding touches' },
      { key: 'B', text: 'Communication through eye contact' },
      { key: 'C', text: 'Communication through clothing' },
      { key: 'D', text: 'Communication through written emails' }
    ],
    correctAnswer: 'A',
    explanation: 'Haptics investigates the communicative functions, cultural norms, and psychological impacts of tactile touch.',
    topicRef: '5.0 Non-Verbal Communication: Haptics'
  },
  {
    id: 22,
    question: "What is 'Chronemics' in communication?",
    options: [
      { key: 'A', text: 'The study of the role of time, punctuality, waiting, and pace in human communication (Monochronic vs Polychronic cultures)' },
      { key: 'B', text: 'The study of hand gestures' },
      { key: 'C', text: 'The study of color symbolism' },
      { key: 'D', text: 'The study of loud volume' }
    ],
    correctAnswer: 'A',
    explanation: 'Chronemics studies how time usage and perceptions convey power, respect, and cultural orientation (e.g., linear monochronic vs flexible polychronic time).',
    topicRef: '5.0 Non-Verbal Communication: Chronemics'
  },
  {
    id: 23,
    question: "In the sentence: 'The number of applicants ___ increasing rapidly,' what is the correct verb?",
    options: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'are' },
      { key: 'C', text: 'were' },
      { key: 'D', text: 'have been' }
    ],
    correctAnswer: 'A',
    explanation: '"The number" takes a singular verb ("is"); "A number" takes a plural verb ("are").',
    topicRef: '2.0 Subject-Verb Agreement: The Number vs A Number'
  },
  {
    id: 24,
    question: "In: 'A number of students ___ joined the science club,' what is the correct verb?",
    options: [
      { key: 'A', text: 'have' },
      { key: 'B', text: 'has' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'was' }
    ],
    correctAnswer: 'A',
    explanation: '"A number of..." functions as a plural quantifier meaning "several/many," taking a plural verb ("have joined").',
    topicRef: '2.0 Subject-Verb Agreement: The Number vs A Number'
  },
  {
    id: 25,
    question: "What is the function of the underlined phrase in: '<u>Walking through the ancient forest</u>, the biologist discovered a rare orchid'?",
    options: [
      { key: 'A', text: 'Participial Phrase modifying the noun "biologist"' },
      { key: 'B', text: 'Gerund Phrase acting as the subject' },
      { key: 'C', text: 'Infinitive Phrase acting as an adverb' },
      { key: 'D', text: 'Appositive Phrase' }
    ],
    correctAnswer: 'A',
    explanation: '"Walking through the ancient forest" is a participial phrase acting as an adjective modifying the subject "the biologist".',
    topicRef: '1.0 Verbals: Participles & Gerunds'
  },
  {
    id: 26,
    question: "Identify the sentence that contains a 'Dangling Modifier' error:",
    options: [
      { key: 'A', text: 'Having finished the assignment, the TV was turned on by John.' },
      { key: 'B', text: 'Having finished the assignment, John turned on the TV.' },
      { key: 'C', text: 'After John finished the assignment, he watched TV.' },
      { key: 'D', text: 'John turned on the TV after finishing his assignment.' }
    ],
    correctAnswer: 'A',
    explanation: 'In option A, "Having finished the assignment" illogically modifies "the TV" (implying the television set finished the homework).',
    topicRef: '1.0 Syntax Errors: Dangling Modifiers'
  },
  {
    id: 27,
    question: "Which of the following sentences exhibits faulty parallelism?",
    options: [
      { key: 'A', text: 'Maria enjoys reading novels, swimming in the ocean, and to bake pastries.' },
      { key: 'B', text: 'Maria enjoys reading novels, swimming in the ocean, and baking pastries.' },
      { key: 'C', text: 'Maria likes to read, to swim, and to bake.' },
      { key: 'D', text: 'Maria loves reading, swimming, and baking.' }
    ],
    correctAnswer: 'A',
    explanation: 'Faulty parallelism occurs when items in a series do not share identical grammatical forms (gerund, gerund, and infinitive).',
    topicRef: '1.0 Parallel Structure'
  },
  {
    id: 28,
    question: "What is a 'Sonnet' in poetic forms?",
    options: [
      { key: 'A', text: 'A 14-line lyric poem traditionally written in iambic pentameter with a strict rhyme scheme (e.g., Shakespearean / Italian Petrarchan)' },
      { key: 'B', text: 'A 3-line Japanese nature poem (5-7-5 syllables)' },
      { key: 'C', text: 'A long narrative epic about heroic battles' },
      { key: 'D', text: 'A 5-line humorous poem with AABBA rhyme' }
    ],
    correctAnswer: 'A',
    explanation: 'A Sonnet is a 14-line poetic form with specific meter (iambic pentameter) and volta/turn in thought (Petrarchan or Shakespearean ABAB CDCD EFEF GG).',
    topicRef: '5.0 Genres of Poetry: Sonnet'
  },
  {
    id: 29,
    question: "What is the rhyme scheme and structure of a traditional 'Haiku'?",
    options: [
      { key: 'A', text: 'A 3-line poem of 17 syllables with a 5-7-5 syllable pattern, traditionally focusing on nature, seasons, and sensory moments' },
      { key: 'B', text: 'A 14-line poem with ABBA rhyme' },
      { key: 'C', text: 'A 4-line rhyming stanza' },
      { key: 'D', text: 'A poem with no syllables' }
    ],
    correctAnswer: 'A',
    explanation: 'Haiku is a traditional Japanese verse form consisting of three unrhymed lines of 5, 7, and 5 syllables respectively.',
    topicRef: '5.0 Genres of Poetry: Haiku'
  },
  {
    id: 30,
    question: "What is 'Elegy' in literature?",
    options: [
      { key: 'A', text: 'A solemn, reflective lyric poem of lament and sorrow, usually mourning the death of a person or a tragic loss' },
      { key: 'B', text: 'A celebratory festive drinking song' },
      { key: 'C', text: 'A funny comedy play' },
      { key: 'D', text: 'A romantic marriage proposal letter' }
    ],
    correctAnswer: 'A',
    explanation: 'An elegy (such as Thomas Gray\'s Elegy Written in a Country Churchyard) is a meditative poem of mourning and grief.',
    topicRef: '5.0 Genres of Poetry: Elegy'
  },
  {
    id: 31,
    question: "What is 'Ode' in classical poetry?",
    options: [
      { key: 'A', text: 'A formal, elevated lyric poem praising and glorifying a specific person, place, event, or abstract concept (e.g., Keats\' Ode on a Grecian Urn)' },
      { key: 'B', text: 'A humorous short limerick' },
      { key: 'C', text: 'An angry political insult' },
      { key: 'D', text: 'A dictionary entry' }
    ],
    correctAnswer: 'A',
    explanation: 'An ode is an exalted lyric poem marked by solemnity, lofty diction, and dedicated admiration of its subject.',
    topicRef: '5.0 Genres of Poetry: Ode'
  },
  {
    id: 32,
    question: "In plot structure (Gustav Freytag\'s Pyramid), what is the 'Climax'?",
    options: [
      { key: 'A', text: 'The peak turning point of highest tension, conflict, and emotional intensity in a narrative' },
      { key: 'B', text: 'The opening background introduction of characters' },
      { key: 'C', text: 'The final resolution where loose ends are tied' },
      { key: 'D', text: 'The copyright page' }
    ],
    correctAnswer: 'A',
    explanation: 'The climax is the structural zenith of a story where the central conflict reaches maximum tension, deciding the protagonist\'s fate.',
    topicRef: '5.0 Elements of Fiction: Plot Structure'
  },
  {
    id: 33,
    question: "What is 'Denouement' (or Resolution) in a story\'s narrative arc?",
    options: [
      { key: 'A', text: 'The final unraveling and resolution of the plot complications following the falling action' },
      { key: 'B', text: 'The inciting incident that sparks the conflict' },
      { key: 'C', text: 'The title of the opening chapter' },
      { key: 'D', text: 'The physical printing of the book' }
    ],
    correctAnswer: 'A',
    explanation: 'Denouement (from French "untying") resolves narrative threads, restoring equilibrium to the story world.',
    topicRef: '5.0 Elements of Fiction: Denouement'
  },
  {
    id: 34,
    question: "What is an 'Omniscient Third-Person Point of View'?",
    options: [
      { key: 'A', text: 'An all-knowing narrator who is not a character in the story, but has access to the thoughts, motives, and feelings of all characters' },
      { key: 'B', text: 'A story narrated using "I" and "we"' },
      { key: 'C', text: 'A narrator who only knows what one specific character thinks' },
      { key: 'D', text: 'A manual addressing the reader as "you"' }
    ],
    correctAnswer: 'A',
    explanation: 'Third-person omniscient narrators possess god-like insight, penetrating the interior consciousness of multiple characters.',
    topicRef: '5.0 Point of View in Literature'
  },
  {
    id: 35,
    question: "What is 'Dramatic Irony' in literature and drama?",
    options: [
      { key: 'A', text: 'When the audience or reader knows crucial information that a character on stage does not know' },
      { key: 'B', text: 'When a speaker says something sarcastic' },
      { key: 'C', text: 'When an unexpected accident occurs' },
      { key: 'D', text: 'When an actor forgets their lines' }
    ],
    correctAnswer: 'A',
    explanation: 'Dramatic irony creates suspense and tragic pathos (e.g., in Romeo and Juliet, the audience knows Juliet is only asleep while Romeo believes she is dead).',
    topicRef: '4.0 Figures of Speech & Literary Devices: Irony'
  },
  {
    id: 36,
    question: "What is 'Verbal Irony'?",
    options: [
      { key: 'A', text: 'When a speaker deliberately states one thing but means the exact opposite (e.g., stepping into a typhoon and saying "What lovely weather")' },
      { key: 'B', text: 'A character tripping on stage' },
      { key: 'C', text: 'A misspelled word' },
      { key: 'D', text: 'Speaking in another language' }
    ],
    correctAnswer: 'A',
    explanation: 'Verbal irony involves an intentional contrast between literal expression and intended sarcastic or ironic meaning.',
    topicRef: '4.0 Literary Devices: Verbal Irony'
  },
  {
    id: 37,
    question: "In the sentence: 'Each of the candidates ___ given five minutes to present their platform,' what is the correct verb?",
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'are' },
      { key: 'D', text: 'have been' }
    ],
    correctAnswer: 'A',
    explanation: 'Indefinite pronouns like "each", "either", "neither", "everyone", "someone" are singular and require singular verbs ("was given").',
    topicRef: '2.0 Subject-Verb Agreement: Indefinite Pronouns'
  },
  {
    id: 38,
    question: "Identify the sentence with correct punctuation using a semicolon:",
    options: [
      { key: 'A', text: 'The storm raged through the night; nevertheless, the rescue team persevered.' },
      { key: 'B', text: 'The storm raged; and the rescue team persevered.' },
      { key: 'C', text: 'The storm; nevertheless the rescue team persevered.' },
      { key: 'D', text: 'The storm raged through the night; because the wind was fierce.' }
    ],
    correctAnswer: 'A',
    explanation: 'When joining two independent clauses with a conjunctive adverb (nevertheless, however, therefore), use a semicolon before and a comma after.',
    topicRef: '1.0 Punctuation & Mechanics'
  },
  {
    id: 39,
    question: "What is a 'Subjunctive Mood' verb used for in English?",
    options: [
      { key: 'A', text: 'Expressing hypothetical situations, wishes, conditions contrary to fact, or formal demands (e.g., "If I were you...", "I recommend that he be present")' },
      { key: 'B', text: 'Stating ordinary factual statements' },
      { key: 'C', text: 'Giving direct commands' },
      { key: 'D', text: 'Asking yes/no questions' }
    ],
    correctAnswer: 'A',
    explanation: 'The subjunctive mood uses base or plural forms ("were", "be") for unfulfilled wishes, hypothetical unreal conditions, and formal mandates.',
    topicRef: '3.0 Verb Moods: Subjunctive'
  },
  {
    id: 40,
    question: "Which of the following sentences correctly uses the subjunctive mood?",
    options: [
      { key: 'A', text: 'The dean insisted that every faculty member submit the syllabus on Monday.' },
      { key: 'B', text: 'The dean insisted that every faculty member submits the syllabus on Monday.' },
      { key: 'C', text: 'The dean insisted that every faculty member submitted the syllabus on Monday.' },
      { key: 'D', text: 'The dean insisted that every faculty member will submit the syllabus.' }
    ],
    correctAnswer: 'A',
    explanation: 'In mandative subjunctive clauses following verbs like "insist", "demand", "recommend", the base verb form ("submit", not "submits") is mandatory.',
    topicRef: '3.0 Mandative Subjunctive'
  },
  {
    id: 41,
    question: "What is 'Jargon' in communication and sociolinguistics?",
    options: [
      { key: 'A', text: 'Specialized technical terminology or vocabulary characteristic of a specific profession, trade, or academic field' },
      { key: 'B', text: 'Slang used exclusively by teenagers' },
      { key: 'C', text: 'Babbling sounds made by infants' },
      { key: 'D', text: 'A dialect spoken in rural villages' }
    ],
    correctAnswer: 'A',
    explanation: 'Jargon encompasses specialized technical lexicon (e.g., medical, legal, computing terms) efficient among domain experts.',
    topicRef: '5.0 Sociolinguistics: Registers & Jargon'
  },
  {
    id: 42,
    question: "What is 'Euphemism'?",
    options: [
      { key: 'A', text: 'A mild, indirect, or polite word/phrase substituted for one considered harsh, blunt, offensive, or unpleasant (e.g., "passed away" for died)' },
      { key: 'B', text: 'An extreme exaggeration' },
      { key: 'C', text: 'An insulting swear word' },
      { key: 'D', text: 'A rhythmic rhyme' }
    ],
    correctAnswer: 'A',
    explanation: 'Euphemisms soften uncomfortable or taboo topics (e.g., "let go" instead of fired, "sanitation engineer" instead of garbage collector).',
    topicRef: '4.0 Figures of Speech: Euphemism'
  },
  {
    id: 43,
    question: "What is 'Hyperbole'?",
    options: [
      { key: 'A', text: 'An intentional, deliberate, and obvious exaggeration used for emphasis, dramatic impact, or humorous effect (e.g., "I have told you a million times")' },
      { key: 'B', text: 'An accurate mathematical measurement' },
      { key: 'C', text: 'An understated quiet whisper' },
      { key: 'D', text: 'A direct comparison using "like" or "as"' }
    ],
    correctAnswer: 'A',
    explanation: 'Hyperbole magnifies reality beyond factual literalness to evoke strong rhetorical emphasis or vivid imagery.',
    topicRef: '4.0 Figures of Speech: Hyperbole'
  },
  {
    id: 44,
    question: "What is 'Alliteration' in poetic devices?",
    options: [
      { key: 'A', text: 'The repetition of the same initial consonant sounds in a sequence of nearby words (e.g., "Peter Piper picked a peck of pickled peppers")' },
      { key: 'B', text: 'The repetition of vowel sounds inside words' },
      { key: 'C', text: 'Words that sound like their meaning (buzz, hiss)' },
      { key: 'D', text: 'A poem with 14 lines' }
    ],
    correctAnswer: 'A',
    explanation: 'Alliteration repeats initial consonant sounds to create auditory rhythm, musicality, and memorability in poetry and prose.',
    topicRef: '4.0 Sound Devices: Alliteration'
  },
  {
    id: 45,
    question: "What is 'Onomatopoeia' in sound devices?",
    options: [
      { key: 'A', text: 'Words whose pronunciation imitates or suggests the actual natural sound they describe (e.g., buzz, hiss, splash, sizzle, clang)' },
      { key: 'B', text: 'A rhyming dictionary' },
      { key: 'C', text: 'A long essay' },
      { key: 'D', text: 'A silent pause in speech' }
    ],
    correctAnswer: 'A',
    explanation: 'Onomatopoeic words phonetically mimic the auditory sensory sounds associated with their referents.',
    topicRef: '4.0 Sound Devices: Onomatopoeia'
  },
  {
    id: 46,
    question: "In the sentence: 'Neither of the proposals ___ acceptable to the committee,' what is the correct verb?",
    options: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'are' },
      { key: 'C', text: 'were' },
      { key: 'D', text: 'have been' }
    ],
    correctAnswer: 'A',
    explanation: '"Neither" as a pronoun is singular and takes the singular verb "is".',
    topicRef: '2.0 Subject-Verb Agreement: Neither'
  },
  {
    id: 47,
    question: "What is 'Code-Switching' in bilingual and multilingual communication?",
    options: [
      { key: 'A', text: 'The fluid practice of alternating between two or more languages, dialects, or language varieties within a single conversation or utterance (e.g., Taglish)' },
      { key: 'B', text: 'Translating secret spy codes' },
      { key: 'C', text: 'Switching off a computer' },
      { key: 'D', text: 'Refusing to speak to foreigners' }
    ],
    correctAnswer: 'A',
    explanation: 'Code-switching reflects complex multilingual competence, shifting linguistic varieties depending on social context and conversational nuances.',
    topicRef: '5.0 Sociolinguistics: Code-Switching'
  },
  {
    id: 48,
    question: "What is 'APA Format' (7th edition) standard for in-text citations of a single author work?",
    options: [
      { key: 'A', text: '(Author\'s Last Name, Year) - e.g., (Santos, 2023)' },
      { key: 'B', text: '(Author\'s Full Name, Page 12, Chapter 3)' },
      { key: 'C', text: '[Author\'s First Name only]' },
      { key: 'D', text: 'Author\'s email address in brackets' }
    ],
    correctAnswer: 'A',
    explanation: 'APA 7th edition uses the author-date citation system: (Author, Year) or Author (Year).',
    topicRef: '5.0 Academic Writing: Citation Styles'
  },
  {
    id: 49,
    question: "In the sentence: 'The committee members ___ among themselves about the budget allocations,' which verb is correct?",
    options: [
      { key: 'A', text: 'are arguing' },
      { key: 'B', text: 'is arguing' },
      { key: 'C', text: 'argues' },
      { key: 'D', text: 'has argued' }
    ],
    correctAnswer: 'A',
    explanation: 'When members of a collective noun act as separate individuals with differing views, the plural verb is required.',
    topicRef: '2.0 Subject-Verb Agreement: Collective Nouns'
  },
  {
    id: 50,
    question: "Why is Purposive Communication essential for prospective 21st-century professional educators?",
    options: [
      { key: 'A', text: 'It enables clear, persuasive, ethical, and culturally sensitive communication across academic, professional, and digital multimodal environments' },
      { key: 'B', text: 'To memorize grammar rules without applying them' },
      { key: 'C', text: 'To avoid speaking in public' },
      { key: 'D', text: 'To replace all writing with emojis' }
    ],
    correctAnswer: 'A',
    explanation: 'Purposive communication empowers educators to convey knowledge with precision, inspire students, dialogue with communities, and navigate diverse global communication landscapes.',
    topicRef: '1.0 Foundations of Purposive Communication'
  }
];
