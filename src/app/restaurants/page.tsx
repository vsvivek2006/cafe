import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Restaurants Directory — 54 Cities | CafeGrow",
  description:
    "Explore the comprehensive directory of restaurants across 54 major Indian cities. Discover verified spots, digital QR menus, and tech solutions.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/restaurants`,
  },
  openGraph: {
    title: "All India Restaurants Directory — 54 Cities | CafeGrow",
    description: "Discover verified restaurants across 54 Indian cities. Powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/restaurants`,
  },
};

export default function NationalRestaurantsPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Restaurants"
      sectorSlug="restaurants"
      singularSectorName="Restaurant"
      heroHeadline="All India Restaurants Directory"
      heroSubheadline="Discover verified restaurants, digital QR menus, and cutting-edge hospitality management software across 54 major Indian cities."
    />
  );
}
