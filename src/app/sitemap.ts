import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://namithaimassage.com";

    // Info pages for SEO
    const infoPages = [
        // Service types
        'thai-massage-benefits',
        'deep-tissue-massage',
        'swedish-massage',
        'sports-massage',
        'hot-stone-massage',
        'prenatal-massage',
        // Who we help
        'massage-for-office-workers',
        'massage-for-athletes',
        'massage-for-chronic-pain',
        'massage-for-stress-relief',
        'massage-for-seniors',
        // Locations
        'massage-north-park',
        'massage-hillcrest',
        'massage-university-heights',
        'massage-normal-heights',
        'massage-balboa-park',
    ];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gift-cards`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/book`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // Info pages
        ...infoPages.map(page => ({
            url: `${baseUrl}/info/${page}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];
}
