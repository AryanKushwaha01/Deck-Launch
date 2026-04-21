import React, { useState, useEffect } from 'react';

const InspiringFacts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const facts = [
        {
            quote: "India is home to the 3rd largest startup ecosystem in the world with 100+ unicorns and counting.",
            source: "— NASSCOM Report 2024",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            quote: "Over 60% of Indian unicorns achieved their status within 7 years of founding. Your time is now.",
            source: "— Hurun India Future Unicorn Index",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ) // Using generic check/target icon, adjusted if needed
        },
        {
            quote: "Tier 2 and Tier 3 cities contribute 45% of India's startup growth. Innovation has no geography.",
            source: "— Startup India Initiative",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            quote: "The best time to build a startup is when you have a problem worth solving. The second best time is now.",
            source: "— Wisdom for Indian Entrepreneurs",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.067 15.583 14.5 17.517 14.5C19.45 14.5 21.017 16.067 21.017 18L21.017 21L14.017 21ZM17.517 12.5C14.479 12.5 12.017 14.962 12.017 18V23H23.017V18C23.017 14.962 20.554 12.5 17.517 12.5ZM6.017 21L6.017 18C6.017 16.067 7.583 14.5 9.517 14.5C11.45 14.5 13.017 16.067 13.017 18L13.017 21L6.017 21ZM9.517 12.5C6.479 12.5 4.017 14.962 4.017 18V23H15.017V18C15.017 14.962 12.554 12.5 9.517 12.5Z" transform="translate(0 -6) scale(0.8)" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M16 10h.01M12 16h.01" /> {/* Fallback generic quote look if path is complex, simply using a quote icon */}
                    <text x="5" y="18" fontSize="20" fill="#FFD700" fontFamily="serif">"</text>
                </svg>
            ) // Simplified to text quote or simple SVG
        },
        {
            quote: "Indian B2B SaaS companies are growing at 30% CAGR, creating global impact from India.",
            source: "— SaaSBoomi & McKinsey Report",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
            )
        }
    ];

    // Better Quote Icon for item 4
    facts[3].icon = (
        <svg className="w-8 h-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.067 15.583 14.5 17.517 14.5C19.45 14.5 21.017 16.067 21.017 18L21.017 21L14.017 21ZM17.517 12.5C14.479 12.5 12.017 14.962 12.017 18V23H23.017V18C23.017 14.962 20.554 12.5 17.517 12.5ZM6.017 21L6.017 18C6.017 16.067 7.583 14.5 9.517 14.5C11.45 14.5 13.017 16.067 13.017 18L13.017 21L6.017 21ZM9.517 12.5C6.479 12.5 4.017 14.962 4.017 18V23H15.017V18C15.017 14.962 12.554 12.5 9.517 12.5Z" />
        </svg>
    );
    // Better Target Icon for item 2
    facts[1].icon = (
        <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % facts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [facts.length]);

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Inspiring <span className="text-[#FFD700]">Facts</span> for Indian Entrepreneurs
                    </h2>
                    <p className="text-gray-500 text-lg">
                        You're building the future of India's economy
                    </p>
                </div>

                <div className="bg-[#2A2A2A] dark:bg-[#1A1A1A] rounded-3xl p-10 md:p-14 relative overflow-hidden transition-all duration-300 border border-gray-100 dark:border-white/5">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Icon Circle */}
                        <div className="w-16 h-16 rounded-full bg-[#333] flex items-center justify-center flex-shrink-0 border border-white/10">
                            {facts[currentSlide].icon}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
                                "{facts[currentSlide].quote}"
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium">
                                {facts[currentSlide].source}
                            </p>

                            {/* Navigation Dots */}
                            <div className="flex items-center gap-2 mt-10">
                                {facts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#FFD700]' : 'w-1.5 bg-gray-600 hover:bg-gray-500'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InspiringFacts;
