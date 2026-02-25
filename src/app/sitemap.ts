import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://madebymee-variante-b.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/team`, lastModified: new Date() },
    { url: `${base}/impressum`, lastModified: new Date() },
    { url: `${base}/datenschutz`, lastModified: new Date() },
  ];
}
