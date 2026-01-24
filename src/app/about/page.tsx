import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.heroSubtitle}>About Nami</p>
                    <h1 className={styles.heroTitle}>
                        Your Healing <span className={styles.goldText}>Journey</span>
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
                                alt="Nami, Licensed Massage Therapist"
                                className={styles.storyImage}
                            />
                            <div className={styles.imageAccent}></div>
                        </div>
                        <div className={styles.storyContent}>
                            <h2 className={styles.storyTitle}>
                                Personalized <span className={styles.goldText}>Healing</span>
                            </h2>
                            <div className={styles.goldLine}></div>
                            <p className={styles.storyText}>
                                At Nami Thai Massage, holistic well-being meets rejuvenation. I specialize
                                in traditional Thai massage blended with sports therapy techniques to
                                relieve tension, restore balance, and promote long-term wellness.
                            </p>
                            <p className={styles.storyText}>
                                Whether you&apos;re recovering from a workout, managing chronic pain, or
                                simply in need of deep relaxation, each session is tailored to your
                                body&apos;s unique needs.
                            </p>
                            <p className={styles.storyText}>
                                Located in the heart of North Park, San Diego, I provide a calming,
                                one-on-one experience focused entirely on your healing journey.
                                No distractions, no rushing—just dedicated attention to your well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophy}>
                <div className="container">
                    <div className={styles.philosophyContent}>
                        <p className={styles.philosophySubtitle}>My Approach</p>
                        <h2 className={styles.philosophyTitle}>
                            The Art of <span className={styles.goldText}>Thai Massage</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.philosophyText}>
                            Traditional Thai massage is more than just a treatment—it&apos;s an ancient
                            healing art that combines acupressure, stretching, and energy work to
                            restore balance throughout the body.
                        </p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Ancient Wisdom</h3>
                            <p className={styles.pillarText}>
                                Drawing from centuries of Thai healing traditions passed down through generations.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Modern Techniques</h3>
                            <p className={styles.pillarText}>
                                Incorporating sports therapy and deep tissue methods for comprehensive relief.
                            </p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarIcon}>✦</div>
                            <h3 className={styles.pillarTitle}>Personalized Care</h3>
                            <p className={styles.pillarText}>
                                Every session is customized to your body&apos;s unique needs and wellness goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className={styles.location}>
                <div className="container">
                    <div className={styles.locationContent}>
                        <p className={styles.locationSubtitle}>Visit Us</p>
                        <h2 className={styles.locationTitle}>
                            North Park, <span className={styles.goldText}>San Diego</span>
                        </h2>
                        <div className={styles.goldLine}></div>
                        <p className={styles.locationText}>
                            Nestled in the vibrant neighborhood of North Park, our studio offers
                            a peaceful escape from the everyday. Experience tranquility in one of
                            San Diego&apos;s most beloved communities.
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
