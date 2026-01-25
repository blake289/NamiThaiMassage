import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Thai Massage Benefits | Health & Wellness Guide | Nami Thai Massage',
    description: 'Discover the incredible health benefits of traditional Thai massage in San Diego. Learn how Thai massage therapy relieves pain, improves flexibility, reduces stress, and promotes wellness at Nami Thai Massage in North Park.',
    keywords: 'Thai massage benefits, Thai massage San Diego, traditional Thai massage, Thai yoga massage, Sen energy lines, Thai massage therapy North Park, massage health benefits, flexibility improvement, stress relief massage',
    alternates: {
        canonical: 'https://namithaimassage.com/info/thai-massage-benefits',
    },
    openGraph: {
        title: 'Thai Massage Benefits | Health & Wellness Guide',
        description: 'Discover the health benefits of traditional Thai massage: pain relief, flexibility, stress reduction, and more.',
        url: 'https://namithaimassage.com/info/thai-massage-benefits',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
        images: [
            {
                url: 'https://namithaimassage.com/images/thai-massage-new.png',
                width: 1200,
                height: 630,
                alt: 'Thai Massage Benefits and Techniques at Nami Thai Massage San Diego',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thai Massage Benefits | Nami Thai Massage',
        description: 'Discover the health benefits of traditional Thai massage in San Diego.',
        images: ['https://namithaimassage.com/images/thai-massage-new.png'],
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Thai Massage Benefits", item: "https://namithaimassage.com/info/thai-massage-benefits" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Thai Massage",
    description: "Traditional Thai massage combining acupressure, yoga-like stretching, and energy work to improve flexibility, relieve pain, reduce stress, and promote total body wellness.",
    provider: { "@type": "LocalBusiness", "@id": "https://namithaimassage.com/#business", name: "Nami Thai Massage" },
    areaServed: { "@type": "City", name: "San Diego" },
    serviceType: "Thai Massage Therapy",
};

export default function ThaiMassageBenefitsPage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Thai Massage Benefits</span>
                </nav>

                {/* Hero Section */}
                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Massage Guide</p>
                    <h1 className={styles.title}>The Amazing Benefits of Thai Massage</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Traditional Thai massage is an ancient healing art that combines acupressure,
                        yoga-like stretching, and energy work to promote total body wellness. At Nami Thai Massage
                        in North Park, San Diego, we bring authentic Thai massage techniques to help you
                        achieve optimal health and relaxation.
                    </p>
                </header>

                {/* Content */}
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Traditional Thai Massage?</h2>
                        <p className={styles.paragraph}>
                            Often called &ldquo;lazy person&apos;s yoga,&rdquo; <strong>Thai massage</strong> is a 2,500-year-old
                            healing practice that originated in Thailand. Unlike Western massage styles, Thai massage
                            is performed on a floor mat with the client fully clothed in comfortable attire. The therapist
                            uses their hands, thumbs, elbows, knees, and feet to apply pressure along the body&apos;s
                            <strong> Sen energy lines</strong> while guiding you through assisted yoga stretches.
                        </p>
                        <p className={styles.paragraph}>
                            At our <strong>North Park massage studio</strong>, Nami brings her authentic Thai training
                            and years of experience to deliver traditional Thai massage that honors this ancient practice
                            while addressing modern health concerns common among San Diego residents.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Health Benefits of Thai Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Flexibility:</strong> The yoga-like stretches increase range of motion
                                    and joint mobility, perfect for athletes and desk workers in San Diego.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Targeted pressure on Sen lines releases muscle tension
                                    and alleviates chronic pain in the back, neck, and shoulders.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> The rhythmic compressions and stretches activate
                                    the parasympathetic nervous system, promoting deep relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Energy Boost:</strong> By unblocking energy pathways, Thai massage increases
                                    vitality and reduces fatigue.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Circulation:</strong> Compression techniques improve blood flow and
                                    lymphatic drainage throughout the body.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Headache Relief:</strong> Thai massage techniques targeting the head, neck,
                                    and shoulders can reduce tension headaches and migraines.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Who Benefits Most from Thai Massage?</h2>
                        <p className={styles.paragraph}>
                            Thai massage in San Diego is ideal for a wide range of people. <strong>Office workers</strong> from
                            nearby Hillcrest and University Heights find relief from desk-related tension. <strong>Athletes</strong> use
                            it for recovery and flexibility. Those with <strong>chronic pain</strong> conditions benefit from
                            the therapeutic stretching. Even people simply seeking <strong>stress relief</strong> from busy
                            San Diego lifestyles discover profound relaxation.
                        </p>
                        <p className={styles.paragraph}>
                            Whether you live in North Park, Normal Heights, South Park, or anywhere in greater San Diego,
                            Nami Thai Massage offers convenient access to authentic Thai massage therapy that can transform
                            your health and well-being.
                        </p>
                    </section>

                    {/* Location Box */}
                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Visit Us in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Serving North Park, Hillcrest, University Heights, Normal Heights, South Park,
                            City Heights, Kensington, and all of San Diego
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Thai Massage
                        </Link>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What to Expect During Your Session</h2>
                        <p className={styles.paragraph}>
                            When you arrive at Nami Thai Massage near Balboa Park, you&apos;ll be welcomed into a serene,
                            calming environment. You&apos;ll wear loose, comfortable clothing (we provide Thai fisherman pants
                            if needed). Your <strong>licensed massage therapist</strong> will discuss your health goals
                            and any areas of concern before beginning.
                        </p>
                        <p className={styles.paragraph}>
                            The session combines gentle rocking, rhythmic compression, and assisted stretches. Many clients
                            describe it as both energizing and deeply relaxing. Sessions typically last 60 to 90 minutes,
                            allowing time for a complete full-body treatment that addresses all major muscle groups and
                            energy pathways.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Experience Authentic Thai Massage in San Diego</h2>
                        <p className={styles.ctaText}>
                            Ready to discover the transformative benefits of Thai massage? Book your session with
                            Nami today and feel the difference authentic Thai healing can make.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    {/* Related Links */}
                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Explore More Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue Massage</Link>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/hot-stone-massage" className={styles.relatedLink}>Hot Stone Massage</Link>
                        </div>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Serving San Diego Neighborhoods</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                            <Link href="/info/massage-university-heights" className={styles.relatedLink}>University Heights</Link>
                            <Link href="/info/massage-normal-heights" className={styles.relatedLink}>Normal Heights</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Balboa Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
