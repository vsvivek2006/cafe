import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  blogArticles,
  blogCategories,
  getArticleBySlug,
  getArticlesByCategory,
} from "@/data/blogArticles";
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
  HelpCircle,
  Folder,
  Layers,
  Smartphone,
  ShieldCheck,
  Building2,
  Workflow,
  Sliders,
  BarChart3,
  Store,
  DollarSign,
  Printer,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articleParams = blogArticles.map((a) => ({ slug: a.slug }));
  const categoryParams = blogCategories.map((c) => ({ slug: c.slug }));
  return [...articleParams, ...categoryParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (article) {
    return {
      title: `${article.title} | CafeGrow`,
      description: article.metaDescription,
      keywords: [
        article.categoryName.toLowerCase(),
        "food business growth",
        "restaurant management guide",
        "cafe operating system",
        "qr menu ordering",
        "pos billing",
        "jaipur food scene",
        "hospitality tech india",
      ],
      alternates: {
        canonical: `${siteConfig.discoveryDomain}/blog/${article.slug}`,
      },
      openGraph: {
        title: article.title,
        description: article.metaDescription,
        url: `${siteConfig.discoveryDomain}/blog/${article.slug}`,
        type: "article",
      },
    };
  }

  const category = blogCategories.find((c) => c.slug === slug);
  if (category) {
    return {
      title: `${category.name} Guides & Playbooks | CafeGrow Blog`,
      description: category.description,
      alternates: {
        canonical: `${siteConfig.discoveryDomain}/blog/${category.slug}`,
      },
      openGraph: {
        title: `${category.name} Guides | CafeGrow`,
        description: category.description,
        url: `${siteConfig.discoveryDomain}/blog/${category.slug}`,
      },
    };
  }

  return {};
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = blogCategories.find((c) => c.slug === slug);

  // If Article
  if (article) {
    const breadcrumbs = [
      { name: "Blog", url: "/blog" },
      { name: article.categoryName, url: `/blog/${article.categorySlug}` },
      { name: article.title, url: `/blog/${article.slug}` },
    ];

    const masterFaqs = [
      ...article.faqs,
      {
        question: `How does CafeGrow's architecture connect with the principles discussed in "${article.title}"?`,
        answer: `CafeGrow directly operationalizes this playbook. By combining contactless table QR ordering, sub-3s POS billing, real-time KDS kitchen routing, and automated raw material inventory deduction, our cloud OS ensures you implement these strategies without costly hardware or technical complexity.`,
      },
      {
        question: "Can these operational playbooks be applied to multi-outlet restaurant chains?",
        answer: `Yes. CafeGrow's multi-unit architecture allows central kitchen teams, general managers, and franchise partners to standardize recipes, enforce brand-wide pricing tiers, and monitor live branch metrics from a consolidated central dashboard.`,
      },
      {
        question: "How quickly can a food business launch these systems during active service?",
        answer: `Most dining establishments complete digital menu onboarding and thermal printer pairing in under 2 hours. Handheld tableside ordering and contactless QR menus can be deployed with zero interruption to ongoing dining room service.`,
      },
      {
        question: "How does CafeGrow ensure compliance with Indian GST and FSSAI regulations?",
        answer: `The platform automatically prints your verified 14-digit FSSAI license number on all guest invoices, calculates 5% restaurant GST (or 18% for hotel-based dining), and provides one-click GSTR-1 and GSTR-3B tax export summaries for seamless monthly accounting.`,
      },
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      author: {
        "@type": "Organization",
        name: siteConfig.legalEntity,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.legalEntity,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.discoveryDomain}/logo.png`,
        },
      },
      datePublished: article.publishDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.discoveryDomain}/blog/${article.slug}`,
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: masterFaqs.map((f) => ({
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3 text-xs text-[#8a7a70]">
            <Link
              href={`/blog/${article.categorySlug}`}
              className="font-bold text-[#8a5d3b] bg-[#f4eee5] px-3 py-1 rounded-full hover:underline"
            >
              {article.categoryName}
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b120c] tracking-tight leading-tight">
            {article.title}
          </h1>
        </header>

        {/* AEO Direct Answer Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200/80 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Direct Executive Summary (Key Takeaway)</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#1b120c] leading-relaxed">
              {article.directAnswer}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-base sm:text-lg text-[#5c4d42] leading-relaxed font-normal">
            {article.introduction}
          </p>

          <div className="space-y-10">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1b120c] tracking-tight border-b border-[#e2d6c7] pb-2">
                  {section.heading}
                </h2>
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#5c4d42] leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && (
                  <ul className="space-y-2 pt-2">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#5c4d42]">
                        <CheckCircle className="w-4 h-4 text-[#c26d38] shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* MASTERCLASS SECTION 1: STRATEGIC ROADMAP FOR HOSPITALITY OPERATORS */}
          <div className="pt-8 border-t border-[#ebdcd0] space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Operational Implementation Blueprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                A 3-Phase Execution Roadmap for Modern Food Establishments
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5c4d42] leading-relaxed">
              <p>
                Transforming a restaurant, cafe, dhaba, or bakery from a chaotic manual setup into a streamlined, high-velocity digital operation requires disciplined execution. Many hospitality founders make the mistake of introducing disjointed software tools that create more friction for front-of-house servers and culinary staff than they resolve.
              </p>
              <p>
                A successful operational rollout follows three distinct, structured phases:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                <div className="text-xs font-bold text-[#c26d38]">Phase 1: Catalog & Yields</div>
                <h3 className="text-sm font-bold text-[#1b120c]">Menu & Recipe Architecture</h3>
                <p className="text-xs text-[#705e52] leading-relaxed">
                  Digitize your entire food and beverage catalog with high-resolution imagery, dietary allergen flags, and precise gram-level raw material recipes. Ensure all item modifiers (milk choices, spice grades, add-ons) are systematically mapped.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                <div className="text-xs font-bold text-[#c26d38]">Phase 2: Routing & Hardware</div>
                <h3 className="text-sm font-bold text-[#1b120c]">KDS & Station Printing</h3>
                <p className="text-xs text-[#705e52] leading-relaxed">
                  Pair existing thermal receipt printers and kitchen screens over local network Wi-Fi. Assign automatic ticket routing so beverage tickets dispatch exclusively to the barista/bar counter and hot food items route to the main line.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2">
                <div className="text-xs font-bold text-[#c26d38]">Phase 3: Tableside Launch</div>
                <h3 className="text-sm font-bold text-[#1b120c]">QR Ordering & Direct Delivery</h3>
                <p className="text-xs text-[#705e52] leading-relaxed">
                  Affix durable QR plaques to dining tables and deploy branded takeaway pickup links. Train floor staff on tableside POS billing, dynamic UPI QR settlements, and automated WhatsApp guest retention workflows.
                </p>
              </div>
            </div>
          </div>

          {/* MASTERCLASS SECTION 2: FINANCIAL ARCHITECTURE & COMMISSION SAVINGS MATH */}
          <div className="p-8 rounded-3xl bg-white border border-[#ebdcd0] shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Financial Unit Economics
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                The Mathematics of 0% Commission Direct Ordering
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-[#5c4d42] leading-relaxed">
              <div className="space-y-3">
                <p>
                  In the traditional food delivery marketplace model, third-party aggregators extract between 25% and 30% commission on every order. For an establishment generating ₹8,00,000 in monthly delivery volume, over ₹2,20,000 is diverted away from the business owner every single month.
                </p>
                <p>
                  Over an operational calendar year, that represents over ₹26,40,000 in lost revenue—capital that should be allocated toward opening new locations, investing in staff salary increments, or renovating customer dining spaces.
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  With CafeGrow&apos;s direct ordering portal, you pay 0% commission on food orders. Patrons scan your table QR or click your social media link to place orders directly with your kitchen. Payment settles instantaneously via UPI to your bank account with zero platform clawbacks.
                </p>
                <p>
                  Crucially, you retain complete ownership of customer phone numbers and dining histories. Rather than continuously buying paid ads on aggregator marketplaces, you activate regular diners through automated WhatsApp anniversary and weekend promotions at near-zero marginal cost.
                </p>
              </div>
            </div>
          </div>

          {/* MASTERCLASS SECTION 3: BACK-OF-HOUSE KITCHEN GOVERNANCE & SOPS */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Back-of-House Standard Operating Procedures
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                Eliminating Kitchen Chaos with Kitchen Display Systems (KDS)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-[#5c4d42] leading-relaxed">
              <div className="space-y-3">
                <p>
                  Thermal paper tickets in busy kitchens are prone to human error: they get soaked in sauce, bleached by heat lamps, or lost on the floor. These mishaps lead to missed orders, prolonged customer wait times, and lukewarm dishes delivered to tables.
                </p>
                <p>
                  CafeGrow&apos;s digital KDS replaces paper slips with synchronized kitchen screens. Incoming tickets appear instantly, categorized by prep station, with color-coded aging timers: green for under 5 minutes, amber as preparation approaches 12 minutes, and flashing red if an order exceeds 18 minutes.
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  At the expediter counter, chefs consolidate line items with a single touch, ensuring that beverages, hot appetizers, and main courses are dispatched to tables simultaneously, delivering a five-star dining experience.
                </p>
                <p>
                  Simultaneously, every item completed automatically triggers raw ingredient deduction from the master cloud inventory ledger, alerting managers before vital stocks like dairy, coffee beans, or meats deplete during peak service hours.
                </p>
              </div>
            </div>
          </div>

          {/* MASTERCLASS SECTION 4: STATUTORY COMPLIANCE & GST AUTOMATION */}
          <div className="p-8 rounded-3xl bg-[#faf7f2] border border-[#ebdcd0] space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Statutory Governance & Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                FSSAI Hygiene Standards & GST Tax Filing Across Indian States
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-[#5c4d42] leading-relaxed">
              <div className="space-y-3">
                <p>
                  Operating a commercial hospitality venue in India requires strict adherence to statutory hygiene guidelines set forth by the Food Safety and Standards Authority of India (FSSAI). All food establishments must prominently print their 14-digit FSSAI license number on customer bills.
                </p>
                <p>
                  CafeGrow embeds this compliance directly into thermal receipt layouts and digital invoices, ensuring full municipal compliance and building patron confidence in your food hygiene standards.
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  On the financial compliance side, CafeGrow automates standard 5% restaurant GST (2.5% CGST + 2.5% SGST) calculations for standalone eateries and 18% GST for hotel-based restaurants.
                </p>
                <p>
                  At month-end, finance managers can export comprehensive GSTR-1, GSTR-3B, and B2B CSV summaries with a single click, eliminating manual accountant entry errors and ensuring audit-ready tax filing across all Indian jurisdictions.
                </p>
              </div>
            </div>
          </div>

          {/* Related Solutions Cross Mesh */}
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e2d6c7] space-y-3">
            <h3 className="text-sm font-bold text-[#1b120c]">
              Related Food & Hospitality Solutions:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {article.relatedSolutions.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#d6c7b7] text-xs font-semibold text-[#1b120c] hover:border-[#c26d38] transition"
                >
                  <span>{sol.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#c26d38]" />
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={masterFaqs} title="Comprehensive Operations & Strategy FAQs" />
        </div>

        {/* Owner CTA Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OwnerCtaCard
            locationName="Your Restaurant or Cafe"
            solutionHighlight="modern QR menus, rapid POS billing & customer retention"
          />
        </div>
      </div>
    );
  }

  // If Category Hub
  if (category) {
    const articles = getArticlesByCategory(category.slug);
    const breadcrumbs = [
      { name: "Blog", url: "/blog" },
      { name: category.name, url: `/blog/${category.slug}` },
    ];

    const categoryFaqs = [
      {
        question: `Why is mastering ${category.name.toLowerCase()} critical for food and beverage operators?`,
        answer: `${category.name} forms the backbone of modern hospitality success. In an industry with razor-thin operating margins, adopting disciplined digital systems in ${category.name.toLowerCase()} enables operators to eliminate order errors, increase table turnover by up to 35%, and retain loyal diners without paying 25% to 30% marketplace commissions.`,
      },
      {
        question: `How does CafeGrow assist businesses in implementing ${category.name.toLowerCase()}?`,
        answer: `CafeGrow provides a unified, hardware-agnostic cloud operating system that integrates contactless table QR menus, sub-3s POS touch billing, smart KDS station routing, and automated WhatsApp loyalty campaigns into a single intuitive dashboard.`,
      },
      {
        question: "Can these strategies be adopted by single-location cafes as well as regional chains?",
        answer: `Yes. Whether you operate a single 6-table coffee roaster or a 20-outlet regional dining franchise, CafeGrow's modular architecture scales smoothly with your business, requiring zero upfront hardware investment.`,
      },
    ];

    return (
      <div className="space-y-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <section className="relative overflow-hidden bg-gradient-to-b from-[#1b120c] via-[#241810] to-[#120b06] text-white py-16 sm:py-20 border-y border-[#3a2618]">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3a2618] border border-[#523722] text-xs font-semibold text-amber-300">
              <Folder className="w-3.5 h-3.5 text-amber-400" />
              <span>Topic Authority Hub</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white">{category.name}</h1>
            <p className="text-sm sm:text-base text-[#d8cbbf] max-w-2xl mx-auto leading-relaxed">
              {category.description} Comprehensive operational playbooks, unit economics benchmarks, and software best practices curated by CafeGrow.
            </p>
          </div>
        </section>

        {/* In-Depth Category Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#ebdcd0] p-8 sm:p-12 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#c26d38]">
                Industry Playbook
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b120c]">
                Operational Excellence in {category.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5c4d42] leading-relaxed text-sm sm:text-base">
              <div className="space-y-4">
                <p>
                  Mastering {category.name.toLowerCase()} is essential for building a profitable, resilient food service business in modern India. Dining establishments today operate under intense competitive pressure: commercial rents continue to climb, customer attention spans are shorter than ever, and third-party delivery marketplaces extract aggressive commission cuts on every sale.
                </p>
                <p>
                  Our editorial team and hospitality systems architects have compiled these actionable guides to help restaurant, cafe, dhaba, and bakery owners navigate these challenges. By adopting modern cloud technologies, automating front-of-house table service, and protecting unit profit margins, operators can achieve sustainable long-term growth.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Each playbook featured in this section provides step-by-step implementation instructions, financial calculation formulas, and standard operating procedures (SOPs) tested across hundreds of dining venues in Jaipur and 50+ Indian cities.
                </p>
                <p>
                  Explore the guides below to discover how contactless table QR ordering, lightning-fast POS billing, automated kitchen order ticket routing, and owned customer retention channels can transform your hospitality operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-xl font-bold text-[#1b120c]">Articles in {category.name}</h2>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/blog/${art.slug}`}
                  className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] text-[#8a7a70]">{art.readTime}</span>
                    <h3 className="text-base font-bold text-[#1b120c] group-hover:text-[#c26d38] transition">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#6e5f54] line-clamp-3 leading-relaxed">{art.metaDescription}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f0e7dc] text-xs font-semibold text-[#c26d38] flex items-center justify-between">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-[#e2d6c7] text-center text-sm text-[#6e5f54]">
              New detailed playbooks in this category are being prepared by our editorial team. Check back shortly!
            </div>
          )}
        </section>

        {/* Category FAQ Accordion */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={categoryFaqs}
            title={`Frequently Asked Questions on ${category.name}`}
          />
        </div>

        {/* Owner CTA Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OwnerCtaCard
            locationName="Your Business"
            solutionHighlight={`expert ${category.name.toLowerCase()} technology`}
          />
        </div>
      </div>
    );
  }

  notFound();
}
