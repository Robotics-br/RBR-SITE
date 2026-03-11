import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Costa',
    role: 'CEO',
    company: 'TechVerde',
    text: 'A RoboticsBr transformou nosso e-commerce. Em 3 meses, triplicamos a taxa de conversão e finalmente temos dados confiáveis para tomar decisões. O time entende tanto de tecnologia quanto de vendas — algo que nunca encontrei em outras agências.',
    rating: 5,
    avatar: 'MC',
  },
  {
    id: 2,
    name: 'Rafael Oliveira',
    role: 'Diretor de Marketing',
    company: 'Grupo Nexus',
    text: 'Já contratamos 4 agências antes. A diferença é que a RoboticsBr entrega código que funciona E marketing que converte. Nosso CAC caiu 40% e o LTV subiu 65%. Resultado real, não PowerPoint bonito.',
    rating: 5,
    avatar: 'RO',
  },
  {
    id: 3,
    name: 'Camila Santos',
    role: 'Criadora de Conteúdo',
    company: '@camilasantos',
    text: 'Como influenciadora, eu precisava monetizar minha audiência sem perder autenticidade. Eles criaram um sistema de vendas automatizado que roda sozinho. Minha receita recorrente cresceu 280% em 6 meses.',
    rating: 5,
    avatar: 'CS',
  },
  {
    id: 4,
    name: 'Eduardo Mendes',
    role: 'CTO',
    company: 'Fintech Scale',
    text: 'A integração entre o CRM, automação de marketing e nosso sistema interno ficou impecável. O time da RoboticsBr tem senioridade técnica real — não é aquele código colado do StackOverflow. Confiança total.',
    rating: 5,
    avatar: 'EM',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Resultados reais de empresas e criadores que confiaram na RoboticsBr.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          <Quote size={48} className="absolute top-6 left-6 text-indigo-100" />

          <div className="relative z-10">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 min-h-[120px]">
              "{current.text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {current.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{current.name}</p>
                  <p className="text-sm text-slate-500">{current.role}, {current.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrev}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm text-slate-400 font-medium tabular-nums">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
