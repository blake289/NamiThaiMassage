import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Book Your Session | Nami Thai Massage',
    description: 'Schedule your personalized massage session at Nami Thai Massage in North Park, San Diego. Easy online booking with flexible appointment times.',
};

// Quick booking options
const popularServices = [
    {
        name: 'Thai Style',
        duration: '90 min',
        price: 200,
        description: 'Signature massage + head massage + Thai stretch',
        popular: true,
    },
    {
        name: 'Swedish Massage',
        duration: '60 min',
        price: 120,
        description: 'Relaxing full-body massage',
    },
    {
        name: 'Deep Tissue',
        duration: '60 min',
        price: 130,
        description: 'Intense pressure for chronic tension',
    },
];

const bookingSteps = [
    {
        number: '01',
        title: 'Choose Your Service',
        description: 'Select from our signature packages or classic massages',
    },
    {
        number: '02',
        title: 'Pick Your Time',
        description: 'Choose a date and time that works for you',
    },
    {
        number: '03',
        title: 'Confirm & Relax',
        description: 'Complete your booking and prepare for relaxation',
    },
];

export default function BookPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Begin Your Journey</p>
                    <h1 className={styles.heroTitle}>
                        Book Your <span className={styles.goldText}>Session</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Join 50+ satisfied clients with <strong>5-star ratings</strong>.
                        Your personalized massage experience awaits.
                    </p>
                    <div className={styles.heroContact}>
                        <a href="tel:+16192873034" className={styles.phoneLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.92 20.99 19.4 20.88C16.36 20.26 13.45 18.92 10.91 17.03C8.69 15.41 6.78 13.49 5.15 11.27C3.26 8.73 1.92 5.82 1.3 2.78C1.19 2.26 1.14 1.73 1.19 1.18C1.25 0.62 1.7 0.18 2.26 0.18H5.26C5.72 0.18 6.12 0.51 6.21 0.96C6.39 1.86 6.68 2.73 7.07 3.56C7.21 3.87 7.13 4.23 6.88 4.47L5.35 6C6.71 8.51 8.73 10.53 11.24 11.89L12.77 10.36C13.01 10.11 13.37 10.03 13.68 10.17C14.51 10.56 15.38 10.85 16.28 11.03C16.73 11.12 17.06 11.52 17.06 11.98V14.98C17.06 15.54 16.62 15.99 16.06 16.05C15.55 16.1 15.03 16.05 14.52 15.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            📞 Call (619) 287-3034
                        </a>
                        <span className={styles.availability}>✓ Same-day often available • ✓ Evening & weekend hours</span>
                    </div>
                </div>
            </section>

            {/* Booking Process */}
            <section className={styles.processSection}>
                <div className="container">
                    <div className={styles.stepsGrid}>
                        {bookingSteps.map((step, index) => (
                            <div key={index} className={styles.step}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Booking CTA */}
            <section className={styles.bookingSection}>
                <div className="container">
                    <div className={styles.bookingCard}>
                        <div className={styles.bookingCardContent}>
                            <div className={styles.bookingIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
                                    <line x1="9" y1="4" x2="9" y2="2" stroke="currentColor" strokeWidth="1.5" />
                                    <line x1="15" y1="4" x2="15" y2="2" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="15" r="2" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className={styles.bookingCardTitle}>
                                Ready to <span className={styles.goldText}>Feel Better?</span>
                            </h2>
                            <p className={styles.bookingCardText}>
                                <strong>Limited spots available today.</strong> View real-time availability and book your appointment in under 2 minutes.
                                You&apos;ll receive instant confirmation and automatic reminders.
                            </p>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                <span>Book My Appointment →</span>
                            </a>
                            <p className={styles.secureNote}>
                                ✓ Instant confirmation · ✓ Flexible cancellation · ✓ 5.0 rating
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Services Quick View */}
            <section className={styles.servicesPreview}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Quick Select</p>
                        <h2 className={styles.sectionTitle}>
                            Popular <span className={styles.goldText}>Services</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.servicesGrid}>
                        {popularServices.map((service, index) => (
                            <div key={index} className={`${styles.serviceQuickCard} ${service.popular ? styles.popular : ''}`}>
                                {service.popular && <span className={styles.popularBadge}>Most Popular</span>}
                                <h3 className={styles.serviceQuickName}>{service.name}</h3>
                                <p className={styles.serviceQuickDuration}>{service.duration}</p>
                                <p className={styles.serviceQuickDescription}>{service.description}</p>
                                <p className={styles.serviceQuickPrice}>${service.price}</p>
                                <a
                                    href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.btnSecondary}
                                >
                                    Book This
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className={styles.viewAllLink}>
                        <Link href="/services">
                            View All Services & Pricing →
                        </Link>
                        <p className={styles.servicesNote}>
                            Not sure which service is right for you? Learn about our{" "}
                            <Link href="/services/thai-massage">traditional Thai massage</Link>{" "}
                            or read our <Link href="/info">massage therapy guides</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Alternative */}
            <section className={styles.contactAlt}>
                <div className="container">
                    <div className={styles.contactAltContent}>
                        <h3 className={styles.contactAltTitle}>Questions? We're Here to Help</h3>
                        <p className={styles.contactAltText}>
                            Not sure which massage is right for you? Call or text Nami directly.
                            <strong> Most clients feel significant relief after their first visit.</strong>
                        </p>
                        <div className={styles.contactMethods}>
                            <a href="tel:+16192873034" className={styles.contactMethod}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.92 20.99 19.4 20.88C16.36 20.26 13.45 18.92 10.91 17.03C8.69 15.41 6.78 13.49 5.15 11.27C3.26 8.73 1.92 5.82 1.3 2.78C1.19 2.26 1.14 1.73 1.19 1.18C1.25 0.62 1.7 0.18 2.26 0.18H5.26C5.72 0.18 6.12 0.51 6.21 0.96C6.39 1.86 6.68 2.73 7.07 3.56C7.21 3.87 7.13 4.23 6.88 4.47L5.35 6C6.71 8.51 8.73 10.53 11.24 11.89L12.77 10.36C13.01 10.11 13.37 10.03 13.68 10.17C14.51 10.56 15.38 10.85 16.28 11.03C16.73 11.12 17.06 11.52 17.06 11.98V14.98C17.06 15.54 16.62 15.99 16.06 16.05C15.55 16.1 15.03 16.05 14.52 15.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span>(619) 287-3034</span>
                            </a>
                            <Link href="/contact" className={styles.contactMethod}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>Send a Message</span>
                            </Link>
                        </div>
                        <p className={styles.servingNote}>
                            Serving North Park, Hillcrest, University Heights, and surrounding
                            San Diego neighborhoods
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
