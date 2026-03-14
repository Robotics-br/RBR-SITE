import React from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import SolutionHybrid from './SolutionHybrid';
import AudienceSegments from './AudienceSegments';
import Methodology from './Methodology';
import TechPillars from './TechPillars';
import Expertise from './Expertise';
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

            {/* Prova social com métricas */}
            <AnimatedSection animation="fade-in">
                <SocialProof />
            </AnimatedSection>

            {/* Problema/Solução */}
            <AnimatedSection animation="fade-up">
                <SolutionHybrid />
            </AnimatedSection>

            {/* Soluções de IA */}
            <AnimatedSection animation="fade-up">
                <AudienceSegments />
            </AnimatedSection>

            {/* Metodologia em 3 fases */}
            <AnimatedSection animation="fade-up">
                <Methodology />
            </AnimatedSection>

            {/* Pilares técnicos de IA */}
            <AnimatedSection animation="fade-up">
                <TechPillars />
            </AnimatedSection>

            {/* Expertise e tecnologias */}
            <AnimatedSection animation="fade-up">
                <Expertise />
            </AnimatedSection>

            {/* Depoimentos */}
            <AnimatedSection animation="fade-up">
                <Testimonials />
            </AnimatedSection>

            {/* Portfólio de projetos de IA */}
            <AnimatedSection animation="fade-up">
                <Portfolio />
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection animation="fade-up">
                <FAQ />
            </AnimatedSection>

            {/* CTA final */}
            <AnimatedSection animation="fade-in">
                <CTASection />
            </AnimatedSection>
        </>
    );
};

export default Home;
