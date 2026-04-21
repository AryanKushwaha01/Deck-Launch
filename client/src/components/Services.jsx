import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Funds for Startups",
            description: "Direct access to seed, Series A, and growth-stage funding from vetted investors.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Funds for Funds",
            description: "We help Micro-VCs and Emerging Managers raise capital from LPs and Family Offices.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Grants & Incubation",
            description: "Navigate government grants, incubator programs, and non-dilutive funding opportunities.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Deal Structuring",
            description: "End-to-end deal structuring, term sheet negotiation, and transaction execution.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "M&A Advisory",
            description: "Strategic mergers and acquisitions guidance for growth and exit opportunities.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        },
        {
            title: "Legal & Compliance",
            description: "Comprehensive legal and compliance documentation support for seamless deals.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <div id="services" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-4">
                    <span className="px-4 py-2 border border-gray-300 dark:border-white/20 rounded-full text-gray-700 dark:text-white text-xs font-medium uppercase tracking-wider">Our Expertise</span>
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black dark:text-white sm:text-5xl mb-6">
                        Comprehensive Solutions for <span className="text-[#B8860B] dark:text-[#FFD700]">Your Success</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        From funding to strategic growth, we provide end-to-end support tailored to your startup's unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl hover:border-[#FFD700]/30 transition-all duration-300 group">
                            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#FFD700]/10 text-[#FFD700] mb-6 group-hover:bg-[#FFD700] group-hover:text-black transition-colors duration-300">
                                {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
