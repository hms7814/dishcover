const COUNTRIES_DATABASE = [
  {
    id: 1,
    name: "Italy",
    dish: "Ragu alla Bolognese",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rag%C3%B9_alla_bolognese_-_03.jpg/640px-Rag%C3%B9_alla_bolognese_-_03.jpg",
    funFact: "The authentic Bolognese recipe, registered with the Bologna Chamber of Commerce in 1982, contains no tomatoes — just meat, onion, celery, carrot, milk, and wine.",
    coordinates: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: 2,
    name: "Japan",
    dish: "Curry Rice",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/japan/curry_rice_1.jpg",
    funFact: "Japanese curry was introduced by the British Royal Navy in the late 1800s and is now eaten by the average Japanese person about once a week — more often than sushi.",
    coordinates: { lat: 36.2048, lng: 138.2529 }
  },
  {
    id: 3,
    name: "France",
    dish: "Pot-au-Feu",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/france/pot-au-feu_1.jpg",
    funFact: "King Henry IV of France famously wished that every peasant could have pot-au-feu on Sundays, earning it the nickname 'the dish of kings and the king of dishes.'",
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  {
    id: 4,
    name: "Mexico",
    dish: "Mole",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/mexico/mole_1.jpg",
    funFact: "Mole can contain over 20 ingredients including chocolate, chili, and spices, and some traditional recipes take up to three days to prepare. The word comes from the Nahuatl word 'molli,' meaning sauce.",
    coordinates: { lat: 19.4326, lng: -99.1332 }
  },
  {
    id: 5,
    name: "India",
    dish: "Khichdi",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/india/khichdi_1.jpg",
    funFact: "Khichdi is one of India's oldest comfort foods, with references dating back over 2,000 years. It was nearly named India's official national dish in 2017 after a record-breaking 918 kg batch was cooked in New Delhi.",
    coordinates: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 6,
    name: "Brazil",
    dish: "Feijoada",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Feijoada_001.jpg/640px-Feijoada_001.jpg",
    funFact: "Feijoada is traditionally eaten on Wednesdays and Saturdays in Brazil. A proper feijoada completa can include over a dozen different cuts of pork and takes an entire day to prepare.",
    coordinates: { lat: -14.2350, lng: -51.9253 }
  },
  {
    id: 7,
    name: "Thailand",
    dish: "Pad Thai",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/thailand/pad_thai_1.jpg",
    funFact: "Pad Thai was invented in the 1930s as part of a government campaign to promote Thai nationalism and reduce rice consumption during a national shortage — it was essentially created by decree.",
    coordinates: { lat: 15.8700, lng: 100.9925 }
  },
  {
    id: 8,
    name: "Spain",
    dish: "Paella",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/spain/paella_1.jpg",
    funFact: "Authentic Valencian paella contains no chorizo — purists insist it must only have rabbit, chicken, snails, and three types of beans. Adding chorizo is considered such a culinary offense that it once sparked a Twitter feud involving a Spanish politician.",
    coordinates: { lat: 40.4637, lng: -3.7492 }
  },
  {
    id: 9,
    name: "Greece",
    dish: "Moussaka",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/greece/moussaka_1.jpg",
    funFact: "The layered moussaka Greeks know today was actually invented in the 1920s by chef Nikolaos Tselementes, who was inspired by French cooking techniques — before that, moussaka was a much simpler Middle Eastern stew.",
    coordinates: { lat: 39.0742, lng: 21.8243 }
  },
  {
    id: 10,
    name: "China",
    dish: "Peking Roast Duck",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Peking_Duck%2C_2014_%2802%29.jpg/640px-Peking_Duck%2C_2014_%2802%29.jpg",
    funFact: "Peking Duck has been served in China for over 600 years, originally as an imperial dish. The crispy skin is so prized that it's traditionally served separately from the meat, eaten first with sugar before the rest of the meal.",
    coordinates: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 11,
    name: "Peru",
    dish: "Ceviche",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/peru/ceviche_1.jpg",
    funFact: "Peru declared ceviche a national cultural heritage dish in 2004. The citrusy marinade left over in the bowl, called 'leche de tigre' (tiger's milk), is popularly drunk as a hangover cure.",
    coordinates: { lat: -9.1900, lng: -75.0152 }
  },
  {
    id: 12,
    name: "Vietnam",
    dish: "Pho",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/vietnam/pho_1.jpg",
    funFact: "Pho originated in northern Vietnam in the early 1900s, likely influenced by the French pot-au-feu. The broth is simmered for up to 12 hours with charred ginger, star anise, and cinnamon to develop its signature depth.",
    coordinates: { lat: 14.0583, lng: 108.2772 }
  },
  {
    id: 13,
    name: "United States",
    dish: "Hamburger",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/usa/hamburger_1.jpg",
    funFact: "The hamburger is named after Hamburg, Germany, where minced beef patties were popular with sailors. It was introduced to American audiences at the 1904 St. Louis World's Fair and never looked back.",
    coordinates: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 14,
    name: "Argentina",
    dish: "Asados",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/argentina/asados_1.jpg",
    funFact: "In Argentina, asado is more than a meal — it's a social ritual. The designated grill master, called the 'asador,' holds a position of great honor, and it's considered deeply rude to interfere with their technique.",
    coordinates: { lat: -38.4161, lng: -63.6167 }
  },
  {
    id: 15,
    name: "South Korea",
    dish: "Kimchi",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/south_korea/kimchi_1.jpg",
    funFact: "South Korea produces about 1.85 million tons of kimchi per year. There are over 200 varieties, and the tradition of making it together — called 'kimjang' — was added to UNESCO's Intangible Cultural Heritage list in 2013.",
    coordinates: { lat: 35.9078, lng: 127.7669 }
  },
  {
    id: 16,
    name: "Germany",
    dish: "Sauerbraten",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sauerbraten.JPG/640px-Sauerbraten.JPG",
    funFact: "Sauerbraten is traditionally marinated for up to 10 days before cooking. It was originally made with horse meat — beef only became the standard in the 19th century as the dish spread beyond its Rhineland origins.",
    coordinates: { lat: 51.1657, lng: 10.4515 }
  },
  {
    id: 17,
    name: "Australia",
    dish: "Roast Lamb",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Roast_lamb_2.jpg/640px-Roast_lamb_2.jpg",
    funFact: "Australia runs an annual 'Australia Day Lamb' ad campaign so beloved it's become a cultural institution. Australia is one of the world's largest exporters of lamb, shipping to over 100 countries.",
    coordinates: { lat: -25.2744, lng: 133.7751 }
  },
  {
    id: 18,
    name: "Norway",
    dish: "Fårikål",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Farikal2.jpg/640px-Farikal2.jpg",
    funFact: "Fårikål (mutton and cabbage stew) was voted Norway's national dish in 1972. It's so wonderfully simple — just mutton, cabbage, salt, and whole peppercorns — that Norway even has a national Fårikål day in late September.",
    coordinates: { lat: 60.4720, lng: 8.4689 }
  },
  {
    id: 19,
    name: "Canada",
    dish: "Poutine",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/canada/poutine_1.jpg",
    funFact: "Poutine originated in rural Québec in the late 1950s. The word 'poutine' is Québécois slang for 'mess' — a fitting name for the glorious pile of fries, cheese curds, and gravy that became a national icon.",
    coordinates: { lat: 56.1304, lng: -106.3468 }
  },
  {
    id: 20,
    name: "Russia",
    dish: "Pelmeni",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dish-game/main/russia/pelmeni_1.jpg",
    funFact: "Russian pelmeni were traditionally made in enormous batches during winter and stored outside as a natural freezer. Siberian hunters carried bags of frozen pelmeni on long expeditions as a convenient, high-protein meal.",
    coordinates: { lat: 61.5240, lng: 105.3188 }
  }
];

// Helper functions for angle conversions
function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

function toDeg(radians) {
  return radians * (180 / Math.PI);
}

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng/2) * Math.sin(dLng/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;

  return Math.round(distance);
}

// Calculate bearing from point A to point B
function calculateBearing(lat1, lng1, lat2, lng2) {
  const dLng = toRad(lng2 - lng1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);

  const y = Math.sin(dLng) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
            Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);

  let bearing = Math.atan2(y, x);
  bearing = toDeg(bearing);
  bearing = (bearing + 360) % 360;

  return {
    degrees: bearing,
    cardinal: degreesToCardinal(bearing)
  };
}

// Convert degrees to cardinal direction
function degreesToCardinal(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

// Convert date to seed for reproducible randomization
function dateToSeed(date) {
  const dateStr = date.toISOString().split('T')[0]; // "2026-05-19"
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Seeded random number generator (Mulberry32)
function seededRandom(seed) {
  let t = seed + 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

// Shuffle array using seeded randomization
function seededShuffle(array, seed) {
  const result = [...array];
  let currentSeed = seed;

  for (let i = result.length - 1; i > 0; i--) {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    const j = Math.floor((currentSeed / 4294967296) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Get daily puzzle based on date
function getDailyPuzzle(date) {
  const seed = dateToSeed(date);
  const shuffled = seededShuffle(COUNTRIES_DATABASE, seed);
  const dailyCountries = shuffled.slice(0, 20);

  // Use a different seed calculation for target selection
  const targetSeed = (seed * 7919) % dailyCountries.length;
  const targetCountry = dailyCountries[targetSeed];

  // Calculate puzzle number (days since Jan 1, 2026)
  const startDate = new Date('2026-01-01T00:00:00Z');
  const puzzleNumber = Math.floor((date - startDate) / (1000 * 60 * 60 * 24)) + 1;

  return {
    puzzleNumber: puzzleNumber,
    countries: dailyCountries,
    targetCountry: targetCountry
  };
}
