import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h3 className={styles.brandName}>
                            <span className={styles.goldText}>Nami</span> Thai Massage
                        </h3>
                        <p className={styles.tagline}>
                            Personalized healing for body and mind
                        </p>
                        <div className={styles.goldLine}></div>
                    </div>

                    {/* Navigation */}
                    <div className={styles.navSection}>
                        <h4 className={styles.sectionTitle}>Navigation</h4>
                        <nav className={styles.nav}>
                            <Link href="/">Home</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/about">About</Link>
                            <Link href="/gift-cards">Gift Cards</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className={styles.navSection}>
                        <h4 className={styles.sectionTitle}>Services</h4>
                        <nav className={styles.nav}>
                            <Link href="/services#swedish">Swedish Massage</Link>
                            <Link href="/services#deep-tissue">Deep Tissue</Link>
                            <Link href="/services#sports">Sports Massage</Link>
                            <Link href="/services#thai-style">Thai Style</Link>
                            <Link href="/services#packages">Packages</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={styles.contactSection}>
                        <h4 className={styles.sectionTitle}>Visit Us</h4>
                        <address className={styles.address}>
                            <p>North Park</p>
                            <p>San Diego, CA</p>
                        </address>
                        <a
                            href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bookBtn}
                        >
                            Book Your Session
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        © {currentYear} Nami Thai Massage. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
