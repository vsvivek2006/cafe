import { Metadata } from "next";
import Link from "next/link";
import { blogArticles, blogCategories } from "@/data/blogArticles";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import OwnerCtaCard from "@/components/OwnerCtaCard";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle,
  TrendingUp,
  Layers,
  Smartphone,
  ShieldCheck,
  Building2,
  Workflow,
  Sliders,
  BarChart3,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CafeGrow Blog — Cafe Growth, QR Menus, POS & Local SEO Playbooks",
  description:
    "Actionable guides and strategies for modern cafe owners. Master QR menus, local SEO, cloud POS billing, table ordering, and customer retention.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/blog`,
  },
  openGraph: {
    title: "CafeGrow Blog | Cafe Growth & Software Guides",
    description: "Expert guides for cafe founders across India.",
    url: `${siteConfig.discoveryDomain}/blog`,
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [{ name: "Blog", url: "/blog" }];

  const knowledgeFaqs = [
    {
      question: "What topics are covered in the CafeGrow Knowledge Base?",
      answer:
        "The CafeGrow Knowledge Base provides in-depth operational playbooks covering contactless table QR menu deployment, cloud POS billing systems, kitchen display station routing, raw ingredient inventory control, Google Local 3-pack SEO, WhatsApp customer retention campaigns, and statutory FSSAI and GST tax compliance for food businesses across India.",
    },
    {
      question: "Who writes and reviews these hospitality guides?",
      answer:
        "All playbooks are curated by hospitality technology engineers and operations specialists at Growth Service Digital Solution Pvt Ltd. Every recommendation is grounded in real-world restaurant unit economics, field testing with busy cafes and dhabas, and proven software benchmarks.",
    },
    {
      question: "How do these playbooks help food businesses reduce operating costs?",
      answer:
        "By providing actionable SOPs on portion control, batch recipe yield calculations, 0% commission direct ordering channels, and digital shift handover float auditing, our guides help hospitality operators reduce food waste by 4% to 8% and eliminate third-party marketplace commissions.",
    },
    {
      question: "Are the strategies applicable to Tier-2 and Tier-3 Indian cities?",
      answer:
        "Yes, our frameworks are designed specifically for the Indian dining ecosystem, factoring in local UPI payment dynamics, regional ingredient supply volatility, seasonal tourism surges, and multilingual staff training across cities like Jaipur, Lucknow, Chandigarh, Indore, and beyond.",
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
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Hospitality Intelligence & Operational Playbooks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            The Food & Hospitality Knowledge Base
          </h1>

          <p className="text-base sm:text-lg text-[#d8cbbf] max-w-3xl mx-auto leading-relaxed font-normal">
            Data-backed operational strategies, financial architecture blueprints, and cloud technology playbooks engineered to help Indian restaurant, cafe, dhaba, and bakery owners scale unit profitability.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8988b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Zero-Commission Economics</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>KDS & POS Operational SOPs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Local SEO Google 3-Pack Rankings</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>FSSAI & 5% GST Tax Compliance</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TOPIC PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {blogCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/${cat.slug}`}
              className="px-4 py-2 rounded-xl bg-white border border-[#e2d6c7] text-xs font-semibold text-[#1b120c] hover:border-[#c26d38] hover:text-[#c26d38] shrink-0 transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1b120c]">Latest Guides & Playbooks</h2>
          <span className="text-xs text-[#705e52]">20 In-Depth Industry Guides</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#8a7a70]">
                  <span className="font-semibold text-[#8a5d3b] bg-[#f4eee5] px-2.5 py-0.5 rounded-full">
                    {article.categoryName}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1b120c] group-hover:text-[#c26d38] transition leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#6e5f54] line-clamp-3 leading-relaxed">
                  {article.metaDescription}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f0e7dc] flex items-center justify-between text-xs font-semibold text-[#c26d38]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. THE 4 PILLARS OF MODERN RESTAURANT MANAGEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Operational Framework</div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The 4 Pillars of High-Profit Food & Hospitality Operations
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54] max-w-3xl">
              Sustainable profitability in the Indian food service sector is not an accident of culinary talent alone. It is the calculated outcome of disciplined front-of-house velocity, synchronized back-of-house production, automated inventory governance, and zero-commission direct ordering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">1. Front-of-House Velocity</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Empowering dining guests to browse digital menus, configure complex modifiers, and settle bills via dynamic UPI QR codes cuts 15 to 20 minutes from the average table turnaround cycle, enabling 35% higher seat utilization during peak service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">2. Culinary Station Routing</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Eliminating physical paper order tickets through digital Kitchen Display Systems (KDS) removes verbal chaos, prioritizes tickets with color-coded aging timers, and ensures expeditor consolidation for simultaneous table service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">3. Recipe Portion Control</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Linking standardized chef recipes to POS sales registers automatically decrements raw ingredients gram-by-gram, highlighting kitchen pilferage, reducing over-portioning variances, and maintaining steady food cost ratios under 32%.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1b120c]">4. Direct Guest Retention</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                By capturing verified patron phone numbers during digital billing with full privacy consent, establishments build owned customer databases, driving recurring mid-week dining through automated WhatsApp vouchers rather than costly marketplace ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOD SERVICE UNIT ECONOMICS BENCHMARK */}
      <section className="bg-[#f5f0ea] py-16 border-y border-[#e2d6c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
              The Essential Unit Economics of Indian Hospitality
            </h2>
            <p className="text-xs sm:text-sm text-[#6e5f54]">
              Industry financial targets recommended by CafeGrow operations analysts for healthy net margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Cost of Goods Sold (COGS)</div>
              <h3 className="text-xl font-black text-[#1b120c]">28% – 32% Target</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Raw material expenditure including meat, dairy, produce, cooking fats, and packaging must stay strictly within this corridor. Exceeding 34% indicates kitchen pilferage, unmonitored supplier inflation, or excessive plate waste.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Prime Cost (COGS + Labor)</div>
              <h3 className="text-xl font-black text-[#1b120c]">Under 55% Target</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                The combined total of raw food ingredients and front-and-back-of-house payroll. Maintaining prime cost below 55% provides sufficient cash cushion to absorb commercial rental costs, utilities, and corporate taxes.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#ebdcd0] p-6 space-y-3 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Occupancy & Commercial Lease</div>
              <h3 className="text-xl font-black text-[#1b120c]">Under 12% of Revenue</h3>
              <p className="text-xs text-[#705e52] leading-relaxed">
                Base commercial lease plus common area maintenance (CAM) charges should never exceed 12% to 15% of gross monthly sales. Overpaying on real estate forces menu price inflation and damages neighborhood competitiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">Hospitality FAQ</div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
            Frequently Asked Questions on Food Tech & Operations
          </h2>
          <p className="text-xs sm:text-sm text-[#6e5f54]">
            Practical insights on software selection, staff onboarding, and profit margin protection.
          </p>
        </div>
        <FaqAccordion faqs={knowledgeFaqs} />
      </section>

      {/* 7. MID-PAGE OWNER CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OwnerCtaCard
          locationName="Your Restaurant or Cafe"
          solutionHighlight="smart QR menus, rapid POS billing & zero-commission delivery"
        />
      </div>

      {/* 8. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1b120c] via-[#241810] to-[#120b06] text-white border border-[#3a2618] text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black max-w-3xl mx-auto">
            Ready to Implement These Growth Strategies in Your Business?
          </h2>
          <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto">
            Get started with CafeGrow today. Experience 0% commission direct ordering, sub-3s POS billing, and automated inventory control tailored for Indian hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-xl hover:brightness-110 transition"
            >
              <Store className="w-4 h-4" />
              <span>Get Started Free</span>
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
