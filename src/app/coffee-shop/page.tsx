import { Metadata } from "next";
import { businessCategories } from "@/data/businessCategories";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const category = businessCategories["coffee-shop"];

export const metadata: Metadata = {
  title: category?.metaTitle || "CafeGrow",
  description: category?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${category?.slug || "coffee-shop"}`,
  },
  openGraph: {
    title: category?.metaTitle || "CafeGrow",
    description: category?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${category?.slug || "coffee-shop"}`,
  },
};

export default function CoffeeShopCategoryPage() {
  if (!category) return null;
  return <CategoryPageTemplate category={category} />;
}
