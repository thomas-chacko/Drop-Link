export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#5195cc] via-[#4a8bc2] to-[#5eb94b] overflow-hidden">
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
                                Drop all your important links in one place and share a single,
                                <span className="font-semibold text-[#5eb94b] hover:text-white transition-colors duration-300 cursor-pointer"> smart URL </span>
                                with your audience.
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

                            {/* Central Link Icon with Enhanced Animation */}
                            <div className="relative z-10 group cursor-pointer">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float hover:animate-bounce hover:scale-110 transition-all duration-300 group-hover:shadow-[#5eb94b]/50">
                                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#5195cc] group-hover:text-[#5eb94b] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <div className="text-center mt-2">
                                    <div className="text-white text-xs font-semibold group-hover:text-[#5eb94b] transition-colors duration-300">Drop Link</div>
                                </div>
                                {/* Pulsing Ring Effect */}
                                <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 border-2 border-white/30 rounded-2xl animate-ping"></div>
                                <div className="absolute inset-0 w-16 h-16 lg:w-20 lg:h-20 border border-[#5eb94b]/50 rounded-2xl animate-pulse"></div>
                            </div>

                            {/* Enhanced Spreading Links with Hover Effects */}
                            {/* Top Link */}
                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#5195cc] to-[#4a8bc2] rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-[#5195cc]/50">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-[#5195cc] group-hover:font-semibold transition-all duration-300">Website</div>
                                </div>
                                <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 border border-[#5195cc]/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Top Right Link */}
                            <div className="absolute top-16 right-8 lg:right-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#5eb94b] to-[#4a9c3e] rounded-lg shadow-lg flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-[#5eb94b]/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-[#5eb94b] group-hover:font-semibold transition-all duration-300">Social</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-[#5eb94b]/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Right Link */}
                            <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-purple-300 group-hover:font-semibold transition-all duration-300">Portfolio</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-purple-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Bottom Right Link */}
                            <div className="absolute bottom-16 right-8 lg:right-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.9s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-orange-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-orange-300 group-hover:font-semibold transition-all duration-300">Contact</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-orange-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Bottom Link */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.2s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-green-300 group-hover:font-semibold transition-all duration-300">Analytics</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-green-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Bottom Left Link */}
                            <div className="absolute bottom-16 left-8 lg:left-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center opacity-65 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-blue-300 group-hover:font-semibold transition-all duration-300">Reviews</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-blue-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Left Link */}
                            <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.8s' }}>
                                <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl shadow-lg flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-pink-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-pink-300 group-hover:font-semibold transition-all duration-300">Blog</div>
                                </div>
                                <div className="absolute inset-0 w-9 h-9 lg:w-11 lg:h-11 border border-pink-400/30 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                            </div>

                            {/* Top Left Link */}
                            <div className="absolute top-16 left-8 lg:left-12 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '2.1s' }}>
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg flex items-center justify-center opacity-75 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-indigo-500/50">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs group-hover:text-indigo-300 group-hover:font-semibold transition-all duration-300">Services</div>
                                </div>
                                <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 border border-indigo-400/30 rounded-lg opacity-0 group-hover:opacity-100 animate-ping"></div>
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

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="white" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
}