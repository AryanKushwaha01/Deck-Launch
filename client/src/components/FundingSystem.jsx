import React from 'react';

const FundingSystem = () => {
    const steps = [
        {
            number: "1",
            title: "Apply & Audit",
            description: "We assess your pitch deck, financial metrics, and overall fundraising readiness with a comprehensive audit.",
            duration: "7 days"
        },
        {
            number: "2",
            title: "Strategize & Build",
            description: "We build your pitch deck, financial model, and compelling founder story that resonates with investors.",
            duration: "14 days"
        },
        {
            number: "3",
            title: "Match & Connect",
            description: "We match you with the right investors, send warm introductions, and prepare you for winning pitches.",
            duration: "21 days"
        },
        {
            number: "4",
            title: "Close & Support",
            description: "We negotiate terms, support due diligence, and ensure successful fund disbursal and ongoing growth.",
            duration: "30 days"
        }
    ];

    return (
        <section id="funding-system" className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Our 4-Step Funding System
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        A proven, systematic approach to securing the right funding for your startup
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#151515] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-[#FFD700]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center text-black text-2xl font-bold mb-6 shadow-lg shadow-[#FFD700]/20">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {step.description}
                            </p>
                            <div className="flex items-center gap-2 text-black dark:text-[#FFD700] text-sm font-medium bg-[#FFD700]/20 dark:bg-[#FFD700]/10 px-4 py-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {step.duration}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm italic">
                        * Timeline is approximate and may vary based on individual startup's requirements. Not guaranteed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FundingSystem;
