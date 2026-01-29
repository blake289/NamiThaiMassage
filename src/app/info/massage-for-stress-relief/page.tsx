import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Stress Relief San Diego | Relaxation Therapy | Nami Thai Massage',
    description: 'Escape stress and anxiety with therapeutic massage in North Park, San Diego. Expert stress relief massage helps you relax, sleep better, and restore mental clarity. Find your calm.',
    keywords: 'stress relief massage San Diego, anxiety massage North Park, relaxation massage, mental health massage, calming massage therapy, stress reduction, cortisol reduction massage, peaceful massage San Diego',
};

export default function StressReliefMassagePage() {
    return (
        <main className={styles.infoPage}>
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
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit', textDecoration: 'underline' }}>619-287-3034</a></strong>
                        {' '}• Find your calm today
                    </p>
                    <div className={styles.heroImageWrapper}>
                        <img
                            src="/images/blog_stress_relief_1769651498627.png"
                            alt="Relaxing head massage for stress relief"
                            className={styles.heroImage}
                        />
                    </div>
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
                            of parenting in <Link href="/info/massage-north-park"><strong>North Park</strong></Link>, or the pressures of student life in
                            <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link> and <Link href="/info/massage-university-heights"><strong>University
                                Heights</strong></Link>, massage therapy offers a proven, natural way to reset your nervous system. Our licensed therapist has over
                            10 years of experience helping clients manage stress through therapeutic touch.
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
                            <Link href="/info/swedish-massage"><strong>Swedish Massage:</strong></Link> Classic relaxation with gentle, flowing strokes •
                            <Link href="/info/hot-stone-massage"><strong>Hot Stone Massage:</strong></Link> Warmth melts tension for profound relaxation •
                            <Link href="/info/thai-massage-benefits"><strong>Thai Massage:</strong></Link> Meditative stretching calms both body and mind
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
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                            {' '}• Feel better in just one hour
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Stress Relief Session
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Find Your Calm Today</h2>
                        <p className={styles.ctaText}>
                            Life is stressful enough. Give yourself the gift of relaxation and
                            restore your peace of mind. Same-day appointments often available.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
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
