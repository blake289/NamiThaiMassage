'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ChatButton.module.css';

export default function ChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const exitIntentTriggered = useRef(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // Less aggressive - only show on exit intent, not scroll
    // This improves UX by not interrupting browsing
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // Detect when mouse leaves from top of page (common exit pattern)
            // Only trigger on desktop (pointer devices)
            if (e.clientY <= 0 && !exitIntentTriggered.current && !hasInteracted && window.innerWidth >= 768) {
                setIsOpen(true);
                setHasInteracted(true);
                exitIntentTriggered.current = true;
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasInteracted]);

    // Hide tooltip after 8 seconds or when user interacts
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setHasInteracted(true);
        setShowTooltip(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use actual business phone number
        const phoneNumber = '+16192873034'; // Nami Thai Massage phone
        const smsBody = `New message from ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
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
                            <div className={styles.smsIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.popupTitle}>Text Nami</h3>
                                <p className={styles.popupSubtitle}>Have a question? Send me a text and I will get back to you ASAP.</p>
                            </div>
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

            {/* Chat Button - SMS Bubble */}
            <button
                className={`${styles.chatButton} ${!hasInteracted ? styles.pulse : ''}`}
                onClick={handleToggle}
                aria-label={isOpen ? "Close chat" : "Text Nami"}
            >
                {showTooltip && !isOpen && (
                    <div className={styles.tooltip}>Text Me</div>
                )}

                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                        <circle cx="8" cy="10" r="1.5"/>
                        <circle cx="12" cy="10" r="1.5"/>
                        <circle cx="16" cy="10" r="1.5"/>
                    </svg>
                )}
            </button>
        </div>
    );
}
