import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*"
        },
        sitemap: "https://anni.dev/sitemap.xml",
        host: "https://anni.dev"
    };
}
