import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in University Heights San Diego | Nami Thai Massage',
    description: 'University Heights residents find exceptional massage therapy at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your University Heights area massage today.',
    keywords: 'massage University Heights San Diego, University Heights massage therapy, massage near University Heights, Thai massage University Heights, spa University Heights, best massage University Heights, massage 92105',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-university-heights',
    },
    openGraph: {
        title: 'Massage in University Heights San Diego',
        description: 'University Heights residents find exceptional massage therapy at Nami Thai Massage on University Avenue.',
        url: 'https://namithaimassage.com/info/massage-university-heights',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage in University Heights San Diego',
        description: 'University Heights residents find exceptional massage therapy at Nami Thai Massage.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://namithaimassage.com/contact" },
        { "@type": "ListItem", position: 3, name: "University Heights", item: "https://namithaimassage.com/info/massage-university-heights" },
    ],
};

export default function UniversityHeightsMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Locations</span>
                    <span>/</span>
                    <span>University Heights</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Locations We Serve</p>
                    <h1 className={styles.title}>Massage in University Heights</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        University Heights residents enjoy easy access to Nami Thai Massage, located just down
                        University Avenue in neighboring North Park. Experience authentic massage therapy in a
                        convenient location that serves the charming University Heights community.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Serving University Heights</h2>
                        <p className={styles.paragraph}>
                            <strong>Nami Thai Massage</strong> at <strong>3055 University Avenue</strong> sits right
                            on the border between North Park and University Heights, making it incredibly convenient
                            for UH residents. Whether you&apos;re coming from Park Boulevard, Adams Avenue, or anywhere
                            in this historic San Diego neighborhood, quality massage is just moments away.
                        </p>
                        <p className={styles.paragraph}>
                            University Heights is known for its beautiful homes, community spirit, and proximity to
                            Balboa Park. Add regular massage therapy to your self-care routine and enjoy the best
                            of San Diego living.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Perfect for University Heights Lifestyles</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Walking Distance:</strong> For many UH residents, we&apos;re just a pleasant
                                    walk down University Avenue.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>After-Work Convenience:</strong> Easy stop on your way home from
                                    downtown or Hillcrest offices.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Active Lifestyle Support:</strong> Perfect for Balboa Park hikers,
                                    joggers, and tennis players.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Authentic Experience:</strong> Real Thai massage and therapeutic
                                    bodywork, not chain spa treatments.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Local Business:</strong> Support a neighborhood business that values
                                    community connections.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Easy Parking:</strong> Free street parking available near our
                                    University Avenue location.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>A Neighborhood Gem</h2>
                        <p className={styles.paragraph}>
                            University Heights residents appreciate quality and authenticity—which is exactly what
                            you&apos;ll find at Nami Thai Massage. Our <strong>5-star Google reviews</strong> speak to
                            the care and skill we bring to every session. Many of your UH neighbors are already regulars!
                        </p>
                        <p className={styles.paragraph}>
                            Whether you need <strong>deep tissue work</strong> for that stubborn knot, <strong>Thai
                                massage</strong> for flexibility, or <strong>Swedish massage</strong> for pure relaxation,
                            we have the expertise to help you feel your best.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Convenient for University Heights</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Right on University Ave • Minutes from Park Blvd • Close to Adams Avenue
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Your Session
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
                            title="Nami Thai Massage - Near University Heights, San Diego"
                        />
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Your Neighborhood Massage Studio</h2>
                        <p className={styles.ctaText}>
                            University Heights deserves great massage therapy. Book your session and
                            discover what your neighbors already know.
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
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                            <Link href="/info/massage-normal-heights" className={styles.relatedLink}>Normal Heights</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Balboa Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
