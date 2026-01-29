import type { Metadata } from "next";
import styles from "./page.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thai Massage San Diego | Nami Thai Massage North Park",
  description:
    "Expert Thai massage in North Park, San Diego. Personalized sessions blending traditional Thai techniques with sports therapy for pain relief, relaxation & athletic recovery. Book today.",
  alternates: {
    canonical: "https://namithaimassage.com",
  },
};

// Featured services for homepage
const featuredServices = [
  {
    name: "Thai Style Signature",
    duration: "90 minutes",
    price: 200,
    description:
      "Our signature Thai massage experience: 60 min therapeutic massage + 15 min head massage + 15 min traditional Thai stretching. Best for full-body relaxation and flexibility.",
    featured: true,
    image: "/images/thai-massage-new.png",
  },
  {
    name: "Deep Tissue Therapy",
    duration: "60 minutes",
    price: 130,
    description:
      "Targeted deep tissue massage reaching deep muscle layers to release chronic tension, reduce inflammation, and promote lasting pain relief.",
    image: "/images/deep-tissue-massage-new.png",
  },
  {
    name: "Sports Recovery Massage",
    duration: "60 minutes",
    price: 149,
    description:
      "Specialized sports massage for athletes and active individuals. Enhances performance, accelerates recovery, and prevents injury.",
    image: "/images/sports-massage-new.png",
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

// FAQ for home page structured data
const homeFaqs = [
  {
    question: "What makes Nami Thai Massage different?",
    answer:
      "Nami Thai Massage offers personalized one-on-one sessions that blend traditional Thai massage techniques with modern sports therapy. Every session is customized to your body's unique needs in a private, calming environment in North Park, San Diego.",
  },
  {
    question: "What types of massage do you offer?",
    answer:
      "We offer Thai massage, deep tissue massage, Swedish massage, sports massage, aromatherapy, hot stone therapy, and various add-on treatments including head & scalp massage, foot & calf massage, and neck & shoulder focused work.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online 24/7 through our booking system. Select your preferred service, choose an available time slot, and you're all set. Same-day appointments are often available.",
  },
];

// Structured data for home page
const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="/images/hero-bg.png"
            alt="Relaxing spa atmosphere at Nami Thai Massage San Diego"
            className={styles.heroBgImage}
          />
        </div>
        <div className={styles.heroOverlay}></div>

        {/* Animated Flower Decoration - Right Side Only */}
        <div className={styles.flowerRight}>
          <svg
            className={styles.flowerImage}
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="goldGradientRight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8B7424" />
                <stop offset="30%" stopColor="#C9A227" />
                <stop offset="60%" stopColor="#E8D48B" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
            {/* Center petal */}
            <path
              d="M50 5 Q55 25 50 45 Q45 25 50 5"
              fill="url(#goldGradientRight)"
            />
            {/* Inner left petals */}
            <path
              d="M35 15 Q45 30 42 50 Q32 35 35 15"
              fill="url(#goldGradientRight)"
            />
            <path
              d="M65 15 Q55 30 58 50 Q68 35 65 15"
              fill="url(#goldGradientRight)"
            />
            {/* Mid petals */}
            <path
              d="M22 22 Q38 35 36 55 Q22 42 22 22"
              fill="url(#goldGradientRight)"
            />
            <path
              d="M78 22 Q62 35 64 55 Q78 42 78 22"
              fill="url(#goldGradientRight)"
            />
            {/* Outer petals */}
            <path
              d="M10 35 Q30 42 32 60 Q15 50 10 35"
              fill="url(#goldGradientRight)"
            />
            <path
              d="M90 35 Q70 42 68 60 Q85 50 90 35"
              fill="url(#goldGradientRight)"
            />
            {/* Base petals */}
            <path
              d="M25 50 Q40 55 45 70 Q30 62 25 50"
              fill="url(#goldGradientRight)"
            />
            <path
              d="M75 50 Q60 55 55 70 Q70 62 75 50"
              fill="url(#goldGradientRight)"
            />
            {/* Center bottom */}
            <path
              d="M50 50 Q55 62 50 75 Q45 62 50 50"
              fill="url(#goldGradientRight)"
            />
          </svg>
        </div>
        <div className={styles.heroInner}>
          {/* Nami's Portrait on Left */}
          <div className={styles.heroPortrait}>
            <img
              src="/images/nami-logo-full.png"
              alt="Nami Thai Massage Logo"
              className={styles.heroPortraitLogo}
            />
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/images/nami-portrait-mobile.png"
              />
              <img
                src="/images/nami-portrait.png"
                alt="Nami - Licensed Massage Therapist specializing in Thai massage in North Park San Diego"
                className={styles.heroPortraitImage}
              />
            </picture>
          </div>

          {/* Hero Content on Right */}
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>
              Licensed Massage Therapist
              <br />
              North Park, San Diego
            </p>
            <h1 className={styles.heroTitle}>
              Expert <span className={styles.goldText}>Thai Massage</span> for
              Pain Relief & Relaxation
            </h1>
            <p className={styles.heroDescription}>
              Experience personalized healing with traditional Thai massage
              blended with sports therapy techniques. Whether you need relief
              from chronic pain, athletic recovery, or deep relaxation, every
              session is tailored to your body&apos;s unique needs.
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
            <p className={styles.sectionSubtitle}>Massage Services</p>
            <h2 className={styles.sectionTitle}>
              Signature <span className={styles.goldText}>Treatments</span>
            </h2>
            <div className={styles.goldLine}></div>
            <p className={styles.sectionDescription}>
              Each massage session is customized to address your specific needs.
              From traditional Thai stretching to deep tissue work, we combine
              ancient healing wisdom with modern therapeutic techniques.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <Link href="/services" className={styles.btnSecondary}>
              View All Services & Pricing
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
                alt="Nami providing personalized Thai massage therapy in San Diego"
                className={styles.aboutImage}
              />
              <div className={styles.aboutImageAccent}></div>
            </div>
            <div className={styles.aboutContent}>
              <p className={styles.sectionSubtitle}>
                Licensed Massage Therapist
              </p>
              <h2 className={styles.sectionTitle}>
                Why Choose <span className={styles.goldText}>Nami</span>?
              </h2>
              <div className={styles.goldLine}></div>
              <p className={styles.aboutText}>
                <strong>
                  Nami Thai Massage offers a personalized healing experience
                </strong>{" "}
                that you won&apos;t find at chain spas. As a licensed massage
                therapist specializing in traditional Thai techniques combined
                with sports therapy, I focus entirely on your unique needs.
              </p>
              <p className={styles.aboutText}>
                Whether you&apos;re an athlete seeking faster recovery, someone
                managing chronic pain, or simply need deep relaxation, every
                session is tailored specifically for you. My{" "}
                <Link href="/about">North Park studio</Link> provides a calm,
                private environment for your healing journey.
              </p>
              <Link href="/about" className={styles.btnSecondary}>
                Learn More About Nami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Client Reviews</p>
            <h2 className={styles.sectionTitle}>
              What Clients <span className={styles.goldText}>Say</span>
            </h2>
            <div className={styles.goldLine}></div>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${styles.testimonialCard} golden-glow`}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <div className={styles.starRating}>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>
                    {testimonial.author}
                  </span>
                  <span className={styles.authorService}>
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faq} lotus-pattern`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Common Questions</p>
            <h2 className={styles.sectionTitle}>
              Frequently <span className={styles.goldText}>Asked</span>
            </h2>
            <div className={styles.goldLine}></div>
          </div>

          <div className={styles.faqGrid}>
            {homeFaqs.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} royal-frame`}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={styles.faqFooter}>
            <Link href="/contact" className={styles.btnSecondary}>
              More Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Experience{" "}
              <span className={styles.goldText}>Thai Massage</span>?
            </h2>
            <p className={styles.ctaDescription}>
              Book your personalized massage session in North Park, San Diego.
              Same-day appointments often available.
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
