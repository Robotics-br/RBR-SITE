'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface TeamMember {
  id: number;
  role: string;
  slogan: string;
  description: string;
  image: string;
  highlightColor: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    role: 'Engenheiro de Software & Automação',
    slogan: 'Onde a tecnologia vira resultado.',
    description: 'Criamos sistemas, integrações e automações que escalam o seu negócio.',
    image: '/team/eng.webp',
    highlightColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    role: 'Estrategista de Mídias Sociais',
    slogan: 'Conteúdo com propósito e estratégia.',
    description: 'Não postamos por postar. Criamos posicionamento, autoridade e crescimento.',
    image: '/team/social.webp',
    highlightColor: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    role: 'Arquiteto de Experiências Digitais',
    slogan: 'Tudo conectado. Tudo funcionando.',
    description: 'Integramos sistemas, automações e redes sociais em uma experiência única.',
    image: '/team/arch.webp',
    highlightColor: 'from-cyan-400 to-teal-500',
  },
  {
    id: 4,
    role: 'Gestor de Sucesso do Cliente',
    slogan: 'Seu objetivo é a nossa meta.',
    description: 'Acompanhamos, ajustamos e garantimos que você chegue onde quer chegar.',
    image: '/team/cs.webp',
    highlightColor: 'from-amber-400 to-orange-500',
  },
];

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const tick = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    let interval = window.setInterval(tick, 5000);

    const onVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = window.setInterval(tick, 5000);
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isAutoPlaying, prefersReducedMotion]);

  const togglePlay = () => setIsAutoPlaying((v) => !v);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const getRelativeIndex = (index: number) => {
    const length = teamMembers.length;
    let relative = (index - activeIndex) % length;
    if (relative > length / 2) relative -= length;
    if (relative < -length / 2) relative += length;
    return relative;
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] pt-8 pb-12">
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold tracking-widest text-indigo-600 uppercase">
          Areas de expertise
        </p>
        <h2 className="mb-3 text-3xl font-bold text-slate-900">
          Os papeis que cuidam da sua operacao
        </h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          Nossa equipe combina quatro especialidades complementares para entregar resultados de
          ponta a ponta.
        </p>
      </div>

      <div
        className="relative mx-auto h-[500px] w-full max-w-6xl"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        aria-roledescription="carousel"
        aria-label="Equipe RoboticsBr"
      >
        {teamMembers.map((member, index) => {
          const relativeIndex = getRelativeIndex(index);
          const isActive = relativeIndex === 0;
          const xOffset = relativeIndex * 220;
          const zOffset = Math.abs(relativeIndex) * -150;
          const rotateY = relativeIndex * -15;
          const opacity = Math.max(1 - Math.abs(relativeIndex) * 0.3, 0);
          const scale = isActive ? 1.1 : 0.9;
          const zIndex = 50 - Math.abs(relativeIndex);

          const onSelect = () => {
            setIsAutoPlaying(false);
            setActiveIndex(index);
          };

          return (
            <div
              key={member.id}
              role="button"
              tabIndex={0}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Selecionar ${member.role}`}
              onClick={onSelect}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect();
                }
              }}
              className={`absolute top-0 left-1/2 aspect-[4/5] w-[350px] cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl transition-all duration-700 ease-out focus-visible:ring-4 focus-visible:ring-indigo-500 md:w-[400px] ${isActive ? 'ring-4 shadow-indigo-500/20 ring-white' : 'grayscale-[0.5] hover:grayscale-0'}`}
              style={{
                transform: `translateX(calc(-50% + ${xOffset}px)) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <Image
                src={member.image}
                alt={`Foto representando o papel de ${member.role}`}
                fill
                sizes="(max-width: 768px) 350px, 400px"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-slate-900 via-slate-900/40 to-transparent' : 'from-slate-900/80 to-transparent'}`}
              />
              <div
                className={`absolute bottom-0 left-0 w-full transform p-8 text-left transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}
              >
                <div
                  className={`inline-block rounded-full bg-gradient-to-r px-3 py-1 ${member.highlightColor} mb-3 text-xs font-bold tracking-wider text-white uppercase shadow-lg`}
                >
                  {member.role}
                </div>
                <h3 className="mb-2 text-2xl leading-tight font-bold text-white">
                  &ldquo;{member.slogan}&rdquo;
                </h3>
                <p
                  className={`text-sm leading-relaxed text-slate-200 transition-all duration-500 ${isActive ? 'h-auto opacity-100' : 'h-0 overflow-hidden opacity-0'}`}
                >
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sr-only" aria-live="polite">
        Membro selecionado: {teamMembers[activeIndex].role}
      </div>

      <div className="relative z-20 mt-4 flex items-center justify-center gap-4 md:gap-8">
        <button
          onClick={prevSlide}
          className="rounded-full bg-white p-3 text-slate-700 shadow-lg transition-all hover:scale-110 hover:text-indigo-600"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={togglePlay}
          aria-pressed={!isAutoPlaying}
          aria-label={isAutoPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'}
          className="rounded-full bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200"
        >
          {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <div className="flex gap-2">
          {teamMembers.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? 'w-8 bg-indigo-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Ir para membro ${idx + 1}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="rounded-full bg-white p-3 text-slate-700 shadow-lg transition-all hover:scale-110 hover:text-indigo-600"
          aria-label="Próximo"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>
    </section>
  );
}
