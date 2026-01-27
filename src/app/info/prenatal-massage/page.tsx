import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Prenatal Massage San Diego | Pregnancy Massage Therapy | Nami Thai Massage',
    description: 'Safe, nurturing prenatal massage in North Park, San Diego. Relieve pregnancy discomfort, reduce swelling, ease back pain, and promote relaxation during this special time. Expert pregnancy massage therapy.',
    keywords: 'prenatal massage San Diego, pregnancy massage North Park, maternity massage, safe massage during pregnancy, back pain pregnancy massage, swelling relief massage, prenatal therapy San Diego, expecting mother massage',
};

export default function PrenatalMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Prenatal Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Pregnancy Wellness</p>
                    <h1 className={styles.title}>Prenatal Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Pregnancy is a beautiful journey, but it can also bring discomfort. Prenatal massage at
                        Nami Thai Massage in North Park, San Diego offers expecting mothers safe, nurturing relief
                        from pregnancy-related aches while promoting relaxation and well-being.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>619-287-3034</a></strong>
                        {' '}• Safe, specialized care for mothers-to-be
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Prenatal Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Prenatal massage</strong> is therapeutic massage specifically adapted for the
                            changing needs of pregnancy. Using specialized positioning (usually side-lying with supportive
                            pillows) and modified techniques, prenatal massage addresses the unique discomforts that
                            accompany the miraculous journey of growing a new life.
                        </p>
                        <p className={styles.paragraph}>
                            At Nami Thai Massage in <Link href="/info/massage-north-park"><strong>San Diego&apos;s North Park</strong></Link> neighborhood,
                            we provide a safe, nurturing environment where expecting mothers from <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link>,
                            <Link href="/info/massage-university-heights"><strong>University Heights</strong></Link>, <Link href="/info/massage-normal-heights"><strong>Normal
                            Heights</strong></Link>, and throughout San Diego can find relief and relaxation. Our licensed therapist has over 10 years of experience
                            providing specialized prenatal care.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Prenatal Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Back Pain Relief:</strong> Eases the lower back pain caused by the shifting
                                    center of gravity during pregnancy.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Reduced Swelling:</strong> Gentle massage promotes lymphatic drainage,
                                    reducing swelling in feet, ankles, and hands.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Sleep:</strong> Relaxation and pain relief contribute to better
                                    quality sleep during pregnancy.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Stress & Anxiety Reduction:</strong> Massage lowers cortisol and increases
                                    serotonin, improving mood and reducing anxiety.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Sciatic Pain Relief:</strong> Addresses the nerve pain many pregnant women
                                    experience in the lower back and legs.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Headache Relief:</strong> Reduces tension headaches common during pregnancy
                                    without medication.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Safety & Comfort First</h2>
                        <p className={styles.paragraph}>
                            <strong>Prenatal massage</strong> is generally safe after the first trimester, though always
                            consult your healthcare provider first. At Nami Thai Massage, we use specialized positioning
                            with supportive pillows to ensure your comfort throughout the session. Certain pressure points
                            and techniques are avoided during pregnancy, and we always err on the side of gentleness.
                        </p>
                        <p className={styles.paragraph}>
                            Our therapist is trained in prenatal massage techniques and understands the unique needs of
                            expecting mothers. We create a peaceful, judgment-free environment where <strong>San Diego
                                moms-to-be</strong> can fully relax and focus on their well-being.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Prenatal Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            A peaceful sanctuary for expecting mothers • Serving all San Diego neighborhoods
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                            {' '}• Flexible scheduling for all trimesters
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Prenatal Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Nurturing Care for Expecting Mothers</h2>
                        <p className={styles.ctaText}>
                            You deserve to feel your best during this special time. Book your prenatal
                            massage and experience the comfort you need. Safe for second and third trimester.
                        </p>
                        <p className={styles.ctaText}>
                            <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/massage-for-stress-relief" className={styles.relatedLink}>Stress Relief</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest Area</Link>
                            <Link href="/services" className={styles.relatedLink}>All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
