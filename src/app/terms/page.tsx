import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions of Service | CafeGrow",
  description:
    "Master Software-as-a-Service (SaaS) Agreement and Terms of Use for CafeGrow, operated by Growth Service Digital Solution Pvt Ltd.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbs = [{ name: "Terms and Conditions", url: "/terms" }];

  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1b120c]">
            Terms and Conditions of Service
          </h1>
          <div className="text-xs text-[#8a7a70]">
            Effective Date: September 2026 • Product of {siteConfig.legalEntity}
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#5c4d42] leading-relaxed">
          <p>
            This Master Software-as-a-Service (SaaS) Agreement and Terms of Service (hereinafter referred to as the &quot;Agreement&quot;) constitutes a legally binding contractual instrument executed between <strong>Growth Service Digital Solution Pvt Ltd</strong> (a private limited company incorporated under the Companies Act, 2013, with its principal operational headquarters in Jaipur, Rajasthan, India, hereinafter referred to as &quot;CafeGrow&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) and the commercial business entity or individual subscribing to or accessing the CafeGrow software platform (hereinafter referred to as &quot;Merchant Partner&quot;, &quot;Subscriber&quot;, &quot;User&quot;, or &quot;you&quot;).
          </p>
          <p>
            By executing an electronic order form, registering an account on <code>https://cafegrow.in</code> or <code>https://cafe.growthservice.in</code>, generating digital QR menus, or utilizing our cloud point-of-sale (POS) systems, you explicitly affirm that you possess legal capacity to bind the commercial enterprise you represent to the comprehensive terms detailed herein.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            1. Grant of SaaS License & Scope of Authorized Use
          </h2>
          <p>
            Subject to timely payment of applicable subscription service fees and strict adherence to the provisions of this Agreement, CafeGrow grants the Merchant Partner a limited, non-exclusive, non-transferable, revocable, worldwide right to access and utilize the cloud-hosted software platform across authorized commercial dining locations.
          </p>
          <p>
            The software license encompasses:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access to the cloud back-office administration suite for catalog digitization, recipe yield configuration, tax mapping, and inventory governance.</li>
            <li>Deployment of contactless tableside QR code ordering modules accessible to end-consumer dining guests via standard mobile web browsers.</li>
            <li>Countertop point-of-sale (POS) terminal execution across compatible Android tablets, iPads, Windows desktop PCs, and smartphones.</li>
            <li>Multi-station Kitchen Display System (KDS) dispatch routing and network thermal printer communication modules.</li>
            <li>Direct 0% commission takeaway and home delivery ordering portals.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            2. 0% Commission Direct Ordering & Payment Settlement
          </h2>
          <p>
            A fundamental operational tenet of CafeGrow is the provision of direct customer ordering without the deduction of predatory third-party marketplace commissions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Zero Platform Commissions:</strong> CafeGrow does not assess, charge, or deduct percentage-based commission fees on orders processed through direct table QR menus, storefront takeaway links, or branded WhatsApp ordering channels.
            </li>
            <li>
              <strong>Payment Gateway Integration:</strong> The Merchant Partner may integrate their own direct merchant payment gateway accounts (e.g., Razorpay, Cashfree, Paytm) or deploy native NPCI-compliant dynamic UPI QR codes. Transaction processing charges levied by underlying banking networks or third-party payment aggregators are governed by the merchant&apos;s separate bilateral agreements with said financial providers.
            </li>
            <li>
              <strong>Direct Bank Settlement:</strong> All customer funds settle directly into the Merchant Partner&apos;s verified banking institution in accordance with standard RBI T+1 settlement cycles. CafeGrow does not act as an escrow intermediary or retain custody of consumer payment disbursements.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            3. Merchant Obligations & Statutory Regulatory Compliance
          </h2>
          <p>
            The Merchant Partner assumes exclusive responsibility for the operational, culinary, and fiscal compliance of their dining venue:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>FSSAI Licensing:</strong> The Merchant Partner warrants that they hold an active, valid food hygiene license issued by the Food Safety and Standards Authority of India (FSSAI). The merchant is legally obligated to configure their certified 14-digit FSSAI number in the system for automatic display on all guest receipts and digital menus.
            </li>
            <li>
              <strong>Menu Pricing & Consumer Protection:</strong> The Merchant Partner is solely responsible for the accuracy of displayed menu prices, item availability, allergen disclosures, and statutory food hygiene information in compliance with the Consumer Protection Act, 2019.
            </li>
            <li>
              <strong>Taxation & GST Invoicing:</strong> The merchant must verify correct configuration of applicable Goods and Services Tax schedules (standard 5% restaurant GST without input tax credit for standalone eateries, or 18% GST for hotel properties). The merchant remains solely responsible for the timely filing of GSTR-1 and GSTR-3B tax returns with the Central Board of Indirect Taxes and Customs (CBIC).
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            4. Service Level Agreement (SLA) & 99.99% Uptime Commitment
          </h2>
          <p>
            We recognize that hospitality operations demand uninterrupted point-of-sale availability during peak dining hours:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Uptime Commitment:</strong> CafeGrow guarantees a minimum Monthly Uptime Percentage of 99.99% for our core cloud billing and order routing infrastructure, excluding scheduled maintenance windows.
            </li>
            <li>
              <strong>Scheduled Maintenance:</strong> Routine database maintenance and feature deployments are scheduled exclusively during off-peak hours (typically 2:00 AM to 5:00 AM IST), with advance electronic notification provided to subscribers.
            </li>
            <li>
              <strong>Offline-First Resilience:</strong> In the event of commercial broadband failure at the merchant&apos;s physical premises, the CafeGrow POS terminal is engineered to maintain offline operations, allowing counter staff to generate local KOTs and cash receipts. All transactions synchronize automatically upon reconnection.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            5. Intellectual Property & Customer Data Sovereignty
          </h2>
          <p>
            The parties maintain clear separation of intellectual property and data ownership:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Platform Intellectual Property:</strong> All software architecture, proprietary source code, algorithms, user interface designs, database schemas, trademarks, and documentation related to CafeGrow remain the exclusive property of <strong>Growth Service Digital Solution Pvt Ltd</strong>.
            </li>
            <li>
              <strong>Customer Data Sovereignty:</strong> All customer data, guest mobile numbers, ordering histories, and menu assets uploaded by the Merchant Partner remain the sole property of the Merchant Partner. CafeGrow claims zero proprietary ownership over subscriber customer ledgers and warrants that customer data will never be monetized, rented, or utilized to promote competing venues.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            6. Security Governance & Acceptable Use Policy
          </h2>
          <p>
            The Subscriber agrees to uphold strict operational security protocols:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Access Credentials:</strong> The Subscriber is responsible for safeguarding master administrative passwords and manager PIN codes. Floor workers must be assigned distinct role-based access control (RBAC) tiers to prevent unapproved bill voids or inventory manipulations.
            </li>
            <li>
              <strong>Prohibited Activities:</strong> Subscribers shall not attempt to reverse engineer, decompile, or disassemble the platform, inject malicious code, or utilize CafeGrow infrastructure to conduct unauthorized automated scraping or unlawful commercial communications.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            7. Subscription Billing, Upgrades & Cancellation Terms
          </h2>
          <p>
            Subscription fee schedules, billing cycles, and cancellation policies are governed as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Billing Schedules:</strong> SaaS subscriptions are billed on a recurring monthly or annual pre-paid basis as selected upon plan registration.
            </li>
            <li>
              <strong>Taxation:</strong> All quoted software subscription fees are exclusive of applicable Indian Goods and Services Tax (GST at 18%), which will be added to commercial tax invoices.
            </li>
            <li>
              <strong>Cancellation:</strong> Subscribers may cancel their SaaS subscription at any time by providing 15 days written notice prior to the end of their current billing cycle through their administrative portal or via email to <code>cafegrow@growthservice.in</code>.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            8. Limitation of Liability & Mutual Indemnification
          </h2>
          <p>
            To the maximum extent permitted by applicable Indian law:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Consequential Damages Waiver:</strong> In no event shall either party be liable for indirect, incidental, punitive, special, or consequential damages, including loss of profits, business interruption, or loss of culinary reputation.
            </li>
            <li>
              <strong>Aggregate Monetary Cap:</strong> The aggregate cumulative liability of CafeGrow and Growth Service Digital Solution Pvt Ltd arising out of or related to this Agreement shall strictly not exceed the total subscription fees actually paid by the Merchant Partner during the twelve (12) months preceding the incident giving rise to liability.
            </li>
            <li>
              <strong>Merchant Indemnification:</strong> The Merchant Partner agrees to indemnify, defend, and hold harmless CafeGrow and its officers against any third-party claims, fines, or penalties arising from food contamination, health violations, FSSAI non-compliance, or consumer pricing disputes.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            9. Governing Law, Dispute Resolution & Exclusive Jurisdiction
          </h2>
          <p>
            This Agreement shall be construed, interpreted, and governed exclusively in accordance with the substantive laws of the Republic of India.
          </p>
          <p>
            In the event of any commercial dispute, controversy, or claim arising out of or relating to this Agreement, the parties shall first endeavor to resolve the matter through good-faith executive negotiations within thirty (30) days.
          </p>
          <p>
            If unresolved, the dispute shall be referred to and finally resolved by binding arbitration administered under the Indian Arbitration and Conciliation Act, 1996, by a sole arbitrator mutually appointed by the parties. The seat and legal place of arbitration shall be <strong>Jaipur, Rajasthan, India</strong>, and proceedings shall be conducted in the English language.
          </p>
          <p>
            Subject to arbitration provisions, the competent civil courts situated in <strong>Jaipur, Rajasthan</strong> shall possess exclusive territorial jurisdiction over any legal proceedings arising from this Agreement.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            10. Official Corporate Notices
          </h2>
          <p>
            All formal legal notices, breach communications, or contractual correspondence shall be addressed in writing to:
          </p>
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2 text-xs sm:text-sm">
            <div className="font-bold text-[#1b120c]">Legal Affairs & Commercial Contracts Division</div>
            <div><strong>Company:</strong> {siteConfig.legalEntity}</div>
            <div><strong>Corporate Headquarters:</strong> Jaipur, Rajasthan, India</div>
            <div><strong>Official Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#c26d38] underline">{siteConfig.email}</a></div>
            <div><strong>Telephone:</strong> {siteConfig.phoneFormatted}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
