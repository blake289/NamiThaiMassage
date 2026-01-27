import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Thai Massage Benefits | Health & Wellness Guide | Nami Thai Massage',
    description: 'Discover the incredible health benefits of traditional Thai massage in San Diego. Learn how Thai massage therapy relieves pain, improves flexibility, reduces stress, and promotes wellness at Nami Thai Massage in North Park.',
    keywords: 'Thai massage benefits, Thai massage San Diego, traditional Thai massage, Thai yoga massage, Sen energy lines, Thai massage therapy North Park, massage health benefits, flexibility improvement, stress relief massage',
};

export default function ThaiMassageBenefitsPage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Thai Massage Benefits</span>
                </nav>

                {/* Hero Section */}
                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Massage Guide</p>
                    <h1 className={styles.title}>The Amazing Benefits of Thai Massage</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Traditional Thai massage is an ancient healing art that combines acupressure,
                        yoga-like stretching, and energy work to promote total body wellness. At Nami Thai Massage
                        in North Park, San Diego, we bring authentic Thai massage techniques to help you
                        achieve optimal health and relaxation.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>619-287-3034</a></strong>
                        {' '}• Experience authentic Thai massage today
                    </p>
                </header>

                {/* Content */}
                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Traditional Thai Massage?</h2>
                        <p className={styles.paragraph}>
                            Often called &ldquo;lazy person&apos;s yoga,&rdquo; <strong>Thai massage</strong> is a 2,500-year-old
                            healing practice that originated in Thailand. Unlike Western massage styles like <Link href="/info/swedish-massage">Swedish
                            massage</Link>, Thai massage is performed on a floor mat with the client fully clothed in comfortable attire.
                            The therapist uses their hands, thumbs, elbows, knees, and feet to apply pressure along the body&apos;s
                            <strong> Sen energy lines</strong> while guiding you through assisted yoga stretches.
                        </p>
                        <p className={styles.paragraph}>
                            At our <Link href="/info/massage-north-park"><strong>North Park massage studio</strong></Link>, Nami brings
                            her authentic Thai training and over 10 years of experience to deliver traditional Thai massage that honors
                            this ancient practice while addressing modern health concerns common among San Diego residents. She specializes
                            in combining Thai techniques with <Link href="/info/deep-tissue-massage">deep tissue</Link> work for maximum therapeutic benefit.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Health Benefits of Thai Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Flexibility:</strong> The yoga-like stretches increase range of motion
                                    and joint mobility, perfect for athletes and desk workers in San Diego.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Targeted pressure on Sen lines releases muscle tension
                                    and alleviates chronic pain in the back, neck, and shoulders.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> The rhythmic compressions and stretches activate
                                    the parasympathetic nervous system, promoting deep relaxation.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Energy Boost:</strong> By unblocking energy pathways, Thai massage increases
                                    vitality and reduces fatigue.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Circulation:</strong> Compression techniques improve blood flow and
                                    lymphatic drainage throughout the body.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Headache Relief:</strong> Thai massage techniques targeting the head, neck,
                                    and shoulders can reduce tension headaches and migraines.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Who Benefits Most from Thai Massage?</h2>
                        <p className={styles.paragraph}>
                            Thai massage in San Diego is ideal for a wide range of people. <Link href="/info/massage-for-office-workers"><strong>Office
                            workers</strong></Link> from nearby <Link href="/info/massage-hillcrest">Hillcrest</Link> and <Link href="/info/massage-university-heights">University
                            Heights</Link> find relief from desk-related tension. <Link href="/info/massage-for-athletes"><strong>Athletes</strong></Link> use
                            it for recovery and flexibility. Those with <Link href="/info/massage-for-chronic-pain"><strong>chronic pain</strong></Link> conditions
                            benefit from the therapeutic stretching. Even people simply seeking <Link href="/info/massage-for-stress-relief"><strong>stress
                            relief</strong></Link> from busy San Diego lifestyles discover profound relaxation.
                        </p>
                        <p className={styles.paragraph}>
                            Whether you live in <Link href="/info/massage-north-park">North Park</Link>, <Link href="/info/massage-normal-heights">Normal
                            Heights</Link>, or anywhere in greater San Diego, Nami Thai Massage offers convenient access to authentic Thai massage therapy
                            that can transform your health and well-being.
                        </p>
                    </section>

                    {/* Location Box */}
                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Visit Us in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Serving North Park, Hillcrest, University Heights, Normal Heights, South Park,
                            City Heights, Kensington, and all of San Diego
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                            {' '}• Same-day bookings often available
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Thai Massage
                        </Link>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What to Expect During Your Session</h2>
                        <p className={styles.paragraph}>
                            When you arrive at Nami Thai Massage near Balboa Park, you&apos;ll be welcomed into a serene,
                            calming environment. You&apos;ll wear loose, comfortable clothing (we provide Thai fisherman pants
                            if needed). Your <strong>licensed massage therapist</strong> will discuss your health goals
                            and any areas of concern before beginning.
                        </p>
                        <p className={styles.paragraph}>
                            The session combines gentle rocking, rhythmic compression, and assisted stretches. Many clients
                            describe it as both energizing and deeply relaxing. Sessions typically last 60 to 90 minutes,
                            allowing time for a complete full-body treatment that addresses all major muscle groups and
                            energy pathways.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Experience Authentic Thai Massage in San Diego</h2>
                        <p className={styles.ctaText}>
                            Ready to discover the transformative benefits of Thai massage? Book your session with
                            Nami today and feel the difference authentic Thai healing can make. First-time clients often report
                            feeling more flexible and energized immediately.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    {/* Related Links */}
                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Explore More Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue Massage</Link>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/massage-for-athletes" className={styles.relatedLink}>Massage for Athletes</Link>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>Massage in North Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
