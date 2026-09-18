"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  Sparkles,
  Store,
  MapPin,
  Utensils,
  Hotel,
  Coffee,
  Flame,
  Truck,
  Cake,
  Building2,
  QrCode,
  Layers,
  Smartphone,
  TrendingUp,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);

  const businessCategoriesNav = [
    { title: "Restaurants", href: "/restaurant", desc: "Fine dining, casual, family & rooftop", icon: Utensils },
    { title: "Hotels & Stays", href: "/hotel", desc: "In-room QR dining & hotel restaurants", icon: Hotel },
    { title: "Dhabas & Highway", href: "/dhaba", desc: "Highway eateries & high-speed billing", icon: Flame },
    { title: "Cafes & Coffee", href: "/cafe", desc: "Specialty roasters & barista customizers", icon: Coffee },
    { title: "Cloud Kitchens", href: "/cloud-kitchen", desc: "0% commission multi-brand virtual kitchens", icon: Truck },
    { title: "Bakeries", href: "/bakery", desc: "Celebration cake pre-orders & retail POS", icon: Cake },
  ];

  const productSolutionsNav = [
    { title: "QR Code Menu", href: "/qr-menu", desc: "Contactless digital menus with instant sync", icon: QrCode },
    { title: "Digital Menu Platform", href: "/digital-menu", desc: "Visual storytelling, modifiers & dayparts", icon: Layers },
    { title: "QR Table Ordering", href: "/qr-ordering", desc: "Scan, order & pay from table in seconds", icon: Smartphone },
    { title: "Management Software", href: "/management-software", desc: "Cloud operations, KOT & inventory control", icon: Building2 },
    { title: "Local SEO Dominance", href: "/restaurant-local-seo", desc: "Rank #1 on Google Maps 3-pack", icon: Search },
    { title: "Automated Marketing", href: "/restaurant-marketing", desc: "WhatsApp loyalty & review generator", icon: TrendingUp },
  ];

  const exploreDirectories = [
    { title: "Restaurants Directory", href: "/restaurants", desc: "Find verified dining spots across India" },
    { title: "Hotels & Resorts", href: "/hotels", desc: "In-room dining & luxury stays" },
    { title: "Highway Dhabas", href: "/dhabas", desc: "Authentic tandoori & highway food" },
    { title: "Cafes & Coffee Shops", href: "/cafes", desc: "Specialty coffee, rooftop & wifi cafes" },
    { title: "Jaipur Food Guide", href: "/restaurants/jaipur", desc: "C Scheme, Malviya Nagar, Raja Park & more" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3a2618]/40 bg-[#1b120c]/95 backdrop-blur-md text-[#faf7f2]">
      {/* Top Micro-Bar */}
      <div className="bg-[#120b06] border-b border-[#2d1e14] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-[#d6814b]">
            <span className="inline-flex items-center gap-1 font-medium text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Jaipur Launch • Expanding to 50+ Indian Cities</span>
            </span>
            <span className="hidden md:inline text-[#665449]">|</span>
            <span className="hidden md:inline text-[#bcaea5]">
              Parent: <strong className="text-white font-semibold">{siteConfig.legalEntity}</strong>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 text-[#d6814b] hover:text-amber-400 transition"
            >
              <Phone className="w-3 h-3" />
              <span className="font-semibold">{siteConfig.phoneFormatted}</span>
            </a>
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#c26d38] to-[#e08e45] hover:brightness-110 text-white px-2.5 py-0.5 rounded text-[11px] font-bold transition shadow-sm"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="CafeGrow Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                Cafe<span className="text-emerald-500">Grow</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#a8988e] block font-medium">
                Food & Hospitality Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Who Can Use (Businesses) Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessesDropdownOpen(true)}
              onMouseLeave={() => setBusinessesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#e4dacd] hover:text-white rounded-lg hover:bg-white/5 transition">
                <span>Who Can Use</span>
                <ChevronDown className="w-4 h-4 text-[#a8988e]" />
              </button>

              {businessesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[440px] rounded-2xl bg-[#1b120c] border border-[#3a2618] p-3 shadow-2xl shadow-black/90">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a8988e] px-2.5 py-1">
                    Food & Hospitality Businesses
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    {businessCategoriesNav.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="p-2.5 rounded-xl hover:bg-[#2d1e14] transition group block"
                        >
                          <div className="flex items-center gap-2">
                            <IconComp className="w-4 h-4 text-[#e08e45] group-hover:scale-110 transition-transform" />
                            <div className="text-sm font-semibold text-white group-hover:text-[#e08e45] transition">
                              {item.title}
                            </div>
                          </div>
                          <div className="text-xs text-[#a8988e] mt-1 line-clamp-1">{item.desc}</div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#3a2618] flex items-center justify-between px-2">
                    <Link
                      href="/for-businesses"
                      className="text-xs font-semibold text-[#e08e45] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All 21 Business Categories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#e4dacd] hover:text-white rounded-lg hover:bg-white/5 transition">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-[#a8988e]" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[440px] rounded-2xl bg-[#1b120c] border border-[#3a2618] p-3 shadow-2xl shadow-black/90">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a8988e] px-2.5 py-1">
                    Core Digital Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    {productSolutionsNav.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="p-2.5 rounded-xl hover:bg-[#2d1e14] transition group block"
                        >
                          <div className="flex items-center gap-2">
                            <IconComp className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition">
                              {item.title}
                            </div>
                          </div>
                          <div className="text-xs text-[#a8988e] mt-1 line-clamp-1">{item.desc}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Explore Directories */}
            <div
              className="relative"
              onMouseEnter={() => setExploreDropdownOpen(true)}
              onMouseLeave={() => setExploreDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#e4dacd] hover:text-white rounded-lg hover:bg-white/5 transition">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4 text-[#a8988e]" />
              </button>

              {exploreDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-[#1b120c] border border-[#3a2618] p-3 shadow-2xl shadow-black/90">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a8988e] px-2.5 py-1">
                    Discovery Directories
                  </div>
                  <div className="grid grid-cols-1 gap-1 mt-1">
                    {exploreDirectories.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-[#2d1e14] transition group block"
                      >
                        <div className="text-sm font-semibold text-white group-hover:text-[#e08e45] transition">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#a8988e] mt-0.5">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className="px-3.5 py-2 text-sm font-medium text-[#e4dacd] hover:text-white rounded-lg hover:bg-white/5 transition"
            >
              <span>Guides & Blog</span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-medium text-[#e4dacd] hover:text-white rounded-lg hover:bg-white/5 transition"
            >
              <span>About</span>
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={siteConfig.links.login}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#d8cbbf] hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition"
            >
              Sign In
            </a>
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-lg shadow-amber-950/50 hover:brightness-110 active:scale-95 transition"
            >
              <Store className="w-3.5 h-3.5" />
              <span>Get Your Business on CafeGrow</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#d8cbbf] hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#150e08] border-b border-[#3a2618] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Quick Business Categories */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#a8988e] px-2">
              Who Can Use CafeGrow
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {businessCategoriesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-[#1b120c] border border-[#2d1e14] text-xs font-semibold text-white hover:text-[#e08e45]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#a8988e] px-2">
              Core Products
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <Link
                href="/qr-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-[#1b120c] border border-[#2d1e14] text-xs text-[#e4dacd]"
              >
                QR Menu
              </Link>
              <Link
                href="/digital-menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-[#1b120c] border border-[#2d1e14] text-xs text-[#e4dacd]"
              >
                Digital Menu
              </Link>
              <Link
                href="/qr-ordering"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-[#1b120c] border border-[#2d1e14] text-xs text-[#e4dacd]"
              >
                QR Ordering
              </Link>
              <Link
                href="/management-software"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-[#1b120c] border border-[#2d1e14] text-xs text-[#e4dacd]"
              >
                Management POS
              </Link>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-1 pt-2 border-t border-[#2d1e14]">
            <Link
              href="/restaurants"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 text-sm text-[#e4dacd] hover:text-white"
            >
              Explore Restaurants
            </Link>
            <Link
              href="/hotels"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 text-sm text-[#e4dacd] hover:text-white"
            >
              Explore Hotels
            </Link>
            <Link
              href="/dhabas"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 text-sm text-[#e4dacd] hover:text-white"
            >
              Explore Dhabas
            </Link>
            <Link
              href="/cafes"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 text-sm text-[#e4dacd] hover:text-white"
            >
              Explore Cafes (50+ Cities)
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 text-sm text-[#e4dacd] hover:text-white"
            >
              Guides & Knowledge Base
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-[#2d1e14] space-y-2">
            <a
              href={siteConfig.links.getStarted}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#c26d38] to-[#e08e45] text-white shadow-lg"
            >
              <Store className="w-4 h-4" />
              <span>Get Your Business on CafeGrow</span>
            </a>
            <div className="text-center text-xs text-[#a8988e]">
              Direct software at{" "}
              <a href={siteConfig.platformDomain} className="text-white underline">
                cafegrow.in
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
