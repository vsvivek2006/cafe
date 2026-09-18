import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { OwnerSolutionData } from "@/data/ownerSolutions";

interface SolutionFeatureCardProps {
  solution: OwnerSolutionData;
}

export default function SolutionFeatureCard({ solution }: SolutionFeatureCardProps) {
  return (
    <div className="group rounded-2xl bg-white border border-[#e2d6c7] hover:border-[#c26d38] p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-200">
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f4eee5] text-[#8a5d3b] text-xs font-semibold mb-3">
          <Zap className="w-3.5 h-3.5 text-[#c26d38]" />
          <span>{solution.badge}</span>
        </div>

        <h3 className="text-xl font-bold text-[#1b120c] group-hover:text-[#c26d38] transition leading-snug">
          {solution.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#6e5f54] mt-2 leading-relaxed">
          {solution.heroSubhead}
        </p>

        {/* ROI Highlight */}
        <div className="mt-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-900 flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>ROI: {solution.roiImpact}</span>
        </div>

        {/* Top Benefits */}
        <ul className="mt-4 space-y-1.5 text-xs text-[#5c4d42]">
          {solution.coreBenefits.slice(0, 2).map((benefit, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-[#c26d38] font-bold">•</span>
              <span>
                <strong>{benefit.title}:</strong> {benefit.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-[#f0e7dc] flex items-center justify-between">
        <Link
          href={`/${solution.slug}`}
          className="text-xs font-bold text-[#1b120c] group-hover:text-[#c26d38] flex items-center gap-1.5"
        >
          <span>Explore Solution</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-[#8a7a70]">{solution.keyFeatures.length} features</span>
      </div>
    </div>
  );
}
