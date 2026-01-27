import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in Normal Heights San Diego | Near Adams Ave | Nami Thai Massage',
    description: 'Normal Heights residents find exceptional massage at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your Normal Heights area massage today.',
    keywords: 'massage Normal Heights San Diego, Normal Heights massage therapy, massage near Adams Avenue, Thai massage Normal Heights, spa Normal Heights, best massage Normal Heights, massage 92116',
};

export default function NormalHeightsMassagePage() {
    return (
        <main className={styles.infoPage}>
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
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>619-287-3034</a></strong>
                        {' '}• Just minutes from Adams Avenue
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
                            therapeutic massage from a skilled practitioner with over 10 years of experience. We specialize
                            in <Link href="/info/thai-massage-benefits">Thai massage</Link>, <Link href="/info/deep-tissue-massage">deep
                            tissue</Link>, and <Link href="/info/swedish-massage">Swedish massage</Link> techniques.
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
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                            {' '}• Same-day appointments often available
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Your Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Normal Heights&apos; Massage Destination</h2>
                        <p className={styles.ctaText}>
                            Discover why your Normal Heights neighbors make us their go-to for
                            massage therapy. Evening and weekend appointments available.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Nearby Areas</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park</Link>
                            <Link href="/info/massage-university-heights" className={styles.relatedLink}>University Heights</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                            <Link href="/services" className={styles.relatedLink}>All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
