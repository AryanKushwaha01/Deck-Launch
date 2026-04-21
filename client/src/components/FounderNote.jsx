import React from 'react';

const FounderNote = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-[#050505] transition-colors duration-300 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
                    Your Startup Could Be Next
                </h2>

                <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#FFD700]/30 rounded-2xl p-8 md:p-12 relative shadow-xl dark:shadow-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] p-3 rounded-full shadow-lg shadow-[#FFD700]/20">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.054 15.659 14.502 17.659 14.502C19.659 14.502 21.302 16.054 21.302 18C21.302 19.946 19.659 21.5 17.659 21.5C15.659 21.5 14.017 19.946 14.017 18V21ZM5.017 21L5.01667 18C5.01667 16.054 6.64933 14.502 8.64933 14.502C10.6493 14.502 12.302 16.054 12.302 18C12.302 19.946 10.6493 21.5 8.64933 21.5C6.64933 21.5 5.017 19.946 5.017 18V21Z" />
                        </svg>
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "These founders started where you are today. With the right strategy, pitch, and investor connections, your startup can achieve similar success. Let DeckLaunch guide your fundraising journey."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;
