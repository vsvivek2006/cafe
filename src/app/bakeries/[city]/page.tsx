import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import DirectoryCityTemplate from "@/components/DirectoryCityTemplate";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Best Bakeries in ${city.name} (2026 Guide) | CafeGrow`;
  const description = `Explore top bakeries, dining spots, and bakery management solutions in ${city.name}. Verified local directory by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/bakeries/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/bakeries/${city.slug}`,
    },
  };
}

export default async function BakeriesCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  return (
    <DirectoryCityTemplate
      sectorName="Bakeries"
      sectorSlug="bakeries"
      singularSectorName="Bakery"
      city={city}
    />
  );
}
