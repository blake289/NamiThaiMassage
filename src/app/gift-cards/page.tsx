import styles from './page.module.css';
import Link from 'next/link';

export default function GiftCardsPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Share the Gift</p>
                    <h1 className={styles.heroTitle}>
                        Gift <span className={styles.goldText}>Certificates</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Give the gift of relaxation and rejuvenation to someone special.
                    </p>
                </div>
            </section>

            {/* Gift Card Section */}
            <section className={styles.giftSection}>
                <div className="container">
                    <div className={styles.giftGrid}>
                        {/* Gift Card Visual */}
                        <div className={styles.giftCardWrapper}>
                            <div className={styles.giftCard}>
                                <div className={styles.giftCardInner}>
                                    <div className={styles.giftCardLogo}>
                                        <span className={styles.logoNami}>Nami</span>
                                        <span className={styles.logoSub}>Thai Massage</span>
                                    </div>
                                    <div className={styles.giftCardDivider}></div>
                                    <div className={styles.giftCardValue}>
                                        <span className={styles.valueLabel}>Gift Certificate</span>
                                        <span className={styles.valueAmount}>$150</span>
                                    </div>
                                    <div className={styles.giftCardFooter}>
                                        <span>North Park, San Diego</span>
                                    </div>
                                </div>
                                <div className={styles.giftCardShine}></div>
                            </div>
                        </div>

                        {/* Gift Card Info */}
                        <div className={styles.giftInfo}>
                            <h2 className={styles.giftTitle}>
                                The Perfect <span className={styles.goldText}>Gift</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.giftText}>
                                Treat a loved one to a transformative massage experience. Our gift
                                certificates are perfect for birthdays, holidays, anniversaries, or
                                simply to show someone you care about their well-being.
                            </p>
                            <div className={styles.giftDetails}>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>Valid for any massage service</span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>No expiration date</span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>Delivered digitally via email</span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>Add a personalized message</span>
                                </div>
                            </div>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Purchase Gift Certificate - $150
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.howItWorks}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Simple & Easy</p>
                        <h2 className={styles.sectionTitle}>
                            How It <span className={styles.goldText}>Works</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Purchase</h3>
                            <p className={styles.stepText}>
                                Click the button above to purchase a $150 gift certificate through our secure booking system.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Receive</h3>
                            <p className={styles.stepText}>
                                The gift certificate will be emailed to you or directly to the recipient.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Redeem</h3>
                            <p className={styles.stepText}>
                                The recipient can book any service and apply the gift certificate at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Looking for Something <span className={styles.goldText}>Else</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Book a massage for yourself or explore our full range of services.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book a Session
                            </a>
                            <Link href="/services" className={styles.btnSecondary}>
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
