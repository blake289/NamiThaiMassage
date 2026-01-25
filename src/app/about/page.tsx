import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Nami | Licensed Massage Therapist San Diego",
    description:
        "Meet Nami, your licensed massage therapist in North Park, San Diego. Specializing in traditional Thai massage combined with sports therapy for personalized healing.",
    alternates: {
        canonical: "https://namithaimassage.com/about",
    },
};

// Person schema for E-E-A-T
const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nami",
    jobTitle: "Licensed Massage Therapist",
    description:
        "Licensed massage therapist specializing in traditional Thai massage and sports therapy in North Park, San Diego",
    worksFor: {
        "@type": "LocalBusiness",
        name: "Nami Thai Massage",
        address: {
            "@type": "PostalAddress",
            addressLocality: "San Diego",
            addressRegion: "CA",
            neighborhood: "North Park",
        },
    },
    knowsAbout: [
        "Thai Massage",
        "Sports Massage",
        "Deep Tissue Massage",
        "Swedish Massage",
        "Muscle Tension Relief",
        "Athletic Recovery",
        "Chronic Pain Management",
    ],
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
            />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Licensed Massage Therapist</p>
                    <h1 className={styles.heroTitle}>
                        About <span className={styles.goldText}>Nami Thai Massage</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.story}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyImageWrapper}>
                            <img
                                src="/images/nami-portrait.png"
                                alt="Nami - Licensed Massage Therapist specializing in Thai massage and sports therapy in San Diego"
                                className={styles.storyImage}
                            />
                            <div className={styles.imageAccent}></div>
                        </div>
                        <div className={styles.storyContent}>
                            <h2 className={styles.storyTitle}>
                                Personalized{" "}
                                <span className={styles.goldText}>Massage Therapy</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.storyText}>
                                <strong>
                                    Welcome to Nami Thai Massage, where holistic healing meets
                                    personalized care.
                                </strong>{" "}
                                As a licensed massage therapist in San Diego, I specialize in
                                blending traditional Thai massage techniques with modern sports
                                therapy to address your unique needs.
                            </p>
                            <p className={styles.storyText}>
                                Whether you&apos;re an athlete seeking faster recovery, managing
                                chronic pain, dealing with stress-related tension, or simply
                                need deep relaxation, every session is tailored specifically for
                                your body. Unlike chain massage studios, you receive my full,
                                undivided attention in a calm, private environment.
                            </p>
                            <p className={styles.storyText}>
                                Located in the heart of{" "}
                                <strong>North Park, San Diego</strong>, my studio provides a
                                peaceful escape where your healing journey is the only priority.
                                No rushing, no distractions—just dedicated therapeutic care
                                focused entirely on your well-being.
                            </p>
                            <Link href="/services" className={styles.btnSecondary}>
                                View Massage Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophy}>
                <div className="container">
                    <div className={styles.philosophyContent}>
                        <p className={styles.philosophySubtitle}>Treatment Philosophy</p>
                        <h2 className={styles.philosophyTitle}>
                            What Makes{" "}
                            <span className={styles.goldText}>Thai Massage Different</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.philosophyText}>
                            Traditional Thai massage is more than just a spa treatment—it's an
                            ancient healing art developed over 2,500 years ago. Unlike Swedish
                            or standard relaxation massage, Thai massage combines
                            acupressure, energy line work, and assisted stretching to restore
                            balance throughout the entire body.
                        </p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Ancient Thai Traditions</h3>
                            <p className={styles.pillarText}>
                                Techniques passed down through generations of Thai healers,
                                focusing on energy lines (Sen) and pressure points to release
                                blocked energy and promote natural healing.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Modern Sports Therapy</h3>
                            <p className={styles.pillarText}>
                                Integration of contemporary sports massage and deep tissue
                                techniques for athletes, runners, and active individuals
                                requiring performance-focused recovery.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Personalized Treatment</h3>
                            <p className={styles.pillarText}>
                                Every session is customized based on your body's needs, whether
                                you're addressing chronic pain, recovering from injury, or
                                seeking stress relief and relaxation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who I Help Section */}
            <section className={styles.whoIHelp}>
                <div className="container">
                    <div className={styles.whoIHelpContent}>
                        <p className={styles.philosophySubtitle}>Who I Work With</p>
                        <h2 className={styles.philosophyTitle}>
                            Massage Therapy{" "}
                            <span className={styles.goldText}>For Everyone</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                    </div>

                    <div className={styles.pillarsGrid}>
                        <div className={styles.pillar}>
                            <h3 className={styles.pillarTitle}>Athletes & Runners</h3>
                            <p className={styles.pillarText}>
                                Sports massage for improved performance, faster recovery, and
                                injury prevention. Regular clients include marathoners, CrossFit
                                athletes, and weekend warriors.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <h3 className={styles.pillarTitle}>Office Professionals</h3>
                            <p className={styles.pillarText}>
                                Relief from desk-related tension, tech neck, and repetitive
                                strain. Deep tissue work for shoulders, neck, and back
                                tightness.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <h3 className={styles.pillarTitle}>Chronic Pain Sufferers</h3>
                            <p className={styles.pillarText}>
                                Therapeutic massage for ongoing pain management. Gentle yet
                                effective techniques for conditions like fibromyalgia, sciatica,
                                and tension headaches.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className={styles.location}>
                <div className="container">
                    <div className={styles.locationContent}>
                        <p className={styles.locationSubtitle}>Visit the Studio</p>
                        <h2 className={styles.locationTitle}>
                            <span className={styles.goldText}>North Park</span>, San Diego
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.locationText}>
                            Conveniently located in the vibrant North Park neighborhood of San
                            Diego, my private massage studio offers a peaceful sanctuary for
                            your healing session. With easy street parking and a calm,
                            welcoming atmosphere, you'll feel relaxed the moment you arrive.
                        </p>
                        <div className={styles.locationCtas}>
                            <a
                                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                Book Your Session
                            </a>
                            <Link href="/contact" className={styles.btnSecondary}>
                                Contact & Directions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
