'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cases } from '@/data/cases';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Cases de modernização e automação
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Na RoboticsBr, cada projeto é uma oportunidade de transformar sua empresa. Desenvolvemos soluções personalizadas, automações inteligentes e estratégias de dados que geram resultados mensuráveis.
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 md:p-10 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Tecnologia que transforma negócios
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Desenvolvemos <strong>soluções personalizadas</strong>, <strong>automações inteligentes</strong> e{' '}
              <strong>estratégias de dados</strong> que geram resultados mensuráveis: otimização de custos, aumento de eficiência e novas oportunidades de negócio para sua empresa.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Nossa abordagem combina <strong>expertise técnica em automação</strong> com{' '}
              <strong>profundo entendimento de negócios</strong>, garantindo que cada solução seja prática, escalável e com retorno rápido sobre o investimento.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-50 w-full md:w-2/3">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  style={{ flex: '0 0 100%', width: '100%', minWidth: '100%', maxWidth: '100%' }}
                >
                  <div className="relative h-96 md:h-[500px] bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      loading={item.id === 1 ? "eager" : "lazy"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-visual')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-visual absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-white/90 text-xl font-bold text-center px-8">${item.title}</span>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent flex flex-col justify-end">
                      <div className="p-6 md:p-8 text-white bg-slate-900/50 backdrop-blur-sm rounded-t-2xl">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/90 text-white">
                            Automação
                          </span>
                          <div className="flex items-center space-x-2 text-sm text-slate-200">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span>Projeto Concluído</span>
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-4">
                          {item.shortDescription}
                        </p>
                        <Link
                          href={`/cases/${item.slug}`}
                          className="inline-flex items-center text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full transition-colors"
                        >
                          Ver case completo →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2 w-full">
            {cases.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex ? 'w-8 h-2 bg-slate-900' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">47%</div>
            <div className="text-slate-600">Aumento em Produtividade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">120h</div>
            <div className="text-slate-600">Economizadas por Mês</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">15 dias</div>
            <div className="text-slate-600">Para Primeiro Resultado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-slate-600">Satisfação dos Clientes</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/cases" className="inline-flex items-center px-8 py-4 text-base font-bold rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Ver todos os cases →
          </Link>
        </div>
      </div>
    </section>
  );
}
