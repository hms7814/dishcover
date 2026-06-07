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
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/australia/roasted_lamb_1.jpg",
    funFact: "Australia runs an annual 'Australia Day Lamb' ad campaign so beloved it's become a cultural institution. Australia is one of the world's largest exporters of lamb, shipping to over 100 countries.",
    coordinates: { lat: -25.2744, lng: 133.7751 }
  },
  {
    id: 18,
    name: "Norway",
    dish: "Fårikål",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/norway/farikal_1.jpg",
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
    name: "Ethiopia",
    dish: "Doro Wat",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/ethiopia/dorowat_1.jpg",
    funFact: "Doro Wat is a rich, slow-cooked chicken stew spiced with berbere. It's traditionally served on injera, a spongy sourdough flatbread that doubles as both plate and utensil — no cutlery needed.",
    coordinates: { lat: 9.1450, lng: 40.4897 }
  },
  {
    id: 41,
    name: "Poland",
    dish: "Bigos Stew",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/poland/bigosstew_1.jpg",
    funFact: "Bigos, known as 'hunter's stew,' is made from sauerkraut, fresh cabbage, and various meats. It actually tastes better reheated over several days — many Polish families consider a week-old bigos to be the best version.",
    coordinates: { lat: 51.9194, lng: 19.1451 }
  },
  {
    id: 42,
    name: "South Africa",
    dish: "Bobotie",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/south_africa/bobotie_1.jpg",
    funFact: "Bobotie blends sweet and savory flavors — spiced minced meat topped with a savory egg custard. It reflects South Africa's diverse heritage, with influences from Dutch, Cape Malay, and indigenous African cuisines.",
    coordinates: { lat: -30.5595, lng: 22.9375 }
  },
  {
    id: 44,
    name: "Israel",
    dish: "Falafel",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/israel/falafel_1.jpg",
    funFact: "Falafel is believed to have originated in Egypt, but Israel adopted it so thoroughly it became a national symbol. Israeli falafel uses chickpeas while Egyptian falafel uses fava beans — a small but fiercely debated difference across the Middle East.",
    coordinates: { lat: 31.0461, lng: 34.8516 }
  },
  {
    id: 45,
    name: "Egypt",
    dish: "Koshari",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/egypt/koshari_1.jpg",
    funFact: "Koshari is a beloved Egyptian street food combining rice, lentils, pasta, chickpeas, and crispy fried onions all in one bowl. It was created by mixing together imported Italian pasta with local Egyptian lentils during the 19th century.",
    coordinates: { lat: 26.8206, lng: 30.8025 }
  },
  {
    id: 46,
    name: "Hungary",
    dish: "Goulash",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/hungary/goulash_1.jpg",
    funFact: "Goulash originated as a simple herdsman's stew on the Hungarian plains. The word comes from 'gulyás,' meaning cowherd — and those cowboys would dry the cooked meat in the sun so they could rehydrate it on the trail days later.",
    coordinates: { lat: 47.1625, lng: 19.5033 }
  },
  {
    id: 47,
    name: "Indonesia",
    dish: "Nasi Goreng",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/indonesia/nasi_goreng_1.jpg",
    funFact: "Nasi goreng literally means 'fried rice' in Indonesian. The tradition of frying leftover rice dates back centuries as a way to preserve food in the tropical heat — today it's eaten for breakfast, lunch, and dinner across all 17,000+ Indonesian islands.",
    coordinates: { lat: -0.7893, lng: 113.9213 }
  },
  {
    id: 48,
    name: "Malaysia",
    dish: "Nasi Lemak",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/malaysia/nasi_lemak_1.jpg",
    funFact: "Nasi lemak means 'rich rice' — the rice is cooked in coconut milk and pandan leaves, giving it a creamy fragrance. Although it's traditionally a breakfast dish, Malaysians eat it at all hours, and it's sold wrapped in banana leaves on virtually every street corner.",
    coordinates: { lat: 4.2105, lng: 101.9758 }
  },
  {
    id: 49,
    name: "Morocco",
    dish: "Couscous",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/morocco/couscous_1.jpg",
    funFact: "Moroccan couscous is traditionally prepared every Friday — considered a blessed day in Islam — when families gather for the communal meal. In 2020, UNESCO added couscous to its Representative List of Intangible Cultural Heritage of Humanity.",
    coordinates: { lat: 31.7917, lng: -7.0926 }
  },
  {
    id: 50,
    name: "Nigeria",
    dish: "Jollof Rice",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/nigeria/jollof_rice_1.jpg",
    funFact: "Jollof rice is the center of a friendly but fierce rivalry between Nigeria, Ghana, and Senegal, each claiming to make the best version. Nigerian Jollof is famous for its smoky 'party rice' flavor, achieved by letting the bottom of the pot slightly char over high heat.",
    coordinates: { lat: 9.0820, lng: 8.6753 }
  },
  {
    id: 51,
    name: "Philippines",
    dish: "Adobo",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/philippines/adobo_1.jpg",
    funFact: "Filipino adobo isn't a sauce or spice blend — it's a cooking method of braising meat in vinegar, soy sauce, garlic, and bay leaves. The vinegar acts as a natural preservative, which is why the dish developed in a tropical climate long before refrigeration.",
    coordinates: { lat: 12.8797, lng: 121.7740 }
  },
  {
    id: 52,
    name: "Portugal",
    dish: "Bacalhau",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/portugal/bacalhau_1.jpg",
    funFact: "Bacalhau (salt cod) is so central to Portuguese cuisine that locals claim there are 365 ways to prepare it — one for every day of the year. Portugal has no native cod waters, yet it became the world's largest consumer of cod after Portuguese fishermen discovered the Grand Banks off Newfoundland in the 15th century.",
    coordinates: { lat: 39.3999, lng: -8.2245 }
  },
  {
    id: 53,
    name: "United Kingdom",
    dish: "Fish and Chips",
    imageUrl: "https://raw.githubusercontent.com/hms7814/dishcover/main/united_kingdom/fish_and_chips_1.jpg",
    funFact: "Fish and chips became so important to British morale during World War II that it was one of the few foods never rationed. Winston Churchill called it 'good companions' — the government deliberately kept the dish available to maintain working-class spirits during the war.",
    coordinates: { lat: 55.3781, lng: -3.4360 }
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

const COUNTRY_COORDINATES = {
  "Afghanistan": {lat: 33.9391, lng: 67.7100},
  "Albania": {lat: 41.1533, lng: 20.1683},
  "Algeria": {lat: 28.0339, lng: 1.6596},
  "Andorra": {lat: 42.5063, lng: 1.5218},
  "Angola": {lat: -11.2027, lng: 17.8739},
  "Antigua and Barbuda": {lat: 17.0608, lng: -61.7964},
  "Argentina": {lat: -38.4161, lng: -63.6167},
  "Armenia": {lat: 40.0691, lng: 45.0382},
  "Australia": {lat: -25.2744, lng: 133.7751},
  "Austria": {lat: 47.5162, lng: 14.5501},
  "Azerbaijan": {lat: 40.1431, lng: 47.5769},
  "Bahamas": {lat: 25.0343, lng: -77.3963},
  "Bahrain": {lat: 26.0275, lng: 50.5500},
  "Bangladesh": {lat: 23.6850, lng: 90.3563},
  "Barbados": {lat: 13.1939, lng: -59.5432},
  "Belarus": {lat: 53.7098, lng: 27.9534},
  "Belgium": {lat: 50.5039, lng: 4.4699},
  "Belize": {lat: 17.1899, lng: -88.4976},
  "Benin": {lat: 9.3077, lng: 2.3158},
  "Bhutan": {lat: 27.5142, lng: 90.4336},
  "Bolivia": {lat: -16.2902, lng: -63.5887},
  "Bosnia and Herzegovina": {lat: 43.9159, lng: 17.6791},
  "Botswana": {lat: -22.3285, lng: 24.6849},
  "Brazil": {lat: -14.2350, lng: -51.9253},
  "Brunei": {lat: 4.5353, lng: 114.7277},
  "Bulgaria": {lat: 42.7339, lng: 25.4858},
  "Burkina Faso": {lat: 12.3641, lng: -1.5330},
  "Burundi": {lat: -3.3731, lng: 29.9189},
  "Cabo Verde": {lat: 16.5388, lng: -23.0418},
  "Cambodia": {lat: 12.5657, lng: 104.9910},
  "Cameroon": {lat: 7.3697, lng: 12.3547},
  "Canada": {lat: 56.1304, lng: -106.3468},
  "Central African Republic": {lat: 6.6111, lng: 20.9394},
  "Chad": {lat: 15.4542, lng: 18.7322},
  "Chile": {lat: -35.6751, lng: -71.5430},
  "China": {lat: 35.8617, lng: 104.1954},
  "Colombia": {lat: 4.5709, lng: -74.2973},
  "Comoros": {lat: -11.6455, lng: 43.3333},
  "Costa Rica": {lat: 9.7489, lng: -83.7534},
  "Croatia": {lat: 45.1000, lng: 15.2000},
  "Cuba": {lat: 21.5218, lng: -77.7812},
  "Cyprus": {lat: 35.1264, lng: 33.4299},
  "Czechia": {lat: 49.8175, lng: 15.4730},
  "DR Congo": {lat: -4.0383, lng: 21.7587},
  "Denmark": {lat: 56.2639, lng: 9.5018},
  "Djibouti": {lat: 11.8251, lng: 42.5903},
  "Dominica": {lat: 15.4150, lng: -61.3710},
  "Dominican Republic": {lat: 18.7357, lng: -70.1627},
  "Ecuador": {lat: -1.8312, lng: -78.1834},
  "Egypt": {lat: 26.8206, lng: 30.8025},
  "El Salvador": {lat: 13.7942, lng: -88.8965},
  "Equatorial Guinea": {lat: 1.6508, lng: 10.2679},
  "Eritrea": {lat: 15.1794, lng: 39.7823},
  "Estonia": {lat: 58.5953, lng: 25.0136},
  "Eswatini": {lat: -26.5225, lng: 31.4659},
  "Ethiopia": {lat: 9.1450, lng: 40.4897},
  "Fiji": {lat: -17.7134, lng: 178.0650},
  "Finland": {lat: 61.9241, lng: 25.7482},
  "France": {lat: 46.2276, lng: 2.2137},
  "Gabon": {lat: -0.8037, lng: 11.6094},
  "Gambia": {lat: 13.4432, lng: -15.3101},
  "Georgia": {lat: 42.3154, lng: 43.3569},
  "Germany": {lat: 51.1657, lng: 10.4515},
  "Ghana": {lat: 7.9465, lng: -1.0232},
  "Greece": {lat: 39.0742, lng: 21.8243},
  "Grenada": {lat: 12.1165, lng: -61.6790},
  "Guatemala": {lat: 15.7835, lng: -90.2308},
  "Guinea": {lat: 9.9456, lng: -11.4074},
  "Guinea-Bissau": {lat: 11.8037, lng: -15.1804},
  "Guyana": {lat: 4.8604, lng: -58.9302},
  "Haiti": {lat: 18.9712, lng: -72.2852},
  "Honduras": {lat: 15.1999, lng: -86.2419},
  "Hungary": {lat: 47.1625, lng: 19.5033},
  "Iceland": {lat: 64.9631, lng: -19.0208},
  "India": {lat: 20.5937, lng: 78.9629},
  "Indonesia": {lat: -0.7893, lng: 113.9213},
  "Iran": {lat: 32.4279, lng: 53.6880},
  "Iraq": {lat: 33.2232, lng: 43.6793},
  "Ireland": {lat: 53.1424, lng: -7.6921},
  "Israel": {lat: 31.0461, lng: 34.8516},
  "Italy": {lat: 41.8719, lng: 12.5674},
  "Ivory Coast": {lat: 7.5400, lng: -5.5471},
  "Jamaica": {lat: 18.1096, lng: -77.2975},
  "Japan": {lat: 36.2048, lng: 138.2529},
  "Jordan": {lat: 30.5852, lng: 36.2384},
  "Kazakhstan": {lat: 48.0196, lng: 66.9237},
  "Kenya": {lat: -0.0236, lng: 37.9062},
  "Kiribati": {lat: -3.3704, lng: -168.7340},
  "Kuwait": {lat: 29.3117, lng: 47.4818},
  "Kyrgyzstan": {lat: 41.2044, lng: 74.7661},
  "Laos": {lat: 19.8563, lng: 102.4955},
  "Latvia": {lat: 56.8796, lng: 24.6032},
  "Lebanon": {lat: 33.8547, lng: 35.8623},
  "Lesotho": {lat: -29.6100, lng: 28.2336},
  "Liberia": {lat: 6.4281, lng: -9.4295},
  "Libya": {lat: 26.3351, lng: 17.2283},
  "Liechtenstein": {lat: 47.1660, lng: 9.5554},
  "Lithuania": {lat: 55.1694, lng: 23.8813},
  "Luxembourg": {lat: 49.8153, lng: 6.1296},
  "Madagascar": {lat: -18.7669, lng: 46.8691},
  "Malawi": {lat: -13.2543, lng: 34.3015},
  "Malaysia": {lat: 4.2105, lng: 101.9758},
  "Maldives": {lat: 3.2028, lng: 73.2207},
  "Mali": {lat: 17.5707, lng: -3.9962},
  "Malta": {lat: 35.9375, lng: 14.3754},
  "Marshall Islands": {lat: 7.1315, lng: 171.1845},
  "Mauritania": {lat: 21.0079, lng: -10.9408},
  "Mauritius": {lat: -20.3484, lng: 57.5522},
  "Mexico": {lat: 23.6345, lng: -102.5528},
  "Micronesia": {lat: 7.4256, lng: 150.5508},
  "Moldova": {lat: 47.4116, lng: 28.3699},
  "Monaco": {lat: 43.7384, lng: 7.4246},
  "Mongolia": {lat: 46.8625, lng: 103.8467},
  "Montenegro": {lat: 42.7087, lng: 19.3744},
  "Morocco": {lat: 31.7917, lng: -7.0926},
  "Mozambique": {lat: -18.6657, lng: 35.5296},
  "Myanmar": {lat: 21.9162, lng: 95.9560},
  "Namibia": {lat: -22.9576, lng: 18.4904},
  "Nauru": {lat: -0.5228, lng: 166.9315},
  "Nepal": {lat: 28.3949, lng: 84.1240},
  "Netherlands": {lat: 52.1326, lng: 5.2913},
  "New Zealand": {lat: -40.9006, lng: 174.8860},
  "Nicaragua": {lat: 12.8654, lng: -85.2072},
  "Niger": {lat: 17.6078, lng: 8.0817},
  "Nigeria": {lat: 9.0820, lng: 8.6753},
  "North Korea": {lat: 40.3399, lng: 127.5101},
  "North Macedonia": {lat: 41.6086, lng: 21.7453},
  "Norway": {lat: 60.4720, lng: 8.4689},
  "Oman": {lat: 21.4735, lng: 55.9754},
  "Pakistan": {lat: 30.3753, lng: 69.3451},
  "Palau": {lat: 7.5150, lng: 134.5825},
  "Palestine": {lat: 31.9522, lng: 35.2332},
  "Panama": {lat: 8.5380, lng: -80.7821},
  "Papua New Guinea": {lat: -6.3150, lng: 143.9555},
  "Paraguay": {lat: -23.4425, lng: -58.4438},
  "Peru": {lat: -9.1900, lng: -75.0152},
  "Philippines": {lat: 12.8797, lng: 121.7740},
  "Poland": {lat: 51.9194, lng: 19.1451},
  "Portugal": {lat: 39.3999, lng: -8.2245},
  "Qatar": {lat: 25.3548, lng: 51.1839},
  "Republic of the Congo": {lat: -0.2280, lng: 15.8277},
  "Romania": {lat: 45.9432, lng: 24.9668},
  "Russia": {lat: 61.5240, lng: 105.3188},
  "Rwanda": {lat: -1.9403, lng: 29.8739},
  "Saint Kitts and Nevis": {lat: 17.3578, lng: -62.7830},
  "Saint Lucia": {lat: 13.9094, lng: -60.9789},
  "Saint Vincent and the Grenadines": {lat: 12.9843, lng: -61.2872},
  "Samoa": {lat: -13.7590, lng: -172.1046},
  "San Marino": {lat: 43.9424, lng: 12.4578},
  "Sao Tome and Principe": {lat: 0.1864, lng: 6.6131},
  "Saudi Arabia": {lat: 23.8859, lng: 45.0792},
  "Senegal": {lat: 14.4974, lng: -14.4524},
  "Serbia": {lat: 44.0165, lng: 21.0059},
  "Seychelles": {lat: -4.6796, lng: 55.4920},
  "Sierra Leone": {lat: 8.4606, lng: -11.7799},
  "Singapore": {lat: 1.3521, lng: 103.8198},
  "Slovakia": {lat: 48.6690, lng: 19.6990},
  "Slovenia": {lat: 46.1512, lng: 14.9955},
  "Solomon Islands": {lat: -9.6457, lng: 160.1562},
  "Somalia": {lat: 5.1521, lng: 46.1996},
  "South Africa": {lat: -30.5595, lng: 22.9375},
  "South Korea": {lat: 35.9078, lng: 127.7669},
  "South Sudan": {lat: 6.8770, lng: 31.3070},
  "Spain": {lat: 40.4637, lng: -3.7492},
  "Sri Lanka": {lat: 7.8731, lng: 80.7718},
  "Sudan": {lat: 12.8628, lng: 30.2176},
  "Suriname": {lat: 3.9193, lng: -56.0278},
  "Sweden": {lat: 60.1282, lng: 18.6435},
  "Switzerland": {lat: 46.8182, lng: 8.2275},
  "Syria": {lat: 34.8021, lng: 38.9968},
  "Taiwan": {lat: 23.6978, lng: 120.9605},
  "Tajikistan": {lat: 38.8610, lng: 71.2761},
  "Tanzania": {lat: -6.3690, lng: 34.8888},
  "Thailand": {lat: 15.8700, lng: 100.9925},
  "Timor-Leste": {lat: -8.8742, lng: 125.7275},
  "Togo": {lat: 8.6195, lng: 0.8248},
  "Tonga": {lat: -21.1790, lng: -175.1982},
  "Trinidad and Tobago": {lat: 10.6918, lng: -61.2225},
  "Tunisia": {lat: 33.8869, lng: 9.5375},
  "Turkey": {lat: 38.9637, lng: 35.2433},
  "Turkmenistan": {lat: 38.9697, lng: 59.5563},
  "Tuvalu": {lat: -7.1095, lng: 177.6493},
  "Uganda": {lat: 1.3733, lng: 32.2903},
  "Ukraine": {lat: 48.3794, lng: 31.1656},
  "United Arab Emirates": {lat: 23.4241, lng: 53.8478},
  "United Kingdom": {lat: 55.3781, lng: -3.4360},
  "United States": {lat: 37.0902, lng: -95.7129},
  "Uruguay": {lat: -32.5228, lng: -55.7658},
  "Uzbekistan": {lat: 41.3775, lng: 64.5853},
  "Vanuatu": {lat: -15.3767, lng: 166.9592},
  "Vatican City": {lat: 41.9029, lng: 12.4534},
  "Venezuela": {lat: 6.4238, lng: -66.5897},
  "Vietnam": {lat: 14.0583, lng: 108.2772},
  "Yemen": {lat: 15.5527, lng: 48.5164},
  "Zambia": {lat: -13.1339, lng: 27.8493},
  "Zimbabwe": {lat: -19.0154, lng: 29.1549}
};

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
