import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in Hillcrest San Diego | Near University Ave | Nami Thai Massage',
    description: 'Looking for massage near Hillcrest, San Diego? Nami Thai Massage is just minutes away on University Avenue. Thai massage, deep tissue, Swedish massage, and more. Book your Hillcrest area massage.',
    keywords: 'massage Hillcrest San Diego, Hillcrest massage therapy, massage near Hillcrest, Thai massage Hillcrest, spa near Hillcrest, deep tissue massage Hillcrest, best massage Hillcrest area, massage 92103',
};

export default function HillcrestMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Locations</span>
                    <span>/</span>
                    <span>Hillcrest</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Locations We Serve</p>
                    <h1 className={styles.title}>Massage Near Hillcrest, San Diego</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Hillcrest residents, your perfect massage experience is just a short distance away!
                        Nami Thai Massage on University Avenue in North Park offers authentic massage therapy
                        just minutes from the Hillcrest neighborhood you love.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Minutes from Hillcrest</h2>
                        <p className={styles.paragraph}>
                            Located at <strong>3055 University Avenue</strong> in neighboring North Park, Nami Thai
                            Massage is easily accessible from anywhere in <strong>Hillcrest</strong>. Whether you&apos;re
                            coming from the Hillcrest Farmers Market, University Avenue&apos;s shops and restaurants,
                            or your Hillcrest home, you&apos;ll be on our massage table in no time.
                        </p>
                        <p className={styles.paragraph}>
                            The drive down University Avenue takes just 5-7 minutes, and you&apos;ll find easy street
                            parking near our studio. Many Hillcrest residents make us their regular go-to for
                            massage therapy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Why Hillcrest Residents Choose Us</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Convenient Location:</strong> Just minutes east on University Avenue
                                    from central Hillcrest.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Authentic Thai Massage:</strong> Real Thai techniques not found at
                                    typical Hillcrest spas.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Welcoming Atmosphere:</strong> A safe, inclusive space that reflects
                                    Hillcrest&apos;s community values.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Affordable Luxury:</strong> Premium massage at fair prices—no
                                    overpriced day spa markups.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>5-Star Reviews:</strong> Trusted by your Hillcrest neighbors who&apos;ve
                                    made us their regular spot.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Flexible Scheduling:</strong> Appointments that fit Hillcrest&apos;s active
                                    lifestyle.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Services Popular with Hillcrest Clients</h2>
                        <p className={styles.paragraph}>
                            Our Hillcrest clients love variety. Popular choices include <strong>Thai Massage</strong> for
                            flexibility and energy, <strong>Deep Tissue</strong> for gym-goers and desk workers,
                            <strong> Swedish Massage</strong> for pure relaxation, and <strong>Hot Stone Massage</strong>
                            for luxurious pampering.
                        </p>
                        <p className={styles.paragraph}>
                            Many of our Hillcrest regulars are professionals dealing with work stress, active folks
                            who exercise at nearby gyms, and wellness-minded individuals who understand the value of
                            regular bodywork.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Easy Access from Hillcrest</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            5-7 minutes from central Hillcrest • Take University Ave east to North Park •
                            Free street parking
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Your Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Your Hillcrest-Area Massage Awaits</h2>
                        <p className={styles.ctaText}>
                            Join your Hillcrest neighbors who&apos;ve discovered exceptional massage therapy
                            just minutes away in North Park.
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
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Balboa Park</Link>
                            <Link href="/services" className={styles.relatedLink}>All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
