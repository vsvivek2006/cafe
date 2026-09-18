import { Metadata } from "next";
import { businessCategories } from "@/data/businessCategories";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const category = businessCategories["guest-house"];

export const metadata: Metadata = {
  title: category?.metaTitle || "CafeGrow",
  description: category?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${category?.slug || "guest-house"}`,
  },
  openGraph: {
    title: category?.metaTitle || "CafeGrow",
    description: category?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${category?.slug || "guest-house"}`,
  },
};

export default function GuestHouseCategoryPage() {
  if (!category) return null;
  return <CategoryPageTemplate category={category} />;
}
