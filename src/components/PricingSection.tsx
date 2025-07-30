'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PricingSection() {
    const { scrollY } = useScrollAnimation();

    const pricingPlans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for getting started',
            popular: false,
            features: [
                'Up to 5 links',
                'Basic customization',
                'Drop Link branding',
                'Mobile responsive',
                'Basic analytics',
                'Standard support'
            ],
            buttonText: 'Get Started Free',
            buttonStyle: 'secondary'
        },
        {
            name: 'Pro',
            price: '$9',
            period: 'per month',
            description: 'Best for creators & influencers',
            popular: true,
            features: [
                'Unlimited links',
                'Full customization',
                'Remove branding',
                'Custom domains',
                'Advanced analytics',
                'Priority support',
                'Link scheduling',
                'QR code generator'
            ],
            buttonText: 'Start Pro Trial',
            buttonStyle: 'primary'
        },
        {
            name: 'Business',
            price: '$29',
            period: 'per month',
            description: 'For teams & businesses',
            popular: false,
            features: [
                'Everything in Pro',
                'Team collaboration',
                'Multiple domains',
                'White-label solution',
                'API access',
                'Custom integrations',
                'Dedicated support',
                'Advanced security'
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'secondary'
        }
    ];

    return (
        <section id="pricing" data-section="pricing" className="relative min-h-screen overflow-hidden">
            {/* Content overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

            <div
                className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.05)}px)`,
                    opacity: scrollY > 1000 ? Math.min(1, (scrollY - 1000) / 300) : 0
                }}
            >
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-slide-in-up">
                    {/* Section Badge */}
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold animate-slide-in-up hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer mb-6">
                        <span className="w-2 h-2 bg-[#5eb94b] rounded-full mr-3 animate-pulse"></span>
                        <span className="relative">
                            Pricing
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                            Simple Pricing for
                            <br />
                            <span className="bg-gradient-to-r from-[#5eb94b] via-white to-[#5eb94b] bg-clip-text text-transparent animate-glow bg-size-200 bg-pos-0">
                                Everyone
                            </span>
                        </h2>
                    </div>

                    {/* Subheading */}
                    <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                            Start free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                            <button className="px-4 py-2 text-sm font-medium text-white bg-[#5eb94b] rounded-full transition-all duration-300">
                                Monthly
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300">
                                Yearly
                                <span className="ml-1 text-xs bg-[#5eb94b] text-white px-2 py-0.5 rounded-full">Save 20%</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative animate-slide-in-up ${plan.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
                                }`}
                            style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-[#5eb94b] to-[#5195cc] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-pulse">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Main Card */}
                            <div className={`relative h-full bg-gradient-to-br backdrop-blur-xl border rounded-3xl p-8 transition-all duration-700 ease-out cursor-pointer ${plan.popular
                                    ? 'from-white/[0.15] to-white/[0.05] border-white/30 hover:border-white/40 hover:from-white/[0.2] hover:to-white/[0.08]'
                                    : 'from-white/[0.08] to-white/[0.02] border-white/10 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04]'
                                } group-hover:scale-105 group-hover:-translate-y-2`}>

                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5eb94b] group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                                        {plan.name}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-6">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline justify-center">
                                            <span className="text-4xl lg:text-5xl font-black text-white group-hover:text-[#5eb94b] transition-colors duration-300">
                                                {plan.price}
                                            </span>
                                            <span className="text-white/60 text-sm ml-2">
                                                {plan.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-center group/feature"
                                            style={{
                                                animationDelay: `${0.8 + index * 0.2 + featureIndex * 0.1}s`,
                                                opacity: 0,
                                                animation: 'slideInLeft 0.6s ease-out forwards'
                                            }}
                                        >
                                            <div className="w-5 h-5 bg-gradient-to-br from-[#5eb94b] to-[#5195cc] rounded-full flex items-center justify-center mr-3 group-hover/feature:scale-110 transition-transform duration-300">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white/80 text-sm group-hover/feature:text-white transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    <button className={`w-full py-4 px-6 rounded-2xl font-bold text-base transition-all duration-500 relative overflow-hidden group/btn ${plan.buttonStyle === 'primary'
                                            ? 'bg-gradient-to-r from-[#5eb94b] to-[#5195cc] text-white hover:shadow-2xl hover:shadow-[#5eb94b]/30 hover:scale-105'
                                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105'
                                        }`}>
                                        <span className="relative z-10 flex items-center justify-center">
                                            {plan.buttonText}
                                            <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>

                                        {/* Button Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                    </button>
                                </div>

                                {/* Card Glow Effect */}
                                {plan.popular && (
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5eb94b]/20 via-transparent to-[#5195cc]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                                )}
                            </div>

                            {/* Card Shadow/Glow */}
                            <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-95 group-hover:scale-100 ${plan.popular
                                    ? 'bg-gradient-to-br from-[#5eb94b]/20 to-[#5195cc]/20'
                                    : 'bg-gradient-to-br from-[#5eb94b]/10 to-[#5195cc]/10'
                                }`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-16 sm:mt-20 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-white/70 text-base sm:text-lg mb-8">
                            All plans include SSL security, 99.9% uptime, and our commitment to your success.
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#5eb94b] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                30-day money back
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#5eb94b] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Cancel anytime
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#5eb94b] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                                </svg>
                                24/7 support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}