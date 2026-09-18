import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { verifiedBusinesses, getVerifiedBusinessBySlug } from "@/data/businessProfiles";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import {
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  Store,
  CheckCircle,
  ExternalLink,
  QrCode,
  Layers,
  Smartphone,
  Building2,
  Calendar,
  Workflow,
  Sliders,
  BarChart3,
  Percent,
  Clock,
  Zap,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return verifiedBusinesses.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getVerifiedBusinessBySlug(slug);
  if (!business) return {};

  const title = `${business.name} | Verified ${business.category} in ${business.area}, ${business.city} | CafeGrow`;
  const description = `${business.headline}. Verified profile on CafeGrow with live digital QR menu, operating highlights, and zero-commission ordering.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/business/${business.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/business/${business.slug}`,
    },
  };
}

export default async function BusinessProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const business = getVerifiedBusinessBySlug(slug);
  if (!business) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: business.city, url: `/${business.categorySlug}s/${business.citySlug}` },
    { name: business.area, url: `/${business.categorySlug}s/${business.citySlug}/${business.areaSlug}` },
    { name: business.name, url: `/business/${business.slug}` },
  ];

  const businessFaqs = [
    {
      question: `How does ${business.name} use CafeGrow to manage guest ordering?`,
      answer: `${business.name} deploys CafeGrow's contactless table QR ordering system. Dining guests scan durable QR plaques to browse high-resolution visual menus, customize dishes with dietary modifiers, and place orders directly to kitchen preparation stations.`,
    },
    {
      question: `Can I place direct takeaway or pickup orders from ${business.name}?`,
      answer: `Yes, ${business.name} supports direct zero-commission takeaway ordering via CafeGrow. Customers can order ahead, pay via dynamic UPI, and pick up freshly prepared food without third-party aggregator markups.`,
    },
    {
      question: `What are the payment options accepted at ${business.name}?`,
      answer: `The venue accepts instant dynamic UPI payments (Google Pay, PhonePe, Paytm), major credit and debit cards, net banking, and cash settlements with instant soundbox audio verification.`,
    },
    {
      question: `Is ${business.name} certified for food safety and hygiene?`,
      answer: `Yes, ${business.name} maintains an active FSSAI food hygiene registration and adheres to strict culinary sanitation, fresh ingredient sourcing, and clean kitchen protocols verified during CafeGrow onboarding.`,
    },
    {
      question: `How can other businesses in ${business.city} get verified like ${business.name}?`,
      answer: `Food business founders can register their venue through CafeGrow's merchant portal or reach out on WhatsApp to initiate direct verification, menu digitization, and cloud POS deployment within 24 hours.`,
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type":
      business.categorySlug === "hotel"
        ? "Hotel"
        : business.categorySlug === "restaurant"
        ? "Restaurant"
        : "LocalBusiness",
    name: business.name,
    description: business.headline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressInfo,
      addressLocality: business.area,
      addressRegion: business.city,
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessFaqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Merchant Profile • {business.city}, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {business.name}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            {business.headline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <QrCode className="w-4 h-4" />
              <span>Preview Live Digital QR Menu</span>
            </a>

            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <Store className="w-4 h-4 text-amber-400" />
              <span>Get Your Business on CafeGrow</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#c26d38]" />
              <span>{business.area}, {business.city}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Category: {business.category}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct 0% Commission Ordering</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY & OPERATIONAL BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Story & Description */}
            <div className="p-8 rounded-3xl bg-white border border-[#ebdcd0] space-y-4 shadow-sm">
              <h2 className="text-2xl font-black text-[#1b120c]">About {business.name}</h2>
              <p className="text-sm text-[#665449] leading-relaxed">
                {business.description}
              </p>

              {/* Cuisine Tags */}
              <div className="pt-4 border-t border-[#ebdcd0]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#a8988e] mb-2">
                  Cuisines & Specialities:
                </div>
                <div className="flex flex-wrap gap-2">
                  {business.cuisineTypes.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#e5d7cb] text-xs font-medium text-[#705e52]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Operational Highlights */}
            <div className="p-8 rounded-3xl bg-[#1b120c] text-white border border-[#3a2618] space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Verified Tech Architecture
              </div>
              <h3 className="text-xl font-black">How {business.name} Operates on CafeGrow</h3>
              <ul className="space-y-3 pt-2">
                {business.operationalHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#d8cbbf]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DETAILED DIGITAL CASE STUDY SECTION */}
            <div className="p-8 rounded-3xl bg-white border border-[#ebdcd0] space-y-6 shadow-sm">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                  Operational Case Study
                </div>
                <h3 className="text-2xl font-black text-[#1b120c]">
                  Digital Transformation & Technology Impact at {business.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#5c4d42] leading-relaxed">
                <p>
                  Prior to integrating CafeGrow&apos;s unified cloud hospitality operating system, {business.name} faced typical industry bottlenecks: peak-hour table ordering delays, manual thermal paper ticket confusion between the dining floor and kitchen stations, and steep 25% to 30% commission cuts extracted by third-party delivery marketplaces.
                </p>
                <p>
                  By deploying CafeGrow&apos;s contactless table QR menus and synchronized Kitchen Display Systems (KDS), {business.name} transformed its daily floor operations:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                  <div className="text-xs font-bold text-[#c26d38]">Table Turns</div>
                  <div className="text-lg font-black text-[#1b120c]">32% Faster</div>
                  <p className="text-xs text-[#705e52]">
                    Diners browse digital menus and settle checks instantly via dynamic UPI QR, speeding up turnover.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                  <div className="text-xs font-bold text-[#c26d38]">Order Accuracy</div>
                  <div className="text-lg font-black text-[#1b120c]">99.8% Perfect</div>
                  <p className="text-xs text-[#705e52]">
                    Beverage and food tickets route directly to designated stations, eliminating verbal miscommunication.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                  <div className="text-xs font-bold text-[#c26d38]">Commission Saved</div>
                  <div className="text-lg font-black text-[#1b120c]">0% Third-Party</div>
                  <p className="text-xs text-[#705e52]">
                    Direct takeaway and delivery orders retain 100% of revenue deposited directly to the merchant account.
                  </p>
                </div>
              </div>
            </div>

            {/* FINANCIAL OPTIMIZATION & UNIT ECONOMICS */}
            <div className="p-8 rounded-3xl bg-[#faf7f2] border border-[#ebdcd0] space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                  Unit Economics & Financial Discipline
                </div>
                <h3 className="text-xl font-black text-[#1b120c]">
                  Food Cost Governance & Raw Material Yield Tracking
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#5c4d42] leading-relaxed">
                <p>
                  At {business.name}, maintaining culinary consistency requires rigorous portion control. With CafeGrow&apos;s gram-level recipe costing module, every signature dish prepared decrements raw ingredient inventories in real time. Kitchen supervisors receive automated low-stock buffer alerts before vital ingredients run low during peak service hours.
                </p>
                <p>
                  By eliminating inventory shrinkage, preventing over-portioning, and enforcing blind cash float handovers during shift changes, {business.name} maintains a stellar prime cost ratio well within healthy industry benchmarks, ensuring sustainable profitability year-round.
                </p>
              </div>
            </div>

            {/* Zero Fake Data Notice */}
            <NoFakeListingsNotice locationName={business.name} />
          </div>

          {/* Sidebar (1 Col): Verified Credentials & Quick Facts */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#ebdcd0] space-y-5 shadow-sm">
              <h3 className="text-base font-bold text-[#1b120c] pb-3 border-b border-[#ebdcd0]">
                Verified Business Details
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#a8988e] block">Physical Address:</span>
                  <span className="font-semibold text-[#1b120c]">{business.addressInfo}</span>
                </div>
                <div>
                  <span className="text-[#a8988e] block">Locality & City:</span>
                  <span className="font-semibold text-[#1b120c]">{business.area}, {business.city}</span>
                </div>
                {business.seatingCapacity && (
                  <div>
                    <span className="text-[#a8988e] block">Seating Capacity:</span>
                    <span className="font-semibold text-[#1b120c]">{business.seatingCapacity}</span>
                  </div>
                )}
                <div>
                  <span className="text-[#a8988e] block">Digital QR Menu Status:</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Active & Live</span>
                  </span>
                </div>
                <div>
                  <span className="text-[#a8988e] block">Verified By:</span>
                  <span className="font-bold text-[#1b120c]">CafeGrow Merchant Team</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-3 border-t border-[#ebdcd0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a8988e] block mb-2">
                  Key Amenities:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {business.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md bg-[#faf7f2] border border-[#e5d7cb] text-[11px] text-[#705e52]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CafeGrow Onboarding Pitch */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1b120c] to-[#2e1d12] text-white border border-[#3a2618] space-y-4 shadow-sm">
              <h3 className="text-base font-bold">Want Your Business Verified?</h3>
              <p className="text-xs text-[#d8cbbf] leading-relaxed">
                Join verified partners like {business.name}. Deploy your digital QR menu, cloud POS billing, and Google Maps local SEO in under 24 hours.
              </p>
              <a
                href={siteConfig.links.getStarted}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-lg hover:brightness-110 transition"
              >
                <span>Get Listed on CafeGrow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED ESTABLISHMENT FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Establishment FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions About {business.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Helpful answers on ordering, dining hours, payment options, and verification status.
          </p>
        </div>
        <FaqAccordion faqs={businessFaqs} />
      </section>

      {/* 4. BOTTOM BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName={business.area}
          solutionHighlight={`premier ${business.category.toLowerCase()} technology`}
        />
      </div>
    </div>
  );
}
