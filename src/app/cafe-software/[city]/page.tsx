import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import SoftwareCityTemplate from "@/components/SoftwareCityTemplate";
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

  const title = `Best Cafe POS & Ordering Software in ${city.name} | CafeGrow`;
  const description = `All-in-one cafe POS and management system in ${city.name}. Zero hardware lock-in, dynamic QR ordering, and offline billing support.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafe-software/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/cafe-software/${city.slug}`,
    },
  };
}

export default async function CafeSoftwareCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <SoftwareCityTemplate
      softwareTitle="Cafe Software"
      softwareSlug="cafe-software"
      categoryName="Cafes"
      city={city}
    />
  );
}
