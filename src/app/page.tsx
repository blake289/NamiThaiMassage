import styles from './page.module.css';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Link from 'next/link';

// Featured services for homepage
const featuredServices = [
  {
    name: 'Thai Style',
    duration: '90 minutes',
    price: 200,
    description: '60 min Signature Massage + 15 min Head Massage + 15 min Traditional Thai Stretch. Our most popular signature experience.',
    featured: true,
    image: '/images/thai-massage-new.png',
  },
  {
    name: 'Deep Tissue Massage',
    duration: '60 minutes',
    price: 130,
    description: 'Designed to reach deep muscle layers, providing relief from chronic tension and promoting lasting relaxation.',
    image: '/images/deep-tissue-massage-new.png',
  },
  {
    name: 'Sports Massage',
    duration: '60 minutes',
    price: 149,
    description: 'Enhance athletic performance and support injury recovery with this specialized session targeting your specific needs.',
    image: '/images/sports-massage-new.png',
  },
];

// Testimonials
const testimonials = [
  {
    text: "The Thai Style massage was absolutely incredible. I've never felt so relaxed and rejuvenated. The combination of massage and stretching was exactly what my body needed.",
    author: "Michelle R.",
    service: "Thai Style",
  },
  {
    text: "As a runner, I need regular sports massage to stay in top form. Nami understands exactly how to work with athletic bodies and always leaves me feeling renewed.",
    author: "David K.",
    service: "Sports Massage",
  },
  {
    text: "The atmosphere is so calming and professional. Every session feels like a personalized healing experience. I look forward to my monthly appointments!",
    author: "Jennifer L.",
    service: "Deep Tissue",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src="/images/hero-bg.png" alt="" className={styles.heroBgImage} />
        </div>
        <div className={styles.heroOverlay}></div>

        {/* Animated Flower Decorations - SVG Lotus with true transparency */}
        <div className={styles.flowerLeft}>
          <svg className={styles.flowerImage} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B7424" />
                <stop offset="30%" stopColor="#C9A227" />
                <stop offset="60%" stopColor="#E8D48B" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
            {/* Center petal */}
            <path d="M50 5 Q55 25 50 45 Q45 25 50 5" fill="url(#goldGradientLeft)" />
            {/* Inner left petals */}
            <path d="M35 15 Q45 30 42 50 Q32 35 35 15" fill="url(#goldGradientLeft)" />
            <path d="M65 15 Q55 30 58 50 Q68 35 65 15" fill="url(#goldGradientLeft)" />
            {/* Mid petals */}
            <path d="M22 22 Q38 35 36 55 Q22 42 22 22" fill="url(#goldGradientLeft)" />
            <path d="M78 22 Q62 35 64 55 Q78 42 78 22" fill="url(#goldGradientLeft)" />
            {/* Outer petals */}
            <path d="M10 35 Q30 42 32 60 Q15 50 10 35" fill="url(#goldGradientLeft)" />
            <path d="M90 35 Q70 42 68 60 Q85 50 90 35" fill="url(#goldGradientLeft)" />
            {/* Base petals */}
            <path d="M25 50 Q40 55 45 70 Q30 62 25 50" fill="url(#goldGradientLeft)" />
            <path d="M75 50 Q60 55 55 70 Q70 62 75 50" fill="url(#goldGradientLeft)" />
            {/* Center bottom */}
            <path d="M50 50 Q55 62 50 75 Q45 62 50 50" fill="url(#goldGradientLeft)" />
          </svg>
        </div>
        <div className={styles.flowerRight}>
          <svg className={styles.flowerImage} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B7424" />
                <stop offset="30%" stopColor="#C9A227" />
                <stop offset="60%" stopColor="#E8D48B" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
            {/* Center petal */}
            <path d="M50 5 Q55 25 50 45 Q45 25 50 5" fill="url(#goldGradientRight)" />
            {/* Inner left petals */}
            <path d="M35 15 Q45 30 42 50 Q32 35 35 15" fill="url(#goldGradientRight)" />
            <path d="M65 15 Q55 30 58 50 Q68 35 65 15" fill="url(#goldGradientRight)" />
            {/* Mid petals */}
            <path d="M22 22 Q38 35 36 55 Q22 42 22 22" fill="url(#goldGradientRight)" />
            <path d="M78 22 Q62 35 64 55 Q78 42 78 22" fill="url(#goldGradientRight)" />
            {/* Outer petals */}
            <path d="M10 35 Q30 42 32 60 Q15 50 10 35" fill="url(#goldGradientRight)" />
            <path d="M90 35 Q70 42 68 60 Q85 50 90 35" fill="url(#goldGradientRight)" />
            {/* Base petals */}
            <path d="M25 50 Q40 55 45 70 Q30 62 25 50" fill="url(#goldGradientRight)" />
            <path d="M75 50 Q60 55 55 70 Q70 62 75 50" fill="url(#goldGradientRight)" />
            {/* Center bottom */}
            <path d="M50 50 Q55 62 50 75 Q45 62 50 50" fill="url(#goldGradientRight)" />
          </svg>
        </div>
        <div className={styles.heroInner}>
          {/* Nami's Portrait on Left */}
          <div className={styles.heroPortrait}>
            <img
              src="/images/nami-portrait.png"
              alt="Nami, Licensed Massage Therapist"
              className={styles.heroPortraitImage}
            />
          </div>

          {/* Hero Content on Right */}
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>Personalized Healing in North Park</p>
            <h1 className={styles.heroTitle}>
              Experience the Art of{' '}
              <span className={styles.goldText}>Rejuvenation</span>
            </h1>
            <p className={styles.heroDescription}>
              Traditional Thai massage blended with sports therapy techniques
              to relieve tension, restore balance, and promote long-term wellness.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Book Your Session
              </a>
              <Link href="/services" className={styles.btnSecondary}>
                View Services
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Our Treatments</p>
            <h2 className={styles.sectionTitle}>
              Signature <span className={styles.goldText}>Services</span>
            </h2>
            <div className={styles.goldLine}></div>
            <p className={styles.sectionDescription}>
              Each session is tailored to your body&apos;s unique needs, combining
              ancient healing traditions with modern therapeutic techniques.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <Link href="/services" className={styles.btnSecondary}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <img
                src="/images/nami-portrait.png"
                alt="Nami, Licensed Massage Therapist"
                className={styles.aboutImage}
              />
              <div className={styles.aboutImageAccent}></div>
            </div>
            <div className={styles.aboutContent}>
              <p className={styles.sectionSubtitle}>About Nami</p>
              <h2 className={styles.sectionTitle}>
                Your Healing <span className={styles.goldText}>Journey</span>
              </h2>
              <div className={styles.goldLine}></div>
              <p className={styles.aboutText}>
                At Nami Thai Massage, holistic well-being meets rejuvenation.
                I specialize in traditional Thai massage blended with sports therapy
                techniques to relieve tension, restore balance, and promote long-term wellness.
              </p>
              <p className={styles.aboutText}>
                Whether you&apos;re recovering from a workout, managing chronic pain, or
                simply in need of deep relaxation, each session is tailored to your
                body&apos;s unique needs in a calming, one-on-one environment.
              </p>
              <Link href="/about" className={styles.btnSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Client Stories</p>
            <h2 className={styles.sectionTitle}>
              What They <span className={styles.goldText}>Say</span>
            </h2>
            <div className={styles.goldLine}></div>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorService}>{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Begin Your <span className={styles.goldText}>Healing Journey</span>?
            </h2>
            <p className={styles.ctaDescription}>
              Book your personalized session today and experience the transformative
              power of traditional Thai massage.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Book Your Session
              </a>
              <Link href="/gift-cards" className={styles.btnSecondary}>
                Give the Gift of Wellness
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
