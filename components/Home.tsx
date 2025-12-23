import React from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import SolutionHybrid from './SolutionHybrid';
import AudienceSegments from './AudienceSegments';
import TechPillars from './TechPillars';
import Portfolio from './Portfolio';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <SocialProof />
            <SolutionHybrid />
            <AudienceSegments />
            <TechPillars />
            <Portfolio />
        </>
    );
};

export default Home;
