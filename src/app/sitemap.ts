import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://anni.dev",
            lastModified: new Date().toISOString().split("T")[0]
        }
    ];
}
