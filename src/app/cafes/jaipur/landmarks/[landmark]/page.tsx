import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { jaipurLandmarks, getJaipurLandmarkBySlug } from "@/data/jaipurLandmarks";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import NoFakeListingsNotice from "@/components/NoFakeListingsNotice";
import CustomerDiscoveryCard from "@/components/CustomerDiscoveryCard";
import {
  MapPin,
  Coffee,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  Store,
  CheckCircle,
  Smartphone,
  Workflow,
  Sliders,
  BarChart3,
  Building2,
  Clock,
  Layers,
  Zap,
} from "lucide-react";

interface PageProps {
  params: Promise<{ landmark: string }>;
}

export async function generateStaticParams() {
  return jaipurLandmarks.map((l) => ({
    landmark: l.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landmark: landmarkSlug } = await params;
  const landmark = getJaipurLandmarkBySlug(landmarkSlug);

  if (!landmark) return {};

  const title = `Best Cafes Near ${landmark.name}, Jaipur (2026 Guide) | CafeGrow`;
  const description = `Looking for the best cafes near ${landmark.name}? Explore coffee shops, breakfast spots, and dining bistros around ${landmark.nearbyLocality}, Jaipur.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafes/jaipur/landmarks/${landmark.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/cafes/jaipur/landmarks/${landmark.slug}`,
    },
  };
}

export default async function JaipurLandmarkPage({ params }: PageProps) {
  const { landmark: landmarkSlug } = await params;
  const landmark = getJaipurLandmarkBySlug(landmarkSlug);

  if (!landmark) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Jaipur Cafes", url: "/cafes/jaipur" },
    { name: "Landmarks", url: "/cafes/jaipur#landmarks" },
    { name: landmark.name, url: `/cafes/jaipur/landmarks/${landmark.slug}` },
  ];

  const faqs = [
    {
      question: `What makes cafes near ${landmark.name} unique?`,
      answer: `Cafes surrounding ${landmark.name} cater to a dynamic mix of ${landmark.visitorProfile.join(", ")}, offering ${landmark.cafeVibe.toLowerCase()} with rapid service, authentic Rajasthani hospitality, and specialty artisanal beverages.`,
    },
    {
      question: `How far are these dining spots from ${landmark.name}?`,
      answer: `All recommended venues are situated within a convenient 5 to 10 minute walking or driving radius in the surrounding ${landmark.nearbyLocality} neighborhood.`,
    },
    {
      question: `Are there rapid takeaway and curbside pickup options near ${landmark.name}?`,
      answer: `Yes, many cafes in this hub support instant digital QR takeaway ordering powered by CafeGrow, allowing busy commuters, students, and tourists to grab fresh coffee and snacks without waiting in counter queues.`,
    },
    {
      question: `What are the typical operating hours for cafes near ${landmark.name}?`,
      answer: `Most breakfast-oriented cafes open by 7:30 AM to serve early commuters and fitness walkers, while lifestyle bistros and evening lounges remain open until 11:00 PM or midnight.`,
    },
    {
      question: `Can cafe owners near ${landmark.name} get their business listed on CafeGrow?`,
      answer: `Yes! Cafe founders near ${landmark.name} can claim their verified profile and deploy contactless table QR ordering with 0% commission in under 24 hours through our merchant portal.`,
    },
    {
      question: `How does CafeGrow ensure zero fake listings around ${landmark.name}?`,
      answer: `Every venue profile is individually authenticated directly with establishment management. We never publish auto-scraped listings, non-operational ghost kitchens, or unverified venues.`,
    },
  ];

  const landmarkSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Cafes Near ${landmark.name}, Jaipur (2026 Guide) | CafeGrow`,
    description: `Comprehensive curated guide to cafes, coffee shops, and dining bistros near ${landmark.name} in Jaipur.`,
    url: `${siteConfig.discoveryDomain}/cafes/jaipur/landmarks/${landmark.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landmarkSchema) }}
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
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{landmark.category} • Jaipur Landmark Dining Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Best Cafes Near {landmark.name}
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            Discover verified specialty coffee shops, breakfast bakeries, and evening hangout bistros surrounding {landmark.name} in {landmark.nearbyLocality}, Jaipur.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-4 h-4" />
              <span>List Your Cafe Near {landmark.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

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
              <span>Nearby Locality: {landmark.nearbyLocality}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Vibe: {landmark.cafeVibe}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Verified Merchant Directory</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. LANDMARK HIGHLIGHT & PEDESTRIAN PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Neighborhood Context & Pedestrian Dynamics
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Coffee & Dining Culture Around {landmark.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                As one of Jaipur&apos;s most recognized hubs, {landmark.name} in {landmark.nearbyLocality} draws massive daily footfall. The surrounding blocks host a vibrant intersection of {landmark.visitorProfile.join(", ")}, creating steady demand for exceptional food, refreshing beverages, and inviting social spaces.
              </p>
              <p>
                Whether patrons are seeking a quick morning espresso before exploring local cultural sites, an air-conditioned table with high-speed Wi-Fi for remote business calls, or an atmospheric rooftop terrace for evening relaxation, the cafes near {landmark.name} represent some of Jaipur&apos;s most exciting culinary concepts.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                However, high customer turnover during peak morning and evening hours can create severe service bottlenecks for unequipped establishments. Traditional counter order queues and delayed bill settlements often lead to lost sales and frustrated diners eager to catch their next appointment.
              </p>
              <p>
                Leading dining spots in the {landmark.nearbyLocality} vicinity are modernizing their operations with CafeGrow. By placing contactless QR menus on tables and curbside counters, operators accelerate service speed, eliminate order punch errors, and offer seamless dynamic UPI checkout that keeps queues moving swiftly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#ebdcd0]">
            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Audience Profile</div>
              <h3 className="text-base font-bold text-[#1b120c]">Visitor Demographics</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                {landmark.visitorProfile.join(" • ")}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Atmosphere & Concept</div>
              <h3 className="text-base font-bold text-[#1b120c]">Cafe Experience</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                {landmark.cafeVibe}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Location Transit</div>
              <h3 className="text-base font-bold text-[#1b120c]">Connectivity</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Situated in {landmark.nearbyLocality}, accessible via major arterial roads and Jaipur metro stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL ENGINEERING FOR HIGH-FOOTFALL LANDMARK CAFES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Operations Playbook</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            How Cafes Near {landmark.name} Maximize Peak Rush Efficiency
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Four architectural strategies deployed by successful hospitality operators in high-traffic Jaipur landmark zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">1. Queue-Busting QR Ordering</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Diners scan table QR codes or counter stickers to view digital menus and place orders without waiting in physical lines. Menus render in under 800ms directly in mobile browsers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">2. Barista & Kitchen Routing</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Beverage tickets route directly to espresso baristas while hot breakfast orders dispatch simultaneously to kitchen lines, eliminating communication delays and cross-counter shouting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">3. Bean & Dairy Inventory Control</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Track coffee bean usage down to the gram and milk milliliters per drink. Real-time consumption logs prevent stockouts of signature roasts during high-volume tourist weekends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1b120c]">4. Dynamic UPI Audio Settlement</h3>
            <p className="text-xs text-[#705e52] leading-relaxed">
              Instant dynamic UPI QR codes printed on checks or phone screens provide sub-3s payment settlement with instant audio soundbox confirmation, speeding up table turns by 30%.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CURBSIDE TAKEAWAY & PARKING DYNAMICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf7f2] rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Urban Mobility & Convenience
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              Overcoming Street Parking Congestion Around {landmark.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                In high-density commercial zones surrounding {landmark.name}, finding convenient curbside parking can be challenging during peak commute hours and weekend evenings. Potential guests frequently drive away simply because they cannot find a vacant parking spot.
              </p>
              <p>
                CafeGrow unlocks a powerful high-margin revenue channel for nearby establishments through dedicated curbside takeaway QR ordering. Commuters can pull up along designated pickup bays, scan a prominent curbside banner from their car window, and order directly.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Orders dispatch immediately to the barista or kitchen labeled with the customer&apos;s vehicle number. Runners deliver freshly prepared coffee and packaged meals directly to the vehicle window within minutes of arrival.
              </p>
              <p>
                This frictionless service captures lucrative commuter coffee runs and family dinner pickups that would otherwise be lost to distant competitors, driving up daily gross sales without requiring additional dining room seats in {landmark.nearbyLocality}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 0% COMMISSION REVENUE MATHEMATICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
              Profit Margin Protection
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Economics of 0% Commission Direct Ordering Near {landmark.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                High commercial lease rates around premier landmarks like {landmark.name} leave zero room for margin waste. Yet many cafe owners surrender 25% to 30% of their takeaway and delivery revenue to third-party aggregator portals.
              </p>
              <p>
                A cafe in {landmark.nearbyLocality} generating ₹4,00,000 in monthly delivery loses approximately ₹1,12,000 every month in third-party commissions—over ₹13,40,000 annually.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                CafeGrow replaces costly aggregators with your own direct ordering channel. Patrons scan your QR code or click your social media link to order directly from your kitchen with 0% platform commission.
              </p>
              <p>
                Most importantly, you capture verified customer phone numbers with full consent. Automated WhatsApp re-engagement flows bring regular visitors back every week, creating dependable revenue independence for your business near {landmark.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ZERO FAKE LISTINGS NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NoFakeListingsNotice locationName={`${landmark.name}, Jaipur`} />
      </section>

      {/* 7. FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Landmark FAQ Guide</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions for Cafes Near {landmark.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Answers to common dining, parking, and business software questions around {landmark.name}, Jaipur.
          </p>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* 8. MID-PAGE OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName={`${landmark.name} Area`}
          solutionHighlight="modern QR menus, rapid POS billing & zero-commission delivery"
        />
      </div>

      {/* 9. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Operate a Cafe Near {landmark.name}?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Get your business featured on Jaipur&apos;s verified hospitality network. Power tables, kitchen KOTs, and direct orders with CafeGrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>List Your Cafe on CafeGrow</span>
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
