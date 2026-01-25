import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in North Park San Diego | Nami Thai Massage | University Ave',
    description: 'Find the best massage therapy in North Park, San Diego at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your North Park massage today.',
    keywords: 'massage North Park San Diego, North Park massage therapy, massage University Avenue, Thai massage North Park, deep tissue North Park, spa North Park San Diego, best massage North Park, massage 92104',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-north-park',
    },
    openGraph: {
        title: 'Massage in North Park San Diego | Nami Thai Massage',
        description: 'Professional massage therapy on University Avenue in North Park. Thai massage, deep tissue, Swedish, and more.',
        url: 'https://namithaimassage.com/info/massage-north-park',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://namithaimassage.com/images/nami-portrait.png',
                width: 1200,
                height: 630,
                alt: 'Nami Thai Massage Studio in North Park San Diego',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Massage in North Park San Diego | Nami Thai Massage',
        description: 'Professional massage therapy on University Avenue in North Park, San Diego.',
        images: ['https://namithaimassage.com/images/nami-portrait.png'],
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://namithaimassage.com/contact" },
        { "@type": "ListItem", position: 3, name: "North Park", item: "https://namithaimassage.com/info/massage-north-park" },
    ],
};

export default function NorthParkMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Locations</span>
                    <span>/</span>
                    <span>North Park</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Locations We Serve</p>
                    <h1 className={styles.title}>Massage in North Park, San Diego</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Located in the heart of North Park on University Avenue, Nami Thai Massage is your neighborhood
                        destination for exceptional massage therapy. Escape the bustle of San Diego&apos;s most vibrant
                        neighborhood and discover deep relaxation just steps from your favorite North Park spots.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your North Park Massage Studio</h2>
                        <p className={styles.paragraph}>
                            <strong>Nami Thai Massage</strong> is proudly located at <strong>3055 University Avenue</strong>,
                            in the heart of North Park, San Diego. Our studio sits along the main corridor of this beloved
                            neighborhood, making it easy to combine your massage with shopping, dining, or exploring the
                            famous North Park boutiques and cafes.
                        </p>
                        <p className={styles.paragraph}>
                            Whether you live in North Park, work in the area, or are visiting one of San Diego&apos;s
                            most walkable neighborhoods, our convenient location on University Ave puts relaxation
                            within easy reach.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Services Available in North Park</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Thai Massage:</strong> Traditional Thai stretching and pressure work for
                                    flexibility and energy.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Deep Tissue Massage:</strong> Targeted relief for chronic tension and
                                    muscle knots.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Swedish Massage:</strong> Classic relaxation with flowing, gentle strokes.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Hot Stone Massage:</strong> Luxurious warmth for deep relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Sports Massage:</strong> Athletic recovery for North Park&apos;s active residents.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Prenatal Massage:</strong> Nurturing care for expecting mothers.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Why North Park Loves Us</h2>
                        <p className={styles.paragraph}>
                            North Park is known for its independent spirit, local businesses, and community-focused vibe.
                            <strong> Nami Thai Massage</strong> embodies these same values—we&apos;re a locally owned studio
                            offering personalized, genuine care that big spa chains simply can&apos;t match.
                        </p>
                        <p className={styles.paragraph}>
                            Our North Park neighbors appreciate our <strong>5-star Google reviews</strong>, our authentic
                            Thai massage techniques, and our warm, welcoming atmosphere. Whether you&apos;re grabbing coffee
                            at Dark Horse, shopping at Pigment, or dining at one of University Avenue&apos;s amazing restaurants,
                            stop in for the massage experience North Park deserves.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Visit Us in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA 92104</p>
                        <p className={styles.locationNeighborhoods}>
                            On University Ave in the heart of North Park • Free street parking available •
                            Walking distance from North Park Way and 30th Street
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book North Park Massage
                        </Link>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5!2d-117.1277!3d32.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9551e1c5a1d1d%3A0x0!2s3055%20University%20Ave%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1706139200000!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nami Thai Massage Location - 3055 University Avenue, North Park, San Diego"
                        />
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Experience the Best Massage in North Park</h2>
                        <p className={styles.ctaText}>
                            Join your neighbors who&apos;ve discovered their favorite local massage studio.
                            Book your session at Nami Thai Massage today.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Our Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue</Link>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/hot-stone-massage" className={styles.relatedLink}>Hot Stone</Link>
                        </div>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Nearby Areas</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                            <Link href="/info/massage-university-heights" className={styles.relatedLink}>University Heights</Link>
                            <Link href="/info/massage-normal-heights" className={styles.relatedLink}>Normal Heights</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Balboa Park Area</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
