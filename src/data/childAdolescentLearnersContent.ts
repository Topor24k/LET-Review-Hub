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

export const CHILD_ADOLESCENT_LEARNERS_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: PQF, PPST, 7 DOMAINS & CAREER STAGES
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "Philippine Qualifications Framework (PQF)",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Legal Basis & ASEAN Convergence",
        content: "As part of the ASEAN convergence and in the light of globalization of each country in the ASEAN, the Philippines adopts national standards and levels for outcomes in education. This is called the Philippine Qualifications Framework (PQF) which is provided by law (RA 10968, s. 2018)."
      },
      {
        type: "bullet_list",
        heading: "What is the Purpose of PQF?",
        items: [
          "This is a legal document that adopts national standards and levels for outcomes of education in the country.",
          "Assists individuals to move easily between different education and training sectors and the labor market.",
          "Aligns the international qualifications for full recognition of the value of Philippine qualifications.",
          "Used as basis for accrediting certificates and licenses recognized by the government."
        ]
      },
      {
        type: "table",
        heading: "The Philippine Qualifications Framework Structure (PQF-NCC Res. No. 2014-03)",
        tableData: {
          headers: ["Level", "Basic Education", "Technical Education & Skills Dev.", "Higher Education"],
          rows: [
            ["L8", "—", "—", "Doctoral and Post Doctoral"],
            ["L7", "—", "—", "Post Baccalaureate"],
            ["L6", "—", "—", "Baccalaureate (Teacher Education)"],
            ["L5", "—", "Diploma", "—"],
            ["L4", "—", "NC IV", "—"],
            ["L3", "—", "NC III", "—"],
            ["L2", "—", "NC II", "—"],
            ["L1", "Grade 12 (Base Level)", "NC I", "—"]
          ]
        }
      },
      {
        type: "text",
        content: "Levels L1 through L8 correspond to increasing levels of qualification. Arrows in the official framework show seamless progression from Grade 12 and TVET NC/Diploma levels up into Baccalaureate degrees and beyond."
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "PQF Level 6 Descriptors & PPST Adoption",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "Based on the level of education as PQF Level 6, the PQF describes the career path for baccalaureate degree programs including teacher education degrees. All graduates from baccalaureate degrees are expected to exhibit outcomes as described below."
      },
      {
        type: "table",
        heading: "PQF Level 6 Outcomes and Descriptors",
        tableData: {
          headers: ["PQF 6 Level of Outcomes", "PQF 6 Descriptor of Outcomes"],
          rows: [
            ["Knowledge, Skills, and Values", "Graduates possess a broad level of coherent knowledge and skills in their field of study for professional work (teaching) and lifelong learning."],
            ["Application of Knowledge, Skills, and Values", "Application of professional work (teaching) in a broad range of discipline and/or further study."],
            ["Degree of Independence", "Independent (as a teacher) and/or in terms of related field."]
          ]
        }
      },
      {
        type: "quote",
        content: "Being responsible for the pre-service development of teachers, teacher education institutions have a responsibility of graduating students with PQF 6 qualifications and to master the PPST Beginning Teacher Standards. The mastery of beginning teacher competencies is an expectation of the teaching industry in basic education."
      },
      {
        type: "callout",
        heading: "National Adoption & Implementation of PPST (DO 42, s. 2017)",
        content: "The Philippine Government has consistently pursued teacher quality reforms through a number of initiatives to elevate education outcomes nationwide."
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "Transition from NCBTS to PPST (RA 10533)",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Evolution of Philippine Teacher Standards",
        items: [
          "As a framework of teacher quality, the National Competency-Based Teacher Standards (NCBTS) was institutionalized through CHED Memorandum Order No. 52, s. 2007 and DepED Order No. 32, s. 2009.",
          "However, the K to 12 Reform (R.A. 10533) in 2013 changed the landscape of teacher quality requirements in the Philippines.",
          "The reform process warrants an equivalent supportive focus on teacher quality – high quality teachers who are properly equipped and prepared to assume the roles and functions of K to 12 teachers; hence the creation of the Philippine Professional Standards for Teachers (PPST).",
          "NCBTS (National Competency-Based Teacher Standards) : NCBSSH (National Competency-Based Standards for School Heads)",
          "PPST (Philippine Professional Standards for Teachers) : PPSSH (Philippine Professional Standards for School Heads)"
        ]
      },
      {
        type: "numbered_list",
        heading: "The 7 Domains of PPST (37 Strands Total)",
        items: [
          "Domain 1: Content Knowledge and Pedagogy (7 strands)",
          "Domain 2: Learning Environment (6 strands)",
          "Domain 3: Diversity of Learners (5 strands)",
          "Domain 4: Curriculum and Planning (5 strands)",
          "Domain 5: Assessment and Reporting (5 strands)",
          "Domain 6: Community Linkages and Professional Engagement (4 strands)",
          "Domain 7: Personal Growth and Professional Development (5 strands)"
        ]
      },
      {
        type: "bullet_list",
        heading: "Domain 1 Strands (Content Knowledge and Pedagogy)",
        items: [
          "1.1 Content knowledge and its application within and across curriculum areas",
          "1.2 Research-based knowledge and principles of teaching and learning",
          "1.3 Positive use of ICT",
          "1.4 Strategies for promoting literacy and numeracy",
          "1.5 Strategies for developing critical and creative thinking, as well as other higher-order thinking skills",
          "1.6 Mother Tongue, Filipino and English in teaching and learning",
          "1.7 Classroom communication strategies"
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "PPST Domains 2, 3, & 4 and Learning Environments",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Domain 2 Strands (Learning Environment)",
        items: [
          "2.1 Learner safety and security",
          "2.2 Fair learning environment",
          "2.3 Management of classroom structure and activities",
          "2.4 Support for learner participation",
          "2.5 Promotion of purposive learning",
          "2.6 Management of learner behavior"
        ]
      },
      {
        type: "callout",
        heading: "3 Components of a Face-to-Face Learning Environment",
        items: [
          "Physical Environment: The space inside the room, seating arrangement, visual display, light, and ventilation.",
          "Psychological Environment: Sets of rules and procedures, expectations, and classroom atmosphere based on trust, cooperation, and empathy.",
          "Social Environment: Opportunities for positive interaction, friendship, camaraderie, cooperation, and consideration of individual needs and differences."
        ]
      },
      {
        type: "bullet_list",
        heading: "Domain 3 Strands (Diversity of Learners)",
        items: [
          "3.1 Learners' gender, needs, strengths, interests and experiences",
          "3.2 Learners' linguistic, cultural, socio-economic and religious backgrounds",
          "3.3 Learners with disabilities, giftedness and talents",
          "3.4 Learners in difficult circumstances",
          "3.5 Learners from indigenous groups"
        ]
      },
      {
        type: "bullet_list",
        heading: "Domain 4 Strands (Curriculum and Planning)",
        items: [
          "4.1 Planning and management of teaching and learning process",
          "4.2 Learning outcomes aligned with learning competencies",
          "4.3 Relevance and responsiveness of learning programs",
          "4.4 Professional collaboration to enrich teaching practice",
          "4.5 Teaching and learning resources including ICT"
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "PPST Domains 5, 6, 7 & 4 Career Stages",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Domain 5 Strands (Assessment and Reporting)",
        items: [
          "5.1 Design, selection, organization and utilization of assessment strategies",
          "5.2 Monitoring and evaluation of learner progress and achievement",
          "5.3 Feedback to improve learning",
          "5.4 Communication of learner needs, progress and achievement to key stakeholders",
          "5.5 Use of assessment data to enhance teaching and learning practices and programs"
        ]
      },
      {
        type: "bullet_list",
        heading: "Domain 6 Strands (Community Linkages & Professional Engagement)",
        items: [
          "6.1 Establishment of learning environments that are responsive to community contexts",
          "6.2 Engagement of parents and the wider school community in the educative process",
          "6.3 Professional ethics",
          "6.4 School policies and procedures"
        ]
      },
      {
        type: "bullet_list",
        heading: "Domain 7 Strands (Personal Growth & Professional Development)",
        items: [
          "7.1 Philosophy of teaching",
          "7.2 Dignity of teaching as a profession",
          "7.3 Professional links with colleagues",
          "7.4 Professional reflection and learning to improve practice",
          "7.5 Professional development goals"
        ]
      },
      {
        type: "callout",
        heading: "The Four Career Stages of a Teacher",
        content: "The PPST descriptors represent a continuum of development within the profession by providing a clear basis for attracting, preparing, developing and supporting teachers across four progressive stages."
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "Career Stages 1, 2, 3, & 4 Descriptors",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Career Stage 1: Beginning Teachers",
        items: [
          "Have gained the qualifications recognized for entry into the teaching profession.",
          "Have a strong understanding of subjects/areas in terms of content knowledge and pedagogy.",
          "Possess requisite knowledge, skills, and values supporting the teaching and learning process.",
          "Manage learning programs and strategies promoting learning based on student needs.",
          "Seek advice from experienced colleagues to consolidate their teaching practice."
        ]
      },
      {
        type: "bullet_list",
        heading: "Career Stage 2: Proficient Teachers",
        items: [
          "Professionally independent in applying vital teaching and learning skills.",
          "Provide focused teaching programs meeting curriculum and assessment requirements.",
          "Display skills in planning, implementing, and managing learning programs.",
          "Actively engage in collaborative learning with the professional community for mutual growth.",
          "Reflective practitioners continually consolidating Career Stage 1 competencies."
        ]
      },
      {
        type: "bullet_list",
        heading: "Career Stage 3: Highly Proficient Teachers",
        items: [
          "Consistently display a high level of performance in their teaching practice.",
          "Manifest an in-depth, sophisticated understanding of teaching and learning.",
          "Have high education-focused situation cognition, adept in problem solving.",
          "Work collaboratively with colleagues and provide support and mentoring.",
          "Continually develop professional knowledge through deep reflection."
        ]
      },
      {
        type: "bullet_list",
        heading: "Career Stage 4: Distinguished Teachers",
        items: [
          "Embody the highest standard for teaching grounded in global best practices.",
          "Exhibit exceptional capacity to improve their own teaching and that of others.",
          "Recognized as education leaders, contributors, and initiators of partnerships.",
          "Create lifelong impact in the lives of colleagues, students, and communities.",
          "Consistently seek professional advancement and inspire the educational sector."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Qualifications Framework & Standards",
    topicTitle: "Career Paths & Salary Grades Diagram",
    pdfPageRef: "PDF Page 7-8",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "PPST Career Stages vs Teaching & Leadership Tracks",
        tableData: {
          headers: ["PPST Career Stage", "Teaching Track", "Salary Grade", "Leadership Track"],
          rows: [
            ["Stage IV (Distinguished)", "Master Teacher V", "SG-22", "School Principal IV"],
            ["Stage IV (Distinguished)", "Master Teacher IV", "SG-21", "School Principal III"],
            ["Stage III (Highly Proficient)", "Master Teacher III", "SG-20", "School Principal II"],
            ["Stage III (Highly Proficient)", "Master Teacher II / I", "SG-19", "School Principal I"],
            ["Stage II (Proficient)", "Teacher VII, VI, V, IV", "SG 14–18", "—"],
            ["Stage I (Beginning → Proficient)", "Teacher III, II, I", "SG 11–13", "—"]
          ]
        }
      },
      {
        type: "quote",
        content: "Teachers in the Philippine public school system can choose between advancing through the Classroom Teaching Track (Master Teacher) or transitioning into the Administrative & Leadership Track (School Principal)."
      }
    ]
  },

  // ==========================================
  // DAY 2: CLASSROOM MANAGEMENT & PSYCHOLOGY
  // ==========================================
  {
    pageNumber: 8,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "Classroom Management Principles & 5 Teacher Powers",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "What is Classroom Management?",
        content: "The process of organizing and conducting the business of the classroom relatively free of behavior problems. Refers to the wide variety of skills and techniques teachers use to keep students organized, orderly, focused, attentive on tasks, and academically productive in class."
      },
      {
        type: "bullet_list",
        heading: "Key Principles of Classroom Management",
        items: [
          "Consistent, proactive discipline is the crux of effective classroom management.",
          "Establish routines for all daily tasks and needs — routines are the backbone of daily classroom life, saving time and easing learning.",
          "Strike a balance between variety and challenge in student activities.",
          "As classroom manager, be aware of all actions in the classroom (With-it-ness principle).",
          "Resolve minor inattention and disruption before they become major disruptions.",
          "Make good use of every instructional moment: Minimize discipline time to maximize instructional time."
        ]
      },
      {
        type: "numbered_list",
        heading: "The 5 Types of Teacher Power",
        items: [
          "1. Expert Power: When a teacher makes students feel that he/she knows what he/she is talking about.",
          "2. Referent Power: Giving students a genuine sense of belonging and acceptance.",
          "3. Legitimate Power: Authority granted by law and society ('in loco parentis' — in place of the parents).",
          "4. Reward Power: Giving positive rewards (e.g. grades, praise, privileges).",
          "5. Coercive Power: Giving punishments or sanctions for non-compliance."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "4 Types of Classroom Managers",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "comparison",
        heading: "Classroom Management Styles Matrix (Warmth vs. Demandingness)",
        items: [
          "1. Authoritative / Democratic (Warm, but Demanding): Clearly and fairly communicates standards for discipline and performance. The democratic teacher is kind, caring, and warm, but also firm. (DEMANDING YET WARM)",
          "2. Authoritarian (Not Warm, but Demanding): Places firm limits and controls on the student. Characterized by power, domination, pressure, and criticism. Assumes sole responsibility for making all decisions using pressure, a sharp voice, and fear. (DEMANDING BUT NOT WARM)",
          "3. Permissive / Laissez-Faire (Warm, but Not Demanding): Places few demands or controls on students. Accepts student impulses and is less likely to monitor behavior. More concerned with emotional well-being than control. (WARM BUT NOT DEMANDING)",
          "4. Uninvolved (Not Warm, Not Demanding): Indifferent and undemanding of student involvement. (NEITHER DEMANDING NOR WARM)"
        ]
      },
      {
        type: "quote",
        content: "LET Exam High-Yield Rule: The Authoritative / Democratic style produces the highest academic achievement, emotional well-being, and social responsibility in learners."
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "Approaches to Classroom Management & Psychological Effects",
    pdfPageRef: "PDF Page 10-11",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "4 Approaches to Classroom Management",
        items: [
          "1. Assertive Approach (Duke & Mechel / Canter): Expects teachers to specify rules of behavior and clear consequences for disobeying them.",
          "2. Behavior Modification Approach: Strives to increase appropriate behavior through rewards and reduce inappropriate behavior through punishments.",
          "3. Business Academic Approach (Evertson & Emmer): Emphasizes organization and management of students as they engage in academic work (clear work requirements, monitoring, and immediate feedback).",
          "4. Group Managerial Approach (Jacob Kounin): Responding immediately to group student behavior to prevent problems before they emerge."
        ]
      },
      {
        type: "bullet_list",
        heading: "Classic Classroom Psychological Effects",
        items: [
          "Ripple Effect (Kounin): Occurs when a teacher corrects misbehavior in one student, positively influencing the behavior of nearby students.",
          "With-it-ness (Kounin): The skill to know what is going on in all parts of the classroom at all times ('eyes in the back of one's head').",
          "Pygmalion / Rosenthal Effect: The phenomenon whereby the greater the expectation placed upon people, the better they perform.",
          "Hawthorne Effect (Observer Effect): Individuals modify or improve an aspect of behavior in response to awareness of being observed.",
          "John Henry Effect: The opposite of Hawthorne — a control group with no intervention works extra hard to outperform the experimental group.",
          "Placebo Effect: A fake/inactive treatment produces real improvement simply because of positive expectation (e.g. behaving because 'Santa is watching').",
          "Halo Effect: A cognitive bias where an observer's overall positive impression of a person influences feelings/evaluations of their specific traits."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "Rudolf Dreikurs' 4 Mistaken Goals of Misbehavior",
    pdfPageRef: "PDF Page 11-12, 23-25",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "The Acceptance Approach: Dreikurs' 4 Mistaken Goals",
        content: "All human behavior is goal-oriented. When students feel a lack of belonging, they pursue one of four mistaken goals to find significance in the classroom."
      },
      {
        type: "numbered_list",
        heading: "The 4 Mistaken Goals & Child Beliefs",
        items: [
          "1. Goal to Seek Attention: 'I count (belong) only when I'm being noticed or getting special service.' Characterized by disrupting, asking favors, tattling, and requesting unneeded help.",
          "2. Goal to Seek Power (To Be Boss): 'I belong only when I'm boss or in control; you can't make me.' Characterized by arguing, contradiction, temper tantrums, and escalating power struggles.",
          "3. Goal to Isolate Oneself (Assumed Inadequacy): 'I am helpless; it's no use trying because I won't do it right.' Characterized by withdrawing, giving up, and convincing the teacher to leave them alone.",
          "4. Goal to Seek Revenge (To Get Even): 'I don't belong, so I'll hurt others as I feel hurt.' Characterized by cruel, violent, or vicious behavior, property damage, and retaliation."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "Kounin's Classroom Techniques & Preventing Jerkiness",
    pdfPageRef: "PDF Page 12-13",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Jacob Kounin's Core Management Techniques",
        items: [
          "1. With-it-ness: Knowing what is occurring in all areas of the room at all times.",
          "2. Overlapping: Handling two or more activities/groups at the same time (e.g. keeping small group on task while monitoring seatwork).",
          "3. Smoothness: Making smooth lesson transitions, maintaining appropriate pace, and preventing jerkiness (disorderly flow of activities).",
          "4. Momentum: The force and flow of a lesson. Effective lessons move at a brisk pace with minimal slowdowns.",
          "5. Group Focus: Keeping the entire class alert and accountable using alerting techniques."
        ]
      },
      {
        type: "bullet_list",
        heading: "5 Errors That Cause Jerkiness (What to AVOID)",
        items: [
          "a. Stimulus-bounded: Teacher is so immersed in a small group that they miss events occurring in the rest of the room.",
          "b. Thrust: Teacher bursts into activities abruptly without assessing student readiness, giving confusing orders.",
          "c. Dangle: Teacher leaves an activity hanging in mid-air or drops a topic before completion.",
          "d. Truncation: Teacher ends an activity abruptly and permanently moves on.",
          "e. Flip-flop: Teacher terminates an activity, transitions to another, and then returns to the first activity, showing lack of direction."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "Disciplinary Intervention Techniques",
    pdfPageRef: "PDF Page 13-14",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Everyday Classroom Intervention Strategies",
        items: [
          "Planned Ignoring: Deliberately ignoring minor actions done solely for attention.",
          "Signal Interference: Non-verbal response to stop misbehavior (clearing throat, direct eye contact, pausing mid-sentence).",
          "Proximity and Touch Control: Moving physically close to the misbehaving student.",
          "Antiseptic Bouncing: Asking a student to step outside temporarily (e.g. to get water) when uncontrollable giggling or agitation disrupts the room.",
          "Direct Appeal: Pointing out the logical connection between conduct and consequences.",
          "Name Dropping: Weaving a student's name into a lecture example to refocus attention.",
          "Humor Effect: Using a lighthearted joke to defuse tension in tense moments.",
          "Interest Boosting: Giving extra attention to a student losing interest in their work.",
          "Program Restructuring: Recognizing a failing activity and replacing it immediately.",
          "Prompting: Giving clues to help a student produce the correct answer.",
          "Probing: Asking follow-up questions to help a child elaborate their answer."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Classroom Management & Discipline",
    topicTitle: "12 Characteristics of an Effective Teacher",
    pdfPageRef: "PDF Page 14-16",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "12 Traits of Master Teachers",
        tableData: {
          headers: ["Type / Quality", "Key Characteristic & Action"],
          rows: [
            ["1. Prepared", "Always ready; doesn't waste instructional time; time flies because students are engaged."],
            ["2. Positive", "Sees the glass half full; available to students; gives praise and recognition."],
            ["3. Hold High Expectations", "Holds highest standards; challenges students; builds confidence."],
            ["4. Creative", "Resourceful and inventive; uses technology effectively in the classroom."],
            ["5. Fair", "Handles grading and privileges equitably; provides clear rubrics and requirements."],
            ["6. Display Personal Touch", "Approachable; visits students' world; shares relatable experiences."],
            ["7. Cultivate Belonging", "Makes students feel welcome, comfortable, and valued in class."],
            ["8. Compassionate", "Sensitive to students' personal problems and relates with empathy."],
            ["9. Have Sense of Humor", "Doesn't take everything too seriously; brings appropriate humor to learning."],
            ["10. Respect Students", "Protects privacy when returning test papers; speaks privately about conduct."],
            ["11. Forgiving", "Does not hold grudges; habitually starts each day with a clean slate."],
            ["12. Admit Mistakes", "Quick to admit being wrong; apologizes for mistakes; adjusts grading errors."]
          ]
        }
      }
    ]
  },

  // ==========================================
  // DAY 3: LEARNING THEORIES & INTELLIGENCES
  // ==========================================
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: Learning Theories & Intelligences",
    topicTitle: "Howard Gardner's 9 Multiple Intelligences",
    pdfPageRef: "PDF Page 16-17",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Howard Gardner's Multiple Intelligences",
        items: [
          "1. Verbal-Linguistic (Word Smart): Enjoys reading, writing, debating, storytelling, concept mapping, journaling.",
          "2. Logical-Mathematical (Number/Logic Smart): Time, quantity, cause-and-effect, science experiments, mental math, puzzles.",
          "3. Bodily-Kinesthetic (Body Smart): Hands-on manipulation, models, dance, roleplay, physical sports, drama.",
          "4. Visual-Spatial (Picture Smart): Thinks in images, creates diagrams/posters, reads maps, visualizes spatial layouts.",
          "5. Interpersonal (People Smart): Group work, interviews, peer collaboration, mediation, social empathy.",
          "6. Intrapersonal (Self Smart): Independent study, personal reflection, journals, self-paced goal setting.",
          "7. Musical (Music Smart): Rhythm, singing, jingles, rapping, playing instruments, auditory patterns.",
          "8. Naturalistic (Nature Smart): Flora and fauna classification, environmental care, outdoor study.",
          "9. Existential (Spirit Smart): Big-picture philosophical questions, meaning of life, ethical inquiries."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 3,
    dayTitle: "Day 3: Learning Theories & Intelligences",
    topicTitle: "Learning Styles, Hemispheric Models & Differentiated Instruction",
    pdfPageRef: "PDF Page 17-20",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Sensory Learning Preferences",
        items: [
          "Visual-Iconic: Remembers through pictures, graphic displays, films, and concrete imagery ('iconic memory').",
          "Visual-Symbolic: Prefers abstract symbols like mathematical formulas and written text over maps.",
          "Auditory Listeners: Process through lectures; carry on internal mental conversations to retain content.",
          "Auditory Talkers: Prefer to talk, discuss, and whisper to themselves while processing information.",
          "Tactile / Kinesthetic: Learn best through physical touch, movement, and manipulation."
        ]
      },
      {
        type: "table",
        heading: "Roger Sperry's Brain Hemispheric Model",
        tableData: {
          headers: ["Left Brain (Analytic - Successive)", "Right Brain (Global - Simultaneous)"],
          rows: [
            ["Verbal & responds to word meaning", "Visual & responds to tone of voice"],
            ["Processes information linearly & sequentially", "Processes information randomly in varied order"],
            ["Responds to logic; plans ahead", "Responds to emotion; impulsive"],
            ["Recalls names; speaks with few gestures", "Recalls faces; gestures when speaking"],
            ["Punctual; prefers bright light & quiet", "Prefers music / sound background while studying"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Differentiated Instruction (DI)",
        content: "A teaching theory based on the premise that instructional approaches should vary and be adapted in relation to individual and diverse students in the classroom."
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 3,
    dayTitle: "Day 3: Learning Theories & Intelligences",
    topicTitle: "Principles of Learning & 7 Laws of Learning",
    pdfPageRef: "PDF Page 20-21",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "9 Principles of Learning",
        items: [
          "1. Learning is an experience which occurs inside the learner and is activated by the learner.",
          "2. Learning is the discovery of the personal meaning and relevance of ideas.",
          "3. Learning (behavioral change) is a consequence of experience.",
          "4. Learning is cooperative and collaborative.",
          "5. Learning is an evolutionary process.",
          "6. Learning is sometimes a painful process.",
          "7. One of the richest resources for learning is the learner himself.",
          "8. The process of learning is emotional as well as intellectual.",
          "9. The process of problem solving and learning are highly unique and individual."
        ]
      },
      {
        type: "numbered_list",
        heading: "Thorndike's Laws of Learning",
        items: [
          "1. Law of Readiness: Individuals learn best when physically, mentally, and emotionally ready.",
          "2. Law of Exercise: Things most often repeated are best remembered.",
          "3. Law of Effect: Learning is strengthened when accompanied by a pleasant feeling.",
          "4. Law of Freedom: Things freely learned are best learned.",
          "5. Law of Intensity: The more vivid/intense the material, the more it is retained.",
          "6. Law of Recency: Things most recently learned are best remembered.",
          "7. Law of Primacy: Things learned first create a strong impression; what is taught must be right the first time."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 3,
    dayTitle: "Day 3: Learning Theories & Intelligences",
    topicTitle: "Charles Letteri's 7 Cognitive Structures",
    pdfPageRef: "PDF Page 21-22",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Letteri's 7 Cognitive Thinking Dimensions",
        items: [
          "1. Analysis (Field Dependence - Independence): Ability to break down information into component parts for identification and categorization.",
          "2. Focusing (Scanning / Concentration): Ability to select relevant information without being distracted by irrelevant secondary data.",
          "3. Comparative Analysis (Reflective - Impulsivity): Ability to select correct items from alternatives and compare data before choosing.",
          "4. Narrowing (Breadth of Categorization): Ability to identify and place new info into categories through attributes.",
          "5. Complex Cognitive (Complexity - Simplicity): Ability to integrate complex information into existing long-term memory structures.",
          "6. Sharpening (Sharpening - Leveling): Ability to maintain distinctions between old and new information to avoid confusion.",
          "7. Tolerance (Tolerant - Intolerant): Ability to monitor thinking and deal with ambiguous information without frustration."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 4: OBJECTIVES, TAXONOMIES & DOMAINS
  // ==========================================
  {
    pageNumber: 19,
    dayNumber: 4,
    dayTitle: "Day 4: Objectives, Taxonomies & Domains",
    topicTitle: "Formulating SMART Learning Objectives",
    pdfPageRef: "PDF Page 22-23",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Guiding Principles in Determining Objectives",
        items: [
          "Begin with the end in mind.",
          "Share lesson objectives clearly with students.",
          "Objectives must span 2 or 3 domains: cognitive, psychomotor, and affective.",
          "Must align with the aims of education in the Philippine Constitution and school vision/mission.",
          "Aim at developing critical and creative thinking.",
          "Must be SMART: Specific, Measurable, Attainable, Relevant/Result-Oriented, Time-bounded/Terminal."
        ]
      },
      {
        type: "callout",
        heading: "Mager's 3 Components of an Effective Objective (Robert Mager)",
        items: [
          "1. Performance: What the student should be able to do (action verb).",
          "2. Condition: The conditions under which the performance will occur (e.g. 'Given a microscope...').",
          "3. Criterion of Success: The standard by which performance is evaluated (e.g. 'with 90% accuracy')."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 4,
    dayTitle: "Day 4: Objectives, Taxonomies & Domains",
    topicTitle: "Bloom's Revised Taxonomy (Anderson & Krathwohl 2001)",
    pdfPageRef: "PDF Page 23-24",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Old vs. Revised Bloom's Taxonomy",
        tableData: {
          headers: ["Old Taxonomy (Noun, 1D)", "Revised Cognitive Dimension (Verb, 2D)", "Action Verbs"],
          rows: [
            ["1. Knowledge", "1. Remembering", "Recall, define, identify, recognize"],
            ["2. Comprehension", "2. Understanding", "Interpret, explain, summarize, paraphrase"],
            ["3. Application", "3. Applying", "Execute, implement, solve, demonstrate"],
            ["4. Analysis", "4. Analyzing", "Differentiate, organize, deconstruct, categorize"],
            ["5. Synthesis", "5. Evaluating", "Judge, critique, check, appraise"],
            ["6. Evaluation", "6. Creating", "Generate, design, construct, formulate"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "The 4 Knowledge Dimensions",
        items: [
          "A. Factual Knowledge: Terminology, specific details, and basic elements.",
          "B. Conceptual Knowledge: Classifications, principles, categories, and generalizations.",
          "C. Procedural Knowledge: Subject-specific skills, algorithms, techniques, and inquiry methods.",
          "D. Metacognitive Knowledge: Strategic knowledge, cognitive tasks, and self-knowledge."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 4,
    dayTitle: "Day 4: Objectives, Taxonomies & Domains",
    topicTitle: "Affective, Psychomotor Taxonomies & Content Selection",
    pdfPageRef: "PDF Page 25-28",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "David Krathwohl's Affective Domain (Values & Attitudes)",
        items: [
          "1. Receiving: Willingness to attend to stimuli (e.g. watching video on climate change).",
          "2. Responding: Active participation based on stimuli (e.g. reading books to answer questions).",
          "3. Valuing: Commitment to some experience (e.g. voluntarily attending clean-up drives).",
          "4. Organization: Integrating new value into priority system (e.g. organizing environmental club).",
          "5. Characterization: Acting consistently according to the internalized value in daily life."
        ]
      },
      {
        type: "numbered_list",
        heading: "Anita Harrow's Psychomotor Domain",
        items: [
          "1. Reflex Movements: Involuntary responses (flexion, stretch).",
          "2. Basic Fundamental Movements: Innate movements (walking, running, gripping).",
          "3. Perceptual Abilities: Translating sensory stimulus into coordinated action (catching, jump rope).",
          "4. Physical Activities: Muscular exertion, endurance, agility.",
          "5. Skilled Movements: Complex efficiency in sports and dance.",
          "6. Non-discursive Communication: Body language, gestures, and choreography."
        ]
      },
      {
        type: "numbered_list",
        heading: "Moore's 3 Levels of Psychomotor Learning",
        items: [
          "1. Imitation: Performing skill with instructional support.",
          "2. Manipulation: Performing skills independently.",
          "3. Precision & Automaticity: Performing skill accurately and effortlessly with unconscious automaticity."
        ]
      },
      {
        type: "bullet_list",
        heading: "7 Criteria for Selection & Organization of Content",
        items: [
          "Validity: Content aligns with national basic education standards (PELCs / PSLCs).",
          "Significance: Responds to learners' needs in the era of information explosion.",
          "Balance: Blends cognitive facts, psychomotor skills, and affective values.",
          "Self-Sufficiency: Covers essentials in-depth ('not a mile wide and an inch deep').",
          "Interest: Considers learners' developmental stages and cultural background.",
          "Utility: Useful application to life after learning.",
          "Feasibility: Can be realistically covered in available instructional time."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 5: TEACHING METHODS & INTERVENTIONS
  // ==========================================
  {
    pageNumber: 22,
    dayNumber: 5,
    dayTitle: "Day 5: Teaching Methods & Interventions",
    topicTitle: "Structure of Subject Matter & Thinking Skills",
    pdfPageRef: "PDF Page 29-30",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Structure of Subject Matter Content",
        items: [
          "1. Cognitive Elements: Facts (verifiable unit), Concepts (categories), Principles (relationships), Hypotheses (educated guesses), Theories (explanatory mechanisms), Laws (universal scientific truths).",
          "2. Skills: Manipulative skills (kinesthetic/vocational) & Thinking skills.",
          "3. Attitudes and Values: Emotional and ethical dimensions."
        ]
      },
      {
        type: "numbered_list",
        heading: "Divergent vs. Convergent Thinking Skills",
        items: [
          "Divergent Thinking: Generates multiple creative possibilities.",
          "— Fluent Thinking: Generating a large volume of ideas.",
          "— Flexible Thinking: Generating a variety of different categories of ideas.",
          "— Original Thinking: Producing unique ideas different from the norm.",
          "— Elaborative Thinking: Expanding and building upon existing ideas.",
          "Convergent Thinking: Narrowing down to find the single best answer.",
          "Problem Solving: Algorithm (step-by-step formula) vs. Heuristic (general rule-of-thumb strategy)."
        ]
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 5,
    dayTitle: "Day 5: Teaching Methods & Interventions",
    topicTitle: "Teaching Approaches & Direct vs. Indirect Instruction",
    pdfPageRef: "PDF Page 30-34",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Key Teaching Approaches",
        items: [
          "Teacher-Centered: Teacher is the sole source of knowledge; learners are passive recipients.",
          "Banking Approach (Paulo Freire / Locke Tabula Rasa): Knowledge is deposited into empty minds.",
          "Reflective Teaching: Self-analysis, journaling, and portfolios to evaluate past experiences.",
          "Metacognitive Approach: Thinking about thinking; allowing students to monitor thought processes.",
          "Constructivist Approach: Active construction of meaning by connecting new ideas to prior knowledge.",
          "Integrated Approach: Intradisciplinary (within subject), Interdisciplinary (across subjects), Transdisciplinary (real-life student questions)."
        ]
      },
      {
        type: "table",
        heading: "Direct vs. Indirect Instruction Comparison",
        tableData: {
          headers: ["Feature", "Direct Instruction (Deductive)", "Indirect Instruction (Inductive)"],
          rows: [
            ["Direction", "General to Specific (Rule → Examples)", "Specific to General (Examples → Rule)"],
            ["Starting Point", "Rule / Generalization", "Concrete Experience / Problem"],
            ["Thinking Level", "Lower-Order Thinking Skills (LOTS)", "Higher-Order Thinking Skills (HOTS)"],
            ["Interaction", "Teacher-dominated / Less interaction", "Student-centered / High interaction"],
            ["Components", "Modeling → Guided Practice → Consolidation → Independent Practice → Application → Review", "Inquiry / Problem Solving / Discovery / Project Method"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 5,
    dayTitle: "Day 5: Teaching Methods & Interventions",
    topicTitle: "Cooperative Learning & Peer Tutoring Models",
    pdfPageRef: "PDF Page 34-36, 43",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "5 Elements of Cooperative Learning (Johnson & Johnson)",
        items: [
          "1. Positive Interdependence: 'Sink or swim together' — members rely on each other to succeed.",
          "2. Face-to-Face Promotive Interaction: Helping, encouraging, and praising each other's efforts.",
          "3. Individual and Group Accountability: Group is held responsible, and each student must demonstrate mastery.",
          "4. Interpersonal and Small Group Skills: Communication, trust, decision-making, and conflict management.",
          "5. Group Processing: Reflecting on how well the team worked together and how to improve."
        ]
      },
      {
        type: "bullet_list",
        heading: "Tutoring Arrangements in the Classroom",
        items: [
          "Instructional Tutoring: Older students tutor younger ones 1-on-1 or in small groups.",
          "Same-Age Tutoring: Interactive pairs where more able students assist peers.",
          "Monitorial Tutoring: Class divided into groups with designated monitors leading each group.",
          "Structured Tutoring: Definite, highly scripted procedure administered by trained tutors.",
          "Semi-Structured Tutoring: Tutor guides tutee using a carefully planned learning guide."
        ]
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 5,
    dayTitle: "Day 5: Teaching Methods & Interventions",
    topicTitle: "11 Student Problem Types & Dreikurs Intervention Matrix",
    pdfPageRef: "PDF Page 36-43",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "11 Student Problem Types & Signs",
        tableData: {
          headers: ["Problem Type", "Behavioral Signs", "Root Cause"],
          rows: [
            ["1. Distractible", "Short attention span, rarely completes tasks, easily distracted", "Low sustained concentration"],
            ["2. Underachiever", "Does minimum to get by, indifferent to schoolwork", "Poor motivation / values"],
            ["3. Low Achiever", "Willing to work but struggles; slow progress, poor retention", "Low potential / lack of readiness"],
            ["4. Withdrawn", "Avoids interaction, quiet, sober, never volunteers", "Feels rejected / excluded"],
            ["5. Defiant", "Resists authority, argumentative, 'You can't make me'", "Power struggle with teacher"],
            ["6. Rejected by Peers", "Forced to work alone, teased, lacks social skills", "Peer exclusion"],
            ["7. Hostile Aggressive", "Direct intense hostility, threats, hitting, damages property", "Anger / emotional hurt"],
            ["8. Passive Aggressive", "Subtly oppositional, stubborn, drags feet, borderline compliance", "Indirect resistance"],
            ["9. Hyperactive", "Constant purposeless movement, blurts answers, makes noises", "Excessive undirected energy"],
            ["10. Failure Syndrome", "Convinced they cannot succeed; gives up easily ('I can't do it')", "Learned helplessness"],
            ["11. Perfectionist", "Unduly anxious about errors; unrealistically high standards", "Fear of failure"]
          ]
        }
      },
      {
        type: "table",
        heading: "Dreikurs Mistaken Goals Intervention Matrix",
        tableData: {
          headers: ["Mistaken Goal", "What Child Feels & Believes", "Teacher Intervention & Solution"],
          rows: [
            ["Attention Seeking", "'I belong only when I'm being noticed.'", "Notice me appropriately; redirect to useful tasks; set non-verbal signals; catch them being good; planned ignoring."],
            ["Power Seeking", "'I belong only when I'm boss; you can't make me.'", "Give choices; redirect to positive power; withdraw from conflict to cool down; be firm and kind; act, don't argue."],
            ["Assumed Inadequacy", "'I am helpless; don't expect anything of me.'", "Show faith; take small steps; make tasks easier until success is experienced; never give up on the child."],
            ["Revenge Seeking", "'I'm hurting, so I'll hurt others as I feel hurt.'", "Help them express hurt feelings; avoid retaliatory punishment; use reflective listening; build trust in class meetings."]
          ]
        }
      }
    ]
  }
];
