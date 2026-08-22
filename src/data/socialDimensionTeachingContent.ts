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

export const SOCIAL_DIMENSION_TEACHING_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: PHILOSOPHICAL FOUNDATION
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Idealism (Plato) & Realism (Aristotle)",
    pdfPageRef: "PDF Page 1-3",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "IDEALISM (Plato)",
        items: [
          "Ideas are the only true reality.",
          "What exists is in the mind only.",
          "Existence of ideas independent from the material world.",
          "Ideas are innate.",
          "Values.",
          "Perfect being (God) and spirits.",
          "'dream' and 'want'"
        ]
      },
      {
        type: "numbered_list",
        heading: "Idealism — Sample Questions",
        items: [
          "1. Teacher Jane is concerned more on conceptual matters since reality is mental. She holds this kind of philosophy: a. Empiricism c. Idealism / b. Realism d. Progressivism",
          "2. If a teacher would say that honesty is still an important value even if no one values it, the teacher can be regarded then as ________. a. Realist c. Idealist / b. Empiricist d. Positivist",
          "3. The values education student teaches faith, hope and love and values which are believed to be permanent values whether they be valued by people or not. Upon what philosophy is this anchored? a. Realism c. Idealism / b. Existentialism d. Pragmatism"
        ]
      },
      {
        type: "bullet_list",
        heading: "REALISM (Aristotle)",
        items: [
          "Reality exists independent of human mind.",
          "Reality is not in the mind but in the external world.",
          "Ultimate reality is the world of physical objects.",
          "Concerned with what is real, what is actual.",
          "Truth is objective — what can be observed.",
          "Fulfill and pursue dreams.",
          "Some supporters: John Amos Comenius & John Locke."
        ]
      },
      {
        type: "numbered_list",
        heading: "Realism — Sample Questions",
        items: [
          "1. Student Anton pursues a degree in Education to fulfill his dream of becoming a Teacher. This action demonstrates this kind of philosophy. a. Progressivism c. Realism / b. Perennialism d. Reconstructivism",
          "2. Teacher Suzanne believes that 'truth exists in objective order and independent of the knower'. She is considered ________. a. Idealist c. Pragmatist / b. Realist d. Essentialist",
          "3. A teacher told a student: 'Your sickness is not on your mind for you are really sick; you have a fever and a flu…' This shows that the teacher adheres to what philosophy. a. Pragmatism c. Idealism / b. Naturalism d. Realism"
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Empiricism (John Locke) & Existentialism (Kierkegaard, Sartre)",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "EMPIRICISM (John Locke)",
        items: [
          "Legitimate knowledge arises from what is provided to the mind by the senses.",
          "Experience through the use of senses is the source of knowledge.",
          "Sources of knowledge are sense-based experience and data."
        ]
      },
      {
        type: "numbered_list",
        heading: "Empiricism — Sample Questions",
        items: [
          "1. When a teacher emphasizes that man's senses should be trusted because this is the only way to acquire knowledge, the teacher can be regarded as _____. A. Naturalist C. Empiricist / B. Realist D. Pragmatist",
          "2. In the schools, we teach realities that cannot be verified by the senses like an invincible god or Allah. Whose beliefs does this practice negate? A. Empiricist C. Skeptics / B. Rationalist D. Stoicists",
          "3. 'Don't just believe because your teacher said so. You must be able to prove with data that such conclusion is correct' is a thought that comes from a/an ______. A. rationalist C. empiricist / B. essentialist D. pragmatist"
        ]
      },
      {
        type: "bullet_list",
        heading: "EXISTENTIALISM (Soren Kierkegaard and Jean Paul Sartre)",
        items: [
          "Reality is subjective.",
          "Individual choice and standards are central; responsibility.",
          "Man's freedom in the accomplishment of his destiny.",
          "Unique individuals.",
          "'choose', 'decide'",
          "Existence precedes essence."
        ]
      },
      {
        type: "numbered_list",
        heading: "Existentialism — Sample Questions",
        items: [
          "1. 'Subject matter should help students understand and appreciate themselves as unique individuals who accept complete responsibility for their thoughts, feelings and actions.' From which philosophy is this thought based? A. Perennialism C. Existentialism / B. Essentialism D. Progressivism",
          "2. Teacher Cris views his students as unique, free choosing and responsible individuals. He encourages them to develop their own individualities. What philosophy does Teacher Cris adhere to? A. Humanism C. Reconstructivism / B. Existentialism D. Essentialism"
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Essentialism (William Bagley) & Perennialism (Robert Hutchins)",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "ESSENTIALISM (William Bagley)",
        items: [
          "Going back to the basics.",
          "Focus on 3Rs (reading, writing and arithmetic).",
          "Subject matter is the center of the educational process.",
          "The teacher is the authority.",
          "Specialization and specialized subjects.",
          "Essence precedes existence."
        ]
      },
      {
        type: "numbered_list",
        heading: "Essentialism — Sample Questions",
        items: [
          "1. This is the defining feature of essentialism? A. Existence preceded essence C. Essence is non-existence / B. Essence preceded existence D. Existence is non-essence",
          "2. Curriculum's essence is back to the basic education. A. Existentialism C. Realism / B. Humanism D. Essentialism"
        ]
      },
      {
        type: "bullet_list",
        heading: "PERENNIALISM (Robert Hutchins)",
        items: [
          "Maintains that education involves confronting the problems and questions that have challenged people over the centuries.",
          "There is a need to study the classical tradition of great books.",
          "Views education as a recurring process based on eternal truths.",
          "Change does not exist; forever is real.",
          "Study of humanities and generalized subjects.",
          "Its curriculum is fixed and subject-centered, relying heavily on the disciplines of literature, math, languages, and history."
        ]
      },
      {
        type: "numbered_list",
        heading: "Perennialism — Sample Questions",
        items: [
          "1. A curriculum should only include those that have survived the test of time and combine the symbols of literature, history and mathematics. Thus, a curriculum like this contains values that are constant and universal. What philosophy describes this kind of curriculum? a) Idealism c) Humanism / b) Perennialism d) Essentialism",
          "2. A school principal emphasizes the importance of the humanities in the curriculum. To which educational philosophy does he adhere? A. Existentialism C. Perennialism / B. Essentialism D. Positivism",
          "3. Specialization is knowing more and more about less and less. Hence, it is better to be a generalist. A. Perennialism C. Pragmatism / B. Essentialism D. Progressivism"
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Utilitarianism (Herbert Spencer) & Pragmatism (Charles Sanders Peirce)",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "UTILITARIANISM (Herbert Spencer)",
        items: [
          "Industrialized society requires VOCATIONAL and PROFESSIONAL EDUCATION based on scientific and practical (utilitarian) objectives rather than on the very general educational goals associated with humanistic and classical education.",
          "To survive in a complex society, Spencer favors specialized education over general education."
        ]
      },
      {
        type: "numbered_list",
        heading: "Utilitarianism — Sample Question",
        items: [
          "1. Why is Spencer's educational thought described as UTILITARIANISM? a. He emphasized vocational and professional education based on scientific and practical objectives / b. He stressed general educational goals associated with humanistic and classical education / c. He stressed a balance of specialized and general education in the curriculum / d. He eliminated the vocational and professional education component of the curriculum"
        ]
      },
      {
        type: "bullet_list",
        heading: "PRAGMATISM (Charles Sanders Peirce)",
        items: [
          "It believes that the meaning of an idea can be determined by the consequence of its tests: if it works in practice, it is true or good.",
          "Believes in change as the essence of reality.",
          "Experimental method.",
          "Practicality and application.",
          "Technical-vocational subjects."
        ]
      },
      {
        type: "numbered_list",
        heading: "Pragmatism — Sample Questions",
        items: [
          "1. In recent curricular revision, the humanities are gradually replaced by technical courses that bear practical consequences. This shows that curricular direction is toward ____. A. Pragmatism C. Idealism / B. Realism D. Essentialism",
          "2. When a teacher is convinced that it is best to teach students the skill to adapt to change since change is the only thing permanent in this world, he/she subscribes to which philosophy? A. Realism C. Pragmatism / B. Existentialism D. Idealism",
          "3. Which idea does the pragmatic teacher reject? A. What works best is true. / B. The world is in constant change. / C. Knowledge is produced by a 'transaction between man and his environment'. / D. Values are objective."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Progressivism (John Dewey) & Behaviorism",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "PROGRESSIVISM (John Dewey)",
        items: [
          "Directly grew from pragmatic philosophy.",
          "Education should focus on the whole child.",
          "Learner is a problem solver who makes meanings through experience.",
          "A learner learns well through active interplay with others.",
          "'Learning by doing' principle.",
          "'Strike while the iron is hot.'",
          "Methods: Scientific method and problem solving."
        ]
      },
      {
        type: "numbered_list",
        heading: "Progressivism — Sample Questions",
        items: [
          "1. Teacher Marie, unlike other teachers in her school, practices the non-traditional method of discussing lessons using not only the book prescribed by the school as the main source of information and knowledge; instead, she devises other means to help students understand better. To what philosophy does Teacher Marie submit? A. Progressivism C. Constructivism / B. Nationalism D. Humanism",
          "2. Teachers have a rich philosophical heritage, one which advocates 'Learning by doing'. This Philosophy has roots in: A. Essentialism C. Perennialism / B. Progressivism D. Existentialism",
          "3. 'Education is a continuous process of experiencing and of visiting or reorganizing experiences' according to a Progressivist. What does it mean? a) Education begins and ends in school / b) Education takes place anytime and anywhere / c) Education happens formally or informally / d) Education goes on throughout life"
        ]
      },
      {
        type: "bullet_list",
        heading: "BEHAVIORISM",
        items: [
          "A behavior can be best explained in terms of responses to external stimuli.",
          "Human beings are shaped entirely by their environment (forced).",
          "Rewards and reinforcement."
        ]
      },
      {
        type: "numbered_list",
        heading: "Behaviorism — Sample Questions",
        items: [
          "1. Giving of rewards and reinforcements are the primary technique of this philosophical point of view. A. Existentialism C. Perennialism / B. Behaviorism D. Progressivism",
          "2. S-R Theory has deep roots in this philosophy: A. Perennialism C. Existentialism / B. Behaviorism D. Progressivism"
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Social Reconstructivism (Counts, Rugg, Brameld) & Rationalism (Rene Descartes)",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "SOCIAL RECONSTRUCTIVISM (George Counts, Harold Rugg, Theodore Brameld)",
        items: [
          "Students are encouraged to become involved in the problems, whether political, social, or economic, that confront society and be able to arrive at solutions in order to reconstruct society.",
          "Declares that the chief purpose of all educational efforts is to 'reconstruct' society in order to meet the cultural crisis of the times."
        ]
      },
      {
        type: "numbered_list",
        heading: "Social Reconstructivism — Sample Questions",
        items: [
          "1. _________ claims that reality is politically, socially and economically formed. A. Progressivist C. Realist / B. Pragmatist D. Reconstructionist",
          "2. In line with the philosophy of Reconstructivism, which of the following should be given emphasis in teaching? a) To seek for a better position in society / b) To compare oneself to the less fortunate / c) To become economically self-reliant / d) To designate one's superiority over the others"
        ]
      },
      {
        type: "bullet_list",
        heading: "RATIONALISM (Rene Descartes)",
        items: [
          "Knowledge can be derived through reason and intuition.",
          "Understanding of the world is based on the use of reason as the means of attaining knowledge."
        ]
      },
      {
        type: "numbered_list",
        heading: "Rationalism — Sample Question",
        items: [
          "1. Which of the following should be the guiding principle of a Rationalist Teacher? a) I must teach the students things that have great impact to culture so that he can be assured of great future / b) I must teach the students of things that will be needed to survive this challenging world / c) I must teach the students of things that will develop his mental power to conceive great ideas / d) I must teach the student of things that will make him love himself and attain the fullness of life"
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "Disciplinism, Naturalism, Hedonism, Epicureanism & Stoicism",
    pdfPageRef: "PDF Page 5-6",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "DISCIPLINISM",
        items: [
          "Formation of Habits.",
          "Formal Discipline.",
          "Drill subjects."
        ]
      },
      {
        type: "bullet_list",
        heading: "NATURALISM",
        items: [
          "Was an educational movement in Europe. The child was to be educated in accordance with natural laws of human development, free from all that was artificial.",
          "Preservation of Natural Goodness of Man and Virtue.",
          "Three modern Principles of Teaching: principle of growth, principle of pupil activity, principle of individualization.",
          "The Order of Nature: need, activity, experience, and knowledge."
        ]
      },
      {
        type: "bullet_list",
        heading: "HEDONISM (Aristippus)",
        items: [
          "Pleasure is the only good thing.",
          "Hedonists will do anything, whether it's morally right or wrong, in order to attain pleasure."
        ]
      },
      {
        type: "bullet_list",
        heading: "EPICUREANISM (Epicurus)",
        items: [
          "A form of ancient hedonism.",
          "The highest pleasure consists of a simple and moderate life; pleasure is attainable only by reason.",
          "We should seek pleasure, but we should not over-indulge in our pleasures."
        ]
      },
      {
        type: "bullet_list",
        heading: "STOICISM (Zeno of Citium)",
        items: [
          "If there are difficulties and adversities, you have to patiently accept them and endure them."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Philosophical Foundation",
    topicTitle: "UNESCO's Pillars of Learning",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Background — Jacques Delors",
        content: "Jacques Delors, who headed the International Commission on Education for the 21st Century, wrote a report for UNESCO entitled 'Learning: the Treasure from Within.' He believed that 'within each child lies a treasure.' The four pillars are seamlessly linked to each other."
      },
      {
        type: "bullet_list",
        heading: "Learning to Know",
        items: [
          "Includes the development of the faculties of memory, imagination, reasoning, and problem-solving.",
          "Learning to learn skills.",
          "It is 'a process of discovery,' going more deeply into the information/knowledge delivered through subject teaching.",
          "Focuses on specialization required of every individual."
        ]
      },
      {
        type: "bullet_list",
        heading: "Learning to Do",
        items: [
          "Application of what learners have learned or known into practice.",
          "Closely linked to vocational-technical education and work skills training.",
          "Implies a shift from skill to competence."
        ]
      },
      {
        type: "bullet_list",
        heading: "Learning to Live Together",
        items: [
          "Vital in building a genuine and lasting culture of peace in the world.",
          "Can be achieved by developing an understanding of others — their history, traditions and spiritual values.",
          "Implies the development of qualities such as: appreciation of the diversity of the human race; empathy and cooperative social behavior in caring and sharing; respect of other people and their cultures and value systems; capability of encountering others and resolving conflicts through dialogue."
        ]
      },
      {
        type: "bullet_list",
        heading: "Learning to Be",
        items: [
          "Learning to be human, learning more about themselves.",
          "Aimed at holistic development of individuals.",
          "Personality development in its intellectual, moral, cultural and physical dimensions."
        ]
      },
      {
        type: "callout",
        heading: "Fifth Pillar of Learning: Learning to Transform",
        content: "When individuals and groups gain knowledge, develop skills, and acquire new values as a result of learning, they are equipped with tools and mindsets for creating lasting change in organizations, communities, and societies."
      }
    ]
  },

  // ==========================================
  // DAY 2: HISTORICAL, LEGAL & INSTITUTIONAL FOUNDATION
  // ==========================================
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "Historical Foundation — Key Periods in Educational History (1000 BC–AD 1600)",
    pdfPageRef: "PDF Page 6-8",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Key Periods in Educational History",
        tableData: {
          headers: ["Period", "Educational Goals", "Curriculum", "Agents", "Influence on Western Education"],
          rows: [
            ["Primitive Societies (7000–5000 B.C.)", "To teach group and survival skills; to cultivate group cohesiveness", "Practical skills of hunting, fishing, food gathering; stories, myths, poems, songs, dances", "Parents, tribal elders, and priest", "Emphasis on the role of informal education in transmission of skills and values"],
            ["Greek (1600–300 B.C.)", "To cultivate civic responsibility and identity with city-state — Athenian: well-rounded person; Spartan: soldiers and military leaders", "Athenian: reading, writing, arithmetic, drama, music, physical education, literature, poetry. Spartan: drill, military songs and tactics", "Athens: private teachers/schools, Sophists, Philosophers. Sparta: Military teachers, drill sergeants", "Athens: concept of the well-rounded, liberally educated person. Sparta: concept of the military state"],
            ["Roman (750 B.C.–A.D. 450)", "To develop sense of civic responsibility for republic and then empire; administrative and military skills", "Reading, writing, arithmetic, Laws of Twelve Tables, law, philosophy", "Private schools and teachers; schools of rhetoric", "Emphasis on using education for practical administrative skills; relating education to civic responsibility"],
            ["Arabic (A.D. 700–1350)", "To cultivate religious commitment to Islamic beliefs; develop expertise in mathematics, medicine, science", "Reading, writing, mathematics, religious literature, scientific studies", "Mosques; court schools", "Arabic numerals and computation; re-entry of classical materials on science and medicine"],
            ["Medieval (A.D. 500–1400)", "To develop religious commitment, knowledge, and ritual; re-establish social order; prepare persons for appropriate roles", "Reading, writing, arithmetic, liberal arts, philosophy, theology, crafts, military tactics and chivalry", "Parish, chantry, cathedral schools; universities; apprenticeship; knighthood", "Establishing the structure, content, and organization of the university; institutionalization and preservation of knowledge"],
            ["Renaissance (A.D. 1350–1500)", "To cultivate a humanist expert in the classics (Greek and Latin); prepare courtiers for service to dynastic leaders", "Latin, Greek, classical literature, poetry, art", "Classical humanist educators and schools (lycee, gymnasium, Latin grammar school)", "Emphasis on literary knowledge, excellence, and style as expressed in classical literature; a two-track system of schools"],
            ["Reformation (A.D. 1500–1600)", "To cultivate commitment to a religious denomination; cultivate general literacy", "Reading, writing, arithmetic, catechism, religious concepts and ritual, Latin and Greek, theology", "Vernacular elementary schools for the masses; classical schools for the upper classes", "Commitment to universal education for the masses; origins of school systems with supervision to ensure doctrinal conformity"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "Legal Foundation — Article XIV of the 1987 Constitution",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Section 1",
        content: "The State shall protect and promote the right of all citizens to quality education at all levels, and shall take appropriate steps to make such education accessible to all."
      },
      {
        type: "numbered_list",
        heading: "Section 2 — The State Shall:",
        items: [
          "1. Establish, maintain, and support a complete, adequate, and integrated system of education relevant to the needs of the people and society.",
          "2. Establish and maintain a system of free public education in the elementary and high school levels. Elementary education is compulsory for all children of school age, without limiting the natural right of parents to rear their children.",
          "3. Establish and maintain a system of scholarship grants, student loan programs, subsidies, and other incentives available to deserving students in both public and private schools, especially the underprivileged.",
          "4. Encourage non-formal, informal, and indigenous learning systems, as well as self-learning, independent, and out-of-school study programs particularly those that respond to community needs.",
          "5. Provide adult citizens, the disabled, and out-of-school youth with training in civics, vocational efficiency, and other skills."
        ]
      },
      {
        type: "bullet_list",
        heading: "Section 3",
        items: [
          "1. All educational institutions shall include the study of the Constitution as part of the curricula.",
          "2. Three conditions to teach religion in public schools: (a) Written consent from parents; (b) Within the regular class hours; (c) Without additional cost to the Government."
        ]
      },
      {
        type: "text",
        heading: "Section 4",
        content: "No educational institution shall be established exclusively for aliens, and no group of aliens shall comprise more than one-third of the enrollment in any school — except for schools for foreign diplomatic personnel and their dependents."
      },
      {
        type: "text",
        heading: "Section 5",
        content: "Academic freedom shall be enjoyed in all institutions of higher learning."
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "The Trifocalized System of Philippine Education",
    pdfPageRef: "PDF Page 9",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Historical Background",
        items: [
          "The Education Act of 1982 created the Ministry of Education, Culture and Sports, which later became the Department of Education, Culture and Sports in 1987 by virtue of Executive Order No. 117.",
          "The structure of DECS remained unchanged until 1994, when the Commission on Higher Education (CHED) and the Technical Education and Skills Development Authority (TESDA) were established to supervise tertiary degree programs and non-degree technical-vocational programs, respectively.",
          "The Congressional Commission on Education (EDCOM) report provided for Congress to pass RA 7722 and RA 7796 to create CHED and TESDA, respectively."
        ]
      },
      {
        type: "table",
        heading: "Trifocalized System of Education",
        tableData: {
          headers: ["Agency", "Legal Basis", "Coverage"],
          rows: [
            ["Commission on Higher Education (CHED)", "RA 7722", "Bachelor's, Master's, and Doctorate degree courses"],
            ["Technical Education and Skills Development Authority (TESDA)", "RA 7796", "Vocational and Technical Education"],
            ["Department of Education (DepEd)", "RA 9155", "Basic education; RA 9155 renamed DECS to DepEd"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Key Concepts",
        items: [
          "School – the HEART of the formal education process.",
          "School head – instructional leader and administrative manager.",
          "Shared governance (Decentralization)."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "RA 11510, RA 10533 & RA 10157",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "RA 11510 (Alternative Learning System Act of 2020)",
        content: "A parallel learning system that provides a viable alternative to the existing formal education instruction. It encompasses both nonformal and informal sources of knowledge and skills. Accreditation and Equivalency Program (A&E Program): Through this program, school dropouts are able to complete elementary and secondary education outside the formal school system."
      },
      {
        type: "callout",
        heading: "RA 10533 (Enhanced Basic Education Act of 2013)",
        content: "At least one (1) year of kindergarten education, six (6) years of elementary education, and six (6) years of secondary education, in that sequence. Secondary education includes four (4) years of junior high school and two (2) years of senior high school education."
      },
      {
        type: "bullet_list",
        heading: "RA 10157 (Kindergarten Education Act of 2012)",
        items: [
          "Declaration of policy: '…all children to avail of accessible mandatory and compulsory kindergarten education.'",
          "Kindergarten education means one (1) year of preparatory education for children AT LEAST FIVE (5) YEARS OLD as a prerequisite for Grade I.",
          "Institutionalization of Kindergarten Education: Kindergarten is hereby institutionalized as part of basic education; for school year 2011-2012, it was implemented partially.",
          "Medium of Instruction: The State shall adopt the mother tongue-based multilingual education (MTB-MLE) method."
        ]
      },
      {
        type: "bullet_list",
        heading: "Exceptions to MTB-MLE",
        items: [
          "(a) When pupils in the kindergarten classroom have different mother tongues, or when some speak another mother tongue.",
          "(b) When the teacher does not speak the mother tongue of the learners.",
          "(c) When resources, in line with the use of the mother tongue, are not yet available.",
          "(d) When teachers are not yet trained how to use the MTB-MLE program."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "RA 10912 (CPD Act) & RA 4670 (Magna Carta for Public School Teachers)",
    pdfPageRef: "PDF Page 10-11",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "RA 10912 (Continuing Professional Development Act of 2016)",
        items: [
          "45 units/CPD points to renew license.",
          "On February 7, PRC issued Resolution No. 2019-1146, outlining the new Implementing Rules and Regulations (IRR) of the CPD Law. From 45 units, it's now down to 15 units every three years."
        ]
      },
      {
        type: "bullet_list",
        heading: "R.A. 4670 — The Magna Carta for Public School Teachers",
        items: [
          "Sec. 1 (Declaration of Policy): To promote and improve the social and economic status of public-school teachers, their living and working conditions, terms of employment and career prospects.",
          "Sec. 2 (Title Definition): Known as the 'Magna Carta for Public School Teachers'; applies to all public-school teachers except those in the professorial staff of state colleges and universities.",
          "Sec. 11 (Married Teachers): Proper authorities shall enable married couples, both public school teachers, to be employed in the same locality whenever possible.",
          "Sec. 12 (Academic Freedom): Teachers shall enjoy academic freedom in the discharge of their professional duties, particularly regarding teaching and classroom methods.",
          "Sec. 13 (Teaching Hours): Regular school hours: 8; Regular class hours: 6. Any teacher may render more than six but not exceeding eight hours of actual classroom teaching a day upon payment of additional compensation at the same rate as regular remuneration plus at least 25% of basic pay.",
          "Sec. 16 (Salary Scale): Salary scales shall provide for a gradual progression from a minimum to a maximum salary by means of regular increments, granted automatically after three years.",
          "Sec. 19 (Special Hardship Allowances): Teachers exposed to hardship (e.g. difficulty commuting or other hazards) shall be compensated special hardship allowances equivalent to at least 25% of their monthly salary.",
          "Sec. 22 (Medical Examination and Treatment): Compulsory medical examination shall be free of charge before teaching and repeated at least once a year. If treatment/hospitalization is necessary, it shall be provided free by the government entity paying the teacher's salary.",
          "Sec. 23 (Compensation for Injuries): Teachers shall be protected against employment injuries; physical and nervous strain effects on health shall be recognized as compensable occupational disease.",
          "Sec. 24 (Study Leave): 7 years of public-school service required before eligibility; study leaves not exceeding one year, at 60% of monthly salary; may be extended as approved by DepEd, but without compensation.",
          "Sec. 25 (Indefinite Leave): An indefinite sick leave shall be granted when the illness demands treatment exceeding one year at the least.",
          "Sec. 26 (Salary Increase upon Retirement): Teachers fulfilling age and service requirements shall be given one range salary raise upon retirement, as basis for computing the lump sum retirement pay and monthly benefits.",
          "Additional Key Point — Provisional Teachers: Those who possess the minimum qualifications but lack the appropriate civil service eligibility."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Historical, Legal & Institutional Foundation",
    topicTitle: "PD 1006 — Decree Professionalizing Teaching",
    pdfPageRef: "PDF Page 11",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Who Are Considered Teachers?",
        items: [
          "Elementary teachers",
          "High school teachers",
          "Guidance counselors",
          "School librarians",
          "Industrial arts or vocational teachers",
          "School head/principal"
        ]
      },
      {
        type: "table",
        heading: "PD 1006 Key Facts",
        tableData: {
          headers: ["Question", "Answer"],
          rows: [
            ["Who creates and conducts the exam?", "National Board for Teachers"],
            ["What is the written examination called?", "Philippine Board Examination for Teachers (PBET)"],
            ["How to pass the exam?", "General average of at least 70%, with no rating below 50% in any subject"],
            ["What can you get after passing?", "Professional Certificate"],
            ["Who are exempted?", "1. Teachers who passed exams given by Civil Service Commission (CSC) and DEC. 2. Teachers with permanent positions under RA 4670."]
          ]
        }
      }
    ]
  },

  // ==========================================
  // DAY 3: RA 7836 & CODE OF ETHICS FOR PROFESSIONAL TEACHERS
  // ==========================================
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "RA 7836 (Philippine Teachers Professionalization Act) — Objectives, Definitions & Scope of Examination",
    pdfPageRef: "PDF Page 11-12",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Section 3 — Objectives",
        items: [
          "(a) The promotion, development and professionalization of teachers and the teaching profession.",
          "(b) The supervision and regulation of the licensure examination."
        ]
      },
      {
        type: "bullet_list",
        heading: "Section 4 — Definition of Terms",
        items: [
          "(a) 'Teaching' — refers to the profession concerned primarily with classroom instruction, at the elementary and secondary levels, in accordance with the curriculum prescribed by DECS, whether on part-time or full-time basis in private or public schools.",
          "(b) 'Teachers' — elementary teachers, high school teachers, industrial arts or vocational teachers, school head/principal.",
          "(c) 'Board' — refers to the Board for Professional Teachers.",
          "(d) 'Commission' — refers to the Professional Regulation Commission."
        ]
      },
      {
        type: "text",
        heading: "Section 13 — Examination, Registration and License Required",
        content: "Written examination – Licensure Examination for Teachers (LET). A valid certificate of registration and a valid professional license from the Commission are required before any person is allowed to practice as a professional teacher."
      },
      {
        type: "table",
        heading: "Section 14 — Scope of Examination",
        tableData: {
          headers: ["Program", "General Education", "Professional Education", "Specialization"],
          rows: [
            ["BEEd", "40%", "60%", "—"],
            ["BSEd", "20%", "40%", "40%"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "RA 7836 — Qualification Requirements & Registration Process",
    pdfPageRef: "PDF Page 12",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Section 15 — Qualification Requirements of Applicants",
        items: [
          "(a) A citizen of the Philippines or an alien whose country has reciprocity with the Philippines in the practice of the teaching profession.",
          "(b) At least eighteen (18) years of age.",
          "(c) In good health and of good reputation with high moral values.",
          "(d) Has not been convicted by final judgment by a court for an offense involving moral turpitude.",
          "(e) A graduate of a school, college or university recognized by the government, possessing minimum educational qualifications: Preschool – BECED; K and Elementary – BEED; Secondary – BSED; Arts and Science graduate – 10 units in professional education; Vocational and Technical courses – 18 units in professional education (bachelor's degree in the field of specialization)."
        ]
      },
      {
        type: "text",
        heading: "Section 16 — Report of the Results of the Examination",
        content: "The Board shall, within one hundred twenty (120) days after the examination, report the ratings obtained by each candidate to the Professional Regulation Commission for approval and appropriate action."
      },
      {
        type: "text",
        heading: "Section 17 — Issuance of Certificate of Registration and Professional License",
        content: "The registration of a professional teacher commences from the date his name is enrolled in the roster of professional teachers."
      },
      {
        type: "text",
        heading: "Section 18 — Oath Before Practice",
        content: "Every registrant shall be required to take his professional oath before practicing as a professional teacher."
      },
      {
        type: "text",
        heading: "Section 22 — Integration of the Teaching Profession",
        content: "Upon registration with the Board, every professional teacher shall be encouraged to become a member of the integrated national organization."
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "RA 7836 Section 23 — Grounds for Revocation, Suspension & Cancellation",
    pdfPageRef: "PDF Page 12-13",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "The Board shall have the power, after due notice and hearing, to suspend or revoke the certificate of registration of any registrant for any of the following causes:"
      },
      {
        type: "bullet_list",
        items: [
          "(a) Conviction for any criminal offense by a court of competent jurisdiction.",
          "(b) Immoral, unprofessional or dishonorable conduct.",
          "(c) Declaration by a court of competent jurisdiction of being mentally unsound or insane.",
          "(d) Malpractice, gross incompetence, gross negligence or serious ignorance of the practice of the teaching profession.",
          "(e) Use or perpetration of any fraud or deceit in obtaining a certificate of registration, professional license or special/temporary permit.",
          "(f) Chronic inebriety or habitual use of drugs.",
          "(g) Violation of any provisions of the Act, the rules and regulations, and other policies of the Board and the Commission, and the code of ethical and professional standards for professional teachers.",
          "(h) Unjustified or willful failure to attend seminars, workshops, conferences and the like, or the continuing education program prescribed by the Board and the Commission."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "RA 7836 Sec. 26 Registration & Exception, RA 10533 Sec. 8, and Penal Provisions",
    pdfPageRef: "PDF Page 13-14",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Section 26 — Registration and Exception",
        items: [
          "Two (2) years after the effectivity of this Act, no person shall engage in teaching and/or act as a professional teacher, whether in preschool, elementary or secondary level, unless duly registered and holding a valid certificate of registration and professional license, or a valid special/temporary permit.",
          "Upon approval and payment of fees, the certificate of registration and professional license shall be issued without examination to a qualified applicant who, at the time of approval of this Act, is a holder of Civil Service Eligibility under CSC and DECS, or a holder of a Professional Teacher Certificate under DECS and P.D. 1006."
        ]
      },
      {
        type: "callout",
        heading: "RA 10533, Sec. 8 — Hiring of Graduates of Science, Math, Statistics, Engineering, and Other Specialists",
        content: "Notwithstanding Sections 26, 27 and 28 of RA 7836, DepEd and private education institutions shall hire graduates of science, mathematics, statistics, engineering, music and other degree courses with shortages in qualified LET applicants, to teach in their specialized subjects — provided they pass the LET within five (5) years after hiring; if teaching on a part-time basis, the LET requirement no longer applies."
      },
      {
        type: "bullet_list",
        heading: "Section 28 — Penal Provisions (Fine of P5,000–P20,000 and/or imprisonment of 6 months–5 years)",
        items: [
          "a. Any person who practices the teaching profession in the Philippines without being certified.",
          "b. Any person who represents or attempts to use as his own certificate of registration that of another.",
          "c. Any person who gives any false evidence to the Board in obtaining a certificate of registration as teacher.",
          "d. Any person who impersonates any registrant of the same or different name.",
          "e. Any person who uses a revoked or suspended certificate of registration.",
          "f. Any person who uses or advertises any title or description implying he is a teacher without holding a valid certificate."
        ]
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "RA 9293 — Amendments to the Philippine Teachers Professionalization Act",
    pdfPageRef: "PDF Page 13-14",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "RA 9293 is an act amending certain sections of RA 7836, otherwise known as the 'Philippine Teachers Professionalization Act of 1994'."
      },
      {
        type: "bullet_list",
        heading: "Section 15 — Qualification Requirements of Applicants (as amended)",
        items: [
          "Preschool: BECED",
          "K and Elementary: BEED",
          "Secondary: BSED",
          "Arts and Science graduate: 18 units in professional education",
          "Vocational and Technical courses: 18 units in professional education (bachelor's degree in the field of specialization)"
        ]
      },
      {
        type: "bullet_list",
        heading: "Section 26 — Registration and Exception (as amended)",
        items: [
          "Professional teachers who have not practiced their profession for the past 5 years shall take at least 6 units of pedagogy and 6 units of content courses, or the equivalent training and number of hours.",
          "Those who failed the licensure examination with a rating not lower than five percentage points from the passing general average rating shall be eligible as para-teachers upon issuance of a two-year special permit, renewable for a non-extendible period of 2 years.",
          "Para-teachers shall be assigned to areas where there is a shortage or absence of a professional teacher, as identified by DepEd and the ARMM Education Department to the Board and the Commission.",
          "A special permit may also be issued to a person who has excelled and gained international recognition and is a widely acknowledged expert in his/her field of specialization."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Teaching as a Profession & the Code of Ethics — Preamble and Scope",
    pdfPageRef: "PDF Page 14",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Teaching is a PROFESSION. It Requires:",
        items: [
          "1. Long years of initial professional education.",
          "2. The attainment of a college/university degree recognized by a regulatory body, CHED.",
          "3. A licensure examination called the Licensure Examination for Professional Teachers (LEPT).",
          "4. Continuing Professional Development.",
          "5. Adherence to the Code of Ethics for Professional Teachers."
        ]
      },
      {
        type: "callout",
        heading: "Code of Ethics for Professional Teachers — Legal Basis",
        content: "Pursuant to paragraph (e), Article II, of R.A. No. 7836 (Philippine Teachers Professionalization Act of 1994) and paragraph (a), section 6, P.D. No. 223, as amended, the Board for Professional Teachers hereby adopts the Code of Ethics for Professional Teachers."
      },
      {
        type: "quote",
        heading: "Preamble",
        content: "Duly licensed professionals who possess dignity and reputation with high moral values as well as technical and professional competence. In the practice of their noble profession, they strictly adhere to, observe, and practice this set of ethical and moral principles, standards and values."
      },
      {
        type: "text",
        heading: "Scope and Limitations",
        content: "The Code of Ethics covers all public and private school teachers in all educational institutions at the preschool, primary, elementary, and secondary levels, whether academic, vocational, special, technical, or non-formal."
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Code of Ethics — The Teacher and the State",
    pdfPageRef: "PDF Page 14-15",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "The Teacher and the State",
        items: [
          "Section 1: Schools are nurseries of the state; each teacher is a trustee of the cultural and educational heritage of the nation.",
          "Section 5: A teacher shall not engage in the promotion of any political, religious, or other partisan interest, and shall not, directly or indirectly, solicit, require, collect, or receive any money or service or other valuable material from any person or entity for such purposes.",
          "Section 6: Every teacher shall vote and shall exercise all other constitutional rights and responsibilities.",
          "Section 7: A teacher shall not use his position or official authority or influence to coerce any other person to follow any political course of action."
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Code of Ethics — The Teacher, the Community, and the Profession",
    pdfPageRef: "PDF Page 15",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "The Teacher and the Community",
        items: [
          "Section 3: Every teacher shall merit reasonable social recognition, behaving with honour and dignity at all times, refraining from gambling, smoking, drunkenness, other excesses, and illicit relations.",
          "Section 4: Every teacher shall live for and with the community, studying and understanding local customs and traditions to have a sympathetic attitude and refrain from disparaging the community."
        ]
      },
      {
        type: "bullet_list",
        heading: "A Teacher and the Profession",
        items: [
          "Section 1: Every teacher shall actively ensure that teaching is the noblest profession, and shall manifest genuine enthusiasm and pride in teaching as a noble calling.",
          "Section 3: Every teacher shall participate in the Continuing Professional Education (CPE) program of the Professional Regulation Commission."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Teachers and the Profession",
        items: [
          "Section 1: When the best interest of the learners, the school, or the profession is at stake in any controversy, teachers shall support one another.",
          "Section 2: A teacher is not entitled to claim credit for work not of his own, and shall give due credit for the work of others which he may use.",
          "Section 3: Before leaving his position, a teacher shall organize for whoever assumes the position such records and other data as are necessary to carry on the work.",
          "Section 5: Every teacher may seek correctives for what may appear to be unprofessional and unethical conduct of any associate, only if there is incontrovertible evidence for such conduct.",
          "Section 6: A teacher may submit to the proper authorities any justifiable criticism against an associate, preferably in writing, without violating the right of the individual concerned."
        ]
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Code of Ethics — Higher Authorities and the Learners",
    pdfPageRef: "PDF Page 15-16",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "The Teacher and the Higher Authorities in the Profession",
        content: "Section 1: Every teacher shall make it his duty to make an honest effort to understand and support the legitimate policies of the school and the administration, regardless of personal feeling or private opinion, and shall faithfully carry them out."
      },
      {
        type: "bullet_list",
        heading: "The Teacher and Learners",
        items: [
          "Section 1: A teacher has a right and duty to determine the academic marks and promotions of learners, provided such determination is in accordance with generally accepted procedures of evaluation and measurement.",
          "Section 2: A teacher shall recognize that the interest and welfare of learners are of first and foremost concern, and shall deal justifiably and impartially with each of them.",
          "Section 3: Under no circumstance shall a teacher be prejudiced or discriminate against a learner.",
          "Section 4: A teacher shall not accept favors or gifts from learners, their parents or others on their behalf in exchange for requested concessions, especially if undeserved.",
          "Section 5: A teacher shall not accept, directly or indirectly, any remuneration from tutorials other than what is authorized for such service.",
          "Section 6: A teacher shall base the evaluation of the learner's work only on merit and quality of academic performance.",
          "Section 7: In a situation where mutual attraction and subsequent love develop between teacher and learner, the teacher shall exercise utmost professional discretion to avoid scandal, gossip and preferential treatment of the learner.",
          "Section 8: A teacher shall not inflict corporal punishment on offending learners, nor make deductions from their scholastic ratings as punishment for acts which clearly are not a manifestation of poor scholarship."
        ]
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Code of Ethics — Teacher and Parents, Teacher and Business",
    pdfPageRef: "PDF Page 16",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "The Teacher and Parents",
        items: [
          "Section 1: Every teacher shall establish and maintain cordial relations with parents, and shall conduct himself to merit their confidence and respect.",
          "Section 2: Every teacher shall inform parents, through proper authorities, of the progress and deficiencies of learners under him, exercising utmost candour and tact in pointing out deficiencies and seeking parents' cooperation.",
          "Section 3: A teacher shall hear parents' complaints with sympathy and understanding, and shall discourage unfair criticism."
        ]
      },
      {
        type: "text",
        heading: "Teacher and Business",
        content: "Section 1: A teacher has the right to engage, directly or indirectly, in legitimate income generation, provided that it does not relate to or adversely affect his work as a teacher."
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Self-Study: Historical Foundation — Pre-Hispanic to Democracy Period",
    pdfPageRef: "PDF Page 16-17 (For Personal Study Only)",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "A. Pre-Hispanic Education",
        content: "Education was informal, functional, and communal."
      },
      {
        type: "bullet_list",
        heading: "B. Spanish Education",
        items: [
          "The Royal Decree of 1555 of King Carlos I mandated the three goals of Spanish education: indoctrination of Christianity, promotion of the Spanish language, and imposition of Spanish culture.",
          "Education of the Filipino was mainly learning the Christian doctrine — simple catechism, not the same as Christian education in Europe.",
          "The vernacular, not Spanish, was used as the medium of instruction in the parochial schools.",
          "The religious orders introduced the parochial school concept practiced in Europe during the Dark Ages.",
          "The rise of parochial schools started in Cebu in 1565 by the Augustinian missionaries.",
          "The Royal Decree of 1863, penned by Minister Jose de la Concha, was the Spaniards' first ATTEMPT to establish an overall public school system. One primary school for boys and another for girls were established in each municipality. It also provided for the training of teachers through a normal school attached to 'Escuela Pia,' now Ateneo de Manila University."
        ]
      },
      {
        type: "bullet_list",
        heading: "C. American Education",
        items: [
          "The Education Act of 1901 (Act No. 74 of the Philippine Commission) was promulgated to establish a Department of Public Instruction.",
          "Sections 1-13: Meant to establish a highly centralized system.",
          "Sections 14-15: Provided for the importation of teachers (the 'Thomasites').",
          "Section 16: Provided for the separation of Church and State.",
          "Section 17: Created the Philippine Normal School."
        ]
      },
      {
        type: "bullet_list",
        heading: "D. Japanese Education",
        items: [
          "Japanese educational policies were embodied in Military Order No. 2 in 1942.",
          "On Oct. 14, 1943, the Japanese-sponsored Republic created the Ministry of Education.",
          "Teaching of Tagalog, Philippine History & Character Education was reserved for Filipinos.",
          "Golden Age of Tagalog Language and Literature.",
          "Love for work and dignity of labor was emphasized."
        ]
      },
      {
        type: "text",
        heading: "E. Period of Democracy",
        content: "In 1972, it became the Department of Education and Culture by virtue of Proclamation 1081."
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Self-Study: Code of Ethics — Additional Sections on State & Community",
    pdfPageRef: "PDF Page 17 (For Personal Study Only)",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "The Teacher and the State (Additional Sections)",
        items: [
          "Section 2: Every teacher or school official shall actively help carry out the declared policies of the state, and shall take an oath to this effect.",
          "Section 3: Every teacher shall be physically, mentally and morally fit.",
          "Section 4: Every teacher shall possess and actualize a full commitment and devotion to duty.",
          "Section 8: Every teacher shall enjoy academic freedom and the privilege of expounding the product of his researches and investigations; if results are inimical to declared State policies, they shall be brought to proper authorities for appropriate remedial action."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Teacher and the Community (Additional Sections)",
        items: [
          "Section 1: A teacher is a facilitator of learning and of the development of the youth; he shall render the best service by providing an environment conducive to such learning and growth.",
          "Section 2: Every teacher shall provide leadership and initiative to actively participate in community movements for moral, social, educational, economic and civic betterment.",
          "Section 5: Every teacher shall help the school keep the people in the community informed about the school's work, accomplishments, needs and problems.",
          "Section 6: Every teacher is an intellectual leader in the community, especially in the barangay, and shall welcome opportunities to provide leadership, extend counselling services, and be actively involved in matters affecting community welfare.",
          "Section 7: Every teacher shall maintain harmonious and pleasant personal and official relations with other professionals, government officials, and the people, individually or collectively.",
          "Section 8: A teacher possesses freedom to attend church and worship as appropriate, but shall not use his position and influence to proselyte others."
        ]
      }
    ]
  },
  {
    pageNumber: 27,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Self-Study: Code of Ethics — Additional Sections on Profession & Higher Authorities",
    pdfPageRef: "PDF Page 18 (For Personal Study Only)",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "A Teacher and the Profession (Additional Sections)",
        items: [
          "Section 2: Every teacher shall uphold the highest possible standards of quality education and shall be at his best at all times in the practice of his profession.",
          "Section 4: Every teacher shall help, if duly authorized, to seek support from the school, but shall not make improper misrepresentations through personal advertisements and other questionable means.",
          "Section 5: Every teacher shall use the teaching profession in a manner that makes it a dignified means for earning a decent living."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Teachers and the Profession (Additional Sections)",
        items: [
          "Section 4: A teacher shall hold inviolate all confidential information concerning associates and the school, and shall not divulge to anyone documents not officially released, or remove records from files without permission.",
          "Section 7: A teacher may apply for a vacant position for which he is qualified, provided he respects the system of selection based on merit and competence, and that all qualified candidates are given the opportunity to be considered."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Teacher and the Higher Authorities in the Profession (Additional Sections)",
        items: [
          "Section 2: A teacher shall not make any false accusations or charges against superiors, especially under anonymity; if there are valid charges, he should present them under oath to competent authority.",
          "Section 3: A teacher shall transact all official business through channels, except when special conditions warrant a different procedure — such as when advocated conditions are opposed by immediate superiors, in which case the teacher shall appeal directly to the appropriate higher authority.",
          "Section 4: Every teacher, individually or as part of a group, has a right to seek redress against injustice and raise grievances within acceptable democratic processes, while avoiding jeopardizing the interest and welfare of learners.",
          "Section 5: Every teacher has a right to invoke the principle that appointments, promotions, and transfers are made only on the basis of merit and need in the interest of the service.",
          "Section 6: A teacher who accepts a position assumes a contractual obligation to live up to his contract, with full knowledge of employment terms and conditions."
        ]
      }
    ]
  },
  {
    pageNumber: 28,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Self-Study: Code of Ethics — Additional Sections on Learners, Business & the Teacher as a Person",
    pdfPageRef: "PDF Page 18-19 (For Personal Study Only)",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        heading: "The Teacher and Learners (Additional Section)",
        content: "Section 9: A teacher shall ensure that conditions contributing to the maximum development of learners are adequate, and shall extend needed assistance in preventing or solving learners' problems and difficulties."
      },
      {
        type: "bullet_list",
        heading: "Teacher and Business (Additional Sections)",
        items: [
          "Section 2: A teacher shall maintain a good reputation with respect to financial matters, such as in the settlement of debts and loans and in arranging satisfactorily his private financial affairs.",
          "Section 3: No teacher shall act, directly or indirectly, as agent of, or be financially interested in, any commercial venture that furnishes textbooks and other school commodities in whose purchase and disposal he can exercise official influence, except when his assignment is inherently related to such purchase and disposal."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Teacher as a Person",
        items: [
          "Section 3: A teacher shall maintain at all times a dignified personality which could serve as a model worthy of emulation by learners, peers and all others.",
          "Section 4: A teacher shall always recognize the Almighty God as guide of his own destiny and of the destinies of men and nations."
        ]
      }
    ]
  },
  {
    pageNumber: 29,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "DepEd Order No. 007, s. 2023 — Criteria and Point System for Hiring Teacher I",
    pdfPageRef: "PDF Page 19-20",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "These criteria and point system cover the selection and hiring of teacher applicants to Teacher I positions in Kindergarten, Elementary, Junior High School (JHS), and Senior High School (SHS). For SHS, the same criteria apply to permanent, provisional, or contractual status hiring."
      },
      {
        type: "bullet_list",
        heading: "Comparative Assessment Criteria",
        items: [
          "a. Education — units and/or degree relevant to the position, exceeding minimum requirements as defined in the CSC-approved QS.",
          "b. Training — hours in Curriculum and Instruction and/or other specialized training exceeding minimum requirements, acquired in the last five (5) years. For SHS, training may be relevant to the learning area, specialization, or strand.",
          "c. Experience — teaching experience exceeding minimum requirements. For SHS, relevant industry and/or work experience may be considered.",
          "d. PBET/LET/LEPT Rating.",
          "e. PPST Classroom Observable Indicators (COI), measured through Classroom Observation/Demonstration Teaching.",
          "f. PPST Non-Classroom Observable Indicators (NCOI), measured through the Teacher Reflection Form (TRF)."
        ]
      },
      {
        type: "table",
        heading: "Point System for Comparative Assessment: Teacher I Positions",
        tableData: {
          headers: ["Criteria", "Maximum Points Possible"],
          rows: [
            ["a. Education", "10"],
            ["b. Training", "10"],
            ["c. Experience", "10"],
            ["d. PBET/LET/LEPT Rating", "10"],
            ["e. PPST COIs (Classroom Observation/Demonstration Teaching)", "35"],
            ["f. PPST NCOIs (Teacher Reflection)", "25"],
            ["Total", "100"]
          ]
        }
      },
      {
        type: "callout",
        heading: "PBET/LET/LEPT Rating Formula",
        content: "Points(PBET/LET/LEPT) = (PBET/LET/LEPT rating ÷ 100) × WA(PBET/LET/LEPT). Illustrative example: x = 82.75, WA = 10 → Points = (82.75 ÷ 100) × 10 = 8.275 points."
      }
    ]
  },
  {
    pageNumber: 30,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Selected DepEd Programs",
    pdfPageRef: "PDF Page 20-21",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Policy Research Program",
        content: "Aims to strengthen evidence-based decision-making through the oversight, promotion, and conduct of policy development, research, and sector monitoring and evaluation."
      },
      {
        type: "callout",
        heading: "DepEd Computerization Program",
        content: "Improves quality education by equipping public schools with relevant technology (e-classroom kits) that enhance the teaching-learning process and address 21st century technological challenges."
      },
      {
        type: "bullet_list",
        heading: "Brigada Eskwela",
        items: [
          "Began in May 2003 (now August, due to calendar shift).",
          "Observed every May of each year.",
          "Capitalizes on the bayanihan spirit."
        ]
      },
      {
        type: "text",
        heading: "Alternative Delivery Modes (ADMs)",
        content: "Allows schools to deliver quality education to marginalized students and those at risk of dropping out — an alternative way of delivering education to learners who are enrolled in school but for some reason cannot attend regularly."
      },
      {
        type: "text",
        heading: "Madrasah Education Program",
        content: "A comprehensive program in public and private schools that aims to provide appropriate and relevant educational opportunities within the context of Muslim culture, customs, traditions, and interests, through the integration of the Arabic Language and Islamic Values Education (ALIVE) in the basic education curriculum."
      },
      {
        type: "bullet_list",
        heading: "Child Friendly School System (CFSS)",
        items: [
          "A project of the United Nations Children's Fund (UNICEF) and DepEd.",
          "Desired outcomes for children: to be healthy, well nourished, free from exploitation, violence and labor; to be aware of their rights; to be able to protect themselves; to be able to participate in decisions affecting their lives in accordance with their evolving capacities; to respect diversity, practice equality and resolve differences."
        ]
      },
      {
        type: "bullet_list",
        heading: "Every Child A Reader Program (ECARP)",
        items: [
          "To develop pupils' reading and communication skills by Grade 3.",
          "8-week curriculum provides Grade I pupils adequate home-to-school transition and readiness experience."
        ]
      }
    ]
  },
  {
    pageNumber: 31,
    dayNumber: 3,
    dayTitle: "Day 3: RA 7836 & Code of Ethics",
    topicTitle: "Relevant Laws Related to Education",
    pdfPageRef: "PDF Page 21",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Relevant Laws Related to Education",
        tableData: {
          headers: ["Law", "Title"],
          rows: [
            ["Batas Pambansa Blg. 232", "Education Act of 1982"],
            ["Act. No. 74", "Education Act of 1901"],
            ["Act No. 2706", "Private School Law of 1917"],
            ["RA 896", "Elementary Education Act of 1953"],
            ["RA 1265", "An Act Making Flag Ceremony Compulsory in All Educational Institutions"],
            ["RA 1425", "Rizal Law"],
            ["RA 6655", "Free Public Secondary Education Act of 1988"],
            ["RA 7610", "Special Protection of Children Against Abuse, Exploitation, and Discrimination Act"],
            ["RA 7877", "Anti-Sexual Harassment Act"],
            ["RA 9262", "Anti-Violence Against Women and their Children"],
            ["RA 10650", "Open Distance Learning Act"],
            ["RA 8491", "Flag and Heraldic Code of the Philippines"],
            ["RA 8190", "Localization Law"],
            ["RA 7277", "Magna Carta for Disabled Persons"],
            ["RA 8525", "Adopt-A-School Act of 1998"],
            ["RA 6728", "Government Assistance to Students and Teachers in Private Education Act"]
          ]
        }
      }
    ]
  }
];

export const SOCIAL_DIMENSION_PAGES = SOCIAL_DIMENSION_TEACHING_PAGES;
