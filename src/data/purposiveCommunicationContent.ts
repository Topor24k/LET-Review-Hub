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

export const PURPOSIVE_COMMUNICATION_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: GRAMMAR & PARTS OF SPEECH
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "Types of Grammar & The Noun",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Types of Grammar",
        items: [
          "1. Descriptive Grammar: Describes language as it is actually used in context (usage-based).",
          "2. Prescriptive Grammar: Prescribes language based on formal rules of correctness."
        ]
      },
      {
        type: "callout",
        heading: "What Are Parts of Speech?",
        content: "Parts of speech are the building blocks of language. They function to explain the usage of words in a sentence."
      },
      {
        type: "bullet_list",
        heading: "1. Noun — Kinds of Nouns",
        items: [
          "Proper Nouns: Name specific people, places, or things; the first letter is always capitalized (Jake, Fenilla, Monday, Davao City).",
          "Common Nouns: Name general people, places, or things (man, student, clinic, teacher, school).",
          "Collective Nouns: Name a group of people or things as a single unit (family, army, flock, choir).",
          "Mass Nouns: Cannot be counted individually (salt, sugar, flour, feedback, equipment).",
          "Concrete Nouns: Refer to things that exist in the physical world and can be perceived by the senses (petals, tables, pens, cups).",
          "Abstract Nouns: Refer to ideas, qualities, or feelings rather than physical things (sadness, joy, brilliance)."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "Personal Pronouns & Case Usage",
    pdfPageRef: "PDF Page 1-2",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "A pronoun is a word used to replace a noun. Personal pronouns refer to people or things and change form depending on person (first, second, third), number (singular, plural), and case (subjective/nominative, objective, possessive)."
      },
      {
        type: "table",
        heading: "Personal Pronouns by Case, Person, and Number",
        tableData: {
          headers: ["Person", "Nominative", "Objective", "Possessive"],
          rows: [
            ["1st Person (Singular)", "I", "me", "my, mine"],
            ["2nd Person (Singular)", "you", "you", "your, yours"],
            ["3rd Person (Singular)", "he, she, it", "him, her, it", "his, her/hers, its"],
            ["1st Person (Plural)", "we", "us", "our, ours"],
            ["2nd Person (Plural)", "you", "you", "your, yours"],
            ["3rd Person (Plural)", "they", "them", "their, theirs"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "When to Use Each Pronoun Case",
        items: [
          "1. Nominative Case: Used when the pronoun is the subject of the sentence, or follows a linking/'be' verb. Example: He and I sang. The singer is he.",
          "2. Objective Case: Used as the object of a verb, a compound verb, a preposition, or an infinitive phrase. Example: I gave him a chance. I smiled at him.",
          "3. Possessive Case: Used to mark ownership of an object or person. Example: The bag is mine."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "Indefinite, Reflexive, Demonstrative, Relative & Interrogative Pronouns",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Indefinite Pronouns",
        items: [
          "Singular: any, anybody, nobody, anyone, each, everyone, one, someone, somebody, every, either, neither.",
          "Plural: all, some, few, both, several, many."
        ]
      },
      {
        type: "table",
        heading: "Reflexive vs. Intensive Pronouns",
        tableData: {
          headers: ["Reflexive Pronoun", "Intensive Pronoun"],
          rows: [
            ["Refers back to the subject of the sentence. Example: I owe it to myself.", "Used to emphasize the antecedent. Example: I myself made that decision."]
          ]
        }
      },
      {
        type: "table",
        heading: "Demonstrative Pronouns",
        tableData: {
          headers: ["Pronoun", "Number & Distance", "Example"],
          rows: [
            ["This", "Singular, Near", "This is my handbag."],
            ["These", "Plural, Near", "These are my shoes."],
            ["That", "Singular, Distant", "That is my bag."],
            ["Those", "Plural, Distant", "Those are my books."]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Relative & Interrogative Pronouns",
        items: [
          "Relative Pronouns link one phrase or clause to another: who, whose, whoever, whom, that, which, whichever.",
          "Interrogative Pronouns are used to form questions: who, which, what, whom, whose, whoever. Example: Who wrote the novel Les Miserables? Whom do you think they should talk to?"
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "The Verb — Inflections & Kinds",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "A verb is a content word that denotes an action, occurrence, or state of existence."
      },
      {
        type: "table",
        heading: "Verb Inflections",
        tableData: {
          headers: ["Inflection", "Function", "Example"],
          rows: [
            ["-s", "Present form (singular)", "sings"],
            ["-d / -ed", "Past form", "walked"],
            ["-en", "Perfect form", "been"],
            ["-ing", "Progressive form", "walking"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Kinds of Verbs",
        items: [
          "Regular Verbs: Form the past tense by adding -d or -ed to the base form (jump → jumped → jumped; laugh → laughed → laughed).",
          "Irregular Verbs: Form the past tense and past participle in unpredictable ways (be → was/were → been). Note: 'lie' means to recline (lie–lay–lain), while 'lay' means to place something (lay–laid–laid).",
          "Linking Verbs: Join the subject with a word in the predicate that relates to it. The 'be' forms (am, is, are, was, were) are most common, along with become, seem, look, smell, appear, feel, taste, sound, remain. Example: He is cute.",
          "Auxiliary (Helping) Verbs: Used together with a main verb; the most common is 'have.' Has (singular, present), have (plural, present), and had (past, singular or plural) must be followed by a past participle. Example: He has seen him. I had loved him before.",
          "Emphatic Verbs: Do (present, plural), does (present, singular), and did (past, singular or plural) are followed by the simple form of the verb. Example: He does love me. He did love me."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "The Adjective & The Adverb",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Adjective",
        content: "An adjective is a part of speech used to modify a noun or pronoun."
      },
      {
        type: "bullet_list",
        heading: "Order of Adjectives in an Adjective Phrase",
        items: [
          "Determiners: a, an, the, my, your, etc.",
          "Color: red, blue, green, etc.",
          "Observations: lovely, boring, nice, etc.",
          "Origin: British, American, Mexican, etc.",
          "Size: tiny, small, huge, etc.",
          "Material: gold, copper, silk, etc.",
          "Shape: round, square, rectangular, etc.",
          "Qualifier: limiters used for compound nouns.",
          "Age: old, new, ancient, etc."
        ]
      },
      {
        type: "callout",
        heading: "Adverb",
        content: "An adverb modifies a verb, an adjective, or another adverb. It is generally placed immediately before or after the word it modifies."
      },
      {
        type: "bullet_list",
        heading: "5 Kinds of Adverbs",
        items: [
          "Adverb of Time: Tells us when something happens (afterward, already, last month, now, soon, then, yesterday). Placing it at the start of a sentence adds emphasis. Example: See you later.",
          "Adverb of Place: Tells us where something happens (above, below, here, outside, over there, there, under, upstairs), usually placed after the verb or object. Example: My room is upstairs.",
          "Adverb of Manner: Tells us how something happens; most end in -ly (badly, happily, sadly, slowly, quickly), plus well, hard, fast. Example: The people are slowly responding to the call for change.",
          "Adverb of Degree: Tells us the level or extent of an action (almost, much, quite, so, too, very). Example: It was quite impressive.",
          "Adverb of Frequency: Tells us how often something happens (hardly ever, nearly always, never, occasionally, often, rarely, seldom, sometimes, usually, weekly). Example: I sometimes miss you."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Grammar & Parts of Speech",
    topicTitle: "The Preposition, Conjunction & Interjection",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "A preposition is a word expressing the relationship between a noun or pronoun and other elements of a sentence."
      },
      {
        type: "table",
        heading: "Prepositions of Time & Place: At, On, In",
        tableData: {
          headers: ["Preposition", "Use for Time", "Use for Place"],
          rows: [
            ["At", "Specific times (at 8:00 AM)", "Specific addresses"],
            ["On", "Days and dates (on Sunday)", "Names of streets and avenues"],
            ["In", "Non-specific times — months, seasons, years", "Land areas — towns, countries, continents"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Kinds of Conjunctions",
        items: [
          "Coordinating Conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) join equal words, phrases, or clauses. No comma is needed between two joined items, but a series of three or more requires commas between elements.",
          "Subordinating Conjunctions introduce a subordinate clause (examples include although, because, since, unless, until, when, while, if, though).",
          "Correlative Conjunctions are paired conjunctions linking balanced words, phrases, or clauses (either...or, neither...nor, not only...but also)."
        ]
      },
      {
        type: "callout",
        heading: "Interjection",
        content: "An interjection is a word that expresses feeling or emotion and functions independently in a sentence (Ah! Oh! Uh! Alas! Hey! Ouch! Well! Wow!)."
      }
    ]
  },

  // ==========================================
  // DAY 2: SUBJECT-VERB AGREEMENT & VERB TENSES
  // ==========================================
  {
    pageNumber: 7,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Subject-Verb Agreement: Rules 1-6",
    pdfPageRef: "PDF Page 5-6",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "SVA Rules 1-6",
        items: [
          "Rule 1: A verb with -s is singular; a verb without -s is plural. Note: 'I' always takes a plural verb form and pairs with 'am.' Example: He loves the musical. They love the musical.",
          "Rule 2: Collective noun subjects generally take a singular verb, but take a plural verb when the group's members are viewed as acting individually. Example: The orchestra plays a hit song. The orchestra discuss the matter.",
          "Rule 3: Non-count (mass) noun subjects take a singular verb; they can only be pluralized using quantifiers. Example: Sugar is sweet. Three sacks of sugar are heavy.",
          "Rule 4: Certain proper nouns ending in -s — names of diseases, places, book/film titles, and the word 'news' — take a singular verb. Example: The news is not fake. Economics is my favorite subject.",
          "Rule 5: Items that come in two parts (scissors, eyeglasses, trousers, earrings, pliers, pants, sunglasses) take a plural verb, but the verb becomes singular when used with the word 'pair.' Example: The scissors are cute. My pair of scissors is lost.",
          "Rule 6: A plural subject noun that signals a single unit of measurement — distance, weight, time, or an amount of money — takes a singular verb. Example: Four kilometers costs P200 for a taxi ride."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Subject-Verb Agreement: Rules 7-12",
    pdfPageRef: "PDF Page 6-7",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "SVA Rules 7-12",
        items: [
          "Rule 7: Basic arithmetical operations (add, subtract, multiply, divide) take a singular verb. Example: Four times five equals twenty.",
          "Rule 8: Indefinite pronouns formed with -one, -body, and -thing, along with each and every, are always singular. Example: Anything is possible. Each of the students has reasons.",
          "Rule 9: The indefinite pronouns None, All, Most, Any, Some, and A lot of (NAMASA) can be singular or plural depending on the noun they refer to. Example: Some of the boys are my friends. None of the guests enjoys the party.",
          "Rule 10: With fractions, percentages, and quantifiers like 'all of' and 'a lot of,' verb agreement depends on the noun that comes after the phrase. Example: One-half of the information is relevant. 30% of the area has grass.",
          "Rule 11: Pair the subject and verb regardless of any prepositional phrase or clause placed between them. Example: The color of his eyes is blue.",
          "Rule 12: 'The number' as a subject takes a singular verb, while 'a number' as a subject takes a plural verb. Example: The number of students coming is decreasing. A number of students are taking the test."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Subject-Verb Agreement: Rules 13-17",
    pdfPageRef: "PDF Page 7-8",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "SVA Rules 13-17",
        items: [
          "Rule 13: With correlative subjects (either...or, neither...nor, or a subject joined only by 'or'), the verb agrees with the closer subject. With either or neither alone as the subject, always use a singular verb. Example: Either Jake or my friends are cute. Neither of the boys was okay.",
          "Rule 14: 'There' and 'here' are never used as subjects — when a sentence begins with either word, the true subject follows the verb. Example: There is one person in my heart.",
          "Rule 15: When subjects joined by 'and' refer to a single unit or are considered as one, the verb is singular; but compound subjects joined by 'and' that refer to separate entities take a plural verb. Example: Bread and butter is a common breakfast for Americans. Minda and Linda are my best friends.",
          "Rule 16: Subjects followed by intervening expressions (in addition to, in company with, together with, as well as) take a verb that agrees with the real subject, not the inserted phrase. Example: The student, together with his classmates, studies the lessons well.",
          "Rule 17: Adjectives used as nouns are considered plural. Example: The rich are popular. The needy are to be given shelter."
        ]
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Pronoun-Antecedent Agreement",
    pdfPageRef: "PDF Page 8",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "7 Rules on Pronoun-Antecedent Agreement",
        items: [
          "1. Personal pronouns (he, she, it, they, his, her, its, their) must agree in gender and number with the noun (antecedent) they refer to. Example: The teacher discusses the topic with her students.",
          "2. Two or more singular antecedents joined by 'or' or 'nor' require a singular pronoun. Example: Either Froilan or Jake will deliver his piece tomorrow.",
          "3. For collective noun antecedents, the pronoun is singular if the group acts as a unit, and plural if the members act as individuals. Example: The class donated its funds to the foundation. The class argued their issues among themselves.",
          "4. Use 'who' to refer to a person; use 'which' to refer to an animal or thing. Example: I am one of the students who fought against hunger.",
          "5. When a singular indefinite pronoun is the antecedent, the pronoun referring to it is traditionally singular and masculine. Example: Everyone is required to speak his mind.",
          "6. When one antecedent is singular and the other plural, make the pronoun agree with the nearer antecedent. Example: Neither the boys nor his classmate speaks of his concerns.",
          "7. When two or more antecedents are joined by 'and,' the pronoun must be plural. Example: Minda and Linda brought their A-games to the competition."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Verb Tenses & Aspects Overview",
    pdfPageRef: "PDF Page 9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Tense vs. Aspect",
        content: "Tense refers to the absolute location of an event or action in time — present, past, or future. Aspect refers to how that event or action is viewed with respect to time, rather than to its actual location in time."
      },
      {
        type: "table",
        heading: "The Four Aspects Across Tenses (using 'write')",
        tableData: {
          headers: ["Tense", "Simple", "Perfect", "Progressive", "Perfect Progressive"],
          rows: [
            ["Present", "write / writes", "has / have written", "am / is / are writing", "has / have been writing"],
            ["Past", "wrote", "had written", "was / were writing", "had been writing"],
            ["Future", "will write", "will have written", "will be writing", "will have been writing"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "Simple Aspect",
        items: [
          "1. Simple Present Tense: Describes habitual actions in the present. Example: He goes to school every day.",
          "2. Simple Past Tense: Describes a definite, completed event, or a habitual/repeated action in the past. Example: I saw my ex last week. It rained almost every day last March.",
          "3. Simple Future Tense: Describes an action at a definite future time, or a future habitual action or state. Example: I will top the LET in March 2024."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Progressive & Perfect Aspects",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Progressive Aspect",
        items: [
          "1. Present Progressive: An action going on at the time of speaking, or an extended/temporary present situation. Example: He is talking about his thesis at a conference as we speak.",
          "2. Past Progressive: An action in progress at a specific point in the past (often with a time range), or a past action interrupted by another event stated in the simple past. Example: Jenna was washing her hair when the building collapsed.",
          "3. Future Progressive: An action that will be in progress at a specific time in the future. Example: He will be taking a test starting 8:00 A.M. tomorrow."
        ]
      },
      {
        type: "numbered_list",
        heading: "Perfect Aspect",
        items: [
          "1. Present Perfect: A situation that began at a prior point in time and continues into the present, or a very recently completed action (often with 'just'). Example: She has been a school administrator since 2010. Lalli has just taken the test.",
          "2. Past Perfect: An action completed in the past prior to some other past event or time. Example: Mom had already left the house before I turned the TV on.",
          "3. Future Perfect: A future action that will be completed prior to a specific future time. Example: I will have finished all this work by tomorrow."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Subject-Verb Agreement & Verb Tenses",
    topicTitle: "Perfect Progressive Aspect",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Perfect Progressive Aspect",
        items: [
          "1. Present Perfect Progressive: A situation or habit that began in the past (recent or distant) and continues up to, and possibly beyond, the present. Example: Mr. Santos has been reading the book since Monday and may finish it next week.",
          "2. Past Perfect Progressive: An action or habit taking place over a period of time in the past, prior to or interrupted by another past event. Example: We had been planning to visit Cebu but changed our minds.",
          "3. Future Perfect Progressive: A durative or habitual action taking place in the present that will continue into the future up until a specific future time. Example: On Christmas Eve, we will have been living in the same house for 10 years."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 3: CONDITIONALS & LITERATURE
  // ==========================================
  {
    pageNumber: 14,
    dayNumber: 3,
    dayTitle: "Day 3: Conditionals & Literature",
    topicTitle: "The Four Conditionals",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "The Four Conditional Sentence Types",
        tableData: {
          headers: ["Type", "Also Known As", "If-Clause", "Main Clause", "Example"],
          rows: [
            ["Zero Conditional", "Real Condition", "Simple Present", "Simple Present", "If you expose ice to sunlight, it melts."],
            ["First Conditional", "Unreal but Likely Condition", "Simple Present", "Will + Base Form", "If you review for the LEPT, you will pass the exams."],
            ["Second Conditional", "Unreal and Unlikely Condition", "Past Tense", "Would/Could + Base Form", "If I were a boy, I would understand your situation."],
            ["Third Conditional", "Past Unreal Condition", "Past Perfect", "Would/Could + Have + Past Participle", "If he had studied in college, he would have understood English better."]
          ]
        }
      },
      {
        type: "text",
        content: "Zero conditionals describe situations that are always true or factual. First conditionals speculate about situations that are possible now or in the future. Second conditionals speculate about hypothetical or wishful situations that probably won't happen. Third conditionals imagine a different past that did not actually occur."
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: Conditionals & Literature",
    topicTitle: "Figures of Speech, Part 1",
    pdfPageRef: "PDF Page 12-13",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Figures of Speech (1-7)",
        items: [
          "1. Simile: An expressed comparison between two unlike things using like, as, as if, than, seems, or similar to. Example: She is as flexible as a bamboo.",
          "2. Metaphor: An implied comparison between unlike subjects, without using like or as. Example: She is the apple of his eyes.",
          "3. Personification: A human characteristic attributed to an inanimate thing or idea. Example: Time, as he grows old, teaches many lessons.",
          "4. Litotes: A deliberate understatement that affirms something by negating its opposite. Example: Edgar Allan Poe is not a bad writer.",
          "5. Apostrophe: An address to someone absent, or to something inanimate, as if it could hear and respond. Example: O wild West Wind, thou breath of Autumn's being.",
          "6. Allusion: A brief, indirect reference to a person, place, or thing of historical, cultural, or literary significance, without describing it in detail. Example: She is definitely the Helen in our group.",
          "7. Hyperbole: An exaggeration used for emphasis or effect, without any intent to deceive. Example: There were mountains of food at the party."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 3,
    dayTitle: "Day 3: Conditionals & Literature",
    topicTitle: "Figures of Speech, Part 2",
    pdfPageRef: "PDF Page 12-13",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Figures of Speech (8-14)",
        items: [
          "8. Irony: A discrepancy between what seems to be true and what actually is. Verbal Irony occurs when a speaker says one thing but means the opposite; Irony of Situation is a mismatch between expectation and result (e.g., a fire station burning down).",
          "9. Synecdoche: A figure of speech where a part represents the whole, or the whole represents a part. Example: Referring to a car as 'wheels,' or charging a fee 'per head' to mean per person.",
          "10. Metonymy: Replacing the name of a thing with something closely associated with it. Example: The pen is mightier than the sword, where 'pen' stands for written words and 'sword' for military force.",
          "11. Paradox: A statement that seems contradictory but is actually true. Example: The child is the father of the man.",
          "12. Oxymoron: A compact paradox formed by two contradictory words placed side by side. Example: Life is full of constant inconstancy.",
          "13. Climax: Arranging words or ideas in order of increasing importance, so the last item is the most significant. Example: I came, I saw, I conquered.",
          "14. Anti-Climax: A sudden drop in importance right after building toward a climax, often for humorous effect. Example: He lost his family, his job, and his house plants."
        ]
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 3,
    dayTitle: "Day 3: Conditionals & Literature",
    topicTitle: "General Concepts of Literature & Elements of Fiction",
    pdfPageRef: "PDF Page 13-14",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Classifying Literary Works",
        items: [
          "By Structure — Fiction: Imaginative narration meant to entertain and make readers think and feel.",
          "By Structure — Non-Fiction: Real-life narration or exposition based on history and fact, meant to convey ideas, theories, or concepts.",
          "By Form — Prose: Written in the ordinary flow of language, in sentences and paragraphs.",
          "By Form — Poetry: Expressed in verse, measure, rhythm, sound, and imaginative language."
        ]
      },
      {
        type: "numbered_list",
        heading: "Elements of Fiction",
        items: [
          "a. Setting: The time and place in which the story occurs.",
          "b. Character: The human beings represented in the story, classified by principality (protagonist/antagonist), development (dynamic/static), and personality (round/flat).",
          "c. Plot: The sequence of events in a story — Exposition (introduces characters and setting), Rising Action (establishes conflict, curiosity, and tension), Climax (the peak of the story), Falling Action (events right after the climax), Denouement (loose plot strands are resolved), and Ending.",
          "d. Conflict: The central tension or challenge of the story. Types include person vs. person, person vs. nature, person vs. society, person vs. supernatural, and person vs. self."
        ]
      },
      {
        type: "bullet_list",
        heading: "General Types of Plot",
        items: [
          "Linear Plot: Events unfold in natural, sequential order.",
          "Circular Plot: The linear story is interrupted to show a past event, then merges back into the main timeline.",
          "In Media Res: The story begins in the middle of the action.",
          "Deus ex Machina: An unexpected power or event resolves a seemingly hopeless situation, functioning as an unnatural plot device."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 3,
    dayTitle: "Day 3: Conditionals & Literature",
    topicTitle: "Point of View, Persona, Theme & Poetry",
    pdfPageRef: "PDF Page 14-15",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Point of View",
        items: [
          "1. First Person: One of the story's characters serves as narrator, and readers see events unfold through that character's eyes.",
          "2. Second Person: Relatively rare in fiction; directly addresses the reader as 'you,' making the reader a character in the story.",
          "3. Third Person: A narrator outside the story uses pronouns like 'he,' 'she,' and 'they.' It has three subtypes — Objective (reveals nothing about characters' internal thoughts), Limited (reveals the thoughts of one character, usually the protagonist), and Omniscient (reveals the thoughts and feelings of all characters)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Persona & Theme",
        items: [
          "Persona: The voice chosen by the author for a particular artistic purpose.",
          "Theme: The significant value or truth about life and its nature, conveyed through the actions, preoccupations, and decisions of the characters."
        ]
      },
      {
        type: "callout",
        heading: "Poetry as a Genre",
        content: "Poetry is a patterned form of written expression of ideas in concentrated, rhythmical terms, often containing the elements of sense, structure, and sound."
      },
      {
        type: "table",
        heading: "Types of Poetry",
        tableData: {
          headers: ["Category", "Description", "Sub-Types"],
          rows: [
            ["Narrative Poetry", "Tells a story in verse.", "Epic (a long poem about a character who embodies society's values); Metrical Tale/Romance (medieval verse on legends, chivalric love, or the supernatural); Ballad (a simple narrative poem in short stanzas, meant for melodious recital)."],
            ["Lyric Poetry", "Expresses the thoughts and feelings of the speaker; intended to be sung.", "Ode (lofty praise or emotional enthusiasm); Elegy (grief over a death or a passing way of life); Sonnet (14 lines with an exact rhyme scheme — Petrarchan: abbaabba/cdecde, Shakespearean: abab cdcd efef gg); Song (meant to be sung); Simple Lyric (lyric poems outside the other categories)."],
            ["Dramatic Poetry", "Any story written in verse and dialogue, intended to be performed on stage for an audience.", "—"]
          ]
        }
      }
    ]
  }
];