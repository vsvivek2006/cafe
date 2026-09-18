import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { OwnerSolutionData, ownerSolutions } from "@/data/ownerSolutions";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Store,
  ExternalLink,
  MessageCircle,
  AlertCircle,
  Cpu,
  Layers,
  Smartphone,
  Building2,
  Clock,
  Workflow,
  CheckCircle2,
  Coins,
  ShieldAlert,
  Server,
  FileCheck,
} from "lucide-react";

interface SolutionPageTemplateProps {
  solution: OwnerSolutionData;
}

export default function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  const otherSolutions = Object.values(ownerSolutions)
    .filter((s) => s.slug !== solution.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Solutions", url: "/for-businesses" },
    { name: solution.title, url: `/${solution.slug}` },
  ];

  // Extended solution FAQs to achieve 2,000+ words depth and rich SERP schema
  const extendedSolutionFaqs = [
    ...solution.faqs,
    {
      question: `How fast can my food business go live with ${solution.title}?`,
      answer: `Most businesses go live within 2 hours. Our onboarding team uploads your existing menu, sets up modifiers and tax rules, and syncs your table layout. You can start generating QR codes and processing bills on the same day with zero disruption to active service.`,
    },
    {
      question: `Do I need to buy expensive proprietary hardware or tablets to use this?`,
      answer: `No. CafeGrow operates on standard web standards (HTML5/PWA/Cloud). It runs flawlessly on any regular Android phone, tablet, iPad, laptop, or desktop computer. You can connect it wirelessly or via USB to any standard ESC/POS 58mm or 80mm thermal receipt printer.`,
    },
    {
      question: `What happens if our restaurant internet connection temporarily drops?`,
      answer: `CafeGrow POS features offline-resilient local cache architecture. Orders and billing can continue locally at your cash counter, and all transaction data, KOT numbers, and inventory deductions automatically resynchronize with the cloud once internet connectivity is restored.`,
    },
    {
      question: `Can I manage multiple outlets, branches, or franchises from a single account?`,
      answer: `Yes. CafeGrow features a unified multi-location dashboard. Multi-outlet owners can view consolidated revenues, compare store-level performance, push centralized menu price adjustments, and manage role-based staff permissions across Jaipur and nationwide branches simultaneously.`,
    },
  ];

  // FAQ Schema JSON-LD for rich Google snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extendedSolutionFaqs.map((faq) => ({
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c26d38]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{solution.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {solution.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed">
            {solution.heroSubhead}
          </p>

          {/* Direct Answer Box (AEO Summary) */}
          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#2a1d13]/90 border border-[#4a3222] text-left shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Zap className="w-4 h-4" />
              <span>AEO Overview: Core Technology & Impact</span>
            </div>
            <p className="text-sm text-[#f0e6dd] leading-relaxed">
              {solution.faqs[0]?.answer || solution.heroSubhead}
            </p>
          </div>

          {/* ROI Metric Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/80 border border-emerald-600/40 text-xs font-semibold text-emerald-300">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Estimated ROI Impact: {solution.roiImpact}</span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <span>{solution.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-white hover:border-[#c26d38] transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Book a Free Live Demo</span>
            </a>
          </div>

          <div className="text-xs text-[#8a7a70] pt-2">
            No expensive hardware required • 100% cloud-based • Direct software at{" "}
            <a href={siteConfig.platformDomain} className="text-white underline font-semibold">
              cafegrow.in
            </a>
          </div>
        </div>
      </section>

      {/* 2. Industry Context: Why Legacy Tools Fail (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Industry Architectural Analysis
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Why Traditional Food Tech & Legacy Billing Systems Fail Modern Operators
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                For over two decades, food and hospitality businesses across India were forced to rely on clumsy, on-premise Windows desktop billing terminals or fragmented handheld point-of-sale machines. These legacy systems suffer from fatal structural flaws: they tether your operations to a single physical counter, require expensive annual maintenance contracts (AMCs), crash during high-volume festival or weekend rushes, and offer zero native mobile integration for diners.
              </p>
              <p>
                Furthermore, traditional billing setups operate in complete silos. A waiter writes an order on a paper notepad, walks across a packed dining room to key it into the counter computer, which then prints a paper KOT in a loud, steamy kitchen. If a customer wants to customize their beverage, request an extra topping, or split the bill, this outdated workflow breaks down entirely, resulting in miscommunicated orders, frustrated guests, and wasted food.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Meanwhile, third-party delivery aggregators capitalized on this technological paralysis by inserting themselves between restaurants and their diners. While aggregators provided consumer ordering apps, they extracted exorbitant 25% to 30% commission cuts on every ticket and systematically blocked restaurant owners from accessing customer contact details or building direct loyalty.
              </p>
              <p>
                CafeGrow was engineered to dismantle this broken status quo. By unifying contactless customer smartphone ordering, sub-3-second cloud POS billing, automatic kitchen routing, and zero-commission direct takeaway into one cloud-native ecosystem, CafeGrow restores operational autonomy and financial sovereignty to food entrepreneurs across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Built for Immediate Operational & Revenue Impact
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Measurable results that boost your daily cash flow and delight your patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solution.coreBenefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[#e2d6c7] p-6 shadow-sm hover:shadow-md transition space-y-3"
            >
              {benefit.metric && (
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                  {benefit.metric}
                </div>
              )}
              <h3 className="text-lg font-bold text-[#1b120c]">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-[#6e5f54] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Deep System Architecture & Sync Blueprint (400+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Technical Blueprint</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              System Architecture & Real-Time Sync Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-[#665449]">
              How CafeGrow synchronizes diners, waitstaff, kitchen display screens, and cash counters with sub-second latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">1. Front-of-House QR Engine</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Diners scan table QR codes using standard mobile browsers without downloading apps. Menu assets, real-time pricing, dish descriptions, and high-resolution visuals render instantly from edge CDN servers in under 800ms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">2. Real-Time Order Routing</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Orders dispatch over secure WebSocket connections directly to designated station printers or kitchen display systems (KDS). Beverage tickets route to the bar while food items route simultaneously to hot kitchen lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">3. Cloud POS & Settlement</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                The central cloud ledger updates table occupancy, aggregates items, calculates taxes/GST, and generates dynamic UPI payment QR codes on physical receipts or diner phone screens with automatic payment reconciliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 KITCHEN DISPLAY (KDS) & MULTI-STATION ROUTING BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Kitchen Operations Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Multi-Station Kitchen Display System (KDS) & Expo Dispatch Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                In high-volume culinary operations, the kitchen is where dining experiences are won or lost. Traditional paper Kitchen Order Tickets (KOTs) are notoriously vulnerable to physical kitchen hazards: thermal paper tickets get splashed with hot gravy, bleached by radiant stove heat, or blown onto dirty kitchen floors by exhaust fans.
              </p>
              <p>
                CafeGrow replaces flimsy paper tickets with a synchronized, real-time Kitchen Display System (KDS). The moment an order is confirmed—whether by a diner scanning a table QR code or a cashier entering a takeout order—the ticket displays instantaneously on kitchen screens categorized by preparation station.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Bar and beverage items fire directly to the barista and mocktail station; tandoor and grill items route to the live fire station; and curries, breads, and desserts route to the main hot line. Each ticket features color-coded aging alerts: green for newly fired tickets (under 5 minutes), amber as tickets approach 12 minutes, and flashing red if an order exceeds 18 minutes.
              </p>
              <p>
                At the chef&apos;s expediter (expo) counter, completed line items are marked ready with a single touch or bump bar press. The expo screen aggregates the entire table ticket before dispatching runners, eliminating lukewarm dishes and ensuring every guest at the table is served hot food simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Problems Solved vs Solutions Matrix */}
      <section className="bg-[#f5f0ea] py-16 border-y border-[#e2d6c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Operational Challenges We Eliminate
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54]">
              Stop letting kitchen mix-ups, staff shortages, and third-party fees drain your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-[#faf7f2] border border-red-200/80 p-6 space-y-4">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Before CafeGrow: The Daily Headaches</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5c4d42]">
                {solution.problemsSolved.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-emerald-200/80 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>With CafeGrow: The Modern Solution</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5c4d42]">
                {solution.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Financial Impact & Bottom-Line Analysis (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b120c] to-[#2b1c12] rounded-3xl p-8 sm:p-12 text-white border border-[#3a2618] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Financial Impact</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Hard ROI: Driving Profit Margins, Speed & Order Values
            </h2>
            <p className="text-xs sm:text-sm text-[#d8cbbf]">
              CafeGrow pays for itself within the first 7 days of operation through direct cost reduction and revenue acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-emerald-400">0% Commission</div>
              <h3 className="text-base font-bold text-white">Direct Online Ordering</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Route neighborhood takeout and delivery orders through your own direct ordering web link. Every ₹1,00,000 of sales processed directly saves ₹28,000 to ₹32,000 in aggregator platform commission cuts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-amber-400">2.4x Speed</div>
              <h3 className="text-base font-bold text-white">Table Turnover Acceleration</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                By allowing diners to browse menus, order seconds, and settle bills directly from their phone, total seating cycle time decreases by up to 20 minutes, permitting more guest rotations during peak dinner rushes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-[#f59e0b]">40% Repeat</div>
              <h3 className="text-base font-bold text-white">Automated WhatsApp Retention</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Ethically collect customer contact numbers during digital checkout and trigger automated birthday promotions, loyalty rewards, and weekend invitations that consistently turn first-time guests into habitual regulars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 MULTI-OUTLET FRANCHISE ARCHITECTURE & CENTRALIZED CONTROL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Enterprise Scale & Expansion
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Multi-Outlet Franchise Architecture & Centralized Menu Management
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                As food and hospitality businesses grow from a single successful location into multi-outlet chains, regional franchises, or cloud kitchen hubs, operational complexity multiplies exponentially. Brand owners struggle to maintain consistent pricing, monitor food portioning, prevent inventory slippage, and analyze store-level performance across dispersed physical locations.
              </p>
              <p>
                CafeGrow solves the scaling dilemma with an enterprise-grade multi-location architecture. From a single master cloud dashboard, headquarters executives can manage all brand locations across Jaipur, Delhi, Mumbai, and nationwide markets. You can update menu items, adjust prices, or launch festival promotions centrally and push changes across 50+ stores simultaneously in seconds.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Crucially, CafeGrow allows granular store-level autonomy where needed. Outlets can adjust local tax rates, accommodate regional supplier pricing differences, or 86 sold-out items locally without impacting other chain locations. Central kitchen commissary transfers, stock requisitions, and store-to-store inventory dispatches are tracked with complete digital paperwork.
              </p>
              <p>
                Real-time chain analytics aggregate daily gross sales, net margins, top-selling dishes, labor cost percentages, and customer feedback across all branches. Brand founders can compare outlet profitability side-by-side on their smartphone, identify operational bottlenecks immediately, and make data-backed expansion decisions with complete clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hardware-Free Deployment & Staff Onboarding Playbook (300+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Implementation Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Zero-Hardware Deployment: How Setup Takes Under 2 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                One of the most persistent myths in restaurant technology is that adopting modern POS and digital menu infrastructure requires spending ₹60,000 to ₹1,50,000 on proprietary billing terminals, proprietary card readers, and expensive server hardware. CafeGrow completely dispels this myth.
              </p>
              <p>
                Our platform is engineered as a progressive cloud application that operates smoothly on standard commercial consumer hardware—such as any everyday Android smartphone, tablet, iPad, laptop, or desktop computer. If you already have a phone and a thermal receipt printer, you already own everything needed to run CafeGrow.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Staff onboarding is equally straightforward. Designed with high-contrast touch targets, visual dish cards, and multi-language support (English and Hindi), your waitstaff, cashiers, and kitchen team will master the interface in fewer than 15 minutes of hands-on practice.
              </p>
              <p>
                Our remote deployment specialists handle menu digitization, tax calculation formulas, and table layout mapping on your behalf, ensuring you launch smoothly without losing a single hour of active restaurant service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 SOPS, SHIFT HANDOVERS & CASH FLOAT GOVERNANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Standard Operating Procedures (SOPs)
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Shift Handover Protocols & Cash Float Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Financial leakages in food service operations almost always occur during shift changes, unrecorded cash discounts, or untracked bill voiding. CafeGrow enforces airtight financial governance by introducing mandatory digital cash float opening and closing procedures for every cashier shift.
              </p>
              <p>
                When a cashier begins their shift, they enter their starting cash drawer float into the POS. Throughout service, every cash receipt, dynamic UPI transaction, and card payment is automatically audited. If a cashier needs to void an item or cancel a KOT, the action requires an authorized manager PIN code, creating a tamper-proof digital audit log.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                At the conclusion of each shift, the cashier performs an automated blind cash count. The system compares the physical cash counted against system-recorded cash sales, instantly flagging any discrepancy for management review.
              </p>
              <p>
                Combined with automated GSTR-1 and GSTR-3B tax export reports, your business maintains immaculate, audit-proof financial records that eliminate internal friction, prevent inventory shrinkage, and give owners complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.6 CLOUD SECURITY, RBAC & ENCRYPTION ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Enterprise Data Security
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Bank-Grade Cloud Encryption & Role-Based Access Control (RBAC)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                In food service businesses, staff turnover is high. Giving every floor worker unrestricted access to sensitive billing data, customer phone numbers, or revenue metrics creates substantial security risks.
              </p>
              <p>
                CafeGrow implements strict Role-Based Access Control (RBAC). Floor waitstaff only see table ordering functions; kitchen expeditors only see preparation tickets; cashiers only handle billing and settlement; while full revenue summaries, raw material margins, and employee performance metrics are restricted exclusively to business owners and authorized general managers.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                All data transmission between patron smartphones, counter POS terminals, and our central cloud servers is secured using TLS 1.3 encryption. Dynamic UPI payment tokens and customer phone numbers are stored in compliance with Indian digital privacy guidelines.
              </p>
              <p>
                With 99.99% uptime guarantees, automatic geo-redundant database backups, and instant manager override alerts sent directly to your phone, CafeGrow provides the rock-solid security infrastructure required to scale your business safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Your Neighborhood"
          solutionHighlight={solution.title.toLowerCase()}
        />
      </div>

      {/* Related Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#1b120c]">
            Explore Related Growth Solutions
          </h3>
          <Link href="/for-businesses" className="text-xs font-bold text-[#c26d38] hover:underline">
            All Business Solutions →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherSolutions.map((other) => (
            <Link
              key={other.slug}
              href={`/${other.slug}`}
              className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#8a5d3b] bg-[#f4eee5] px-2 py-0.5 rounded">
                  {other.badge}
                </span>
                <h4 className="text-base font-bold text-[#1b120c] group-hover:text-[#c26d38] transition">
                  {other.title}
                </h4>
                <p className="text-xs text-[#6e5f54] line-clamp-2">{other.heroSubhead}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0e7dc] text-xs font-semibold text-[#c26d38] flex items-center justify-between">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Extended FAQs Section (450+ words) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          faqs={extendedSolutionFaqs}
          title={`Frequently Asked Questions about ${solution.title}`}
        />
      </div>
    </div>
  );
}
