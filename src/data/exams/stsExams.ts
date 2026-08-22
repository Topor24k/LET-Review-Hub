import { ExamQuestion } from '../../types';

export const STS_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "What is the biological 'Hierarchy of Life' from the simplest microscopic level to the broadest ecological level?",
    options: [
      { key: 'A', text: 'Atom -> Molecule -> Organelle -> Cell -> Tissue -> Organ -> Organ System -> Organism -> Population -> Community -> Ecosystem -> Biosphere' },
      { key: 'B', text: 'Cell -> Molecule -> Organism -> Tissue -> Ecosystem -> Biosphere' },
      { key: 'C', text: 'Biosphere -> Organ -> Cell -> Molecule -> Atom' },
      { key: 'D', text: 'Organism -> Cell -> Atom -> Tissue -> Planet' }
    ],
    correctAnswer: 'A',
    explanation: 'The biological hierarchy ascends from chemical sub-units through cellular structures, multicellular physiological systems, and overarching biosphere ecosystems.',
    topicRef: '1.0 Hierarchy of Life'
  },
  {
    id: 2,
    question: "What is the fundamental 'Cell Theory' formulated by Matthias Schleiden, Theodor Schwann, and Rudolf Virchow?",
    options: [
      { key: 'A', text: '1) All living organisms are composed of one or more cells; 2) The cell is the basic structural/functional unit of life; 3) All cells arise only from pre-existing cells (Omnis cellula e cellula)' },
      { key: 'B', text: 'Cells are created spontaneously from non-living dirt' },
      { key: 'C', text: 'Only animals have cells; plants do not' },
      { key: 'D', text: 'Cells can live forever without energy' }
    ],
    correctAnswer: 'A',
    explanation: 'Cell Theory is a cornerstone of modern biology, disproving spontaneous generation and establishing cellular continuity.',
    topicRef: '1.0 Cytology & Cell Theory'
  },
  {
    id: 3,
    question: "Which organelle is universally known as the 'Powerhouse of the Cell', generating ATP through aerobic cellular respiration?",
    options: [
      { key: 'A', text: 'Mitochondrion' },
      { key: 'B', text: 'Ribosome' },
      { key: 'C', text: 'Golgi Apparatus' },
      { key: 'D', text: 'Endoplasmic Reticulum' }
    ],
    correctAnswer: 'A',
    explanation: 'Mitochondria synthesize cellular ATP through the Krebs cycle and oxidative phosphorylation via their inner cristae membrane.',
    topicRef: '1.0 Cell Organelles: Mitochondria'
  },
  {
    id: 4,
    question: "Which organelle contains digestive hydrolytic enzymes responsible for breaking down cellular waste, debris, and foreign pathogens (cellular 'garbage disposal' / autolysis)?",
    options: [
      { key: 'A', text: 'Lysosome' },
      { key: 'B', text: 'Chloroplast' },
      { key: 'C', text: 'Nucleolus' },
      { key: 'D', text: 'Centrosome' }
    ],
    correctAnswer: 'A',
    explanation: 'Lysosomes contain acid hydrolases that degrade macromolecules, damaged organelles (autophagy), and engulfed bacteria.',
    topicRef: '1.0 Cell Organelles: Lysosomes'
  },
  {
    id: 5,
    question: "What is the primary site of Protein Synthesis in all living cells?",
    options: [
      { key: 'A', text: 'Ribosome' },
      { key: 'B', text: 'Vacuole' },
      { key: 'C', text: 'Peroxisome' },
      { key: 'D', text: 'Centriole' }
    ],
    correctAnswer: 'A',
    explanation: 'Ribosomes (free in cytoplasm or bound to the Rough ER) translate messenger RNA (mRNA) into polypeptide amino acid chains.',
    topicRef: '1.0 Cell Organelles: Ribosomes'
  },
  {
    id: 6,
    question: "Which organelle serves as the 'Packaging and Shipping Center' (Post Office) of the cell, modifying, sorting, and packaging proteins for secretion?",
    options: [
      { key: 'A', text: 'Golgi Apparatus (Golgi Body)' },
      { key: 'B', text: 'Lysosome' },
      { key: 'C', text: 'Nucleus' },
      { key: 'D', text: 'Cytoskeleton' }
    ],
    correctAnswer: 'A',
    explanation: 'The Golgi Apparatus receives proteins from the ER, performs glycosylation/packaging into secretory vesicles, and routes them to destinations.',
    topicRef: '1.0 Cell Organelles: Golgi Apparatus'
  },
  {
    id: 7,
    question: "What are the three structural organelles found in Plant Cells that are Absent in Animal Cells?",
    options: [
      { key: 'A', text: 'Cell Wall (Cellulose), Chloroplasts (Chlorophyll for photosynthesis), and Large Central Vacuole' },
      { key: 'B', text: 'Centrioles, Cilia, and Lysosomes' },
      { key: 'C', text: 'Mitochondria, Nucleus, and Ribosomes' },
      { key: 'D', text: 'Blood vessels, Nerves, and Bones' }
    ],
    correctAnswer: 'A',
    explanation: 'Plant cells possess rigid cellulose cell walls, photosynthetic chloroplasts, and turgor-maintaining large central vacuoles.',
    topicRef: '1.0 Plant vs Animal Cells'
  },
  {
    id: 8,
    question: "What is 'Photosynthesis' and its overall chemical equation?",
    options: [
      { key: 'A', text: '6 CO₂ + 6 H₂O + Light Energy -> C₆H₁₂O₆ (Glucose) + 6 O₂' },
      { key: 'B', text: 'C₆H₁₂O₆ + 6 O₂ -> 6 CO₂ + 6 H₂O + ATP' },
      { key: 'C', text: '2 H₂ + O₂ -> 2 H₂O' },
      { key: 'D', text: 'CO₂ + CH₄ -> C₂H₆ + O₂' }
    ],
    correctAnswer: 'A',
    explanation: 'Photosynthesis converts solar light energy into biochemical potential energy stored in carbohydrates, releasing oxygen gas.',
    topicRef: '1.0 Cellular Energetics: Photosynthesis'
  },
  {
    id: 9,
    question: "Who is celebrated as the 'Father of Modern Genetics' for his pea plant (Pisum sativum) hybridization experiments uncovering the laws of inheritance?",
    options: [
      { key: 'A', text: 'Gregor Mendel' },
      { key: 'B', text: 'Charles Darwin' },
      { key: 'C', text: 'James Watson and Francis Crick' },
      { key: 'D', text: 'Thomas Hunt Morgan' }
    ],
    correctAnswer: 'A',
    explanation: 'Gregor Mendel discovered the fundamental laws of heredity: the Law of Segregation, Law of Independent Assortment, and Law of Dominance.',
    topicRef: '2.0 Genetics: Gregor Mendel'
  },
  {
    id: 10,
    question: "In DNA molecular genetics, what are the four nitrogenous bases and their complementary base-pairing rules?",
    options: [
      { key: 'A', text: 'Adenine (A) pairs with Thymine (T) via 2 hydrogen bonds; Guanine (G) pairs with Cytosine (C) via 3 hydrogen bonds' },
      { key: 'B', text: 'Adenine pairs with Guanine; Thymine pairs with Cytosine' },
      { key: 'C', text: 'Uracil pairs with Thymine; Adenine pairs with Cytosine' },
      { key: 'D', text: 'All four bases bond randomly with each other' }
    ],
    correctAnswer: 'A',
    explanation: 'Chargaff\'s rules and the Watson-Crick double helix establish specific complementary purine-pyrimidine base pairs: A-T and G-C (with Uracil replacing T in RNA).',
    topicRef: '2.0 DNA Structure & Base Pairing'
  },
  {
    id: 11,
    question: "What is the 'Central Dogma of Molecular Biology' (Francis Crick)?",
    options: [
      { key: 'A', text: 'DNA -> (Transcription) -> mRNA -> (Translation) -> Protein' },
      { key: 'B', text: 'Protein -> RNA -> DNA' },
      { key: 'C', text: 'Lipids -> Carbohydrates -> DNA' },
      { key: 'D', text: 'Glucose -> ATP -> Cells' }
    ],
    correctAnswer: 'A',
    explanation: 'The Central Dogma outlines the fundamental unidirectional flow of genetic information from DNA replication to RNA transcription to protein translation.',
    topicRef: '2.0 Central Dogma of Molecular Biology'
  },
  {
    id: 12,
    question: "What is the difference between 'Mitosis' and 'Meiosis'?",
    options: [
      { key: 'A', text: 'Mitosis produces 2 genetically identical diploid (2n) somatic daughter cells; Meiosis produces 4 genetically diverse haploid (n) gamete sex cells' },
      { key: 'B', text: 'Mitosis creates sex cells; meiosis heals wounds' },
      { key: 'C', text: 'Mitosis only occurs in bacteria; meiosis occurs in viruses' },
      { key: 'D', text: 'They are identical cell division processes' }
    ],
    correctAnswer: 'A',
    explanation: 'Mitosis facilitates bodily growth and tissue repair; meiosis reduces chromosomal numbers by half to produce sperm and egg gametes.',
    topicRef: '1.0 Cell Division: Mitosis vs Meiosis'
  },
  {
    id: 13,
    question: "In human blood circulation, which blood vessels carry oxygenated blood AWAY from the heart to systemic body tissues?",
    options: [
      { key: 'A', text: 'Arteries (with the Aorta being the largest systemic artery)' },
      { key: 'B', text: 'Veins' },
      { key: 'C', text: 'Venules' },
      { key: 'D', text: 'Vena Cava' }
    ],
    correctAnswer: 'A',
    explanation: 'Arteries transport blood Away from the heart (Pulmonary Artery carries deoxygenated blood to lungs, while systemic arteries carry oxygenated blood).',
    topicRef: '3.0 Human Organ Systems: Circulatory'
  },
  {
    id: 14,
    question: "Which blood type is known as the 'Universal Donor' of red blood cells, and which is the 'Universal Recipient'?",
    options: [
      { key: 'A', text: 'Type O-negative (Universal Donor) and Type AB-positive (Universal Recipient)' },
      { key: 'B', text: 'Type A-positive and Type B-negative' },
      { key: 'C', text: 'Type B-positive and Type O-negative' },
      { key: 'D', text: 'Type AB-negative and Type O-positive' }
    ],
    correctAnswer: 'A',
    explanation: 'Type O- has no A/B antigens or Rh factor on red cells (cannot trigger immune attacks in recipients); AB+ has no anti-A, anti-B, or anti-Rh antibodies.',
    topicRef: '3.0 Blood Types & Immunology'
  },
  {
    id: 15,
    question: "In the human digestive system, where does the majority of chemical digestion and nutrient absorption take place?",
    options: [
      { key: 'A', text: 'Small Intestine (specifically the Duodenum, Jejunum, and Ileum)' },
      { key: 'B', text: 'Stomach' },
      { key: 'C', text: 'Large Intestine' },
      { key: 'D', text: 'Esophagus' }
    ],
    correctAnswer: 'A',
    explanation: 'The small intestine (lined with microscopic villi and microvilli) absorbs over 90% of all nutrients into the bloodstream and lymph.',
    topicRef: '3.0 Human Organ Systems: Digestive'
  },
  {
    id: 16,
    question: "Which organ produces Insulin and Glucagon to regulate blood glucose homeostasis?",
    options: [
      { key: 'A', text: 'Pancreas (Islets of Langerhans)' },
      { key: 'B', text: 'Liver' },
      { key: 'C', text: 'Kidney' },
      { key: 'D', text: 'Gallbladder' }
    ],
    correctAnswer: 'A',
    explanation: 'Beta cells in the islets of Langerhans secrete insulin (lowers blood sugar), while alpha cells secrete glucagon (elevates blood sugar).',
    topicRef: '3.0 Human Organ Systems: Endocrine'
  },
  {
    id: 17,
    question: "What is the functional microscopic filtering unit of the human kidney?",
    options: [
      { key: 'A', text: 'Nephron' },
      { key: 'B', text: 'Neuron' },
      { key: 'C', text: 'Alveolus' },
      { key: 'D', text: 'Sarcomere' }
    ],
    correctAnswer: 'A',
    explanation: 'Each kidney contains roughly 1 million nephrons (Bowman\'s capsule, glomerulus, renal tubules) that filter blood and produce urine.',
    topicRef: '3.0 Human Organ Systems: Excretory'
  },
  {
    id: 18,
    question: "What are the tiny microscopic air sacs in human lungs where gas exchange (O₂ and CO₂) takes place across capillary membranes?",
    options: [
      { key: 'A', text: 'Alveoli' },
      { key: 'B', text: 'Bronchioles' },
      { key: 'C', text: 'Trachea' },
      { key: 'D', text: 'Larynx' }
    ],
    correctAnswer: 'A',
    explanation: 'Alveoli provide vast surface area with ultra-thin squamous epithelium for rapid diffusion of oxygen into blood and carbon dioxide out.',
    topicRef: '3.0 Human Organ Systems: Respiratory'
  },
  {
    id: 19,
    question: "What is Charles Darwin\'s mechanism of biological Evolution formulated in 'On the Origin of Species' (1859)?",
    options: [
      { key: 'A', text: 'Natural Selection: Organisms with heritable traits best suited to their environment are more likely to survive, reproduce, and pass those traits to offspring ("Survival of the Fittest")' },
      { key: 'B', text: 'Inheritance of Acquired Characteristics (Lamarckism)' },
      { key: 'C', text: 'Spontaneous rapid mutation of whole species overnight' },
      { key: 'D', text: 'Extinction caused by planetary collisions only' }
    ],
    correctAnswer: 'A',
    explanation: 'Natural selection operates on phenotypic variations within populations, driving evolutionary adaptation over generations.',
    topicRef: '2.0 Evolutionary Biology: Darwin'
  },
  {
    id: 20,
    question: "What was the 'Copernican Revolution' in the history of science (Nicolaus Copernicus)?",
    options: [
      { key: 'A', text: 'The paradigm shift from the geocentric model (Earth-centered universe) to the heliocentric model (Sun-centered solar system)' },
      { key: 'B', text: 'The invention of the steam engine' },
      { key: 'C', text: 'The discovery of electricity' },
      { key: 'D', text: 'The introduction of vaccines' }
    ],
    correctAnswer: 'A',
    explanation: 'Copernicus\' De revolutionibus orbium coelestium (1543) initiated the Scientific Revolution by demonstrating that Earth orbits the Sun.',
    topicRef: '5.0 Scientific Revolutions: Copernicus'
  },
  {
    id: 21,
    question: "What is Isaac Newton\'s 'First Law of Motion' (Law of Inertia)?",
    options: [
      { key: 'A', text: 'An object at rest stays at rest, and an object in uniform motion stays in motion at constant velocity unless acted upon by a net external force' },
      { key: 'B', text: 'Force equals mass times acceleration (F = ma)' },
      { key: 'C', text: 'For every action, there is an equal and opposite reaction' },
      { key: 'D', text: 'Energy cannot be created or destroyed' }
    ],
    correctAnswer: 'A',
    explanation: 'Newton\'s First Law defines inertia—the inherent resistance of physical matter to changes in its state of motion.',
    topicRef: '4.0 Physics: Laws of Motion'
  },
  {
    id: 22,
    question: "What is the 'First Law of Thermodynamics' (Law of Conservation of Energy)?",
    options: [
      { key: 'A', text: 'Energy can neither be created nor destroyed; it can only be transformed or converted from one form to another (Total energy in an isolated system is constant)' },
      { key: 'B', text: 'Entropy in the universe always increases' },
      { key: 'C', text: 'Heat flows naturally from cold to hot' },
      { key: 'D', text: 'Matter can disappear completely' }
    ],
    correctAnswer: 'A',
    explanation: 'The Law of Conservation of Energy dictates that energy transitions between thermal, mechanical, chemical, and nuclear forms without changing total quantity.',
    topicRef: '4.0 Physics: Thermodynamics'
  },
  {
    id: 23,
    question: "What is the 'Greenhouse Effect' and what are the primary greenhouse gases responsible for global climate change?",
    options: [
      { key: 'A', text: 'Atmospheric trapping of infrared heat radiation emitted from Earth\'s surface; primary gases include Carbon Dioxide (CO₂), Methane (CH₄), Nitrous Oxide (N₂O), and Water Vapor' },
      { key: 'B', text: 'Growing vegetables inside glass structures only' },
      { key: 'C', text: 'Oxygen and Nitrogen gas' },
      { key: 'D', text: 'Helium and Argon gas' }
    ],
    correctAnswer: 'A',
    explanation: 'Greenhouse gases absorb outgoing terrestrial infrared thermal radiation, re-radiating heat back to Earth and warming the lower atmosphere.',
    topicRef: '4.0 Environmental Science: Climate Change'
  },
  {
    id: 24,
    question: "What is the 'Ozone Layer' in the Stratosphere and what protects it from depletion?",
    options: [
      { key: 'A', text: 'A stratospheric layer of O₃ molecules that absorbs harmful solar Ultraviolet-B/C (UV) radiation; protected by international bans on Chlorofluorocarbons (CFCs) via the Montreal Protocol' },
      { key: 'B', text: 'A blanket of cloud in the troposphere' },
      { key: 'C', text: 'A layer of smog over industrial cities' },
      { key: 'D', text: 'A barrier against outer space meteorites' }
    ],
    correctAnswer: 'A',
    explanation: 'The ozone layer shields biological life from lethal UV radiation; the Montreal Protocol successfully phased out ozone-depleting CFCs.',
    topicRef: '4.0 Atmospheric Science & Montreal Protocol'
  },
  {
    id: 25,
    question: "In ecological trophic pyramids, what is the '10% Rule' of Energy Transfer (Raymond Lindeman)?",
    options: [
      { key: 'A', text: 'Only approximately 10% of the energy stored as biomass at one trophic level is transferred to the next higher trophic level (90% is lost as metabolic heat/respiration)' },
      { key: 'B', text: '100% of all energy moves up the food chain' },
      { key: 'C', text: 'Predators receive 90% of the sun\'s light' },
      { key: 'D', text: 'Plants absorb only 10% of water' }
    ],
    correctAnswer: 'A',
    explanation: 'Energy diminishes exponentially across trophic levels (Producers 1000 kcal -> Primary Consumers 100 kcal -> Secondary 10 kcal -> Tertiary 1 kcal).',
    topicRef: '4.0 Ecology: Energy Flow'
  },
  {
    id: 26,
    question: "What is 'Symbiosis' and what is 'Mutualism' versus 'Commensalism' versus 'Parasitism'?",
    options: [
      { key: 'A', text: 'Mutualism benefits both species (+/+); Commensalism benefits one without affecting the other (+/0); Parasitism benefits one while harming the host (+/-)' },
      { key: 'B', text: 'All symbiotic interactions result in the death of both species' },
      { key: 'C', text: 'Parasitism helps the host grow bigger' },
      { key: 'D', text: 'Commensalism is when two predators fight' }
    ],
    correctAnswer: 'A',
    explanation: 'Symbiosis describes persistent ecological interactions between organisms of different species categorized by cost-benefit dynamics.',
    topicRef: '4.0 Ecology: Symbiotic Relationships'
  },
  {
    id: 27,
    question: "What are the three main layers of Planet Earth from surface to center?",
    options: [
      { key: 'A', text: 'Crust (Lithosphere), Mantle (Asthenosphere/Mesosphere), and Core (Liquid Outer Core & Solid Inner Core made of Nickel-Iron)' },
      { key: 'B', text: 'Atmosphere, Hydrosphere, and Biosphere' },
      { key: 'C', text: 'Sand, Clay, and Water' },
      { key: 'D', text: 'Magma, Lava, and Granite' }
    ],
    correctAnswer: 'A',
    explanation: 'Earth\'s compositional layers: thin crust, silicate rock mantle, and dense metallic Fe-Ni core (liquid outer core generating Earth\'s magnetic field).',
    topicRef: '4.0 Earth Science: Planetary Layers'
  },
  {
    id: 28,
    question: "What is 'Plate Tectonics Theory' (Alfred Wegener\'s Continental Drift)?",
    options: [
      { key: 'A', text: 'Earth\'s lithosphere is fragmented into rigid tectonic plates that float and move atop the semi-fluid asthenosphere, causing earthquakes, volcanism, and mountain building at boundaries' },
      { key: 'B', text: 'Earth is completely solid and unmoving' },
      { key: 'C', text: 'Continents float on top of ocean waves like boats' },
      { key: 'D', text: 'Earthquakes are caused by underground giant animals' }
    ],
    correctAnswer: 'A',
    explanation: 'Convection currents in the mantle drive tectonic plate motions along convergent, divergent, and transform boundaries.',
    topicRef: '4.0 Earth Science: Plate Tectonics'
  },
  {
    id: 29,
    question: "Why is the Philippines prone to frequent earthquakes and volcanic eruptions?",
    options: [
      { key: 'A', text: 'Because it is situated along the Pacific \'Ring of Fire\' and lies at the convergent boundary of the Philippine Sea Plate and Eurasian Plate' },
      { key: 'B', text: 'Because of heavy tropical monsoons' },
      { key: 'C', text: 'Because of deep mining excavations' },
      { key: 'D', text: 'Because of deforestation' }
    ],
    correctAnswer: 'A',
    explanation: 'The Pacific Ring of Fire is a horseshoe-shaped basin characterized by high tectonic subduction zones, active volcanoes, and seismic faults.',
    topicRef: '4.0 Earth Science: Pacific Ring of Fire'
  },
  {
    id: 30,
    question: "What are the three fundamental classifications of Rocks in geology based on origin?",
    options: [
      { key: 'A', text: 'Igneous (cooled magma/lava), Sedimentary (compacted/cemented mineral sediments), and Metamorphic (altered by extreme heat and pressure)' },
      { key: 'B', text: 'Gold, Silver, and Bronze' },
      { key: 'C', text: 'Solid, Liquid, and Gas' },
      { key: 'D', text: 'Diamond, Ruby, and Emerald' }
    ],
    correctAnswer: 'A',
    explanation: 'The Rock Cycle dynamically recycles minerals between igneous (basalt/granite), sedimentary (limestone/sandstone), and metamorphic (marble/slate).',
    topicRef: '4.0 Earth Science: The Rock Cycle'
  },
  {
    id: 31,
    question: "In forensic science and postmortem medicine, what is 'Rigor Mortis'?",
    options: [
      { key: 'A', text: 'The temporary postmortem chemical stiffening of muscles caused by the depletion of ATP, preventing actin and myosin detachment (begins 2-4 hrs, peaks at 12 hrs)' },
      { key: 'B', text: 'The cooling of body temperature after death' },
      { key: 'C', text: 'The purplish discoloration of skin from blood settling' },
      { key: 'D', text: 'The decomposition of tissues by bacteria' }
    ],
    correctAnswer: 'A',
    explanation: 'Without cellular respiration, ATP is exhausted, locking cross-bridges between muscle actin and myosin filaments in rigid contraction.',
    topicRef: '5.0 Postmortem Changes: Rigor Mortis'
  },
  {
    id: 32,
    question: "What is 'Livor Mortis' (Postmortem Lividity)?",
    options: [
      { key: 'A', text: 'The purplish-red discoloration of the skin in dependent parts of the body caused by gravitational settling of blood in capillaries after circulation ceases' },
      { key: 'B', text: 'The stiffening of muscles' },
      { key: 'C', text: 'The loss of body hair' },
      { key: 'D', text: 'The breakdown of bone minerals' }
    ],
    correctAnswer: 'A',
    explanation: 'Livor mortis indicates body position at time of death and helps forensic investigators determine if a corpse was moved postmortem.',
    topicRef: '5.0 Postmortem Changes: Livor Mortis'
  },
  {
    id: 33,
    question: "What is 'Algor Mortis'?",
    options: [
      { key: 'A', text: 'The postmortem cooling of the body as it equilibrates toward ambient environmental temperature (approx. 1.5°F or 0.8°C loss per hour)' },
      { key: 'B', text: 'The stiffening of joints' },
      { key: 'C', text: 'The chemical breakdown of proteins' },
      { key: 'D', text: 'The growth of fingernails after death' }
    ],
    correctAnswer: 'A',
    explanation: 'Algor mortis (Newton\'s law of cooling applied to pathology) is used by medical examiners to estimate Time of Death / Postmortem Interval (PMI).',
    topicRef: '5.0 Postmortem Changes: Algor Mortis'
  },
  {
    id: 34,
    question: "What is 'CRISPR-Cas9' in 21st-century biotechnology?",
    options: [
      { key: 'A', text: 'A revolutionary molecular gene-editing tool derived from bacterial immune systems that allows precise targeted cutting and alteration of specific DNA sequences' },
      { key: 'B', text: 'A high-powered digital electron microscope' },
      { key: 'C', text: 'A new supercomputer microprocessor' },
      { key: 'D', text: 'A deep-sea exploration submarine' }
    ],
    correctAnswer: 'A',
    explanation: 'CRISPR-Cas9 (developed by Emmanuelle Charpentier & Jennifer Doudna, Nobel Prize 2020) enables precise genomic editing across medicine and agriculture.',
    topicRef: '5.0 Biotechnology: CRISPR-Cas9'
  },
  {
    id: 35,
    question: "What is 'Artificial Intelligence' (AI) and 'Machine Learning'?",
    options: [
      { key: 'A', text: 'Computational systems and statistical algorithms trained on large datasets to recognize patterns, make predictions, and perform tasks that traditionally require human intelligence' },
      { key: 'B', text: 'A physical robot that cleans floors' },
      { key: 'C', text: 'A computer virus' },
      { key: 'D', text: 'A mechanical calculator' }
    ],
    correctAnswer: 'A',
    explanation: 'AI encompasses computing models that synthesize data, process natural language, recognize visual cues, and perform autonomous reasoning.',
    topicRef: '5.0 21st-Century Emerging Technologies: AI'
  },
  {
    id: 36,
    question: "What is the 'Precautionary Principle' in science, technology, and environmental governance?",
    options: [
      { key: 'A', text: 'When human activities may lead to morally unacceptable or irreversible harm to human health or the environment, lack of full scientific certainty shall not be used to postpone preventive measures' },
      { key: 'B', text: 'Banning all new scientific research' },
      { key: 'C', text: 'Waiting for total disaster before taking any action' },
      { key: 'D', text: 'Allowing corporations to dump waste without permits' }
    ],
    correctAnswer: 'A',
    explanation: 'The Precautionary Principle mandates proactive regulatory caution when innovations carry severe catastrophic ecological or public health risks.',
    topicRef: '5.0 Science Policy & Ethics'
  },
  {
    id: 37,
    question: "Who developed the first successful 'Smallpox Vaccine' in 1796 using cowpox matter, establishing the field of Immunology?",
    options: [
      { key: 'A', text: 'Edward Jenner' },
      { key: 'B', text: 'Louis Pasteur' },
      { key: 'C', text: 'Alexander Fleming' },
      { key: 'D', text: 'Robert Koch' }
    ],
    correctAnswer: 'A',
    explanation: 'Edward Jenner pioneered vaccination (vacca = cow in Latin) by inoculating James Phipps with cowpox to grant immunity against lethal smallpox.',
    topicRef: '5.0 History of Medicine: Edward Jenner'
  },
  {
    id: 38,
    question: "Who discovered the first widely used antibiotic 'Penicillin' in 1928 from Penicillium notatum mold?",
    options: [
      { key: 'A', text: 'Alexander Fleming' },
      { key: 'B', text: 'Louis Pasteur' },
      { key: 'C', text: 'Jonas Salk' },
      { key: 'D', text: 'Joseph Lister' }
    ],
    correctAnswer: 'A',
    explanation: 'Alexander Fleming discovered penicillin, revolutionizing infectious disease treatment and reducing mortality from bacterial infections.',
    topicRef: '5.0 History of Medicine: Alexander Fleming'
  },
  {
    id: 39,
    question: "Who pioneered the 'Germ Theory of Disease' and developed pasteurization and rabies vaccines?",
    options: [
      { key: 'A', text: 'Louis Pasteur' },
      { key: 'B', text: 'Anton van Leeuwenhoek' },
      { key: 'C', text: 'Galileo Galilei' },
      { key: 'D', text: 'Carl Linnaeus' }
    ],
    correctAnswer: 'A',
    explanation: 'Louis Pasteur conclusively disproved spontaneous generation, proving that microorganisms cause infectious fermentation and disease.',
    topicRef: '5.0 History of Science: Louis Pasteur'
  },
  {
    id: 40,
    question: "What is 'Antibiotic Resistance' (Superbugs) and why is it a grave modern global health threat?",
    options: [
      { key: 'A', text: 'The evolutionary adaptation of bacteria to survive antibiotic drugs due to overprescription, patient non-compliance, and misuse in livestock agriculture' },
      { key: 'B', text: 'A person being allergic to penicillin' },
      { key: 'C', text: 'Antibiotics losing expiry date' },
      { key: 'D', text: 'Viruses becoming bigger in size' }
    ],
    correctAnswer: 'A',
    explanation: 'Bacterial mutations selected through improper antibiotic overuse create multidrug-resistant strains (MRSA, MDR-TB) that defy medical treatment.',
    topicRef: '5.0 Global Health & Biotechnology'
  },
  {
    id: 41,
    question: "What is 'Renewable Energy' compared to 'Fossil Fuels'?",
    options: [
      { key: 'A', text: 'Renewable energy (solar, wind, hydroelectric, geothermal) naturally replenishes on human timescales without depleting resources; Fossil fuels (coal, oil, gas) are finite and emit high carbon' },
      { key: 'B', text: 'Renewable energy comes from burning plastic' },
      { key: 'C', text: 'Fossil fuels last forever' },
      { key: 'D', text: 'They produce identical emissions' }
    ],
    correctAnswer: 'A',
    explanation: 'Transitioning to clean renewables is essential for decarbonizing power grids, mitigating planetary warming, and achieving sustainable development.',
    topicRef: '4.0 Energy & Environmental Science'
  },
  {
    id: 42,
    question: "What is 'Geothermal Energy' and why is the Philippines a global leader in geothermal electricity production?",
    options: [
      { key: 'A', text: 'Harnessing heat and steam from deep underground magma reservoirs along volcanic fault lines (e.g., Tiwi, Mak-Ban, Tongonan geothermal plants)' },
      { key: 'B', text: 'Burning sea water for electricity' },
      { key: 'C', text: 'Using nuclear reactors in space' },
      { key: 'D', text: 'Capturing lightning strikes in batteries' }
    ],
    correctAnswer: 'A',
    explanation: 'Situated on the Pacific Ring of Fire, the Philippines utilizes high-temperature volcanic geothermal steam to generate substantial clean baseload electricity.',
    topicRef: '4.0 Philippine Science & Renewable Energy'
  },
  {
    id: 43,
    question: "What is 'Information Age' (Digital Revolution / Third Industrial Revolution)?",
    options: [
      { key: 'A', text: 'The historical transition from traditional mechanical industry to an economy based on information technology, computers, internet connectivity, and microelectronics' },
      { key: 'B', text: 'The Stone Age' },
      { key: 'C', text: 'The Bronze Age' },
      { key: 'D', text: 'The Agricultural Revolution' }
    ],
    correctAnswer: 'A',
    explanation: 'The Information Age, spurred by the invention of the transistor, silicon semiconductors, and the World Wide Web, transformed global society.',
    topicRef: '5.0 Technological Eras: Information Age'
  },
  {
    id: 44,
    question: "What is the 'Fourth Industrial Revolution' (Industry 4.0, Klaus Schwab)?",
    options: [
      { key: 'A', text: 'The fusion of digital, physical, and biological spheres driven by AI, Internet of Things (IoT), robotics, 3D printing, quantum computing, and genetic engineering' },
      { key: 'B', text: 'The invention of steam locomotives' },
      { key: 'C', text: 'Mass production using assembly lines' },
      { key: 'D', text: 'Farming with oxen' }
    ],
    correctAnswer: 'A',
    explanation: 'Industry 4.0 merges cyber-physical systems, autonomous smart networks, and synthetic biology into integrated societal frameworks.',
    topicRef: '5.0 Industry 4.0'
  },
  {
    id: 45,
    question: "What is 'Eutrophication' in freshwater ecosystems?",
    options: [
      { key: 'A', text: 'Excessive nutrient enrichment (nitrogen/phosphorus runoff from fertilizers/sewage) triggering dense algal blooms, oxygen depletion (hypoxia), and aquatic fish kills' },
      { key: 'B', text: 'Water turning into ice during winter' },
      { key: 'C', text: 'Drying up of rivers during drought' },
      { key: 'D', text: 'Deep sea volcanic eruptions' }
    ],
    correctAnswer: 'A',
    explanation: 'Eutrophication causes rapid phytoplankton blooms; when algae die, decomposing aerobic bacteria consume dissolved oxygen, suffocating aquatic life.',
    topicRef: '4.0 Ecology: Water Pollution & Eutrophication'
  },
  {
    id: 46,
    question: "What is 'Biological Magnification' (Biomagnification)?",
    options: [
      { key: 'A', text: 'The increasing concentration of persistent toxic non-biodegradable chemicals (e.g., DDT, Mercury, Microplastics) at progressively higher trophic levels of the food chain' },
      { key: 'B', text: 'Looking at cells through a magnifying glass' },
      { key: 'C', text: 'Animals growing bigger in warm weather' },
      { key: 'D', text: 'Plant leaves expanding during rain' }
    ],
    correctAnswer: 'A',
    explanation: 'Lipid-soluble persistent pollutants accumulate in adipose tissue, concentrating exponentially in apex predators (e.g., eagles, sharks, humans).',
    topicRef: '4.0 Environmental Toxicology: Biomagnification'
  },
  {
    id: 47,
    question: "What are 'Stem Cells' and what is 'Pluripotency'?",
    options: [
      { key: 'A', text: 'Unspecialized biological cells capable of self-renewal and differentiating into almost any specialized cell type in the human body' },
      { key: 'B', text: 'Cells found only in plant tree stems' },
      { key: 'C', text: 'Dead cells that form skin scabs' },
      { key: 'D', text: 'Bacteria inside the stomach' }
    ],
    correctAnswer: 'A',
    explanation: 'Pluripotent stem cells (embryonic and induced pluripotent stem cells / iPSCs) offer breakthrough potential for regenerative medicine and organ repair.',
    topicRef: '5.0 Biotechnology: Stem Cells'
  },
  {
    id: 48,
    question: "What is 'Genetically Modified Organism' (GMO) such as Bt Corn or Golden Rice?",
    options: [
      { key: 'A', text: 'An organism whose genetic material has been altered using genetic engineering recombinant DNA technology (e.g., Golden Rice producing Beta-Carotene / Vitamin A)' },
      { key: 'B', text: 'Food grown with organic compost' },
      { key: 'C', text: 'Wild uncultivated forest fruits' },
      { key: 'D', text: 'Synthetic plastic food models' }
    ],
    correctAnswer: 'A',
    explanation: 'GMOs insert specific foreign genes to enhance crop yield, confer pest resistance (Bt toxin), or fortify nutrition (Golden Rice fighting Vitamin A deficiency blindness).',
    topicRef: '5.0 Biotechnology: GMOs & Agriculture'
  },
  {
    id: 49,
    question: "What is 'Nanotechnology'?",
    options: [
      { key: 'A', text: 'The manipulation, engineering, and manufacture of matter and molecular structures at the nanoscale (1 to 100 nanometers; one billionth of a meter)' },
      { key: 'B', text: 'Building giant space stations' },
      { key: 'C', text: 'Writing books on tiny paper' },
      { key: 'D', text: 'A computer brand' }
    ],
    correctAnswer: 'A',
    explanation: 'Nanotechnology operates at atomic scales where quantum effects emerge, revolutionizing drug delivery, microelectronics, and materials science.',
    topicRef: '5.0 Nanotechnology'
  },
  {
    id: 50,
    question: "Why is 'Science, Technology, and Society' (STS) an indispensable core subject for future educators?",
    options: [
      { key: 'A', text: 'It fosters critical scientific literacy, ethical discernment, and civic responsibility in evaluating the societal, moral, and environmental impacts of scientific and technological innovations' },
      { key: 'B', text: 'To force teachers to become laboratory chemists' },
      { key: 'C', text: 'To memorize the entire periodic table backwards' },
      { key: 'D', text: 'Because modern society should blindly accept all new machines' }
    ],
    correctAnswer: 'A',
    explanation: 'STS empowers citizens and educators to engage with contemporary technological disruptions, guiding humane, sustainable, and ethical societal stewardship.',
    topicRef: '1.0 STS Rationale & Purpose'
  }
];
