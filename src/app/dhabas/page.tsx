import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Dhabas Directory — Highway Eateries & Traditional Spots | CafeGrow",
  description:
    "Explore traditional and highway dhabas across 54 Indian cities and key transit corridors. Fast QR billing and management by CafeGrow.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/dhabas`,
  },
  openGraph: {
    title: "All India Dhabas Directory | CafeGrow",
    description: "Discover authentic dhabas and highway dining spots across India. Powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/dhabas`,
  },
};

export default function NationalDhabasPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Dhabas"
      sectorSlug="dhabas"
      singularSectorName="Dhabas"
      heroHeadline="All India Dhabas & Highway Eateries Directory"
      heroSubheadline="Discover authentic Punjabi, highway, and family dhabas across 54 Indian cities. Rapid counter billing, UPI QR codes, and zero commission ordering."
    />
  );
}
