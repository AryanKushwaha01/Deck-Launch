import React from 'react';

const Process = () => {
    const advantages = [
        {
            title: 'No Hidden Fees',
            description: 'Complete transparency in pricing. What you see is what you pay - no surprises, no hidden costs.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            title: 'Proprietary Matchmaking',
            description: 'Our algorithm matches you with investors who align with your industry, stage, and vision.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            title: 'Pitch Deck Analysis & Improvement',
            description: 'Expert analysis and refinement of your pitch deck to maximize impact and investor engagement.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            )
        },
        {
            title: 'Hands-On Founder Support',
            description: 'Comprehensive support covering deck design, financial modeling, narrative crafting, and MVP development.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: '360° Ecosystem Support',
            description: 'Beyond funding - access to tech development, marketing strategy, and operational excellence.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            )
        }
    ];

    return (
        <section id="process" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Our 5-Point Advantage
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Connecting you with the right investors through our proven approach
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((item, index) => (
                        <div key={index} className="bg-[#1A1A1A] border border-white/5 p-6 rounded-xl hover:border-[#FFD700]/30 transition-all duration-300 group">
                            <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
