import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Get in Touch</p>
                    <h1 className={styles.heroTitle}>
                        Book Your <span className={styles.goldText}>Session</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Ready to begin your healing journey? Book online or reach out with any questions.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Booking Card */}
                        <div className={styles.bookingCard}>
                            <h2 className={styles.cardTitle}>
                                Book <span className={styles.goldText}>Online</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.cardText}>
                                The easiest way to book your massage is through our online booking system.
                                Choose your service, select a time that works for you, and you&apos;re all set.
                            </p>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book Your Session
                            </a>
                        </div>

                        {/* Location Info */}
                        <div className={styles.infoCard}>
                            <h2 className={styles.cardTitle}>
                                Visit <span className={styles.goldText}>Us</span>
                            </h2>
                            <div className={styles.goldLine}></div>

                            <div className={styles.infoGroup}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.infoLabel}>Location</h3>
                                        <p className={styles.infoText}>
                                            North Park<br />
                                            San Diego, CA
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>⏰</div>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.infoLabel}>Hours</h3>
                                        <p className={styles.infoText}>
                                            By Appointment Only<br />
                                            7 Days a Week
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mapPlaceholder}>
                                <span className={styles.mapIcon}>📍</span>
                                <span className={styles.mapText}>North Park, San Diego</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Common Questions</p>
                        <h2 className={styles.sectionTitle}>
                            Frequently <span className={styles.goldText}>Asked</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What should I wear?</h3>
                            <p className={styles.faqAnswer}>
                                Wear comfortable, loose-fitting clothing. For Thai massage and stretching,
                                you&apos;ll remain clothed. For oil-based massages, draping is provided for your comfort.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How early should I arrive?</h3>
                            <p className={styles.faqAnswer}>
                                Please arrive 5-10 minutes before your appointment to allow time to settle in
                                and discuss any specific areas of concern.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What&apos;s your cancellation policy?</h3>
                            <p className={styles.faqAnswer}>
                                We ask for 24 hours notice for cancellations or rescheduling.
                                Late cancellations may be subject to a fee.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Is parking available?</h3>
                            <p className={styles.faqAnswer}>
                                Yes, free street parking is available in the North Park neighborhood.
                                Specific parking details will be provided upon booking.
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
                            Ready to Feel <span className={styles.goldText}>Amazing</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Book your personalized massage session today.
                        </p>
                        <a
                            href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnPrimary}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
