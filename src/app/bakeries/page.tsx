import { Metadata } from "next";
import NationalDirectoryHubTemplate from "@/components/NationalDirectoryHubTemplate";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "All India Bakeries & Patisseries Directory — 54 Cities | CafeGrow",
  description:
    "Explore artisanal bakeries, cake studios, and patisseries across 54 Indian cities. Custom cake pre-orders, batch expiry tracking, and bakery POS by CafeGrow.",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/bakeries`,
  },
  openGraph: {
    title: "All India Bakeries Directory — 54 Cities | CafeGrow",
    description: "Discover verified bakeries and pastry studios across 54 Indian cities. Powered by CafeGrow.",
    url: `${siteConfig.discoveryDomain}/bakeries`,
  },
};

export default function NationalBakeriesPage() {
  return (
    <NationalDirectoryHubTemplate
      sectorName="Bakeries"
      sectorSlug="bakeries"
      singularSectorName="Bakery"
      heroHeadline="All India Bakeries & Patisseries Directory"
      heroSubheadline="Discover artisan bakeries, designer cake shops, and patisseries across 54 Indian cities. Advance cake pre-orders, ingredient batch tracking, and fast touch POS."
    />
  );
}
