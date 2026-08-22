import { ExamQuestion } from '../../types';

export const INCLUSIVE_EDUCATION_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Under the Salamanca Statement and Framework for Action (UNESCO, 1994), what is the foundational principle of inclusive education?",
    options: [
      { key: 'A', text: 'All children should learn together, wherever possible, regardless of any difficulties or differences they may have' },
      { key: 'B', text: 'Children with disabilities must be permanently isolated in separate residential institutions' },
      { key: 'C', text: 'Only children with mild physical disabilities are allowed in regular schools' },
      { key: 'D', text: 'Special education is purely optional and should only be offered in private schools' }
    ],
    correctAnswer: 'A',
    explanation: 'The Salamanca Statement established the global mandate that regular schools with an inclusive orientation are the most effective means of combating discriminatory attitudes and achieving Education for All.',
    topicRef: '1.0 Global Frameworks for Inclusion'
  },
  {
    id: 2,
    question: "In the Philippines, which landmark law enacted in 2022 institutes a policy of inclusion and services for learners with disabilities in support of the Inclusive Education Act?",
    options: [
      { key: 'A', text: 'Republic Act No. 11650' },
      { key: 'B', text: 'Republic Act No. 7836' },
      { key: 'C', text: 'Republic Act No. 4670' },
      { key: 'D', text: 'Republic Act No. 1425' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 11650 mandates the establishment of Inclusive Learning Resource Centers (ILRCs) and ensures free, appropriate public education for learners with disabilities.',
    topicRef: '1.0 Philippine Inclusive Education Laws'
  },
  {
    id: 3,
    question: "What is the key distinction between 'Accommodations' and 'Modifications' in special and inclusive education?",
    options: [
      { key: 'A', text: 'Accommodations change HOW a student learns (e.g., extra time, large font) without changing learning standards; Modifications change WHAT a student is expected to learn (curriculum complexity/standards altered)' },
      { key: 'B', text: 'Accommodations are illegal; modifications are mandatory' },
      { key: 'C', text: 'Accommodations are only for gifted students' },
      { key: 'D', text: 'There is no difference between them' }
    ],
    correctAnswer: 'A',
    explanation: 'Accommodations provide access adjustments without lowering curriculum standards, whereas modifications adapt the curriculum objectives and expectations to match the learner\'s developmental level.',
    topicRef: '3.0 Accommodations vs Modifications'
  },
  {
    id: 4,
    question: "In Universal Design for Learning (UDL, CAST), what are the three core principles?",
    options: [
      { key: 'A', text: 'Multiple Means of Representation, Multiple Means of Action and Expression, Multiple Means of Engagement' },
      { key: 'B', text: 'Reading, Writing, and Arithmetic' },
      { key: 'C', text: 'Diagnosis, Segregation, and Treatment' },
      { key: 'D', text: 'Testing, Grading, and Ranking' }
    ],
    correctAnswer: 'A',
    explanation: 'UDL provides a framework for flexible learning environments: Representation (the "what" of learning), Action & Expression (the "how"), and Engagement (the "why").',
    topicRef: '2.0 Universal Design for Learning (UDL)'
  },
  {
    id: 5,
    question: "What is an 'Individualized Education Plan' (IEP)?",
    options: [
      { key: 'A', text: 'A legally binding written document tailored for a learner with special needs, detailing present performance, measurable annual goals, services, and accommodations' },
      { key: 'B', text: 'A daily attendance sheet' },
      { key: 'C', text: 'A standard multiple-choice final exam' },
      { key: 'D', text: 'A punishment contract for unruly behavior' }
    ],
    correctAnswer: 'A',
    explanation: 'An IEP is developed collaboratively by a multidisciplinary team (teachers, SPED specialist, parents, therapists) to outline customized educational goals and services.',
    topicRef: '3.0 The IEP Process'
  },
  {
    id: 6,
    question: "What is 'Least Restrictive Environment' (LRE) under inclusive education principles?",
    options: [
      { key: 'A', text: 'The educational setting that provides a student with disabilities maximum appropriate integration with non-disabled peers to the greatest extent possible' },
      { key: 'B', text: 'A classroom with no doors or windows' },
      { key: 'C', text: 'Keeping all students at home permanently' },
      { key: 'D', text: 'An empty playground' }
    ],
    correctAnswer: 'A',
    explanation: 'LRE mandates that students with disabilities must be educated alongside their typically developing peers unless the severity of disability prevents satisfactory education with supplementary aids.',
    topicRef: '1.0 Inclusive Education Principles'
  },
  {
    id: 7,
    question: "A child displays marked difficulties with accurate and fluent word recognition, poor decoding skills, and spelling difficulties despite having normal intelligence and vision. What specific learning disability is this?",
    options: [
      { key: 'A', text: 'Dyslexia' },
      { key: 'B', text: 'Dyscalculia' },
      { key: 'C', text: 'Dysgraphia' },
      { key: 'D', text: 'Dyspraxia' }
    ],
    correctAnswer: 'A',
    explanation: 'Dyslexia is a neurobiological learning disability characterized by difficulties with phonological processing, accurate/fluent word recognition, and decoding.',
    topicRef: '4.0 Specific Learning Disabilities'
  },
  {
    id: 8,
    question: "Which learning disability is characterized by severe difficulty in understanding numbers, learning math facts, calculating arithmetic, and grasping mathematical symbols?",
    options: [
      { key: 'A', text: 'Dyscalculia' },
      { key: 'B', text: 'Dyslexia' },
      { key: 'C', text: 'Dysgraphia' },
      { key: 'D', text: 'Aphasia' }
    ],
    correctAnswer: 'A',
    explanation: 'Dyscalculia involves severe challenges with number sense, arithmetic computation, and mathematical reasoning.',
    topicRef: '4.0 Specific Learning Disabilities'
  },
  {
    id: 9,
    question: "What is 'Dysgraphia'?",
    options: [
      { key: 'A', text: 'A learning disability affecting fine motor skills and handwriting, resulting in illegible writing, inconsistent spacing, and poor spatial organization on paper' },
      { key: 'B', text: 'Inability to calculate percentages' },
      { key: 'C', text: 'Loss of hearing in one ear' },
      { key: 'D', text: 'Color blindness' }
    ],
    correctAnswer: 'A',
    explanation: 'Dysgraphia is a neurological condition that impairs the physical act of writing, fine motor coordination, and written coherence.',
    topicRef: '4.0 Specific Learning Disabilities'
  },
  {
    id: 10,
    question: "What are the two core diagnostic criteria for Autism Spectrum Disorder (ASD) according to the DSM-5?",
    options: [
      { key: 'A', text: '1) Persistent deficits in social communication and social interaction, and 2) Restricted, repetitive patterns of behavior, interests, or activities' },
      { key: 'B', text: 'High fever and stomach pain' },
      { key: 'C', text: 'Aggressive physical violence and defiance' },
      { key: 'D', text: 'Inability to walk and run' }
    ],
    correctAnswer: 'A',
    explanation: 'DSM-5 specifies ASD as characterized by persistent challenges in social communication/interaction and restricted, repetitive behaviors/sensory sensitivities.',
    topicRef: '4.0 Autism Spectrum Disorder'
  },
  {
    id: 11,
    question: "What are the three primary symptom domains of Attention-Deficit/Hyperactivity Disorder (ADHD)?",
    options: [
      { key: 'A', text: 'Inattention, Hyperactivity, and Impulsivity' },
      { key: 'B', text: 'Sadness, Lethargy, and Sleepiness' },
      { key: 'C', text: 'Vision loss, Hearing loss, and Speech loss' },
      { key: 'D', text: 'Fever, Cough, and Chills' }
    ],
    correctAnswer: 'A',
    explanation: 'ADHD presents in three presentations: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, or Combined Presentation.',
    topicRef: '4.0 ADHD & Neurodevelopmental Conditions'
  },
  {
    id: 12,
    question: "What is the 'Mainstreaming' approach compared to full 'Inclusion'?",
    options: [
      { key: 'A', text: 'Mainstreaming places students with special needs into regular classes only when they can keep up with the existing standard curriculum; Inclusion restructures the regular classroom to support all learners regardless of ability' },
      { key: 'B', text: 'Mainstreaming is illegal' },
      { key: 'C', text: 'Mainstreaming means swimming classes only' },
      { key: 'D', text: 'There is no difference' }
    ],
    correctAnswer: 'A',
    explanation: 'In mainstreaming, the child must adapt to the standard classroom; in inclusion, the school system adapts its environment, teaching methods, and resources to welcome the child.',
    topicRef: '1.0 Integration vs Mainstreaming vs Inclusion'
  },
  {
    id: 13,
    question: "Under the Magna Carta for Disabled Persons (Republic Act No. 7277), what are Persons with Disabilities (PWDs) guaranteed in the educational sector?",
    options: [
      { key: 'A', text: 'Equal access to quality education, prohibition of discrimination in admission, and provision of special facilities/scholarships' },
      { key: 'B', text: 'Automatic exemption from all homework' },
      { key: 'C', text: 'Mandatory placement in separate institutions' },
      { key: 'D', text: 'Expulsion from universities' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 7277 guarantees equal educational rights, reasonable accessibility, barrier-free environments, and anti-discrimination protections for PWDs.',
    topicRef: '1.0 Legal Foundations: RA 7277'
  },
  {
    id: 14,
    question: "In intellectual disability classification (formerly mental retardation), what two components must be significantly impaired for diagnosis?",
    options: [
      { key: 'A', text: 'Intellectual functioning (IQ score below 70) and Adaptive behavior (conceptual, social, and practical life skills)' },
      { key: 'B', text: 'Height and weight' },
      { key: 'C', text: 'Eye color and hair color' },
      { key: 'D', text: 'Running speed and vocal pitch' }
    ],
    correctAnswer: 'A',
    explanation: 'Intellectual Disability requires deficits in both general mental abilities (IQ approximately 2 standard deviations below mean) and adaptive functioning in daily life.',
    topicRef: '4.0 Intellectual Disabilities'
  },
  {
    id: 15,
    question: "What is 'Twice-Exceptional' (2e) learner?",
    options: [
      { key: 'A', text: 'A student who is identified as gifted and talented in one or more areas while simultaneously having one or more learning disabilities or neurodevelopmental disorders' },
      { key: 'B', text: 'A student who has failed two subjects' },
      { key: 'C', text: 'A student who is enrolled in two different schools' },
      { key: 'D', text: 'A student who has twins in the family' }
    ],
    correctAnswer: 'A',
    explanation: 'Twice-exceptional (2e) students exhibit high cognitive/creative gifts alongside disabilities like dyslexia, ADHD, or autism, requiring dual-differentiated support.',
    topicRef: '4.0 Gifted & Twice-Exceptional Learners'
  },
  {
    id: 16,
    question: "Which of the following is an effective environmental accommodation for a student with ADHD who struggles with sitting still and sustained attention?",
    options: [
      { key: 'A', text: 'Allowing flexible seating (e.g., wobble stool, standing desk), movement breaks, and chunking tasks into 10-minute intervals' },
      { key: 'B', text: 'Locking the student in a dark closet' },
      { key: 'C', text: 'Giving 3-hour continuous lectures without breaks' },
      { key: 'D', text: 'Publicly scolding the student every time they fidget' }
    ],
    correctAnswer: 'A',
    explanation: 'Sensory accommodations, kinesthetic seating, structured brain breaks, and segmented tasks help regulate dopamine and attention in ADHD learners.',
    topicRef: '3.0 Inclusive Classroom Accommodations'
  },
  {
    id: 17,
    question: "What is the primary mode of tactile reading and writing used by individuals who are blind?",
    options: [
      { key: 'A', text: 'Braille' },
      { key: 'B', text: 'Morse Code' },
      { key: 'C', text: 'Hieroglyphics' },
      { key: 'D', text: 'Shorthand' }
    ],
    correctAnswer: 'A',
    explanation: 'Invented by Louis Braille, Braille is a tactile writing system consisting of raised six-dot cells representing letters, numbers, and symbols.',
    topicRef: '4.0 Visual Impairments & Braille'
  },
  {
    id: 18,
    question: "Under Republic Act No. 11106, what is recognized as the official sign language of the Philippine government and used in schools for Deaf learners?",
    options: [
      { key: 'A', text: 'Filipino Sign Language (FSL)' },
      { key: 'B', text: 'American Sign Language (ASL) only' },
      { key: 'C', text: 'British Sign Language (BSL)' },
      { key: 'D', text: 'International Semaphore' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 11106 declares Filipino Sign Language (FSL) as the national sign language of the Philippines and mandates its use in all public institutions and schools.',
    topicRef: '1.0 Deaf Education & RA 11106'
  },
  {
    id: 19,
    question: "What is 'Response to Intervention' (RTI)?",
    options: [
      { key: 'A', text: 'A multi-tiered approach to the early identification and support of students with learning and behavior needs' },
      { key: 'B', text: 'Calling the police whenever a student enters late' },
      { key: 'C', text: 'An emergency fire evacuation drill' },
      { key: 'D', text: 'A standardized high school exit exam' }
    ],
    correctAnswer: 'A',
    explanation: 'RTI features 3 tiers of support: Tier 1 (universal high-quality classroom instruction), Tier 2 (targeted small-group interventions), and Tier 3 (intensive individualized intervention/SPED assessment).',
    topicRef: '2.0 Multi-Tiered Systems of Support (MTSS/RTI)'
  },
  {
    id: 20,
    question: "What is 'Stuttering' (Childhood-Onset Fluency Disorder) in speech pathology?",
    options: [
      { key: 'A', text: 'A communication disorder characterized by frequent disruptions in the normal flow and rhythm of speech (repetitions, prolongations, blocks)' },
      { key: 'B', text: 'Inability to write on a blackboard' },
      { key: 'C', text: 'Speaking too quietly' },
      { key: 'D', text: 'Speaking multiple languages fluently' }
    ],
    correctAnswer: 'A',
    explanation: 'Stuttering is a fluency disorder affecting speech rhythm through sound/syllable repetitions, prolongations, and silent postural fixations.',
    topicRef: '4.0 Speech & Language Impairments'
  },
  {
    id: 21,
    question: "In gifted education, what is Joseph Renzulli's 'Three-Ring Conception of Giftedness'?",
    options: [
      { key: 'A', text: 'Above-Average Ability, High Creativity, and Task Commitment' },
      { key: 'B', text: 'High Wealth, Good Looks, and Athletic Ability' },
      { key: 'C', text: 'Speed, Memory, and Obedience' },
      { key: 'D', text: 'Reading, Writing, and Reciting' }
    ],
    correctAnswer: 'A',
    explanation: 'Renzulli posits that gifted behaviors result from the intersection of above-average general/specific ability, high levels of creativity, and high task commitment (perseverance/passion).',
    topicRef: '4.0 Gifted & Talented Education'
  },
  {
    id: 22,
    question: "What is 'Cerebral Palsy'?",
    options: [
      { key: 'A', text: 'A group of non-progressive neurological disorders that appear in early childhood affecting body movement, muscle coordination, tone, and posture' },
      { key: 'B', text: 'A bacterial stomach infection' },
      { key: 'C', text: 'A temporary broken bone' },
      { key: 'D', text: 'An emotional anxiety reaction' }
    ],
    correctAnswer: 'A',
    explanation: 'Cerebral Palsy is caused by non-progressive damage to the developing brain before, during, or shortly after birth, impacting motor control and muscle tone.',
    topicRef: '4.0 Physical & Motor Disabilities'
  },
  {
    id: 23,
    question: "What is 'Sensory Overload' frequently experienced by individuals with Autism Spectrum Disorder?",
    options: [
      { key: 'A', text: 'Overstimulation when one or more of the body\'s senses experiences too much input from the environment (e.g., loud noises, flickering fluorescent lights), triggering intense distress' },
      { key: 'B', text: 'Eating too much candy' },
      { key: 'C', text: 'Sleeping for 12 hours' },
      { key: 'D', text: 'Watching a quiet movie' }
    ],
    correctAnswer: 'A',
    explanation: 'Autistic individuals often have atypical sensory processing; overwhelming visual/auditory/tactile stimuli can trigger fight-or-flight meltdowns or shutdowns.',
    topicRef: '4.0 Autism & Sensory Processing'
  },
  {
    id: 24,
    question: "Which of the following is a classic example of 'Co-Teaching' in an inclusive classroom?",
    options: [
      { key: 'A', text: 'A General Education teacher and a Special Education teacher collaboratively planning, instructing, and assessing a diverse group of students in a single shared classroom' },
      { key: 'B', text: 'One teacher grading papers in the faculty room while another teaches' },
      { key: 'C', text: 'Two teachers arguing over classroom keys' },
      { key: 'D', text: 'A teacher having students teach the class all year' }
    ],
    correctAnswer: 'A',
    explanation: 'Co-teaching (Friend & Cook) pairs general and SPED educators (Team Teaching, Station Teaching, One Teach/One Assist) to meet all learners\' needs in inclusive settings.',
    topicRef: '3.0 Co-Teaching Models in Inclusion'
  },
  {
    id: 25,
    question: "What is 'Positive Behavioral Interventions and Supports' (PBIS)?",
    options: [
      { key: 'A', text: 'An evidence-based tiered framework for supporting students\' behavioral, academic, social, and emotional needs through proactive expectations and positive reinforcement rather than punitive discipline' },
      { key: 'B', text: 'A corporal punishment system' },
      { key: 'C', text: 'Expelling any student who makes a noise' },
      { key: 'D', text: 'A grading curve formula' }
    ],
    correctAnswer: 'A',
    explanation: 'PBIS replaces reactive punishment with explicit teaching of behavioral expectations, consistent positive reinforcement, and structured interventions.',
    topicRef: '2.0 Behavioral Support Systems (PBIS)'
  },
  {
    id: 26,
    question: "What is 'Down Syndrome' (Trisomy 21)?",
    options: [
      { key: 'A', text: 'A genetic disorder caused by the presence of all or part of a third copy of chromosome 21, associated with intellectual disability, characteristic physical features, and health considerations' },
      { key: 'B', text: 'An infectious viral disease' },
      { key: 'C', text: 'A dietary allergic reaction' },
      { key: 'D', text: 'A temporary speech delay' }
    ],
    correctAnswer: 'A',
    explanation: 'Trisomy 21 is a chromosomal condition resulting in mild to moderate intellectual disability, distinct craniofacial features, hypotonia, and potential cardiac conditions.',
    topicRef: '4.0 Genetic & Chromosomal Conditions'
  },
  {
    id: 27,
    question: "What is the purpose of a 'Transition Plan' in the IEP of an adolescent with special needs?",
    options: [
      { key: 'A', text: 'To prepare the student for post-secondary life, independent living, vocational training, community participation, and employment' },
      { key: 'B', text: 'To transfer the student to a new seat in the front row' },
      { key: 'C', text: 'To change the student\'s school uniform color' },
      { key: 'D', text: 'To schedule annual sports events' }
    ],
    correctAnswer: 'A',
    explanation: 'Individualized Transition Plans (ITP) bridge secondary schooling to adulthood, equipping youth with vocational, daily living, and self-advocacy competencies.',
    topicRef: '3.0 Transition Planning in SPED'
  },
  {
    id: 28,
    question: "Which of the following describes 'Executive Functioning' deficits commonly found in students with ADHD and learning disabilities?",
    options: [
      { key: 'A', text: 'Difficulties with working memory, cognitive flexibility, impulse inhibition, organization, time management, and task initiation' },
      { key: 'B', text: 'Inability to run fast' },
      { key: 'C', text: 'Loss of visual acuity' },
      { key: 'D', text: 'Having a high fever' }
    ],
    correctAnswer: 'A',
    explanation: 'Executive functions are prefrontal cortex mental processes that enable goal-directed behavior, planning, prioritization, and emotional self-regulation.',
    topicRef: '4.0 Neurodevelopmental Deficits'
  },
  {
    id: 29,
    question: "What is 'Social Story' (Carol Gray) used for in autism interventions?",
    options: [
      { key: 'A', text: 'A short, personalized narrative with visual illustrations that describes a social situation, skill, or concept to help an autistic individual understand social cues and expected behaviors' },
      { key: 'B', text: 'A fictional novel sold in commercial bookstores' },
      { key: 'C', text: 'A gossip article on social media' },
      { key: 'D', text: 'A fairy tale read before bedtime' }
    ],
    correctAnswer: 'A',
    explanation: 'Social Stories provide clear, reassuring, and concrete breakdowns of social scenarios, helping individuals on the spectrum anticipate routines and navigate social expectations.',
    topicRef: '3.0 Autism Interventions'
  },
  {
    id: 30,
    question: "What is 'Assistive Technology' (AT) in inclusive education?",
    options: [
      { key: 'A', text: 'Any item, piece of equipment, or software used to increase, maintain, or improve the functional capabilities of individuals with disabilities' },
      { key: 'B', text: 'A computer used exclusively by the school accountant' },
      { key: 'C', text: 'An expensive gaming console' },
      { key: 'D', text: 'A school bus engine' }
    ],
    correctAnswer: 'A',
    explanation: 'Assistive technology ranges from low-tech (pencil grips, slant boards) to high-tech (speech-generating devices, eye-tracking communicators) to empower independence.',
    topicRef: '3.0 Assistive Technology'
  },
  {
    id: 31,
    question: "What is 'Deaf Culture' and why is it important in inclusive deaf education?",
    options: [
      { key: 'A', text: 'A distinct social and cultural community that shares a visual sign language (e.g., FSL), rich heritage, traditions, and values, viewing deafness as a linguistic identity rather than a medical deficit' },
      { key: 'B', text: 'A medical illness that needs to be erased' },
      { key: 'C', text: 'A musical genre' },
      { key: 'D', text: 'A foreign country' }
    ],
    correctAnswer: 'A',
    explanation: 'Deaf culture embraces deafness as a proud cultural-linguistic identity centered around natural sign language rather than a pathology to be "fixed."',
    topicRef: '4.0 Deaf Culture & Linguistic Rights'
  },
  {
    id: 32,
    question: "What is 'Curriculum Compacting' in gifted education?",
    options: [
      { key: 'A', text: 'An instructional technique that assesses students on upcoming content, streamlines or eliminates already-mastered concepts, and replaces them with enrichment or acceleration opportunities' },
      { key: 'B', text: 'Compressing PDF files on a computer' },
      { key: 'C', text: 'Reducing school hours for everyone' },
      { key: 'D', text: 'Skipping all science experiments' }
    ],
    correctAnswer: 'A',
    explanation: 'Developed by Joseph Renzulli, curriculum compacting prevents boredom for advanced learners by pre-testing mastery and replacing redundant work with advanced investigations.',
    topicRef: '3.0 Differentiated Gifted Strategies'
  },
  {
    id: 33,
    question: "What is 'Expressive Language Disorder' versus 'Receptive Language Disorder'?",
    options: [
      { key: 'A', text: 'Expressive affects the ability to produce speech, put words together, and communicate ideas; Receptive affects the ability to understand and process what others are saying' },
      { key: 'B', text: 'Expressive is physical; receptive is emotional' },
      { key: 'C', text: 'They are identical conditions' },
      { key: 'D', text: 'Expressive is blindness; receptive is deafness' }
    ],
    correctAnswer: 'A',
    explanation: 'Expressive disorder involves deficits in spoken language output; receptive disorder involves difficulties comprehending verbal or written language input.',
    topicRef: '4.0 Communication Disorders'
  },
  {
    id: 34,
    question: "In UDL, which principle is being applied when a teacher offers students the option to demonstrate understanding of a historical event through an essay, a podcast, a comic strip, or a dramatic reenactment?",
    options: [
      { key: 'A', text: 'Multiple Means of Action and Expression' },
      { key: 'B', text: 'Multiple Means of Segregation' },
      { key: 'C', text: 'Rote Standardization' },
      { key: 'D', text: 'Punitive Assessment' }
    ],
    correctAnswer: 'A',
    explanation: 'Providing multiple avenues for expression allows diverse learners to demonstrate their mastery through the media that best matches their strengths.',
    topicRef: '2.0 Universal Design for Learning'
  },
  {
    id: 35,
    question: "What is 'Oppositional Defiant Disorder' (ODD)?",
    options: [
      { key: 'A', text: 'A recurrent pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness persisting for at least 6 months' },
      { key: 'B', text: 'Severe shyness during public speaking' },
      { key: 'C', text: 'A temporary disagreement between two friends' },
      { key: 'D', text: 'A physical muscle spasm' }
    ],
    correctAnswer: 'A',
    explanation: 'ODD is an emotional-behavioral disorder involving persistent defiance, vindictiveness, and hostility towards authority figures beyond typical developmental boundaries.',
    topicRef: '4.0 Emotional & Behavioral Disorders'
  },
  {
    id: 36,
    question: "What is 'Person-First Language' (e.g., 'a student with autism' rather than 'an autistic kid')?",
    options: [
      { key: 'A', text: 'Language etiquette that emphasizes the individuality and personhood of human beings before their disability diagnosis' },
      { key: 'B', text: 'Speaking in the first person singular exclusively' },
      { key: 'C', text: 'A grammar rule for nouns and verbs' },
      { key: 'D', text: 'Using legal courtroom phrasing in class' }
    ],
    correctAnswer: 'A',
    explanation: 'Person-first language emphasizes dignity and humanity first, preventing a medical or educational diagnosis from defining a person\'s entire identity.',
    topicRef: '1.0 Inclusive Language & Etiquette'
  },
  {
    id: 37,
    question: "What is 'Visual Schedule' in SPED and inclusive classrooms?",
    options: [
      { key: 'A', text: 'A visual representation of daily tasks and activities using pictures, icons, or text to provide predictability, reduce anxiety, and foster independent transitions' },
      { key: 'B', text: 'A movie poster in the hallway' },
      { key: 'C', text: 'A teacher\'s payroll slip' },
      { key: 'D', text: 'An eye examination chart' }
    ],
    correctAnswer: 'A',
    explanation: 'Visual schedules offer structure and clarity, especially for learners with autism or ADHD who benefit from visual predictability during classroom transitions.',
    topicRef: '3.0 Environmental Accommodations'
  },
  {
    id: 38,
    question: "What is 'Task Analysis' in teaching daily living and academic skills to students with developmental disabilities?",
    options: [
      { key: 'A', text: 'Breaking down a complex multi-step skill or routine into small, discrete, sequential steps that can be taught and mastered incrementally' },
      { key: 'B', text: 'Analyzing the teacher\'s annual income' },
      { key: 'C', text: 'Grading 100 exams simultaneously' },
      { key: 'D', text: 'Assigning a 50-page essay' }
    ],
    correctAnswer: 'A',
    explanation: 'Task analysis deconstructs complex routines (e.g., washing hands, long division) into step-by-step observable behaviors for systematic chaining and prompting.',
    topicRef: '3.0 Applied Behavioral & Instructional Strategies'
  },
  {
    id: 39,
    question: "What is 'Echolalia' commonly observed in some individuals with Autism Spectrum Disorder?",
    options: [
      { key: 'A', text: 'The repetition or echoing of words, phrases, or vocal sounds spoken by other people, either immediately or delayed' },
      { key: 'B', text: 'Loss of hearing' },
      { key: 'C', text: 'Difficulty walking in a straight line' },
      { key: 'D', text: 'Speaking in foreign accents' }
    ],
    correctAnswer: 'A',
    explanation: 'Echolalia is repetitive speech repetition that may serve diverse communication functions (processing language, self-regulation, or expressing intent).',
    topicRef: '4.0 Autism Characteristics'
  },
  {
    id: 40,
    question: "What is 'Chaining' in behavioral instruction (Forward vs Backward Chaining)?",
    options: [
      { key: 'A', text: 'Reinforcing individual component steps in a task analysis in sequence until the entire multi-step task is completed independently' },
      { key: 'B', text: 'Tying student desks together' },
      { key: 'C', text: 'Locking classroom doors' },
      { key: 'D', text: 'Assigning repetitive spelling drills' }
    ],
    correctAnswer: 'A',
    explanation: 'Chaining systematically builds complex behaviors by reinforcing consecutive steps forwards from the start or backwards from the final completed step.',
    topicRef: '3.0 Instructional Strategies in SPED'
  },
  {
    id: 41,
    question: "What is 'Sensory Diet' in occupational therapy for neurodivergent children?",
    options: [
      { key: 'A', text: 'A carefully planned, individualized schedule of sensory-motor activities designed to provide the necessary sensory input to keep a child calm, alert, and organized' },
      { key: 'B', text: 'Eating only organic vegetables' },
      { key: 'C', text: 'A strict weight-loss diet' },
      { key: 'D', text: 'Avoiding all physical exercise' }
    ],
    correctAnswer: 'A',
    explanation: 'A sensory diet (Patricia Wilbarger) provides tailored vestibular, proprioceptive, and tactile inputs throughout the day to optimize neurological arousal and focus.',
    topicRef: '3.0 Occupational Therapy in Schools'
  },
  {
    id: 42,
    question: "What is 'Bilingual-Bicultural' (Bi-Bi) education in Deaf education?",
    options: [
      { key: 'A', text: 'An educational philosophy where sign language (FSL) is taught as the child\'s first natural language, and written national languages (Filipino/English) are taught as second languages' },
      { key: 'B', text: 'Forbidding sign language completely' },
      { key: 'C', text: 'Teaching only spoken Latin' },
      { key: 'D', text: 'Excluding Deaf students from school' }
    ],
    correctAnswer: 'A',
    explanation: 'The Bi-Bi approach honors Deaf culture and sign language as the primary linguistic foundation while cultivating literacy in the majority written languages.',
    topicRef: '1.0 Deaf Education Models'
  },
  {
    id: 43,
    question: "Which of the following is a physical barrier that violates the accessibility standards mandated by Batas Pambansa Blg. 344 (Philippine Accessibility Law)?",
    options: [
      { key: 'A', text: 'School buildings with stairs only, lacking wheelchair ramps, handrails, tactile paving, and accessible restroom stalls' },
      { key: 'B', text: 'Wide automatic doors' },
      { key: 'C', text: 'Elevators with braille buttons and auditory floor chimes' },
      { key: 'D', text: 'Wheelchair ramps with gentle slopes and non-skid surfaces' }
    ],
    correctAnswer: 'A',
    explanation: 'B.P. 344 mandates that public and private institutions provide architectural facilities and features (ramps, wide doors, grab bars) to enable PWD mobility.',
    topicRef: '1.0 Accessibility Laws: BP 344'
  },
  {
    id: 44,
    question: "What is 'Tier 3' in the Multi-Tiered System of Supports (MTSS)?",
    options: [
      { key: 'A', text: 'Intensive, highly individualized, and specialized interventions designed for students who demonstrate significant, persistent difficulties' },
      { key: 'B', text: 'Universal classroom instruction for everyone' },
      { key: 'C', text: 'Recess and sports activities' },
      { key: 'D', text: 'School cafeteria lunch schedules' }
    ],
    correctAnswer: 'A',
    explanation: 'Tier 3 provides high-intensity, customized individual instruction, behavioral supports, or formal comprehensive special education services.',
    topicRef: '2.0 MTSS Framework'
  },
  {
    id: 45,
    question: "What is 'Self-Advocacy' for learners with disabilities?",
    options: [
      { key: 'A', text: 'The ability to understand one\'s own strengths and needs, identify goals, and effectively communicate one\'s rights and accommodations to others' },
      { key: 'B', text: 'Demanding special privileges unfairly' },
      { key: 'C', text: 'Refusing to do any work' },
      { key: 'D', text: 'Blaming others for all mistakes' }
    ],
    correctAnswer: 'A',
    explanation: 'Self-advocacy empowers individuals with disabilities to make informed decisions, articulate needed accommodations, and lead their own life plans.',
    topicRef: '3.0 Self-Determination & Advocacy'
  },
  {
    id: 46,
    question: "What is 'Fetal Alcohol Spectrum Disorder' (FASD)?",
    options: [
      { key: 'A', text: 'A group of conditions that can occur in an individual whose mother consumed alcohol during pregnancy, resulting in lifelong physical, behavioral, and intellectual impairments' },
      { key: 'B', text: 'An allergy to fruit juice' },
      { key: 'C', text: 'A temporary childhood illness' },
      { key: 'D', text: 'A dietary vitamin deficiency' }
    ],
    correctAnswer: 'A',
    explanation: 'FASD results from prenatal alcohol exposure, leading to permanent central nervous system damage, facial abnormalities, executive dysfunction, and learning deficits.',
    topicRef: '4.0 Prenatal Etiologies'
  },
  {
    id: 47,
    question: "What is 'Peer-Mediated Instruction' in inclusive classrooms?",
    options: [
      { key: 'A', text: 'Structured instructional arrangements where students act as tutors, mentors, or collaborative partners to support classmates\' academic and social learning' },
      { key: 'B', text: 'Allowing students to grade each other\'s report cards secretly' },
      { key: 'C', text: 'Leaving the classroom completely unsupervised' },
      { key: 'D', text: 'Student fights during recess' }
    ],
    correctAnswer: 'A',
    explanation: 'Peer tutoring and peer buddy systems foster social inclusion, academic engagement, and mutual empathy in inclusive educational communities.',
    topicRef: '3.0 Inclusive Instructional Strategies'
  },
  {
    id: 48,
    question: "What is 'Hydrocephalus'?",
    options: [
      { key: 'A', text: 'The buildup of excess cerebrospinal fluid (CSF) within the ventricles of the brain, causing increased intracranial pressure and potential cognitive or motor damage' },
      { key: 'B', text: 'Fear of drinking water' },
      { key: 'C', text: 'Swallowing too much air' },
      { key: 'D', text: 'A temporary ear infection' }
    ],
    correctAnswer: 'A',
    explanation: 'Hydrocephalus involves abnormal CSF accumulation that can cause head enlargement in infants and requires surgical shunting to alleviate brain pressure.',
    topicRef: '4.0 Neurological Impairments'
  },
  {
    id: 49,
    question: "What is 'Differentiation by Readiness' in inclusive classroom pedagogy?",
    options: [
      { key: 'A', text: 'Matching the complexity and pace of instructional tasks to the student\'s current entry-level knowledge, skill mastery, and cognitive readiness' },
      { key: 'B', text: 'Teaching only the smartest student in class' },
      { key: 'C', text: 'Giving everyone the identical worksheet regardless of understanding' },
      { key: 'D', text: 'Dismissing class early' }
    ],
    correctAnswer: 'A',
    explanation: 'Differentiating by readiness (Carol Ann Tomlinson) adjusts scaffolding and task difficulty so every student works within their Zone of Proximal Development.',
    topicRef: '2.0 Differentiated Instruction'
  },
  {
    id: 50,
    question: "Why is 'Inclusive Education' considered a fundamental human right rather than a mere charitable favor?",
    options: [
      { key: 'A', text: 'Because all children possess equal human dignity, the right to non-discrimination, and the entitlement to quality education that fulfills their full human potential' },
      { key: 'B', text: 'To reduce school operational expenses' },
      { key: 'C', text: 'Because special schools are too expensive to build' },
      { key: 'D', text: 'To win political awards' }
    ],
    correctAnswer: 'A',
    explanation: 'The UN Convention on the Rights of Persons with Disabilities (UNCRPD) enshrines inclusive education as a non-negotiable human right grounded in universal dignity and equity.',
    topicRef: '1.0 Philosophy & Human Rights Foundation'
  }
];
