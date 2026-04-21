import React from 'react';

const Commitment = () => {
    return (
        <section className="py-12 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#FFD700]/20 rounded-3xl p-12 relative overflow-hidden transition-all duration-300">
                    {/* Background glow effect */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-gray-200/50 to-transparent dark:from-[#FFD700]/5 dark:to-transparent pointer-events-none"></div>

                    <div className="relative z-10 text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-black dark:text-white mb-2Transition">Our Commitment to You</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
                        <div className="pt-8 md:pt-0">
                            <div className="text-[#FFD700] text-4xl font-bold mb-2">100%</div>
                            <div className="text-black dark:text-white font-bold text-lg mb-1">Tailored Solutions</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">Each partnership is customized to your needs</div>
                        </div>
                        <div className="pt-8 md:pt-0 md:pl-8">
                            <div className="text-[#FFD700] text-4xl font-bold mb-2">₹0</div>
                            <div className="text-black dark:text-white font-bold text-lg mb-1">Hidden Fees</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">Complete transparency, always</div>
                        </div>
                        <div className="pt-8 md:pt-0 md:pl-8">
                            <div className="text-[#FFD700] text-4xl font-bold mb-2">24/7</div>
                            <div className="text-black dark:text-white font-bold text-lg mb-1">Support Access</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">We're committed to your success</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
