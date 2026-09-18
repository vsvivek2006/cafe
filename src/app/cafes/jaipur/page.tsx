import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { jaipurAreas } from "@/data/jaipurAreas";
import AreaGrid from "@/components/AreaGrid";
import LandmarkGrid from "@/components/LandmarkGrid";
import IntentGrid from "@/components/IntentGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import CustomerDiscoveryCard from "@/components/CustomerDiscoveryCard";
import {
  Coffee,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Store,
  Compass,
  CheckCircle2,
  Heart,
  Briefcase,
  Wifi,
  Sun,
  Cake,
  DollarSign,
  GraduationCap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cafes in Jaipur (2026 Guide) — Best Coffee Spots, Rooftops & Work Cafes | CafeGrow",
  description:
    "Explore the comprehensive 2026 guide to cafes in Jaipur. Discover top coffee shops, romantic rooftops in C Scheme and Pink City, work-friendly WiFi cafes, and family spots across 50+ Jaipur neighborhoods.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/cafes/jaipur`,
  },
  openGraph: {
    title: "Cafes in Jaipur (2026 Guide) | CafeGrow",
    description:
      "The definitive guide to 50+ neighborhood cafe hubs, coffee roasters, and rooftop haveli terraces across Jaipur.",
    url: `${siteConfig.discoveryDomain}/cafes/jaipur`,
  },
};

export default function JaipurMasterHubPage() {
  const breadcrumbs = [
    { name: "All India Cafes", url: "/cafes" },
    { name: "Cafes in Jaipur", url: "/cafes/jaipur" },
  ];

  const jaipurHubFaqs = [
    {
      question: "Which are the best neighborhoods for cafes in Jaipur?",
      answer:
        "C Scheme is the undisputed center for third-wave specialty coffee and high-end aesthetic bistros, followed by Malviya Nagar (bustling around WTP and Gaurav Tower), Vaishali Nagar (affluent family cafes and artisan bakeries), Mansarovar (student cafes around City Park), and the Pink City (heritage rooftop terraces facing Hawa Mahal and royal bazaars).",
    },
    {
      question: "Where can I find rooftop cafes with monument views in Jaipur?",
      answer:
        "The Walled Pink City offers world-famous terrace cafes directly overlooking Hawa Mahal and Tripolia Bazaar. In Amer, hillside cafes offer breathtaking panoramic views of Amer Fort and Maota Lake. In C Scheme, garden rooftops offer lush canopy views over Central Park and Statue Circle.",
    },
    {
      question: "What are the best work-friendly cafes with high-speed WiFi in Jaipur?",
      answer:
        "Top work-friendly cafes are clustered in C Scheme (Subhash Marg, Ahinsa Circle), Vaishali Nagar (Queens Road, Amrapali Marg), and Malviya Nagar (Jhalana Bypass, JLN Marg). These spots provide 100+ Mbps WiFi, dedicated 3-pin laptop power sockets, and quiet background playlists.",
    },
    {
      question: "What is the average cost of coffee and meals at Jaipur cafes?",
      answer:
        "Specialty pour-overs, cold brews, and artisan lattes range from ₹160 to ₹280. Full breakfast platters and continental meals average ₹250 to ₹550 per head. Budget and student cafes near coaching hubs in Mansarovar, Pratap Nagar, and Tonk Road feature combo meals starting from ₹120 to ₹200.",
    },
    {
      question: "Are there late-night cafes open past 11 PM in Jaipur?",
      answer:
        "Yes! Tonk Road features 24/7 hotel coffee shops, while C Scheme, Raja Park, and Malviya Nagar host numerous cafes that remain open until 1:00 AM to 2:00 AM, especially on weekends.",
    },
    {
      question: "How can Jaipur cafe owners list their coffee shop on CafeGrow?",
      answer:
        "Jaipur cafe owners can list their cafe for free by visiting our onboarding page or messaging our local Jaipur growth team on WhatsApp at +91 62073 00553. We set up your digital profile, upload your menu, and deliver table QR stands within 24 hours.",
    },
  ];

  const allJaipurLocations = [
    "C Scheme", "MI Road", "Vaishali Nagar", "Malviya Nagar", "Mansarovar", "Raja Park",
    "Bani Park", "Civil Lines", "Tonk Road", "Jagatpura", "Durgapura", "Sodala",
    "Shyam Nagar", "Pratap Nagar", "Vidhyadhar Nagar", "Adarsh Nagar", "Lal Kothi",
    "Gopalpura", "JLN Marg", "Ajmer Road", "Sanganer", "Sitapura", "Kukas", "Amer",
    "Pink City", "Shastri Nagar", "Mahesh Nagar", "22 Godam", "Nirman Nagar", "Khatipura",
    "Chitrakoot", "Gandhi Path", "Queens Road", "Hanuman Nagar", "Sirsi Road", "Sikar Road",
    "Murlipura", "Subhash Nagar", "Hawa Sadak", "Hasanpura", "Muhana", "Kumbha Marg",
    "Mahal Road", "Kiran Path", "Rajat Path", "Shipra Path", "Madhyam Marg", "VT Road",
    "New Sanganer Road"
  ];

  const jaipurLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Jaipur Cafe Hub",
    description: "The premier specialty coffee and cafe directory for Jaipur, Rajasthan.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.9124",
      longitude: "75.7873",
    },
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jaipurLocalBusinessSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 border-y border-[#3a2618]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Jaipur Master Directory Hub • 50+ Localities & Corridors</span>
          </div>

          {/* Exact H1 requested */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Cafes in Jaipur
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed">
            The definitive 2026 guide to coffee shops, heritage rooftop terraces, work-friendly WiFi hubs, and artisan bakeries across Jaipur. Powered by CafeGrow, the local discovery and growth network.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#neighborhoods"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <Compass className="w-4 h-4" />
              <span>Browse 25+ Locality Guides</span>
            </a>

            <Link
              href="/cafe-software/jaipur"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-white hover:border-[#c26d38] transition"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>Jaipur Cafe Owner Software Hub</span>
            </Link>
          </div>

          <div className="text-xs text-[#8a7a70] pt-2">
            Verified local coverage • Zero scraped or fake listings • Launch market of CafeGrow
          </div>
        </div>
      </section>

      {/* Main Jaipur Narrative: The Culture and Evolution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e2d6c7] shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#c26d38] uppercase tracking-wider">
            <Coffee className="w-4 h-4" />
            <span>The Pink City Coffee Revolution</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            How Jaipur Became North India's Specialty Cafe Capital
          </h2>

          <div className="text-sm sm:text-base text-[#5c4d42] leading-relaxed space-y-4">
            <p>
              Jaipur's coffee story is a fascinating blend of royal Rajput heritage and cutting-edge third-wave specialty brewing. For decades, Jaipur's evening social life revolved around the iconic cold coffee kiosks at Statue Circle, where students, families, and night travelers gathered under marble colonnades.
            </p>
            <p>
              Over the last five years, that nostalgic love for coffee has blossomed into an ambitious artisanal movement. Neighborhoods like <strong>C Scheme</strong> (along Ahinsa Circle, Panch Batti, and Subhash Marg) and <strong>Malviya Nagar</strong> (near World Trade Park and Gaurav Tower) have transformed into thriving cafe districts. Certified baristas now roast and pour single-estate Arabica from Chikmagalur, Araku, and Coorg using Chemex, V60 pour-overs, and Aeropress equipment.
            </p>
            <p>
              Meanwhile, the UNESCO World Heritage Walled City (Pink City) and the historic hills of Amer have birthed panoramic rooftop cafes. Visitors sip artisan iced Americanos and savor freshly baked sourdough bread while watching the sunset glow against the 953 honeycomb windows of Hawa Mahal or the tranquil waters of Maota Lake.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Dedicated Search Intent Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c] tracking-tight">
            Explore Cafes in Jaipur by Search Intent & Occasion
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Whether you are hunting for a quiet work corner, a romantic terrace date, or budget study combos, find the exact spot in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intent 1: Coffee Shops in Jaipur */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Coffee Shops in Jaipur</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Third-wave roasters, manual pour-overs (V60, Chemex), cold brews, and artisan espresso bars in C Scheme, Malviya Nagar, and Civil Lines.
            </p>
            <Link href="/cafes/jaipur/types/specialty-coffee" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>View Specialty Coffee Spots →</span>
            </Link>
          </div>

          {/* Intent 2: Cafes Near Me in Jaipur */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Cafes Near Me in Jaipur</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Find instant hyper-local coffee spots within walking distance across Vaishali Nagar, Raja Park, Mansarovar, Tonk Road, and Jagatpura.
            </p>
            <a href="#neighborhoods" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Browse Localities →</span>
            </a>
          </div>

          {/* Intent 3: Breakfast & Brunch Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Breakfast & Brunch Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Sourdough avocado toasts, fluffy buttermilk pancakes, eggs benedict, and fresh citrus juices in C Scheme, Bani Park, and Civil Lines.
            </p>
            <Link href="/cafes/jaipur/types/breakfast-brunch" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Explore Brunch Cafes →</span>
            </Link>
          </div>

          {/* Intent 4: Family Cafes in Jaipur */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Family Cafes in Jaipur</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Spacious sofa seating, kid-friendly treats, garden verandas, and multi-cuisine menus in Vaishali Nagar, Vidhyadhar Nagar, and Malviya Nagar.
            </p>
            <Link href="/cafes/jaipur/types/family-cafes" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Explore Family Spots →</span>
            </Link>
          </div>

          {/* Intent 5: Couple Cafes in Jaipur */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Couple & Romantic Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Intimate candlelight courtyards, fairy-lit haveli rooftops, and tranquil garden verandas in Bani Park, Amer, and C Scheme.
            </p>
            <Link href="/cafes/jaipur/types/rooftop-cafes" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Romantic Rooftops →</span>
            </Link>
          </div>

          {/* Intent 6: Work-Friendly & WiFi Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Wifi className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Work-Friendly & WiFi Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              100+ Mbps high-speed internet, ample laptop power outlets, ergonomic chairs, and deep-work vibes in C Scheme and Vaishali Nagar.
            </p>
            <Link href="/cafes/jaipur/types/work-friendly-wifi" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>View Work Cafes →</span>
            </Link>
          </div>

          {/* Intent 7: Rooftop Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Rooftop Cafes in Jaipur</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Terraces directly facing Hawa Mahal, Nahargarh Fort, and evening city skylines in the Pink City, Tonk Road, and Amer.
            </p>
            <Link href="/cafes/jaipur/types/rooftop-cafes" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Explore Rooftops →</span>
            </Link>
          </div>

          {/* Intent 8: Dessert & Bakery Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Cake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Bakery & Dessert Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              French macarons, Basque burnt cheesecakes, artisan croissants, and decadent Belgian hot chocolate in C Scheme and Raja Park.
            </p>
            <Link href="/cafes/jaipur/types/bakery-dessert" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>View Dessert Cafes →</span>
            </Link>
          </div>

          {/* Intent 9: Budget & Student Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Student & Budget Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Pocket-friendly cold coffees, loaded fries, cheesy garlic breads, and student combos under ₹180 in Mansarovar, Pratap Nagar, and Malviya Nagar.
            </p>
            <Link href="/cafes/jaipur/types/student-budget" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>View Budget Spots →</span>
            </Link>
          </div>

          {/* Intent 10: Study Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Study Cafes in Jaipur</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Quiet atmosphere, long study tables, book borrowing shelves, and steady caffeine near universities on JLN Marg and Jagatpura.
            </p>
            <Link href="/cafes/jaipur/types/work-friendly-wifi" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>Explore Study Spots →</span>
            </Link>
          </div>

          {/* Intent 11: Meeting-Friendly & Business Cafes */}
          <div className="p-6 rounded-3xl bg-white border border-[#e2d6c7] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Meeting & Business Cafes</h3>
            <p className="text-xs text-[#6e5f54] leading-relaxed">
              Discreet seating booths, low instrumental music, GST invoicing, and executive hospitality in Civil Lines, C Scheme, and Tonk Road.
            </p>
            <Link href="/cafes/jaipur/types/business-meeting" className="inline-flex items-center gap-1 text-xs font-bold text-[#c26d38] hover:underline pt-2">
              <span>View Executive Cafes →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 25+ Locality Grid */}
      <section id="neighborhoods" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4eee5] text-[#8a5d3b] text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#c26d38]" />
            <span>Neighborhood Guides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Explore 25+ Dedicated Jaipur Locality Pages
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Detailed neighborhood guides featuring key streets, local challenges, vibes, and verified onboarding notices.
          </p>
        </div>

        <AreaGrid />
      </section>

      {/* Comprehensive 50+ Jaipur Locations & Corridors Matrix (Section 5 requirement) */}
      <section className="bg-[#f5f0ea] py-16 border-y border-[#e2d6c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#1b120c]">
              Complete Jaipur Neighborhood & Street Coverage
            </h3>
            <p className="text-xs text-[#6e5f54]">
              CafeGrow tracks coffee developments across every prime avenue, commercial spine, and residential colony in Jaipur:
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {allJaipurLocations.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1.5 rounded-xl bg-white border border-[#d8cbbf] text-xs font-semibold text-[#1b120c]"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Landmarks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Cafes Near Jaipur Landmarks
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Near transit terminals, monuments, shopping malls, and university campuses.
          </p>
        </div>

        <LandmarkGrid />
      </section>

      {/* Owner CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Jaipur"
          solutionHighlight="contactless QR menus, 3-second POS billing, and local search ranking in Jaipur"
        />
      </div>

      {/* Secondary Patron Discovery Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CustomerDiscoveryCard currentCity="Jaipur" />
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion faqs={jaipurHubFaqs} title="Frequently Asked Questions: Jaipur Cafes" />
      </div>
    </div>
  );
}
