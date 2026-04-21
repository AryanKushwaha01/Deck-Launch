import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { name: 'Services', href: '#process', sectionId: 'process' },
        { name: 'Process', href: '#funding-system', sectionId: 'funding-system' },
        { name: 'Pricing', href: '#pricing', sectionId: 'pricing' },
        { name: 'Case Studies', href: '#case-studies', sectionId: 'case-studies' },
        { name: 'Grants', href: 'https://getgrants.in/', external: true },
        { name: 'About Us', href: '/about' },
        { name: 'Company Profile', href: 'https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view', icon: true, external: true },
    ];

    // Initialize theme
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            if (!localStorage.theme) document.documentElement.classList.add('dark');
        }
    }, []);

    // Scroll progress bar + active section tracking
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

            // Active section detection
            const sectionIds = navLinks
                .filter(l => l.sectionId)
                .map(l => l.sectionId);

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.getBoundingClientRect().top <= 100) {
                    setActiveSection(sectionIds[i]);
                    return;
                }
            }
            setActiveSection('');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* ── Scroll progress bar ── */}
            <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

            <nav className="fixed w-full z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10 transition-colors duration-300" style={{ top: '3px' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="flex items-center gap-3 group">
                                <img src="/logo-light.png" alt="DeckLaunch" className="h-12 w-auto dark:hidden transition-transform group-hover:scale-105" />
                                <img src="/logo-dark.png" alt="DeckLaunch" className="h-12 w-auto hidden dark:block transition-transform group-hover:scale-105" />
                            </a>
                        </div>

                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-6">
                                {navLinks.map((link) => {
                                    const isActive = link.sectionId && activeSection === link.sectionId;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                            className={`px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-1 relative
                                                ${isActive
                                                    ? 'nav-link-active'
                                                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                                                }
                                                ${link.name === 'Company Profile' ? 'opacity-80' : ''}
                                            `}
                                        >
                                            {link.icon && (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            )}
                                            {link.name}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] rounded-full" />
                                            )}
                                        </a>
                                    );
                                })}

                                {/* Theme toggle */}
                                <button
                                    id="theme-toggle-btn"
                                    onClick={() => {
                                        document.documentElement.classList.toggle('dark');
                                        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                                    }}
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2"
                                    aria-label="Toggle Theme"
                                >
                                    <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                </button>

                                <a id="navbar-contact-btn" href="#contact" className="btn-shimmer text-black px-6 py-2 rounded-md font-bold transition-colors duration-300 text-sm shadow-sm">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Mobile hamburger */}
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                id="mobile-menu-btn"
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isOpen && createPortal(
                <div className="fixed inset-0 z-[100] flex justify-end lg:hidden">
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
                    <div className="relative w-full max-w-xs bg-[#050505] h-full shadow-2xl p-6 flex flex-col border-l border-white/10 overflow-y-auto">
                        <div className="flex items-center justify-between mb-10 shrink-0">
                            <h2 className="text-white text-lg font-bold">Navigation</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="flex-1 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.name === 'Company Profile' ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center text-gray-400 hover:text-[#FFD700] transition-colors text-lg font-medium"
                                            onClick={() => setIsOpen(false)}>
                                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            Company Profile
                                        </a>
                                    ) : (
                                        <a href={link.href}
                                            className="block text-gray-400 hover:text-[#FFD700] text-lg font-medium transition-colors"
                                            onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 shrink-0">
                            <a href="#contact" onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center btn-shimmer text-black py-4 rounded-lg font-bold transition-colors duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Navbar;
