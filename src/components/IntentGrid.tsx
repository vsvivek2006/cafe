import React from "react";
import Link from "next/link";
import { jaipurIntents } from "@/data/jaipurIntents";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntentGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {jaipurIntents.map((intent) => (
        <Link
          key={intent.slug}
          href={`/cafes/jaipur/types/${intent.slug}`}
          className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
        >
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-full mb-3">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{intent.heroBadge}</span>
            </div>

            <h3 className="text-lg font-bold text-[#1b120c] group-hover:text-[#c26d38] transition leading-snug">
              {intent.shortName}
            </h3>

            <p className="text-xs text-[#6e5f54] mt-2 line-clamp-3 leading-relaxed">
              {intent.tagline}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#f0e7dc] flex items-center justify-between text-xs text-[#a85827] font-semibold group-hover:text-[#c26d38]">
            <span>Browse {intent.shortName}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  );
}
