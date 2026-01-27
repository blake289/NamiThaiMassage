import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Sports Massage San Diego | Athletic Recovery Therapy | Nami Thai Massage',
    description: 'Professional sports massage in North Park, San Diego for athletes and active individuals. Enhance performance, speed recovery, prevent injuries, and optimize your training with expert sports massage therapy.',
    keywords: 'sports massage San Diego, athletic massage North Park, muscle recovery massage, injury prevention massage, performance massage, runner massage San Diego, athlete massage therapy, post-workout massage',
};

export default function SportsMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/services">Services</Link>
                    <span>/</span>
                    <span>Sports Massage</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Athletic Performance</p>
                    <h1 className={styles.title}>Sports Massage Therapy</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        Whether you&apos;re training for the San Diego Marathon, surfing Pacific Beach waves, or hitting
                        the gym in North Park, sports massage helps you perform better and recover faster. Nami Thai Massage
                        offers expert sports massage for athletes and active individuals throughout San Diego.
                    </p>
                    <p className={styles.intro}>
                        <strong>Call or text: <a href="tel:6192873034" style={{color: 'inherit', textDecoration: 'underline'}}>619-287-3034</a></strong>
                        {' '}• Pre- and post-event sessions available
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>What is Sports Massage?</h2>
                        <p className={styles.paragraph}>
                            <strong>Sports massage</strong> is a targeted form of massage therapy designed specifically for
                            athletes and physically active people. It combines techniques from <Link href="/info/swedish-massage">Swedish
                            massage</Link>, <Link href="/info/deep-tissue-massage">deep tissue work</Link>, and stretching to address
                            the unique demands placed on athletic bodies. Sports massage can be used before events to prepare muscles,
                            after events to speed recovery, or during training to maintain optimal performance. Our licensed therapist
                            has over 10 years of experience working with athletes of all levels.
                        </p>
                        <p className={styles.paragraph}>
                            For <strong>San Diego&apos;s active community</strong>—from runners in <Link href="/info/massage-balboa-park"><strong>Balboa
                            Park</strong></Link> to CrossFit athletes in <Link href="/info/massage-north-park"><strong>North Park</strong></Link>,
                            surfers in <strong>Ocean Beach</strong>, and cyclists throughout the county—sports massage is an essential tool
                            for staying at peak performance. We also specialize in helping <Link href="/info/massage-for-athletes">athletes</Link> prevent
                            and recover from injuries.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits of Sports Massage</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Faster Recovery:</strong> Reduces muscle soreness and speeds up recovery time
                                    between workouts and competitions.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Injury Prevention:</strong> Regular massage identifies and addresses tight areas
                                    before they become serious injuries.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Enhanced Flexibility:</strong> Stretching techniques improve range of motion
                                    for better athletic performance.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Reduced Muscle Tension:</strong> Targeted work releases areas of chronic tightness
                                    that limit performance.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Circulation:</strong> Better blood flow delivers more oxygen and nutrients
                                    to working muscles.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Preparation:</strong> Pre-event massage can help athletes focus and
                                    enter the right mental state.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sports Massage for San Diego Athletes</h2>
                        <p className={styles.paragraph}>
                            San Diego&apos;s year-round outdoor lifestyle makes it a haven for athletes of all types.
                            <strong> Sports massage</strong> at Nami Thai Massage supports:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Runners & Trail Athletes</strong> training in Balboa Park and Mission Trails •
                            <strong> Surfers</strong> from Pacific Beach to La Jolla • <strong>Cyclists</strong> tackling
                            local hills • <strong>CrossFit & Gym Athletes</strong> in North Park and Hillcrest •
                            <strong> Swimmers</strong> and triathletes • <strong>Yoga practitioners</strong> seeking deeper
                            flexibility • <strong>Weekend warriors</strong> staying active in San Diego&apos;s perfect weather
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Sports Massage in North Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Near Balboa Park • Minutes from Hillcrest gyms • Serving all San Diego athletic communities
                        </p>
                        <p className={styles.locationNeighborhoods}>
                            <strong>Call: <a href="tel:6192873034" style={{color: 'inherit'}}>619-287-3034</a></strong>
                            {' '}• Flexible scheduling around training
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Sports Massage
                        </Link>
                    </div>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Pre-Event vs Post-Event Massage</h2>
                        <p className={styles.paragraph}>
                            <strong>Pre-event sports massage</strong> (ideally 24-48 hours before competition) uses
                            brisk, stimulating techniques to warm up muscles and increase circulation without causing
                            relaxation that might diminish performance.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Post-event sports massage</strong> focuses on recovery—flushing metabolic waste from
                            muscles, reducing inflammation, and addressing any areas of strain. For San Diego athletes,
                            scheduling a recovery massage within 24-48 hours of major events can dramatically reduce
                            soreness and speed return to training.
                        </p>
                    </section>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Optimize Your Athletic Performance</h2>
                        <p className={styles.ctaText}>
                            Join San Diego&apos;s top athletes who use regular sports massage to train harder,
                            recover faster, and perform at their best. Book recovery sessions around your competition schedule.
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
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue Massage</Link>
                            <Link href="/info/massage-for-athletes" className={styles.relatedLink}>Massage for Athletes</Link>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Near Balboa Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
