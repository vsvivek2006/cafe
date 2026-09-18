export interface VerifiedBusinessProfile {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  citySlug: string;
  area: string;
  areaSlug: string;
  headline: string;
  description: string;
  features: string[];
  cuisineTypes: string[];
  seatingCapacity?: string;
  operationalHighlights: string[];
  techUsed: string[];
  directOrderingEnabled: boolean;
  qrMenuLive: boolean;
  addressInfo: string;
  verifiedPartner: boolean;
  onboardingStatus: "Active Partner" | "Pilot Showcase" | "Verified Member";
}

export const verifiedBusinesses: VerifiedBusinessProfile[] = [
  {
    slug: "anokhi-heritage-cafe-c-scheme",
    name: "The Roastery Hub & Heritage Cafe",
    category: "Cafe & Specialty Coffee",
    categorySlug: "cafe",
    city: "Jaipur",
    citySlug: "jaipur",
    area: "C Scheme",
    areaSlug: "c-scheme",
    headline: "Artisanal Specialty Coffee, Fresh Sourdough & Open-Air Courtyard Dining",
    description:
      "A premier specialty coffee destination in Jaipur's C Scheme, featuring single-origin manual pour-overs, cold brews steeped for 18 hours, and European breakfast bakes in a leafy, heritage courtyard setting. Uses CafeGrow contactless QR table ordering and barista customizer routing.",
    features: ["Outdoor Garden Seating", "High-Speed WiFi", "Pet Friendly", "Single-Origin Manual Brews", "100% Contactless QR Ordering"],
    cuisineTypes: ["Specialty Coffee", "Continental", "Bakery & Desserts", "Breakfast Bowls"],
    seatingCapacity: "65 seats across indoor and garden patio",
    operationalHighlights: [
      "Zero-wait QR ordering from garden tables direct to the barista counter",
      "Dynamic daily bean origin updates reflecting fresh roast profiles",
      "Automated WhatsApp digital billing with zero printed paper waste",
    ],
    techUsed: ["CafeGrow Contactless QR Menu", "Table Ordering System", "Barista Kitchen Display System", "Google Maps Local SEO Optimization"],
    directOrderingEnabled: true,
    qrMenuLive: true,
    addressInfo: "C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001",
    verifiedPartner: true,
    onboardingStatus: "Active Partner",
  },
  {
    slug: "royal-rajputana-dhaba-nh48",
    name: "Shree Rajputana Highway Dhaba",
    category: "Dhabas & Highway Eateries",
    categorySlug: "dhaba",
    city: "Jaipur",
    citySlug: "jaipur",
    area: "Delhi Road (NH-48)",
    areaSlug: "delhi-road",
    headline: "Authentic Tandoori Parathas, Dal Makhani & Highway Family Dining",
    description:
      "An iconic highway stop along the Jaipur-Delhi Expressway (NH-48) known for authentic wood-fired tandoor rotis, slow-simmered dal makhani, and refreshing thick kullad lassi. Equipped with CafeGrow high-speed touch POS and bilingual QR menus for rapid traveler turnaround.",
    features: ["Spacious Car & Bus Parking", "Clean Sanitized Restrooms", "AC Family Dining Hall", "Outdoor Traditional Charpai Seating", "24/7 Service"],
    cuisineTypes: ["North Indian", "Rajasthani Specialities", "Tandoori Snacks", "Kullad Beverages"],
    seatingCapacity: "180 seats (charpai + AC hall)",
    operationalHighlights: [
      "Sub-3-second billing speed during tour bus stops with dynamic UPI QR receipts",
      "Direct tandoor kitchen order dispatch eliminating shouted kitchen orders",
      "Highway Google Maps navigation visibility for Delhi-Jaipur travelers",
    ],
    techUsed: ["CafeGrow Dhaba POS Billing", "Bilingual Hindi/English Digital Menu", "Highway Local SEO System"],
    directOrderingEnabled: false,
    qrMenuLive: true,
    addressInfo: "NH-48, Delhi-Jaipur Expressway, Near Kukas Toll Plaza, Jaipur, Rajasthan",
    verifiedPartner: true,
    onboardingStatus: "Active Partner",
  },
  {
    slug: "haveli-heritage-stay-in-room-dining",
    name: "Jaipur Heritage Haveli & Rooftop Restaurant",
    category: "Hotels & Stays",
    categorySlug: "hotel",
    city: "Jaipur",
    citySlug: "jaipur",
    area: "Bani Park",
    areaSlug: "bani-park",
    headline: "Boutique Heritage Hotel Dining with Panoramic Rooftop Fort Vistas",
    description:
      "A restored 19th-century haveli hotel in Bani Park offering heritage lodging, royal Rajasthani dining, and a romantic sunset rooftop lounge. Powered by CafeGrow in-room QR dining compendiums and tableside order management.",
    features: ["Rooftop Sunset View", "In-Room QR Dining", "Traditional Puppet Shows", "Pure Vegetarian Kitchen Options", "Multi-lingual Guest Menus"],
    cuisineTypes: ["Royal Rajasthani Thali", "Mughlai", "Continental Breakfast", "Artisan Mocktails"],
    seatingCapacity: "45 rooms + 80-seat rooftop dining terrace",
    operationalHighlights: [
      "Room-coded QR stands replacing outdated paper directories in 45 guest rooms",
      "Direct room folio posting for seamless checkout bill settlement",
      "Multi-lingual digital menu automatically translating for international tourists",
    ],
    techUsed: ["CafeGrow Hotel F&B Management", "In-Room QR Menu System", "Room Service Dispatch KDS"],
    directOrderingEnabled: true,
    qrMenuLive: true,
    addressInfo: "Bani Park, Durlabhji Marg, Jaipur, Rajasthan 302016",
    verifiedPartner: true,
    onboardingStatus: "Pilot Showcase",
  },
  {
    slug: "artisan-crust-bakery-malviya-nagar",
    name: "Artisan Crust Boulangerie & Pastry Studio",
    category: "Bakeries & Patisseries",
    categorySlug: "bakery",
    city: "Jaipur",
    citySlug: "jaipur",
    area: "Malviya Nagar",
    areaSlug: "malviya-nagar",
    headline: "Handcrafted Sourdough Breads, French Viennoiserie & Designer Celebration Cakes",
    description:
      "A boutique European-style artisanal bakery in Malviya Nagar known for 24-hour slow-fermented sourdough loaves, butter croissants, and custom celebration cakes. Utilizes CafeGrow online custom cake pre-orders and counter POS.",
    features: ["100% Eggless Options", "Daily Fresh Bakes", "Custom Cake Designer Studio", "Takeaway Counter Billing"],
    cuisineTypes: ["French Pastries", "Sourdough Breads", "Gourmet Cakes", "Artisan Cookies"],
    seatingCapacity: "20 cafe seats + retail counter",
    operationalHighlights: [
      "Advance online celebration cake booking with custom text and design reference uploads",
      "Zero cake message mistakes through digital confirmation workflows",
      "Automated birthday reminder WhatsApp alerts for past celebration clients",
    ],
    techUsed: ["CafeGrow Bakery Pre-Ordering Portal", "Touchscreen Counter POS", "Automated Birthday Marketing"],
    directOrderingEnabled: true,
    qrMenuLive: true,
    addressInfo: "Malviya Nagar, Sector 3, Near World Trade Park (WTP), Jaipur, Rajasthan 302017",
    verifiedPartner: true,
    onboardingStatus: "Verified Member",
  },
];

export function getAllVerifiedBusinesses(): VerifiedBusinessProfile[] {
  return verifiedBusinesses;
}

export function getVerifiedBusinessBySlug(slug: string): VerifiedBusinessProfile | undefined {
  return verifiedBusinesses.find((b) => b.slug === slug);
}
