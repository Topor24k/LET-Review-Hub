import { ExamQuestion } from '../../types';

export const TECH_TEACHING_LEARNING_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "In the TPACK framework (Mishra & Koehler), what represents the intersection where a teacher knows how to effectively teach specific subject-matter concepts using appropriate educational technologies?",
    options: [
      { key: 'A', text: 'TPACK (Technological Pedagogical Content Knowledge)' },
      { key: 'B', text: 'PCK (Pedagogical Content Knowledge)' },
      { key: 'C', text: 'TCK (Technological Content Knowledge)' },
      { key: 'D', text: 'TPK (Technological Pedagogical Knowledge)' }
    ],
    correctAnswer: 'A',
    explanation: 'TPACK is the overarching sweet spot integrating technological, pedagogical, and content expertise to design meaningful, tech-enhanced learning experiences.',
    topicRef: '1.0 TPACK Framework'
  },
  {
    id: 2,
    question: "In the SAMR Model (Ruben Puentedura), what level is reached when technology allows for the creation of new tasks that were previously inconceivable without tech (e.g., collaborative international virtual reality field trip)?",
    options: [
      { key: 'A', text: 'Substitution' },
      { key: 'B', text: 'Augmentation' },
      { key: 'C', text: 'Modification' },
      { key: 'D', text: 'Redefinition' }
    ],
    correctAnswer: 'D',
    explanation: 'Redefinition is the highest transformation level of the SAMR model, where technology creates novel, previously unimaginable learning tasks and authentic collaborations.',
    topicRef: '2.0 SAMR Model'
  },
  {
    id: 3,
    question: "A teacher uses Google Docs merely as a digital typewriter for students to type essays instead of writing on paper, without using any hyperlinks, comments, or collaborative features. Which SAMR level is this?",
    options: [
      { key: 'A', text: 'Substitution' },
      { key: 'B', text: 'Augmentation' },
      { key: 'C', text: 'Modification' },
      { key: 'D', text: 'Redefinition' }
    ],
    correctAnswer: 'A',
    explanation: 'Substitution acts as a direct tool substitute with no functional change or enhancement in the learning task.',
    topicRef: '2.0 SAMR Model'
  },
  {
    id: 4,
    question: "In the ASSURE Instructional Design Model (Heinich, Molenda, Russell, Smaldino), what does the first 'A' stand for?",
    options: [
      { key: 'A', text: 'Analyze Learners' },
      { key: 'B', text: 'Assess Needs' },
      { key: 'C', text: 'Apply Strategies' },
      { key: 'D', text: 'Assign Tasks' }
    ],
    correctAnswer: 'A',
    explanation: 'The ASSURE model steps are: Analyze learners, State standards & objectives, Select strategies/technology/media, Utilize technology/media, Require learner participation, Evaluate & revise.',
    topicRef: '3.0 ASSURE Model'
  },
  {
    id: 5,
    question: "Which phase of the ASSURE model focuses on providing opportunities for students to actively practice, create, or interact with the media rather than passively watching?",
    options: [
      { key: 'A', text: 'S - State Standards' },
      { key: 'B', text: 'R - Require Learner Participation' },
      { key: 'C', text: 'U - Utilize Media' },
      { key: 'D', text: 'E - Evaluate and Revise' }
    ],
    correctAnswer: 'B',
    explanation: 'Require Learner Participation (R) mandates that students actively engage with the content and media through practice, feedback, and interactive tasks.',
    topicRef: '3.0 ASSURE Model'
  },
  {
    id: 6,
    question: "According to the Philippine Cybercrime Prevention Act (R.A. 10175) and Data Privacy Act (R.A. 10173), what must teachers obtain before sharing photos or sensitive personal information of minors online?",
    options: [
      { key: 'A', text: 'Informed written consent from parents or legal guardians' },
      { key: 'B', text: 'A court subpoena' },
      { key: 'C', text: 'An endorsement from the barangay captain' },
      { key: 'D', text: 'A verbal agreement from the school security guard' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 10173 strictly protects data privacy and mandates prior, informed, and explicit consent from parents/guardians before collecting or publishing minor students\' personal data/photos.',
    topicRef: '5.0 Digital Citizenship & Legal Frameworks'
  },
  {
    id: 7,
    question: "Under the Intellectual Property Code of the Philippines (R.A. 8293), what legal doctrine allows teachers to use copyrighted excerpts for non-profit educational and critical purposes without infringing copyright?",
    options: [
      { key: 'A', text: 'Eminent Domain' },
      { key: 'B', text: 'Fair Use Doctrine' },
      { key: 'C', text: 'Public Domain Exclusivity' },
      { key: 'D', text: 'Patent Pendency' }
    ],
    correctAnswer: 'B',
    explanation: 'The Fair Use doctrine allows limited educational, non-commercial use of copyrighted materials for criticism, comment, news reporting, teaching, and scholarship with proper citation.',
    topicRef: '5.0 Copyright & Fair Use'
  },
  {
    id: 8,
    question: "Which Creative Commons license allows others to distribute, remix, adapt, and build upon your work even commercially, as long as they credit you for the original creation?",
    options: [
      { key: 'A', text: 'CC BY (Attribution)' },
      { key: 'B', text: 'CC BY-NC-ND' },
      { key: 'C', text: 'CC BY-NC' },
      { key: 'D', text: 'CC0 (Public Domain Dedication)' }
    ],
    correctAnswer: 'A',
    explanation: 'CC BY (Attribution) is the most accommodating Creative Commons license, requiring only that the original author be credited.',
    topicRef: '5.0 Open Educational Resources & Licenses'
  },
  {
    id: 9,
    question: "What is an LMS (Learning Management System)?",
    options: [
      { key: 'A', text: 'A hardware device that replaces the computer projector' },
      { key: 'B', text: 'A software platform that manages, delivers, and tracks educational courses, assessments, and learning analytics' },
      { key: 'C', text: 'A social networking site designed purely for entertainment' },
      { key: 'D', text: 'A virus scanning program' }
    ],
    correctAnswer: 'B',
    explanation: 'An LMS (such as Canvas, Moodle, Google Classroom) is a comprehensive web platform for course management, content distribution, communication, and learning tracking.',
    topicRef: '4.0 Learning Platforms & Tools'
  },
  {
    id: 10,
    question: "In asynchronous online learning, what is a defining characteristic of instructional communication?",
    options: [
      { key: 'A', text: 'Teacher and students meet simultaneously in real time via live video' },
      { key: 'B', text: 'Interaction and coursework occur independently of real-time scheduling, allowing learners to participate at their own pace and time' },
      { key: 'C', text: 'Instant telephone calls are mandatory every 30 minutes' },
      { key: 'D', text: 'Students must physically report to the computer laboratory together' }
    ],
    correctAnswer: 'B',
    explanation: 'Asynchronous learning is time-independent; learning materials and discussion boards can be accessed by learners according to their own schedule within set deadlines.',
    topicRef: '4.0 Synchronous vs. Asynchronous Modalities'
  },
  {
    id: 11,
    question: "Which of the following is a core rule of online Netiquette for teachers and students?",
    options: [
      { key: 'A', text: 'TYPING IN ALL CAPS TO SHOW ENTHUSIASM' },
      { key: 'B', text: 'Remembering the human, respecting others\' privacy, and communicating courteously' },
      { key: 'C', text: 'Forwarding spam chain messages to the whole class directory' },
      { key: 'D', text: 'Posting private chat screenshots publicly without permission' }
    ],
    correctAnswer: 'B',
    explanation: 'Netiquette rules (Virginia Shea) emphasize remembering that a real person is behind the screen, adhering to real-world ethics, and avoiding aggressive behavior like flame wars and all-caps shouting.',
    topicRef: '5.0 Digital Citizenship & Netiquette'
  },
  {
    id: 12,
    question: "Which Web 2.0 tool category is best represented by platforms like Padlet, Jamboard, and Miro?",
    options: [
      { key: 'A', text: 'Interactive Digital Whiteboards and Collaborative Wall Curators' },
      { key: 'B', text: 'Hardware sound synthesizers' },
      { key: 'C', text: 'Database query languages' },
      { key: 'D', text: 'Closed operating systems' }
    ],
    correctAnswer: 'A',
    explanation: 'Padlet and digital whiteboards allow real-time collaborative brainstorming, sticky-note posting, media sharing, and concept mapping.',
    topicRef: '4.0 Web 2.0 Instructional Tools'
  },
  {
    id: 13,
    question: "In the 5-step ADDIE instructional design framework, what does the second 'D' stand for?",
    options: [
      { key: 'A', text: 'Design' },
      { key: 'B', text: 'Development' },
      { key: 'C', text: 'Delivery' },
      { key: 'D', text: 'Diagnosis' }
    ],
    correctAnswer: 'B',
    explanation: 'ADDIE stands for Analysis, Design, Development, Implementation, and Evaluation. The second D is Development (creating the actual course assets).',
    topicRef: '3.0 Instructional Design Models'
  },
  {
    id: 14,
    question: "What term describes the fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in an electronic communication?",
    options: [
      { key: 'A', text: 'Phishing' },
      { key: 'B', text: 'Scaffolding' },
      { key: 'C', text: 'Flipped Learning' },
      { key: 'D', text: 'Augmented Reality' }
    ],
    correctAnswer: 'A',
    explanation: 'Phishing is a social engineering cyberattack where deceptive emails/messages bait victims into revealing credentials or confidential information.',
    topicRef: '5.0 Cybersecurity in Education'
  },
  {
    id: 15,
    question: "What is a 'Flipped Classroom' model?",
    options: [
      { key: 'A', text: 'A classroom where desks are turned upside down for earthquake drills' },
      { key: 'B', text: 'A blended pedagogical model where direct instruction/lectures are accessed at home via video/text, and classroom time is dedicated to interactive activities and problem solving' },
      { key: 'C', text: 'A classroom managed solely by student assistants' },
      { key: 'D', text: 'A class where grades are inverted from highest to lowest' }
    ],
    correctAnswer: 'B',
    explanation: 'In a flipped classroom (Bergmann & Sams), conventional lecture homework is flipped: students absorb content before class, freeing face-to-face time for higher-order collaborative applications.',
    topicRef: '4.0 Blended & Flipped Learning'
  },
  {
    id: 16,
    question: "Which of the following is considered an Assistive Technology for visually impaired learners in digital learning environments?",
    options: [
      { key: 'A', text: 'Screen Readers (e.g., NVDA, JAWS) with Text-to-Speech' },
      { key: 'B', text: 'High-speed internet router' },
      { key: 'C', text: 'Standard laser printer' },
      { key: 'D', text: 'Video compression software' }
    ],
    correctAnswer: 'A',
    explanation: 'Screen readers convert on-screen text into synthesized speech or refreshable braille displays, enabling visually impaired users to navigate and interact with software.',
    topicRef: '4.0 Assistive & Inclusive Educational Technology'
  },
  {
    id: 17,
    question: "What is the 'Digital Divide'?",
    options: [
      { key: 'A', text: 'The boundary between software code and hardware circuits' },
      { key: 'B', text: 'The socioeconomic and geographic disparity in access to modern information and communication technologies (ICT) and the internet' },
      { key: 'C', text: 'The difference between Apple and Windows operating systems' },
      { key: 'D', text: 'The math division performed on a calculator' }
    ],
    correctAnswer: 'B',
    explanation: 'The digital divide refers to inequality in physical access to ICT devices, high-speed connectivity, and the digital literacy needed to leverage technology effectively.',
    topicRef: '5.0 Digital Equity & The Digital Divide'
  },
  {
    id: 18,
    question: "In instructional media design, what does the 'Contiguity Principle' (Richard Mayer's Multimedia Learning Principles) state?",
    options: [
      { key: 'A', text: 'People learn better when corresponding words and pictures are placed near rather than far from each other on the screen or page' },
      { key: 'B', text: 'People learn better from words alone than from words and pictures' },
      { key: 'C', text: 'Background music must always play at high volume' },
      { key: 'D', text: 'All text must be written in bold red font' }
    ],
    correctAnswer: 'A',
    explanation: 'Mayer\'s Spatial Contiguity Principle states that integrating text close to the related graphic prevents cognitive split-attention effect and enhances learning.',
    topicRef: '3.0 Mayer Multimedia Learning Principles'
  },
  {
    id: 19,
    question: "According to Mayer's 'Coherence Principle', how should teachers design slide presentations?",
    options: [
      { key: 'A', text: 'Add extraneous interesting stories, gifs, and background music to keep students entertained' },
      { key: 'B', text: 'Exclude extraneous words, pictures, sounds, and distracting background decorations that do not support the core instructional goal' },
      { key: 'C', text: 'Pack as many paragraphs into each slide as possible' },
      { key: 'D', text: 'Use 10 different flashing fonts per slide' }
    ],
    correctAnswer: 'B',
    explanation: 'The Coherence Principle states that learning is improved when interesting but irrelevant (seductive) details, images, and sounds are weeded out.',
    topicRef: '3.0 Mayer Multimedia Learning Principles'
  },
  {
    id: 20,
    question: "Which of the following is an example of an asynchronous formative assessment tool that utilizes gamified interactive quizzes?",
    options: [
      { key: 'A', text: 'Kahoot / Quizizz' },
      { key: 'B', text: 'Microsoft Excel formula bar' },
      { key: 'C', text: 'Adobe Reader toolbar' },
      { key: 'D', text: 'Notepad desktop widget' }
    ],
    correctAnswer: 'A',
    explanation: 'Kahoot, Quizizz, and Quizlet Live provide gamified, real-time and self-paced assessment platforms that increase student engagement and provide immediate analytics.',
    topicRef: '4.0 Digital Assessment Tools'
  },
  {
    id: 21,
    question: "What is 'Augmented Reality' (AR) in education?",
    options: [
      { key: 'A', text: 'Replacing the real world completely with a 3D simulated headset environment' },
      { key: 'B', text: 'Superimposing digital images, 3D models, or information onto the real-world view via a smartphone or tablet camera' },
      { key: 'C', text: 'Printing black-and-white worksheets on recycled paper' },
      { key: 'D', text: 'Sending automated text reminders to parents' }
    ],
    correctAnswer: 'B',
    explanation: 'AR enhances the physical environment by overlaying interactive digital elements, labels, or 3D animations onto live real-world camera feeds (e.g., Google Expeditions AR, anatomy apps).',
    topicRef: '4.0 Emerging Technologies: AR and VR'
  },
  {
    id: 22,
    question: "What is 'Gamification' in instructional design?",
    options: [
      { key: 'A', text: 'Playing video games all day without any educational curriculum' },
      { key: 'B', text: 'The integration of game mechanics (e.g., points, badges, leaderboards, quests) into non-game educational contexts to increase motivation and persistence' },
      { key: 'C', text: 'Buying expensive game consoles for the school' },
      { key: 'D', text: 'Eliminating all forms of academic grading' }
    ],
    correctAnswer: 'B',
    explanation: 'Gamification applies game design elements (progress bars, badges, rewards, challenges) to academic learning experiences to boost engagement and intrinsic drive.',
    topicRef: '4.0 Gamification & Motivation'
  },
  {
    id: 23,
    question: "In Dale's Cone of Experience, what is the key difference between 'Contrived Experiences' and 'Direct Purposeful Experiences'?",
    options: [
      { key: 'A', text: 'Contrived experiences use edited representations, models, mock-ups, or simulations when the real object is too big, dangerous, or inaccessible' },
      { key: 'B', text: 'Direct experiences are purely theoretical with no physical presence' },
      { key: 'C', text: 'Contrived experiences are always digital software' },
      { key: 'D', text: 'There is no difference' }
    ],
    correctAnswer: 'A',
    explanation: 'Contrived experiences substitute realistic models, mock-ups, or cutaways for direct reality to make complex, microscopic, or hazardous phenomena comprehensible and safe.',
    topicRef: '2.0 Dale Cone of Experience'
  },
  {
    id: 24,
    question: "What is 'Plagiarism' in academic and technological contexts?",
    options: [
      { key: 'A', text: 'Creating an original poem from one\'s personal feelings' },
      { key: 'B', text: 'Using another person\'s words, ideas, artwork, or code without proper acknowledgment and presenting them as one\'s own' },
      { key: 'C', text: 'Saving a file on a USB thumb drive' },
      { key: 'D', text: 'Collaborating on a shared group presentation with permission' }
    ],
    correctAnswer: 'B',
    explanation: 'Plagiarism is intellectual dishonesty involving the appropriation and representation of someone else\'s creative or academic work as one\'s own without attribution.',
    topicRef: '5.0 Academic Integrity & Ethics'
  },
  {
    id: 25,
    question: "Which of the following is a reputable tool used by educational institutions to detect potential plagiarism in student written submissions?",
    options: [
      { key: 'A', text: 'Turnitin' },
      { key: 'B', text: 'VLC Media Player' },
      { key: 'C', text: 'WinRAR' },
      { key: 'D', text: 'Command Prompt' }
    ],
    correctAnswer: 'A',
    explanation: 'Turnitin is a widely used academic text-matching service that compares student work against massive databases of journals, websites, and student papers.',
    topicRef: '5.0 Digital Integrity Tools'
  },
  {
    id: 26,
    question: "In online pedagogy, what does 'Synchronous Learning' mean?",
    options: [
      { key: 'A', text: 'Students read books in isolation over summer vacation' },
      { key: 'B', text: 'Learning that occurs in real time with live interaction between instructor and students (e.g., Zoom, Google Meet, MS Teams)' },
      { key: 'C', text: 'Downloading pre-recorded video lectures to watch whenever convenient' },
      { key: 'D', text: 'Emailing homework on Sundays' }
    ],
    correctAnswer: 'B',
    explanation: 'Synchronous learning happens concurrently where participants interact simultaneously in a virtual classroom setting.',
    topicRef: '4.0 Online Learning Modalities'
  },
  {
    id: 27,
    question: "What is the primary function of a 'Rubric' in tech-integrated performance assessments?",
    options: [
      { key: 'A', text: 'To confuse students with legalistic jargon' },
      { key: 'B', text: 'To provide explicit criteria, performance levels, and descriptors for evaluating authentic products objectively and transparently' },
      { key: 'C', text: 'To calculate multiple-choice scantron sheets automatically' },
      { key: 'D', text: 'To restrict student creativity to a single font' }
    ],
    correctAnswer: 'B',
    explanation: 'A scoring rubric sets clear evaluative criteria, quality graduations, and explicit performance descriptors that guide student learning and ensure reliable teacher grading.',
    topicRef: '3.0 Assessment & Evaluation'
  },
  {
    id: 28,
    question: "In Mayer's Multimedia Principles, what is the 'Modality Principle'?",
    options: [
      { key: 'A', text: 'People learn better from graphics and narration than from graphics and printed on-screen text' },
      { key: 'B', text: 'People learn better when the teacher speaks in monotone' },
      { key: 'C', text: 'Audio should always be muted during lessons' },
      { key: 'D', text: 'Video resolution must always be set to 480p' }
    ],
    correctAnswer: 'A',
    explanation: 'The Modality Principle explains that presenting text as spoken narration rather than on-screen text offloads cognitive load from the visual channel to the auditory channel.',
    topicRef: '3.0 Mayer Multimedia Learning Principles'
  },
  {
    id: 29,
    question: "What does the acronym 'OER' stand for in educational technology?",
    options: [
      { key: 'A', text: 'Online Educational Records' },
      { key: 'B', text: 'Open Educational Resources' },
      { key: 'C', text: 'Official Electronic Registers' },
      { key: 'D', text: 'Optical Emission Radios' }
    ],
    correctAnswer: 'B',
    explanation: 'OER refers to teaching, learning, and research materials in any medium that reside in the public domain or under an open license allowing free access, reuse, and adaptation.',
    topicRef: '5.0 Open Educational Resources'
  },
  {
    id: 30,
    question: "Which of the following is a classic example of a 'Podcast' in educational delivery?",
    options: [
      { key: 'A', text: 'A digital audio recording series accessible for streaming or downloading on demand' },
      { key: 'B', text: 'A printed daily newspaper delivered to school' },
      { key: 'C', text: 'A static blackboard diagram' },
      { key: 'D', text: 'An overhead projector transparency roll' }
    ],
    correctAnswer: 'A',
    explanation: 'Podcasts are episodic digital audio files distributed over the internet for on-demand listening, ideal for auditory learners and language practice.',
    topicRef: '4.0 Web 2.0 Audio Technologies'
  },
  {
    id: 31,
    question: "What is 'Cyberbullying'?",
    options: [
      { key: 'A', text: 'Playing computer chess against an AI robot' },
      { key: 'B', text: 'The use of digital devices and internet platforms to harass, threaten, humiliate, or target another person repeatedly' },
      { key: 'C', text: 'Installing an antivirus program' },
      { key: 'D', text: 'Typing an academic report on a laptop' }
    ],
    correctAnswer: 'B',
    explanation: 'Cyberbullying involves willful and repeated harm inflicted through electronic communication channels, punishable under child protection and cybercrime laws.',
    topicRef: '5.0 Child Protection & Cyberbullying'
  },
  {
    id: 32,
    question: "Which of the following represents 'Augmentation' in the SAMR model?",
    options: [
      { key: 'A', text: 'Technology acts as a direct substitute with functional improvements (e.g., typing an essay with built-in spellcheck, thesaurus, and text-to-speech feedback)' },
      { key: 'B', text: 'Writing an essay with pen on paper' },
      { key: 'C', text: 'Creating an international live documentary broadcast with student partners worldwide' },
      { key: 'D', text: 'Replacing the teacher with a robot' }
    ],
    correctAnswer: 'A',
    explanation: 'Augmentation occurs when tech still substitutes a traditional task but adds functional enhancements (like auto-correct, dictionary lookup, or audio narration) that improve efficacy.',
    topicRef: '2.0 SAMR Model'
  },
  {
    id: 33,
    question: "In instructional design, what is 'Cognitive Load Theory' (John Sweller) primarily concerned with?",
    options: [
      { key: 'A', text: 'The weight of physical textbooks inside a school backpack' },
      { key: 'B', text: 'The limitations of working memory capacity and how instructional presentations should avoid extraneous mental overload' },
      { key: 'C', text: 'The speed of computer RAM processors' },
      { key: 'D', text: 'The number of hours a teacher spends grading papers' }
    ],
    correctAnswer: 'B',
    explanation: 'Cognitive Load Theory emphasizes that human working memory is limited in processing capacity; instructional materials should minimize extraneous load to optimize germane schema construction.',
    topicRef: '3.0 Cognitive Load & Instructional Design'
  },
  {
    id: 34,
    question: "What are the three components of Cognitive Load identified by Sweller?",
    options: [
      { key: 'A', text: 'Intrinsic Load, Extraneous Load, and Germane Load' },
      { key: 'B', text: 'Audio, Visual, and Tactile Load' },
      { key: 'C', text: 'Input, Processing, and Output Load' },
      { key: 'D', text: 'Primary, Secondary, and Tertiary Load' }
    ],
    correctAnswer: 'A',
    explanation: 'Intrinsic load (content difficulty), Extraneous load (poor presentation format), and Germane load (mental effort devoted to schema building) are the three pillars of Sweller\'s theory.',
    topicRef: '3.0 Cognitive Load Theory'
  },
  {
    id: 35,
    question: "Which Web search operator is used to search for an exact phrase verbatim in Google?",
    options: [
      { key: 'A', text: 'Enclosing the search phrase in quotation marks ("...")' },
      { key: 'B', text: 'Adding exclamation marks (!!!)' },
      { key: 'C', text: 'Writing in all uppercase letters' },
      { key: 'D', text: 'Adding asterisks after every word' }
    ],
    correctAnswer: 'A',
    explanation: 'Using quotation marks around search terms forces the search engine to return pages containing that exact word sequence in exact order.',
    topicRef: '5.0 Information Literacy & Search Skills'
  },
  {
    id: 36,
    question: "What is an 'Infographic'?",
    options: [
      { key: 'A', text: 'A visual representation of information, data, or knowledge designed to present complex ideas quickly and clearly' },
      { key: 'B', text: 'An encyclopedia volume bound in leather' },
      { key: 'C', text: 'A computer sound card driver' },
      { key: 'D', text: 'A physical chalk eraser' }
    ],
    correctAnswer: 'A',
    explanation: 'An infographic combines graphics, charts, and concise text to simplify and communicate data and conceptual relationships visually.',
    topicRef: '4.0 Visual Design & Infographics'
  },
  {
    id: 37,
    question: "What does 'MOOC' stand for in distance higher education?",
    options: [
      { key: 'A', text: 'Massive Open Online Course' },
      { key: 'B', text: 'Modular Organization of Online Content' },
      { key: 'C', text: 'Mobile Orientation for Open Classrooms' },
      { key: 'D', text: 'Multiple Objective Online Curriculum' }
    ],
    correctAnswer: 'A',
    explanation: 'MOOC (e.g., Coursera, edX) stands for Massive Open Online Course, offering scalable, open-access web courses to thousands of global participants simultaneously.',
    topicRef: '4.0 Distance Education & MOOCs'
  },
  {
    id: 38,
    question: "Which of the following is a strong password security best practice for teachers maintaining grading accounts?",
    options: [
      { key: 'A', text: 'Using "password123" across all school platforms' },
      { key: 'B', text: 'Creating a long passphrase combining letters, numbers, and symbols, and enabling Two-Factor Authentication (2FA)' },
      { key: 'C', text: 'Writing the password on a sticky note pasted to the computer monitor' },
      { key: 'D', text: 'Sharing the password with all class officers for convenience' }
    ],
    correctAnswer: 'B',
    explanation: 'Complex, unique passphrases paired with Two-Factor Authentication (2FA) provide resilient defense against brute-force and credential-stuffing cyberattacks.',
    topicRef: '5.0 Cybersecurity Best Practices'
  },
  {
    id: 39,
    question: "What is 'Blended Learning' (Hybrid Learning)?",
    options: [
      { key: 'A', text: 'Mixing different color chalks on the board' },
      { key: 'B', text: 'An instructional approach that thoughtfully combines traditional face-to-face classroom instruction with online digital learning experiences' },
      { key: 'C', text: 'Teaching while listening to the radio' },
      { key: 'D', text: 'Having two teachers speak simultaneously in the same room' }
    ],
    correctAnswer: 'B',
    explanation: 'Blended learning integrates face-to-face pedagogical interaction with online learning activities, offering students some control over time, place, path, or pace.',
    topicRef: '4.0 Blended Learning Models'
  },
  {
    id: 40,
    question: "In the context of instructional media, what is a 'Mock-up'?",
    options: [
      { key: 'A', text: 'An insulting joke directed at a classmate' },
      { key: 'B', text: 'A working or full-scale model of a structure or device, used for demonstration, training, or testing (e.g., a cockpit simulator or artificial CPR torso)' },
      { key: 'C', text: 'A flat photocopy of a textbook diagram' },
      { key: 'D', text: 'A black ink fountain pen' }
    ],
    correctAnswer: 'B',
    explanation: 'A mock-up is a three-dimensional scale or full-size working replica designed to highlight essential operating mechanisms for hands-on experiential instruction.',
    topicRef: '2.0 3D Instructional Media'
  },
  {
    id: 41,
    question: "Which of the following describes Mayer's 'Signaling Principle' (or Cueing Principle)?",
    options: [
      { key: 'A', text: 'Learners comprehend more effectively when cues (arrows, highlights, bold headings, outlines) are added that direct attention to key organizational elements' },
      { key: 'B', text: 'Teachers should honk a horn whenever students make a mistake' },
      { key: 'C', text: 'All instructional graphics should be printed in black and white only' },
      { key: 'D', text: 'Text should always be read backwards' }
    ],
    correctAnswer: 'A',
    explanation: 'Signaling adds visual or auditory cues that spotlight critical relationships, guiding the learner\'s selective attention to essential learning content.',
    topicRef: '3.0 Mayer Multimedia Learning Principles'
  },
  {
    id: 42,
    question: "What is 'Digital Literacy' beyond the mere ability to operate a keyboard or smartphone?",
    options: [
      { key: 'A', text: 'The ability to find, evaluate, ethically use, create, and communicate information using diverse digital technologies and cognitive critical thinking' },
      { key: 'B', text: 'Winning online multiplayer games' },
      { key: 'C', text: 'Typing 100 words per minute on a typewriter' },
      { key: 'D', text: 'Having more than 5,000 social media followers' }
    ],
    correctAnswer: 'A',
    explanation: 'True digital literacy encompasses technical fluency, critical evaluation of online credibility, ethical digital citizenship, and creative media production skills.',
    topicRef: '5.0 21st Century Digital Literacies'
  },
  {
    id: 43,
    question: "What is the primary role of 'Formative Assessment' in an online learning module?",
    options: [
      { key: 'A', text: 'To assign final course failure grades at the end of the year' },
      { key: 'B', text: 'To provide ongoing, immediate feedback that helps students identify strengths and gaps while allowing instructors to adapt instruction' },
      { key: 'C', text: 'To rank students from wealthiest to poorest' },
      { key: 'D', text: 'To test memorization of the teacher\'s personal bio' }
    ],
    correctAnswer: 'B',
    explanation: 'Formative assessment occurs during the learning process to provide actionable feedback, guide scaffolding, and inform instructional pacing before summative grading.',
    topicRef: '4.0 Digital Assessment'
  },
  {
    id: 44,
    question: "Which term refers to software whose source code is released under a license that grants users the rights to study, change, and distribute it freely (e.g., Linux, Moodle)?",
    options: [
      { key: 'A', text: 'Proprietary Software' },
      { key: 'B', text: 'Open-Source Software (OSS)' },
      { key: 'C', text: 'Shareware Trial' },
      { key: 'D', text: 'Ransomware' }
    ],
    correctAnswer: 'B',
    explanation: 'Open-source software allows developers and educators to freely inspect, modify, enhance, and deploy the code without recurring vendor licensing fees.',
    topicRef: '4.0 Open-Source Technologies'
  },
  {
    id: 45,
    question: "In Mayer's Multimedia Principles, what does the 'Segmenting Principle' recommend for complex video lessons?",
    options: [
      { key: 'A', text: 'Break long, complex lessons down into user-paced, bite-sized segments or chunks rather than presenting a continuous uninterrupted stream' },
      { key: 'B', text: 'Play the video at quadruple speed' },
      { key: 'C', text: 'Remove all chapter titles' },
      { key: 'D', text: 'Force students to watch 4 hours in one sitting without pause' }
    ],
    correctAnswer: 'A',
    explanation: 'The Segmenting Principle states that breaking multimedia content into digestible, learner-controlled chunks prevents working memory overload.',
    topicRef: '3.0 Mayer Multimedia Learning Principles'
  },
  {
    id: 46,
    question: "What is a 'Digital Footprint'?",
    options: [
      { key: 'A', text: 'A sensor under the computer desk measuring physical steps' },
      { key: 'B', text: 'The trail of data, records, posts, photos, and browsing history left behind by an individual\'s internet activities' },
      { key: 'C', text: 'A mouse pad shaped like a shoe' },
      { key: 'D', text: 'The battery size of a tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'A digital footprint is the permanent trail of identifiable data and content an individual creates, searches, or shares across digital networks.',
    topicRef: '5.0 Digital Identity & Footprint'
  },
  {
    id: 47,
    question: "Which teaching model is being practiced when a class uses video conferencing software to co-conduct a live science experiment with a partner school in Japan?",
    options: [
      { key: 'A', text: 'Global Telecollaborative Learning' },
      { key: 'B', text: 'Rote Expository Drill' },
      { key: 'C', text: 'Isolated Programmed Instruction' },
      { key: 'D', text: 'Silent Boardwork' }
    ],
    correctAnswer: 'A',
    explanation: 'Telecollaboration leverages communication networks to bring distant classrooms together for authentic cross-cultural inquiry and collaborative project work.',
    topicRef: '4.0 Collaborative Online Learning'
  },
  {
    id: 48,
    question: "In the ASSURE model, which step ensures that the teacher previews the media, prepares the environment, prepares the learners, and presents the material?",
    options: [
      { key: 'A', text: 'U - Utilize Technology, Media, and Materials' },
      { key: 'B', text: 'A - Analyze Learners' },
      { key: 'C', text: 'S - State Objectives' },
      { key: 'D', text: 'E - Evaluate' }
    ],
    correctAnswer: 'A',
    explanation: 'The "Utilize" step in ASSURE follows the 5 Ps: Preview materials, Prepare materials, Prepare the environment, Prepare the learners, and Provide the learning experience.',
    topicRef: '3.0 ASSURE Model'
  },
  {
    id: 49,
    question: "What is 'Microlearning'?",
    options: [
      { key: 'A', text: 'Instruction delivered exclusively through microscopic slides' },
      { key: 'B', text: 'An educational approach that delivers content in short, highly focused, bite-sized learning units (2 to 5 minutes) addressing a single learning objective' },
      { key: 'C', text: 'Teaching only one student per school year' },
      { key: 'D', text: 'Reducing school hours to 10 minutes a day' }
    ],
    correctAnswer: 'B',
    explanation: 'Microlearning delivers concise, highly targeted content modules designed to fit short attention spans and promote rapid skill retention on mobile devices.',
    topicRef: '4.0 Modern Digital Pedagogies'
  },
  {
    id: 50,
    question: "Which standard framework developed by ISTE (International Society for Technology in Education) defines competencies for educators in the digital age?",
    options: [
      { key: 'A', text: 'ISTE Standards for Educators (Learner, Leader, Citizen, Collaborator, Designer, Facilitator, Analyst)' },
      { key: 'B', text: 'ISO 9001 Factory Standards' },
      { key: 'C', text: 'IEEE Electrical Wiring Codes' },
      { key: 'D', text: 'OSHA Workplace Safety Rules' }
    ],
    correctAnswer: 'A',
    explanation: 'The ISTE Educator Standards guide teachers in harnessing technology effectively to deepen student learning across seven professional roles.',
    topicRef: '1.0 Professional Technology Standards'
  }
];
