'use client';

import { useState, useEffect } from 'react';
import styles from './ChatButton.module.css';

export default function ChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // Auto-open after user scrolls past hero section
    useEffect(() => {
        let hasOpened = false;

        const handleScroll = () => {
            // Open when user scrolls past approximately the hero section (100vh)
            if (!hasOpened && window.scrollY > window.innerHeight * 0.8) {
                setIsOpen(true);
                hasOpened = true;
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct SMS link with form data
        const phoneNumber = '+16192873034';
        const smsBody = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(smsBody)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.chatContainer}>
            {/* Chat Popup */}
            {isOpen && (
                <div className={styles.chatPopup}>
                    <div className={styles.popupHeader}>
                        <div className={styles.headerContent}>
                            <img
                                src="/images/nami-portrait.png"
                                alt="Nami"
                                className={styles.avatarImage}
                            />
                            <h3 className={styles.popupTitle}>Nami</h3>
                        </div>
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>
                    <div className={styles.chatForm}>
                        <p className={styles.introMessage}>Send me a text and I will reply back to you ASAP!</p>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="chat-name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="chat-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="chat-phone" className={styles.label}>Phone</label>
                                <input
                                    type="tel"
                                    id="chat-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(619) 555-1234"
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="chat-message" className={styles.label}>Message</label>
                                <textarea
                                    id="chat-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help?"
                                    className={styles.textarea}
                                    rows={3}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Chat Button */}
            <div className={styles.buttonWrapper}>
                {/* Mist particles */}
                <div className={styles.mistContainer}>
                    <div className={`${styles.mistParticle} ${styles.mist1}`}></div>
                    <div className={`${styles.mistParticle} ${styles.mist2}`}></div>
                    <div className={`${styles.mistParticle} ${styles.mist3}`}></div>
                    <div className={`${styles.mistParticle} ${styles.mist4}`}></div>
                    <div className={`${styles.mistParticle} ${styles.mist5}`}></div>
                    <div className={`${styles.mistParticle} ${styles.mist6}`}></div>
                </div>
                <button
                    className={styles.chatButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" className={styles.smsIcon}>
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            <span className={styles.textMeLabel}>TEXT ME</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
