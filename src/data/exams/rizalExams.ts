import { ExamQuestion } from '../../types';

export const RIZAL_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "What is the full baptismal name of the Philippine National Hero, Dr. Jose Rizal?",
    options: [
      { key: 'A', text: 'Jose Protacio Rizal Mercado y Alonso Realonda' },
      { key: 'B', text: 'Jose Maria Rizal y Mercado' },
      { key: 'C', text: 'Jose Antonio Mercado y Realonda' },
      { key: 'D', text: 'Jose Paciano Rizal Alonso' }
    ],
    correctAnswer: 'A',
    explanation: 'Jose Protacio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna.',
    topicRef: '1.0 Rizal\'s Full Name and Birth'
  },
  {
    id: 2,
    question: "What is Republic Act No. 1425, famously known as the 'Rizal Law', authored by Senator Claro M. Recto and signed in 1956?",
    options: [
      { key: 'A', text: 'An act mandating the inclusion of courses on the life, works, and writings of Jose Rizal, particularly his novels Noli Me Tangere and El Filibusterismo, in all public and private school, college, and university curricula' },
      { key: 'B', text: 'An act declaring Rizal\'s birthday a nationwide public holiday' },
      { key: 'C', text: 'A law ordering the construction of Rizal monuments in every town plaza' },
      { key: 'D', text: 'A law naming the province of Rizal after the hero' }
    ],
    correctAnswer: 'A',
    explanation: 'RA 1425 (sponsored by Jose P. Laurel and authored by Claro M. Recto) aims to rekindle patriotism and civic virtues in Filipino youth through Rizal\'s ideals.',
    topicRef: '1.0 RA 1425: The Rizal Law'
  },
  {
    id: 3,
    question: "Who was Jose Rizal\'s mother and first teacher who taught him the alphabet and read him the fable of the 'Young Moth'?",
    options: [
      { key: 'A', text: 'Teodora Alonso Realonda' },
      { key: 'B', text: 'Saturnina Mercado' },
      { key: 'C', text: 'Narcisa Alonso' },
      { key: 'D', text: 'Concepcion Rizal' }
    ],
    correctAnswer: 'A',
    explanation: 'Doña Teodora Alonso was an educated, cultured woman who nurtured young Pepe\'s literary and moral sensitivities.',
    topicRef: '1.0 Early Childhood: Teodora Alonso'
  },
  {
    id: 4,
    question: "Who was Jose Rizal\'s only older brother who supported his education in Europe and became a general in the Philippine Revolutionary Army?",
    options: [
      { key: 'A', text: 'Paciano Rizal Mercado' },
      { key: 'B', text: 'Mariano Mercado' },
      { key: 'C', text: 'Manuel Alonso' },
      { key: 'D', text: 'Francisco Mercado' }
    ],
    correctAnswer: 'A',
    explanation: 'Paciano acted as Jose\'s guardian, mentor, and financial benefactor in Europe; he later joined Emilio Aguinaldo\'s revolutionary forces.',
    topicRef: '1.0 Rizal Family: Paciano'
  },
  {
    id: 5,
    question: "What was the tragic story told by Doña Teodora to young Pepe that left a profound imprint on his destiny regarding sacrificing one\'s life for a noble flame?",
    options: [
      { key: 'A', text: 'The Parable of the Moth and the Flame (Ang Munting Gamu-gamo)' },
      { key: 'B', text: 'The Tortoise and the Monkey' },
      { key: 'C', text: 'The Legend of Maria Makiling' },
      { key: 'D', text: 'The Ant and the Grasshopper' }
    ],
    correctAnswer: 'A',
    explanation: 'The young moth\'s fatal attraction to the flame became a poignant metaphor for Rizal\'s willing martyrdom for the illumination and freedom of his motherland.',
    topicRef: '1.0 Story of the Moth'
  },
  {
    id: 6,
    question: "At what age and in what year did Rizal reportedly write his first Tagalog poem 'Sa Aking Mga Kabata' celebrating love for one\'s native language?",
    options: [
      { key: 'A', text: 'At age 8 (1869) containing the famous line \'Ang hindi magmahal sa sariling wika, daig pa ang hayop at malansang isda\'' },
      { key: 'B', text: 'At age 15 in Ateneo' },
      { key: 'C', text: 'At age 21 in Madrid' },
      { key: 'D', text: 'At age 35 in Fort Santiago' }
    ],
    correctAnswer: 'A',
    explanation: 'Traditionally attributed to young Rizal at age 8 in Calamba, emphasizing love and development of the mother tongue.',
    topicRef: '1.0 Early Literary Works: Sa Aking Mga Kabata'
  },
  {
    id: 7,
    question: "Which Jesuit institution in Manila did Rizal attend from 1872 to 1877, graduating with highest honors (Sobresaliente) and receiving the degree of Bachelor of Arts?",
    options: [
      { key: 'A', text: 'Ateneo Municipal de Manila' },
      { key: 'B', text: 'Colegio de San Juan de Letran' },
      { key: 'C', text: 'University of Santo Tomas' },
      { key: 'D', text: 'Universidad Central de Madrid' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal excelled at Ateneo under the Jesuit educational system (divided into Roman Empire and Carthaginian Empire), earning straight excellent marks.',
    topicRef: '2.0 Education at Ateneo Municipal'
  },
  {
    id: 8,
    question: "What prize-winning poem did Rizal write at age 18 in 1879 at the University of Santo Tomas, hailing the Filipino youth as the 'Fair Hope of My Fatherland' (Bella esperanza de la patria mia)?",
    options: [
      { key: 'A', text: 'A La Juventud Filipina (To the Filipino Youth)' },
      { key: 'B', text: 'El Consejo de los Dioses' },
      { key: 'C', text: 'Mi Ultimo Adios' },
      { key: 'D', text: 'Himno al Trabajo' }
    ],
    correctAnswer: 'A',
    explanation: 'A La Juventud Filipina was a groundbreaking literary piece explicitly calling native Filipinos the youth and hope of their own motherland, rather than Spain.',
    topicRef: '2.0 Literary Works: A La Juventud Filipina'
  },
  {
    id: 9,
    question: "Why did Rizal secretly depart the Philippines for Spain in May 1882 aboard the steamer SS Salvadora?",
    options: [
      { key: 'A', text: 'To complete his medical studies, specialize in ophthalmology to cure his mother\'s failing eyesight, and observe European life and politics to prepare for national advocacy' },
      { key: 'B', text: 'To join the Spanish Navy' },
      { key: 'C', text: 'To escape a criminal conviction' },
      { key: 'D', text: 'To marry a European princess' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal\'s secret mission was to acquire modern medical expertise in ophthalmology and study European liberal institutions for the Filipino reform movement.',
    topicRef: '2.0 Secret Departure to Europe (1882)'
  },
  {
    id: 10,
    question: "At which university in Spain did Rizal earn his Licentiate in Medicine and Licentiate in Philosophy and Letters in 1884–1885?",
    options: [
      { key: 'A', text: 'Universidad Central de Madrid' },
      { key: 'B', text: 'University of Barcelona' },
      { key: 'C', text: 'University of Salamanca' },
      { key: 'D', text: 'University of Heidelberg' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal studied diligently in Madrid while actively participating in the Circulo Hispano-Filipino and Freemasonry (Lodge Acacia).',
    topicRef: '2.0 Higher Education in Madrid'
  },
  {
    id: 11,
    question: "Under which renowned German ophthalmologist did Rizal train in eye surgery at the eye clinic in Paris and the University Eye Hospital in Heidelberg?",
    options: [
      { key: 'A', text: 'Dr. Louis de Wecker (Paris) and Dr. Otto Becker (Heidelberg)' },
      { key: 'B', text: 'Dr. Rudolf Virchow' },
      { key: 'C', text: 'Dr. Adolf Meyer' },
      { key: 'D', text: 'Dr. Ferdinand Blumentritt' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal apprenticed under Dr. Louis de Wecker in Paris and Dr. Otto Becker in Heidelberg to master cataract surgery techniques.',
    topicRef: '2.0 Specialization in Ophthalmology'
  },
  {
    id: 12,
    question: "What poem did Rizal write while captivated by the blooming spring flowers along the Neckar River in Germany in April 1886?",
    options: [
      { key: 'A', text: 'A Las Flores de Heidelberg (To the Flowers of Heidelberg)' },
      { key: 'B', text: 'Mi Retiro' },
      { key: 'C', text: 'Canto del Viajero' },
      { key: 'D', text: 'Kundiman' }
    ],
    correctAnswer: 'A',
    explanation: 'In A Las Flores de Heidelberg, Rizal sent poetic messages of love, peace, and fidelity to his native Philippines through German forget-me-nots.',
    topicRef: '2.0 Literary Works: To the Flowers of Heidelberg'
  },
  {
    id: 13,
    question: "Where, in what year, and with whose financial assistance was Rizal\'s first novel 'Noli Me Tangere' published?",
    options: [
      { key: 'A', text: 'Berlin, Germany in March 1887, with a loan of ₱300 from his wealthy friend Dr. Maximo Viola' },
      { key: 'B', text: 'Ghent, Belgium in 1891 with Valentin Ventura' },
      { key: 'C', text: 'Madrid, Spain in 1884 with Marcelo del Pilar' },
      { key: 'D', text: 'Manila in 1896 with Emilio Aguinaldo' }
    ],
    correctAnswer: 'A',
    explanation: 'Dr. Maximo Viola was the \'Savior of the Noli Me Tangere\', providing the crucial funds needed to print 2,000 copies in Berlin.',
    topicRef: '3.0 Noli Me Tangere: Publication'
  },
  {
    id: 14,
    question: "What does the Latin title 'Noli Me Tangere' mean, and from which Biblical passage is it derived?",
    options: [
      { key: 'A', text: '\'Touch Me Not\', taken from the Gospel of St. John (John 20:17), where the resurrected Jesus speaks to Mary Magdalene' },
      { key: 'B', text: '\'Do Not Forget Me\', from Psalms' },
      { key: 'C', text: '\'The Social Cancer\', from Genesis' },
      { key: 'D', text: '\'Fight For Freedom\', from Matthew' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal chose \'Touch Me Not\' because his novel exposed the malignant social cancer of Spanish friar corruption that had long been taboo to touch.',
    topicRef: '3.0 Noli Me Tangere: Meaning and Theme'
  },
  {
    id: 15,
    question: "To whom did Jose Rizal dedicate his masterpiece novel 'Noli Me Tangere'?",
    options: [
      { key: 'A', text: 'To the Motherland (A Mi Patria / To My Country)' },
      { key: 'B', text: 'To GOMBURZA' },
      { key: 'C', text: 'To his parents' },
      { key: 'D', text: 'To Leonor Rivera' }
    ],
    correctAnswer: 'A',
    explanation: 'Noli Me Tangere was dedicated to his beloved motherland (To My Country) to expose the systemic societal cancer afflicting Filipino society.',
    topicRef: '3.0 Noli Me Tangere: Dedication'
  },
  {
    id: 16,
    question: "Who is the protagonist of 'Noli Me Tangere', representing the educated, idealistic Filipino youth returning from Europe full of reformist dreams?",
    options: [
      { key: 'A', text: 'Juan Crisostomo Ibarra y Magsalin' },
      { key: 'B', text: 'Elias' },
      { key: 'C', text: 'Basilio' },
      { key: 'D', text: 'Isagani' }
    ],
    correctAnswer: 'A',
    explanation: 'Crisostomo Ibarra represents liberal reformism through secular education, seeking progress without bloody armed revolution.',
    topicRef: '3.0 Noli Characters: Crisostomo Ibarra'
  },
  {
    id: 17,
    question: "Which character in 'Noli Me Tangere' symbolizes the heroic, oppressed Filipino masses, who rescues Ibarra multiple times and dies saying: 'I die without seeing the dawn brighten over my native land'?",
    options: [
      { key: 'A', text: 'Elias' },
      { key: 'B', text: 'Tasio the Philosopher' },
      { key: 'C', text: 'Capitan Tiago' },
      { key: 'D', text: 'Padre Damaso' }
    ],
    correctAnswer: 'A',
    explanation: 'Elias represents revolutionary consciousness and martyrdom, sacrificing his life on the lake so Ibarra could escape.',
    topicRef: '3.0 Noli Characters: Elias'
  },
  {
    id: 18,
    question: "Which character in 'Noli Me Tangere' represents the tragic archetype of the pure Filipina maiden, the biological daughter of Padre Damaso, who enters the Santa Clara nunnery?",
    options: [
      { key: 'A', text: 'Maria Clara de los Santos' },
      { key: 'B', text: 'Sisa' },
      { key: 'C', text: 'Doña Victorina' },
      { key: 'D', text: 'Paulita Gomez' }
    ],
    correctAnswer: 'A',
    explanation: 'Maria Clara embodies feminine virtue and the tragic colonial heritage of the Philippines caught between church power and true love.',
    topicRef: '3.0 Noli Characters: Maria Clara'
  },
  {
    id: 19,
    question: "Which character in 'Noli Me Tangere' symbolizes the tragic maternal suffering and insanity caused by colonial brutality and the loss of her sons Crispin and Basilio?",
    options: [
      { key: 'A', text: 'Sisa' },
      { key: 'B', text: 'Doña Consolacion' },
      { key: 'C', text: 'Doña Victorina' },
      { key: 'D', text: 'Tia Isabel' }
    ],
    correctAnswer: 'A',
    explanation: 'Sisa symbolizes the agonizing torment, helplessness, and psychological trauma of the oppressed Filipino motherland.',
    topicRef: '3.0 Noli Characters: Sisa'
  },
  {
    id: 20,
    question: "Which character in 'Noli Me Tangere' represents the hilarious yet tragic colonial mentality, pretending to be Spanish, wearing heavy makeup, and despising fellow Filipinos?",
    options: [
      { key: 'A', text: 'Doña Victorina de los Reyes de de Espadaña' },
      { key: 'B', text: 'Doña Consolacion' },
      { key: 'C', text: 'Sinang' },
      { key: 'D', text: 'Salome' }
    ],
    correctAnswer: 'A',
    explanation: 'Doña Victorina is the satirical personification of extreme xenocentrism and colonial cringe in Philippine society.',
    topicRef: '3.0 Noli Characters: Doña Victorina'
  },
  {
    id: 21,
    question: "Who was Jose Rizal\'s closest and most loyal Austrian scholar friend with whom he maintained lifelong correspondence on ethnology, linguistics, and Philippine history?",
    options: [
      { key: 'A', text: 'Professor Ferdinand Blumentritt' },
      { key: 'B', text: 'Dr. Reinhold Rost' },
      { key: 'C', text: 'Dr. Feodor Jagor' },
      { key: 'D', text: 'Eduard de Sloet' }
    ],
    correctAnswer: 'A',
    explanation: 'Ferdinand Blumentritt was Rizal\'s spiritual brother and intellectual champion in Europe, writing the prologue to Rizal\'s edition of Morga.',
    topicRef: '2.0 Rizal\'s Friends: Ferdinand Blumentritt'
  },
  {
    id: 22,
    question: "What historic 1609 book by Antonio de Morga did Rizal spend months annotating in the British Museum in London (published in Paris in 1890) to prove pre-colonial Filipino civilization?",
    options: [
      { key: 'A', text: 'Sucesos de las Islas Filipinas (Events in the Philippine Islands)' },
      { key: 'B', text: 'Doctrina Christiana' },
      { key: 'C', text: 'Flora de Filipinas' },
      { key: 'D', text: 'Labor Evangelica' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal\'s Morga annotations established that Filipinos had an advanced civilization, maritime trade, and rich culture prior to Spanish arrival.',
    topicRef: '4.0 Historical Studies: Annotation of Morga'
  },
  {
    id: 23,
    question: "What was Rizal\'s famous sociological essay published in La Solidaridad in 1890 analyzing the alleged 'Indolence of the Filipinos'?",
    options: [
      { key: 'A', text: 'Sobre la Indolencia de los Filipinos (On the Indolence of the Filipinos)' },
      { key: 'B', text: 'Filipinas Dentro de Cien Años' },
      { key: 'C', text: 'El Amor Patrio' },
      { key: 'D', text: 'Sa Mga Kababayang Dalaga sa Malolos' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal demonstrated that Filipino \'indolence\' was not an inherent racial flaw, but the direct consequence of tropical climate, forced labor (polo), lack of incentives, and colonial exploitation.',
    topicRef: '4.0 Essays: Sobre la Indolencia de los Filipinos'
  },
  {
    id: 24,
    question: "What was Rizal\'s visionary geopolitical essay forecasting the future of the archipelago over the next century, predicting that Spain would lose the islands and the United States might conquer them?",
    options: [
      { key: 'A', text: 'Filipinas Dentro de Cien Años (The Philippines a Century Hence)' },
      { key: 'B', text: 'Sobre la Indolencia de los Filipinos' },
      { key: 'C', text: 'A La Juventud Filipina' },
      { key: 'D', text: 'La Vision del Fray Rodriguez' }
    ],
    correctAnswer: 'A',
    explanation: 'In Filipinas Dentro de Cien Años (1889–1890), Rizal presciently predicted the rise of the American empire in the Pacific and Philippine independence.',
    topicRef: '4.0 Essays: The Philippines a Century Hence'
  },
  {
    id: 25,
    question: "What famous letter in Tagalog did Rizal write in February 1889 praising 20 young women who bravely petitioned Governor-General Weyler for permission to establish a night school to learn Spanish?",
    options: [
      { key: 'A', text: 'Sa Mga Kababayang Dalaga sa Malolos (To the Young Women of Malolos)' },
      { key: 'B', text: 'Sa Aking Mga Kabata' },
      { key: 'C', text: 'Kartilya ng Katipunan' },
      { key: 'D', text: 'Pahimakas' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal\'s Letter to the Young Women of Malolos emphasized the crucial role of mothers in raising enlightened, dignified, and patriotic children free from blind religious servitude.',
    topicRef: '4.0 Writings: Letter to the Young Women of Malolos'
  },
  {
    id: 26,
    question: "Where, in what year, and with whose financial backing was Rizal\'s second novel 'El Filibusterismo' published?",
    options: [
      { key: 'A', text: 'Ghent, Belgium in September 1891, with financial assistance from Valentin Ventura' },
      { key: 'B', text: 'Berlin, Germany in 1887 with Maximo Viola' },
      { key: 'C', text: 'London, England in 1888 with Antonio Regidor' },
      { key: 'D', text: 'Madrid, Spain in 1890 with Graciano Lopez Jaena' }
    ],
    correctAnswer: 'A',
    explanation: 'Valentin Ventura sent the needed money to complete printing in Ghent, earning the title \'Savior of El Filibusterismo\'.',
    topicRef: '5.0 El Filibusterismo: Publication'
  },
  {
    id: 27,
    question: "To whom did Jose Rizal solemnly dedicate his second novel 'El Filibusterismo'?",
    options: [
      { key: 'A', text: 'To the three martyred priests Fathers Mariano Gomez, Jose Burgos, and Jacinto Zamora (GOMBURZA)' },
      { key: 'B', text: 'To his mother Teodora Alonso' },
      { key: 'C', text: 'To the Spanish Governor-General' },
      { key: 'D', text: 'To the Katipunan' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal dedicated the Fili to Gomburza, whose unjust martyrdom in 1872 ignited his lifelong mission for Philippine liberty.',
    topicRef: '5.0 El Filibusterismo: Dedication to GOMBURZA'
  },
  {
    id: 28,
    question: "What is the primary difference in theme and tone between 'Noli Me Tangere' and 'El Filibusterismo'?",
    options: [
      { key: 'A', text: 'Noli is a romantic, idealistic novel of social diagnosis and reform; Fili is a dark, bitter, political novel of impending revolution, vengeance, and moral retribution' },
      { key: 'B', text: 'Noli is in Tagalog; Fili is in English' },
      { key: 'C', text: 'Fili is a comedy; Noli is a tragedy' },
      { key: 'D', text: 'They have identical plots and tones' }
    ],
    correctAnswer: 'A',
    explanation: 'While the Noli appeals to reason and peaceful reform, the Fili grapples with radicalized armed insurgency and its ethical dilemmas.',
    topicRef: '5.0 Noli vs Fili: Thematic Comparison'
  },
  {
    id: 29,
    question: "Who is the sinister, enigmatic protagonist of 'El Filibusterismo'—a wealthy jeweler with tinted glasses plotting violent revolution—who is revealed to be Crisostomo Ibarra in disguise?",
    options: [
      { key: 'A', text: 'Simoun' },
      { key: 'B', text: 'Isagani' },
      { key: 'C', text: 'Basilio' },
      { key: 'D', text: 'Makaraig' }
    ],
    correctAnswer: 'A',
    explanation: 'Simoun returns after 13 years, seeking to accelerate the downfall of Spanish rule by fomenting corruption and orchestrating a bloody bomb plot.',
    topicRef: '5.0 Fili Characters: Simoun'
  },
  {
    id: 30,
    question: "What instrument of mass destruction did Simoun design to assassinate the Governor-General and colonial elites at the wedding banquet of Paulita Gomez and Juanito Pelaez?",
    options: [
      { key: 'A', text: 'A nitroglycerin bomb concealed inside an elegant gold pomegranate lamp (lampara)' },
      { key: 'B', text: 'Poisoned wine glasses' },
      { key: 'C', text: 'A dynamite cannon' },
      { key: 'D', text: 'An infected letter' }
    ],
    correctAnswer: 'A',
    explanation: 'The exploding lamp was intended to detonate when the wick was turned up, triggering an armed uprising throughout Manila.',
    topicRef: '5.0 El Filibusterismo: Simoun\'s Bomb Plot'
  },
  {
    id: 31,
    question: "Who grabbed the exploding lamp from the wedding table and threw it into the Pasig River, thwarting Simoun\'s catastrophic conspiracy to save Paulita Gomez?",
    options: [
      { key: 'A', text: 'Isagani' },
      { key: 'B', text: 'Basilio' },
      { key: 'C', text: 'Padre Florentino' },
      { key: 'D', text: 'Sandoval' }
    ],
    correctAnswer: 'A',
    explanation: 'Isagani, moved by romantic love for Paulita Gomez despite her betrayal, rushed into the mansion, seized the lamp, and hurled it into the river.',
    topicRef: '5.0 Fili Plot: Isagani & The Lamp'
  },
  {
    id: 32,
    question: "Which character in 'El Filibusterismo' delivers Rizal\'s profound philosophical monologue on why Simoun\'s revolution failed: 'Hate never produces anything but monsters; crime, criminals! Love alone can work miracles, only virtue can save!'?",
    options: [
      { key: 'A', text: 'Padre Florentino' },
      { key: 'B', text: 'Padre Fernandez' },
      { key: 'C', text: 'Padre Salvi' },
      { key: 'D', text: 'Capitan Tiago' }
    ],
    correctAnswer: 'A',
    explanation: 'Padre Florentino hears the dying confession of Simoun, explaining that freedom achieved through hatred and crime cannot endure.',
    topicRef: '5.0 Fili Characters: Padre Florentino'
  },
  {
    id: 33,
    question: "Who was the peasant farmer in 'El Filibusterismo' whose land was unjustly confiscated by the friars, driving him to join the bandits as the terrifying outlaw 'Matanglawin'?",
    options: [
      { key: 'A', text: 'Kabesang Tales (Telesforo Juan de Dios)' },
      { key: 'B', text: 'Tandang Selo' },
      { key: 'C', text: 'Tano' },
      { key: 'D', text: 'Sinong' }
    ],
    correctAnswer: 'A',
    explanation: 'Kabesang Tales represents the agrarian land dispossession suffered by Calamba tenant farmers (including Rizal\'s own family) at the hands of the Dominicans.',
    topicRef: '5.0 Fili Characters: Kabesang Tales'
  },
  {
    id: 34,
    question: "Who was the young maiden who threw herself from the convent belfry of San Diego to escape the lustful advances of Padre Camorra?",
    options: [
      { key: 'A', text: 'Juli (Juliana, daughter of Kabesang Tales and sweetheart of Basilio)' },
      { key: 'B', text: 'Paulita Gomez' },
      { key: 'C', text: 'Pepay' },
      { key: 'D', text: 'Salome' }
    ],
    correctAnswer: 'A',
    explanation: 'Juli preferred death over dishonor when forced to beg Padre Camorra for Basilio\'s release from prison.',
    topicRef: '5.0 Fili Characters: Juli'
  },
  {
    id: 35,
    question: "What civic organization did Jose Rizal found in Ilaya Street, Tondo, Manila on July 3, 1892, with the motto 'Unus Instar Omnium' (One Like All)?",
    options: [
      { key: 'A', text: 'La Liga Filipina' },
      { key: 'B', text: 'Katipunan (KKK)' },
      { key: 'C', text: 'La Solidaridad' },
      { key: 'D', text: 'Circulo Hispano-Filipino' }
    ],
    correctAnswer: 'A',
    explanation: 'La Liga Filipina sought to unite the entire archipelago into a compact, vigorous body promoting mutual protection, education, and economic cooperation.',
    topicRef: '6.0 La Liga Filipina (1892)'
  },
  {
    id: 36,
    question: "Which Spanish Governor-General ordered Rizal\'s immediate arrest and deportation to Dapitan, Zamboanga del Norte, on July 6–7, 1892?",
    options: [
      { key: 'A', text: 'Governor-General Eulogio Despujol' },
      { key: 'B', text: 'Governor-General Camilo de Polavieja' },
      { key: 'C', text: 'Governor-General Ramon Blanco' },
      { key: 'D', text: 'Governor-General Rafael de Izquierdo' }
    ],
    correctAnswer: 'A',
    explanation: 'Despujol exiled Rizal to Dapitan following the discovery of alleged anti-friar handbills (Pobres Frailes) in his luggage.',
    topicRef: '6.0 Exile to Dapitan: Despujol'
  },
  {
    id: 37,
    question: "During his four-year exile in Dapitan (1892–1896), what remarkable accomplishments did Rizal achieve as a polymath?",
    options: [
      { key: 'A', text: 'Practiced medicine, built a school for boys, constructed a town waterworks system, engaged in agriculture, and discovered new animal species (Draco rizali, Apogonia rizali, Rhacophorus rizali)' },
      { key: 'B', text: 'Led an armed rebellion in Mindanao' },
      { key: 'C', text: 'Built a battleship' },
      { key: 'D', text: 'Founded a private bank' }
    ],
    correctAnswer: 'A',
    explanation: 'In Dapitan, Rizal exemplified practical civic nation-building through education, community sanitation, scientific discovery, and progressive farming.',
    topicRef: '6.0 Rizal in Dapitan: Polymath Achievements'
  },
  {
    id: 38,
    question: "Who was the young Irish woman who arrived in Dapitan with her blind adoptive father George Taufer, fell in love with Rizal, and became his common-law wife (described as 'Dulce extranjera' in his farewell poem)?",
    options: [
      { key: 'A', text: 'Josephine Bracken' },
      { key: 'B', text: 'Leonor Rivera' },
      { key: 'C', text: 'Suzanne Jacoby' },
      { key: 'D', text: 'O-Sei-San' }
    ],
    correctAnswer: 'A',
    explanation: 'Josephine Bracken lived with Rizal in Dapitan and accompanied him until his final moments at Bagumbayan.',
    topicRef: '6.0 Exile in Dapitan: Josephine Bracken'
  },
  {
    id: 39,
    question: "Who was the Katipunan emissary sent by Andres Bonifacio in disguise to Dapitan in June 1896 to consult Rizal on launching an armed revolution?",
    options: [
      { key: 'A', text: 'Dr. Pio Valenzuela' },
      { key: 'B', text: 'Emilio Jacinto' },
      { key: 'C', text: 'Procopio Bonifacio' },
      { key: 'D', text: 'Macario Sakay' }
    ],
    correctAnswer: 'A',
    explanation: 'Dr. Pio Valenzuela brought the blind patient Raymundo Mata as cover; Rizal cautioned against premature revolution without sufficient arms, funds, and naval support.',
    topicRef: '6.0 Katipunan Mission to Dapitan: Pio Valenzuela'
  },
  {
    id: 40,
    question: "Why was Rizal traveling to Cuba when he was arrested aboard the steamer Isla de Panay in September 1896?",
    options: [
      { key: 'A', text: 'He had volunteered and been accepted by Governor-General Blanco to serve as a military surgeon in the Spanish army hospital in Cuba during the Yellow Fever epidemic' },
      { key: 'B', text: 'To buy tobacco for Europe' },
      { key: 'C', text: 'To join the Cuban rebels' },
      { key: 'D', text: 'To escape to the United States' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal sought to leave Dapitan peacefully by volunteering his medical expertise to treat victims of yellow fever in Cuba.',
    topicRef: '7.0 Journey to Cuba and Arrest'
  },
  {
    id: 41,
    question: "Where was Rizal imprisoned upon his return to Manila to face a military court-martial for alleged rebellion, sedition, and illegal association?",
    options: [
      { key: 'A', text: 'Fort Santiago (Intramuros, Manila)' },
      { key: 'B', text: 'Bilibid Prison' },
      { key: 'C', text: 'Fort San Pedro' },
      { key: 'D', text: 'Corregidor Island' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal was held in solitary confinement in Fort Santiago throughout his December 1896 court-martial.',
    topicRef: '7.0 Imprisonment at Fort Santiago'
  },
  {
    id: 42,
    question: "Who was the Spanish military officer chosen by Rizal to act as his defense counsel during his court-martial?",
    options: [
      { key: 'A', text: 'Lt. Luis Taviel de Andrade' },
      { key: 'B', text: 'Lt. Jose Taviel de Andrade' },
      { key: 'C', text: 'Col. Francisco Olive' },
      { key: 'D', text: 'Capt. Rafael Dominguez' }
    ],
    correctAnswer: 'A',
    explanation: 'Lt. Luis Taviel de Andrade defended Rizal with great eloquence and courage before the biased military tribunal.',
    topicRef: '7.0 Rizal\'s Trial: Luis Taviel de Andrade'
  },
  {
    id: 43,
    question: "Which ruthless Spanish Governor-General approved the death sentence and ordered the execution of Jose Rizal by firing squad?",
    options: [
      { key: 'A', text: 'Governor-General Camilo de Polavieja' },
      { key: 'B', text: 'Governor-General Ramon Blanco' },
      { key: 'C', text: 'Governor-General Valeriano Weyler' },
      { key: 'D', text: 'Governor-General Emilio Terrero' }
    ],
    correctAnswer: 'A',
    explanation: 'Polavieja, heavily influenced by reactionary friars, signed the death decree on December 28, 1896.',
    topicRef: '7.0 Death Sentence: Camilo de Polavieja'
  },
  {
    id: 44,
    question: "What is the title of the untitled 14-stanza farewell poem written by Rizal in Fort Santiago on the eve of his execution, concealed inside an alcohol cooking stove (cocinilla)?",
    options: [
      { key: 'A', text: 'Mi Ultimo Adios (My Last Farewell)' },
      { key: 'B', text: 'A La Juventud Filipina' },
      { key: 'C', text: 'Mi Retiro' },
      { key: 'D', text: 'Hukom ng Langit' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal handed the stove containing the poem to his sister Trinidad, whispering \'There is something inside.\' It was later titled \'Mi Ultimo Adios\' by Mariano Ponce.',
    topicRef: '7.0 Mi Ultimo Adios'
  },
  {
    id: 45,
    question: "On what exact date and time was Dr. Jose Rizal executed by firing squad in Bagumbayan (now Rizal Park / Luneta), Manila?",
    options: [
      { key: 'A', text: 'December 30, 1896 at exactly 7:03 AM' },
      { key: 'B', text: 'June 19, 1861 at midnight' },
      { key: 'C', text: 'June 12, 1898 at 4:00 PM' },
      { key: 'D', text: 'August 23, 1896 at 8:00 AM' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal faced the firing squad calmly; his pulse was normal, and he turned to fall face upward toward the morning sun.',
    topicRef: '7.0 Execution at Bagumbayan'
  },
  {
    id: 46,
    question: "What were the famous dying last words uttered by Jose Rizal as the rifle shots rang out at Bagumbayan?",
    options: [
      { key: 'A', text: 'Consummatum est! (\'It is finished!\')' },
      { key: 'B', text: 'Mabuhay ang Pilipinas!' },
      { key: 'C', text: 'Viva España!' },
      { key: 'D', text: 'Lupang Hinirang!' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal uttered the Latin words of Christ \'Consummatum est\' (It is finished), fulfilling his sacrifice for Filipino liberation.',
    topicRef: '7.0 Last Words: Consummatum Est'
  },
  {
    id: 47,
    question: "Who was Rizal\'s greatest childhood and lifelong romantic love, his cousin from Camiling, Tarlac, who was forced by her mother to marry the British engineer Charles Kipping?",
    options: [
      { key: 'A', text: 'Leonor Rivera (the inspiration for Maria Clara)' },
      { key: 'B', text: 'Segunda Katigbak' },
      { key: 'C', text: 'Leonor Valenzuela' },
      { key: 'D', text: 'Consuelo Ortiga' }
    ],
    correctAnswer: 'A',
    explanation: 'Leonor Rivera was Rizal\'s true love for 11 years and the literary inspiration behind Maria Clara.',
    topicRef: '2.0 Rizal\'s Romances: Leonor Rivera'
  },
  {
    id: 48,
    question: "What was the 'Calamba Agrarian Dispute' (1887–1888) in which Rizal led the tenant farmers?",
    options: [
      { key: 'A', text: 'An investigation into exorbitant friar land rentals, arbitrary evictions, and tax evasion by the Dominican Order, which resulted in the brutal eviction of Rizal\'s family and exile of his brother Paciano' },
      { key: 'B', text: 'A dispute between local farmers over water canals' },
      { key: 'C', text: 'A strike by factory workers in Laguna' },
      { key: 'D', text: 'A land purchase from the British' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal drafted a factual memorial detailing the unfair abuses of the Dominican hacienda in Calamba, which led to harsh colonial retaliation against his townspeople.',
    topicRef: '4.0 The Calamba Agrarian Problem'
  },
  {
    id: 49,
    question: "What did Rizal believe was the ultimate, indispensable prerequisite for genuine national freedom and self-determination?",
    options: [
      { key: 'A', text: 'Enlightenment, mass education, moral integrity, and civic dignity (\'Why independence, if the slaves of today will become the tyrants of tomorrow?\')' },
      { key: 'B', text: 'Blind violent revenge against foreigners' },
      { key: 'C', text: 'Amassing personal wealth' },
      { key: 'D', text: 'Foreign military conquest' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal emphasized that political freedom without education and ethical character merely replaces one tyrant with another.',
    topicRef: '5.0 Rizal\'s Philosophy of Education & Freedom'
  },
  {
    id: 50,
    question: "Why remains the study of the Life and Works of Jose Rizal critically relevant in 21st-century Philippine teacher education?",
    options: [
      { key: 'A', text: 'It inspires critical thinking, unyielding moral courage, civic patriotism, and dedication to nation-building through transformative, enlightened education' },
      { key: 'B', text: 'To memorize dates and trivia about Rizal\'s lovers' },
      { key: 'C', text: 'To learn how to write 19th-century Spanish letters' },
      { key: 'D', text: 'Because it is a routine government requirement with no real value' }
    ],
    correctAnswer: 'A',
    explanation: 'Rizal\'s life and writings provide an enduring moral and intellectual compass for educators in molding ethical, patriotic, and globally competent Filipino learners.',
    topicRef: '1.0 Significance of Rizal in Modern Times'
  }
];
