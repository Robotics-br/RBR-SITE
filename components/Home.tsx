import React from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import SolutionHybrid from './SolutionHybrid';
import AudienceSegments from './AudienceSegments';
import TechPillars from './TechPillars';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import FAQ from './FAQ';
import CTASection from './CTASection';
import AnimatedSection from './AnimatedSection';

const Home: React.FC = () => {
    return (
        <>
            {/* Atenção */}
            <Hero />

            {/* Interesse — Prova social com métricas */}
            <AnimatedSection animation="fade-in">
                <SocialProof />
            </AnimatedSection>

            {/* Desejo — O problema que resolvemos */}
            <AnimatedSection animation="fade-up">
                <SolutionHybrid />
            </AnimatedSection>

            {/* Identificação — Para quem é */}
            <AnimatedSection animation="fade-up">
                <AudienceSegments />
            </AnimatedSection>

            {/* Autoridade — Como fazemos */}
            <AnimatedSection animation="fade-up">
                <TechPillars />
            </AnimatedSection>

            {/* Confiança — Depoimentos */}
            <AnimatedSection animation="fade-up">
                <Testimonials />
            </AnimatedSection>

            {/* Prova — Portfólio com resultados */}
            <AnimatedSection animation="fade-up">
                <Portfolio />
            </AnimatedSection>

            {/* Remoção de objeções */}
            <AnimatedSection animation="fade-up">
                <FAQ />
            </AnimatedSection>

            {/* Ação — CTA final com urgência */}
            <AnimatedSection animation="fade-in">
                <CTASection />
            </AnimatedSection>
        </>
    );
};

export default Home;
