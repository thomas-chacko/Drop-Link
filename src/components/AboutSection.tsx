export default function AboutSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#5eb94b] via-[#4a8bc2] to-[#5195cc] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Orbs */}
                <div className="absolute top-32 left-8 lg:left-16 w-24 h-24 lg:w-36 lg:h-36 bg-white/8 rounded-full blur-2xl animate-float-slow"></div>
                <div className="absolute top-20 right-12 lg:right-24 w-20 h-20 lg:w-28 lg:h-28 bg-[#5eb94b]/15 rounded-full blur-xl animate-bounce animate-glow"></div>
                <div className="absolute bottom-40 left-1/3 w-32 h-32 lg:w-48 lg:h-48 bg-white/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-24 right-8 lg:right-16 w-16 h-16 lg:w-24 lg:h-24 bg-[#5eb94b]/20 rounded-full blur-lg animate-bounce animate-glow" style={{ animationDelay: '2.5s' }}></div>

                {/* Sparkle Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#5eb94b] rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-white/80 rounded-full animate-sparkle" style={{ animationDelay: '1.3s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#5eb94b]/90 rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>

                {/* Animated Lines */}
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5eb94b]/35 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Ripple Effects */}
                <div className="absolute top-1/3 right-1/4 w-5 h-5 border border-white/25 rounded-full animate-ripple" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/2 left-1/3 w-4 h-4 border border-[#5eb94b]/35 rounded-full animate-ripple" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-8">
                <svg className="w-full h-full animate-float-slow" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ animationDelay: '1s' }}>
                    <defs>
                        <pattern id="aboutGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="white" strokeWidth="0.3" />
                        </pattern>
                        <pattern id="aboutDots" width="25" height="25" patternUnits="userSpaceOnUse">
                            <circle cx="12.5" cy="12.5" r="0.8" fill="white" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#aboutGrid)" />
                    <rect width="100" height="100" fill="url(#aboutDots)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 animate-slide-in-left">
                        {/* Section Badge */}
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold animate-slide-in-left hover:bg-white/25 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className="w-2 h-2 bg-[#5eb94b] rounded-full mr-3 animate-pulse"></span>
                            <span className="relative">
                                About Drop Link
                                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                            </span>
                        </div>

                        {/* Main Headline */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                                <span className="inline-block">Create.</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#5eb94b] via-white to-[#5eb94b] bg-clip-text text-transparent animate-glow bg-size-200 bg-pos-0">
                                    Customize.
                                </span>
                                <br />
                                <span className="text-[#5eb94b] inline-block">Convert.</span>
                            </h2>
                            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white/90 mt-2 sm:mt-4">
                                All your links in one smart page.
                            </p>
                        </div>

                        {/* Body Text */}
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                            <p className="text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4 lg:mb-6">
                                Drop Link makes it effortless to bring together everything your audience needs — from your Instagram, TikTok, YouTube, portfolio, store, podcast, or blog — into one beautifully branded link-in-bio page.
                            </p>
                            <p className="text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Whether you're a creator, entrepreneur, or brand, Drop Link helps you build a focused, high-converting hub in just minutes.
                                <span className="font-semibold text-[#5eb94b] hover:text-white transition-colors duration-300 cursor-pointer"> No code. No limits. </span>
                                Just link, launch, and grow.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                            <a
                                href="#get-started"
                                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-[#5195cc] bg-white rounded-2xl shadow-2xl hover:shadow-[#5eb94b]/50 hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 overflow-hidden animate-glow"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                <span className="relative flex items-center">
                                    Start Free
                                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </a>
                        </div>

                        {/* Feature Highlights */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">No Code</div>
                                <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">Required</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">Minutes</div>
                                <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">To Setup</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                            <div className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#5eb94b] transition-colors duration-300">Unlimited</div>
                                <div className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">Possibilities</div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb94b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Section */}
                    <div className="relative order-1 lg:order-2 animate-slide-in-right">
                        <div className="relative mx-auto max-w-sm sm:max-w-md h-80 sm:h-96 lg:h-[450px] xl:h-[500px] flex items-center justify-center">

                            {/* Central Device Mockup */}
                            <div className="relative z-10 group cursor-pointer">
                                <div className="w-40 h-72 sm:w-48 sm:h-80 lg:w-56 lg:h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border-4 border-gray-700 overflow-hidden animate-float hover:scale-105 transition-all duration-500 group-hover:shadow-[#5eb94b]/30">
                                    {/* Phone Screen */}
                                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 m-1 rounded-2xl p-4 relative overflow-hidden">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center text-xs text-gray-800 mb-4">
                                            <span>9:41</span>
                                            <div className="flex space-x-1">
                                                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                                                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Profile Section */}
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#5195cc] to-[#5eb94b] rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
                                                <span className="text-white font-bold text-lg">TC</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-sm">@thomas</h3>
                                            <p className="text-gray-600 text-xs">Creator • Entrepreneur</p>
                                        </div>

                                        {/* Link Buttons */}
                                        <div className="space-y-3">
                                            <div className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-pulse">
                                                Instagram
                                            </div>
                                            <div className="w-full h-10 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-pulse" style={{ animationDelay: '0.2s' }}>
                                                TikTok
                                            </div>
                                            <div className="w-full h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-pulse" style={{ animationDelay: '0.4s' }}>
                                                YouTube
                                            </div>
                                            <div className="w-full h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-pulse" style={{ animationDelay: '0.6s' }}>
                                                Website
                                            </div>
                                            <div className="w-full h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-pulse" style={{ animationDelay: '0.8s' }}>
                                                Spotify
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
                                </div>

                                {/* Pulsing Ring Effect */}
                                <div className="absolute inset-0 w-40 h-72 sm:w-48 sm:h-80 lg:w-56 lg:h-96 border-2 border-white/20 rounded-3xl animate-ping"></div>
                                <div className="absolute inset-0 w-40 h-72 sm:w-48 sm:h-80 lg:w-56 lg:h-96 border border-[#5eb94b]/40 rounded-3xl animate-pulse"></div>
                            </div>

                            {/* Floating Feature Icons */}
                            {/* Analytics Icon - Top Right */}
                            <div className="absolute top-4 sm:top-8 right-2 sm:right-4 lg:right-8 animate-float group cursor-pointer hover:scale-125 transition-all duration-300">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-blue-300 transition-colors duration-300">Analytics</div>
                                </div>
                            </div>

                            {/* Customization Icon - Right */}
                            <div className="absolute right-0 lg:right-4 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-purple-300 transition-colors duration-300">Themes</div>
                                </div>
                            </div>

                            {/* Speed Icon - Bottom Right */}
                            <div className="absolute bottom-8 right-4 lg:right-8 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-green-300 transition-colors duration-300">Fast Setup</div>
                                </div>
                            </div>

                            {/* Conversion Icon - Bottom Left */}
                            <div className="absolute bottom-8 left-4 lg:left-8 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-orange-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-orange-300 transition-colors duration-300">Convert</div>
                                </div>
                            </div>

                            {/* Brand Icon - Left */}
                            <div className="absolute left-0 lg:left-4 top-1/2 transform -translate-y-1/2 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '2s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-pink-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-pink-300 transition-colors duration-300">Branded</div>
                                </div>
                            </div>

                            {/* Easy Icon - Top Left */}
                            <div className="absolute top-8 left-4 lg:left-8 animate-float group cursor-pointer hover:scale-125 transition-all duration-300" style={{ animationDelay: '2.5s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:shadow-2xl group-hover:shadow-indigo-500/50">
                                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m0 6V4m0 6v6m6-6h1a3 3 0 000-6h-1m0 6V4m0 6v6" />
                                    </svg>
                                </div>
                                <div className="text-center mt-1">
                                    <div className="text-white text-xs font-semibold group-hover:text-indigo-300 transition-colors duration-300">Simple</div>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 400 400">
                                <defs>
                                    <linearGradient id="aboutLinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#5195cc" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#5eb94b" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>
                                {/* Lines from phone to feature icons */}
                                <line x1="200" y1="200" x2="320" y2="80" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" />
                                <line x1="200" y1="200" x2="360" y2="200" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                <line x1="200" y1="200" x2="320" y2="320" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
                                <line x1="200" y1="200" x2="80" y2="320" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                                <line x1="200" y1="200" x2="40" y2="200" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
                                <line x1="200" y1="200" x2="80" y2="80" stroke="url(#aboutLinkGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}