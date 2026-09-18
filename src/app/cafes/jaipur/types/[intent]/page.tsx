import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { jaipurIntents, getJaipurIntentBySlug } from "@/data/jaipurIntents";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import CustomerDiscoveryCard from "@/components/CustomerDiscoveryCard";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import {
  Sparkles,
  Coffee,
  CheckCircle,
  MapPin,
  ArrowRight,
  Zap,
  Store,
  Compass,
  Smartphone,
  Workflow,
  Sliders,
  BarChart3,
  Building2,
  Clock,
  Layers,
  Percent,
} from "lucide-react";

interface PageProps {
  params: Promise<{ intent: string }>;
}

export async function generateStaticParams() {
  return jaipurIntents.map((i) => ({
    intent: i.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { intent: intentSlug } = await params;
  const intent = getJaipurIntentBySlug(intentSlug);

  if (!intent) return {};

  return {
    title: intent.metaTitle,
    description: intent.metaDescription,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafes/jaipur/types/${intent.slug}`,
    },
    openGraph: {
      title: intent.metaTitle,
      description: intent.metaDescription,
      url: `${siteConfig.discoveryDomain}/cafes/jaipur/types/${intent.slug}`,
    },
  };
}

export default async function JaipurIntentPage({ params }: PageProps) {
  const { intent: intentSlug } = await params;
  const intent = getJaipurIntentBySlug(intentSlug);

  if (!intent) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Jaipur Cafes", url: "/cafes/jaipur" },
    { name: "Categories", url: "/cafes/jaipur#categories" },
    { name: intent.shortName, url: `/cafes/jaipur/types/${intent.slug}` },
  ];

  const faqs = [
    {
      question: `What defines high-quality ${intent.shortName.toLowerCase()} in Jaipur?`,
      answer: `High quality ${intent.shortName.toLowerCase()} combine authentic architectural ambiance, consistent specialty culinary or beverage execution, reliable high-speed Wi-Fi, and prompt tableside guest service.`,
    },
    {
      question: `Which Jaipur neighborhoods have the highest concentration of ${intent.shortName.toLowerCase()}?`,
      answer: `The premier hubs in Jaipur for this concept are ${intent.recommendedLocalities.join(", ")}, known for their walkable streets, lively creative communities, and discerning local patrons.`,
    },
    {
      question: `How do these specialty cafes handle peak weekend crowds without service delays?`,
      answer: `Leading venues deploy CafeGrow's contactless table QR ordering and digital kitchen display systems (KDS). Diners place orders directly from their smartphones, eliminating waiter wait times and accelerating table turns by up to 35%.`,
    },
    {
      question: `What are typical price ranges and average bill sizes for ${intent.shortName.toLowerCase()} in Jaipur?`,
      answer: `Average spends typically range between ₹350 and ₹700 per person for specialty coffee and casual bites, while rooftop venues and premium roasteries see average party checks between ₹1,200 and ₹2,500.`,
    },
    {
      question: `Can cafe operators specializing in ${intent.shortName.toLowerCase()} list their business on CafeGrow?`,
      answer: `Yes! Cafe founders can submit their venue details through our onboarding portal to join Jaipur's verified hospitality network and deploy zero-commission direct ordering in under 24 hours.`,
    },
    {
      question: `How does CafeGrow assist with inventory management for specialty cafes in Jaipur?`,
      answer: `With gram-level recipe costing, every espresso shot, artisan pastry, or signature dish rung up automatically decrements raw ingredient inventories, preventing waste and keeping food cost ratios below 30%.`,
    },
  ];

  const intentSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${intent.title} | CafeGrow Jaipur`,
    description: intent.metaDescription,
    url: `${siteConfig.discoveryDomain}/cafes/jaipur/types/${intent.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(intentSchema) }}
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
            <span>{intent.heroBadge} • Jaipur Curated Dining Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {intent.title}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            {intent.tagline} Discover verified venues, authentic ambiance, and modern dining technology across Jaipur, Rajasthan.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/list-your-cafe"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-4 h-4" />
              <span>List Your Cafe in This Category</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/cafes/jaipur"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#2a1d13] border border-[#4a3222] text-[#faf7f2] hover:border-[#c26d38] transition"
            >
              <span>Explore All Jaipur Cafes</span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Top Hubs: {intent.recommendedLocalities.slice(0, 3).join(", ")}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Venues</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Zero Fake Reviews</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. CULTURAL LANDSCAPE & DINING EVOLUTION IN JAIPUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Jaipur Hospitality Culture
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Emergence of {intent.shortName} in the Pink City
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Jaipur&apos;s culinary landscape has entered a sophisticated new era. Gone are the days when dining out was limited to traditional sweet shops or cookie-cutter multi-cuisine restaurants. Today&apos;s discerning residents, remote professionals, domestic travelers, and international guests seek specialized dining environments that reflect distinct lifestyle preferences.
              </p>
              <p>
                {intent.intro} From open-air courtyards under starry desert skies to minimalist specialty coffee bars sourcing single-origin beans from Chikmagalur and Araku, Jaipur&apos;s {intent.shortName.toLowerCase()} represent the vanguard of modern Rajasthani hospitality.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Leading establishments in neighborhoods such as {intent.recommendedLocalities.join(", ")} combine stunning aesthetics with operational efficiency. However, delivering an exceptional guest experience in high-demand specialty dining requires more than great decor; it demands flawless service execution during peak evening hours and bustling weekend brunches.
              </p>
              <p>
                This is where CafeGrow empowers Jaipur founders. By automating tableside ordering through digital QR menus, streamlining kitchen communication with smart KDS screens, and eliminating third-party marketplace commissions, our platform allows operators to focus on what matters most: culinary artistry and genuine guest connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR OPERATIONAL PILLARS FOR SPECIALTY HOSPITALITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Operational Framework</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            4 Operational Standards for High-Performing {intent.shortName}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            How modern Jaipur venues maintain culinary excellence and fast table turnover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">1. Ingredient Integrity</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Standardized recipes and gram-level portion tracking ensure that signature beverages, artisanal breads, and gourmet dishes taste identical regardless of who is working the shift.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">2. Tableside QR Ordering</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Guests browse rich visual menus on their phones, read detailed flavor notes and allergen guides, and order without waving down busy floor staff during peak hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">3. Dual-Station KDS Routing</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Drink tickets fire directly to the barista or mocktail bar while hot entrees route simultaneously to the culinary line, ensuring all guests at a table are served together.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">4. Direct Guest Retention</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Capture customer dining preferences ethically during digital bill settlement. Automated WhatsApp re-engagement flows keep regulars returning for new seasonal menus.
            </p>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED NEIGHBORHOOD HUBS IN JAIPUR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1b120c]">
            Top Jaipur Localities for {intent.shortName}
          </h2>
          <Link href="/cafes/jaipur" className="text-xs font-bold text-[#c26d38] hover:underline">
            View All 25 Jaipur Areas →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intent.recommendedLocalities.map((locName) => (
            <div
              key={locName}
              className="p-6 rounded-2xl bg-white border border-[#ebdcd0] space-y-3 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-800">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">{locName}</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Known for premier lifestyle venues, specialty coffee roasters, and vibrant evening footfall in Jaipur.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 0% COMMISSION DIRECT ORDERING ECONOMICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Unit Economics & Margins
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Protecting Profit Margins for Jaipur Specialty Dining
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Specialty venues incur significant upfront costs: premium espresso machinery, artisan beans, organic dairy alternatives, and distinctive interior architectural finishes. When third-party marketplace portals take 25% to 30% cuts on food orders, these healthy margins vanish.
              </p>
              <p>
                CafeGrow restores fiscal balance by providing a direct 0% commission digital ordering channel. Guests order takeaway or delivery directly from your verified menu, settling instantly to your merchant UPI account.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                By keeping 100% of order revenue and building an owned customer ledger, Jaipur operators systematically lower their customer acquisition costs and build a sustainable, self-sufficient hospitality business.
              </p>
              <p>
                Our built-in FSSAI and GST tax automation ensures that every transaction is compliant with statutory regulations, generating export-ready GSTR summaries for your accounting team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ZERO FAKE LISTINGS NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName={`Jaipur ${intent.shortName}`} />
      </section>

      {/* 7. FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Specialty Category FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions about {intent.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common dining, pricing, and operational questions for Jaipur specialty cafes.
          </p>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* 8. MID-PAGE OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Jaipur"
          solutionHighlight={`premier ${intent.shortName.toLowerCase()} technology`}
        />
      </div>

      {/* 9. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Operate a Specialty Cafe or Bistro in Jaipur?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Join premier hospitality operators across Jaipur powering their tables, billing, and direct delivery with CafeGrow. Zero commission and live in under 24 hours.
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
