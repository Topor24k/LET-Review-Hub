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

export const TECHNOLOGY_FOR_TEACHING_LEARNING_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: ICT CONCEPTS, DIGITAL CITIZENSHIP & FLEXIBLE LEARNING
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Basic Concepts in ICT",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Core ICT & Educational Technology Terms",
        items: [
          "Technology: a mix of process and products used in the application of knowledge; includes tools from paper and pencil to the latest electronic gadgets and tools for practical tasks.",
          "ICT Literacy: use of digital technology, communication tools, and/or networks to access, manage, integrate, evaluate, create, and communicate information in order to function in a knowledge society.",
          "Educational Technology: refers to the use of technology in teaching and learning.",
          "Technology in Education: the application of technology to food, health, finance, scheduling, grading, reporting, and other processes that support education within institutions.",
          "Digital Learning: learning that is accompanied by technology, or by instructional practice that makes effective use of technology."
        ]
      },
      {
        type: "callout",
        heading: "Instructional Materials",
        content: "Tools used in instructional activities. They may be print, non-print, or electronic materials, and are also called 'teaching aids' since they assist teachers in facilitating the teaching-learning process."
      },
      {
        type: "table",
        heading: "3 Types of Instructional Materials",
        tableData: {
          headers: ["Type", "Examples"],
          rows: [
            ["1. Print Materials", "Books, dictionaries, encyclopedias, newspapers, photographs"],
            ["2. Non-Print Materials", "Flip charts, microscope slides, models, and realia"],
            ["3. Electronic Materials", "Electronic tools, hardware, software (e.g. slide presentations, videos, augmented/virtual realities, online content, live streams)"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Online & Offline Digital Tools, Internet Fundamentals",
    pdfPageRef: "PDF Page 1-2",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "On-line Digital Tools and Apps (Collaborative Tools)",
        items: [
          "Skype, Zoom, Google Meet: software applications which allow web or teleconferencing.",
          "Wiki: from the Hawaiian 'wikiwiki' meaning 'fast' or 'quick'; a database that helps quickly create, add, edit, and share information on a website.",
          "Wikispace: an editable website, usually with limited access, that allows students to collaboratively create and post written works or digital files such as photos or videos.",
          "Blog: an online journal that allows a thread of discussion to take place.",
          "Padlet: allows posting comments on what looks like a sticky note on a blank page.",
          "Google Group / Google Form: applications used for collaborative documentation of ideas contributed by team members."
        ]
      },
      {
        type: "bullet_list",
        heading: "Computer-Based Assessment Tools & Off-line Tools",
        items: [
          "Kahoot, Mentimeter, Quizlet, Plickers: innovative, formative computer-based assessment tools.",
          "Off-line tools (usable without internet): Canary Learning, Pocket, Evernote, iBooks, and KA LITE."
        ]
      },
      {
        type: "bullet_list",
        heading: "Other Foundational ICT Terms",
        items: [
          "Internet: a global network connecting millions of computers.",
          "World Wide Web: allows access, viewing, and maintenance of documents that can include text, data, sound, and video over the internet.",
          "Podcast: a video or audio multimedia clip on a single topic, typically in a radio-talk-show format; its two basic functions are to retrieve and disseminate information.",
          "Infographic: a visual representation such as a diagram, chart, or picture that represents information or data (Canva offers many infographic templates for education).",
          "Digital Citizenship: the idea that all persons using the internet have civic rights and responsibilities, centered on safe, savvy, and ethical use of technology."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "The 9 Elements of Digital Citizenship",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Elements of Digital Citizenship",
        items: [
          "1. Digital Access: equal digital rights and electronic access is the starting point of digital citizenship (RA 10929, signed 2016, requires free internet access in all public places in the country).",
          "2. Digital Commerce: people shop through different websites and conduct online transactions for banking.",
          "3. Digital Communication: electronic exchange of communication, including emailing, texting, instant messaging, and use of cellphones.",
          "4. Digital Literacy: ability to find, evaluate, utilize, share, and create content using information technologies and the internet.",
          "5. Digital Etiquette: good manners, including appropriate behavior and good choices in the digital world.",
          "6. Digital Law: order, discipline, and ethical use in the digital world; plagiarism, copyright infringement, hacking, and identity theft are commonly violated crimes.",
          "7. Digital Rights and Responsibilities: the privileges of digital access come with the responsibility to be cautious online, such as when posting photos and videos.",
          "8. Digital Health and Wellness: illnesses associated with technology use, such as carpal tunnel syndrome, eyestrain, and childhood obesity from prolonged screen time.",
          "9. Digital Security: protecting information provided online through privacy settings, strong passwords, virus protection, and data backups."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Flexible Learning Environment: ODL, LMS & MOOCs",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Online Distance Learning (ODL)",
        content: "A form of learning without face-to-face contact with the teacher, delivered via telecommunications. It uses platforms that operate as Learning Management Systems (LMS) — software applications or web-based technologies used to plan, implement, and assess a specific learning process."
      },
      {
        type: "bullet_list",
        heading: "Common LMS Platforms",
        items: [
          "Moodle, Google Classroom, Schoology, Edmodo, Educause, and MOOCs."
        ]
      },
      {
        type: "table",
        heading: "MOOC (Massive Open Online Course) Breakdown",
        tableData: {
          headers: ["Component", "Description"],
          rows: [
            ["Massive", "Designed for large numbers of participants, usually larger than a regular classroom — potentially hundreds or thousands."],
            ["Open", "Freedom of place, pace, and time; accessible by anyone with internet connection, with no entry qualifications; some courses are free."],
            ["Online", "All aspects of the course are delivered online."],
            ["Course", "Offers a full experience: educational content (video, audio, text, games, social media, animation, simulations), peer interaction, some interaction with teacher/staff, non-formal recognition options, and a study guide or syllabus."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Synchronous/Asynchronous, Blended & Modular Learning",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Synchronous vs. Asynchronous Learning",
        tableData: {
          headers: ["Synchronous", "Asynchronous"],
          rows: [
            ["Students learn at the same time.", "Students learn at different times."],
            ["Communication happens in real time.", "Communication is not live."],
            ["Possibly more engaging and effective.", "Possibly more convenient and flexible."],
            ["Allows for instant feedback and clarification.", "Allows students to work at their own pace."],
            ["Examples: video conferencing, live chat, live streamed videos.", "Examples: email, screencasts, Flipgrid videos, blog posts/comments."]
          ]
        }
      },
      {
        type: "callout",
        heading: "Blended Learning",
        content: "A combination of learning activities wherein part of the lesson is delivered online while the other part is handled in an actual physical classroom setting."
      },
      {
        type: "table",
        heading: "Flipped Classroom vs. Traditional Classroom",
        tableData: {
          headers: ["Flipped Classroom", "Traditional Classroom"],
          rows: [
            ["Instructor records and shares lectures outside of class.", "Instructor prepares materials to be delivered in class."],
            ["Students watch/listen to lectures before coming to class.", "Students listen to lectures and guided instruction in class and take notes."],
            ["Students receive support from instructor and peers as needed.", "Homework is assigned to demonstrate understanding."]
          ]
        }
      },
      {
        type: "callout",
        heading: "Modular Learning",
        content: "A form of distance learning that uses Self-Learning Modules (SLM) based on the most essential learning competencies provided by the Department of Education — the ideal delivery for students with limited or no access to computers or the internet."
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Presentation Software Guidelines & Plagiarism vs. Copyright",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Guidelines for Effective Audio-Visual Presentations",
        items: [
          "1. Abide by the Rule of Six: each slide should have a maximum of six lines with six words.",
          "2. Include more key words or phrases and less of whole sentences.",
          "3. Ensure font size is large enough to be seen at the back — titles no less than 36-40 pt, body text 32 pt; use sans serif rather than serif fonts.",
          "4. Dark text on a light background is preferable.",
          "5. Animation should have a clear purpose — used only to highlight important points, not to distract learners.",
          "6. Combine text and graphics, often with audio and video, to capture learner interest.",
          "7. Follow the 3 Cs for information: Correct, Current, Complete.",
          "8. Proper citation should always be observed."
        ]
      },
      {
        type: "table",
        heading: "Plagiarism vs. Copyright Infringement",
        tableData: {
          headers: ["Plagiarism", "Copyright Infringement"],
          rows: [
            ["A violation of the right of the author.", "A violation of the right of the copyright holder."]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Illustrative Distinctions",
        items: [
          "Plagiarism but NOT Copyright Infringement: a student copies a few sentences from a 20-page book on bird species for a newspaper article but fails to cite the source.",
          "Copyright Infringement but NOT Plagiarism: a student copies the entire bird species book across several published articles, but cites the author, title, and source at the bottom of each.",
          "Both Plagiarism and Copyright Infringement: a writer copies a popular book series line-for-line and submits it to a publisher claiming to have written it."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "Non-Digital (Conventional) Instructional Materials",
    pdfPageRef: "PDF Page 4",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Development and Use of Non-Digital or Conventional Materials",
        items: [
          "Diorama: small scenes created of layers of materials, all depicting a similar concept or theme — usually a historical period, nature scene, or fictional situation.",
          "Nature Table: a table containing objects or scenes related to the current season, an upcoming festival, or a symbol of an ecosystem.",
          "Writing Board: displays information written with chalk (chalkboard/blackboard) or special pens (whiteboard) — a commonly used visual aid.",
          "Flip Chart: a large tablet or pad of paper, usually mounted on a tripod or stand.",
          "Zigzag Board: a multi-board series of three or four rectangular boards joined by hinges so they can be folded up and carried.",
          "Rope and Pole Display Board: two parallel horizontal poles tied loosely together with rope, invaluable where there are few solid walls for displaying information."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: ICT Concepts, Digital Citizenship & Flexible Learning",
    topicTitle: "The PPPF Model for Instructional Materials",
    pdfPageRef: "PDF Page 4-5",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "PPPF by Hayden Smith and Thomas Nagel (1972)",
        content: "To ensure the effective use of instructional material, authors Hayden Smith and Thomas Nagel advise teachers to abide by the acronym PPPF."
      },
      {
        type: "numbered_list",
        heading: "The 4 Steps of PPPF",
        items: [
          "1. Prepare Yourself: know your lesson objective, what you expect from the class after the session, and why you selected that particular instructional material.",
          "2. Prepare Your Students: set class expectations and learning goals; give guide questions to answer during discussion; motivate and keep students interested and engaged.",
          "3. Present the Materials: present materials under the best possible conditions — mechanical materials often require rehearsal and a carefully planned performance.",
          "4. Follow-Up: the use of instructional materials is ultimately for the attainment of the lesson objective."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: TECH INTEGRATION FRAMEWORKS, DALE'S CONE & VISUAL AIDS
  // ==========================================
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Industrial Revolution & the TPACK Framework",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Industrial Revolution and Evolution",
        items: [
          "I.R. 1.0: invention of the steam engine.",
          "I.R. 2.0: Age of science and mass production (discovery of electricity and gasoline).",
          "I.R. 3.0: Digital revolution (computer and cellphone).",
          "I.R. 4.0: Interconnectivity (Internet), Cyberspace, Artificial Intelligence."
        ]
      },
      {
        type: "callout",
        heading: "TPACK Framework (Mishra & Koehler, 2006)",
        content: "Technological, Pedagogical, and Content Knowledge (TPACK) shows the types of knowledge involved in a teacher's capacity to integrate technology, illustrated as a Venn diagram of Technological Knowledge (TK), Pedagogical Knowledge (PK), and Content Knowledge (CK) within a surrounding 'Contexts' boundary."
      },
      {
        type: "bullet_list",
        heading: "3 Core Types of Knowledge",
        items: [
          "Technological Knowledge (TK): not just computer literacy, but knowing what technology is best to use and how it should be utilized in teaching.",
          "Pedagogical Knowledge (PK): the principles and strategies of teaching used in classrooms and learning environments to ensure curriculum goals are met.",
          "Content Knowledge (CK): how well a teacher knows the subject area or topic being taught."
        ]
      },
      {
        type: "bullet_list",
        heading: "The 4 TPACK Overlaps",
        items: [
          "Pedagogical Content Knowledge (PCK): knowing what teaching approaches fit the content and expectations of the subject.",
          "Technological Content Knowledge (TCK): interpreting the curriculum through a technology lens and considering technology's impact on the curriculum area.",
          "Technological Pedagogical Knowledge (TPK): special pedagogical considerations for using technology within teaching strategies, or new approaches afforded by software.",
          "Technological, Pedagogical, and Content Knowledge (TPACK): describes how technology, pedagogy, and content fit together to enable powerful learning."
        ]
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "The SAMR Model",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "SAMR Model (Dr. Ruben Puentedura)",
        content: "A model for educators to evaluate the incorporation of technology into teaching. Reflecting on one's teaching and technology use helps design and implement better learning activities. It has four stages split into two halves by a threshold: Enhancement (technology as replacement) and Transformation (where real learning happens)."
      },
      {
        type: "numbered_list",
        heading: "The 4 Levels of SAMR",
        items: [
          "1. Substitution (Enhancement): technology is a direct substitute for an existing activity with no functional change — e.g. writing an essay with a computer instead of a pen.",
          "2. Augmentation (Enhancement): technology is a direct substitute with functional improvement — e.g. using Google Docs instead of paper, gaining commenting and add-on features.",
          "3. Modification (Transformation): technology allows significant redesign of the task — e.g. publishing an essay on WordPress so the whole world, not just the teacher, is the audience.",
          "4. Redefinition (Transformation): technology allows tasks previously inconceivable — e.g. creating and publishing a multimedia digital storytelling project that the world can comment on and analyze."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "The ASSURE Model",
    pdfPageRef: "PDF Page 6-7",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "ASSURE Model (Heinrich & Molenda, 1999)",
        content: "An instructional framework instructors can use to create lesson plans that coordinate the use of technology and media."
      },
      {
        type: "numbered_list",
        heading: "The 6 Steps of ASSURE",
        items: [
          "1. Analyze Learners: get a clear picture of learners' learning styles, age level, interests/preferences, background, special needs, and cultural diversity.",
          "2. State Objectives: describe the learning outcome — what the learner should be able to perform as a result of instruction.",
          "3. Select Methods, Media, and Materials: decide which strategy, materials, or technology best fits the learners and desired outcomes.",
          "4. Utilize Methods, Media, and Materials: decide which part of instruction will employ a particular material or technology, and how it will be most effective.",
          "5. Require Learner Participation: design sections of the lesson where learners are guided to participate and perform tasks.",
          "6. Evaluate and Revise: evaluation should be congruent with the stated learning outcome."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Edgar Dale's Cone of Experience & Bruner's Modes",
    pdfPageRef: "PDF Page 7",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Edgar Dale's Cone of Experience",
        content: "A visual, pictorial model that presents bands of experience according to degree of abstraction, not degree of difficulty. The farther from the bottom of the cone, the more abstract the experience becomes. Lower levels involve the student as a participant and encourage active learning; upper levels need more instructional support."
      },
      {
        type: "text",
        heading: "Cone Levels (Most Abstract → Most Concrete)",
        content: "Verbal Symbols → Visual Symbols → Recordings, Radio & Still Pictures → Motion Pictures → Educational Television → Exhibits → Study Trips → Demonstrations → Dramatized Experiences → Contrived Experiences → Direct Purposeful Experiences."
      },
      {
        type: "bullet_list",
        heading: "Jerome Bruner's 3 Modes of Learning",
        items: [
          "Enactive (direct experience): a series of actions.",
          "Iconic (pictorial experience): a series of illustrations.",
          "Symbolic (highly abstract experience): a series of symbols."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Direct & Contrived Experiences",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "1. Direct and Purposeful Experiences",
        content: "Direct, first-hand experiences with direct participation in the outcome — e.g. students preparing meals, making a PowerPoint presentation, delivering a speech, performing experiments, or making furniture."
      },
      {
        type: "bullet_list",
        heading: "2. Contrived Experiences",
        content: "Edited copies of direct experiences, designed to simulate real-life situations:",
        items: [
          "Model: a substitute for the real thing, in small, large, or exact scale, made of synthetic materials.",
          "Mockup: a special model where parts are singled out, heightened, and magnified to focus on a particular part or process.",
          "Specimen: an individual animal, plant, or mineral piece used as an example of its species or type for scientific study or display.",
          "Object: artifacts displayed in a museum, or objects displayed in exhibits.",
          "Simulation: a representation of a real, manageable event in which the learner actively applies previously acquired skills or knowledge.",
          "Games: forms of physical exercise that make classes interactive and develop students' decision-making and knowledge-construction skills."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Dramatized Experiences",
    pdfPageRef: "PDF Page 8",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "3. Dramatized Experiences",
        content: "Forms of reconstructed experience. A pupil who takes part in dramatization gets closer to direct experience than one who only watches."
      },
      {
        type: "bullet_list",
        heading: "Types of Dramatized Experiences",
        items: [
          "Plays: rehearsed stage performances that offer excellent opportunities to portray essential ideas about life.",
          "Pageants: usually community dramas based on local history — e.g. one tracing the growth of a school.",
          "Pantomime: a method of conveying a story through bodily gestures; its impact relies on the actors' movements.",
          "Tableau: a picture-like scene of people against a background who do not move or speak, representing a view of life or an event.",
          "Role-Playing: an unrehearsed, unprepared, and spontaneous dramatization of a situation where assigned participants absorb their roles; the focus is on attitudinal change.",
          "Puppets: inanimate or representational figures animated by an entertainer (a puppeteer), able to present ideas with extreme simplicity."
        ]
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Demonstrations Through Verbal Symbols",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "4-7: Demonstrations, Study Trips, Exhibits, Educational Television",
        items: [
          "Demonstrations: a visualized explanation of an important fact, idea, or process, showing how certain things are done (e.g. making a sandwich, playing the piano).",
          "Study Trips: excursions, educational trips, and visits conducted to observe an event unavailable within the classroom.",
          "Exhibits: bring the outside world into the classroom as concrete representations of things, letting students gain experience through observation and organization.",
          "Educational Television: brings immediate interaction with events from around the world.",
          "Motion Pictures: used to slow down a fast process; a viewing, seeing, and hearing experience."
        ]
      },
      {
        type: "bullet_list",
        heading: "9-11: Still Pictures/Recordings/Radio, Visual Symbols, Verbal Symbols",
        items: [
          "Still Pictures, Recordings, and Radio: roughly classified as one-dimensional aids since they use only one sense organ (eye or ear); less direct than audio-visual experiences.",
          "Visual Symbols: help students see an idea, event, or process, including drawings, cartoons, strip drawings, diagrams, charts, graphs, and physical maps.",
          "Verbal Symbols: words, phrases, sounds, or other spoken utterances expressing meaning — a phrase, idea, concept, scientific theory, or formula."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Dale's Cone: Retention After 2 Weeks",
    pdfPageRef: "PDF Page 9",
    readTime: "2 min read",
    sections: [
      {
        type: "table",
        heading: "Retention Activity & Involvement (After 2 Weeks, We Tend to Remember...)",
        tableData: {
          headers: ["Retention %", "Activity", "Involvement"],
          rows: [
            ["10%", "Reading", "PASSIVE"],
            ["20%", "Hearing Words", "PASSIVE"],
            ["30%", "Seeing", "PASSIVE"],
            ["50%", "Watching a Movie, Looking at an Exhibit, Watching a Demonstration, Seeing It Done on Location", "PASSIVE"],
            ["70%", "Participation in a Discussion, Giving a Talk", "ACTIVE"],
            ["90%", "Doing a Dramatic Presentation, Simulating the Real Experience, Doing the Real Thing", "ACTIVE"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Detailed Visual Symbols: Types of Diagrams",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Note",
        content: "This section is marked 'For Personal Study / Self-Study Only!' in the original reviewer."
      },
      {
        type: "bullet_list",
        heading: "Diagrams: A Line Drawing Showing Arrangement and Relations (Dale, 1969)",
        items: [
          "Affinity Diagram: used to cluster complex, apparently unrelated data into natural and meaningful groups.",
          "Tree Diagram: a modern method for planning management that defines the hierarchy of tasks and subtasks needed to complete an objective, branching from one element into two or more.",
          "Fishbone (Ishikawa) Diagram: also called a cause-and-effect diagram; a visualization method for categorizing the possible causes of a root issue.",
          "Venn Diagram: uses circles to show the relationship between two specific ideas."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Detailed Visual Symbols: Types of Charts",
    pdfPageRef: "PDF Page 11",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Charts: Diagrammatic Representation of Individual Connections",
        items: [
          "Time Chart: a tabular time diagram displaying data in ordinal series (e.g. a timeline of literary periods).",
          "Tree or Stream Chart: shows creation, growth, and change starting from a simple course and spreading into several branches (e.g. a family tree).",
          "Flowchart: a visual way of showing a process from beginning to end (e.g. troubleshooting why a lamp doesn't work).",
          "Organizational Chart: a graphical representation of a structure showing relationships within positions or jobs (e.g. a company org chart)."
        ]
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Detailed Visual Symbols: Graphs & Maps",
    pdfPageRef: "PDF Page 12-13",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Graphs: Show Information as a Visual Image",
        items: [
          "Circle Graph: divides a circle into sectors, each representing a part of a whole (e.g. a pie chart of a daily schedule).",
          "Line Graph: shows information that changes over time (e.g. push-ups performed per day of the week).",
          "Bar Graph: compares the magnitude of identical things across different categories (e.g. votes for the 'nicest fruit').",
          "Pictorial Graph: uses pictograms — icons or pictures in relative sizes — to highlight data patterns and trends (e.g. after-school club membership, where each icon represents a set number of members)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Maps: Representation of the Earth's Surface",
        items: [
          "Physical Map: combines data like altitude, temperature, rainfall, precipitation, vegetation, and soil in a single projection.",
          "Relief Map: has three-dimensional representations showing the contours of the physical data of the earth or part of it.",
          "Commercial or Economic Map: also called a product or industrial map, showing land areas in relation to the economy.",
          "Political Map: gives detailed information about countries, provinces, cities, towns, roads, and highways."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Bulletin Boards & Criteria for Selecting Resources",
    pdfPageRef: "PDF Page 13",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "4 General Purposes of Bulletin Board Displays",
        items: [
          "1. Decorative: offer visual stimulation, appeal to aesthetics, and set the social and psychological atmosphere of the school.",
          "2. Motivational: encourage students to perform better and have greater confidence.",
          "3. Informational: used as a strategy to disseminate information.",
          "4. Instructional: invite students to respond and participate through interactive displays."
        ]
      },
      {
        type: "bullet_list",
        heading: "8 Criteria for Evaluating Bulletin Boards",
        items: [
          "Effective Communication: conveys the message quickly and clearly.",
          "Attractiveness: colors and arrangement catch and hold interest.",
          "Balance: objects are arranged so stability is perceived.",
          "Unity: repeated shapes, colors, or borders hold the display together.",
          "Interactivity: the style and approach entice learners to be involved.",
          "Legibility: letters and illustrations can be seen from a good distance.",
          "Correctness: free from grammar errors, misspelled words, and ambiguity.",
          "Durability: well constructed, with items securely attached."
        ]
      },
      {
        type: "bullet_list",
        heading: "5 Criteria for Selecting Resources",
        items: [
          "Appropriateness: grade/level appropriate; content matches what the teacher needs.",
          "Clarity: clearly addresses the instructional goals in mind.",
          "Completeness: has all the information needed for use.",
          "Motivation: engaging and rewarding, encouraging active learner participation.",
          "Organization: logically sequenced, clearly indicating steps, with procedures flowing smoothly."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Minor Misuse of ICT",
    pdfPageRef: "PDF Page 14",
    readTime: "2 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Common Minor Misuses of ICT",
        items: [
          "1. Copying information into assignments and failing to acknowledge the source (plagiarism and copyright infringement).",
          "2. Downloading materials not relevant to their studies.",
          "3. Misconduct associated with subject logins, such as using someone else's password.",
          "4. Leaving a mobile phone turned on during class period.",
          "5. Unauthorized taking of pictures or images with a mobile phone camera, still or moving."
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "The Technology Integration Matrix: Levels & Characteristics",
    pdfPageRef: "PDF Page 14-15",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Technology Integration Matrix",
        content: "Provides a comprehensive framework to define and evaluate technology integration, guiding the process of achieving teaching with technology."
      },
      {
        type: "numbered_list",
        heading: "5 Levels of Technology Integration",
        items: [
          "1. Entry: technology delivers curriculum content; drills and practice; students receive direction, feedback, and guidance from technology; information is passively received.",
          "2. Adoption: technology is used in a conventional and procedural way; students begin to utilize and apply technology from time to time.",
          "3. Adaptation: students select and modify technology tools; conventional independent use, with some student choice and exploration.",
          "4. Infusion: technology use spans the day, the curriculum, and across disciplines; students select appropriate tools for authentic situations with regular self-directed use.",
          "5. Transformation: goes beyond the limits of even the best school library, reaching a worldwide audience irrespective of time or distance; technology facilitates higher-order learning that would otherwise be difficult or impossible — unconventional, innovative use."
        ]
      },
      {
        type: "bullet_list",
        heading: "5 Characteristics of the Learning Environment",
        items: [
          "Active: students actively use technology as a tool rather than passively receiving information from it.",
          "Collaborative: students use technology tools to collaborate with others rather than working individually at all times.",
          "Constructive: students use technology tools to build understanding rather than simply receive information.",
          "Authentic: students use technology tools to solve real-world problems meaningful to them, rather than artificial assignments.",
          "Goal-Directed: students use technology tools to set goals, plan activities, monitor progress, and evaluate results, rather than simply completing assignments without reflection."
        ]
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 2,
    dayTitle: "Day 2: Tech Integration Frameworks, Dale's Cone & Visual Aids",
    topicTitle: "Technology Integration Matrix: Full Breakdown by Characteristic",
    pdfPageRef: "PDF Page 15-16",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Active",
        tableData: {
          headers: ["Level", "Description"],
          rows: [
            ["Entry", "Students use technology for drill and practice and computer-based training."],
            ["Adoption", "Students begin to utilize technology tools to create products, e.g. using a word processor to create a report."],
            ["Adaptation", "Students select and modify tools to accomplish specific purposes, e.g. using colored spreadsheet cells to plan a garden."],
            ["Infusion", "Students are empowered throughout the school day to select and actively apply appropriate technology tools to the tasks at hand."],
            ["Transformation", "Given ongoing access to online resources, students actively select and pursue topics beyond the limitations of even the best school library."]
          ]
        }
      },
      {
        type: "table",
        heading: "Collaborative",
        tableData: {
          headers: ["Level", "Description"],
          rows: [
            ["Entry", "Students primarily work alone when using technology."],
            ["Adoption", "Students have opportunities to utilize collaborative tools, such as email, in conventional ways."],
            ["Adaptation", "Students select and modify technology tools to facilitate collaborative work."],
            ["Infusion", "Throughout the school day and across subjects, students use technology to facilitate collaborative learning."],
            ["Transformation", "Technology enables students to collaborate with peers and experts irrespective of time zone or physical distance."]
          ]
        }
      },
      {
        type: "table",
        heading: "Constructive",
        tableData: {
          headers: ["Level", "Description"],
          rows: [
            ["Entry", "Technology is used to deliver information to students."],
            ["Adoption", "Students begin to use constructive tools such as graphic organizers to build on prior knowledge."],
            ["Adaptation", "Students select and modify technology tools to assist in constructing understanding."],
            ["Infusion", "Students use technology to make connections and construct understanding across disciplines and throughout the day."],
            ["Transformation", "Students use technology to construct, share, and publish knowledge to a worldwide audience."]
          ]
        }
      },
      {
        type: "table",
        heading: "Authentic",
        tableData: {
          headers: ["Level", "Description"],
          rows: [
            ["Entry", "Students use technology for assigned activities generally unrelated to real-world problems."],
            ["Adoption", "Students apply technology tools to some content-specific activities based on real-world problems."],
            ["Adaptation", "Students select and modify technology tools to solve problems based on real-world issues."],
            ["Infusion", "Students select appropriate technology tools to complete authentic tasks across disciplines."],
            ["Transformation", "Students use technology to participate in outside-of-school projects and problem-solving with meaning for students and the community."]
          ]
        }
      },
      {
        type: "table",
        heading: "Goal-Directed",
        tableData: {
          headers: ["Level", "Description"],
          rows: [
            ["Entry", "Students receive direction, guidance, and feedback from technology rather than using it to set goals or self-evaluate."],
            ["Adoption", "From time to time, students use technology to plan, monitor, or evaluate an activity."],
            ["Adaptation", "Students select and modify technology tools to facilitate goal-setting, planning, monitoring, and evaluation of specific activities."],
            ["Infusion", "Students use technology tools to set goals, plan activities, monitor progress, and evaluate results throughout the curriculum."],
            ["Transformation", "Students engage in ongoing metacognitive activities at a level unattainable without the support of technological tools."]
          ]
        }
      }
    ]
  }
];

export const TECH_TEACHING_LEARNING_PAGES = TECHNOLOGY_FOR_TEACHING_LEARNING_PAGES;
