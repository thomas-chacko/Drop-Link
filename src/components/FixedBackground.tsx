'use client';

import React from 'react';
import { useParallax } from '@/hooks/useScrollAnimation';

export default function FixedBackground() {
    const parallaxSlow = useParallax(0.2);
    const parallaxMedium = useParallax(0.3);
    const parallaxFast = useParallax(0.5);
    return (
        <div className="fixed inset-0 -z-10">
            {/* Main Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5195cc] via-[#4a8bc2] to-[#5eb94b]"></div>

            {/* Animated Particle Background with Parallax */}
            <div className="absolute inset-0">
                {/* Large Floating Orbs with Enhanced Animation and Parallax */}
                <div 
                    className="absolute top-20 left-4 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl animate-float-slow"
                    style={{ transform: `translateY(${parallaxSlow}px)` }}
                ></div>
                <div 
                    className="absolute top-40 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-[#5eb94b]/20 rounded-full blur-lg animate-bounce animate-glow"
                    style={{ transform: `translateY(${parallaxMedium}px)`, animationDelay: '0.5s' }}
                ></div>
                <div 
                    className="absolute bottom-32 left-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-2xl animate-float-slow"
                    style={{ transform: `translateY(${-parallaxSlow}px)`, animationDelay: '1s' }}
                ></div>
                <div 
                    className="absolute bottom-20 right-4 lg:right-10 w-20 h-20 lg:w-28 lg:h-28 bg-[#5eb94b]/15 rounded-full blur-xl animate-bounce animate-glow"
                    style={{ transform: `translateY(${-parallaxMedium}px)`, animationDelay: '2s' }}
                ></div>

                {/* Additional floating orbs for more depth with parallax */}
                <div 
                    className="absolute top-1/3 left-1/2 w-16 h-16 lg:w-24 lg:h-24 bg-white/8 rounded-full blur-2xl animate-float-slow"
                    style={{ transform: `translateY(${parallaxFast}px)`, animationDelay: '0.5s' }}
                ></div>
                <div 
                    className="absolute bottom-1/3 right-1/3 w-12 h-12 lg:w-20 lg:h-20 bg-[#5eb94b]/12 rounded-full blur-lg animate-float-slow"
                    style={{ transform: `translateY(${-parallaxFast}px)`, animationDelay: '1.5s' }}
                ></div>
                <div 
                    className="absolute top-2/3 left-1/5 w-18 h-18 lg:w-28 lg:h-28 bg-white/6 rounded-full blur-xl animate-float-slow"
                    style={{ transform: `translateY(${parallaxSlow * 0.8}px)`, animationDelay: '2.5s' }}
                ></div>

                {/* Small Sparkle Particles */}
                <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#5eb94b] rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-white/70 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#5eb94b]/80 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/4 left-2/3 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-[#5eb94b] rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>
                <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-white/90 rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-1/6 left-1/3 w-2 h-2 bg-[#5eb94b]/70 rounded-full animate-sparkle" style={{ animationDelay: '3.5s' }}></div>

                {/* Animated Lines with Ripple Effect */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5eb94b]/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>

                {/* Ripple Effects */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-white/20 rounded-full animate-ripple"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border border-[#5eb94b]/30 rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2/3 left-2/3 w-3 h-3 border border-white/25 rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/6 right-1/6 w-5 h-5 border border-[#5eb94b]/20 rounded-full animate-ripple" style={{ animationDelay: '2.5s' }}></div>
                <div className="absolute bottom-1/6 left-1/6 w-4 h-4 border border-white/30 rounded-full animate-ripple" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Enhanced Geometric Patterns */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full animate-float-slow" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="fixedGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="fixedDots" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#fixedGrid)" />
                    <rect width="100" height="100" fill="url(#fixedDots)" />
                </svg>
            </div>

            {/* Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5195cc]/10 via-transparent to-[#5eb94b]/10"></div>
        </div>
    );
}