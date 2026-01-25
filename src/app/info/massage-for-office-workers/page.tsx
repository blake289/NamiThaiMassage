import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Office Workers San Diego | Desk Job Pain Relief | Nami Thai Massage',
    description: 'Relieve neck pain, back tension, and desk job discomfort with massage therapy in North Park, San Diego. Expert treatment for office workers, remote workers, and computer professionals. End workday pain.',
    keywords: 'massage for office workers San Diego, desk job back pain relief, neck pain massage, computer worker massage, posture correction massage, work from home massage, tech neck treatment, ergonomic pain relief',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-for-office-workers',
    },
    openGraph: {
        title: 'Massage for Office Workers | Desk Job Pain Relief',
        description: 'Relieve neck pain, back tension, and desk job discomfort with massage therapy in North Park, San Diego.',
        url: 'https://namithaimassage.com/info/massage-for-office-workers',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage for Office Workers | Desk Job Pain Relief',
        description: 'Relieve neck pain, back tension, and desk job discomfort in San Diego.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Helpful Info", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Massage for Office Workers", item: "https://namithaimassage.com/info/massage-for-office-workers" },
    ],
};

export default function OfficeWorkersMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Helpful Info</span>
                    <span>/</span>
                    <span>Massage for Office Workers</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Who We Help</p>
                    <h1 className={styles.title}>Massage for Office Workers & Desk Jobs</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Spending 8+ hours at a desk takes a toll on your body. If you&apos;re an office worker in San Diego
                        dealing with neck pain, shoulder tension, or lower back discomfort, massage therapy at
                        Nami Thai Massage in North Park can help you feel like yourself again.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Desk Job Pain Problem</h2>
                        <p className={styles.paragraph}>
                            Whether you work in an office in <strong>downtown San Diego</strong>, commute to <strong>Sorrento
                                Valley</strong> tech companies, or work remotely from your <strong>Hillcrest</strong> apartment,
                            prolonged sitting creates predictable patterns of muscle tension and pain:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Tech Neck:</strong> Forward head posture from looking at screens • <strong>Rounded
                                Shoulders:</strong> Hunching over keyboards • <strong>Lower Back Pain:</strong> Hip flexor
                            tightness from sitting • <strong>Wrist & Forearm Tension:</strong> Repetitive mouse and
                            keyboard use • <strong>Headaches:</strong> Tension radiating from neck and shoulders
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How Massage Helps Office Workers</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Neck & Shoulder Relief:</strong> Targeted work on trapezius, levator scapulae,
                                    and neck muscles releases chronic tension.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Lower Back Support:</strong> Addresses tight hip flexors and lower back
                                    muscles compressed by sitting.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Posture Improvement:</strong> Regular massage helps retrain muscles for
                                    better postural alignment.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Headache Prevention:</strong> Releasing neck and shoulder tension reduces
                                    tension headache frequency.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Management:</strong> Combat work stress with regular relaxation
                                    that resets your nervous system.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Focus:</strong> Pain-free work means better concentration and
                                    productivity.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Recommended Massage Types for Desk Workers</h2>
                        <p className={styles.paragraph}>
                            For San Diego office workers, we often recommend a combination approach:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Deep Tissue Massage</strong> for chronic knots and adhesions in the upper back and
                            shoulders • <strong>Thai Massage</strong> stretching to counteract sitting posture and
                            improve flexibility • <strong>Swedish Massage</strong> for overall relaxation and stress
                            relief after demanding workweeks
                        </p>
                        <p className={styles.paragraph}>
                            Many of our clients from <strong>North Park, Hillcrest, University Heights</strong>, and
                            <strong> Normal Heights</strong> tech and professional offices schedule regular sessions
                            to maintain pain-free, productive work lives.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Convenient North Park Location</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Perfect for after-work appointments • Easy access from downtown San Diego,
                            Hillcrest, and tech hubs throughout the city
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Your Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>End Desk Job Pain Today</h2>
                        <p className={styles.ctaText}>
                            Don&apos;t let your work hurt your body. Schedule a massage session and
                            return to the office feeling refreshed and pain-free.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Topics</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue Massage</Link>
                            <Link href="/info/massage-for-chronic-pain" className={styles.relatedLink}>Chronic Pain Relief</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest Area</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
