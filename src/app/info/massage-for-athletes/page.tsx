import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage for Athletes San Diego | Sports Recovery Therapy | Nami Thai Massage',
    description: 'Professional massage therapy for athletes in North Park, San Diego. Enhance performance, speed recovery, prevent injuries. Perfect for runners, cyclists, CrossFit athletes, and all active San Diego residents.',
    keywords: 'massage for athletes San Diego, sports recovery massage, runner massage North Park, cyclist massage, CrossFit recovery, athlete muscle recovery, performance massage, training massage therapy',
    alternates: {
        canonical: 'https://namithaimassage.com/info/massage-for-athletes',
    },
    openGraph: {
        title: 'Massage for Athletes | Sports Recovery Therapy San Diego',
        description: 'Professional massage therapy for athletes in North Park, San Diego. Enhance performance and speed recovery.',
        url: 'https://namithaimassage.com/info/massage-for-athletes',
        siteName: 'Nami Thai Massage',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary',
        title: 'Massage for Athletes | Sports Recovery Therapy',
        description: 'Professional massage therapy for athletes in San Diego.',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://namithaimassage.com" },
        { "@type": "ListItem", position: 2, name: "Helpful Info", item: "https://namithaimassage.com/services" },
        { "@type": "ListItem", position: 3, name: "Massage for Athletes", item: "https://namithaimassage.com/info/massage-for-athletes" },
    ],
};

export default function AthletesMassagePage() {
    return (
        <main className={styles.infoPage}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Helpful Info</span>
                    <span>/</span>
                    <span>Massage for Athletes</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Who We Help</p>
                    <h1 className={styles.title}>Massage for Athletes & Active Lifestyles</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        San Diego&apos;s year-round outdoor lifestyle keeps athletes moving. Whether you&apos;re training for
                        your next marathon, surfing daily, or pushing limits at CrossFit, massage therapy at Nami Thai Massage
                        in North Park helps you perform better and recover faster.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Why Athletes Need Massage</h2>
                        <p className={styles.paragraph}>
                            Intense training creates micro-damage in muscle fibers, builds up metabolic waste, and leads
                            to tightness that limits performance. <strong>Regular massage therapy</strong> is an essential
                            recovery tool used by professional athletes worldwide—and it&apos;s equally valuable for recreational
                            athletes in <strong>San Diego</strong> who want to train consistently and injury-free.
                        </p>
                        <p className={styles.paragraph}>
                            From <strong>Balboa Park</strong> runners to <strong>Pacific Beach</strong> surfers, <strong>Mission
                                Bay</strong> triathletes to <strong>North Park</strong> CrossFit athletes, massage therapy
                            supports the active San Diego lifestyle.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Benefits for Athletes</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Faster Recovery:</strong> Massage flushes metabolic waste and brings fresh
                                    blood to tired muscles, reducing DOMS.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Injury Prevention:</strong> Regular massage identifies tight spots before
                                    they become injuries.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Improved Flexibility:</strong> Especially with Thai massage stretches,
                                    increase your range of motion.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Better Performance:</strong> Relaxed, supple muscles contract more efficiently
                                    than tight, restricted ones.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Mental Edge:</strong> Relaxation reduces pre-competition anxiety and
                                    improves focus.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Training Longevity:</strong> Consistent massage helps you stay active
                                    for years, not just seasons.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sports We Support in San Diego</h2>
                        <p className={styles.paragraph}>
                            <strong>Running & Trail:</strong> Marathon training, Balboa Park runs, trail running •
                            <strong> Surfing:</strong> Paddling recovery, shoulder maintenance • <strong>Cycling:</strong> Road
                            and mountain bike leg recovery • <strong>CrossFit & Gym:</strong> Heavy lifting recovery •
                            <strong> Swimming & Triathlon:</strong> Shoulder and full-body work • <strong>Yoga:</strong>
                            Deepening flexibility • <strong>Golf & Tennis:</strong> Arm and shoulder care •
                            <strong> Soccer, Basketball, Volleyball:</strong> Full-body athletic recovery
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Train Hard, Recover Smarter</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            Minutes from Balboa Park • Convenient for Hillcrest gyms • Serving all San Diego athletes
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Athletic Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Upgrade Your Recovery Routine</h2>
                        <p className={styles.ctaText}>
                            Join San Diego&apos;s smartest athletes who use regular massage to train harder
                            and recover faster.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Session
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/deep-tissue-massage" className={styles.relatedLink}>Deep Tissue</Link>
                            <Link href="/info/thai-massage-benefits" className={styles.relatedLink}>Thai Massage</Link>
                            <Link href="/info/massage-balboa-park" className={styles.relatedLink}>Near Balboa Park</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
