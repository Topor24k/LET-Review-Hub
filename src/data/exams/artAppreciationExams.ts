import { ExamQuestion } from '../../types';

export const ART_APPRECIATION_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "What is the Latin origin of the word 'Art' and what was its original historical meaning?",
    options: [
      { key: 'A', text: '"Ars", meaning craft, skill, technical ability, or craftsmanship' },
      { key: 'B', text: '"Arte", meaning paint and canvas' },
      { key: 'C', text: '"Ardor", meaning intense burning passion' },
      { key: 'D', text: '"Artus", meaning human limbs' }
    ],
    correctAnswer: 'A',
    explanation: 'The Latin term "ars" originally referred to mastery of a craft, technical skill, or systematized human workmanship.',
    topicRef: '1.0 Etymology & Nature of Art'
  },
  {
    id: 2,
    question: "Which of the following is considered a 'Directly Functional' (Applied) Art?",
    options: [
      { key: 'A', text: 'Architecture and Industrial / Fashion Design' },
      { key: 'B', text: 'Oil painting on canvas' },
      { key: 'C', text: 'Lyric poetry' },
      { key: 'D', text: 'Chamber music quartet' }
    ],
    correctAnswer: 'A',
    explanation: 'Applied/functional arts serve tangible physical utilities in daily life (such as buildings, clothing, and tools), whereas fine arts serve aesthetic contemplation.',
    topicRef: '1.0 Functions of Art: Fine vs Applied'
  },
  {
    id: 3,
    question: "What is the key difference between an 'Artist' and an 'Artisan'?",
    options: [
      { key: 'A', text: 'An artist focuses primarily on aesthetic and expressive creative creation; an artisan produces functional, utilitarian handcrafted goods with master craft skills' },
      { key: 'B', text: 'An artist is wealthy; an artisan is poor' },
      { key: 'C', text: 'An artisan is illegal' },
      { key: 'D', text: 'They are exact synonyms' }
    ],
    correctAnswer: 'A',
    explanation: 'Artists create fine artworks driven by conceptual, emotional, and aesthetic expression; artisans create decorative or practical utilitarian items (pottery, weaving, furniture).',
    topicRef: '1.0 Artist vs Artisan'
  },
  {
    id: 4,
    question: "Who painted the monumental, celebrated Philippine masterpiece 'Spoliarium' which won the Gold Medal (First Class) at the 1884 Madrid National Exposition of Fine Arts?",
    options: [
      { key: 'A', text: 'Juan Luna' },
      { key: 'B', text: 'Felix Resurreccion Hidalgo' },
      { key: 'C', text: 'Fernando Amorsolo' },
      { key: 'D', text: 'Damian Domingo' }
    ],
    correctAnswer: 'A',
    explanation: 'Juan Luna painted Spoliarium, depicting dying gladiators in the basement of the Roman Colosseum as an allegorical critique of Spanish colonial tyranny.',
    topicRef: '2.0 Philippine Art Masters: Juan Luna'
  },
  {
    id: 5,
    question: "Which Filipino painter won the Silver Medal at the same 1884 Madrid Exposition with his masterpiece 'Las Virgenes Cristianas Expuestas al Populacho' (Christian Virgins Exposed to the Populace)?",
    options: [
      { key: 'A', text: 'Felix Resurreccion Hidalgo' },
      { key: 'B', text: 'Juan Luna' },
      { key: 'C', text: 'Carlos \'Botong\' Francisco' },
      { key: 'D', text: 'Fabian de la Rosa' }
    ],
    correctAnswer: 'A',
    explanation: 'Felix Resurreccion Hidalgo won the silver medal, showcasing neoclassical mastery alongside Juan Luna\'s gold medal triumph.',
    topicRef: '2.0 Philippine Art Masters: Hidalgo'
  },
  {
    id: 6,
    question: "Who is celebrated as the Philippines\' first National Artist for Painting (1972), renowned as the 'Grand Old Man of Philippine Art' and famous for his backlighting technique (Chiaroscuro / Golden Sunlight)?",
    options: [
      { key: 'A', text: 'Fernando Amorsolo' },
      { key: 'B', text: 'Vicente Manansala' },
      { key: 'C', text: 'Benedicto Cabrera (BenCab)' },
      { key: 'D', text: 'Ang Kiukok' }
    ],
    correctAnswer: 'A',
    explanation: 'Fernando Amorsolo was the first National Artist of the Philippines, famed for capturing rural pastoral Philippine landscapes in luminous tropical sunlight.',
    topicRef: '2.0 National Artists: Fernando Amorsolo'
  },
  {
    id: 7,
    question: "Who is the legendary National Artist for Visual Arts known for monumental historical murals such as 'Filipino Struggles Through History' in Manila City Hall?",
    options: [
      { key: 'A', text: 'Carlos \'Botong\' Francisco' },
      { key: 'B', text: 'Guillermo Tolentino' },
      { key: 'C', text: 'Jose Joya' },
      { key: 'D', text: 'Napoleon Abueva' }
    ],
    correctAnswer: 'A',
    explanation: 'Carlos "Botong" Francisco revived the art of the mural in the Philippines, capturing epic historical and mythical narratives with undulating rhythmic lines.',
    topicRef: '2.0 National Artists: Botong Francisco'
  },
  {
    id: 8,
    question: "Who is recognized as the 'Father of Modern Philippine Sculpture' and youngest National Artist awardee, famous for works like 'Kaganapan' and the Transfiguration at Eternal Gardens?",
    options: [
      { key: 'A', text: 'Napoleon Abueva' },
      { key: 'B', text: 'Guillermo Tolentino' },
      { key: 'C', text: 'Eduardo Castrillo' },
      { key: 'D', text: 'Solomon Saprid' }
    ],
    correctAnswer: 'A',
    explanation: 'Napoleon Abueva pioneered modern sculpture in the Philippines utilizing indigenous woods, metals, and modernist stylized forms.',
    topicRef: '3.0 Philippine Sculptors: Napoleon Abueva'
  },
  {
    id: 9,
    question: "Who sculpted the classical 'Oblation' at the University of the Philippines and the monumental 'Bonifacio Monument' in Caloocan?",
    options: [
      { key: 'A', text: 'Guillermo Tolentino' },
      { key: 'B', text: 'Napoleon Abueva' },
      { key: 'C', text: 'Damian Domingo' },
      { key: 'D', text: 'Anastacio Caedo' }
    ],
    correctAnswer: 'A',
    explanation: 'Guillermo Tolentino was the master of classical neoclassical sculpture in the Philippines, creating the iconic UP Oblation and Bonifacio Monument.',
    topicRef: '3.0 Philippine Sculptors: Guillermo Tolentino'
  },
  {
    id: 10,
    question: "What is 'T\'nalak' cloth and which Philippine indigenous ethnolinguistic group hand-weaves it from abaca fibers using traditional dream patterns?",
    options: [
      { key: 'A', text: 'The T\'boli people of Lake Sebu, South Cotabato (Dreamweavers)' },
      { key: 'B', text: 'The Ifugao of the Cordilleras' },
      { key: 'C', text: 'The Tagalogs of Batangas' },
      { key: 'D', text: 'The Badjaos of Sulu' }
    ],
    correctAnswer: 'A',
    explanation: 'T\'nalak is the sacred tri-color abaca fabric woven by T\'boli dreamweavers (like GAMABA awardee Lang Dulay) guided by dreams from the spirit Fu Dalu.',
    topicRef: '3.0 Indigenous Philippine Textiles: T\'nalak'
  },
  {
    id: 11,
    question: "What is 'Inabel' (or Abel Iloco)?",
    options: [
      { key: 'A', text: 'A traditional handwoven textile made by Ilocano weavers on wooden pedal looms (famed awardee: Magdalena Gamayo)' },
      { key: 'B', text: 'A carved wooden rice spoon' },
      { key: 'C', text: 'A bronze gong instrument' },
      { key: 'D', text: 'A woven bamboo hat' }
    ],
    correctAnswer: 'A',
    explanation: 'Inabel is the sturdy, intricately patterned woven cotton cloth from the Ilocos region created by master weavers like GAMABA awardee Magdalena Gamayo.',
    topicRef: '3.0 Indigenous Philippine Textiles: Inabel'
  },
  {
    id: 12,
    question: "What is 'Yakan Weaving' (Seputangan and Sinaluan) renowned for?",
    options: [
      { key: 'A', text: 'Intricate, brightly colored geometric and symmetrical patterns woven on backstrap looms in Basilan / Zamboanga (famed awardee: Apuh Ambalang Ausalin)' },
      { key: 'B', text: 'Plain white silk robes' },
      { key: 'C', text: 'Painting on leather shields' },
      { key: 'D', text: 'Knitted wool sweaters' }
    ],
    correctAnswer: 'A',
    explanation: 'Yakan weavers produce highly complex, vibrant geometric tapestry cloths (Seputangan) revered for mathematical symmetry.',
    topicRef: '3.0 Indigenous Philippine Textiles: Yakan'
  },
  {
    id: 13,
    question: "What are the three primary 'Warm Colors' on the traditional 12-hue color wheel?",
    options: [
      { key: 'A', text: 'Red, Orange, and Yellow' },
      { key: 'B', text: 'Blue, Green, and Violet' },
      { key: 'C', text: 'Black, White, and Gray' },
      { key: 'D', text: 'Brown, Tan, and Beige' }
    ],
    correctAnswer: 'A',
    explanation: 'Warm colors (red, orange, yellow) evoke heat, energy, sunshine, and advance visually toward the viewer in a composition.',
    topicRef: '4.0 Elements of Art: Color Theory'
  },
  {
    id: 14,
    question: "What are 'Complementary Colors'?",
    options: [
      { key: 'A', text: 'Colors that sit directly opposite each other on the color wheel (e.g., Blue and Orange, Red and Green, Yellow and Violet), creating maximum visual contrast' },
      { key: 'B', text: 'Colors that sit next to each other on the wheel' },
      { key: 'C', text: 'Different shades of a single color' },
      { key: 'D', text: 'Colors that say polite compliments' }
    ],
    correctAnswer: 'A',
    explanation: 'Complementary color pairs create maximum chromatic vibration and contrast when placed side-by-side.',
    topicRef: '4.0 Color Schemes'
  },
  {
    id: 15,
    question: "What is an 'Analogous' color scheme?",
    options: [
      { key: 'A', text: 'Colors that sit immediately adjacent to each other on the color wheel (e.g., Yellow, Yellow-Green, and Green), creating harmonious unity' },
      { key: 'B', text: 'Colors on opposite sides of the wheel' },
      { key: 'C', text: 'Black and white only' },
      { key: 'D', text: 'Three colors forming an equilateral triangle' }
    ],
    correctAnswer: 'A',
    explanation: 'Analogous colors share common undertones and produce serene, unified, and cohesive visual compositions.',
    topicRef: '4.0 Color Schemes'
  },
  {
    id: 16,
    question: "What does the Italian term 'Chiaroscuro' mean in painting and drawing?",
    options: [
      { key: 'A', text: 'The strong dramatic contrast between light (chiaro) and dark/shadow (scuro) to create a convincing illusion of three-dimensional volume' },
      { key: 'B', text: 'Painting on wet plaster' },
      { key: 'C', text: 'Mixing paint with egg yolk' },
      { key: 'D', text: 'Drawing with charcoal only' }
    ],
    correctAnswer: 'A',
    explanation: 'Chiaroscuro (mastered by Leonardo da Vinci, Caravaggio, and Rembrandt) models light and shadow to create lifelike depth.',
    topicRef: '4.0 Elements of Art: Value & Chiaroscuro'
  },
  {
    id: 17,
    question: "What is 'Sfumato' painting technique developed by Leonardo da Vinci (evident in the Mona Lisa)?",
    options: [
      { key: 'A', text: 'Subtle, imperceptible blending of colors and tones without harsh outlines, creating a soft, hazy, smokelike transition' },
      { key: 'B', text: 'Carving stone with a hammer' },
      { key: 'C', text: 'Thick globby paint applied with a knife' },
      { key: 'D', text: 'Drawing geometric outlines in black ink' }
    ],
    correctAnswer: 'A',
    explanation: 'Sfumato (from Italian fumo, smoke) layers translucent glazes to eliminate sharp borders, giving portraits a soft, lifelike atmospheric glow.',
    topicRef: '2.0 Renaissance Art Techniques'
  },
  {
    id: 18,
    question: "What is 'Impasto' painting technique (prominently used by Vincent van Gogh)?",
    options: [
      { key: 'A', text: 'Applying thick, heavy layers of paint onto the canvas such that brush strokes and palette knife textures stand out in physical 3D relief' },
      { key: 'B', text: 'Watering down paint until it is completely transparent' },
      { key: 'C', text: 'Spraying paint through a stencil' },
      { key: 'D', text: 'Burning wood with hot metal' }
    ],
    correctAnswer: 'A',
    explanation: 'Impasto uses unthinned, thick paint (as seen in Van Gogh\'s The Starry Night) to create rich tactile texture and emotional dynamism.',
    topicRef: '2.0 Painting Mediums & Techniques'
  },
  {
    id: 19,
    question: "Which of the following is a painting technique using pigments mixed with hot molten beeswax?",
    options: [
      { key: 'A', text: 'Encaustic' },
      { key: 'B', text: 'Fresco' },
      { key: 'C', text: 'Tempera' },
      { key: 'D', text: 'Gouache' }
    ],
    correctAnswer: 'A',
    explanation: 'Encaustic painting (practiced in ancient Greece and Egyptian Fayum mummy portraits) binds dry pigments in molten beeswax.',
    topicRef: '2.0 Painting Mediums'
  },
  {
    id: 20,
    question: "What is 'Buon Fresco' (True Fresco)?",
    options: [
      { key: 'A', text: 'Painting with water-based pigments directly onto freshly laid, wet lime plaster so the pigment chemically bonds with the wall as it dries' },
      { key: 'B', text: 'Painting on dry wooden boards' },
      { key: 'C', text: 'Drawing with wax crayons' },
      { key: 'D', text: 'Painting on silk fabric' }
    ],
    correctAnswer: 'A',
    explanation: 'Buon Fresco (used by Michelangelo on the Sistine Chapel ceiling) permanently integrates pigment into the plaster wall as calcium carbonate forms.',
    topicRef: '2.0 Painting Mediums: Fresco'
  },
  {
    id: 21,
    question: "What is 'Tempera' painting\'s traditional binding agent?",
    options: [
      { key: 'A', text: 'Egg yolk (egg tempera)' },
      { key: 'B', text: 'Linseed oil' },
      { key: 'C', text: 'Synthetic acrylic polymer' },
      { key: 'D', text: 'Tree sap gum arabic' }
    ],
    correctAnswer: 'A',
    explanation: 'Traditional egg tempera mixes powdered pigments with egg yolk and water, drying rapidly to a crisp, durable matte finish.',
    topicRef: '2.0 Painting Mediums: Tempera'
  },
  {
    id: 22,
    question: "What are the seven recognized 'Principles of Design' in visual arts?",
    options: [
      { key: 'A', text: 'Balance, Contrast, Emphasis, Movement/Rhythm, Pattern/Repetition, Proportion/Scale, and Unity/Harmony' },
      { key: 'B', text: 'Line, Shape, Form, Color, Value, Texture, and Space' },
      { key: 'C', text: 'North, South, East, West, Up, Down, and Center' },
      { key: 'D', text: 'Pencil, Pen, Brush, Canvas, Easel, Paint, and Water' }
    ],
    correctAnswer: 'A',
    explanation: 'The Principles of Design describe how the Elements of Art (line, shape, color, etc.) are organized and composed to create compelling visual works.',
    topicRef: '5.0 Principles of Design'
  },
  {
    id: 23,
    question: "What is 'Asymmetrical Balance' (Occult / Informal Balance)?",
    options: [
      { key: 'A', text: 'Balance achieved when two sides of a composition are visually different in elements yet equal in overall visual weight' },
      { key: 'B', text: 'An exact mirror image on both left and right sides' },
      { key: 'C', text: 'A completely blank canvas' },
      { key: 'D', text: 'A painting where all objects are grouped in one tiny corner' }
    ],
    correctAnswer: 'A',
    explanation: 'Asymmetrical balance creates dynamic harmony by balancing contrasting shapes, colors, and textures without identical bilateral symmetry.',
    topicRef: '5.0 Principles of Design: Balance'
  },
  {
    id: 24,
    question: "What is 'Linear Perspective' invented by Filippo Brunelleschi during the Italian Renaissance?",
    options: [
      { key: 'A', text: 'A mathematical system for creating the illusion of 3D depth and space on a 2D surface using a horizon line, orthogonal lines, and vanishing points' },
      { key: 'B', text: 'Drawing lines with a crooked stick' },
      { key: 'C', text: 'A technique for painting curved arches' },
      { key: 'D', text: 'Carving lines into marble' }
    ],
    correctAnswer: 'A',
    explanation: 'Brunelleschi\'s linear perspective revolutionized Western art by formulating geometric converging lines toward vanishing points on the horizon.',
    topicRef: '4.0 Elements of Art: Space & Perspective'
  },
  {
    id: 25,
    question: "What is 'Atmospheric Perspective' (Aerial Perspective)?",
    options: [
      { key: 'A', text: 'Creating the illusion of depth by making distant objects appear lighter, lower in contrast, blurrier, and bluish/cooler in tone' },
      { key: 'B', text: 'Drawing airplanes in the sky' },
      { key: 'C', text: 'Painting during a thunderstorm' },
      { key: 'D', text: 'Looking at art through binoculars' }
    ],
    correctAnswer: 'A',
    explanation: 'Atmospheric perspective mimics how atmospheric particles scatter light, making distant mountains and horizons appear pale, hazy, and blue.',
    topicRef: '4.0 Space & Aerial Perspective'
  },
  {
    id: 26,
    question: "Who is the legendary National Artist for Visual Arts known for 'Transparent Cubism' depicting Philippine genre scenes (e.g., 'Market Scene', 'Madonna of the Slums')?",
    options: [
      { key: 'A', text: 'Vicente Manansala' },
      { key: 'B', text: 'Cesar Legaspi' },
      { key: 'C', text: 'Hernando R. Ocampo' },
      { key: 'D', text: 'Arturo Luz' }
    ],
    correctAnswer: 'A',
    explanation: 'Vicente Manansala developed Transparent Cubism, layering delicate geometric planes to depict Philippine urban and rural scenes.',
    topicRef: '2.0 Philippine Modernists: Vicente Manansala'
  },
  {
    id: 27,
    question: "Who painted the celebrated masterpiece 'The Last Supper' (Il Cenacolo) in the refectory of the Convent of Santa Maria delle Grazie in Milan?",
    options: [
      { key: 'A', text: 'Leonardo da Vinci' },
      { key: 'B', text: 'Michelangelo Buonarroti' },
      { key: 'C', text: 'Raphael Sanzio' },
      { key: 'D', text: 'Donatello' }
    ],
    correctAnswer: 'A',
    explanation: 'Leonardo da Vinci painted The Last Supper (1495-1498), capturing the dramatic moment Jesus announces that one disciple will betray him.',
    topicRef: '2.0 High Renaissance Masters: Leonardo'
  },
  {
    id: 28,
    question: "Who sculpted the monumental, emotionally profound marble masterpieces 'David' and 'Pieta' in Rome?",
    options: [
      { key: 'A', text: 'Michelangelo Buonarroti' },
      { key: 'B', text: 'Gian Lorenzo Bernini' },
      { key: 'C', text: 'Auguste Rodin' },
      { key: 'D', text: 'Donatello' }
    ],
    correctAnswer: 'A',
    explanation: 'Michelangelo carved David (Florence) and the Pieta (St. Peter\'s Basilica, Rome) from single blocks of Carrara marble with astonishing anatomical perfection.',
    topicRef: '2.0 High Renaissance Masters: Michelangelo'
  },
  {
    id: 29,
    question: "Who painted the celebrated High Renaissance fresco 'The School of Athens' in the Apostolic Palace in the Vatican, celebrating philosophy and sciences?",
    options: [
      { key: 'A', text: 'Raphael Sanzio' },
      { key: 'B', text: 'Leonardo da Vinci' },
      { key: 'C', text: 'Titian' },
      { key: 'D', text: 'Sandro Botticelli' }
    ],
    correctAnswer: 'A',
    explanation: 'Raphael\'s School of Athens gathers ancient philosophers (Plato pointing up, Aristotle gesturing down) in an idealized grand classical architectural setting.',
    topicRef: '2.0 High Renaissance Masters: Raphael'
  },
  {
    id: 30,
    question: "What is 'Impressionism' (Claude Monet, Pierre-Auguste Renoir, Edgar Degas)?",
    options: [
      { key: 'A', text: 'A 19th-century French art movement characterized by short, visible brushstrokes, open composition, everyday subjects, and accurate depiction of changing light and atmospheric effects (en plein air)' },
      { key: 'B', text: 'Making impressions on clay with stamps' },
      { key: 'C', text: 'Drawing exact mathematical geometric shapes' },
      { key: 'D', text: 'Painting only at midnight inside dark rooms' }
    ],
    correctAnswer: 'A',
    explanation: 'Impressionists captured transient optical impressions of natural sunlight using rapid brushwork directly outdoors (plein air).',
    topicRef: '2.0 Art Movements: Impressionism'
  },
  {
    id: 31,
    question: "Which painting by Claude Monet gave its name to the entire Impressionist movement?",
    options: [
      { key: 'A', text: 'Impression, Sunrise (Impression, soleil levant)' },
      { key: 'B', text: 'Water Lilies' },
      { key: 'C', text: 'The Starry Night' },
      { key: 'D', text: 'The Scream' }
    ],
    correctAnswer: 'A',
    explanation: 'Monet\'s 1872 painting Impression, Sunrise inspired art critic Louis Leroy to derisively coin the term "Impressionists," which the artists proudly adopted.',
    topicRef: '2.0 Art Movements: Impressionism'
  },
  {
    id: 32,
    question: "What was 'Cubism' co-founded by Pablo Picasso and Georges Braque?",
    options: [
      { key: 'A', text: 'An avant-garde art movement that shattered single-point perspective, deconstructing subjects into geometric facets and displaying multiple viewpoints simultaneously' },
      { key: 'B', text: 'Carving wooden cubic boxes' },
      { key: 'C', text: 'Painting only in shades of blue' },
      { key: 'D', text: 'An ancient Roman mosaic style' }
    ],
    correctAnswer: 'A',
    explanation: 'Cubism revolutionized modern art by dismantling traditional illusionistic perspective, reassembling objects into multi-angled geometric planes.',
    topicRef: '2.0 Art Movements: Cubism'
  },
  {
    id: 33,
    question: "What is 'Surrealism' (Salvador Dalí, René Magritte, Max Ernst)?",
    options: [
      { key: 'A', text: 'An art movement inspired by psychoanalysis that sought to liberate the unconscious mind, depicting dreamlike, bizarre, illogical, and hyper-realistic juxtapositions' },
      { key: 'B', text: 'Drawing portraits that look 100% like photographs' },
      { key: 'C', text: 'Painting real estate advertisements' },
      { key: 'D', text: 'Designing highway billboards' }
    ],
    correctAnswer: 'A',
    explanation: 'Surrealism channeled Freud\'s theories of dreams and the subconscious, creating fantastical scenes like Dalí\'s melting clocks in The Persistence of Memory.',
    topicRef: '2.0 Art Movements: Surrealism'
  },
  {
    id: 34,
    question: "Who painted the iconic expressionist masterpiece 'The Scream' (1893), capturing existential human anguish under a blood-red sky?",
    options: [
      { key: 'A', text: 'Edvard Munch' },
      { key: 'B', text: 'Vincent van Gogh' },
      { key: 'C', text: 'Gustav Klimt' },
      { key: 'D', text: 'Paul Gauguin' }
    ],
    correctAnswer: 'A',
    explanation: 'Norwegian artist Edvard Munch painted The Scream, an archetype of Expressionist agony reflecting the psychological trauma of modern existence.',
    topicRef: '2.0 Art Movements: Expressionism'
  },
  {
    id: 35,
    question: "What is 'Manunggul Jar' and why is it a supreme national treasure of ancient Philippine art?",
    options: [
      { key: 'A', text: 'A Neolithic secondary burial jar discovered in Palawan featuring a boat with two figures on the lid, symbolizing the soul\'s voyage to the afterlife' },
      { key: 'B', text: 'A Spanish colonial wine jar' },
      { key: 'C', text: 'A cooking pot from Intramuros' },
      { key: 'D', text: 'A modern decorative flower vase' }
    ],
    correctAnswer: 'A',
    explanation: 'The Manunggul Jar (890–710 BCE) found in Tabon Caves, Palawan, is a masterpiece of maritime animist spirituality and pottery craft.',
    topicRef: '3.0 Ancient Philippine Art: Manunggul Jar'
  },
  {
    id: 36,
    question: "What is 'Bulul' in Cordillera indigenous art?",
    options: [
      { key: 'A', text: 'A carved wooden anthropomorphic figure representing an Ifugao rice deity, guardian spirit, and ancestor that protects rice granaries' },
      { key: 'B', text: 'A bamboo musical flute' },
      { key: 'C', text: 'A brass combat knife' },
      { key: 'D', text: 'A traditional woven hat' }
    ],
    correctAnswer: 'A',
    explanation: 'Bulul statues are ritualistic carved granary deities of the Ifugao, consecrated through pig blood rituals to ensure bountiful rice harvests.',
    topicRef: '3.0 Cordillera Indigenous Art: Bulul'
  },
  {
    id: 37,
    question: "What is 'Okir' (or Okkil) in Maranao and Muslim Filipino art?",
    options: [
      { key: 'A', text: 'The curvilinear floral, leaf, and geometric carving and design motifs (Okir a Datu / Okir a Bay) found in torogans, panolong, and metalwork' },
      { key: 'B', text: 'A type of spicy rice dish' },
      { key: 'C', text: 'A martial arts fighting dance' },
      { key: 'D', text: 'A religious prayer book' }
    ],
    correctAnswer: 'A',
    explanation: 'Okir is the distinct artistic visual language of the Maranao and Maguindanao, featuring flowing wave, scroll, and leaf motifs.',
    topicRef: '3.0 Islamic & Mindanao Art: Okir'
  },
  {
    id: 38,
    question: "What is the 'Sarimanok' in Maranao mythology and visual art?",
    options: [
      { key: 'A', text: 'A legendary mythical bird with colorful, elaborate okir feathers, holding a fish in its beak or claws, symbolizing prosperity, royalty, and fortune' },
      { key: 'B', text: 'A domestic fighting rooster' },
      { key: 'C', text: 'A mythical mountain dragon' },
      { key: 'D', text: 'A sea turtle carving' }
    ],
    correctAnswer: 'A',
    explanation: 'The Sarimanok is the cultural totem bird of the Maranao, embodying links to the spirit realm and nobility.',
    topicRef: '3.0 Mindanao Cultural Symbols: Sarimanok'
  },
  {
    id: 39,
    question: "What is 'Torogan' in Philippine architectural heritage?",
    options: [
      { key: 'A', text: 'The traditional ancestral communal house of the Maranao royal datu clan, famous for its wing-like protruding carved floor-beam ends called Panolong' },
      { key: 'B', text: 'A bamboo raft' },
      { key: 'C', text: 'A Spanish fortress stone wall' },
      { key: 'D', text: 'A rice storage hut' }
    ],
    correctAnswer: 'A',
    explanation: 'The Torogan is a majestic Maranao royal residence constructed without nails, resting on tree-trunk boulders to withstand earthquakes, adorned with Panolong carvings.',
    topicRef: '3.0 Philippine Vernacular Architecture'
  },
  {
    id: 40,
    question: "Which Philippine Catholic church is internationally renowned for its 'Earthquake Baroque' architecture and massive, sculptural side buttresses (UNESCO World Heritage)?",
    options: [
      { key: 'A', text: 'San Agustin Church in Paoay, Ilocos Norte (Paoay Church)' },
      { key: 'B', text: 'Manila Cathedral in Intramuros' },
      { key: 'C', text: 'Quiapo Church' },
      { key: 'D', text: 'Baclaran Church' }
    ],
    correctAnswer: 'A',
    explanation: 'Paoay Church is the iconic masterpiece of Philippine Earthquake Baroque, engineered with 24 colossal, stepped stone buttresses to resist seismic destruction.',
    topicRef: '3.0 Philippine Heritage Churches'
  },
  {
    id: 41,
    question: "What is 'Kudyapi' in Philippine traditional music and instruments?",
    options: [
      { key: 'A', text: 'A two-stringed fretted wooden boat-lute played by the Maranao, Maguindanao, and Palaw\'an people (famed GAMABA awardee: Samaon Sulaiman)' },
      { key: 'B', text: 'A bamboo nose flute' },
      { key: 'C', text: 'A brass gong set' },
      { key: 'D', text: 'A skin-covered war drum' }
    ],
    correctAnswer: 'A',
    explanation: 'The Kudyapi (or Kutiyapi) is a master lute instrument held like a guitar, plucked with a rattan plectrum to accompany poetry and ballads.',
    topicRef: '3.0 Traditional Instruments: GAMABA'
  },
  {
    id: 42,
    question: "What does the 'GAMABA' award (Gawad sa Manlilikha ng Bayan / National Living Treasures) honor in the Philippines (Republic Act No. 7355)?",
    options: [
      { key: 'A', text: 'Filipino traditional and folk artists who have achieved the highest technical and artistic excellence in indigenous crafts, preserving heritage for future generations' },
      { key: 'B', text: 'Modern pop music singers on television' },
      { key: 'C', text: 'Commercial fashion models' },
      { key: 'D', text: 'Hollywood film directors' }
    ],
    correctAnswer: 'A',
    explanation: 'GAMABA recognizes master traditional cultural bearers (weavers, bards, chanters, metalworkers) who uphold indigenous ancestral Philippine artistic heritage.',
    topicRef: '3.0 GAMABA Award & Heritage'
  },
  {
    id: 43,
    question: "What is 'Pop Art' (Andy Warhol, Roy Lichtenstein) in 20th-century art history?",
    options: [
      { key: 'A', text: 'An art movement that drew inspiration from popular and commercial mass culture (advertisements, comic strips, soup cans, celebrities)' },
      { key: 'B', text: 'Popping bubble wrap as an art performance' },
      { key: 'C', text: 'Painting only portraits of grandfathers' },
      { key: 'D', text: 'Classical oil painting of Roman gods' }
    ],
    correctAnswer: 'A',
    explanation: 'Pop Art blurred the line between high fine art and low mass consumer culture, using screen printing and comic aesthetics.',
    topicRef: '2.0 Art Movements: Pop Art'
  },
  {
    id: 44,
    question: "What is 'Ready-Made' (Found Object art) pioneered by Marcel Duchamp (e.g., 'Fountain', 1917)?",
    options: [
      { key: 'A', text: 'Taking a pre-manufactured, ordinary utilitarian object and elevating it to art status by choosing it, signing it, and placing it in an art context (Conceptual Art)' },
      { key: 'B', text: 'Buying a pre-made canvas at an art supply store' },
      { key: 'C', text: 'A microwave instant dinner' },
      { key: 'D', text: 'A painting completed in under 5 minutes' }
    ],
    correctAnswer: 'A',
    explanation: 'Marcel Duchamp challenged the definition of art by submitting a porcelain urinal signed "R. Mutt 1917", establishing Conceptual Art (the idea is the art).',
    topicRef: '2.0 Dadaism & Conceptual Art'
  },
  {
    id: 45,
    question: "Who is the famous Mexican painter known for deeply personal, vibrant, and painful surreal self-portraits exploring indigenous Mexican culture and disability?",
    options: [
      { key: 'A', text: 'Frida Kahlo' },
      { key: 'B', text: 'Diego Rivera' },
      { key: 'C', text: 'David Alfaro Siqueiros' },
      { key: 'D', text: 'Georgia O\'Keeffe' }
    ],
    correctAnswer: 'A',
    explanation: 'Frida Kahlo created iconic self-portraits confronting physical pain from a bus accident, identity, and Mexican folk heritage.',
    topicRef: '2.0 Global Master Artists: Frida Kahlo'
  },
  {
    id: 46,
    question: "What is 'Relief Sculpture' (Bas-Relief vs High-Relief)?",
    options: [
      { key: 'A', text: 'A sculpted artwork where forms project outward from a solid supporting background plane, rather than being free-standing in the round' },
      { key: 'B', text: 'A sculpture that makes you feel relaxed' },
      { key: 'C', text: 'A sculpture carved from ice' },
      { key: 'D', text: 'A hollow clay vase' }
    ],
    correctAnswer: 'A',
    explanation: 'Relief sculpture remains attached to a background matrix: Bas-relief has shallow projection (coins), while High-relief projects prominently.',
    topicRef: '3.0 Sculpture Types'
  },
  {
    id: 47,
    question: "What is 'Lost-Wax Casting' (Cire Perdue) in bronze metallurgy and sculpture?",
    options: [
      { key: 'A', text: 'A sculptural casting method where a molten metal is poured into a mold created around a wax model, which melts away when heated' },
      { key: 'B', text: 'Losing a candle in a dark room' },
      { key: 'C', text: 'Carving statues from solid candle wax' },
      { key: 'D', text: 'Polishing bronze with wax' }
    ],
    correctAnswer: 'A',
    explanation: 'The lost-wax method has been used for millennia to duplicate intricate wax sculptures into durable hollow bronze or metal castings.',
    topicRef: '3.0 Sculpture Casting Techniques'
  },
  {
    id: 48,
    question: "What is the 'Rule of Thirds' in visual composition and photography?",
    options: [
      { key: 'A', text: 'Dividing an image into a 3x3 grid with two horizontal and two vertical lines, placing key subjects along the lines or at their four intersection points for balance' },
      { key: 'B', text: 'Taking exactly three photos of everything' },
      { key: 'C', text: 'Using only three colors in a painting' },
      { key: 'D', text: 'Leaving two-thirds of the canvas completely blank' }
    ],
    correctAnswer: 'A',
    explanation: 'The Rule of Thirds avoids static dead-center compositions by positioning focal points along aesthetic grid intersections.',
    topicRef: '5.0 Compositional Rules'
  },
  {
    id: 49,
    question: "What are 'Tertiary Colors' on the color wheel?",
    options: [
      { key: 'A', text: 'Colors created by mixing equal parts of a primary color and its adjacent secondary color (e.g., Red-Orange, Yellow-Green, Blue-Violet)' },
      { key: 'B', text: 'Black, white, and gray' },
      { key: 'C', text: 'Colors made by mixing water with dirt' },
      { key: 'D', text: 'Fluorescent neon colors' }
    ],
    correctAnswer: 'A',
    explanation: 'There are 6 tertiary colors named with the primary color first: Red-Orange, Red-Violet, Yellow-Orange, Yellow-Green, Blue-Green, and Blue-Violet.',
    topicRef: '4.0 Color Theory'
  },
  {
    id: 50,
    question: "Why is Art Appreciation crucial in 21st-century holistic education?",
    options: [
      { key: 'A', text: 'It nurtures creative imagination, aesthetic sensibility, cultural empathy, critical visual literacy, and humanistic values in an increasingly visual world' },
      { key: 'B', text: 'To force everyone to become professional gallery painters' },
      { key: 'C', text: 'To eliminate written books' },
      { key: 'D', text: 'To make classrooms look expensive' }
    ],
    correctAnswer: 'A',
    explanation: 'Art appreciation expands human emotional depth, cultivates critical perception, and fosters reverence for diverse cultural expressions.',
    topicRef: '1.0 Value & Role of Art Appreciation'
  }
];
