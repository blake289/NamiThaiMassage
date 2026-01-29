import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Swedish Massage San Diego | Relaxation Therapy | Nami Thai Massage',
    description: 'Experience the ultimate relaxation with Swedish massage in North Park, San Diego. Gentle, flowing strokes relieve stress, improve circulation, and promote total body wellness. Book your relaxation massage today.',
    keywords: 'Swedish massage San Diego, relaxation massage North Park, stress relief massage, gentle massage therapy, wellness massage San Diego, calming massage, circulation improvement, relaxation therapy',
};

export default function SwedishMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Swedish Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Massage Guide</p>
                    <h1 className={styles.title}>Swedish Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Swedish massage is the most popular massage style worldwide, known for its gentle, flowing strokes
                        that promote complete relaxation. At Nami Thai Massage in North Park, San Diego, experience the
                        classic relaxation massage that melts away stress and restores your sense of well-being.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit', textDecoration: 'underline' }}>619-287-3034</a></strong>
                        {' '}• Perfect for first-time massage clients
                    </p>
                    <div className={styles.heroImageWrapper}>
                        <img
                            src="/images/therapist_swedish_1769651403401.png"
                            alt="Relaxing Swedish massage with flowing strokes"
                            className={styles.heroImage}
                        />
                    </div>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Swedish Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Swedish massage</strong> is the foundation of Western massage therapy. Developed in the
                            1800s by a Swedish physiologist, this technique uses five main strokes: effleurage (long gliding strokes),
                            petrissage (kneading), friction (circular pressure), tapotement (rhythmic tapping), and vibration.
                            These movements work together to relax the entire body while improving blood circulation.
                        </p>
                        <p className={styles.paragraph}>
                            For <strong>San Diego residents</strong> seeking a calming escape from busy lives, Swedish massage
                            offers the perfect balance of therapeutic benefits and pure relaxation. Whether you live in
                            <Link href="/info/massage-north-park"><strong>North Park</strong></Link>, <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link>,
                            <Link href="/info/massage-university-heights"><strong>University Heights</strong></Link>, or nearby neighborhoods,
                            a Swedish massage session provides a much-needed retreat. Our licensed therapist has over 10 years of experience
                            in therapeutic massage techniques.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Swedish Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> Gentle strokes activate the parasympathetic nervous system,
                                    reducing cortisol levels and promoting deep relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Circulation:</strong> Long, flowing strokes encourage blood flow back
                                    toward the heart, improving oxygen delivery to tissues.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Muscle Relaxation:</strong> Kneading and gliding techniques ease muscle tension
                                    without the intensity of deep tissue work.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Sleep:</strong> Many clients report improved sleep quality after
                                    Swedish massage treatments.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Gentle pressure can ease minor aches and pains while
                                    promoting natural healing.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Clarity:</strong> Relaxation helps clear mental fog and restore focus
                                    for busy San Diego professionals.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Who Should Choose Swedish Massage?</h2>
                        <p className={styles.paragraph}>
                            Swedish massage is ideal for those new to massage therapy or anyone seeking pure relaxation
                            without intense pressure. San Diego residents who are <strong>sensitive to deep pressure</strong>,
                            dealing with <strong>mild stress and tension</strong>, or simply want to <strong>pamper themselves</strong>
                            find Swedish massage to be the perfect choice.
                        </p>
                        <p className={styles.paragraph}>
                            It&apos;s also an excellent option for <Link href="/info/prenatal-massage">pregnant women</Link> (with prenatal
                            modifications), <Link href="/info/massage-for-seniors">older adults</Link>, and anyone recovering from illness
                            who needs gentle, nurturing touch. Those seeking <Link href="/info/massage-for-stress-relief">stress relief</Link> or
                            help with <Link href="/info/massage-for-chronic-pain">chronic pain</Link> also benefit from Swedish techniques.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Swedish Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Your relaxation sanctuary serving North Park, Hillcrest, University Heights,
                            Normal Heights, South Park, and all of San Diego
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                            {' '}• Same-day relaxation appointments available
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Swedish Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Ready to Unwind and Relax?</h2>
                        <p className={styles.ctaText}>
                            Treat yourself to the classic Swedish massage experience at Nami Thai Massage.
                            Let go of stress and rediscover your calm. Evening and weekend sessions available.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Explore More</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/hot-stone-massage" className={styles.relatedLink}>Hot Stone Massage</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Massage in Hillcrest</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
