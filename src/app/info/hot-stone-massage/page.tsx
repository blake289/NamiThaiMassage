import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Hot Stone Massage San Diego | Heated Stone Therapy | Nami Thai Massage',
    description: 'Indulge in luxurious hot stone massage in North Park, San Diego. Warm basalt stones melt away tension, improve circulation, and promote deep relaxation. Experience the ultimate spa treatment.',
    keywords: 'hot stone massage San Diego, heated stone therapy North Park, warm stone massage, basalt stone massage, relaxation massage San Diego, luxury spa massage, muscle relaxation, therapeutic heat massage',
};

export default function HotStoneMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Hot Stone Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Luxury Therapy</p>
                    <h1 className={styles.title}>Hot Stone Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Experience the luxurious warmth of hot stone massage at Nami Thai Massage in North Park, San Diego.
                        Smooth, heated basalt stones combined with expert massage techniques create a deeply relaxing
                        experience that melts away tension and soothes both body and mind.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{ color: 'inherit', textDecoration: 'underline' }}>619-287-3034</a></strong>
                        {' '}• Ultimate relaxation experience
                    </p>
                    <div className={styles.heroImageWrapper}>
                        <img
                            src="/images/therapist_hot_stone_1769651444867.png"
                            alt="Hot stone massage therapy with heated basalt stones"
                            className={styles.heroImage}
                        />
                    </div>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Hot Stone Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Hot stone massage</strong> is a specialty massage where smooth, flat, heated stones are
                            placed on specific points of your body. The stones are typically <strong>basalt</strong>, a type
                            of volcanic rock that retains heat exceptionally well. Combined with traditional massage techniques,
                            the warmth penetrates deep into muscles, allowing for greater relaxation and therapeutic benefit.
                        </p>
                        <p className={styles.paragraph}>
                            For <strong>San Diego residents</strong> seeking a premium spa experience without traveling far,
                            Nami Thai Massage in <Link href="/info/massage-north-park"><strong>North Park</strong></Link> offers
                            authentic hot stone therapy that rivals any luxury resort treatment. With over 10 years of experience,
                            our licensed therapist combines hot stone therapy with <Link href="/info/swedish-massage">Swedish massage</Link> techniques
                            for maximum relaxation.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Hot Stone Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Deep Muscle Relaxation:</strong> Heat penetrates muscles, relieving tension
                                    more effectively than massage alone.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Circulation:</strong> Warmth expands blood vessels, increasing
                                    blood flow and oxygen delivery.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Heat therapy combined with massage provides effective
                                    relief for chronic pain conditions.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> The comforting warmth creates a cocoon-like
                                    feeling that promotes profound relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Sleep:</strong> The deeply relaxing effects often lead to improved
                                    sleep quality following treatment.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Calmness:</strong> Perfect for those dealing with anxiety or mental
                                    stress in busy San Diego lifestyles.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>The Hot Stone Experience</h2>
                        <p className={styles.paragraph}>
                            Your <strong>hot stone massage in San Diego</strong> begins with stones heated to the perfect
                            temperature. Stones are placed along your spine, on your palms, between your toes, and at other
                            key energy points. Your therapist then uses additional heated stones to massage your muscles,
                            gliding them along with nourishing oil.
                        </p>
                        <p className={styles.paragraph}>
                            The combination of stone placement and massage creates a unique sensation of radiating warmth
                            that spreads throughout your body. Many clients describe it as one of the most relaxing
                            experiences they&apos;ve ever had—a true escape from the everyday stress of <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link>,
                            <Link href="/info/massage-university-heights"><strong>University Heights</strong></Link>, and San Diego life.
                            Perfect for <Link href="/info/massage-for-stress-relief">stress relief</Link> and deep muscle relaxation.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Hot Stone Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Your luxury spa escape in the heart of San Diego • Serving North Park, Hillcrest,
                            University Heights, and surrounding neighborhoods
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{ color: 'inherit' }}>619-287-3034</a></strong>
                            {' '}• Book your luxury escape today
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Hot Stone Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Indulge in Warm Relaxation</h2>
                        <p className={styles.ctaText}>
                            Treat yourself to the ultimate relaxation experience. Book your hot stone
                            massage at Nami Thai Massage today. Perfect for special occasions or self-care.
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
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park Massage</Link>
                            <Link href="/services" className={styles.relatedLink}>All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
