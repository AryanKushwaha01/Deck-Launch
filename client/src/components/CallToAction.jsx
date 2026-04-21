import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-20 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                    Every startup is different. Let's discuss which partnership model fits your needs best.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-black bg-[#FFD700] hover:bg-[#F0C000] transition-colors duration-300 shadow-lg shadow-[#FFD700]/20"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Free Consultation
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
