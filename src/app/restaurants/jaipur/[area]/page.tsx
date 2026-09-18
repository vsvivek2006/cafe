import { Metadata } from "next";
import { notFound } from "next/navigation";
import { jaipurAreas, getJaipurAreaBySlug } from "@/data/jaipurAreas";
import DirectoryAreaTemplate from "@/components/DirectoryAreaTemplate";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return jaipurAreas.map((a) => ({
    area: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getJaipurAreaBySlug(areaSlug);
  if (!area) return {};

  const title = `Best Restaurants in ${area.name}, Jaipur (2026 Guide) | CafeGrow`;
  const description = `Discover top restaurants, dining spots, and tech solutions in ${area.name}, Jaipur. Real neighborhood context powered by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/restaurants/jaipur/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/restaurants/jaipur/${area.slug}`,
    },
  };
}

export default async function RestaurantsAreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = getJaipurAreaBySlug(areaSlug);
  if (!area) notFound();

  return (
    <DirectoryAreaTemplate
      sectorName="Restaurants"
      sectorSlug="restaurants"
      singularSectorName="Restaurant"
      area={area}
    />
  );
}
