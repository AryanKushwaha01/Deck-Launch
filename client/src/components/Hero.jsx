import React, { useState, useEffect, useRef } from 'react';

const slides = [
    {
        title: "Your Growth Partner",
        heading: "Investor-Ready Transformation",
        text: "From pitch deck refinement to financial modeling, we prepare every aspect of your startup to meet investor expectations and close deals faster.",
        button: "Complete Due Diligence Support"
    },
    {
        title: "Your Growth Partner",
        heading: "Strategic Fundraising",
        text: "We connect ambitious startups with the right investors, ensuring every introduction is targeted, meaningful, and aligned with your growth stage.",
        button: "Direct Access to Vetted Capital"
    },
    {
        title: "Your Growth Partner",
        heading: "End-to-End Growth Partnership",
        text: "Beyond funding, we guide you through MVP development, market validation, and scaling strategies to build a sustainable, investor-attractive business.",
        button: "Your Success is Our Mission"
    }
];

const stats = [
    { value: 500, suffix: '+', label: 'Startups Supported' },
    { value: 120, prefix: '₹', suffix: 'Cr+', label: 'Capital Raised' },
    { value: 94, suffix: '%', label: 'Success Rate' },
    { value: 8, suffix: '+', label: 'Years Experience' },
];

function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatItem({ stat, animate }) {
    const count = useCountUp(stat.value, 1800, animate);
    return (
        <div className="stat-item text-center">
            <div className="text-3xl font-extrabold text-black dark:text-white">
                {stat.prefix || ''}{animate ? count : 0}{stat.suffix}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{stat.label}</div>
        </div>
    );
}

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateStats, setAnimateStats] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimateStats(true); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative hero-gradient-mesh overflow-hidden min-h-screen flex flex-col items-center justify-center transition-colors duration-300">

            {/* Decorative blurred orbs */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-blue-300/10 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-300/50 dark:border-yellow-500/30 mb-6">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                            Trusted by 500+ Startups
                        </span>

                        <h1 className="text-5xl tracking-tight font-extrabold text-black dark:text-white sm:text-6xl md:text-7xl leading-tight">
                            Launch Your <span className="text-gold text-shadow-outline">Pitch.</span><br />
                            Land Your <span className="text-gold text-shadow-outline">Round.</span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                            From building your MVP to making you investor-ready, we prepare your startup for growth and provide direct access to vetted capital.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                id="hero-audit-btn"
                                href="/audit"
                                className="btn-shimmer flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-black transition-all duration-300 shadow-md hover:shadow-yellow-300/40"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                AI Pitch Deck Audit
                            </a>
                            <a
                                id="hero-meeting-btn"
                                href="https://zcal.co/blackleoventures/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-bold rounded-md text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Schedule a Meeting
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                Trusted Nationwide
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Proven Track Record
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Glassmorphism Card */}
                    <div className="relative hidden lg:block">
                        <div className="glass-card rounded-2xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="rounded-xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-500 bg-[#080814]/80 dark:bg-[#080814]/90">
                                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-60" />

                                <div className="animate-fadeIn w-full" key={currentSlide}>
                                    <h3 className="text-[#FFD700] font-bold tracking-widest text-sm uppercase mb-6">{slides[currentSlide].title}</h3>
                                    <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                                        {slides[currentSlide].heading.split(' ').map((word, i) => (
                                            <React.Fragment key={i}>{word} {i === 1 && <br />}</React.Fragment>
                                        ))}
                                    </h2>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto mb-10 h-20">
                                        {slides[currentSlide].text}
                                    </p>
                                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/5 border border-[#FFD700] text-[#FFD700] text-sm font-bold hover:bg-[#FFD700] hover:text-black transition-all duration-300 w-full max-w-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                        {slides[currentSlide].button}
                                    </button>
                                </div>

                                {/* Dots */}
                                <div className="mt-8 flex gap-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#FFD700]' : 'w-2 bg-gray-600'}`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Stats Counter Row ── */}
                <div
                    ref={statsRef}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-200 dark:border-white/10 pt-10"
                >
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} animate={animateStats} />
                    ))}
                </div>
            </div>

            {/* WhatsApp Floating Button — updated message */}
            <a
                id="whatsapp-fab"
                href="https://api.whatsapp.com/send/?phone=917837059633&text=Hi%2C+I%27m+interested+in+learning+more+about+DeckLaunch.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-14 h-14 bg-[#FFD700] rounded-full shadow-lg flex items-center justify-center text-black z-50 hover:bg-[#F0C000] transition-colors hover:scale-110 duration-200"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </a>
        </div>
    );
};

export default Hero;
