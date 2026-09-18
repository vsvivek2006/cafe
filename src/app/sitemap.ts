import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { cities } from "@/data/cities";
import { jaipurAreas } from "@/data/jaipurAreas";
import { jaipurLandmarks } from "@/data/jaipurLandmarks";
import { jaipurIntents } from "@/data/jaipurIntents";
import { getAllBusinessCategorySlugs } from "@/data/businessCategories";
import { getAllOwnerSolutionSlugs } from "@/data/ownerSolutions";
import { blogArticles, blogCategories } from "@/data/blogArticles";
import { verifiedBusinesses } from "@/data/businessProfiles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.discoveryDomain;
  const now = new Date();

  // 1. Core Platform Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/for-businesses`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/restaurants`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/hotels`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/dhabas`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/cafes`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/bakeries`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${baseUrl}/food-trucks`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // 2. 21 Business Categories
  const categorySlugs = getAllBusinessCategorySlugs();
  const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. 41 Owner Service / Product Solutions
  const solutionSlugs = getAllOwnerSolutionSlugs();
  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 4. 12 Authoritative Blog Articles
  const blogArticleRoutes: MetadataRoute.Sitemap = blogArticles.map((art) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 5. Multi-Sector City Directories (Restaurants, Hotels, Dhabas, Cafes, Bakeries, Food Trucks)
  const directorySectors = ["restaurants", "hotels", "dhabas", "cafes", "bakeries", "food-trucks"];
  const cityDirectoryRoutes: MetadataRoute.Sitemap = directorySectors.flatMap((sec) =>
    cities.map((city) => ({
      url: `${baseUrl}/${sec}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: city.slug === "jaipur" ? 0.95 : 0.8,
    }))
  );

  // 6. Jaipur Locality Pages across major sectors
  const jaipurLocalitySectors = ["restaurants", "hotels", "dhabas", "cafes"];
  const jaipurLocalityRoutes: MetadataRoute.Sitemap = jaipurLocalitySectors.flatMap((sec) =>
    jaipurAreas.map((area) => ({
      url: `${baseUrl}/${sec}/jaipur/${area.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }))
  );

  // 7. Jaipur Landmarks & Intent Hubs
  const jaipurLandmarkRoutes: MetadataRoute.Sitemap = jaipurLandmarks.map((lm) => ({
    url: `${baseUrl}/cafes/jaipur/landmarks/${lm.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const jaipurIntentRoutes: MetadataRoute.Sitemap = jaipurIntents.map((intent) => ({
    url: `${baseUrl}/cafes/jaipur/types/${intent.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 8. Verified Business Profiles
  const businessProfileRoutes: MetadataRoute.Sitemap = verifiedBusinesses.map((b) => ({
    url: `${baseUrl}/business/${b.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...categoryRoutes,
    ...solutionRoutes,
    ...blogArticleRoutes,
    ...cityDirectoryRoutes,
    ...jaipurLocalityRoutes,
    ...jaipurLandmarkRoutes,
    ...jaipurIntentRoutes,
    ...businessProfileRoutes,
  ];
}
