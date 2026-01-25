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
    openGraph: {
        title: "Massage Gift Certificates | Nami Thai Massage",
        description: "Give the gift of relaxation. Digital massage gift certificates for Nami Thai Massage in North Park, San Diego. Valid for any service, no expiration.",
        url: "https://namithaimassage.com/gift-cards",
        siteName: "Nami Thai Massage",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Massage Gift Certificates | Nami Thai Massage",
        description: "Give the gift of relaxation. Digital massage gift certificates valid for any service.",
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
        price: "150",
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
                        Nami Thai Massage gift certificate.
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
                                The Gift of{" "}
                                <span className={styles.goldText}>Relaxation</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.giftText}>
                                Treat a loved one to a transformative massage experience. Our
                                digital gift certificates make the perfect present for
                                birthdays, holidays, anniversaries, Mother&apos;s Day,
                                Father&apos;s Day, or simply to show someone you care about
                                their well-being.
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
                                Click the button above to purchase a $150 digital gift
                                certificate through our secure booking system. The process takes
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
                                The recipient books online, selects any{" "}
                                <Link href="/services">massage service</Link>, and applies the
                                gift certificate at checkout. No expiration date.
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
