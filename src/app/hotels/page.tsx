import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Hotels Directory — 54 Cities | CafeGrow",
  description:
    "Explore verified hotels, resorts, and in-room QR dining solutions across 54 Indian cities. Powered by CafeGrow.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/hotels`,
  },
  openGraph: {
    title: "All India Hotels Directory — 54 Cities | CafeGrow",
    description: "Discover verified hotels and resorts across 54 Indian cities. Powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/hotels`,
  },
};

export default function NationalHotelsPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Hotels"
      sectorSlug="hotels"
      singularSectorName="Hotel"
      heroHeadline="All India Hotels & Stays Directory"
      heroSubheadline="Discover verified hotels, luxury resorts, boutique stays, and seamless in-room QR dining management across 54 Indian cities."
    />
  );
}
