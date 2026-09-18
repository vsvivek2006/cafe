import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cities } from "@/data/cities";
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
  Compass,
} from "lucide-react";

interface NationalDirectoryHubTemplateProps {
  sectorName: string;
  sectorSlug: string;
  singularSectorName: string;
  heroHeadline: string;
  heroSubheadline: string;
}

export default function NationalDirectoryHubTemplate({
  sectorName,
  sectorSlug,
  singularSectorName,
  heroHeadline,
  heroSubheadline,
}: NationalDirectoryHubTemplateProps) {
  const breadcrumbs = [
    { name: `All India ${sectorName}`, url: `/${sectorSlug}` },
  ];

  const nationalFaqs = [
    {
      question: `How does CafeGrow verify ${sectorName.toLowerCase()} across 54 Indian cities?`,
      answer: `Every establishment featured across our 54 city hubs undergoes rigorous verification with business owners, general managers, or authorized culinary directors. We confirm operational hours, physical street addresses, active telephone contacts, and digital menu offerings. CafeGrow maintains a strict zero-tolerance policy against auto-scraped, defunct, or fabricated business listings.`,
    },
    {
      question: `Can independent ${singularSectorName.toLowerCase()} owners in any Indian city join CafeGrow?`,
      answer: `Yes! CafeGrow is 100% cloud-based and accessible to culinary founders across all 54 cities. Whether you operate a single boutique outlet or an expanding multi-city regional chain, you can onboard your tables, configure KOT printers, and launch 0% commission direct ordering in under 24 hours.`,
    },
    {
      question: `How does CafeGrow help ${sectorName.toLowerCase()} combat high delivery marketplace commissions?`,
      answer: `Traditional food delivery marketplaces charge aggressive commissions of 25% to 30% per order while masking diner contact numbers. CafeGrow equips your brand with direct branded QR menus, social media ordering links, and automated WhatsApp re-order flows. You retain 100% of order revenue, pay 0% commission, and build an owned database of loyal neighborhood regulars.`,
    },
    {
      question: `What hardware is needed to manage a ${singularSectorName.toLowerCase()} on the CafeGrow platform?`,
      answer: `CafeGrow requires zero proprietary hardware or expensive multi-year equipment leases. The platform operates on standard Android tablets, iPads, Windows desktop PCs, and smartphones. It connects effortlessly over local Wi-Fi or Bluetooth to standard 58mm and 80mm thermal kitchen and billing receipt printers.`,
    },
    {
      question: `Does CafeGrow work during broadband internet outages in high-volume Indian markets?`,
      answer: `Yes. CafeGrow is engineered with offline-first caching. If local broadband drops during a peak dinner rush, your counter staff can continue punching orders, firing kitchen order tickets (KOTs), and settling cash or static UPI payments without interruption. All sales records sync seamlessly with central cloud ledgers the moment connectivity restores.`,
    },
    {
      question: `How does CafeGrow support statutory GST and FSSAI hygiene standards across Indian states?`,
      answer: `The platform automatically formats customer receipts with your mandatory 14-digit FSSAI license number, calculates appropriate 5% restaurant GST (or 18% for hotel establishments), and generates one-click GSTR-1 and GSTR-3B tax reports, streamlining statutory filing for accountants and business owners nationwide.`,
    },
  ];

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `All India ${sectorName} Directory - 54 Cities | CafeGrow`,
    description: heroSubheadline,
    url: `${siteConfig.discoveryDomain}/${sectorSlug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalEntity,
      logo: `${siteConfig.discoveryDomain}/logo.png`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: nationalFaqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
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
            <span>54 Indian Cities • Nationwide Hospitality Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            {heroSubheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <span>List Your {singularSectorName} Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Explore Platform Technology</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>54 Major Metros & Tier-2 Hubs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>0% Commission Direct Ordering</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Verified Merchant Directory</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Unified Cloud Management OS</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. NATIONAL MARKET LANDSCAPE & TIER-1 VS TIER-2 EXPANSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Pan-India Market Dynamics
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Rapid Evolution of India&apos;s {sectorName} Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                India&apos;s food service and dining landscape is undergoing an unprecedented structural transformation. While Tier-1 megacities like Delhi NCR, Mumbai, Bengaluru, and Hyderabad remain high-volume dining powerhouses, the most explosive culinary growth is now unfolding across vibrant Tier-2 and emerging economic hubs such as Jaipur, Pune, Chandigarh, Lucknow, Indore, Ahmedabad, and Kochi.
              </p>
              <p>
                Rising disposable incomes, widespread adoption of high-speed 5G mobile networks, and frictionless Unified Payments Interface (UPI) micropayments have permanently shifted consumer behavior. Diners across every Indian urban center now demand instantaneous digital menus, transparent nutritional labeling, swift contactless bill settlement, and dependable direct ordering channels.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                However, scaling a {singularSectorName.toLowerCase()} in India presents formidable operational challenges. Commercial property rentals in premier lifestyle avenues continue to climb, wholesale culinary ingredients face seasonal inflationary spikes, and third-party delivery marketplaces extract punitive 25% to 30% cuts on gross order value while withholding valuable diner contact information.
              </p>
              <p>
                To thrive in this ultra-competitive climate, forward-thinking operators are turning to CafeGrow. By unifying contactless table QR ordering, lightning-fast POS billing, automated kitchen order ticket (KOT) routing, and direct 0% commission takeaway delivery into a single cloud operating system, CafeGrow empowers {sectorName.toLowerCase()} across all 54 Indian cities to protect their profit margins and build enduring brand loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY BENCHMARK & ARCHITECTURAL PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Enterprise Food Tech</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Modern Tech Infrastructure Powering Indian {sectorName}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            How CafeGrow synchronizes front-of-house guest interactions with back-of-house culinary production across 54 cities nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Interactive Table QR Menus</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Guests scan durable table QR plaques with their native smartphone cameras. Ultra-fast menus load in under 800 milliseconds, displaying chef recommendations, spice indicators, and real-time out-of-stock item toggling.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-amber-900 border-t border-[#f0e4d8]">
              Accelerates table turnover by up to 35%
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Smart KDS Station Routing</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Eliminate missing paper tickets and chaotic kitchen shouting. Orders split automatically to respective preparation stations: beverages to baristas, appetizers to cold prep, and hot gravies to primary cooking lines.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-blue-900 border-t border-[#f0e4d8]">
              Zero lost tickets and live prep aging timers
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Gram-Level Recipe Tracking</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Every dish rung up automatically decrements raw ingredient inventories based on standardized chef recipes. Real-time low-stock SMS warnings alert kitchen supervisors before crucial perishables run out.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-emerald-900 border-t border-[#f0e4d8]">
              Lowers food cost variances to under 1.5%
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">GST & Multi-Outlet Analytics</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Automated shift cash float reconciliation, manager PIN overrides for voided tickets, and one-click GSTR-1 tax exports give business owners total financial visibility across single outlets or 50+ city locations.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-purple-900 border-t border-[#f0e4d8]">
              100% audit-proof compliance across India
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 0% COMMISSION REVENUE MATHEMATICS */}
      <section className="bg-[#f5f0ea] py-16 border-y border-[#e2d6c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Operational Mathematics of 0% Commission Direct Ordering
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54]">
              How food businesses nationwide reclaim lakhs of rupees annually by shifting orders to their direct CafeGrow portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8a7a70]">Marketplace Channel</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700">High Overhead</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">Third-Party Aggregators</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Aggregators deduct 25% to 30% from every completed delivery order. A {singularSectorName.toLowerCase()} doing ₹8,00,000 monthly delivery loses over ₹2,20,000 per month in pure platform fees and promotional deductions.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-red-800">
                <div className="flex items-center gap-2">✕ Customers belong to the marketplace</div>
                <div className="flex items-center gap-2">✕ Continuous bidding required for visibility</div>
                <div className="flex items-center gap-2">✕ Zero customer telephone data shared</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8a7a70]">Legacy Setup</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Fragmented</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">Counter Cash Registers</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Tied to single counter PCs with expensive annual software maintenance contracts. Staff must manually re-enter aggregator orders, leading to punch mistakes, billing delays, and unaccounted cash float leakages.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-amber-900">
                <div className="flex items-center gap-2">✕ No native mobile ordering for diners</div>
                <div className="flex items-center gap-2">✕ Counter halts if desktop PC reboots</div>
                <div className="flex items-center gap-2">✕ Zero automated re-engagement tools</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border-2 border-[#c26d38] p-6 space-y-4 shadow-md relative">
              <div className="absolute -top-3 right-6 bg-[#c26d38] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Max Profitability
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">CafeGrow Cloud OS</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">0% Commission</span>
              </div>
              <h3 className="text-lg font-bold text-[#1b120c]">Direct Branded Channel</h3>
              <p className="text-xs text-[#5c4d42] leading-relaxed">
                Keep 100% of order revenue. Diners order directly from branded QR menus, tableside links, and WhatsApp storefronts. Automatic customer database building empowers continuous retention marketing.
              </p>
              <div className="pt-3 border-t border-[#f0e4d8] space-y-2 text-xs text-emerald-800">
                <div className="flex items-center gap-2">✓ 0% commission on all direct orders</div>
                <div className="flex items-center gap-2">✓ 100% verified customer data ownership</div>
                <div className="flex items-center gap-2">✓ Instant settlement to merchant UPI/Bank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 54-CITY DIRECTORY HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Nationwide Directory</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Explore {sectorName} Across 54 Major Indian Cities
            </h2>
          </div>
          <div className="text-xs text-[#705e52]">
            Showing all 54 active city directories
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${sectorSlug}/${c.slug}`}
              className="p-3.5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#c26d38] hover:shadow-sm transition block group"
            >
              <div className="font-bold text-xs text-[#1b120c] group-hover:text-[#c26d38] transition">
                {c.name}
              </div>
              <div className="text-[11px] text-[#8a7a70]">{c.state}</div>
              <div className="mt-2 pt-2 border-t border-[#f4ede4] flex items-center justify-between text-[10px] text-[#c26d38] font-medium">
                <span>View {sectorName}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. FSSAI & REGULATORY STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Statutory Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              FSSAI Food Safety Standards & GST Governance for Indian {sectorName}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Compliance with statutory regulations is essential for long-term hospitality success in India. Under the Food Safety and Standards Authority of India (FSSAI) guidelines, all commercial food establishments must display their 14-digit FSSAI license registration on guest billing receipts and digital menus.
              </p>
              <p>
                CafeGrow automates this requirement out of the box. Your certified FSSAI registration number prints automatically on every thermal KOT receipt, cashier invoice, and digital dynamic UPI settlement screen, assuring patrons of your adherence to national hygiene protocols.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                On taxation, our billing engine natively supports standard 5% restaurant GST (2.5% CGST + 2.5% SGST) without input tax credit for standalone dining venues, alongside standard 18% GST for luxury hotel-based venues.
              </p>
              <p>
                Monthly GSTR-1 and GSTR-3B tax export summaries are compiled automatically, allowing your chartered accountant to reconcile sales ledgers in minutes while avoiding costly tax penalties or audit discrepancies across all Indian states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ZERO FAKE LISTINGS NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName="All 54 Indian Cities" />
      </section>

      {/* 8. COMPREHENSIVE FAQS ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">National FAQ Guide</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions about {sectorName} on CafeGrow
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common questions regarding city onboarding, zero-commission ordering, hardware setup, and data retention.
          </p>
        </div>
        <FaqAccordion faqs={nationalFaqs} />
      </section>

      {/* 9. MID-PAGE OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Your City"
          solutionHighlight={sectorName.toLowerCase()}
        />
      </div>

      {/* 10. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Digitize Your {singularSectorName} Across India?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Join premier dining venues across 54 Indian cities powering their tables, billing, and direct delivery with CafeGrow. Zero commission, hardware-agnostic, and live in under 24 hours.
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
              <span>Schedule Live Demo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
