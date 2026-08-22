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

export const RIZAL_PAGES: LessonPage[] = [
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Rizal as National Hero & His Genealogy: Chinese Ancestry",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Rizal as National Hero",
        content: "The Taft Commission chose Rizal out of several great Filipinos as the number one hero of his people. Republic Act 1425, the Rizal Law, was authored by Senator Claro M. Recto and signed on June 12, 1956."
      },
      {
        type: "text",
        heading: "Rizal's Full Name",
        content: "Latest form: Jose Protacio Realonda Alonso Mercado Rizal. Old form: José Protacio Rizal Mercado y Alonso Realonda."
      },
      {
        type: "bullet_list",
        heading: "Birth and Baptism",
        items: [
          "Described as 'a child of a good family.'",
          "Born on June 19, 1861, between 11 and 12 in the evening, a few days before the full moon.",
          "Baptized on June 22, 1861 by Fr. Rufino Collantes, with Fr. Pedro Casañas as his godfather."
        ]
      },
      {
        type: "text",
        heading: "I. Jose Rizal's Genealogy — A. Genealogy",
        content: "Genealogy is the study of ancestry and family histories conducted by a genealogist."
      },
      {
        type: "bullet_list",
        heading: "B. Chinese Ancestry",
        items: [
          "Domingo Lam-co — Rizal's paternal ancestor, a native of the Chinchew district in China, baptized in the Parian church of San Gabriel on a Sunday in June 1697.",
          "Inez dela Rosa — wife of Lam-co, half his age; her parents were Agustin Chinco and Jacinta Rafaela."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Genealogy: The Mercado Clan and the Alonso Clan",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "C. Mercado Clan",
        items: [
          "Francisco Mercado y Chinco — Rizal's father, a prosperous landowner and sugar and rice planter of Chinese-Filipino descent.",
          "Born on May 11, 1818 in Biñan and lived to be 80 years old; the youngest in a family of 13 siblings; a well-educated farmer who studied Latin and philosophy at Colegio de San Jose in Manila.",
          "His parents were Captain Juan Mercado (gobernadorcillo, or mayor, of Biñan) and Cirila Alejandra."
        ]
      },
      {
        type: "bullet_list",
        heading: "D. Alonso Clan",
        items: [
          "Teodora Alonso — Rizal's mother, one of the most highly educated women in the Philippines, of Ilocano-Tagalog-Chinese-Spanish descent, possibly with Japanese blood as well.",
          "Born on November 9, 1827 and lived to be 84 years old; studied at Colegio de Santa Rosa; a gifted woman with insight into literature, art, music, and other forms of Filipino culture.",
          "Daughter of Brigada de Quintos."
        ]
      },
      {
        type: "callout",
        heading: "Note",
        content: "Eugenio Ursua — Rizal's maternal great-great-grandfather, of Japanese ancestry."
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "The Claveria List and Rizal's Siblings",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "E. Claveria List",
        content: "By the Royal Decree of 1849, issued on November 21, 1849 under Governor General Narciso Claveria y Zaldua, a new family name was adopted per the approved list found in the Catalogo Alfabetico de Apellidos. 'Rizal,' a shortened form of the Spanish word for 'second crop,' seemed suited to a family of farmers — it originated from the word 'Ricial,' which literally means rice field."
      },
      {
        type: "numbered_list",
        heading: "F. Siblings — Jose was the 7th of 11 Children (and the Younger of the 2 Boys)",
        items: [
          "1. Saturnina — oldest; married to Manuel Hidalgo; published Pascual H. Poblete's Tagalog translation of the Noli Me Tangere.",
          "2. Paciano — oldest boy, 10 years older than Jose; a Major General in the revolutionary army; married Severina Decena.",
          "3. Narcisa — known as Doña Sisa; could recite from memory all of Jose Rizal's poems; married Antonio Lopez.",
          "4. Olympia — married Silvestre Ubaldo, a telegraph operator in Manila.",
          "5. Lucia — married Mariano Herbosa, who died of cholera and was denied a Christian burial.",
          "6. Maria — married Daniel Faustino Cruz.",
          "7. Jose — our national hero.",
          "8. Concepcion — known as Concha; died at age 3.",
          "9. Josefa — a spinster.",
          "10. Trinidad — also a spinster.",
          "11. Soledad — youngest; married Pantaleon Quintero; studied at La Concordia College, where she and Leonor Rivera were classmates."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Hereditary Influences",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "G. Hereditary Influences",
        tableData: {
          headers: ["Ancestral Line", "Inherited Traits"],
          rows: [
            ["Father", "Profound sense of self-respect; habit of independent thinking; love for work"],
            ["Mother", "Scientific ability; religious nature; spirit of self-sacrifice; passion for arts and literature"],
            ["Malayan Ancestors", "Love for freedom; innate desire to travel; indomitable courage"],
            ["Chinese Ancestors", "Serious nature; frugality; patience; love for children"],
            ["Spanish Ancestors", "Elegance of bearing; sensitivity to insult; gallantry to ladies"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "II. Rizal's Early Childhood",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Milestones from Age 3 to Age 9",
        items: [
          "A. At age 3 — learned the alphabet and prayers from his mother Teodora, his first teacher. Other early teachers were Maestro Celestino, Maestro Lucas Padua, and Leon Monroy, who gave Jose introductory lessons in Latin. He was called 'Ute' by his brother and sisters, and 'Pepe' or 'Pepito' by townspeople in Calamba.",
          "B. At age 5 — read, although not fluently, the Spanish family bible called Historia Sagrada.",
          "C. At age 7 — wrote a comedy that highlighted his literary talent for the local fiesta and was rewarded 2 pesos.",
          "D. At age 8 — wrote the poem 'Sa Aking mga Kabata.'",
          "E. At age 9 — wrote the poem 'Mother's Birthday'; sent to a boys' school in Biñan, where his teacher was Dr. Justiniano Aquino Cruz."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "III. Formative Years — Years in Ateneo",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "A. Years in Ateneo (Escuela Pia → Ateneo Municipal → Ateneo de Manila)",
        items: [
          "June 10, 1872 — Paciano accompanied Jose to matriculate at the Ateneo Municipal de Manila. Registrar Fr. Magin Ferrando initially refused to admit Jose for two reasons: (a) he was late for registration, and (b) he appeared sickly and undersized for his age. He was admitted upon the intercession of Manuel Xerez-Burgos, nephew of Fr. Burgos.",
          "Rizal first boarded on Caraballo Street, a 25-minute walk from Ateneo, in a house owned by a spinster named Titay, who owed the Rizal family 300 pesos.",
          "Jose Bech was Rizal's first professor in Ateneo.",
          "Students in Ateneo were divided into two 'empires' competing for academic supremacy: the Romans (internos/boarders) and the Carthaginians (externos/non-boarders); Jose became the 'Emperor of the Carthaginians.'",
          "Remembered as an original thinker, a creative scholar, and a natural leader.",
          "Fr. Francisco de Paula Sanchez was Jose's favorite teacher in Ateneo — he considered him the 'best professor' in Ateneo.",
          "He also took private lessons at Santa Isabel College during noon recesses to improve his Spanish, at 3 pesos per session.",
          "During his education in Ateneo, his mother was imprisoned."
        ]
      },
      {
        type: "callout",
        heading: "Note",
        content: "The Count of Monte Cristo by Alexandre Dumas was the first foreign book Jose read. Travels in the Philippines by Dr. Feodor Jagor, which criticized the Spanish regime in the Philippines, intrigued Jose and inspired him to educate his countrymen. He was known as the 'Pride of the Jesuits.'"
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Years in UST and Rizal's Writings",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "B. Years in UST",
        content: "Rizal enrolled as a philosophy and medical student. He did not shine in UST and failed to obtain high academic records."
      },
      {
        type: "bullet_list",
        heading: "C. Rizal's Writings",
        items: [
          "A La Juventud Filipina (To the Philippine Youth) — won a special prize in poetry while Jose was still in Ateneo.",
          "Por La Educacion Recibe Lustre la Patria (Through Education Our Motherland Receives Light) — a poem written while in Ateneo, suggesting that education is an integral part of national character.",
          "Alianza Intima la Religion y la Educacion (The Intimate Alliance between Religion and Education) — expressed the importance of religion in education; to Jose, education without God is not true education.",
          "A la Virgen Maria (To the Virgin Mary) — Jose's first sad poem.",
          "Al Niño Jesus (To the Child Jesus) — a short ode to Jesus consisting of only 8 verses, classified as octava real.",
          "In Memory of My Village — Jose recalled the joyous days of his childhood in Calamba.",
          "Council of the Gods — an allegory awarded first place in a competition, though the decision was later reversed.",
          "Mi Primera Inspiracion (My First Inspiration) — dedicated to his mother.",
          "The Philippines a Century Hence (Filipinas dentro de cien años) — an essay attempting to predict the country's future.",
          "Mi Ultimo Adios (My Last Farewell) — an untitled elegy later entitled 'Mi Ultimo Adios' by his friend and fellow reformist, Mariano Ponce."
        ]
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "IV. Journey to Madrid & V. The Scholar's Journey",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "IV. Journey to Madrid",
        items: [
          "May 3, 1882 — Jose secretly left the country aboard the S.S. Salvadora.",
          "He enrolled in medicine at the Universidad Central de Madrid on November 3, 1882, under Professor Marquis Busto.",
          "He studied painting and sculpture at the Academy of San Carlos, and drawing at the Academia de Bellas Artes de San Fernando under Professor Haes.",
          "Freemasonry — a worldwide fraternity; Jose was a member of the Acacia lodge No. 9, with the symbolic name Dimasalang, meaning 'untouchable.'",
          "Uncle Tom's Cabin by Harriet Beecher Stowe and The Wandering Jew by Eugene Sue inspired Jose to fight for the Filipinos."
        ]
      },
      {
        type: "bullet_list",
        heading: "V. The Scholar's Journey",
        items: [
          "From Madrid, Jose went to Paris in 1885 and continued his medical studies under the famed French ophthalmologist Dr. Louis de Wecker.",
          "Wanting to perfect the German method of diagnosis, he continued studying in Germany, receiving special training under Dr. Otto Becker.",
          "Jose attended lecture courses at the old University of Heidelberg for a few months only. He lived with Dr. Karl Ullmer, with whom he took delightful walks every afternoon.",
          "Jose continued writing the Noli and finished it in Berlin, Germany on February 22, 1887. Maximo Viola (the 'savior of Noli') helped fund its printing; one of the first copies was sent to Ferdinand Blumentritt.",
          "On July 5, 1887, Jose took a ship from Marseilles and began his journey back to the Philippines."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "VI. Rizal's Romances (1–3)",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Segunda Katigbak, Leonor Valenzuela, and Leonor Rivera",
        items: [
          "1. Segunda Katigbak (Rizal's First Love) — Jose was only sixteen when he first fell in love, with Segunda Katigbak, a girl from Lipa, Batangas, two years his junior — a teenage puppy love. He met her through his friend Mariano Katigbak while visiting his maternal grandmother; she was also a close friend of Jose's sister Olimpia at La Concordia College. Unfortunately, Segunda was already engaged to her townmate, Manuel Luz.",
          "2. Leonor Valenzuela (Invisible Letters) — known as Orang, his next-door neighbor and daughter of Capitan Juan and Capitana Sanday Valenzuela; a tall girl who carried herself with grace and elegance. Jose courted her by sending love notes written in invisible ink made from water and table salt, teaching her to read them by heating the paper over a lamp or candle.",
          "3. Leonor Rivera (Great Love and First Engagement) — Jose's cousin from Camiling and a fellow La Concordian; daughter of Antonio Rivera, his uncle in whose house Jose lived during his junior year at UST. She and Rizal became engaged; in her letters she signed her name 'Taimis' to hide their relationship from her parents. Though engaged to Jose, she eventually married another man, Henry Kipping."
        ]
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "VI. Rizal's Romances (4–6)",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Consuelo Ortiga, O Sei San, and Gertrude Beckett",
        items: [
          "4. Consuelo Ortiga y Perez (The Madrid Flirt) — daughter of a liberal-minded Spanish official who once served in Manila during the Spanish era. Rizal's romance with Consuelo did not turn into a serious affair; he stepped back for two reasons — he was still engaged to Leonor Rivera, and he was aware of his friend Eduardo de Lete's affection for her and did not want to ruin their friendship.",
          "5. O Sei San (Love at First Sight) — daughter of a Japanese nobleman; had a brief affair with Rizal when she was 23 and he was 27. Her real name was Seiko Usui. Because of his deep affection for her, Rizal was almost tempted to settle down in Japan; his 45-day sojourn there was one of the happiest interludes of his life.",
          "6. Gertrude Beckett (Contemporary Pastime) — a blue-blooded Englishwoman, the oldest daughter of a London church organist in whose house Rizal lodged while visiting London. Their flirtatious friendship drifted toward a blossoming romance; he affectionately called her 'Gettie,' and she called him 'Pettie.' It was an innocent pastime, not real love."
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "VI. Rizal's Romances (7–9)",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Suzanne Jacoby, Nellie Boustead, and Josephine Bracken",
        items: [
          "7. Suzanne Jacoby (The Naughty Boy of Brussels) — a Belgian woman Jose met while staying with the Jacoby family; one of the contributing factors that led Jose to continue writing El Filibusterismo.",
          "8. Nellie Boustead (A Failed Proposal) — intellectual, self-assured, attractive, and serious about her religious beliefs. Jose almost married her upon learning of Leonor Rivera's love affair.",
          "9. Josephine Bracken (True Love in Exile) — Jose called her his 'wife' and 'dulce estranjera.' An 18-year-old Rizal met in Dapitan; he wanted to marry her, but due to church requirements they simply lived together. They had a son who lived only three hours; Rizal named him Francisco, after his father, and buried him in Dapitan. Josephine later married a Filipino named Vicente Abad and died in Hong Kong of tuberculosis."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "VII. Rizal's Novels",
    pdfPageRef: "PDF Page 5",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Rizal's Four Novels",
        items: [
          "1. Noli Me Tangere (Touch Me Not) — the story of Philippine conditions during the last decades of Spanish rule; inspired by Harriet Beecher Stowe's Uncle Tom's Cabin; finished in Berlin, Germany; Dr. Maximo Viola was its 'savior'; 'Elias and Salome' was a deleted chapter.",
          "2. El Filibusterismo (The Reign of Greed / The Subversion) — dedicated to GomBurZa; Valentin Ventura was its 'savior'; finished in Ghent, Belgium.",
          "3. Makamisa — Rizal's unfinished Tagalog novel, written in a light, sarcastic style; incomplete, with only two chapters finished.",
          "4. Dapitan — an unfinished novel written in ironic Spanish; written during his exile in Dapitan to depict the town's life and customs."
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Noli Me Tangere Characters (Part 1) — Self-Study",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "For Self-Study / Self-Review Only",
        content: "The following character lists are supplementary material for self-study and self-review."
      },
      {
        type: "table",
        heading: "A. Noli Me Tangere Characters (1–11)",
        tableData: {
          headers: ["Character", "Description"],
          rows: [
            ["1. Crisóstomo Ibarra", "Full name Juan Crisóstomo Ibarra y Magsalin; a Filipino who studied in Europe for 7 years; love interest of Maria Clara; son of the deceased Don Rafael Ibarra; changed his surname from Eibarramendia to Ibarra."],
            ["2. Elías", "Ibarra's mysterious friend, a master boater and a fugitive, referred to at one point as 'the pilot.' Wants to revolutionize his country. Ibarra's grandfather condemned Elias's grandfather for burning a warehouse, making Elias the fugitive he is."],
            ["3. María Clara", "María Clara de los Santos, Ibarra's sweetheart; the illegitimate daughter of Father Dámaso and Pía Alba."],
            ["4. Father Dámaso", "Also known by his full name Dámaso Verdolagas; a Franciscan friar and María Clara's biological father."],
            ["5. Don Filipo", "A close relative of Ibarra, and a Filibuster."],
            ["6. Linares", "A distant nephew of Don Tiburcio de Espadaña, the would-be fiancé of Maria Clara."],
            ["7. Captain General (no specific name)", "The most powerful official in the Philippines, a hater of secular priests and corrupt officials, and a friend of Ibarra."],
            ["8. Captain Pablo", "The leader of the rebels, whose family was destroyed because of the Spanish."],
            ["9. Tarcilo and Bruno Brothers", "Brothers whose father was killed by the Spaniards."],
            ["10. Sisa", "The mother of Basilio and Crispín, who went insane after losing her sons."],
            ["11. Basilio", "The elder son of Sisa."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "Noli Me Tangere Characters (Part 2) — Self-Study",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "A. Noli Me Tangere Characters (12–22)",
        tableData: {
          headers: ["Character", "Description"],
          rows: [
            ["12. Crispín", "The younger son of Sisa, who died from punishment by the soldiers over a false accusation of stealing an amount of money."],
            ["13. Padre Sibyla", "Hernando de la Sibyla, a Filipino friar, described as short and having fair skin."],
            ["14. Kaptain Tiago", "Also known by his full name Don Santiago de los Santos, the known — but not real — father of María Clara; lives in Binondo."],
            ["15. Padre Salví", "Also known by his full name Bernardo Salví, a secret admirer of María Clara."],
            ["16. Pilosopo Tasyo", "Also known as Don Anastasio, portrayed in the novel as a pessimist and a cynic, thought mad by his neighbors."],
            ["17. The Alférez", "Chief of the Guardia Civil; mortal enemy of the priests for power in San Diego."],
            ["18. Don Tiburcio", "Spanish husband of Doña Victorina; limp and submissive to his wife, and also pretends to be a doctor."],
            ["19. Doña Victorina", "Victorina de los Reyes de De Espadaña, a woman who passes herself off as a Peninsular."],
            ["20. Doña Consolación", "Wife of the Alférez, another woman who passes herself off as a Peninsular; best remembered for her abusive treatment of Sisa."],
            ["21. Pedro", "Abusive husband of Sisa who loves cockfighting."],
            ["22. Old Tasio", "An older man Ibarra seeks advice from. The town thinks him mad, but in actuality he is quite wise."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "El Filibusterismo Characters (Part 1) — Self-Study",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "B. El Filibusterismo Characters (1–8)",
        tableData: {
          headers: ["Character", "Description"],
          rows: [
            ["1. Simoun", "Crisóstomo Ibarra reincarnated as a wealthy jeweler, bent on starting a revolution."],
            ["2. Basilio", "Sisa's son, now an aspiring doctor."],
            ["3. Isagani", "A poet and Basilio's best friend; portrayed as emotional and reactive; Paulita Gómez's boyfriend before being dumped for fellow student Juanito Peláez."],
            ["4. Kabesang Tales", "Telesforo Juan de Dios, a former cabeza de barangay who resurfaced as the feared Luzón bandit Matanglawin (Tagalog for Hawkeye); his father, Old Man Selo, eventually dies after his own son Tano, who became a guardia civil, unknowingly shoots his grandfather in an encounter."],
            ["5. Don Custodio", "Custodio de Salazar y Sánchez de Monteredondo, a famous journalist asked by the students about his decision on the Academia de Castellano. In reality he is quite an ordinary fellow who married a rich woman in order to be a member of Manila's high society."],
            ["6. Paulita Gómez", "The girlfriend of Isagani and the niece of Doña Victorina. In the end, she and Juanito Peláez are wed, and she dumps Isagani, believing that she will have no future if she marries him."],
            ["7. Father Florentino", "Isagani's godfather, and a secular priest; was engaged to be married, but chose the priesthood instead — the story hints at the ambivalence of his decision, as he chooses an assignment to a remote place, living in solitude near the sea."],
            ["8. Huli", "Juliana de Dios, the girlfriend of Basilio, and the youngest daughter of Kabesang Tales."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 1,
    dayTitle: "Life and Works of Jose Rizal",
    topicTitle: "El Filibusterismo Characters (Part 2) — Self-Study",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "B. El Filibusterismo Characters (9–15)",
        tableData: {
          headers: ["Character", "Description"],
          rows: [
            ["9. Ben Zayb", "Abraham Ibañez is his real name. He is a journalist who thinks he is the only one thinking in the Philippines."],
            ["10. Placido Penitente", "A student of the University of Santo Tomas who is always miserable, and therefore controls his temper."],
            ["11. Quiroga", "A Chinese businessman who dreamt of being a consul of a Consulate of China in the Philippines. He hid Simoun's weapons inside his house."],
            ["12. Old Man Selo", "Father of Kabesang Tales. He raised the sick and young Basilio after his mother Sisa had died."],
            ["13. Father Fernandez", "The priest-friend of Isagani. He promised to Isagani that he and the other priests would give in to the students' demands."],
            ["14. Attorney Pasta", "One of the great lawyers of mid-Hispanic Manila."],
            ["15. Padre Sibyla", "Hernando de la Sibyla, a Filipino friar and now vice-rector of the University of Santo Tomas (U.S.T.)."]
          ]
        }
      }
    ]
  }
];