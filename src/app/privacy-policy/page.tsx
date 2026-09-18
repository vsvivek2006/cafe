import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | CafeGrow",
  description:
    "Comprehensive Privacy Policy for CafeGrow, a digital operating platform by Growth Service Digital Solution Pvt Ltd. Compliant with the Digital Personal Data Protection (DPDP) Act 2023.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ name: "Privacy Policy", url: "/privacy-policy" }];

  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1b120c]">Privacy Policy</h1>
          <div className="text-xs text-[#8a7a70]">
            Last Updated: September 2026 • Product of {siteConfig.legalEntity}
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#5c4d42] leading-relaxed">
          <p>
            At <strong>CafeGrow</strong> (a proprietary platform developed, operated, and maintained by <strong>{siteConfig.legalEntity}</strong>, hereinafter referred to as &quot;CafeGrow&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible via <code>https://cafegrow.in</code> and <code>https://cafe.growthservice.in</code>, we are deeply committed to protecting the privacy, confidentiality, and data sovereignty of our merchant partners (restaurant, cafe, hotel, dhaba, and bakery operators) as well as end-consumer dining guests.
          </p>
          <p>
            This comprehensive Privacy Policy delineates the precise protocols and principles governing the collection, processing, storage, sharing, and safeguarding of personal data in strict accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and associated statutory regulatory guidelines issued by the Reserve Bank of India (RBI) and the Government of India.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            1. Definitional Framework & Regulatory Roles
          </h2>
          <p>
            To establish unambiguous legal transparency, terms utilized throughout this policy maintain the following statutory definitions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Data Fiduciary:</strong> Refers to <strong>{siteConfig.legalEntity}</strong> when determining the purpose and means of processing merchant partner account information, and refers jointly to our Merchant Partners regarding end-consumer dining data captured during table ordering and digital bill settlement.
            </li>
            <li>
              <strong>Data Principal:</strong> Refers to the natural person to whom the personal data relates, encompassing hospitality business founders, managerial staff, cashier operators, and dining room patrons.
            </li>
            <li>
              <strong>Data Processor:</strong> Refers to CafeGrow in its technical capacity of hosting, routing, transmitting, and analyzing order data on behalf of our Merchant Partners.
            </li>
            <li>
              <strong>Consent Manager:</strong> Refers to technical systems integrated into CafeGrow digital menus that permit Data Principals to give, manage, review, or withdraw consent for data processing.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            2. Customer Data Ownership & Zero Aggregator Exploitation Guarantee
          </h2>
          <p>
            A cornerstone of CafeGrow&apos;s commercial ethos is our strict rejection of the exploitative data practices popularized by third-party food delivery marketplaces. Third-party portals routinely harvest consumer dining habits, mask consumer contact telephone numbers from the restaurant that prepared the meal, and repurpose proprietary data to promote competing commercial dark kitchens or sponsored competitor listings.
          </p>
          <p>
            <strong>CafeGrow operates under a strict Data Sovereignty Guarantee:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Zero Selling or Monetization of Guest Data:</strong> We never sell, rent, monetize, lease, or trade merchant customer records, diner phone numbers, or dining transaction logs to any third-party advertising brokers, programmatic ad exchanges, or marketing aggregators.
            </li>
            <li>
              <strong>Merchant Exclusivity:</strong> All customer information ethically captured during QR menu browsing, dine-in ordering, or direct takeaway settlement belongs exclusively to the respective merchant establishment. The merchant retains perpetual rights to export their customer directory at any time without restriction.
            </li>
            <li>
              <strong>No Cross-Promotional Poaching:</strong> We never utilize customer contact information captured at Merchant Establishment A to market, advertise, or promote Merchant Establishment B.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            3. Categories of Personal Data Collected
          </h2>
          <p>
            We adhere to the statutory principle of Data Minimization, collecting only information strictly necessary to fulfill our software-as-a-service (SaaS) and ordering infrastructure obligations:
          </p>

          <h3 className="text-base font-bold text-[#1b120c] pt-2">A. Merchant Partner Information</h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Authorized Business Representative Name, Designation, and Corporate Identity.</li>
            <li>Registered Establishment Name, Physical Trade Address, City, State, and PIN Code.</li>
            <li>Official Telephone Contact Numbers, WhatsApp Messaging Identifiers, and Email Addresses.</li>
            <li>Statutory Tax & Regulatory Identifiers: Goods and Services Tax Identification Number (GSTIN), Permanent Account Number (PAN), and 14-digit FSSAI Food Hygiene License Number.</li>
            <li>Settlement Banking Details: Bank Account Number, IFSC Code, and Virtual Payment Address (UPI VPA) for automated order settlement.</li>
            <li>System Configuration Logs: Table identifiers, menu items, pricing rules, tax rates, and staff role-based PIN access codes.</li>
          </ul>

          <h3 className="text-base font-bold text-[#1b120c] pt-2">B. End-Consumer Dining Guest Information</h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Mobile Telephone Number: Provided voluntarily by dining guests for the receipt of digital itemized bills, WhatsApp dynamic payment confirmations, and direct loyalty rewards.</li>
            <li>Dining Transaction Details: Ordered items, dietary modifications, timestamps, table numbers, and transaction settlement values.</li>
            <li>Technical Metadata: Browser user-agent strings, device operating systems, screen dimensions, and approximate IP-based location strictly for edge CDN caching and menu rendering optimization.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            4. Purpose Specification & Legal Bases for Processing
          </h2>
          <p>
            CafeGrow processes personal data strictly under lawful grounds identified within Section 4 of the DPDP Act 2023, specifically:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Performance of Contract:</strong> To provision POS cloud billing services, route kitchen order tickets (KOTs) to station displays, process payment settlements, and deliver technical support.
            </li>
            <li>
              <strong>Express Consent:</strong> For sending electronic receipts via WhatsApp or SMS, and for merchants to distribute seasonal anniversary discounts or menu updates to opted-in patrons.
            </li>
            <li>
              <strong>Compliance with Statutory Obligations:</strong> To generate audit-ready GSTR-1 and GSTR-3B tax summaries, print mandatory FSSAI hygiene registration numbers on invoices, and maintain financial records mandated by Indian corporate taxation laws.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            5. Payment Processing Security & Financial Tokenization
          </h2>
          <p>
            CafeGrow strictly refrains from storing sensitive customer payment credentials on our application servers. Specifically:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>No Cardholder Data Storage:</strong> We do not store credit card numbers, debit card numbers, expiration dates, or CVV/CVC security codes.
            </li>
            <li>
              <strong>UPI Dynamic Payments:</strong> Dynamic Unified Payments Interface (UPI) QR codes generated on billing screens adhere to National Payments Corporation of India (NPCI) guidelines. Encrypted payment intent strings communicate directly with authorized payment aggregators and banking gateways.
            </li>
            <li>
              <strong>Settlement Transparency:</strong> All order payments settle directly from the customer&apos;s banking application to the merchant partner&apos;s verified bank account or authorized escrow gateway without platform intermediaries holding customer funds.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            6. Technical Safeguards & Bank-Grade Cloud Infrastructure
          </h2>
          <p>
            CafeGrow employs rigorous administrative, physical, and technical controls to guarantee data confidentiality and system resilience:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>End-to-End Transport Layer Security (TLS 1.3):</strong> All network communications between dining guest mobile browsers, countertop POS terminals, thermal printers, and our cloud cluster are encrypted using modern TLS 1.3 cryptographic protocols.
            </li>
            <li>
              <strong>Database Encryption at Rest:</strong> All database volumes, automated daily backups, and transaction logs are encrypted at rest using AES-256 bit encryption algorithms.
            </li>
            <li>
              <strong>Strict Role-Based Access Control (RBAC):</strong> Access to merchant operational back-office ledgers is restricted by cryptographic tokens and granular permission controls. Floor staff cannot view owner-level profitability or full customer databases without explicit manager authorization.
            </li>
            <li>
              <strong>Geo-Redundant Backup Systems:</strong> Transaction records are mirrored across secure, ISO 27001-certified Indian data centers, guaranteeing 99.99% system availability and complete disaster recovery resilience.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            7. Rights of Data Principals Under the DPDP Act 2023
          </h2>
          <p>
            In compliance with Chapter III of the Digital Personal Data Protection Act 2023, every Data Principal whose information is processed via CafeGrow possesses explicit enforceable rights:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Right to Access Information:</strong> Data Principals may request a clear summary of personal data processed, identities of third-party processing entities, and specific processing purposes.
            </li>
            <li>
              <strong>Right to Correction & Erasure:</strong> Data Principals may request the correction of inaccurate or misleading data, the updating of incomplete records, or the complete erasure of personal data that is no longer necessary for the purpose for which it was collected.
            </li>
            <li>
              <strong>Right of Grievance Redressal:</strong> Data Principals may register complaints with our designated Data Protection Grievance Officer regarding any perceived non-compliance.
            </li>
            <li>
              <strong>Right to Nominate:</strong> Data Principals may nominate any other individual to exercise data rights on their behalf in the event of death or incapacity.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            8. Data Retention & Destruction Protocols
          </h2>
          <p>
            We retain personal data strictly for the duration necessary to accomplish legitimate business purposes or to comply with statutory legal requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Merchant Operational Data:</strong> Retained throughout the duration of the active SaaS subscription agreement, and for a period of up to 8 years following account deactivation to comply with statutory corporate auditing and tax inspection mandates under Indian law.
            </li>
            <li>
              <strong>Diner Communication Logs:</strong> WhatsApp and SMS dispatch logs are retained for 90 days for delivery verification, after which identifying metadata is automatically purged.
            </li>
            <li>
              <strong>Permanent Destruction:</strong> Following the expiry of mandatory statutory retention windows, all electronic records are securely sanitized using cryptographic erasure protocols.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            9. Statutory Grievance Redressal Mechanism & Officer Details
          </h2>
          <p>
            In accordance with Rule 5(9) of the Information Technology Rules, 2011, and the provisions of the DPDP Act 2023, CafeGrow has appointed a dedicated Grievance Redressal Officer. For inquiries, grievances, or rights enforcement requests, contact:
          </p>
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#ebdcd0] space-y-2 text-xs sm:text-sm">
            <div className="font-bold text-[#1b120c]">Grievance Redressal Officer: Legal & Regulatory Affairs</div>
            <div><strong>Parent Company:</strong> {siteConfig.legalEntity}</div>
            <div><strong>Corporate Hub:</strong> Jaipur, Rajasthan, India</div>
            <div><strong>Direct Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#c26d38] underline">{siteConfig.email}</a></div>
            <div><strong>Telephone:</strong> {siteConfig.phoneFormatted}</div>
            <div className="pt-2 text-xs text-[#705e52]">
              All grievances received will be acknowledged within 24 hours and formally investigated and resolved within 15 business days.
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-[#1b120c] pt-4 border-t border-[#ebdcd0]">
            10. Policy Modifications & Periodic Review
          </h2>
          <p>
            We reserve the right to revise this Privacy Policy periodically to reflect technological advancements, operational enhancements, or statutory amendments under Indian law. When material updates are published, the revised date will be displayed at the top of this document, and active merchant partners will receive electronic notification through their administrative management dashboard.
          </p>
        </div>
      </section>
    </div>
  );
}
