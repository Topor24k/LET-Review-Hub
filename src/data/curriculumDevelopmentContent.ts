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

export const CURRICULUM_DEVELOPMENT_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: CURRICULUM FOUNDATIONS, DEFINITIONS & DEVELOPMENT MODELS
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Definitions of Curriculum: Traditional vs. Progressive",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Traditional vs. Progressive Definitions of Curriculum",
        tableData: {
          headers: ["Traditional Definitions", "Progressive Definitions"],
          rows: [
            ["A set of courses constituting an area of specialization.", "Sum total of all the learning experiences inside and outside the school."],
            ["An identification of proper goals.", "Entire range of experiences, undirected and directed, concerned with the unfolding of the individual's abilities."],
            ["Can be considered as a system of dealing with people and the process.", "Set of learning and experiences for students planned by the school to attain the aims of education."],
            ["Is a means of attaining the aims or philosophy of education.", "Sum total of all the learning experiences."]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Additional Contrasting Descriptors",
        items: [
          "Traditional curriculum is often described as: planned learning experiences, a list of subjects and courses, ordinary, and limited.",
          "Progressive curriculum is often described as: enriched and broad."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "The 7 Types of Curricula",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Types of Curricula",
        items: [
          "1. Recommended Curriculum: recommendations in the form of memoranda, policy, standards, and guidelines from government agencies such as TESDA, CHED, UNESCO, etc.",
          "2. Written Curriculum: includes documents based on the recommended curriculum.",
          "3. Taught Curriculum: the teacher and learners put life into the written curriculum; requires the teacher's skills, instructional materials, and facilities.",
          "4. Supported Curriculum: support materials the teacher needs, such as print and non-print learning materials.",
          "5. Assessed Curriculum: the curriculum that is evaluated after it has been taught.",
          "6. Learned Curriculum: measured by assessment tools that indicate cognitive, affective, and psychomotor outcomes.",
          "7. Hidden / Implicit Curriculum: the unwritten curriculum — peer influence, school environment, media, parental pressures, societal changes, etc."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "The Teacher as a Curricularist: Roles & Planning Factors",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "The Teacher as a Curricularist: 7 Roles",
        items: [
          "Initiator: implementing a new curriculum requires the teacher's open-mindedness and full belief that the curriculum will enhance learning.",
          "Innovator: creativity and innovation are hallmarks of an excellent teacher.",
          "Implementer: gives life to the curriculum plan; teaching, guiding, and facilitating skills are expected at the highest level.",
          "Evaluator: determines if the desired learning outcomes have been achieved.",
          "Knower: must master what is included in the curriculum.",
          "Writer: takes record of knowledge, concepts, subject matter, or content.",
          "Planner: makes yearly, monthly, or daily plans of the curriculum to guide its implementation."
        ]
      },
      {
        type: "numbered_list",
        heading: "5 Factors to Consider in Planning a Curriculum",
        items: [
          "1. The learner",
          "2. Support materials",
          "3. Time",
          "4. Subject matter or content",
          "5. The desired outcomes"
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Views of Curriculum: The Traditional View",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Views of Curriculum: Traditional vs. Progressive Proponents",
        tableData: {
          headers: ["Traditional View", "Progressive View"],
          rows: [
            ["Robert Hutchins", "John Dewey"],
            ["Arthur Bestor", "Hollis Caswell & Kenn Campbell"],
            ["Joseph Schwab", "Othaniel Smith, William Stanley & Harlan Shore"],
            ["Philip Phenix", "Collin Marsh & George Willis"]
          ]
        }
      },
      {
        type: "numbered_list",
        heading: "I. Traditional View",
        items: [
          "1. Robert Hutchins: views curriculum as 'permanent studies,' emphasizing the rules of grammar, reading, rhetoric, logic, and math; the 3Rs should be emphasized in basic education while liberal education should be emphasized in college.",
          "2. Arthur Bestor: believes the mission of the school should be intellectual training, including Math, Science, History, and Foreign Language.",
          "3. Joseph Schwab: holds that the sole source of curriculum is discipline — subject areas such as Science, Mathematics, Social Studies, English, and more; in college these are labeled humanities, sciences, languages, and mathematics; he coined the word 'discipline' as a ruling doctrine for curriculum development.",
          "4. Philip Phenix: curriculum should consist entirely of knowledge drawn from the various disciplines."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Views of Curriculum: The Progressive View",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "II. Progressive View",
        items: [
          "1. John Dewey: believes education is experiencing; reflective thinking is a means to unify curricular elements that are tested by application.",
          "2. Hollis Caswell and Kenn Campbell: viewed curriculum as all experiences children have under the guidance of teachers.",
          "3. Othaniel Smith, William Stanley, and Harlan Shore: defined curriculum as a sequence of potential experiences set up in schools for the purpose of disciplining children and youth in group ways of thinking and acting.",
          "4. Colin Marsh and George Willis: viewed curriculum as all the experiences in the classroom that are planned and enacted by the teacher and also learned by the students."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Three Ways of Approaching a Curriculum",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Curriculum as Content, Process, and Product",
        items: [
          "Curriculum as a Content or Body of Knowledge: the knowledge to be transmitted. Differentiating Content defines the essential principles all students must understand and adjusts the complexity of information as needed — e.g. using reading materials appropriate to learners' various reading levels.",
          "Curriculum as a Process: what actually happens in the classroom when the curriculum is practiced. Differentiating Process refers to activities students engage in to understand and master a topic — e.g. using direct instruction with one group while another does group work.",
          "Curriculum as a Product: the learning outcomes desired of learners. Differentiating Product can take the form of exams, activities, projects, or written work, letting teachers customize lessons by modifying depth, amount, or independence — e.g. assigning work by learner level, allowing individual or small-group projects, and using rubrics matched to varying ability levels."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Principles of Curriculum Content: BASICS",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "BASICS: Principles of Curriculum Content",
        content: "An acronym for the six guiding principles of curriculum content: Balance, Articulation, Sequence, Integration, Continuity, and Scope."
      },
      {
        type: "bullet_list",
        heading: "The 6 BASICS Principles",
        items: [
          "Balance: equitable assignment of content, time, experiences, and other elements.",
          "Articulation: the curriculum is arranged vertically or horizontally. Vertical alignment arranges the learning outcomes of a subject grade-wise, so content at a lower level prepares students for the next grade level. Horizontal alignment arranges learning outcomes across subjects within the same grade level (e.g. Grade 6 social studies related to Grade 6 science).",
          "Sequence: the logical arrangement of content.",
          "Integration: the curriculum is integrated and interconnected.",
          "Continuity: vertical repetition and recurring approaches to content.",
          "Scope: the coverage or boundaries of the curriculum."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "The Four Phases of Curriculum Development",
    pdfPageRef: "PDF Page 4",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Curriculum Development",
        content: "A dynamic process involving many different people and procedures."
      },
      {
        type: "numbered_list",
        heading: "4 Phases of Curriculum Development",
        items: [
          "1. Planning: the initial step; establishes vision, mission, goals (school philosophies), and learning outcomes (objectives). The end product is a written document — e.g. lesson plans, unit plans, syllabi, course designs, modules, books, and instructional guides.",
          "2. Designing: selection and organization of content, activities, assessments, and resources.",
          "3. Implementing: continues after planning; putting the plan into action through all learning activities that transpire in the classroom.",
          "4. Evaluating: follows implementation; determines the extent to which the learning outcomes have been achieved."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: Curriculum Foundations, Definitions & Development Models",
    topicTitle: "Curriculum Development Process Models",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Ralph Tyler: Tyler's Rationale (Linear Model)",
        items: [
          "Known as the Father of Behavioral Objectives and the Grandfather of Curriculum Design; his model emphasizes the planning phase.",
          "4 Basic Principles: purpose of the school; educational experiences related to that purpose; organization of the experiences; evaluation of the experiences."
        ]
      },
      {
        type: "numbered_list",
        heading: "Hilda Taba: Grassroots Approach — 7 Major Steps",
        items: [
          "1. Diagnosis of learners' needs.",
          "2. Formulation of learning objectives.",
          "3. Selection of learning contents.",
          "4. Organization of learning contents.",
          "5. Selection of learning experiences.",
          "6. Organization of learning experiences.",
          "7. Determination of what to evaluate and the means of doing it."
        ]
      },
      {
        type: "bullet_list",
        heading: "Gaylen Saylor and William Alexander: Curriculum Model",
        items: [
          "Described curriculum as 'a plan for providing sets of learning opportunities to achieve broad educational goals and related specific objectives for an identifiable population served by a single school center.'",
          "4 Steps: goals, objectives, and domains; curriculum designing; curriculum implementation; evaluation."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: HISTORICAL & SOCIOLOGICAL FOUNDATIONS OF CURRICULUM
  // ==========================================
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Historical & Sociological Foundations of Curriculum",
    topicTitle: "Historical Foundations, Part 1",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Historical Foundations of Curriculum",
        content: "The chronological development of curriculum along a timeline."
      },
      {
        type: "bullet_list",
        heading: "Franklin Bobbitt, Werret Charters, William Kilpatrick, Harold Rugg",
        items: [
          "Franklin Bobbitt: started the curriculum development movement; viewed curriculum as a science emphasizing students' needs; believed curriculum prepares learners for adult life; held that objectives and activities should be grouped together once tasks are clarified.",
          "Werret Charters: like Bobbitt, held that curriculum is science emphasizing students' needs; believed objectives and activities should match, with subject matter/content relating to objectives.",
          "William Kilpatrick: curricula are purposeful, child-centered activities aimed at child development and growth; introduced the project method, where teacher and student plan activities together; curriculum develops social relationships and small-group instruction.",
          "Harold Rugg: curriculum should develop the whole child; stated objectives and related learning activities should produce outcomes; emphasized social studies and suggested teachers plan curriculum in advance."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Historical & Sociological Foundations of Curriculum",
    topicTitle: "Historical Foundations, Part 2",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Hollis Caswell, Ralph Tyler, Hilda Taba, Peter Oliva",
        items: [
          "Hollis Caswell: curriculum is organized around social functions, themes of organized knowledge, and learners' interests; curriculum, instruction, and learning are interrelated; curriculum is a set of experiences, with subject matter developed around social functions and learners' interests.",
          "Ralph Tyler: curriculum is a science and an extension of the school's philosophy, based on students' needs and interests; always related to instruction, with subject matter organized in terms of knowledge, skills, and values; emphasizes problem solving and aims to educate generalists, not specialists.",
          "Hilda Taba: contributed to the theoretical and pedagogical foundations of concept development and critical thinking in the social studies curriculum; helped lay the foundation for a diverse student population.",
          "Peter Oliva: described curriculum change as a cooperative endeavor; teachers and curriculum specialists constitute the professional core of planners; significant improvement is achieved through group activity."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Historical & Sociological Foundations of Curriculum",
    topicTitle: "Sociological Foundations of Curriculum",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Sociological Foundations",
        content: "Issues from society — including groups and institutions in the culture and their contribution to education — shape curriculum. Society is viewed as a source of change, schools as agents of change, and knowledge as an agent of change."
      },
      {
        type: "bullet_list",
        heading: "John Dewey, Alvin Toffler, Paolo Freire, John Goodlad, William Pinar",
        items: [
          "John Dewey: considered schools and civil society the two fundamental elements needing attention and reconstruction to encourage experimental intelligence and plurality.",
          "Alvin Toffler: wrote the book Future Shock; believed knowledge should prepare students for the future, and suggested that technology might one day let parents teach a prescribed curriculum from home (home schooling).",
          "Paolo Freire: viewed education as a means of shaping the person and society through critical reflection and 'conscientization,' using questioning and problem-posing to raise students' consciousness.",
          "John Goodlad: organized curriculum around the needs of society and students; sought to reduce student conformity in the classroom; emphasized active learning and critical thinking; involved students in planning curriculum content and instructional activities; stressed aligning content with standards.",
          "William Pinar: sought to broaden the conception of curriculum to enrich practice and understand the nature of the educational experience; held that curriculum involves multiple disciplines and should be studied from historical, racial, gendered, phenomenological, postmodern, theological, and international perspectives."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Historical & Sociological Foundations of Curriculum",
    topicTitle: "Oliva's 10 Axioms for Curriculum Designers",
    pdfPageRef: "PDF Page 6-7",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Oliva's 10 Axioms",
        content: "Peter Oliva created 10 axioms — principles that curriculum designers can use as guidelines or a frame of reference."
      },
      {
        type: "table",
        heading: "The 10 Axioms for Curriculum Designers",
        tableData: {
          headers: ["Axiom", "Explanation"],
          rows: [
            ["1. Curriculum change is inevitable, necessary, and desirable.", "Societal development and the knowledge revolution come so fast that they require new curriculum designs."],
            ["2. Curriculum is the product of its time.", "Curriculum responds to changes that come from current social forces, educational reforms, etc."],
            ["3. Curriculum changes made earlier can exist concurrently with newer curriculum changes.", "Curriculum development changes can co-exist and overlap."],
            ["4. Curriculum change depends on the people who will implement the change.", "It is best that teachers design and own the changes."],
            ["5. Curriculum change is a cooperative group activity.", "Group decisions in some aspects of curriculum development are suggested; consultations with stakeholders, when possible, add a sense of ownership."],
            ["6. Curriculum development is a decision-making process made from choices of alternatives.", "A curriculum developer/designer must decide what content to teach and what methods or strategies to use."],
            ["7. Curriculum development is an ongoing process.", "As the needs of learners change, as society changes, and as new knowledge and technology appear, the curriculum must change."],
            ["8. Curriculum development is more effective if it is a comprehensive process rather than piecemeal.", "A curriculum design must be based on careful planning, with intended outcomes clearly established."],
            ["9. Curriculum development is more effective when it follows a systematic process.", "A curriculum design should always be SMART."],
            ["10. Curriculum development starts from where the curriculum is.", "An existing design is a good starting point for any teacher who plans to enhance and enrich a curriculum."]
          ]
        }
      }
    ]
  },

  // ==========================================
  // DAY 3: CURRICULUM DESIGN, IMPLEMENTATION & EVALUATION
  // ==========================================
  {
    pageNumber: 14,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Design & the Behavioral / Content Components",
    pdfPageRef: "PDF Page 7-8",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Curriculum Design",
        content: "The organization of curriculum components. It can take the form of a lesson plan (miniscule curriculum), a syllabus, a unit plan, or a course design."
      },
      {
        type: "bullet_list",
        heading: "I & II: Behavioral Components and Content / Subject Matter",
        items: [
          "Behavioral Components: objectives should be SMART — Specific, Measurable, Attainable, Result-oriented, and Time-bound.",
          "Content / Subject Matter: subject matter should be relevant to the outcomes of the curriculum."
        ]
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Teaching & Learning Methods: Cooperative, Independent & Competitive",
    pdfPageRef: "PDF Page 8",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "III & IV: Teaching and Learning Methods",
        items: [
          "These are the activities where learners derive experiences.",
          "Cooperative Learning Activities: allow students to work together; students are guided to find solutions to problems on their own, with the teacher acting as guide.",
          "Independent Learning Activities: allow learners to develop personal responsibility and enhance their degree of independence to learn how to learn; more appropriate for fast learners.",
          "Competitive Activities: students test their competencies against one another in a healthy manner, pushing performance to a maximum, which can help them become 'survivors' in a competitive world."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Common Teaching & Learning Methods",
    pdfPageRef: "PDF Page 8",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Common Teaching & Learning Methods",
        tableData: {
          headers: ["Method", "Proponent(s)", "Main Features", "Success Rate"],
          rows: [
            ["Direct Instruction", "Barak Rosenshine Model", "The traditional method of teaching. Begins with stating objectives (1), review (2), presenting new materials (3), explain (4), practice (5), guide (6), check for understanding (7), provide feedback (8), assess performance (9), and review and test (10).", "80 percent or more during the practice session"],
            ["Guided Instruction", "Madeline Hunter Model", "Lecture begins with review (1) of the previous lesson, followed by anticipatory set (2) to gain students' interest and stating of objectives (3), input (4). Uses modeling (5) (teacher demonstration), check for understanding (6), guided practice (7) (teacher-assisted activity), and ends with independent practice (8) (students do the task on their own).", "Performance based on independent practice"],
            ["Mastery Learning", "JH Block and Lorin Anderson Model", "Begins with clarification of goals (objectives), presents the lesson to the whole group, gives a pre-test (formative, no-fault basis), assigns an enrichment activity to the mastery group and a corrective drill to the non-mastery group, gives a post-test to the non-mastery group, and reteaches if not successful.", "Pre-test: mastery group at 80% based on score, plus a non-mastery group. Post-test: at least 75% of students reach a success rate."],
            ["Systematic Instruction", "Thomas Good and Jere Brophy", "Begins with review (using homework and previous exercises), development (promotes understanding and provides controlled practice), assess comprehension (questions plus controlled practice), seatwork (uninterrupted, involving everyone, sustaining momentum), accountability (checking students' work), regular homework with review problems, and special weekly reviews to maintain and enhance learning.", "Provide weekly reviews"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Selecting a Teaching-Learning Method & Assessment",
    pdfPageRef: "PDF Page 8-9",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "4 Criteria in Selecting a Teaching-Learning Method",
        items: [
          "1. Adequacy: refers to the actual learning space or classroom (space, light, ventilation, available technology).",
          "2. Suitability: relates to planned activities, considering the chronological and developmental ages of learners.",
          "3. Efficiency: refers to operational and instructional effectiveness.",
          "4. Economy: refers to cost-effectiveness."
        ]
      },
      {
        type: "callout",
        heading: "V. Assessment / Evaluation",
        content: "Learning occurs most effectively when students receive feedback."
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Implementing Curriculum Daily: DepEd Order No. 70, s. 2012",
    pdfPageRef: "PDF Page 9",
    readTime: "2 min read",
    sections: [
      {
        type: "callout",
        heading: "DepEd Order No. 70, s. 2012",
        content: "Teachers of all public elementary and secondary schools will NOT be required to prepare detailed lesson plans. However, teachers with less than 2 years of teaching experience shall be required to prepare Daily Lesson Plans."
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Design Models: Subject-Centered",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Subject-Centered Curriculum Design Models",
        items: [
          "Subject Design: stresses content so heavily that it can forget students' natural tendencies, interests, and experiences; its drawback is that learning can become compartmentalized.",
          "Discipline Design: discipline refers to the specific knowledge and methods scholars use to study a field; curriculum moves from subject-centered to discipline-centered as students mature and move toward a career path or discipline.",
          "Correlation Design: a core, correlated curriculum design that links separate subjects to reduce fragmentation; subjects relate to one another while each maintains its own identity.",
          "Broadfield Design: made to prevent compartmentalization of subjects and integrate content that is related to one another."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Design Models: Learner-Centered & Problem-Centered",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Learner-Centered Curriculum Design Models",
        items: [
          "Child-Centered Design: anchored on the needs and interests of the child.",
          "Experience-Centered Design: the experiences of learners become the starting point of the curriculum.",
          "Humanistic Design: the development of self is the ultimate objective of learning."
        ]
      },
      {
        type: "bullet_list",
        heading: "Problem-Centered Curriculum Design Models",
        items: [
          "Draws on social problems, needs, interests, and abilities of the learners.",
          "Life-Situation Design: uses the immediate problems of society and students' existing concerns.",
          "Core Problem Design: centers on general education, with problems based on common human activities (common problems)."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Mapping and Curriculum Quality Audit (CQA)",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Curriculum Mapping",
        content: "A model for designing, refining, upgrading, and reviewing the curriculum, resulting in a framework that provides form, focus, and function. It addresses gaps or repetitions in the curriculum and connects all initiatives from instruction, pedagogies, assessment, and professional development."
      },
      {
        type: "bullet_list",
        heading: "Curriculum Quality Audit (CQA)",
        items: [
          "A form of curriculum mapping.",
          "A process of mapping the curricular program or syllabus against established standards.",
          "Requires a written curriculum and a tested curriculum linked to both the taught and written curricula.",
          "Identifies gaps and under- or over-representation in the curriculum relative to standards.",
          "Ensures alignment of learning outcomes, activities, and assessment to the standards.",
          "Achieves an internationally comparable curriculum, since standards become the basis of curriculum analysis."
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Standards Used in CQA (CHED Memorandum Orders)",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Standards Used in Curriculum Quality Audit",
        items: [
          "Philippine Professional Standards for Teachers (PPST): DepEd Order No. 42, s. 2017.",
          "CMO 74, s. 2017 – Bachelor of Elementary Education.",
          "CMO 75, s. 2017 – Bachelor of Secondary Education (majors in English, Mathematics, Science, Filipino, Social Studies, Values Education).",
          "CMO 76, s. 2017 – BECEd, Bachelor of Early Childhood Education.",
          "CMO 77, s. 2017 – BSNEd, Bachelor of Special Needs Education.",
          "CMO 78, s. 2017 – BTLEd, Bachelor of Technology and Livelihood Education.",
          "CMO 79, s. 2017 – BTVTEd, Bachelor of Technical-Vocational Teacher Education.",
          "CMO 80, s. 2017 – BPEd, Bachelor of Physical Education.",
          "CMO 81, s. 2017 – BSESS, Bachelor of Science in Exercise and Sports Sciences (not a teaching degree).",
          "CMO 82, s. 2017 – BCAEd, Bachelor of Culture and Arts Education.",
          "CMO 83, s. 2017 – Post-Baccalaureate Diploma in Alternative Learning System."
        ]
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Implementation as a Change Process: Kurt Lewin",
    pdfPageRef: "PDF Page 9-10",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Kurt Lewin: Force Field Theory",
        content: "Kurt Lewin, the father of social psychology, developed the Force Field Theory to explain the curriculum change process, weighing driving forces against restraining forces around a point of equilibrium."
      },
      {
        type: "table",
        heading: "Driving Forces vs. Restraining Forces",
        tableData: {
          headers: ["Driving Force", "Restraining Force"],
          rows: [
            ["Government Intervention", "Fear of the Unknown"],
            ["Society's Value", "Negative Attitude to Change"],
            ["Technological Changes", "Tradition Values"],
            ["Knowledge Explosion", "Limited Resources"],
            ["Administrative Support", "Obsolete Equipment"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Categories of Curriculum Change",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "5 Categories of Curriculum Change",
        items: [
          "Substitution: replaces the present curriculum with a new one (a complete overhaul).",
          "Alteration: introduces minor changes or modifications to the current curriculum.",
          "Restructuring: introduces major modifications to the current curriculum.",
          "Perturbation: changes that happen within a fairly short time.",
          "Value Orientation: responds to a shift in emphasis within the school's vision/mission."
        ]
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Stakeholders in Curriculum Implementation",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Stakeholders",
        items: [
          "Teachers: the curricularists who plan, design, teach, implement, and evaluate the curriculum.",
          "Learners: the core of the curriculum.",
          "School Leaders / Administrators: the curriculum managers.",
          "Parents: significant school partners.",
          "Community: serves as a curriculum resource and learning environment.",
          "Other Stakeholders: government agencies (LGUs, DepEd, TESDA, CHED, PRC, CSC) and non-government agencies."
        ]
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 3,
    dayTitle: "Day 3: Curriculum Design, Implementation & Evaluation",
    topicTitle: "Curriculum Evaluation: Approaches & Process",
    pdfPageRef: "PDF Page 10",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "2 Ways of Looking at Curriculum Evaluation",
        items: [
          "Curriculum Program Evaluation: focuses on the overall aspect of the curriculum — the big curriculum program.",
          "Curriculum Program Component Evaluation: includes separate evaluation of (a) achieved learning outcomes, (b) curriculum process, and (c) instructional materials."
        ]
      },
      {
        type: "table",
        heading: "The Process of Curriculum Evaluation",
        tableData: {
          headers: ["Process", "Reason for Curriculum Evaluation"],
          rows: [
            ["Needs Assessment", "Identifies the strengths and weaknesses of an existing curriculum."],
            ["Monitoring", "Tells whether the designed or implemented curriculum can produce, or is producing, the desired results."],
            ["Terminal Assessment", "Guides whether the results have equaled or exceeded the standards."],
            ["Decision Making", "Provides information necessary for teachers, school managers, and curriculum specialists to make policy recommendations."]
          ]
        }
      }
    ]
  }
];