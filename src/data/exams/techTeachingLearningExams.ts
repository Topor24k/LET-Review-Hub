import { ExamQuestion } from '../../types';

export const TECH_TEACHING_LEARNING_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "id": 1,
    "topicRef": "ICT Competency Standards (ICT-CFT)",
    "question": "Under the UNESCO ICT Competency Framework for Teachers (ICT-CFT), which stage represents the highest level of ICT integration where teachers and students collaboratively design innovative solutions to community and global challenges?",
    "options": [
      {
        "key": "A",
        "text": "Technology Literacy"
      },
      {
        "key": "B",
        "text": "Knowledge Deepening"
      },
      {
        "key": "C",
        "text": "Knowledge Creation"
      },
      {
        "key": "D",
        "text": "Digital Awareness"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The UNESCO ICT-CFT comprises three progressive approaches: 1. Technology Literacy (basic ICT skills), 2. Knowledge Deepening (applying ICT to complex real problems), and 3. Knowledge Creation (highest level: creating new knowledge, innovations, and self-directed lifelong learning)."
  },
  {
    "id": 2,
    "topicRef": "ICT-CFT Domains",
    "question": "Which domain of the Philippine ICT Competency Standards for Pre-Service Teachers focuses on understanding ICT policies, safety guidelines, and national legal frameworks governing educational technology?",
    "options": [
      {
        "key": "A",
        "text": "Domain 1: Understanding ICT in Education"
      },
      {
        "key": "B",
        "text": "Domain 2: Curriculum and Assessment"
      },
      {
        "key": "C",
        "text": "Domain 3: Pedagogy"
      },
      {
        "key": "D",
        "text": "Domain 4: Technology Tools"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Domain 1 focuses on Understanding ICT in Education, including national ICT policies, safety, legal frameworks, and digital equity in Philippine schooling."
  },
  {
    "id": 3,
    "topicRef": "TPACK Framework (Mishra & Koehler)",
    "question": "In the TPACK framework developed by Punya Mishra and Matthew Koehler, what is the intersection called when a teacher knows the subject matter concepts AND understands the specific pedagogical strategies best suited to teach that particular content, regardless of technology?",
    "options": [
      {
        "key": "A",
        "text": "Technological Content Knowledge (TCK)"
      },
      {
        "key": "B",
        "text": "Technological Pedagogical Knowledge (TPK)"
      },
      {
        "key": "C",
        "text": "Pedagogical Content Knowledge (PCK)"
      },
      {
        "key": "D",
        "text": "Technological Knowledge (TK)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "PCK (first coined by Lee Shulman) is the intersection of Pedagogy (P) and Content (C), representing how a teacher transforms specific subject content into pedagogically powerful and understandable lessons."
  },
  {
    "id": 4,
    "topicRef": "TPACK Framework",
    "question": "A physics teacher uses an interactive 3D particle simulation software to help students visualize invisible magnetic field lines around electrical currents. This integration represents which specific intersection in TPACK?",
    "options": [
      {
        "key": "A",
        "text": "Technological Content Knowledge (TCK)"
      },
      {
        "key": "B",
        "text": "Pedagogical Knowledge (PK)"
      },
      {
        "key": "C",
        "text": "Content Knowledge (CK)"
      },
      {
        "key": "D",
        "text": "Technological Knowledge (TK)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "TCK (Technological Content Knowledge) is understanding how technology and specific content influence and constrain one another (e.g., using specialized technological tools to represent specific scientific concepts)."
  },
  {
    "id": 5,
    "topicRef": "TPACK Framework: True TPACK",
    "question": "True TPACK (Technological Pedagogical Content Knowledge) is achieved when a teacher:",
    "options": [
      {
        "key": "A",
        "text": "Simply buys the latest iPad model for every student."
      },
      {
        "key": "B",
        "text": "Seamlessly blends deep content knowledge, dynamic pedagogical strategies, and appropriate technology tools to create transformative learning experiences."
      },
      {
        "key": "C",
        "text": "Lectures for 60 minutes using standard PowerPoint bullet slides."
      },
      {
        "key": "D",
        "text": "Eliminates books completely and only lets students browse social media."
      }
    ],
    "correctAnswer": "B",
    "explanation": "True TPACK is the synergistic integration of Content (what to teach), Pedagogy (how to teach), and Technology (which digital tools enhance the learning), working as an integrated whole."
  },
  {
    "id": 6,
    "topicRef": "SAMR Model (Ruben Puentedura)",
    "question": "In Ruben Puentedura's SAMR Model, what are the four sequential levels from lowest enhancement to highest transformation?",
    "options": [
      {
        "key": "A",
        "text": "Substitution, Augmentation, Modification, Redefinition"
      },
      {
        "key": "B",
        "text": "Selection, Application, Mastery, Retention"
      },
      {
        "key": "C",
        "text": "Software, Application, Multimedia, Robotics"
      },
      {
        "key": "D",
        "text": "Stimulation, Activation, Motivation, Reflection"
      }
    ],
    "correctAnswer": "A",
    "explanation": "SAMR stands for: 1. Substitution (Enhancement), 2. Augmentation (Enhancement), 3. Modification (Transformation), and 4. Redefinition (Transformation)."
  },
  {
    "id": 7,
    "topicRef": "SAMR Model: Substitution",
    "question": "Students type their essays using a word processor instead of writing them by hand on lined paper, with no functional change in the task or capabilities. In SAMR, this is:",
    "options": [
      {
        "key": "A",
        "text": "Substitution"
      },
      {
        "key": "B",
        "text": "Augmentation"
      },
      {
        "key": "C",
        "text": "Modification"
      },
      {
        "key": "D",
        "text": "Redefinition"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitution acts as a direct tool substitute with no functional change to the learning task."
  },
  {
    "id": 8,
    "topicRef": "SAMR Model: Augmentation",
    "question": "Students type their essay on a digital tool that provides automated spell-checking, built-in thesaurus lookup, and real-time voice-to-text dictation. This represents:",
    "options": [
      {
        "key": "A",
        "text": "Substitution"
      },
      {
        "key": "B",
        "text": "Augmentation"
      },
      {
        "key": "C",
        "text": "Modification"
      },
      {
        "key": "D",
        "text": "Redefinition"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Augmentation acts as a direct tool substitute with functional improvements/enhancements (e.g. spell check, word count, text-to-speech)."
  },
  {
    "id": 9,
    "topicRef": "SAMR Model: Modification",
    "question": "Instead of writing an individual static essay, students use collaborative cloud documents to co-author an article with peers, embed interactive hyperlinks, and give peer comments in real-time. This level is:",
    "options": [
      {
        "key": "A",
        "text": "Substitution"
      },
      {
        "key": "B",
        "text": "Augmentation"
      },
      {
        "key": "C",
        "text": "Modification"
      },
      {
        "key": "D",
        "text": "Redefinition"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Modification represents the first level of Transformation, where technology allows significant task redesign."
  },
  {
    "id": 10,
    "topicRef": "SAMR Model: Redefinition",
    "question": "Students research climate change, produce a multi-episode documentary with global drone footage, conduct live video-conference interviews with scientists in Antarctica, and publish it to an international audience. This is:",
    "options": [
      {
        "key": "A",
        "text": "Substitution"
      },
      {
        "key": "B",
        "text": "Augmentation"
      },
      {
        "key": "C",
        "text": "Modification"
      },
      {
        "key": "D",
        "text": "Redefinition"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Redefinition allows for the creation of new tasks that were previously inconceivable without digital technology."
  },
  {
    "id": 11,
    "topicRef": "ASSURE Model (Heinich, Molenda, Russell, Smaldino)",
    "question": "What does the acronym ASSURE stand for in instructional media design?",
    "options": [
      {
        "key": "A",
        "text": "Analyze learners, State standards & objectives, Select strategies & technology, Utilize technology & media, Require learner participation, Evaluate & revise"
      },
      {
        "key": "B",
        "text": "Assess students, Select software, Use resources, Require exams, Evaluate results"
      },
      {
        "key": "C",
        "text": "Analyze society, Structure schools, Upgrade radios, Reorganize exams"
      },
      {
        "key": "D",
        "text": "Audio, Screens, Software, Universal access, Remote education"
      }
    ],
    "correctAnswer": "A",
    "explanation": "ASSURE stands for: Analyze learners, State standards and objectives, Select strategies, technology, media and materials, Utilize technology and media, Require learner participation, and Evaluate and revise."
  },
  {
    "id": 12,
    "topicRef": "ASSURE Model: 5 Ps in Utilizing Media",
    "question": "Under the 'Utilize Media and Materials' step of ASSURE, what are the '5 Ps' of effective implementation?",
    "options": [
      {
        "key": "A",
        "text": "Preview materials, Prepare materials, Prepare the environment, Prepare the learners, Provide the learning experience"
      },
      {
        "key": "B",
        "text": "Price, Product, Promotion, Placement, People"
      },
      {
        "key": "C",
        "text": "Print, Power, Projector, Password, Play"
      },
      {
        "key": "D",
        "text": "Pacing, Planning, Practicing, Performing, Publishing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The 5 Ps for utilizing media are: 1. Preview the materials, 2. Prepare the materials, 3. Prepare the environment, 4. Prepare the learners, and 5. Provide the learning experience."
  },
  {
    "id": 13,
    "topicRef": "Dale's Cone: Contrived Experiences",
    "question": "When real objects are too dangerous, too large, or too small to bring to the classroom (e.g., the solar system or a human heart), a teacher uses scale models and mock-ups. In Dale's Cone, this is known as:",
    "options": [
      {
        "key": "A",
        "text": "Contrived Experiences"
      },
      {
        "key": "B",
        "text": "Dramatized Experiences"
      },
      {
        "key": "C",
        "text": "Visual Symbols"
      },
      {
        "key": "D",
        "text": "Verbal Symbols"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Contrived Experiences involve models, mock-ups, specimens, and simulations that represent reality when the real object is inaccessible, dangerous, or unmanageable."
  },
  {
    "id": 14,
    "topicRef": "Dale's Cone: Dramatized Experiences",
    "question": "Students enact a historical trial in costume to understand the socio-political tensions of the 1896 Philippine revolution. In Dale's Cone, this is categorized under:",
    "options": [
      {
        "key": "A",
        "text": "Dramatized Experiences (Role-play / Pageants)"
      },
      {
        "key": "B",
        "text": "Exhibits"
      },
      {
        "key": "C",
        "text": "Motion Pictures"
      },
      {
        "key": "D",
        "text": "Verbal Symbols"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Dramatized Experiences allow learners to actively participate in simulated historical events, role plays, or plays, providing high emotional and sensory involvement."
  },
  {
    "id": 15,
    "topicRef": "Media Selection Criteria",
    "question": "Which of the following is the MOST important criterion when selecting digital media or educational software for a lesson?",
    "options": [
      {
        "key": "A",
        "text": "How expensive and prestigious the software brand is."
      },
      {
        "key": "B",
        "text": "Direct alignment with the intended learning objectives and learner developmental level."
      },
      {
        "key": "C",
        "text": "Whether it contains high-volume background pop music."
      },
      {
        "key": "D",
        "text": "Whether it takes up the entire 60 minutes so the teacher does not have to talk."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Instructional alignment is paramount: technology and media must directly support the intended learning outcomes and match the cognitive maturity of the students."
  },
  {
    "id": 16,
    "topicRef": "Digital Citizenship (Mike Ribble)",
    "question": "According to Mike Ribble, Digital Citizenship is defined as:",
    "options": [
      {
        "key": "A",
        "text": "The norms of appropriate, responsible, and ethical behavior with regard to technology use."
      },
      {
        "key": "B",
        "text": "Owning at least three different computing devices."
      },
      {
        "key": "C",
        "text": "Playing competitive online video games for 10 hours a day."
      },
      {
        "key": "D",
        "text": "Creating multiple anonymous accounts to troll internet forums."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Digital citizenship (Ribble) encompasses the norms of safe, legal, ethical, and responsible technology usage across 9 essential themes."
  },
  {
    "id": 17,
    "topicRef": "9 Themes of Digital Citizenship: Digital Etiquette (Netiquette)",
    "question": "Typing an email or message in ALL CAPS in online communication is considered a violation of Netiquette because:",
    "options": [
      {
        "key": "A",
        "text": "It consumes more electrical power from the monitor."
      },
      {
        "key": "B",
        "text": "It is universally interpreted as online shouting and aggressive tone."
      },
      {
        "key": "C",
        "text": "It prevents email servers from delivering text."
      },
      {
        "key": "D",
        "text": "It violates copyright laws."
      }
    ],
    "correctAnswer": "B",
    "explanation": "In Netiquette standards, typing in all capital letters is perceived as shouting, harshness, and impoliteness."
  },
  {
    "id": 18,
    "topicRef": "9 Themes: Digital Footprint",
    "question": "What is a 'Digital Footprint'?",
    "options": [
      {
        "key": "A",
        "text": "The physical dimensions of a smartphone screen."
      },
      {
        "key": "B",
        "text": "The permanent trail of data, posts, search queries, and media left behind by a user on the internet."
      },
      {
        "key": "C",
        "text": "The battery consumption per hour of internet use."
      },
      {
        "key": "D",
        "text": "The walking distance measured by a smart watch."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A Digital Footprint is the permanent trail of traceable digital activities, records, photos, comments, and uploads left behind when using online platforms."
  },
  {
    "id": 19,
    "topicRef": "Cybercrime Law: RA 10175",
    "question": "In the Philippines, what is the official title of Republic Act No. 10175?",
    "options": [
      {
        "key": "A",
        "text": "Cybercrime Prevention Act of 2012"
      },
      {
        "key": "B",
        "text": "Data Privacy Act of 2012"
      },
      {
        "key": "C",
        "text": "Anti-Bullying Act of 2013"
      },
      {
        "key": "D",
        "text": "Electronic Commerce Act of 2000"
      }
    ],
    "correctAnswer": "A",
    "explanation": "RA 10175 is the Cybercrime Prevention Act of 2012, penalizing offenses against confidentiality, integrity, cyber-libel, child pornography, and illegal access."
  },
  {
    "id": 20,
    "topicRef": "Data Privacy Act: RA 10173",
    "question": "Under Republic Act 10173 (Data Privacy Act of 2012), posting students' full names alongside their private exam scores, home addresses, and phone numbers on a public Facebook group without consent is:",
    "options": [
      {
        "key": "A",
        "text": "An innovative best practice in public transparency."
      },
      {
        "key": "B",
        "text": "A severe violation of personal identifiable data privacy rights."
      },
      {
        "key": "C",
        "text": "Mandated by the DepEd grading system."
      },
      {
        "key": "D",
        "text": "Acceptable as long as the teacher likes the post."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Posting sensitive personal and educational information publicly without lawful consent violates RA 10173 (Data Privacy Act) and breaches professional ethics."
  },
  {
    "id": 21,
    "topicRef": "Anti-Bullying Act: RA 10627",
    "question": "Which Philippine law specifically mandates all elementary and secondary schools to adopt anti-bullying policies that address cyberbullying?",
    "options": [
      {
        "key": "A",
        "text": "RA 10627 (Anti-Bullying Act of 2013)"
      },
      {
        "key": "B",
        "text": "RA 7836"
      },
      {
        "key": "C",
        "text": "RA 4670"
      },
      {
        "key": "D",
        "text": "RA 9155"
      }
    ],
    "correctAnswer": "A",
    "explanation": "RA 10627 is the Anti-Bullying Act of 2013, requiring all schools to implement policies against bullying, harassment, and cyberbullying on digital platforms."
  },
  {
    "id": 22,
    "topicRef": "Cyber Threats: Phishing",
    "question": "A teacher receives an email disguised as an official DepEd notice asking her to immediately click a link and enter her payroll account password. This social engineering attack is called:",
    "options": [
      {
        "key": "A",
        "text": "Phishing"
      },
      {
        "key": "B",
        "text": "Denial of Service (DoS)"
      },
      {
        "key": "C",
        "text": "Degaussing"
      },
      {
        "key": "D",
        "text": "Keylogging"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Phishing is a fraudulent attempt to obtain sensitive information (usernames, passwords, bank details) by disguising as a trustworthy entity in an electronic communication."
  },
  {
    "id": 23,
    "topicRef": "Cyber Threats: Ransomware",
    "question": "Malicious software that encrypts a school's server files and demands financial payment in cryptocurrency to decrypt them is known as:",
    "options": [
      {
        "key": "A",
        "text": "Adware"
      },
      {
        "key": "B",
        "text": "Ransomware"
      },
      {
        "key": "C",
        "text": "Spyware"
      },
      {
        "key": "D",
        "text": "Cookie"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ransomware is malicious malware designed to lock/encrypt victim files and extort ransom money for the decryption key."
  },
  {
    "id": 24,
    "topicRef": "Open Educational Resources (OER)",
    "question": "What are Open Educational Resources (OER)?",
    "options": [
      {
        "key": "A",
        "text": "Commercial textbooks that require a costly annual subscription fee."
      },
      {
        "key": "B",
        "text": "Teaching, learning, and research materials in any medium that reside in the public domain or under an open license allowing free access, reuse, and adaptation."
      },
      {
        "key": "C",
        "text": "Pirated proprietary software downloaded illegally from torrent sites."
      },
      {
        "key": "D",
        "text": "Confidential test questions locked in a bank vault."
      }
    ],
    "correctAnswer": "B",
    "explanation": "OER (UNESCO definition) are freely accessible, openly licensed text, media, and digital assets useful for teaching, learning, and researching without royalty charges."
  },
  {
    "id": 25,
    "topicRef": "Creative Commons 5Rs (David Wiley)",
    "question": "Under David Wiley's '5Rs' of Open Content permissions, which 'R' grants educators the legal right to translate, modify, adapt, or remap educational content to suit their local dialect?",
    "options": [
      {
        "key": "A",
        "text": "Retain"
      },
      {
        "key": "B",
        "text": "Reuse"
      },
      {
        "key": "C",
        "text": "Revise"
      },
      {
        "key": "D",
        "text": "Redistribute"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The 5Rs are: Retain (make/own copies), Reuse (use in wide contexts), Revise (adapt, adjust, modify, translate), Remix (combine with other open content), and Redistribute (share copies)."
  },
  {
    "id": 26,
    "topicRef": "Creative Commons License Types: CC BY-NC-ND",
    "question": "What does the Creative Commons license tag 'NC-ND' indicate to an educator?",
    "options": [
      {
        "key": "A",
        "text": "Non-Commercial (cannot sell) and No Derivatives (cannot alter or modify original content)"
      },
      {
        "key": "B",
        "text": "National Content - No Download"
      },
      {
        "key": "C",
        "text": "New Copy - New Design"
      },
      {
        "key": "D",
        "text": "No Copyright - No Domain"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'NC' stands for Non-Commercial (commercial use is prohibited) and 'ND' stands for NoDerivatives (the work may be shared, but not edited, translated, or altered)."
  },
  {
    "id": 27,
    "topicRef": "Learning Management Systems (LMS)",
    "question": "Which of the following digital platforms is classified primarily as a Learning Management System (LMS) designed for course delivery, grading, and assignment tracking?",
    "options": [
      {
        "key": "A",
        "text": "Canvas / Moodle / Google Classroom"
      },
      {
        "key": "B",
        "text": "Photoshop"
      },
      {
        "key": "C",
        "text": "Spotify"
      },
      {
        "key": "D",
        "text": "TikTok"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Canvas, Moodle, Blackboard, and Google Classroom are dedicated Learning Management Systems providing course management, content repositories, quizzes, and gradebooks."
  },
  {
    "id": 28,
    "topicRef": "Synchronous vs Asynchronous Online Learning",
    "question": "Which of the following is an example of Synchronous Distance Learning?",
    "options": [
      {
        "key": "A",
        "text": "Students reading offline printed modules on a weekend."
      },
      {
        "key": "B",
        "text": "A live, real-time interactive Zoom / Google Meet class session where teacher and students interact simultaneously."
      },
      {
        "key": "C",
        "text": "Students posting in a forum discussion board over a 7-day period."
      },
      {
        "key": "D",
        "text": "Submitting an essay via email at 2:00 AM."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Synchronous learning occurs in real-time with simultaneous live engagement, while Asynchronous learning occurs self-paced without simultaneous real-time presence."
  },
  {
    "id": 29,
    "topicRef": "Blended Learning Models",
    "question": "In the 'Station Rotation' Blended Learning model, how do students progress through the lesson?",
    "options": [
      {
        "key": "A",
        "text": "They stay at home 100% of the school year without visiting campus."
      },
      {
        "key": "B",
        "text": "Students rotate on a fixed schedule between different classroom stations: one online learning station, one teacher-led instruction station, and one collaborative peer project station."
      },
      {
        "key": "C",
        "text": "Students rotate between schools across different provinces every week."
      },
      {
        "key": "D",
        "text": "The teacher leaves the classroom while students watch movies."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Station Rotation rotates students through classroom learning stations on a fixed schedule, including at least one station with digital individualized learning."
  },
  {
    "id": 30,
    "topicRef": "Gamification in Education",
    "question": "What is the primary educational purpose of 'Gamification' (e.g., using Kahoot, Quizizz, badges, leaderboards)?",
    "options": [
      {
        "key": "A",
        "text": "To waste school hours playing non-academic video games."
      },
      {
        "key": "B",
        "text": "To apply game elements (points, challenges, instant feedback) in non-game educational contexts to enhance student motivation and active engagement."
      },
      {
        "key": "C",
        "text": "To replace human teachers with automated game consoles."
      },
      {
        "key": "D",
        "text": "To eliminate formal grading in science."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Gamification integrates game design mechanics (points, badges, leaderboards, immediate feedback) into educational tasks to boost motivation, active recall, and engagement."
  },
  {
    "id": 31,
    "topicRef": "Digital Bloom's Taxonomy (Andrew Churches)",
    "question": "In Andrew Churches' Digital Bloom's Taxonomy, which digital activity represents the cognitive level of 'Creating'?",
    "options": [
      {
        "key": "A",
        "text": "Bookmarking a webpage"
      },
      {
        "key": "B",
        "text": "Highlighting a PDF document"
      },
      {
        "key": "C",
        "text": "Filming, editing, and publishing an original instructional video or podcast"
      },
      {
        "key": "D",
        "text": "Googling a factual definition"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Digital Creating involves designing, authoring, programming, video producing, remixing, and publishing original digital artifacts."
  },
  {
    "id": 32,
    "topicRef": "Digital Bloom's Taxonomy: Evaluating",
    "question": "Participating in an online peer-review forum to critique the credibility, bias, and methodology of digital news articles corresponds to which Digital Bloom level?",
    "options": [
      {
        "key": "A",
        "text": "Remembering"
      },
      {
        "key": "B",
        "text": "Understanding"
      },
      {
        "key": "C",
        "text": "Evaluating"
      },
      {
        "key": "D",
        "text": "Applying"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Critiquing, moderating, evaluating bias, peer reviewing, and validating sources represent the Evaluating level."
  },
  {
    "id": 33,
    "topicRef": "Artificial Intelligence in Education (AIED)",
    "question": "When integrating Generative AI tools (e.g. LLMs) into classroom instruction, what is the most ethical pedagogical stance for a professional teacher?",
    "options": [
      {
        "key": "A",
        "text": "Completely ban all computing devices forever and pretend AI does not exist."
      },
      {
        "key": "B",
        "text": "Allow students to copy-paste AI outputs directly and grade AI outputs as their own work."
      },
      {
        "key": "C",
        "text": "Teach students critical AI literacy, ethical citation, prompt engineering, and how to verify, critique, and improve AI-assisted drafts."
      },
      {
        "key": "D",
        "text": "Use AI to write fake grades for students."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Ethical AI pedagogy emphasizes AI literacy, transparency, critical evaluation of AI hallucinations/bias, and developing authentic higher-order synthesis skills."
  },
  {
    "id": 34,
    "topicRef": "Adaptive Learning Technology",
    "question": "What distinguishes 'Adaptive Learning Software' from static digital e-books?",
    "options": [
      {
        "key": "A",
        "text": "Adaptive software dynamically adjusts question difficulty and instructional pathways in real time based on individual learner performance and error patterns."
      },
      {
        "key": "B",
        "text": "It is printed on recycled paper."
      },
      {
        "key": "C",
        "text": "It cannot be viewed on smartphones."
      },
      {
        "key": "D",
        "text": "It only shows text without images."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Adaptive learning algorithms customize the presentation of material and difficulty level dynamically based on student responses, providing personalized remediation."
  },
  {
    "id": 35,
    "topicRef": "Assistive Technology for Special Needs",
    "question": "A visually impaired student uses screen-reading software (e.g. JAWS/NVDA) and Refreshable Braille Displays. These tools are categorized as:",
    "options": [
      {
        "key": "A",
        "text": "Assistive Technology"
      },
      {
        "key": "B",
        "text": "Entertainment Media"
      },
      {
        "key": "C",
        "text": "Intrusive Technology"
      },
      {
        "key": "D",
        "text": "Commercial Warez"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Assistive Technology (AT) comprises any assistive, adaptive, and rehabilitative devices that promote greater independence and accessibility for individuals with disabilities."
  },
  {
    "id": 36,
    "topicRef": "Augmented Reality (AR) vs Virtual Reality (VR)",
    "question": "Which statement accurately distinguishes Augmented Reality (AR) from Virtual Reality (VR)?",
    "options": [
      {
        "key": "A",
        "text": "AR overlays digital 3D models onto the real-world environment (e.g., viewing a 3D beating heart on a classroom desk), whereas VR completely immerses the user in an artificial digital world through a headset."
      },
      {
        "key": "B",
        "text": "AR requires total darkness while VR works only in sunlight."
      },
      {
        "key": "C",
        "text": "VR uses paper flashcards while AR uses blackboards."
      },
      {
        "key": "D",
        "text": "There is no difference between AR and VR."
      }
    ],
    "correctAnswer": "A",
    "explanation": "AR superimposes digital information onto the real-world view, while VR immerses the user completely into an interactive computer-generated environment via head-mounted displays."
  },
  {
    "id": 37,
    "topicRef": "Technology-Enhanced Formative Assessment",
    "question": "Using live audience polling tools (e.g., Mentimeter / Slido / Google Forms) at the start of a lesson allows a teacher to:",
    "options": [
      {
        "key": "A",
        "text": "Instantly diagnose class-wide misconceptions and adapt pacing in real-time."
      },
      {
        "key": "B",
        "text": "Assign permanent quarterly grades."
      },
      {
        "key": "C",
        "text": "Punish students who forgot their textbooks."
      },
      {
        "key": "D",
        "text": "Eliminate the need for lesson objectives."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Real-time polling provides instantaneous formative data, enabling agile pedagogical adjustments and revealing misconceptions immediately."
  },
  {
    "id": 38,
    "topicRef": "Digital Divide & Educational Equity",
    "question": "The term 'Digital Divide' refers to:",
    "options": [
      {
        "key": "A",
        "text": "The mathematical operation of dividing binary numbers."
      },
      {
        "key": "B",
        "text": "The socioeconomic gap between individuals and communities who have access to modern ICT and high-speed internet versus those who do not."
      },
      {
        "key": "C",
        "text": "The physical border between school buildings."
      },
      {
        "key": "D",
        "text": "The difference between Mac and Windows operating systems."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Digital Divide is the economic and social inequality regarding access to, use of, or impact of information and communication technologies."
  },
  {
    "id": 39,
    "topicRef": "DepEd Commons & Digital Repositories",
    "question": "In the Philippine public school system, what is 'DepEd Commons'?",
    "options": [
      {
        "key": "A",
        "text": "An online open educational resources (OER) portal established by DepEd to provide free digital learning materials and self-learning modules."
      },
      {
        "key": "B",
        "text": "A physical cafeteria located inside the DepEd Central Office."
      },
      {
        "key": "C",
        "text": "A private paid gaming platform for teachers."
      },
      {
        "key": "D",
        "text": "A political party for educators."
      }
    ],
    "correctAnswer": "A",
    "explanation": "DepEd Commons is an online platform for public school teachers and learners that provides free access to curated learning resources and open educational resources (OERs)."
  },
  {
    "id": 40,
    "topicRef": "Information Literacy: CRAAP Test",
    "question": "In evaluating online sources for academic research, what does the CRAAP test evaluate?",
    "options": [
      {
        "key": "A",
        "text": "Currency, Relevance, Authority, Accuracy, and Purpose"
      },
      {
        "key": "B",
        "text": "Computers, Radios, Audio, Animation, and Projectors"
      },
      {
        "key": "C",
        "text": "Cost, Rating, Availability, Access, and Price"
      },
      {
        "key": "D",
        "text": "Creativity, Retention, Achievement, Aptitude, and Performance"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The CRAAP Test is a widely recognized evaluation checklist for web source reliability: Currency (timeliness), Relevance (importance), Authority (source credentials), Accuracy (veracity), and Purpose (reason for publication)."
  },
  {
    "id": 41,
    "topicRef": "Instructional Design: ADDIE Model",
    "question": "Which of the following represents the 5 sequential phases of the ADDIE Instructional Design Framework?",
    "options": [
      {
        "key": "A",
        "text": "Analysis -> Design -> Development -> Implementation -> Evaluation"
      },
      {
        "key": "B",
        "text": "Assessment -> Delivery -> Direction -> Inspection -> Execution"
      },
      {
        "key": "C",
        "text": "Activation -> Definition -> Drill -> Instruction -> Exam"
      },
      {
        "key": "D",
        "text": "Audio -> Digital -> Devices -> Internet -> Education"
      }
    ],
    "correctAnswer": "A",
    "explanation": "ADDIE is the foundational instructional design framework comprising: 1. Analysis, 2. Design, 3. Development, 4. Implementation, and 5. Evaluation."
  },
  {
    "id": 42,
    "topicRef": "Flipped Learning Pillars (FLIP)",
    "question": "What are the four pillars of Flipped Learning (FLIP)?",
    "options": [
      {
        "key": "A",
        "text": "Flexible environment, Learning culture, Intentional content, Professional educator"
      },
      {
        "key": "B",
        "text": "Fast laptops, Internet access, Projectors, Paperless"
      },
      {
        "key": "C",
        "text": "Fun, Lectures, Interactive, Performance"
      },
      {
        "key": "D",
        "text": "Formative, Linear, Integrated, Programmed"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The F-L-I-P pillars are: Flexible Environment, Learning Culture (student-centered), Intentional Content (prioritizing active learning), and Professional Educator (active observer/feedback provider)."
  },
  {
    "id": 43,
    "topicRef": "Microlearning Design",
    "question": "Which characteristic defines 'Microlearning' in modern digital education?",
    "options": [
      {
        "key": "A",
        "text": "Bite-sized, highly focused learning units (typically 2-5 minutes) designed for quick consumption and immediate application."
      },
      {
        "key": "B",
        "text": "A 4-hour uninterrupted recorded lecture."
      },
      {
        "key": "C",
        "text": "Using microscopic lenses in biology."
      },
      {
        "key": "D",
        "text": "Instructional programs designed only for preschool infants."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Microlearning delivers short, highly targeted nuggets of content addressing a single learning objective, maximizing retention and preventing cognitive overload."
  },
  {
    "id": 44,
    "topicRef": "Cognitive Load Theory in Multimedia (John Sweller)",
    "question": "According to John Sweller's Cognitive Load Theory, which type of cognitive load should teachers minimize through clean visual presentation and removing extraneous background noise?",
    "options": [
      {
        "key": "A",
        "text": "Extraneous Cognitive Load"
      },
      {
        "key": "B",
        "text": "Intrinsic Cognitive Load"
      },
      {
        "key": "C",
        "text": "Germane Cognitive Load"
      },
      {
        "key": "D",
        "text": "Sensory Overload"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Extraneous Cognitive Load is wasted mental effort caused by poor instructional design or distracting clutter. Teachers strive to minimize Extraneous load, manage Intrinsic load, and optimize Germane load."
  },
  {
    "id": 45,
    "topicRef": "Mayer's Principles of Multimedia Learning",
    "question": "Richard Mayer's 'Coherence Principle' states that people learn better when:",
    "options": [
      {
        "key": "A",
        "text": "Extraneous words, pictures, background music, and sounds are excluded rather than included."
      },
      {
        "key": "B",
        "text": "As many animations and sound effects as possible are crammed onto every slide."
      },
      {
        "key": "C",
        "text": "The entire textbook text is read aloud verbatim off the screen."
      },
      {
        "key": "D",
        "text": "The screen is left completely blank."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Mayer's Coherence Principle proves that adding seductive, irrelevant details (fancy background music, unrelated decorative clipart) hurts learning by overloading working memory."
  },
  {
    "id": 46,
    "topicRef": "Mayer's Modality Principle",
    "question": "According to Mayer's 'Modality Principle', learners retain more when graphics are explained by:",
    "options": [
      {
        "key": "A",
        "text": "Spoken narration rather than on-screen text."
      },
      {
        "key": "B",
        "text": "Dense paragraphs of tiny printed text."
      },
      {
        "key": "C",
        "text": "Subtitles in three different languages simultaneously."
      },
      {
        "key": "D",
        "text": "No narration and no text."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Modality Principle states that presenting words as spoken audio rather than on-screen visual text frees up the visual channel in working memory (dual-coding theory)."
  },
  {
    "id": 47,
    "topicRef": "Mayer's Spatial Contiguity Principle",
    "question": "Mayer's 'Spatial Contiguity Principle' recommends that text labels should be placed:",
    "options": [
      {
        "key": "A",
        "text": "Near the corresponding parts of the graphic rather than far from each other."
      },
      {
        "key": "B",
        "text": "On a completely separate page at the back of the book."
      },
      {
        "key": "C",
        "text": "In microscopic font at the bottom footer."
      },
      {
        "key": "D",
        "text": "Randomly across the margins."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Spatial Contiguity states that learning is improved when corresponding text and pictures are presented close to each other on the screen rather than separated."
  },
  {
    "id": 48,
    "topicRef": "Copyright Fair Use in Teaching (IP Code RA 8293)",
    "question": "Under the Philippine Intellectual Property Code (RA 8293), which condition falls under 'Fair Use' for educational purposes?",
    "options": [
      {
        "key": "A",
        "text": "Photocopying an entire textbook, binding it, and selling it for profit to students."
      },
      {
        "key": "B",
        "text": "Reproduction of brief excerpts, quotations, and diagrams for classroom teaching, commentary, or criticism without commercial gain."
      },
      {
        "key": "C",
        "text": "Claiming an online author's original research paper as the teacher's own master's thesis."
      },
      {
        "key": "D",
        "text": "Distributing cracked proprietary software serial keys in class."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fair use allows limited reproduction of copyrighted works for non-profit educational purposes, scholarship, research, commentary, or news reporting without copyright infringement."
  },
  {
    "id": 49,
    "topicRef": "Creative Commons: Public Domain (CC0)",
    "question": "When an educational resource is marked as 'Public Domain' or 'CC0', it means:",
    "options": [
      {
        "key": "A",
        "text": "The copyright has expired or been explicitly waived, allowing anyone to freely use, modify, and distribute it without restrictions."
      },
      {
        "key": "B",
        "text": "It is owned exclusively by the national government and cannot be viewed."
      },
      {
        "key": "C",
        "text": "It requires paying a monthly royalty fee."
      },
      {
        "key": "D",
        "text": "It can only be accessed in public libraries."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Public Domain / CC0 works have no copyright restrictions; anyone can copy, modify, distribute, and perform the work, even commercially, without asking permission."
  },
  {
    "id": 50,
    "topicRef": "Digital Portfolios (e-Portfolios)",
    "question": "What is the primary pedagogical value of an e-Portfolio (electronic portfolio) over traditional paper tests?",
    "options": [
      {
        "key": "A",
        "text": "It documents holistic student growth, reflections, and multifaceted artifacts over time in an authentic multimedia format."
      },
      {
        "key": "B",
        "text": "It can be graded in less than one second by a computer."
      },
      {
        "key": "C",
        "text": "It eliminates student effort."
      },
      {
        "key": "D",
        "text": "It prevents students from thinking critically."
      }
    ],
    "correctAnswer": "A",
    "explanation": "An e-Portfolio showcases authentic student learning progression, self-reflections, audio-visual products, and growth over time, facilitating authentic assessment."
  },
  {
    "id": 51,
    "topicRef": "Web 1.0 vs Web 2.0 vs Web 3.0",
    "question": "How is Web 2.0 functionally distinguished from Web 1.0?",
    "options": [
      {
        "key": "A",
        "text": "Web 1.0 was read-only and static; Web 2.0 is read-write, highly collaborative, user-generated, and socially interactive."
      },
      {
        "key": "B",
        "text": "Web 1.0 required electricity while Web 2.0 operates without power."
      },
      {
        "key": "C",
        "text": "Web 1.0 was for mobile phones only."
      },
      {
        "key": "D",
        "text": "Web 2.0 does not allow video streaming."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Web 1.0 was static and informational (read-only), while Web 2.0 enabled user participation, social networking, wikis, blogging, and collaborative authoring (read-write)."
  },
  {
    "id": 52,
    "topicRef": "Cloud Computing in Education",
    "question": "Which of the following is an example of Cloud-based collaborative software used in schools?",
    "options": [
      {
        "key": "A",
        "text": "Google Docs / Microsoft 365"
      },
      {
        "key": "B",
        "text": "A 3.5-inch floppy disk"
      },
      {
        "key": "C",
        "text": "An offline printed encyclopedia"
      },
      {
        "key": "D",
        "text": "A chalkboard eraser"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Google Workspace (Docs, Sheets, Slides) and Microsoft 365 operate on cloud servers, enabling simultaneous real-time multi-user editing and automatic remote saving."
  },
  {
    "id": 53,
    "topicRef": "Digital Rubrics",
    "question": "Why should teachers share digital scoring rubrics with learners before they start a multimedia project?",
    "options": [
      {
        "key": "A",
        "text": "To clarify exact performance criteria, foster self-assessment, and eliminate ambiguity regarding grading expectations."
      },
      {
        "key": "B",
        "text": "To prevent students from doing high-quality work."
      },
      {
        "key": "C",
        "text": "To ensure all students copy each other's ideas."
      },
      {
        "key": "D",
        "text": "Because the principal requires paperwork."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sharing rubrics beforehand empowers students to monitor and self-evaluate their own work against transparent quality standards."
  },
  {
    "id": 54,
    "topicRef": "Podcasting in Education",
    "question": "Assigning students to script, record, and edit a podcast episode on historical events primarily promotes which 21st-century competencies?",
    "options": [
      {
        "key": "A",
        "text": "Oral communication, scriptwriting, audio literacy, research synthesis, and collaborative technical skills."
      },
      {
        "key": "B",
        "text": "Rote memorization and multiple-choice guessing."
      },
      {
        "key": "C",
        "text": "Physical gymnastics and sports endurance."
      },
      {
        "key": "D",
        "text": "Silent calligraphy penmanship."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Podcasting exercises research synthesis, oral fluency, storytelling, digital audio editing, and collaborative teamwork."
  },
  {
    "id": 55,
    "topicRef": "Screen Time & Ergonomics",
    "question": "When designing digital learning activities, the 20-20-20 rule for eye ergonomics recommends that every 20 minutes:",
    "options": [
      {
        "key": "A",
        "text": "Look at something at least 20 feet away for at least 20 seconds."
      },
      {
        "key": "B",
        "text": "Blink 20 times per millisecond."
      },
      {
        "key": "C",
        "text": "Drink 20 liters of water."
      },
      {
        "key": "D",
        "text": "Turn off all lights in the classroom for 20 minutes."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The 20-20-20 rule prevents digital eye strain: every 20 minutes of screen time, look at an object 20 feet away for at least 20 seconds to relax eye focusing muscles."
  },
  {
    "id": 56,
    "topicRef": "Computer-Adaptive Testing (CAT)",
    "question": "In Computer-Adaptive Testing (CAT), what occurs when a student answers a question correctly?",
    "options": [
      {
        "key": "A",
        "text": "The algorithm selects a slightly more challenging next question to precisely locate the student's true ability level."
      },
      {
        "key": "B",
        "text": "The test ends immediately with a 100% score."
      },
      {
        "key": "C",
        "text": "The computer repeats the exact same question."
      },
      {
        "key": "D",
        "text": "The computer shuts down to save memory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "CAT algorithms dynamically calibrate question difficulty based on prior answers, giving harder items after correct answers and easier items after incorrect answers."
  },
  {
    "id": 57,
    "topicRef": "Augmented Communication: AAC Devices",
    "question": "Augmentative and Alternative Communication (AAC) apps (such as speech-generating apps with picture symbols) are specifically designed to assist learners who:",
    "options": [
      {
        "key": "A",
        "text": "Have severe speech and verbal language impairments."
      },
      {
        "key": "B",
        "text": "Already speak five foreign languages fluently."
      },
      {
        "key": "C",
        "text": "Have perfect vision and normal hearing."
      },
      {
        "key": "D",
        "text": "Dislike writing homework."
      }
    ],
    "correctAnswer": "A",
    "explanation": "AAC systems and speech-generating devices enable non-verbal learners or those with severe expressive language difficulties to communicate using symbols, text-to-speech, and visual boards."
  },
  {
    "id": 58,
    "topicRef": "Digital Storytelling",
    "question": "Digital Storytelling combines which elements to convey a powerful educational message?",
    "options": [
      {
        "key": "A",
        "text": "Narrative script, still images, video clips, background audio, and personal voiceover narration."
      },
      {
        "key": "B",
        "text": "Printed photocopies only."
      },
      {
        "key": "C",
        "text": "Silent algebra equations."
      },
      {
        "key": "D",
        "text": "Unlabeled pie charts."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Digital Storytelling weaves personal narrative with rich digital multimedia (images, audio soundtrack, voiceover, video clips) to communicate deep thematic concepts."
  },
  {
    "id": 59,
    "topicRef": "Information Security: Two-Factor Authentication (2FA)",
    "question": "Why is Two-Factor Authentication (2FA) essential for teachers managing school grading portals?",
    "options": [
      {
        "key": "A",
        "text": "It adds an extra verification layer (e.g. mobile OTP code) ensuring that a stolen password alone cannot compromise student grade records."
      },
      {
        "key": "B",
        "text": "It allows two teachers to log in at the same second."
      },
      {
        "key": "C",
        "text": "It doubles the computer's CPU processing speed."
      },
      {
        "key": "D",
        "text": "It automatically calculates quarterly grade averages."
      }
    ],
    "correctAnswer": "A",
    "explanation": "2FA combines something you know (password) with something you have (OTP on phone/security key), safeguarding student confidential records from unauthorized breaches."
  },
  {
    "id": 60,
    "topicRef": "Digital Citizenship: Digital Law",
    "question": "Downloading and redistributing commercial software, copyrighted films, and paid test banks without license permissions violates which theme of Digital Citizenship?",
    "options": [
      {
        "key": "A",
        "text": "Digital Law"
      },
      {
        "key": "B",
        "text": "Digital Health"
      },
      {
        "key": "C",
        "text": "Digital Access"
      },
      {
        "key": "D",
        "text": "Digital Literacy"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Digital Law deals with legal rights, copyright, software piracy, identity theft, and adherence to cyber legislation."
  },
  {
    "id": 61,
    "topicRef": "Educational ICT Tools: Padlet / Jamboard",
    "question": "Digital sticky-note boards (e.g., Padlet, Miro) are most effectively utilized in the classroom for:",
    "options": [
      {
        "key": "A",
        "text": "Collaborative brainstorming, idea clustering, and real-time student reflection boards."
      },
      {
        "key": "B",
        "text": "Running heavy 3D rendering video games."
      },
      {
        "key": "C",
        "text": "Encrypting school financial audits."
      },
      {
        "key": "D",
        "text": "Printing physical diplomas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Interactive digital wall boards enable collaborative brainstorming, collecting student feedback, visual curation, and collective reflection."
  },
  {
    "id": 62,
    "topicRef": "Instructional Design: Backward Design (UbD)",
    "question": "In Grant Wiggins and Jay McTighe's Understanding by Design (UbD) / Backward Design framework, what is Stage 1?",
    "options": [
      {
        "key": "A",
        "text": "Identify Desired Results (Big Ideas & Essential Questions)"
      },
      {
        "key": "B",
        "text": "Plan Learning Experiences and Instruction"
      },
      {
        "key": "C",
        "text": "Determine Acceptable Evidence (Assessment)"
      },
      {
        "key": "D",
        "text": "Select textbook chapter"
      }
    ],
    "correctAnswer": "A",
    "explanation": "UbD follows 3 stages in reverse order: Stage 1 = Identify Desired Results -> Stage 2 = Determine Assessment Evidence -> Stage 3 = Plan Learning Experiences."
  },
  {
    "id": 63,
    "topicRef": "UbD: Essential Questions",
    "question": "Which of the following is the best example of an 'Essential Question' in Backward Design?",
    "options": [
      {
        "key": "A",
        "text": "'What is the formula for calculating velocity?'"
      },
      {
        "key": "B",
        "text": "'To what extent does technological innovation reshape human culture and ethics?'"
      },
      {
        "key": "C",
        "text": "'Name the eight planets of the solar system.'"
      },
      {
        "key": "D",
        "text": "'How many syllables are in a haiku?'"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Essential Questions in UbD are open-ended, thought-provoking, recur throughout life, and spark inquiry into enduring understandings."
  },
  {
    "id": 64,
    "topicRef": "Online Safety: Cyberstalking & Harassment",
    "question": "A student receives repeated, unwanted threatening messages and unauthorized photos sent across social media apps. What is the immediate correct procedure for the teacher?",
    "options": [
      {
        "key": "A",
        "text": "Document and preserve the digital evidence (screenshots), report to school guidance/child protection committee, and notify parents immediately."
      },
      {
        "key": "B",
        "text": "Tell the student to delete the app and ignore all threats."
      },
      {
        "key": "C",
        "text": "Post public insults back at the suspected perpetrator."
      },
      {
        "key": "D",
        "text": "Lower the student's conduct grade."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Preserving digital evidence (screenshots, timestamps) and activating school Child Protection / Anti-Bullying protocols is the legally mandated procedure under DepEd Child Protection Policy (DO 40, s. 2012)."
  },
  {
    "id": 65,
    "topicRef": "Simulation Software in Science",
    "question": "Why are interactive virtual science labs (e.g. PhET Interactive Simulations) highly recommended in resource-constrained Philippine schools?",
    "options": [
      {
        "key": "A",
        "text": "They allow learners to conduct safe, repeatable, zero-cost virtual laboratory experiments without purchasing hazardous chemical consumables."
      },
      {
        "key": "B",
        "text": "They replace the necessity of having certified science teachers."
      },
      {
        "key": "C",
        "text": "They eliminate the scientific method."
      },
      {
        "key": "D",
        "text": "They guarantee 100% test scores on national exams."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Interactive simulation platforms provide safe, risk-free, highly interactive inquiry experiments where students can manipulate variables without expensive laboratory equipment."
  },
  {
    "id": 66,
    "topicRef": "Interactive Whiteboards (IWB)",
    "question": "What is the primary instructional advantage of an Interactive Whiteboard (IWB) over a traditional chalkboard?",
    "options": [
      {
        "key": "A",
        "text": "It allows dynamic interaction with digital media, direct annotation over web simulations, and instant saving/sharing of board work."
      },
      {
        "key": "B",
        "text": "It consumes zero electrical power."
      },
      {
        "key": "C",
        "text": "It requires no teacher preparation."
      },
      {
        "key": "D",
        "text": "It cannot display videos."
      }
    ],
    "correctAnswer": "A",
    "explanation": "IWBs combine digital projection with touch interactivity, allowing teachers and students to manipulate digital objects, run interactive exercises, and export annotated notes."
  },
  {
    "id": 67,
    "topicRef": "Educational Podcasting & Audio Literacy",
    "question": "In Edgar Dale's Cone of Experience, listening to educational audio recordings belongs to which band?",
    "options": [
      {
        "key": "A",
        "text": "Hearing (Recordings / Radio / Audio Media)"
      },
      {
        "key": "B",
        "text": "Direct Purposeful Experiences"
      },
      {
        "key": "C",
        "text": "Dramatized Experiences"
      },
      {
        "key": "D",
        "text": "Demonstrations"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Audio recordings, radio broadcasts, and still photos sit near the upper-middle abstract zone of Dale's Cone, relying purely on auditory sensory input."
  },
  {
    "id": 68,
    "topicRef": "Digital Literacy Standards: ISTE Standards for Educators",
    "question": "According to the ISTE (International Society for Technology in Education) Standards for Educators, what does the role of 'Citizen' entail?",
    "options": [
      {
        "key": "A",
        "text": "Inspiring students to positively contribute to and responsibly participate in the digital world."
      },
      {
        "key": "B",
        "text": "Buying computers for local political campaigns."
      },
      {
        "key": "C",
        "text": "Filing income taxes online."
      },
      {
        "key": "D",
        "text": "Repairing school router hardware."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The ISTE 'Citizen' standard requires educators to model and promote digital citizenship, online safety, respectful communication, and ethical management of personal data."
  },
  {
    "id": 69,
    "topicRef": "ISTE Standards: Facilitator",
    "question": "An educator who uses technology to support learner-centered innovation, project-based design, and student-driven learning aligns with which ISTE role?",
    "options": [
      {
        "key": "A",
        "text": "Facilitator"
      },
      {
        "key": "B",
        "text": "Analyst"
      },
      {
        "key": "C",
        "text": "Leader"
      },
      {
        "key": "D",
        "text": "Learner"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The ISTE 'Facilitator' role centers on fostering student-driven learning and creative problem-solving through effective technology integration."
  },
  {
    "id": 70,
    "topicRef": "Digital Rubrics & Peer Evaluation",
    "question": "What is a key benefit of using Google Forms or digital rubric scoring for peer evaluation in cooperative group work?",
    "options": [
      {
        "key": "A",
        "text": "Anonymous, honest formative peer ratings can be aggregated instantly into summary data spreadsheets for teacher analysis."
      },
      {
        "key": "B",
        "text": "It prevents students from seeing any scores."
      },
      {
        "key": "C",
        "text": "It replaces teacher judgment completely."
      },
      {
        "key": "D",
        "text": "It allows students to fail each other out of personal grudges without teacher oversight."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Digital forms streamline peer feedback collection, aggregate scores automatically, and provide data insights while maintaining fair, structured evaluation criteria."
  },
  {
    "id": 71,
    "topicRef": "Flipped Mastery Model",
    "question": "How does the 'Flipped Mastery' model differ from a standard flipped classroom?",
    "options": [
      {
        "key": "A",
        "text": "Students progress through curriculum modules at their own pace, advancing to the next unit only after demonstrating 80%+ mastery on unit assessments."
      },
      {
        "key": "B",
        "text": "All students must advance on the exact same calendar date regardless of understanding."
      },
      {
        "key": "C",
        "text": "There are no homework assignments and no tests."
      },
      {
        "key": "D",
        "text": "Instruction is conducted purely through radio broadcasts."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Flipped Mastery (Bergmann & Sams) combines asynchronous video delivery with mastery learning: students advance individually only when they achieve demonstrated mastery of prerequisite objectives."
  },
  {
    "id": 72,
    "topicRef": "Universal Access & Section 508 / Web Accessibility (WCAG)",
    "question": "Under Web Content Accessibility Guidelines (WCAG), why must instructional videos include accurate closed captions (subtitles)?",
    "options": [
      {
        "key": "A",
        "text": "To provide full accessibility for deaf or hard-of-hearing learners and support comprehension for diverse language backgrounds."
      },
      {
        "key": "B",
        "text": "To make the video file size as large as possible."
      },
      {
        "key": "C",
        "text": "To hide spelling errors in the audio."
      },
      {
        "key": "D",
        "text": "Because YouTube forbids audio-only speech."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Closed captions ensure digital equity and compliance with accessibility standards (WCAG/UDL) for students with hearing impairments and second-language learners."
  },
  {
    "id": 73,
    "topicRef": "Blended Learning: Flipped vs Traditional Lecture",
    "question": "Which of the following is the most significant educational benefit of the Flipped Classroom model?",
    "options": [
      {
        "key": "A",
        "text": "Classroom contact hours are converted from passive listening into active, collaborative problem-solving and teacher-guided scaffolding."
      },
      {
        "key": "B",
        "text": "Teachers no longer need to prepare lesson plans."
      },
      {
        "key": "C",
        "text": "Students never have to study outside school hours."
      },
      {
        "key": "D",
        "text": "It guarantees that no student ever fails."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Flipping moves passive lower-order lecture consumption outside class, maximizing classroom contact time for active, higher-order collaborative learning and individualized scaffolding."
  },
  {
    "id": 74,
    "topicRef": "AI Ethics: Hallucinations & Fact-Checking",
    "question": "When using AI chatbots for academic research, students must be trained to verify facts because Large Language Models (LLMs):",
    "options": [
      {
        "key": "A",
        "text": "Can generate plausible-sounding but factually false information, fictitious citations, and hallucinations."
      },
      {
        "key": "B",
        "text": "Are infallible and contain no errors."
      },
      {
        "key": "C",
        "text": "Do not have access to any vocabulary words."
      },
      {
        "key": "D",
        "text": "Only speak in binary code."
      }
    ],
    "correctAnswer": "A",
    "explanation": "LLMs predict text statistically and are prone to 'hallucinations' (generating confident but completely fabricated citations, facts, and quotes), making critical source verification essential."
  },
  {
    "id": 75,
    "topicRef": "Holistic Technology Integration",
    "question": "Which of the following scenarios demonstrates the highest standard of technology-enhanced, learner-centered pedagogy in a Philippine classroom?",
    "options": [
      {
        "key": "A",
        "text": "Students use mobile sensors and GIS mapping apps to collect local water quality data, analyze environmental trends in spreadsheets, and present policy recommendations to the Barangay council."
      },
      {
        "key": "B",
        "text": "The teacher reads from a PDF projected on a screen for 60 minutes while students copy the text into notebooks."
      },
      {
        "key": "C",
        "text": "Students play an unrelated shooting video game after finishing a math test early."
      },
      {
        "key": "D",
        "text": "The school locks all computers in an air-conditioned room that students are never allowed to enter."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Using mobile scientific sensors, data analysis software, and civic communication tools to solve real-world community issues embodies authentic TPACK and SAMR Redefinition."
  }
];
