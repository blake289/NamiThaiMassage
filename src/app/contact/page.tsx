import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Book Massage Appointment | Contact Nami Thai Massage",
    description:
        "Book your massage appointment in North Park, San Diego. Online booking available 24/7. View location, hours, parking info, and answers to common questions.",
    alternates: {
        canonical: "https://namithaimassage.com/contact",
    },
    openGraph: {
        title: "Contact & Book | Nami Thai Massage San Diego",
        description: "Book your massage appointment in North Park, San Diego. Online booking available 24/7. View location, hours, and parking info.",
        url: "https://namithaimassage.com/contact",
        siteName: "Nami Thai Massage",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contact & Book | Nami Thai Massage San Diego",
        description: "Book your massage appointment in North Park, San Diego. Online booking available 24/7.",
    },
};

// FAQ data
const faqs = [
    {
        question: "What should I wear to my massage appointment?",
        answer:
            "Wear comfortable, loose-fitting clothing. For traditional Thai massage and stretching, you'll remain clothed throughout the session. For oil-based massages like Swedish or deep tissue, professional draping is provided for your privacy and comfort.",
    },
    {
        question: "How early should I arrive for my massage?",
        answer:
            "Please arrive 5-10 minutes before your scheduled appointment. This allows time to settle in, complete any intake forms if it's your first visit, and discuss specific areas of concern or tension with your therapist.",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "We request 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee. We understand emergencies happen—please contact us as soon as possible if you need to change your appointment.",
    },
    {
        question: "Is parking available near the studio?",
        answer:
            "Yes, free street parking is available throughout the North Park neighborhood. Specific parking recommendations will be provided in your booking confirmation. The studio is easily accessible from most San Diego areas.",
    },
    {
        question: "Do you accept walk-ins or only appointments?",
        answer:
            "We operate by appointment only to ensure each client receives dedicated, personalized attention. You can book online 24/7 through our booking system, and same-day appointments are often available.",
    },
    {
        question: "What forms of payment do you accept?",
        answer:
            "We accept all major credit cards, debit cards, and cash. Payment is collected at the time of service. Gift certificates are also accepted and can be purchased online.",
    },
];

// FAQPage schema
const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>North Park, San Diego</p>
                    <h1 className={styles.heroTitle}>
                        Book Your <span className={styles.goldText}>Massage Appointment</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Ready to experience personalized Thai massage therapy? Book online
                        24/7 or reach out with any questions before your first visit.
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
                                The easiest way to schedule your massage is through our online
                                booking system. Browse available services, choose your preferred
                                time, and confirm your appointment in minutes.
                            </p>
                            <ul className={styles.bookingBenefits}>
                                <li>✓ Available 24/7</li>
                                <li>✓ See real-time availability</li>
                                <li>✓ Same-day appointments often available</li>
                                <li>✓ Instant confirmation</li>
                            </ul>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book Your Session Now
                            </a>
                        </div>

                        {/* Location Info */}
                        <div className={styles.infoCard}>
                            <h2 className={styles.cardTitle}>
                                Studio <span className={styles.goldText}>Location</span>
                            </h2>
                            <div className={styles.goldLine}></div>

                            <div className={styles.infoGroup}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.infoLabel}>Address</h3>
                                        <p className={styles.infoText}>
                                            3055 University Avenue
                                            <br />
                                            San Diego, CA
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>⏰</div>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.infoLabel}>Hours</h3>
                                        <p className={styles.infoText}>
                                            By Appointment Only
                                            <br />
                                            7 Days a Week, 9am - 8pm
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>🚗</div>
                                    <div className={styles.infoContent}>
                                        <h3 className={styles.infoLabel}>Parking</h3>
                                        <p className={styles.infoText}>
                                            Free street parking available
                                            <br />
                                            Details in booking confirmation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mapContainer}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5!2d-117.1277!3d32.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9551e1c5a1d1d%3A0x0!2s3055%20University%20Ave%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1706139200000!5m2!1sen!2sus"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Nami Thai Massage Location - 3055 University Avenue, San Diego"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className={styles.contactFormSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Get In Touch</p>
                        <h2 className={styles.sectionTitle}>
                            Send a <span className={styles.goldText}>Message</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.formIntro}>
                            Have a question before booking? Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>
                    </div>

                    <form className={styles.contactForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={styles.formInput}
                                    placeholder="Your first name"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={styles.formInput}
                                    placeholder="Your last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.formInput}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.formTextarea}
                                placeholder="How can we help you?"
                                rows={4}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.btnPrimary}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Before Your Visit</p>
                        <h2 className={styles.sectionTitle}>
                            Frequently Asked{" "}
                            <span className={styles.goldText}>Questions</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Link */}
            <section className={styles.servicesLink}>
                <div className="container">
                    <div className={styles.servicesLinkContent}>
                        <h2 className={styles.servicesLinkTitle}>
                            Not Sure Which Massage to Book?
                        </h2>
                        <p className={styles.servicesLinkText}>
                            View our full menu of{" "}
                            <Link href="/services">massage services and pricing</Link> to find
                            the perfect treatment for your needs. From Thai massage to sports
                            therapy, we have options for every body.
                        </p>
                        <Link href="/services" className={styles.btnSecondary}>
                            View All Services
                        </Link>
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
                            Book your personalized massage session in North Park, San Diego
                            today.
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
