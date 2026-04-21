import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "What if my startup is pre-revenue?",
            answer: "We work with startups at all stages, including pre-revenue. Our team specializes in helping early-stage founders articulate their vision, build compelling financial projections, and connect with investors who focus on seed and pre-seed opportunities. We'll help you showcase your market potential, team strength, and traction metrics that matter most to early-stage investors."
        },
        {
            question: "How many investor introductions will I actually get?",
            answer: "Quality over quantity is our motto. We match you with investors specifically interested in your sector, stage, and geography. While the exact number varies based on your startup's profile, we ensure every introduction is a warm, qualified lead."
        },
        {
            question: "What's your fee structure?",
            answer: "We believe in complete transparency. Our fee structure typically includes a modest upfront consulting fee for the pitch deck audit and strategy work, plus a success fee based on the funding secured. We align our incentives with your success - we only win when you win. Detailed pricing is provided during the initial consultation based on your specific needs and fundraising goals. No hidden fees, ever."
        },
        {
            question: "How do you protect my intellectual property and confidential information?",
            answer: "Your IP and confidential information are sacred to us. We sign comprehensive NDAs with all clients before any information exchange. All investor introductions are made only with your explicit approval, and we never share your materials without your consent. Our team operates under strict confidentiality protocols, and we have robust systems in place to ensure your data security and privacy throughout the entire engagement."
        },
        {
            question: "Do you guarantee funding success?",
            answer: "While we cannot guarantee funding (no ethical advisor can), we have a strong track record with qualified startups that complete our full program. We conduct a thorough assessment during the audit phase to ensure your startup is truly ready for fundraising. If we identify gaps, we'll work with you to address them before approaching investors. Our comprehensive approach and curated network significantly improve your chances of securing the right investment partners."
        },
        {
            question: "What happens after I secure funding?",
            answer: "Our relationship doesn't end at funding. We provide ongoing support through our 360° ecosystem, including connections to tech partners, marketing agencies, and operational consultants. Many of our clients return for subsequent funding rounds, and we're always here to provide strategic guidance as your startup scales. We're invested in your long-term success, not just the initial funding round."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Everything you need to know about working with DeckLaunch
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-none">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-bold text-black dark:text-white">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
