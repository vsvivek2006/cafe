import Link from "next/link";
import { Coffee, Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 mx-auto flex items-center justify-center text-[#c26d38] shadow-sm">
          <Coffee className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#c26d38] uppercase tracking-wider">
            Page Not Found (404)
          </span>
          <h1 className="text-3xl font-black text-[#1b120c]">
            Looks Like This Cup is Empty!
          </h1>
          <p className="text-xs sm:text-sm text-[#6e5f54] leading-relaxed">
            The page you are looking for might have been moved, renamed, or is currently brewing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-[#c26d38] text-white hover:bg-[#a85827] transition shadow"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/cafes/jaipur"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border border-[#d6c7b7] text-[#1b120c] hover:bg-[#f4eee5] transition"
          >
            <Search className="w-4 h-4 text-[#c26d38]" />
            <span>Browse Jaipur Cafes</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
