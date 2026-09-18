import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import DirectoryCityTemplate from "@/components/DirectoryCityTemplate";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities
    .filter((c) => c.slug !== "jaipur")
    .map((c) => ({
      city: c.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Best Cafes in ${city.name} (2026 Guide) — Coffee Shops & Roasters | CafeGrow`;
  const description = `Explore top cafes, coffee roasters, and cafe management solutions in ${city.name}. Verified local directory by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafes/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/cafes/${city.slug}`,
    },
  };
}

export default async function CafeCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  return (
    <DirectoryCityTemplate
      sectorName="Cafes"
      sectorSlug="cafes"
      singularSectorName="Cafe"
      city={city}
    />
  );
}
