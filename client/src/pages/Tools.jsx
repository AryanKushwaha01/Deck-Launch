import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Calculator State
    const [ownership, setOwnership] = useState(100);
    const [fundingAmount, setFundingAmount] = useState(5000000);
    const [valuation, setValuation] = useState(20000000);
    const [dilutionResult, setDilutionResult] = useState(null);

    // Chat State
    const [chatMessage, setChatMessage] = useState('');

    const calculateDilution = () => {
        const postMoneyValuation = parseFloat(valuation) + parseFloat(fundingAmount);
        const dilution = (parseFloat(fundingAmount) / postMoneyValuation) * 100;
        const newOwnership = parseFloat(ownership) - (parseFloat(ownership) * (dilution / 100));

        setDilutionResult({
            dilution: dilution.toFixed(2),
            newOwnership: newOwnership.toFixed(2),
            postMoney: postMoneyValuation
        });
    };

    return (
        <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-[#FFD700] selection:text-black">
            {/* Custom Header */}
            <header className="fixed w-full z-50 bg-[#111]/95 backdrop-blur-sm border-b border-white/5 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <img src="/logo-dark.png" alt="DeckLaunch" className="h-10 w-auto" />
                    </a>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => {
                                document.documentElement.classList.toggle('dark');
                                localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        </button>

                        <Link to="/" className="text-gray-300 hover:text-white font-medium flex items-center gap-2 text-sm transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium mb-6">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 3.214L13 21l-2.286-6.857L5 12l5.714-3.214L13 3z" /></svg>
                            Free AI-Powered Tools
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            Startup <span className="text-[#FFD700]">AI Tools</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-2 leading-relaxed">
                            Prepare for your fundraising journey with our free AI-powered tools designed specifically for Indian startups
                        </p>
                        <p className="text-sm text-gray-500 max-w-xl mx-auto">
                            Practice your pitch with an AI investor simulator and understand equity dilution before you enter fundraising conversations
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                        {/* Tool 1: Pitch Practice AI */}
                        <div className="bg-[#1A1A1A] rounded-2xl p-1 border border-white/5 hover:border-[#FFD700]/30 transition-colors duration-300">
                            <div className="p-8 pb-4">
                                <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Pitch Practice AI</h3>
                                <p className="text-gray-400 text-sm mb-6">Practice your pitch with an AI investor. Get realistic feedback and tough questions.</p>

                                {/* Chat Interface Mockup */}
                                <div className="bg-[#111] rounded-xl border border-white/10 h-[400px] flex flex-col">
                                    <div className="flex-1 p-6 flex items-center justify-center text-center">
                                        <div>
                                            <p className="text-white text-lg font-medium mb-2">Ready to pitch?</p>
                                            <p className="text-gray-500 text-sm max-w-xs mx-auto">Introduce your startup and I'll ask you questions like a real investor would.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border-t border-white/10">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Tell me about your startup..."
                                                className="w-full bg-[#1A1A1A] text-white rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700] border border-white/5"
                                                value={chatMessage}
                                                onChange={(e) => setChatMessage(e.target.value)}
                                            />
                                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#FFD700] rounded text-black hover:bg-[#F0C000] transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tool 2: Equity Dilution Simulator */}
                        <div className="bg-[#1A1A1A] rounded-2xl p-1 border border-white/5 hover:border-[#FFD700]/30 transition-colors duration-300">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Equity Dilution & Cap Table Simulator</h3>
                                <p className="text-gray-400 text-sm mb-8">Calculate how your ownership changes after fundraising rounds</p>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-white text-sm font-medium mb-2">Current Ownership (%)</label>
                                        <input
                                            type="number"
                                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors"
                                            value={ownership}
                                            onChange={(e) => setOwnership(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white text-sm font-medium mb-2">Fundraising Amount (₹)</label>
                                        <input
                                            type="number"
                                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors"
                                            value={fundingAmount}
                                            onChange={(e) => setFundingAmount(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white text-sm font-medium mb-2">Pre-Money Valuation (₹)</label>
                                        <input
                                            type="number"
                                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] transition-colors"
                                            value={valuation}
                                            onChange={(e) => setValuation(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        onClick={calculateDilution}
                                        className="w-full bg-[#8B7D00] text-gray-300 font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-black transition-all duration-300 mt-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                        Calculate Dilution
                                    </button>

                                    {dilutionResult && (
                                        <div className="mt-6 p-4 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 text-sm">New Ownership:</span>
                                                <span className="text-[#FFD700] font-bold text-lg">{dilutionResult.newOwnership}%</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-300 text-sm">Dilution:</span>
                                                <span className="text-white font-medium">{dilutionResult.dilution}%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300 text-sm">Post-Money Val:</span>
                                                <span className="text-white font-medium">₹{dilutionResult.postMoney.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="max-w-2xl mx-auto bg-[#1A1A1A] border border-white/5 rounded-2xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-[#FFD700]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-32 bg-[#FFD700]/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Expert Guidance?</h2>
                            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                                While these tools help you prepare, our expert team provides personalized fundraising support
                            </p>
                            <Link to="/" className="inline-block px-8 py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#F0C000] transition-colors shadow-lg hover:shadow-[#FFD700]/20">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simplified Footer */}
            <footer className="py-12 border-t border-white/10 bg-[#111] mt-16 text-center">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo-dark.png" alt="DeckLaunch" className="h-8 w-auto" />
                        <span className="text-gray-500 text-sm ml-2">Your startup growth partner</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
                        <button className="text-gray-500 hover:text-white transition-colors">Theme</button>
                        <a href="https://www.linkedin.com/company/black-leo-ventures/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} DeckLaunch. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Tools;
