import { Metadata } from "next";
import { ownerSolutions } from "@/data/ownerSolutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const solution = ownerSolutions["management-software"];

export const metadata: Metadata = {
  title: solution?.metaTitle || "CafeGrow",
  description: solution?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${solution?.slug || "management-software"}`,
  },
  openGraph: {
    title: solution?.metaTitle || "CafeGrow",
    description: solution?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${solution?.slug || "management-software"}`,
  },
};

export default function ManagementSoftwarePage() {
  if (!solution) return null;
  return <SolutionPageTemplate solution={solution} />;
}
