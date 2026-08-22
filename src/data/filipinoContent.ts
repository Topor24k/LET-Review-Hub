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

export const FILIPINO_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: WIKA — KAHULUGAN, TEORYA, ANTAS, BARAYTI, KASAYSAYAN, PONOLOHIYA
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Kahulugan ng Wika at Mga Teorya sa Pinagmulan (Bahagi 1)",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Kahulugan ng Wika (Ayon kay Henry Gleason)",
        content: "Ang wika ay isang masistemang balangkas na sinasalitaang tunog na pinili at isinaayos sa paraang arbitraryo upang magamit ng mga taong kabilang o kasapi sa isang kultura o lipunan."
      },
      {
        type: "numbered_list",
        heading: "Mga Teorya sa Pinagmulan ng Wika (1–7)",
        items: [
          "1. Teoryang Bow-Wow: Ang wika ng tao ay maaaring nagmula sa panggagaya sa mga tunog ng kalikasan.",
          "2. Teoryang Pooh-Pooh: Unang natutong magsalita ang mga tao nang hindi sinasadya, bunga ng masisidhing damdamin tulad ng sakit, tuwa, sarap, kalungkutan, takot, at pagkabigla.",
          "3. Teoryang Yoheho: Ayon sa linggwistang si A.S. Diamond (sa Berel, 2003), natuto ang tao na magsalita bunga ng kanyang pwersang pisikal.",
          "4. Teoryang Tarara-Boom-De-Ay: Nagmula ang wika sa mga tunog na nalikha ng mga ninuno sa mga ritwal na kalauna'y nagpapabago-bago at nilapatan ng iba't ibang kahulugan.",
          "5. Teoryang Ta-Ta: Ang kumpas o galaw ng kamay ng tao sa bawat partikular na okasyon ay ginaya ng dila at naging sanhi ng pagkatuto ng taong lumikha ng tunog at kalauna'y nagsalita.",
          "6. Teoryang Ding-Dong: Kahawig ng Bow-Wow, ngunit hindi limitado sa kalikasan — nagkaroon ng wika ang tao sa pamamagitan ng mga tunog na nalilikha ng mga bagay-bagay sa paligid, likas man o likha ng tao.",
          "7. Teoryang Lala: Nakabatay sa mga puwersang may kinalaman sa romansa — ang salik na nagtutulak sa tao upang magsalita."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Mga Teorya sa Pinagmulan ng Wika (Bahagi 2) at ang Tore ng Babel",
    pdfPageRef: "PDF Page 2",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Mga Teorya sa Pinagmulan ng Wika (8–14)",
        items: [
          "8. Teoryang Mama: Nagmula ang wika mula sa pinakamadaling pantig ng pinakamahahalagang bagay.",
          "9. Teoryang Sing-Song: Iminungkahi ni Jesperson na ang wika ay nagmula sa paglalaro, pagtawa, pagbulong sa sarili, panliligaw, at iba pang bulalas-emosyunal; taliwas sa ibang teorya, ang mga unang salita raw ay sadyang mahahaba at musikal, hindi maiikling bulalas.",
          "10. Teoryang Coo-Coo: Ang wika ay nagmula sa wika ng sanggol — ginagaya ng mga matatanda ang mga tunog nito bilang pagpapangalan sa paligid.",
          "11. Teoryang Babble Lucky: Ang wika raw ay nagmula sa mga walang kahulugang bulalas ng tao.",
          "12. Teoryang Hocus Pocus: Ang wika ay tulad ng pinanggalingan ng mga mahikal o relihiyosong aspeto ng pamumuhay ng ating mga ninuno.",
          "13. Teoryang Eureka: Sadyang inimbento ang wika — may ideya ang mga ninuno sa pagtatakda ng mga arbitraryong tunog upang ipakahulugan sa mga tiyak na bagay.",
          "14. Tore ng Babel: Biblikal na pinagmulan ng wika sa Lungsod ni Babel (Genesis 11:1-9)."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Antas ng Wika: Pormal (Pambansa at Pampanitikan)",
    pdfPageRef: "PDF Page 2-3",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Antas ng Wika",
        content: "Ang antas ng wikang madalas na ginagamit ng isang tao ay isang mabisang palatandaan kung anong uri ng tao siya at kung sa aling antas-panlipunan siya kabilang."
      },
      {
        type: "bullet_list",
        heading: "A. Pormal",
        items: [
          "Mga salitang istandard dahil kinikilala, tinatanggap, at ginagamit ng higit na nakararami, lalo na ng mga nakapag-aral ng wika.",
          "Gumagamit ng bokabularyong mas komplikado kaysa sa ginagamit sa araw-araw na usapan."
        ]
      },
      {
        type: "text",
        heading: "1. Pambansa",
        content: "Ito ang mga salitang karaniwang ginagamit sa mga aklat pangwika sa lahat ng mga paaralan. Ito rin ang wikang kadalasang ginagamit ng pamahalaan at itinuturo sa mga paaralan."
      },
      {
        type: "text",
        heading: "2. Pampanitikan / Panretorika",
        content: "Ito naman ang mga salitang ginagamit ng mga manunulat sa kanilang mga akdang pampanitikan — mga salitang karaniwang matatayog, malalim, makulay, matalinghaga, at masining."
      },
      {
        type: "table",
        heading: "Pambansa vs. Pampanitikan",
        tableData: {
          headers: ["Pambansa", "Pampanitikan"],
          rows: [
            ["Ama", "Haligi ng tahanan"],
            ["Ina", "Ilaw ng tahanan"],
            ["Walang Silbi", "Patay na Tuod"],
            ["Nanliligaw", "Naniningalang pugad"],
            ["Kuripot", "Lawit ang pusod"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Antas ng Wika: Impormal (Lalawiganin, Kolokyal, Balbal)",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "B. Impormal",
        items: [
          "Mga salitang karaniwan at palasak sa mga pang-araw-araw na pakikipag-usap at pakikipagsulatan sa mga kakilala o kaibigan."
        ]
      },
      {
        type: "text",
        heading: "1. Lalawiganin",
        content: "Ginagamit ang mga ito sa mga partikular na pook o lalawigan lamang, maliban kung ang mga taal na gumagamit nito ay magkikita-kita sa ibang lugar dahil natural na nila itong naibubulalas. Makikilala rin ito sa pagkakaroon ng kakaibang tono, o ang tinatawag na punto."
      },
      {
        type: "table",
        heading: "Pambansa vs. Lalawiganin",
        tableData: {
          headers: ["Pambansa", "Lalawiganin"],
          rows: [
            ["Mainit", "Mabanas"],
            ["ito", "iredito dine"],
            ["Kalamansi", "Kalamunding"],
            ["Magligpit", "Mag-imis"],
            ["Asikasuhin", "Abiarin"]
          ]
        }
      },
      {
        type: "text",
        heading: "2. Kolokyal",
        content: "Mga pang-araw-araw na salita ngunit may kagaspangan at pagkabulgar, bagamat may anyong repinado at malinis depende sa kung sino ang nagsasalita. Kabilang dito ang pagpapaikli ng isa, dalawa, o higit pang salita."
      },
      {
        type: "table",
        heading: "Pambansa vs. Kolokyal",
        tableData: {
          headers: ["Pambansa", "Kolokyal"],
          rows: [
            ["nasaan", "nasa'n"],
            ["paano", "pa'no"],
            ["sa akin", "sa'kin"],
            ["sa iyo", "sa'yo"],
            ["kailan", "kelan"],
            ["mayroon", "meron"]
          ]
        }
      },
      {
        type: "text",
        heading: "3. Balbal (Slang)",
        content: "Tinatawag ding salitang kanto, salitang lansangan, salita ng mga estudyante, teen-age lingo, at sa grupo ng mga bakla ay swardspeak. Ito ang pinakadinamiko ngunit pinakamababang antas ng wika — pana-panahon lamang kung mauso kaya karaniwang hindi tumatagal, agad nawawala."
      },
      {
        type: "table",
        heading: "Pambansa vs. Balbal",
        tableData: {
          headers: ["Pambansa", "Balbal"],
          rows: [
            ["Pakipot", "Makiyeme"],
            ["Kainan", "Tsibugan"],
            ["Kotse", "Tsikot"],
            ["Sayawan", "Yugyugan"],
            ["Nanay", "Ermat"],
            ["Baril", "Boga"],
            ["Tatay", "Erpat"],
            ["Security guard", "Sikyo"],
            ["Sigarilyo", "Yosi"],
            ["Pulis", "Lispu"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Barayti ng Wika: Dayalek, Sosyolek, Jargon, Idyolek",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Barayti ng Wika",
        items: [
          "1. Dayalek / Dayalekto: Dimensyong heyograpiko — wikang ginagamit sa isang partikular na rehiyon, lalawigan, o pook; pagkakaiba-iba o baryasyon sa loob ng isang partikular na wika. Halimbawa: 'Pakiurong nga po ang plato' — sa Bulacan ay nangangahulugang hugasan, sa Maynila ay iusog.",
          "2. Sosyolek: Dimensyong sosyal — baryasyon ng wika batay sa katayuan sa lipunan ng nagsasalita o sa pangkat na kanyang kinabibilangan (hal. 'Wiz ko feel ang hombre ditech, day!'; 'Kosa, pupuga na tayo mamaya.').",
          "3. Jargon: Ang tanging bokabularyo ng isang partikular na pangkat ng gawain o disiplina. Sa Accountancy: account, debit at credit, revenue, balance, net income. Sa Medisina at Nursing: diagnosis, check up, therapy, symptom, ward.",
          "4. Idyolek: Indibidwal na estilo ng paggamit ng isang tao sa kanyang wika — kani-kaniyang paraan ng paggamit ng wika. Halimbawa: Noli De Castro, Mike Enriquez, Kris Aquino, Ruffa Mae Quinto, Gus Abelgas."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Kasaysayan ng Wikang Pambansa (1896–1987)",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Mahahalagang Yugto sa Kasaysayan ng Wikang Pambansa",
        tableData: {
          headers: ["Taon / Batas", "Detalye"],
          rows: [
            ["1896/1897 — Saligang Batas ng Biak na Bato", "Nakasaad na ang wikang Tagalog ang magiging opisyal na wika ng pamahalaang rebolusyonaryo."],
            ["1935 — Artikulo 14, Seksiyon 3 ng Konstitusyon", "Ang Kongreso ay gagawa ng mga hakbang tungo sa pagpapaunlad at pagpapatibay ng isang wikang pambansa na batay sa isa sa mga umiiral na katutubong wika."],
            ["1937 — Kautusang Tagapagganap Blg. 134", "Nag-aatas na Tagalog ang batayan ng wikang gagamitin sa pagbubuo ng Wikang Pambansa."],
            ["1959 — Kautusang Blg. 7 (Kalihim Jose Romero)", "Nagsasaad na Pilipino ang opisyal na tawag sa wikang pambansa."],
            ["1986 — Proklamasyon Blg. 19", "Kinilala ni Pang. Corazon Aquino ang mahalagang papel na ginampanan ng wikang pambansa na nagbunsod sa bagong pamahalaan."],
            ["1987 — Artikulo 14, Seksiyon 6 ng Saligang Batas", "Ang Wikang Pambansa ng Pilipinas ay Filipino. Samantalang nililinang, ito ay dapat payabungin at pagyamanin pa salig sa umiiral na wika sa Pilipinas at sa iba pang mga wika."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Kasaysayan ng KWF, Buwan ng Wika, at Ebolusyon ng Alpabeto",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Kasaysayan ng Komisyon sa Wikang Filipino (KWF)",
        tableData: {
          headers: ["Batas", "Naging Pangalan"],
          rows: [
            ["Batas Komonwelt Blg. 184 (1936)", "Surian ng Wikang Pambansa"],
            ["Kautusang Tagapagpaganap Blg. 117 (1987)", "Linangan ng mga Wika sa Pilipinas"],
            ["Batas Republika 7104", "Komisyon sa Wikang Filipino"]
          ]
        }
      },
      {
        type: "table",
        heading: "Pagbabago sa Pagdiriwang ng Wikang Pambansa",
        tableData: {
          headers: ["Taon at Proklamasyon", "Detalye"],
          rows: [
            ["1954, Proklama Blg. 12 (Pang. Ramon Magsaysay)", "Pagdiriwang ng Linggo ng Wikang Pambansa mula Marso 29 hanggang Abril 4 taon-taon, bilang paggalang sa kaarawan ni Balagtas."],
            ["1955, Proklama Blg. 186 (Pang. Ramon Magsaysay)", "Inilipat ang pagdiriwang ng Linggo ng Wikang Pambansa sa ika-13 hanggang 19 ng Agosto taon-taon, bilang paggalang sa kaarawan ni Pang. Manuel Quezon."],
            ["1997, Proklama Blg. 1041 (Pang. Fidel V. Ramos)", "Nagpapahayag ng taunang pagdiriwang tuwing Agosto 1–31 bilang Buwan ng Wikang Pambansa."]
          ]
        }
      },
      {
        type: "text",
        heading: "Ebolusyon ng Alpabetong Pilipino",
        content: "Baybayin → Abecedario → Abakada → Makabagong Alpabetong Filipino."
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Kalikasan at Istruktura ng Wikang Filipino: Ponolohiya — Ponemang Segmental",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Ponolohiya",
        content: "Ang ponolohiya ay ang makaagham na pag-aaral ng ponema — ang makahulugang tunog ng isang wika."
      },
      {
        type: "text",
        heading: "1. Ponemang Segmental",
        content: "Ito ang mga tunog na ginagamitan ng mga katumbas na letra upang mabasa at mabigkas. Kabilang dito ang diptonggo, ponemang malayang nagpapalitan, pares minimal, at kambal-katinig (klaster)."
      },
      {
        type: "bullet_list",
        heading: "A. Diptonggo",
        items: [
          "Tawag sa alinmang patinig na sinusundan ng malapatinig na /w/ at /y/ sa loob ng isang pantig.",
          "Halimbawa: Ba-hay, Tu-loy, Bey-wang, Ha-nay, Ka-suy, Gi-liw, Si-siw, Ka-lan-say"
        ]
      },
      {
        type: "bullet_list",
        heading: "B. Ponemang Malayang Nagpapalitan",
        items: [
          "Mga salitang katutubong may nagkakapalitang ponema (/e/ at /i/; /o/ at /u/).",
          "Halimbawa: lalake–lalaki, marami–madami, marunong–madunong"
        ]
      },
      {
        type: "bullet_list",
        heading: "C. Pares Minimal",
        items: [
          "Ang pares ng mga salita na magkaiba ng kahulugan ngunit magkatulad sa bigkas maliban sa isang ponema sa magkatulad na posisyon.",
          "Halimbawa: misa–mesa, ilog–irog, pala–bala, tila–tela, titik–titig, wari–yari, oso–uso, iwan–ewan, sabaw–sabay"
        ]
      },
      {
        type: "bullet_list",
        heading: "D. Kambal-Katinig o Klaster",
        items: [
          "Ang dalawang magkaibang katinig na magkasunod sa isang pantig.",
          "Posisyong Inisyal: pla-no, kri-sis",
          "Posisyong Midyal: som-bre-ro, in-tri-ga",
          "Posisyong Pinal: is-port"
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: Kalikasan, Antas, at Baryasyon ng Wika",
    topicTitle: "Ponolohiya — Ponemang Suprasegmental",
    pdfPageRef: "PDF Page 5-6",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        heading: "2. Ponemang Suprasegmental",
        content: "Walang ponemikong simbolong katawanin — ito ay pantulong sa ponemang segmental na siyang dahilan kung bakit higit na nagiging mabisa ang paggamit ng ponemang segmental sa ating pakikipagtalastasan."
      },
      {
        type: "bullet_list",
        heading: "A. Haba o Diin",
        items: [
          "Ang bigat ng pagbigkas ng pantig na maaaring makapag-iba sa kahulugan ng mga salita, maging ang mga ito man ay magkapareho ng baybay.",
          "Halimbawa: /HA.pon/ (afternoon) — bigkas malumanay at may diin sa unang pantig.",
          "Halimbawa: /ha.PON/ (Japanese) — bigkas mabilis at may diin sa ikalawang pantig."
        ]
      },
      {
        type: "bullet_list",
        heading: "B. Tono o Intonasyon",
        items: [
          "Ang pagbaba at pagtaas sa bigkas o intonasyon ng pantig.",
          "Halimbawa: Pupunta ka sa silid-aralan. / Pupunta ka sa silid-aralan? / Pupunta ka sa silid-aralan!"
        ]
      },
      {
        type: "bullet_list",
        heading: "C. Hinto o Antala",
        items: [
          "Tumutukoy sa saglit na pagtigil ng pagsasalita upang higit na maging malinaw ang mensaheng ipinahahayag. May hinto bago magsimula ang isang pangungusap at may hinto rin pagkatapos nito; may hinto rin sa loob ng pangungusap kung may kailangang ihiwalay na mga ideya. Sinisimbolo ng / o #.",
          "Halimbawa: Hindi siya si Jose. / Hindi/siya si Jose. / Hindi siya, si Jose."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: MORPOLOHIYA AT BAHAGI NG PANANALITA
  // ==========================================
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Morpolohiya at Asimilasyon",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Morpolohiya",
        content: "Ang morpolohiya ay ang makaagham na pag-aaral ng morpema — ang pinakamaliit na yunit ng salita na may kahulugan."
      },
      {
        type: "text",
        heading: "Mga Pagbabagong Morpoponemiko",
        content: "Ang Pagbabagong Morpoponemiko ay ang anumang pagbabago sa karaniwang anyo ng morpema dahil sa impluwensya ng katabing ponema."
      },
      {
        type: "text",
        heading: "1. Asimilasyon",
        content: "Anumang pagbabagong nagaganap sa /ŋ/ sa posisyong pinal dahil sa impluwensya ng ponemang kasunod nito."
      },
      {
        type: "table",
        heading: "Panlaping Naaapektuhan ng Asimilasyon",
        tableData: {
          headers: ["Panlapi", "Bago sa b, p", "Bago sa d, s, l, r, t"],
          rows: [
            ["pang", "pam", "pan"],
            ["mang", "mam", "man"],
            ["sing", "sim", "sin"],
            ["sang", "sam", "san"],
            ["labing", "labim", "labin"],
            ["kasing", "kasim", "kasin"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "A. Di Ganap na Asimilasyon",
        items: [
          "Ang ponemang /ŋ/ ay nagiging /n/ o /m/ o nananatiling /ŋ/ dahil sa kasunod na tunog.",
          "Nagiging /m/ kapag ikinakabit sa salitang-ugat na nagsisimula sa /p/ o /b/: pang- + paaralan = pampaaralan; pang- + bayan = pambayan; pang- + politika = pampolitika.",
          "Nagiging /n/ kung ang kasunod ay /d, s, l, r, t/: pang- + dikdik = pandikdik; pang- + taksi = pantaksi; pang- + loob = panloob; pang- + luto = panluto."
        ]
      },
      {
        type: "bullet_list",
        heading: "B. Ganap na Asimilasyon",
        items: [
          "Bukod sa pagbabagong nagaganap sa /ŋ/ ayon sa punto ng artikulasyon ng kasunod na tunog, nawawala rin ang unang ponema ng nilalapiang salita dahil ito ay inaasimila o napapaloob na sa sinusundang ponema.",
          "Halimbawa: pang- + palo → pampalo → pamalo; pang- + tali → pantali → panali"
        ]
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Pagpapalit ng Ponema",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "2. Pagpapalit ng Ponema",
        content: "Ang mga sumusunod ay mga karaniwang pagpapalit ng ponema na nagaganap sa proseso ng paglalapi."
      },
      {
        type: "bullet_list",
        heading: "(d→r) Posisyong Inisyal",
        items: [
          "Ang ponemang /d/ sa posisyong inisyal ng salitang nilalapian ay karaniwang napapalitan ng ponemang /r/ kapag patinig ang huling ponema ng unlapi.",
          "Halimbawa: ma- + dapat = marapat; ma- + dunong = marunong"
        ]
      },
      {
        type: "bullet_list",
        heading: "(d→r) Posisyong Pinal",
        items: [
          "Kung ang /d/ ay nasa posisyong pinal ng salitang nilalapian at hinuhulapian ng –an o –in, ang /d/ ay karaniwang nagiging /r/.",
          "Halimbawa: lapad + -an = laparan; tawid + -an = tawiran"
        ]
      },
      {
        type: "bullet_list",
        heading: "(h→n)",
        items: [
          "Sa ilang halimbawa, ang /h/ (bagamat hindi binabaybay o tinutumbasan ng titik sa pagsulat ng panlaping /-han/) ay nagiging /n/.",
          "Halimbawa: tawah + -an → tawahan → tawanan"
        ]
      },
      {
        type: "bullet_list",
        heading: "(o→u)",
        items: [
          "Ang ponemang /o/ sa huling pantig ng salitang-ugat na hinuhulapian o salitang inuulit ay nagiging /u/. Sa mga salitang inuulit, ang /o/ ay nagiging /u/ sa unang hati lamang ng salita.",
          "Halimbawa: dugo + -an = duguan; laro + -an = laruan"
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Metatesis, Pagkakaltas ng Ponema, at Pag-aangkop",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "3. Metatesis",
        content: "Ang metatesis ay ang pagpapalitan ng posisyon ng dalawang ponema o morpema sa loob ng isang salita."
      },
      {
        type: "bullet_list",
        heading: "Kondisyong /l/ at /y/",
        items: [
          "Kapag ang salitang-ugat na nagsisimula sa /l/ o /y/ ay nilalagyan ng gitlaping -in-, ang /i/ at /n/ ay nagkakapalitan ng posisyon.",
          "Halimbawa: -in- + lipad = nilipad; -in- + yaya = niyaya; -in- + lamon = nilamon; -in- + yakap = niyakap; -in- + lindol = nilindol"
        ]
      },
      {
        type: "bullet_list",
        heading: "Kondisyong may Kaltas",
        items: [
          "May mga salitang nagkakaroon pa ng pagkakaltas ng ponema bukod sa pagkakapalit ng posisyon ng dalawang morpema.",
          "Halimbawa: tanim + -an = taniman → tamnan"
        ]
      },
      {
        type: "bullet_list",
        heading: "4. Pagkakaltas ng Ponema",
        items: [
          "Nagaganap ang pagbabagong ito kung ang huling ponemang patinig ng salitang-ugat ay nawawala sa paghuhulapi nito.",
          "Halimbawa: takip + -an = takipan → takpan; kitil + -in = kitilin → kitlin"
        ]
      },
      {
        type: "bullet_list",
        heading: "5. Pag-aangkop",
        items: [
          "Pagsasama-sama ng dalawang salita upang makabuo ng isang bagong salita, at pagkakaltas upang mapaikli ang bagong anyo ng nabuong salita.",
          "Halimbawa: wika + ko → kako; tayo + na → tena; hintay + ka → teka"
        ]
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Bahagi ng Pananalita: Mga Nominal (Pangngalan at Panghalip)",
    pdfPageRef: "PDF Page 8",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Bahagi ng Pananalita",
        content: "Ang mga salitang pangnilalaman ay binubuo ng mga Nominal (Pangngalan, Panghalip), Pandiwa, at mga Panuring (Pang-uri, Pang-abay)."
      },
      {
        type: "text",
        heading: "1. Pangngalan",
        content: "Ang pangngalan ay salitang tumutukoy sa ngalan ng tao, bagay, pook, hayop, o pangyayari."
      },
      {
        type: "bullet_list",
        heading: "a. Batay sa Diwang Panlahat o Hindi Panlahat",
        items: [
          "Pangngalang Pantangi — tumutukoy sa tanging ngalan ng tao, bagay, lugar, o pangyayari. Halimbawa: Pia, Catriona, Mongol, Davao City, Ms. Universe.",
          "Pangngalang Pambalana — karaniwang ngalan ng tao, bagay, hayop, pook, o pangyayari. Halimbawa: babae, aso, lapis, lungsod, paligsahan."
        ]
      },
      {
        type: "bullet_list",
        heading: "b. Batay sa Bagay na Tahas o Hindi Tahas",
        items: [
          "Tahas — tumutukoy sa bagay na materyal. Halimbawa: tao, hayop, pagkain.",
          "Basal — tinutukoy ay diwa o kaisipan at hindi ang materyal na bagay. Halimbawa: ganda, buti, pag-asa, bait."
        ]
      },
      {
        type: "text",
        heading: "2. Panghalip",
        content: "Ang panghalip ay bahagi ng pananalita na inihahalili o ipinapalit sa pangngalan upang mabawasan ang paulit-ulit na pagbanggit sa pangngalan na hindi magandang pakinggan."
      },
      {
        type: "numbered_list",
        heading: "Uri ng Panghalip",
        items: [
          "1. Panao — ako, siya, sila",
          "2. Paari — akin, kaniya, kanila, amin",
          "3. Pananong — sino, ano, kailan",
          "4. Pamatlig — dito, doon",
          "5. Panaklaw — madla, pangkat"
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Pandiwa: Ang Pokus ng Pandiwa",
    pdfPageRef: "PDF Page 8-9",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "B. Pandiwa",
        content: "Ang pandiwa ay salitang tumutukoy sa kilos o galaw ng salita o mga salita sa loob ng pangungusap. Mga tanda ng paksa: Ang, Ang mga, Si, Sina, Ako, Siya, Kami, Sila, Ikaw, Tayo."
      },
      {
        type: "callout",
        heading: "Pokus ng Pandiwa",
        content: "Tawag ito sa relasyong pansemantika ng pandiwa at paksa ng pangungusap."
      },
      {
        type: "bullet_list",
        heading: "a. Pokus sa Tagaganap",
        items: [
          "Ang paksa ng pangungusap ang tagaganap ng kilos na isinasaad sa pandiwa.",
          "Panlaping ginagamit: mag-, um-, mang-, maka-, makapag-",
          "Halimbawa: Kumain ng suman at manggang hinog ang bata. / Ako ay nagdala ng laruan."
        ]
      },
      {
        type: "bullet_list",
        heading: "b. Pokus sa Tagatanggap",
        items: [
          "Ang pinaglalaanan ng kilos ang siyang paksa sa pangungusap.",
          "Panlaping ginagamit: i-, ipang-, ipag-",
          "Halimbawa: Ibinili ni Wally ng ilaw na kapis ang pinsan ko. / Sina lola at lolo ay dinalhan ko ng ulam."
        ]
      },
      {
        type: "bullet_list",
        heading: "c. Pokus sa Layon",
        items: [
          "Nasa pokus sa layon ang pandiwa kung ang layon ang paksa/binibigyang-diin sa pangungusap (tumatanggap ng kilos ay isang bagay).",
          "Panlaping ginagamit: i-, -an, ipa-, -in",
          "Halimbawa: Kinain ng bata ang suman at mangga. / Ang sinaing ay bantayan natin."
        ]
      },
      {
        type: "bullet_list",
        heading: "d. Pokus sa Kagamitan / Instrumento",
        items: [
          "Nagsasaad na ang kasangkapan o bagay na ginagamit upang maisagawa ang kilos ng pandiwa ay siyang paksa ng pangungusap.",
          "Panlaping ginagamit: ipina-, ipang-, maipang-",
          "Halimbawa: Ipinampunas ko ng mga kasangkapan ang basahang malinis. / Ang palakol ay ipinamputol ko ng kahoy na nasa likod ng bahay."
        ]
      },
      {
        type: "bullet_list",
        heading: "e. Pokus sa Direksyon",
        items: [
          "Ang paksa ay nagsasaad ng direksyon ng kilos ng pandiwa.",
          "Panlaping ginagamit: -in, -an, -han",
          "Halimbawa: Pinagpasyalan ng aking mga panauhing kabilang sa Peace Corps ang People's Park. / Tinungo ng mga bata ang bagong paaralan."
        ]
      },
      {
        type: "bullet_list",
        heading: "f. Pokus sa Ganapan",
        items: [
          "Ang paksa ay lugar o ganapang kilos.",
          "Panlaping ginagamit: -an, -han, pag-an, pinag-an, pang-an",
          "Halimbawa: Pinagtamnan ng gulay ng aming katulong ang bakuran. / Pinagdausan ng paligsahan ang bagong tayong entablado."
        ]
      },
      {
        type: "bullet_list",
        heading: "g. Pokus sa Sanhi",
        items: [
          "Ang paksa ay nagpapahayag ng dahilan o sanhi ng kilos.",
          "Panlaping ginagamit: i-, ika-, ikapang-",
          "Halimbawa: Ipinagkasakit niya ang labis na pagtatrabaho. / Ikinagagalak ng guro ang pagdating niya."
        ]
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Aspekto ng Pandiwa",
    pdfPageRef: "PDF Page 9-10",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Apat na Aspekto ng Pandiwa",
        items: [
          "a. Perpektibo — ang kilos ay natapos na.",
          "b. Perpektibong Katatapos — katatapos lamang ng kilos (inuulapian ng panlaping ka- at inuulit ang unang pantig ng salitang-ugat).",
          "c. Imperpektibo — ang kilos ay nasimulan na ngunit kasalukuyan pang ginagawa.",
          "d. Kontemplatibo — ang kilos ay hindi pa nasisimulan."
        ]
      },
      {
        type: "table",
        heading: "Halimbawa ng Aspekto ng Pandiwa",
        tableData: {
          headers: ["Perpektibo", "Perpektibong Katatapos", "Imperpektibo", "Kontemplatibo"],
          rows: [
            ["umakyat", "kaaakyat", "umaakyat", "aakyat"],
            ["naglinis", "kalilinis", "naglilinis", "maglilinis"],
            ["natulog", "—", "natutulog", "matutulog"],
            ["umalis", "kaaalis", "umaaalis", "—"],
            ["naglaba", "kalalaba", "—", "maglalaba"],
            ["sumulat", "kasusulat", "—", "susulat"],
            ["umasa", "—", "—", "—"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Panuring: Pang-uri at Pang-abay",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        heading: "C. Panuring",
        content: "Ang mga panuring ay binubuo ng pang-uri at pang-abay."
      },
      {
        type: "bullet_list",
        heading: "1. Pang-uri",
        items: [
          "Mga salitang naglalarawan o nagbibigay ng katangian at bilang sa pangngalan at panghalip.",
          "Halimbawa: Matamis ang inihaing mangga ni Aling Ising. / Napakaganda nga ng bistidang iyan! / Siya ay higit na matalino kaysa sa kanyang kuya."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Pang-abay",
        items: [
          "Nagbibigay-turing sa pandiwa, pang-uri, o kapwa pang-abay.",
          "Halimbawa: Dahan-dahang umalis ang mga bata. / Mabilis na hinuli ng bata ang palaka. / Talagang maganda si Mamita."
        ]
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Mga Pang-ugnay: Pangatnig, Pang-angkop, Pang-ukol",
    pdfPageRef: "PDF Page 11-12",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "II. Mga Salitang Pangkayarian",
        content: "Binubuo ito ng mga pang-ugnay (pangatnig, pang-angkop, pang-ukol) at mga pananda (pantukoy, pangawing na 'ay')."
      },
      {
        type: "bullet_list",
        heading: "1. Pangatnig",
        items: [
          "Ang mga salita o lipon ng mga salita at kataga na ginagamit sa pag-uugnay ng isang salita sa kapwa salita, ng isang parirala sa kapwa parirala, o ng isang pangungusap sa kapwa pangungusap.",
          "Halimbawa: at, kapag, kasi, samakatuwid, o, upang, ngunit, samantala, kaya, habang, sapagkat"
        ]
      },
      {
        type: "table",
        heading: "Mga Halimbawang Tanong sa Pangatnig",
        tableData: {
          headers: ["Pangungusap", "Sagot"],
          rows: [
            ["Namatay si Mang Isko ______ ang kanyang prinsipyo ay mananatiling buhay.", "sapagkat"],
            ["Ang kanyang prinsipyo ay mananatiling buhay ______ nariyan si Jun na magpapatuloy ng kanyang naudlot na gawain.", "samakatuwid"],
            ["Magwawagi ka ______ paghahandaan mo ito nang maigi.", "kung"]
          ]
        }
      },
      {
        type: "text",
        heading: "2. Pang-angkop",
        content: "Mga katagang nag-uugnay sa magkakasunod na salita sa pangungusap upang maging madulas o magaan ang pagbigkas ng mga ito; ginagamit din upang pag-ugnayin ang mga panuring at ang mga salitang binibigyang-turing nito."
      },
      {
        type: "bullet_list",
        heading: "Uri ng Pang-angkop",
        items: [
          "'na' — kapag ang naunang salita ay nagtatapos sa katinig maliban sa titik n; isinusulat na hiwalay sa mga salitang pinag-uugnay. Halimbawa: Ang malinis na hangin ay ating kailangan.",
          "'-ng' — isinusulat na karugtong ng mga salitang nagtatapos sa mga patinig (a, e, i, o, u). Halimbawa: Pinipigil ng malalaking ugat ng mga puno ang baha.",
          "'-g' — ginagamit kung ang salitang durugtungan ay nagtatapos sa titik n. Halimbawa: Masayang binuksan ni Romina ang kahong natanggap."
        ]
      },
      {
        type: "text",
        heading: "3. Pang-ukol",
        content: "Nag-uugnay sa pangngalan, panghalip, pandiwa, at pang-abay sa ibang salita sa pangungusap. Halimbawa: para, ayon, hinggil, alinsunod, tungkol, ukol, laban."
      },
      {
        type: "bullet_list",
        heading: "Iba pang Halimbawa ng Pang-ukol",
        items: [
          "Ng — ugnayan sa pagitan ng isang bahagi at ng isang kabuuan (anak ng bayan, mata ng tao)",
          "Sa — inuukol ang isang bagay na nakakabit at nakasuporta sa isa pang bagay (kamay sa dibdib, ipinalabas sa telebisyon)"
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 2,
    dayTitle: "Day 2: Morpolohiya at Bahagi ng Pananalita",
    topicTitle: "Mga Pananda: Pantukoy at Pangawing na 'Ay'",
    pdfPageRef: "PDF Page 12",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        heading: "1. Pantukoy",
        content: "Katagang ginagamit sa pagtukoy sa tao, bagay, lunan, o pangyayari. Nahahati ito sa dalawang uri: isahan at maramihan."
      },
      {
        type: "table",
        heading: "Pantukoy: Isahan at Maramihan",
        tableData: {
          headers: ["Pantukoy", "Halimbawa"],
          rows: [
            ["ang (isahan)", "Ang pinuno ay palaging naglilingkod sa kanyang mga nasasakupan."],
            ["ang mga (maramihan)", "Nagtulung-tulong ang mga mag-aaral sa paggawa ng collage."],
            ["si (isahan)", "Si Gng. Roa ay isang mabuting guro."],
            ["sina (maramihan)", "Nanguna sa paglilinis ng baranggay sina G. at Gng. dela Cruz."],
            ["ni (isahan)", "Napagalitan ni Coach Gab ang mga manlalaro dahil hindi sila dumating sa oras."],
            ["nina (maramihan)", "Hindi ikinatuwa ng guro ang pag-aaway nina Elsa at Luis."],
            ["kay (isahan)", "Ibinahagi ni Sofia ang kanyang panghimagas kay Sam."],
            ["kina (maramihan)", "Nakipagkasundo na si Elai kina Juan at Pedro."]
          ]
        }
      },
      {
        type: "text",
        heading: "2. Pangawing na 'Ay'",
        content: "Nagpapakilala ng ayos ng mga bahagi ng pangungusap. Ang 'ay' ay palatandaan ng di-karaniwang ayos ng pangungusap — ibinabadya nito na inilipat ng posisyon ang bahaging paksa; ito ay pang-dugtong sa mga pangungusap na di-karaniwang ayos."
      }
    ]
  },

  // ==========================================
  // DAY 3: KAYARIAN, PANGUNGUSAP, WASTONG GAMIT, AT PANITIKAN
  // ==========================================
  {
    pageNumber: 19,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Kayarian ng mga Salita",
    pdfPageRef: "PDF Page 13",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Apat na Uri ng Kayarian ng Salita",
        items: [
          "1. Payak — binubuo ng salitang-ugat lamang, walang panlapi, hindi inuulit, walang katambal na salita. Halimbawa: Alay, Kahoy, Bango, Araw, Dasal, Dahon, Lakad, Gabi. (Mukhang inuulit pero payak: alaala, haluhalo, guniguni, gamugamo, paruparo, sarisari)",
          "2. Maylapi — mga salitang binubuo ng salitang-ugat na may kasamang isa o higit pang panlapi. Halimbawa: matubig, pagsumikapan, tatapangan, sumpaan.",
          "3. Inuulit — ang buong salita ay inuulit, o ang isa o higit pang patinig ay inuulit. Halimbawa: gabi → gabi-gabi; araw → araw-araw; lukso → lulukso; benta → bebenta.",
          "4. Tambalan — tawag sa pagsasama ng dalawang salita. Halimbawa: bahag + hari = bahaghari; patay + gutom = patay-gutom; bahay + kubo = bahay-kubo; bantay + salakay = bantay-salakay; hatid + sundo = hatid-sundo."
        ]
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Bahagi at Ayos ng Pangungusap",
    pdfPageRef: "PDF Page 13",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Pangungusap",
        content: "Ang pangungusap ay lipon ng mga salita na nagpapahayag ng buong diwa. Ang paksa/simuno ang pinag-uusapan sa pangungusap, samantalang ang panaguri ang nagsasabi tungkol sa paksa."
      },
      {
        type: "table",
        heading: "Mga Halimbawang Tanong: Paksa at Panaguri",
        tableData: {
          headers: ["Pangungusap", "Tanong", "Sagot"],
          rows: [
            ["Pinakain ng masarap na pagkain ng mga taganayon ang mga turista.", "Ano ang paksa sa pangungusap?", "turista"],
            ["Talagang pinag-isipan ng kalahok ang angkop na salitang isasagot.", "Ano ang panaguri sa pangungusap?", "pinag-isipan"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "Ayos ng Pangungusap",
        items: [
          "A. Di-karaniwang Ayos — nauuna ang paksa at ginagamit ang panandang 'ay'. Halimbawa: Lahat ng tao ay may natatagong talento. / Ito ay paalala sa ating lahat.",
          "B. Karaniwang Ayos — nauuna ang panaguri kaysa sa simuno/paksa, walang 'ay' sa pangungusap. Halimbawa: Watak-watak kami. / Matalino si Ben."
        ]
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Wastong Gamit ng mga Salita: Nang/Ng at Subukin/Subukan",
    pdfPageRef: "PDF Page 13-14",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "NG",
        content: "Ginagamit bilang: (a) pananda sa tuwirang layon ng pandiwang palipat — hal. 'Nagkamit siya NG karangalan dahil sa pagsisikap niya sa pag-aaral.'; (b) pananda ng aktor o tagaganap ng pandiwa sa tinig balintiyak — hal. 'Tinulungan NG guro na makatapos ng pag-aaral ang kanyang mag-aaral.'; (c) sa pagsasaad ng pag-aari ng isang bagay o katangian — hal. 'Ang ani NG magsasaka ay naipagbili sa malaking halaga.'"
      },
      {
        type: "text",
        heading: "NANG",
        content: "Ginagamit bilang: (a) pangatnig sa mga kaugnayang pangungusap, panimula ng katulong na sugnay — hal. 'Mag-impok ka NANG may magamit ka sa oras ng pangangailangan.'; (b) mula sa 'na' na inangkupan ng 'ng', nasa gitna ng pandiwa at ng paturing nito — hal. 'Nag-iisip NANG mabuti si Edward bago mabuo ang kanyang desisyon.'; (c) sa gitna ng dalawang salitang inuulit — hal. suklay nang suklay, mag-ipon nang mag-ipon, nagdasal nang nagdasal."
      },
      {
        type: "comparison",
        heading: "Subukin vs. Subukan",
        items: [
          "SUBUKIN: Nangangahulugan ng pagsusuri o pagsisiyasat sa uri, lakas, o kakayahan ng isang tao o bagay. Halimbawa: 'Subukin mong pangaralan siya at baka makinig sa 'yo.'",
          "SUBUKAN: Nangangahulugan ng pagmamanman upang malaman ang ginagawa ng tao o mga tao. Halimbawa: 'Subukan natin kung saan talaga siya nakatira.'"
        ]
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Wastong Gamit ng mga Salita: Pahirin/Pahiran, Operahin/Operahan, Punasin/Punasan",
    pdfPageRef: "PDF Page 15",
    readTime: "4 min read",
    sections: [
      {
        type: "comparison",
        heading: "Pahirin vs. Pahiran",
        items: [
          "PAHIRIN: Nangangahulugan ng pag-alis o pagpawi ng isang bagay. Halimbawa: 'Pahirin mo ang sobrang lipstik sa iyong labi.'",
          "PAHIRAN: Nangangahulugan ng paglalagay ng isang bagay. Halimbawa: 'Pahiran mo ng manzanilla ang tiyan ng sanggol.'"
        ]
      },
      {
        type: "comparison",
        heading: "Operahin vs. Operahan",
        items: [
          "OPERAHIN: Tinutukoy ang tiyak na bahaging titistisin. Halimbawa: 'Nakatakdang operahin ang mga mata ni Mang Julio sa Martes.'",
          "OPERAHAN: Tinutukoy ang tao, hindi ang bahagi ng katawan. Halimbawa: 'Habang inoope-rahan si Rhodora ay panay ang dasal ng kanyang anak na si Lisabeth.'"
        ]
      },
      {
        type: "comparison",
        heading: "Punasin vs. Punasan",
        items: [
          "PUNASIN: Ginagamit kapag binabanggit ang bagay na pinagtatanggalan ng kung ano man. Halimbawa: 'Punasin mo ang alikabok sa mesa.'",
          "PUNASAN: Ginagamit kapag ang binabanggit ay ang bagay na pinagtatanggalan ng kung ano man. Halimbawa: 'Punasan mo ang mesa.'"
        ]
      }
    ]
  },
  {
    pageNumber: 23,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Wastong Gamit ng mga Salita: Pinto/Pintuan, Iwan/Iwanan, Din-Daw/Rin-Raw, Walisin/Walisan, Hagdan/Hagdanan, Sundin/Sundan",
    pdfPageRef: "PDF Page 15-16",
    readTime: "5 min read",
    sections: [
      {
        type: "comparison",
        heading: "Pintuan vs. Pinto",
        items: [
          "PINTUAN: Ang kinalalagyan ng pinto (doorway); ang bahaging daraanan kapag bukas na ang pinto. Halimbawa: 'Nakaharang sa pintuan ang bagong biling refrigerator.'",
          "PINTO: Bahagi ng daanan na isinasara o ibinubukas. Halimbawa: 'Tiyaking nakakandado nang mabuti ang pinto bago matulog sa gabi.'"
        ]
      },
      {
        type: "comparison",
        heading: "Iwan vs. Iwanan",
        items: [
          "IWAN (to leave something): Nangangahulugang huwag isama o dalhin. Halimbawa: 'Iwan mo na siya at mahuhuli ka sa lakad mo.'",
          "IWANAN (to leave something to somebody): Nangangahulugang bigyan ng kung ano ang isang tao. Halimbawa: 'Iwanan mo ako ng pambili ng gamot ng anak mo.'"
        ]
      },
      {
        type: "bullet_list",
        heading: "Din/Daw at Rin/Raw",
        items: [
          "DIN at DAW — ginagamit kung ang salitang sinusundan ay nagtatapos sa katinig maliban sa w at y. Halimbawa: 'Masakit daw ang ulo ni Malou kaya hindi siya nakapasok sa klase.' / 'Magtatanghal din ng dula ang Kagawaran ng Filipino.'",
          "RIN at RAW — ginagamit kung ang sinusundang salita ay nagtatapos sa patinig at sa malapatinig na w at y. Halimbawa: 'Si Darwin ay katulad mo ring masipag mag-aral.' / 'Ikaw raw ang napipisil ng mga hurado na kakatawan sa ating pamantasan.'"
        ]
      },
      {
        type: "comparison",
        heading: "Walisin vs. Walisan",
        items: [
          "WALISIN: Tumutukoy sa bagay na wawalisin. Halimbawa: 'Walisin natin ang basura sa daan.'",
          "WALISAN: Tumutukoy sa lugar na wawalisan. Halimbawa: 'Walisan natin ang tabing-ilog.'"
        ]
      },
      {
        type: "comparison",
        heading: "Hagdan vs. Hagdanan",
        items: [
          "HAGDAN: Mga baytang na inaakyatan at binababaan sa bahay o gusali. Halimbawa: 'Mabilis niyang inakyat ang hagdan upang marating ang klinika.'",
          "HAGDANAN: Bahagi ng bahay na kinalalagyan ng hagdan. Halimbawa: 'Matibay ang hagdanan ng kanilang bahay kaya hindi gumuho ang hagdan niyon matapos ang lindol.'"
        ]
      },
      {
        type: "comparison",
        heading: "Sundin vs. Sundan",
        items: [
          "SUNDIN: Sumunod sa payo o pangaral. Halimbawa: 'Sundin mo ang payo ng iyong mga magulang kung ayaw mong maligaw ng landas.'",
          "SUNDAN: Gayahin ang ginagawa ng iba, o pumunta sa pinuntahan ng iba. Halimbawa: 'Sundan mo ang demonstrasyon sa telebisyon kung nais mong matutong magluto.'"
        ]
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Panitikan: Dalawang Anyo at ang Epiko",
    pdfPageRef: "PDF Page 17",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "Dalawang Anyo ng Panitikan",
        content: "1. Prosa — anyo ng panitikan na patalata o ang karaniwang takbo ng pangungusap; gumagamit ng payak at direktang paglalahad ng kaisipan. 2. Patula — anyo ng panitikan na pataludtod, may sukat at tugma o malayang taludturan; gumagamit ng masining at matalinghagang salita."
      },
      {
        type: "callout",
        heading: "Epiko",
        content: "Ang mga epiko ay nagsasalaysay ng mga kabayanihang halos hindi mapaniwalaan pagkat nauukol sa mga kababalaghan; nagbubunyi ito sa isang alamat o kasaysayang naging matagumpay laban sa mga panganib at kagipitan."
      },
      {
        type: "table",
        heading: "Mga Halimbawang Tanong sa Epiko",
        tableData: {
          headers: ["Tanong", "Sagot"],
          rows: [
            ["Alin sa sumusunod ang HINDI epiko ng Mindanao? (A. Bidasari B. Bantugan C. Indarapatra at Sulayman D. Alim)", "A. Bidasari"],
            ["Alin sa sumusunod na mga epiko ang HINDI galing sa Kabisayaan? (A. Hudhud B. Haraya C. Lagda D. Maragtas)", "A. Hudhud"],
            ["Ito ang epiko ng Bicol na hulwaran ng mabuting pamumuhay ng mga taga-Bicol. (A. Hinilawod B. Ibalon at Aslon C. Kumintang D. Biag ni Lam-ang)", "B. Ibalon at Aslon"],
            ["Alin sa sumusunod ang pinakamatandang epiko sa Pilipinas? (A. Darangen B. Biag ni Lam-ang C. Hudhud D. Alim)", "D. Alim"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Mga Piling Anyo ng Patula (Awit hanggang Zarzuela)",
    pdfPageRef: "PDF Page 17-18",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Mga Piling Panitikang Patula",
        items: [
          "AWIT — tulang maromansa na binubuo ng labindalawang pantig bawat taludtod, hango sa tunay na buhay.",
          "KORIDO — tulang maromansa na binubuo ng walong pantig bawat taludtod, kinawiwilihan dahil sa mga mala-pantasyang temang taglay.",
          "SONETO — tulang may labing-apat (14) na taludtod hinggil sa damdamin at kaisipan, may malinaw na batiran ng likas na pagkatao, at naghahatid ng aral sa mambabasa.",
          "ELEHIYA — nagpapahayag ng damdamin o guniguni tungkol sa kamatayan, o tula ng pananangis lalo na sa paggunita ng isang yumao.",
          "ODA — nagpapahayag ng papuri o panaghoy o iba pang masiglang damdamin; walang tiyak na bilang ng pantig o taludtod sa isang saknong.",
          "TIBAG — ang paghahanap nina Reyna Elena at Constantino sa krus na pinagpakuan ni Hesus.",
          "MORO-MORO — ipinapakita ang paglalaban ng mga Kristiyano at Muslim.",
          "ZARZUELA — dulang musikal na karaniwang binubuo ng tatlong akto tungkol sa pag-ibig, kasakiman, at poot."
        ]
      },
      {
        type: "table",
        heading: "Halimbawang Tanong sa Zarzuela",
        tableData: {
          headers: ["Tanong", "Sagot"],
          rows: [
            ["Siya ay kilala sa tawag na Lola Basyang at Ama ng Zarzuelang Tagalog; sumulat ng dulang musikal na Walang Sugat. (A. Amado V. Hernandez B. Severino Reyes C. Aurelio Tolentino D. Andres Bonifacio)", "B. Severino Reyes"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Balagtasan, Karagatan, Duplo, at mga Awiting Bayan",
    pdfPageRef: "PDF Page 18",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Balagtasan",
        content: "Patulang pagtatalo na higit na nakilala sa pagtangkilik sa Sisne ng Panginay."
      },
      {
        type: "table",
        heading: "Mga Halimbawang Tanong sa Balagtasan",
        tableData: {
          headers: ["Tanong", "Sagot"],
          rows: [
            ["Sino ang kinilala bilang Hari ng Balagtasan? (A. Francisco Balagtas B. Florentino Collantes C. Jose Corazon De Jesus D. Jose dela Cruz)", "C. Jose Corazon De Jesus"],
            ["Ano ang anyo ng balagtasan ng mga Ilokano? (A. Batutian B. Crisotan C. Duplo D. Bukanegan)", "D. Bukanegan"]
          ]
        }
      },
      {
        type: "text",
        heading: "Karagatan",
        content: "Batay sa alamat ng singsing ng isang prinsesa na naihulog niya sa dagat sa hangarin nitong mapangasawa ang kasintahang mahirap."
      },
      {
        type: "text",
        heading: "Duplo",
        content: "Mimetikong larong ginagawa kapag may lamay o pasiyam upang aliwin ang mga namatayan — isang tagisan ng talino sa pamamagitan ng pagtula ng mga Bilyaka at Bilayako."
      },
      {
        type: "numbered_list",
        heading: "Mga Awiting Bayan",
        items: [
          "1. Oyayi/Hele — pagpapatulog ng bata",
          "2. Kundiman at Balitaw — pag-ibig",
          "3. Diona — panliligaw o kasal",
          "4. Dung-aw — pagdadalamhati o pagluluksa sa patay",
          "5. Talindaw — pangingisda",
          "6. Salagintok — pakikipagkaibigan",
          "7. Sambotani — tagumpay",
          "8. Umbay — paglilibing"
        ]
      }
    ]
  },
  {
    pageNumber: 27,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Akdang Tuluyan at Akdang Patula (Para sa Sariling Pag-aaral)",
    pdfPageRef: "PDF Page 18-19",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Para sa Sariling Pag-aaral / Pagbabalik-aral",
        content: "Ang sumusunod na listahan ay para sa self-study/self-review lamang."
      },
      {
        type: "numbered_list",
        heading: "Akdang Tuluyan",
        items: [
          "1. Pabula", "2. Parabula", "3. Alamat", "4. Maikling Kuwento", "5. Anekdota",
          "6. Talumpati", "7. Sanaysay", "8. Dula", "9. Balita", "10. Kasaysayan",
          "11. Talambuhay", "12. Nobela", "13. Mitolohiya", "14. Ulat"
        ]
      },
      {
        type: "bullet_list",
        heading: "Akdang Patula",
        items: [
          "A. Tulang Pasalaysay — naglalarawan ng mahahalagang tagpo o pangyayari sa buhay (kabiguan sa pag-ibig, suliranin at panganib sa pakikidigma, o kagitingan ng mga bayani). Halimbawa: Epiko, Awit at Korido, Balad.",
          "B. Tulang Liriko — naglalahad ng masidhing damdamin, imahinasyon, at karanasan ng tao, kadalasang inaawit. Halimbawa: Awiting Bayan, Pastoral, Soneto, Elehiya, Dalit, Oda.",
          "C. Tulang Padulaan — tulang sinadyang isulat upang itanghal sa entablado. Halimbawa: Trahedya, Komedya, Melodrama, Parsa, Saynete, Zarzuela, Moro-moro, Senakulo, Tibag, Panunuluyan.",
          "D. Tulang Patnigan — tula ng pagtatalo, pangangatwiran, at tagisan ng talino. Halimbawa: Karagatan, Duplo, Balagtasan."
        ]
      }
    ]
  },
  {
    pageNumber: 28,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Mga Bantog na Manunulat ng Panitikang Pilipino (Para sa Sariling Pag-aaral)",
    pdfPageRef: "PDF Page 19-20",
    readTime: "5 min read",
    sections: [
      {
        type: "table",
        heading: "Mga Bantog na Manunulat at Kanilang mga Akda",
        tableData: {
          headers: ["Manunulat (Sagisag-Panulat)", "Mga Kilalang Akda / Katangian"],
          rows: [
            ["Jose Rizal (Laong-Laan/Dimasalang)", "Noli Me Tangere; El Filibusterismo; Filipinas Dentro de Cien Años; Sobre La Indolencia de los Filipinos; Sa Mga Kababayang Dalaga sa Malolos; Mi Ultimo Adios"],
            ["Marcelo H. del Pilar (Dolores Manapat; Pupdoh; Piping Dilat; Plaridel)", "Kaiingat Kayo; Dasalan at Tocsohan; Ang Cadaquilaan ng Diyos; Sagot ng Espanya sa Hibik ng Pilipinas"],
            ["Graciano Lopez-Jaena", "Fray Botod; La Hija del Fraile"],
            ["Jose Maria Panganiban (Jomapa)", "—"],
            ["Mariano Ponce (Naning; Tikbalang; Kalipulako)", "—"],
            ["Isabelo de los Reyes", "Nagtatag ng Iglesia Filipina Independiente"],
            ["Pedro Paterno", "Ninay — kauna-unahang 'nobelang panlipunan' sa wikang Kastila na sinulat ng isang Pilipino"],
            ["Pascual Poblete", "Ama ng Pahayagang Tagalog"],
            ["Apolinario Mabini", "'Utak ng Himagsikan'"],
            ["Andres Bonifacio", "May-akda ng 'Pag-ibig sa Tinubuang Lupa'; kinilalang 'Ama ng Himagsikan'"],
            ["Lope K. Santos", "Nobelista at mambabalarila; 'Ama ng Balarilang Tagalog'"],
            ["Jose Corazon de Jesus ('Huseng Batute')", "'Makata ng Puso/Pag-ibig'; may-akda ng 'Ang Punong Kahoy'"],
            ["Amado V. Hernandez", "'Makata ng mga Manggagawa'"],
            ["Severino Reyes", "'Ama ng Dulang Tagalog'; sumulat ng Mga Kuwento ni Lola Basyang"],
            ["Aurelio Tolentino", "'Ama ng Dulang Kapampangan'"],
            ["Juan Crisostomo Sotto", "'Ama ng Panitikang Kapampangan'; sumulat ng Miss Pathupats"],
            ["Zoilo Galang", "Sumulat ng unang nobela sa Ingles, 'A Child of Sorrow'"],
            ["Alejandro G. Abadilla (AGA)", "Kinikilalang 'Ama ng Modernistang Pagtula sa Tagalog'; sikat sa 'Ako ang Daigdig'"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 29,
    dayNumber: 3,
    dayTitle: "Day 3: Kayarian ng Salita, Pangungusap, at Panitikan",
    topicTitle: "Bonus Questions (Panitikan)",
    pdfPageRef: "PDF Page 20",
    readTime: "5 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Mga Bonus na Tanong",
        items: [
          "1. Alin sa mga sumusunod ang sinulat ni Rizal? A. Kaiingat Kayo B. Dasalan at Tocsohan C. Filipinas Dentro De Cien Años D. Sagot ng Espanya sa Hibik ng Pilipinas",
          "2. Alin sa mga sumusunod ang HINDI kabilang sa akda ng mga tinukoy na manunulat? A. Noli Me Tangere B. Sagot ng Espanya sa Hibik ng Pilipinas C. La Hija Del Fraile D. Ako ang Daigdig",
          "3. Ang akdang Ninay ay sinulat ni ___________. A. Apolinario Mabini B. Jose Corazon De Jesus C. Pedro Paterno D. Jose Abad Santos",
          "4. Ang pen name na JOMAPA ay tumutukoy kanino? A. Lope K. Santos B. Amado Hernandez C. Jose Maria Panganiban D. Graciano Lopez-Jaena",
          "5. Sino ang kinikilala bilang Ama ng Panitikang Kapampangan? A. Juan Crisostomo Soto B. Zoilo Galang C. Mariano Ponce D. Alejandro G. Abadilla",
          "6. Kauna-unahang 'nobelang panlipunan' sa wikang Kastila na sinulat ng isang Pilipino. A. Nena at Neneng B. Urbana at Feliza C. Doctrina Christiana D. Ninay",
          "7. Alin sa sumusunod ang HINDI akda ni Marcelo H. del Pilar? A. Dasalan at Tocsohan B. Kaiingat Kayo C. Filipinas Dentro de Cien Años D. Sagot ng Espanya sa Hibik ng Pilipinas",
          "8. 'Ako ang daigdig, Ako ang tula, Ako ang daigdig, Ang tula!' — Ito ay akda ni _________. A. Jose Corazon De Jesus B. Francisco Balagtas C. Alejandro Abadilla D. Amado Hernandez",
          "9. Aling tula sa pangkat ang naiiba? A. Pastoral B. Dalit C. Oda D. Balad",
          "10. 'Ang laki sa layaw karaniwa'y hubad, Sa bait at muni't sa hatol ay salat; Masaklap na bunga ng maling paglingap, Habag ng magulang sa irog na anak' — Sa aling uri ng akdang patula hinango ang saknong na ito? A. Korido B. Awit C. Haiku D. Oda"
        ]
      },
      {
        type: "table",
        heading: "Susing Sagot",
        tableData: {
          headers: ["Bilang", "Sagot"],
          rows: [
            ["1", "C"], ["2", "D"], ["3", "C"], ["4", "C"], ["5", "A"],
            ["6", "C"], ["7", "C"], ["8", "C"], ["9", "C"], ["10", "D"]
          ]
        }
      }
    ]
  }
];