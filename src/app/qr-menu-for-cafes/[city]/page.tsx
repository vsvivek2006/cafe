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

  const title = `QR Code Digital Menu for Cafes in ${city.name} | CafeGrow`;
  const description = `Upgrade your cafe in ${city.name} with contactless QR menus. Sub-3s billing, dynamic UPI QR payments, and zero app downloads for patrons.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.discoveryDomain}/qr-menu-for-cafes/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.discoveryDomain}/qr-menu-for-cafes/${city.slug}`,
    },
  };
}

export default async function QrMenuCafesCityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <SoftwareCityTemplate
      softwareTitle="QR Menu for Cafes"
      softwareSlug="qr-menu-for-cafes"
      categoryName="Cafes"
      city={city}
    />
  );
}
