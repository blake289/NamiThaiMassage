import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../page.module.css';

export const metadata: Metadata = {
    title: 'Massage Near Balboa Park San Diego | Post-Activity Recovery | Nami Thai Massage',
    description: 'Find massage therapy near Balboa Park in San Diego. Perfect for runners, hikers, tennis players, and zoo visitors. Recover from Balboa Park activities at Nami Thai Massage in North Park.',
    keywords: 'massage near Balboa Park, Balboa Park massage San Diego, runner massage San Diego, post-hiking massage, San Diego Zoo massage, tennis massage, Morley Field massage, sports massage near Balboa Park',
};

export default function BalboaParkMassagePage() {
    return (
        <main className={styles.infoPage}>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Locations</span>
                    <span>/</span>
                    <span>Balboa Park Area</span>
                </nav>

                <header className={styles.heroSection}>
                    <p className={styles.subtitle}>Locations We Serve</p>
                    <h1 className={styles.title}>Massage Near Balboa Park</h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.intro}>
                        After a morning run through Balboa Park, a day at the San Diego Zoo, or a tennis match
                        at Morley Field, your body deserves expert recovery. Nami Thai Massage in North Park
                        is just minutes from Balboa Park, offering therapeutic massage to help you recover and recharge.
                    </p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your Post-Park Recovery Destination</h2>
                        <p className={styles.paragraph}>
                            <strong>Balboa Park</strong> is San Diego&apos;s crown jewel—1,200 acres of gardens, museums,
                            trails, and recreational facilities. Whether you&apos;re training for a marathon on the
                            park&apos;s trails, playing tennis at <strong>Morley Field</strong>, golfing, or simply
                            walking the Zoo, activities in Balboa Park can leave your muscles tired and tight.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Nami Thai Massage</strong> at <strong>3055 University Avenue</strong> is located
                            just minutes east of Balboa Park, making it the perfect stop for post-activity recovery.
                            Continue east on El Prado/University Avenue and you&apos;ll be on our massage table in no time.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Perfect for Balboa Park Active Lifestyle</h2>
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Runners & Joggers:</strong> Recover from trail runs with sports
                                    massage targeting legs and hips.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Tennis Players:</strong> Address arm and shoulder strain from
                                    Morley Field matches.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Golfers:</strong> Release back and shoulder tension from your
                                    round at the Balboa Park Golf Course.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Zoo Visitors:</strong> Soothe tired feet and legs after walking
                                    the world-famous San Diego Zoo.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Museum Goers:</strong> Relax after a full day exploring Balboa
                                    Park&apos;s amazing museums.
                                </p>
                            </div>
                            <div className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>✦</span>
                                <p className={styles.benefitText}>
                                    <strong>Cyclists:</strong> Recover from rides through and around the
                                    park&apos;s scenic routes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Recovery Massage Services</h2>
                        <p className={styles.paragraph}>
                            For Balboa Park athletes and visitors, we recommend:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Sports Massage:</strong> Targeted recovery for runners, tennis players, and active
                            visitors • <strong>Thai Massage:</strong> Stretching to improve flexibility after strenuous
                            activities • <strong>Deep Tissue:</strong> Address specific areas of tension and strain •
                            <strong> Swedish Massage:</strong> Full-body relaxation after a long day of exploration
                        </p>
                        <p className={styles.paragraph}>
                            Many clients book their massage in advance, timing it perfectly after their planned
                            Balboa Park activities. It&apos;s the ultimate way to end a perfect San Diego day!
                        </p>
                    </section>

                    <div className={styles.locationBox}>
                        <h3 className={styles.locationTitle}>Just Minutes from Balboa Park</h3>
                        <p className={styles.locationAddress}>3055 University Avenue, San Diego, CA</p>
                        <p className={styles.locationNeighborhoods}>
                            5-10 minutes east of Balboa Park • Easy drive down University Avenue •
                            Free street parking
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Book Recovery Massage
                        </Link>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Complete Your Balboa Park Day</h2>
                        <p className={styles.ctaText}>
                            Make massage the perfect ending to your Balboa Park adventure.
                            Book your session and recover in style.
                        </p>
                        <Link href="/book" className={styles.ctaButton}>
                            Schedule Your Appointment
                        </Link>
                    </div>

                    <div className={styles.relatedSection}>
                        <h3 className={styles.relatedTitle}>Related Services</h3>
                        <div className={styles.relatedLinks}>
                            <Link href="/info/sports-massage" className={styles.relatedLink}>Sports Massage</Link>
                            <Link href="/info/massage-for-athletes" className={styles.relatedLink}>Athletes</Link>
                            <Link href="/info/massage-north-park" className={styles.relatedLink}>North Park</Link>
                            <Link href="/info/massage-hillcrest" className={styles.relatedLink}>Hillcrest</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
