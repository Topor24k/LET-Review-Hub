import { ExamQuestion } from '../../types';

export const FILIPINO_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Ayon sa Saligang Batas ng 1987 (Artikulo XIV, Seksiyon 6), ano ang pambansang wika ng Pilipinas?",
    options: [
      { key: 'A', text: 'Ang wikang pambansa ng Pilipinas ay Filipino; samantalang nililinang, ito ay dapat payabungin at pagyamanin pa salig sa umiiral na mga wika ng Pilipinas at sa iba pang mga wika.' },
      { key: 'B', text: 'Ang wikang pambansa ay Tagalog lamang.' },
      { key: 'C', text: 'Ang wikang pambansa ay Pilipino batay sa Ingles.' },
      { key: 'D', text: 'Ingles at Kastila ang tanging mga wikang pambansa.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ayon sa Saligang Batas 1987 Art. XIV Sek. 6: Ang wikang pambansa ng Pilipinas ay Filipino na patuloy na pinauunlad batay sa mga katutubong wika at dayuhang impluwensiya.',
    topicRef: '1.0 Batas at Kasaysayan ng Wikang Pambansa'
  },
  {
    id: 2,
    question: "Ano ang barayti ng wika na tumutukoy sa pagkakaiba-iba ng wika batay sa heograpikal na lokasyon o rehiyon (hal. Tagalog-Bulacan, Tagalog-Batangas)?",
    options: [
      { key: 'A', text: 'Dayalek (Dayalekto)' },
      { key: 'B', text: 'Sosyolek' },
      { key: 'C', text: 'Idyolek' },
      { key: 'D', text: 'Etnolek' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang dayalek ay nalilikha dahil sa heograpikong kinalalagyan ng mga tagapagsalita (tunog, tono, bokabularyo).',
    topicRef: '1.0 Mga Barayti ng Wika: Dayalek'
  },
  {
    id: 3,
    question: "Ano ang tawag sa barayti ng wika na pansarili at natatangi sa bawat indibidwal (hal. 'Aha! Handa na ba kayo?' ni Korina Sanchez, 'Magandang Gabi Bayan' ni Noli de Castro)?",
    options: [
      { key: 'A', text: 'Idyolek' },
      { key: 'B', text: 'Dayalek' },
      { key: 'C', text: 'Sosyolek' },
      { key: 'D', text: 'Pidgin' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang idyolek ay ang tatak at estilong personal ng isang tao sa kanyang pagpapahayag at pagbigkas.',
    topicRef: '1.0 Mga Barayti ng Wika: Idyolek'
  },
  {
    id: 4,
    question: "Ano ang barayti ng wika na nakabatay sa dimensiyong sosyal, antas sa lipunan, edad, kasarian, o pangkat (hal. Gay lingo/Beki language, Jejemon, Conyo, Kanto)?",
    options: [
      { key: 'A', text: 'Sosyolek' },
      { key: 'B', text: 'Etnolek' },
      { key: 'C', text: 'Ekolek' },
      { key: 'D', text: 'Dayalek' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang sosyolek ay nabubuo ayon sa kinabibilangang grupong panlipunan at kultural ng mga tagapagsalita.',
    topicRef: '1.0 Mga Barayti ng Wika: Sosyolek'
  },
  {
    id: 5,
    question: "Ano ang tawag sa barayti ng wika na karaniwang maririnig at ginagamit lamang sa loob ng tahanan ng isang pamilya (hal. pappy, mudra, mamu, bilot)?",
    options: [
      { key: 'A', text: 'Ekolek' },
      { key: 'B', text: 'Etnolek' },
      { key: 'C', text: 'Idyolek' },
      { key: 'D', text: 'Jargon' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang ekolek ay wikang sinasalita sa loob ng bahay o pampamilyang komunikasyon.',
    topicRef: '1.0 Mga Barayti ng Wika: Ekolek'
  },
  {
    id: 6,
    question: "Ano ang tawag sa 'walang pormal na estrukturang wika' na nabubuo kapag ang dalawang taong may magkaibang wika ay nagtatangkang mag-usap (Nobody\'s native language)?",
    options: [
      { key: 'A', text: 'Pidgin' },
      { key: 'B', text: 'Creole' },
      { key: 'C', text: 'Dayalek' },
      { key: 'D', text: 'Sosyolek' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang pidgin ay pansamantalang makeshift na wika na walang katutubong tagapagsalita; kapag naging unang wika ng isang komunidad (tulad ng Chavacano), ito ay nagiging Creole.',
    topicRef: '1.0 Barayti: Pidgin at Creole'
  },
  {
    id: 7,
    question: "Alin sa mga sumusunod ang tanyag na halimbawa ng wikang 'Creole' sa Pilipinas na nagmula sa pagsasama ng wikang Espanyol at katutubong wika?",
    options: [
      { key: 'A', text: 'Chavacano (Zamboanga at Cavite)' },
      { key: 'B', text: 'Ilokano' },
      { key: 'C', text: 'Hiligaynon' },
      { key: 'D', text: 'Waray' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Chavacano ay isang lehitimong wikang Creole sa Pilipinas na may gramatika at bokabularyong hinalaw sa Espanyol at mga wikang Pilipino.',
    topicRef: '1.0 Wikang Creole: Chavacano'
  },
  {
    id: 8,
    question: "Ano ang tawag sa pinakamaliit na yunit ng makabuluhang tunog sa isang wika na nakapagpapabago ng kahulugan ng salita?",
    options: [
      { key: 'A', text: 'Ponema (Phoneme)' },
      { key: 'B', text: 'Morpema (Morpheme)' },
      { key: 'C', text: 'Sintaks (Syntax)' },
      { key: 'D', text: 'Semantika (Semantics)' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Ponema ay makabuluhang tunog (hal. /p/ at /b/ sa \'pala\' at \'bala\'); ang Ponolohiya ay ang makaagham na pag-aaral ng mga tunog.',
    topicRef: '1.0 Ponolohiya at Ponema'
  },
  {
    id: 9,
    question: "Ano ang tawag sa pinakamaliit na yunit ng salita na nagtataglay ng sariling kahulugan (maaaring salitang-ugat o panlapi)?",
    options: [
      { key: 'A', text: 'Morpema (Morpheme)' },
      { key: 'B', text: 'Ponema' },
      { key: 'C', text: 'Katinig' },
      { key: 'D', text: 'Pangungusap' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Morpema ay ang pinakamaliit na yunit ng wika na may kahulugan (Morpolohiya ang pag-aaral sa pagbuo ng mga salita).',
    topicRef: '2.0 Morpolohiya at Morpema'
  },
  {
    id: 10,
    question: "Ano ang uri ng pagbabagong morpoponemiko sa salitang 'pang-' + 'bansa' = 'pambansa', o 'man-' + 'tahi' = 'manahi'?",
    options: [
      { key: 'A', text: 'Asimilasyon (Asimilasyong Parsyal / Ganap)' },
      { key: 'B', text: 'Metatesis' },
      { key: 'C', text: 'Pagkakaltas ng Ponema' },
      { key: 'D', text: 'Paglilipat-diin' }
    ],
    correctAnswer: 'A',
    explanation: 'Asimilasyon ang pagbabagong nagaganap sa /ng/ dahil sa impluwensiya ng kasunod na ponema (/p, b/ -> /m/; /d, l, r, s, t/ -> /n/).',
    topicRef: '2.0 Pagbabagong Morpoponemiko: Asimilasyon'
  },
  {
    id: 11,
    question: "Ano ang naganap na pagbabagong morpoponemiko sa salitang-ugat na 'tanim' + '-an' -> naging 'tamnan' (nawala ang titik 'i')?",
    options: [
      { key: 'A', text: 'Pagkakaltas ng Ponema' },
      { key: 'B', text: 'Metatesis' },
      { key: 'C', text: 'Reduplikasyon' },
      { key: 'D', text: 'Asimilasyon' }
    ],
    correctAnswer: 'A',
    explanation: 'Pagkakaltas ng ponema ang tawag kapag may nawawalang patinig o katinig sa loob ng salita kapag hinuhulapian (tanim + an -> tamnan; dakip + in -> dakpin).',
    topicRef: '2.0 Pagbabagong Morpoponemiko: Pagkakaltas'
  },
  {
    id: 12,
    question: "Ano ang pagbabagong morpoponemiko sa salitang 'linipad' na naging 'nilipad', o 'inipon' na naging 'niipon'?",
    options: [
      { key: 'A', text: 'Metatesis' },
      { key: 'B', text: 'Paglilipat-diin' },
      { key: 'C', text: 'Pagpapalit ng Ponema' },
      { key: 'D', text: 'Asimilasyon' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Metatesis, nagpapalitan ng posisyon ang mga ponema (karaniwan ay kapag ang unlaping -in- ay sumasama sa salitang nagsisimula sa /l/ o /y/).',
    topicRef: '2.0 Pagbabagong Morpoponemiko: Metatesis'
  },
  {
    id: 13,
    question: "Ano ang tamang gamit ng 'NG' laban sa 'NANG' sa pangungusap: 'Tumakbo siya nang mabilis ___ makahabol sa bus'?",
    options: [
      { key: 'A', text: 'nang' },
      { key: 'B', text: 'ng' },
      { key: 'C', text: 'na ng' },
      { key: 'D', text: 'may' }
    ],
    correctAnswer: 'A',
    explanation: 'Ginagamit ang \'nang\': 1) bilang pang-abay na pamaraan (tumakbo nang mabilis), 2) kasingkahulugan ng \'upang/para\', 3) kasingkahulugan ng \'noong\', 4) sa inuulit na pandiwa (takbo nang takbo).',
    topicRef: '3.0 Wastong Gamit ng Salita: Ng vs Nang'
  },
  {
    id: 14,
    question: "Alin sa mga sumusunod na pangungusap ang gumagamit ng wastong salitang 'MAY'?",
    options: [
      { key: 'A', text: 'May bisita sa sala.' },
      { key: 'B', text: 'Mayroon bisita sa sala.' },
      { key: 'C', text: 'May ako pera.' },
      { key: 'D', text: 'May sa lamesa.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ginagamit ang \'May\' kapag sinusundan ng pangngalan (noun), pandiwa (verb), pang-uri (adjective), o pang-abay (adverb). Ginagamit ang \'Mayroon\' kapag sinusundan ng kataga/panghalip (mayroon ako), o panagot sa tanong.',
    topicRef: '3.0 Wastong Gamit: May vs Mayroon'
  },
  {
    id: 15,
    question: "Ano ang 'Pokus ng Pandiwa' kapag ang paksa/simuno ng pangungusap ang siyang gumaganap sa kilos (hal. 'Nagluto si Maria ng masarap na sinigang')?",
    options: [
      { key: 'A', text: 'Pokus sa Aktor / Tagaganap' },
      { key: 'B', text: 'Pokus sa Gol / Layon' },
      { key: 'C', text: 'Pokus sa Ganapan' },
      { key: 'D', text: 'Pokus sa Sanhi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Pokus sa Aktor/Tagaganap, ang simuno (si Maria) ang mismong gumagawa ng kilos ng pandiwa (nagluto).',
    topicRef: '2.0 Pokus ng Pandiwa: Tagaganap'
  },
  {
    id: 16,
    question: "Ano ang pokus ng pandiwa sa: 'Ang sinigang ay <u>iniluto</u> ni Maria para sa pamilya'?",
    options: [
      { key: 'A', text: 'Pokus sa Gol / Layon' },
      { key: 'B', text: 'Pokus sa Tagaganap' },
      { key: 'C', text: 'Pokus sa Direksiyon' },
      { key: 'D', text: 'Pokus sa Kagamitan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Pokus sa Gol/Layon, ang paksa o simuno ng pangungusap (ang sinigang) ang siyang layon o tinatanggap ng kilos.',
    topicRef: '2.0 Pokus ng Pandiwa: Layon'
  },
  {
    id: 17,
    question: "Ano ang pokus ng pandiwa sa pangungusap: '<u>Ipinampunas</u> niya ang malinis na basahan sa basang mesa'?",
    options: [
      { key: 'A', text: 'Pokus sa Kagamitan / Gamit (Instrumental)' },
      { key: 'B', text: 'Pokus sa Ganapan' },
      { key: 'C', text: 'Pokus sa Pinaglalaanan' },
      { key: 'D', text: 'Pokus sa Aktor' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Pokus sa Kagamitan (Instrumental), ang paksa (ang basahan) ang kasangkapan o instrumentong ginamit upang maisagawa ang kilos.',
    topicRef: '2.0 Pokus ng Pandiwa: Kagamitan'
  },
  {
    id: 18,
    question: "Ano ang pokus ng pandiwa sa: '<u>Ipinagluto</u> ni Nanay ng masarap na sopas ang maysakit na bunso'?",
    options: [
      { key: 'A', text: 'Pokus sa Pinaglalaanan / Tagatanggap (Benefactive)' },
      { key: 'B', text: 'Pokus sa Layon' },
      { key: 'C', text: 'Pokus sa Sanhi' },
      { key: 'D', text: 'Pokus sa Ganapan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Pokus sa Pinaglalaanan, ang paksa (ang bunso) ang nakikinabang o pinaglalaanan ng isinagawang kilos.',
    topicRef: '2.0 Pokus ng Pandiwa: Pinaglalaanan'
  },
  {
    id: 19,
    question: "Ano ang pokus ng pandiwa sa: '<u>Ikinagalit</u> ng guro ang hindi pagpapasa ng takdang-aralin ng mga mag-aaral'?",
    options: [
      { key: 'A', text: 'Pokus sa Sanhi / Kosatib (Causative)' },
      { key: 'B', text: 'Pokus sa Tagaganap' },
      { key: 'C', text: 'Pokus sa Ganapan' },
      { key: 'D', text: 'Pokus sa Layon' }
    ],
    correctAnswer: 'A',
    explanation: 'Sa Pokus sa Sanhi, ang simuno (ang hindi pagpapasa) ang dahilan o sanhi ng kilos.',
    topicRef: '2.0 Pokus ng Pandiwa: Sanhi'
  },
  {
    id: 20,
    question: "Ano ang tatlong pangkalahatang Aspekto ng Pandiwa sa balarilang Filipino?",
    options: [
      { key: 'A', text: 'Perpektibo (Naganap), Imperpektibo (Nagaganap), at Kontemplatibo (Magaganap)' },
      { key: 'B', text: 'Simuno, Panaguri, at Layon' },
      { key: 'C', text: 'Pangngalan, Panghalip, at Pandiwa' },
      { key: 'D', text: 'Payak, Tambalan, at Hugnayan' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang mga aspekto ng pandiwa ay nagpapakita kung ang kilos ay tapos na (perpektibo), kasalukuyang nangyayari (imperpektibo), o gagawin pa lamang (kontemplatibo).',
    topicRef: '2.0 Aspekto ng Pandiwa'
  },
  {
    id: 21,
    question: "Ano ang 'Pares Minimal' sa ponolohiya ng Filipino?",
    options: [
      { key: 'A', text: 'Pares ng mga salita na magkaiba ng kahulugan ngunit magkatulad na magkatulad sa bigkas maliban sa isang ponema sa parehong posisyon (hal. pala - bala, mesa - misa, oso - uso)' },
      { key: 'B', text: 'Dalawang salitang magkasingkahulugan' },
      { key: 'C', text: 'Mga salitang hiram sa Ingles' },
      { key: 'D', text: 'Dalawang magkasunod na pantig' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang pares minimal ay ginagamit upang patunayan na ang isang tunog ay hiwalay at makabuluhang ponema sa wika.',
    topicRef: '1.0 Ponolohiya: Pares Minimal'
  },
  {
    id: 22,
    question: "Ano ang 'Diptonggo' sa wikang Filipino?",
    options: [
      { key: 'A', text: 'Ang tunog na nabubuo sa pagsasama ng alinmang patinig (a, e, i, o, u) at malapatinig na /w/ o /y/ sa loob ng IISANG pantig (hal. reyna, giliw, buhay, tuloy, sabaw)' },
      { key: 'B', text: 'Magkasunod na dalawang katinig' },
      { key: 'C', text: 'Salitang walang katinig' },
      { key: 'D', text: 'Pag-uulit ng buong salita' }
    ],
    correctAnswer: 'A',
    explanation: 'Diptonggo ang /aw, iw, ay, ey, oy, uy/ basta magkasama sa isang pantig (hal. ba-hay, aliw; ngunit hindi diptonggo ang ali-wan dahil napaghiwalay ang /i/ at /w/).',
    topicRef: '1.0 Ponolohiya: Diptonggo'
  },
  {
    id: 23,
    question: "Ano ang 'Kambal-Katinig' o 'Klaster' sa wikang Filipino?",
    options: [
      { key: 'A', text: 'Magkasunod na dalawang magkaibang katinig sa loob ng IISANG pantig (hal. <u>pl</u>a-to, <u>tr</u>a-ba-ho, <u>bl</u>o-ke, <u>kr</u>us)' },
      { key: 'B', text: 'Patinig na magkasunod' },
      { key: 'C', text: 'Pangungusap na walang simuno' },
      { key: 'D', text: 'Salitang inuulit' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang klaster (kambal-katinig) ay dalawang katinig na magkasama sa iisang pantig, karaniwang matatagpuan sa mga hiram na salita.',
    topicRef: '1.0 Ponolohiya: Klaster'
  },
  {
    id: 24,
    question: "Sino ang tinaguriang 'Ama ng Balarilang Tagalog' na sumulat ng 'Balarila ng Wikang Pambansa' at lumikha ng Abakadang Tagalog (20 titik)?",
    options: [
      { key: 'A', text: 'Lope K. Santos' },
      { key: 'B', text: 'Manuel L. Quezon' },
      { key: 'C', text: 'Francisco Balagtas' },
      { key: 'D', text: 'Jose Rizal' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Lope K. Santos ang sumulat ng Balarila ng Wikang Pambansa noong 1940 at nagtatag ng 20-titik na Abakada.',
    topicRef: '1.0 Ama ng Balarila: Lope K. Santos'
  },
  {
    id: 25,
    question: "Sino ang kinikilalang 'Prinsipe ng Manunulang Tagalog' at may-akda ng dakilang awit na 'Florante at Laura'?",
    options: [
      { key: 'A', text: 'Francisco \'Balagtas\' Baltazar' },
      { key: 'B', text: 'Jose dela Cruz (Huseng Sisiw)' },
      { key: 'C', text: 'Jose Corazon de Jesus (Huseng Batute)' },
      { key: 'D', text: 'Severino Reyes' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Francisco Balagtas ang sumulat ng Florante at Laura, ang obra-maestra ng panulaang Tagalog.',
    topicRef: '3.0 Panitikang Pilipino: Francisco Balagtas'
  },
  {
    id: 26,
    question: "Sino ang tinaguriang 'Unang Hari ng Balagtasan' at kilala sa sagisag-panulat na 'Huseng Batute' na sumulat ng tulang 'Isang Punongkahoy' at 'Bayan Ko'?",
    options: [
      { key: 'A', text: 'Jose Corazon de Jesus' },
      { key: 'B', text: 'Florentino Collantes' },
      { key: 'C', text: 'Amado V. Hernandez' },
      { key: 'D', text: 'Alejandro Abadilla' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Jose Corazon de Jesus (Huseng Batute) ang maalamat na makata ng puso at Unang Hari ng Balagtasan.',
    topicRef: '3.0 Panitikang Pilipino: Huseng Batute'
  },
  {
    id: 27,
    question: "Sino ang 'Ama ng Maikling Kwentong Tagalog' na sumulat ng 'Kuwento ni Mabuti' na kauna-unahang nagwagi ng Timpalak Palanca noong 1951?",
    options: [
      { key: 'A', text: 'Genoveva Edroza-Matute' },
      { key: 'B', text: 'Liwayway Arceo' },
      { key: 'C', text: 'Deogracias A. Rosario' },
      { key: 'D', text: 'Lualhati Bautista' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Genoveva Edroza-Matute ang sumulat ng walang-kamatayang "Kuwento ni Mabuti"; si Deogracias Rosario naman ang tinaguriang Ama ng Maikling Kwentong Tagalog.',
    topicRef: '3.0 Panitikan: Kuwento ni Mabuti'
  },
  {
    id: 28,
    question: "Sino ang pambansang alagad ng sining sa panitikan na sumulat ng 'Luha ng Buwaya' at 'Mga Ibong Mandaragit' at tinaguriang 'Makata ng mga Manggagawa'?",
    options: [
      { key: 'A', text: 'Amado V. Hernandez' },
      { key: 'B', text: 'Nick Joaquin' },
      { key: 'C', text: 'N.V.M. Gonzalez' },
      { key: 'D', text: 'F. Sionil Jose' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Amado V. Hernandez ay National Artist for Literature na nagtanggol sa karapatan ng mga obrero sa pamamagitan ng kanyang mga nobelang panlipunan.',
    topicRef: '3.0 Pambansang Alagad ng Sining: Amado V. Hernandez'
  },
  {
    id: 29,
    question: "Sino ang kilala bilang 'Lola Basyang' at tinaguriang 'Ama ng Sarsuwelang Tagalog' na sumulat ng 'Walang Sugat'?",
    options: [
      { key: 'A', text: 'Severino Reyes' },
      { key: 'B', text: 'Hermogenes Ilagan' },
      { key: 'C', text: 'Aurelio Tolentino' },
      { key: 'D', text: 'Patricio Mariano' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Severino Reyes ang nagpasimula ng modernong dulaang Tagalog at sumulat sa ilalim ng sagisag na Lola Basyang sa Magasing Liwayway.',
    topicRef: '3.0 Dulaang Tagalog: Severino Reyes'
  },
  {
    id: 30,
    question: "Ano ang kauna-unahang aklat na nailimbag sa Pilipinas noong 1593 sa pamamagitan ng paraang silograpiko ng mga paring Dominikano?",
    options: [
      { key: 'A', text: 'Doctrina Christiana' },
      { key: 'B', text: 'Barlaan at Josaphat' },
      { key: 'C', text: 'Urbana at Feliza' },
      { key: 'D', text: 'Pasyon Henesis' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Doctrina Christiana (1593) ang unang aklat sa Pilipinas, naglalaman ng mga panalangin sa Tagalog (Baybayin), Espanyol, at alpabetong Romano.',
    topicRef: '3.0 Kasaysayan ng Panitikan: Doctrina Christiana'
  },
  {
    id: 31,
    question: "Ano ang nobelang pangkaugalian na isinulat ni Padre Modesto de Castro noong 1864 na naglalaman ng palitan ng liham ng dalawang magkapatid ukol sa wastong asal at moralidad?",
    options: [
      { key: 'A', text: 'Urbana at Feliza' },
      { key: 'B', text: 'Nena at Neneng' },
      { key: 'C', text: 'Banaag at Sikat' },
      { key: 'D', text: 'Ninay' }
    ],
    correctAnswer: 'A',
    explanation: 'Si Padre Modesto de Castro ang tinaguriang "Ama ng Klasikang Tuluyang Tagalog" dahil sa kanyang obra na Urbana at Feliza.',
    topicRef: '3.0 Panitikang Panrelihiyon: Urbana at Feliza'
  },
  {
    id: 32,
    question: "Ano ang pagkakaiba ng 'Awit' sa 'Korido' bilang mga tulang romansa sa panahon ng Espanyol?",
    options: [
      { key: 'A', text: 'Ang Awit ay may 12 pantig sa bawat taludtod, mabagal ang himig (andante), at makatotohanan (hal. Florante at Laura); Ang Korido ay may 8 pantig, mabilis ang himig (allegro), at may kababalaghan/mahika (hal. Ibong Adarna)' },
      { key: 'B', text: 'Ang Awit ay maikli; ang Korido ay mahaba' },
      { key: 'C', text: 'Sila ay magkatulad sa lahat ng aspeto' },
      { key: 'D', text: 'Ang Korido ay walang sukat at tugma' }
    ],
    correctAnswer: 'A',
    explanation: 'Awit = 12 pantig (dodecasyllabic) tulad ng Florante at Laura; Korido = 8 pantig (octosyllabic) tulad ng Ibong Adarna.',
    topicRef: '3.0 Anyo ng Panulaan: Awit vs Korido'
  },
  {
    id: 33,
    question: "Ano ang 'Salawikain' sa katutubong panitikang Pilipino?",
    options: [
      { key: 'A', text: 'Matalinghagang pahayag na may sukat at tugma na naglalaman ng mga aral, pilosopiya, at gabay sa tamang pamumuhay (hal. \'Aanhin pa ang damo kung patay na ang kabayo\')' },
      { key: 'B', text: 'Bugtong na may nakatagong sagot' },
      { key: 'C', text: 'Kuwento tungkol sa mga hayop' },
      { key: 'D', text: 'Awit sa pagpapatulog ng bata' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang salawikain ay naglalaman ng matatayog na pilosopiya at tradisyonal na karunungang-bayan ng mga ninuno.',
    topicRef: '3.0 Karunungang-Bayan: Salawikain'
  },
  {
    id: 34,
    question: "Ano ang 'Sawikain' o 'Idyoma'?",
    options: [
      { key: 'A', text: 'Mga di-tuwiran o matatalinghagang pagpapahayag na ang kahulugan ay hindi literal kundi nakatago sa likod ng mga salita (hal. \'butas ang bulsa\' = walang pera; \'balat-sibuyas\' = maramdamin)' },
      { key: 'B', text: 'Pangungusap na nag-uutos' },
      { key: 'C', text: 'Salitang balbal sa kalsada' },
      { key: 'D', text: 'Tugmang de-gulong' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang sawikain (idiomatic expressions) ay nagbibigay ng kulay at lalim sa wika sa pamamagitan ng matalinghagang kahulugan.',
    topicRef: '3.0 Karunungang-Bayan: Sawikain/Idyoma'
  },
  {
    id: 35,
    question: "Ano ang 'Pabula' (Fable)?",
    options: [
      { key: 'A', text: 'Kwentong-bayan kung saan ang mga tauhan ay mga hayop na kumikilos at nagsasalita tulad ng tao, na nagbibigay ng moral na aral (pinasimulan ni Aesop)' },
      { key: 'B', text: 'Kwento tungkol sa pinagmulan ng mga bagay (Alamat)' },
      { key: 'C', text: 'Kwento tungkol sa mga diyos at diyosa (Mitolohiya)' },
      { key: 'D', text: 'Mahabang kwento ng kabayanihan (Epiko)' }
    ],
    correctAnswer: 'A',
    explanation: 'Pabula ang tawag sa maikling kwentong kinatatampukan ng mga hayop bilang tauhan (hal. Si Pagong at si Matsing).',
    topicRef: '3.0 Mga Anyo ng Tuluyan: Pabula'
  },
  {
    id: 36,
    question: "Ano ang 'Epiko' (Epic) sa katutubong panitikan?",
    options: [
      { key: 'A', text: 'Mahabang tulang pasalaysay na naglalahad ng kabayanihan, supernatural na kapangyarihan, at pakikipagsapalaran ng pangunahing tauhan para sa kanyang tribo (hal. Biag ni Lam-ang, Hinilawod, Darangan, Hudhud)' },
      { key: 'B', text: 'Maikling dula sa teatro' },
      { key: 'C', text: 'Isang tula ng pag-ibig' },
      { key: 'D', text: 'Sanaysay na pampulitika' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang epiko ay dakilang tulang pasalaysay ng mga katutubo na nagpapakita ng kababalaghan at kabayanihan ng bayani ng tribo.',
    topicRef: '3.0 Epiko ng Pilipinas'
  },
  {
    id: 37,
    question: "Alin ang itinuturing na pinakamatandang epiko ng mga Ilokano na isinulat at iningatan ni Pedro Bukaneg?",
    options: [
      { key: 'A', text: 'Biag ni Lam-ang' },
      { key: 'B', text: 'Hudhud at Alim' },
      { key: 'C', text: 'Ibalon' },
      { key: 'D', text: 'Bantugan' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Biag ni Lam-ang (Buhay ni Lam-ang) ang bantog na epiko ng Ilocos na kinatatampukan ng pambihirang sanggol na si Lam-ang at ang kanyang mahiwagang tandang at aso.',
    topicRef: '3.0 Epikong Ilokano: Biag ni Lam-ang'
  },
  {
    id: 38,
    question: "Ano ang tawag sa pag-aaral ng estruktura at ugnayan ng mga salita upang makabuo ng makabuluhang parirala, sugnay, at pangungusap?",
    options: [
      { key: 'A', text: 'Sintaks (Sintaksis / Syntax)' },
      { key: 'B', text: 'Ponolohiya' },
      { key: 'C', text: 'Morpolohiya' },
      { key: 'D', text: 'Pragmatiks' }
    ],
    correctAnswer: 'A',
    explanation: 'Sintaks ang makaagham na pag-aaral ng pagbuo at pagkakaayos ng mga pangungusap sa isang wika.',
    topicRef: '1.0 Kayarian ng Wika: Sintaks'
  },
  {
    id: 39,
    question: "Ano ang karaniwang ayos (Natural / Karaniwang Ayos) ng pangungusap sa wikang Filipino?",
    options: [
      { key: 'A', text: 'Panaguri muna bago ang Simuno/Paksa (hal. \'Bumili ng aklat ang guro\')' },
      { key: 'B', text: 'Simuno muna bago ang Panaguri na may panandang \'ay\' (Di-karaniwang ayos)' },
      { key: 'C', text: 'Laging may salitang \'ay\'' },
      { key: 'D', text: 'Walang pandiwa' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang karaniwang ayos sa Filipino ay Panaguri + Simuno (Verb-Initial); ang Di-karaniwang ayos ay Simuno + \'ay\' + Panaguri.',
    topicRef: '3.0 Ayos ng Pangungusap'
  },
  {
    id: 40,
    question: "Ano ang tawag sa pangungusap na 'May pasok bukas' o 'Walang pera' na walang tiyak na paksa ngunit buo ang diwa?",
    options: [
      { key: 'A', text: 'Pangungusap na Eksistensyal (Pangungusap na Walang Paksa)' },
      { key: 'B', text: 'Pangungusap na Temporal' },
      { key: 'C', text: 'Pormulasyong Panlipunan' },
      { key: 'D', text: 'Pangungusap na Pahanga' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang mga pangungusap na eksistensyal ay nagpapahayag ng pagkakaroon o kawalan gamit ang \'may\', \'mayroon\', o \'wala\'.',
    topicRef: '3.0 Pangungusap na Walang Paksa'
  },
  {
    id: 41,
    question: "Ano ang uri ng pangungusap na walang paksa sa: 'Umuulan!' o 'Lumilindol!'?",
    options: [
      { key: 'A', text: 'Pangungusap na Penomenal (Phenomenal)' },
      { key: 'B', text: 'Pangungusap na Modal' },
      { key: 'C', text: 'Pangungusap na Sambitla' },
      { key: 'D', text: 'Pangungusap na Pamanahon' }
    ],
    correctAnswer: 'A',
    explanation: 'Penomenal ang tawag sa mga pangungusap na tumutukoy sa mga kalagayan o pangyayaring pangkalikasan/panahon.',
    topicRef: '3.0 Pangungusap na Walang Paksa: Penomenal'
  },
  {
    id: 42,
    question: "Ano ang uri ng pangungusap na walang paksa sa: 'Kay ganda ng umaga!' o 'Ang tangkad mo!'?",
    options: [
      { key: 'A', text: 'Pahanga' },
      { key: 'B', text: 'Maikling Sambitla' },
      { key: 'C', text: 'Temporal' },
      { key: 'D', text: 'Pakiusap' }
    ],
    correctAnswer: 'A',
    explanation: 'Pahanga ang tawag sa pangungusap na nagpapahayag ng damdamin ng paghanga gamit ang \'kay\' o \'ang\'.',
    topicRef: '3.0 Pangungusap na Walang Paksa: Pahanga'
  },
  {
    id: 43,
    question: "Ano ang wastong gamit ng 'PINTO' laban sa 'PINTUAN'?",
    options: [
      { key: 'A', text: 'Ang \'Pinto\' (door) ay ang mismong kongkretong bagay na isinasara at ibinubukas; ang \'Pintuan\' (doorway) ay ang lagusan o espasyong dinaraanan kung saan nakakabit ang pinto' },
      { key: 'B', text: 'Pintuan ang isinasara gamit ang susi' },
      { key: 'C', text: 'Sila ay eksaktong magkasingkahulugan' },
      { key: 'D', text: 'Pinto ang espasyo sa pader' }
    ],
    correctAnswer: 'A',
    explanation: 'Pinto = the movable wooden/metal panel; Pintuan = the architectural opening/doorway.',
    topicRef: '3.0 Wastong Gamit ng Salita: Pinto vs Pintuan'
  },
  {
    id: 44,
    question: "Ano ang wastong gamit ng 'HAGDAN' laban sa 'HAGDANAN'?",
    options: [
      { key: 'A', text: 'Ang \'Hagdan\' (stairs/steps) ay ang mga baitang na inaapakan pataas o pababa; ang \'Hagdanan\' (stairway/stairwell) ay ang bahagi ng bahay kung saan nakalagay ang hagdan' },
      { key: 'B', text: 'Hagdanan ang inaapakan ng paa' },
      { key: 'C', text: 'Walang pagkakaiba' },
      { key: 'D', text: 'Hagdan ang buong kwarto' }
    ],
    correctAnswer: 'A',
    explanation: 'Hagdan = the actual steps; Hagdanan = the stairwell/location of the stairs.',
    topicRef: '3.0 Wastong Gamit: Hagdan vs Hagdanan'
  },
  {
    id: 45,
    question: "Ano ang wastong gamit ng 'OPINASION' vs 'OPERAHAN' (Operahin vs Operahan)?",
    options: [
      { key: 'A', text: 'Ginagamit ang \'Operahin\' kapag tumutukoy sa partikular na bahagi ng katawan (hal. Operahin ang bukol sa tiyan); Ginagamit ang \'Operahan\' kapag tumutukoy sa mismong tao o pasyente (hal. Operahan si Pedro)' },
      { key: 'B', text: 'Operahin ang pasyente' },
      { key: 'C', text: 'Operahan ang bukol' },
      { key: 'D', text: 'Parehong mali' }
    ],
    correctAnswer: 'A',
    explanation: 'Operahin = specific organ/ailment (tiyan, mata, bukol); Operahan = person/patient receiving the surgery.',
    topicRef: '3.0 Wastong Gamit: Operahin vs Operahan'
  },
  {
    id: 46,
    question: "Ano ang 'Baybayin'?",
    options: [
      { key: 'A', text: 'Ang sinaunang katutubong sistema ng pagsulat (alphasyllabary / abugida) ng mga Pilipino bago dumating ang mga Kastila, na binubuo ng 14 na katinig at 3 patinig' },
      { key: 'B', text: 'Ang dalampasigan sa dagat' },
      { key: 'C', text: 'Ang alpabetong Romano' },
      { key: 'D', text: 'Isang uri ng katutubong bangka' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Baybayin (maling tawaging Alibata) ang tunay na sinaunang sistema ng pagsulat ng mga katutubong Pilipino.',
    topicRef: '1.0 Kasaysayan ng Sistema ng Pagsulat: Baybayin'
  },
  {
    id: 47,
    question: "Ano ang Kautusang Tagapagpaganap Blg. 134 na nilagdaan ni Pangulong Manuel L. Quezon noong Disyembre 30, 1937?",
    options: [
      { key: 'A', text: 'Ipinahayag na ang Tagalog ang magiging batayan ng Wikang Pambansa ng Pilipinas batay sa rekomendasyon ng Surian ng Wikang Pambansa' },
      { key: 'B', text: 'Ipinagbawal ang paggamit ng wikang Ingles' },
      { key: 'C', text: 'Ipinatupad ang alpabetong Romano' },
      { key: 'D', text: 'Itinatag ang Komisyon sa Wikang Filipino' }
    ],
    correctAnswer: 'A',
    explanation: 'Nilagdaan ni Pangulong Quezon ang Kautusang Tagapagpaganap Blg. 134 na nagpatibay sa Tagalog bilang batayan ng wikang pambansa.',
    topicRef: '1.0 Kasaysayan ng Wikang Pambansa'
  },
  {
    id: 48,
    question: "Kailan ipinagdiriwang ang 'Buwan ng Wikang Pambansa' sa Pilipinas alinsunod sa Proklamasyon Blg. 1041 ni Pangulong Fidel V. Ramos?",
    options: [
      { key: 'A', text: 'Buong buwan ng Agosto (Agosto 1 hanggang 31)' },
      { key: 'B', text: 'Buwan ng Hunyo' },
      { key: 'C', text: 'Linggo ng Wika lamang (Agosto 13-19)' },
      { key: 'D', text: 'Buwan ng Disyembre' }
    ],
    correctAnswer: 'A',
    explanation: 'Itinakda ng Proklamasyon Blg. 1041 ang buong buwan ng Agosto bilang Buwan ng Wikang Pambansa bilang pagpupugay din sa kaarawan ni Manuel L. Quezon (Agosto 19).',
    topicRef: '1.0 Buwan ng Wikang Pambansa'
  },
  {
    id: 49,
    question: "Ano ang ahensiya ng pamahalaan na itinatag sa ilalim ng Republic Act No. 7104 upang magsagawa, mag-ugnay, at magtaguyod ng mga pananaliksik para sa pagpapaunlad ng wikang Filipino?",
    options: [
      { key: 'A', text: 'Komisyon sa Wikang Filipino (KWF)' },
      { key: 'B', text: 'Surian ng Wikang Pambansa (SWP)' },
      { key: 'C', text: 'Linangan ng mga Wika sa Pilipinas (LWP)' },
      { key: 'D', text: 'National Commission for Culture and the Arts (NCCA)' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Komisyon sa Wikang Filipino (KWF) ang opisyal na ahensiyang nagtataguyod at nagpapaunlad sa wikang Filipino at mga katutubong wika.',
    topicRef: '1.0 Komisyon sa Wikang Filipino'
  },
  {
    id: 50,
    question: "Bakit napakahalaga ng asignaturang Filipino sa Pangkalahatang Edukasyon para sa mga magiging lisensyadong propesyonal na guro?",
    options: [
      { key: 'A', text: 'Sapagkat ito ang tulay ng pambansang pagkakakilanlan, mabisang komunikasyon sa mamamayang Pilipino, at pagpapahalaga sa mayamang kultura at panitikang pambansa' },
      { key: 'B', text: 'Upang magsaulo lamang ng mga tuntunin sa balarila' },
      { key: 'C', text: 'Upang maiwasan ang pagkatuto ng ibang wika' },
      { key: 'D', text: 'Dahil ito ay madaling kurso na walang pagsusulit' }
    ],
    correctAnswer: 'A',
    explanation: 'Ang Filipino ay salamin ng kaluluwa, karunungan, at pagka-Pilipino na mahalagang maipasa ng guro sa mga susunod na henerasyon.',
    topicRef: '1.0 Kahalagahan ng Wikang Filipino'
  }
];
