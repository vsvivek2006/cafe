import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ownerSolutions } from "@/data/ownerSolutions";
import { businessCategories } from "@/data/businessCategories";
import { cities } from "@/data/cities";
import { jaipurAreas } from "@/data/jaipurAreas";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Store,
  Compass,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CheckCircle,
  QrCode,
  Layers,
  Smartphone,
  Building2,
  Search,
  Users,
  Utensils,
  Hotel,
  Coffee,
  Flame,
  Truck,
  Cake,
  ExternalLink,
  HelpCircle,
  Award,
} from "lucide-react";

export default function HomePage() {
  const whoCanUseSectors = [
    { name: "Restaurants", slug: "restaurant", desc: "Fine dining, casual, family & rooftop restaurants", icon: Utensils },
    { name: "Hotels", slug: "hotel", desc: "In-room QR dining, banquet halls & stays", icon: Hotel },
    { name: "Cafes", slug: "cafe", desc: "Specialty coffee roasters, bistros & work hubs", icon: Coffee },
    { name: "Dhabas", slug: "dhaba", desc: "Highway eateries, rapid billing & road-trip stops", icon: Flame },
    { name: "Cloud Kitchens", slug: "cloud-kitchen", desc: "0% commission direct delivery & virtual brands", icon: Truck },
    { name: "Bakeries", slug: "bakery", desc: "Designer cake pre-orders & fresh bake POS", icon: Cake },
    { name: "Fast Food Businesses", slug: "fast-food", desc: "Burger joints, roll counters & QSR kiosks", icon: Store },
    { name: "Food Trucks", slug: "food-truck", desc: "Sidewalk QR ordering & live GPS location", icon: Truck },
    { name: "Sweet & Dessert Shops", slug: "sweet-shop", desc: "Mithai scale billing, ice cream & waffles", icon: Cake },
    { name: "Resorts & Guest Houses", slug: "resort", desc: "Multi-acre outdoor cabanas, B&Bs & villas", icon: Building2 },
    { name: "Catering Businesses", slug: "catering", desc: "Event proposals, yield forecasting & menus", icon: Users },
  ];

  const coreSolutions = [
    {
      title: "QR Menu",
      href: "/qr-menu",
      desc: "Contactless, dynamic digital menus that diners browse instantly on smartphones without downloading any app.",
      icon: QrCode,
      tag: "Zero Printing Costs",
    },
    {
      title: "Digital Menu",
      href: "/digital-menu",
      desc: "Vibrant visual catalog with appetizing photography, nested beverage modifiers, and daypart scheduling.",
      icon: Layers,
      tag: "24% Higher Order Value",
    },
    {
      title: "QR Ordering",
      href: "/qr-ordering",
      desc: "Dine-in self-ordering from tables directly to kitchen display screens, cutting waitstaff lag and order errors.",
      icon: Smartphone,
      tag: "2.4x Table Turnover",
    },
    {
      title: "Business Management",
      href: "/management-software",
      desc: "Unified cloud operations: sub-3s POS billing, station KOT routing, recipe costing, and multi-branch analytics.",
      icon: Building2,
      tag: "Complete Cloud Control",
    },
    {
      title: "Local SEO",
      href: "/restaurant-local-seo",
      desc: "Dominate Google Maps Local 3-Pack searches for 'near me' queries and capture nearby footfall.",
      icon: Search,
      tag: "#1 Google Maps Rank",
    },
    {
      title: "Digital Marketing",
      href: "/restaurant-marketing",
      desc: "Ethical diner phone number capture and automated WhatsApp loyalty campaigns for birthdays and reorders.",
      icon: TrendingUp,
      tag: "40% Repeat Diners",
    },
    {
      title: "Customer Discovery",
      href: "/restaurants",
      desc: "Hyper-local indexing across CafeGrow's verified city directories covering Jaipur and 50+ Indian metros.",
      icon: Compass,
      tag: "50+ Cities Live",
    },
  ];

  const homepageFaqs = [
    {
      question: "What is CafeGrow and what businesses does it serve?",
      answer:
        "CafeGrow is an integrated digital growth, menu, ordering, discovery, and management platform developed by Growth Service Digital Solution Pvt Ltd. It serves the entire food and hospitality ecosystem — including restaurants, hotels, dhabas, cafes, cloud kitchens, bakeries, fast food QSRs, food trucks, dessert shops, resorts, and catering businesses.",
    },
    {
      question: "Is CafeGrow only for cafes?",
      answer:
        "No. CafeGrow must NOT be understood as a platform only for cafes. It supports the complete food, restaurant, and hospitality ecosystem across fine dining, highway dhabas, luxury palace hotels, institutional canteens, and virtual kitchens.",
    },
    {
      question: "How does CafeGrow eliminate the 25–30% food aggregator commission?",
      answer:
        "CafeGrow equips your business with its own direct online ordering web portal and table QR ordering system. When customers order directly, you retain 100% of order totals with 0% commission cuts, saving ₹35,000 to ₹75,000 monthly.",
    },
    {
      question: "Why is Jaipur the launch city for CafeGrow?",
      answer:
        "Jaipur is India's leading culinary and tourism hub, blending heritage haveli dining in the Pink City with high-energy modern cafes in C Scheme and highway dhabas on NH-48. CafeGrow launched in Jaipur to solve real-world operational challenges before expanding to Delhi, Mumbai, Pune, Bengaluru, and 50+ Indian cities.",
    },
    {
      question: "Does CafeGrow require proprietary hardware?",
      answer:
        "No. CafeGrow is 100% cloud-based and operates on any standard smartphone, Android tablet, iPad, laptop, or desktop computer with standard ESC/POS thermal printers.",
    },
    {
      question: "How does CafeGrow's Local SEO help food businesses rank on Google Maps?",
      answer:
        "CafeGrow optimizes your Google Business Profile (GBP), synchronizes consistent local citations, and triggers automated post-bill WhatsApp prompts that encourage satisfied diners to leave authentic 5-star Google reviews.",
    },
    {
      question: "How do dining guests access the QR menu?",
      answer:
        "Guests simply point their default phone camera at the table QR code. The digital menu opens in under a second in their mobile browser without downloading any mobile app or creating an account.",
    },
    {
      question: "Can multiple dining guests at the same table order together?",
      answer:
        "Yes! CafeGrow supports shared group table ordering. Multiple patrons at the same table can scan the table QR code, browse individual categories, add items to a shared digital cart, and submit orders directly to the kitchen without confusion.",
    },
    {
      question: "How does CafeGrow handle internet outages or spotty connectivity?",
      answer:
        "CafeGrow features local offline caching at the billing counter. Even if your internet connection temporarily drops, orders, bill generation, and kitchen ticket printing continue locally. Once internet connectivity restores, all sales data automatically syncs with the central cloud database.",
    },
    {
      question: "Can I manage multi-outlet branches and franchises from one centralized account?",
      answer:
        "Yes. CafeGrow provides enterprise-grade multi-location management. Multi-outlet owners can view real-time sales across branches, push centralized menu price adjustments, manage inventory transfers, and analyze branch-level profitability from a single unified master dashboard.",
    },
    {
      question: "How fast can our restaurant or food business get started?",
      answer:
        "Onboarding takes under 2 hours. Our dedicated setup specialists digitize your menu, configure modifiers and tax rates, and connect your existing tablets or thermal receipt printers. You can start accepting live QR orders and printing bills on the very same day.",
    },
  ];

  const featuredCities = cities.slice(0, 12);
  const featuredAreas = jaipurAreas.slice(0, 10);

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-20 pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white pt-16 pb-24 border-b border-[#3a2618]">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#c26d38]/20 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3a2618]/80 border border-[#5c3e27] text-xs font-semibold text-amber-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Powering Food & Hospitality Across Jaipur & 50+ Indian Cities</span>
          </div>

          {/* Main H1 - Exact Prompt Requirement */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
            Digital Growth, Menu & Ordering Platform for Restaurants, Hotels, Cafes & Food Businesses
          </h1>

          {/* Supporting Text - Exact Prompt Requirement */}
          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed">
            CafeGrow helps restaurants, hotels, cafes, dhabas, cloud kitchens and other food & hospitality businesses manage digital menus, QR ordering, online presence, customer discovery and business growth.
          </p>

          {/* Dual CTAs + Software CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-4 h-4" />
              <span>Get Your Business on CafeGrow</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA */}
            <Link
              href="/restaurants"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] hover:text-white transition"
            >
              <Compass className="w-4 h-4 text-[#e08e45]" />
              <span>Explore Businesses</span>
            </Link>

            {/* Software Direct CTA */}
            <a
              href={siteConfig.platformDomain}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-2xl text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>Start Using CafeGrow</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Value Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-[#1b120c]/80 border border-[#3a2618]">
              <div className="text-xl sm:text-2xl font-black text-[#e08e45]">0%</div>
              <div className="text-xs font-semibold text-white mt-0.5">Aggregator Commission</div>
              <div className="text-[11px] text-[#a8988e] mt-1">Keep 100% of order totals</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1b120c]/80 border border-[#3a2618]">
              <div className="text-xl sm:text-2xl font-black text-amber-400">2.4x</div>
              <div className="text-xs font-semibold text-white mt-0.5">Faster Table Turnover</div>
              <div className="text-[11px] text-[#a8988e] mt-1">Scan, order & pay from table</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1b120c]/80 border border-[#3a2618]">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">&lt; 3s</div>
              <div className="text-xs font-semibold text-white mt-0.5">Fast POS Billing</div>
              <div className="text-[11px] text-[#a8988e] mt-1">Dynamic UPI QR receipts</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1b120c]/80 border border-[#3a2618]">
              <div className="text-xl sm:text-2xl font-black text-[#f59e0b]">50+</div>
              <div className="text-xs font-semibold text-white mt-0.5">Indian Cities Live</div>
              <div className="text-[11px] text-[#a8988e] mt-1">Deep local SEO coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS CAFEGROW? (Direct Answer Block for AEO/GEO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ebdcd0] shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c26d38]">
            <Zap className="w-4 h-4" />
            <span>What is CafeGrow?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
            An Integrated Digital Operating System & Local Discovery Network
          </h2>
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e5d7cb] text-[#1b120c] space-y-3">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <strong>CafeGrow</strong> is a complete food & hospitality technology platform developed by <strong>Growth Service Digital Solution Pvt Ltd</strong>. It bridges the gap between on-premise dining operations (contactless QR menus, sub-3-second cloud POS, kitchen order ticketing, and tableside self-ordering) and external revenue growth (0% commission direct delivery, automated WhatsApp customer retention, and Google Maps local SEO dominance).
            </p>
            <p className="text-sm text-[#705e52] leading-relaxed">
              CafeGrow is deliberately engineered for the complete food service ecosystem — including independent restaurants, luxury hotel dining, highway dhabas, specialty cafes, bakeries, food courts, and cloud kitchens.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHO CAN USE CAFEGROW? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Tailored Solutions</div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
            Who Can Use CafeGrow?
          </h2>
          <p className="text-sm text-[#665449]">
            CafeGrow provides dedicated workflows tailored to the exact operational needs of every food and hospitality business format.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {whoCanUseSectors.map((sector) => {
            const IconComp = sector.icon;
            return (
              <Link
                key={sector.slug}
                href={`/${sector.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#c26d38] hover:shadow-md transition group block space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#faf7f2] border border-[#e5d7cb] flex items-center justify-center text-[#c26d38] group-hover:bg-[#c26d38] group-hover:text-white transition">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1b120c] group-hover:text-[#c26d38] transition flex items-center justify-between">
                  <span>{sector.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#a8988e] group-hover:text-[#c26d38] group-hover:translate-x-1 transition" />
                </h3>
                <p className="text-xs text-[#705e52] leading-relaxed line-clamp-2">{sector.desc}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center pt-6">
          <Link
            href="/for-businesses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c26d38] hover:text-[#9e5224] transition"
          >
            <span>Explore All 21 Supported Food & Hospitality Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">The Platform Engine</div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
            Core Digital Solutions
          </h2>
          <p className="text-sm text-[#665449]">
            Everything needed to digitize menus, speed up orders, eliminate commissions, and dominate local search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSolutions.map((sol) => {
            const IconComp = sol.icon;
            return (
              <Link
                key={sol.href}
                href={sol.href}
                className="p-6 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#c26d38] hover:shadow-md transition group block space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                    {sol.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1b120c] group-hover:text-[#c26d38] transition">
                  {sol.title}
                </h3>
                <p className="text-xs text-[#705e52] leading-relaxed">{sol.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. HOW CAFEGROW WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1b120c] text-white border border-[#3a2618]">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Simple Workflow</div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">How CafeGrow Works</h2>
            <p className="text-sm text-[#c5b8b0]">
              From onboarding to your first contactless order in under 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#241810] border border-[#3a2618] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#1b120c] font-black flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Onboard & Digitize Menu</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Upload your dishes, prices, photos, and floor table numbers. Configure combos, modifiers, and dietary badges with one click.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810] border border-[#3a2618] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#1b120c] font-black flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Deploy Table QR Stands</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Place custom branded QR stands on dining tables, hotel rooms, or charpais. Diners scan with phone cameras without installing apps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810] border border-[#3a2618] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#1b120c] font-black flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Fulfill & Grow Profits</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Orders fire to kitchen displays, thermal printers, and POS. Settle via dynamic UPI QR, capture numbers, and trigger automated Google reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 IN-DEPTH HOSPITALITY ARCHITECTURE & COMMISSION ANALYSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Industry Transformation & Strategic Economics
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
              The Evolution of Food & Hospitality Technology in India
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                The culinary industry in India is undergoing its most profound operational pivot in over thirty years. Across fine-dining bistros, bustling highway dhabas, cloud kitchens, and heritage palace hotels, the traditional model of relying on manual paper order tickets, outdated standalone desktop billing machines, and high-commission marketplace aggregators has reached a breaking point.
              </p>
              <p>
                Modern Indian consumers expect instantaneous digital interactions. When dining out or ordering food, guests want to view vivid high-definition dish photography, verify spice levels, check dietary preferences, and pay seamlessly via UPI without waiting 15 minutes for a waiter to bring a paper check. Food businesses that cling to fragmented manual processes suffer from lost table turns, ordering errors, and escalating staff overhead.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                At the same time, third-party food aggregators have created an unsustainable economic squeeze by extracting up to 30% commission on every order while withholding the diner&apos;s contact information. For most independent culinary entrepreneurs, a 30% commission represents their entire net profit margin, turning high-volume operations into financially fragile businesses.
              </p>
              <p>
                CafeGrow was built to restore profitability and control back to hospitality owners. By combining contactless table QR ordering, lightning-fast cloud POS billing, dynamic UPI checkout, and 0% commission direct online ordering into one unified operating system, CafeGrow empowers businesses across Jaipur and 50+ Indian cities to operate at peak efficiency and retain 100% of their earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY BUSINESSES USE CAFEGROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Real Results</div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
            Why Businesses Choose CafeGrow
          </h2>
          <p className="text-sm text-[#665449]">
            The measurable financial and operational advantages powering modern hospitality leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="text-3xl font-black text-[#c26d38]">₹45,000+</div>
            <h3 className="text-base font-bold text-[#1b120c]">Monthly Commission Saved</h3>
            <p className="text-xs text-[#705e52]">
              Keep 100% of order totals from direct web delivery and dine-in tables instead of paying 30% aggregator cuts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="text-3xl font-black text-amber-500">18 Mins</div>
            <h3 className="text-base font-bold text-[#1b120c]">Saved Per Dining Table</h3>
            <p className="text-xs text-[#705e52]">
              Diners browse and order immediately upon seating, enabling restaurants to serve 30% more parties during peak hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="text-3xl font-black text-emerald-600">3.4x</div>
            <h3 className="text-base font-bold text-[#1b120c]">Google Review Velocity</h3>
            <p className="text-xs text-[#705e52]">
              Automated post-settlement WhatsApp review prompts turn happy guests into authentic 5-star Google Maps ratings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="text-3xl font-black text-purple-600">100%</div>
            <h3 className="text-base font-bold text-[#1b120c]">Customer Data Ownership</h3>
            <p className="text-xs text-[#705e52]">
              Own your diner guest list and send automated birthday and anniversary offers without paying marketplace advertising fees.
            </p>
          </div>
        </div>
      </section>

      {/* 6.5 THE FUTURE OF FOOD TECH IN INDIA & AI CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b120c] to-[#2b1c12] rounded-3xl p-8 sm:p-12 text-white border border-[#3a2618] space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Future-Proof Engineering
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              The Future of Food Tech: Contactless Ordering, AI Upselling & Cloud Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#d8cbbf] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                The Indian food service industry is moving at lightspeed from reactive survival to proactive, technology-driven scaling. Over the next decade, businesses that rely on static paper menus, manual cash registers, and disconnected billing software will be unable to compete with tech-enabled culinary brands.
              </p>
              <p>
                CafeGrow integrates smart AI upselling algorithms directly into the digital guest ordering interface. By analyzing dining party size, time of day, and items currently in the diner&apos;s cart, our engine suggests high-margin beverage pairings, gourmet appetizers, and chef dessert specials, consistently boosting Average Order Value (AOV) by 18% to 24%.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                On the backend, CafeGrow provides real-time ingredient recipe costing and yield forecasting. When your kitchen confirms an order, the system decrements inventory at the raw material level—tracking dairy, meats, produce, and packaging in real time, alerting head chefs before critical stockouts occur.
              </p>
              <p>
                Built on a modern microservices cloud foundation, CafeGrow scales effortlessly from a single neighborhood street kiosk to an enterprise franchise operating across 100+ locations in Jaipur, Delhi NCR, Mumbai, and Bengaluru, guaranteeing 99.99% uptime during the biggest festival and holiday rushes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 COMPREHENSIVE PLATFORM CAPABILITIES BENCHMARK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Platform Comparison
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How CafeGrow Compares to Legacy Systems & Third-Party Portals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <h3 className="text-base font-bold text-[#1b120c]">Standalone Legacy POS</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Tied to bulky counter computers. Annual software maintenance fees, manual paper KOT slips, slow bill settlement, and zero native smartphone ordering for dining room guests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <h3 className="text-base font-bold text-[#1b120c]">Third-Party Food Aggregators</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Takes 25% to 30% commission on every order. Hides customer contact numbers, controls ranking visibility through paid advertising, and erodes restaurant profit margins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-300 space-y-3 shadow-md">
              <h3 className="text-base font-bold text-emerald-800">CafeGrow Operating System</h3>
              <p className="text-xs text-[#5c4d42] leading-relaxed">
                0% commission direct ordering. Contactless QR menus, sub-3s POS billing, dynamic UPI QR receipts, automated kitchen routing, WhatsApp retention, and Google Maps local 3-pack dominance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 ENTERPRISE MULTI-BRAND CLOUD KITCHEN & COMMISSARY ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Enterprise Scalability & Multi-Brand Technology
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Multi-Brand Virtual Kitchens & Central Commissary Governance
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54] max-w-3xl">
              Engineered to support hospitality groups operating single-location flagships, multi-brand ghost kitchens, and regional franchise chains across India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-800">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Unified Multi-Brand Operations</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Run 4 to 8 virtual food brands from a single kitchen real estate footprint. Manage distinct digital menus, pricing tiers, and brand identities through one consolidated master terminal, eliminating counter clutter and disparate tablet chaos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Central Commissary Supply Chain</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Standardize food quality and portion control across all company-owned and franchise branches. Track batch production yields, automate branch replenishment requisitions, and monitor raw ingredient transit with digital dispatch notes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Franchise Royalty & Multi-Unit RBAC</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Enforce centralized corporate menu recipes while granting local franchise owners visibility only over their store-level sales. Automated royalty calculation models, GSTR reconciliation, and multi-tier manager access protect intellectual property and brand integrity.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-4">
            <h4 className="text-sm font-bold text-[#1b120c]">How Modern Food Brands Scale Profitably with CafeGrow</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#5c4d42] leading-relaxed">
              <p>
                In an era of rising commercial rents and tight operating margins, scaling a hospitality brand requires unprecedented operational discipline. Traditional multi-outlet setups rely on fragmented spreadsheets and manual WhatsApp communication between kitchen managers, central commissaries, and finance teams. This lack of real-time visibility leads to inconsistent dish quality, untracked inventory shrinkage, and delayed financial reporting.
              </p>
              <p>
                CafeGrow bridges this operational divide by providing a unified cloud operating system. From raw material procurement at the central warehouse to table-side QR settlements at regional outlets, every transaction is synchronized in real time. Regional directors can benchmark outlet-level performance, run cross-city promotional campaigns, and expand brand footprints with complete operational confidence.
              </p>
              <p className="md:col-span-2 pt-2 border-t border-[#ebdcd0]/60">
                Furthermore, automated GST e-invoicing compliance, real-time input tax credit (ITC) reconciliation, and instant UPI soundbox audio confirmations eliminate counter settlement disputes. Hospitality operators gain total governance over employee shifts, hourly sales velocity, table turnaround speeds, and net contribution margins across all company-owned and franchised locations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CITIES & LOCAL DISCOVERY HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ebdcd0] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Geographic Reach</div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                Jaipur Launch & 50+ Cities Nationwide
              </h2>
            </div>
            <Link
              href="/cafes"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c26d38] hover:text-[#9e5224]"
            >
              <span>Explore All 54 Cities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Top Indian Cities */}
          <div className="flex flex-wrap gap-2.5">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/restaurants/${city.slug}`}
                className="px-3.5 py-2 rounded-xl bg-[#faf7f2] border border-[#e5d7cb] text-xs font-medium text-[#705e52] hover:text-black hover:border-black transition"
              >
                {city.name} {city.slug === "jaipur" && "⭐ (Launch Market)"}
              </Link>
            ))}
          </div>

          {/* Jaipur Localities */}
          <div className="pt-4 border-t border-[#ebdcd0]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#a8988e] mb-3">
              Deep Jaipur Local SEO Coverage:
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/restaurants/jaipur/${area.slug}`}
                  className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs text-[#705e52] hover:text-black transition"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 FOUR PILLARS OF MODERN HOSPITALITY OS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Architecture Breakdown</div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
              The 4 Core Pillars of the CafeGrow Operating System
            </h2>
            <p className="text-xs sm:text-sm text-[#665449]">
              How integrated cloud infrastructure connects guests, waitstaff, kitchen display systems, and marketing into one unified workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">1. Contactless QR Engine</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                App-free mobile browser menus rendering in under 800ms. Diners explore rich photos, modify items, and place table orders without waiting for waitstaff attention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">2. Zero Commission Direct Orders</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Branded direct delivery and takeaway web storefronts. Receive online orders directly on your POS with 0% platform cuts and full customer phone number ownership.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">3. Sub-3-Second Cloud POS</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Lightning-fast touchscreen billing on any Android tablet, iPad, or PC. Generates dynamic UPI payment QR codes on physical receipts with automatic split billing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">4. Local SEO Dominance</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Google Business Profile automation and post-bill WhatsApp review prompts that accelerate authentic 5-star ratings to win Google Maps Local 3-Pack rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Knowledge Base</div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1b120c]">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion faqs={homepageFaqs} />
      </section>

      {/* 9. DUAL BOTTOM CTAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Owner CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b120c] to-[#2e1d12] text-white border border-[#3a2618] space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#c26d38] flex items-center justify-center text-white">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">For Food & Hospitality Owners</h3>
            <p className="text-xs sm:text-sm text-[#d8cbbf] leading-relaxed">
              Equip your restaurant, hotel, dhaba, or cafe with contactless QR menus, high-speed POS billing, and local search dominance today.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.links.getStarted}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-lg hover:brightness-110 transition"
              >
                <span>Get Your Business on CafeGrow</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Customer Discovery CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#ebdcd0] text-[#1b120c] space-y-5 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">For Diners & Food Lovers</h3>
            <p className="text-xs sm:text-sm text-[#705e52] leading-relaxed">
              Discover verified restaurants, cafes, dhabas, bakeries, and food trucks across Jaipur and 50+ major Indian cities with direct menus.
            </p>
            <div className="pt-2">
              <Link
                href="/restaurants"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-[#1b120c] text-white hover:bg-[#2d1e14] transition"
              >
                <span>Explore Verified Businesses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
