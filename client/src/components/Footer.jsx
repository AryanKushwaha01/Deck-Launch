import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-white dark:bg-black pt-16 pb-8 transition-colors duration-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & CTA */}
                    <div className="space-y-6">
                        <a href="/" className="flex items-center gap-3">
                            <img src="/logo-light.png" alt="DeckLaunch" className="h-12 w-auto dark:hidden" />
                            <img src="/logo-dark.png" alt="DeckLaunch" className="h-12 w-auto hidden dark:block" />
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Your startup growth partner - From idea to scale
                        </p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=917837059633&text=Hi%2C+I%27m+interested+in+booking+a+consultation+with+Black+Leo+Ventures.+Please+share+more+details.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#F0C000] transition-colors shadow-sm text-sm"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8H8l-4 4V5a2 2 0 012-2h3" />
                            </svg>
                            Book a Consultation
                        </a>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-black dark:text-white font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Funds for Startups</a></li>
                            <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Grants & Incubation</a></li>
                            <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Deal Origination</a></li>
                            <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">M&A Advisory</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-black dark:text-white font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#case-studies" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Case Studies</a></li>
                            <li><a href="#funding-system" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Our Process</a></li>
                            <li><a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">FAQ</a></li>
                            <li><a href="/tools" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">AI Tools</a></li>
                            <li>
                                <button
                                    onClick={() => {
                                        document.documentElement.classList.toggle('dark');
                                        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                                    }}
                                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm text-left"
                                >
                                    Theme
                                </button>
                            </li>
                            <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div>
                        <h4 className="text-black dark:text-white font-bold mb-6 text-lg">Contact Information</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-black dark:text-white font-bold text-sm">+91 78370 59633</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <div>
                                    <span className="text-black dark:text-white font-bold text-sm block">CIN</span>
                                    <span className="text-gray-500 text-xs">U85300MP2020PTC053751</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <a href="https://www.linkedin.com/company/black-leo-ventures/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-bold text-sm hover:text-[#0077b5] transition-colors">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400">
                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Registered Company
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400">
                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            GSTIN Verified
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400">
                            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            CIN: U85300MP2020PTC053751
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} DeckLaunch. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
