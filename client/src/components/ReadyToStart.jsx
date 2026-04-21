import React from 'react';
import { Link } from 'react-router-dom';

const ReadyToStart = () => {
    return (
        <section id="contact" className="py-24 bg-[#FFD700] text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">
                        Ready to Start Your Funding Journey?
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mb-4 opacity-90">
                        Let's discuss how we can help your startup succeed
                    </p>
                    <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Schedule a consultation to explore how DeckLaunch can support your fundraising goals
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <Link
                            to="/pitch-deck-audit"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#1a1a1a] text-white rounded-lg font-bold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            AI Pitch Deck Audit
                        </Link>

                        <a
                            href="https://zcal.co/blackleoventures/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#1a1a1a] text-white rounded-lg font-bold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Schedule a Free Consultation
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 pt-10 border-t border-black/10">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Comprehensive</h3>
                        <p className="text-black/70 text-sm font-medium uppercase tracking-wider">End-to-End Support</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Curated</h3>
                        <p className="text-black/70 text-sm font-medium uppercase tracking-wider">Investor Network</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Transparent</h3>
                        <p className="text-black/70 text-sm font-medium uppercase tracking-wider">Pricing & Process</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Expert</h3>
                        <p className="text-black/70 text-sm font-medium uppercase tracking-wider">Guidance</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToStart;
