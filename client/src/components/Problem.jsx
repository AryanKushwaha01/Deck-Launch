import React from 'react';

const Problem = () => {
    const problems = [
        {
            title: "Pitch Lacks Conviction & Structure",
            description: "Investors see hundreds of pitches. Without a compelling story and clear structure, your startup gets lost in the noise.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        },
        {
            title: "Misaligned Valuation & Unrealistic Financials",
            description: "Overvaluation or poorly structured financial projections signal inexperience and kill investor confidence instantly.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
            )
        },
        {
            title: "Regulatory & Compliance Paperwork Stalls Progress",
            description: "Complex documentation requirements and compliance issues create months of delays, draining momentum and resources.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Months Chasing Leads, Not Closing Deals",
            description: "Without the right network, founders waste time pursuing dead-end leads instead of connecting with serious investors.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
                        Why Most Fundraising Efforts Yield No Results
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Understanding the common pitfalls that prevent startups from securing funding
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-white/5 flex gap-6 hover:shadow-lg dark:hover:border-red-900/50 transition-all duration-300 group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-500 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                {problem.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-3">{problem.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
