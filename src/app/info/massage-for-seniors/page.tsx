import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Seniors San Diego | Elderly Massage Therapy | Nami Thai Massage',
    description: 'Gentle, therapeutic massage for seniors in North Park, San Diego. Relieve arthritis pain, improve circulation, enhance mobility, and promote well-being for older adults. Compassionate elderly care.',
    keywords: 'massage for seniors San Diego, elderly massage North Park, geriatric massage therapy, arthritis massage, senior pain relief, gentle massage older adults, circulation improvement elderly, mobility massage',
};

export default function SeniorsMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Helpful Info</span>
                    <span>/</span>
                    <span>Massage for Seniors</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Who We Help</p>
                    <h1 className={styles.title}>Massage for Seniors & Elderly</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Aging gracefully means taking care of your body at every stage of life. At Nami Thai Massage
                        in North Park, San Diego, we offer gentle, therapeutic massage adapted to the unique needs
                        of seniors, promoting comfort, mobility, and overall well-being.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>(619) 287-3034</a></strong>
                        {' '}• Gentle, compassionate care
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Why Massage Benefits Seniors</h2>
                        <p className={styles.paragraph}>
                            As we age, our bodies undergo changes that can benefit tremendously from regular massage
                            therapy. Circulation slows, muscles become less elastic, joints stiffen, and the healing
                            power of human touch becomes even more valuable. <strong>Massage for seniors</strong>
                            addresses these age-related changes while providing nurturing, compassionate care.
                        </p>
                        <p className={styles.paragraph}>
                            For older adults in <Link href="/info/massage-north-park"><strong>San Diego&apos;s North Park</strong></Link>,
                            <Link href="/info/massage-hillcrest"><strong>Hillcrest</strong></Link>, <Link href="/info/massage-university-heights"><strong>University
                            Heights</strong></Link>, and surrounding communities, massage offers a drug-free approach to managing pain,
                            maintaining mobility, and enhancing quality of life. Our licensed therapist has over 10 years of experience working
                            with older adults and adapts techniques for individual needs.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits for Older Adults</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Pain Relief:</strong> Gentle techniques ease arthritis pain, muscle
                                    aches, and joint stiffness.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Circulation:</strong> Massage promotes blood flow, important
                                    for seniors with circulatory concerns.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Enhanced Mobility:</strong> Maintains flexibility and range of motion
                                    for daily activities.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Sleep:</strong> Relaxation from massage improves sleep quality,
                                    often a challenge for seniors.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Emotional Well-being:</strong> Therapeutic touch reduces feelings of
                                    isolation and promotes positive mood.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Reduced Anxiety:</strong> Calming massage helps manage anxiety and
                                    promotes a sense of peace.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Our Approach for Seniors</h2>
                        <p className={styles.paragraph}>
                            We understand that massage for seniors requires special considerations. Sessions may be
                            shorter and use gentler pressure. We accommodate mobility limitations and health conditions.
                            Communication is always open—you control the experience and can request adjustments at any time.
                        </p>
                        <p className={styles.paragraph}>
                            Conditions we commonly work with include <strong>arthritis, osteoporosis</strong> (with gentle,
                            appropriate techniques), <strong>diabetes-related circulation issues</strong>, and general
                            age-related muscle stiffness. We also help with <Link href="/info/massage-for-chronic-pain">chronic pain
                            management</Link> and <Link href="/info/massage-for-stress-relief">stress relief</Link>. Always consult
                            with your healthcare provider before starting massage therapy.
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Accessible Location in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Comfortable, accessible setting • Serving seniors throughout San Diego
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>(619) 287-3034</a></strong>
                            {' '}• Flexible scheduling and gentle approach
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Senior Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Age Well with Massage</h2>
                        <p className={styles.ctaText}>
                            You deserve to feel comfortable and cared for at every age. Schedule
                            a gentle, therapeutic session today. Shorter sessions available.
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
                            <Link href="/info/swedish-massage" className={styles.relatedLink}>Swedish Massage</Link>
                            <Link href="/info/massage-for-chronic-pain" className={styles.relatedLink}>Chronic Pain Relief</Link>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park Area</Link>
                            <Link href="/services" className={styles.relatedLink}>All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
