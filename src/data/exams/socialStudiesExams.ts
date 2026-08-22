import { ExamQuestion } from '../../types';

export const SOCIAL_STUDIES_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "What is the 'Austronesian Migration Theory' (Out-of-Taiwan Hypothesis) popularized by archaeologist Peter Bellwood regarding the prehistoric settlement of the Philippines?",
    options: [
      { key: 'A', text: 'Austronesian-speaking seafaring populations migrated south from Taiwan around 4,000 BCE, bringing advanced maritime navigation, agriculture, and pottery across Maritime Southeast Asia' },
      { key: 'B', text: 'Humans walked across ice bridges from North America' },
      { key: 'C', text: 'Settlers flew on hot air balloons' },
      { key: 'D', text: 'The Philippines was populated exclusively by European sailors' }
    ],
    correctAnswer: 'A',
    explanation: 'Bellwood\'s Austronesian expansion model is strongly supported by linguistic, genetic, and archaeological evidence across Island Southeast Asia.',
    topicRef: '1.0 Philippine Pre-Colonial Theories'
  },
  {
    id: 2,
    question: "What was the 'Barangay' in pre-colonial Philippine socio-political organization?",
    options: [
      { key: 'A', text: 'An autonomous, kin-based community of 30 to 100 families led by a Datu (chieftain), derived from the Austronesian sailing boat called \'balangay\'' },
      { key: 'B', text: 'A Spanish colonial municipal city hall' },
      { key: 'C', text: 'A military fort in Mindanao' },
      { key: 'D', text: 'A religious monastery' }
    ],
    correctAnswer: 'A',
    explanation: 'The pre-colonial barangay was an independent socio-political unit named after the maritime balangay boats that brought ancestor clans.',
    topicRef: '1.0 Pre-Colonial Social Structures'
  },
  {
    id: 3,
    question: "In pre-colonial Tagalog society, what were the three distinct social classes?",
    options: [
      { key: 'A', text: 'Maginoo (Nobility/Ruling Class with the Datu), Timawa/Maharlika (Freemen/Warriors), and Alipin (Aliping Namamahay & Aliping Saguiguilid)' },
      { key: 'B', text: 'Priests, Soldiers, and Slaves' },
      { key: 'C', text: 'Kings, Lords, and Peasants' },
      { key: 'D', text: 'Citizens, Immigrants, and Tourists' }
    ],
    correctAnswer: 'A',
    explanation: 'Pre-colonial social stratification comprised Maginoo (ruling elite), Timawa/Maharlika (freemen/warriors), and Alipin (dependents/debtors).',
    topicRef: '1.0 Pre-Colonial Social Stratification'
  },
  {
    id: 4,
    question: "What was the difference between an 'Aliping Namamahay' and an 'Aliping Saguiguilid'?",
    options: [
      { key: 'A', text: 'Aliping Namamahay had their own house, property, and paid tribute; Aliping Saguiguilid lived in the master\'s household and could be bought/sold' },
      { key: 'B', text: 'Namamahay were warriors; Saguiguilid were datu' },
      { key: 'C', text: 'They are identical' },
      { key: 'D', text: 'Saguiguilid were Spanish priests' }
    ],
    correctAnswer: 'A',
    explanation: 'Aliping Namamahay held personal property rights and homes, acting more like serfs/tenant farmers, whereas Saguiguilid lacked personal property.',
    topicRef: '1.0 Pre-Colonial Society: Alipin System'
  },
  {
    id: 5,
    question: "Who was the spiritual leader, healer, medium, and cultural keeper in pre-colonial Philippine animist society?",
    options: [
      { key: 'A', text: 'Babaylan (in Visayas) / Katalonan (in Tagalog)' },
      { key: 'B', text: 'Gobernadorcillo' },
      { key: 'C', text: 'Alcalde Mayor' },
      { key: 'D', text: 'Cabeza de Barangay' }
    ],
    correctAnswer: 'A',
    explanation: 'Babaylan / Katalonan (predominantly women or feminized men called asog) served as supreme priestesses, healers, and spiritual guides.',
    topicRef: '1.0 Pre-Colonial Culture: Babaylan'
  },
  {
    id: 6,
    question: "On what date did Ferdinand Magellan and his Spanish expedition first make landfall on the Philippine island of Homonhon?",
    options: [
      { key: 'A', text: 'March 16, 1521' },
      { key: 'B', text: 'June 12, 1898' },
      { key: 'C', text: 'April 27, 1565' },
      { key: 'D', text: 'December 30, 1896' }
    ],
    correctAnswer: 'A',
    explanation: 'Magellan sighted the heights of Samar and landed on Homonhon on March 16, 1521, initiating Spanish European contact.',
    topicRef: '1.0 Spanish Expeditions: Magellan'
  },
  {
    id: 7,
    question: "Who led the native warriors in defeating Ferdinand Magellan in the historic 'Battle of Mactan' on April 27, 1521?",
    options: [
      { key: 'A', text: 'Lapu-Lapu' },
      { key: 'B', text: 'Rajah Humabon' },
      { key: 'C', text: 'Rajah Sulayman' },
      { key: 'D', text: 'Datu Sikatuna' }
    ],
    correctAnswer: 'A',
    explanation: 'Lapu-Lapu, chieftain of Mactan, resisted Spanish subjugation and killed Magellan during the coastal wading battle.',
    topicRef: '1.0 Battle of Mactan: Lapu-Lapu'
  },
  {
    id: 8,
    question: "Who established the first permanent Spanish colonial settlement in the Philippines (San Miguel / Cebu) in 1565 and became the first Governor-General?",
    options: [
      { key: 'A', text: 'Miguel López de Legazpi' },
      { key: 'B', text: 'Ruy López de Villalobos' },
      { key: 'C', text: 'Ferdinand Magellan' },
      { key: 'D', text: 'Alvaro de Saavedra' }
    ],
    correctAnswer: 'A',
    explanation: 'Miguel López de Legazpi, accompanied by Fr. Andrés de Urdaneta, founded the first permanent Spanish colony in Cebu in 1565.',
    topicRef: '1.0 Spanish Colonization: Legazpi'
  },
  {
    id: 9,
    question: "Which Spanish explorer named the islands 'Las Islas Filipinas' in 1543 in honor of Crown Prince Philip II of Spain?",
    options: [
      { key: 'A', text: 'Ruy López de Villalobos' },
      { key: 'B', text: 'Ferdinand Magellan' },
      { key: 'C', text: 'Miguel López de Legazpi' },
      { key: 'D', text: 'Sebastian del Cano' }
    ],
    correctAnswer: 'A',
    explanation: 'Villalobos named the islands of Leyte and Samar "Felipinas," which was subsequently applied to the entire archipelago.',
    topicRef: '1.0 Naming of the Philippines'
  },
  {
    id: 10,
    question: "What was the 'Galleon Trade' (Manila-Acapulco Galleon Trade, 1565–1815)?",
    options: [
      { key: 'A', text: 'A trans-Pacific trade monopoly connecting Manila and Acapulco (Mexico), exchanging Chinese silk, porcelain, and spices for Mexican silver' },
      { key: 'B', text: 'A slave trading route to Africa' },
      { key: 'C', text: 'A gold trade between Manila and Tokyo' },
      { key: 'D', text: 'A military weapons exchange with Britain' }
    ],
    correctAnswer: 'A',
    explanation: 'The Manila Galleons linked Asia and the Americas for 250 years, establishing Manila as the primary global trade hub of the Orient.',
    topicRef: '1.0 Spanish Colonial Economy: Galleon Trade'
  },
  {
    id: 11,
    question: "What was the 'Polo y Servicios' in Spanish colonial rule?",
    options: [
      { key: 'A', text: 'Compulsory forced manual labor imposed on all able-bodied Filipino males (polistas) aged 16 to 60 for 40 days (later 15 days) per year' },
      { key: 'B', text: 'A sport played on horses' },
      { key: 'C', text: 'A tax paid in chickens' },
      { key: 'D', text: 'A church choir organization' }
    ],
    correctAnswer: 'A',
    explanation: 'Polistas were forced to construct roads, churches, bridges, and galleons; exemption required paying a high fee called the \'falla\'.',
    topicRef: '1.0 Spanish Colonial Policies: Polo y Servicios'
  },
  {
    id: 12,
    question: "What was the 'Falla' in relation to the Polo y Servicios?",
    options: [
      { key: 'A', text: 'The monetary fee paid by wealthy Filipinos to be legally exempted from compulsory forced manual labor' },
      { key: 'B', text: 'A punishment of 50 lashes' },
      { key: 'C', text: 'A Spanish military uniform' },
      { key: 'D', text: 'A type of colonial currency' }
    ],
    correctAnswer: 'A',
    explanation: 'Wealthy Filipinos paid the falla to avoid the harsh physical burdens of forced labor on galleons and fortifications.',
    topicRef: '1.0 Spanish Colonial Policies: Falla'
  },
  {
    id: 13,
    question: "What was the 'Bandala' system during Spanish colonial economic exploitation?",
    options: [
      { key: 'A', text: 'The compulsory assignment and forced sale of agricultural crops/products to the Spanish colonial government, often paid with worthless promissory notes' },
      { key: 'B', text: 'A musical marching band' },
      { key: 'C', text: 'A festival celebration in Manila' },
      { key: 'D', text: 'A religious medal' }
    ],
    correctAnswer: 'A',
    explanation: 'The Bandala system forced Filipino farmers to surrender their harvest quotas to the colonial state at artificially low prices or on credit.',
    topicRef: '1.0 Spanish Colonial Policies: Bandala'
  },
  {
    id: 14,
    question: "What triggered the execution of the three secular Filipino priests Fathers Mariano Gomez, Jose Burgos, and Jacinto Zamora (GOMBURZA) on February 17, 1872?",
    options: [
      { key: 'A', text: 'They were falsely implicated by Spanish authorities in the 1872 Cavite Mutiny led by Sergeant Fernando La Madrid to suppress secularization' },
      { key: 'B', text: 'They robbed a bank' },
      { key: 'C', text: 'They tried to assassinate the Pope' },
      { key: 'D', text: 'They fled to Spain without passports' }
    ],
    correctAnswer: 'A',
    explanation: 'The martyrdom of Gomburza by garrote vil in Bagumbayan catalyzed Filipino national consciousness and deeply inspired Jose Rizal.',
    topicRef: '2.0 1872 Cavite Mutiny & GOMBURZA'
  },
  {
    id: 15,
    question: "Who was the founder and first editor of 'La Solidaridad', the official newspaper organ of the Propaganda Movement established in Barcelona in 1889?",
    options: [
      { key: 'A', text: 'Graciano López Jaena' },
      { key: 'B', text: 'Marcelo H. del Pilar' },
      { key: 'C', text: 'Jose Rizal' },
      { key: 'D', text: 'Mariano Ponce' }
    ],
    correctAnswer: 'A',
    explanation: 'Graciano López Jaena was the founding editor (succeeded by Marcelo H. del Pilar as editor-in-chief in Madrid).',
    topicRef: '2.0 Propaganda Movement: La Solidaridad'
  },
  {
    id: 16,
    question: "What was Marcelo H. del Pilar\'s famous pen name and his satirical pamphlet mocking friar abuses titled 'Dasalan at Tocsohan'?",
    options: [
      { key: 'A', text: 'Plaridel' },
      { key: 'B', text: 'Dimasalang' },
      { key: 'C', text: 'Tikbalang' },
      { key: 'D', text: 'Maypagasa' }
    ],
    correctAnswer: 'A',
    explanation: 'Marcelo H. del Pilar wrote under the pseudonym "Plaridel," exposing friarocracy (Frailocracia) through brilliant parodies of Catholic prayers.',
    topicRef: '2.0 Propaganda Movement: Plaridel'
  },
  {
    id: 17,
    question: "On what exact date and where was the secret revolutionary society 'Katipunan' (KKK) founded by Andres Bonifacio and patriots?",
    options: [
      { key: 'A', text: 'July 7, 1892 at No. 72 Azcarraga Street (now Claro M. Recto), Tondo, Manila' },
      { key: 'B', text: 'August 23, 1896 at Pugad Lawin' },
      { key: 'C', text: 'June 12, 1898 at Kawit, Cavite' },
      { key: 'D', text: 'December 30, 1896 at Luneta' }
    ],
    correctAnswer: 'A',
    explanation: 'Following Rizal\'s arrest and deportation to Dapitan, Bonifacio, Ladislao Diwa, Teodoro Plata, and Deodato Arellano founded the KKK.',
    topicRef: '2.0 The Katipunan: Foundation'
  },
  {
    id: 18,
    question: "Who was known as the 'Brain of the Katipunan' and author of the 'Kartilya ng Katipunan' (Code of Conduct)?",
    options: [
      { key: 'A', text: 'Emilio Jacinto (pen name: Pingkian)' },
      { key: 'B', text: 'Apolinario Mabini' },
      { key: 'C', text: 'Andres Bonifacio' },
      { key: 'D', text: 'Emilio Aguinaldo' }
    ],
    correctAnswer: 'A',
    explanation: 'Emilio Jacinto was the brilliant young intellectual of the Katipunan, authoring the Kartilya and editing the newspaper Kalayaan.',
    topicRef: '2.0 Katipunan: Emilio Jacinto'
  },
  {
    id: 19,
    question: "Who was known as the 'Brain of the Revolution' and the 'Sublime Paralytic' who served as the first Prime Minister and Foreign Minister of the Malolos Republic?",
    options: [
      { key: 'A', text: 'Apolinario Mabini' },
      { key: 'B', text: 'Emilio Jacinto' },
      { key: 'C', text: 'Pedro Paterno' },
      { key: 'D', text: 'Felipe Calderon' }
    ],
    correctAnswer: 'A',
    explanation: 'Apolinario Mabini served as chief adviser to Emilio Aguinaldo, drafting decrees and constitutional frameworks for the First Philippine Republic.',
    topicRef: '2.0 Philippine Revolution: Apolinario Mabini'
  },
  {
    id: 20,
    question: "What historic event marked the open declaration of armed revolution when Katipuneros tore their 'cedulas' (residence certificates) shouting 'Mabuhay ang Pilipinas!' in August 1896?",
    options: [
      { key: 'A', text: 'Cry of Pugad Lawin (Cry of Balintawak)' },
      { key: 'B', text: 'Battle of Pinaglabanan' },
      { key: 'C', text: 'Tejeros Convention' },
      { key: 'D', text: 'Pact of Biak-na-Bato' }
    ],
    correctAnswer: 'A',
    explanation: 'The tearing of the cedulas symbolized total renunciation of Spanish colonial vassalage and the onset of armed revolution.',
    topicRef: '2.0 Cry of Pugad Lawin'
  },
  {
    id: 21,
    question: "What happened at the contentious 'Tejeros Convention' in Cavite on March 22, 1897?",
    options: [
      { key: 'A', text: 'The Katipunan was dissolved and replaced by a revolutionary government with Emilio Aguinaldo elected President and Andres Bonifacio elected Director of the Interior (which was insulted by Daniel Tirona)' },
      { key: 'B', text: 'The signing of the peace treaty with Spain' },
      { key: 'C', text: 'The surrender to American forces' },
      { key: 'D', text: 'The coronation of a new king' }
    ],
    correctAnswer: 'A',
    explanation: 'Daniel Tirona protested Bonifacio\'s election citing lack of a law degree, prompting Bonifacio to declare all convention proceedings null and void.',
    topicRef: '2.0 Tejeros Convention'
  },
  {
    id: 22,
    question: "What was the 'Pact of Biak-na-Bato' signed in December 1897 mediated by Pedro Paterno?",
    options: [
      { key: 'A', text: 'A truce between Spanish Governor-General Primo de Rivera and Emilio Aguinaldo where revolutionary leaders went into voluntary exile in Hong Kong in exchange for ₱800,000 indemnity and promised reforms' },
      { key: 'B', text: 'The surrender of Spain to the United States' },
      { key: 'C', text: 'The declaration of martial law' },
      { key: 'D', text: 'A trade treaty with China' }
    ],
    correctAnswer: 'A',
    explanation: 'The truce provided temporary cessation of hostilities; both sides distrusted each other and prepared for renewed conflict.',
    topicRef: '2.0 Pact of Biak-na-Bato'
  },
  {
    id: 23,
    question: "Where and when was Philippine Independence proclaimed from the window of Emilio Aguinaldo\'s ancestral mansion?",
    options: [
      { key: 'A', text: 'June 12, 1898 at Kawit, Cavite' },
      { key: 'B', text: 'July 4, 1946 in Manila' },
      { key: 'C', text: 'August 23, 1896 in Caloocan' },
      { key: 'D', text: 'January 23, 1899 in Malolos' }
    ],
    correctAnswer: 'A',
    explanation: 'On June 12, 1898, Ambrosio Rianzares Bautista read the Declaration of Independence, the Philippine flag was unfurled, and the National Anthem was played.',
    topicRef: '2.0 Philippine Independence Declaration'
  },
  {
    id: 24,
    question: "Who composed the music of the Philippine National Anthem (Marcha Nacional Filipina / Lupang Hinirang) and who wrote the original Spanish lyrics (Filipinas)?",
    options: [
      { key: 'A', text: 'Music by Julian Felipe; Spanish lyrics by Jose Palma' },
      { key: 'B', text: 'Music by Nicanor Abelardo; lyrics by Francisco Balagtas' },
      { key: 'C', text: 'Music by Levi Celerio; lyrics by Jose Rizal' },
      { key: 'D', text: 'Music by Felipe de Leon; lyrics by Andres Bonifacio' }
    ],
    correctAnswer: 'A',
    explanation: 'Julian Felipe composed the stirring march, and young poet-soldier Jose Palma penned the lyrics in 1899 in Bautista, Pangasinan.',
    topicRef: '2.0 Philippine National Anthem'
  },
  {
    id: 25,
    question: "Who hand-sewed the first Philippine national flag in Hong Kong in 1898 upon the request of Emilio Aguinaldo?",
    options: [
      { key: 'A', text: 'Marcela Agoncillo, Lorenza Agoncillo, and Delfina Herbosa de Natividad (niece of Jose Rizal)' },
      { key: 'B', text: 'Melchora Aquino and Gregoria de Jesus' },
      { key: 'C', text: 'Teresa Magbanua and Agueda Esteban' },
      { key: 'D', text: 'Trinidad Tecson and Gabriela Silang' }
    ],
    correctAnswer: 'A',
    explanation: 'Doña Marcela Agoncillo, her daughter Lorenza, and Rizal\'s niece Delfina Natividad skillfully sewed the silk flag in 535 Morrison Hill Road, Hong Kong.',
    topicRef: '2.0 Philippine National Flag'
  },
  {
    id: 26,
    question: "What was the 'Treaty of Paris' signed on December 10, 1898?",
    options: [
      { key: 'A', text: 'The peace treaty ending the Spanish-American War in which Spain ceded the Philippines, Guam, and Puerto Rico to the United States for $20 million' },
      { key: 'B', text: 'A treaty establishing the United Nations' },
      { key: 'C', text: 'A military alliance between Japan and the Philippines' },
      { key: 'D', text: 'The purchase of Alaska' }
    ],
    correctAnswer: 'A',
    explanation: 'Filipino diplomatic representative Felipe Agoncillo was barred from the negotiations where Spain sold the Philippines without Filipino consent.',
    topicRef: '2.0 Treaty of Paris (1898)'
  },
  {
    id: 27,
    question: "What sparked the Philippine-American War on the night of February 4, 1899?",
    options: [
      { key: 'A', text: 'Private William W. Grayson shot a Filipino soldier crossing the San Juan River Bridge / Calle Sociego in Santa Mesa, Manila' },
      { key: 'B', text: 'The bombing of Pearl Harbor' },
      { key: 'C', text: 'The assassination of General Antonio Luna' },
      { key: 'D', text: 'The execution of Jose Rizal' }
    ],
    correctAnswer: 'A',
    explanation: 'Grayson\'s shot initiated open warfare between American occupying forces and the army of the First Philippine Republic.',
    topicRef: '2.0 Philippine-American War Outbreak'
  },
  {
    id: 28,
    question: "Who was the youngest Filipino general known as the 'Boy General' and the 'Hero of Tirad Pass' who fought a rearguard action against American forces in 1899?",
    options: [
      { key: 'A', text: 'Gregorio del Pilar' },
      { key: 'B', text: 'Antonio Luna' },
      { key: 'C', text: 'Miguel Malvar' },
      { key: 'D', text: 'Vicente Lukban' }
    ],
    correctAnswer: 'A',
    explanation: 'General Gregorio del Pilar (aged 24) and 60 riflemen held Tirad Pass in Ilocos Sur to allow President Aguinaldo\'s retreat, dying heroically.',
    topicRef: '2.0 Battle of Tirad Pass: Gregorio del Pilar'
  },
  {
    id: 29,
    question: "Who were the 'Thomasites' in the early American colonial period in the Philippines (1901)?",
    options: [
      { key: 'A', text: 'A group of approximately 500 American civilian teachers who arrived aboard the USS Thomas to establish the public school system and teach English' },
      { key: 'B', text: 'American railway engineers' },
      { key: 'C', text: 'Catholic Jesuit missionaries' },
      { key: 'D', text: 'Gold miners in Benguet' }
    ],
    correctAnswer: 'A',
    explanation: 'The Thomasites pioneered modern secular universal public education in the Philippines under Act No. 74 of the Philippine Commission.',
    topicRef: '2.0 American Period: Education & Thomasites'
  },
  {
    id: 30,
    question: "What was the 'Tydings-McDuffie Act' (Philippine Independence Act of 1934)?",
    options: [
      { key: 'A', text: 'US federal law providing for a 10-year Commonwealth transitional government leading to full Philippine independence on July 4, 1946' },
      { key: 'B', text: 'A law annexing the Philippines permanently as a US state' },
      { key: 'C', text: 'A military conscription law' },
      { key: 'D', text: 'A free trade treaty on sugar' }
    ],
    correctAnswer: 'A',
    explanation: 'Secured by Manuel L. Quezon, the Tydings-McDuffie Act established the Commonwealth of the Philippines (1935–1946).',
    topicRef: '3.0 Commonwealth Era: Tydings-McDuffie Act'
  },
  {
    id: 31,
    question: "Who was elected as the first President of the Philippine Commonwealth in 1935 and is revered as the 'Father of the National Language'?",
    options: [
      { key: 'A', text: 'Manuel L. Quezon' },
      { key: 'B', text: 'Sergio Osmeña' },
      { key: 'C', text: 'Jose P. Laurel' },
      { key: 'D', text: 'Manuel Roxas' }
    ],
    correctAnswer: 'A',
    explanation: 'Manuel L. Quezon was the charismatic first Commonwealth President, championing social justice and establishing Tagalog-based National Language (Wikang Pambansa).',
    topicRef: '3.0 Commonwealth Presidents: Manuel L. Quezon'
  },
  {
    id: 32,
    question: "What was the tragic 'Bataan Death March' in April 1942 following the surrender of General Edward P. King to the Imperial Japanese Army?",
    options: [
      { key: 'A', text: 'The forcible 65-mile trek of approximately 76,000 American and Filipino prisoners of war under brutal conditions from Mariveles/Bagac, Bataan to Camp O\'Donnell, Capas, Tarlac' },
      { key: 'B', text: 'A military victory parade' },
      { key: 'C', text: 'A voluntary mountain hike' },
      { key: 'D', text: 'An evacuation to Australia' }
    ],
    correctAnswer: 'A',
    explanation: 'Thousands of Filipino and American soldiers died of dehydration, exhaustion, beatings, and summary executions along the march.',
    topicRef: '3.0 WWII: Bataan Death March'
  },
  {
    id: 33,
    question: "Who served as President of the Japanese-sponsored 'Second Philippine Republic' (Puppet Republic) from 1943 to 1945, striving to protect Filipinos from Japanese atrocities?",
    options: [
      { key: 'A', text: 'Jose P. Laurel' },
      { key: 'B', text: 'Jorge B. Vargas' },
      { key: 'C', text: 'Benigno Aquino Sr.' },
      { key: 'D', text: 'Claro M. Recto' }
    ],
    correctAnswer: 'A',
    explanation: 'Jose P. Laurel accepted the presidency under Japanese occupation as a buffer to mitigate Japanese harshness against Filipino civilians.',
    topicRef: '3.0 WWII: Jose P. Laurel'
  },
  {
    id: 34,
    question: "Who was the guerilla leader who founded the 'Hukbalahap' (Hukbo ng Bayan Laban sa Hapon) peasant anti-Japanese resistance in Central Luzon in 1942?",
    options: [
      { key: 'A', text: 'Luis Taruc' },
      { key: 'B', text: 'Crisanto Evangelista' },
      { key: 'C', text: 'Bernabe Buscayno' },
      { key: 'D', text: 'Jose Maria Sison' }
    ],
    correctAnswer: 'A',
    explanation: 'Luis Taruc organized the communist-led Hukbalahap guerillas who fought fiercely against Japanese forces and later challenged post-war agrarian policies.',
    topicRef: '3.0 WWII Guerillas: Hukbalahap'
  },
  {
    id: 35,
    question: "Who was the last President of the Commonwealth and the first President of the Third Philippine Republic inaugurated on July 4, 1946?",
    options: [
      { key: 'A', text: 'Manuel Roxas' },
      { key: 'B', text: 'Elpidio Quirino' },
      { key: 'C', text: 'Ramon Magsaysay' },
      { key: 'D', text: 'Carlos P. Garcia' }
    ],
    correctAnswer: 'A',
    explanation: 'Manuel Roxas transitioned the nation from Commonwealth to the internationally recognized sovereign Third Republic.',
    topicRef: '3.0 Third Republic Presidents: Manuel Roxas'
  },
  {
    id: 36,
    question: "Which Philippine President was beloved as the 'Champion of the Masses' (Man of the People), opened Malacañang Palace to ordinary citizens, and died in a plane crash on Mt. Manunggal in 1957?",
    options: [
      { key: 'A', text: 'Ramon Magsaysay' },
      { key: 'B', text: 'Carlos P. Garcia' },
      { key: 'C', text: 'Diosdado Macapagal' },
      { key: 'D', text: 'Ferdinand Marcos' }
    ],
    correctAnswer: 'A',
    explanation: 'Ramon Magsaysay crushed the Huk insurgency through agrarian reform and restoration of public trust in democratic government.',
    topicRef: '3.0 Third Republic: Ramon Magsaysay'
  },
  {
    id: 37,
    question: "Which Philippine President instituted the 'Filipino First Policy' to promote economic nationalism and prioritize Filipino businessmen over foreign investors?",
    options: [
      { key: 'A', text: 'Carlos P. Garcia' },
      { key: 'B', text: 'Diosdado Macapagal' },
      { key: 'C', text: 'Manuel Roxas' },
      { key: 'D', text: 'Elpidio Quirino' }
    ],
    correctAnswer: 'A',
    explanation: 'Carlos P. Garcia enacted the Filipino First Policy to assert national economic sovereignty and protect local industries.',
    topicRef: '3.0 Third Republic: Carlos P. Garcia'
  },
  {
    id: 38,
    question: "Which President changed the date of Philippine Independence Day from July 4 to June 12 via Proclamation No. 28 in 1962?",
    options: [
      { key: 'A', text: 'Diosdado Macapagal' },
      { key: 'B', text: 'Ferdinand Marcos' },
      { key: 'C', text: 'Corazon Aquino' },
      { key: 'D', text: 'Ramon Magsaysay' }
    ],
    correctAnswer: 'A',
    explanation: 'Diosdado Macapagal officially restored June 12, 1898 as the true historical date of Philippine national independence.',
    topicRef: '3.0 Third Republic: Diosdado Macapagal'
  },
  {
    id: 39,
    question: "On what date did President Ferdinand E. Marcos issue Proclamation No. 1081 placing the entire Philippines under Martial Law?",
    options: [
      { key: 'A', text: 'September 21, 1972 (signed; announced publicly Sept 23)' },
      { key: 'B', text: 'August 21, 1983' },
      { key: 'C', text: 'February 25, 1986' },
      { key: 'D', text: 'January 17, 1981' }
    ],
    correctAnswer: 'A',
    explanation: 'Marcos instituted Martial Law via Proclamation 1081, suspending civil liberties and establishing the "New Society" (Bagong Lipunan).',
    topicRef: '3.0 Martial Law Era: Proclamation 1081'
  },
  {
    id: 40,
    question: "What historic non-violent popular uprising ousted the authoritarian regime of Ferdinand Marcos and restored Philippine democracy in February 1986?",
    options: [
      { key: 'A', text: 'EDSA People Power Revolution (February 22–25, 1986)' },
      { key: 'B', text: 'First Quarter Storm' },
      { key: 'C', text: 'EDSA Dos' },
      { key: 'D', text: 'Oakwood Mutiny' }
    ],
    correctAnswer: 'A',
    explanation: 'Millions gathered along Epifanio de los Santos Avenue (EDSA) armed with prayers, flowers, and solidarity, peacefully toppling the dictatorship.',
    topicRef: '3.0 1986 EDSA People Power Revolution'
  },
  {
    id: 41,
    question: "Who was sworn in as the first female President of the Philippines and Asia on February 25, 1986, spearheading the creation of the 1987 Constitution?",
    options: [
      { key: 'A', text: 'Corazon C. Aquino' },
      { key: 'B', text: 'Gloria Macapagal Arroyo' },
      { key: 'C', text: 'Imelda Marcos' },
      { key: 'D', text: 'Eva Macapagal' }
    ],
    correctAnswer: 'A',
    explanation: 'Corazon Aquino restored democratic institutions, promulgated the Freedom Constitution, and ratified the 1987 Philippine Constitution.',
    topicRef: '3.0 Fifth Republic: Corazon Aquino'
  },
  {
    id: 42,
    question: "What are the three co-equal branches of the Philippine Government under the 1987 Constitution?",
    options: [
      { key: 'A', text: 'Executive (President), Legislative (Congress: Senate & House of Representatives), and Judicial (Supreme Court and Lower Courts)' },
      { key: 'B', text: 'Military, Police, and Church' },
      { key: 'C', text: 'DepEd, CHED, and TESDA' },
      { key: 'D', text: 'Barangay, Municipality, and Province' }
    ],
    correctAnswer: 'A',
    explanation: 'The doctrine of Separation of Powers and Checks and Balances divides governance among the Executive, Legislative, and Judicial branches.',
    topicRef: '4.0 1987 Constitution: 3 Branches of Government'
  },
  {
    id: 43,
    question: "What are the three independent Constitutional Commissions created under Article IX of the 1987 Philippine Constitution?",
    options: [
      { key: 'A', text: 'Civil Service Commission (CSC), Commission on Elections (COMELEC), and Commission on Audit (COA)' },
      { key: 'B', text: 'CHED, TESDA, and DepEd' },
      { key: 'C', text: 'DOLE, DSWD, and DOH' },
      { key: 'D', text: 'BIR, BOC, and DBM' }
    ],
    correctAnswer: 'A',
    explanation: 'The CSC (human resources), COMELEC (elections), and COA (public funds auditing) are constitutionally independent bodies with fiscal autonomy.',
    topicRef: '4.0 1987 Constitution: Constitutional Commissions'
  },
  {
    id: 44,
    question: "What is the primary judicial power of the Supreme Court to declare a law, treaty, or executive order unconstitutional called?",
    options: [
      { key: 'A', text: 'Judicial Review' },
      { key: 'B', text: 'Executive Clemency' },
      { key: 'C', text: 'Legislative Veto' },
      { key: 'D', text: 'Quo Warranto' }
    ],
    correctAnswer: 'A',
    explanation: 'Article VIII grants the Supreme Court the power of Judicial Review to determine whether there has been grave abuse of discretion amounting to lack or excess of jurisdiction.',
    topicRef: '4.0 1987 Constitution: Judicial Review'
  },
  {
    id: 45,
    question: "In economics, what is the 'Law of Demand'?",
    options: [
      { key: 'A', text: 'Ceteris paribus (all else being equal), as the price of a good increases, the quantity demanded decreases; as price decreases, quantity demanded increases (Inverse Relationship)' },
      { key: 'B', text: 'As price increases, demand increases' },
      { key: 'C', text: 'Price has no effect on demand' },
      { key: 'D', text: 'Producers produce less when prices are high' }
    ],
    correctAnswer: 'A',
    explanation: 'The Law of Demand states that consumers purchase less of a commodity at higher price points due to substitution and income effects.',
    topicRef: '4.0 Economics: Law of Supply and Demand'
  },
  {
    id: 46,
    question: "What is 'Inflation' in macroeconomics?",
    options: [
      { key: 'A', text: 'A sustained and generalized increase in the overall price level of goods and services in an economy over a period of time, reducing purchasing power' },
      { key: 'B', text: 'Pumping air into car tires' },
      { key: 'C', text: 'A sudden drop in stock prices' },
      { key: 'D', text: 'A rapid increase in gold reserves' }
    ],
    correctAnswer: 'A',
    explanation: 'Inflation erodes currency purchasing power (measured by the Consumer Price Index / CPI).',
    topicRef: '4.0 Economics: Macroeconomics & Inflation'
  },
  {
    id: 47,
    question: "In sociology, what is 'Ethnocentrism' versus 'Cultural Relativism'?",
    options: [
      { key: 'A', text: 'Ethnocentrism is judging other cultures using one\'s own cultural standards as superior; Cultural Relativism evaluates cultural practices from the perspective of that culture itself' },
      { key: 'B', text: 'Ethnocentrism is loving foreigners; Cultural Relativism is hating them' },
      { key: 'C', text: 'They are identical sociological concepts' },
      { key: 'D', text: 'Ethnocentrism means traveling abroad' }
    ],
    correctAnswer: 'A',
    explanation: 'Ethnocentrism views one\'s own group as the center of everything; cultural relativism practices objective understanding without cultural bias.',
    topicRef: '4.0 Sociology & Culture'
  },
  {
    id: 48,
    question: "What is 'Xenocentrism' in cultural sociology?",
    options: [
      { key: 'A', text: 'The belief that foreign products, ideas, lifestyles, and cultures are inherently superior to one\'s own (colonial mentality)' },
      { key: 'B', text: 'Extreme hatred and fear of foreigners (Xenophobia)' },
      { key: 'C', text: 'Intense national pride' },
      { key: 'D', text: 'Living in isolation' }
    ],
    correctAnswer: 'A',
    explanation: 'Xenocentrism (often manifesting as colonial mentality in the Philippines) prefers imported foreign culture and goods over domestic ones.',
    topicRef: '4.0 Sociology: Xenocentrism'
  },
  {
    id: 49,
    question: "What is 'Social Stratification'?",
    options: [
      { key: 'A', text: 'The hierarchical arrangement and categorization of individuals and groups in a society based on wealth, income, power, social class, and prestige' },
      { key: 'B', text: 'The layers of soil in the ground' },
      { key: 'C', text: 'Building multi-story bridges' },
      { key: 'D', text: 'A group of friends chatting online' }
    ],
    correctAnswer: 'A',
    explanation: 'Social stratification structures societal inequalities through class, caste, estate, or status hierarchies.',
    topicRef: '4.0 Sociology: Social Stratification'
  },
  {
    id: 50,
    question: "Why is 'Social Studies / Philippine History and Governance' a vital core competency for all licensed professional teachers?",
    options: [
      { key: 'A', text: 'It instills deep patriotism, historical consciousness, democratic civic competence, and critical appreciation of Filipino identity and national struggles' },
      { key: 'B', text: 'To memorize dates without understanding their meaning' },
      { key: 'C', text: 'To encourage blind obedience to political leaders' },
      { key: 'D', text: 'Because history never changes' }
    ],
    correctAnswer: 'A',
    explanation: 'Social studies empowers educators to cultivate informed, patriotic, vigilant, and socially responsible Filipino citizens.',
    topicRef: '1.0 Rationale of Social Studies'
  }
];
