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

export const UNDERSTANDING_THE_SELF_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: THE SELF — PHILOSOPHICAL, SOCIOLOGICAL,
  // ANTHROPOLOGICAL & PSYCHOLOGICAL PERSPECTIVES
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Philosophical Perspective",
    topicTitle: "Ancient Philosophers: Socrates",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "The Self from a Philosophical Point of View",
        content: "This topic discusses who the person is from a philosophical point of view, spanning Ancient Philosophers (Socrates, Plato, Aristotle), Medieval Philosophers (St. Augustine, St. Thomas Aquinas), Modern Philosophers (Descartes, Locke, Kant), and Contemporary Philosophers (Merleau-Ponty, Ryle, Churchland)."
      },
      {
        type: "bullet_list",
        heading: "Socrates (469–399 B.C.) — Forerunner of Western Philosophy",
        items: [
          "The self is composed of the physical, tangible, and mortal body (which changes) and the immortal, unchanging soul.",
          "Body and soul are attached while a person is alive; both parts of the self are present in the physical realm.",
          "Upon death, the soul travels to the ideal realm, making the soul immortal.",
          "The true self is NOT to be identified with what we own, our social status, our reputation, or even our body — Socrates maintained that our true self is our soul.",
          "Known for his dictum 'Ignorance is the beginning of wisdom' and his advice 'Know Thyself.'",
          "Accepting our ignorance is what prods us to know ourselves, our powers, and our limitations. Knowing ourselves means acquiring true, practical knowledge used to improve ourselves by capitalizing on our powers to fight our limitations.",
          "Knowing ourselves does not only mean knowing that we are men/women — it is knowing what kind of men/women we are."
        ]
      },
      {
        type: "quote",
        content: "Socrates is also famous for the quote: 'The unexamined life is not worth living.' An examining, thinking, and investigating self is what the self essentially is."
      },
      {
        type: "text",
        heading: "Socrates' Trial and Death",
        content: "Socrates was accused of corrupting the youth of Athens, who under his tutelage began to question their parents' wisdom and religious beliefs. Socrates preferred death to exile, using his death as a final lesson for his students — to face the adversities of life calmly and squarely rather than flee like chickens and ducks when faced with storms in life."
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Philosophical Perspective",
    topicTitle: "Ancient Philosophers: Plato & Aristotle",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Plato (428–348 B.C.) — The Tripartite Soul",
        items: [
          "\"Self is an immortal soul in a mortal, perishable body.\"",
          "The soul is tripartite in nature — each person's soul is divided into three parts.",
          "a. Immortal, Rational (Soul): seeks truth and uses logical reasoning; located in the head.",
          "b. Courageous (Spirited) Part: causes people to experience strong emotions; located in the chest.",
          "c. Appetitive Part: located in the abdomen; deals with bodily desires and cannot resist appetites (including food, power, and sex)."
        ]
      },
      {
        type: "quote",
        content: "In Book IV of Plato's Republic, the soul is the giver of life to the body — the permanent, changeless, divine element as opposed to the changing, transitory, perishable body. This makes the self 'a soul using the body,' and the body is just a shell of the soul; life's journey is a continuous striving to free the soul from its imprisonment in the body."
      },
      {
        type: "bullet_list",
        heading: "Aristotle (384–322 B.C.) — Body and Soul as a Composite",
        items: [
          "The human person is NOT a soul distinct from a human body — the human person is a composite of body and soul.",
          "The self is composed of: (1) Body and Soul, (2) Passion and Reason, (3) Mind and Matter, (4) Sense and Intellect.",
          "Reason is supreme in a human person and should govern all life's activities.",
          "When the senses (the lower nature) dominate a person's life, he/she tends to live a chaotic life; when reason rules over the senses, the person tends to live a happy life.",
          "Aristotle did not neglect the development of a person's personal, physical, economic, and social powers — human happiness is the harmonious development of the whole self.",
          "Aristotle taught the Theory of the Golden Mean, meaning moderation — avoiding extremes, avoiding too much and too little."
        ]
      },
      {
        type: "quote",
        content: "\"Living a life of moderation is doing things in consonance with reason.\" — Aristotle"
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Philosophical Perspective",
    topicTitle: "Medieval Philosophers: St. Augustine & St. Thomas Aquinas",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "St. Augustine (354–430 AD)",
        items: [
          "The self is made up of a body and a soul — \"a soul in possession of a body\" which does not constitute two persons but one man.",
          "St. Augustine's concept of the self is framed in the context of his relation to God.",
          "Happiness can be found in God alone."
        ]
      },
      {
        type: "bullet_list",
        heading: "St. Thomas Aquinas (1225–1274 AD)",
        items: [
          "A human person can know the truth with certainty by the use of his reason.",
          "Some truths can be perceived only with the aid of the light of divine revelation.",
          "Truths from reason and from divine revelation can never contradict each other because they emanate from the same source — God, who is Truth itself.",
          "He believed the human soul is restless and imperfect until it rests in God.",
          "The self finds perfect happiness only in God."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Philosophical Perspective",
    topicTitle: "Modern Philosophers: Descartes, Locke & Kant",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "René Descartes (1596–1650) — Mind-Body Dualism",
        items: [
          "Revolves around body-mind dualism: the self is composed of two parts — an immaterial mind and a material body.",
          "The mind is the seat of consciousness.",
          "The body (which includes the human senses) is unreliable and hence should not be trusted.",
          "Known for the maxim \"I think, therefore I am.\"",
          "The rationality and activity of the mind are at the center of man's being."
        ]
      },
      {
        type: "bullet_list",
        heading: "John Locke (1632–1704) — Tabula Rasa",
        items: [
          "The human mind is a tabula rasa (blank slate).",
          "Impressions during infancy have very important and lasting consequences.",
          "The \"association of ideas\" formed when young is the foundation of the self.",
          "Individuals have the \"freedom to author their own soul\" — free to define the content of their character, except their basic identity as a member of the human species.",
          "Locke believed that God created man, and we are, in effect, God's property.",
          "The chief end set by our creator for us, as a species and as individuals, is survival."
        ]
      },
      {
        type: "bullet_list",
        heading: "Immanuel Kant (1724–1804) — Inner and Outer Self",
        items: [
          "A human person has an inner self and an outer self.",
          "The inner self consists of psychological states and the rational intellect.",
          "The outer self is a person's senses and the physical world.",
          "The self is prone to corruption; life is a constant struggle between the inner and the outer self.",
          "Known for his maxim: \"Act only according to that maxim by which you can at the same time will that it should become a natural law.\""
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Philosophical Perspective",
    topicTitle: "Contemporary Philosophers: Merleau-Ponty, Ryle & Churchland",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Maurice Merleau-Ponty (1908–1961)",
        items: [
          "The self is an inextricable union between mind and body.",
          "There is no experience that is not an embodied experience.",
          "The mind and the body are so intertwined that we cannot even distinguish where the work of the mind ends and where the work of the body begins.",
          "\"The mind always thinks in an embodied way\" (Corpuz, et al., 2019)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Gilbert Ryle (1900–1976)",
        items: [
          "The workings of the mind are not distinct from the actions of the body — they are one and the same.",
          "Distinguishes between \"knowing how\" (technical ability) and \"knowing that\" (facts and propositions).",
          "\"Knowing that\" some fact is empty intellectualism without \"knowing how\" to make use of it.",
          "Effective possession of knowledge (\"museum possession\") involves knowing how to use that knowledge to solve theoretical or practical problems (\"workshop possession\")."
        ]
      },
      {
        type: "bullet_list",
        heading: "Paul Churchland (1942–)",
        items: [
          "Adheres to materialism — the belief that nothing except matter exists.",
          "If a thing cannot be recognized by the senses, then it is not real.",
          "Since the mind cannot be experienced by the senses, the mind doesn't really exist.",
          "It is the physical brain, not the mind, that gives us our sense of self.",
          "Decision-making and moral behavior are biological phenomena."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Sociological Perspective",
    topicTitle: "George Herbert Mead & Charles Cooley",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Socialization",
        content: "Socialization is the process of internalizing the norms of society, which influence one's beliefs, actions, and behavior."
      },
      {
        type: "bullet_list",
        heading: "George Herbert Mead (1863–1931)",
        items: [
          "The self is not there at birth and is not based on inherited traits — it is developed from social experiences and activities.",
          "Other people play a significant role in how we view ourselves, though this influence is restricted only to \"significant others\" and at certain periods.",
          "Children act based on personal beliefs but also on what society expects of them.",
          "Personality has two types: the \"I\" and the \"ME.\"",
          "The \"I\" is the natural, existential aspect of the self, representing our individual identity.",
          "The \"ME\" refers to the socialized \"me\" or the cultured self — the conventional individual; the socialized aspect of the individual."
        ]
      },
      {
        type: "bullet_list",
        heading: "Charles Cooley (1864–1929) — The Looking-Glass Self",
        items: [
          "The Looking-Glass Self theory: we learn to view ourselves as we think others view us, which has a major impact on our self-image.",
          "Three steps of the Looking-Glass Self: (1) We imagine how we appear to others; (2) We imagine how others judge our appearance; (3) We develop feelings about, and responses to, these judgments.",
          "We are not influenced by other people's opinions per se — we are influenced by our own imagination or perception of how others see us.",
          "When learners are accepted and valued by others, they tend to feel high self-esteem."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from an Anthropological Perspective",
    topicTitle: "Naomi Quinn, Pitfalls, and Models of Self",
    pdfPageRef: "PDF Page 4",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Anthropology's Holistic Approach",
        content: "Anthropology employs a holistic approach to the study of the self. According to Naomi Quinn, the self is a \"totality of what an organism is physically, biologically, psychologically, socially, and culturally.\" Anthropology seeks to discover the interrelationships between various scientific models of human beings, concerned with both human universals and human variety."
      },
      {
        type: "bullet_list",
        heading: "Two Common Pitfalls in Studying the Self",
        items: [
          "Stratigraphic Approach: stacking independent models one after another without interrelating them — no integration of the different selves.",
          "Reductionism: attempts to interpret all observations by reducing them to a single level of analysis (e.g., defining life only in terms of chemical reactions)."
        ]
      },
      {
        type: "text",
        content: "Understanding the self from the anthropological point of view necessarily includes a study of culture. A person's culture influences his/her physical being, and people's physical being also affects the kind of culture they build and the ways in which they relate to fellow human beings."
      },
      {
        type: "comparison",
        heading: "Two Contrasting Models of Self",
        items: [
          "Egocentric Self: focuses on the individual self.",
          "Sociocentric View of Self: focuses on one's social group; socially oriented."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: The Self from a Psychological Perspective",
    topicTitle: "William James — The \"I\" and the \"Me\"",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Sense of Self in Psychology",
        content: "In psychology, the sense of self is defined as the way a person thinks about and views his or her traits, beliefs, and purpose within the world. The self is a multilevel system that emerges from multifaceted interactions of mechanisms operating at neural, psychological, and social levels."
      },
      {
        type: "bullet_list",
        heading: "William James (1842–1910)",
        items: [
          "Self is the totality of all that a person can call his or hers.",
          "\"I\" — self-as-subject: the thinker that does the thinking; the pure ego.",
          "\"Me\" — self-as-object: comprising the Material Self, Spiritual Self, Social Self, and Empirical Me.",
          "The self is \"an object that can be observed and a subject, an agent that does the observing.\""
        ]
      },
      {
        type: "table",
        heading: "William James' Three Aspects of the \"Me\"",
        tableData: {
          headers: ["Aspect", "Description"],
          rows: [
            ["Material Self", "Its core is the body; associated with clothes, family, home, and material possessions."],
            ["Social Self", "Who a person is in a social situation — the person given recognition by others. A person has as many social selves as the social situations they participate in, and these selves may be contradictory depending on how others view them."],
            ["Spiritual Self", "The person's subjective and most intimate self — includes personality, core values, and conscience; asks spiritual, moral, and intellectual questions."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: The Self in Western & Oriental Thought",
    topicTitle: "Western vs. Oriental (Eastern) Views of the Self",
    pdfPageRef: "PDF Page 4",
    readTime: "2 min read",
    sections: [
      {
        type: "comparison",
        heading: "Western vs. Oriental Thought",
        items: [
          "Oriental (Eastern): the self is one integrated whole; one with society; collectivism is strong.",
          "Western: the self is individualistic in nature; an independent part of the universe; individualism is strong."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: UNPACKING THE SELF, THE BIOLOGICAL SELF,
  // FILIPINO VALUES, AND MANAGING & CARING FOR THE SELF
  // ==========================================
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "The Physical Self — Internal & External Organs, Puberty",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Six Dimensions of the Self Covered in Day 2",
        content: "Unpacking the Self covers: (1) The Physical Self, (2) The Sexual Self, (3) The Material Self, (4) The Spiritual Self, (5) The Political Self, and (6) The Digital Self."
      },
      {
        type: "text",
        heading: "The Physical Self",
        content: "The body — the concrete and tangible part of yourself that can be directly seen and examined."
      },
      {
        type: "bullet_list",
        heading: "Internal Organs — Prenatal Development",
        items: [
          "At the 3rd month of prenatal development, both embryos possess the same reproductive ducts.",
          "Male Wolffian System: has the potential to develop into the male reproductive ducts comprising the epididymis, vas deferens, ejaculatory ducts, and seminal vesicles (Witchel & Lee, 2014).",
          "Female Müllerian System: has the capacity to form into the fallopian tubes, the uterus, and the upper portion of the vagina (Goodman, 2009)."
        ]
      },
      {
        type: "numbered_list",
        heading: "External Organs — 6 Weeks After Fertilization",
        items: [
          "The Glans: develops into the head of the penis (male) or the clitoris (female).",
          "Urethral Folds: fused in the male; become the enlarged labia minora in the female.",
          "The Lateral Bodies: form the shaft of the penis (male) or the hood of the clitoris (female).",
          "Labioscrotal Swellings: form the scrotum (male) or the labia majora (female)."
        ]
      },
      {
        type: "table",
        heading: "Puberty Stage: Masculinization vs. Feminization",
        tableData: {
          headers: ["Masculinization (higher androgen)", "Feminization (higher estrogen)"],
          rows: [
            ["Muscle mass & strength", "Enlargement of breasts"],
            ["Broadening of shoulders", "Changes in fat distribution and quantity"],
            ["Growth of facial and body hair", "Widening of hips"],
            ["Enlargement of the larynx", "Growth of body hair in underarm & pubic area"],
            ["Deepening of voice", "Maturity of uterus"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "Abnormalities in Sexual Development",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. Androgen Insensitivity Syndrome (AIS)",
        items: [
          "Individuals with AIS have an XY genotype but develop a female appearance.",
          "A mutation in the androgen receptors makes them unresponsive, as if no androgens are released.",
          "This non-reactivity to androgen prevents development of the Wolffian system (the antecedent of male internal organs).",
          "Because the anti-Müllerian hormone functions normally, the internal female reproductive system also does not fully develop, resulting in a shallow vagina with no uterus, fallopian tubes, or ovaries.",
          "Although genetic males, many individuals with AIS have married and maintained their female gender identity and physical appearance."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Androgenital Syndrome",
        items: [
          "Due to congenital adrenal hyperplasia (CAH), a heritable condition involving increased androgen levels.",
          "Has little observable effect in males, who are typically already exposed to high androgen levels.",
          "Females born with CAH develop ambiguous external genitalia, such as an enlarged clitoris, fused labia, and in some cases no vaginal opening.",
          "Behavior may also be affected, with a higher likelihood of tomboyishness, more male-related activities, and bisexual or lesbian behavior."
        ]
      },
      {
        type: "bullet_list",
        heading: "3. 5-Alpha-Reductase Deficiency",
        items: [
          "Individuals have a deficient 5-Alpha-Reductase enzyme, which normally converts testosterone into 5-alpha-dihydrotestosterone (responsible for masculinizing the fetus's external organs).",
          "Those with this condition have ambiguous external genitals and are commonly raised as girls.",
          "At puberty, increased testosterone levels lead to development of male secondary sex characteristics.",
          "In a surprising turn of events, individuals raised as girls develop normal male external organs and take on a male gender identity."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "Sex, Gender & Gender Identity Terminologies",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Core Definitions",
        tableData: {
          headers: ["Term", "Definition"],
          rows: [
            ["Sex", "Biological and physiological characteristics that define men and women; biological or assigned sex is what a person is endowed with by nature or at birth."],
            ["Gender", "Attitudes, feelings, and behaviors that a given culture associates with a person's biological sex."],
            ["Gender Identity", "An internal awareness of where the individual belongs in the feminine and masculine categories."],
            ["Sexual Orientation", "Refers to the direction of one's sexual and romantic interests (e.g., heterosexual, homosexual, bisexual)."]
          ]
        }
      },
      {
        type: "callout",
        heading: "MAMAWA",
        content: "\"Men-Are-Men-And-Women-Are-Women\" — a view of sex or gender as based on core or innate differences, where \"female hormones\" and \"male hormones\" fuel the different sexes, leading to differences in shape and behavior."
      },
      {
        type: "numbered_list",
        heading: "Gender Identity Terminologies",
        items: [
          "Cisgender: often called \"cis\" (Latin prefix meaning \"on this side\") — a male or female who identifies with the sex assigned at birth.",
          "Genderqueer: describes a gender identity when the binary conceptualization of gender (male or female) does not accurately describe an individual's gendered outlook or self-concept.",
          "Intersex: describes a variety of medical conditions in which an individual's reproductive anatomy or genitals do not fit the binary definitions of male or female.",
          "Transgender Man (Female to Male / FtM): a man whose sex is female but who lives and identifies as male.",
          "Transgender Woman (Male to Female / MtF): a woman whose sex is male but who lives and identifies as female."
        ]
      },
      {
        type: "text",
        heading: "Gender Expression",
        content: "The manner by which people express themselves and behave. Some people's gender expression does not match their gender identity, and they may be more comfortable dressing up and presenting themselves as the opposite sex."
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "Sexual Orientation Terminologies & Contributing Factors",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Sexual Orientation Terminologies",
        items: [
          "Asexual: the absence of physical or sexual attraction to another human being; an asexual person can have romantic, intellectual, or emotional attractions but does not engage in physical sexual acts.",
          "Bisexual: describes a male or female who is attracted to both males and females.",
          "Gay: can refer to gay males and/or lesbians; gay males are self-identified men who are emotionally, physically, romantically, and/or sexually attracted to people who identify as male.",
          "Lesbian: a self-identified female who is emotionally, physically, romantically, and/or sexually attracted to people who identify as female.",
          "Heterosexual: an individual who identifies as either male or female (cisgender, FtM, or MtF) and is attracted to individuals of the opposite sex.",
          "Queer: an umbrella term used to describe an individual's self-concept of their sexual orientation identity."
        ]
      },
      {
        type: "bullet_list",
        heading: "1. Biological Factor",
        items: [
          "The probability of becoming a homosexual man increases with the number of older brothers, compared to men with no siblings, only younger siblings, or older sisters (Blanchard & Lippa, 2007; Blanchard, 2004).",
          "Maternal Immune Hypothesis: some mothers become progressively immune to masculinizing hormones as they bear male fetuses, and such hormones may be deactivated in later pregnancies of their sons (Blanchard, 2004)."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Environmental Factor — Social Cognitive Theories",
        items: [
          "Early exposure to enjoyable male-male or female-female sexual encounters.",
          "Unavailability of a sexual partner of the opposite sex within one's cultural group.",
          "An experience of childhood sexual abuse by someone of the same gender that influences sexual orientation."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "The Material Self",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "The Material Self is a dimension of the self that relates to physical materials. It refers to our body, as well as the tangible objects, places, and things that we describe as \"My\" or \"Mine.\""
      },
      {
        type: "bullet_list",
        heading: "Two Subclasses of the Material Self",
        items: [
          "The Body Self: refers to our body and all its parts.",
          "The Extra-Corporeal Self: beyond the body — our extended self, including all the people, places, and things we regard as ours."
        ]
      },
      {
        type: "callout",
        heading: "William James & Roland Barthes",
        content: "William James said the material self basically refers to our (1) body, (2) clothes, (3) immediate family, and (4) home. Roland Barthes (1915–1980), a French critical theorist, was the first to observe the relationship people have with objects."
      },
      {
        type: "numbered_list",
        heading: "Barthes' Two Elements of a Sign",
        items: [
          "Signifier: refers to its physical form.",
          "Signified: refers to one's mental concept about the object and its effect on the person."
        ]
      },
      {
        type: "quote",
        content: "A person buys an object because he believes it is a reflection of who and what he is."
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "The Spiritual Self — Spirituality vs. Religiosity",
    pdfPageRef: "PDF Page 9-10",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "The Spiritual Self",
        content: "Referred to as the real, true, or authentic you — without influence, stereotypes, or assumptions. It is not related to race, religion, gender, or physical appearance. It is the you without patterns; the beautiful you in its purest form."
      },
      {
        type: "text",
        heading: "Spirituality",
        content: "Usually associated with our own existence and a search for the purpose and meaning of life — a universal human experience that has touched all of us. Spirituality may be connected to larger questions about life and identity, such as: \"Am I a good person? Why do I have to go through this difficulty? Why are these things happening to me?\""
      },
      {
        type: "text",
        heading: "Religiosity",
        content: "Defined by Sherkat (2015) as characteristic of individuals and collectivities that display various features of beliefs about the supernatural. Macayan, et al. (2018) refer to religiosity as adherence to a belief system and practices associated with a tradition in which there is agreement about what is believed and practiced — including proscriptions like manner of dress, obligatory contributions, and observance of feasts and rituals."
      },
      {
        type: "comparison",
        heading: "Spirituality vs. Religiosity",
        items: [
          "Religiosity: communal — happening in communities and groups. Answers questions like: What practices, rules, or rituals should I follow? What is right or wrong? What is true or false?",
          "Spirituality: individual — conversion is personal, since individuals behave and react differently to the same situations and events. Answers questions like: Where do I find meaning? How do I feel connected? How should I live?"
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "The Political Self & Filipino Identity",
    pdfPageRef: "PDF Page 10-11",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "The Political Self",
        content: "The Political Self helps individuals understand and function effectively in society. National identity includes territorial, tribal/ethnic, religious, linguistic, class, and gender identities."
      },
      {
        type: "bullet_list",
        heading: "Dimensions of Filipino National Identity",
        items: [
          "Tribal/Ethnic: major ethnicities include Tagalog, Visayan/Bisaya, Cebuano, Ilocano, Hiligaynon, Bikol, and Waray.",
          "Linguistic: Filipino and English are the official languages, alongside 182 living languages and 4 extinct languages.",
          "Religious: major religions include Catholics, Protestants, and Muslims.",
          "Integration of these different social identities forms the collective self, which government is tasked with balancing for national unity."
        ]
      },
      {
        type: "comparison",
        heading: "Ethnic vs. National Identity",
        items: [
          "Ethnic Identity: a source of individual pride among cultural minorities; ethnic distinctiveness (in-group favoritism) can create cultural and political divides, weaken common bonds, and intensify group conflict.",
          "National Identity: boosts one's sense of duty as a citizen of a particular country."
        ]
      },
      {
        type: "numbered_list",
        heading: "3 Dimensions of National Identity",
        items: [
          "Self-categorization: identification with a group and a sense of psychological belongingness (relates to birthplace, age, social status, religion — with political consequences); \"identification as.\"",
          "Affect: \"identification with\" a particular group — a psychological attachment rather than group membership.",
          "Normative contents & Symbols: a particular set of ideas about what makes a nation distinctive (members, core values, goals, territory, relations to other nations), promoted through symbols like the flag, costume, fruit, and animal."
        ]
      },
      {
        type: "text",
        content: "Related concepts include \"blind patriotism\" and \"chauvinism\" (the extreme belief that one's country is superior) and Ethnocentrism (viewing one's own group as superior to other groups)."
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: Unpacking the Self",
    topicTitle: "The Digital Self",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Creating and maintaining an online identity is a must in the modern world. The Digital Self is the aspect of the self that we present online."
      },
      {
        type: "comparison",
        heading: "Real Self vs. Digital Self",
        items: [
          "Real Self: develops organically; direct interactions.",
          "Digital Self: deliberately constructed; interacts from a distance in a disembodied environment."
        ]
      },
      {
        type: "bullet_list",
        heading: "Characteristics of the Digital Self",
        items: [
          "Trolling, cyberbullying, bashing, and shaming are modern terms for what strangers do online to damage their victims.",
          "Digital selves develop wider connections (friends, likers, followers, subscribers) that do not necessarily turn into 'significant others.'",
          "The digital self keeps 'estranged friends' and 'intimate strangers.'"
        ]
      },
      {
        type: "bullet_list",
        heading: "Self-Presentation and Impression Management",
        items: [
          "Self-representation: the act of creating a desired image for an external (others) and internal (self) audience.",
          "Selective self-representation: online users carefully decide what aspects of themselves to share and when — e.g., featuring only exciting and pleasant details like travel and OOTDs.",
          "According to Chou & Edge (2012), those who spend longer time on Facebook perceived others to be happier and to have better lives compared to themselves.",
          "People can keep one online identity or 'cycle through' multiple selves; the online identity can match the real identity or be entirely constructed.",
          "Internet trolls provoke quarrels or upset people and are known to hide their real identity."
        ]
      },
      {
        type: "callout",
        heading: "Boundaries of the Online Self",
        content: "The online self has a farther and longer reach than the real self — we can be known and reached by anyone in the world. Digital footprints are the collective, ongoing records of our self-representations; online engagements bear a threat to our digital footprint and reputation, and can jeopardize career or business prospects. We should manage our digital identity — our personal brand — with care."
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: The Biological Self",
    topicTitle: "Prenatal & Puberty Stage — Hormonal Development",
    pdfPageRef: "PDF Page 12",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Prenatal Stage",
        items: [
          "At about 6 weeks after conception, the SRY gene triggers the synthesis of SRY protein (Arnold, 2004).",
          "This protein causes the internal part, or medulla, of each gonad to grow and develop into testes.",
          "In female embryos, the lack of the SRY gene means the primordial gonads automatically develop into ovaries."
        ]
      },
      {
        type: "bullet_list",
        heading: "Internal Organs — Hormonal Signaling",
        items: [
          "At the 3rd month, the male's testes begin to secrete two hormones: Testosterone and Anti-Müllerian Hormone.",
          "Testosterone: the most common type of androgen hormone; stimulates the development of the Wolffian system.",
          "Anti-Müllerian Hormone: inhibits the development of the Müllerian system.",
          "Female ovaries are almost completely inactive during fetal development at the 3rd month — the differentiation of the female internal ducts does not require any hormone at all."
        ]
      },
      {
        type: "bullet_list",
        heading: "Puberty Stage",
        items: [
          "The hypothalamus releases gonadotropin-releasing hormone (GnRH), which stimulates the anterior pituitary gland to release two gonadotropic hormones: Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH).",
          "In males, FSH and LH cause the testes to release testosterone.",
          "In females, FSH and LH stimulate the ovaries to produce estradiol, the most common type of estrogen."
        ]
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 2,
    dayTitle: "Day 2: The Political Self",
    topicTitle: "Filipino Values & Traits — Virgilio Enriquez's Kapwa Model",
    pdfPageRef: "PDF Page 12-13",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Virgilio Enriquez — Father of Philippine Psychology",
        content: "Filipino values were greatly shaped by colonial interpretations. Virgilio Enriquez re-examined Filipino values based on indigenous/insider and exogenous/outsider perspectives, developing the Kapwa model, which explains the modes by which Filipinos engage in social interaction."
      },
      {
        type: "table",
        heading: "Kapwa Model — Surface Values",
        tableData: {
          headers: ["Colonial / Accommodative", "Confrontative"],
          rows: [
            ["Hiya (propriety/dignity)", "Bahala na (determination)"],
            ["Utang na loob (gratitude/solidarity)", "Sama/lakas ng loob (resentment/guts)"],
            ["Pakikisama (companionship/esteem)", "Pakikibaka (resistance)"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Kapwa Model — Value Structure Levels",
        items: [
          "Pivotal Interpersonal Value: Pakiramdam/pakikipagkapwa-tao (shared inner perception).",
          "Core Value: Kapwa or Pagkatao (shared identity) — other values emanate from this.",
          "Foundation of Human Value: Kagandahang-loob/pagkamatao (shared humanity) — the linking socio-personal value, alongside three societal values including Karangalan (dignity)."
        ]
      },
      {
        type: "comparison",
        heading: "Modes of Interaction: Ibang Tao vs. Hindi Ibang Tao",
        items: [
          "Ibang tao (not of us; outsider): interaction proceeds from Pakikitungo (transaction/civility), Pakikisalamuha (interaction), Pakikilahok (joining/participating), to Pakikisama (being along with).",
          "Hindi ibang tao (one of us): interaction proceeds from Pakikipaglagayang-loob (rapport/understanding/acceptance), Pakikisangkot (getting involved), to Pakikiisa (being one with)."
        ]
      },
      {
        type: "text",
        heading: "Reformulated Value System of the Filipino Adolescent",
        content: "In the reformulated framework, 'Bahala na' was dropped from the list, while Maka-Diyos and Paggalang were added."
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 2,
    dayTitle: "Day 2: Learning to Be a Better Learner",
    topicTitle: "Metacognition and the PQ4R Study Strategy",
    pdfPageRef: "PDF Page 13-14",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Metacognition",
        content: "A strategy used by successful learners — thinking about thinking; being aware of your own thinking and learning process; watching and observing the self as one thinks, acquires knowledge, and learns. \"Meta\" means beyond itself, combined with \"cognitive.\""
      },
      {
        type: "bullet_list",
        heading: "Two Components of Metacognition",
        items: [
          "Knowledge of Cognition: what learners know about themselves; can be declarative (factual), procedural (procedure or process), or conditional (application of declarative and procedural knowledge).",
          "Regulation of Cognition: knowledge about the way learners plan, implement strategies, monitor, correct comprehension errors, and evaluate their learning.",
          "Attitude or Disposition: being interested and intentional about one's own thinking and learning — a willingness to take a closer look at one's own cognition."
        ]
      },
      {
        type: "table",
        heading: "Three Variables of Metacognition",
        tableData: {
          headers: ["Variable", "Description"],
          rows: [
            ["Person", "How you see yourself as a learner; your knowledge of how you learn."],
            ["Task", "What you need to accomplish; requirements about the learning task."],
            ["Strategy", "Effective ways of tackling learning tasks — brainstorming and evaluating strategies (groups); staying focused, listening, note-taking, applying memory skills (individuals)."]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "The PQ4R Strategy",
        items: [
          "Preview: get a general picture of what is covered.",
          "Question: ask what you want to learn.",
          "Read: read the chapter with the purpose of answering your questions.",
          "Reflect: create mental images of the subject matter.",
          "Recite: help yourself understand and remember, aloud or silently.",
          "Review: relearn the material."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 2,
    dayTitle: "Day 2: Setting Goals for Success",
    topicTitle: "Self-Efficacy, Growth Mindset & Goal-Setting Theory",
    pdfPageRef: "PDF Page 14-15",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Self-Regulated Learning — Three Steps",
        items: [
          "Adherence: a young child does something because they are told to (e.g., studying to avoid failing or being punished).",
          "Identification: a young child does something because they like the person asking them to (e.g., being fascinated by and believing a teacher more than their parents).",
          "Internalization: an individual does something because they value it, with motivation springing from their own beliefs and goals — this is where self-regulation develops."
        ]
      },
      {
        type: "text",
        heading: "Albert Bandura's Self-Efficacy",
        content: "Self-efficacy is the belief in one's own ability or capacity — set against the idea that human behavior is simply conditioned, like an input-output machine."
      },
      {
        type: "numbered_list",
        heading: "Four Ways to Develop Self-Efficacy",
        items: [
          "Mastery Experiences: set a goal and persist against difficult challenges.",
          "Social Modeling (Vicarious Experience): be inspired by people who have overcome and succeeded.",
          "Social Persuasion: have a mentor and surround yourself with people who lift you up.",
          "States of Physiology: reflect and learn more about your emotions and moods; learn to remain positive."
        ]
      },
      {
        type: "comparison",
        heading: "Dr. Carol Dweck — Fixed Mindset vs. Growth Mindset",
        items: [
          "Fixed Mindset: makes a person avoid challenges, give up easily, and ignore the feedback of others.",
          "Growth Mindset: embraces challenges, sees effort as a path to mastery, persists through challenges, and learns from mistakes."
        ]
      },
      {
        type: "numbered_list",
        heading: "Locke & Latham's Goal-Setting Theory — 5 Principles",
        items: [
          "Clarity: set clear goals and make them as detailed as possible.",
          "Challenge: challenging enough to catch your interest and persistence.",
          "Commitment: set a goal you are ready to embrace and work for.",
          "Feedback: set ways to regularly assess your progress; break broad goals into smaller ones.",
          "Task Complexity: set something that will not overwhelm you."
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 2,
    dayTitle: "Day 2: Taking Charge of One's Health and Well-Being",
    topicTitle: "Understanding Stress and Practicing Self-Care",
    pdfPageRef: "PDF Page 15-16",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "What Is Stress?",
        content: "Stress is the inability to cope with a perceived (real or imagined) threat to someone's mental, physical, emotional, and spiritual well-being. It exerts considerable influence on physiological responses, such as an increased heartbeat to boost blood flow to the arms and legs."
      },
      {
        type: "comparison",
        heading: "Autonomic Nervous System Response",
        items: [
          "Sympathetic Nervous System: stimulates the fight-or-flight response.",
          "Parasympathetic Nervous System: returns the body to a calm state."
        ]
      },
      {
        type: "table",
        heading: "Types of Stress",
        tableData: {
          headers: ["Type", "Description"],
          rows: [
            ["Acute", "Strong or intense; brief and may disappear quickly."],
            ["Episodic Acute", "Strong or intense; can affect more because it occurs in a recurring pattern."],
            ["Chronic", "Not strong but stays for long periods of time; linked to many ailments and diseases; bad for health and well-being."]
          ]
        }
      },
      {
        type: "text",
        heading: "Sources of Coping and Strength",
        content: "Coping involves one's perspectives and beliefs, and must also involve strategies that help the body return to a more balanced state. Stress should be managed holistically — mind, spirit, and body."
      },
      {
        type: "bullet_list",
        heading: "Self-Care and Compassion",
        items: [
          "Compassion: being one with the suffering of the sufferer.",
          "Empathy: feeling and understanding what the other person is going through.",
          "Self-Compassion: becoming gently caring and comforting to ourselves.",
          "Self-compassion helps us acknowledge and accept the situation, reminds us that we are not alone (others feel pain too), and moves us to respond with kindness rather than self-criticism — we deserve compassion and understanding from ourselves."
        ]
      }
    ]
  }
];