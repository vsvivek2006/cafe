import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.discoveryDomain),
  title: {
    default: "CafeGrow — Digital Growth, Menu & Ordering Platform for Food & Hospitality",
    template: "%s | CafeGrow",
  },
  description:
    "CafeGrow helps restaurants, hotels, cafes, dhabas, cloud kitchens and other food & hospitality businesses manage digital menus, QR ordering, online presence, customer discovery and business growth across Jaipur and 50+ Indian cities.",
  keywords: [
    "restaurant management software",
    "hotel management software",
    "dhaba management software",
    "cafe management software",
    "qr menu for restaurants",
    "digital menu for hotels",
    "qr ordering system",
    "cloud pos software india",
    "table ordering system",
    "online food ordering system zero commission",
    "restaurant pos billing software",
    "in room dining software",
    "hotel qr menu",
    "highway dhaba pos billing",
    "cloud kitchen management software",
    "bakery cake pre-ordering software",
    "food business growth platform",
    "local seo for restaurants",
    "contactless dining system",
    "qr code menu card maker",
    "food court contactless ordering",
    "sweet shop pos billing",
    "caterers management system",
    "banquet hall booking software",
    "cafegrow",
    "growth service digital solution",
    "restaurants in jaipur",
    "hotels in jaipur",
    "dhabas in jaipur",
    "cafes in jaipur",
    "best restaurants near me",
  ],
  alternates: {
    canonical: siteConfig.discoveryDomain,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [{ name: siteConfig.legalEntity, url: siteConfig.discoveryDomain }],
  creator: siteConfig.legalEntity,
  publisher: siteConfig.legalEntity,
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "CafeGrow — Digital Growth, Menu & Ordering Platform for Food & Hospitality Businesses",
    description:
      "All-in-one digital growth, menu, ordering, and management platform for restaurants, hotels, dhabas, cafes, and food businesses across Jaipur and 50+ Indian cities.",
    url: siteConfig.discoveryDomain,
    siteName: "CafeGrow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.discoveryDomain}/logo.png`,
        width: 512,
        height: 512,
        alt: "CafeGrow Logo — Food & Hospitality Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CafeGrow — Food & Hospitality Growth Platform",
    description:
      "Empower your restaurant, hotel, dhaba, or cafe with digital QR menus, rapid POS billing, table ordering, and local search dominance.",
    images: [`${siteConfig.discoveryDomain}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CafeGrow",
    legalName: siteConfig.legalEntity,
    url: siteConfig.discoveryDomain,
    logo: `${siteConfig.discoveryDomain}/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phoneFormatted,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.legalEntity,
      url: "https://growthservice.in",
    },
    sameAs: [
      siteConfig.platformDomain,
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CafeGrow",
    operatingSystem: "Web Browser, iOS, Android, Windows, macOS",
    applicationCategory: "BusinessApplication",
    description:
      "Digital growth, menu, ordering, and management platform for restaurants, hotels, cafes, dhabas, and food businesses.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free starter business listing and digital QR menu setup",
    },
    author: {
      "@type": "Organization",
      name: siteConfig.legalEntity,
      url: siteConfig.discoveryDomain,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CafeGrow",
    url: siteConfig.discoveryDomain,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalEntity,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.discoveryDomain}/restaurants/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1b120c] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
