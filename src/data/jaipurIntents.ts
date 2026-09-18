export interface JaipurIntentData {
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  heroBadge: string;
  intro: string;
  whatToLookFor: string[];
  recommendedLocalities: string[];
  ownerTechAdvice: string;
  metaTitle: string;
  metaDescription: string;
}

export const jaipurIntents: JaipurIntentData[] = [
  {
    slug: "rooftop-cafes",
    title: "Best Rooftop Cafes in Jaipur",
    shortName: "Rooftop Cafes",
    tagline: "Stunning sunset terraces, heritage fort vistas, and starlit open-air dining.",
    heroBadge: "Scenic Terrace Views",
    intro: "Jaipur's rooftop cafe culture is legendary. From historic terraces directly facing the honeycomb facade of Hawa Mahal to contemporary skyline lounges in C Scheme and Tonk Road, rooftop dining combines panoramic views with cool evening desert breezes.",
    whatToLookFor: [
      "Unobstructed views of monuments or Aravali hills",
      "Misting fans for summer evenings and warm heaters for winter nights",
      "Acoustic live music and ambient lighting",
      "Specialty mocktails, coffees, and wood-fired thin-crust pizzas",
    ],
    recommendedLocalities: ["Pink City", "C Scheme", "Bani Park", "Amer", "Malviya Nagar"],
    ownerTechAdvice: "For multi-tiered rooftop cafes, servers climbing up and down stairs causes severe order latency. CafeGrow's QR table ordering lets terrace guests order instantly on their phones, sending kitchen tickets directly to kitchen printers.",
    metaTitle: "Top Rooftop Cafes in Jaipur (2026 Guide) — Sunset & Heritage Terraces",
    metaDescription: "Discover the best rooftop cafes in Jaipur with breathtaking views of Hawa Mahal, Nahargarh, and city skylines. Explore top terrace coffee spots.",
  },
  {
    slug: "specialty-coffee",
    title: "Specialty Coffee Shops & Micro-Roasters in Jaipur",
    shortName: "Specialty Coffee",
    tagline: "Single-origin beans, manual pour-overs, aeropress brews, and artisan espresso.",
    heroBadge: "Third-Wave Roasteries",
    intro: "Jaipur's third-wave coffee revolution is in full swing. Discerning coffee lovers can now explore single-estate Arabica from Chikmagalur and Araku Valley, brewed meticulously with V60, Chemex, Aeropress, and siphon equipment by certified baristas.",
    whatToLookFor: [
      "Single-origin coffees with roast date and origin transparency",
      "Trained baristas who can explain tasting notes (fruity, chocolatey, floral)",
      "Alternative milk choices (oat, almond, soy) for specialty lattes",
      "Cold brews steeped for 16-24 hours for smooth low-acidity notes",
    ],
    recommendedLocalities: ["C Scheme", "Malviya Nagar", "Vaishali Nagar", "Civil Lines"],
    ownerTechAdvice: "Specialty coffee menus have frequent seasonal bean changes and customizable milk/brew options. CafeGrow's digital menu allows coffee roasters to update bean origins and tasting notes in 1-click without reprinting paper menus.",
    metaTitle: "Best Specialty Coffee Shops in Jaipur — Pour-Overs & Artisan Roasters",
    metaDescription: "Explore Jaipur's finest specialty coffee bars and micro-roasteries. Find manual pour-overs, cold brews, and single-origin coffees in C Scheme & Malviya Nagar.",
  },
  {
    slug: "work-friendly-wifi",
    title: "Work-Friendly Cafes with High-Speed WiFi in Jaipur",
    shortName: "Work & WiFi Cafes",
    tagline: "Ultra-fast internet, dedicated power sockets, quiet corners, and productivity vibes.",
    heroBadge: "Remote Work & Nomads",
    intro: "Whether you are a freelance developer, startup founder, or remote designer visiting Rajasthan, Jaipur offers exceptional cafes designed for deep work. Enjoy quiet ambient playlists, ergonomic seating, and non-stop caffeine replenishment.",
    whatToLookFor: [
      "Consistent 100+ Mbps WiFi with low latency",
      "Abundant 3-pin power outlets accessible from tables",
      "Comfortable ergonomic chairs and laptop-height tables",
      "Reasonably quiet ambient volume suitable for occasional calls",
    ],
    recommendedLocalities: ["C Scheme", "Vaishali Nagar", "Shyam Nagar", "Bani Park", "Malviya Nagar"],
    ownerTechAdvice: "Remote workers often linger for hours. CafeGrow helps cafe owners monetize long stays smoothly by sending gentle digital check-in alerts on the customer's phone for snack or beverage reorders.",
    metaTitle: "Best Work-Friendly Cafes in Jaipur with Fast WiFi & Power Sockets",
    metaDescription: "Find the top co-working cafes in Jaipur for remote workers and freelancers. High-speed WiFi, quiet workspaces, and specialty coffee in C Scheme and Vaishali Nagar.",
  },
  {
    slug: "breakfast-brunch",
    title: "Best Breakfast & Brunch Cafes in Jaipur",
    shortName: "Breakfast & Brunch",
    tagline: "Sourdough avocado toasts, fluffy buttermilk pancakes, eggs benedict, and fresh roasts.",
    heroBadge: "Morning Cravings & Brunch",
    intro: "Sundays in Jaipur start with leisurely outdoor brunches. From artisanal sourdough bakeries to sunny courtyard cafes serving organic acai bowls, eggs florentine, and freshly squeezed juices, the city offers delicious morning escapes.",
    whatToLookFor: [
      "Freshly baked sourdough and croissants delivered early morning",
      "Wholesome egg preparations, breakfast platters, and vegan chia bowls",
      "Freshly pressed fruit and cold-pressed citrus juice selections",
      "Sunny garden verandas or well-ventilated morning courtyards",
    ],
    recommendedLocalities: ["C Scheme", "Vaishali Nagar", "Bani Park", "Civil Lines"],
    ownerTechAdvice: "Brunch hours experience intense weekend rushes between 10:00 AM and 1:00 PM. CafeGrow's table management automates queue waitlists and enables pre-ordering while customers wait for a table.",
    metaTitle: "Best Breakfast & Brunch Cafes in Jaipur — Fluffy Pancakes & Sourdough",
    metaDescription: "Discover Jaipur's best breakfast spots and weekend brunch cafes. Eggs Benedict, artisan pancakes, fresh bakery items, and specialty morning coffee.",
  },
  {
    slug: "family-cafes",
    title: "Family-Friendly & Cozy Cafes in Jaipur",
    shortName: "Family Cafes",
    tagline: "Spacious seating, wholesome multi-cuisine menus, peaceful gardens, and kid treats.",
    heroBadge: "Family & Gatherings",
    intro: "Dining out with family requires a welcoming atmosphere, wide seating booths, diverse food options that satisfy both grandparents and toddlers, and hassle-free parking. Jaipur's suburban family cafes excel at providing cozy hospitality.",
    whatToLookFor: [
      "Comfortable sofa seating accommodating 4 to 8 family members",
      "Inclusive vegetarian, non-spicy, and kid-friendly menu choices",
      "Clean, well-maintained restrooms and stroller accessibility",
      "Valet parking or dedicated parking spots",
    ],
    recommendedLocalities: ["Vaishali Nagar", "Vidhyadhar Nagar", "Mansarovar", "Malviya Nagar", "Raja Park"],
    ownerTechAdvice: "Family groups generate higher ticket sizes but require coordinated food delivery so everyone eats together. CafeGrow's intelligent KOT system groups table courses and minimizes kitchen delays.",
    metaTitle: "Best Family-Friendly Cafes in Jaipur — Spacious & Cozy Dining",
    metaDescription: "Looking for family-friendly cafes in Jaipur? Discover welcoming cafes with comfortable seating, diverse menus, and cozy garden environments.",
  },
  {
    slug: "student-budget",
    title: "Student & Budget-Friendly Cafes in Jaipur",
    shortName: "Student & Budget Cafes",
    tagline: "Pocket-friendly cold coffees, pizza combos, Maggi varieties, and youth vibes.",
    heroBadge: "Pocket-Friendly & Youth",
    intro: "With hundreds of colleges and coaching institutes, Jaipur has a thriving student cafe culture. These vibrant spots serve frothy cold coffees, loaded fries, cheesy garlic breads, and affordable combo meals without breaking the pocket.",
    whatToLookFor: [
      "Combo meals under ₹150 - ₹250",
      "Fun vibes with board games (Jenga, Uno, Catan) and youth playlists",
      "Fast counter pickup and digital UPI payment",
      "Spirited discussions, group seating, and study spaces",
    ],
    recommendedLocalities: ["Mansarovar", "Malviya Nagar", "Jagatpura", "Pratap Nagar", "Jhotwara"],
    ownerTechAdvice: "Student cafes process high transaction volumes with low average tickets. CafeGrow POS is built for sub-second UPI QR code generation, eliminating checkout queues between college lectures.",
    metaTitle: "Best Student & Budget-Friendly Cafes in Jaipur — Affordable Hangouts",
    metaDescription: "Discover the best budget cafes in Jaipur for college and coaching students. Great cold coffee, delicious snacks, and student-friendly prices.",
  },
  {
    slug: "bakery-dessert",
    title: "Bakery, Patisserie & Artisan Dessert Cafes in Jaipur",
    shortName: "Dessert & Bakery Cafes",
    tagline: "French macarons, Basque burnt cheesecakes, flaky croissants, and hot chocolate.",
    heroBadge: "Artisan Patisseries",
    intro: "For those with a refined sweet tooth, Jaipur boasts European patisseries, artisanal chocolateries, and French bakeries where pastry chefs craft world-class gateaux, tarts, and viennoiserie from scratch daily.",
    whatToLookFor: [
      "Fresh morning bakes using real French butter",
      "Artisan cheesecakes (New York style, Basque, Lotus Biscoff)",
      "Decadent Belgian hot chocolate and affogato",
      "Custom celebratory cakes and gift hampers",
    ],
    recommendedLocalities: ["C Scheme", "Vaishali Nagar", "Raja Park", "Malviya Nagar"],
    ownerTechAdvice: "Bakery display cases run out of specific items fast. CafeGrow enables real-time item 86-ing (marking items out of stock instantly) across digital menus so guests never order an unavailable pastry.",
    metaTitle: "Best Dessert & Bakery Cafes in Jaipur — French Pastries & Cheesecakes",
    metaDescription: "Indulge in Jaipur's finest patisseries and dessert cafes. Fresh croissants, Basque cheesecakes, artisan brownies, and specialty dessert coffees.",
  },
  {
    slug: "business-meeting",
    title: "Quiet Meeting & Executive Business Cafes in Jaipur",
    shortName: "Business & Meeting Cafes",
    tagline: "Discreet booths, low background music, executive coffee service, and power outlets.",
    heroBadge: "Executive & Client Meetings",
    intro: "When you need to close a contract, interview a candidate, or brainstorm with business partners, you need a professional environment. Jaipur's executive cafes offer polished interiors, discreet seating, and prompt unobtrusive service.",
    whatToLookFor: [
      "Low volume instrumental or jazz background music",
      "Spacious tables with space for laptops, notebooks, and documents",
      "Attentive yet discreet waitstaff",
      "Corporate GST invoicing options upon checkout",
    ],
    recommendedLocalities: ["C Scheme", "Civil Lines", "Tonk Road", "MI Road", "Vaishali Nagar"],
    ownerTechAdvice: "Corporate diners require fast checkout and instant GST invoices sent to their company email or WhatsApp. CafeGrow automatically captures GST details and dispatches compliant digital bills instantly.",
    metaTitle: "Best Business Meeting Cafes in Jaipur — Executive & Quiet Settings",
    metaDescription: "Find quiet, professional cafes in Jaipur ideal for client meetings, interviews, and business discussions. Premium coffee and corporate invoicing.",
  },
];

export const getJaipurIntentBySlug = (slug: string): JaipurIntentData | undefined => {
  return jaipurIntents.find((i) => i.slug.toLowerCase() === slug.toLowerCase());
};

export const getAllJaipurIntentSlugs = (): string[] => {
  return jaipurIntents.map((i) => i.slug);
};
