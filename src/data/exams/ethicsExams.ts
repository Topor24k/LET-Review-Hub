import { ExamQuestion } from '../../types';

export const ETHICS_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "In classical philosophy, what is the fundamental distinction between a 'Human Act' (Actus Humanus) and an 'Act of Man' (Actus Hominis)?",
    options: [
      { key: 'A', text: 'Human Acts are performed with full knowledge, freedom, and deliberate voluntariness (moral acts); Acts of Man are involuntary physiological or instinctive actions performed without deliberate will' },
      { key: 'B', text: 'Human Acts are done by adults; Acts of Man are done by children' },
      { key: 'C', text: 'Human Acts are always illegal' },
      { key: 'D', text: 'There is no distinction in ethics' }
    ],
    correctAnswer: 'A',
    explanation: 'Human Acts proceed from deliberate intellect and free will, carrying moral accountability; Acts of Man are natural involuntary acts (digestion, breathing, reflexes) lacking moral culpability.',
    topicRef: '1.0 Human Acts vs Acts of Man'
  },
  {
    id: 2,
    question: "According to Aristotle's Nicomachean Ethics, what is the ultimate goal (Telos) of all human life and action?",
    options: [
      { key: 'A', text: 'Eudaimonia (Human Flourishing, Happiness, and living well in accordance with reason and virtue)' },
      { key: 'B', text: 'Accumulating extreme material wealth' },
      { key: 'C', text: 'Seeking physical pleasure above all else' },
      { key: 'D', text: 'Conquering other nations' }
    ],
    correctAnswer: 'A',
    explanation: 'Aristotle identified Eudaimonia (rational flourishing through virtue) as the supreme self-sufficient human good pursued for its own sake.',
    topicRef: '3.0 Aristotle Virtue Ethics & Eudaimonia'
  },
  {
    id: 3,
    question: "What is Aristotle's 'Doctrine of the Mean' (The Golden Mean) in Virtue Ethics?",
    options: [
      { key: 'A', text: 'Moral virtue is the harmonious balance between two extremes: an excess and a deficiency (e.g., Courage is the mean between Cowardice and Rashness)' },
      { key: 'B', text: 'A mathematical formula for averaging test scores' },
      { key: 'C', text: 'Being mean and harsh to enemies' },
      { key: 'D', text: 'Avoiding all action completely' }
    ],
    correctAnswer: 'A',
    explanation: 'The Golden Mean identifies virtue as the rational midpoint relative to us between vices of deficiency and excess.',
    topicRef: '3.0 The Golden Mean'
  },
  {
    id: 4,
    question: "In Immanuel Kant's Deontological Ethics, what is the 'Categorical Imperative'?",
    options: [
      { key: 'A', text: 'An absolute, unconditional moral command of reason: "Act only according to that maxim whereby you can at the same time will that it should become a universal law."' },
      { key: 'B', text: 'A suggestion that depends on what you feel like doing' },
      { key: 'C', text: 'A legal court order issued by a judge' },
      { key: 'D', text: 'A rule that only applies on Sundays' }
    ],
    correctAnswer: 'A',
    explanation: 'Kant\'s Categorical Imperative commands unconditional duty grounded in pure practical reason, universally binding regardless of desires or consequences.',
    topicRef: '4.0 Kantian Deontology'
  },
  {
    id: 5,
    question: "In Kant's 'Formula of Humanity' (Second Formulation of the Categorical Imperative), how must one treat human beings?",
    options: [
      { key: 'A', text: 'Always treat humanity, whether in your own person or in that of any other, never merely as a means to an end, but always as an end in itself' },
      { key: 'B', text: 'Use people as disposable tools to achieve personal glory' },
      { key: 'C', text: 'Ignore human rights during emergencies' },
      { key: 'D', text: 'Treat people according to their net worth' }
    ],
    correctAnswer: 'A',
    explanation: 'Kant asserts that rational beings possess intrinsic dignity and must never be treated as mere instruments for someone else\'s convenience.',
    topicRef: '4.0 Kantian Deontology: Formula of Humanity'
  },
  {
    id: 6,
    question: "In Utilitarianism (Jeremy Bentham and John Stuart Mill), what is the 'Principle of Utility' (Greatest Happiness Principle)?",
    options: [
      { key: 'A', text: 'Actions are morally right in proportion as they tend to promote the greatest amount of overall happiness/pleasure for the greatest number of people' },
      { key: 'B', text: 'Actions are right if they benefit only the government' },
      { key: 'C', text: 'Actions are right if they strictly follow ancient tradition' },
      { key: 'D', text: 'Actions are right if they maximize personal selfishness' }
    ],
    correctAnswer: 'A',
    explanation: 'Utilitarianism is a consequentialist ethical theory judging moral rightness by the net balance of well-being produced for all affected individuals.',
    topicRef: '5.0 Utilitarianism'
  },
  {
    id: 7,
    question: "How did John Stuart Mill refine Jeremy Bentham's purely quantitative hedonic calculus?",
    options: [
      { key: 'A', text: 'By distinguishing Qualitative Pleasures: Higher intellectual, moral, and aesthetic pleasures are superior to lower base bodily pleasures ("Better to be Socrates dissatisfied than a fool satisfied")' },
      { key: 'B', text: 'By banning all pleasures completely' },
      { key: 'C', text: 'By claiming pain is better than joy' },
      { key: 'D', text: 'By measuring pleasure with a thermometer' }
    ],
    correctAnswer: 'A',
    explanation: 'Mill introduced qualitative distinctions, arguing that intellectual, cultural, and spiritual pursuits hold higher intrinsic value than physical gratification.',
    topicRef: '5.0 Mill vs Bentham Utilitarianism'
  },
  {
    id: 8,
    question: "In St. Thomas Aquinas' Natural Law Ethics, what is the fundamental first precept of practical reason?",
    options: [
      { key: 'A', text: '"Good is to be done and pursued, and evil is to be avoided."' },
      { key: 'B', text: '"Might makes right."' },
      { key: 'C', text: '"Survival of the fittest."' },
      { key: 'D', text: '"Every man for himself."' }
    ],
    correctAnswer: 'A',
    explanation: 'Aquinas formulated the foundational precept of Synderesis/Natural Law: "Bonum est faciendum et prosequendum, et malum vitandum" (Do good and avoid evil).',
    topicRef: '4.0 Aquinas Natural Law Ethics'
  },
  {
    id: 9,
    question: "What are the four 'Modifiers of Human Acts' that can diminish or totally eliminate moral voluntariness and responsibility?",
    options: [
      { key: 'A', text: 'Ignorance, Passion/Concupiscence, Fear, and Violence/Habit' },
      { key: 'B', text: 'Height, Weight, Age, and Eye color' },
      { key: 'C', text: 'Weather, Time, Location, and Speed' },
      { key: 'D', text: 'Pencil, Paper, Eraser, and Ruler' }
    ],
    correctAnswer: 'A',
    explanation: 'The classic modifiers of human acts impair knowledge (ignorance), freedom (fear, violence), or voluntariness (intense passion, deep-seated habit).',
    topicRef: '2.0 Modifiers of Human Acts'
  },
  {
    id: 10,
    question: "What is 'Invincible Ignorance' versus 'Vincible Ignorance' in moral theology and ethics?",
    options: [
      { key: 'A', text: 'Invincible ignorance cannot be dispelled despite ordinary human diligence (destroys moral culpability); Vincible ignorance can be overcome through reasonable effort (diminishes but does not eliminate culpability)' },
      { key: 'B', text: 'Invincible ignorance is a crime; vincible is legal' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'Vincible ignorance applies only to children' }
    ],
    correctAnswer: 'A',
    explanation: 'Invincible ignorance excuses moral responsibility because the agent had no way of knowing; vincible ignorance entails negligence and remains blameworthy.',
    topicRef: '2.0 Ignorance and Moral Culpability'
  },
  {
    id: 11,
    question: "What is the 'Principle of Double Effect' in moral ethics (St. Thomas Aquinas)?",
    options: [
      { key: 'A', text: 'An ethical principle allowing an action with both a good and a bad outcome, provided: 1) the act itself is morally good/neutral, 2) the bad effect is not intended as a means, 3) the good effect directly follows, and 4) there is proportional gravity' },
      { key: 'B', text: 'Doing two bad things to cancel each other out' },
      { key: 'C', text: 'Getting paid twice for one job' },
      { key: 'D', text: 'Repeating a moral act twice' }
    ],
    correctAnswer: 'A',
    explanation: 'The Principle of Double Effect provides guidelines for moral decisions where a necessary good action unintentionally results in a foreseeable secondary harmful effect.',
    topicRef: '4.0 Principle of Double Effect'
  },
  {
    id: 12,
    question: "What is 'Cultural Relativism' in metaethics?",
    options: [
      { key: 'A', text: 'The view that moral standards, right, and wrong are entirely defined by the customs, norms, and consensus of individual cultures, with no objective universal moral truths' },
      { key: 'B', text: 'The belief that one\'s own culture is superior to all others' },
      { key: 'C', text: 'A scientific law of gravity' },
      { key: 'D', text: 'The study of ancient fossils' }
    ],
    correctAnswer: 'A',
    explanation: 'Ethical cultural relativism denies objective cross-cultural moral truths, asserting that moral codes are solely cultural conventions.',
    topicRef: '1.0 Metaethics & Relativism'
  },
  {
    id: 13,
    question: "What is 'Ethical Egoism'?",
    options: [
      { key: 'A', text: 'The normative ethical position that moral agents ought to do what is strictly in their own self-interest as the fundamental standard of right action' },
      { key: 'B', text: 'Sacrificing one\'s life for strangers' },
      { key: 'C', text: 'Donating all income to charities' },
      { key: 'D', text: 'Loving everyone equally' }
    ],
    correctAnswer: 'A',
    explanation: 'Ethical Egoism (championed by Ayn Rand / rational egoism) claims that acting in one\'s enlightened long-term self-interest is the only moral obligation.',
    topicRef: '1.0 Ethical Egoism'
  },
  {
    id: 14,
    question: "What are the four 'Cardinal Virtues' identified by Plato and Aristotle?",
    options: [
      { key: 'A', text: 'Prudence (Wisdom), Temperance (Moderation), Fortitude (Courage), and Justice' },
      { key: 'B', text: 'Faith, Hope, Charity, and Love' },
      { key: 'C', text: 'Money, Power, Fame, and Glory' },
      { key: 'D', text: 'Reading, Writing, Arithmetic, and Art' }
    ],
    correctAnswer: 'A',
    explanation: 'The four cardinal virtues (cardo = hinge) form the pivotal moral hinges of a flourishing character: Prudence, Temperance, Fortitude, and Justice.',
    topicRef: '3.0 The 4 Cardinal Virtues'
  },
  {
    id: 15,
    question: "What is the famous 'Trolley Problem' (Philippa Foot / Judith Jarvis Thomson) designed to explore?",
    options: [
      { key: 'A', text: 'The ethical tension between Utilitarian consequentialism (maximizing lives saved) and Deontological rights-based ethics (the prohibition against directly causing an innocent death)' },
      { key: 'B', text: 'The mechanical efficiency of electric locomotives' },
      { key: 'C', text: 'Railway construction economics' },
      { key: 'D', text: 'How to buy train tickets' }
    ],
    correctAnswer: 'A',
    explanation: 'The Trolley Problem creates a philosophical dilemma contrasting the consequentialist impulse to switch tracks against deontological non-harm duties.',
    topicRef: '5.0 Moral Dilemmas: Trolley Problem'
  },
  {
    id: 16,
    question: "What is 'Conscience' in classical ethics?",
    options: [
      { key: 'A', text: 'The practical judgment of human reason deciding whether a particular concrete act is morally good and ought to be done, or evil and ought to be avoided' },
      { key: 'B', text: 'A physical organ in the chest' },
      { key: 'C', text: 'A supernatural voice audible through the ears' },
      { key: 'D', text: 'Fear of being arrested by police' }
    ],
    correctAnswer: 'A',
    explanation: 'Conscience is the intellectual application of moral principles to a concrete personal choice: the inner tribunal of practical moral reason.',
    topicRef: '1.0 Nature and Types of Conscience'
  },
  {
    id: 17,
    question: "What is a 'Scrupulous Conscience' versus a 'Lax Conscience'?",
    options: [
      { key: 'A', text: 'A scrupulous conscience constantly fears sin where there is none and exaggerates trivial faults; a lax conscience carelessly minimizes gravity and excuses real moral wrongs' },
      { key: 'B', text: 'Scrupulous is good; lax is bad' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'A lax conscience is strictly legal' }
    ],
    correctAnswer: 'A',
    explanation: 'A scrupulous conscience is paralyzed by unfounded guilt; a lax conscience becomes desensitized to actual wrongdoing.',
    topicRef: '1.0 Types of Conscience'
  },
  {
    id: 18,
    question: "In moral philosophy, what are the three 'Determinants of Morality' (Sources of Morality) for evaluating a human act?",
    options: [
      { key: 'A', text: 'The Object (the act itself), the Intention/End (motive), and the Circumstances (context, who, where, when, how)' },
      { key: 'B', text: 'Money, Time, and Energy' },
      { key: 'C', text: 'Author, Reader, and Publisher' },
      { key: 'D', text: 'Past, Present, and Future' }
    ],
    correctAnswer: 'A',
    explanation: 'Classical ethics dictates that for an act to be morally good, all three determinants must be good: "Bonum ex integra causa, malum ex quocumque defectu."',
    topicRef: '2.0 The Three Determinants of Morality'
  },
  {
    id: 19,
    question: "What is an 'Intrinsically Evil' act (Intrinsece Malum)?",
    options: [
      { key: 'A', text: 'An act that is inherently and fundamentally wrong by its very nature/object, and can never be justified by any intention or circumstance (e.g., torture, rape, genocide)' },
      { key: 'B', text: 'An act that is only bad if caught' },
      { key: 'C', text: 'An act that is bad on weekdays' },
      { key: 'D', text: 'A minor traffic infraction' }
    ],
    correctAnswer: 'A',
    explanation: 'Intrinsically evil acts are fundamentally disordered in their object; no noble intention or extreme circumstance can ever make them morally right.',
    topicRef: '2.0 Determinants of Morality'
  },
  {
    id: 20,
    question: "What is 'Emotivism' (A.J. Ayer, C.L. Stevenson) in metaethics?",
    options: [
      { key: 'A', text: 'The non-cognitivist view that moral statements are not factual propositions of truth, but mere expressions of emotional approval or disapproval ("Hurrah/Boo" theory)' },
      { key: 'B', text: 'Crying during sad movies' },
      { key: 'C', text: 'The study of human brain chemistry' },
      { key: 'D', text: 'Aristotle\'s theory of happiness' }
    ],
    correctAnswer: 'A',
    explanation: 'Logical positivist Emotivism claims moral statements ("Stealing is wrong") are simply emotive exclamations ("Boo on stealing!") lacking objective truth value.',
    topicRef: '1.0 Metaethics: Emotivism'
  },
  {
    id: 21,
    question: "What is 'Social Contract Theory' in political ethics (Thomas Hobbes, John Locke, Jean-Jacques Rousseau)?",
    options: [
      { key: 'A', text: 'The theory that moral and political obligations are dependent upon an agreement or contract among individuals to form the society and government in which they live' },
      { key: 'B', text: 'A business contract to build roads' },
      { key: 'C', text: 'A marriage certificate' },
      { key: 'D', text: 'A commercial employment agreement' }
    ],
    correctAnswer: 'A',
    explanation: 'Social Contract Theory posits that rational individuals surrender certain unrestricted natural liberties in exchange for mutual security and social order.',
    topicRef: '5.0 Social Contract Theory'
  },
  {
    id: 22,
    question: "How did Thomas Hobbes describe human life in the 'State of Nature' before the social contract in Leviathan?",
    options: [
      { key: 'A', text: '"Solitary, poor, nasty, brutish, and short" (a perpetual war of all against all)' },
      { key: 'B', text: 'A peaceful paradise of harmony' },
      { key: 'C', text: 'A high-tech digital civilization' },
      { key: 'D', text: 'An eternal vacation' }
    ],
    correctAnswer: 'A',
    explanation: 'Hobbes argued that without sovereign authority, unregulated human self-interest leads to a state of relentless conflict and fear.',
    topicRef: '5.0 Hobbesian Political Philosophy'
  },
  {
    id: 23,
    question: "In John Locke's political philosophy, what are the fundamental 'Natural Rights' that governments are instituted to protect?",
    options: [
      { key: 'A', text: 'Life, Liberty, and Property (Estate)' },
      { key: 'B', text: 'Money, Fame, and Travel' },
      { key: 'C', text: 'Weapons, Titles, and Gold' },
      { key: 'D', text: 'Food, Clothing, and Shelter only' }
    ],
    correctAnswer: 'A',
    explanation: 'Locke\'s natural rights doctrine heavily shaped democratic constitutions, asserting that legitimate governments exist solely to protect life, liberty, and property.',
    topicRef: '5.0 Locke Natural Rights'
  },
  {
    id: 24,
    question: "What is 'Veil of Ignorance' in John Rawls' Theory of Justice?",
    options: [
      { key: 'A', text: 'A thought experiment where decision-makers design rules of justice for a society without knowing their own future race, gender, wealth, social class, or talents' },
      { key: 'B', text: 'Wearing a blindfold during a judicial trial' },
      { key: 'C', text: 'Refusing to read the news' },
      { key: 'D', text: 'Ignoring court orders' }
    ],
    correctAnswer: 'A',
    explanation: 'Rawls proposed the Veil of Ignorance to ensure impartiality: choosing principles of justice that fairly protect everyone, especially the least advantaged.',
    topicRef: '5.0 Rawlsian Justice'
  },
  {
    id: 25,
    question: "What does 'Care Ethics' (Nel Noddings / Virginia Held) emphasize as the core of moral life?",
    options: [
      { key: 'A', text: 'Interpersonal relationships, responsiveness, empathy, mutual dependence, and caring for concrete vulnerable human beings' },
      { key: 'B', text: 'Strict adherence to cold, mathematical calculations' },
      { key: 'C', text: 'Harsh authoritarian punishment' },
      { key: 'D', text: 'Winning competitive debates' }
    ],
    correctAnswer: 'A',
    explanation: 'Feminist Care Ethics prioritizes relational responsibilities, compassionate attentiveness, and contextual nurturing over detached abstract rule-following.',
    topicRef: '3.0 Care Ethics'
  },
  {
    id: 26,
    question: "What is 'Hedonism' in ethical value theories?",
    options: [
      { key: 'A', text: 'The philosophical view that pleasure/avoidance of pain is the sole intrinsic good and primary purpose of human existence' },
      { key: 'B', text: 'The practice of daily fasting and asceticism' },
      { key: 'C', text: 'The worship of scientific machines' },
      { key: 'D', text: 'Devotion to military drills' }
    ],
    correctAnswer: 'A',
    explanation: 'Hedonism (Epicureanism, Cyrenaicism) posits pleasure as the only intrinsic positive value in human life.',
    topicRef: '1.0 Value Theories: Hedonism'
  },
  {
    id: 27,
    question: "How did Epicurus define the highest form of pleasure in Epicureanism?",
    options: [
      { key: 'A', text: 'Ataraxia (Untroubled tranquility of mind, freedom from anxiety, and absence of bodily pain through simple living and friendship)' },
      { key: 'B', text: 'Wild, drunken, non-stop partying' },
      { key: 'C', text: 'Hoarding massive golden treasures' },
      { key: 'D', text: 'Ruling an empire' }
    ],
    correctAnswer: 'A',
    explanation: 'Contrary to modern stereotypes, Epicurus advocated modest living, intellectual reflection, and serenity of mind (ataraxia) rather than physical excesses.',
    topicRef: '1.0 Epicurean Ethics'
  },
  {
    id: 28,
    question: "What is the core ethical teaching of 'Stoicism' (Zeno of Citium, Seneca, Epictetus, Marcus Aurelius)?",
    options: [
      { key: 'A', text: 'Virtue is the only true good; focus strictly on what is within your control (your thoughts and choices) and accept external events with equanimity (Amor Fati)' },
      { key: 'B', text: 'Crying whenever you face a problem' },
      { key: 'C', text: 'Blaming everyone else for bad luck' },
      { key: 'D', text: 'Trying to control the entire universe' }
    ],
    correctAnswer: 'A',
    explanation: 'Stoics teach the dichotomy of control: master your internal responses and cultivate moral virtue, maintaining composure in the face of fate.',
    topicRef: '3.0 Stoic Philosophy'
  },
  {
    id: 29,
    question: "What is 'Moral Dilemma' in applied ethics?",
    options: [
      { key: 'A', text: 'A complex situation where an agent is confronted with two or more moral obligations, but fulfilling one inevitably violates another, with no obvious easy solution' },
      { key: 'B', text: 'Choosing which movie to watch' },
      { key: 'C', text: 'A multiple choice test question' },
      { key: 'D', text: 'Having no choices at all' }
    ],
    correctAnswer: 'A',
    explanation: 'Moral dilemmas involve competing ethical mandates where every available choice carries severe moral weight and potential wrongdoing.',
    topicRef: '1.0 Moral Dilemmas'
  },
  {
    id: 30,
    question: "What is 'Whistleblowing' in professional and business ethics?",
    options: [
      { key: 'A', text: 'The disclosure by an employee of illegal, unethical, dangerous, or fraudulent practices within an organization to authorities or the public' },
      { key: 'B', text: 'Refereeing a soccer game' },
      { key: 'C', text: 'Playing a musical flute' },
      { key: 'D', text: 'Spreading office gossip for entertainment' }
    ],
    correctAnswer: 'A',
    explanation: 'Whistleblowing involves courageously exposing institutional corruption, health hazards, or crimes to protect the public interest.',
    topicRef: '5.0 Business & Professional Ethics'
  },
  {
    id: 31,
    question: "In biomedical ethics, what are the four classic principles of Beauchamp and Childress?",
    options: [
      { key: 'A', text: 'Autonomy, Non-maleficence, Beneficence, and Justice' },
      { key: 'B', text: 'Diagnosis, Prescription, Surgery, and Billing' },
      { key: 'C', text: 'Heart, Lungs, Liver, and Kidneys' },
      { key: 'D', text: 'Birth, Growth, Aging, and Death' }
    ],
    correctAnswer: 'A',
    explanation: 'The four principles of bioethics: Autonomy (patient self-determination), Non-maleficence (do no harm), Beneficence (act for good), and Justice (fairness).',
    topicRef: '5.0 Bioethics Principles'
  },
  {
    id: 32,
    question: "What is 'Informed Consent' in medical ethics and research?",
    options: [
      { key: 'A', text: 'The voluntary agreement of a competent individual to undergo a medical procedure or participate in research after being fully educated about risks, benefits, and alternatives' },
      { key: 'B', text: 'Signing a document without reading it' },
      { key: 'C', text: 'Forcing a patient into clinical trials' },
      { key: 'D', text: 'A hospital bill' }
    ],
    correctAnswer: 'A',
    explanation: 'Informed consent protects patient autonomy, guaranteeing the right to know and voluntarily decide on medical interventions.',
    topicRef: '5.0 Bioethics: Informed Consent'
  },
  {
    id: 33,
    question: "What is 'Euthanasia' and how is Active Euthanasia distinguished from Passive Euthanasia?",
    options: [
      { key: 'A', text: 'Active euthanasia involves intentionally administering a lethal substance to end life; Passive euthanasia involves withholding or withdrawing life-sustaining medical treatments' },
      { key: 'B', text: 'Active is natural; passive is artificial' },
      { key: 'C', text: 'They are identical medical procedures' },
      { key: 'D', text: 'Passive euthanasia is performed by animals' }
    ],
    correctAnswer: 'A',
    explanation: 'Active euthanasia takes direct physical action to cause death; passive euthanasia lets the underlying terminal disease take its natural course by withholding interventions.',
    topicRef: '5.0 Bioethics: End-of-Life Decisions'
  },
  {
    id: 34,
    question: "What is 'Moral Relativism' versus 'Moral Objectivism'?",
    options: [
      { key: 'A', text: 'Relativism holds that moral truths depend on cultural or personal beliefs; Objectivism holds that universal moral principles exist independently of human opinions' },
      { key: 'B', text: 'Relativism is scientific; objectivism is superstitious' },
      { key: 'C', text: 'They are synonyms' },
      { key: 'D', text: 'Objectivism means having no morals' }
    ],
    correctAnswer: 'A',
    explanation: 'Objectivism asserts that some moral duties are universally true across all times and places; relativism claims morality is purely socially constructed.',
    topicRef: '1.0 Metaethics'
  },
  {
    id: 35,
    question: "What is 'Socratic Method' (Elenchus) in ethical inquiry?",
    options: [
      { key: 'A', text: 'A cooperative argumentative dialogue of disciplined question-and-answer to examine assumptions, uncover contradictions, and stimulate critical moral reflection' },
      { key: 'B', text: 'Delivering a 4-hour continuous lecture' },
      { key: 'C', text: 'Writing a multiple choice exam' },
      { key: 'D', text: 'Demanding silence from students' }
    ],
    correctAnswer: 'A',
    explanation: 'Socrates used dialectical questioning (elenchus) to expose unexamined dogmas and help interlocutors discover genuine philosophical clarity.',
    topicRef: '1.0 Socratic Ethics & Philosophy'
  },
  {
    id: 36,
    question: "What did Socrates mean by his famous dictum: 'The unexamined life is not worth living'?",
    options: [
      { key: 'A', text: 'A human life spent without self-reflection, critical examination of virtues, and search for moral truth lacks true human purpose and dignity' },
      { key: 'B', text: 'You must take written exams every day' },
      { key: 'C', text: 'Only doctors should examine people' },
      { key: 'D', text: 'Life is completely meaningless' }
    ],
    correctAnswer: 'A',
    explanation: 'Socrates urged that human flourishing requires constant critical introspection, seeking wisdom, virtue, and self-knowledge.',
    topicRef: '1.0 Socratic Dictums'
  },
  {
    id: 37,
    question: "What is 'Akrasia' in classical Greek ethics?",
    options: [
      { key: 'A', text: 'Weakness of will; acting against one\'s better judgment or moral knowledge due to lack of self-control' },
      { key: 'B', text: 'Extreme physical muscle strength' },
      { key: 'C', text: 'High intellectual IQ' },
      { key: 'D', text: 'A legal court penalty' }
    ],
    correctAnswer: 'A',
    explanation: 'Akrasia is moral weakness of will—knowing what is right, yet succumbing to irrational passion or temptation.',
    topicRef: '3.0 Greek Ethical Concepts'
  },
  {
    id: 38,
    question: "What is the 'Divine Command Theory' in theological ethics?",
    options: [
      { key: 'A', text: 'The metaethical theory that an action\'s moral status is determined solely by whether it is commanded or forbidden by God' },
      { key: 'B', text: 'A military battle plan' },
      { key: 'C', text: 'A civil law written by kings' },
      { key: 'D', text: 'A theory that bans all religions' }
    ],
    correctAnswer: 'A',
    explanation: 'Divine Command Theory roots the standard of right and wrong directly in the commands, character, and will of God.',
    topicRef: '4.0 Theological Ethics'
  },
  {
    id: 39,
    question: "What is the 'Euthyphro Dilemma' posed by Plato in the dialogue Euthyphro?",
    options: [
      { key: 'A', text: '"Is the pious/good loved by the gods because it is good, or is it good because it is loved by the gods?"' },
      { key: 'B', text: '"Should we build wooden ships or stone temples?"' },
      { key: 'C', text: '"Is Athens larger than Sparta?"' },
      { key: 'D', text: '"Can humans fly like birds?"' }
    ],
    correctAnswer: 'A',
    explanation: 'Plato\'s Euthyphro dilemma challenges whether goodness exists independently of divine preference, or if goodness is arbitrary based purely on divine whim.',
    topicRef: '1.0 Plato Euthyphro Dilemma'
  },
  {
    id: 40,
    question: "What is 'Retributive Justice' compared to 'Restorative Justice'?",
    options: [
      { key: 'A', text: 'Retributive justice focuses on proportional punishment for offenses ("an eye for an eye"); Restorative justice focuses on repairing harm, reconciliation, and healing relationships' },
      { key: 'B', text: 'Retributive is peaceful; restorative is violent' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'Restorative justice is illegal' }
    ],
    correctAnswer: 'A',
    explanation: 'Retributive justice seeks retributive retribution against offenders; restorative justice brings victims, offenders, and communities together to repair harm.',
    topicRef: '5.0 Theories of Justice'
  },
  {
    id: 41,
    question: "In environmental ethics, what is 'Anthropocentrism' versus 'Biocentrism' / 'Ecocentrism'?",
    options: [
      { key: 'A', text: 'Anthropocentrism places human beings at the center of moral value; Biocentrism/Ecocentrism grants intrinsic moral value to all living organisms and natural ecosystems' },
      { key: 'B', text: 'Anthropocentrism loves animals; biocentrism hates plants' },
      { key: 'C', text: 'They are synonyms' },
      { key: 'D', text: 'Ecocentrism means building more factories' }
    ],
    correctAnswer: 'A',
    explanation: 'Anthropocentrism views nature solely as a resource for human benefit, while biocentrism/ecocentrism recognizes the inherent moral standing of the living biosphere.',
    topicRef: '5.0 Environmental Ethics'
  },
  {
    id: 42,
    question: "What is 'Machiavellianism' in political morality (Niccolò Machiavelli, The Prince)?",
    options: [
      { key: 'A', text: 'The pragmatic philosophy that political survival and power justify any means, including deceit, cruelty, and opportunism ("The end justifies the means")' },
      { key: 'B', text: 'Devout saintly living' },
      { key: 'C', text: 'A mathematical algorithm' },
      { key: 'D', text: 'Universal pacifism' }
    ],
    correctAnswer: 'A',
    explanation: 'Machiavelli advocated political realpolitik, divorcing governance from traditional ethics in favor of power consolidation and statecraft pragmatism.',
    topicRef: '5.0 Political Realism & Machiavellianism'
  },
  {
    id: 43,
    question: "What is 'Universal Declaration of Human Rights' (UDHR, UN 1948) grounded on morally?",
    options: [
      { key: 'A', text: 'The inherent dignity, inalienable rights, and equal worth of all members of the human family' },
      { key: 'B', text: 'The military power of the victorious nations' },
      { key: 'C', text: 'The gross domestic product of rich countries' },
      { key: 'D', text: 'Membership in specific political parties' }
    ],
    correctAnswer: 'A',
    explanation: 'The Preamble of the UDHR asserts that recognition of the inherent dignity and equal, inalienable rights of all humans is the foundation of freedom, justice, and peace.',
    topicRef: '5.0 Human Rights Ethics: UDHR'
  },
  {
    id: 44,
    question: "What is 'Moral Hazard' in financial and organizational ethics?",
    options: [
      { key: 'A', text: 'A situation where an entity is incentivized to take excessive, reckless risks because they know the negative consequences or costs will be borne by others' },
      { key: 'B', text: 'A slippery sidewalk' },
      { key: 'C', text: 'A hazardous chemical waste spill' },
      { key: 'D', text: 'A bank offering free coffee' }
    ],
    correctAnswer: 'A',
    explanation: 'Moral hazard occurs when individuals or corporations (e.g., "too big to fail" banks) take destructive risks because they are insulated from negative fallout by bailouts.',
    topicRef: '5.0 Applied & Organizational Ethics'
  },
  {
    id: 45,
    question: "What is 'Epistemic Injustice' (Miranda Fricker)?",
    options: [
      { key: 'A', text: 'Unfairness related to knowledge, trust, and credibility—such as giving someone less credibility as a speaker due to prejudice against their identity (Testimonial Injustice)' },
      { key: 'B', text: 'Failing a history exam' },
      { key: 'C', text: 'Forgetting an author\'s name' },
      { key: 'D', text: 'Writing a difficult research paper' }
    ],
    correctAnswer: 'A',
    explanation: 'Epistemic injustice occurs when prejudice degrades a person\'s capacity as a knower and communicator in social discourse.',
    topicRef: '1.0 Epistemic Ethics'
  },
  {
    id: 46,
    question: "What is the 'Tragedy of the Commons' (Garrett Hardin)?",
    options: [
      { key: 'A', text: 'An economic and ethical problem where individual users acting independently according to their own self-interest deplete or spoil a shared common resource, ruining it for all' },
      { key: 'B', text: 'A tragic Shakespearean drama' },
      { key: 'C', text: 'A traffic jam in a park' },
      { key: 'D', text: 'A school closing during rain' }
    ],
    correctAnswer: 'A',
    explanation: 'The Tragedy of the Commons demonstrates why unregulated individual short-term self-interest inevitably destroys shared resources (fisheries, clean air, forests).',
    topicRef: '5.0 Environmental & Collective Ethics'
  },
  {
    id: 47,
    question: "What is 'Moral Courage'?",
    options: [
      { key: 'A', text: 'The unwavering commitment to stand up for ethical principles and act rightly despite the presence of immense danger, ridicule, social ostracization, or personal sacrifice' },
      { key: 'B', text: 'Lifting heavy weights at the gym' },
      { key: 'C', text: 'Shouting insults in public' },
      { key: 'D', text: 'Following the crowd blindly' }
    ],
    correctAnswer: 'A',
    explanation: 'Moral courage is the virtue that bridges ethical knowledge and ethical action, empowering an individual to uphold justice against formidable pressure.',
    topicRef: '3.0 Moral Courage & Character'
  },
  {
    id: 48,
    question: "What is 'Altruism' in moral psychology?",
    options: [
      { key: 'A', text: 'Selfless concern and action for the well-being and happiness of other people without seeking personal reward or recognition' },
      { key: 'B', text: 'Extreme greed' },
      { key: 'C', text: 'A scientific instrument' },
      { key: 'D', text: 'Commercial advertising' }
    ],
    correctAnswer: 'A',
    explanation: 'Altruism represents genuine prosocial benevolence where an agent prioritizes others\' welfare above their own immediate self-interest.',
    topicRef: '1.0 Altruism vs Egoism'
  },
  {
    id: 49,
    question: "What is 'Moral Distress' commonly experienced by professionals (e.g., healthcare workers, teachers)?",
    options: [
      { key: 'A', text: 'The psychological and emotional suffering that occurs when one knows the morally correct action to take, but is prevented from taking it due to institutional or systemic constraints' },
      { key: 'B', text: 'Physical muscle exhaustion' },
      { key: 'C', text: 'Missing a flight' },
      { key: 'D', text: 'Winning an award' }
    ],
    correctAnswer: 'A',
    explanation: 'Moral distress arises when external hierarchies, bureaucratic policies, or systemic deficits obstruct professionals from acting in accordance with their ethical conscience.',
    topicRef: '5.0 Professional Ethics'
  },
  {
    id: 50,
    question: "Why is the study of Ethics indispensable for prospective professional teachers?",
    options: [
      { key: 'A', text: 'Because teachers hold immense moral responsibility over young lives, model ethical values, and must navigate complex decisions with justice, integrity, and empathy' },
      { key: 'B', text: 'To memorize Latin phrases' },
      { key: 'C', text: 'To avoid speaking to parents' },
      { key: 'D', text: 'Because it is an easy course with no exams' }
    ],
    correctAnswer: 'A',
    explanation: 'Ethics anchors the entire teaching vocation: educators shape the moral development of future generations and must embody unblemished moral integrity.',
    topicRef: '1.0 Ethics and the Teaching Vocation'
  }
];
