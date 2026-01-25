import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in Normal Heights San Diego | Near Adams Ave | Nami Thai Massage',
    description: 'Normal Heights residents find exceptional massage at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your Normal Heights area massage today.',
    keywords: 'massage Normal Heights San Diego, Normal Heights massage therapy, massage near Adams Avenue, Thai massage Normal Heights, spa Normal Heights, best massage Normal Heights, massage 92116',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-normal-heights',
    },
    openGraph: {
        title: 'Massage in Normal Heights San Diego | Near Adams Ave',
        description: 'Normal Heights residents find exceptional massage at Nami Thai Massage on University Avenue.',
        url: 'https://namithaimassage.com/info/massage-normal-heights',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage in Normal Heights San Diego',
        description: 'Normal Heights residents find exceptional massage at Nami Thai Massage.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://namithaimassage.com/contact" },
        { "@type": "ListItem", position: 3, name: "Normal Heights", item: "https://namithaimassage.com/info/massage-normal-heights" },
    ],
};

export default function NormalHeightsMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Locations</span>
                    <span>/</span>
                    <span>Normal Heights</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Locations We Serve</p>
                    <h1 className={styles.title}>Massage Near Normal Heights</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Normal Heights residents, exceptional massage therapy is just a short trip away!
                        Nami Thai Massage on University Avenue in North Park offers authentic bodywork
                        for the eclectic, community-minded Normal Heights neighborhood.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Close to Normal Heights</h2>
                        <p className={styles.paragraph}>
                            Located at <strong>3055 University Avenue</strong> in North Park, Nami Thai Massage is
                            just minutes from <strong>Normal Heights</strong> and the famous Adams Avenue strip.
                            Whether you&apos;re coming from the Adams Avenue Antique Row, Lestat&apos;s Coffee House, or
                            your cozy Normal Heights bungalow, relaxation is close at hand.
                        </p>
                        <p className={styles.paragraph}>
                            Normal Heights&apos; artistic, wellness-conscious community appreciates authentic experiences—
                            and that&apos;s exactly what we offer. No cookie-cutter spa treatments here, just genuine
                            therapeutic massage from a skilled practitioner.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Popular with Normal Heights Residents</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Easy Access:</strong> Quick drive down El Cajon Blvd or through
                                    the neighborhood streets.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Authentic Thai Massage:</strong> Traditional techniques that
                                    wellness-minded Normal Heights appreciates.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Local Business:</strong> Supporting the independent business
                                    spirit Normal Heights is known for.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Flexible Hours:</strong> Appointments that work around your
                                    creative schedule.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Fair Pricing:</strong> Quality massage without upscale spa
                                    price tags.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Personalized Care:</strong> Each session tailored to your
                                    unique needs.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Services for Normal Heights</h2>
                        <p className={styles.paragraph}>
                            Normal Heights residents appreciate our full range of services. <strong>Thai Massage</strong>
                            for yogis and the flexibility-focused. <strong>Deep Tissue</strong> for musicians, artists,
                            and creatives dealing with repetitive strain. <strong>Swedish Massage</strong> for pure
                            relaxation after exploring Adams Avenue.
                        </p>
                        <p className={styles.paragraph}>
                            Our clients from Normal Heights value authenticity and results—the same things that make
                            your neighborhood special. Join them and discover your new favorite massage studio.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Easy From Normal Heights</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Minutes from Adams Avenue • Quick drive from Normal Heights • Free parking
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
                            title="Nami Thai Massage - Near Normal Heights, San Diego"
                        />
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Normal Heights&apos; Massage Destination</h2>
                        <p className={styles.ctaText}>
                            Discover why your Normal Heights neighbors make us their go-to for
                            massage therapy.
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
                            <Link href="/info/massage-university-heights" className={styles.relatedLink}>University Heights</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Balboa Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
