import React from "react";
import Link from "next/link";
import { Coffee, Search, Compass, MapPin } from "lucide-react";

interface CustomerDiscoveryCardProps {
  currentCity?: string;
}

export default function CustomerDiscoveryCard({ currentCity = "Jaipur" }: CustomerDiscoveryCardProps) {
  return (
    <div className="rounded-2xl bg-[#faf7f2] border border-[#e2d6c7] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4eee5] text-[#a85827] text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#c26d38]" />
            <span>Discover Top Cafes in {currentCity}</span>
          </div>
          <h3 className="text-xl font-bold text-[#1b120c]">
            Explore Handpicked Coffee Bars, Rooftops & Work Cafes
          </h3>
          <p className="text-xs sm:text-sm text-[#6e5f54] max-w-xl leading-relaxed">
            Looking for authentic artisanal espresso, quiet work-friendly seating with high-speed WiFi, or romantic rooftop dining? Browse verified cafe guides curated by local coffee enthusiasts.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cafes/jaipur"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1b120c] text-white hover:bg-[#2d1e14] transition"
          >
            <MapPin className="w-3.5 h-3.5 text-[#e08e45]" />
            <span>Browse Jaipur Hub</span>
          </Link>
          <Link
            href="/cafes"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[#d6c7b7] text-[#1b120c] hover:bg-[#f4eee5] transition"
          >
            <Search className="w-3.5 h-3.5 text-[#a85827]" />
            <span>All 50+ Cities</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
