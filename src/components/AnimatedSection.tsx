'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'slide-left': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
};

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: Readonly<AnimatedSectionProps>) {
  const { ref, isVisible } = useScrollAnimation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { hidden, visible } = animationClasses[animation];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? visible : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
