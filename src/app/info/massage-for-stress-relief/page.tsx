import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Stress Relief San Diego | Relaxation Therapy | Nami Thai Massage',
    description: 'Escape stress and anxiety with therapeutic massage in North Park, San Diego. Expert stress relief massage helps you relax, sleep better, and restore mental clarity. Find your calm.',
    keywords: 'stress relief massage San Diego, anxiety massage North Park, relaxation massage, mental health massage, calming massage therapy, stress reduction, cortisol reduction massage, peaceful massage San Diego',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-for-stress-relief',
    },
    openGraph: {
        title: 'Massage for Stress Relief | Relaxation Therapy San Diego',
        description: 'Escape stress and anxiety with therapeutic massage in North Park, San Diego. Find your calm and restore mental clarity.',
        url: 'https://namithaimassage.com/info/massage-for-stress-relief',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage for Stress Relief | Relaxation Therapy',
        description: 'Escape stress and anxiety with therapeutic massage in San Diego.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Helpful Info", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Stress Relief", item: "https://namithaimassage.com/info/massage-for-stress-relief" },
    ],
};

export default function StressReliefMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Helpful Info</span>
                    <span>/</span>
                    <span>Stress Relief</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Who We Help</p>
                    <h1 className={styles.title}>Massage for Stress & Anxiety Relief</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        In our fast-paced world, stress has become a constant companion. At Nami Thai Massage in
                        North Park, San Diego, we offer a peaceful escape where you can release tension, quiet
                        your mind, and restore your sense of calm through nurturing massage therapy.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Stress Epidemic</h2>
                        <p className={styles.paragraph}>
                            San Diego may be paradise, but that doesn&apos;t mean life isn&apos;t stressful. Work deadlines,
                            traffic, financial pressures, relationship challenges—stress accumulates in our bodies as
                            muscle tension, shallow breathing, and chronic fatigue. Left unchecked, stress contributes
                            to serious health problems.
                        </p>
                        <p className={styles.paragraph}>
                            Whether you&apos;re dealing with job stress in <strong>downtown San Diego</strong>, the demands
                            of parenting in <strong>North Park</strong>, or the pressures of student life in <strong>Hillcrest
                                and University Heights</strong>, massage therapy offers a proven, natural way to reset your
                            nervous system.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>How Massage Relieves Stress</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Lowers Cortisol:</strong> Massage significantly reduces cortisol, your
                                    body&apos;s primary stress hormone.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Boosts Serotonin:</strong> Increases feel-good neurotransmitters that
                                    improve mood and emotional well-being.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Activates Relaxation Response:</strong> Massage stimulates the parasympathetic
                                    nervous system, opposite of fight-or-flight.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Releases Muscle Tension:</strong> Stress shows up in your body—massage
                                    releases where you physically hold stress.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improves Sleep:</strong> Deep relaxation helps you fall asleep faster
                                    and sleep more soundly.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Clarity:</strong> A calm body supports a clear, focused mind
                                    for days after your session.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Best Massage Types for Stress Relief</h2>
                        <p className={styles.paragraph}>
                            For stress relief, we often recommend:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Swedish Massage:</strong> Classic relaxation with gentle, flowing strokes •
                            <strong> Hot Stone Massage:</strong> Warmth melts tension for profound relaxation •
                            <strong> Thai Massage:</strong> Meditative stretching calms both body and mind
                        </p>
                        <p className={styles.paragraph}>
                            Many San Diego clients find that regular massage—even just monthly—creates a significant
                            improvement in their baseline stress levels and resilience to life&apos;s challenges.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Your Peaceful Escape in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Step away from stress • A calm sanctuary serving all of San Diego
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Stress Relief Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Find Your Calm Today</h2>
                        <p className={styles.ctaText}>
                            Life is stressful enough. Give yourself the gift of relaxation and
                            restore your peace of mind.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/hot-stone-massage" className={styles.relatedLink}>Hot Stone Massage</Link>
                            <Link href="/info/massage-for-office-workers" className={styles.relatedLink}>Office Workers</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest Area</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
