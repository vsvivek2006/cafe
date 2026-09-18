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

  const title = `Best Restaurants in ${city.name} (2026 Guide) | CafeGrow`;
  const description = `Explore top restaurants, dining spots, and restaurant management solutions in ${city.name}. Verified local directory by CafeGrow.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/restaurants/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/restaurants/${city.slug}`,
    },
  };
}

export default async function RestaurantsCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  return (
    <DirectoryCityTemplate
      sectorName="Restaurants"
      sectorSlug="restaurants"
      singularSectorName="Restaurant"
      city={city}
    />
  );
}
