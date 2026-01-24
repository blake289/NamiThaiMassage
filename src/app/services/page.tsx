import styles from './page.module.css';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

// All massage services
const massages = [
    {
        id: 'swedish',
        name: 'Swedish Massage (60 min)',
        duration: '60 minutes',
        price: 120,
        description: 'A 60-minute experience combining essential techniques to soothe your muscles and revitalize your entire body.',
        image: '/images/swedish-massage-new.png',
    },
    {
        id: 'swedish-90',
        name: 'Swedish Massage (90 min)',
        duration: '90 minutes',
        price: 170,
        description: 'Extended 90-minute Swedish massage for deeper relaxation and full-body rejuvenation.',
        image: '/images/swedish-massage-new.png',
    },
    {
        id: 'deep-tissue',
        name: 'Deep Tissue Massage (60 min)',
        duration: '60 minutes',
        price: 130,
        description: 'A 60-minute session applying intense pressure to reach deep muscle layers, providing relief from chronic tension.',
        image: '/images/deep-tissue-massage-new.png',
    },
    {
        id: 'deep-tissue-90',
        name: 'Deep Tissue Massage (90 min)',
        duration: '90 minutes',
        price: 190,
        description: 'Extended deep tissue therapy for comprehensive muscle tension relief and recovery.',
        image: '/images/deep-tissue-massage-new.png',
    },
    {
        id: 'sports',
        name: 'Sports Massage (60 min)',
        duration: '60 minutes',
        price: 149,
        description: 'Designed to enhance athletic performance and support injury recovery, this session targets your specific needs for optimal results.',
        image: '/images/sports-massage-new.png',
    },
    {
        id: 'sports-90',
        name: 'Sports Massage (90 min)',
        duration: '90 minutes',
        price: 215,
        description: 'Comprehensive sports therapy session for serious athletes and active individuals.',
        image: '/images/sports-massage-new.png',
    },
];

// Signature packages
const packages = [
    {
        id: 'thai-style',
        name: 'Thai Style',
        duration: '90 minutes',
        price: 200,
        description: '60 min Signature Massage + 15 min Head Massage + 15 min Traditional Thai Stretch. Our most popular signature experience.',
        featured: true,
        image: '/images/thai-massage-new.png',
    },
    {
        id: 'thai-combo',
        name: 'Thai Combo',
        duration: '90 minutes',
        price: 200,
        description: 'Deep tissue 60 minutes, hot stone 15 minutes, and 15 minutes foot massage for complete relaxation.',
        featured: true,
        image: '/images/hot-stone-massage-new.png',
    },
    {
        id: 'aroma-release',
        name: 'Aroma Release',
        duration: '75 minutes',
        price: 160,
        description: 'Experience deep relaxation as smooth, heated stones melt away tension and promote full-body circulation. Combines soothing massage techniques with the therapeutic warmth of hot stones.',
        featured: true,
        image: '/images/aromatherapy-massage-new.png',
    },
];

// Add-ons
const addons = [
    {
        name: 'Head & Scalp Massage',
        duration: '20 minutes',
        price: 70,
        description: 'Blissful head and scalp massage to release tension and promote relaxation.',
        image: '/images/head-scalp-massage.png',
    },
    {
        name: 'Hands & Arms',
        duration: '30 minutes',
        price: 70,
        description: 'Focused therapy for hands and arms, perfect for office workers and those with repetitive strain.',
        image: '/images/swedish-massage-new.png',
    },
    {
        name: 'Foot & Calf Massage',
        duration: '20 minutes',
        price: 70,
        description: 'Revitalizing foot and calf massage to restore tired legs and improve circulation.',
        image: '/images/foot-massage.png',
    },
    {
        name: 'Hot Stone Add-on',
        duration: '30 minutes',
        price: 70,
        description: 'Add the therapeutic warmth of hot stones to any massage for deeper muscle relaxation.',
        image: '/images/hot-stone-massage-new.png',
    },
    {
        name: 'Neck & Shoulders',
        duration: '20 minutes',
        price: 70,
        description: 'Targeted relief for the neck and shoulder area where stress commonly accumulates.',
        image: '/images/neck-shoulder-massage-new.png',
    },
];

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>Our Treatments</p>
                    <h1 className={styles.heroTitle}>
                        Services & <span className={styles.goldText}>Pricing</span>
                    </h1>
                    <div className={styles.goldLine}></div>
                    <p className={styles.heroDescription}>
                        Each session is tailored to your body&apos;s unique needs,
                        combining ancient healing traditions with modern therapeutic techniques.
                    </p>
                </div>
            </section>

            {/* Signature Packages */}
            <section id="packages" className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSubtitle}>Most Popular</p>
                        <h2 className={styles.sectionTitle}>
                            Signature <span className={styles.goldText}>Packages</span>
                        </h2>
                        <div className={styles.goldLine}></div>
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
                        <p className={styles.sectionSubtitle}>Classic Treatments</p>
                        <h2 className={styles.sectionTitle}>
                            Massage <span className={styles.goldText}>Services</span>
                        </h2>
                        <div className={styles.goldLine}></div>
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
                        <p className={styles.sectionSubtitle}>Enhance Your Experience</p>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.goldText}>Add-ons</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.sectionDescription}>
                            Complement any massage with these targeted treatments for a truly customized experience.
                        </p>
                    </div>

                    <div className={styles.addonsGrid}>
                        {addons.map((addon, index) => (
                            <ServiceCard key={index} {...addon} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Ready to <span className={styles.goldText}>Book</span>?
                        </h2>
                        <p className={styles.ctaDescription}>
                            Schedule your personalized healing session today.
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
                </div>
            </section>
        </div>
    );
}
