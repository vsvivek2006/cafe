import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { BusinessCategoryData, businessCategories } from "@/data/businessCategories";
import { cities } from "@/data/cities";
import { jaipurAreas } from "@/data/jaipurAreas";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Store,
  ExternalLink,
  MapPin,
  HelpCircle,
  AlertTriangle,
  QrCode,
  Layers,
  Smartphone,
  BarChart3,
  Search,
  Users,
  Building2,
  Receipt,
  Clock,
  Coins,
  FileText,
  Workflow,
  CheckCircle2,
} from "lucide-react";

interface CategoryPageTemplateProps {
  category: BusinessCategoryData;
}

export default function CategoryPageTemplate({ category }: CategoryPageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Who Can Use", url: "/for-businesses" },
    { name: category.name, url: `/${category.slug}` },
  ];

  const topCities = cities.slice(0, 12);
  const topJaipurLocalities = jaipurAreas.slice(0, 8);

  // Extended Comprehensive FAQs for 2000+ words depth and rich schema
  const extendedFaqs = [
    ...category.faqs,
    {
      question: `How does CafeGrow eliminate third-party aggregator commissions for ${category.name.toLowerCase()}?`,
      answer: `CafeGrow provides each ${category.singularName.toLowerCase()} with its own branded direct online ordering portal and contactless table QR ordering system. Customers place orders directly through their smartphone browser without paying middleman markups. The business keeps 100% of the bill value with zero commission deductions, saving operators between ₹35,000 and ₹85,000 every month in commission expenses.`,
    },
    {
      question: `Does CafeGrow require proprietary hardware or expensive billing terminals?`,
      answer: `No. CafeGrow is a 100% cloud-native platform built to run seamlessly on devices you already own—including Android tablets, iPads, smartphones, laptops, and desktop computers. It connects wirelessly or via USB with standard 58mm and 80mm ESC/POS thermal receipt printers and kitchen display screens, completely eliminating expensive proprietary hardware lock-in.`,
    },
    {
      question: `How does the dynamic QR menu handle peak-hour rush and sold-out items?`,
      answer: `Managers can mark any dish, beverage, or modifier as '86'd' or sold out in real-time from the cloud dashboard on their phone. The digital QR menu updates instantly for all patrons across tables without needing paper reprinting or confusing manual waitstaff announcements. You can also schedule daypart menus for breakfast, lunch, and dinner automatically.`,
    },
    {
      question: `How does CafeGrow help ${category.name.toLowerCase()} rank #1 on Google Maps local search?`,
      answer: `CafeGrow synchronizes consistent NAP (Name, Address, Phone) citation data, optimizes Google Business Profile categories, and automates post-visit WhatsApp review invitations with direct 5-star Google review links. This automated review acceleration steadily elevates your local 3-pack ranking for high-intent queries like 'best ${category.singularName.toLowerCase()} near me'.`,
    },
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extendedFaqs.map((faq) => ({
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

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 border-y border-[#3a2618]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c26d38]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Growth & Operations Architecture for {category.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {category.h1}
          </h1>

          {/* Definition */}
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;{category.definition}&rdquo;
          </p>

          {/* Direct Answer Box (AEO 40-70 words) */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#2a1d13]/90 border border-[#4a3222] text-left shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Zap className="w-4 h-4" />
              <span>Direct Answer (AEO Summary)</span>
            </div>
            <p className="text-sm sm:text-base text-[#f0e6dd] leading-relaxed">
              {category.directAnswer}
            </p>
          </div>

          {/* Dual Funnel Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-4 h-4" />
              <span>Get Your {category.singularName} on CafeGrow</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] hover:text-white transition"
            >
              <span>Schedule Free Live Demo</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Target Audience: Who is this for? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1b120c] rounded-3xl border border-[#3a2618] p-8 sm:p-12 text-white">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e08e45]">Target Audience</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Who Uses CafeGrow for {category.name}?
            </h2>
            <p className="text-sm text-[#c5b8b0]">
              Engineered specifically for food & hospitality businesses of all formats, from independent neighborhood setups to large-scale multi-outlet operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {category.whoIsItFor.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#241810] border border-[#3a2618] flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#f0e6dd]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Evolution & Market Landscape (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Market Analysis & Transformation
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Modern Operating Landscape for {category.name} in India
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                The culinary and hospitality landscape in India has undergone a seismic transformation over the last five years. Diners no longer tolerate slow service, soiled laminated paper menus, or cumbersome billing processes. Whether visiting a high-energy casual dining venue, an artisanal bakery, or a highway food hub, contemporary patrons demand instant smartphone access to visual menus, clear dietary labeling, allergen notices, and seamless digital payment options.
              </p>
              <p>
                At the same time, operators of {category.name.toLowerCase()} are caught in a relentless squeeze between escalating commercial rents, surging raw material costs, high staff turnover, and predatory 25% to 30% aggregator commission deductions. Relying on outdated manual cash drawers, paper handwritten KOT pads, and unbranded third-party delivery aggregators is no longer sustainable for modern hospitality entrepreneurs aiming for healthy net margins.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                To thrive in today&apos;s hyper-competitive dining corridors, forward-thinking {category.singularName.toLowerCase()} owners are adopting integrated digital operating systems that combine front-of-house contactless ordering with lightning-fast cloud POS billing, automated kitchen order routing, dynamic UPI payment QR codes, and direct commission-free takeaway channels.
              </p>
              <p>
                CafeGrow bridges this critical technology gap. By replacing fragmented hardware and manual friction with an intuitive cloud-first operating system, CafeGrow empowers {category.name.toLowerCase()} across Jaipur and 50+ Indian cities to automate order workflows, cut dining turnaround times by up to 22 minutes per table, recapture customer ownership data, and permanently protect their hard-earned profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Common Problems Solved */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-500">Critical Pain Points</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Operational & Growth Challenges Faced by {category.name}
          </h2>
          <p className="text-sm text-[#665449]">
            Without modern digital infrastructure, food & hospitality businesses suffer from lost revenue, slow service, and high platform commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {category.commonProblems.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Operational Hurdle #{idx + 1}</span>
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">{p.problem}</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">{p.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Comprehensive Digital Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Complete Solution Suite</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            How CafeGrow Transforms {category.name} Operations
          </h2>
          <p className="text-sm text-[#665449]">
            From front-of-house table menus to kitchen order routing, billing, and Google Maps local SEO discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Contactless QR Menu</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.qrMenu}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Dynamic Digital Menu</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.digitalMenu}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Seamless Ordering</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.ordering}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Operations & Cloud POS</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.management}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">WhatsApp Marketing & Retention</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.marketing}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Local SEO & Google Maps</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">{category.digitalSolutions.localSeo}</p>
          </div>
        </div>
      </section>

      {/* 6. In-Depth Operational Comparison: Traditional vs CafeGrow (400+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Workflow Blueprint</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Operational Comparison: Traditional vs. CafeGrow Cloud Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-[#665449]">
              Examine how modern digital infrastructure eliminates manual bottlenecks at every stage of the customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Operational Workflow */}
            <div className="rounded-2xl bg-white border border-rose-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <Clock className="w-4 h-4 shrink-0" />
                <span>The Traditional / Legacy Way (Slow & High Cost)</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#5c4d42]">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                  <div>
                    <strong className="text-[#1b120c] block">Menu Updates & Printing Overhead:</strong>
                    Changes in prices or seasonal specials require expensive reprint cycles of paper menus, costing ₹8,000–₹15,000 every quarter.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                  <div>
                    <strong className="text-[#1b120c] block">Waitstaff Ordering Delays:</strong>
                    Guests wait 8–12 minutes for a waiter to take their order. Peak-hour rushes cause misheard orders, illegible handwriting on KOT slips, and kitchen confusion.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                  <div>
                    <strong className="text-[#1b120c] block">30% Aggregator Delivery Commissions:</strong>
                    Third-party food apps devour up to 30% of each delivery and takeaway bill, while withholding customer phone numbers and dining histories.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base leading-none">✕</span>
                  <div>
                    <strong className="text-[#1b120c] block">Slow Manual Checkouts:</strong>
                    Cashier bottlenecks during peak bill settlement waste 10 minutes per table, reducing overall dining room seat turnover.
                  </div>
                </li>
              </ul>
            </div>

            {/* The CafeGrow Digital Workflow */}
            <div className="rounded-2xl bg-white border border-emerald-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>The CafeGrow Operating System (Fast & Profitable)</span>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#5c4d42]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b120c] block">Instant Real-Time Cloud Updates:</strong>
                    Change pricing, mark items 86&apos;d, or launch new chef specials in 10 seconds from your phone with zero paper reprint costs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b120c] block">Instant Smartphone Browsing & Ordering:</strong>
                    Diners scan a tabletop QR standee to view high-resolution photography, customize modifiers, and dispatch orders directly to the kitchen in seconds.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b120c] block">0% Commission Direct Takeaway & Delivery:</strong>
                    Receive direct delivery and takeaway orders through your own branded web link. Keep 100% of order totals and own all customer relationship data.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1b120c] block">Sub-3-Second Dynamic UPI QR Billing:</strong>
                    Generate table bills with dynamic payment QR codes instantly. Diners pay via UPI or card directly from their seat, saving 18+ minutes per table.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Financial Architecture & Commission Elimination Math (400+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b120c] to-[#2b1c12] rounded-3xl p-8 sm:p-12 text-white border border-[#3a2618] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Financial Economics</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              The Real Math of Commission Elimination & Table Turnaround
            </h2>
            <p className="text-xs sm:text-sm text-[#d8cbbf]">
              How shifting 30% of your orders from aggregators to direct channels transforms your annual net profit margin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-amber-400">₹45,000+</div>
              <h3 className="text-base font-bold text-white">Monthly Commission Savings</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                By routing just 20 direct online orders a day through your 0% commission CafeGrow web menu instead of third-party delivery apps charging 28%, you retain an additional ₹45,000 to ₹65,000 pure profit each month.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-emerald-400">22 Mins</div>
              <h3 className="text-base font-bold text-white">Saved per Table Seating</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                Eliminating the waiter wait-time to deliver paper menus, take notes, enter KOTs, and bring paper bills accelerates table turns from 68 minutes down to 46 minutes, unlocking up to 35% higher seat capacity during peak hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#241810]/90 border border-[#4a3222] space-y-3">
              <div className="text-3xl font-black text-[#f59e0b]">24% Boost</div>
              <h3 className="text-base font-bold text-white">In Average Order Value (AOV)</h3>
              <p className="text-xs text-[#c5b8b0] leading-relaxed">
                High-definition appetizing food photography and intelligent beverage/addon upselling prompts on smartphone menus consistently drive a 18% to 24% increase in average ticket size compared to plain text paper menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Step-by-Step Implementation & SOP Roadmap (350+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">SOP Roadmap</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            The 3-Phase Implementation Blueprint for {category.name}
          </h2>
          <p className="text-sm text-[#665449]">
            Zero disruption to your ongoing operations. Complete setup and staff training in under 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#c26d38] text-white font-black flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Phase 1: Menu Digitize & Configuration</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Our culinary onboarding specialists upload your complete catalog, categories, pricing, variant modifiers (extra cheese, size choices, spice levels), and high-resolution food imagery into your secure cloud dashboard.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e7dc]">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dish allergen & vegan tagging</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Daypart breakfast/lunch scheduling</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#c26d38] text-white font-black flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Phase 2: Hardware Sync & Standees</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Connect your existing Android tablets, iPads, or PC billing terminals with standard thermal receipt printers. Deploy custom-branded acrylic tabletop QR standees linked uniquely to each dining table or hotel room.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e7dc]">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>KOT wireless thermal routing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>15-minute waitstaff onboarding</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#c26d38] text-white font-black flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="text-lg font-bold text-[#1b120c]">Phase 3: Launch Direct Orders & Local SEO</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Activate your direct online ordering link on your Instagram bio, WhatsApp catalog, and Google Business Profile. Begin collecting automated 5-star Google reviews after every successful dining session.
            </p>
            <ul className="text-xs text-[#5c4d42] space-y-1.5 pt-2 border-t border-[#f0e7dc]">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google 3-Pack rank acceleration</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated birthday & reorder CRM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Local SEO & Google Maps Discovery Dominance (300+ words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Local Search Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How CafeGrow Helps {category.name} Win Google Maps Local 3-Pack Searches
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Over 78% of local dining decisions start with a search query on a smartphone—such as &ldquo;best {category.singularName.toLowerCase()} near me&rdquo;, &ldquo;top rated {category.singularName.toLowerCase()} in Jaipur&rdquo;, or &ldquo;family dining spots nearby&rdquo;. If your establishment does not appear in Google Maps&apos; top 3 results (the coveted Local 3-Pack), you are forfeiting up to 60% of potential walk-in diners to nearby competitors.
              </p>
              <p>
                CafeGrow fixes this with a multi-layered local search strategy. First, we synchronize your exact business Name, Address, Phone (NAP), and opening hours across all major search directories. Second, our built-in QR digital menu is indexed by search crawlers, allowing Google to understand your exact dish catalog, specialties, and pricing.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Third, and most importantly, CafeGrow automates authentic reputation building. Following a bill settlement, our system sends a polite WhatsApp thank-you message with a 1-tap link to your official Google Business Profile. Satisfied diners effortlessly leave authentic 5-star ratings and food photos, rapidly increasing your review count and pushing your establishment to the top of local map searches without spending money on ads.
              </p>
              <p>
                Additionally, through CafeGrow&apos;s hyper-local discovery directory covering Jaipur and 50+ Indian metros, your business gains authoritative localized backlinks and verified entity signals that reinforce search authority across Google, Bing, and generative AI search assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9.5 Regulatory, FSSAI & GST Compliance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Legal & Financial Governance
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Regulatory Compliance, FSSAI Standards & Tax Audit Readiness for {category.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Operating a successful {category.singularName.toLowerCase()} in India requires strict adherence to food safety norms, taxation rules, and municipal licensing guidelines. Under Food Safety and Standards Authority of India (FSSAI) regulations, food establishments must display their 14-digit FSSAI license number prominently on all physical customer receipts, digital bills, and online ordering catalogs.
              </p>
              <p>
                CafeGrow integrates automated regulatory compliance directly into your point-of-sale workflow. Your valid FSSAI registration, GSTIN number, and legal business entity details are automatically printed on every thermal receipt and displayed prominently on your digital QR menus and web ordering pages, ensuring complete compliance during food safety inspections.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                From a taxation standpoint, CafeGrow simplifies GST compliance. Whether your business operates under the 5% composite restaurant scheme (without input tax credit) or standard GST with alcohol/banquet split billing, CafeGrow automatically calculates CGST, SGST, and service charges with zero arithmetic errors.
              </p>
              <p>
                At the end of each business day, store managers generate automated End-of-Day (EOD) Z-reports that reconcile physical cash collections, dynamic UPI transactions, card settlements, and digital ledger entries. Tax accountants receive clean GSTR-1 and GSTR-3B ready sales reports with one click, saving hours of manual bookkeeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Real-World Use Case */}
      {category.useCases.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 text-[#1b120c] space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/70 text-xs font-bold text-amber-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Case Study</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              {category.useCases[0].scenario}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-white border border-amber-200/80">
                <span className="font-bold text-amber-900 block mb-1">Solution Applied:</span>
                <span className="text-[#665449]">{category.useCases[0].solutionApplied}</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-amber-200/80">
                <span className="font-bold text-emerald-800 block mb-1">Business Result:</span>
                <span className="text-[#665449]">{category.useCases[0].result}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 11. Expanded Comprehensive FAQs Section (450+ words) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Got Questions?</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Comprehensive Operational FAQs for {category.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Clear, practical answers about software features, pricing, setup timelines, and hardware compatibility.
          </p>
        </div>
        <FaqAccordion faqs={extendedFaqs} />
      </section>

      {/* 12. Contextual Internal Link Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        {/* Products & Related Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0]">
            <h4 className="text-sm font-bold text-[#1b120c] mb-3">
              Relevant CafeGrow Solutions for {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.relevantProducts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="px-3 py-1.5 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs font-medium text-[#705e52] hover:text-[#c26d38] hover:border-[#c26d38] transition"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0]">
            <h4 className="text-sm font-bold text-[#1b120c] mb-3">
              Related Food & Hospitality Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.relatedCategories.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/${rc.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs font-medium text-[#705e52] hover:text-[#c26d38] hover:border-[#c26d38] transition"
                >
                  {rc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Top Cities */}
        <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0]">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#c26d38]" />
            <h4 className="text-sm font-bold text-[#1b120c]">
              Explore {category.name} Across Major Indian Cities
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${category.slug}s/${city.slug}`}
                className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs text-[#705e52] hover:text-black transition"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Jaipur Localities */}
        <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0]">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#c26d38]" />
            <h4 className="text-sm font-bold text-[#1b120c]">
              Jaipur Neighborhood Coverage for {category.name}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {topJaipurLocalities.map((area) => (
              <Link
                key={area.slug}
                href={`/${category.slug}s/jaipur/${area.slug}`}
                className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs text-[#705e52] hover:text-black transition"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Strong CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Digitize & Grow Your {category.singularName}?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Join forward-thinking food & hospitality entrepreneurs across Jaipur and 50+ Indian cities. Setup takes under 2 hours with zero upfront hardware costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-4 h-4" />
              <span>Get Your Business on CafeGrow</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Talk to Growth Expert on WhatsApp</span>
            </a>
          </div>
          <div className="text-xs text-[#a8988e] pt-2">
            Direct software application hosted at{" "}
            <a href={siteConfig.platformDomain} className="text-white underline font-medium">
              cafegrow.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
