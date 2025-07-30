import React from 'react';

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#5195cc] via-[#4a8bc2] to-[#5eb94b] overflow-hidden">
            {/* Animated Particle Background */}
            <div className="absolute inset-0">
                {/* Large Floating Orbs with Enhanced Animation */}
                <div className="absolute top-20 left-4 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute top-40 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-[#5eb94b]/20 rounded-full blur-lg animate-bounce animate-glow"></div>
                <div className="absolute bottom-32 left-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-4 lg:right-10 w-20 h-20 lg:w-28 lg:h-28 bg-[#5eb94b]/15 rounded-full blur-xl animate-bounce animate-glow" style={{ animationDelay: '2s' }}></div>

                {/* Small Sparkle Particles */}
                <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#5eb94b] rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-white/70 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#5eb94b]/80 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/4 left-2/3 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-[#5eb94b] rounded-full animate-sparkle" style={{ animationDelay: '2.5s' }}></div>

                {/* Animated Lines with Ripple Effect */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5eb94b]/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Ripple Effects */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-white/20 rounded-full animate-ripple"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border border-[#5eb94b]/30 rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2/3 left-2/3 w-3 h-3 border border-white/25 rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Enhanced Geometric Patterns */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full animate-float-slow" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                    <rect width="100" height="100" fill="url(#dots)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
                        {/* Badge with Enhanced Animation */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium animate-slide-in-left hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className="w-2 h-2 bg-[#5eb94b] rounded-full mr-2 animate-pulse"></span>
                            <span className="relative">
                                New: Smart Link Analytics
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                            </span>
                        </div>

                        {/* Main Heading with Typewriter Effect */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                                <span className="inline-block">One Link.</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#5eb94b] via-white to-[#5eb94b] bg-clip-text text-transparent animate-glow bg-size-200 bg-pos-0">
                                    Endless
                                </span>
                                <br />
                                <span className="text-[#5eb94b] inline-block">Possibilities.</span>
                            </h1>
                        </div>

                        {/* Subheading with Staggered Animation */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a
                                <span className="font-semibold text-[#5eb94b] hover:text-white transition-colors duration-300 cursor-pointer"> link in bio </span>
                                landing page designed to convert.
                            </p>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                            <a
                                href="#get-started"
                                className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-4 text-base lg:text-lg font-bold text-[#5195cc] bg-white rounded-2xl shadow-2xl hover:shadow-[#5eb94b]/50 hover:shadow-3xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 overflow-hidden animate-glow"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center">
                                    Get Started Free
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </a>

                            <a
                                href="#example"
                                className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-4 text-base lg:text-lg font-semibold text-white border-2 border-white/30 rounded-2xl backdrop-blur-sm hover:bg-white/20 hover:border-white/70 hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-[#5eb94b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="relative flex items-center">
                                    See Example Page
                                    <svg className="ml-2 w-5 h-5 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Enhanced Stats with Counter Animation */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-6 lg:pt-8 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">100+</div>
                                <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">Active Users</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">1000+</div>
                                <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">Links Shared</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">99.9%</div>
                                <div className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">Uptime</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Right Section - Interactive Link Animation */}
                    <div className="relative order-1 lg:order-2 animate-slide-in-right">
                        <div className="relative mx-auto max-w-sm lg:max-w-md h-80 lg:h-96 flex items-center justify-center">

                            {/* Central Link in Bio Icon with Enhanced Animation */}
                            <div className="relative z-10 group cursor-pointer">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl flex items-center justify-center animate-float hover:animate-bounce hover:scale-110 transition-all duration-300 group-hover:shadow-[#5eb94b]/50">
                                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#5195cc] group-hover:text-[#5eb94b] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-2">
                                    <div className="text-white text-xs font-semibold group-hover:text-[#5eb94b] transition-colors duration-300">Link in Bio</div>
                                </div>
                                {/* Pulsing Ring Effect */}
                                <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 border-2 border-white/30 rounded-2xl animate-ping"></div>
                                <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 border border-[#5eb94b]/50 rounded-2xl animate-pulse"></div>
                            </div>

                            {/* Social Media Platform Links */}
                            {/* TikTok - Top */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-black to-gray-800 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-black/50">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-gray-300 group-hover:font-semibold transition-all duration-300">TikTok</div>
                                </div>
                                <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 border border-black/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Instagram - Top Right */}
                            <div className="absolute top-16 right-8 lg:right-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg shadow-lg flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-pink-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-pink-300 group-hover:font-semibold transition-all duration-300">Instagram</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-pink-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Twitter/X - Right */}
                            <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-black to-gray-700 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-black/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-gray-300 group-hover:font-semibold transition-all duration-300">Twitter</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-gray-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* YouTube - Bottom Right */}
                            <div className="absolute bottom-16 right-8 lg:right-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.9s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-red-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-red-300 group-hover:font-semibold transition-all duration-300">YouTube</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-red-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Spotify - Bottom */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.2s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-green-300 group-hover:font-semibold transition-all duration-300">Spotify</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-green-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* LinkedIn - Bottom Left */}
                            <div className="absolute bottom-16 left-8 lg:left-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-blue-300 group-hover:font-semibold transition-all duration-300">LinkedIn</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-blue-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Website - Left */}
                            <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.8s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-blue-300 group-hover:font-semibold transition-all duration-300">Website</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-blue-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Store/Shop - Top Left */}
                            <div className="absolute top-16 left-8 lg:left-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '2.1s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-orange-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-orange-300 group-hover:font-semibold transition-all duration-300">Store</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-orange-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 300 300">
                                <defs>
                                    <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#5195cc" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#5eb94b" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                                {/* Lines from center to each link */}
                                <line x1="150" y1="150" x2="150" y2="50" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" />
                                <line x1="150" y1="150" x2="220" y2="80" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                                <line x1="150" y1="150" x2="250" y2="150" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                                <line x1="150" y1="150" x2="220" y2="220" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
                                <line x1="150" y1="150" x2="150" y2="250" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                                <line x1="150" y1="150" x2="80" y2="220" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                                <line x1="150" y1="150" x2="50" y2="150" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.8s' }} />
                                <line x1="150" y1="150" x2="80" y2="80" stroke="url(#linkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2.1s' }} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}