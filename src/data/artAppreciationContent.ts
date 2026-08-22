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

export const ART_APPRECIATION_PAGES: LessonPage[] = [
  // ==========================================
  // DAY 1: ART APPRECIATION
  // ==========================================
  {
    pageNumber: 1,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Etymology, Definition & Functions of Art",
    pdfPageRef: "PDF Page 1",
    readTime: "3 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Etymology and Definition of Art",
        items: [
          "Art is derived from a Latin term 'ars,' which means skill, talent, or ability.",
          "Art is the expression of creative skill and imagination.",
          "Art is one of the seven fields of humanities (Art, Philosophy, Language, Literature, Music, Religion, History).",
          "Art sits at the center of the seven fields because it provides enhancement of individual human potential."
        ]
      },
      {
        type: "comparison",
        heading: "Functions of Art",
        items: [
          "Art as Personal: An artist may create a piece out of a need for self-expression or gratification, or to communicate a thought or point to the viewer.",
          "Art as Social: Art has a social function when it addresses aspects of collective life, as opposed to one person's point of view or experience — viewers can relate to and are sometimes influenced by social art.",
          "Art as Physical: Works of art created to perform some service have physical functions. Example: a Fijian war club, however wonderful its craftsmanship, was created to perform the physical function of smashing skulls."
        ]
      }
    ]
  },
  {
    pageNumber: 2,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Classifications of Art",
    pdfPageRef: "PDF Page 1-2",
    readTime: "3 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "5 Classifications of Art",
        items: [
          "1. Verbal: Literature (prose or poetry), Oratory (public speaking).",
          "2. Non-Verbal: Architecture, fashion, design, weaving, ceramics, and photography.",
          "3. Mixed: Theater and drama, opera, cinema, and performing arts (singing and dancing).",
          "4. Applied Art: The application (and resulting product) of artistic design to utilitarian objects in everyday use — e.g. architecture, textile, furniture.",
          "5. Fine Art: Works that have no function other than providing aesthetic or intellectual stimulation to the viewer — e.g. drawing, painting, sculpture."
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Three Parts of a Work of Art & Artist vs. Artisan",
    pdfPageRef: "PDF Page 2",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "3 Parts of a Work of Art",
        items: [
          "1. Subject: The image you can easily identify when confronted with an art piece. Two types — Representational Art (appears very much like how people see things in reality) and Non-Representational Art (compositions that do not rely on representation or mimesis, marking a departure from reality in the depiction of imagery).",
          "2. Form: The overall organization of the artwork — an outcome of the artist's effort to use elements of art and arrange them according to aesthetic principles.",
          "3. Content: The emotional and intellectual messages of an artwork — the statements, moods, or interpretations developed by an artist through the artwork."
        ]
      },
      {
        type: "comparison",
        heading: "Artist vs. Artisan",
        items: [
          "Artist: Learns to sketch and begins with a pencil and sketchpad to work with an idea; the aim is to create an overall reaction from a viewer.",
          "Artisan: A craftsman who makes practical artistic products, such as earrings, urns, stained glass, and other accessories."
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Two-Dimensional Art & Common Painting Techniques (Part 1)",
    pdfPageRef: "PDF Page 2-3",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Two-Dimensional Art",
        items: [
          "Has mathematical dimensions of width and height.",
          "Can be decorative spaces or plastic faces.",
          "Bound to work only within the frame.",
          "Painting: The process where the artist applies colors to surfaces using a paint brush, painting knives, or rollers."
        ]
      },
      {
        type: "table",
        heading: "Common Painting Techniques",
        tableData: {
          headers: ["Technique", "Description"],
          rows: [
            ["Watercolor", "Usually done on paper, using water-based solutions to mix the colors."],
            ["Fresco", "The moment paint is applied to the surface, the color dries into the plaster and the painting becomes an integral part of the wall."],
            ["Tempera", "Paints or minerals are mixed with egg yolk or egg white and ore."],
            ["Pastel", "A stick of dried paste made of pigment ground with chalk and compounded with gum water; provides richness but is hard to keep vibrant."],
            ["Encaustic", "Done by applying wax colors with fixed heat."],
            ["Oil Painting", "The heaviest of painting mediums — pigments mixed with linseed oil applied to canvas; flexible, dries slowly, appears glossy, and lasts long."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 5,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "More Painting Techniques & Famous Renaissance Artists",
    pdfPageRef: "PDF Page 3",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "More Painting Techniques",
        tableData: {
          headers: ["Technique", "Description"],
          rows: [
            ["Acrylic", "Synthetic paint mixed with acrylic emulsion as binder; dries fast and turns water resistant once complete."],
            ["Easel Painting", "Painting executed on a portable support, such as a panel or canvas, instead of on a wall."],
            ["Mural Painting", "Painting done on a large wall."],
            ["Relief", "A painting technique wherein images are raised on the surface."]
          ]
        }
      },
      {
        type: "table",
        heading: "Famous Renaissance Artists",
        tableData: {
          headers: ["Artist", "Background", "Notable Works"],
          rows: [
            ["Sandro Botticelli (1445-1510)", "Italian painter of the Early Renaissance, from Florence, Italy.", "Fortitude, The Birth of Venus, Temptation of Christ, St. Augustine, Adoration of the Magi"],
            ["Raphael Sanzio (1483-1520)", "Italian architect and painter of the High Renaissance, known for perfection and grace; considered a Master alongside Da Vinci and Michelangelo.", "School of Athens, The Transfiguration, Madonna and Child, Resurrection of Christ"],
            ["Leonardo da Vinci (1452-1519)", "Skilled and knowledgeable across science, mathematics, music, and art — the epitome of a Renaissance man.", "The Last Supper, Mona Lisa, Vitruvian Man"],
            ["Michelangelo Buonarroti (1475-1564)", "Italian Renaissance artist, often considered a contender for the archetypal Renaissance man alongside Da Vinci.", "Sistine Chapel Ceiling, Creation of Adam, David, Pieta"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 6,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Famous Filipino Painters",
    pdfPageRef: "PDF Page 3",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Famous Filipino Painters",
        tableData: {
          headers: ["Painter", "Background & Notable Works"],
          rows: [
            ["Fernando Amorsolo", "The 'Grand Old Man of Philippine Art' and First National Artist (1972); an Impressionist painter of rural landscapes. Works: Dalagang Bukid, Emilio Aguinaldo, Making of the Philippine Flag, First Baptism in the Philippines."],
            ["Carlos 'Botong' Francisco", "National Artist for Visual Arts (1973); painter of fisherfolk in Angono, Rizal, famous for his mural paintings at the Manila City Hall."],
            ["Juan Luna", "Filipino painter and activist who earned the gold medal at the 1884 Exposición de Bellas Artes in Madrid for his painting, the Spoliarium."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 7,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Three-Dimensional Art: Architecture & the Eight Wonders of the World (Part 1)",
    pdfPageRef: "PDF Page 4",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Three-Dimensional Art",
        items: [
          "Its distinguishing factor is its actual and real depth.",
          "Depth allows it to be viewed across different angles.",
          "Sometimes called 'plastic arts,' not plastic spaces.",
          "Architecture: The art of designing and constructing buildings. Technique — the Post-Lintel System uses two vertical supports and one horizontal beam on top (Example: Stonehenge)."
        ]
      },
      {
        type: "table",
        heading: "Eight Wonders of the World (Part 1)",
        tableData: {
          headers: ["Wonder", "Description"],
          rows: [
            ["Great Wall of China", "Built by the Qin and Ming dynasties, stretching through North China from east to west."],
            ["Chichen Itza", "A prominent Mayan city in Mexico that flourished from the 5th to 13th centuries CE; features 365 steps representing the solar year, reflecting the Mayans' advanced astronomical knowledge."],
            ["Petra", "A famous archaeological site in Jordan's southwestern desert, affectionately called the 'Rose City.'"],
            ["Machu Picchu", "Nestled where the Peruvian Andes converge with the Amazon Basin, this Historic Sanctuary is an unparalleled achievement in art, architecture, and land use, and a testament to the Inca civilization's legacy."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 8,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Eight Wonders of the World (Part 2) & Famous Filipino Architects",
    pdfPageRef: "PDF Page 4-5",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Eight Wonders of the World (Part 2)",
        tableData: {
          headers: ["Wonder", "Description"],
          rows: [
            ["Christ the Redeemer", "Graces the summit of Mount Corcovado in Rio de Janeiro; a 130-foot Art Deco statue designed by Heitor da Silva Costa, built from reinforced concrete and soapstone, weighing 635 tons."],
            ["Colosseum", "An ancient amphitheater in Rome that hosted gladiatorial contests, public executions, and diverse events."],
            ["Taj Mahal", "An exquisite marble mausoleum in Agra, India, displaying unmatched Mughal architecture; Emperor Shah Jahan built it between 1632 and 1653 as a tribute to his wife, Mumtaz Mahal."],
            ["Angkor Wat", "Located in Cambodia, it triumphed over Pompeii in Italy to claim the title of the eighth Wonder of the World, attracting millions of visitors annually."]
          ]
        }
      },
      {
        type: "table",
        heading: "Famous Filipino Architects",
        tableData: {
          headers: ["Architect", "Background"],
          rows: [
            ["Juan Nakpil", "First National Artist for Architecture (1973); the 'Father of Philippine Architecture'; renovated the Quiapo Church."],
            ["Leandro Locsin", "Designed the Cultural Center of the Philippines (CCP) and the Philippine International Convention Center (PICC)."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 9,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Sculpture Techniques & Famous Filipino Sculptors",
    pdfPageRef: "PDF Page 5",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Sculpture",
        content: "Most of the media used are clay, glass, plastics, wood, stone, or metals."
      },
      {
        type: "numbered_list",
        heading: "Techniques Used in Sculpture",
        items: [
          "1. Carving: Shapes are made by cutting away parts of the original block of wood, stone, or other materials such as bone, ivory, jade, plastic, or glass.",
          "2. Modeling: The process of adding, rather than taking away — usually built up by adding parts or filling out a pre-constructed framework.",
          "3. Casting: The process of creating a form by pouring a liquid material into a plaster mold, allowing it to set, washing it clean, and then removing the mold.",
          "4. Assemblage: The artist joins together a variety of materials in such a way that they take on new form and meaning.",
          "5. Molding: Often used interchangeably with 'moulding'; a manufacturing process of shaping materials into desired forms."
        ]
      },
      {
        type: "table",
        heading: "Famous Filipino Sculptors",
        tableData: {
          headers: ["Sculptor", "Background & Notable Works"],
          rows: [
            ["Guillermo Estrella Tolentino", "First National Artist for Sculpture (1973); the 'Father of Philippine Sculpture.' Works: Oblation, Bonifacio Monument."],
            ["Eduardo Castrillo", "Famous sculptor of landmark sculptures, e.g. the People Power Monument."],
            ["Napoleon Abueva", "The 'Father of Modern Philippine Sculpture.' Works: Judas' Kiss, The Transfiguration."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 10,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Textile Arts in the Philippines",
    pdfPageRef: "PDF Page 5-6",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Textile Arts",
        content: "Arts and crafts that use plant, animal, or synthetic fibers to construct practical or decorative objects."
      },
      {
        type: "table",
        heading: "Textile Arts in the Philippines",
        tableData: {
          headers: ["Textile", "Description"],
          rows: [
            ["T'nalak", "A colored fabric created by the women of the T'boli tribe in South Cotabato."],
            ["Pis-Yabit (Seputangan)", "A prized handwoven cloth of the Tausugs of Sulu, usually used as head covering."],
            ["Ikat", "An Ifugao style of weaving using a resist-dyeing process on either the warp or weft before weaving, to create a pattern or design."],
            ["Dagmay", "A handwoven textile of the Mandaya, made from abaca, involving a mud-dyeing technique."],
            ["Inaul", "Meaning 'weaved,' a unique fabric woven by Maguindanaon women weavers in Mindanao."],
            ["Banig", "Mainly produced in Basey, Samar; involves folding over strips of material to make unique geometrical designs."],
            ["Puso", "Reflects an old method of food preparation, showcasing the hard work, ingenuity, craftsmanship, and creativity of the Cebuanos in putting rice into woven pouches."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 11,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Technological Media",
    pdfPageRef: "PDF Page 6",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Technological Media",
        content: "Includes artworks designed and produced by means of new media technologies, comprising virtual art, computer graphics, computer animation, digital art, and more."
      },
      {
        type: "bullet_list",
        heading: "Types of Technological Media",
        items: [
          "Photography: The technique of capturing optical images on a light-sensitive camera. The first recorded camera in history was the daguerreotype (19th century); the first colored camera was Kodachrome.",
          "Films: The most advanced art form, involving visual and audio projections including movement.",
          "Computer Arts: Computers now have a plethora of software applications for creating art, such as Adobe Photoshop, Affinity Designer, Clip Studio, Paint Pro, Art Weaver, and Art Rage."
        ]
      }
    ]
  },
  {
    pageNumber: 12,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Philosophical Themes in Art & Elements of Art: Line",
    pdfPageRef: "PDF Page 6-7",
    readTime: "4 min read",
    sections: [
      {
        type: "bullet_list",
        heading: "Philosophical Themes in Art (For Personal Study)",
        items: [
          "Integrity: Refers to faithfulness to one's principles.",
          "Proportion/Consonance: Implies balance or consistency of the elements, emphasized for effect over other elements.",
          "Radiance/Clarity: Has to do with the impact or meaning upon the observer."
        ]
      },
      {
        type: "callout",
        heading: "Line (Element of Art)",
        content: "An identifiable path created by a point moving in space. It is one-dimensional and can vary in width, direction, and length."
      },
      {
        type: "table",
        heading: "Types of Line & What They Suggest",
        tableData: {
          headers: ["Line Type", "Suggests", "Example"],
          rows: [
            ["Vertical Lines", "Height, strength, dignity, posture", "Petronas Towers"],
            ["Horizontal Lines", "Width, distance, calmness, stability", "Horizon"],
            ["Diagonal Lines", "Action, lack of stability", "Leaning Tower of Pisa"],
            ["Zigzag Lines", "Excitement, fear, anxiety, restlessness", "Sydney Opera House"],
            ["Curved Lines", "Comfort and ease; sensual quality of the body", "Sofa chair"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 13,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Elements of Art: Shape, Form & Space",
    pdfPageRef: "PDF Page 7",
    readTime: "3 min read",
    sections: [
      {
        type: "callout",
        heading: "Shape",
        content: "Shape and form define objects in space. Shape has two dimensions — height and width — usually defined by lines."
      },
      {
        type: "bullet_list",
        heading: "Form",
        items: [
          "Defines objects in space, existing in three dimensions: height, width, and depth.",
          "Geometric: Accurately measured shapes with mathematical bases.",
          "Free Form: Irregular in structure, characterized by combinations of curves and angles."
        ]
      },
      {
        type: "comparison",
        heading: "Space",
        items: [
          "Positive Space: Refers to the subject or areas of interest in an artwork.",
          "Negative Space: The background or the area that surrounds the subject of the work."
        ]
      },
      {
        type: "text",
        content: "Space involves the outer and inner spaces of an artwork, referring to the hypothetical area in which the subject of art and other elements of art operate."
      }
    ]
  },
  {
    pageNumber: 14,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Elements of Art: Texture, Value & Color",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "callout",
        heading: "Texture",
        content: "The surface quality of an object that we sense through touch — hard, soft, rough, smooth, hairy, leathery, sharp, etc."
      },
      {
        type: "comparison",
        heading: "Value (Chiaroscuro)",
        items: [
          "Tinting: Adding white color to create light values (e.g. pink is a tint of red).",
          "Shading: Adding black color to create dark values (e.g. maroon is a shade of red)."
        ]
      },
      {
        type: "callout",
        heading: "Color",
        content: "A property of light — when the light goes out, color goes with it."
      },
      {
        type: "table",
        heading: "Warm vs. Cool Colors",
        tableData: {
          headers: ["Warm Colors", "Cool Colors"],
          rows: [
            ["Red", "Green"],
            ["Orange", "Blue"],
            ["Yellow", "Violet"]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 15,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Dimensions of Color, Color Wheel & Color Schemes",
    pdfPageRef: "PDF Page 7",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "Dimensions of Color",
        items: [
          "1. Hue: The name of a color.",
          "2. Intensity: The brightness or darkness of a color — two colors may both be blue, but one may be more intense than the other.",
          "3. Value: The lightness and darkness of a color."
        ]
      },
      {
        type: "bullet_list",
        heading: "Color Wheel",
        items: [
          "Primary Colors: Blue, Red, Yellow.",
          "Secondary Colors: Green, Orange, and Violet.",
          "Intermediate Colors: Formed by mixing a primary and a secondary color."
        ]
      },
      {
        type: "numbered_list",
        heading: "Color Schemes",
        items: [
          "1. Monochromatic Colors: Different shades of one color.",
          "2. Complementary Colors: When placed next to each other, they create the strongest contrast for those two colors — also called 'opposite colors.'",
          "3. Analogous Colors: Very similar to each other, especially when they are next to each other on the color wheel."
        ]
      }
    ]
  },
  {
    pageNumber: 16,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Sample Practice Questions: Elements of Art & Color",
    pdfPageRef: "PDF Page 8-9",
    readTime: "5 min read",
    sections: [
      {
        type: "callout",
        heading: "For Personal Study",
        content: "The following sample questions apply the concepts of line, color, and the elements of art discussed in this lesson to typical classroom teaching scenarios."
      },
      {
        type: "numbered_list",
        heading: "Sample Questions",
        items: [
          "1. If you require your students to illustrate graceful movements using lines, which line should your students draw? (a) Vertical lines (b) Horizontal lines (c) Curved lines (d) Diagonal lines",
          "2. Your colleague, Ms. Bata, will teach curved lines to her kindergarten pupils but is unaware of any two-minute writing activity. Which writing activity would you recommend? (a) Drawing triangles (b) Writing the letter S (c) Folding papers (d) Drawing grass",
          "3. Color has three dimensions or attributes: hue, value, and intensity. When you say turquoise, periwinkle, violet, or orange, you are referring to the color's ___. (a) Value (b) Hue (c) Intensity (d) Shade",
          "4. You decide to repaint your classroom. However, when the painter mixed the tint with the white base, the paint color was too dark. What change would you make to solve this problem? (a) Add more tints (b) Add more white (c) Strain the tint (d) Sift the paint",
          "5. What do you call the process of adding white to a color to achieve a lighter hue? (a) Highlighting (b) Tinting (c) Shading (d) Coordinating",
          "6. Blue is a ___. (a) Warm color (b) Complementary color (c) Cool color (d) Analogous color",
          "7. To create more hues, mixing colors is necessary. Which must be combined to create green? (a) Blue + red (b) Blue + orange (c) Yellow + brown (d) Yellow + blue",
          "8. Ms. Robles wears a beige dress, light brown boots, and a hazel coat to work. She is wearing ___ colors. (a) Complementary (b) Monochromatic (c) Triad (d) Arbitrary",
          "9. You noticed that your students take interest in optical art. In your lesson on the elements of art, which element will most likely correspond to this interest? (a) Color (b) Pattern (c) Variety (d) Space",
          "10. Baby blue and baby pink differ in? (a) Hue (b) Intensity (c) Value"
        ]
      }
    ]
  },
  {
    pageNumber: 17,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Principles of Design",
    pdfPageRef: "PDF Page 9",
    readTime: "4 min read",
    sections: [
      {
        type: "numbered_list",
        heading: "7 Principles of Design",
        items: [
          "1. Harmony: Produces an impression of unity through the selection and arrangement of consistent objects or ideas.",
          "2. Rhythm: Indicates movement, created by the careful placement of repeated elements in a work of art to cause a visual tempo or beat.",
          "3. Balance: A way of combining elements to add a feeling of equilibrium or stability. Formal — both sides of a composition have the same elements in the same position. Informal — the composition is balanced due to contrast among the elements of art. Radial — elements are equally spaced around a central point.",
          "4. Emphasis: Tends to carry the eyes from the center of interest, or dominant part of a composition, to the less important or subordinate parts.",
          "5. Proportion: Refers to the relationship of certain elements to the whole and to each other.",
          "6. Variety: Concerned with diversity or contrast, achieved by using different shapes, sizes, and/or colors in a work of art.",
          "7. Unity: Art is created and perceived as the sum of its parts — elements and principles of art will cease to be meaningful if they do not unite with the rest of the whole piece."
        ]
      }
    ]
  },
  {
    pageNumber: 18,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Seven Wonders of the Ancient World (Part 1)",
    pdfPageRef: "PDF Page 9-10",
    readTime: "4 min read",
    sections: [
      {
        type: "table",
        heading: "Seven Wonders of the Ancient World (1-4)",
        tableData: {
          headers: ["Wonder", "Built / Destroyed", "Description"],
          rows: [
            ["Great Pyramid of Giza", "Built 2570 BC; the only surviving ancient wonder", "Believed to have taken 20 years and as many as 100,000 workers to complete, built as a tomb for the 4th dynasty Egyptian pharaoh Khufu."],
            ["Hanging Gardens of Babylon", "Built c. 600 BC; destroyed by earthquake in 226 BC", "Generally believed to have been built by King Nebuchadrezzar II for his wife, because she missed the gardens of her homeland."],
            ["Temple of Artemis at Ephesus", "Built 550 BC; destroyed by fire in 356 BC", "Housed many incredible works of art, most famously the statue of Artemis, thought to have been made of gold and other beautiful materials."],
            ["Statue of Zeus at Olympia", "Built 430 BC; destroyed by fire in 426 AD", "Carved from ivory on a throne of cedarwood, created by the Greek sculptor Phidias."]
          ]
        }
      }
    ]
  },
  {
    pageNumber: 19,
    dayNumber: 1,
    dayTitle: "Day 1: Art Appreciation",
    topicTitle: "Seven Wonders of the Ancient World (Part 2)",
    pdfPageRef: "PDF Page 10",
    readTime: "3 min read",
    sections: [
      {
        type: "table",
        heading: "Seven Wonders of the Ancient World (5-7)",
        tableData: {
          headers: ["Wonder", "Built / Destroyed", "Description"],
          rows: [
            ["Mausoleum at Halicarnassus", "Built 352 BC; destroyed by earthquake in 1404 AD", "Built as a tomb for Mausolus, a governor in the Persian Empire."],
            ["Colossus of Rhodes", "Built 282 BC; destroyed by earthquake in 226 BC", "In 294 BC, the people of Rhodes began building a colossal statue of the sun god Helios."],
            ["Lighthouse of Alexandria", "Built 280 BC; destroyed by earthquake in 1323 AD", "Located on the island of Pharos in the harbor of Alexandria; possibly the most famous lighthouse in history."]
          ]
        }
      }
    ]
  }
];