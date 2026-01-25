import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://namithaimassage.com";

    // Location pages - highest priority for local SEO
    const locationPages = [
        'massage-north-park',
        'massage-hillcrest',
        'massage-university-heights',
        'massage-normal-heights',
        'massage-balboa-park',
    ];

    // Service info pages
    const servicePages = [
        'thai-massage-benefits',
        'deep-tissue-massage',
        'swedish-massage',
        'sports-massage',
        'hot-stone-massage',
        'prenatal-massage',
    ];

    // Audience pages
    const audiencePages = [
        'massage-for-office-workers',
        'massage-for-athletes',
        'massage-for-chronic-pain',
        'massage-for-stress-relief',
        'massage-for-seniors',
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
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        // Location pages - higher priority for local SEO
        ...locationPages.map(page => ({
            url: `${baseUrl}/info/${page}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })),
        // Service info pages
        ...servicePages.map(page => ({
            url: `${baseUrl}/info/${page}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        // Audience pages
        ...audiencePages.map(page => ({
            url: `${baseUrl}/info/${page}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];
}
