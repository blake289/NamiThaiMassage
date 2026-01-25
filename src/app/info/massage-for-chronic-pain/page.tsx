import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Chronic Pain San Diego | Pain Relief Therapy | Nami Thai Massage',
    description: 'Find lasting relief from chronic pain with therapeutic massage in North Park, San Diego. Expert treatment for back pain, neck pain, fibromyalgia, and persistent muscle tension. Drug-free pain management.',
    keywords: 'chronic pain massage San Diego, pain relief massage North Park, back pain treatment, fibromyalgia massage, muscle pain therapy, sciatica massage, drug-free pain relief, therapeutic massage San Diego',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-for-chronic-pain',
    },
    openGraph: {
        title: 'Massage for Chronic Pain | Pain Relief Therapy San Diego',
        description: 'Find lasting relief from chronic pain with therapeutic massage in North Park, San Diego. Expert treatment for back pain, neck pain, and fibromyalgia.',
        url: 'https://namithaimassage.com/info/massage-for-chronic-pain',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage for Chronic Pain | Pain Relief Therapy',
        description: 'Find lasting relief from chronic pain with therapeutic massage in San Diego.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Helpful Info", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Chronic Pain Relief", item: "https://namithaimassage.com/info/massage-for-chronic-pain" },
    ],
};

export default function ChronicPainMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Helpful Info</span>
                    <span>/</span>
                    <span>Chronic Pain Relief</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Who We Help</p>
                    <h1 className={styles.title}>Massage for Chronic Pain Relief</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Living with chronic pain affects every aspect of your life. At Nami Thai Massage in North Park,
                        San Diego, we offer therapeutic massage as a natural, drug-free approach to managing persistent
                        pain conditions and improving your quality of life.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Understanding Chronic Pain</h2>
                        <p className={styles.paragraph}>
                            Chronic pain—pain that persists for months or years—affects millions of Americans. Whether
                            it stems from an old injury, structural issues, repetitive strain, or conditions like
                            <strong> fibromyalgia</strong>, chronic pain creates a cycle of tension, compensation patterns,
                            and further discomfort that&apos;s hard to break alone.
                        </p>
                        <p className={styles.paragraph}>
                            For <strong>San Diego residents</strong> living with chronic pain in <strong>North Park,
                                Hillcrest, University Heights</strong>, and surrounding areas, massage therapy offers a
                            powerful complement to other treatments—or sometimes, the primary solution.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How Massage Helps Chronic Pain</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Breaks Pain Cycles:</strong> Releases muscle tension that perpetuates
                                    and amplifies chronic pain patterns.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Reduces Inflammation:</strong> Improved circulation helps reduce inflammation
                                    in affected tissues.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Releases Trigger Points:</strong> Targeted pressure deactivates painful
                                    trigger points that refer pain to other areas.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Natural Pain Relief:</strong> Massage stimulates endorphin release—your
                                    body&apos;s natural painkillers.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improves Sleep:</strong> Better sleep allows your body more time to heal
                                    and reduces pain sensitivity.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Addresses Compensation:</strong> Releases secondary tension from muscles
                                    that overwork to protect painful areas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Conditions We Help</h2>
                        <p className={styles.paragraph}>
                            <strong>Chronic Lower Back Pain</strong> • Neck and Shoulder Tension • <strong>Fibromyalgia</strong> •
                            Sciatica • Tension Headaches and Migraines • <strong>Myofascial Pain Syndrome</strong> •
                            Arthritis-related muscle tension • Repetitive Strain Injuries • <strong>TMJ/Jaw Pain</strong> •
                            Post-surgical pain and scar tissue
                        </p>
                        <p className={styles.paragraph}>
                            We take a patient, consistent approach—understanding that chronic pain didn&apos;t develop
                            overnight and won&apos;t disappear after one session. Many clients find that regular massage
                            (weekly or biweekly) provides cumulative benefits that dramatically improve their quality of life.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Find Relief in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            A healing sanctuary for chronic pain sufferers • Serving all of San Diego
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Pain Relief Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Start Your Journey to Relief</h2>
                        <p className={styles.ctaText}>
                            You don&apos;t have to live with chronic pain. Schedule a consultation and discover
                            how massage therapy can help restore your quality of life.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue Massage</Link>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
                            <Link href="/info/massage-for-office-workers" className={styles.relatedLink}>Office Workers</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
