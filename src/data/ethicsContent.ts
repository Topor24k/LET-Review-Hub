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

export const ETHICS_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: FOUNDATIONS OF ETHICS
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "What is Ethics? Human Act vs. Act of Man",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Definition of Ethics",
        content: "Ethics comes from the Greek word 'ethos,' meaning 'customs' or its Latin equivalent, 'moral.' It is the study of the morality of human acts and moral agents — what makes an act obligatory, and what makes a person accountable."
      },
      {
        type: "comparison",
        heading: "Human Act vs. Act of Man",
        items: [
          "Human Act: Those of which a person is master, having the power of doing or not doing as he pleases. Examples: observing a prescribed diet, tutoring slow learners, preparing for the board exam.",
          "Act of Man: Actions that merely happen in or through the body without the awareness of the mind or the control of the will. Examples: breathing, blinking, perspiring, dilation of the pupils of the eyes."
        ]
      },
      {
        type: "numbered_list",
        heading: "The 3 Branches of Ethics",
        items: [
          "1. Metaethics",
          "2. Normative Ethics",
          "3. Applied Ethics"
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Metaethics & Moral Realism",
    pdfPageRef: "PDF Page 1-2",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Metaethics",
        content: "Studies the very foundation of morality itself — 'What is Morality?' and 'What is its nature?'"
      },
      {
        type: "bullet_list",
        heading: "Different Metaethical Views",
        items: [
          "1. Moral Realism — a. Moral Absolutism, b. Moral Relativism (i. Descriptive Cultural Relativism, ii. Normative Cultural Relativism)",
          "2. Moral Antirealism — a. Moral Subjectivism"
        ]
      },
      {
        type: "callout",
        heading: "Moral Realism",
        content: "The belief that there are moral facts, in the same way that there are scientific facts. In this view, any moral proposition can only be true or false. Our gut intuition tells us that there are moral facts — some things are just wrong, and others are indisputably right (e.g. gratuitous violence is always wrong; nurturing children is always right)."
      },
      {
        type: "callout",
        heading: "The Grounding Problem",
        content: "The grounding problem of ethics is the search for a foundation for our moral beliefs — something solid that would make them true in a way that is clear, objective, and unmoving."
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Moral Absolutism, Relativism & Cultural Relativism",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "Moral Realism can either be Moral Absolutism or Moral Relativism."
      },
      {
        type: "comparison",
        heading: "Moral Absolutism vs. Moral Relativism",
        items: [
          "Moral Absolutism: There are absolute standards against which moral questions can be judged.",
          "Moral Relativism: More than one moral position on a given topic can be correct. Cultural Relativism is an example of Moral Relativism."
        ]
      },
      {
        type: "numbered_list",
        heading: "2 Kinds of Cultural Relativism",
        items: [
          "1. Descriptive Cultural Relativism: People's moral beliefs differ from culture to culture.",
          "2. Normative Cultural Relativism: It is not merely beliefs but moral facts themselves that differ from culture to culture."
        ]
      },
      {
        type: "quote",
        content: "If every culture is the sole arbiter of what's right for it, that means no culture can be actually wrong. If what everyone is doing right now is right, relative to their own culture, then there's never any reason to change anything."
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Moral Antirealism & Moral Subjectivism",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Moral Antirealism",
        content: "The belief that moral propositions don't refer to objective features of the world at all — there are no moral facts. There's nothing about gratuitous violence that's inherently wrong, and if you look at the rest of the animal kingdom, nurturing your kids doesn't always seem that important."
      },
      {
        type: "callout",
        heading: "Moral Subjectivism",
        content: "Moral statements can be true or false — right or wrong — but they refer only to people's attitudes, rather than their actions. Those preferences key into personal attitudes, but not actual, objective moral facts about the world."
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Normative Ethics: Moral vs. Non-Moral Standards",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Normative Ethics",
        content: "Deals with 'norms,' or a set of considerations on how one should act. It is the study of ethical action and sets out the rightness or wrongness of actions — also known as Prescriptive Ethics."
      },
      {
        type: "text",
        content: "There are two types of standards: Moral Standards and Non-Moral Standards."
      },
      {
        type: "callout",
        heading: "Moral Standards",
        content: "Norms, prescriptions, or rules used in determining what ought to be done, or what is right or wrong action, good or bad character. Non-compliance with moral standards causes a sense of guilt."
      },
      {
        type: "bullet_list",
        heading: "Examples of Moral Standards",
        items: [
          "Do not lie",
          "Do not cheat",
          "Do not steal",
          "Do not kill",
          "Do not commit adultery"
        ]
      },
      {
        type: "callout",
        heading: "Non-Moral Standards",
        content: "Rules unrelated to moral or ethical considerations. They are guides of action that should be followed as expected by society's social rules, demands of etiquette, and good manners. In Sociology, non-moral standards or rules are called Folkways."
      },
      {
        type: "bullet_list",
        heading: "Examples of Non-Moral Standards",
        items: [
          "No talking while your mouth is full",
          "Wear black or white for mourning; never red",
          "The males should be the ones to propose marriage, not the females"
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Consequence vs. Non-Consequence Standards",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "Moral Standards are either Consequence Standards or Non-Consequence Standards."
      },
      {
        type: "callout",
        heading: "Consequence Standard — Teleological / Consequentialist",
        content: "From 'tele,' meaning end, result, or consequence. Depends on results or outcome — an act that results in the general welfare, in the greatest good of the greatest number, is moral. Summarized by the phrase: 'The end justifies the means.'"
      },
      {
        type: "callout",
        heading: "Non-Consequence Standard — Deontological",
        content: "Holds that the rightness or wrongness of an action or rule depends on a sense of duty, natural law, virtue, and the demand of the situation or circumstances. Summarized by the phrase: 'The end does not justify the means.'"
      },
      {
        type: "numbered_list",
        heading: "Deontological Moral Standards",
        items: [
          "1. Natural Law",
          "2. Virtue Ethics",
          "3. Situation Ethics"
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Applied Ethics, Moral Dilemma & False Dilemma",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Applied Ethics",
        content: "Attempts to apply ethical principles and moral theories to real-life moral issues, dealing with ethical questions specific to practical fields such as euthanasia, child labor, and abortion."
      },
      {
        type: "bullet_list",
        heading: "Domains of Applied Ethics",
        items: [
          "Business Ethics",
          "Clinical Ethics",
          "Organizational Ethics",
          "Social Ethics"
        ]
      },
      {
        type: "callout",
        heading: "Moral Dilemma (Ethical Dilemma)",
        content: "A situation where a person has the moral obligation to choose between two options, both based on moral standards, but cannot choose both — choosing one means violating the other."
      },
      {
        type: "numbered_list",
        heading: "Moral Dilemmas Have the Following in Common",
        items: [
          "1. The agent is required to do each of two (or more) actions which are morally unacceptable.",
          "2. The agent can do each of the actions.",
          "3. But the agent cannot do both (or all) of the actions."
        ]
      },
      {
        type: "quote",
        content: "The agent thus seems condemned to moral failure; no matter what you do, you will do something wrong. The persons involved in the dilemma are in a deadlock — damn-if-you-do and damn-if-you-don't."
      },
      {
        type: "callout",
        heading: "False Dilemma",
        content: "A situation where the decision-maker has a moral duty to do one thing, but is tempted or under pressure to do something else — a choice between a right and a wrong. For example, a lawyer or accountant may face an opportunity to prioritize self-interest over the client's interest."
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Moral Foundation of Education: Double Effect, Lesser Evil & Cooperation",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "The Principle of Double Effect",
        content: "Relieving a terminally ill patient's pain may also cause an effect one would normally be obliged to avoid, such as sedation and a slightly shortened life."
      },
      {
        type: "callout",
        heading: "The Choice of Lesser Evil",
        content: "The principle that when faced with selecting from two unpleasant situations, the one which is least harmful should be chosen."
      },
      {
        type: "comparison",
        heading: "The Principle of Cooperation",
        items: [
          "Formal Cooperation: A willing participation on the part of the cooperative agent in the sinful act of the principal agent. One intends the evil that is done and participates in the evil-doing by advising, counseling, promoting, or condoning it.",
          "Material Cooperation: One does not intend the evil that others are doing, but only permits or tolerates this evil for the sake of avoiding even more serious evils."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: Foundations of Ethics",
    topicTitle: "Good Moral Character & Different Kinds of Conscience",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "4 Ways of Describing Good Moral Character",
        items: [
          "1. Being Fully Human: Having realized substantially one's potential as a human person.",
          "2. Being a Loving Person: Caring for and relating with others and God in an unselfish and mature manner.",
          "3. Being a Virtuous Person: Having acquired good habits and attitudes and practicing them consistently in daily life.",
          "4. Being a Morally Mature Person: Having reached a level of maturity on the spiritual, emotional, intellectual, and social levels."
        ]
      },
      {
        type: "bullet_list",
        heading: "Different Kinds of Conscience",
        items: [
          "Right Conscience: Judges what is really good as good, and evil what is really evil.",
          "Erroneous Conscience: Judges what is bad as good, and vice versa.",
          "Pharisaical Conscience: A 'hypocrite' conscience — saying good things but doing the opposite.",
          "Certain Conscience: A subjective assurance of the lawfulness or unlawfulness of certain actions to be done or admitted.",
          "Doubtful Conscience: Suspends judgment on the lawfulness of an action; the action should therefore possibly be omitted.",
          "Scrupulous Conscience: Constantly afraid of committing evil — a result of a stubborn character.",
          "Lax Conscience: Tends to follow the easy way and find excuses for mistakes.",
          "Guilty Conscience: A disturbed conscience trying to restore good relations with God through sorrow and repentance.",
          "Callous Conscience: Cruel and insensitive."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: THE MORAL AGENT & MORAL FRAMEWORKS
  // ==========================================
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "The Moral Agent & Bases of Moral Accountability",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Word Origins",
        items: [
          "Moral: Comes from the Latin 'mores,' referring to society's patterns, standards, and rules of doing.",
          "Agent: Comes from the Latin 'agere,' meaning to do or act."
        ]
      },
      {
        type: "callout",
        heading: "Moral Agent",
        content: "One who performs an act in accordance with moral standards — the moral actor, one who acts morally. Only a moral agent is capable of human acts, which is why 'morality is for persons.' A moral agent should have the capacity to rise above their feelings and passions and act for the sake of the moral law. A dog, for instance, is not a moral agent because it doesn't have the capacity to conform to moral standards — it cannot knowingly, freely, and voluntarily act."
      },
      {
        type: "numbered_list",
        heading: "Bases of Moral Accountability",
        items: [
          "1. Knowledge (Awareness): A human act must be done knowingly.",
          "2. Freedom: It must be done freely.",
          "3. Voluntariness (Willingness): It must be done voluntarily."
        ]
      },
      {
        type: "callout",
        heading: "Voluntary Act",
        content: "An act is voluntarily intended when it is done with the aim, purpose, or goal of attaining a result. It can either be Intentional or Negligent. A Negligent Act is done voluntarily without care or precaution in avoiding the happening of a foreseeable event."
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Modifiers of Human Acts: Ignorance",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Modifiers of Human Acts",
        content: "Factors that affect the mental or emotional state of a person to the extent that the voluntariness involved in an act is either increased or decreased. The four modifiers are: Ignorance, Passion, Fear, and Violence."
      },
      {
        type: "text",
        content: "Ignorance is the absence of knowledge. It has two degrees: Invincible and Vincible (the latter being either Supine/Gross/Crass or Affected)."
      },
      {
        type: "callout",
        heading: "Invincible Ignorance",
        content: "When we do not know something that was impossible for us to know. The person makes a decision to act out of ignorance but in good conscience, having taken every precaution to inform himself — if fully informed, the person would not have performed the act. The basic rule is that invincible ignorance, being beyond the ability to overcome, is entirely involuntary and hence removes moral responsibility."
      },
      {
        type: "callout",
        heading: "Vincible Ignorance",
        content: "When we do not know something that we ought to know. The person makes a decision to act out of ignorance without attempting to find out what the result might be — not in good conscience, since every precaution to be fully informed was not taken. Vincible ignorance does not free us from responsibility."
      },
      {
        type: "comparison",
        heading: "Types of Vincible Ignorance",
        items: [
          "Supine / Gross / Crass: When scarcely an effort has been made to remove the ignorance.",
          "Affected: When a person deliberately avoids enlightenment in order to sin more freely."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Modifiers of Human Acts: Passion, Fear & Violence",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Passion",
        content: "Refers to positive emotions such as love, desire, delight, hope, and bravery, as well as negative emotions such as hatred, horror, sadness, despair, fear, and anger."
      },
      {
        type: "comparison",
        heading: "Types of Passion",
        items: [
          "Antecedent Passion: Those that precede the act; they do not always destroy voluntariness but diminish accountability for the resultant act.",
          "Consequent Passion: Those that are intentionally aroused and kept; they do not lessen voluntariness but may increase accountability."
        ]
      },
      {
        type: "callout",
        heading: "Fear",
        content: "A disturbance of the mind of a person due to an impending danger or harm to himself or loved ones. Acts done with fear are voluntary, but acts done with intense or uncontrollable fear or panic are involuntary."
      },
      {
        type: "callout",
        heading: "Violence",
        content: "Refers to any physical force exerted on a person by another free agent for the purpose of compelling that person to act against his will. Actions performed by a person subjected to violence or irresistible force are involuntary and not accountable."
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Determinants of Morality",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "The 3 Determinants of Morality",
        items: [
          "1. Object of the Act",
          "2. The End or Purpose",
          "3. Its Circumstances"
        ]
      },
      {
        type: "quote",
        content: "For an act to be morally good, all three determinants must be without flaw, according to the received axiom: 'A thing to be good must be wholly so; it is not vitiated by any defect.'"
      },
      {
        type: "callout",
        heading: "Object of the Act",
        content: "The act itself. Examples: praying, honoring one's parents, going to Mass, telling the truth."
      },
      {
        type: "callout",
        heading: "End or Purpose",
        content: "The intention of the acting subject, or what inspires the acting subject. Example: rendering free service to a neighbor inspired by the love of God."
      },
      {
        type: "callout",
        heading: "Circumstances",
        content: "Refer to the time, place, person, and conditions surrounding the moral act. Example: it is good to give a drink to the thirsty, but if the thirsty man is morally weak and the drink is intoxicating, the act may be evil."
      },
      {
        type: "text",
        content: "A morally good act requires the goodness of the object, the end, and the circumstances together. An evil end corrupts the action, even if the object is good in itself — such as praying and fasting in order to be seen by others."
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Aristotle's Virtue (Character) Ethics",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "5 Classifications of Moral Frameworks",
        items: [
          "1. Aristotle's Virtue Ethics",
          "2. St. Thomas' Natural Law Ethics",
          "3. Kant's Deontological Ethics",
          "4. Utilitarianism",
          "5. The Love and Justice Framework"
        ]
      },
      {
        type: "callout",
        heading: "Virtuous Person & Virtue Theory",
        content: "A virtuous person is someone who has mastered the art of being a person. For Aristotle, the ethical person is virtuous — one who has developed good character. Virtue Theory is an ethical theory that emphasizes an individual's character rather than following a set of rules: if we can just focus on being good people, the right actions will follow effortlessly."
      },
      {
        type: "quote",
        content: "Having virtue just means doing the right thing, at the right time, in the right way, in the right amount, toward the right people."
      },
      {
        type: "callout",
        heading: "Virtue & the Golden Mean",
        content: "Virtue is the midpoint between two extremes, which Aristotle called vices — it is just the right amount. The Golden Mean is the sweet spot between the extreme of excess and the extreme of deficiency. For example, Courage is the midpoint between the extremes of cowardice (deficiency) and recklessness (excess)."
      },
      {
        type: "bullet_list",
        heading: "Related Concepts",
        items: [
          "Moral Exemplars: People who already possess virtues.",
          "Eudaimonia: 'A life well lived' or human flourishing — a life of striving, of pushing yourself to your limits and finding success, full of the happiness that comes from achieving something difficult rather than having it handed to you."
        ]
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Virtue Ethics in the Christian Tradition: The 4 Cardinal Virtues",
    pdfPageRef: "PDF Page 8",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "The 4 Cardinal Moral Virtues",
        items: [
          "1. Prudence: The virtue of practical wisdom and sound judgment.",
          "2. Justice: The virtue concerned with fairness, equality, and giving each person their due.",
          "3. Temperance: The virtue of self-control and moderation.",
          "4. Fortitude: The virtue of courage and strength in the face of adversity."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "St. Thomas' Natural Law Theory/Ethics",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Thomas Aquinas",
        content: "An Italian philosopher and Christian monk of the 13th century. Aquinas thought morality was important for everyone and that being a good person was a vital part of God's plan for each of us. God made us preloaded with the tools we need to know what's good — we don't need the Bible, religion class, or church in order to understand the natural law. God wants us to want things — specifically, good things."
      },
      {
        type: "numbered_list",
        heading: "Types of Law",
        items: [
          "1. Eternal Law: The mind of God, which humans cannot fully know; contains the laws that govern the universe.",
          "2. Divine Law: The law of God revealed to people through the Bible, decreed by God in the Ten Commandments.",
          "3. Natural Law: 'Do good and avoid evil' — it directs our conscience and, if applied with reason to a situation, leads to the right outcome.",
          "4. Human Law / Positive Law: Promulgated by persons; the everyday rules that govern our lives."
        ]
      },
      {
        type: "quote",
        content: "What is ethical according to the Natural Law Ethics framework is that which the natural law commands us to do: 'Do good and avoid evil.'"
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Kant's Deontological Ethics: The Duty Framework",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Immanuel Kant",
        content: "An 18th century German philosopher who thought that religion and morality were a terrible pairing. Kant argued that in order to know what is right, one must use reason: what's right and wrong is totally knowable just by using one's intellect."
      },
      {
        type: "callout",
        heading: "Categorical Imperatives",
        content: "Commands you must follow, regardless of your desires. Moral obligations are derived from pure reason."
      },
      {
        type: "numbered_list",
        heading: "Two Formulations of the Categorical Imperative",
        items: [
          "1. Act only according to that maxim which you can at the same time will that it should become a universal law without contradiction. A maxim is a rule or principle of action; a universal law is something that must always be done in similar situations. If you approve of the maxim of stealing, you are universalizing that action — saying everyone should always steal. Since this cannot be universalized, stealing is wrong.",
          "2. Act so that you treat humanity, whether in your own person or in that of another, always as an end, and never as a mere means. A 'mere means' is using something only for your own benefit, with no thought to its own interest. Humans are 'ends-in-themselves' — rational and autonomous beings with the ability to set their own goals and work toward them."
        ]
      },
      {
        type: "text",
        content: "Kant argued that proper rational application of the Categorical Imperative will lead us to moral truth that is fixed and applicable to all moral agents — no God required."
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "The Love & Justice Framework",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Overview",
        content: "What is ethical is that which is just and that which is loving. Justice is giving what is due to others; Love is giving even more than what is due to others."
      },
      {
        type: "numbered_list",
        heading: "3 Well-Known Concepts of Love (Greeks)",
        items: [
          "1. Agape — Charity.",
          "2. Erotic — Passionate sexual encounter.",
          "3. Philia — Affection between friends."
        ]
      },
      {
        type: "comparison",
        heading: "Social Justice vs. Distributive Justice",
        items: [
          "Social Justice: The promotion of the common good — giving everyone equal access to wealth, opportunities, and privileges in society.",
          "Distributive Justice: Concerned with the distribution or allotment of goods, duties, and privileges based on the merits of individuals and the best interests of society."
        ]
      },
      {
        type: "text",
        content: "As a moral framework — be it social or distributive justice — this view states that whatever promotes justice is the morally right thing to do."
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Utilitarianism: The Consequentialist Ethical Framework",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Utilitarianism",
        content: "A moral theory that focuses on the results or consequences of our actions and treats intentions as irrelevant. It was founded in the 18th century by British philosophers Jeremy Bentham and John Stuart Mill, with philosophical ancestors among ancient Greek thinkers such as Epicurus."
      },
      {
        type: "quote",
        content: "We should act always so as to produce the greatest good for the greatest number. This is called the Principle of Utility."
      },
      {
        type: "comparison",
        heading: "2 Options of Utilitarianism",
        items: [
          "Act Utilitarianism: In any given situation, you should choose the action that produces the greatest good for the greatest number.",
          "Rule Utilitarianism: A version of the theory that says we ought to live by rules that, in general, are likely to lead to the greatest good for the greatest number. It allows us to refrain from acts that might maximize utility in the short run, and instead follow rules that maximize utility for the majority of the time."
        ]
      },
      {
        type: "quote",
        content: "A whole society where innocent people are taken off the street to be harvested for their organs is going to have a lot less utility than one where you don't have to live in constant fear of that happening to you."
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Personhood & the Moral Agent",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Personhood",
        content: "The state or quality of being a person."
      },
      {
        type: "comparison",
        heading: "Person vs. Human",
        items: [
          "Person: Not equal to human — a moral term referring to a being who is part of a moral community.",
          "Human: A biological term."
        ]
      },
      {
        type: "bullet_list",
        heading: "Criteria of Personhood",
        items: [
          "Genetic: One is a person if one has human DNA; not a person without it.",
          "Cognitive: Consciousness, reasoning, self-motivated activity, capacity to communicate, and self-awareness.",
          "Social: Whenever society recognizes you as a person, or whenever someone cares about you.",
          "Sentience: The ability to feel pleasure and pain.",
          "Gradient Theory: Personhood comes in degrees — one can have more or less of it."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "For Personal Study: Levels of Moral Dilemma",
    pdfPageRef: "PDF Page 10-11",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Individual Dilemma",
        content: "Refers to personal dilemmas — an individual's damn-if-you-do and damn-if-you-don't situation. Example: the Case of Heinz, where not stealing the drug would mean his wife's death. The dilemma is faced by an individual torn between two obligations: to save the wife or to obey the law."
      },
      {
        type: "callout",
        heading: "Organizational Dilemma",
        content: "Exists between personal interest and organizational welfare, or between individual groups' interests and organizational well-being. Arises due to different opposing concerns between various groupings in an organization."
      },
      {
        type: "callout",
        heading: "Structural Dilemma",
        content: "A conflict of perspective among sectors, groups, and institutions that may be affected by a decision. Any attempt to introduce reform in society or government creates a structural dilemma."
      },
      {
        type: "numbered_list",
        heading: "Examples of Structural Dilemma",
        items: [
          "1. Differentiation vs. Integration",
          "2. Gap vs. Overlap",
          "3. Lack of Clarity vs. Lack of Creativity",
          "4. Flexibility vs. Strict Adherence to Rules",
          "5. Excessive Autonomy vs. Excessive Interdependence",
          "6. Centralized vs. Decentralized Decision Making"
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Structural Dilemmas Explained",
    pdfPageRef: "PDF Page 11-12",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Differentiation vs. Integration",
        content: "Refers to decentralization — as local governments and schools become more differentiated, it becomes more difficult to integrate them into a unified structure."
      },
      {
        type: "comparison",
        heading: "Gaps vs. Overlaps",
        items: [
          "Gaps: Leave an important thing in an organization undone — for example, a patient's call button rarely produced a response because there is a gap as to who, according to the rule, is supposed to respond.",
          "Overlaps: Result in unnecessary, counterproductive, redundant procedures that ultimately waste resources."
        ]
      },
      {
        type: "comparison",
        heading: "Lack of Clarity vs. Lack of Creativity",
        items: [
          "Lack of Clarity: When employees are unclear about what they are supposed to do, they often tailor their roles around personal preferences instead of system-wide goals, frequently leading to trouble.",
          "Lack of Creativity: When responsibilities are over-defined, people conform to prescribed roles and protocols in a 'bureaucratic' way, rigidly following job descriptions regardless of how much the service or product suffers — becoming uncreative."
        ]
      },
      {
        type: "callout",
        heading: "Flexibility vs. Strict Adherence to Rules",
        content: "One can accommodate by bending rules to help someone, or stick strictly to rules no matter what and be unable to help someone in a helpless situation — or one may become too accommodating, so that rules effectively disappear."
      },
      {
        type: "callout",
        heading: "Excessive Autonomy vs. Excessive Interdependence",
        content: "Refers to being too isolated versus too much coordination. When individuals/groups are too autonomous, people often feel isolated and disconnected; when units and roles are too tightly linked, people are distracted from work and waste time on unnecessary or excessive coordination."
      },
      {
        type: "callout",
        heading: "Centralized vs. Decentralized Decision Making",
        content: "In decentralized decision-making, organizations can respond to change rapidly and effectively because decision-makers are closest to the situation; however, top managers may lose some control."
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 2,
    dayTitle: "Day 2: The Moral Agent & Moral Frameworks",
    topicTitle: "Virtue Ethics Across Traditions & Natural Law in Practice",
    pdfPageRef: "PDF Page 12",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Virtue Ethics in Other Traditions",
        tableData: {
          headers: ["Confucius", "Hinduism", "Buddhism", "Jesus Christ", "Thomas Aquinas / Christian Tradition"],
          rows: [
            ["Jen (Humaneness): human-heartedness, compassion", "Non-violence, Truthfulness, Honesty, Chastity, Freedom from Greed", "Intellectual Virtues: right understanding, right mindfulness", "Love, Mercy, Kindness, Compassion, Patience, Self-control, Gentleness", "Faith, Hope, Love"],
            ["Li (Propriety): manner, culture", "—", "Moral Virtues: right speech, right action, right livelihood", "—", "Cardinal Moral Virtues: Prudence, Justice, Temperance, Fortitude"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "7 Basic Goods (Natural Law)",
        items: [
          "1. Life",
          "2. Reproduction",
          "3. Educate one's offspring",
          "4. Seek God",
          "5. Live in society",
          "6. Avoid offense",
          "7. Shun ignorance"
        ]
      },
      {
        type: "quote",
        content: "Our instinct shows us the basic goods, and reason allows us to derive the natural law from them."
      },
      {
        type: "text",
        content: "Example chain of reasoning: My life is valuable → Your life is like my life → Your life is valuable → I shouldn't kill you → Do not kill is a Natural Law. For each negative law or prohibition, there is usually a corresponding positive injunction. For example, for the basic good of Life, 'Do not kill' is a prohibition, but there is also a positive injunction to promote life. Similarly, the basic good of Reproduction leads to the prohibition 'Don't prevent reproduction,' alongside the positive injunction to 'Procreate.'"
      }
    ]
  }
];