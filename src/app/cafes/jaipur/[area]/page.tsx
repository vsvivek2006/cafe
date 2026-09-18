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

  const title = `Best Cafes in ${area.name}, Jaipur (2026 Guide) | CafeGrow`;
  const description = `Explore the top cafes in ${area.name}, Jaipur. Discover specialty coffee roasters, work-friendly cafes, and cafe POS technology powered by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafes/jaipur/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/cafes/jaipur/${area.slug}`,
    },
  };
}

export default async function CafeJaipurAreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = getJaipurAreaBySlug(areaSlug);
  if (!area) notFound();

  return (
    <DirectoryAreaTemplate
      sectorName="Cafes"
      sectorSlug="cafes"
      singularSectorName="Cafe"
      area={area}
    />
  );
}
