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

  const title = `Cafe Management Software in ${city.name} — POS, KOT & Inventory | CafeGrow`;
  const description = `Streamline operations for your cafe in ${city.name}, ${city.state}. Real-time kitchen display, automated inventory tracking, and lightning-fast POS billing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/cafe-management-software/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/cafe-management-software/${city.slug}`,
    },
  };
}

export default async function CafeManagementSoftwareCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <SoftwareCityTemplate
      softwareTitle="Cafe Management Software"
      softwareSlug="cafe-management-software"
      categoryName="Cafes"
      city={city}
    />
  );
}
