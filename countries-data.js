const COUNTRIES_DATABASE = [
  {
    id: 1,
    name: "Italy",
    dish: "Ragu alla Bolognese",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/italy/raguallabolognese_1.jpg",
    funFact: "The authentic Bolognese recipe, registered with the Bologna Chamber of Commerce in 1982, contains no tomatoes — just meat, onion, celery, carrot, milk, and wine.",
    coordinates: { lat: 41.8719, lng: 12.5674 }
  },
  {
    id: 2,
    name: "Japan",
    dish: "Curry Rice",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/japan/curry_rice_1.jpg",
    funFact: "Japanese curry was introduced by the British Royal Navy in the late 1800s and is now eaten by the average Japanese person about once a week — more often than sushi.",
    coordinates: { lat: 36.2048, lng: 138.2529 }
  },
  {
    id: 3,
    name: "France",
    dish: "Pot-au-Feu",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/france/pot-au-feu_1.jpg",
    funFact: "King Henry IV of France famously wished that every peasant could have pot-au-feu on Sundays, earning it the nickname 'the dish of kings and the king of dishes.'",
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  {
    id: 4,
    name: "Mexico",
    dish: "Mole",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/mexico/mole_1.jpg",
    funFact: "Mole can contain over 20 ingredients including chocolate, chili, and spices, and some traditional recipes take up to three days to prepare. The word comes from the Nahuatl word 'molli,' meaning sauce.",
    coordinates: { lat: 19.4326, lng: -99.1332 }
  },
  {
    id: 5,
    name: "India",
    dish: "Khichdi",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/india/khichdi_1.jpg",
    funFact: "Khichdi is one of India's oldest comfort foods, with references dating back over 2,000 years. It was nearly named India's official national dish in 2017 after a record-breaking 918 kg batch was cooked in New Delhi.",
    coordinates: { lat: 20.5937, lng: 78.9629 }
  },
  {
    id: 6,
    name: "Brazil",
    dish: "Feijoada",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/brazil/feijoada_1.jpg",
    funFact: "Feijoada is traditionally eaten on Wednesdays and Saturdays in Brazil. A proper feijoada completa can include over a dozen different cuts of pork and takes an entire day to prepare.",
    coordinates: { lat: -14.2350, lng: -51.9253 }
  },
  {
    id: 7,
    name: "Thailand",
    dish: "Pad Thai",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/thailand/pad_thai_1.jpg",
    funFact: "Pad Thai was invented in the 1930s as part of a government campaign to promote Thai nationalism and reduce rice consumption during a national shortage — it was essentially created by decree.",
    coordinates: { lat: 15.8700, lng: 100.9925 }
  },
  {
    id: 8,
    name: "Spain",
    dish: "Paella",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/spain/paella_1.jpg",
    funFact: "Authentic Valencian paella contains no chorizo — purists insist it must only have rabbit, chicken, snails, and three types of beans. Adding chorizo is considered such a culinary offense that it once sparked a Twitter feud involving a Spanish politician.",
    coordinates: { lat: 40.4637, lng: -3.7492 }
  },
  {
    id: 9,
    name: "Greece",
    dish: "Moussaka",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/greece/moussaka_1.jpg",
    funFact: "The layered moussaka Greeks know today was actually invented in the 1920s by chef Nikolaos Tselementes, who was inspired by French cooking techniques — before that, moussaka was a much simpler Middle Eastern stew.",
    coordinates: { lat: 39.0742, lng: 21.8243 }
  },
  {
    id: 10,
    name: "China",
    dish: "Peking Roast Duck",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/china/pekingduck_1.jpg",
    funFact: "Peking Duck has been served in China for over 600 years, originally as an imperial dish. The crispy skin is so prized that it's traditionally served separately from the meat, eaten first with sugar before the rest of the meal.",
    coordinates: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 11,
    name: "Peru",
    dish: "Ceviche",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/peru/ceviche_1.jpg",
    funFact: "Peru declared ceviche a national cultural heritage dish in 2004. The citrusy marinade left over in the bowl, called 'leche de tigre' (tiger's milk), is popularly drunk as a hangover cure.",
    coordinates: { lat: -9.1900, lng: -75.0152 }
  },
  {
    id: 12,
    name: "Vietnam",
    dish: "Pho",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/vietnam/pho_1.jpg",
    funFact: "Pho originated in northern Vietnam in the early 1900s, likely influenced by the French pot-au-feu. The broth is simmered for up to 12 hours with charred ginger, star anise, and cinnamon to develop its signature depth.",
    coordinates: { lat: 14.0583, lng: 108.2772 }
  },
  {
    id: 13,
    name: "United States",
    dish: "Hamburger",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/usa/hamburger_1.jpg",
    funFact: "The hamburger is named after Hamburg, Germany, where minced beef patties were popular with sailors. It was introduced to American audiences at the 1904 St. Louis World's Fair and never looked back.",
    coordinates: { lat: 37.0902, lng: -95.7129 }
  },
  {
    id: 14,
    name: "Argentina",
    dish: "Asados",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/argentina/asados_1.jpg",
    funFact: "In Argentina, asado is more than a meal — it's a social ritual. The designated grill master, called the 'asador,' holds a position of great honor, and it's considered deeply rude to interfere with their technique.",
    coordinates: { lat: -38.4161, lng: -63.6167 }
  },
  {
    id: 15,
    name: "South Korea",
    dish: "Kimchi",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/south_korea/kimchi_1.jpg",
    funFact: "South Korea produces about 1.85 million tons of kimchi per year. There are over 200 varieties, and the tradition of making it together — called 'kimjang' — was added to UNESCO's Intangible Cultural Heritage list in 2013.",
    coordinates: { lat: 35.9078, lng: 127.7669 }
  },
  {
    id: 16,
    name: "Germany",
    dish: "Sauerbraten",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/germany/sauerbraten_1.jpg",
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
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/canada/poutine_1.jpg",
    funFact: "Poutine originated in rural Québec in the late 1950s. The word 'poutine' is Québécois slang for 'mess' — a fitting name for the glorious pile of fries, cheese curds, and gravy that became a national icon.",
    coordinates: { lat: 56.1304, lng: -106.3468 }
  },
  {
    id: 20,
    name: "Russia",
    dish: "Pelmeni",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/russia/pelmeni_1.jpg",
    funFact: "Russian pelmeni were traditionally made in enormous batches during winter and stored outside as a natural freezer. Siberian hunters carried bags of frozen pelmeni on long expeditions as a convenient, high-protein meal.",
    coordinates: { lat: 61.5240, lng: 105.3188 }
  },
  {
    id: 21,
    name: "Cuba",
    dish: "Ropa Vieja",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/cuba/ropa_vieja_1.jpg",
    funFact: "'Ropa Vieja' means 'old clothes' in Spanish — the shredded beef is said to resemble torn, tattered fabric. It's so beloved in Cuba that it's available in virtually every restaurant on the island.",
    coordinates: { lat: 21.5218, lng: -77.7812 }
  },
  {
    id: 22,
    name: "Colombia",
    dish: "Bandeja Paisa",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/colombia/bandeja_paisa_1.jpg",
    funFact: "Bandeja Paisa is one of the most filling meals in the world — a single serving includes red beans, rice, ground beef, chicharrón, fried egg, plantain, chorizo, arepa, and avocado. It originated with Antioquian farmers who needed fuel for long days of labor.",
    coordinates: { lat: 4.5709, lng: -74.2973 }
  },
  {
    id: 23,
    name: "Jamaica",
    dish: "Ackee and Saltfish",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/jamaica/ackee_and_saltfish_1.jpg",
    funFact: "Ackee is Jamaica's national fruit but is poisonous if eaten before it naturally opens on the tree. Despite this, ackee and saltfish has been Jamaica's national dish since it was brought from West Africa in the 18th century.",
    coordinates: { lat: 18.1096, lng: -77.2975 }
  },
  {
    id: 24,
    name: "Chile",
    dish: "Empanadas",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/chile/empanadas_1.jpg",
    funFact: "Chilean empanadas are traditionally eaten on September 18th, Chile's National Day. The word 'empanada' comes from the Spanish 'empanar,' meaning to wrap in bread — the perfect description for this hand-held pastry.",
    coordinates: { lat: -35.6751, lng: -71.5430 }
  },
  {
    id: 25,
    name: "El Salvador",
    dish: "Pupusa",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/el_salvador/pupusa_1.jpg",
    funFact: "Pupusas date back over 2,000 years to the Pipil people of El Salvador. El Salvador even has a National Pupusa Day, celebrated on the second Sunday of November every year.",
    coordinates: { lat: 13.7942, lng: -88.8965 }
  },
  {
    id: 26,
    name: "Singapore",
    dish: "Hainanese Chicken Rice",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/singapore/hainanese_chicken_rice_1.jpg",
    funFact: "Hainanese Chicken Rice was brought to Singapore by immigrants from Hainan, China in the early 20th century. The dish is now so iconic that entire hawker stalls — and even Michelin-starred restaurants — are devoted exclusively to perfecting it.",
    coordinates: { lat: 1.3521, lng: 103.8198 }
  },
  {
    id: 27,
    name: "Pakistan",
    dish: "Nihari",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/pakistan/nihari_1.jpg",
    funFact: "Nihari was originally cooked overnight in the kitchens of Mughal emperors and served as breakfast after morning prayers. The word comes from the Arabic 'Nahar,' meaning 'day' — as it was eaten at the very start of the day.",
    coordinates: { lat: 30.3753, lng: 69.3451 }
  },
  {
    id: 28,
    name: "Taiwan",
    dish: "Beef Noodle Soup",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/taiwan/beef_noodle_soup_1.jpg",
    funFact: "Taiwan's beef noodle soup is so beloved that Taipei holds an annual Beef Noodle Festival drawing hundreds of thousands of visitors. There are over 10,000 beef noodle soup restaurants in Taiwan alone.",
    coordinates: { lat: 23.6978, lng: 120.9605 }
  },
  {
    id: 29,
    name: "Mongolia",
    dish: "Buuz",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/mongolia/buuz_1.jpg",
    funFact: "Buuz are steamed dumplings traditionally eaten during Tsagaan Sar, the Mongolian Lunar New Year. Families prepare thousands of buuz together in the days before the celebration — it's common for a single household to make over 1,000.",
    coordinates: { lat: 46.8625, lng: 103.8467 }
  },
  {
    id: 30,
    name: "Cambodia",
    dish: "Fish Amok",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/cambodia/fish_amok_1.jpg",
    funFact: "Fish Amok is considered one of the most refined dishes in Khmer cuisine and is often called Cambodia's national dish. It's traditionally steamed inside banana leaf cups, which give it both its distinctive shape and a subtle earthy flavor.",
    coordinates: { lat: 12.5657, lng: 104.9910 }
  },
  {
    id: 31,
    name: "Kenya",
    dish: "Ugali",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/kenya/ugali_1.jpg",
    funFact: "Ugali is eaten by the majority of Kenyans almost every day. This simple cornmeal porridge acts as the foundation of nearly every meal — used to scoop up stews and vegetables in place of utensils.",
    coordinates: { lat: -0.0236, lng: 37.9062 }
  },
  {
    id: 32,
    name: "Senegal",
    dish: "Thiéboudienne",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/senegal/senegalese_rice_fish_stew_1.jpg",
    funFact: "Thiéboudienne is widely considered the origin of the rice-and-fish dishes found across West Africa. In 2021 it became one of the few dishes in the world to be added to UNESCO's Intangible Cultural Heritage list.",
    coordinates: { lat: 14.4974, lng: -14.4524 }
  },
  {
    id: 33,
    name: "Ghana",
    dish: "Fufu",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/ghana/fufu_1.jpg",
    funFact: "In Ghana, fufu is never bitten — it's swallowed whole in smooth pieces. Made by pounding boiled cassava and plantain, the rhythmic pounding of fufu is a communal activity traditionally done in pairs.",
    coordinates: { lat: 7.9465, lng: -1.0232 }
  },
  {
    id: 34,
    name: "Cameroon",
    dish: "Ndolé",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/cameroon/ndole_1.jpg",
    funFact: "Ndolé is made from bitter leaves combined with groundnuts and meat or fish. It's so central to Cameroonian culture that it's nicknamed 'the national stew' and is served at virtually every major celebration.",
    coordinates: { lat: 7.3697, lng: 12.3547 }
  },
  {
    id: 35,
    name: "Zimbabwe",
    dish: "Sadza",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/zimbabwe/sadza_1.jpg",
    funFact: "Sadza is the backbone of Zimbabwean cuisine — a thick maize porridge eaten at almost every meal. The word 'sadza' is sometimes used as a synonym for 'food' itself, reflecting how central it is to daily life.",
    coordinates: { lat: -19.0154, lng: 29.1549 }
  },
  {
    id: 36,
    name: "Turkey",
    dish: "Kuru Fasulye",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/turkey/kuru_fasulye_1.jpg",
    funFact: "Kuru Fasulye (white bean stew) is Turkey's ultimate comfort food, so beloved it's been served in the same Istanbul restaurant for over 100 years. It's the go-to dish in Turkish schools and military canteens alike.",
    coordinates: { lat: 38.9637, lng: 35.2433 }
  },
  {
    id: 37,
    name: "Austria",
    dish: "Wiener Schnitzel",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/austria/wiener_schnitzel_1.jpg",
    funFact: "True Wiener Schnitzel must be made with veal by Austrian law — using pork makes it 'Schnitzel Wiener Art' (Viennese style), not the real thing. The dish reportedly traveled from Milan to Vienna via an Austrian field marshal in the 1800s.",
    coordinates: { lat: 47.5162, lng: 14.5501 }
  },
  {
    id: 38,
    name: "Denmark",
    dish: "Stegt Flæsk",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/denmark/stegt_flaek_1.jpg",
    funFact: "Stegt Flæsk med persillesovs (fried pork belly with parsley sauce) was voted Denmark's national dish in a public poll in 2014, beating out smørrebrød and frikadeller — two dishes most foreigners would have expected to win.",
    coordinates: { lat: 56.2639, lng: 9.5018 }
  },
  {
    id: 39,
    name: "Ukraine",
    dish: "Borsch",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/ukraine/borsch_1.jpg",
    funFact: "Borsch has been cooked in Ukraine for over a thousand years, with each region having its own version. In 2022, UNESCO added Ukrainian borsch-making to its endangered cultural heritage list, recognizing it as a symbol of national identity.",
    coordinates: { lat: 48.3794, lng: 31.1656 }
  },
  {
    id: 40,
    name: "Israel",
    dish: "Falafel",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/israel/falafel_1.jpg",
    funFact: "Falafel is believed to have originated in Egypt, but Israel adopted it so thoroughly it became a national symbol. Israeli falafel uses chickpeas while Egyptian falafel uses fava beans — a small but fiercely debated difference across the Middle East.",
    coordinates: { lat: 31.0461, lng: 34.8516 }
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
  const dailyCountries = shuffled;

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

const ALL_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada",
  "Central African Republic","Chad","Chile","China","Colombia","Comoros",
  "Costa Rica","Croatia","Cuba","Cyprus","Czechia","DR Congo","Denmark",
  "Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
  "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji",
  "Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
  "Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
  "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar",
  "Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
  "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
  "Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "North Korea","North Macedonia","Norway","Oman","Pakistan","Palau",
  "Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
  "Poland","Portugal","Qatar","Republic of the Congo","Romania","Russia",
  "Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal",
  "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
  "Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
  "Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen",
  "Zambia","Zimbabwe"
];
