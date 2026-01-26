'use client';

import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fading out after content has loaded
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 800);

        // Remove loading screen completely
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`${styles.loadingScreen} ${isFading ? styles.fadeOut : ''}`}>
            <div className={styles.loadingContent}>
                <div className={styles.logoWrapper}>
                    <span className={styles.logoNami}>Nami</span>
                    <span className={styles.logoSub}>Thai Massage</span>
                </div>
                <div className={styles.loader}>
                    <div className={styles.loaderDot}></div>
                    <div className={styles.loaderDot}></div>
                    <div className={styles.loaderDot}></div>
                </div>
            </div>
        </div>
    );
}
