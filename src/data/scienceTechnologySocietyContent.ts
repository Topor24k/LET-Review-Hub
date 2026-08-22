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

export const SCIENCE_TECHNOLOGY_AND_SOCIETY_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: GENED SCIENCE — LIFE SCIENCES (BIOLOGY)
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Biology, Hierarchy of Life & Cytology",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Biology",
        content: "From two Greek words \"bios\" and \"logos.\" Literally means the \"study of life.\""
      },
      {
        type: "numbered_list",
        heading: "I. Hierarchy of Life",
        items: [
          "Atom", "Molecule", "Organelle", "Cell", "Tissue", "Organ", "System", "Organism"
        ]
      },
      {
        type: "text",
        heading: "II. Cytology — the Study of Cells",
        content: "Two types of cells make up every organism."
      },
      {
        type: "comparison",
        heading: "Prokaryotic vs. Eukaryotic Cells",
        items: [
          "Prokaryotic cells (Bacteria and Archaebacteria): do not contain a nucleus.",
          "Eukaryotic cells (Protist, Fungi, Plant, Animal): contain a true nucleus. Some cells have cilia (hair-like structures) or a flagellum (tail)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Cell Discovery & Viruses",
        items: [
          "Robert Hooke: discovered the cell from a cork made from the bark of an oak tree, and coined the term \"cell\" (cellulae), meaning small room.",
          "Robert Brown: discovered the cell's nucleus.",
          "Virus: not living, an inert chemical; has a capsid — a protein shell that protects the virus' DNA or RNA."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Taxonomy — Classification of Organisms",
    pdfPageRef: "PDF Page 1-2",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Taxonomy is the classification and naming of organisms."
      },
      {
        type: "numbered_list",
        heading: "8 Levels of Taxonomic Classification (Dear King Philip, Come Over For Good Spaghetti)",
        items: [
          "Domain", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"
        ]
      },
      {
        type: "callout",
        heading: "Carolus Linnaeus",
        content: "Father of modern Taxonomy. Proposed the binomial nomenclature."
      },
      {
        type: "table",
        heading: "Kingdoms and Domains",
        tableData: {
          headers: ["Domain", "Kingdom", "Description / Examples"],
          rows: [
            ["Archaea", "Archaebacteria", "Live in various places, some in the most severe environments. Examples: Methanogens, Halophiles, Thermophiles."],
            ["Bacteria", "Eubacteria (Monera)", "Referred to as the true bacteria, usually called the \"bacteria\" group. Example: Streptococcus."],
            ["Eukarya", "Protista", "Examples: Diatoms, algae (green, golden, brown, red), Entamoeba histolytica (Amoebiasis), Plasmodium (Malaria)."],
            ["Eukarya", "Fungi", "Examples: Molds, mushroom, yeasts, microsporidia."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Kingdom Animalia — Invertebrates I",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Kingdom Animalia has two major groups: invertebrates (no backbones) and vertebrates (have backbones)."
      },
      {
        type: "bullet_list",
        heading: "a. Cnidaria",
        items: [
          "Have stinging cells (nematocyst). Example: jellyfish, coral."
        ]
      },
      {
        type: "bullet_list",
        heading: "b. Arthropoda",
        items: [
          "Jointed legs; segmented bodies.",
          "Insects: mosquito, butterflies.",
          "Crustaceans: crab, shrimps, lobsters.",
          "Arachnid: spiders.",
          "Also includes centipedes and millipedes.",
          "Molting (Ecdysis): insects shed off their old cuticle to grow in size."
        ]
      },
      {
        type: "bullet_list",
        heading: "c. Nematoda & d. Platyhelminthes",
        items: [
          "Nematoda: roundworms, unsegmented. Example: pinworm, Ascaris, hookworm, filarial worm.",
          "Platyhelminthes: flatworms with soft tissues, unsegmented. Example: flukes, tapeworms, planaria."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Kingdom Animalia — Invertebrates II & Chordata",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "e. Annelida, f. Mollusca, g. Echinodermata",
        items: [
          "Annelida: segmented worms. Example: leech, earthworms. Earthworms are hermaphroditic — both male and female organs are found in the same worm. Leeches promote anticoagulation.",
          "Mollusca: soft bodies (usually with shells). Example: squids, clams, snails, octopi.",
          "Echinodermata: spiny body. Example: sea star, sea urchin, sand dollars, sea cucumber, brittle star."
        ]
      },
      {
        type: "table",
        heading: "h. Chordata — Vertebrate Classes",
        tableData: {
          headers: ["Class", "Traits", "Examples"],
          rows: [
            ["Fish (Pisces)", "Scales, gills, and fins", "Shark, lampreys"],
            ["Amphibians (Amphibia)", "\"Two lives\"", "Frog, salamander"],
            ["Reptiles (Reptilia)", "\"Creeping\"; eggs, scaly bodies", "Crocodile, snake, turtle"],
            ["Birds (Aves)", "2 scaly legs, wings, feathers", "Penguin, ostrich"],
            ["Mammals (Mammalia)", "Mammary glands, hair, milk", "Human, platypus, marsupial"]
          ]
        }
      },
      {
        type: "text",
        content: "Walrus: a marine mammal with long ivory tusks that lives in an arctic environment."
      },
      {
        type: "text",
        heading: "Kingdom Plantae",
        content: "Two big groups: those which do not have tissues to transport water and food (nonvascular), and those that have this transport system (vascular)."
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Botany — Vascular Plants & Seed Types",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Botany is the study of plants."
      },
      {
        type: "bullet_list",
        heading: "Vascular Tissue",
        items: [
          "Vascular plants have xylem and phloem.",
          "Xylem: conducts most of the water and minerals.",
          "Phloem: distributes sugars and other organic products."
        ]
      },
      {
        type: "comparison",
        heading: "Seedless vs. Seed Vascular Plants",
        items: [
          "Seedless vascular plants: Example — ferns.",
          "Seed vascular plants (Angiosperms): flowering plants; the most abundant and widely distributed; bears fruit to protect the seed.",
          "Seed vascular plants (Gymnosperms): cone-bearing plants with \"naked seeds\" not enclosed by fruit. Example — conifers."
        ]
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Plant Reproduction — Sexual Reproduction in Angiosperms",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "The Flower",
        content: "The flower is the reproductive organ of a flowering plant. Pollination is the transfer of pollen grains from the anther to the stigma of the flower."
      },
      {
        type: "comparison",
        heading: "Cross-Pollination vs. Self-Pollination",
        items: [
          "Cross-pollination: from one plant to another plant.",
          "Self-pollination: pollination from the same flower or plant."
        ]
      },
      {
        type: "table",
        heading: "Parts of a Flower",
        tableData: {
          headers: ["Part", "Description"],
          rows: [
            ["Sepals (Calyx)", "Protect the flower bud before it opens."],
            ["Petals (Corolla)", "Often attract a particular pollinator."],
            ["Stamen (male part)", "Composed of the anther, filament, and pollen grains."],
            ["Carpel / Pistil (female part)", "Composed of the stigma, style, and ovary — the ovary becomes the fruit and the ovule becomes the seed."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: GenEd Science — Life Sciences",
    topicTitle: "Plant Reproduction — Asexual Reproduction",
    pdfPageRef: "PDF Page 3-4",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Vegetative (Asexual) Reproduction Structures",
        tableData: {
          headers: ["Structure", "Description", "Example"],
          rows: [
            ["Runners (Stolons)", "Horizontal stems; new roots and shoots develop at the node.", "Strawberry, Bermuda grass, bamboo grass"],
            ["Tubers", "Underground stems that store food; the \"eyes\" are the stem's nodes, each containing a cluster of buds.", "Potato"],
            ["Rhizomes", "Grow as horizontal underground stems from plant to plant.", "Ginger"],
            ["Bulbs", "Shortened, compressed underground stems.", "Onion, garlic"],
            ["Corms", "Underground stems.", "Taro (Colocasia)"],
            ["Underground roots", "Roots that store food underground.", "Carrots, sweet potato (camote), cassava"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "VI. Asexual Reproduction in Other Organisms",
        items: [
          "Budding: the parent organism produces offspring by growing a replica in the form of an outgrowth called a bud. Example: Hydra, Yeast.",
          "Fragmentation: separated pieces of the parent organism can develop into an individual. Example: Sea star, Flatworms.",
          "Binary Fission: reproduction method found in bacteria."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 2: HUMAN SYSTEMS, ECOLOGY & GENETICS
  // ==========================================
  {
    pageNumber: 8,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "VII. The Digestive System",
    pdfPageRef: "PDF Page 4",
    readTime: "3 min read",
    sections: [
      {
        type: "comparison",
        heading: "Physical vs. Chemical Digestion",
        items: [
          "Physical digestion: chewing of food in the mouth.",
          "Chemical digestion: breakdown of large food molecules by enzymes."
        ]
      },
      {
        type: "bullet_list",
        heading: "Path of Digestion",
        items: [
          "Mouth → Pharynx (Throat) → Esophagus (passes food from throat to stomach) → Stomach, where food mixes with gastric juices to form chyme.",
          "Small intestine: the final place of digestion; has villi (finger-like structures).",
          "Large intestine (colon): absorbs water, produces Vitamin K, and ends in the rectum.",
          "Anus: the passageway for defecation."
        ]
      },
      {
        type: "bullet_list",
        heading: "Accessory Organs",
        items: [
          "Salivary gland.",
          "Liver: the largest internal organ in the body; creates bile (for emulsification of fats).",
          "Gall bladder: stores the bile.",
          "Pancreas: secretes enzymes for digestion of food."
        ]
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Circulatory System & Respiratory System",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Circulatory System — Transports Blood",
        items: [
          "Heart: pumps blood.",
          "Vein: brings blood back to the heart.",
          "Artery: brings blood away from the heart.",
          "Blood: contains blood cells (RBC, WBC, Platelets) and plasma.",
          "RBC (red corpuscles) is red because of hemoglobin.",
          "Fibrinogen: a protein found in plasma responsible for blood clotting.",
          "Vitamin K and Calcium are needed for blood clotting; Vitamin B12 is needed for RBC production."
        ]
      },
      {
        type: "bullet_list",
        heading: "Respiratory System — Supplies Oxygen, Releases CO₂",
        items: [
          "Inspiration: inhaling, takes oxygen in. Expiration: exhaling, releases CO₂ out.",
          "Nose: warms and moistens air, traps dirt.",
          "Pharynx (throat): passageway for both air and food.",
          "Epiglottis: prevents the entrance of food into the trachea.",
          "Larynx: the voice box — vocal cords are found inside it; forms the Adam's apple in males.",
          "Trachea: the windpipe.",
          "Lungs: the main organ of the respiratory system."
        ]
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Endocrine, Reproductive & Nervous Systems",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "Endocrine System",
        content: "Regulates the body and maintains homeostasis through hormones. Example: the pancreas releases insulin."
      },
      {
        type: "bullet_list",
        heading: "Reproductive System",
        items: [
          "Fertilization: the union of sex cells (gametes) — sperm and egg (ovum) — forming a zygote.",
          "In vitro fertilization: sperm and ovum meet inside a test tube.",
          "In vivo fertilization: sperm and ovum meet inside the body."
        ]
      },
      {
        type: "bullet_list",
        heading: "Nervous System",
        items: [
          "Controls sensory and motor functions, memory, and emotions via the spinal cord and brain.",
          "Neurons: the basic unit of the nervous system."
        ]
      },
      {
        type: "table",
        heading: "Brain Parts",
        tableData: {
          headers: ["Brain Part", "Function"],
          rows: [
            ["Cerebrum", "Voluntary activities; largest; intelligence, learning, judgement."],
            ["Cerebellum", "Involuntary; balance, coordination."],
            ["Brain Stem (Midbrain, Pons, Medulla oblongata)", "Connects brain and spinal cord; involuntary, life-sustaining activities — breathing, heart rate, blood pressure, swallowing."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Skeletal, Muscular & Excretory Systems",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Skeletal System",
        items: [
          "Protects and supports body parts.",
          "Blood cell production occurs in bone marrow.",
          "Stores calcium and phosphorous.",
          "There are 206 bones in an adult."
        ]
      },
      {
        type: "bullet_list",
        heading: "Muscular System — Three Types of Muscular Tissue",
        items: [
          "Smooth muscle: involuntary (found in stomach and intestines).",
          "Cardiac muscle: involuntary (found ONLY in the heart).",
          "Skeletal muscle: voluntary (found in our limbs)."
        ]
      },
      {
        type: "table",
        heading: "Excretory System — Osmosis Across the Cell Membrane",
        tableData: {
          headers: ["Solution Type", "Water Movement", "Clue"],
          rows: [
            ["Hypotonic", "Water comes inside the cell", "Swell, Burst, Lysed"],
            ["Isotonic", "No net movement of water", "—"],
            ["Hypertonic", "Water goes outside the cell", "Shrink, Shrivel, Dehydrated"]
          ]
        }
      },
      {
        type: "text",
        content: "The kidney is the main excretory organ and produces urine."
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Integumentary System & Ecology",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Integumentary System",
        items: [
          "Serves as the body covering.",
          "Protects us from UV rays.",
          "Composed of nail, skin, and hair — skin is the largest organ of the human body."
        ]
      },
      {
        type: "callout",
        heading: "VIII. Ecology — the Study of Ecosystems",
        content: "An ecosystem is the relationship between living (biotic) things and non-living (abiotic) things."
      },
      {
        type: "table",
        heading: "Biotic Components of an Ecosystem",
        tableData: {
          headers: ["Component", "Description"],
          rows: [
            ["Producers (autotrophs)", "Can make their own food. Example: Plants."],
            ["Consumers (heterotrophs)", "Obtain food from other organisms — herbivores (plant eaters), carnivores (feed on other animals), omnivores (feed on both plants and animals), scavengers (feed on decaying and necrotic matter, e.g. vulture)."],
            ["Decomposers/Saprophytes", "Break down dead organisms. Example: bacteria, fungi."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Ecological Relationships & Genetics",
    pdfPageRef: "PDF Page 6",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Ecological Relationships",
        items: [
          "Competition.",
          "Predation.",
          "Symbiosis — Mutualism (+, +), Parasitism (+, -), Commensalism (+, neither harmed nor benefited)."
        ]
      },
      {
        type: "callout",
        heading: "IX. Genetics — the Study of Genes and Heredity",
        content: "Gregor Mendel is the Father of Genetics."
      },
      {
        type: "comparison",
        heading: "Phenotype vs. Genotype",
        items: [
          "Phenotype: the physical appearance of an organism (e.g., Green, Tall, Short, Straight, Kinky).",
          "Genotype: the genes of a specific character (e.g., Gg, gg, HH, hh) — Homozygous (HH, TT, tt) or Heterozygous (Hh, Tt)."
        ]
      },
      {
        type: "bullet_list",
        heading: "Mendel's Law of Dominance",
        items: [
          "Dominant gene (working gene): prevents the expression of the other, recessive gene.",
          "Recessive gene (non-working gene): its expression is masked by the presence of a dominant gene; it will only show phenotypically if present as a homozygous genotype.",
          "Example — S (Straight, dominant), s (Kinky, recessive): SS = Straight, Ss = Straight, ss = Kinky."
        ]
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 2,
    dayTitle: "Day 2: Human Systems",
    topicTitle: "Homologous & Analogous Structures; Biotechnology",
    pdfPageRef: "PDF Page 6",
    readTime: "3 min read",
    sections: [
      {
        type: "comparison",
        heading: "X. Homologous vs. Analogous Structures",
        items: [
          "Homologous organs: have similar structure but different functions. Example: human arm, cat leg, seal flipper, bat wing.",
          "Analogous organs: have similar functions but different structures. Example: butterfly's wings and bat's wings."
        ]
      },
      {
        type: "text",
        heading: "Biotechnology",
        content: "The modification of biological processes through human intervention."
      },
      {
        type: "bullet_list",
        heading: "Applications of Biotechnology",
        items: [
          "Genetic engineering: producing GMOs (genetically modified organisms) or transgenic organisms.",
          "Bioremediation: the use of biotechnology to solve environmental problems. Example: oil-eating bacteria used in cleaning up oil spills."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 3: GENED SCIENCE — PHYSICAL SCIENCES
  // (ASTRONOMY & EARTH SCIENCE)
  // ==========================================
  {
    pageNumber: 15,
    dayNumber: 3,
    dayTitle: "Day 3: GenEd Science — Physical Sciences",
    topicTitle: "Astronomy — Planetary Motions & Inner Planets",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Astronomy is the study of everything in the universe."
      },
      {
        type: "bullet_list",
        heading: "I. Planetary Motions",
        items: [
          "Revolution: all planets revolve around the sun in the same direction — eastward, from west to east, counterclockwise.",
          "Rotation: some planets rotate (spin on their axis) in the same direction — eastward, from west to east, counterclockwise — except Venus and Uranus."
        ]
      },
      {
        type: "table",
        heading: "Inner Planets / Terrestrial Planets",
        tableData: {
          headers: ["Planet", "Key Facts"],
          rows: [
            ["1. Mercury", "Nearest planet to the sun; fastest revolving/orbiting planet."],
            ["2. Venus", "Brightest planet in our solar system; hottest planet; Earth's closest neighboring planet."],
            ["3. Earth", "Shape is an oblate spheroid."],
            ["4. Mars", "The \"Red Planet\"; two small moons, Phobos and Deimos."]
          ]
        }
      },
      {
        type: "text",
        heading: "Asteroid Belt",
        content: "Located between Mars and Jupiter."
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 3,
    dayTitle: "Day 3: GenEd Science — Physical Sciences",
    topicTitle: "Astronomy — Outer Planets & Pluto",
    pdfPageRef: "PDF Page 7",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Outer Planets / Gas Planets / Jovian Planets",
        tableData: {
          headers: ["Planet", "Key Facts"],
          rows: [
            ["5. Jupiter", "Largest planet; 92 moons; 4 Galilean moons — Io, Europa, Ganymede, Callisto."],
            ["6. Saturn", "Has spectacular rings made of ice, rocks, and dust; has 83 moons."],
            ["7. Uranus", "Rotates in a different direction than most planets."],
            ["8. Neptune", "The outermost gas giant."]
          ]
        }
      },
      {
        type: "callout",
        heading: "Pluto — Dwarf Planet (1930–2006)",
        content: "Found in the Kuiper belt, with 5 moons: Charon, Nix, Hydra, Kerberos, and Styx."
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 3,
    dayTitle: "Day 3: GenEd Science — Physical Sciences",
    topicTitle: "Earth's Moon — Phases, Eclipses & Tides",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "II. Earth's Moon (Luna)",
        items: [
          "1/6 of the Earth's gravity; ¼ of the Earth's size.",
          "The rotational rate matches the rate of revolution, so the same side of the moon always faces the Earth (Tidal lock)."
        ]
      },
      {
        type: "numbered_list",
        heading: "8 Phases of the Moon",
        items: [
          "New moon", "Waxing crescent", "First quarter", "Waxing gibbous",
          "Full moon", "Waning gibbous", "Last quarter", "Waning crescent"
        ]
      },
      {
        type: "comparison",
        heading: "Lunar vs. Solar Eclipse",
        items: [
          "Lunar Eclipse (S-E-M): the Earth's shadow falls on the Moon.",
          "Solar Eclipse (S-M-E): the Moon's shadow falls on the Earth."
        ]
      },
      {
        type: "bullet_list",
        heading: "Tides",
        items: [
          "Spring tide: highest tide and lowest tide.",
          "Neap tide: lower high tides and higher low tides.",
          "Perigee: moon closest to the Earth.",
          "Apogee: moon farthest from the Earth."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 3,
    dayTitle: "Day 3: GenEd Science — Physical Sciences",
    topicTitle: "Lunar Missions, the Sun & Other Objects in the Universe",
    pdfPageRef: "PDF Page 7-8",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Lunar Missions",
        content: "Apollo 11 was the first successful manned mission to the Moon. Neil Armstrong and Buzz Aldrin were the first men on the Moon (July 16, 1969, 8:18 PM) during the Apollo 11 mission."
      },
      {
        type: "bullet_list",
        heading: "III. The Sun",
        items: [
          "A medium-sized star that has a white color.",
          "Nuclear fusion: H + H = He + energy.",
          "Perihelion: when the Sun is closest to the Earth.",
          "Aphelion: when the Sun is farthest from the Earth."
        ]
      },
      {
        type: "text",
        heading: "IV. Other Objects in the Universe",
        content: "Asteroid → Meteoroid → Meteor → Meteorite: a meteoroid is small debris chipped off an asteroid, a meteor is what it's called when it enters the atmosphere, and a meteorite is what it's called when it hits the land."
      },
      {
        type: "bullet_list",
        heading: "Comets & Stars",
        items: [
          "Comets: small bodies of rock, iron, ice, methane, ammonia, and carbon dioxide that orbit the sun; the tail always points away from the sun. Halley's comet appears every 76 years.",
          "Star: a ball of hydrogen and helium — blue is the hottest star color, red is the coolest.",
          "Constellation: a group of stars forming a recognizable pattern. Example: Ursa Minor, Orion.",
          "Proxima Centauri is the nearest star; Sirius is the brightest star; Polaris (of Ursa Minor) is the Northern Star; Stephenson 2-18 is the largest known star."
        ]
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 3,
    dayTitle: "Day 3: Earth Science",
    topicTitle: "Geologic Time Scale & the Lithosphere",
    pdfPageRef: "PDF Page 8",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "I. Geologic Time Scale",
        items: [
          "Triassic Period (248–213 m.y.a.): appearance of the first dinosaurs and mammals.",
          "Jurassic Period (213–145 m.y.a.): the Age of Dinosaurs."
        ]
      },
      {
        type: "table",
        heading: "II. Lithosphere — The Earth's Layers",
        tableData: {
          headers: ["Layer", "Description"],
          rows: [
            ["Crust", "Earth's surface, outermost layer — includes oceanic crust and continental crust."],
            ["Mantle", "Rocky, made up of Si, O, Fe, Mg, Ca. (Lithosphere = crust + upper mantle)"],
            ["Core", "Innermost central part of the Earth — the liquid outer core is primarily iron and nickel; the solid inner core is primarily iron."]
          ]
        }
      },
      {
        type: "callout",
        heading: "Continental Drift Theory (Alfred Wegener)",
        content: "Proposed Pangaea, a super continent. The evidence includes the jigsaw-like shapes of South America and Africa."
      }
    ]
  },
  {
    pageNumber: 20,
    dayNumber: 3,
    dayTitle: "Day 3: Earth Science",
    topicTitle: "Earthquakes, Minerals & Rocks",
    pdfPageRef: "PDF Page 8-9",
    readTime: "5 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Earthquakes",
        items: [
          "An earthquake is any movement of the ground due to volcanic eruption or tectonic plate movement.",
          "Sequence: Foreshock – Mainshock – Aftershock.",
          "Focus: the point of origin where the fault movement happens. Epicenter: the place directly above the focus.",
          "Magnitude: measurement of energy released, via the Richter Scale (Charles Richter).",
          "Intensity: the damage produced and reaction of people, via the Mercalli Intensity Scale."
        ]
      },
      {
        type: "text",
        heading: "Minerals",
        content: "A mineral is a naturally occurring inorganic crystalline substance composed of an ordered arrangement of atoms with a specific chemical composition. Hardness refers to resistance to scratching."
      },
      {
        type: "numbered_list",
        heading: "Moh's Scale of Hardness (1–10)",
        items: [
          "1. Talc", "2. Gypsum", "3. Calcite", "4. Fluorite", "5. Apatite",
          "6. Orthoclase", "7. Quartz", "8. Topaz", "9. Corundum", "10. Diamond"
        ]
      },
      {
        type: "table",
        heading: "Rock Types",
        tableData: {
          headers: ["Rock Type", "Formation"],
          rows: [
            ["Igneous", "Formed from hardened magma or lava (crystallization)."],
            ["Sedimentary", "Formed by layers of sediments. Includes coal: peat (decayed vegetation) → lignite (soft brown, lowest rank) → bituminous (black coal) → anthracite (dark black, highest heat value)."],
            ["Metamorphic", "Formed when rocks are subjected to heat and pressure."]
          ]
        }
      },
      {
        type: "text",
        content: "Weathering is the breaking of rocks. Erosion is the removal of solids (particles), usually via transport by wind and water."
      }
    ]
  },
  {
    pageNumber: 21,
    dayNumber: 3,
    dayTitle: "Day 3: Earth Science",
    topicTitle: "III. Hydrosphere & IV. Atmosphere",
    pdfPageRef: "PDF Page 9",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "III. Hydrosphere — Five Oceans (PAISA)",
        items: [
          "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean (Antarctic)", "Arctic Ocean"
        ]
      },
      {
        type: "text",
        heading: "IV. Atmosphere",
        content: "Meteorology deals with the study of the atmosphere."
      },
      {
        type: "table",
        heading: "Layers of the Atmosphere",
        tableData: {
          headers: ["Layer", "Description"],
          rows: [
            ["Troposphere", "The lowermost layer of the atmosphere."],
            ["Stratosphere", "Contains the Ozone (O₃) layer, which protects us against UV rays. CFCs (Chlorofluorocarbons) destroy the ozone layer and are replaced by alternative chemicals called HFCs (Hydrofluorocarbons)."],
            ["Mesosphere", "The coldest layer; meteors burn up here."],
            ["Thermosphere", "The hottest layer; auroras are observed here (australis = southern, borealis = northern)."],
            ["Exosphere", "The outermost layer of the atmosphere."]
          ]
        }
      },
      {
        type: "text",
        content: "The Magnetosphere is the Earth's magnetic field, which protects the Earth from dangerous charged particles like solar flares and solar winds."
      }
    ]
  },
  {
    pageNumber: 22,
    dayNumber: 3,
    dayTitle: "Day 3: Earth Science",
    topicTitle: "Storms, Monsoons & Human Effects on the Environment",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "comparison",
        heading: "Storm Names by Ocean",
        items: [
          "Typhoon: Pacific Ocean.",
          "Cyclone: Indian Ocean.",
          "Hurricane: Atlantic Ocean."
        ]
      },
      {
        type: "text",
        content: "Clouds are made of water and are classified based on their shape and altitude. Cumulonimbus clouds bring thunderstorms."
      },
      {
        type: "comparison",
        heading: "Philippine Monsoons",
        items: [
          "Amihan: Northeast Monsoon, September to June — cold and dry.",
          "Habagat: Southwest Monsoon, July to August — warm and humid."
        ]
      },
      {
        type: "bullet_list",
        heading: "V. Human Effects on the Environment",
        items: [
          "Acid Rain: caused by NOₓ and SOₓ.",
          "Greenhouse Effect: acts as a thermal blanket — accumulation of CO₂ and other gases traps heat from the sun.",
          "Global Warming: caused by an increase of CO₂ in the atmosphere, resulting in a rapid increase in temperature.",
          "Point Source Pollution: source is easily identified — pipelines from large factories, septic tanks, etc.",
          "Non-point Source Pollution: source cannot be identified or comes from many sources.",
          "Eutrophication: algal bloom due to high nutrients in water; oxygen concentration is eventually reduced due to decomposition of dead algae."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 4: BASIC CHEMISTRY & PHYSICS
  // ==========================================
  {
    pageNumber: 23,
    dayNumber: 4,
    dayTitle: "Day 4: Basic Chemistry",
    topicTitle: "Matter, Elements & the Periodic Classification",
    pdfPageRef: "PDF Page 10-11",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "I–III. Atom, Non-Matter & Matter",
        items: [
          "Atom: the building block of matter, with protons (+), neutrons (0), and electrons (−).",
          "Non-Matter: does not occupy space and does not have mass.",
          "Matter: anything that occupies space (volume) and has mass.",
          "Pure Substance: a classification of matter made up of all the same type of atom or molecule, exhibiting exact properties and composition."
        ]
      },
      {
        type: "table",
        heading: "Classification of Elements",
        tableData: {
          headers: ["Type", "Properties", "Examples"],
          rows: [
            ["Metals", "Usually solid, good conductors of heat and electricity (except mercury and gallium, which are liquid).", "Copper, iron"],
            ["Non-metals", "Poor conductors of heat and electricity.", "Oxygen, carbon, bromine, sulfur"],
            ["Metalloids", "Have both metal and non-metal properties.", "—"]
          ]
        }
      },
      {
        type: "text",
        content: "Elements are substances made up of only one type of atom and cannot be broken down by chemical processes into simpler substances. Examples: oxygen gas, hydrogen gas, sodium metal, iodine crystals, pure gold. The 118th element is Oganesson (Og)."
      }
    ]
  },
  {
    pageNumber: 24,
    dayNumber: 4,
    dayTitle: "Day 4: Basic Chemistry",
    topicTitle: "Compounds, Chemical Bonding & Mixtures",
    pdfPageRef: "PDF Page 11",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        heading: "Compounds",
        content: "Substances formed by the chemical combination of two or more types of atoms; can be broken down by chemical processes into simpler substances. Examples: Water (H₂O), Carbon dioxide (CO₂), table sugar (C₁₂H₂₂O₁₁), table salt (NaCl). Alcohol is a class of organic compound characterized by a hydroxyl bonded to an alkyl group."
      },
      {
        type: "comparison",
        heading: "Chemical Bonding",
        items: [
          "Covalent Bonds: bonding of two or more non-metals. Examples: H₂O, CH₄, CO₂.",
          "Ionic Bonds: bonding between metals and non-metals. Examples: NaCl (Sodium Chloride), NaF (Sodium Fluoride)."
        ]
      },
      {
        type: "text",
        heading: "Mixtures",
        content: "A mixture is matter consisting of two or more different substances combined without chemical bonding — just a physical combination."
      },
      {
        type: "comparison",
        heading: "Homogeneous vs. Heterogeneous Mixtures",
        items: [
          "Homogeneous Mixture: has a single phase. Example: water + sugar = sugar solution.",
          "Heterogeneous Mixture: components are visually distinguished. Example: salad, gravel, macaroni, soup, cake. A Colloid contains particles that do not settle (e.g., milk, cloud, fog); a Suspension contains larger particles that eventually settle out (e.g., chocolate milk, orange juice)."
        ]
      }
    ]
  },
  {
    pageNumber: 25,
    dayNumber: 4,
    dayTitle: "Day 4: Basic Chemistry",
    topicTitle: "States of Matter & Changes in Matter",
    pdfPageRef: "PDF Page 11-12",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "IV. States of Matter",
        tableData: {
          headers: ["State", "Description"],
          rows: [
            ["Solid", "Definite shape and volume; particles tightly packed with very little energy, vibrating in place."],
            ["Liquid", "Definite volume but no definite shape (takes container shape); particles loosely packed with medium energy, flowing around each other."],
            ["Gas", "No definite volume or shape; particles move freely with lots of energy."],
            ["Plasma", "A very hot, superheated gas of nuclei and electrons — the 4th form of matter."],
            ["BEC (Bose-Einstein Condensate)", "Super cold, at absolute zero temperature."]
          ]
        }
      },
      {
        type: "text",
        heading: "V. Physical Change",
        content: "The chemical composition remains the same; involves only a change in size, shape, or amount, as well as changes in state. Example: tearing of paper, chopping of wood, breaking of rock."
      },
      {
        type: "numbered_list",
        heading: "Changes in State of Matter",
        items: [
          "Freezing: liquid to solid.",
          "Melting: solid to liquid.",
          "Evaporation: liquid to gas.",
          "Condensation: gas to liquid (e.g., formation of clouds, later falling as rain via precipitation).",
          "Sublimation: solid to gas.",
          "Deposition: gas to solid."
        ]
      },
      {
        type: "text",
        heading: "Chemical Change",
        content: "A change in which the chemical composition has been altered, or a chemical reaction has taken place. Example: rusting of iron — metallic iron reacts with oxygen from the atmosphere to form rust."
      }
    ]
  },
  {
    pageNumber: 26,
    dayNumber: 4,
    dayTitle: "Day 4: Basic Chemistry",
    topicTitle: "Types of Chemical Reactions & Acids/Bases",
    pdfPageRef: "PDF Page 12",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "VI. Types of Chemical Reaction",
        tableData: {
          headers: ["Type", "Description", "Pattern"],
          rows: [
            ["1. Synthesis", "A reaction between two or more simple substances to form a single product.", "A + B → AB"],
            ["2. Decomposition", "A single reactant is broken down into two or more products.", "AB → A + B"],
            ["3. Substitution", "A more active element replaces a less active element in a compound.", "AB + C → AC + B"],
            ["4. Double Decomposition", "Interchange of two parts of two substances to form two new substances.", "AB + CD → AD + CB"],
            ["5. Endothermic Reaction", "Needs energy.", "AB + energy → A + B"],
            ["6. Exothermic Reaction", "Releases energy.", "AB → A + B + energy"]
          ]
        }
      },
      {
        type: "bullet_list",
        heading: "VII. Acids and Bases",
        items: [
          "Acids have a pH value below 7.",
          "Bases have a pH value above 7.",
          "A pH value of 7 is neutral."
        ]
      }
    ]
  },
  {
    pageNumber: 27,
    dayNumber: 4,
    dayTitle: "Day 4: Physics",
    topicTitle: "Base Units, Mass vs. Weight & Motion",
    pdfPageRef: "PDF Page 12-13",
    readTime: "4 min read",
    sections: [
      {
        type: "text",
        content: "Physics is the study of matter and energy and their relationship."
      },
      {
        type: "table",
        heading: "I. Base Units",
        tableData: {
          headers: ["Quantity Measured", "Basic Unit", "Symbol"],
          rows: [
            ["Time", "Second", "s"],
            ["Mass", "Grams", "g"],
            ["Distance", "Meter", "m"],
            ["Volume", "Liter or cubic-meter", "L or m³"],
            ["Pressure", "Pascal", "Pa"]
          ]
        }
      },
      {
        type: "comparison",
        heading: "Mass vs. Weight",
        items: [
          "Mass: quantity of matter in an object; measured in kg.",
          "Weight: the pull of gravity; measured in N (Newton)."
        ]
      },
      {
        type: "numbered_list",
        heading: "II. Motion — Newton's Laws of Motion",
        items: [
          "First Law (Law of Inertia): every object continues in its state of rest, or of uniform motion in a straight line, unless acted upon by an unbalanced external force.",
          "Second Law (Law of Acceleration): when enough force is applied, the object will accelerate.",
          "Third Law (Law of Interaction): to every action there is always an equal and opposite reaction — whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first."
        ]
      }
    ]
  },
  {
    pageNumber: 28,
    dayNumber: 4,
    dayTitle: "Day 4: Physics",
    topicTitle: "Energy & Thermodynamics",
    pdfPageRef: "PDF Page 13",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "III. Energy",
        content: "Energy is the capacity to do work."
      },
      {
        type: "comparison",
        heading: "Potential vs. Kinetic Energy",
        items: [
          "Potential Energy: energy at rest — has the potential to fall or move.",
          "Kinetic Energy: energy in motion."
        ]
      },
      {
        type: "text",
        heading: "Conservation of Energy",
        content: "Energy cannot be created or destroyed — it is only transformed into another form of energy."
      },
      {
        type: "text",
        heading: "Thermodynamics",
        content: "The study of heat and its transformation to different forms of energy. Heat / thermal energy is transferred from an object with a higher temperature to an object with a lower temperature."
      },
      {
        type: "table",
        heading: "Methods of Heat Transfer",
        tableData: {
          headers: ["Method", "Description"],
          rows: [
            ["Conduction", "Transmission of heat between two objects with direct contact."],
            ["Convection", "Heat transfer through air and water currents (liquid)."],
            ["Radiation", "Heat transfer through rays or waves emitted by a very hot object."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 29,
    dayNumber: 4,
    dayTitle: "Day 4: Physics",
    topicTitle: "Light and Sound",
    pdfPageRef: "PDF Page 13",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. Light",
        items: [
          "The speed of light is 3.0 x 10⁸ m/s — faster than sound.",
          "Travels fastest in a vacuum (airless space), next in gas, next in liquid, next in solid (preferably transparent).",
          "Scattering of violet and blue frequencies of sunlight in all directions is what gives the sky its blue color; red light scatters during sunset and dawn.",
          "Dispersion: the separation of white light by a prism into bands of color (Rainbow — ROYGBIV).",
          "Diffraction: the bending of light as it passes through an obstruction such as a small slit.",
          "Interference: the overlapping of light waves — explains the colors of soap bubbles or thin films of oil.",
          "Reflection: when light bounces off an object.",
          "Refraction: when light changes direction as it passes through a medium."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Sound",
        items: [
          "A mechanical wave.",
          "Travels fastest in solid, next in liquid, next in gas.",
          "Cannot travel in a vacuum."
        ]
      }
    ]
  },

  // ==========================================
  // DAY 5: SCIENCE, TECHNOLOGY & SOCIETY —
  // SUPPLEMENTARY TOPICS (SELF-STUDY)
  // ==========================================
  {
    pageNumber: 30,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Defining Science & Philippine S&T Laws",
    pdfPageRef: "PDF Page 14",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "Science",
        content: "The intellectual and practical activity encompassing the systematic study of the structure and behavior of the physical and natural world."
      },
      {
        type: "table",
        heading: "Government Policies and Laws Pertaining to Science and Technology",
        tableData: {
          headers: ["Law", "Description"],
          rows: [
            ["R.A. 2067", "\"Science Act of 1958\" — integrates, coordinates, and intensifies scientific and technological research and development, and fosters invention."],
            ["R.A. 3589", "Amended RA 2067, modifying the National Science Development Board, National Institute of Science and Technology, and the Philippine Atomic Energy Commission (enacted June 22, 1963)."],
            ["R.A. 5207", "Provides for the licensing and regulation of atomic energy facilities and materials, and establishes rules of liability for nuclear damage."],
            ["P.D. No. 49, s. 1972", "Established PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration) for environmental protection and public safety."],
            ["P.D. No. 334, s. 1973", "Created the Philippine National Oil Company to promote industrial and economic development through efficient use of energy resources."],
            ["R.A. 8749", "The Philippine Clean Air Act of 1999 — protects and preserves the environment and ensures sustainable development of natural resources."],
            ["R.A. 8792", "Recognizes and provides for the use of electronic commercial and non-commercial transactions and documents (passed June 15, 2000)."],
            ["R.A. 9513", "\"The Renewable Energy Act of 2008\" — accelerates development of renewable energy resources through fiscal and non-fiscal incentives."],
            ["R.A. 10175", "Philippine Cybercrime Prevention Act of 2012 (passed September 12, 2012)."],
            ["R.A. 10612", "Expands the coverage of the Science and Technology Scholarship Program and strengthens the teaching of Science and Mathematics in secondary schools."],
            ["R.A. 10844", "Created the Department of Information and Communications Technology (DICT), signed into law May 23, 2016, as the primary policy, planning, coordination, and administrative entity for national ICT development."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 31,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Robotics, the Nanoworld & Environmentalism",
    pdfPageRef: "PDF Page 14-15",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Robotics",
        items: [
          "A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment to perform intended tasks.",
          "A service robot is a robot that performs useful tasks for humans or equipment, excluding industrial automation applications.",
          "A personal robot is a service robot used for non-commercial tasks, usually by laypersons."
        ]
      },
      {
        type: "callout",
        heading: "Claude Shannon",
        content: "Known as the Father of the Information Age."
      },
      {
        type: "text",
        heading: "The Nanoworld",
        content: "Nanoscience refers to the scientific study of materials of nanometer size — one billionth of a meter (The Royal Society, 1994). It combines developments in solid state chemistry, synthetic chemistry, molecular biology, solid-state physics and engineering, and scanning tunneling microscopy."
      },
      {
        type: "bullet_list",
        heading: "Environmentalism & Environmental Education",
        items: [
          "Environmentalism: an ideology that evokes the necessity and responsibility of humans to respect, protect, and preserve the natural world from abusive or wrong use.",
          "Environmental Education: a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment, developing a deeper understanding and the skills for informed, responsible decisions."
        ]
      }
    ]
  },
  {
    pageNumber: 32,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Branches of Biology & the Chemical Bases of Life",
    pdfPageRef: "PDF Page 15",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Branches of Biology",
        items: [
          "Anatomy: the study of body parts and their location.",
          "Physiology: the study of functions of body parts.",
          "Biochemistry: the study of chemical processes and transformations in living organisms.",
          "Microbiology: the study of microorganisms.",
          "Mycology: the study of fungi.",
          "Phycology: the study of algae.",
          "Parasitology: the study of parasites and their hosts.",
          "Zoology: the study of animals — includes Ethology (animal behavior), Ichthyology (fishes), Ornithology (birds), and Entomology (insects)."
        ]
      },
      {
        type: "callout",
        heading: "Chemical Bases of Life",
        content: "\"The cell consists of entirely chemical substances.\" Of the 118 known elements today, only 4 elements constitute about 98% of living matter: Carbon, Hydrogen, Oxygen, and Nitrogen (C, H, O, N). Oxygen is the most abundant element in the cell."
      },
      {
        type: "numbered_list",
        heading: "Macromolecules",
        items: [
          "Carbohydrates", "Nucleic acids", "Proteins", "Lipids"
        ]
      }
    ]
  },
  {
    pageNumber: 33,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Cellular Parts I — Membrane, Nucleus, Cytoplasm & Ribosomes",
    pdfPageRef: "PDF Page 15-16",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. The Plasma Membrane",
        items: [
          "Functions as a selective (semipermeable) barrier.",
          "Controls the passage of nutrients and waste.",
          "The boundary between the cell and the external environment."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. The Nucleus — Genetic Library of the Cell",
        items: [
          "Contains most of the genes (DNA) in the eukaryotic cell (the command center of the cell).",
          "The largest organelle in an animal cell.",
          "Contains the nucleolus, which synthesizes ribosomes."
        ]
      },
      {
        type: "bullet_list",
        heading: "3. The Cytoplasm (Cytosol)",
        items: [
          "A jelly-like fluid where organelles are located.",
          "Composed of water, salts, proteins, fats, carbohydrates, and other chemicals."
        ]
      },
      {
        type: "bullet_list",
        heading: "4. Ribosomes — Protein Factories in the Cell",
        items: [
          "Carry out protein synthesis.",
          "Free ribosomes: produce proteins needed in the cytosol.",
          "Bound ribosomes: produce proteins integrated in the membrane and for export outside the cell."
        ]
      }
    ]
  },
  {
    pageNumber: 34,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Cellular Parts II — ER, Golgi Apparatus, Mitochondria & Lysosomes",
    pdfPageRef: "PDF Page 16",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "5. The Endoplasmic Reticulum — Biosynthetic Factory",
        items: [
          "Continuous with the nuclear envelope.",
          "Folded membranes that serve as channels through which materials are transported in the cell."
        ]
      },
      {
        type: "bullet_list",
        heading: "6. The Golgi Apparatus — Shipping and Receiving Center",
        items: [
          "Manufactures, processes, and packages certain macromolecules.",
          "Serves as the packaging factory of the cell."
        ]
      },
      {
        type: "bullet_list",
        heading: "7. Mitochondria — Chemical Energy Conversion",
        items: [
          "The powerhouse of the cell.",
          "Converts food molecules into energy (ATP) through cellular respiration — the process that releases energy from food.",
          "ATP (Adenosine Triphosphate) is the energy currency of the cell."
        ]
      },
      {
        type: "bullet_list",
        heading: "8. Lysosomes — Digestive Compartments (\"Suicidal Bag\" of the Cell)",
        items: [
          "A membranous sac of strong hydrolytic enzymes; the garbage collector of the cell.",
          "Digests bacteria, other foreign substances, and worn-out cell parts."
        ]
      }
    ]
  },
  {
    pageNumber: 35,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Cellular Parts III — Chloroplasts, Cell Wall, Vacuoles & Cytoskeleton",
    pdfPageRef: "PDF Page 16",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "9. Chloroplasts — Capture of Light Energy",
        items: [
          "Contain chlorophyll (green pigment); found in plants, not in animals.",
          "The site of photosynthesis — capturing light energy to produce energy-rich organic molecules (sugar/glucose) from carbon dioxide.",
          "Needed materials: sunlight, water, carbon dioxide. Waste product: oxygen."
        ]
      },
      {
        type: "table",
        heading: "10. The Cell Wall — Composition by Organism",
        tableData: {
          headers: ["Organism", "Cell Wall Made Of"],
          rows: [
            ["Plants", "Cellulose"],
            ["Bacteria", "Peptidoglycan"],
            ["Fungi", "Chitin"]
          ]
        }
      },
      {
        type: "text",
        heading: "11. Central Vacuoles",
        content: "Found in plants; hold reserves of important organic compounds and water; can take up 30%–90% of the cell's volume."
      },
      {
        type: "bullet_list",
        heading: "12. Cytoskeleton — Mechanical Support",
        items: [
          "A network of fibers providing mechanical support: Microfilament (Actin), Intermediate filament (Keratin), Microtubules (Tubulin).",
          "Microfilaments (Actin filaments) are the thinnest part of the cytoskeleton — essential for cytokinesis, amoeboid movement, and changes in cell shape."
        ]
      }
    ]
  },
  {
    pageNumber: 36,
    dayNumber: 5,
    dayTitle: "Day 5: Science, Technology, and Society",
    topicTitle: "Death: Postmortem Changes",
    pdfPageRef: "PDF Page 16",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "1. Livor Mortis (Hypostasis)",
        items: [
          "The blood settles because of gravity.",
          "Skin becomes pinkish, bluish, and blotchy."
        ]
      },
      {
        type: "bullet_list",
        heading: "2. Rigor Mortis",
        items: [
          "Chemical changes cause muscle mass to become rigid.",
          "After rigor mortis, chemical breakdown occurs and muscles become flaccid again."
        ]
      },
      {
        type: "bullet_list",
        heading: "3. Algor Mortis",
        items: [
          "Body cooling from normal internal temperature down to the temperature of the environment."
        ]
      }
    ]
  }
];

export const SCIENCE_TECHNOLOGY_SOCIETY_PAGES = SCIENCE_TECHNOLOGY_AND_SOCIETY_PAGES;
