export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#5195cc] via-[#4a8bc2] to-[#5eb94b] overflow-hidden">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0">
                {/* Floating Orbs - Responsive sizes */}
                <div className="absolute top-20 left-4 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-[#5eb94b]/20 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-4 lg:right-10 w-20 h-20 lg:w-28 lg:h-28 bg-[#5eb94b]/15 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>

                {/* Animated Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5eb94b]/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Geometric Patterns */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
                            <span className="w-2 h-2 bg-[#5eb94b] rounded-full mr-2 animate-pulse"></span>
                            New: Smart Link Analytics
                        </div>

                        {/* Main Heading - Mobile optimized */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                            One Link.
                            <br />
                            <span className="bg-gradient-to-r from-[#5eb94b] to-white bg-clip-text text-transparent animate-pulse">
                                Endless
                            </span>
                            <br />
                            <span className="text-[#5eb94b]">Possibilities.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Drop all your important links in one place and share a single,
                            <span className="font-semibold text-[#5eb94b]"> smart URL </span>
                            with your audience.
                        </p>

                        {/* CTA Buttons - Mobile first */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                            <a
                                href="#get-started"
                                className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-4 text-base lg:text-lg font-bold text-[#5195cc] bg-white rounded-2xl shadow-2xl hover:shadow-[#5eb94b]/25 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#5eb94b] to-[#5195cc] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                <span className="relative flex items-center">
                                    Get Started Free
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#example"
                                className="group inline-flex items-center justify-center px-6 lg:px-8 py-4 text-base lg:text-lg font-semibold text-white border-2 border-white/30 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                            >
                                See Example Page
                                <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats - Mobile responsive */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-6 lg:pt-8">
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">10K+</div>
                                <div className="text-white/70 text-sm">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">50M+</div>
                                <div className="text-white/70 text-sm">Links Shared</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-white">99.9%</div>
                                <div className="text-white/70 text-sm">Uptime</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - TODO: Add content later */}
                    <div className="relative order-1 lg:order-2">
                        {/* Placeholder for future content */}
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