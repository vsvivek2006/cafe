import { Metadata } from "next";
import { ownerSolutions } from "@/data/ownerSolutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const solution = ownerSolutions["hotel-local-seo"];

export const metadata: Metadata = {
  title: solution?.metaTitle || "CafeGrow",
  description: solution?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${solution?.slug || "hotel-local-seo"}`,
  },
  openGraph: {
    title: solution?.metaTitle || "CafeGrow",
    description: solution?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${solution?.slug || "hotel-local-seo"}`,
  },
};

export default function HotelLocalSeoPage() {
  if (!solution) return null;
  return <SolutionPageTemplate solution={solution} />;
}
