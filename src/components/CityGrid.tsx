"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { cities, CityData } from "@/data/cities";
import { Search, MapPin, Coffee, ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export default function CityGrid() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "North", "West", "South", "East", "Central", "Northeast"];

  const filteredCities = useMemo(() => {
    return cities.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.state.toLowerCase().includes(search.toLowerCase()) ||
        c.popularHubs.some((h) => h.toLowerCase().includes(search.toLowerCase()));

      const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [search, selectedRegion]);

  return (
    <div className="w-full space-y-6">
      {/* Search & Region Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a7a70]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by city, state, or hub..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d6c7b7] bg-white text-sm text-[#1b120c] focus:outline-none focus:ring-2 focus:ring-[#c26d38]"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition ${
                selectedRegion === region
                  ? "bg-[#1b120c] text-white"
                  : "bg-[#f4eee5] text-[#6e5f54] hover:bg-[#ede3d5] hover:text-[#1b120c]"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Results Counter */}
      <div className="flex items-center justify-between text-xs text-[#7d6f65]">
        <span>
          Showing <strong>{filteredCities.length}</strong> of {cities.length} cities across India
        </span>
        {selectedRegion !== "All" && (
          <button
            onClick={() => setSelectedRegion("All")}
            className="text-[#c26d38] font-semibold hover:underline"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* 54-City Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCities.map((city) => (
          <div
            key={city.slug}
            className={`group rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between ${
              city.isLaunchMarket
                ? "bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 border-amber-300 shadow-md"
                : "bg-white border-[#e2d6c7] hover:border-[#c26d38] hover:shadow-md"
            }`}
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-semibold text-[#8a5d3b] bg-[#f4eee5] px-2.5 py-0.5 rounded-full">
                  {city.state} • {city.tier}
                </span>

                {city.isLaunchMarket ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-amber-700" />
                    Launch Market
                  </span>
                ) : (
                  <span className="text-[10px] text-[#8a7a70]">{city.region} India</span>
                )}
              </div>

              {/* City Title */}
              <Link href={`/cafes/${city.slug}`} className="group-hover:text-[#c26d38] transition">
                <h3 className="text-xl font-bold text-[#1b120c] flex items-center justify-between">
                  <span>{city.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#c26d38]" />
                </h3>
              </Link>

              {/* Tagline */}
              <p className="text-xs text-[#6e5f54] mt-1.5 line-clamp-2 leading-relaxed">
                {city.tagline}
              </p>

              {/* Hubs tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {city.popularHubs.slice(0, 3).map((hub) => (
                  <span
                    key={hub}
                    className="text-[10px] bg-[#f7f4ee] border border-[#ede3d5] text-[#5c4d42] px-2 py-0.5 rounded-md"
                  >
                    {hub}
                  </span>
                ))}
                {city.popularHubs.length > 3 && (
                  <span className="text-[10px] text-[#8a7a70] self-center">
                    +{city.popularHubs.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-5 pt-3.5 border-t border-[#f0e7dc] flex items-center justify-between text-xs">
              <Link
                href={`/cafes/${city.slug}`}
                className="font-bold text-[#1b120c] hover:text-[#c26d38] flex items-center gap-1"
              >
                <Coffee className="w-3.5 h-3.5 text-[#c26d38]" />
                <span>Explore Cafes</span>
              </Link>

              <Link
                href={`/cafe-software/${city.slug}`}
                className="text-[11px] font-semibold text-[#8a5d3b] hover:text-[#1b120c] flex items-center gap-1"
              >
                <Building2 className="w-3 h-3" />
                <span>Software in {city.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
