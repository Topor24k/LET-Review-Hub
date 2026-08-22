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

export const INCLUSIVE_EDUCATION_PAGES: LessonPage[] = [
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Inclusive Education vs Special Needs Education & Disability Paradigms",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "comparison",
        heading: "Inclusive Education vs Special Needs Education",
        items: [
          "Inclusive Education: An education that includes non-disabled and people with disability learning together in mainstream schools, colleges, and universities. Education is truly inclusive if it can actually benefit ALL learners, not only learners with disability.",
          "Special Needs Education: A customized instructional program or service designed to meet the diverse needs of an individual with disability. The term 'Special Needs Education' shall replace the term 'Special Education (SPED)'."
        ]
      },
      {
        type: "numbered_list",
        heading: "Classification by World Health Organization (WHO)",
        items: [
          "1. Impairment (body): Refers to physical or mental defect or the loss or reduced function of a body part or organ.",
          "2. Disability (tasks): Refers to a person-level limitation in physical and psycho-cognitive activities, or an impairment which limits the ability to perform certain tasks. It is the result of an impairment.",
          "3. Handicap (situation): A problem encountered during interaction with the environment."
        ]
      },
      {
        type: "table",
        heading: "Paradigms of Disability: Medical Model vs Social Model",
        tableData: {
          headers: ["Aspect", "Medical Model", "Social Model"],
          rows: [
            ["Cause of Disability", "Intrinsic individual impairment", "Societal barriers"],
            ["View of Disability", "Deficiency; Negative", "A difference; Neutral"],
            ["Terms used", "Disease, dysfunctional, disorder", "Barriers, exclusion"],
            ["Solution", "Cure or fix", "Remove barriers, adjust environment"],
            ["Responsible", "Medical professionals", "Everyone"],
            ["Emphasis", "Medical treatment or rehabilitation", "Social inclusion and equality"]
          ]
        }
      },
      {
        type: "callout",
        heading: "Reasonable Accommodation",
        content: "Modifications or adjustments made, not imposing undue burden, that enable individuals with disabilities to perform their duties, access services, or participate fully in activities."
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Legal Bases for Special & Inclusive Education",
    pdfPageRef: "PDF Page 1-2",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Legal Bases and Other Related Laws in Special Education",
        items: [
          "1. Education for All Handicapped Children Act (EAHCA) → Individuals with Disabilities in Education Act (IDEA): Guaranteed a Free Appropriate Public Education (FAPE) to all disabled children.",
          "2. Salamanca Statement and Framework for Action on Special Needs Education (June 1994): Affirms the right to education of EVERY individual regardless of individual differences, within the REGULAR education system, and the right of children with special educational needs to receive whatever extra support they may require to ensure their effective education.",
          "3. Batas Pambansa Bilang 344 ('The Accessibility Law'): An Act to Enhance the Mobility of Disabled Persons.",
          "4. Batas Pambansa Bilang 232 (Education Act of 1982): The State shall promote the right of every individual to relevant quality education regardless of sex, age, breed, socio-economic status, physical and mental condition, social and ethnic origin, political and other affiliations."
        ]
      },
      {
        type: "bullet_list",
        heading: "Republic Act No. 7277 – Magna Carta for Disabled Persons",
        items: [
          "Outlines the numerous rights that a disabled person is entitled to, such as education, health, social service, telecommunications, and others.",
          "Amended by RA 9442, which grants at least twenty percent (20%) discount in all basic services for PWDs.",
          "RA 10524 (Expanded Positions for PWDs Law): Reserves 1% of government positions for PWDs and incentivizes private corporations with over 100 employees whose workforce comprises 1% PWDs.",
          "RA 10070: A law that creates the Persons with Disability Affairs Office (PDAO)."
        ]
      },
      {
        type: "callout",
        heading: "RA 11650 – Instituting a Policy of Inclusion and Services for Learners with Disabilities in Support of Inclusive Education Act",
        content: "All public schools nationwide are required to identify learners with special needs and provide these learners with free basic and quality education. Also mandates that all cities and municipalities have at least one Inclusive Learning Resource Center (ILRC) — a physical or virtual center that provides support and related services to teaching and learning of learners with disabilities."
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Types of Disabilities: Autism & Visual Impairment",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "The IDEA provides definitions of 13 disability categories."
      },
      {
        type: "bullet_list",
        heading: "1. Autism",
        items: [
          "Known as the 'triad of impairment' with: (1) impaired communication; (2) impaired social skills; and (3) a restricted and repetitive way of being-in-the-world."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Visual Impairment Including Blindness",
        items: [
          "Any kind of non-correctable vision loss, whether complete blindness or partial vision loss.",
          "Causes of visual impairment among children: Amblyopia (lazy eye), Strabismus (misaligned or crossed eyes), birth defects, eye or brain injuries."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Hearing Impairment, Deafness & Emotional Disturbance",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "3. Hearing Impairment",
        items: [
          "A problem with damage to one or more parts of the ear.",
          "Conductive Hearing Loss: Caused by problems with the outer/middle ear, ear canal, eardrum, or ossicles; blockage makes sound seem quieter.",
          "Sensorineural Hearing Loss: Result of a damaged inner ear or auditory nerve. Permanent hearing loss.",
          "Mixed Hearing Loss: Occurs when a person has both conductive and sensorineural hearing impairment.",
          "Central Hearing Loss: Happens when the cochlea is working properly but some parts of the brain are not.",
          "Auditory Processing Disorder: Not a hearing loss — a person with this can easily hear well in a quiet environment."
        ]
      },
      {
        type: "callout",
        heading: "4. Deafness",
        content: "Hearing impairment so severe that a child is impaired in processing linguistic information through hearing, with or without amplification, that adversely affects a child's educational performance."
      },
      {
        type: "bullet_list",
        heading: "5. Emotional Disturbance",
        items: [
          "Anxiety disorders",
          "Bipolar disorder",
          "Obsessive-compulsive disorder (OCD)",
          "Eating disorders: Anorexia Nervosa, Bulimia Nervosa, Pica",
          "Psychotic disorders — Schizophrenia: A serious mental illness that affects how a person thinks, feels, and behaves; people with schizophrenia may seem as though they have lost touch with reality."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Intellectual Disability, Learning Disabilities, Multiple Disabilities & Deaf-Blindness",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "6. Intellectual Disability",
        content: "Once termed as Mental Retardation, is characterized by poor or below average intellectual capacity."
      },
      {
        type: "table",
        heading: "Classification of Intellectual Disability by IQ",
        tableData: {
          headers: ["Classification", "IQ Range"],
          rows: [
            ["Mild", "50-55 to 70-75"],
            ["Moderate", "35-49 to 50-55"],
            ["Severe", "20-25 to 34-39"],
            ["Profound", "Below 20-25"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "7. Learning Disabilities",
        items: [
          "Significantly reduced ability to understand new or complex information, to learn new skills (impaired intelligence), with a reduced ability to cope independently (impaired social functioning), which started before adulthood.",
          "Dyscalculia: A specific learning disability that affects a person's ability to understand numbers and learn math facts.",
          "Dysgraphia: A specific learning disability that affects a person's handwriting ability and fine motor skills.",
          "Dyslexia: A specific learning disability that affects reading and related language-based processing skills."
        ]
      },
      {
        type: "callout",
        heading: "8. Multiple Disabilities",
        content: "Concomitant (simultaneous) impairments (such as intellectual disability-blindness, intellectual disability-orthopedic impairment, etc.), the combination of which causes such severe educational needs that they cannot be accommodated in a special education program solely for one of the impairments. NOTE: The term does not include deaf-blindness."
      },
      {
        type: "callout",
        heading: "9. Deaf-Blindness",
        content: "Simultaneous hearing and visual impairments, the combination of which causes such severe communication and other developmental and educational needs."
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Orthopedic Impairment, Speech/Language Impairment, TBI & Other Health Impairments",
    pdfPageRef: "PDF Page 4-5",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        content: "10. Orthopedic Impairment: Problems in the bones, muscles, and joints; includes impairments caused by a congenital anomaly (e.g., clubfoot, absence of some member), impairments caused by disease (e.g., poliomyelitis, bone tuberculosis), and impairments from other causes (e.g., cerebral palsy, amputations, and fractures or burns that cause contractures)."
      },
      {
        type: "bullet_list",
        heading: "Physical Disabilities (limitation to perform basic physical activities)",
        items: [
          "Brittle Bone Disease: The abnormal fragility of the bones.",
          "Cerebral Palsy: Characterized by involuntary jerking movements, a poor sense of balance, spastic muscles, and speech impairment.",
          "Muscular Dystrophy: A neuromuscular condition characterized by deterioration and wasting of muscle fibers.",
          "Spina Bifida: A defect due to incomplete formation of the spine and spinal cord.",
          "Friedreich's Ataxia: A 'debilitating, life-shortening, degenerative neuromuscular disorder.' May cause loss of coordination in arms and legs, fatigue, visual impairment, hearing loss, slurred speech, aggressive scoliosis, diabetes, and serious heart conditions.",
          "Dwarfism: Average height of 4 feet, with a delay in the development of motor skills."
        ]
      },
      {
        type: "callout",
        heading: "11. Speech or Language Impairment",
        content: "A communication disorder such as stuttering, impaired articulation, a language impairment, or a voice impairment that adversely affects a child's educational performance."
      },
      {
        type: "callout",
        heading: "12. Traumatic Brain Injury",
        content: "An acquired injury to the brain caused by an external physical force, resulting in total or partial functional disability or psychosocial impairment, or both, that adversely affects a child's educational performance."
      },
      {
        type: "bullet_list",
        heading: "13. Other Health Impairments — Attention Deficit Hyperactivity (ADHD)",
        items: [
          "Mental disorder that affects one's capacity to pay attention and behave.",
          "Inattentive Type: May appear daydreamy, have difficulty following instructions, struggle with organization and staying on task, and lose things frequently.",
          "Hyperactive-Impulsive Type: May be constantly fidgeting, talking excessively, interrupting others, having difficulty taking turns, and acting without thinking.",
          "Combined Type: Combination of inattentive and hyperactive-impulsive."
        ]
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Mainstreaming, IEP, Accommodations & Co-Teaching Models",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "comparison",
        heading: "Mainstreaming vs Inclusion",
        items: [
          "Mainstreaming: A student who is mainstreamed is expected to meet the same academic standards as every other student.",
          "Inclusion: In inclusion, the student is not expected to meet these same standards."
        ]
      },
      {
        type: "callout",
        heading: "Individualized Education Plan (IEP)",
        content: "Create personalized learning plans for children with special needs."
      },
      {
        type: "bullet_list",
        heading: "IEP Components",
        items: [
          "Goals: Specific aspirations for the child's progress within the school year.",
          "Strategies: Methods to address their strengths, weaknesses, and learning styles.",
          "Support team: Parents, teachers, therapists, and caregivers involved in the child's education."
        ]
      },
      {
        type: "comparison",
        heading: "Instructional Accommodations, Modifications, and Adaptations",
        items: [
          "Accommodations: Changes that teachers do to allow learners with disabilities to access the general education curriculum and demonstrate their understanding without changing the content, academic standards, or curriculum.",
          "Modification: Involves altering the content, academic standards, or curriculum by lowering the level of difficulty or complexity to aid the learning of learners with disabilities.",
          "Adaptation: A more significant change in the content, process, products, and learning environment compared to modification and accommodations."
        ]
      },
      {
        type: "bullet_list",
        heading: "Co-Teaching Models",
        items: [
          "One Teach, One Observe: One teacher leads the lesson while the other observes specific student behaviors or gathers data as agreed upon beforehand; both collaborate to analyze observations and adjust instruction.",
          "One Teach, One Drift: One teacher teaches while the other provides assistance to the learners.",
          "Parallel Teaching: The class is divided into two groups, and both teachers simultaneously deliver the same lesson to each group.",
          "Station Teaching: Students rotate through different stations with each teacher presenting a specific part of the topic.",
          "Alternative Teaching: One teacher teaches the larger group, while the other teaches the smaller group. The larger group completes the lesson; the smaller group either completes the lesson or completes tasks at a different level.",
          "Team Teaching: Both teachers actively participate in lesson delivery, providing complementary inputs, monitoring student progress, and facilitating groups."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Action Research: ORPA Cycle & 4Cs of Quality",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Action Research",
        content: "A term coined by Kurt Lewin in 1944. Is about ACTION: taking action to improve practice, and RESEARCH: finding things out and coming to a new understanding that creates new knowledge. Is concerned with everyday practical problems experienced by teachers, rather than the theoretical problems defined by pure researchers (Illiot, 1993)."
      },
      {
        type: "text",
        heading: "Nelson's (2014) Action Research Cycle — ORPA",
        content: "A circular diagram showing the action research cycle labeled 'ORPA' at center, with arrows flowing in sequence: ACT → OBSERVE → REFLECT → PLAN → (back to ACT)."
      },
      {
        type: "bullet_list",
        heading: "Action Research Is:",
        items: [
          "Practical, as it involves making changes to practice.",
          "Theoretical, as it is informed by theory and can generate new insights.",
          "Concerned with changes and improvement."
        ]
      },
      {
        type: "numbered_list",
        heading: "4Cs of Quality Action Research",
        items: [
          "1. Credible: It is rigorous, transparent, and consistent.",
          "2. Communicable: When it is consumable and accessible.",
          "3. Contributory: When it is relevant, original, and generalizable.",
          "4. Conforming: When it is aligned with regulations, is ethical, and sustainable."
        ]
      },
      {
        type: "bullet_list",
        heading: "Core Characteristics of Action Research",
        items: [
          "Systematic: Like any form of research, it follows a system.",
          "Rigorous: Strictly adheres to the rules of empirical studies.",
          "Reflective: Follows a continuous reflection and action.",
          "Situational: Specific to the location (school) and circumstances (teaching-learning, etc.).",
          "Participative: Teachers and learners are co-researchers.",
          "Future-oriented: Seeks solutions to current problems for future improvement."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Self-Study: Teacher Strategies for Autism, Visual & Hearing Impairment",
    pdfPageRef: "PDF Page 6 (For Personal Study Only)",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "1. Autism — Teachers Can Help Through:",
        items: [
          "Minimize the senses used by the students with ASD, because these children have difficulty concentrating.",
          "Make use of photos, graphs, models, and other visuals.",
          "Follow a thorough and programmed routine.",
          "Use concrete and simple language.",
          "Teach them to communicate and associate with others.",
          "Treat them with dignity and respect."
        ]
      },
      {
        type: "numbered_list",
        heading: "2. Visual Impairment Including Blindness — Classroom Needs",
        items: [
          "To be seated near the board, whiteboard, or visual aids.",
          "To wear eyeglasses, a magnifier, or extra lighting.",
          "To be given large printed materials for reading or an audiobook.",
          "Someone's assistance in taking notes.",
          "More time to finish a task or comply with assignments."
        ]
      },
      {
        type: "numbered_list",
        heading: "3. Hearing Impairment — Teachers May:",
        items: [
          "Use visual cues.",
          "Use sign language (if qualified).",
          "Use eye contact.",
          "Speak slowly and clearly without shouting.",
          "Demonstrate or show what you want them to do.",
          "Use paper and pen to communicate.",
          "Use facial and body expressions."
        ]
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Self-Study: Teacher Strategies for Intellectual Disability, Physical Disabilities & ADHD",
    pdfPageRef: "PDF Page 6-7 (For Personal Study Only)",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "4. Intellectual Disability — Tips for Teachers",
        items: [
          "Teach the child one skill or concept at a time.",
          "Do one-on-one teaching with the child.",
          "Use physical and verbal prompting to guide and correct responses.",
          "Assist the child in doing simple tasks when necessary.",
          "Provide the child with hands-on learning."
        ]
      },
      {
        type: "numbered_list",
        heading: "5. Physical Disabilities — Considerations",
        items: [
          "Make the classroom free from obstruction so the child can freely move and roam around.",
          "Provide a wheelchair or accessible chair, desk, or table.",
          "Consider the child's punctuality and attendance.",
          "Give extensions for tests and quizzes.",
          "Provide an exemption for tiring or heavy physical activities or tasks.",
          "Give tasks that the child can do or perform."
        ]
      },
      {
        type: "numbered_list",
        heading: "6. Attention Deficit Hyperactivity (ADHD) — Classroom Strategies",
        items: [
          "Give the child a break time to move around and play.",
          "Be consistent with the classroom rules.",
          "Place the child in front of your desk so he/she is not distracted by other students.",
          "Avoid placing the child near the door or window.",
          "Free the child from distractions while taking tests.",
          "Give the child and the child's parents frequent feedback about his/her progress.",
          "Reward the child for good behavior.",
          "Seek help and communicate with parents regularly.",
          "Give the child enough tasks to accomplish every day."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Inclusive Practice, Classroom Strategies & IEP Development Process",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Inclusive Practice",
        content: "Attitudes and methods that ensure all learners can access mainstream education. Students receive their education in the least restrictive environment (LRE)."
      },
      {
        type: "bullet_list",
        heading: "Inclusive Classroom Strategies",
        items: [
          "Use a variety of instructional materials.",
          "Ensure access to academic curricular content.",
          "Apply universal design for learning."
        ]
      },
      {
        type: "bullet_list",
        heading: "Individualized Education Plan — Delivery",
        items: [
          "Mostly in regular classrooms: Inclusion is prioritized, with adjustments made for individual needs.",
          "Special classrooms: Available for children requiring more intensive intervention and focused instruction."
        ]
      },
      {
        type: "numbered_list",
        heading: "Individualized Education Plan — Development Process",
        items: [
          "1. Referral and evaluation: Identifying learning challenges and potential special needs.",
          "2. IEP development: Collaborative planning by teachers, parents, and specialists.",
          "3. Implementation: Putting the plan into action with ongoing monitoring and adjustments."
        ]
      },
      {
        type: "numbered_list",
        heading: "Guidelines for an Effective Inclusive Classroom Environment",
        items: [
          "1. Seating arrangements: Consider accessibility and inclusivity in classroom layout.",
          "2. Student ownership: Reflect student identities and achievements in classroom decorations.",
          "3. Organization: Ensure accessibility of materials and engaging activities for all learners.",
          "4. Materials and accommodations: Use appropriate and adapted materials, providing necessary technology and communication devices.",
          "5. Adult language and tone: Foster positive and inclusive verbal and non-verbal interactions between all."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 1,
    dayTitle: "Inclusive Education",
    topicTitle: "Action Research Definition & 4Cs Detailed Breakdown",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Action Research (Corey, 1953)",
        content: "A process through which practitioners, like teachers, study their own practice to solve their personal or professional practical problems."
      },
      {
        type: "quote",
        content: "Action research is a cyclical, recursive process of observing, reflecting, acting, evaluating, modifying, and moving in a new direction, known as action-reflection (McNiff & Whitehead, 2006)."
      },
      {
        type: "table",
        heading: "4Cs of Quality Action Research — Detailed Breakdown",
        tableData: {
          headers: ["C", "Main Definition", "Sub-Components"],
          rows: [
            ["1. Credible", "Rigorous, transparent, and consistent.", "1.1 Rigorous – context-responsive, internally valid and reliable\n1.2 Transparent – when its method can be examined or replicated based on the researcher's truthful documentation\n1.3 Consistent – when its components are logically aligned and make a coherent set of arguments"],
            ["2. Communicable", "Consumable and accessible.", "2.1 Consumable – when research is structured, understandable, and readable to the group who is supposed to use it\n2.2 Accessible – when the research results are easily available to the group being studied"],
            ["3. Contributory", "Relevant, original, and generalizable.", "3.1 Relevant – when it is interesting, applicable, and current\n3.2 Original – when it has an original idea, uses an original procedure, and produces an original result\n3.3 Generalizable – when the research is externally valid"],
            ["4. Conforming", "Aligned with regulations, ethical, and sustainable.", "4.1 Aligned with regulations – when it is compliant with current applicable regulations (e.g., plagiarism, data integrity)\n4.2 Ethical – when it is morally justifiable, open, and supports equal opportunities\n4.3 Sustainable – when it promotes further scientific inquiry and/or sound policy/program recommendation"]
          ]
        }
      }
    ]
  }
];