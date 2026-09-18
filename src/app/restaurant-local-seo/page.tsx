import { Metadata } from "next";
import { ownerSolutions } from "@/data/ownerSolutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const solution = ownerSolutions["restaurant-local-seo"];

export const metadata: Metadata = {
  title: solution?.metaTitle || "CafeGrow",
  description: solution?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${solution?.slug || "restaurant-local-seo"}`,
  },
  openGraph: {
    title: solution?.metaTitle || "CafeGrow",
    description: solution?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${solution?.slug || "restaurant-local-seo"}`,
  },
};

export default function RestaurantLocalSeoPage() {
  if (!solution) return null;
  return <SolutionPageTemplate solution={solution} />;
}
