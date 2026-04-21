import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const TeamMember = ({ initials, name, role }) => (
    <div className="bg-white dark:bg-white/5 bg-opacity-70 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-100 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-24 h-24 rounded-full bg-lemon-green/10 dark:bg-lemon-green/20 flex items-center justify-center mb-6 border-2 border-lemon-green">
            <span className="text-2xl font-bold text-black dark:text-lemon-green">{initials}</span>
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">{name}</h3>
        <p className="text-[#FFD700] text-sm font-medium">{role}</p>
    </div>
);

const About = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);

        // Initialize theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            // Default to dark for this specific brand if no preference
            if (!localStorage.theme) document.documentElement.classList.add('dark');
        }
    }, []);

    const team = [
        { initials: 'NA', name: 'Nirdosh Arora', role: 'Founder and Advisor' },
        { initials: 'UC', name: 'Utkarsh Chourasiya', role: 'Founder and CEO' },
        { initials: 'AN', name: 'Abhishek Negi', role: 'Investment and Valuation Director' },
        { initials: 'CF', name: 'Prof. Christian Farioli', role: 'Marketing Strategist' },
        { initials: 'SP', name: 'Subramaniam Parameswaran', role: 'Director - Financing' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 font-sans">
            {/* Custom Header */}
            <header className="fixed w-full z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        {/* Light Mode Logo */}
                        <img src="/logo-light.png" alt="DeckLaunch" className="h-14 w-auto dark:hidden drop-shadow-md transform transition-transform group-hover:scale-105" />
                        {/* Dark Mode Logo */}
                        <img src="/logo-dark.png" alt="DeckLaunch" className="h-14 w-auto hidden dark:block drop-shadow-md transform transition-transform group-hover:scale-105" />
                    </a>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium flex items-center gap-2 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Home
                        </a>

                        <a href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center px-4 py-2 bg-gold text-black font-bold rounded-md text-sm hover:bg-[#F0C000] transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Company Profile
                        </a>

                        <button
                            onClick={() => {
                                document.documentElement.classList.toggle('dark');
                                localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                            }}
                            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Text */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-600 text-shadow-sm">DeckLaunch</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Your startup growth partner - From building your MVP to making you investor-ready, we prepare your startup for growth and provide direct access to vetted capital.
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-10 border border-gray-100 dark:border-white/10">
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To empower Indian startups with the resources, guidance, and capital they need to transform innovative ideas into successful, scalable businesses. We bridge the gap between ambitious founders and the right investors.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-10 border border-gray-100 dark:border-white/10">
                            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Vision</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                To become India's most trusted startup funding partner, creating a thriving ecosystem where founders receive comprehensive support from MVP development to Series A funding and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Meet Our Team */}
                    <div className="text-center mb-16">
                        <p className="text-gray-500 text-lg mb-2">A passionate team, dedicated to your success.</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight uppercase">
                            Meet Our Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {team.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>

                    {/* Company Information */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Company Information</h2>

                        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider mb-2">Corporate Identification Number (CIN)</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-mono text-lg">U85300MP2020PTC053751</p>
                            </div>

                            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                                <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider mb-2">Contact</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-1">Phone: <span className="text-black dark:text-white font-medium">+91 78370 59633</span></p>
                                <p className="text-gray-600 dark:text-gray-400">Email: <span className="text-black dark:text-white font-medium">info@blackleoventures.com</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="text-center pb-12">
                        <a href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold rounded-lg text-lg hover:bg-[#F0C000] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Company Profile
                        </a>
                    </div>
                    {/* CTA Section */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <div className="bg-[#FFFDF5] dark:bg-white/5 rounded-3xl p-12 text-center border border-[#FFEDA6] dark:border-white/10 shadow-sm">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-6">
                                Ready to Take Your Startup to the Next Level?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                                Let's discuss how DeckLaunch can help you secure funding and scale your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="https://api.whatsapp.com/send/?phone=917837059633&text=Hi%2C+I%27m+interested+in+booking+a+consultation+with+Black+Leo+Ventures.+Please+share+more+details.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gold text-black font-bold rounded-md hover:bg-[#F0C000] transition-colors shadow-sm">
                                    Contact Us
                                </a>
                                <a href="https://zcal.co/blackleoventures/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-md hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm">
                                    Schedule a Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Simplified Footer for About Page */}
            <footer className="py-12 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <img src="/logo-light.png" alt="DeckLaunch" className="h-10 w-auto dark:hidden" />
                        <img src="/logo-dark.png" alt="DeckLaunch" className="h-10 w-auto hidden dark:block" />
                    </a>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <a href="/" className="text-gray-500 hover:text-black dark:hover:text-white font-medium transition-colors">Home</a>
                        <button
                            onClick={() => {
                                document.documentElement.classList.toggle('dark');
                                localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                            }}
                            className="text-gray-500 hover:text-black dark:hover:text-white font-medium transition-colors"
                        >
                            Theme
                        </button>
                        <a href="https://www.linkedin.com/company/black-leo-ventures/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white font-medium transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} DeckLaunch. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default About;
