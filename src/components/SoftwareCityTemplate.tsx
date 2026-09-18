import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { CityData } from "@/data/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import {
  Building2,
  CheckCircle,
  TrendingUp,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Coffee,
  QrCode,
  Layers,
  Smartphone,
  CreditCard,
  Percent,
  Clock,
  Printer,
  Sliders,
  DollarSign,
  HelpCircle,
  ChevronRight,
  AlertCircle,
  BarChart3,
  Server,
  Workflow,
  Cpu,
  Store,
} from "lucide-react";

interface SoftwareCityTemplateProps {
  softwareTitle: string;
  softwareSlug: string;
  categoryName: string;
  city: CityData;
}

export default function SoftwareCityTemplate({
  softwareTitle,
  softwareSlug,
  categoryName,
  city,
}: SoftwareCityTemplateProps) {
  const breadcrumbs = [
    { name: "Cities", url: "/cafes" },
    { name: city.name, url: `/cafes/${city.slug}` },
    { name: `${softwareTitle} in ${city.name}`, url: `/${softwareSlug}/${city.slug}` },
  ];

  const faqs = [
    {
      question: `What makes ${softwareTitle} ideal for food and beverage operators in ${city.name}?`,
      answer: `${softwareTitle} by CafeGrow is engineered specifically for modern dining workflows in ${city.name}. It delivers sub-3 second touch POS billing, multi-printer kitchen order ticket (KOT) routing that separates barista drink tickets from hot kitchen line orders, integrated table QR ordering, and real-time remote smartphone reports for busy owners on the move.`,
    },
    {
      question: `Can multi-outlet chains and franchises in ${city.name} manage all branches from a single dashboard?`,
      answer: `Yes. CafeGrow features a comprehensive multi-unit cloud architecture. Operators in ${city.name} can monitor consolidated sales, execute central commissary ingredient transfers, enforce standardized corporate menu recipes, and manage branch-level staff permissions with enterprise role-based access control (RBAC).`,
    },
    {
      question: `Does the inventory module track ingredients down to the gram for specialty coffee and high-cost perishables?`,
      answer: `Absolutely. Every time an order is rung up or placed via table QR code, our automated recipe-costing engine deducts the exact grams of coffee beans, milliliters of milk, portions of cheese, and packaging materials directly from your live inventory ledger in ${city.name}, preventing internal leakage and food cost inflation.`,
    },
    {
      question: `What hardware is required to operate CafeGrow software in ${city.name}?`,
      answer: `CafeGrow is 100% hardware-agnostic. It runs seamlessly on standard Android tablets, iPads, Windows desktop touch terminals, smartphones, and connects effortlessly via Bluetooth, Wi-Fi, or USB to standard 58mm and 80mm thermal receipt and kitchen printers commonly used in ${city.name}.`,
    },
    {
      question: `How does the software handle internet outages or spotty Wi-Fi in ${city.name}?`,
      answer: `Our platform is built with an offline-first resilient architecture. If your commercial broadband drops during peak dinner rush in ${city.name}, your staff can continue generating KOTs, punching bills, and accepting cash or static UPI payments without interruption. All transaction data automatically synchronizes with cloud servers the second connectivity resumes.`,
    },
    {
      question: `How does CafeGrow assist with local GST e-invoicing and FSSAI compliance in ${city.state}?`,
      answer: `CafeGrow automates mandatory compliance requirements for ${city.name} operators. The system prints valid FSSAI license numbers on all physical customer receipts, separates 5% restaurant GST (CGST/SGST), and provides one-click GSTR-1 and GSTR-3B tax summary exports for seamless accounting.`,
    },
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `CafeGrow ${softwareTitle} - ${city.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android, Windows, macOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Direct zero-commission food business management and ordering platform",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 sm:py-20 border-y border-[#3a2618]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Next-Gen Food Tech Platform • {city.name}, {city.state}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {softwareTitle} in {city.name}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            Empower your culinary establishment in {city.name} with lightning-fast cloud POS billing, contactless table QR ordering, smart kitchen display routing, and gram-accurate raw material inventory tracking designed for ambitious hospitality operators.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <span>Get Started Free in {city.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Schedule 15-Min Live Demo</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>0% Commission on Orders</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Works on Any Tablet, Phone or PC</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Offline Billing Resilient</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp & UPI Soundbox</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. LOCAL MARKET CONTEXT & DIGITAL TRANSFORMATION IN CITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Local Market Dynamics & Hospitality Economics
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Culinary Tech Shift Reshaping {city.name}&apos;s Food Sector
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                The food service and dining landscape across {city.name}, {city.state} is experiencing a profound generational transition. Consumer expectations have elevated rapidly: diners no longer tolerate waving down busy floor staff to request printed paper menus, waiting ten minutes for bill calculations, or dealing with split-check confusion at the cashier counter.
              </p>
              <p>
                Simultaneously, food business owners in {city.name} face mounting commercial overheads. Prime real estate leasing rates in central commercial districts, fluctuating culinary raw material wholesale prices, and escalating third-party delivery marketplace commissions (regularly reaching 25% to 30% per order) have squeezed net operating margins down to single digits for unoptimized operators.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                To build a profitable, resilient culinary business in {city.name}, establishments are replacing disconnected legacy software with CafeGrow&apos;s integrated cloud operating system. By combining high-speed digital touch POS billing, dynamic UPI QR payments, automated kitchen display station routing, and direct 0% commission takeaway ordering into a single unified platform, operators reclaim full control over their unit economics.
              </p>
              <p>
                Whether you manage a boutique specialty coffee house, a high-turnover casual dining bistro, a cloud kitchen hub, or a luxury multi-outlet restaurant chain in {city.name}, CafeGrow provides the rock-solid technological infrastructure needed to maximize table turnover, eliminate food wastage, and build a lasting, loyal customer following.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE ARCHITECTURAL PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Platform Architecture</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            The 4 Operational Pillars of {softwareTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Engineered to coordinate front-of-house hospitality, bar counters, culinary lines, and financial ledgers into one harmonious workflow in {city.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">1. Table QR & Mobile POS</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Patrons scan table QR codes to view high-resolution visual menus, allergen tags, and chef specials in under 800 milliseconds without installing apps. Floor staff can simultaneously ring up tableside tickets on handheld Android phones.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e4d8]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Sub-3s touch billing speed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Dynamic UPI payment QR</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">2. Multi-Station KDS Routing</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Eliminate paper ticket confusion. Fired orders split automatically across designated preparation stations: beverage tickets dispatch to the barista or bar, cold apps to pantry, and hot entrees to main culinary ranges.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e4d8]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Color-coded order aging timers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Expo screen ticket consolidation</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">3. Gram-Level Recipe Costing</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Every sold espresso, pastry, or signature dish automatically deducts raw ingredient portions from your live inventory ledger. Automated low-buffer alerts warn chefs before vital ingredients deplete during dinner service.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e4d8]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Real-time recipe yield tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Purchase order auto-generation</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">4. Financial Governance & GST</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Mandatory blind cash counts and digital shift handover floats prevent register pilferage. One-click tax summaries calculate 5% restaurant GST (CGST/SGST) and produce audit-proof GSTR-1 export sheets.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e4d8]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Manager PIN void overrides</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Remote smartphone live metrics</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL BENCHMARK MATRIX */}
      <section className="bg-[#f5f0ea] py-16 border-y border-[#e2d6c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How CafeGrow Outperforms Alternative Tech in {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54]">
              A direct comparison between legacy countertop registers, marketplace aggregators, and CafeGrow&apos;s unified cloud OS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8a7a70]">Legacy Hardware</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700">Outdated</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">Desktop POS Terminals</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Tied to bulky counter computers. Annual software maintenance fees, manual paper KOT slips, slow bill settlement, and zero native smartphone ordering for dining room guests.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-red-800">
                <div className="flex items-center gap-2">✕ Expensive proprietary hardware</div>
                <div className="flex items-center gap-2">✕ Service halts if computer crashes</div>
                <div className="flex items-center gap-2">✕ Zero customer retention data</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8a7a70]">Marketplaces</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">High Commission</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">Food Delivery Portals</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Takes 25% to 30% commission on every single order. Masks customer contact phone numbers, controls your ranking visibility through paid bids, and erodes restaurant profit margins.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-amber-900">
                <div className="flex items-center gap-2">✕ 25% - 30% revenue cut on sales</div>
                <div className="flex items-center gap-2">✕ No access to guest database</div>
                <div className="flex items-center gap-2">✕ Competes directly with your brand</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border-2 border-[#c26d38] p-6 space-y-4 shadow-md relative">
              <div className="absolute -top-3 right-6 bg-[#c26d38] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Recommended
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Integrated Cloud OS</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">0% Commission</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">CafeGrow Platform</h3>
              <p className="text-xs text-[#5c4d42] leading-relaxed">
                Complete direct ordering ownership. Runs on any tablet or smartphone. Sub-3s POS billing, contactless table QR menus, multi-station KDS routing, and automated WhatsApp guest retention.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-emerald-800">
                <div className="flex items-center gap-2">✓ 0% commission on all direct orders</div>
                <div className="flex items-center gap-2">✓ 100% ownership of customer data</div>
                <div className="flex items-center gap-2">✓ Works offline without internet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-PHASE ONBOARDING ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Implementation Blueprint</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How {city.name} Establishments Go Live in 3 Structured Steps
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54] max-w-3xl">
              Our streamlined onboarding architecture ensures your front-of-house staff, baristas, and kitchen line master the system in hours without interrupting active service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Digital Menu Architecture</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Upload your menu catalog, high-resolution dish imagery, category groupings, pricing modifiers (size, milk alternatives, spice levels), and raw ingredient consumption recipes into our intuitive cloud back-office.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Hardware Mapping & QR Display</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Pair your existing thermal receipt printers, bar station displays, and cashier tablets over local Wi-Fi or Bluetooth. Position branded table QR stands on dining tables, counter displays, and outdoor curbside pickup bays in {city.name}.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Live Service & Revenue Growth</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Launch live service. Watch order errors drop to zero as guest QR tickets route automatically to kitchen stations, tables turn 30% faster, and diners settle bills seamlessly via dynamic UPI QR receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINANCIAL ROI & COMMISSION SAVINGS MATH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Financial Optimization</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Math of 0% Commission Direct Ordering in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Consider a typical mid-sized cafe or restaurant in {city.name} generating ₹6,00,000 in monthly delivery and takeout volume through marketplace aggregators. At an average aggregator commission rate of 28% (including platform fees, payment gateway cuts, and mandatory advertisement deductions), the establishment surrenders approximately ₹1,68,000 every month simply for order processing.
              </p>
              <p>
                Over the course of an operating year, this equates to a staggering ₹20,16,000 diverted away from the business owner&apos;s bottom line—capital that could otherwise fund store renovations, staff salary incentives, or opening a second outlet in {city.name}.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                By deploying CafeGrow&apos;s direct ordering QR codes on packaging flyers, social media bios, and storefront pickup banners, establishments in {city.name} systematically convert marketplace diners into direct regulars. Even shifting just 35% of order volume to CafeGrow saves the establishment over ₹58,000 per month in net commission expenses.
              </p>
              <p>
                Most importantly, the business retains complete ownership of customer contact numbers, dining histories, and email addresses, unlocking the ability to run automated WhatsApp re-engagement campaigns that drive sustained, predictable revenue month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MULTI-OUTLET FRANCHISE & CENTRAL COMMISSARY ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Multi-Unit Scalability
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Central Commissary Supply Chain & Multi-Branch Governance in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                As culinary brands in {city.name} expand from a single flagship location into multiple neighborhood outlets or regional franchise units across {city.state}, operational complexity escalates exponentially. Without centralized software, head chefs cannot maintain consistent dish flavor profiles, and general managers struggle to reconcile branch-level inventory requisitions.
              </p>
              <p>
                CafeGrow features native central commissary kitchen management. Regional food brands can centralize raw ingredient batch prep—such as master curry bases, bakery doughs, specialty spice blends, and marinated meats—at a central kitchen facility in {city.name}.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Satellite branches submit automated digital store replenishment indents directly through the POS. The central warehouse reviews stock levels, dispatches batch shipments with digital transfer notes, and tracks transit yields in real time.
              </p>
              <p>
                Consolidated master reporting grants executive teams complete oversight of outlet-by-outlet sales, hourly staff productivity benchmarks, and franchise royalty calculations, empowering food brands in {city.name} to scale seamlessly with institutional-grade discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FSSAI & LOCAL REGULATORY COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Regulatory Integrity
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              FSSAI Hygiene Standards & GST Tax Compliance in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Operating a compliant food business in {city.name}, {city.state} requires strict adherence to statutory hygiene guidelines established by the Food Safety and Standards Authority of India (FSSAI), alongside timely submission of state municipal health trade licenses and fire safety clearance certificates.
              </p>
              <p>
                CafeGrow automatically embeds your certified 14-digit FSSAI license registration number onto every printed customer receipt and digital QR invoice, assuring guests of your commitment to food safety and passing municipal audits with zero friction.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                On the fiscal side, our billing engine natively supports the 5% composition restaurant GST scheme (2.5% CGST + 2.5% SGST) without input tax credit for standalone eateries, as well as the standard 18% GST rate for hotel-based restaurants.
              </p>
              <p>
                At the close of every month, your accounts team can export comprehensive GSTR-1, GSTR-3B, and B2B tax reports in CSV format with a single click, eliminating manual bookkeeping errors and ensuring complete peace of mind during commercial tax filings in {city.state}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ZERO FAKE LISTINGS NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName={city.name} />
      </section>

      {/* 10. COMPREHENSIVE LOCAL FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Software FAQ Guide</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions about {softwareTitle} in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common setup, hardware, offline reliability, and pricing queries for {city.name} food businesses.
          </p>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* 11. MID-PAGE OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName={city.name}
          solutionHighlight={softwareTitle.toLowerCase()}
        />
      </div>

      {/* 12. CROSS-DIRECTORY CITY NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#1b120c]">
            Explore Hospitality Hubs Across India
          </h3>
          <Link href="/cafes" className="text-xs font-bold text-[#c26d38] hover:underline">
            All 54 Cities →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {["delhi", "mumbai", "bangalore", "jaipur", "pune", "hyderabad", "ahmedabad", "kolkata", "chennai", "chandigarh", "lucknow", "goa"].map((cSlug) => (
            <Link
              key={cSlug}
              href={`/${softwareSlug}/${cSlug}`}
              className="p-3 rounded-xl bg-white border border-[#ebdcd0] hover:border-[#c26d38] text-center transition block group"
            >
              <div className="font-bold text-xs capitalize text-[#1b120c] group-hover:text-[#c26d38] transition">
                {cSlug.replace("-", " ")}
              </div>
              <div className="text-[10px] text-[#8a7a70]">{softwareTitle}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 13. BOTTOM CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Upgrade Your Operations with {softwareTitle} in {city.name}?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Join premier dining establishments in {city.name} powering their tables, billing, and direct delivery with CafeGrow. Zero commission, hardware-agnostic, and live in under 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>Get Started with CafeGrow</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Schedule Live Demo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
