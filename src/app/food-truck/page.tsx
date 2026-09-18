import { Metadata } from "next";
import { businessCategories } from "@/data/businessCategories";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { siteConfig } from "@/data/siteConfig";

const category = businessCategories["food-truck"];

export const metadata: Metadata = {
  title: category?.metaTitle || "CafeGrow",
  description: category?.metaDescription || "CafeGrow",
  alternates: {
    canonical: `${siteConfig.discoveryDomain}/${category?.slug || "food-truck"}`,
  },
  openGraph: {
    title: category?.metaTitle || "CafeGrow",
    description: category?.metaDescription || "CafeGrow",
    url: `${siteConfig.discoveryDomain}/${category?.slug || "food-truck"}`,
  },
};

export default function FoodTruckCategoryPage() {
  if (!category) return null;
  return <CategoryPageTemplate category={category} />;
}
