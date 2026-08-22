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

export const PHILIPPINE_HISTORY_AND_SOCIETY_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: PHILIPPINE HISTORY — FORMATION THEORIES,
  // PRE-COLONIAL SOCIETY & HISPANIZATION
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Theories on the Formation of the Philippines",
    pdfPageRef: "PDF Page 1",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "1. Land Bridge Theory",
        content: "Theorizes that the Philippines was once part of mainland Asia — a land mass bridging the Asian continent to Indonesia, New Guinea, and Australia. During the last ice age, when sea levels were lower, land bridges allowed humans and animals to migrate from the Asian mainland into the Philippine archipelago."
      },
      {
        type: "text",
        heading: "2. Volcanic Origin",
        content: "Proposed by Dr. Bailey Willis. Holds that the Philippines came into existence after volcanic eruptions beneath the Pacific Ocean, since the country sits within the Pacific Ring of Fire — an area prone to earthquakes and volcanic activity."
      },
      {
        type: "text",
        heading: "3. Legend of Mu or Lemuria",
        content: "Proposed by James Churchward. Holds that the Philippines and Indonesia were once part of a Pacific continent called Mu or Lemuria, which sank during prehistoric times — a theory influenced by the legend of the lost continent of Atlantis."
      },
      {
        type: "text",
        heading: "4. Legend of Manaul",
        content: "In Bisaya folklore, the king who guided destinies was Manaul, a cunning and resourceful bird who manipulated the gods Kaptan and Magauayan into a battle that eventually led to the creation of land."
      },
      {
        type: "callout",
        heading: "5. Continental Drift Theory",
        content: "Proposed by German meteorologist Alfred Wegener in 1912. Suggests that the Philippines, along with other continents and landmasses, were once part of a single supercontinent called Pangaea, which broke apart and drifted to their current positions due to the movement of tectonic plates (Pangaea → Laurasia and Gondwana → the modern world)."
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Peopling of the Islands & the Archipelago's Names",
    pdfPageRef: "PDF Page 1-2",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "Creation Theory",
        content: "The biblical account — Genesis 1:1-31 (the creation of Earth) and Genesis 2:2-4 to 2:25 (Adam and Eve)."
      },
      {
        type: "comparison",
        heading: "Migration Theory vs. Evolution Theory",
        items: [
          "Migration Theory (Henry Otley Beyer): a hypothesis that the Philippines was populated by different waves of migration from Southeast Asia — First: Dawnmen (through land bridges); Second: Aetas or Negritoes (through land bridges); Third: Indonesians (by boat); Fourth: Malays (by boat).",
          "Evolution Theory / Core Population Theory (Felipe Landa Jocano): proposed as a more accurate explanation of how humans came to inhabit the Philippines, evidenced by the discovery of the Tabon Man skullcap in the Tabon Caves, Palawan (1962), by archaeologists Robert Fox and Manuel Santiago."
        ]
      },
      {
        type: "text",
        heading: "Sikalak and Sibkahay",
        content: "In folklore, Manaul stops the fight between Sky and Sea and discovers Sikalak and Sibkahay inside a bamboo plant — the first man and woman in this narrative."
      },
      {
        type: "table",
        heading: "Names of the Archipelago Through History",
        tableData: {
          headers: ["Year", "Named By", "Name Given"],
          rows: [
            ["Pre-1521", "Early Chinese Traders", "Ma-i (present-day Mindoro)"],
            ["1521", "Ferdinand Magellan", "Islas de San Lazaro (Archipelago of St. Lazarus)"],
            ["1543", "Ruy Lopez de Villalobos", "Filipinas (in honor of the Prince of Asturias)"],
            ["1751", "Fr. Juan J. Delgado", "Pearl of the Orient"],
            ["1896", "Dr. Jose Rizal", "Pearl of the Orient Seas"],
            ["American Period", "American Government", "Philippine Islands"],
            ["1946", "After Independence", "Republic of the Philippines"],
            ["19th Century", "Artemio Ricarte", "Rizaline Republic"],
            ["20th Century", "Ferdinand Marcos", "Maharlika"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Pre-Colonial Government & Economics",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "The Barangay: The Pre-Colonial Political Unit",
        content: "Composed of 30 to 100 families, ruled by a Datu or Raja (chieftain) under a chiefdom system. The barangay system was decentralized, and the datu exercised executive, legislative, and judicial powers."
      },
      {
        type: "text",
        heading: "Trial by Ordeal",
        content: "A judicial process that entailed trial by torture — for example, the boiling water ordeal."
      },
      {
        type: "bullet_list",
        heading: "Pre-Colonial Economy",
        items: [
          "Hunting, gathering, and a barter system using gold, salt, and rice as a medium of exchange.",
          "Industry: ironworking, boatbuilding, pottery, weaving, and gold working.",
          "Agriculture: subsistence farming and horticulture.",
          "Trade and commerce, both foreign and domestic."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Pre-Colonial Social Class & Education",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Pre-Colonial Social Ranks",
        tableData: {
          headers: ["Rank", "Description"],
          rows: [
            ["Datu Class", "The ruling class."],
            ["Maharlika", "The aristocracy."],
            ["Timagua (Timawa)", "The common class."],
            ["Alipin (Uripon among the Visayans)", "The dependent class, said to hold \"hutang\" (debt)."]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Two Types of Alipin",
        items: [
          "Aliping Namamahay (householder): an alipin with land rights who owned a house; came at his master's call to work the fields and perform other services.",
          "Aliping Sagigilid (gilid, referring to the part of the house near the stove): members of the master's household who ate from their master's pot."
        ]
      },
      {
        type: "text",
        content: "The Boxer Codex, an anonymous late 16th-century manuscript, notes that only men were qualified for the title of \"Datu,\" and that a datu's power depended on the loyalty of his followers."
      },
      {
        type: "bullet_list",
        heading: "Pre-Colonial Education",
        items: [
          "Writing system: Baybayin (also called Alibata).",
          "Informal education through apprenticeship.",
          "Domestic chores and practical/occupational skill-building in hunting, farming, and similar tasks.",
          "Theoretical, moral, and spiritual instruction — e.g. worship, laws, and codes."
        ]
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Hispanization: The Magellan Expedition",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Goals of European Expansion: God, Gold, Glory (3 Gs)",
        content: "The goals of the Europeans in their global expansion can be summarized as God, gold, and glory."
      },
      {
        type: "text",
        content: "Ferdinand Magellan led an expedition for Spain to the Moluccas by sailing west, leading the first expedition to circumnavigate the globe."
      },
      {
        type: "bullet_list",
        heading: "Key Figures With Magellan (Mnemonic: F-A-D-E)",
        items: [
          "Fr. Pedro de Valderrama — fleet chaplain.",
          "Antonio Pigafetta — chronicler.",
          "Duarte de Barbosa — Magellan's brother-in-law.",
          "Enrique of Malacca — Magellan's Malay slave, who acted as interpreter."
        ]
      },
      {
        type: "numbered_list",
        heading: "Magellan's Five Ships (Mnemonic)",
        items: ["TRInidad", "CONcepcion", "SANtiago", "SAN Antonio", "VIctoria"]
      },
      {
        type: "text",
        content: "On March 16, 1521 they sighted the island of Samar and made a blood compact with Rajah Kolambu. The group of islands was named the Archipelago of St. Lazarus (later renamed the Philippines after King Philip II of Spain)."
      },
      {
        type: "callout",
        heading: "The First Mass and Magellan's Death",
        content: "They anchored at Homonhon and later sailed to an islet south of Leyte (Mazaua/Limasawa), where they celebrated the first Mass on March 31, 1521. Magellan was later killed in battle against Mactan chieftain Lapu-Lapu, though his expedition paved the way for Spain's eventual colonization of the Philippines. Juan Sebastian Elcano continued the navigation afterward and became the first man to circumnavigate the world."
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Other Expeditions & Legaspi's Colonization",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Other Spanish Expeditions to the Philippines",
        items: [
          "Loaysa Expedition (1525-26), led by Fr. Juan Garcia Jofre de Loaysa.",
          "Cabot Expedition (1526-1530), led by Sebastian Cabot.",
          "Saavedra Expedition (1527-1528), led by Alvaro de Saavedra.",
          "Villalobos Expedition (1542-1546), led by Ruy Lopez de Villalobos."
        ]
      },
      {
        type: "callout",
        heading: "Miguel Lopez de Legaspi — First Spanish Governor-General",
        content: "Arrived in 1565 to establish a permanent settlement. He made a blood compact with Sikatuna, chief of Bohol, then a treaty of friendship with Rajah Tupas of Cebu, where the first Spanish settlement (San Miguel, later renamed Santissimo Nombre de Jesus) was established."
      },
      {
        type: "text",
        content: "Colonization expanded through the Visayas and northward. De Goiti fortified Manila, then under Muslim chieftain Sulayman; in 1571 Legaspi established Manila as the capital of the Philippines."
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Spanish Political Administration",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Centralized Government (250 Years)",
        content: "The Philippines was administered through the Council of the Indies, which transmitted royal decrees to the Governor-General to guide colonial administration."
      },
      {
        type: "text",
        content: "Spaniards implemented the Reduccion Plan of Fr. Juan de Plasencia, which required natives to live near the church or in town centers known as cabeceras."
      },
      {
        type: "numbered_list",
        heading: "Powers and Roles of the Governor-General",
        items: [
          "The King's official representative to the colony.",
          "Issued superior decrees.",
          "President of the Audiencia, the colony's highest court.",
          "Vice-royal patron, able to appoint minor officials and parish priests.",
          "Commander-in-Chief of the armed forces."
        ]
      },
      {
        type: "callout",
        heading: "Cumplase",
        content: "The governor's right to suspend a Royal Decree from the King if, in his opinion, the order would not benefit the colony — usually exercised with the formula \"I obey but do not comply.\""
      },
      {
        type: "table",
        heading: "Checks on Gubernatorial Power",
        tableData: {
          headers: ["Body", "Function"],
          rows: [
            ["Audiencia Real (Royal Audiencia)", "Established in 1583 to act as the colony's Supreme Court."],
            ["Residencia", "A judicial institution meant to punish those guilty of graft and corruption."],
            ["Visitador-General", "Checked the behavior of high colonial officials."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Spanish Economic Policies",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Colonial Economic Policies (Largely Monopolistic)",
        items: [
          "Taxation: initially an 8-real tribute, replaced in 1884 by the personal cedula, a poll tax based on income for residents 18 years and above.",
          "Forced Labor / Polo y Servicio: men aged 16-60 required to work for the government for 40 days, often without daily allowance and with meager food rations.",
          "Encomienda: a source of corruption involving land grants to deserving Spaniards.",
          "Galleon Trade of Manila-Acapulco: products shipped from Manila to Acapulco, Mexico, involving forced labor.",
          "Tobacco Monopoly: started by Jose Basco y Vargas and lasted 100 years — the colonial government controlled tobacco cultivation and trade, setting plantation sites, quotas, and farmer pay."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Religious Influence, Culture & the Claveria Decree",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Early Missionary Orders (Mnemonic: \"All Farmers Jumped Down the River Banks\")",
        items: [
          "Augustinians (All)",
          "Franciscans (Farmers)",
          "Jesuits (Jumped)",
          "Dominicans (Down the)",
          "Recollects (River)",
          "Benedictines (Banks)"
        ]
      },
      {
        type: "text",
        content: "Catholicism is considered Spain's greatest legacy to the Philippines, spread through the work of these early missionary orders."
      },
      {
        type: "bullet_list",
        heading: "Spanish-Era Festivities and Holidays",
        items: [
          "January — New Year's Day.",
          "March or April — Semana Santa.",
          "October 31 to November 2 — Day of the Dead.",
          "December 24 — Nochebuena.",
          "December 25 — Christmas."
        ]
      },
      {
        type: "callout",
        heading: "The Claveria Decree",
        content: "Governor-General Narciso Claveria y Zaldua enacted this decree, initiating the Catalogo Alfabetico de Apellidos to standardize Filipino surnames — primarily to ease tax collection, avoid confusion, and improve public record-keeping."
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 1,
    dayTitle: "Day 1: Philippine History — Formation Theories, Pre-Colonial Society & Hispanization",
    topicTitle: "Education & Racial Hierarchy Under Spain",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Education Under Spanish Rule",
        items: [
          "Education was treated as a status symbol and a privilege, not a right.",
          "The Educational Decree of 1863 introduced a system of primary education, opening opportunities for Filipinos to pursue higher learning.",
          "Fr. Manuel Blanco, the \"Prince of Botanists\" and the first scientist in the Philippines, wrote Flora de Filipinas (1837), identifying 1,200 plant species.",
          "Education was controlled by friars; religious orders founded the first schools and colleges."
        ]
      },
      {
        type: "table",
        heading: "Firsts in Spanish-Era Education",
        tableData: {
          headers: ["Institution", "Distinction"],
          rows: [
            ["University of Santo Tomas (1611)", "Oldest university in the Philippines."],
            ["College of San Ignacio (1589)", "First college for boys."],
            ["College of Santa Potenciana (1594)", "First college for girls."]
          ]
        }
      },
      {
        type: "table",
        heading: "Spanish-Era Racial Hierarchy",
        tableData: {
          headers: ["Class", "Description"],
          rows: [
            ["Peninsulares", "Full-blooded Spaniards born in Spain."],
            ["Insulares", "Full-blooded Spaniards born in the Philippines."],
            ["Tornatras", "Persons of mixed Spanish, Chinese, and Austronesian (Filipino) descent."],
            ["Mestizo de Español", "Persons of mixed Spanish and Austronesian (Filipino) descent."],
            ["Mestizo de Sangley", "Persons of mixed Chinese and Austronesian (Filipino) ancestry."],
            ["Sangley", "Full-blooded Chinese."],
            ["Indio", "Full-blooded Austronesian (Filipino)."]
          ]
        }
      },
      {
        type: "text",
        content: "Illustrados were middle-class Filipinos educated in Europe."
      }
    ]
  },

  // ==========================================
  // DAY 2: THE BIRTH OF FILIPINO NATIONALISM &
  // AMERICAN COLONIZATION
  // ==========================================
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "Early Resistance to Spanish Rule",
    pdfPageRef: "PDF Page 5",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Notable Revolts Against Spain and Their Immediate Causes",
        tableData: {
          headers: ["Revolt", "Immediate Cause"],
          rows: [
            ["Lakandula and Sulayman", "Legazpi's disregard of the promise that Spain would recognize the patrimonial lands of the kings of Tondo."],
            ["Magalat's Revolt", "Magalat's encouragement of the people of Cagayan to rebel against Spain."],
            ["Sumoroy's Rebellion", "Enforcement of the order sending the people of Palapag, Samar to work in the Cavite shipyard."],
            ["Maniago's Revolt", "Hatred of the bandala system and resentment over the frequent recruitment of Pampanganos to cut timber for Spanish galleons."],
            ["Diego Silang's Revolt", "Silang's resentment over his imprisonment after requesting the abolition of tribute in Vigan."],
            ["Gabriela Silang's Revolt", "The assassination of her husband, Diego Silang."],
            ["Palaris Revolt", "Hatred of excessive tribute and abusive officials in Binalatongan."],
            ["Basi Revolt", "Prohibition of home-made wine in Piddig, Ilocos Norte, due to the wine monopoly."],
            ["Tamblot's Revolt", "Tamblot's call for the people of Bohol to return to their old faith."],
            ["Bankaw's Revolt", "Bankaw's encouragement of the people of Limasawa to defend their traditional religion."],
            ["Tapar's Revolt", "The killing of followers of Tapar's religious cult by the friar of Oton, Panay."],
            ["Dagohoy's Revolt", "The killing of Fr. Giuseppe Lamberti, triggered by the Church's refusal to give Christian burial to Francisco Dagohoy's brother."],
            ["Revolt of Hermano Pule", "Persecution of the followers of the Cofradia de San Jose, founded by Apolinario de la Cruz."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "Growth of Filipino Nationalism",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Nationalism is the aim of gaining and maintaining sovereignty (self-governance) over one's homeland."
      },
      {
        type: "bullet_list",
        heading: "Factors in the Growth of Nationalism",
        items: [
          "Spread of Liberalism: as Spain gradually opened the Philippines to international commerce in the late 18th and early 19th centuries, liberal ideas from Europe filtered in.",
          "Racial Prejudice: Spaniards commonly regarded Filipino natives as an \"inferior race,\" calling them indios.",
          "Secularization Controversy.",
          "Cavite Mutiny of 1872: a rebellion against Gov. Gen. Rafael Izquierdo led by Sergeant Lamadrid."
        ]
      },
      {
        type: "callout",
        heading: "Execution of GomBurZa",
        content: "On February 17, 1872, the priests Gomez, Burgos, and Zamora (GomBurZa) were executed on the order of Gov. Gen. Izquierdo, sparking a campaign for reforms and the formation of a propaganda movement calling for the Philippines' assimilation into Spain."
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "The Propaganda Movement",
    pdfPageRef: "PDF Page 6",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Propaganda Movement",
        content: "A peaceful campaign for reforms aimed at changing the political and social order in the Philippines under Spanish rule."
      },
      {
        type: "bullet_list",
        heading: "Aims of the Propaganda Movement",
        items: [
          "Make the Philippines a province of Spain.",
          "Achieve equality between Filipinos and Spaniards.",
          "Gain representation in the Spanish Cortes."
        ]
      },
      {
        type: "text",
        content: "The Triumvirate of Propaganda consisted of Jose Rizal, Graciano Lopez Jaena, and Marcelo H. del Pilar. La Solidaridad, edited by Marcelo H. del Pilar, served as the movement's organ, alongside the nationalistic newspaper Diariong Tagalog, which he also edited."
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "Propagandists and Their Pen Names",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Propagandists and Their Pen Names",
        tableData: {
          headers: ["Propagandist", "Pen Name(s) / Role"],
          rows: [
            ["Graciano Lopez Jaena", "Publisher of La Solidaridad; pen names \"Fray Botod\" and \"Diego Laura.\""],
            ["Marcelo H. del Pilar", "Editor and co-publisher of La Solidaridad; wrote as \"Plaridel,\" \"Dolores Manapat,\" \"Piping Dilat,\" and \"Pupdoh.\""],
            ["Antonio Luna", "Wrote for La Solidaridad as \"Taga-ilog.\""],
            ["Jose Maria Panganiban", "Wrote for La Solidaridad as \"Jomapa.\""],
            ["Jose Rizal", "Wrote as \"Dimasalang\" and \"Laun-Laan.\""],
            ["Apolinario Mabini", "Wrote as \"Paralitiko.\""],
            ["Andres Bonifacio", "Wrote as \"Agapito Bagumbahay.\""],
            ["Mariano Ponce", "Wrote as \"Tikbalang,\" \"Naning,\" and \"Kalipulako.\""],
            ["Juan Luna", "Wrote as \"Potacio.\""],
            ["Jose Dela Cruz", "Wrote as \"Husengsisiw.\""],
            ["Pio Valenzuela", "Wrote as \"Madlang-awa.\""],
            ["Melchora Aquino", "Known as \"Tandang Sora.\""],
            ["Emilio Jacinto", "Wrote as \"Dimas-ilaw.\""]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "La Liga Filipina",
    pdfPageRef: "PDF Page 6",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "La Liga Filipina",
        content: "A socio-civic society of Filipino patriots organized by Rizal upon his return to Manila from Europe."
      },
      {
        type: "bullet_list",
        heading: "Aims of La Liga Filipina",
        items: [
          "Unite the whole archipelago into one vigorous and homogenous organization.",
          "Provide mutual protection in every want and necessity.",
          "Defend against all violence and injustice.",
          "Encourage instruction, agriculture, and commerce.",
          "Study the application of reforms."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "The Katipunan (KKK)",
    pdfPageRef: "PDF Page 6-7",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Kataastaasang Kagalanggalangang Katipunan ng mga Anak ng Bayan",
        content: "A secret society founded on July 7, 1892 by Andres Bonifacio and a handful of trusted friends who met in the house of Deodato Arellano, aiming for revolution and armed struggle — with political, economic, and civic aims. Its newspaper, Kalayaan, was edited by Emilio Jacinto."
      },
      {
        type: "bullet_list",
        heading: "First Katipunan Supreme Council Officers",
        items: [
          "Deodato Arellano — President (later replaced by Roman Basa in 1893; Bonifacio then assumed the presidency himself).",
          "Ladislao Diwa — Fiscal.",
          "Valentin Diaz — Treasurer.",
          "Teodoro Plata — Secretary."
        ]
      },
      {
        type: "bullet_list",
        heading: "Key Katipunan Figures",
        items: [
          "Andres Bonifacio — Founder of the Katipunan, \"Supremo,\" the \"Great Plebeian.\"",
          "Apolinario Mabini — the \"Sublime Paralytic,\" Brain of the Revolution, author of El Verdadero Decalogo.",
          "Emilio Jacinto — Brain of the Katipunan, author of the Kartilya.",
          "Gregoria de Jesus — Bonifacio's wife, called the Lakambini of the Katipunan."
        ]
      },
      {
        type: "table",
        heading: "Katipunan Membership Grades",
        tableData: {
          headers: ["Grade", "Password"],
          rows: [
            ["First Grade (Katipon)", "Anak ng Bayan"],
            ["Second Grade (Kawal)", "GomBurZa"],
            ["Third Grade (Bayani)", "Rizal"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "Timeline of Key Events (1892-1897)",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Important Events Leading to the Revolution",
        tableData: {
          headers: ["Date", "Event"],
          rows: [
            ["July 3, 1892", "La Liga Filipina founded by Rizal as a mutual aid and self-help society; motto: Unus Instar Omnium (\"one like all\")."],
            ["July 7, 1892", "Foundation of the Katipunan (KKK), aiming to secure Philippine independence and freedom by force."],
            ["August 19, 1896", "Spanish authorities discover the Katipunan after Teodoro Patiño exposes it to Fr. Mariano Gil."],
            ["August 23, 1896", "The Cry of Pugad Lawin: Katipuneros tear up their cedulas in the yard of Juan Ramos, officially starting the revolution."],
            ["August 30, 1896", "Gov. Gen. Ramon Blanco places Manila and several provinces under martial law."],
            ["December 30, 1896", "Execution of Jose Rizal."],
            ["March 22, 1897", "Tejeros Convention: the Magdalo (Baldomero Aguinaldo) and Magdiwang (Mariano Alvarez) factions convene to settle differences and establish a new government."],
            ["May 10, 1897", "Execution of the Bonifacio brothers (Andres and Procopio) for treason and sedition."],
            ["November 1, 1897", "Establishment of the Biak-na-Bato Republic; its constitution, prepared by Felix Ferrer and Isabelo Artacho, closely followed Cuba's Jimaguayu Constitution."],
            ["December 14, 1897", "Pact of Biak-na-Bato: a ceasefire between Gov. Gen. Fernando Primo de Rivera and revolutionary leader Emilio Aguinaldo."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "The Coming of the Americans",
    pdfPageRef: "PDF Page 7-8",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "The Coming of the Americans (1898)",
        tableData: {
          headers: ["Date", "Event"],
          rows: [
            ["April 25, 1898", "The US declares war on Spain following the sinking of the USS Maine in Havana harbor (Feb. 15, 1898)."],
            ["May 1, 1898", "George Dewey leads a US naval squadron into Manila Bay, destroying the anchored Spanish fleet; Manila is occupied by US troops by August."],
            ["May 19, 1898", "Aguinaldo arrives in the Philippines and resumes the fight against Spain."],
            ["May 24, 1898", "Aguinaldo declares a dictatorial government."],
            ["June 12, 1898", "Aguinaldo proclaims Philippine independence in Kawit, Cavite; the flag made by Marcela Agoncillo is hoisted and the Marcha Nacional Filipina, composed by Julian Felipe, is played. The Act of the Declaration of Independence, prepared by Ambrosio Rianzares Bautista, is read."],
            ["June 23, 1898", "Aguinaldo changes the government from dictatorial to revolutionary."],
            ["August 13-14, 1898", "Mock Battle of Manila; Spaniards surrender to the Americans, who establish a military government."],
            ["December 10, 1898", "Treaty of Paris ends the Spanish-American War: Cuba gains independence, Puerto Rico and Guam are ceded to the US, and the US purchases the Philippines from Spain for $20 million."],
            ["December 21, 1898", "President McKinley proclaims the policy of \"Benevolent Assimilation,\" stressing that Filipinos should be trained for self-government."]
          ]
        }
      },
      {
        type: "text",
        content: "Felipe Agoncillo was tasked with persuading the US government to recognize the Malolos Republic during the Paris peace talks."
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "The First Philippine Republic (Malolos Republic)",
    pdfPageRef: "PDF Page 8",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Founding of the Malolos Republic",
        tableData: {
          headers: ["Date", "Event"],
          rows: [
            ["September 15, 1898", "The Malolos Congress convenes in Barasoain Church; Pedro Paterno is elected its president."],
            ["January 21, 1899", "The Malolos Constitution, drafted by a committee headed by Felipe Calderon, is proclaimed, establishing the First Philippine Republic."],
            ["January 23, 1899", "Inauguration of the First Philippine Republic (Malolos Republic) at Barasoain Church, with Aguinaldo as president."]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Notes on the Malolos Republic",
        items: [
          "It was the first republic in Asia.",
          "El Heraldo de la Revolucion served as its official newspaper."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 2,
    dayTitle: "Day 2: The Birth of Filipino Nationalism & American Colonization",
    topicTitle: "The Philippine-American War & Continued Resistance",
    pdfPageRef: "PDF Page 8-9",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "On February 4, 1899, American soldier Private William Grayson shot a Filipino soldier at the San Juan bridge in Manila, marking the start of the Philippine-American War, which lasted three years and cost over 4,200 American and over 20,000 Filipino combatant lives."
      },
      {
        type: "callout",
        heading: "The Capture of Aguinaldo",
        content: "On March 23, 1901, General Frederick Funston, acting on the order of General Arthur MacArthur, captured Aguinaldo in Palanan, Isabela, with the help of the Macabebe Scouts. On April 1, 1901, Aguinaldo swore allegiance to the US at Malacañan Palace, and on April 19 issued a Proclamation of Formal Surrender."
      },
      {
        type: "bullet_list",
        heading: "Continued Filipino Resistance",
        items: [
          "General Miguel Malvar led the Filipino war effort after Aguinaldo's capture, launching offensives against American-held towns in the Batangas region.",
          "General Simeon Ola was the last revolutionary general to surrender to the Americans.",
          "Macario Sakay established the Republika ng Katagalugan.",
          "On July 4, 1902, President Theodore Roosevelt officially declared the Philippine-American War over following the surrender of Malvar, Sakay, and other Filipino leaders."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 3: AMERICAN COLONIAL POLICY, JAPANESE
  // OCCUPATION & EARLY PHILIPPINE PRESIDENTS
  // ==========================================
  {
    pageNumber: 21,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "American Military Government (1898-1901)",
    pdfPageRef: "PDF Page 9",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Military Government",
        content: "Under this setup, the Philippines was governed directly by the President of the United States, with powers exercised locally by the American military governor."
      },
      {
        type: "bullet_list",
        heading: "Military Governors of the Philippines",
        items: ["Wesley Merritt.", "Elwell Otis.", "Arthur MacArthur."]
      },
      {
        type: "table",
        heading: "Early Philippine Commissions",
        tableData: {
          headers: ["Commission", "Head", "Purpose"],
          rows: [
            ["First Philippine Commission (Schurman Commission)", "Dr. Jacob Schurman", "Investigate conditions in the islands and make recommendations."],
            ["Second Philippine Commission (Taft Commission)", "William Howard Taft", "Establish a civil government and train Filipinos in self-government."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Civil Government & the Cooper Act",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "William Howard Taft became the first civil governor-general, adopting the policy of \"The Philippines for the Filipinos\"; Frank Murphy was the last civil governor-general."
      },
      {
        type: "callout",
        heading: "Philippine Bill / Organic Act of 1902 (Cooper Act)",
        content: "Extended the US Bill of Rights to Filipinos and guaranteed the establishment of an elective Philippine Assembly. It also provided for two Filipino resident commissioners (Pablo Ocampo and Benito Legarda) to represent the country in the US Congress, without voting rights."
      },
      {
        type: "table",
        heading: "Legislative Structure Under the Cooper Act",
        tableData: {
          headers: ["House", "Present-Day Equivalent", "Cooper Act Body"],
          rows: [
            ["Upper House", "Senate", "Philippine Commission (Americans)"],
            ["Lower House", "House of Representatives", "Philippine Assembly (Filipinos)"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Suppressed Nationalism & the Philippine Assembly",
    pdfPageRef: "PDF Page 10",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Laws of the Period of Suppressed Nationalism",
        items: [
          "Flag Law: prohibited the public display of the Filipino flag and other symbols of resistance against the US.",
          "Sedition Law: imposed the death penalty or long imprisonment on anyone advocating separation or independence from the US, even by peaceful means.",
          "Brigandage Act: punished members of armed bands, or anyone involved in banditry, with death or at least 20 years imprisonment."
        ]
      },
      {
        type: "text",
        content: "The Federal Party was the first political party in the Philippines."
      },
      {
        type: "callout",
        heading: "The Philippine Assembly",
        content: "The lower house of the Philippine Legislature (the Philippine Commission was the upper house), formally inaugurated on October 16, 1907, with Sergio Osmeña elected speaker and Manuel L. Quezon serving as Majority Floor Leader. Its first legislation, the Gabaldon Act, allocated one million pesos to establish barrio schools nationwide."
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Filipinization & the Jones Law",
    pdfPageRef: "PDF Page 10",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Filipinization was the gradual replacement of Americans by Filipinos in government service, expressing US intentions to train Filipinos for self-government. By 1901, Cayetano Arellano was appointed Chief Justice of the Supreme Court; Filipinization was fully implemented during the term of Gov. Gen. Francis Burton Harrison."
      },
      {
        type: "callout",
        heading: "Jones Law (Philippine Autonomy Act)",
        content: "Sponsored by William Atkinson Jones. Its preamble declared that independence would be granted once a stable government was established, and it created a bicameral Philippine Legislature with a Senate (upper house) and House of Representatives (lower house), both composed of Filipinos."
      },
      {
        type: "table",
        heading: "Legislative Structure Under the Jones Law",
        tableData: {
          headers: ["House", "Cooper Act", "Jones Law"],
          rows: [
            ["Upper House", "Philippine Commission (Americans)", "Senate (Filipinos)"],
            ["Lower House", "Philippine Assembly (Filipinos)", "House of Representatives (Filipinos)"]
          ]
        }
      },
      {
        type: "text",
        content: "The Cabinet Crisis of 1923 occurred when Governor Wood governed without the cooperation of the legislature."
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Education & the Road to Independence",
    pdfPageRef: "PDF Page 10-11",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Educational Developments Under the Americans",
        items: [
          "Act No. 74 (Taft Commission) established the public school system in the Philippines.",
          "English was made a compulsory subject; trained teachers were recruited from the US, and compulsory religious instruction was abolished.",
          "Thomasites: the first American teachers, arriving in Manila on August 23, 1901 aboard the ship Thomas.",
          "Pensionados: promising Filipinos given the opportunity to pursue higher education in the United States."
        ]
      },
      {
        type: "bullet_list",
        heading: "Independence Missions",
        items: [
          "OSROX Mission: led by Osmeña and Roxas to secure an independence law from the US Congress.",
          "Hare-Hawes-Cutting Act: granted Philippine independence after 12 years, while reserving US military and naval bases.",
          "Tydings-McDuffie Law (Independence Law): provided a 10-year transition period under a Commonwealth government before full independence on July 4, 1946."
        ]
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "The 1935 Constitution & the Commonwealth",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "The 1935 Constitution",
        content: "Ratified on May 14, 1935; delegate Gregorio Perfecto signed it in his own blood. The first election under this constitution was held on September 17, 1935, electing Manuel Quezon as President and Sergio Osmeña as Vice-President."
      },
      {
        type: "bullet_list",
        heading: "Commonwealth Period Under Quezon",
        items: [
          "Established the Court of Industrial Relations to resolve labor disputes, along with the Eight-Hour Labor Act and the Minimum Wage Law.",
          "Anti-Dummy Law: punished Filipinos who allowed themselves to be used as fronts by alien businessmen and investors.",
          "Philippine Immigration Law: limited the number of immigrants permitted annually.",
          "Sakdalism: a popular movement founded by Benigno Ramos, using its weekly tabloid to denounce the ruling oligarchy.",
          "Union Obrera Democratica: the first labor union in the Philippines, founded by Isabelo de los Reyes."
        ]
      }
    ]
  },
  {
    pageNumber: 27,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "The Japanese Occupation Begins",
    pdfPageRef: "PDF Page 11-12",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Outbreak of War in the Pacific",
        tableData: {
          headers: ["Date", "Event"],
          rows: [
            ["December 7, 1941", "Japan attacks the American naval base at Pearl Harbor, Hawaii."],
            ["December 8, 1941", "The US declares war on Japan."],
            ["December 26, 1941", "MacArthur declares Manila an open city to protect civilians."],
            ["March 11, 1942", "MacArthur withdraws to Australia, vowing \"I shall return.\""],
            ["April 9, 1942", "General Edward King, commander of Bataan forces, surrenders to the Japanese."],
            ["April 10, 1942", "The Bataan Death March begins in Mariveles and Cabcaben; roughly 76,000 captured soldiers are forced to march over 100 kilometers, with an estimated 10,000 dying of thirst, hunger, and exhaustion."],
            ["May 6, 1942", "General Wainwright, commander of Corregidor forces, surrenders to the Japanese."]
          ]
        }
      },
      {
        type: "text",
        content: "USAFFE (United States Armed Forces in the Far East) combined American and Filipino soldiers under General Douglas MacArthur; General Masaharu Homma commanded the Japanese Imperial Forces in the Philippines."
      }
    ]
  },
  {
    pageNumber: 28,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Government During the Japanese Occupation",
    pdfPageRef: "PDF Page 11-12",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "The Japanese Military Administration",
        content: "Imposed martial law in the Philippines. The Kempeitai served as the Japanese military police."
      },
      {
        type: "text",
        content: "KALIBAPI (Kapisanan sa Paglilingkod sa Bagong Pilipinas) was the chief organ of Japanese propaganda, aimed at rapid reconstruction and coordinating associations that promoted hard work, faith, self-reliance, loyalty, bravery, discipline, and self-sacrifice."
      },
      {
        type: "callout",
        heading: "The Japanese-Sponsored Second Philippine Republic",
        content: "Inaugurated October 14, 1943 with Jose P. Laurel as president; it abolished the Philippine Executive Commission and vested legislative power in the National Assembly. Liwayway was the only Tagalog weekly magazine allowed to continue publication."
      }
    ]
  },
  {
    pageNumber: 29,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Resistance & Liberation",
    pdfPageRef: "PDF Page 12",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Hukbong Bayan Laban sa Hapon (Hukbalahap)",
        content: "A communist and socialist guerrilla unit founded March 29, 1942 and led by Luis Taruc and Castro Alejandrino, growing to roughly 30,000 fighters."
      },
      {
        type: "table",
        heading: "The Road to Liberation",
        tableData: {
          headers: ["Date", "Event"],
          rows: [
            ["June 19, 1944", "The Battle of the Philippine Sea begins as American forces advance across the Pacific."],
            ["October 20, 1944", "General MacArthur and allied forces land at Palo Beach, Leyte."],
            ["—", "Battle of Leyte Gulf: the greatest naval battle in history."],
            ["July 4, 1945", "MacArthur proclaims the Philippines liberated from Japan."],
            ["August 6, 1945", "Bombing of Hiroshima."],
            ["August 9, 1945", "Bombing of Nagasaki."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 30,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "List of Philippine Presidents",
    pdfPageRef: "PDF Page 12",
    readTime: "2 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Presidents of the Philippines",
        items: [
          "Emilio Aguinaldo",
          "Manuel L. Quezon",
          "Jose P. Laurel",
          "Sergio Osmeña Sr.",
          "Manuel Roxas",
          "Elpidio Quirino",
          "Ramon Magsaysay",
          "Carlos P. Garcia",
          "Diosdado Macapagal",
          "Ferdinand Marcos",
          "Corazon C. Aquino",
          "Fidel V. Ramos",
          "Joseph Estrada",
          "Gloria Macapagal Arroyo",
          "Benigno Aquino III",
          "Rodrigo Duterte",
          "Bongbong Marcos"
        ]
      }
    ]
  },
  {
    pageNumber: 31,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Presidents: Aguinaldo, Quezon & Laurel",
    pdfPageRef: "PDF Page 12-13",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. Emilio Aguinaldo (1899-1901)",
        items: [
          "Began as a member of the Magdalo chapter of the Katipunan, later elected president of the revolutionary government at the Tejeros Convention and the Biak-na-Bato Republic.",
          "The youngest president, taking office at age 28."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Manuel L. Quezon (1935-1944)",
        items: [
          "First Filipino president of the Commonwealth under American rule.",
          "Known as the \"Father of the National Language.\"",
          "Initiated women's suffrage in the Philippines.",
          "First senate president elected president of the Philippines.",
          "Died of tuberculosis in New York."
        ]
      },
      {
        type: "bullet_list",
        heading: "3. Jose P. Laurel (1943-1945)",
        items: [
          "President of the Second Republic, known as the \"Puppet President.\"",
          "Established the Lyceum of the Philippines.",
          "Served as government caretaker during World War II."
        ]
      }
    ]
  },
  {
    pageNumber: 32,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Presidents: Osmeña & Roxas",
    pdfPageRef: "PDF Page 13",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "4. Sergio Osmeña Sr. (1944-1946)",
        items: [
          "Second Philippine president during the Commonwealth.",
          "First Filipino national leader under American rule to become Speaker of the Philippine Assembly.",
          "Served as Vice-President during Quezon's term."
        ]
      },
      {
        type: "bullet_list",
        heading: "5. Manuel Roxas (1946-1948)",
        items: [
          "Last President of the Commonwealth and first president of the Third Republic; led post-war reconstruction and rehabilitation.",
          "Signed the Treaty of General Relations, under which the US withdrew all rights of supervision, control, or sovereignty over the Philippines.",
          "Signed the Parity Rights agreement and the Bell Trade Act, continuing free trade with the US from 1946-1954.",
          "Signed the Philippine Rehabilitation Act (Tydings Rehabilitation Act), creating the Philippine War Damage Commission.",
          "The Military Base Agreement gave the US free use of 23 base sites for 99 years (later shortened to 25 years in 1959)."
        ]
      }
    ]
  },
  {
    pageNumber: 33,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Presidents: Quirino & Magsaysay",
    pdfPageRef: "PDF Page 13",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "6. Elpidio Quirino (1948-1953)",
        items: [
          "First president from the Ilocos Region (Ilocos Sur).",
          "Focused on economic reconstruction and restoring public trust in government.",
          "Reduced the Huk problem with help from Defense Secretary Ramon Magsaysay.",
          "Established LASEDECO for landless farmers, the Social Security Commission, PACSA, and the ACCFA, plus rural banks for barrio credit.",
          "Known as the \"Father of Industrialization.\""
        ]
      },
      {
        type: "bullet_list",
        heading: "7. Ramon Magsaysay (1953-1957)",
        items: [
          "Known as the \"Man of the Masses.\"",
          "Established the NARRA to continue farmer resettlement programs; negotiated the surrender of Huk leader Luis Taruc.",
          "First president to wear the Barong Tagalog at his inauguration and to open Malacañang to the public.",
          "Died in a plane crash at Mt. Manunggal, Cebu on March 17, 1957; his term is remembered as the \"Golden Years\" for its lack of corruption."
        ]
      }
    ]
  },
  {
    pageNumber: 34,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "Presidents: Garcia & Macapagal",
    pdfPageRef: "PDF Page 13-14",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "8. Carlos P. Garcia (1957-1961)",
        items: [
          "Known for his \"Filipino First\" policy, giving Filipinos priority in land, capital, business, trade, and industry, and his Austerity Program of reduced spending and imports.",
          "Among the founders of the Association for Southeast Asia, precursor of ASEAN.",
          "Known as the \"Prince of Visayan Poets\" and \"Bard from Bohol.\"",
          "First president buried at the Libingan ng mga Bayani."
        ]
      },
      {
        type: "bullet_list",
        heading: "9. Diosdado Macapagal (1961-1965)",
        items: [
          "Known as the \"Poor Boy from Lubao.\"",
          "Moved Independence Day from July 4 to June 12.",
          "Signed RA 3844, the Agricultural Land Reform Code, replacing share tenancy with agricultural leasehold.",
          "Established the Land Bank of the Philippines and formed MAPHILINDO, a confederation of Malaysia, the Philippines, and Indonesia.",
          "His term is associated with the Harry Stonehill scandal."
        ]
      }
    ]
  },
  {
    pageNumber: 35,
    dayNumber: 3,
    dayTitle: "Day 3: American Colonial Policy, Japanese Occupation & Early Philippine Presidents",
    topicTitle: "President: Ferdinand Marcos Sr.",
    pdfPageRef: "PDF Page 14",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "10. Ferdinand Marcos (1965-1986)",
        items: [
          "The only president of the Fourth Philippine Republic and the only one reelected to a second term, ruling for 20 years.",
          "First president from Ilocos Norte and the first to take his oath in a native language.",
          "Oversaw the shift from the 1935 to the 1973 Constitution, establishing a parliamentary government.",
          "Declared Martial Law in 1972 (Proclamation No. 1081) and abolished Congress; his later years are remembered as a period of dictatorship.",
          "The assassination of Benigno Aquino Jr. in 1983 sparked protests that culminated in the EDSA Revolution, ending his 20-year rule."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 4: PRESIDENTS (CORY ONWARD), ECONOMICS,
  // GOVERNMENT, SOCIOLOGY & GEOGRAPHY
  // ==========================================
  {
    pageNumber: 36,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "President: Corazon C. Aquino",
    pdfPageRef: "PDF Page 14",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "11. Corazon C. Aquino (1986-1992)",
        items: [
          "First woman president of the Philippines and of Asia; known as the \"Mother/Icon of Democracy.\"",
          "Restored democracy by holding elections, framing and ratifying the 1987 Constitution, and restoring press and speech freedoms.",
          "Released political prisoners and worked for economic recovery.",
          "Created the Presidential Commission on Good Government (PCGG) to recover ill-gotten wealth.",
          "Signed the Family Code of 1987 and the 1991 Local Government Code (Aquilino Pimentel Jr. is regarded as the Father of the Local Government Code)."
        ]
      }
    ]
  },
  {
    pageNumber: 37,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Presidents: Ramos & Estrada",
    pdfPageRef: "PDF Page 14-15",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "12. Fidel V. Ramos (1992-1997)",
        items: [
          "Known for \"Philippines 2000,\" aiming for economic development, and for restoring economic growth and stability.",
          "The Philippine Stock Exchange became an international favorite during his term.",
          "Launched the Social Reform Agenda against poverty and signed a peace agreement with the Moro National Liberation Front."
        ]
      },
      {
        type: "bullet_list",
        heading: "13. Joseph Estrada (1998-2001)",
        items: [
          "Known for his \"Erap Para sa Mahirap\" program, focused on the poor, with flagship program \"Jeep ni Erap.\"",
          "Improved tax collection and worked to demilitarize government.",
          "Resigned before impeachment when senators voted not to open an envelope of evidence against him; overthrown in the EDSA II People Power Revolution in 2001 over plunder charges."
        ]
      }
    ]
  },
  {
    pageNumber: 38,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Presidents: Arroyo & Aquino III",
    pdfPageRef: "PDF Page 15",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "14. Gloria Macapagal Arroyo (2001-2010)",
        items: [
          "Second female president; oversaw road and infrastructure improvements and higher economic growth.",
          "The peso became Asia's best-performing currency in 2007; implemented the eVAT law.",
          "Flagship program: \"Strong Republic.\"",
          "Assumed the presidency after Estrada's resignation and remained in power for 10 years despite several coup attempts and controversies such as the Hello Garci and fertilizer scandals."
        ]
      },
      {
        type: "bullet_list",
        heading: "15. Benigno Simeon C. Aquino III (2010-2016)",
        items: [
          "A fourth-generation politician who won the first fully automated national election.",
          "Created the \"No Wang-Wang\" (no street siren) policy and initiated the K-12 education program.",
          "Flagship program: \"Daang Matuwid.\""
        ]
      }
    ]
  },
  {
    pageNumber: 39,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Presidents: Duterte & Marcos Jr.",
    pdfPageRef: "PDF Page 15",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "16. Rodrigo Roa Duterte",
        items: [
          "First Mindanaoan to hold the presidency, and at the time, the oldest person to assume office.",
          "Longest-serving mayor in the country, serving 7 terms totaling 22 years.",
          "Known for his War on Drugs; flagship slogan: \"Change is Coming.\"",
          "Declared Martial Law in Mindanao (Proclamation No. 216) during the five-month Battle of Marawi, which began May 23, 2017.",
          "Signed RA 10963, the Tax Reform for Acceleration and Inclusion (TRAIN) law."
        ]
      },
      {
        type: "bullet_list",
        heading: "17. Bongbong Marcos",
        items: [
          "17th President of the Philippines; flagship program: \"Unity.\"",
          "Programs include the Kadiwa Program, Agrarian Emancipation Act, Build Better More Program, Food Stamp Program (FSP), Balik-Scientist Program, eGov PH app, MATATAG Agenda, Mega-Bridge Program, Luzon Spine Expressway Network, and Maharlika Investment Fund."
        ]
      }
    ]
  },
  {
    pageNumber: 40,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Famous Lines by Filipino Presidents",
    pdfPageRef: "PDF Page 15-16",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Famous Lines by Filipino Presidents",
        tableData: {
          headers: ["President", "Famous Line", "Meaning / Context"],
          rows: [
            ["Emilio Aguinaldo", "\"Long live Philippine Independence!\"", "Declared upon raising the Philippine flag during the proclamation of independence on June 12, 1898."],
            ["Manuel L. Quezon", "\"I would rather have a government run like hell by Filipinos than a government run like heaven by Americans.\"", "An expression of his aspiration for Philippine independence."],
            ["Jose P. Laurel", "\"The liberty of the individual must be thus far limited; he must not make himself a nuisance to other people.\"", "Said during his term as President of the Japanese-occupied Philippines."],
            ["Sergio Osmeña", "\"Let us not allow that greed and selfishness creep into our hearts.\"", "Emphasizing the need for national unity."],
            ["Manuel Roxas", "\"We are the trustees of the Filipino people and of their welfare and happiness.\"", "Reflecting on the responsibilities of governance."],
            ["Elpidio Quirino", "\"I have no hate for them on earth. I have forgiven them and I pray God to forgive them also.\"", "Referring to the Japanese soldiers who executed his wife and children during WWII."],
            ["Ramon Magsaysay", "\"Those who have less in life should have more in law.\"", "A reflection of his social justice agenda."],
            ["Carlos P. Garcia", "\"Our first line of defense is the heart, mind, and spirit of the individual Filipino.\"", "Encapsulating his \"Filipino First\" policy."],
            ["Diosdado Macapagal", "\"I have sat at the sumptuous tables of the power elite, but I have not run away with the silverware.\"", "Speaking about integrity in leadership."],
            ["Ferdinand Marcos", "\"This nation can be great again.\"", "From his inaugural speech; later seen as ironic given the Martial Law period."],
            ["Corazon Aquino", "\"Reconciliation should be accompanied by justice, otherwise it will not last.\"", "Speaks to her democratic ideals and desire for a just society."],
            ["Fidel V. Ramos", "\"I believe that through sheer hard work and a little bit of luck, we can overcome almost any odds.\"", "Highlighting his focus on national development."],
            ["Joseph Estrada", "\"Erap para sa mahirap\" (Erap for the poor)", "His campaign slogan, declaring his focus on social welfare."],
            ["Gloria Macapagal Arroyo", "\"The strong republic is a job-generating republic.\"", "Emphasizing her economic agenda."],
            ["Benigno Aquino III", "\"Kung walang corrupt, walang mahirap.\" (If no one is corrupt, no one will be poor)", "His iconic line from his campaigns and presidency, focusing on anti-corruption."],
            ["Rodrigo Duterte", "\"Change is coming.\"", "His campaign promise aimed at overhauling various systems in the country."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 41,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Economics: Foundations",
    pdfPageRef: "PDF Page 17",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "What is Economics?",
        content: "From the Greek Oikonomia, meaning \"household management.\" Economics is a social science concerned with how individuals and society use scarce resources to achieve maximum satisfaction of human material wants; it studies the production, distribution, and consumption of goods and services."
      },
      {
        type: "text",
        heading: "The Malthusian Theory",
        content: "Holds that population increases geometrically while food supply does not increase at the same rate."
      },
      {
        type: "comparison",
        heading: "Microeconomics vs. Macroeconomics",
        items: [
          "Microeconomics: examines the functioning of individual industries and the behavior of individual decision-making units.",
          "Macroeconomics: examines the economic behavior of aggregates, looking at the economy as a whole."
        ]
      },
      {
        type: "table",
        heading: "Economic Systems",
        tableData: {
          headers: ["System", "Description"],
          rows: [
            ["Capitalist / Market Economy", "Government has no control."],
            ["Command / Planned Economy", "Government has full control."],
            ["Mixed Economy", "Government has partial control."],
            ["Traditional Economy", "Governed by communal or old customary ways."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 42,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Factors of Production, Trade-Offs & Market Laws",
    pdfPageRef: "PDF Page 17-18",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Factors of Production (Mnemonic: CELL)",
        items: [
          "Capital: the stock of goods made by people to aid in producing goods and services.",
          "Entrepreneur: the organizer responsible for arranging how production should take place.",
          "Land: all resources found on land and in the sea.",
          "Labor: any mental or manual work performed for the purpose of receiving rewards."
        ]
      },
      {
        type: "bullet_list",
        heading: "Trade-Off and Opportunity Cost",
        items: [
          "Trade-off: the option given up to obtain what is wanted; the second-best alternative.",
          "Opportunity Cost: the value of the second-best alternative given up when making a choice."
        ]
      },
      {
        type: "bullet_list",
        heading: "The Market System",
        items: [
          "Law of Demand: as price increases (all else constant), quantity demanded decreases — price and demand are inversely proportional.",
          "Law of Supply: as price increases (all else constant), quantity supplied also increases — price and supply are proportionally, positively related."
        ]
      }
    ]
  },
  {
    pageNumber: 43,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Taxation",
    pdfPageRef: "PDF Page 18",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Classification of the Tax System",
        items: [
          "Progressive Income Tax: the higher the income, the higher the tax rate.",
          "Proportional Tax: the tax rate stays constant regardless of income level.",
          "Regressive Tax: the higher the income, the lower the tax rate."
        ]
      },
      {
        type: "bullet_list",
        heading: "Types of Taxes",
        items: [
          "Direct Taxes: levied on the income and wealth of households and businesses to raise revenue and serve as fiscal policy instruments (e.g. personal and corporate income tax).",
          "Indirect Taxes: levied on goods and services rather than people (e.g. sales tax, import tax, VAT/EVAT)."
        ]
      }
    ]
  },
  {
    pageNumber: 44,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Land Reform",
    pdfPageRef: "PDF Page 18",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Land Reform",
        content: "A Philippine state policy that promotes the welfare of landless farmers and farmworkers and advances social justice and equity in rural areas. CARP was established under the Comprehensive Agrarian Reform Law of 1988 (CARL), enacted by the 8th Congress and signed by President Aquino on June 10, 1988, aiming for equitable land ownership and empowered agrarian reform beneficiaries."
      },
      {
        type: "bullet_list",
        heading: "Retention Limits",
        items: [
          "Five hectares for landowners.",
          "Three hectares awarded to each child of the landowner, provided the child is at least 15 years old and is actually tilling the soil or directly managing the farm."
        ]
      }
    ]
  },
  {
    pageNumber: 45,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Philippine Government: Foundations",
    pdfPageRef: "PDF Page 18-19",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Political Science is the study of the polis (Greek for \"city\"), a specialized study of the state, its government, and its politics."
      },
      {
        type: "numbered_list",
        heading: "Elements of a State (Mnemonic: PTGS)",
        items: [
          "People: the inhabitants or population comprising its citizens.",
          "Territory: the definite geographic area occupied by the people.",
          "Government: the agency through which the will of the people is formulated, expressed, and realized.",
          "Sovereignty: the state's supreme power to rule over its citizens within its territory, free from foreign control."
        ]
      },
      {
        type: "text",
        content: "The Philippines is a republic (indirect democracy) with a presidential form of government, dividing power among the executive, legislative, and judicial branches to ensure balance and prevent abuse."
      },
      {
        type: "table",
        heading: "Branches of Government",
        tableData: {
          headers: ["Branch", "Primary Powers", "Members", "Example of Check and Balance"],
          rows: [
            ["Executive", "Enforces laws, conducts foreign policy, commander-in-chief.", "President and Vice President, with the Cabinet.", "Can veto bills passed by Congress."],
            ["Legislative", "Makes laws, approves the budget, declares war, approves Martial Law.", "Bicameral: Senate (24 Senators) and House of Representatives (approx. 300 members).", "Can impeach the President and Justices of the Supreme Court; confirms judicial appointments."],
            ["Judicial", "Interprets laws, settles legal disputes.", "Chief Justice and 14 Associate Justices of the Supreme Court, plus lower courts.", "Can declare acts unconstitutional; reviews Executive and Legislative actions."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 46,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Check and Balance: Practice Questions",
    pdfPageRef: "PDF Page 19",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "Under check and balance, each branch can restrain the powers of the others — Congress can impeach the President or Supreme Court Justices, the President can veto congressional bills, and the judiciary can declare a law or executive act unconstitutional."
      },
      {
        type: "table",
        heading: "Check and Balance: Practice Questions",
        tableData: {
          headers: ["Question", "Answer"],
          rows: [
            ["Which is an example of a Legislative check on the Judiciary?", "Impeachment of the Chief Justice of the Supreme Court."],
            ["Which is a check on the Executive by the Judiciary?", "Declaring an act of the President unconstitutional."],
            ["Which is an example of a Legislative check on the Executive?", "Impeachment of the President."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 47,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Fundamental Powers of the State & Forms of Government",
    pdfPageRef: "PDF Page 19",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Fundamental Powers of the State",
        items: [
          "Police Power: the power to enact laws or regulations for the promotion of public health, morals, safety, and general welfare.",
          "Eminent Domain (Expropriation): the right to take private property for public use upon payment of just compensation.",
          "Power of Taxation: the power to impose proportional charges on persons, property, or rights to support the government."
        ]
      },
      {
        type: "table",
        heading: "Forms of Government (By Where Sovereignty Resides)",
        tableData: {
          headers: ["Form", "Description"],
          rows: [
            ["Monarchy (Rule of One)", "Supreme authority resides in one person. Absolute Monarchy: King or Queen alone. Constitutional Monarchy: King or Queen, a Prime Minister, and a Constitution."],
            ["Aristocracy (Rule of Few)", "Political power belongs to a hereditary elite with high social status and wealth; an Oligarchy is rule by a few wealthy individuals."],
            ["Democracy (Rule of Many)", "Supreme power is exercised by the majority. Direct Democracy: people govern directly in assembly. Indirect (Representative) Democracy: people govern through chosen representatives."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 48,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "The Philippine Constitution",
    pdfPageRef: "PDF Page 19-20",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "What is a Constitution?",
        content: "The fundamental law of the land, by which the fundamental powers of government are established, limited, and defined, and distributed among departments for their safe and useful exercise for the benefit of the body politic."
      },
      {
        type: "table",
        heading: "History of Philippine Constitutions",
        tableData: {
          headers: ["Constitution", "Key Notes"],
          rows: [
            ["Malolos Constitution", "Approved for the establishment of the First Philippine Republic."],
            ["Japanese-Sponsored Republic Constitution", "Governed the Second Republic under Japanese occupation."],
            ["1935 Constitution", "Chairman of the 1934 Constitutional Convention: Claro M. Recto; ratified by the Filipino people."],
            ["1973 Constitution", "Chairman of the 1971 Constitutional Convention: former Presidents Carlos P. Garcia and Diosdado Macapagal."],
            ["1987 Constitution", "Chairman of the 1986 Constitutional Commission: Cecilia Muñoz Palma; ratified by the Filipino people on February 2, 1987."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 49,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Suffrage & Powers of the President",
    pdfPageRef: "PDF Page 20",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Requirements to Exercise Suffrage",
        items: [
          "At least 18 years of age.",
          "Not disqualified by law.",
          "A resident of the country for at least one year.",
          "A resident of the place where they intend to vote for at least six months immediately preceding the election."
        ]
      },
      {
        type: "numbered_list",
        heading: "Powers of the President",
        items: [
          "Power of Appointment: appoints members of the Constitutional Commissions, ambassadors, other public ministers and consuls, and officers of the AFP.",
          "Power of Executive Clemency: the power to grant reprieves, commutations, and pardons."
        ]
      },
      {
        type: "table",
        heading: "Forms of Executive Clemency",
        tableData: {
          headers: ["Form", "Description"],
          rows: [
            ["Pardon", "An act of grace exempting an individual from the punishment the law inflicts for a crime already convicted."],
            ["Amnesty", "An act of mercy, with the consent of Congress, granted to classes of persons who have committed political crimes such as rebellion, sedition, or coup d'etat."],
            ["Reprieve", "The postponement of a sentence."],
            ["Commutation", "The reduction of a sentence to a lesser punishment."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 50,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Sociology: Origins & Culture",
    pdfPageRef: "PDF Page 20-21",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        content: "Sociology is the scientific study of human societies and social behavior. Auguste Comte coined the term and proposed positivism — applying the scientific approach to the social world — though he did not apply this method himself."
      },
      {
        type: "numbered_list",
        heading: "Components of Culture: Social Norms",
        items: [
          "Folkways: the customs, traditions, and conventions of society (e.g. saying \"po\" and \"opo\" as a sign of respect to elders).",
          "Mores: special folkways important to the welfare of the people and their cherished values (e.g. strong family ties and valuing Sunday as family day).",
          "Laws: formalized norms enacted by people vested with political and legal authority (e.g. the Cybercrime Prevention Act of 2012)."
        ]
      }
    ]
  },
  {
    pageNumber: 51,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Attitudes Toward Cultural Variation",
    pdfPageRef: "PDF Page 21",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Attitudes Toward Cultural Variation",
        items: [
          "Ethnocentrism: assuming one's own culture and way of life are superior to all others (e.g. the term \"Promdi,\" where city dwellers view their lifestyle as superior to those from the provinces).",
          "Xenocentrism (Colonial Mentality): the belief that the products, styles, or ideas of one's own culture are inferior to those of other cultures (e.g. a preference for Western brands over local goods).",
          "Cultural Relativism: viewing a group's behavior from the perspective of their own culture (e.g. understanding the indigenous practices of groups like the Igorot without imposing mainstream norms)."
        ]
      }
    ]
  },
  {
    pageNumber: 52,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Cultural Transmission & Family Authority",
    pdfPageRef: "PDF Page 21",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "How Culture is Transmitted",
        items: [
          "Enculturation: learning the culture of one's own group (e.g. learning Filipino values like Bayanihan).",
          "Acculturation: learning new traits from another culture (e.g. the adoption of American fast-food culture).",
          "Assimilation: a process where an individual entirely loses awareness of their previous group identity and takes on the culture and attitudes of another group (e.g. a Filipino who fully adopts American life after emigrating)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Family Structures by Authority",
        items: [
          "Patriarchal: the father or grandfather holds authority and dominates the household.",
          "Matriarchal: the mother or grandmother holds authority and dominates the household.",
          "Egalitarian: husband and wife exercise equal power and authority."
        ]
      }
    ]
  },
  {
    pageNumber: 53,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Administrative Divisions Through History",
    pdfPageRef: "PDF Page 29",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Administrative Divisions: Centralized vs. Decentralized",
        tableData: {
          headers: ["Present (Centralized)", "Spanish — 2nd Version (Centralized)", "Spanish — 1st Version (Centralized)", "Pre-Colonial (Decentralized)"],
          rows: [
            ["Province, headed by a Governor", "Alcaldia (Pacified), headed by an Alcalde Mayor", "Corregimientos (Unpacified), headed by Corregidors", "Encomiendas, headed by Encomienderos, dependent on the National Government; independent Barangays headed by Datus, with no national government"],
            ["City, headed by a City Mayor", "Ayuntamiento, headed by two Alcaldes", "Municipalities, headed by a Municipal Mayor", "—"],
            ["—", "Pueblos, headed by a Gobernadorcillo", "Barangays, headed by a Barangay Captain", "Barangays, headed by a Cabeza de Barangay"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 54,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Firsts in the Philippines",
    pdfPageRef: "PDF Page 29",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Firsts in the Philippines",
        items: [
          "First Filipino Christians: Rajah Humabon and Rajah Kolambu.",
          "First Filipino priest: Martin Lakandula, ordained an Augustinian priest in 1590.",
          "First president from Mindanao: Rodrigo Duterte.",
          "First battle: Battle of Mactan.",
          "First Spanish governor-general: Miguel Lopez de Legaspi.",
          "First archbishop: Domingo Salazar.",
          "First revolt: revolt of Esteban Taes.",
          "First man to use \"Filipino\" as a title of citizenship: Luis Rodriguez Varela.",
          "First republic: the Malolos Republic.",
          "First president of the Katipunan: Deodato Arellano.",
          "First Army Chief: General Artemio Ricarte.",
          "First American civil governor: William Howard Taft.",
          "First Filipino Chief Justice: Cayetano Arellano.",
          "First labor union: Union Obrera Democratica, founded by Isabelo de los Reyes.",
          "First Speaker of the Philippine Assembly: Sergio Osmeña.",
          "First woman senator: Geronima Pecson."
        ]
      }
    ]
  },
  {
    pageNumber: 55,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Terms From Antonio de Morga's Sucesos de las Islas Filipinas",
    pdfPageRef: "PDF Page 29-30",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        content: "Sucesos de las Islas Filipinas (Events in the Philippine Islands) is a work by Antonio de Morga, a Spanish historian and high-ranking official in the Philippines during the late 16th and early 17th centuries."
      },
      {
        type: "table",
        heading: "Key Terminologies From the Work",
        tableData: {
          headers: ["Term", "Description"],
          rows: [
            ["Moros", "The Spanish term for the Muslim population in the southern Philippines, derived from \"Moor.\""],
            ["Cimarrón", "Indigenous people in Spanish colonies who escaped Spanish control, often forming their own remote communities."],
            ["La Conquista", "The Spanish conquest of the Philippines, beginning in the 16th century."],
            ["Presidio", "A fortified Spanish military settlement or garrison."],
            ["Rajah Sulayman", "A pre-colonial ruler of Manila and Tondo who resisted Spanish conquest, involved in the Battle of Bangkusay Channel."],
            ["Legua", "A Spanish unit of measurement, roughly 2.6 miles (4.2 km)."],
            ["Conquistadores", "Spanish conquerors who explored and colonized new territories, including the Philippines."],
            ["Real Hacienda", "The Spanish colonial treasury, responsible for tax collection and public finance."],
            ["Tributo", "A tribute or tax collected from the indigenous population by the colonial government."],
            ["Regidor", "A member of a Spanish colonial city's municipal council (cabildo)."],
            ["Cabildo", "The municipal council of a Spanish colonial city."],
            ["Doctrina", "A parish or mission established by Spanish friars for evangelization and religious instruction."],
            ["Confianza", "A system of trust-based relationships between Spanish officials and indigenous leaders."],
            ["Capitanía", "A Spanish colonial military unit responsible for order and defense."],
            ["Pintados", "The Spanish term for the indigenous people of the Visayas, known for their elaborate tattoos."],
            ["San Agustin Church", "The oldest stone church in the Philippines, built in Manila."],
            ["Igorot", "An ethnolinguistic group of the Cordillera region, Northern Luzon, known for resisting colonization and their terraced rice fields."],
            ["Oidor", "A judge or member of a Spanish colonial high court, such as the Audiencia of Manila."],
            ["Leyenda Negra", "The \"Black Legend,\" a negative portrayal of Spanish colonial rule."],
            ["Dalagang Bukid", "A traditional Filipino dance originating in the Spanish colonial period, depicting the life of women working in the fields."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 56,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "World Geography Facts",
    pdfPageRef: "PDF Page 30",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Continents (Biggest to Smallest)",
        items: ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"]
      },
      {
        type: "bullet_list",
        heading: "The Five Major Oceans",
        items: ["Pacific (North and South Pacific).", "Atlantic (North and South Atlantic).", "Indian Ocean.", "Southern Ocean.", "Arctic Ocean."]
      },
      {
        type: "table",
        heading: "World Superlatives",
        tableData: {
          headers: ["Category", "Record Holder"],
          rows: [
            ["Largest Country", "Russia"],
            ["Largest City", "Tokyo, Japan"],
            ["Greatest Archipelago", "Indonesia"],
            ["Largest Peninsula", "Arabian Peninsula"],
            ["Largest Sea", "Mediterranean Sea"],
            ["Largest River (by volume)", "Amazon River"],
            ["Largest Desert", "Sahara Desert"],
            ["Largest Island", "Greenland"],
            ["Longest Mountain Range", "Andes Mountains"],
            ["Largest Bay", "Bay of Bengal"],
            ["Deepest Trench", "Mariana Trench"],
            ["Longest River", "Nile River"],
            ["Largest Gulf", "Gulf of Mexico"],
            ["Largest Lake", "Caspian Sea"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 57,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Philippine Geography",
    pdfPageRef: "PDF Page 31",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "The Philippines lies in the Western Pacific Ocean, in the southern portion of Asia, at approximately 4°23'-21°25' N latitude and 116°-127° E longitude. Its neighbors are Taiwan to the north, the South China Sea and Vietnam to the west, the Pacific Ocean to the east, the Celebes Sea and Indonesia to the south, and Malaysia and Singapore to the southwest."
      },
      {
        type: "bullet_list",
        heading: "Key Geographic Facts",
        items: [
          "Composed of 7,641 islands with a total land area of about 300,000 sq km; Manila is the capital city.",
          "Three main island groups: Luzon (141,395 sq km), Mindanao (101,999 sq km), and Visayas (56,606 sq km).",
          "Y'Ami Isle is the northernmost point, about 78 miles from Taiwan; Saluag Isle is the southernmost point, about 34 miles from Borneo.",
          "Mt. Apo is the country's highest peak at about 9,600 feet.",
          "The Philippine Deep, off the Pacific coast, is the country's lowest point.",
          "San Juanico Strait is considered the narrowest strait in the world.",
          "The Central Plain of Luzon is known as the \"Rice Granary of the Philippines.\"",
          "The Cagayan River (Rio Grande de Cagayan) is the country's largest river; Laguna de Bay is the largest lake."
        ]
      },
      {
        type: "numbered_list",
        heading: "The 18 Regions of the Philippines",
        items: [
          "Region 1 — Ilocos Region",
          "Region 2 — Cagayan Valley",
          "Region 3 — Central Luzon",
          "Region 4 — CALABARZON",
          "MIMAROPA — Southwestern Tagalog Region",
          "Region 5 — Bicol Region",
          "Region 6 — Western Visayas",
          "Region 7 — Central Visayas",
          "Region 8 — Eastern Visayas",
          "Region 9 — Zamboanga Peninsula",
          "Region 10 — Northern Mindanao",
          "Region 11 — Davao Region",
          "Region 12 — SOCCSKSARGEN",
          "Region 13 — Caraga",
          "Autonomous Region of Muslim Mindanao (ARMM)",
          "National Capital Region (NCR)",
          "Cordillera Administrative Region (CAR)",
          "Region 18 — Negros Island Region"
        ]
      }
    ]
  },

  // ==========================================
  // SELF-STUDY REVIEW QUIZZES (WITH ANSWER KEYS)
  // ==========================================
  {
    pageNumber: 58,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Self-Study Quiz: Economics",
    pdfPageRef: "PDF Page 22-24",
    readTime: "6 min read",
    sections: [
      {
        type: "table",
        heading: "Self-Study Quiz: Economics (For Personal Review)",
        tableData: {
          headers: ["Question", "Answer", "Rationalization"],
          rows: [
            ["Fish vendors in a local palengke sell almost the same kinds of fish at nearly the same prices. What type of competition is this?", "Perfect Competition", "All products are the same and prices are uniform, just like the fish vendors in a local palengke."],
            ["Jollibee is the only fast-food chain that offers the \"Chickenjoy.\" What kind of competition does this represent?", "Monopolistic Competition", "Jollibee is the only one offering \"Chickenjoy,\" giving it some control over price and market."],
            ["PLDT and Globe dominate the telecom industry in the Philippines. What type of competition is this?", "Oligopolistic Competition", "PLDT and Globe dominate the telecom market, a case of oligopolistic competition where only a few companies have significant market power."],
            ["Which organization oversees the growth and development of cooperatives in the Philippines?", "Cooperative Development Authority", "The CDA is responsible for the regulation and development of cooperatives in the Philippines."],
            ["Who issued Executive Orders 95 and 96 to provide guidelines for cooperatives?", "Fidel V. Ramos", "Executive Orders 95 and 96 were issued by President Fidel V. Ramos to provide guidelines for cooperatives."],
            ["What drives every economy to answer the three basic economic questions?", "Scarcity", "Scarcity of resources drives an economy to answer questions about production, distribution, and consumption."],
            ["Which cooperative is concerned with providing medical services?", "Service Cooperative", "Service Cooperatives are involved in providing services like medical care."],
            ["A cooperative focused on both thrift and agricultural production is what type?", "Multi-Purpose Cooperative", "A cooperative that combines multiple functions, like thrift and agricultural production, is a Multi-Purpose Cooperative."],
            ["A cooperative mainly dealing with distribution of rice and food items is what type?", "Consumer Cooperative", "A cooperative dealing mainly in the distribution of commodities like rice is a Consumer Cooperative."],
            ["Which law(s) regulate the functioning of cooperatives in the Philippines?", "R.A. 6938 and R.A. 6939 (Both)", "R.A. 6938, the Cooperative Code of the Philippines, and R.A. 6939 together regulate cooperatives."],
            ["Who is responsible for producing goods in an economy?", "Both the Government and Entrepreneurs", "Both the government and private entrepreneurs are responsible for producing goods in an economy."],
            ["A co-op that combines transportation and healthcare services is what type?", "Multi-Purpose Cooperative", "A co-op combining multiple services, like transportation and healthcare, falls under the Multi-Purpose category."],
            ["Who typically benefits from the goods produced in an economy?", "The Government, Producers, and Consumers (All)", "Government, producers, and consumers all benefit from the goods produced in an economy."],
            ["Which economic situation features few sellers who engage in moderate competition?", "Oligopolistic Competition", "Oligopolistic competition features a few sellers and moderate competition, unlike a monopoly or perfect competition."],
            ["What is/are the basic economic question(s)?", "What, by whom, and for whom will it be produced (All of the above)", "The basic economic questions include what will be produced, by whom, and for whom."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 59,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Self-Study Quiz: Philippine Government",
    pdfPageRef: "PDF Page 25-26",
    readTime: "6 min read",
    sections: [
      {
        type: "table",
        heading: "Self-Study Quiz: Philippine Government (For Personal Review)",
        tableData: {
          headers: ["Question", "Answer", "Rationalization"],
          rows: [
            ["A person owes allegiance to the Philippine government and, in return, is protected by the state. What is this relationship called?", "Citizenship", "Citizenship involves a reciprocal relationship where the citizen owes allegiance and the state offers protection."],
            ["Maria was born in the US to Filipino parents. Under which principle is she a Filipino citizen?", "Jus Sanguinis", "Citizenship acquired through blood relations, regardless of place of birth."],
            ["Juan applies for Filipino citizenship through a court process. What method is he using?", "Voluntary (Naturalization)", "Applying for citizenship through a court process is a voluntary method."],
            ["Who has the authority to make and alter laws in the Philippines?", "Legislative Power", "The authority to make and alter laws is held by the Legislative branch."],
            ["How many senators make up the upper house of the Philippine Congress?", "24", "The Senate, the upper house, is composed of 24 senators."],
            ["What is the minimum population requirement for a place to be considered a barangay?", "2,000", "The minimum population for a barangay is 2,000 inhabitants."],
            ["How is the head of a barangay officially known?", "Punong Barangay", "The head of a barangay is officially known as Punong Barangay."],
            ["What is the minimum annual income required for an area to be classified as a city?", "P20 million", "An area must have a minimum annual income of P20 million to be classified as a city."],
            ["An area has an annual income of P3 million and a land area of 5 sq km. What can it be classified as?", "Municipality", "With that income and land area, the area qualifies as a municipality."],
            ["Which is NOT a way to acquire Philippine citizenship?", "By Marriage", "Acquiring citizenship by marriage is not an official method in the Philippines."],
            ["What role does the barangay play in local government structure?", "Basic Unit", "The barangay functions as the basic unit of local government."],
            ["Who resolves legal disputes between the state and private persons?", "Judicial Department", "The Judicial Department has the power to resolve legal disputes between the state and private persons."],
            ["How many Associate Justices does the Supreme Court of the Philippines have?", "14", "The Supreme Court is composed of 14 Associate Justices."],
            ["How long is the term of office for members of the Philippine Supreme Court?", "No fixed term", "Members hold office during good behavior until they reach 70 years old or become incapacitated."],
            ["What distinguishes a State from a Nation?", "Government", "A State has a degree of permanence and includes a government, whereas a Nation is bound by common race or language."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 60,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Self-Study Quiz: Social Studies",
    pdfPageRef: "PDF Page 27-28",
    readTime: "6 min read",
    sections: [
      {
        type: "table",
        heading: "Self-Study Quiz: Social Studies (For Personal Review)",
        tableData: {
          headers: ["Question", "Answer", "Rationalization"],
          rows: [
            ["What term is used to describe a marriage between one man and one woman?", "Monogamy", "Monogamy refers to the marriage between one man and one woman."],
            ["During the Spanish era, what was the title of the person heading an Alcaldia?", "Alcalde Mayor", "During the Spanish era, an Alcaldia was headed by an Alcalde Mayor."],
            ["Which sociologist is known for studying the social factors underlying suicide?", "Emile Durkheim", "Emile Durkheim is known for his study on the social factors that affect suicide."],
            ["What is the basic social unit consisting of parents and their children?", "Nuclear Family", "A nuclear family consists of a husband, wife, and children."],
            ["In present-day Philippines, who heads a province?", "Governor", "In the present-day Philippines, a province is headed by a Governor."],
            ["What term describes the marriage of one man to two or more women?", "Polygyny", "Polygyny refers to the marriage of one man to two or more women."],
            ["During the pre-colonial period, what was the form of government in the Philippines?", "Decentralized", "During the pre-colonial period, the Philippines had a decentralized form of government."],
            ["Who believed that class conflict was the key to human history?", "Karl Marx", "Karl Marx believed that class conflict was the key to human history."],
            ["What do you call the family type that includes grandparents, uncles, and cousins, in addition to parents and children?", "Extended Family", "An extended family includes grandparents, uncles, and cousins, in addition to parents and children."],
            ["In modern-day Philippines, who heads a city?", "Mayor", "In modern-day Philippines, a city is headed by a Mayor."],
            ["What was the term for a territory that was not pacified during Spanish colonization?", "Corregimientos", "Corregimientos referred to territories that were not pacified during Spanish colonization."],
            ["Who viewed societies as evolutionary and coined the term \"survival of the fittest\"?", "Herbert Spencer", "Herbert Spencer coined the term \"survival of the fittest\" and viewed societies as evolutionary."],
            ["During the Spanish colonial period, who was in charge of a Pueblo?", "Gobernadorcillo", "During the Spanish colonial period, a Pueblo was headed by a Gobernadorcillo."],
            ["What form of marriage involves one woman married to multiple men?", "Polyandry", "Polyandry involves one woman being married to multiple men."],
            ["In the present-day Philippines, who is the head of a barangay?", "Barangay Captain", "In the present-day Philippines, a barangay is headed by a Barangay Captain."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 61,
    dayNumber: 4,
    dayTitle: "Day 4: Presidents, Economics, Government, Sociology & Geography",
    topicTitle: "Practice Scenarios: Executive Clemency",
    pdfPageRef: "PDF Page 20",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Note",
        content: "These scenario questions from the source material are left as open self-study prompts — no answer key was provided in the original document."
      },
      {
        type: "numbered_list",
        heading: "Practice Scenarios: Executive Clemency",
        items: [
          "Which form of clemency did former President Gloria Macapagal-Arroyo grant to former President Joseph Estrada in 2007, exempting him from serving his life sentence and allowing him to regain his civil and political rights?",
          "What type of clemency did President Benigno Aquino III grant in 2010 to members of the AFP and PNP involved in coup attempts against the Arroyo administration, covering specific groups charged with rebellion- or insurrection-related crimes?",
          "In 2015, which form of clemency did the Philippine government secure for Mary Jane Veloso, a Filipino woman sentenced to death in Indonesia for drug trafficking, allowing additional time to investigate her case?",
          "What type of clemency did former President Joseph Estrada grant in 1998, reducing the punishment for 30 inmates on death row to life sentences instead of execution?"
        ]
      }
    ]
  }
];

export const SOCIAL_STUDIES_PAGES = PHILIPPINE_HISTORY_AND_SOCIETY_PAGES;
