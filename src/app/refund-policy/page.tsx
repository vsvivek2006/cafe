import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | CafeGrow",
  description:
    "Comprehensive Refund, Cancellation, and Consumer Settlement Policy for CafeGrow SaaS subscriptions and digital ordering services by Growth Service Digital Solution Pvt Ltd.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  const breadcrumbs = [{ name: "Refund Policy", url: "/refund-policy" }];

  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1b120c]">
            Refund & Cancellation Policy
          </h1>
          <div className="text-xs text-[#8a7a70]">
            Effective Date: September 2026 • Product of {siteConfig.legalEntity}
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#5c4d42] leading-relaxed">
          <p>
            At <strong>CafeGrow</strong> (operated by <strong>{siteConfig.legalEntity}</strong>, hereinafter referred to as &quot;CafeGrow&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to upholding the highest standards of commercial integrity, customer satisfaction, and financial transparency. We recognize that adopting new restaurant management software and point-of-sale infrastructure is a major operational milestone for any food and beverage establishment.
          </p>
          <p>
            This comprehensive Refund and Cancellation Policy outlines the precise rights, conditions, and procedures governing software subscription refunds, hardware replacements, and end-consumer order dispute settlements in full compliance with the <strong>Consumer Protection Act, 2019</strong>, the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and regulatory guidelines established by the <strong>Reserve Bank of India (RBI)</strong>.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            1. 30-Day Risk-Free Merchant Satisfaction Guarantee
          </h2>
          <p>
            We maintain total confidence in the operational reliability and financial impact of the CafeGrow platform. To ensure complete peace of mind for hospitality founders:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Unconditional 30-Day Guarantee:</strong> If an onboarded merchant partner is not completely satisfied with CafeGrow&apos;s cloud POS, kitchen display routing, or table QR menu system within the first thirty (30) days of initial paid subscription activation, the merchant is entitled to request a 100% full refund of the base subscription fee paid, with zero penalty deductions.
            </li>
            <li>
              <strong>Frictionless Execution:</strong> To exercise this guarantee, the merchant partner simply needs to submit an electronic refund notice to <code>cafegrow@growthservice.in</code> specifying their registered business account details and reason for cancellation within thirty (30) calendar days of initial billing.
            </li>
            <li>
              <strong>Prompt Credit:</strong> Once validated by our accounts desk, the refund is initiated within forty-eight (48) business hours directly to the original bank account or payment method utilized during registration.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            2. Recurring SaaS Subscription Cancellations & Renewals
          </h2>
          <p>
            Ongoing software subscription billing is administered with complete flexibility and zero lock-in contracts:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>On-Demand Cancellation:</strong> Subscribers may cancel recurring monthly or annual SaaS subscription plans at any point through their administrative back-office portal or by contacting dedicated support via WhatsApp or email.
            </li>
            <li>
              <strong>Continuation of Active Service:</strong> Upon submitting a cancellation notice, the merchant&apos;s access to the CafeGrow platform, table QR menus, and POS billing will remain fully operational until the conclusion of the prepaid subscription billing cycle. No further automatic renewals will be charged.
            </li>
            <li>
              <strong>Annual Plan Prorated Settlements:</strong> For subscribers on annual plans who choose to terminate their service after the initial 30-day guarantee period, CafeGrow will recalculate the elapsed months at standard non-discounted monthly subscription rates and refund the remaining unutilized prorated balance upon written request.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            3. Physical Hardware, Thermal Printers & Custom QR Stands
          </h2>
          <p>
            Where merchants procure physical hardware accessories, thermal receipt printers, or custom laser-engraved QR table stands through CafeGrow:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Transit Damage & Manufacturing Defects:</strong> Any physical equipment (e.g., 58mm or 80mm ESC/POS thermal printers, Wi-Fi kitchen printers, or acrylic QR table blocks) arriving in damaged condition or displaying functional manufacturing defects will be replaced free of charge. Merchants must notify CafeGrow within seven (7) days of delivery receipt with photographic evidence.
            </li>
            <li>
              <strong>14-Day Hardware Return Window:</strong> Undamaged, non-customized physical hardware retained in original factory packaging may be returned within fourteen (14) days of delivery for a full product refund (less actual third-party courier shipping charges).
            </li>
            <li>
              <strong>Customized Branded Materials:</strong> Physical table stands or packaging stickers featuring custom venue logos, specific table numbering, or unique branded artwork are non-returnable once fabricated, except in cases of printing errors or physical transit damage.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            4. End-Consumer Dining Guest Orders & Merchant Settlement Disputes
          </h2>
          <p>
            CafeGrow provides the digital infrastructure connecting dining guests with commercial culinary venues. Regarding order disputes between dining guests and merchant venues:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Merchant Responsibility for Order Fulfillment:</strong> The individual merchant partner is solely responsible for culinary food preparation, food quality, temperature, portion sizing, dietary allergen compliance, and physical delivery packaging.
            </li>
            <li>
              <strong>Cancellation by Consumer:</strong> Because culinary preparations commence immediately upon ticket confirmation in the kitchen display system, diners cannot unilaterally cancel orders once fired to the kitchen line without the explicit consent of the restaurant manager.
            </li>
            <li>
              <strong>Order Quality Disputes & Merchant Refunds:</strong> If a dining guest receives an incorrect dish, missing item, or encounters food quality issues, the merchant establishment maintains full administrative capability to issue instant partial or full refunds directly through their CafeGrow POS terminal.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            5. Dynamic UPI & Digital Payment Failure Reversals
          </h2>
          <p>
            In the event of network timeouts, double debits, or banking communication failures during tableside dynamic UPI payments:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Auto-Reversal Protocols:</strong> If a customer&apos;s bank account is debited but the POS terminal fails to confirm receipt due to a local cellular network interruption, NPCI and RBI guidelines govern automatic payment reversals. In over 95% of cases, funds are automatically reversed to the customer&apos;s source account within two (2) hours.
            </li>
            <li>
              <strong>T+1 Statutory Timelines:</strong> In instances of delayed interbank clearing, the maximum statutory turnaround time for failed UPI transaction refunds is T+1 business days. CafeGrow&apos;s support desk assists both merchants and patrons with instant bank transaction reference numbers (RRN / UTR) to expedite manual banking inquiries.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            6. Fraud Prevention & Chargeback Governance
          </h2>
          <p>
            To protect the integrity of our merchant network, CafeGrow actively monitors payment anomalies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Chargeback Inquiries:</strong> In the event of an unverified chargeback filed by a consumer credit card issuer, CafeGrow provides the merchant partner with tamper-proof digital order logs, tableside QR scan timestamps, and itemized receipt histories to contest fraudulent claims.
            </li>
            <li>
              <strong>Abuse of Refund Guarantees:</strong> We reserve the right to decline refund requests from accounts exhibiting demonstrable bad faith, repeated chargeback abuse, or deliberate violations of our Acceptable Use Policy.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            7. Step-by-Step Refund Request Submission Protocol
          </h2>
          <p>
            To initiate a formal refund or cancellation inquiry:
          </p>
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-[#1b120c]">Merchant Billing & Settlements Desk</div>
            <div><strong>Company:</strong> {siteConfig.legalEntity}</div>
            <div><strong>Official Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#c26d38] underline">{siteConfig.email}</a></div>
            <div><strong>Telephone:</strong> {siteConfig.phoneFormatted}</div>
            <div><strong>Operational Center:</strong> Jaipur, Rajasthan, India</div>
            <p className="pt-2 text-xs text-[#705e52]">
              Please include your registered establishment name, registered phone number, GSTIN (if applicable), and invoice reference. All requests are acknowledged within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
