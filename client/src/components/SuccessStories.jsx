import React from 'react';

const SuccessStories = () => {
    const stories = [
        {
            tag: "SaaS",
            title: "Postman: API Development Platform",
            meta: "Founded: 2014 | Valuation: $5.6B",
            description: "Abhinav Asthana built the world's loading API platform from Bengaluru. Now used by 25M+ developers globally with funding from Insight Partners, Nexus Venture Partners, and CRV.",
            successFactor: "Solved global API development pain point"
        },
        {
            tag: "HealthTech",
            title: "PharmEasy: Online Pharmacy Leader",
            meta: "Founded: 2015 | Valuation: $5.6B",
            description: "Dharmil Sheth and Dhaval Shah revolutionized medicine delivery in India. Raised funding from TPG, Prosus Ventures, and Temasek, serving 100+ cities with 90M+ deliveries.",
            successFactor: "Made healthcare accessible and affordable pan-India"
        },
        {
            tag: "Logistics",
            title: "Delhivery: Supply Chain Giant",
            meta: "Founded: 2011 | Market Cap: $5B+",
            description: "Sahil Barua built India's largest logistics network from scratch. Successfully IPO'd with backing from SoftBank, Tiger Global, and Carlyle Group, handling 2B+ shipments annually.",
            successFactor: "Built tech-first logistics infrastructure for e-commerce boom"
        },
        {
            tag: "E-commerce",
            title: "Zepto: 10-Minute Delivery",
            meta: "Founded: 2021 | Valuation: $3.6B",
            description: "Two 19-year-old Stanford dropouts built India's fastest-growing quick commerce platform. Raised over $1.4 billion from top-tier investors including Y Combinator, Nexus Venture Partners, and Glade Brook Capital.",
            successFactor: "Solved hyperlocal delivery with tech-driven dark stores"
        },
        {
            tag: "FinTech",
            title: "CRED: Premium Credit Card Platform",
            meta: "Founded: 2018 | Valuation: $6.4B",
            description: "Kunal Shah's second unicorn created a members-only club for creditworthy Indians. Raised funding from Sequoia Capital, Ribbit Capital, and Tiger Global with innovative reward mechanisms.",
            successFactor: "Gamified credit card payments with exclusive rewards"
        },
        {
            tag: "EdTech",
            title: "Physics Wallah: Affordable Education",
            meta: "Founded: 2020 | Valuation: $2.8B",
            description: "Started as YouTube channel, Alakh Pandey built India's most affordable ed-tech platform. Achieved unicorn status with backing from Westbridge Capital and GSV Ventures, serving 10M+ students.",
            successFactor: "Quality education at 1/10th the cost of competitors"
        }
    ];

    return (
        <section id="case-studies" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                        Indian Startup Success Stories
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Real examples of how Indian startups transformed their vision into billion-dollar success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/5 flex flex-col hover:border-[#B8860B]/50 dark:hover:border-gold/50 transition-all duration-300 group shadow-sm dark:shadow-none">
                            <div className="mb-6">
                                <span className="px-3 py-1 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-wider rounded-md">
                                    {story.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-black dark:text-white mb-2 leading-tight">
                                {story.title}
                            </h3>

                            <p className="text-[#B8860B] dark:text-gold font-bold text-sm mb-6">
                                {story.meta}
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                {story.description}
                            </p>

                            <div className="mt-auto bg-[#B8860B]/10 dark:bg-[#FFD700]/10 border border-[#B8860B]/20 dark:border-[#FFD700]/20 rounded-xl p-4">
                                <p className="text-xs font-bold text-[#B8860B] dark:text-[#FFD700] uppercase mb-1">
                                    Key Success Factor
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                    {story.successFactor}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
