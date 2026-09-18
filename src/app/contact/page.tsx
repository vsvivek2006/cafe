import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Store,
  Building2,
  Workflow,
  Headphones,
  Calendar,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact CafeGrow — Support, Demo & Business Onboarding",
  description:
    "Get in touch with the CafeGrow team. Call +91 62073 00553 or email cafegrow@growthservice.in for restaurant, hotel, dhaba, and cafe onboarding.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/contact`,
  },
  openGraph: {
    title: "Contact CafeGrow | Growth Service Digital Solution Pvt Ltd",
    description:
      "Direct contact channels for CafeGrow, a food & hospitality platform by Growth Service Digital Solution Pvt Ltd.",
    url: `${siteConfig.discoveryDomain}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ name: "Contact", url: "/contact" }];

  const contactFaqs = [
    {
      question: "How quickly can my food establishment be onboarded on CafeGrow?",
      answer: `Our dedicated merchant onboarding team completes standard menu digitization, tax calculation formula configuration, and table QR code generation in under 24 hours. For multi-outlet chains, we provide dedicated enterprise onboarding managers who handle end-to-end rollout.`,
    },
    {
      question: "What technical assistance is available during active restaurant service?",
      answer: `CafeGrow offers priority technical support via telephone and live WhatsApp direct channels between 8:00 AM and 11:30 PM IST, 7 days a week, covering hardware pairing, printer network configurations, and bill settlement queries.`,
    },
    {
      question: "Can I schedule a live remote screen demonstration before deciding?",
      answer: `Yes! You can request a live 15-minute screen share demo with our solutions engineering team by emailing cafegrow@growthservice.in or messaging us on WhatsApp (+91 62073 00553). We will demonstrate tableside QR menus, POS billing, and KDS routing in real time.`,
    },
    {
      question: "Does CafeGrow support custom hardware procurement or testing?",
      answer: `While CafeGrow is hardware-agnostic and works with any existing thermal printer or tablet, our technical lab actively tests and certifies 58mm and 80mm ESC/POS thermal printers, barcode scanners, and cash drawers. We can advise your team on the most cost-effective hardware configurations for your budget.`,
    },
    {
      question: "What is the corporate legal entity behind CafeGrow?",
      answer: `CafeGrow is proudly conceived, engineered, and operated by Growth Service Digital Solution Pvt Ltd, a registered Indian private limited technology company headquartered in Jaipur, Rajasthan.`,
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 sm:py-20 border-y border-[#3a2618]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
            <Headphones className="w-3.5 h-3.5 text-amber-400" />
            <span>Dedicated Hospitality Support & Merchant Ingestion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Contact CafeGrow & Our Growth Specialists
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-2xl mx-auto leading-relaxed">
            Have questions about modernizing your restaurant, hotel, dhaba, or cafe with contactless QR menus, sub-3s POS billing, or local SEO? Our team is standing by to help.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Call Us Directly</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Speak with a solutions specialist regarding merchant onboarding or technical inquiries.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block text-sm font-bold text-[#c26d38] hover:underline"
            >
              {siteConfig.phoneFormatted}
            </a>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#c26d38]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">Email Support</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Send us your menu catalog, corporate partnership proposals, or billing inquiries.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-sm font-bold text-[#c26d38] hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">WhatsApp Priority Chat</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Instant response for active hospitality founders and live service assistance.
            </p>
            <a
              href={`https://wa.me/${siteConfig.phone}?text=Hello%20CafeGrow%2C%20I%20want%20to%20learn%20more%20about%20your%20hospitality%20platform.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-emerald-700 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE HEADQUARTERS & SERVICE SLA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Corporate Headquarters</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Growth Service Digital Solution Pvt Ltd
            </h2>
            <p className="text-xs sm:text-sm text-[#705e52]">
              Corporate registration, governance, and physical operational center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1b120c]">Launch & Operational Hub:</div>
                  <p className="text-xs text-[#705e52]">Jaipur, Rajasthan, India (Serving 54+ cities nationwide)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1b120c]">Operational Support Hours:</div>
                  <p className="text-xs text-[#705e52]">Monday – Sunday: 8:00 AM – 11:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#c26d38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#1b120c]">Corporate Parent Company:</div>
                  <p className="text-xs text-[#705e52]">Growth Service Digital Solution Pvt Ltd</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0]">
              <h3 className="font-bold text-[#1b120c] text-sm">Our Merchant Onboarding Guarantee</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                We understand that closing your doors during dining hours to set up new software is out of the question. Our rapid remote deployment architecture allows full catalog digitization, printer network integration, and staff training to occur concurrently with regular service.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero service downtime guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED INQUIRIES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Support FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Support & Onboarding Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Clear answers regarding response times, demo scheduling, and hardware compatibility.
          </p>
        </div>
        <FaqAccordion faqs={contactFaqs} />
      </section>

      {/* 5. OWNER CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Your Restaurant or Cafe"
          solutionHighlight="smart QR menus, rapid POS billing & zero-commission delivery"
        />
      </div>
    </div>
  );
}
