import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in North Park San Diego | Nami Thai Massage | University Ave',
    description: 'Find the best massage therapy in North Park, San Diego at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your North Park massage today.',
    keywords: 'massage North Park San Diego, North Park massage therapy, massage University Avenue, Thai massage North Park, deep tissue North Park, spa North Park San Diego, best massage North Park, massage 92104',
};

export default function NorthParkMassagePage() {
    return (
        <main className={styles.infoPage}>
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
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>619-287-3034</a></strong>
                        {' '}• Same-day appointments available
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
                            within easy reach. With over 10 years of experience, our licensed massage therapist Nami
                            specializes in authentic <Link href="/info/thai-massage-benefits">Thai massage techniques</Link> alongside
                            popular modalities like <Link href="/info/deep-tissue-massage">deep tissue</Link> and Swedish massage.
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
                            Thai massage techniques, and our warm, welcoming atmosphere. Whether you&apos;re an <Link href="/info/massage-for-office-workers">office
                            worker</Link> dealing with desk tension, an <Link href="/info/massage-for-athletes">athlete</Link> seeking
                            recovery, or just need stress relief, we provide expert care tailored to your needs. Whether you&apos;re
                            grabbing coffee at Dark Horse, shopping at Pigment, or dining at one of University Avenue&apos;s amazing
                            restaurants, stop in for the massage experience North Park deserves.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Visit Us in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA 92104</p>
                        <p className={styles.locationNeighborhoods}>
                            On University Ave in the heart of North Park • Free street parking available •
                            Walking distance from North Park Way and 30th Street
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                            {' '}• Walk-ins welcome when available
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book North Park Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Experience the Best Massage in North Park</h2>
                        <p className={styles.ctaText}>
                            Join your neighbors who&apos;ve discovered their favorite local massage studio.
                            Book your session at Nami Thai Massage today. Evening and weekend appointments available.
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
