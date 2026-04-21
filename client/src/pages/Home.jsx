import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Problem from '../components/Problem';
import Process from '../components/Process';
import SuccessStories from '../components/SuccessStories';
import FundingSystem from '../components/FundingSystem';
import PartnershipModels from '../components/PartnershipModels';
import FounderNote from '../components/FounderNote';
import FAQ from '../components/FAQ';
import Commitment from '../components/Commitment';
import CallToAction from '../components/CallToAction';
import ReadyToStart from '../components/ReadyToStart';
import Footer from '../components/Footer';

import InspiringFacts from '../components/InspiringFacts';

const Home = () => {
    return (
        <div className="bg-white dark:bg-dark-bg min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <Hero />
            <Problem />
            <Process />
            <Services />
            {/*
       - [x] Create "Indian Startup Success Stories" Section
    - [x] Ensure Theme Support for New Content
- [x] **Add Final Content Sections**
    - [x] Add "Our 4-Step Funding System" Section
    - [x] Add "Flexible Partnership Models" Section
    - [x] Add "Founder Note / Call to Action" Section
    - [x] Verify Layout and Theme Switching
- [ ] Push Changes to GitHub      */}
            <SuccessStories />
            <FounderNote />
            <FundingSystem />
            <PartnershipModels />
            <Commitment />
            <CallToAction />
            <FAQ />
            <InspiringFacts />

            <ReadyToStart />

            <Footer />
        </div>
    );
};

export default Home;
