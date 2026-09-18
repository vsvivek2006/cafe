import { Metadata } from "next";
import { ownerSolutions } from "@/data/ownerSolutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const solution = ownerSolutions["restaurant-ordering-system"];

export const metadata: Metadata = {
  title: solution?.metaTitle || "CafeGrow",
  description: solution?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${solution?.slug || "restaurant-ordering-system"}`,
  },
  openGraph: {
    title: solution?.metaTitle || "CafeGrow",
    description: solution?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${solution?.slug || "restaurant-ordering-system"}`,
  },
};

export default function RestaurantOrderingSystemPage() {
  if (!solution) return null;
  return <SolutionPageTemplate solution={solution} />;
}
