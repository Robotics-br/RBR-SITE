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
    name: 'Fernando Almeida',
    role: 'Diretor de Operações',
    company: 'Distribuidora Almeida',
    text: 'Achávamos que IA era coisa de empresa grande. A RoboticsBr mostrou que estava ao nosso alcance. Em 3 semanas, automatizamos o atendimento ao cliente e liberamos 4 pessoas para atividades estratégicas. O ROI veio no primeiro mês.',
    rating: 5,
    avatar: 'FA',
  },
  {
    id: 2,
    name: 'Patrícia Gonçalves',
    role: 'CEO',
    company: 'PG Assessoria Contábil',
    text: 'O processo de diagnóstico foi revelador — eles mapearam gargalos que nem sabíamos que existiam. O agente de IA que criaram para triagem de documentos economiza 30 horas por semana da nossa equipe. Atendimento excepcional e acompanhamento de verdade.',
    rating: 5,
    avatar: 'PG',
  },
  {
    id: 3,
    name: 'Ricardo Torres',
    role: 'Sócio-fundador',
    company: 'Torres Engenharia',
    text: 'Contratamos para automatizar propostas comerciais e orçamentos. O sistema de IA gera propostas personalizadas em minutos, não em dias. Nosso ciclo de vendas caiu pela metade e a taxa de conversão subiu 35%. Parceria que vale cada centavo.',
    rating: 5,
    avatar: 'RT',
  },
  {
    id: 4,
    name: 'Juliana Martins',
    role: 'Gerente Comercial',
    company: 'Clínica Vida Plena',
    text: 'O chatbot inteligente que implementaram para agendamento e dúvidas dos pacientes transformou nossa recepção. Reduzimos em 60% as ligações telefônicas e os pacientes adoram a praticidade. O treinamento da equipe foi impecável.',
    rating: 5,
    avatar: 'JM',
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
            Empresas como a sua já estão colhendo os resultados da IA com nosso acompanhamento.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          <Quote size={48} className="absolute top-6 left-6 text-indigo-100" />

          <div className="relative z-10">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={`star-${current.id}-${i}`} size={18} className="text-amber-400" fill="currentColor" />
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
