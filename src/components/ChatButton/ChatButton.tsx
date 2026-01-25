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

    // Auto-open after a short delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct SMS link with form data
        const phoneNumber = '+16195551234'; // Replace with actual number
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
                            <h3 className={styles.popupTitle}>Text me!</h3>
                        </div>
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.chatForm}>
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
            )}

            {/* Chat Button */}
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
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
