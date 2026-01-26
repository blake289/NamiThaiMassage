import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Massage Tips & Wellness Blog | Nami Thai Massage",
    description:
        "Expert massage tips, wellness advice, and health insights from Nami Thai Massage in North Park, San Diego. Learn about the benefits of massage therapy.",
    alternates: {
        canonical: "https://namithaimassage.com/blog",
    },
};

const blogPosts = [
    {
        slug: "thai-massage-benefits",
        title: "5 Surprising Benefits of Thai Massage",
        excerpt: "Discover how traditional Thai massage can improve flexibility, reduce stress, and boost your overall well-being.",
        category: "Thai Massage",
        date: "January 2025",
        href: "/info/thai-massage-benefits",
    },
    {
        slug: "deep-tissue-massage",
        title: "Deep Tissue vs Swedish Massage: Which Is Right for You?",
        excerpt: "Understanding the differences between massage styles helps you choose the perfect treatment for your needs.",
        category: "Massage Types",
        date: "January 2025",
        href: "/info/deep-tissue-massage",
    },
    {
        slug: "massage-for-office-workers",
        title: "How Massage Helps Office Workers Combat Desk Pain",
        excerpt: "Hours at a desk can cause chronic tension. Learn how regular massage therapy can help.",
        category: "Wellness",
        date: "January 2025",
        href: "/info/massage-for-office-workers",
    },
    {
        slug: "massage-for-athletes",
        title: "Sports Massage: Essential Recovery for Athletes",
        excerpt: "Whether you're a weekend warrior or competitive athlete, discover how sports massage accelerates recovery.",
        category: "Sports",
        date: "January 2025",
        href: "/info/massage-for-athletes",
    },
    {
        slug: "massage-for-chronic-pain",
        title: "Finding Relief: Massage Therapy for Chronic Pain",
        excerpt: "Chronic pain affects millions. Explore how massage therapy offers natural, drug-free relief.",
        category: "Pain Relief",
        date: "January 2025",
        href: "/info/massage-for-chronic-pain",
    },
    {
        slug: "massage-for-stress-relief",
        title: "The Science of Relaxation: How Massage Reduces Stress",
        excerpt: "Learn about the physiological effects of massage on stress hormones and mental wellbeing.",
        category: "Wellness",
        date: "January 2025",
        href: "/info/massage-for-stress-relief",
    },
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Wellness Insights</p>
                    <h1 className={styles.heroTitle}>
                        Massage Tips &{" "}
                        <span className={styles.goldText}>Health Blog</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Expert insights on massage therapy, wellness, and self-care from Nami Thai Massage.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className={styles.blogSection}>
                <div className="container">
                    <div className={styles.blogGrid}>
                        {blogPosts.map((post) => (
                            <Link href={post.href} key={post.slug} className={styles.blogCard}>
                                <div className={styles.blogCardContent}>
                                    <div className={styles.blogMeta}>
                                        <span className={styles.category}>{post.category}</span>
                                        <span className={styles.date}>{post.date}</span>
                                    </div>
                                    <h2 className={styles.blogTitle}>{post.title}</h2>
                                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                                    <span className={styles.readMore}>Read More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Experience the{" "}
                            <span className={styles.goldText}>Benefits</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Book your massage session in North Park, San Diego.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book a Session
                            </a>
                            <Link href="/services" className={styles.btnSecondary}>
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
