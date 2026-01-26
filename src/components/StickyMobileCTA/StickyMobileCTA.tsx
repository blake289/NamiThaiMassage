'use client';

import { useState, useEffect } from 'react';
import styles from './StickyMobileCTA.module.css';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past first screen (hero)
            const scrollThreshold = window.innerHeight * 0.75;
            setIsVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.stickyBar}>
            <a
                href="tel:+16192873034"
                className={styles.phoneButton}
                aria-label="Call Nami Thai Massage"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.92 20.99 19.4 20.88C16.36 20.26 13.45 18.92 10.91 17.03C8.69 15.41 6.78 13.49 5.15 11.27C3.26 8.73 1.92 5.82 1.3 2.78C1.19 2.26 1.14 1.73 1.19 1.18C1.25 0.62 1.7 0.18 2.26 0.18H5.26C5.72 0.18 6.12 0.51 6.21 0.96C6.39 1.86 6.68 2.73 7.07 3.56C7.21 3.87 7.13 4.23 6.88 4.47L5.35 6C6.71 8.51 8.73 10.53 11.24 11.89L12.77 10.36C13.01 10.11 13.37 10.03 13.68 10.17C14.51 10.56 15.38 10.85 16.28 11.03C16.73 11.12 17.06 11.52 17.06 11.98V14.98C17.06 15.54 16.62 15.99 16.06 16.05C15.55 16.1 15.03 16.05 14.52 15.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Call Now</span>
            </a>
            <a
                href="https://bookme.pocketsuite.io/book/nami-thai-massage"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookButton}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="9" y1="4" x2="9" y2="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="15" y1="4" x2="15" y2="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Book Online</span>
            </a>
        </div>
    );
}
