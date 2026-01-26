import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Deep Tissue Massage San Diego | Pain Relief Therapy | Nami Thai Massage',
    description: 'Experience professional deep tissue massage in North Park, San Diego. Target chronic muscle tension, knots, and deep-seated pain with therapeutic techniques. Book your deep tissue massage session today.',
    keywords: 'deep tissue massage San Diego, deep tissue massage North Park, muscle tension relief, chronic pain massage, therapeutic massage San Diego, deep muscle therapy, trigger point therapy, massage for knots',
};

export default function DeepTissueMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Deep Tissue Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Massage Guide</p>
                    <h1 className={styles.title}>Deep Tissue Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Deep tissue massage targets the deepest layers of muscle and connective tissue to release chronic tension,
                        break up adhesions, and restore proper muscle function. At Nami Thai Massage in North Park, San Diego,
                        our skilled therapist delivers precise deep tissue work that brings lasting relief.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>(619) 287-3034</a></strong>
                        {' '}• Relief often felt after just one session
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Deep Tissue Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Deep tissue massage</strong> is a therapeutic technique that focuses on realigning the deeper
                            layers of muscles and connective tissue. Unlike <Link href="/info/swedish-massage">Swedish massage</Link> which
                            uses lighter pressure for relaxation, deep tissue massage applies sustained pressure using slow, deliberate
                            strokes to target the inner muscle layers and fascia (the connective tissue surrounding muscles).
                        </p>
                        <p className={styles.paragraph}>
                            This massage style is especially beneficial for those in <strong>San Diego</strong> who lead active lifestyles,
                            work physically demanding jobs, or spend long hours at desks in nearby <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link>,
                            <Link href="/info/massage-university-heights"><strong>University Heights</strong></Link>, or <Link href="/info/massage-north-park"><strong>North
                            Park</strong></Link> offices. It&apos;s also excellent for <Link href="/info/massage-for-athletes">athletes</Link> and
                            anyone dealing with <Link href="/info/massage-for-chronic-pain">chronic muscle tension</Link> or repetitive strain injuries.
                            Our licensed therapist has over 10 years of experience in therapeutic deep tissue work.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Deep Tissue Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Chronic Pain Relief:</strong> Effective for lower back pain, stiff neck, upper back tension,
                                    and shoulders—common complaints among San Diego professionals.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Break Up Scar Tissue:</strong> Helps break down adhesions and scar tissue that can
                                    limit movement and cause pain.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Mobility:</strong> Restores range of motion by releasing tight, contracted
                                    muscle groups and connective tissue.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Muscle Rehabilitation:</strong> Supports recovery from injuries and helps prevent
                                    future muscle problems.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Lower Blood Pressure:</strong> Studies show deep tissue massage can reduce
                                    systolic and diastolic blood pressure.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress Reduction:</strong> Deep pressure releases oxytocin and serotonin, promoting
                                    relaxation and improved mood.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Who Needs Deep Tissue Massage?</h2>
                        <p className={styles.paragraph}>
                            Deep tissue massage is ideal for <strong>San Diego residents</strong> who experience persistent muscle
                            tension that doesn&apos;t respond to lighter massage techniques. This includes <Link href="/info/massage-for-office-workers">office
                            workers</Link> from <strong>Hillcrest</strong> and <strong>University Heights</strong> suffering from desk-related
                            pain, athletes training in the <Link href="/info/massage-balboa-park"><strong>Balboa Park</strong></Link> area,
                            and anyone recovering from injuries or dealing with conditions like:
                        </p>
                        <p className={styles.paragraph}>
                            Chronic lower back pain • Neck and shoulder tension • Sciatica • Tennis elbow • Fibromyalgia •
                            Plantar fasciitis • Post-workout soreness • Repetitive strain injuries • Limited mobility •
                            Postural problems from desk work
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Deep Tissue Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Easily accessible from North Park, Hillcrest, University Heights, Normal Heights,
                            South Park, City Heights, and all San Diego neighborhoods
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>(619) 287-3034</a></strong>
                            {' '}• Same-day appointments available
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Deep Tissue Massage
                        </Link>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What to Expect During Your Session</h2>
                        <p className={styles.paragraph}>
                            Your <strong>deep tissue massage in San Diego</strong> begins with a consultation where you&apos;ll discuss
                            your problem areas and goals. Using a combination of her thumbs, knuckles, forearms, and elbows,
                            Nami applies focused pressure to break up muscle tension and adhesions.
                        </p>
                        <p className={styles.paragraph}>
                            While deep tissue work is more intense than relaxation massage, a skilled therapist ensures the
                            pressure is therapeutic without being painful. Communication is key—you&apos;re always in control of
                            the pressure level. After your session, you may experience some tenderness, but this typically
                            resolves within a day, leaving you with significantly improved muscle function.
                        </p>
                    </section>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Ready to Release Deep Muscle Tension?</h2>
                        <p className={styles.ctaText}>
                            Book your deep tissue massage at Nami Thai Massage in North Park and experience
                            lasting relief from chronic pain and tension. Most clients report significant improvement after their first visit.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit'}}>(619) 287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/massage-for-chronic-pain" className={styles.relatedLink}>Chronic Pain Relief</Link>
                            <Link href="/info/massage-for-office-workers" className={styles.relatedLink}>Office Workers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
