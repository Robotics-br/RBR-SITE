import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import SolutionHybrid from '@/components/SolutionHybrid';
import AudienceSegments from '@/components/AudienceSegments';
import Methodology from '@/components/Methodology';
import TechPillars from '@/components/TechPillars';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection animation="fade-in">
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <SolutionHybrid />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <AudienceSegments />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Methodology />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <TechPillars />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Expertise />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <FAQ />
      </AnimatedSection>
      <AnimatedSection animation="fade-in">
        <CTASection />
      </AnimatedSection>
    </>
  );
}
