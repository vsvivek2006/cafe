import { Metadata } from "next";
import { ownerSolutions } from "@/data/ownerSolutions";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const solution = ownerSolutions["cafe-local-seo"];

export const metadata: Metadata = {
  title: solution.metaTitle,
  description: solution.metaDescription,
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${solution.slug}`,
  },
  openGraph: {
    title: solution.metaTitle,
    description: solution.metaDescription,
    url: `${siteConfig.discoveryDomain}/${solution.slug}`,
  },
};

export default function CafeLocalSeoPage() {
  return <SolutionPageTemplate solution={solution} />;
}
