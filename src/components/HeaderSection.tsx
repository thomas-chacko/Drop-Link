'use client';

import { useState, useEffect } from 'react';

export default function HeaderSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Trigger when 20% of About section is visible
                rootMargin: '-200px 0px 0px 0px' // Offset to trigger when About section is more in view
            }
        );

        const aboutSection = document.querySelector('[data-section="about"]');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    // Close mobile menu when clicking outside or on a link
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navigationLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#features', label: 'Features' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-out ${isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0'
                }`}
        >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5195cc]/5 via-transparent to-[#5eb94b]/5"></div>
            </div>

            {/* Header Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

                    {/* Logo Section */}
                    <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                        }`}>
                        <div className="text-white">
                            <h1 className="text-sm sm:text-lg lg:text-xl font-bold leading-tight">Drop Link</h1>
                            <p className="text-xs lg:text-sm text-white/70 -mt-0.5 hidden sm:block">One Link. Endless Possibilities.</p>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className={`hidden lg:flex items-center space-x-6 xl:space-x-8 transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                        {navigationLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 transform relative group ${link.label === 'About'
                                    ? 'text-white hover:text-[#5eb94b]'
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5eb94b] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className={`hidden sm:block transition-all duration-500 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                        }`}>
                        <a
                            href="#get-started"
                            className="group relative inline-flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-[#5195cc] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#5eb94b]/10 to-[#5195cc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center">
                                Get Started
                                <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-container lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className={`relative text-white p-2 transition-all duration-500 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                }`}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                                    }`}></span>
                                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                                    }`}></span>
                            </div>
                        </button>

                        {/* Mobile Menu Dropdown */}
                        <div className={`absolute top-full right-1 mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-400 ${isMobileMenuOpen
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 -translate-y-6 scale-95 pointer-events-none'
                            }`}>

                            {/* Mobile Navigation Links */}
                            <div className="py-6 px-2">
                                {navigationLinks.map((link, linkIndex) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className={`block px-6 py-4 mx-2 text-gray-800 hover:text-white font-medium text-lg rounded-2xl transition-all duration-300 group relative overflow-hidden ${link.label === 'About' ? 'text-[#5195cc]' : ''
                                            }`}
                                        style={{
                                            animationDelay: `${linkIndex * 80}ms`,
                                            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                                            opacity: isMobileMenuOpen ? 1 : 0,
                                            transition: `all 0.4s ease ${linkIndex * 80}ms`
                                        }}
                                    >
                                        {/* Hover background */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-[#5195cc] to-[#5eb94b] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"></span>

                                        {/* Link text */}
                                        <span className="relative z-10 flex items-center justify-between">
                                            {link.label}
                                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>

                                        {/* Active indicator */}
                                        {link.label === 'About' && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#5eb94b] rounded-r-full"></span>
                                        )}
                                    </a>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                            {/* Mobile CTA Section */}
                            <div className="p-6">
                                <a
                                    href="#get-started"
                                    onClick={closeMobileMenu}
                                    className="w-full group relative inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[#5195cc] to-[#5eb94b] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative flex items-center">
                                        Get Started Free
                                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Border */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}></div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
                    onClick={closeMobileMenu}
                ></div>
            )}
        </header>
    );
}