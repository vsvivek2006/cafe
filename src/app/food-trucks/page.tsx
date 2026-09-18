import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Food Trucks Directory — 54 Cities | CafeGrow",
  description:
    "Explore mobile food trucks, night market kiosks, and pop-up eateries across 54 Indian cities. Dynamic QR ordering and location updates by CafeGrow.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/food-trucks`,
  },
  openGraph: {
    title: "All India Food Trucks Directory — 54 Cities | CafeGrow",
    description: "Discover mobile food trucks and street gourmet across 54 Indian cities. Powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/food-trucks`,
  },
};

export default function NationalFoodTrucksPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Food Trucks"
      sectorSlug="food-trucks"
      singularSectorName="Food Truck"
      heroHeadline="All India Food Trucks & Mobile Gourmet Directory"
      heroSubheadline="Discover mobile food trucks, night market kiosks, and gourmet street trailers across 54 Indian cities. Sidewalk QR ordering, cellular POS billing, and zero platform commissions."
    />
  );
}
