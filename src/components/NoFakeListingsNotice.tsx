import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Store, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface NoFakeListingsNoticeProps {
  locationName: string;
}

export default function NoFakeListingsNotice({ locationName }: NoFakeListingsNoticeProps) {
  return (
    <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-[#fffdfa] to-[#faf3e8] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Onboarding Notice • {locationName}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#1b120c]">
            We Believe in 100% Authentic Listings — Zero Scraped or Fake Cafes
          </h3>

          <p className="text-xs sm:text-sm text-[#665547] leading-relaxed">
            CafeGrow never populates directories with auto-scraped, unverified, or outdated listings. Cafes in <strong>{locationName}</strong> are currently being actively verified and onboarded by our local growth team.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#7d6856] pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Direct Owner Verification
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Live Accurate Menus
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Direct Zero-Commission Orders
            </span>
          </div>
        </div>

        <div className="shrink-0 space-y-2.5 w-full sm:w-auto text-center sm:text-left">
          <div className="text-xs font-semibold text-[#8a5d3b]">
            Are you a Cafe Owner in {locationName}?
          </div>
          <Link
            href="/list-your-cafe"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold bg-[#c26d38] hover:bg-[#a85827] text-white shadow transition"
          >
            <Store className="w-3.5 h-3.5" />
            <span>List Your Cafe on CafeGrow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="text-[11px] text-[#998372]">
            Free listing • Setup in under 2 hours
          </div>
        </div>
      </div>
    </div>
  );
}
