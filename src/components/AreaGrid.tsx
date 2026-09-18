"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { jaipurAreas, JaipurAreaData } from "@/data/jaipurAreas";
import { MapPin, ArrowUpRight, Search, Sparkles } from "lucide-react";

export default function AreaGrid() {
  const [search, setSearch] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("All");

  const zones = [
    "All",
    "Central Jaipur",
    "South Jaipur",
    "West Jaipur",
    "North Jaipur",
    "Heritage & Suburbs",
  ];

  const filteredAreas = useMemo(() => {
    return jaipurAreas.filter((area) => {
      const matchesSearch =
        area.name.toLowerCase().includes(search.toLowerCase()) ||
        area.keyStreets.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        area.nearbyLandmarks.some((l) => l.toLowerCase().includes(search.toLowerCase()));

      const matchesZone = selectedZone === "All" || area.zone === selectedZone;

      return matchesSearch && matchesZone;
    });
  }, [search, selectedZone]);

  return (
    <div className="w-full space-y-6">
      {/* Search & Zone Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a70]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search locality, street, or landmark..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d6c7b7] bg-white text-sm text-[#1b120c] focus:outline-none focus:ring-2 focus:ring-[#c26d38]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition ${
                selectedZone === zone
                  ? "bg-[#1b120c] text-white"
                  : "bg-[#f4eee5] text-[#6e5f54] hover:bg-[#ede3d5] hover:text-[#1b120c]"
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs text-[#7d6f65]">
        <span>
          Showing <strong>{filteredAreas.length}</strong> of {jaipurAreas.length} Jaipur localities
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/cafes/jaipur/${area.slug}`}
            className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold text-[#8a5d3b] bg-[#f4eee5] px-2.5 py-0.5 rounded-full">
                  {area.zone}
                </span>
                <span className="text-[11px] text-[#8a7a70] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#c26d38]" />
                  <span>Jaipur</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1b120c] group-hover:text-[#c26d38] transition flex items-center justify-between">
                <span>Cafes in {area.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#c26d38]" />
              </h3>

              <p className="text-xs text-[#6e5f54] mt-1.5 line-clamp-2 leading-relaxed">
                {area.tagline}
              </p>

              {/* Streets preview */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {area.keyStreets.slice(0, 3).map((street) => (
                  <span
                    key={street}
                    className="text-[10px] bg-[#faf7f2] border border-[#ede3d5] text-[#5c4d42] px-2 py-0.5 rounded-md"
                  >
                    {street}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f0e7dc] flex items-center justify-between text-xs text-[#a85827] font-semibold group-hover:text-[#c26d38]">
              <span>View Locality Guide & Cafes</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
