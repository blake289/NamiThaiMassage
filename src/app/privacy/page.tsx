import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Privacy Policy | Nami Thai Massage",
    description:
        "Privacy policy for Nami Thai Massage. Learn how we protect your personal information and booking data.",
    alternates: {
        canonical: "https://namithaimassage.com/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        Privacy <span className={styles.goldText}>Policy</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className="container">
                    <div className={styles.contentWrapper}>
                        <p className={styles.lastUpdated}>Last updated: January 2025</p>

                        <h2 className={styles.sectionTitle}>Information We Collect</h2>
                        <p className={styles.text}>
                            When you book a massage appointment with Nami Thai Massage, we collect
                            only the information necessary to provide our services:
                        </p>
                        <ul className={styles.list}>
                            <li>Your name and contact information</li>
                            <li>Appointment preferences and booking details</li>
                            <li>Health information relevant to your massage session (provided voluntarily)</li>
                        </ul>

                        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                        <p className={styles.text}>
                            We use your personal information solely to:
                        </p>
                        <ul className={styles.list}>
                            <li>Schedule and confirm your massage appointments</li>
                            <li>Customize your massage treatment to your needs</li>
                            <li>Send appointment reminders</li>
                            <li>Respond to your inquiries</li>
                        </ul>

                        <h2 className={styles.sectionTitle}>Information Security</h2>
                        <p className={styles.text}>
                            We take the security of your personal information seriously. Your
                            booking information is processed through PocketSuite, a secure
                            scheduling platform. We do not sell, trade, or share your personal
                            information with third parties for marketing purposes.
                        </p>

                        <h2 className={styles.sectionTitle}>Cookies and Analytics</h2>
                        <p className={styles.text}>
                            Our website may use cookies to improve your browsing experience and
                            analyze website traffic. You can disable cookies in your browser
                            settings at any time.
                        </p>

                        <h2 className={styles.sectionTitle}>Your Rights</h2>
                        <p className={styles.text}>
                            You have the right to request access to, correction of, or deletion
                            of your personal information. To make such a request, please contact
                            us through our booking platform or Instagram.
                        </p>

                        <h2 className={styles.sectionTitle}>Contact Us</h2>
                        <p className={styles.text}>
                            If you have questions about this privacy policy or how we handle your
                            personal information, please reach out via Instagram{" "}
                            <a
                                href="https://www.instagram.com/naomi_nam246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                @naomi_nam246
                            </a>{" "}
                            or through our online booking system.
                        </p>

                        <div className={styles.businessInfo}>
                            <p>
                                <strong>Nami Thai Massage</strong>
                                <br />
                                3055 University Avenue
                                <br />
                                San Diego, CA 92104
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
