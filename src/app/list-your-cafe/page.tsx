import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import {
  Store,
  CheckCircle2,
  Sparkles,
  Phone,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageCircle,
  Smartphone,
  Workflow,
  Sliders,
  BarChart3,
  Building2,
  Clock,
  Percent,
} from "lucide-react";

export const metadata: Metadata = {
  title: "List Your Cafe on CafeGrow — Free Registration & Local Discovery",
  description:
    "Get your cafe listed on India's premier cafe discovery and growth network. Free starter listing, digital QR menu setup, and local SEO across Jaipur and 50+ cities.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/list-your-cafe`,
  },
  openGraph: {
    title: "List Your Cafe on CafeGrow — Free Registration & Local Discovery",
    description:
      "Join hundreds of verified cafes across India. Boost footfall, receive direct orders, and get your digital QR menu live.",
    url: `${siteConfig.discoveryDomain}/list-your-cafe`,
  },
};

export default function ListYourCafePage() {
  const breadcrumbs = [
    { name: "Solutions", url: "/for-cafes" },
    { name: "List Your Cafe", url: "/list-your-cafe" },
  ];

  const faqs = [
    {
      question: "Is there any upfront cost to list my cafe on CafeGrow?",
      answer:
        "No. Basic directory registration on CafeGrow is completely free. We create your verified venue profile, upload your digital menu catalog, and index your business in city and neighborhood discovery directories without any setup fees.",
    },
    {
      question: "How long does the verification and onboarding process take?",
      answer:
        "Our onboarding team directly authenticates your business details within 24 hours. Your venue page and digital menu go live immediately following phone or WhatsApp confirmation.",
    },
    {
      question: "Can I activate contactless QR ordering and cloud POS software?",
      answer:
        "Yes! Once listed, you can activate CafeGrow's contactless table QR ordering, lightning-fast POS billing, kitchen display system (KDS), and automated inventory tracking with zero hardware lock-in.",
    },
    {
      question: "Does CafeGrow charge commission on food orders?",
      answer:
        "No! CafeGrow operates on a strict 0% commission direct ordering model. All order proceeds settle directly to your merchant UPI or bank account with zero platform clawbacks.",
    },
    {
      question: "Can multi-outlet cafe chains and regional franchises register?",
      answer:
        "Yes. CafeGrow features enterprise multi-unit management. You can register multiple branches, standardize master menus, manage branch permissions, and track consolidated sales from a single dashboard.",
    },
    {
      question: "What information is required to register my food business?",
      answer:
        "We require your business name, primary category, complete street address, phone number, operating hours, active FSSAI registration number, and menu items with pricing.",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 sm:py-20 border-y border-[#3a2618]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Store className="w-3.5 h-3.5 text-amber-400" />
            <span>Merchant Network • Free Verified Registration</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            List Your Business on CafeGrow
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            Join India&apos;s verified hospitality and cafe discovery network. Get discovered by local diners in your neighborhood, deploy contactless table QR ordering, and launch direct 0% commission takeaway in under 24 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <span>Start Free Registration</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.phone}?text=Hello%20CafeGrow%2C%20I%20want%20to%20list%20my%20cafe%20on%20your%20platform.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant Onboarding on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free Listing Setup</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>0% Commission on Direct Orders</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Merchant Badge</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Live in Under 24 Hours</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE 4 CONCRETE ADVANTAGES OF LISTING ON CAFEGROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Merchant Advantages</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Why Modern Food Venues Partner with CafeGrow
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            More than a directory: a complete digital operating and customer retention engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">1. 0% Commission</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Stop surrendering 25% to 30% of your delivery and takeout revenue to aggregator portals. Keep 100% of order revenue deposited directly to your bank.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">2. Table QR Menus</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Diners scan elegant QR plaques to browse high-resolution visual menus, allergen guides, and chef specials in under 800ms without installing mobile apps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">3. Verified Merchant Status</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Stand out in Google local searches with verified business credentials, accurate operational hours, genuine menu pricing, and certified FSSAI license displays.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">4. Direct Guest Ownership</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Build your own private customer database with verified mobile numbers. Activate regular neighborhood diners on demand with automated WhatsApp promotions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP ONBOARDING BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Simple 3-Step Process</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              How Your Venue Goes Live in Under 24 Hours
            </h2>
            <p className="text-xs sm:text-sm text-[#705e52]">
              Our streamlined onboarding process requires zero technical background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Submit Your Details</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Provide your basic business details, street address, operating hours, and a copy of your menu via our online portal or directly to our onboarding team on WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Direct Authentication</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Our verification team reviews your submission, confirms your active operational status, and builds your custom digital QR menu catalog with zero errors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#c26d38] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">Go Live & Receive Orders</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Your dedicated profile is published across our city and neighborhood discovery guides. Receive print-ready table QR codes and start taking direct orders immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINANCIAL ROI BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Unit Economics</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Financial Impact of Direct Zero-Commission Takeaway
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Consider an independent cafe or casual eatery processing ₹5,00,000 in monthly takeaway and direct delivery orders. Under standard third-party delivery marketplace agreements, the establishment pays approximately 28% in platform commissions, payment fees, and listing ads—surrendering ₹1,40,000 every single month.
              </p>
              <p>
                Over an operating year, this totals ₹16,80,000 diverted from the founder&apos;s pockets. By deploying CafeGrow&apos;s direct ordering QR codes on packaging inserts, tables, and social media channels, establishments systematically convert marketplace diners into direct regulars.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Converting just 40% of delivery volume to direct CafeGrow ordering retains over ₹56,000 per month in net operational cash flow—capital that can fund staff incentives, quality ingredient sourcing, or store aesthetic improvements.
              </p>
              <p>
                Moreover, you maintain complete ownership of customer contact details, unlocking the power to send automated WhatsApp re-engagement offers that bring diners back repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZERO FAKE LISTINGS GUARANTEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName="CafeGrow Merchant Network" />
      </section>

      {/* 6. FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Merchant FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions About Listing on CafeGrow
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common questions regarding verification, onboarding timelines, and ordering software.
          </p>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Put Your Food Business on the Map?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Register your business today. Join verified culinary venues across 54 Indian cities powering their tables, billing, and direct delivery with CafeGrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>Start Free Registration Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.phone}?text=Hello%20CafeGrow%2C%20I%20want%20to%20list%20my%20cafe.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
