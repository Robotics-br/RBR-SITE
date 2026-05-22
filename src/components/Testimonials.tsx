'use client';

import { useState } from 'react';
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
    text: 'A RoboticsBr não é um fornecedor — é um parceiro de verdade. Eles mapearam nossos processos, identificaram gargalos que a gente nem percebia e automatizaram tudo em 3 semanas. Liberamos 4 pessoas para atividades estratégicas e o retorno veio no primeiro mês.',
    rating: 5,
    avatar: 'FA',
  },
  {
    id: 2,
    name: 'Patrícia Gonçalves',
    role: 'CEO',
    company: 'PG Assessoria Contábil',
    text: 'O diagnóstico foi revelador — eles vieram, entenderam nossa dor e construíram a solução junto com a gente. A automação de triagem de documentos economiza 30 horas por semana da equipe. E o acompanhamento quinzenal nos dá segurança de que tudo está evoluindo.',
    rating: 5,
    avatar: 'PG',
  },
  {
    id: 3,
    name: 'Ricardo Torres',
    role: 'Sócio-fundador',
    company: 'Torres Engenharia',
    text: 'O que mais me impressionou foi o suporte humano. Não é só tecnologia — eles sentam com a gente, entendem o negócio e ajustam junto. As propostas comerciais que antes levavam dias agora saem em minutos, e a conversão subiu 35%.',
    rating: 5,
    avatar: 'RT',
  },
  {
    id: 4,
    name: 'Juliana Martins',
    role: 'Gerente Comercial',
    company: 'Clínica Vida Plena',
    text: 'O atendimento automatizado transformou nossa recepção — reduzimos 60% das ligações telefônicas e os pacientes adoram a praticidade. O treinamento da equipe foi impecável, e a gente sente que tem alguém do nosso lado de verdade.',
    rating: 5,
    avatar: 'JM',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#f6f9fc] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Empresas como a sua já estão colhendo os resultados da modernização com nosso
            acompanhamento.
          </p>
        </div>
        <div className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg md:p-12">
          <Quote size={48} className="absolute top-6 left-6 text-indigo-100" />
          <div className="relative z-10" aria-live="polite">
            <div className="mb-6 flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={`star-${current.id}-${i}`}
                  size={18}
                  className="text-amber-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <blockquote className="mb-8 min-h-[120px] text-lg leading-relaxed text-slate-700 md:text-xl">
              &ldquo;{current.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                  {current.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{current.name}</p>
                  <p className="text-sm text-slate-500">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrev}
                  className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-medium text-slate-400 tabular-nums">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={goToNext}
                  className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-400 italic">
          Depoimentos ilustrativos baseados em casos reais. Identidades dos clientes preservadas
          mediante acordo de confidencialidade.
        </p>
      </div>
    </section>
  );
}
