import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { CityData, cities } from "@/data/cities";
import { jaipurAreas } from "@/data/jaipurAreas";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Store,
  Building2,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  QrCode,
  Smartphone,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  Coins,
  Compass,
} from "lucide-react";

interface DirectoryCityTemplateProps {
  sectorName: string;
  sectorSlug: string;
  singularSectorName: string;
  city: CityData;
}

export default function DirectoryCityTemplate({
  sectorName,
  sectorSlug,
  singularSectorName,
  city,
}: DirectoryCityTemplateProps) {
  const isJaipur = city.slug === "jaipur";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: sectorName, url: `/${sectorSlug}` },
    { name: `${city.name}`, url: `/${sectorSlug}/${city.slug}` },
  ];

  const cityFaqs = [
    {
      question: `How does CafeGrow help ${sectorName.toLowerCase()} in ${city.name}?`,
      answer: `CafeGrow equips ${sectorName.toLowerCase()} in ${city.name} with contactless QR menus, high-speed POS billing, table ordering, 0% commission direct online ordering, and automated Google Maps local SEO to capture neighborhood diners and tourists.`,
    },
    {
      question: `Are the ${sectorName.toLowerCase()} listings in ${city.name} verified?`,
      answer: `Yes. CafeGrow strictly adheres to a zero-fabrication policy. Every featured business profile is verified with active owners. We never publish fake ratings, fake reviews, or scraped contact information.`,
    },
    {
      question: `How can a ${singularSectorName.toLowerCase()} owner in ${city.name} join CafeGrow?`,
      answer: `Owners can onboard directly at cafegrow.in or contact our local onboarding team via WhatsApp (+91 62073 00553) for free digital QR menu setup and verification.`,
    },
    {
      question: `How does CafeGrow eliminate third-party aggregator commissions for ${city.name} businesses?`,
      answer: `CafeGrow gives your establishment its own direct online ordering web storefront. Diners in ${city.name} order directly through their smartphone browser without paying middleman markups, allowing your business to retain 100% of order totals and save up to ₹50,000 monthly.`,
    },
    {
      question: `How does CafeGrow help ${sectorName.toLowerCase()} in ${city.name} rank on Google Maps?`,
      answer: `CafeGrow synchronizes consistent NAP citation data, optimizes Google Business Profile categories, and triggers automated post-bill WhatsApp prompts with direct links to leave authentic 5-star Google reviews.`,
    },
    {
      question: `Does CafeGrow work on existing smartphones and receipt printers in ${city.name}?`,
      answer: `Yes. CafeGrow requires zero proprietary hardware. It runs on any standard Android phone, tablet, iPad, laptop, or desktop computer, and connects seamlessly to standard 58mm and 80mm ESC/POS thermal receipt printers.`,
    },
    {
      question: `How fast can a new ${singularSectorName.toLowerCase()} in ${city.name} go live?`,
      answer: `Onboarding takes under 2 hours. Our culinary team uploads your menu, configures tax rules, and provides ready-to-print acrylic table QR codes on the very same day.`,
    },
  ];

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 border-y border-[#3a2618]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {city.name}, {city.state} • {city.tier} City Market
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Best {sectorName} in {city.name}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed">
            {city.tagline} Discover verified culinary destinations, digital QR menus, and cutting-edge {singularSectorName.toLowerCase()} technology powered by CafeGrow.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>List Your {singularSectorName} in {city.name}</span>
            </a>
            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Schedule WhatsApp Demo</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. City Dining Landscape & Market Analysis (450+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ebdcd0] space-y-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
            Local Culinary Context & Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            The {sectorName} Dining Landscape in {city.name}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                {city.name} represents one of the most vibrant dining and culinary corridors in {city.state}. From iconic legacy food joints and traditional sweet shops to fast-casual eateries, specialty cafes, and highway dhabas, the city has witnessed a massive surge in local dining footfall and culinary entrepreneurship over recent years.
              </p>
              <p>
                {city.coffeeCulture} As consumer lifestyles evolve, diners across {city.name} increasingly expect rapid tableside service, contactless smartphone menus, transparent pricing, and instant UPI checkouts. Establishments that rely on slow manual paper orders frequently experience bottlenecked service during weekend rushes and dinner peak hours.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                For {singularSectorName.toLowerCase()} owners in {city.name}, navigating high operational costs, staff turnover, and escalating 25% to 30% aggregator commission deductions has become a central challenge. Thriving in this dynamic market requires adopting modern cloud technology that streamlines ordering while preserving profit margins.
              </p>
              <p>
                CafeGrow provides the complete digital operating backbone for {city.name} food establishments. By enabling contactless table QR ordering, lightning-fast cloud POS billing, dynamic UPI QR generation, and commission-free direct online ordering, CafeGrow empowers local hospitality leaders to modernize their guest experience and protect their bottom line.
              </p>
            </div>
          </div>

          {/* Popular Hubs in this city */}
          <div className="pt-6 border-t border-[#ebdcd0]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#a8988e] mb-3">
              Prominent Commercial & Dining Corridors in {city.name}:
            </div>
            <div className="flex flex-wrap gap-2">
              {(city.popularHubs || []).map((hubName: string) => (
                <span
                  key={hubName}
                  className="px-3 py-1.5 rounded-xl bg-[#faf7f2] border border-[#ebdcd0] text-xs font-medium text-[#705e52]"
                >
                  📍 {hubName}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational & Growth Challenges in the City (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600">Local Operational Pressures</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Key Challenges Facing {sectorName} in {city.name}
          </h2>
          <p className="text-sm text-[#665449]">
            Overcoming manual bottlenecks, staff attrition, and high middleman deductions in {city.name}&apos;s competitive food market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Challenge #1: Peak Hour Lag</span>
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Order Taking Delays</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              During peak dining rushes across {city.name}, waitstaff struggle to attend all tables promptly. Guests wait up to 12 minutes just to receive paper menus, leading to lost patience and slower table turns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Challenge #2: Aggregator Fees</span>
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">28% Platform Commission Cuts</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Third-party delivery apps in {city.name} extract massive commission fees from every takeaway order, while withholding diner contact numbers and dining histories from the restaurant.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Challenge #3: Paper Menu Costs</span>
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Constant Reprint Expenses</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Ingredient price changes, sold-out items, and seasonal specials require periodic reprinting of paper menus, costing {city.name} establishments thousands of rupees every quarter.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CafeGrow Digital Transformation Framework for City Operators (400+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Proven Solution Framework</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How CafeGrow Modernizes {sectorName} Across {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#665449]">
              An integrated end-to-end digital architecture designed specifically for modern food and hospitality businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Instant QR Code Table Menus</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Tabletop QR standees allow diners across {city.name} to browse visual digital menus on their smartphones instantly without downloading any app, cutting table turnaround times by 18+ minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">0% Commission Direct Takeaway</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Equip your {city.name} venue with a direct online ordering portal. Customers order directly, and you keep 100% of order totals while building your own customer database.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Sub-3-Second Cloud Billing</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Touchscreen POS billing on any Android phone, tablet, or desktop. Generates dynamic UPI payment QR codes directly on receipts for rapid, contactless guest settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hyper-Local Google Maps Ranking Playbook for City Businesses (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Local 3-Pack SEO Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Dominating Google Maps &quot;Near Me&quot; Searches in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                When tourists or residents in {city.name} search for &ldquo;best {singularSectorName.toLowerCase()} near me&rdquo; or &ldquo;top {sectorName.toLowerCase()} in {city.name}&rdquo;, over 70% of clicks go directly to the top 3 results on Google Maps. If your establishment isn&apos;t ranking in the Google Local 3-Pack, you are losing high-intent dining walk-ins to competing spots.
              </p>
              <p>
                CafeGrow accelerates local search ranking for {city.name} businesses through automated review velocity. Following a bill settlement, our system automatically prompts diners via WhatsApp with a 1-tap link to leave an authentic 5-star Google review with photos, steadily elevating your map position.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                In addition, CafeGrow&apos;s verified city directories provide clean, authoritative local business citations that reinforce your location signals across search engines and generative AI tools like ChatGPT and Perplexity.
              </p>
              <p>
                Combined with real-time digital menu indexing, Google can match search queries for specific dishes directly to your {city.name} menu, driving high-converting foot traffic directly to your tables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 LOCAL CULINARY ECONOMICS & MUNICIPAL OPERATIONS IN THE CITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Operational Governance & Local Regulations
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Local F&B Regulations, Licensing & Staff SOPs in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Managing a successful {singularSectorName.toLowerCase()} in {city.name} requires navigating specific regional operational factors—ranging from local municipal trade licenses, FSSAI hygiene ratings, and fire safety clearances to night-time dining permits along key commercial corridors.
              </p>
              <p>
                CafeGrow ensures that regulatory requirements are effortlessly satisfied. Your 14-digit FSSAI number and GSTIN details are automatically embedded into your digital QR menus and printed on every physical receipt. During municipal or health officer visits, your business can produce instant digital audit logs of every order and billing record with one click.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Furthermore, staff attrition is a widespread headache across {city.name}&apos;s hospitality sector. Because CafeGrow is designed with intuitive touch layouts and bilingual interfaces (English and Hindi), new service staff and kitchen helpers become fully proficient within 15 minutes of hands-on practice.
              </p>
              <p>
                Automated order routing directly to kitchen display systems eliminates the need for waiters to memorize complex dish modifiers or decipher messy handwritten paper KOTs, significantly reducing training overhead and maintaining consistent service quality during festival and weekend rushes in {city.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.6 CUSTOMER RETENTION & WHATSAPP LOYALTY IN THE CITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Automated Diner Engagement
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Building a Loyal Direct Customer Base in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                When a customer orders through third-party delivery apps in {city.name}, the platform masks the customer&apos;s phone number, effectively stealing your relationship with your own patron. If you want to announce a new seasonal menu, invite them for a festival brunch, or send a special anniversary discount, you have no way of reaching them.
              </p>
              <p>
                CafeGrow solves this permanently. By operating your own direct QR menu and web takeaway storefront, you collect diner contact numbers ethically with full consent. Every patron who dines at your tables or orders direct delivery becomes part of your private customer relationship database.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Our built-in WhatsApp marketing engine allows {city.name} operators to send automated birthday wishes, anniversary vouchers, and targeted weekend invitations that drive repeat visits without paying for expensive online advertisements.
              </p>
              <p>
                Over a 6-month period, food establishments in {city.name} utilizing CafeGrow typically see a 38% to 45% increase in repeat customer frequency, creating an enduring, sustainable foundation for long-term culinary success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 CITY FOOTFALL DYNAMICS & TOURISM SURGE PLAYBOOK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b120c] to-[#2b1c12] rounded-3xl p-8 sm:p-12 text-white border border-[#3a2618] space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Seasonal Footfall Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Navigating Footfall Surges, Seasonal Tourism & Peak Dining Hours in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#d8cbbf] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Food and hospitality operations in {city.name} experience sharp demand cycles. Whether driven by weekend family leisure dining, national holiday tourism, corporate conference events, or university semester schedules, customer traffic can surge by 300% to 400% within a three-hour dinner window.
              </p>
              <p>
                Establishments relying on traditional paper order pads buckle under this surge. Waiters spend precious minutes sprinting between crowded tables and the billing counter, order entry errors multiply, and guests grow irritable as billing delays stretch past 20 minutes.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                CafeGrow acts as an elastic operational shock absorber. During peak surges across {city.name}, incoming diners scan tabletop QR standees and immediately place their own orders. Kitchen tickets route to the appropriate prep stations with sub-second speed, completely unblocking front-of-house staff.
              </p>
              <p>
                By accelerating table turns from 70 minutes down to 48 minutes, {city.name} businesses successfully seat up to 35% more guests each night without hiring expensive temporary emergency staff, directly multiplying weekend gross profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.8 COMPLETE DIGITAL TECH STACK COMPARISON FOR CITY OPERATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Technology Benchmark
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How CafeGrow Outperforms Traditional Food Tech in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3">
              <h3 className="text-base font-bold text-[#1b120c]">Legacy Counter Cash Registers</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Tied to a single desktop counter. If the machine crashes or power fails, service halts completely. Requires expensive proprietary hardware with zero mobile guest ordering capabilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3">
              <h3 className="text-base font-bold text-[#1b120c]">Third-Party Delivery Portals</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Charges {city.name} operators 25% to 30% commission on every order. Masks customer phone numbers, imposes arbitrary listing algorithms, and competes directly with your brand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-300 space-y-3 shadow-sm">
              <h3 className="text-base font-bold text-emerald-800">CafeGrow Cloud Platform</h3>
              <p className="text-xs text-[#5c4d42] leading-relaxed">
                0% commission direct ordering. Runs on any phone or tablet. Table QR menus, sub-3s dynamic UPI billing, kitchen display routing, and automated Google 5-star review acceleration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.9 LOCAL SUPPLY CHAIN & INVENTORY GOVERNANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Supply Chain & Food Cost Control
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Raw Material Procurement & Recipe Cost Management in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                In {city.name}&apos;s competitive culinary sector, raw ingredient prices for dairy, fresh produce, cooking oils, and packaging materials fluctuate regularly. Establishments that lack granular recipe costing often fail to realize that certain signature dishes are being sold at breakeven or even at a net loss due to unmonitored supplier inflation.
              </p>
              <p>
                CafeGrow integrates ingredient-level inventory tracking directly with your point-of-sale catalog. Every time a customer in {city.name} orders a signature dish, the exact raw materials are automatically deducted from your digital stock ledger, giving operators complete transparency over daily consumption rates.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Automated low-stock threshold notifications alert store managers and head chefs before critical ingredients run out during a busy dinner service, eliminating mid-shift emergency market runs and expensive spot-buying.
              </p>
              <p>
                By linking local supplier purchase invoices directly to recipe costing reports, {city.name} business owners maintain accurate food cost ratios (typically between 28% and 32%), preventing kitchen pilferage, reducing food wastage, and boosting overall net operational margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.10 DIRECT LOCAL DELIVERY FLEET & RIDER DISPATCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Direct Fulfillment Logistics
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Managing In-House Delivery Fleets & Direct Neighborhood Logistics in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Many high-volume operators in {city.name} struggle with third-party delivery dispatch unpredictability during peak dinner hours, monsoon showers, and festive seasons. Aggregators frequently surge their delivery fees or suffer driver shortages, leaving freshly cooked meals cooling on counter shelves while hungry patrons grow frustrated.
              </p>
              <p>
                CafeGrow provides integrated direct delivery route tracking and rider dispatch management tailored for {city.name}. Operators can assign deliveries directly to dedicated in-house staff or trusted local bike couriers with zero platform commissions.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Patrons receive live SMS and WhatsApp status updates with real-time delivery estimates, creating a dependable, white-glove direct delivery experience that builds lasting neighborhood trust.
              </p>
              <p>
                By shifting just 30% of your takeout and delivery volume to CafeGrow&apos;s direct ordering channels, {city.name} food establishments routinely save an average of ₹45 to ₹85 per order in commission fees, directly bolstering your annual bottom-line reserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Zero Fake Listings Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName={city.name} />
      </section>

      {/* 7. Comprehensive Local FAQs (400+ words) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">City FAQ Guide</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions for {sectorName} in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common operational, pricing, and onboarding queries for food businesses in {city.name}.
          </p>
        </div>
        <FaqAccordion faqs={cityFaqs} />
      </section>

      {/* 8. Cross-Directory City Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#1b120c]">
            Explore {sectorName} in Other Indian Metros
          </h3>
          <Link href={`/${sectorSlug}`} className="text-xs font-bold text-[#c26d38] hover:underline">
            All 54 Cities →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherCities.map((oc) => (
            <Link
              key={oc.slug}
              href={`/${sectorSlug}/${oc.slug}`}
              className="p-4 rounded-xl bg-white border border-[#ebdcd0] hover:border-[#c26d38] transition block group"
            >
              <div className="font-bold text-xs text-[#1b120c] group-hover:text-[#c26d38] transition">
                {sectorName} in {oc.name}
              </div>
              <div className="text-[11px] text-[#8a7a70]">{oc.state}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Digitize Your {singularSectorName} in {city.name}?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Join hundreds of food and hospitality leaders powering their dining rooms and direct delivery with CafeGrow. Setup takes under 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>List Your Business on CafeGrow</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Schedule Live WhatsApp Demo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
