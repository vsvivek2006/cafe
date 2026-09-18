import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { title: "Restaurant Management", href: "/restaurant-management-software" },
    { title: "Hotel Management", href: "/hotel-management-software" },
    { title: "Cafe Management", href: "/cafe-management-software" },
    { title: "Dhaba Management", href: "/dhaba-management-software" },
    { title: "QR Menu", href: "/qr-menu" },
    { title: "Digital Menu", href: "/digital-menu" },
    { title: "QR Ordering", href: "/qr-ordering" },
    { title: "POS", href: "/restaurant-pos-software" },
    { title: "Marketing", href: "/restaurant-marketing" },
    { title: "Local SEO", href: "/restaurant-local-seo" },
  ];

  const exploreLinks = [
    { title: "Restaurants", href: "/restaurants" },
    { title: "Hotels", href: "/hotels" },
    { title: "Dhabas", href: "/dhabas" },
    { title: "Cafes", href: "/cafes" },
    { title: "Bakeries", href: "/bakery" },
    { title: "Fast Food", href: "/fast-food" },
    { title: "Cities (50+ Indian Cities)", href: "/cafes" },
    { title: "Jaipur Food Hub", href: "/restaurants/jaipur" },
  ];

  const companyLinks = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy", href: "/privacy-policy" },
    { title: "Terms", href: "/terms" },
    { title: "Refund", href: "/refund-policy" },
  ];

  const businessLinks = [
    { title: "List Your Business", href: siteConfig.links.getStarted, external: true },
    { title: "Get Started", href: siteConfig.links.getStarted, external: true },
    { title: "For Businesses Overview", href: "/for-businesses" },
    { title: "Knowledge Blog & Guides", href: "/blog" },
  ];

  return (
    <footer className="bg-[#120b06] text-[#faf7f2] border-t border-[#2d1e14] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Brand & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2d1e14]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shadow-amber-950/50">
                <img src="/logo.png" alt="CafeGrow Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Cafe<span className="text-emerald-500">Grow</span>
              </span>
            </Link>

            <div className="text-sm font-semibold text-[#e4dacd]">
              Digital Growth, Menu, Ordering & Management Platform
            </div>

            <p className="text-xs text-[#b8aba0] leading-relaxed">
              A product by <strong className="text-white font-bold">{siteConfig.legalEntity}</strong>
            </p>

            <p className="text-xs text-[#8c7e75] leading-relaxed">
              CafeGrow empowers restaurants, hotels, cafes, dhabas, cloud kitchens, bakeries, and all food & hospitality businesses with contactless QR menus, sub-3-second POS billing, direct ordering, automated WhatsApp marketing, and hyper-local SEO.
            </p>

            <div className="space-y-1.5 text-xs text-[#b8aba0] pt-2">
              <div>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-[#e08e45] underline">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                Phone:{" "}
                <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-[#e08e45] font-semibold">
                  {siteConfig.phoneFormatted}
                </a>
              </div>
              <div>
                Headquarters: <span className="text-[#d8cbbf]">{siteConfig.headquarters}</span>
              </div>
              <div>
                Coverage: <span className="text-[#d8cbbf]">{siteConfig.expansionMarkets}</span>
              </div>
            </div>
          </div>

          {/* 4 Navigation Columns matching Section 28 */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#e08e45]">Product</h3>
              <ul className="space-y-2 text-xs text-[#c5b8b0]">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Explore */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#e08e45]">Explore</h3>
              <ul className="space-y-2 text-xs text-[#c5b8b0]">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#e08e45]">Company</h3>
              <ul className="space-y-2 text-xs text-[#c5b8b0]">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Business */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#e08e45]">Business</h3>
              <ul className="space-y-2 text-xs text-[#c5b8b0]">
                {businessLinks.map((link) => (
                  <li key={link.title}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-white text-emerald-400 font-semibold transition"
                      >
                        <span>{link.title}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-white transition">
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7e75] gap-4">
          <div>
            &copy; {currentYear} {siteConfig.legalEntity}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Product Application:</span>
            <a
              href={siteConfig.platformDomain}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#e08e45] underline font-semibold inline-flex items-center gap-1"
            >
              <span>cafegrow.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
