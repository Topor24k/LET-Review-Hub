import { ExamQuestion } from '../../types';

export const SOCIAL_DIMENSIONS_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Under Republic Act No. 7836 (Philippine Teachers Professionalization Act of 1994), which regulatory body is mandated to supervise and regulate the licensure examination and practice of the teaching profession?",
    options: [
      { key: 'A', text: 'Board for Professional Teachers (BPT) under the Professional Regulation Commission (PRC)' },
      { key: 'B', text: 'Civil Service Commission (CSC)' },
      { key: 'C', text: 'Department of Education (DepEd) Central Office' },
      { key: 'D', text: 'Commission on Higher Education (CHED)' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 7836 created the Board for Professional Teachers (BPT) under the PRC to administer the licensure examination (LET) and uphold professional standards.',
    topicRef: '1.0 RA 7836 & RA 9293 Legal Mandates'
  },
  {
    id: 2,
    question: "Under the Code of Ethics for Professional Teachers, Article VIII (The Teacher and the Learners), what is explicitly stated regarding the acceptance of gifts or favors from students or parents in exchange for concessions or grade adjustments?",
    options: [
      { key: 'A', text: 'A teacher shall not accept gifts or favors that might influence, or appear to influence, professional judgments or grade evaluations' },
      { key: 'B', text: 'A teacher may accept expensive gifts if given during Christmas' },
      { key: 'C', text: 'A teacher can demand gifts for remedial passing marks' },
      { key: 'D', text: 'A teacher may accept cash loans from student parents without repayment' }
    ],
    correctAnswer: 'A',
    explanation: 'Article VIII, Section 4 states that a teacher shall not accept gifts, favors, or concessions from learners or their parents in exchange for requested concessions, especially regarding grades.',
    topicRef: '2.0 Code of Ethics for Professional Teachers'
  },
  {
    id: 3,
    question: "Under Republic Act No. 4670 (The Magna Carta for Public School Teachers), what is the maximum number of hours of actual classroom teaching that a public school teacher may be required to render per day?",
    options: [
      { key: 'A', text: '6 hours' },
      { key: 'B', text: '8 hours' },
      { key: 'C', text: '10 hours' },
      { key: 'D', text: '4 hours' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 13 of R.A. 4670 stipulates that any teacher may be required to render more than 6 hours but not exceeding 8 hours of actual classroom teaching only upon payment of additional compensation of at least 25% of regular remuneration.',
    topicRef: '3.0 RA 4670 Magna Carta for Public School Teachers'
  },
  {
    id: 4,
    question: "Under the Philippine Professional Standards for Teachers (PPST, DepEd Order No. 42, s. 2017), how many domains and career stages are defined?",
    options: [
      { key: 'A', text: '7 Domains and 4 Career Stages (Beginning, Proficient, Highly Proficient, Distinguished)' },
      { key: 'B', text: '5 Domains and 3 Stages' },
      { key: 'C', text: '10 Domains and 5 Stages' },
      { key: 'D', text: '4 Domains and 4 Stages' }
    ],
    correctAnswer: 'A',
    explanation: 'The PPST articulates 7 Domains (Content Knowledge, Learning Environment, Diversity, Curriculum, Assessment, Community, Personal Growth) across 4 developmental Career Stages.',
    topicRef: '4.0 Philippine Professional Standards for Teachers (PPST)'
  },
  {
    id: 5,
    question: "Under Article XI of the Code of Ethics (The Teacher as a Person), what standard of personal living and morality is expected of all professional educators?",
    options: [
      { key: 'A', text: 'A teacher shall live with dignity in all places and at all times, maintaining high moral and ethical standards both in public and private life' },
      { key: 'B', text: 'A teacher can act immorally as long as it is done in private' },
      { key: 'C', text: 'A teacher is free from all social accountability outside the classroom' },
      { key: 'D', text: 'A teacher may engage in public brawling' }
    ],
    correctAnswer: 'A',
    explanation: 'Article XI, Section 1 declares that a teacher shall place premium upon self-respect and self-discipline as the principle of personal behavior in all relationships with others and in all situations.',
    topicRef: '2.0 Code of Ethics: The Teacher as a Person'
  },
  {
    id: 6,
    question: "Under R.A. 4670, when a public school teacher contracts a sickness or injury arising directly from the performance of duty, what medical benefit is guaranteed?",
    options: [
      { key: 'A', text: 'Free compulsory medical examination annually and medical treatment/compensation subsidized by the government' },
      { key: 'B', text: 'Immediate dismissal from the service' },
      { key: 'C', text: 'Paying 100% of the hospital bills out of pocket' },
      { key: 'D', text: 'Forfeiture of all retirement pensions' }
    ],
    correctAnswer: 'A',
    explanation: 'Sections 22 and 23 of R.A. 4670 mandate free annual medical examinations and full medical treatment/compensation for duty-related illnesses or injuries.',
    topicRef: '3.0 RA 4670 Health & Medical Rights'
  },
  {
    id: 7,
    question: "What does the Continuing Professional Development (CPD) Act of 2016 (Republic Act No. 10912) mandate for professional teachers renewing their PRC license?",
    options: [
      { key: 'A', text: 'Mandatory accumulation of credited CPD credit units earned through verified formal, non-formal, and informal lifelong learning activities' },
      { key: 'B', text: 'Retaking the full Licensure Examination every 3 years' },
      { key: 'C', text: 'Paying a fine without any learning requirement' },
      { key: 'D', text: 'Publishing a 500-page book annually' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 10912 establishes CPD as a mandatory continuous learning requirement to sustain professional competence and global competitiveness.',
    topicRef: '1.0 CPD Act of 2016 (RA 10912)'
  },
  {
    id: 8,
    question: "Under Article V of the Code of Ethics (The Teaching Community), how should a teacher handle confidential information about colleagues or grievances against school authorities?",
    options: [
      { key: 'A', text: 'File grievances through established administrative channels and hold in strict confidence any personal information about colleagues' },
      { key: 'B', text: 'Broadcast rumors and accusations anonymously on public social media' },
      { key: 'C', text: 'Write derogatory letters to newspapers' },
      { key: 'D', text: 'Instigate students to boycott the colleague\'s classes' }
    ],
    correctAnswer: 'A',
    explanation: 'Article V mandates professional solidarity, holding in confidence personal records, and using proper institutional grievance procedures.',
    topicRef: '2.0 Code of Ethics: The Teaching Community'
  },
  {
    id: 9,
    question: "Under the Education Act of 1982 (Batas Pambansa Blg. 232), what is the basic duty of every teacher regarding school records and student evaluations?",
    options: [
      { key: 'A', text: 'Render regular reports on the performance of each student and maintain objective, accurate, and prompt grading records' },
      { key: 'B', text: 'Keep all grades secret until the student finishes college' },
      { key: 'C', text: 'Destroy all exam papers immediately' },
      { key: 'D', text: 'Alter grades based on friendship' }
    ],
    correctAnswer: 'A',
    explanation: 'B.P. 232 Section 16 duties include rendering regular reports to parents, evaluating students objectively, and keeping accurate academic records.',
    topicRef: '1.0 Education Act of 1982 (BP 232)'
  },
  {
    id: 10,
    question: "What is 'Loco Parentis' (In Loco Parentis) in educational law and teacher responsibility?",
    options: [
      { key: 'A', text: 'The legal doctrine that teachers and school authorities stand "in the place of a parent" exercising substitute parental authority, care, and diligence over learners during school activities' },
      { key: 'B', text: 'A mental illness affecting parents' },
      { key: 'C', text: 'A Latin chant used during graduation' },
      { key: 'D', text: 'The right of parents to teach in place of licensed teachers' }
    ],
    correctAnswer: 'A',
    explanation: 'Under the Family Code (Art. 218) and Child Protection policies, teachers stand in loco parentis and owe a special duty of care and supervision to protect students from harm.',
    topicRef: '5.0 Legal Concepts: In Loco Parentis'
  },
  {
    id: 11,
    question: "Under DepEd Order No. 40, s. 2012 (Child Protection Policy), what is strictly prohibited in all public and private schools regarding student discipline?",
    options: [
      { key: 'A', text: 'Any form of corporal punishment, verbal abuse, public humiliation, or harsh physical/emotional disciplinary acts' },
      { key: 'B', text: 'Giving homework on weekends' },
      { key: 'C', text: 'Conducting remedial reading sessions' },
      { key: 'D', text: 'Calling a parent for an academic conference' }
    ],
    correctAnswer: 'A',
    explanation: 'DepEd Order 40 s. 2012 enforces a zero-tolerance policy against corporal punishment, psychological abuse, and acts that demean a child\'s dignity.',
    topicRef: '5.0 DepEd Child Protection Policy'
  },
  {
    id: 12,
    question: "In the PPST career stages, what defines a 'Distinguished Teacher' (Career Stage 4)?",
    options: [
      { key: 'A', text: 'Teachers who embody the highest standards of teaching, recognized as educational leaders and exemplary practitioners who mentor colleagues across the wider community' },
      { key: 'B', text: 'Novice teachers in their first year of probationary teaching' },
      { key: 'C', text: 'Teachers who have never published a lesson plan' },
      { key: 'D', text: 'Retired educators who no longer teach' }
    ],
    correctAnswer: 'A',
    explanation: 'Career Stage 4 (Distinguished) represents the highest global standard of mastery, pedagogical innovation, and nationwide educational leadership.',
    topicRef: '4.0 PPST Career Stages'
  },
  {
    id: 13,
    question: "Under Article II of the Code of Ethics (The Teacher and the State), what is the teacher's professional obligation during democratic elections in the Philippines?",
    options: [
      { key: 'A', text: 'Every teacher shall vote and exercise constitutional rights, but shall NOT use official position or authority to coerce, influence, or solicit votes for any political candidate' },
      { key: 'B', text: 'Campaign aggressively for their favorite mayor during class hours' },
      { key: 'C', text: 'Force students to wear partisan political campaign t-shirts' },
      { key: 'D', text: 'Boycott all national elections' }
    ],
    correctAnswer: 'A',
    explanation: 'Article II, Section 5 upholds the political neutrality of teachers: teachers have full franchise to vote but are strictly prohibited from using official authority for partisan political campaigns.',
    topicRef: '2.0 Code of Ethics: The Teacher and the State'
  },
  {
    id: 14,
    question: "Under R.A. 4670, what is the 'Study Leave' entitlement for public school teachers who have rendered at least seven years of continuous satisfactory service?",
    options: [
      { key: 'A', text: 'A study leave not exceeding one school year with at least 60% of their regular monthly salary' },
      { key: 'B', text: 'Immediate termination of employment' },
      { key: 'C', text: 'Unpaid leave of absence only' },
      { key: 'D', text: 'A 5-year paid vacation abroad' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 24 of R.A. 4670 grants a sabbatical study leave of up to one full school year with 60% salary after 7 years of service.',
    topicRef: '3.0 RA 4670 Sabbatical & Study Leave'
  },
  {
    id: 15,
    question: "Under Article VIII of the Code of Ethics, what is expected of a teacher when mutual romantic attraction develops between the teacher and a student?",
    options: [
      { key: 'A', text: 'The teacher shall exercise utmost professional discretion and transfer the student to another teacher/class to prevent any perception of favoritism or conflict of interest' },
      { key: 'B', text: 'Immediately give the student all 100% passing grades' },
      { key: 'C', text: 'Brag about the relationship to other students' },
      { key: 'D', text: 'Flunk all other students in the section' }
    ],
    correctAnswer: 'A',
    explanation: 'Article VIII, Section 7 states that in a case where mutual attraction arises, the teacher shall exercise utmost professional discretion and arrange for the student\'s transfer to another class.',
    topicRef: '2.0 Code of Ethics: Professional Boundaries'
  },
  {
    id: 16,
    question: "What does Domain 1 of the PPST focus on?",
    options: [
      { key: 'A', text: 'Content Knowledge and Pedagogy' },
      { key: 'B', text: 'Personal Growth and Professional Development' },
      { key: 'C', text: 'Community Linkages and Professional Engagement' },
      { key: 'D', text: 'Diversity of Learners' }
    ],
    correctAnswer: 'A',
    explanation: 'Domain 1 establishes teachers\' deep mastery of subject content, application of research-based pedagogies, and integration of ICT and literacy/numeracy strategies.',
    topicRef: '4.0 PPST Domains'
  },
  {
    id: 17,
    question: "Under Republic Act No. 9293, what is required of an LET passer whose license was revoked due to unprofessional conduct before they can be reinstated?",
    options: [
      { key: 'A', text: 'Reinstatement is at the discretion of the Board for Professional Teachers after the expiration of at least two years from revocation, upon proof of rehabilitation and good moral character' },
      { key: 'B', text: 'Permanent lifetime ban without any possibility of appeal' },
      { key: 'C', text: 'Paying a private bribe to PRC employees' },
      { key: 'D', text: 'Automatic reinstatement after 30 days' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 9293 empowers the BPT to reinstate a revoked certificate of registration after 2 years upon formal petition and evidence of reform.',
    topicRef: '1.0 RA 9293 Amendments'
  },
  {
    id: 18,
    question: "Under the Magna Carta for Public School Teachers (R.A. 4670), what protection is provided against arbitrary transfers from one station to another?",
    options: [
      { key: 'A', text: 'No teacher shall be transferred from one station to another without their consent, except for urgent cause and with reimbursement of moving expenses' },
      { key: 'B', text: 'The principal can reassign any teacher to another island without notice' },
      { key: 'C', text: 'Teachers can be transferred as punishment for asking questions' },
      { key: 'D', text: 'Transfers can only be done during the middle of the night' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 6 of R.A. 4670 prohibits arbitrary reassignments and mandates prior written notice, reimbursement of travel/moving expenses, and the right to appeal.',
    topicRef: '3.0 RA 4670 Security of Tenure & Transfers'
  },
  {
    id: 19,
    question: "Under Article VI of the Code of Ethics (The Teacher and Higher Authorities in the Philippines), what is a teacher\'s duty when implementing official educational policies?",
    options: [
      { key: 'A', text: 'A teacher shall support and carry out the legitimate policies of the school and the administration faithfully' },
      { key: 'B', text: 'Publicly mock the superintendent\'s directives in the classroom' },
      { key: 'C', text: 'Refuse to teach standard subjects' },
      { key: 'D', text: 'Create private fake syllabi to deceive supervisors' }
    ],
    correctAnswer: 'A',
    explanation: 'Article VI emphasizes institutional loyalty and professional execution of official policies, while maintaining the right to submit constructive suggestions through proper channels.',
    topicRef: '2.0 Code of Ethics: Relations with Authorities'
  },
  {
    id: 20,
    question: "What constitutes 'Professionalism' in the teaching profession beyond acquiring a PRC license?",
    options: [
      { key: 'A', text: 'Demonstrating continuous competence, ethical conduct, accountability, dedication to learner welfare, and reflective lifelong learning' },
      { key: 'B', text: 'Wearing expensive designer clothing to school' },
      { key: 'C', text: 'Arriving 30 minutes late every day' },
      { key: 'D', text: 'Never admitting a mistake' }
    ],
    correctAnswer: 'A',
    explanation: 'Professionalism embodies ethical integrity, technical mastery, unwavering dedication to students, and adherence to established professional codes of practice.',
    topicRef: '1.0 The Teacher as a Professional'
  },
  {
    id: 21,
    question: "Under Batas Pambansa Blg. 232, what right is guaranteed to parents regarding their children\'s educational records?",
    options: [
      { key: 'A', text: 'The right to access and inspect their children\'s academic records and progress reports' },
      { key: 'B', text: 'The right to dictate teacher salaries' },
      { key: 'C', text: 'The right to alter official exam answer keys' },
      { key: 'D', text: 'The right to fire tenured teachers directly' }
    ],
    correctAnswer: 'A',
    explanation: 'B.P. 232 Section 8 upholds the rights of parents to access official school records relating to their child\'s academic standing and attendance.',
    topicRef: '1.0 Education Act of 1982: Rights of Parents'
  },
  {
    id: 22,
    question: "What is the 'Hardship Allowance' (Special Hardship Allowance) under R.A. 4670?",
    options: [
      { key: 'A', text: 'An additional compensation of at least 25% of regular monthly salary for teachers assigned to remote, isolated, hazardous, or hardship hardship hardship posts' },
      { key: 'B', text: 'A loan given to buy groceries' },
      { key: 'C', text: 'Free airline tickets for vacations' },
      { key: 'D', text: 'A deduction from the monthly payroll' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 19 of R.A. 4670 provides Special Hardship Allowances of at least 25% of monthly salary for teachers in hazardous, isolated, or difficult geographic stations.',
    topicRef: '3.0 RA 4670 Compensation & Allowances'
  },
  {
    id: 23,
    question: "Under Article VII of the Code of Ethics (School Officials, Teachers, and Other Personnel), what is required of school administrators in their treatment of teachers?",
    options: [
      { key: 'A', text: 'School officials shall show professional courtesy, fairness, justice, and leadership, avoiding tyranny, favoritism, or arbitrariness' },
      { key: 'B', text: 'They may verbally humiliate teachers in faculty meetings' },
      { key: 'C', text: 'They can demand personal domestic chores from teachers' },
      { key: 'D', text: 'They may confiscate teachers\' paychecks' }
    ],
    correctAnswer: 'A',
    explanation: 'Article VII mandates that school administrators exercise democratic leadership, equity, and mutual professional respect towards teachers and support personnel.',
    topicRef: '2.0 Code of Ethics: School Officials & Personnel'
  },
  {
    id: 24,
    question: "What does 'Academic Freedom' guarantee to higher education faculty under the 1987 Philippine Constitution (Article XIV, Section 5)?",
    options: [
      { key: 'A', text: 'The freedom of the academic institution and its faculty to investigate, discover, discuss, teach, and publish truth without unreasonable external political interference' },
      { key: 'B', text: 'The right to skip teaching duties completely' },
      { key: 'C', text: 'Exemption from all criminal laws' },
      { key: 'D', text: 'The freedom to print counterfeit diplomas' }
    ],
    correctAnswer: 'A',
    explanation: 'Academic freedom protects higher education institutions and scholars to pursue research, teach controversial ideas responsibly, and disseminate knowledge without censorship.',
    topicRef: '5.0 Constitutional Provisions on Education'
  },
  {
    id: 25,
    question: "What is 'Salary Grade 11' historically significant for in the Philippine public school teaching career?",
    options: [
      { key: 'A', text: 'The entry-level salary grade for a newly hired public school Teacher I in DepEd' },
      { key: 'B', text: 'The salary grade of the DepEd Secretary' },
      { key: 'C', text: 'The salary of a school janitor' },
      { key: 'D', text: 'The retirement pension of a university president' }
    ],
    correctAnswer: 'A',
    explanation: 'Under the Salary Standardization Law, Teacher I positions in the public school system start at Salary Grade 11.',
    topicRef: '3.0 Career Progression & Compensation'
  },
  {
    id: 26,
    question: "Under Article III of the Code of Ethics (The Teacher and the Community), how should a teacher participate in community life?",
    options: [
      { key: 'A', text: 'As a respected civic leader and intellectual facilitator who provides moral, cultural, and educational leadership in the community' },
      { key: 'B', text: 'Isolate completely from all community affairs and never speak to neighbors' },
      { key: 'C', text: 'Lead violent riots against the local government' },
      { key: 'D', text: 'Run an illegal gambling den in the barangay' }
    ],
    correctAnswer: 'A',
    explanation: 'Article III positions the teacher as a community catalyst who fosters civic pride, moral leadership, social progress, and active school-community partnerships.',
    topicRef: '2.0 Code of Ethics: The Teacher and Community'
  },
  {
    id: 27,
    question: "Under Republic Act No. 7877 (Anti-Sexual Harassment Act of 1995), what constitutes work-, education- or training-related sexual harassment by a teacher or administrator?",
    options: [
      { key: 'A', text: 'When sexual favors are made a condition in granting passing grades, scholarships, honors, or employment benefits, or when it creates a hostile, intimidating, or offensive learning environment' },
      { key: 'B', text: 'Giving an honest failing grade for plagiarized work' },
      { key: 'C', text: 'Assigning homework to the entire class' },
      { key: 'D', text: 'Checking daily attendance' }
    ],
    correctAnswer: 'A',
    explanation: 'R.A. 7877 criminalizes demanding sexual favors or creating an intimidating, hostile, or offensive environment in education and workplace settings.',
    topicRef: '5.0 Anti-Sexual Harassment Law (RA 7877)'
  },
  {
    id: 28,
    question: "What is the primary role of the 'Brigada Eskwela' (National Schools Maintenance Week) in Philippine public education?",
    options: [
      { key: 'A', text: 'A community engagement program that unites teachers, parents, alumni, local government units, and private volunteers to clean, repair, and prepare public school facilities before the opening of classes' },
      { key: 'B', text: 'A compulsory military drill' },
      { key: 'C', text: 'A political election convention' },
      { key: 'D', text: 'A commercial product sale' }
    ],
    correctAnswer: 'A',
    explanation: 'Brigada Eskwela exemplifies the spirit of "Bayanihan" and strong community linkage by mobilizing collective volunteerism to ready schools for students.',
    topicRef: '4.0 Community Engagement in DepEd'
  },
  {
    id: 29,
    question: "Under the Code of Ethics, Article IX (The Teacher and Parents), how should a teacher communicate a student\'s academic or behavioral deficiencies to parents?",
    options: [
      { key: 'A', text: 'With utmost candor, tact, empathy, and constructive suggestions, focusing on collaborative solutions' },
      { key: 'B', text: 'By insulting the parents\' parenting skills in public' },
      { key: 'C', text: 'By posting the child\'s bad grades on Facebook' },
      { key: 'D', text: 'By demanding that the parents pay money' }
    ],
    correctAnswer: 'A',
    explanation: 'Article IX mandates that teachers establish cordial relations with parents, hear their concerns patiently, and communicate student progress with professional tact and empathy.',
    topicRef: '2.0 Code of Ethics: The Teacher and Parents'
  },
  {
    id: 30,
    question: "What is 'DepEd Order No. 2, s. 2015' (RPMS Framework)?",
    options: [
      { key: 'A', text: 'Results-Based Performance Management System (RPMS) aligned with the PPST to systematically evaluate and foster teacher performance and career development' },
      { key: 'B', text: 'A regulation banning school uniforms' },
      { key: 'C', text: 'A recipe book for school canteens' },
      { key: 'D', text: 'A manual for school bus drivers' }
    ],
    correctAnswer: 'A',
    explanation: 'RPMS is DepEd\'s systematic appraisal and development framework that assesses teacher performance against PPST indicators and objectives.',
    topicRef: '4.0 RPMS & Teacher Appraisal'
  },
  {
    id: 31,
    question: "Under Article X of the Code of Ethics (The Teacher and Business), what business transaction is strictly prohibited for a teacher regarding instructional materials?",
    options: [
      { key: 'A', text: 'A teacher shall not engage directly or indirectly in the sale of textbooks, uniforms, or school supplies to their own students unless authorized by school regulations' },
      { key: 'B', text: 'A teacher cannot open a personal savings account in a commercial bank' },
      { key: 'C', text: 'A teacher cannot buy groceries from a supermarket' },
      { key: 'D', text: 'A teacher cannot sell their personal old car' }
    ],
    correctAnswer: 'A',
    explanation: 'Article X, Section 1 prohibits teachers from using their position to coerce students into buying commercial items or supplies for personal profit.',
    topicRef: '2.0 Code of Ethics: The Teacher and Business'
  },
  {
    id: 32,
    question: "Under R.A. 4670, when can a public school teacher be eligible for optional retirement with full retirement benefits?",
    options: [
      { key: 'A', text: 'Upon completing at least fifteen (15) years of continuous service' },
      { key: 'B', text: 'After 1 year of service' },
      { key: 'C', text: 'Only after reaching age 90' },
      { key: 'D', text: 'Never' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 26 of R.A. 4670 establishes retirement benefits and automatic salary step promotion upon retirement for teachers with 15+ years of service.',
    topicRef: '3.0 RA 4670 Retirement Benefits'
  },
  {
    id: 33,
    question: "What does 'Constructive Dismissal' mean in labor laws affecting private school teachers?",
    options: [
      { key: 'A', text: 'When an employer makes working conditions so unbearable, humiliating, or hostile that a reasonable employee feels compelled to resign' },
      { key: 'B', text: 'Constructing a new school building' },
      { key: 'C', text: 'Promoting a teacher to department chair' },
      { key: 'D', text: 'Giving a teacher an award' }
    ],
    correctAnswer: 'A',
    explanation: 'Constructive dismissal is an involuntary resignation forced by an employer\'s unjust, discriminatory, or hostile treatment, legally treated as illegal dismissal.',
    topicRef: '5.0 Labor Law in Education'
  },
  {
    id: 34,
    question: "What is 'Probationary Period' for full-time academic personnel in private educational institutions under the Manual of Regulations for Private Higher Education (MORPHE)?",
    options: [
      { key: 'A', text: 'Three (3) consecutive school years of satisfactory full-time service before attaining permanent regular employment status' },
      { key: 'B', text: 'Six months' },
      { key: 'C', text: 'Ten years' },
      { key: 'D', text: 'One week' }
    ],
    correctAnswer: 'A',
    explanation: 'The Supreme Court and MORPHE establish that full-time private school teachers achieve permanent tenure upon completing 3 consecutive years of satisfactory service.',
    topicRef: '5.0 Private School Regulations & Tenure'
  },
  {
    id: 35,
    question: "Under Article IV of the Code of Ethics (A Teacher and the Profession), what is every teacher\'s duty toward continuous professional growth?",
    options: [
      { key: 'A', text: 'Every teacher shall actively seek professional growth through graduate studies, seminars, research, and reading professional literature to uphold high teaching standards' },
      { key: 'B', text: 'Stop learning immediately after passing the LET' },
      { key: 'C', text: 'Throw away all books after getting hired' },
      { key: 'D', text: 'Copy lesson plans from 20 years ago without updating' }
    ],
    correctAnswer: 'A',
    explanation: 'Article IV emphasizes that teaching is a noble vocation that demands continuous intellectual, pedagogical, and ethical self-renewal.',
    topicRef: '2.0 Code of Ethics: The Teacher and the Profession'
  },
  {
    id: 36,
    question: "What is the primary role of a 'Master Teacher' in the Philippine public school career ladder?",
    options: [
      { key: 'A', text: 'An instructional expert who mentors novice teachers, conducts action research, and models exemplary teaching without necessarily moving into school administrative positions' },
      { key: 'B', text: 'A teacher who locks the school gate at night' },
      { key: 'C', text: 'The school accountant who issues pay slips' },
      { key: 'D', text: 'A student class president' }
    ],
    correctAnswer: 'A',
    explanation: 'The Master Teacher career track allows expert educators to advance in rank, salary, and instructional leadership while remaining in the active classroom.',
    topicRef: '4.0 DepEd Career Ladders'
  },
  {
    id: 37,
    question: "What does 'Due Process of Law' guarantee to a teacher accused of an administrative charge?",
    options: [
      { key: 'A', text: 'The constitutional right to be informed of the charges, to submit a written answer, to be represented by counsel, and to a fair and impartial hearing' },
      { key: 'B', text: 'Immediate public firing on social media without an investigation' },
      { key: 'C', text: 'Forfeiture of all property without notice' },
      { key: 'D', text: 'Automatic imprisonment without a trial' }
    ],
    correctAnswer: 'A',
    explanation: 'Administrative due process protects teachers against arbitrary dismissals by guaranteeing notice, hearing, and evidence-based findings.',
    topicRef: '5.0 Constitutional Due Process & Administrative Law'
  },
  {
    id: 38,
    question: "Under the Magna Carta for Public School Teachers, what is the 'Indefinite Leave of Absence' granted to teachers suffering from tuberculosis or other illnesses requiring long treatment?",
    options: [
      { key: 'A', text: 'An indefinite leave of absence without danger of losing their teaching position during recovery' },
      { key: 'B', text: 'Automatic cancellation of the teacher\'s license' },
      { key: 'C', text: 'Immediate eviction from the town' },
      { key: 'D', text: 'Demotion to janitorial staff' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 25 of R.A. 4670 guarantees job security during extended medical recovery from conditions like tuberculosis.',
    topicRef: '3.0 RA 4670 Health Protections'
  },
  {
    id: 39,
    question: "What is the 'School-Based Management' (SBM) framework in Philippine education?",
    options: [
      { key: 'A', text: 'Decentralization of decision-making authority to individual schools, empowering school heads, teachers, parents, and community partners to improve student learning outcomes collaboratively' },
      { key: 'B', text: 'Managing all national schools from a single desk in Manila' },
      { key: 'C', text: 'Selling school land to private developers' },
      { key: 'D', text: 'Eliminating all school principals' }
    ],
    correctAnswer: 'A',
    explanation: 'SBM fosters local accountability, continuous school improvement plans (SIP), and shared governance tailored to community context.',
    topicRef: '1.0 School-Based Management (SBM)'
  },
  {
    id: 40,
    question: "Under Article I of the Code of Ethics, what educational sectors are covered by the Code of Ethics for Professional Teachers?",
    options: [
      { key: 'A', text: 'All public and private school teachers in all educational institutions at the preschool, primary, elementary, and secondary levels, whether academic, vocational, special, technical, or non-formal' },
      { key: 'B', text: 'Only college professors in state universities' },
      { key: 'C', text: 'Only private preschool owners' },
      { key: 'D', text: 'Only foreign guest lecturers' }
    ],
    correctAnswer: 'A',
    explanation: 'Article I, Section 2 defines the extensive scope: all licensed professional teachers across all basic education modalities in the Philippines.',
    topicRef: '2.0 Code of Ethics Scope'
  },
  {
    id: 41,
    question: "What is 'Action Research' conducted by classroom teachers in DepEd?",
    options: [
      { key: 'A', text: 'A systematic, reflective inquiry conducted by educators in their own classrooms to diagnose learning problems, test interventions, and improve instructional practice' },
      { key: 'B', text: 'Writing an action movie script' },
      { key: 'C', text: 'Investigating criminal court cases' },
      { key: 'D', text: 'Conducting commercial market surveys for consumer products' }
    ],
    correctAnswer: 'A',
    explanation: 'Action research is teacher-led inquiry focused on real-time classroom challenges to enhance student learning and pedagogical effectiveness.',
    topicRef: '4.0 Teacher as Researcher'
  },
  {
    id: 42,
    question: "Under the Magna Carta for Public School Teachers, how are teacher salaries protected during the summer vacation months?",
    options: [
      { key: 'A', text: 'Public school teachers receive their regular monthly compensation during the summer vacation period (Proportional Vacation Pay - PVP)' },
      { key: 'B', text: 'They receive zero salary for two months' },
      { key: 'C', text: 'They must work in a factory during vacation to earn money' },
      { key: 'D', text: 'Their salaries are donated to charity' }
    ],
    correctAnswer: 'A',
    explanation: 'Public school teachers are entitled to Proportional Vacation Pay (PVP) covering the two-month summer break.',
    topicRef: '3.0 RA 4670 Vacation Pay & Leave'
  },
  {
    id: 43,
    question: "What does the Latin legal maxim 'Ignorantia legis neminem excusat' mean in teacher legal accountability?",
    options: [
      { key: 'A', text: 'Ignorance of the law excuses no one' },
      { key: 'B', text: 'Teachers are exempt from all laws' },
      { key: 'C', text: 'Laws only apply on weekdays' },
      { key: 'D', text: 'Only lawyers need to know the law' }
    ],
    correctAnswer: 'A',
    explanation: 'Article 3 of the Civil Code establishes that all citizens and professionals are presumed to know the law and cannot claim ignorance as a legal defense.',
    topicRef: '5.0 Legal Foundations'
  },
  {
    id: 44,
    question: "What is the 'Learning Action Cell' (LAC, DepEd Order No. 35, s. 2016)?",
    options: [
      { key: 'A', text: 'A school-based community of practice where teachers engage in collaborative professional development, lesson study, and problem solving' },
      { key: 'B', text: 'A detention room for misbehaving teachers' },
      { key: 'C', text: 'A prison cell' },
      { key: 'D', text: 'A chemistry lab battery' }
    ],
    correctAnswer: 'A',
    explanation: 'LAC sessions serve as school-based professional learning communities where teachers collaboratively reflect on pedagogy, curriculum, and learner data.',
    topicRef: '4.0 Professional Learning Communities (LAC)'
  },
  {
    id: 45,
    question: "Under Article II, Section 6 of the Code of Ethics, what is a teacher\'s duty regarding national cultural heritage, pride, and democratic ideals?",
    options: [
      { key: 'A', text: 'Every teacher shall instill in learners a deep love of country, pride in cultural heritage, and commitment to the Constitution and democratic values' },
      { key: 'B', text: 'Teach students to despise their national history' },
      { key: 'C', text: 'Erase all indigenous traditions' },
      { key: 'D', text: 'Burn all Philippine history books' }
    ],
    correctAnswer: 'A',
    explanation: 'The Code of Ethics mandates that educators actively cultivate civic consciousness, patriotism, and reverence for Philippine history and traditions.',
    topicRef: '2.0 Code of Ethics: Civic & Cultural Mission'
  },
  {
    id: 46,
    question: "What is 'Tenure' (Permanency) in educational employment?",
    options: [
      { key: 'A', text: 'Security of employment that protects a teacher from dismissal except for just cause, after due process and fair administrative investigation' },
      { key: 'B', text: 'A guarantee that a teacher will never be evaluated again' },
      { key: 'C', text: 'The right to skip class whenever desired' },
      { key: 'D', text: 'A temporary 1-month contract' }
    ],
    correctAnswer: 'A',
    explanation: 'Tenure protects educators\' academic freedom and livelihoods from arbitrary, political, or unjust dismissal without substantiated just cause.',
    topicRef: '3.0 Security of Tenure'
  },
  {
    id: 47,
    question: "Under R.A. 7836, what is the minimum required rating to pass the Board Licensure Examination for Professional Teachers (BLEPT)?",
    options: [
      { key: 'A', text: 'A general average of not less than 75% with no rating below 50% in any subject' },
      { key: 'B', text: 'A general average of 50%' },
      { key: 'C', text: 'A perfect 100% in all subjects' },
      { key: 'D', text: 'A general average of 60%' }
    ],
    correctAnswer: 'A',
    explanation: 'Section 19 of R.A. 7836 prescribes that a candidate must obtain a general average of at least 75% with no grade lower than 50% in any component.',
    topicRef: '1.0 RA 7836 Licensure Standards'
  },
  {
    id: 48,
    question: "What does 'Transformational Leadership' mean when exhibited by a school principal or teacher leader?",
    options: [
      { key: 'A', text: 'Inspiring, empowering, and motivating others to transcend personal self-interest for a shared vision of educational excellence and institutional growth' },
      { key: 'B', text: 'Ordering employees around with fear and threats' },
      { key: 'C', text: 'Ignoring everyone and sitting silently in an office' },
      { key: 'D', text: 'Changing the school uniform every week' }
    ],
    correctAnswer: 'A',
    explanation: 'Transformational leaders inspire intrinsic motivation, foster collaborative cultures, and stimulate intellectual innovation among followers.',
    topicRef: '4.0 Educational Leadership'
  },
  {
    id: 49,
    question: "Under Batas Pambansa Blg. 232, what is the right of all educational personnel to 'Self-Organization'?",
    options: [
      { key: 'A', text: 'The right to freely form or join unions, teachers\' associations, and professional organizations for their mutual aid, protection, and collective bargaining' },
      { key: 'B', text: 'The right to overthrow the school administration violently' },
      { key: 'C', text: 'The right to refuse to teach students' },
      { key: 'D', text: 'The obligation to join a commercial bank' }
    ],
    correctAnswer: 'A',
    explanation: 'B.P. 232 Section 10 upholds the constitutional right of teachers and school staff to organize professional associations and unions for their collective welfare.',
    topicRef: '1.0 Education Act of 1982: Rights of Personnel'
  },
  {
    id: 50,
    question: "Why is Teaching revered as 'The Mother of All Professions'?",
    options: [
      { key: 'A', text: 'Because every doctor, engineer, lawyer, scientist, leader, and professional owes their foundational knowledge, literacy, and character development to teachers' },
      { key: 'B', text: 'Because only mothers are allowed to teach' },
      { key: 'C', text: 'Because teachers earn the highest salary in the world' },
      { key: 'D', text: 'Because it is the oldest building in a city' }
    ],
    correctAnswer: 'A',
    explanation: 'Teaching is the bedrock of all human professions; every specialized practitioner in society was first nurtured, educated, and inspired by teachers.',
    topicRef: '1.0 The Vocation and Mission of Teaching'
  }
];
