'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesSection() {
    const { scrollY } = useScrollAnimation();

    const features = [
        {
            emoji: '🎨',
            title: 'Fully Customizable',
            description: 'Personalize your page with custom themes, buttons, and branding — match your style effortlessly.'
        },
        {
            emoji: '🔗',
            title: 'Unlimited Links',
            description: 'Add as many links as you want — social media, stores, videos, blogs, and more.'
        },
        {
            emoji: '📈',
            title: 'Built-In Analytics',
            description: 'Track link clicks, page views, and top-performing links to optimize engagement.'
        },
        {
            emoji: '📱',
            title: 'Mobile-First Design',
            description: 'Your Drop Link looks perfect on every screen, especially where it matters — mobile.'
        },
        {
            emoji: '🌐',
            title: 'Custom Domains (Pro)',
            description: 'Upgrade your presence with your own domain like yourname.com.'
        },
        {
            emoji: '⚡',
            title: 'Fast & Secure',
            description: 'Lightning-fast loading, SSL encryption, and best-in-class uptime — built for trust.'
        }
    ];

    return (
        <section id="features" data-section="features" className="relative min-h-screen overflow-hidden">
            {/* Content overlay with subtle gradient for section distinction */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

            <div
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 800) * 0.05)}px)`,
                    opacity: scrollY > 600 ? Math.min(1, (scrollY - 600) / 300) : 0
                }}
            >
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-in-up">
                    {/* Section Badge */}
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold animate-slide-in-up hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer mb-6">
                        <span className="w-2 h-2 bg-[#5eb94b] rounded-full mr-3 animate-pulse"></span>
                        <span className="relative">
                            Features
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                            Why Creators, Brands &
                            <br />
                            <span className="bg-gradient-to-r from-[#5eb94b] via-white to-[#5eb94b] bg-clip-text text-transparent animate-glow bg-size-200 bg-pos-0">
                                Businesses Trust
                            </span>
                            <br />
                            <span className="text-[#5eb94b]">Drop Link</span>
                        </h2>
                    </div>

                    {/* Subheading */}
                    <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-4xl mx-auto">
                            From influencers to entrepreneurs — Drop Link is packed with everything you need to
                            <span className="font-semibold text-[#5eb94b] hover:text-white transition-colors duration-300 cursor-pointer"> grow your audience </span>
                            and boost conversions.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden animate-slide-in-up"
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            {/* Main Card */}
                            <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-700 ease-out group-hover:border-white/20 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.04] cursor-pointer">

                                {/* Floating Icon Container */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-[#5eb94b]/20">
                                        <span className="text-3xl transition-transform duration-500 group-hover:scale-110">
                                            {feature.emoji}
                                        </span>
                                    </div>

                                    {/* Icon Glow Effect */}
                                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#5eb94b]/20 to-[#5195cc]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5eb94b] group-hover:to-white group-hover:bg-clip-text">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/70 text-sm leading-relaxed transition-all duration-300 group-hover:text-white/90">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Indicator */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <svg className="w-4 h-4 text-[#5eb94b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5eb94b]/20 via-transparent to-[#5195cc]/20 animate-pulse"></div>
                                </div>

                                {/* Subtle Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700"></div>
                                </div>
                            </div>

                            {/* Card Shadow/Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5eb94b]/5 to-[#5195cc]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-95 group-hover:scale-100"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-16 sm:mt-20 lg:mt-24 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <a
                            href="#get-started"
                            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-[#5195cc] bg-white rounded-2xl shadow-2xl hover:shadow-[#5eb94b]/50 hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden animate-glow"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            <span className="relative flex items-center">
                                Try Drop Link Free
                                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}