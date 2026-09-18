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

  const title = `Best Dhabas in ${area.name}, Jaipur (2026 Guide) | CafeGrow`;
  const description = `Discover top dhabas, dining spots, and tech solutions in ${area.name}, Jaipur. Real neighborhood context powered by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/dhabas/jaipur/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/dhabas/jaipur/${area.slug}`,
    },
  };
}

export default async function DhabasAreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = getJaipurAreaBySlug(areaSlug);
  if (!area) notFound();

  return (
    <DirectoryAreaTemplate
      sectorName="Dhabas"
      sectorSlug="dhabas"
      singularSectorName="Dhaba"
      area={area}
    />
  );
}
