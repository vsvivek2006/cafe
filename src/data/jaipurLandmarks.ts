export interface JaipurLandmarkData {
  slug: string;
  name: string;
  category: "Transit & Travel" | "Shopping & Malls" | "Heritage & Tourism" | "Campus & Culture";
  tagline: string;
  description: string;
  nearbyLocality: string;
  visitorProfile: string[];
  cafeVibe: string;
  keySearchTerms: string[];
}

export const jaipurLandmarks: JaipurLandmarkData[] = [
  {
    slug: "world-trade-park-wtp",
    name: "World Trade Park (WTP)",
    category: "Shopping & Malls",
    tagline: "Jaipur's iconic blue-glass architectural wonder and premier shopping destination.",
    description: "World Trade Park on JLN Marg is Jaipur's most famous modern landmark. Attracting tens of thousands of shoppers, youth, and business visitors daily, cafes around WTP are bustling from noon till midnight with gourmet coffee, burgers, and dessert cravings.",
    nearbyLocality: "Malviya Nagar",
    visitorProfile: ["Retail shoppers", "Youth squads", "Moviegoers", "Tourists"],
    cafeVibe: "High-energy, contemporary, fast-casual dining, trendy shakes and artisan espressos.",
    keySearchTerms: ["cafes near WTP Jaipur", "best coffee near World Trade Park", "rooftop cafes near WTP JLN Marg"],
  },
  {
    slug: "gaurav-tower-gt",
    name: "Gaurav Tower (GT)",
    category: "Shopping & Malls",
    tagline: "The historic pioneer of youth shopping, street food, and vibrant evening hangouts.",
    description: "Gaurav Tower in Malviya Nagar has been the heartbeat of Jaipur's youth and college culture for over two decades. The surrounding open plazas are packed with budget-friendly cafes, shake parlors, and pizza corners buzzing every evening.",
    nearbyLocality: "Malviya Nagar",
    visitorProfile: ["College students", "Shoppers", "Street food fans", "Young couples"],
    cafeVibe: "Lively, budget-friendly, street-facing, quick counter ordering, and cold coffee hangouts.",
    keySearchTerms: ["cafes near Gaurav Tower Jaipur", "GT Malviya Nagar coffee places", "budget student cafes near GT"],
  },
  {
    slug: "jaipur-junction",
    name: "Jaipur Junction Railway Station",
    category: "Transit & Travel",
    tagline: "The primary railway terminus connecting millions of travelers to Rajasthan.",
    description: "Located near Bani Park and MI Road, Jaipur Junction witnesses non-stop transit passengers. Cafes in the vicinity specialize in quick takeaways, clean sit-down waiting spaces, morning breakfast combos, and reliable WiFi.",
    nearbyLocality: "Bani Park",
    visitorProfile: ["Interstate rail passengers", "Business travelers", "Tourists arriving in Jaipur"],
    cafeVibe: "Fast turnaround, luggage-friendly, early-morning coffee, express food parcel counters.",
    keySearchTerms: ["cafes near Jaipur Junction railway station", "breakfast cafes near Jaipur railway station"],
  },
  {
    slug: "jaipur-airport",
    name: "Jaipur International Airport",
    category: "Transit & Travel",
    tagline: "Rajasthan's primary aviation gateway in Sanganer with upscale transit cafes.",
    description: "Situated in Sanganer near Jawahar Circle, Jaipur International Airport handles domestic and international flights. Travelers seek aesthetic lounges, specialty coffee roasters, and 24-hour food spots along Airport Road and JLN Marg.",
    nearbyLocality: "Sanganer",
    visitorProfile: ["Flight travelers", "Airline crew", "Corporate executives", "Transit tourists"],
    cafeVibe: "Upscale, comfortable seating, high-speed WiFi, power sockets at every table, 24/7 service.",
    keySearchTerms: ["cafes near Jaipur airport", "best coffee near Jaipur international airport", "24/7 cafes near airport Jaipur"],
  },
  {
    slug: "jawahar-circle",
    name: "Jawahar Circle & Patrika Gate",
    category: "Heritage & Tourism",
    tagline: "Asia's largest circular park and the world-famous colorful Patrika Gate.",
    description: "Jawahar Circle is an architectural and photography sensation. With the rainbow-arched Patrika Gate and musical fountains, cafes here attract morning fitness enthusiasts, lifestyle influencers, and evening family strollers.",
    nearbyLocality: "Malviya Nagar",
    visitorProfile: ["Photographers & content creators", "Morning walkers", "Families with children", "Couples"],
    cafeVibe: "Scenic, open-air garden terraces, colorful aesthetic themes, artisan mocktails, and bakery bakes.",
    keySearchTerms: ["cafes near Patrika Gate Jaipur", "cafes near Jawahar Circle", "romantic cafes near Jawahar Circle"],
  },
  {
    slug: "hawa-mahal",
    name: "Hawa Mahal (Palace of Winds)",
    category: "Heritage & Tourism",
    tagline: "The 953-window honeycomb landmark of Jaipur with iconic rooftop viewing terraces.",
    description: "Hawa Mahal is Jaipur's most photographed heritage icon. Rooftop cafes directly opposite the honeycomb facade (like Wind View Cafe and Tattoo Cafe) allow visitors to sip masala chai and iced pour-overs while taking breathtaking photos.",
    nearbyLocality: "Pink City",
    visitorProfile: ["International travelers", "Heritage explorers", "Instagram content creators"],
    cafeVibe: "Terrace rooftops, heritage pink stone ambiance, Rajasthani hospitality, photography-friendly.",
    keySearchTerms: ["rooftop cafes near Hawa Mahal", "best view cafe Hawa Mahal Jaipur", "sunset coffee Hawa Mahal"],
  },
  {
    slug: "city-palace",
    name: "City Palace Jaipur",
    category: "Heritage & Tourism",
    tagline: "The royal royal residence of the Jaipur Maharajas blending Rajput, Mughal, and European architecture.",
    description: "Located in the heart of the Walled City, the City Palace complex is surrounded by heritage courtyards, museums, and historic cafes offering regal dining experiences and fine teas.",
    nearbyLocality: "Pink City",
    visitorProfile: ["Royal heritage tourists", "Art & textile connoisseurs", "Dignitaries"],
    cafeVibe: "Aristocratic, regal courtyards, gourmet organic teas, heritage bakery spreads.",
    keySearchTerms: ["cafes near City Palace Jaipur", "heritage tea cafes near City Palace", "coffee places in walled city"],
  },
  {
    slug: "albert-hall-museum",
    name: "Albert Hall Museum (Ram Niwas Garden)",
    category: "Heritage & Tourism",
    tagline: "Indo-Saracenic museum palace glowing in amber lights surrounded by lush gardens.",
    description: "Albert Hall in Ram Niwas Garden is an architectural triumph, especially when illuminated at night. Cafes bordering Ram Niwas Garden and JLN Marg cater to evening crowds who admire the museum's illuminated facade.",
    nearbyLocality: "C Scheme",
    visitorProfile: ["Culture enthusiasts", "Art students", "Evening walkers", "Heritage tourists"],
    cafeVibe: "Lush garden views, calm outdoor verandas, artisanal coffees, and dessert bistros.",
    keySearchTerms: ["cafes near Albert Hall museum", "evening cafes near Ram Niwas Garden Jaipur"],
  },
  {
    slug: "amer-fort",
    name: "Amer Fort & Maota Lake",
    category: "Heritage & Tourism",
    tagline: "UNESCO World Heritage hillside fortress with breathtaking views over Maota Lake.",
    description: "Amer Fort attracts millions of global travelers annually. Cafes along the cobblestone pathways and fort hills provide authentic Rajasthani kahwa, French press coffee, and refreshing drinks after walking the grand fort ramparts.",
    nearbyLocality: "Amer",
    visitorProfile: ["Global backpackers", "History tourists", "Guided tour groups", "Hiking enthusiasts"],
    cafeVibe: "Rustic stone balconies, panoramic fort views, wholesome brunch plates, and refreshing cooler drinks.",
    keySearchTerms: ["cafes near Amer Fort Jaipur", "best cafe near Maota Lake Amer", "breakfast near Amber Fort"],
  },
  {
    slug: "statue-circle",
    name: "Statue Circle",
    category: "Campus & Culture",
    tagline: "Jaipur's quintessential evening coffee gathering roundabout dedicated to Maharaja Sawai Jai Singh.",
    description: "Statue Circle is a legendary cultural landmark. Generations of Jaipur locals have made it an evening ritual to grab a frothy cold coffee with chocolate sauce and stroll around the illuminated marble fountain gardens.",
    nearbyLocality: "C Scheme",
    visitorProfile: ["Lifelong Jaipur locals", "Late-night drivers", "College friends", "Couples"],
    cafeVibe: "Open-air street gathering, legendary cold coffee counters, energetic, social ritual.",
    keySearchTerms: ["cold coffee at Statue Circle", "cafes near Statue Circle C Scheme", "evening hangouts Statue Circle"],
  },
  {
    slug: "mnit-jaipur",
    name: "MNIT Jaipur (Malaviya National Institute of Technology)",
    category: "Campus & Culture",
    tagline: "Premier engineering institute with high-density student coffee culture.",
    description: "MNIT on JLN Marg is home to over 5,000 engineering and architecture students. The cafes flanking its boundary walls in Malviya Nagar are bustling hubs for coding marathons, project discussions, and affordable bites.",
    nearbyLocality: "Malviya Nagar",
    visitorProfile: ["Engineering students", "Faculty & researchers", "Tech startup interns"],
    cafeVibe: "Study-friendly, affordable combos, high-speed WiFi, ample charging points, late night hours.",
    keySearchTerms: ["study cafes near MNIT Jaipur", "budget cafes near MNIT JLN Marg", "student hangouts near MNIT"],
  },
  {
    slug: "university-of-rajasthan",
    name: "University of Rajasthan (RU Campus)",
    category: "Campus & Culture",
    tagline: "Rajasthan's oldest public university campus filled with intellectual debates and student canteens.",
    description: "The sprawling RU campus on JLN Marg has nurtured generations of leaders and scholars. Nearby cafes in Bapu Nagar and Gandhi Nagar host lively intellectual debates, book clubs, and post-lecture coffee catchups.",
    nearbyLocality: "C Scheme",
    visitorProfile: ["University scholars", "Civil service aspirants", "Student leaders", "Academics"],
    cafeVibe: "Intellectual, relaxed, budget-conscious, tea & coffee debates, spacious outdoor lawns.",
    keySearchTerms: ["cafes near Rajasthan University", "student cafes near RU campus JLN Marg", "budget study cafes near Bapu Nagar"],
  },
];

export const getJaipurLandmarkBySlug = (slug: string): JaipurLandmarkData | undefined => {
  return jaipurLandmarks.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
};

export const getAllJaipurLandmarkSlugs = (): string[] => {
  return jaipurLandmarks.map((l) => l.slug);
};
