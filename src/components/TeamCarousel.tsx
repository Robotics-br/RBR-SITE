'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    role: "Engenheiro de Software & Automação",
    slogan: "Onde a tecnologia vira resultado.",
    description: "Criamos sistemas, integrações e automações que escalam o seu negócio.",
    image: "/team/eng.png",
    highlightColor: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    role: "Estrategista de Mídias Sociais",
    slogan: "Conteúdo com propósito e estratégia.",
    description: "Não postamos por postar. Criamos posicionamento, autoridade e crescimento.",
    image: "/team/social.png",
    highlightColor: "from-pink-500 to-rose-500"
  },
  {
    id: 3,
    role: "Arquiteto de Experiências Digitais",
    slogan: "Tudo conectado. Tudo funcionando.",
    description: "Integramos sistemas, automações e redes sociais em uma experiência única.",
    image: "/team/arch.png",
    highlightColor: "from-cyan-400 to-teal-500"
  },
  {
    id: 4,
    role: "Gestor de Sucesso do Cliente",
    slogan: "Seu objetivo é a nossa meta.",
    description: "Acompanhamos, ajustamos e garantimos que você chegue onde quer chegar.",
    image: "/team/cs.png",
    highlightColor: "from-amber-400 to-orange-500"
  }
];

export default function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

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
    <section className="pt-8 pb-12 bg-[#f6f9fc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Quem conduz a transformação da sua empresa</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Conheça os especialistas dedicados a transformar sua empresa com tecnologia de suporte e automação inteligente.
        </p>
      </div>

      <div
        className="relative h-[500px] w-full max-w-6xl mx-auto"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
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

          return (
            <div
              key={member.id}
              onClick={() => { setIsAutoPlaying(false); setActiveIndex(index); }}
              className={`absolute top-0 left-1/2 w-[350px] md:w-[400px] aspect-[4/5] transition-all duration-700 ease-out cursor-pointer rounded-2xl shadow-2xl overflow-hidden bg-white border border-slate-100
                ${isActive ? 'shadow-indigo-500/20 ring-4 ring-white' : 'grayscale-[0.5] hover:grayscale-0'}`}
              style={{
                transform: `translateX(calc(-50% + ${xOffset}px)) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <img src={member.image} alt={member.role} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-slate-900 via-slate-900/40 to-transparent' : 'from-slate-900/80 to-transparent'}`} />
              <div className={`absolute bottom-0 left-0 w-full p-8 text-left transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}`}>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.highlightColor} text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-lg`}>
                  {member.role}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  &ldquo;{member.slogan}&rdquo;
                </h3>
                <p className={`text-slate-200 text-sm leading-relaxed transition-all duration-500 ${isActive ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-8 mt-4 relative z-20">
        <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all" aria-label="Anterior">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setIsAutoPlaying(false); setActiveIndex(idx); }}
              className={`h-2.5 rounded-full transition-all ${idx === activeIndex ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'}`}
              aria-label={`Membro ${idx + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-lg text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all" aria-label="Próximo">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/50 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
