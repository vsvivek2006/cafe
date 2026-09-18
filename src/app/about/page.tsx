import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import {
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Utensils,
  CheckCircle2,
  ExternalLink,
  Store,
  Compass,
  Layers,
  Smartphone,
  Workflow,
  Sliders,
  BarChart3,
  Percent,
  Clock,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About CafeGrow — Product by Growth Service Digital Solution Pvt Ltd",
  description:
    "Learn about CafeGrow, the digital growth, menu, ordering, and management platform for the entire food & hospitality industry across India. A product by Growth Service Digital Solution Pvt Ltd.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/about`,
  },
  openGraph: {
    title: "About CafeGrow | Growth Service Digital Solution Pvt Ltd",
    description:
      "The mission, architecture, and nationwide expansion of CafeGrow: powering restaurants, hotels, dhabas, cafes, and food businesses across Jaipur and 50+ Indian cities.",
    url: `${siteConfig.discoveryDomain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ name: "About CafeGrow", url: "/about" }];

  const aboutFaqs = [
    {
      question: "What is CafeGrow and what company is behind it?",
      answer: `CafeGrow is a state-of-the-art digital growth, ordering, menu, and management operating system built specifically for the food and hospitality industry across India. It is developed, operated, and maintained by Growth Service Digital Solution Pvt Ltd, a technology company dedicated to modernizing Indian retail and hospitality operations.`,
    },
    {
      question: "Is CafeGrow designed solely for cafes?",
      answer: `No. While our brand name celebrates the cultural warmth and convivial spirit of cafe culture, CafeGrow is engineered to support the entire food and hospitality spectrum: fine dining restaurants, casual bistros, dhabas, luxury hotels and resorts, bakeries, cloud kitchens, food trucks, and multi-unit franchise chains.`,
    },
    {
      question: "What is CafeGrow's philosophy regarding third-party delivery marketplace commissions?",
      answer: `CafeGrow champions complete economic independence for food business founders. Traditional food marketplaces extract between 25% and 30% from every order while concealing diner phone numbers. CafeGrow provides a 0% commission direct ordering platform where business owners retain 100% of order revenue and own their guest relationships.`,
    },
    {
      question: "In which cities does CafeGrow currently operate?",
      answer: `CafeGrow launched its flagship operations in Jaipur, Rajasthan, and has expanded its hyper-local discovery directory and cloud operating software across 54 major Indian metropolitan and Tier-2 culinary hubs, including Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Chandigarh, Lucknow, and Indore.`,
    },
    {
      question: "What hardware is required to run CafeGrow in an active restaurant or cafe?",
      answer: `CafeGrow is completely hardware-agnostic. It runs seamlessly in web browsers on standard Android tablets, iPads, Windows desktop computers, and smartphones, pairing effortlessly with standard thermal kitchen and receipt printers over Wi-Fi, Bluetooth, or USB.`,
    },
    {
      question: "How does CafeGrow assist with statutory tax and food safety compliance?",
      answer: `The platform natively prints mandatory 14-digit FSSAI license numbers on all physical and digital guest receipts, calculates appropriate 5% restaurant GST (or 18% for hotel properties), and provides one-click GSTR-1 and GSTR-3B tax export summaries for chartered accountants.`,
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
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Corporate Identity • Growth Service Digital Solution Pvt Ltd</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            About CafeGrow: Empowering Indian Hospitality
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            CafeGrow is the dedicated digital operating system, contactless menu engine, zero-commission ordering platform, and hyper-local discovery directory engineered by <strong>Growth Service Digital Solution Pvt Ltd</strong> to empower food and hospitality businesses across India.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <span>Explore Platform Technology</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Contact Executive Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FOUNDING ETHOS & PURPOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Founding Ethos & Industry Purpose
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Reclaiming Economic Sovereignty for Food Business Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                The culinary industry in India is one of the nation&apos;s most vital economic engines, employing millions of skilled culinary artisans, service professionals, and supply chain workers. Yet behind the vibrant dining rooms and mouth-watering menus lies a harsh financial reality: soaring commercial rents, rising ingredient costs, and aggressive third-party delivery marketplace fees that extract between 25% and 30% from gross revenues.
              </p>
              <p>
                Even more damaging than the commissions is the loss of customer ownership. Third-party portals mask customer contact numbers, arbitrate search ranking visibility through forced ad spend, and reduce proud independent establishments to interchangeable fulfillment kitchens.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <strong>Growth Service Digital Solution Pvt Ltd</strong> conceived CafeGrow to reverse this power imbalance. Our founding mission is to equip culinary founders with enterprise-grade cloud software that costs a fraction of legacy POS systems, charges 0% commission on direct orders, and returns complete ownership of guest databases directly to the business.
              </p>
              <p>
                By combining sub-3-second POS billing, dynamic tableside QR ordering, real-time kitchen display routing, and automated WhatsApp guest retention into one unified platform, CafeGrow empowers hospitality operators to protect their profit margins, accelerate table turnover, and build enduring direct customer loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Technical Foundations</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            The 4 Operational Pillars of the CafeGrow Platform
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Engineered from the ground up to solve real-world front-of-house and back-of-house friction in high-volume Indian dining environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">1. Direct QR Ordering</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Contactless digital menus render in under 800 milliseconds directly in mobile browsers without requiring patrons to download apps. Diners order at their own pace, customized with modifiers and allergen tags.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">2. Smart KDS Dispatch</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Fired tickets dispatch over secure WebSockets to designated station screens: baristas receive coffee orders, grills receive sizzlers, and expeditor screens consolidate whole-table orders for hot delivery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">3. Gram-Level Stock Control</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Every sold item decrements raw materials down to the gram based on master chef recipes. Automated low-buffer SMS notifications prevent mid-shift ingredient emergencies and stop food cost leakages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">4. Fiscal & GST Governance</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Blind cash counts, shift handover float reconciliations, and one-click GSTR-1 and GSTR-3B tax export reports ensure complete statutory transparency and peace of mind for business accountants.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTORS SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Ecosystem Scope
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Supporting the Complete Hospitality Spectrum
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54] max-w-3xl">
              While our name reflects the vibrant culture of cafes, CafeGrow is architected to power every facet of India&apos;s culinary landscape:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Restaurants", desc: "Fine dining, casual, rooftop & family restaurants" },
              { name: "Hotels & Stays", desc: "In-room QR dining, banquet halls & boutique resorts" },
              { name: "Dhabas", desc: "Highway eateries, rapid cash/UPI billing & family halts" },
              { name: "Cafes & Roasters", desc: "Specialty coffee houses, bistros & work-friendly hubs" },
              { name: "Bakeries", desc: "Custom cake advance pre-orders & fresh bake POS" },
              { name: "Cloud Kitchens", desc: "Multi-brand virtual storefronts & direct delivery" },
              { name: "Fast Food (QSR)", desc: "Quick-service burger counters, roll joints & kiosks" },
              { name: "Food Trucks", desc: "Mobile pop-up ordering & live GPS location updates" },
            ].map((sector) => (
              <div key={sector.name} className="p-5 rounded-2xl bg-white border border-[#ebdcd0] space-y-1.5 shadow-sm">
                <h3 className="text-sm font-bold text-[#1b120c]">{sector.name}</h3>
                <p className="text-xs text-[#705e52] leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORPORATE ATTRIBUTION & PARENTAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Corporate Attribution & Legal Information
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              About Growth Service Digital Solution Pvt Ltd
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                <strong>Growth Service Digital Solution Pvt Ltd</strong> is a registered Indian technology private limited enterprise dedicated to developing modern software infrastructure for Indian retail, service, and hospitality businesses.
              </p>
              <p>
                Headquartered in Jaipur, Rajasthan, our engineering and product design teams work in close partnership with active culinary operators, general managers, and culinary directors to build software that stands up to the rigors of high-pressure commercial service.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Our platform operates under strict adherence to the Indian Information Technology Act 2000 and the Digital Personal Data Protection (DPDP) Act 2023. We maintain bank-grade TLS 1.3 encryption across all network transactions, geo-redundant database backups, and strict 99.99% system uptime service level agreements (SLAs).
              </p>
              <p>
                For official inquiries, enterprise licensing partnerships, or corporate communications, contact our executive office via email at <code>cafegrow@growthservice.in</code> or by telephone at +91 62073 00553.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Corporate FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions About CafeGrow
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Official answers regarding company governance, business model, and platform reach.
          </p>
        </div>
        <FaqAccordion faqs={aboutFaqs} />
      </section>

      {/* 7. OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Your Business"
          solutionHighlight="the complete CafeGrow operating system"
        />
      </div>
    </div>
  );
}
