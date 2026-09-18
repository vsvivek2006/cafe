import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = items[0]?.url === "/" ? items : [{ name: "Home", url: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.discoveryDomain}${item.url}`,
    })),
  };

  return (
    <div className="w-full py-3">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center text-xs text-[#7d6f65]">
        <ol className="flex items-center flex-wrap gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-[#a85827] hover:text-[#1b120c] transition"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-semibold text-[#1b120c] max-w-[200px] sm:max-w-none truncate">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-[#a85827] hover:text-[#1b120c] transition max-w-[150px] sm:max-w-none truncate"
                  >
                    {item.name}
                  </Link>
                )}

                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-[#b0a297] shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
