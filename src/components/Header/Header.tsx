'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
];

const infoLinks = {
    massageTypes: [
        { href: '/info/thai-massage-benefits', label: 'Thai Massage Benefits' },
        { href: '/info/deep-tissue-massage', label: 'Deep Tissue Massage' },
        { href: '/info/swedish-massage', label: 'Swedish Massage' },
        { href: '/info/sports-massage', label: 'Sports Massage' },
        { href: '/info/hot-stone-massage', label: 'Hot Stone Massage' },
        { href: '/info/prenatal-massage', label: 'Prenatal Massage' },
    ],
    whoWeHelp: [
        { href: '/info/massage-for-office-workers', label: 'Office Workers & Desk Jobs' },
        { href: '/info/massage-for-athletes', label: 'Athletes & Active Lifestyle' },
        { href: '/info/massage-for-chronic-pain', label: 'Chronic Pain Relief' },
        { href: '/info/massage-for-stress-relief', label: 'Stress & Anxiety Relief' },
        { href: '/info/massage-for-seniors', label: 'Seniors & Elderly' },
    ],
    locations: [
        { href: '/info/massage-north-park', label: 'North Park' },
        { href: '/info/massage-hillcrest', label: 'Hillcrest' },
        { href: '/info/massage-university-heights', label: 'University Heights' },
        { href: '/info/massage-normal-heights', label: 'Normal Heights' },
        { href: '/info/massage-balboa-park', label: 'Near Balboa Park' },
    ],
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsInfoOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setMobileInfoOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image
                        src="/logo.png"
                        alt="Nami Thai Massage"
                        width={200}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}

                    {/* Helpful Info Dropdown */}
                    <div
                        className={styles.dropdownContainer}
                        ref={dropdownRef}
                        onMouseEnter={() => setIsInfoOpen(true)}
                        onMouseLeave={() => setIsInfoOpen(false)}
                    >
                        <button
                            className={`${styles.navLink} ${styles.dropdownTrigger}`}
                            onClick={() => setIsInfoOpen(!isInfoOpen)}
                            aria-expanded={isInfoOpen}
                        >
                            Helpful Info
                            <svg className={`${styles.chevron} ${isInfoOpen ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>

                        {isInfoOpen && (
                            <div className={styles.dropdown}>
                                <div className={styles.dropdownSection}>
                                    <h4 className={styles.dropdownHeading}>Massage Types</h4>
                                    {infoLinks.massageTypes.map((link) => (
                                        <Link key={link.href} href={link.href} className={styles.dropdownLink} onClick={() => setIsInfoOpen(false)}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className={styles.dropdownSection}>
                                    <h4 className={styles.dropdownHeading}>Who We Help</h4>
                                    {infoLinks.whoWeHelp.map((link) => (
                                        <Link key={link.href} href={link.href} className={styles.dropdownLink} onClick={() => setIsInfoOpen(false)}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className={styles.dropdownSection}>
                                    <h4 className={styles.dropdownHeading}>Locations We Serve</h4>
                                    {infoLinks.locations.map((link) => (
                                        <Link key={link.href} href={link.href} className={styles.dropdownLink} onClick={() => setIsInfoOpen(false)}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </nav>

                {/* Book Now CTA */}
                <Link href="/book" className={styles.ctaBtn}>
                    <svg className={styles.ctaIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Book Now
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Info Accordion */}
                    <button
                        className={`${styles.mobileLink} ${styles.mobileAccordion}`}
                        onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                    >
                        Helpful Info
                        <svg className={`${styles.chevron} ${mobileInfoOpen ? styles.chevronOpen : ''}`} width="16" height="16" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                    </button>

                    {mobileInfoOpen && (
                        <div className={styles.mobileAccordionContent}>
                            <div className={styles.mobileAccordionSection}>
                                <span className={styles.mobileAccordionHeading}>Massage Types</span>
                                {infoLinks.massageTypes.map((link) => (
                                    <Link key={link.href} href={link.href} className={styles.mobileAccordionLink} onClick={closeMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className={styles.mobileAccordionSection}>
                                <span className={styles.mobileAccordionHeading}>Who We Help</span>
                                {infoLinks.whoWeHelp.map((link) => (
                                    <Link key={link.href} href={link.href} className={styles.mobileAccordionLink} onClick={closeMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className={styles.mobileAccordionSection}>
                                <span className={styles.mobileAccordionHeading}>San Diego Locations</span>
                                {infoLinks.locations.map((link) => (
                                    <Link key={link.href} href={link.href} className={styles.mobileAccordionLink} onClick={closeMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link
                        href="/contact"
                        className={styles.mobileLink}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/book"
                        className={styles.mobileCtaBtn}
                        onClick={closeMenu}
                    >
                        <svg className={styles.ctaIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Book Now
                    </Link>
                </nav>
            </div>
        </header>
    );
}
