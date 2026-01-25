import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Hot Stone Massage San Diego | Heated Stone Therapy | Nami Thai Massage',
    description: 'Indulge in luxurious hot stone massage in North Park, San Diego. Warm basalt stones melt away tension, improve circulation, and promote deep relaxation. Experience the ultimate spa treatment.',
    keywords: 'hot stone massage San Diego, heated stone therapy North Park, warm stone massage, basalt stone massage, relaxation massage San Diego, luxury spa massage, muscle relaxation, therapeutic heat massage',
    alternates: {
        canonical: 'https://namithaimassage.com/info/hot-stone-massage',
    },
    openGraph: {
        title: 'Hot Stone Massage San Diego | Luxury Therapy',
        description: 'Indulge in luxurious hot stone massage in North Park, San Diego. Warm basalt stones melt away tension and promote deep relaxation.',
        url: 'https://namithaimassage.com/info/hot-stone-massage',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Hot Stone Massage San Diego | Luxury Therapy',
        description: 'Indulge in luxurious hot stone massage in North Park, San Diego.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Hot Stone Massage", item: "https://namithaimassage.com/info/hot-stone-massage" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hot Stone Massage",
    description: "Luxurious hot stone massage using smooth, heated basalt stones to melt away tension, improve circulation, and promote deep relaxation.",
    provider: { "@type": "LocalBusiness", "@id": "https://namithaimassage.com/#business", name: "Nami Thai Massage" },
    areaServed: { "@type": "City", name: "San Diego" },
    serviceType: "Hot Stone Massage Therapy",
};

export default function HotStoneMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Hot Stone Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Luxury Therapy</p>
                    <h1 className={styles.title}>Hot Stone Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Experience the luxurious warmth of hot stone massage at Nami Thai Massage in North Park, San Diego.
                        Smooth, heated basalt stones combined with expert massage techniques create a deeply relaxing
                        experience that melts away tension and soothes both body and mind.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Hot Stone Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Hot stone massage</strong> is a specialty massage where smooth, flat, heated stones are
                            placed on specific points of your body. The stones are typically <strong>basalt</strong>, a type
                            of volcanic rock that retains heat exceptionally well. Combined with traditional massage techniques,
                            the warmth penetrates deep into muscles, allowing for greater relaxation and therapeutic benefit.
                        </p>
                        <p className={styles.paragraph}>
                            For <strong>San Diego residents</strong> seeking a premium spa experience without traveling far,
                            Nami Thai Massage in <strong>North Park</strong> offers authentic hot stone therapy that rivals
                            any luxury resort treatment.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Hot Stone Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Deep Muscle Relaxation:</strong> Heat penetrates muscles, relieving tension
                                    more effectively than massage alone.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Circulation:</strong> Warmth expands blood vessels, increasing
                                    blood flow and oxygen delivery.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Heat therapy combined with massage provides effective
                                    relief for chronic pain conditions.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> The comforting warmth creates a cocoon-like
                                    feeling that promotes profound relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Sleep:</strong> The deeply relaxing effects often lead to improved
                                    sleep quality following treatment.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Calmness:</strong> Perfect for those dealing with anxiety or mental
                                    stress in busy San Diego lifestyles.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Hot Stone Experience</h2>
                        <p className={styles.paragraph}>
                            Your <strong>hot stone massage in San Diego</strong> begins with stones heated to the perfect
                            temperature. Stones are placed along your spine, on your palms, between your toes, and at other
                            key energy points. Your therapist then uses additional heated stones to massage your muscles,
                            gliding them along with nourishing oil.
                        </p>
                        <p className={styles.paragraph}>
                            The combination of stone placement and massage creates a unique sensation of radiating warmth
                            that spreads throughout your body. Many clients describe it as one of the most relaxing
                            experiences they&apos;ve ever had—a true escape from the everyday stress of <strong>Hillcrest,
                                University Heights</strong>, and San Diego life.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Hot Stone Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Your luxury spa escape in the heart of San Diego • Serving North Park, Hillcrest,
                            University Heights, and surrounding neighborhoods
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Hot Stone Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Indulge in Warm Relaxation</h2>
                        <p className={styles.ctaText}>
                            Treat yourself to the ultimate relaxation experience. Book your hot stone
                            massage at Nami Thai Massage today.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Explore More</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue</Link>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
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
