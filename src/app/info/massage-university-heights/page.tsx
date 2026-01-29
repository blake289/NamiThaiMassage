import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage in University Heights San Diego | Nami Thai Massage',
    description: 'University Heights residents find exceptional massage therapy at Nami Thai Massage on University Avenue. Thai massage, deep tissue, Swedish, and more. Book your University Heights area massage today.',
    keywords: 'massage University Heights San Diego, University Heights massage therapy, massage near University Heights, Thai massage University Heights, spa University Heights, best massage University Heights, massage 92105',
};

export default function UniversityHeightsMassagePage() {
    return (
        <main className={styles.infoPage}>
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
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit', textDecoration: 'underline' }}>619-287-3034</a></strong>
                        {' '}• Walking distance for many UH residents
                    </p>
                    <div className={styles.heroImageWrapper}>
                        <img
                            src="/images/spa_ambiance_1769650499497.png"
                            alt="Massage studio near University Heights San Diego"
                            className={styles.heroImage}
                        />
                    </div>
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
                            <Link href="/info/massage-balboa-park"> Balboa Park</Link>. Add regular massage therapy to your self-care routine and enjoy the best
                            of San Diego living. Our licensed therapist has over 10 years of experience providing expert
                            <Link href="/info/thai-massage-benefits"> Thai massage</Link>, <Link href="/info/deep-tissue-massage">deep tissue</Link>,
                            and <Link href="/info/swedish-massage">Swedish massage</Link> therapy.
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
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                            {' '}• Flexible scheduling for your convenience
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Your Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Your Neighborhood Massage Studio</h2>
                        <p className={styles.ctaText}>
                            University Heights deserves great massage therapy. Book your session and
                            discover what your neighbors already know. Most appointments available within 24-48 hours.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
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
