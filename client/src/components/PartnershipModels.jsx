import React from 'react';

const PartnershipModels = () => {
    const models = [
        {
            tag: "Most Common",
            title: "Fee-Based Model",
            subtitle: "Traditional consulting + success fee structure",
            description: "A modest upfront consulting fee plus performance-based success fee upon funding closure.",
            features: [
                "Pitch deck audit & refinement",
                "Investor introductions",
                "Success-based alignment",
                "Transparent fee structure"
            ],
            icon: "₹"
        },
        {
            tag: "Early-Stage Startups",
            title: "Equity Partnership",
            subtitle: "Long-term partnership with equity stake",
            description: "For pre-revenue startups, we may accept equity in lieu of fees while helping you build your MVP and secure funding.",
            features: [
                "MVP development support",
                "Zero upfront cash required",
                "Long-term strategic partner",
                "Aligned growth incentives"
            ],
            icon: "%"
        },
        {
            tag: "Tailored Solutions",
            title: "Custom Solutions",
            subtitle: "Hybrid models designed for your unique needs",
            description: "We create bespoke partnership structures combining fees, equity, and success milestones based on your specific situation.",
            features: [
                "Flexible payment terms",
                "Milestone-based structures",
                "Hybrid fee + equity models",
                "Case-by-case optimization"
            ],
            icon: "⚙️"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Flexible Partnership Models
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Every startup is unique. We offer tailored partnership models designed to match your specific needs, stage, and goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={index} className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl flex flex-col hover:border-[#FFD700]/30 transition-all duration-300 group">
                            <div className="mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#333] text-gray-300">
                                    {model.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                <span className="text-[#FFD700] text-3xl">{model.icon}</span>
                                {model.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 h-10 flex items-center">
                                {model.subtitle}
                            </p>

                            <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">
                                {model.description}
                            </p>

                            <div className="space-y-3 mt-auto border-t border-white/10 pt-6">
                                {model.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-5 h-5 rounded-full border border-[#FFD700] flex items-center justify-center flex-shrink-0 text-[#FFD700]">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipModels;
