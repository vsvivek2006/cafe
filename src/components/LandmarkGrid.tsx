import React from "react";
import Link from "next/link";
import { jaipurLandmarks } from "@/data/jaipurLandmarks";
import { Landmark, ArrowRight, Compass } from "lucide-react";

export default function LandmarkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {jaipurLandmarks.map((lm) => (
        <Link
          key={lm.slug}
          href={`/cafes/jaipur/landmarks/${lm.slug}`}
          className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
        >
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#8a5d3b] mb-2">
              <span className="font-semibold bg-[#f4eee5] px-2.5 py-0.5 rounded-full">
                {lm.category}
              </span>
              <span className="text-[#8a7a70]">Near {lm.nearbyLocality}</span>
            </div>

            <h3 className="text-lg font-bold text-[#1b120c] group-hover:text-[#c26d38] transition flex items-center justify-between">
              <span>Cafes Near {lm.name}</span>
              <ArrowRight className="w-4 h-4 text-[#c26d38] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>

            <p className="text-xs text-[#6e5f54] mt-1.5 line-clamp-2 leading-relaxed">
              {lm.tagline}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#f0e7dc] flex items-center justify-between text-xs text-[#a85827] font-semibold">
            <span>Explore Cafes Near Landmark</span>
            <span>→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
