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

export const NEW_LITERACIES_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: THE 21ST CENTURY TEACHER, DIGITAL & MEDIA LITERACY
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Characteristics of a 21st Century Teacher",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "10 Characteristics of a 21st Century Teacher",
        items: [
          "1. Multi-literate: knows how to use various technologies in teaching.",
          "2. Multi-specialist: knowledgeable in other areas so learners can build on what they gain in and outside the classroom and make sense of what was learned.",
          "3. Multi-skilled: copes with the demand for widening learning opportunities by being skillful not just in teaching but also in facilitating and organizing groups and activities.",
          "4. Self-directed: knows how to initiate action to realize the learning goals of students and the educational goals of the country at large.",
          "5. Lifelong Learner: embraces the idea that learning never ends, staying constantly updated on the latest information related to their subject and pedagogic trends.",
          "6. Flexible: able to adapt to various learning styles and needs of learners, facilitating learner-centered teaching with alternative modes of delivery.",
          "7. Creative Problem Solver: creates innovative ideas and effective solutions to problems arising in the classroom, the school, or the profession as a whole.",
          "8. Critical Thinker: encourages students to reflect on what they have learned, and rekindles the desire to ask questions, reason out, probe, and establish their own knowledge and belief.",
          "9. Has a Passion for Excellent Teaching: possesses passion for the profession to ensure students are motivated to learn under their guidance and care.",
          "10. High Emotional Quotient: teaches not just with the head but also the heart, recognizing that teaching is emotionally taxing but an influential job that involves interaction with human beings."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Digital Literacy: Definition & Key Terms",
    pdfPageRef: "PDF Page 1-2",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "II. Digital Literacy",
        content: "The set of competencies required for full participation in society, including knowledge, skills, and behaviors involving the effective use of digital devices for communication, expression, collaboration, and advocacy."
      },
      {
        type: "bullet_list",
        heading: "A. Terms in Digital Literacy",
        items: [
          "Cybersecurity: the practice of protecting systems, networks, and programs from digital attacks — usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.",
          "Cyber Citizenship: being responsible when using the internet; how one behaves online when no one is looking speaks a lot about one's character and morals.",
          "Internet Safety: trying to be safe on the internet by maximizing personal safety and minimizing security risks to private information and property, including self-protection from computer crimes.",
          "Cybercrime: criminal activity carried out using the internet, employing tools like phishing, viruses, spyware, ransomware, and social engineering to break the law."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Common Threats to Personal Safety Online",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "B. Common Threats to Personal Safety",
        items: [
          "Cyberstalking: the use of the internet or other electronic means to stalk or harass an individual, group, or organization through false accusations, defamation, slander and libel, intentional monitoring, identity theft, threats, vandalism, solicitation for sex, or gathering information to threaten, embarrass, or harass.",
          "Cyberbullying: the use of electronic means — instant messaging, social media, e-mail, and other online communication — with the intent to abuse, intimidate, or overpower an individual or group.",
          "Online Predation: the act of engaging an underage minor into an inappropriate sexual relationship through the internet; online predators may attempt to seduce minors into relationships.",
          "Offensive Content: websites that may include shock sites, hate speech, or otherwise inflammatory content, which can manifest through pop ads and unsuspecting links.",
          "Sextortion: the use of webcams for flirting and cybersex, often involving a cybercriminal posing as someone else, such as an attractive person, to initiate communication of a sexual nature with the victim."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Media Literacy: Definition & Roles",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "III. Media Literacy",
        content: "The ability to access, analyze, evaluate, and create media. Media refers to all electronic or digital means and print or artistic visuals used to transmit messages through reading (print media), seeing (visual media), hearing (audio media), changing and playing with (interactive media), or some combination of each."
      },
      {
        type: "bullet_list",
        heading: "A. Roles of Media Literacy",
        items: [
          "Learn to Think Critically: when people evaluate media, they decide if the messages make sense, weighing key ideas before being convinced by the information they get.",
          "Become a Smart Consumer: media literacy helps individuals learn how to determine whether something — especially advertising — is credible before being persuaded to buy products.",
          "Recognize Point of View: identifying an author's perspective helps individuals appreciate different ideas in the context of what they already know.",
          "Create Media Responsibly: recognizing one's ideas and appropriately expressing one's thoughts leads to effective communication.",
          "Identification of Media in Our Culture: media conveys something, shapes understanding of the world, and moves individuals to act or think in certain ways.",
          "Understand the Author's Goal: by understanding and recognizing the type of influence something has, people can make better choices."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Media and Information Literacy (MIL): The Seven Dimensions",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "B. Media and Information Literacy (MIL)",
        content: "A set of competencies to search, critically evaluate, use, and contribute information and media content wisely — including knowledge of one's rights online, refraining from cyberbullying, understanding related ethical issues, and engaging with media and ICTs to promote equality, free expression, intercultural/interreligious dialogue, and peace."
      },
      {
        type: "numbered_list",
        heading: "Seven Dimensions of MIL",
        items: [
          "1. Tool Literacy: ability to understand and use the practical and conceptual tools of current information technology, including software, hardware, and multimedia relevant to education and professional life.",
          "2. Resource Literacy: ability to understand the form, format, location, and access methods of information resources.",
          "3. Social-Structural Literacy: knowing how information is socially situated and produced, and how it fits into the life of groups, institutions, and social networks.",
          "4. Research Literacy: ability to understand and use IT-based tools relevant to researchers and scholars, including software for quantitative analysis, qualitative analysis, and simulation.",
          "5. Publishing Literacy: ability to format and publish research and ideas electronically, in textual and multimedia forms.",
          "6. Emerging Technology Literacy: ability to adapt to, understand, evaluate, and use emerging innovations in information technology.",
          "7. Critical Literacy: ability to critically evaluate the intellectual, human, and social strengths and weaknesses, potentials and limits, and benefits and costs of information technologies."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: The 21st Century Teacher, Digital & Media Literacy",
    topicTitle: "Arts and Creative Literacy: Key Terms",
    pdfPageRef: "PDF Page 4",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "IV. Arts and Creative Literacy",
        content: "Creativity is the process of having original ideas that have value; it is the ability to see the world in new ways."
      },
      {
        type: "bullet_list",
        heading: "A. Terms in Creative Literacy",
        items: [
          "Eye-Hand Coordination: the coordinated control of eye movement with hand movement, and the processing of visual input to guide reaching and grasping, along with the use of proprioception of the hand to guide the eyes.",
          "Visual Literacy: the ability to read, write, and create visual images — interpreting and creating them, usually for communication and interaction.",
          "Aesthetics: the philosophical study of beauty and taste, closely related to the philosophy concerned with the nature of art and the concepts by which individual works of art are interpreted and evaluated."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: FINANCIAL, ECO, SOCIAL, MULTICULTURAL & GLOBAL LITERACY
  // ==========================================
  {
    pageNumber: 7,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Financial Literacy: Key Terms, Part 1",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "V. Financial Literacy",
        content: "The ability to make informed judgements and effective decisions regarding the use and management of money."
      },
      {
        type: "bullet_list",
        heading: "A. Terms in Financial Literacy (Part 1)",
        items: [
          "Financial Plan: a comprehensive statement of an individual's long-term objectives for security and well-being, and a detailed savings and investing strategy for achieving those objectives.",
          "Budget and Budgeting: an estimation of revenue and expenses over a specified future period, usually compiled and reevaluated periodically; budgeting is the process of creating a plan to spend money, allowing one to determine in advance whether there will be enough money for the things one needs or wants.",
          "Spending: if budget goals serve as a financial wish list, a spending plan is a way to make those wishes a reality.",
          "Investment and Investing: when you have saved more money than you expect to need, consider investing it to earn more interest than a savings account pays."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Financial Literacy: Key Terms, Part 2 & Life Insurance",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Terms in Financial Literacy (Part 2)",
        items: [
          "Savings: it's important to set money aside regularly into a savings account; savings also help in buying needed or wanted things without borrowing.",
          "Emergency Savings Fund: setting aside money for emergencies — a work bonus, income tax refund, or earnings from a side job can serve as an emergency fund.",
          "Insurance: a contract (in the form of a policy) between the policyholder and the insurance company, whereby the company agrees to compensate for financial loss from specific insured events."
        ]
      },
      {
        type: "callout",
        heading: "B. Life Insurance",
        content: "A type of insurance that compensates beneficiaries upon the death of the policyholder — the company guarantees a payout for the beneficiaries in exchange for the premiums paid."
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Types of Life Insurance",
    pdfPageRef: "PDF Page 5-6",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Types of Life Insurance",
        tableData: {
          headers: ["Type", "Characteristic", "Advantage", "Disadvantage"],
          rows: [
            ["Term", "The simplest form of life insurance to obtain — upon death, beneficiaries are paid the benefit.", "Low premium requirements; a strong option for policyholders who need insurance but cannot afford whole life or endowment; easy to understand.", "No benefit if the policyholder outlives the set term period; premiums usually get higher upon renewal of terms."],
            ["Variable Universal Life (VUL)", "Serves as both life protection and an investment vehicle in one package. A portion of the premium is allocated into various investment vehicles for wealth creation, and earnings are based on the performance of selected investments.", "Dual purpose (life insurance plus investment tool); no maturity age, with cash value payable along with the assured sum; the death component isn't limited to face value; offers liquidity, with funds accessible in times of need to serve as an emergency fund.", "Cash values and dividends are not guaranteed; face amount and death benefit depend on investment performance; includes various investment fees."],
            ["Whole Life", "Provides coverage for the policyholder's entire life or until they reach 100 years old; acts as both protection and a savings mechanism, since a portion of the premium builds up cash value.", "Flexible premium payments; entails fixed premiums; usually comes with additional features and 'living' benefits.", "Harder to understand due to complexity."],
            ["Endowment", "Grants a lump sum after a specified amount of time or upon death; the policy owner pays the premium for a predetermined number of years or until a specific age is reached.", "Allows saving up for specific purposes; guarantees returns upon maturity.", "Requires higher premiums than other types of life insurance; not the best option for those seeking full life protection."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Eco-Literacy: The Seven Environmental Principles of Nature",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "VI. Eco-Literacy",
        content: "Considers ecological systems and awareness of how society operates within natural aspects as an educational imperative — understanding the principles of organization that ecosystems have evolved to sustain the web of life, the first step on the road to sustainability."
      },
      {
        type: "numbered_list",
        heading: "A. Seven Environmental Principles of Nature",
        items: [
          "1. Nature knows best: one must not go against natural processes if a continuous, steady supply of resources is to be ensured.",
          "2. All forms of life are important: all living things must be considered invaluable instruments in maintaining balance in the ecosystem.",
          "3. Everything is connected to everything else: in an ecosystem, all components interact to keep the system sustainable, and outside interference may cause imbalance and deterioration.",
          "4. Everything must go somewhere: since waste may return to one's own backyard in some other form, it is important to be aware of, classify, and segregate different types of waste, especially toxic and hazardous ones.",
          "5. Everything changes: people must rethink their relationship with the environment through relevant technologies for positive changes.",
          "6. Ours is a finite earth: awareness of the earth's limited resources leads to a conscious effort to change one's attitude and to recycle.",
          "7. Nature is beautiful and we are stewards of God's creation: humans are capable of controlling and taking care of creation to their own advantage."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "The Green School",
    pdfPageRef: "PDF Page 7",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "B. Green School",
        content: "A school that engages the school community, especially children, in critical thinking and learning by adopting participatory, practical, and collaborative approaches — working together to make the school environment healthier for students and staff, and involving the whole community toward a sustainable future."
      },
      {
        type: "numbered_list",
        heading: "A Green School's 3 Precepts",
        items: [
          "1. Learning ABOUT the environment: focuses mainly on acquiring knowledge and understanding of surroundings and related issues.",
          "2. Learning THROUGH the environment: refers to the process of learning while being engaged with the environment, inside and outside the classroom.",
          "3. Learning FOR the environment: aims to develop an informed response and responsibility toward the environment, beyond just acquiring skills and knowledge."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Social Literacy: Essential People Skills, Part 1",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "VII. Social Literacy",
        content: "Entails the development of social skills, knowledge, and positive human values toward the desire and ability of a human being to act and react positively and responsibly in a wide range of complex social settings."
      },
      {
        type: "numbered_list",
        heading: "Ten Essential People Skills (Soft Skills) to Succeed, Part 1",
        items: [
          "1. Being Socially Assertive: people with high social assertiveness have more focused energy and more clarity in their interactions.",
          "2. Crafting a Memorable Presence: people with great presence take it easy in making connections.",
          "3. Mastering Communication: knowing how to present oneself and, in turn, get one's message across.",
          "4. Sustaining Lasting Confidence: people who sustain lasting confidence can conquer their shyness, avoid awkwardness, and get through their anxiety.",
          "5. Being an Excellent Conversationalist: people others enjoy listening to and discussing with."
        ]
      },
      {
        type: "numbered_list",
        heading: "3 Levels of Interaction (within Skill 5)",
        items: [
          "1. First Five Minutes: the first impression — time to decide if someone is worth getting to know.",
          "2. First Five Hours: rapport building.",
          "3. First Five Days: the final and ultimate level of trust and connection."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Social Literacy: Essential People Skills, Part 2",
    pdfPageRef: "PDF Page 8",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Ten Essential People Skills (Soft Skills) to Succeed, Part 2",
        items: [
          "6. Being Highly Likable: likability is an important facet of trust, achieved through being authentic or genuine with one's true self.",
          "7. Being Exceptional at Decoding Emotions: people good at reading others are exceptionally strong at knowing how others think and feel.",
          "8. Pitching Ideas: happens when one is asked for an opinion, and when introducing oneself.",
          "9. Being Charismatic: charisma is a blend of warmth and competence.",
          "10. Being an Influential Leader: leaders in personal, social, and professional life are able to gain camaraderie."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Multicultural Literacy, Global Literacy & Global Competence",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "VIII. Multicultural Literacy and Global Literacy",
        items: [
          "Multicultural Literacy: understanding the ethnic groups that comprise the population, focusing on complex issues of identity, diversity, and citizenship.",
          "Global Literacy: aims to address issues of globalization, racism, diversity, and social justice.",
          "Global Competence: refers to the skills, values, and behaviors that prepare young people to thrive in a diverse, interconnected, and rapidly changing world."
        ]
      },
      {
        type: "numbered_list",
        heading: "Dimensions of Global Competence",
        items: [
          "1. Examine issues of local, global, and cultural significance: globally competent people effectively utilize knowledge about the world and critical reasoning to form their own opinions on global issues.",
          "2. Understand and appreciate the perspectives and world views of others: globally competent people are willing and able to consider other people's perspectives and behaviors from multiple viewpoints, and to examine their own assumptions.",
          "3. Engage in open, appropriate, and effective interactions across cultures: describes what globally competent individuals do when interacting with people from different cultures.",
          "4. Take action for collective well-being and sustainable development: focuses on young people's role as active, responsible members of society, and their readiness to respond to local, global, or intercultural issues."
        ]
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Personal Study: Types of Social Media",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Types of Social Media",
        items: [
          "1. Social Media News Websites: users submit links to web content like articles, podcasts, and videos they find interesting, such as Digg, Reddit, and StumbleUpon.",
          "2. Social Media Networking Websites: allow uploading a personal profile that connects with other people, such as LinkedIn and Facebook — an avenue for meeting people and developing relationships that can lead to joint-venture partnerships, career opportunities, and research.",
          "3. Social Media Photo and Video Sharing: users upload photos through Facebook, Instagram, and Pinterest, and videos through YouTube.",
          "4. Microblogging and Blogging Websites: sometimes called 'presence apps,' these let users post short messages and easily keep up with what friends are posting; Twitter is the most popular microblogging service.",
          "5. Social Media Review Websites: show how social reviews can make or break a company or organization, such as Amazon and eBay."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Personal Study: Types of Social Skills for Teachers",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Type of Social Skills",
        content: "These are the types of social skills that teachers can demonstrate among students to attain a harmonious relationship with them."
      },
      {
        type: "numbered_list",
        heading: "8 Social Skills Teachers Can Demonstrate",
        items: [
          "1. Effective Communication: the ability to communicate effectively and share thoughts and ideas with students through group conversations, discussions, etc.",
          "2. Conflict Resolution: the ability to get to the source of a problem and find a workable solution by weighing both sides, aiming for reconciliation.",
          "3. Active Listening: the ability to pay close attention to a student in times of counseling, introspection, and consultation.",
          "4. Empathy: the ability to understand and identify the feelings of students in times of difficulty and trouble.",
          "5. Relationship Management: the ability to maintain relationships and build key connections with school stakeholders for the student's development.",
          "6. Respect: knowing when to initiate communication and respond during interaction, even in times of heated arguments and confrontations.",
          "7. Problem-Solving Skills: seeking help, making effective decisions, and accepting consequences to derive better solutions to a problem.",
          "8. Interpersonal Skills: sharing, joining activities, asking permission, and waiting for one's turn in every facet of school undertakings."
        ]
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Personal Study: Integrating Arts & Creativity into the Curriculum",
    pdfPageRef: "PDF Page 10",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Integrating Arts and Creativity Literacy into the Curriculum",
        items: [
          "1. Physical Environment: design a physical environment that supports creativity, such as castle-designed school buildings, well-architecturally designed edifices, roofs and ceilings, etc.",
          "2. Emotional Environment: create and maintain a climate of respect, caring, and support when someone makes mistakes.",
          "3. Project-Based Learning (PBL): design and plan projects that are relevant, rigorous, and real-world, to attain motivation, engagement, and learning.",
          "4. Teach Creative Thinking Skills: teach students about 'metacognition,' or thinking about thinking, even to little ones, through brainstorming, reasoning, comparing and contrasting, etc.",
          "5. Alternative Assessment: instead of just a worksheet or assignment, provide different authentic assessments like performance and visual art creation.",
          "6. Scheduling: project-based curriculum and performance-based assessment need ample time and proper scheduling, structured or unstructured.",
          "7. Student-Centered and Personalized Learning: give students freedom to choose what they will learn, how they will learn it, and how to demonstrate what they've learned.",
          "8. Incorporate Arts: seamlessly integrate music, art, drama, and dance into the curriculum to develop creativity.",
          "9. Integration of Technologies: encourage students to create and utilize blogs and websites, student publishing, video game design, coding, filmmaking, photography, etc.",
          "10. Preparing the Body and Brain for Creativity: create activities that induce body-mind integration such as yoga, ballet, jazz, zumba, calisthenics, etc."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Personal Study: Integrating Ecological Literacy into the Curriculum",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Integrating Ecological Literacy into the Curriculum",
        items: [
          "1. Place-Based Learning: experiential learning that engages students in their own environments, capturing their imagination and advancing environmental stewardship and civic engagement — e.g. mapping the local environment.",
          "2. Project-Based Learning: involves students in projects that use a variety of resources — the community, technology, outside experts, written resources, and the web — while the teacher usually serves as facilitator of learning.",
          "3. Socratic Inquiry: the teacher encourages students to ask questions about their assumptions, values, and preconceptions, using skilled questioning to have students clarify statements, identify weaknesses in arguments, and provide evidence for their reasoning.",
          "4. Experiential Learning: promotes students' involvement in the real world and defines the teacher's role as a facilitator of learning; the process of learning leads to behavioral outcomes.",
          "5. Interdisciplinary Learning: emphasizes connections between traditionally discrete disciplines — such as math, science, history, and language arts — rather than limiting learning to one content area at a time."
        ]
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 2,
    dayTitle: "Day 2: Financial, Eco, Social, Multicultural & Global Literacy",
    topicTitle: "Personal Study: The Need for Global Competence",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "The Need for Global Competence",
        items: [
          "1. To Live Harmoniously in Multicultural Communities: education for global competence can promote cultural awareness and purposeful interactions in increasingly diverse societies.",
          "2. To Thrive in a Changing Labor Market: education for global competence can boost employability through effective communication, appropriate behavior within diverse teams, and using technology to access and connect to the world.",
          "3. To Use Media Platforms Effectively and Responsibly: radical transformations in digital technologies have shaped young people's outlook on the world, their interaction with others, and their perception of themselves — online networks, social media, and interactive technologies give rise to new concepts of learning where young people exercise freedom over what and how they learn.",
          "4. To Support the Sustainable Development Goals: education for global competence can help form new generations who care about global issues and engage in social, economic, and environmental discussions."
        ]
      }
    ]
  }
];