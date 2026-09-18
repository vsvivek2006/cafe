import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Coffee, ArrowRight, ShieldCheck, Zap, Sparkles, MessageCircle } from "lucide-react";

interface OwnerCtaCardProps {
  locationName?: string;
  solutionHighlight?: string;
  variant?: "hero" | "banner" | "compact";
}

export default function OwnerCtaCard({
  locationName = "Your City",
  solutionHighlight = "QR menus, fast POS billing & local discovery",
  variant = "banner",
}: OwnerCtaCardProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-[#1b120c] to-[#2d1e14] text-white p-6 border border-[#3a2618] shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-[#e08e45] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>For Cafe Owners in {locationName}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Supercharge Your Cafe Revenue with CafeGrow
        </h3>
        <p className="text-xs text-[#c5b8b0] mb-5 leading-relaxed">
          Get your digital QR menu, 3-second POS billing, and 0% commission direct ordering system live today.
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={siteConfig.links.getStarted}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#c26d38] hover:bg-[#a85827] text-white shadow transition"
          >
            <span>Get Started on cafegrow.in</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={siteConfig.links.bookDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[#4a3222] text-[#e4dacd] hover:text-white hover:border-[#c26d38] transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Demo</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#120b06] via-[#1b120c] to-[#2b180d] text-white border border-[#3a2618] p-8 md:p-12 shadow-2xl">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c26d38]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3a2618]/60 border border-[#523722] text-xs font-semibold text-[#e08e45]">
          <Coffee className="w-3.5 h-3.5 text-amber-400" />
          <span>Are You a Cafe Owner in {locationName}?</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Stop Paying 30% Commissions. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e08e45] via-[#f59e0b] to-[#fcd34d]">
            Own Your Cafe's Digital Operations & Growth.
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-sm sm:text-base text-[#c5b8b0] max-w-2xl mx-auto leading-relaxed">
          CafeGrow equips your cafe with {solutionHighlight}. Join hundreds of smart cafe owners across Jaipur and India who have scaled table turnover, cut order wait times, and built a dedicated direct customer base.
        </p>

        {/* Key Value Points */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-[#e4dacd]">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>0% Commission Direct Orders</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fast 2-Hour Digital Onboarding</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
            <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Works on Any Tablet or Phone</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.links.getStarted}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#c26d38] via-[#d6814b] to-[#e08e45] text-white shadow-xl shadow-amber-950/60 hover:brightness-110 active:scale-95 transition"
          >
            <span>Get Started Free on cafegrow.in</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.links.bookDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-[#241810] border border-[#4a3222] text-white hover:border-[#c26d38] transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat with Growth Advisor</span>
          </a>
        </div>

        <div className="text-[11px] text-[#8a7a70]">
          A product by <strong className="text-[#a8988e]">{siteConfig.legalEntity}</strong> • Call us directly at{" "}
          <a href={`tel:${siteConfig.phone}`} className="text-white hover:underline">
            {siteConfig.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
