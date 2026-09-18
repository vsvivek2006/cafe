import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Cafe Directory — 54 Cities & Local Coffee Spots | CafeGrow",
  description:
    "Explore the comprehensive directory of cafes across 54 major Indian cities. Discover specialty coffee bars, rooftop terraces, and work-friendly cafes in Jaipur, Delhi, Mumbai, Bangalore, and beyond.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/cafes`,
  },
  openGraph: {
    title: "All India Cafe Directory — 54 Cities | CafeGrow",
    description:
      "Discover the best cafes, coffee shops, and roasteries across 54 Indian cities. Verified local directories powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/cafes`,
  },
};

export default function NationalCafesPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Cafes"
      sectorSlug="cafes"
      singularSectorName="Cafe"
      heroHeadline="All India Cafe & Coffee Roasters Directory"
      heroSubheadline="Discover specialty coffee roasteries, artisanal bakeries, rooftop cafes, and co-working hubs across 54 major Indian cities. Contactless QR ordering, fast POS billing, and 0% commission takeaway."
    />
  );
}
