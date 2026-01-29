import type { Metadata } from "next";
import styles from "./page.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Massage Services & Pricing | North Park San Diego",
    description:
        "Thai massage, deep tissue, Swedish, sports massage & aromatherapy in North Park, San Diego. View pricing from $70-$215. Book your personalized massage session online.",
    alternates: {
        canonical: "https://namithaimassage.com/services",
    },
};

// All massage services with SEO-enhanced descriptions
const massages = [
    {
        id: "swedish",
        name: "Swedish Massage (60 min)",
        duration: "60 minutes",
        price: 120,
        description:
            "Classic relaxation massage using long flowing strokes to release muscle tension, improve circulation, and promote overall well-being. Ideal for stress relief and first-time massage clients.",
        image: "/images/therapist_swedish_1769651403401.png",
    },
    {
        id: "swedish-90",
        name: "Swedish Massage (90 min)",
        duration: "90 minutes",
        price: 170,
        description:
            "Extended Swedish massage session allowing deeper relaxation and more comprehensive full-body rejuvenation. Perfect for complete stress relief.",
        image: "/images/swedish-massage-new.png",
    },
    {
        id: "deep-tissue",
        name: "Deep Tissue Massage (60 min)",
        duration: "60 minutes",
        price: 130,
        description:
            "Therapeutic deep tissue massage targeting chronic muscle tension and knots. Uses firm pressure to reach deep muscle layers for lasting pain relief.",
        image: "/images/therapist_deep_tissue_1769651389992.png",
    },
    {
        id: "deep-tissue-90",
        name: "Deep Tissue Massage (90 min)",
        duration: "90 minutes",
        price: 190,
        description:
            "Comprehensive deep tissue therapy session for full-body chronic pain relief, muscle recovery, and tension release. Recommended for severe muscle tightness.",
        image: "/images/deep-tissue-massage-new.png",
    },
    {
        id: "sports",
        name: "Sports Massage (60 min)",
        duration: "60 minutes",
        price: 149,
        description:
            "Specialized massage for athletes and active individuals. Enhances athletic performance, accelerates injury recovery, and prevents muscle strain.",
        image: "/images/therapist_sports_1769651427652.png",
    },
    {
        id: "sports-90",
        name: "Sports Massage (90 min)",
        duration: "90 minutes",
        price: 215,
        description:
            "Extended sports therapy session with comprehensive muscle work for serious athletes. Includes pre-event preparation or post-workout recovery techniques.",
        image: "/images/sports-massage-new.png",
    },
];

// Signature packages
const packages = [
    {
        id: "thai-style",
        name: "Thai Style Signature",
        duration: "90 minutes",
        price: 200,
        description:
            "Our most popular treatment: 60 min signature therapeutic massage + 15 min head & scalp massage + 15 min traditional Thai stretching. Complete relaxation and flexibility improvement.",
        featured: true,
        image: "/images/therapist_thai_stretch_1769651377578.png",
    },
    {
        id: "thai-combo",
        name: "Thai Combo Package",
        duration: "90 minutes",
        price: 200,
        description:
            "Ultimate relaxation: 60 min deep tissue massage + 15 min hot stone therapy + 15 min reflexology foot massage. Combines multiple modalities for complete relief.",
        featured: true,
        image: "/images/therapist_hot_stone_1769651444867.png",
    },
    {
        id: "aroma-release",
        name: "Aromatherapy Release",
        duration: "75 minutes",
        price: 160,
        description:
            "Luxury aromatherapy massage with essential oils combined with hot stone therapy. Promotes deep relaxation, stress relief, and improved circulation.",
        featured: true,
        image: "/images/therapist_aromatherapy_1769651458291.png",
    },
];

// Add-ons
const addons = [
    {
        name: "Head & Scalp Massage",
        duration: "20 minutes",
        price: 70,
        description:
            "Tension-relieving scalp massage to reduce headaches, release stress, and promote deep relaxation. Perfect add-on for desk workers.",
        image: "/images/head-scalp-massage.png",
    },
    {
        name: "Hands & Arms Therapy",
        duration: "30 minutes",
        price: 70,
        description:
            "Targeted therapy for hands, wrists, and arms. Ideal for office workers, artists, and anyone experiencing repetitive strain or carpal tunnel symptoms.",
        image: "/images/swedish-massage-new.png",
    },
    {
        name: "Foot & Calf Reflexology",
        duration: "20 minutes",
        price: 70,
        description:
            "Revitalizing reflexology massage for tired feet and calves. Improves circulation, reduces swelling, and restores energy to your legs.",
        image: "/images/foot-massage.png",
    },
    {
        name: "Hot Stone Add-on",
        duration: "30 minutes",
        price: 70,
        description:
            "Add therapeutic heated basalt stones to any massage. The deep warmth penetrates muscles for enhanced relaxation and pain relief.",
        image: "/images/hot-stone-massage-new.png",
    },
    {
        name: "Neck & Shoulders Focus",
        duration: "20 minutes",
        price: 70,
        description:
            "Concentrated work on neck and shoulder tension. Perfect for those with desk jobs, tech neck, or chronic upper body tightness.",
        image: "/images/neck-shoulder-massage-new.png",
    },
];

// Service schema structured data
const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Massage Services at Nami Thai Massage",
    description:
        "Complete menu of massage services and therapeutic treatments available in North Park, San Diego",
    itemListElement: [
        ...packages.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                provider: {
                    "@type": "LocalBusiness",
                    name: "Nami Thai Massage",
                },
                areaServed: "San Diego, CA",
                offers: {
                    "@type": "Offer",
                    price: service.price,
                    priceCurrency: "USD",
                },
            },
        })),
        ...massages.map((service, index) => ({
            "@type": "ListItem",
            position: packages.length + index + 1,
            item: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                provider: {
                    "@type": "LocalBusiness",
                    name: "Nami Thai Massage",
                },
                areaServed: "San Diego, CA",
                offers: {
                    "@type": "Offer",
                    price: service.price,
                    priceCurrency: "USD",
                },
            },
        })),
    ],
};

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesStructuredData),
                }}
            />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>
                        North Park, San Diego Massage Services
                    </p>
                    <h1 className={styles.heroTitle}>
                        Massage <span className={styles.goldText}>Services & Pricing</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        From <Link href="/info/thai-massage-benefits" className={styles.inlineLink}>traditional Thai massage</Link> to <Link href="/info/deep-tissue-massage" className={styles.inlineLink}>deep tissue therapy</Link>, each session
                        is personalized to your body&apos;s needs. Serving <Link href="/info/massage-north-park" className={styles.inlineLink}>North Park</Link>, <Link href="/info/massage-hillcrest" className={styles.inlineLink}>Hillcrest</Link>, <Link href="/info/massage-university-heights" className={styles.inlineLink}>University Heights</Link> & nearby areas.
                    </p>
                    <div className={styles.heroContact}>
                        <a href="tel:+16192873034" className={styles.phoneButton}>
                            619-287-3034
                        </a>
                        <span className={styles.divider}>or</span>
                        <a
                            href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bookButton}
                        >
                            Book Online 24/7
                        </a>
                    </div>
                </div>
            </section>

            {/* Signature Packages */}
            <section id="packages" className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Most Popular Treatments</p>
                        <h2 className={styles.sectionTitle}>
                            Signature{" "}
                            <span className={styles.goldText}>Massage Packages</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.sectionDescription}>
                            Our signature packages combine multiple therapeutic techniques for
                            the most comprehensive healing experience. Perfect for <Link href="/info/massage-for-stress-relief" className={styles.inlineLink}>stress relief</Link>, <Link href="/info/massage-for-chronic-pain" className={styles.inlineLink}>chronic pain</Link>, and complete relaxation.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {packages.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Massages */}
            <section id="massages" className={styles.sectionAlt}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Individual Treatments</p>
                        <h2 className={styles.sectionTitle}>
                            Therapeutic{" "}
                            <span className={styles.goldText}>Massage Services</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.sectionDescription}>
                            Choose from <Link href="/info/swedish-massage" className={styles.inlineLink}>Swedish</Link>, <Link href="/info/deep-tissue-massage" className={styles.inlineLink}>deep tissue</Link>, or <Link href="/info/sports-massage" className={styles.inlineLink}>sports massage</Link> in 60 or 90
                            minute sessions. Great for <Link href="/info/massage-for-athletes" className={styles.inlineLink}>athletes</Link>, <Link href="/info/massage-for-office-workers" className={styles.inlineLink}>office workers</Link>, and anyone seeking therapeutic relief.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {massages.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section id="add-ons" className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Enhance Any Session</p>
                        <h2 className={styles.sectionTitle}>
                            Massage <span className={styles.goldText}>Add-ons</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.sectionDescription}>
                            Customize your massage experience with targeted add-on treatments.
                            Especially beneficial for <Link href="/info/massage-for-office-workers" className={styles.inlineLink}>desk workers</Link> and those with specific problem areas. Add to any service for $70 each.
                        </p>
                    </div>

                    <div className={styles.addonsGrid}>
                        {addons.map((addon, index) => (
                            <ServiceCard key={index} {...addon} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className={styles.linksSection}>
                <div className="container">
                    <div className={styles.linksGrid}>
                        <Link href="/about" className={styles.linkCard}>
                            <h3>Meet Your Therapist</h3>
                            <p>
                                Learn about Nami&apos;s training and approach to personalized
                                massage therapy
                            </p>
                        </Link>
                        <Link href="/gift-cards" className={styles.linkCard}>
                            <h3>Gift Certificates</h3>
                            <p>Give the gift of relaxation with a digital gift card</p>
                        </Link>
                        <Link href="/contact" className={styles.linkCard}>
                            <h3>Questions?</h3>
                            <p>View FAQs or get in touch before booking</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Feel <span className={styles.goldText}>Better</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Schedule your personalized massage session in North Park, San
                            Diego. <strong>Same-day appointments often available.</strong>
                        </p>
                        <div className={styles.ctaButtons}>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book My Appointment
                            </a>
                            <a
                                href="tel:+16192873034"
                                className={styles.btnSecondary}
                            >
                                Call 619-287-3034
                            </a>
                        </div>
                        <p className={styles.ctaMicrocopy}>
                            ✓ 5.0 rating · ✓ Flexible cancellation · Not sure which service? <Link href="/contact" className={styles.microLink}>Text or call us</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
