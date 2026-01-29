import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Massage Gift Certificates | Nami Thai Massage San Diego",
    description:
        "Give the gift of relaxation. Digital massage gift certificates for Nami Thai Massage in North Park, San Diego. Valid for any service, no expiration. Buy online instantly.",
    alternates: {
        canonical: "https://namithaimassage.com/gift-cards",
    },
};

// Product schema for gift certificate
const giftCardStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Massage Gift Certificate",
    description:
        "Digital gift certificate for massage services at Nami Thai Massage in North Park, San Diego. Valid for any massage service including Thai massage, deep tissue, sports massage, and more.",
    brand: {
        "@type": "Brand",
        name: "Nami Thai Massage",
    },
    offers: {
        "@type": "Offer",
        price: "70",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
            "@type": "LocalBusiness",
            name: "Nami Thai Massage",
            address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                neighborhood: "North Park",
            },
        },
    },
    category: "Gift Cards & Certificates",
};

export default function GiftCardsPage() {
    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(giftCardStructuredData),
                }}
            />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>The Perfect Gift</p>
                    <h1 className={styles.heroTitle}>
                        Massage{" "}
                        <span className={styles.goldText}>Gift Certificates</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Give someone special the gift of relaxation and rejuvenation with a
                        Nami Thai Massage gift certificate. Delivered instantly by email.
                    </p>
                    <div className={styles.heroContact}>
                        <a href="tel:+16192873034" className={styles.phoneLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.92 20.99 19.4 20.88C16.36 20.26 13.45 18.92 10.91 17.03C8.69 15.41 6.78 13.49 5.15 11.27C3.26 8.73 1.92 5.82 1.3 2.78C1.19 2.26 1.14 1.73 1.19 1.18C1.25 0.62 1.7 0.18 2.26 0.18H5.26C5.72 0.18 6.12 0.51 6.21 0.96C6.39 1.86 6.68 2.73 7.07 3.56C7.21 3.87 7.13 4.23 6.88 4.47L5.35 6C6.71 8.51 8.73 10.53 11.24 11.89L12.77 10.36C13.01 10.11 13.37 10.03 13.68 10.17C14.51 10.56 15.38 10.85 16.28 11.03C16.73 11.12 17.06 11.52 17.06 11.98V14.98C17.06 15.54 16.62 15.99 16.06 16.05C15.55 16.1 15.03 16.05 14.52 15.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            Questions? Call 619-287-3034
                        </a>
                    </div>
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
                                        <span className={styles.valueAmount}>$70 - $215</span>
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
                                The Gift of{" "}
                                <span className={styles.goldText}>Relaxation</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.giftText}>
                                Treat a loved one to a transformative massage experience. Our
                                digital gift certificates make the perfect present for
                                birthdays, holidays, anniversaries, Mother&apos;s Day,
                                Father&apos;s Day, or simply to show someone you care about
                                their well-being. Last-minute gift? No problem—receive your
                                certificate instantly by email.
                            </p>
                            <div className={styles.giftDetails}>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>
                                        Valid for any massage service or package
                                    </span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>
                                        No expiration date—use anytime
                                    </span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>
                                        Delivered instantly via email
                                    </span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>
                                        Add a personalized message
                                    </span>
                                </div>
                                <div className={styles.giftDetailItem}>
                                    <span className={styles.detailIcon}>✦</span>
                                    <span className={styles.detailText}>
                                        Can be combined with any add-on treatment
                                    </span>
                                </div>
                            </div>
                            <p className={styles.giftMicrocopy}>
                                <strong>Purchase takes less than 2 minutes</strong> - Instant
                                delivery via email
                            </p>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Purchase Gift Certificate
                            </a>
                            <p className={styles.giftNote}>
                                Need a custom amount or have questions?{" "}
                                <a href="tel:+16192873034" className={styles.inlinePhone}>
                                    Call 619-287-3034
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.howItWorks}>
                <div className="container">
                    <div className={styles.relaxationImageWrapper}>
                        <img
                            src="/images/gift-relaxation.png"
                            alt="Hands receiving a relaxing massage - the perfect gift of wellness"
                            className={styles.relaxationImage}
                        />
                    </div>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Quick & Easy</p>
                        <h2 className={styles.sectionTitle}>
                            How Gift Certificates{" "}
                            <span className={styles.goldText}>Work</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Purchase Online</h3>
                            <p className={styles.stepText}>
                                Click the button above to purchase a digital gift
                                certificate in any amount ($70–$215) through our secure booking system. The process takes
                                less than 2 minutes.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Receive by Email</h3>
                            <p className={styles.stepText}>
                                The gift certificate is delivered instantly via email—either to
                                you or directly to the recipient. Add a personal message to make
                                it special.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Redeem Anytime</h3>
                            <p className={styles.stepText}>
                                The recipient books online or calls 619-287-3034, selects any{" "}
                                <Link href="/services">massage service</Link> including our{" "}
                                <Link href="/services/thai-massage">signature Thai massage</Link>
                                , and applies the gift certificate at checkout. No expiration
                                date.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular for Gifts */}
            <section className={styles.popularSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Most Popular for Gifts</p>
                        <h2 className={styles.sectionTitle}>
                            Recommended{" "}
                            <span className={styles.goldText}>Gift Experiences</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.recommendedGrid}>
                        <div className={styles.recommendedCard}>
                            <h3>Thai Style Signature</h3>
                            <p className={styles.recommendedPrice}>$200</p>
                            <p className={styles.recommendedDesc}>
                                90 min including massage, head massage, and Thai stretching
                            </p>
                        </div>
                        <div className={styles.recommendedCard}>
                            <h3>Deep Tissue (90 min)</h3>
                            <p className={styles.recommendedPrice}>$190</p>
                            <p className={styles.recommendedDesc}>
                                Extended therapeutic massage for chronic tension relief
                            </p>
                        </div>
                        <div className={styles.recommendedCard}>
                            <h3>Aromatherapy Release</h3>
                            <p className={styles.recommendedPrice}>$160</p>
                            <p className={styles.recommendedDesc}>
                                75 min aromatherapy with hot stones, ultimate relaxation
                            </p>
                        </div>
                    </div>

                    <div className={styles.viewAllLink}>
                        <Link href="/services" className={styles.btnSecondary}>
                            View All Services & Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Want to Book for{" "}
                            <span className={styles.goldText}>Yourself</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Treat yourself to a massage session in North Park, San Diego.
                            Same-day appointments available.
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
                        <p className={styles.ctaPhone}>
                            Or call <a href="tel:+16192873034">619-287-3034</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
