'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { cases } from '@/data/cases';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [erroredIds, setErroredIds] = useState<Record<number, boolean>>({});
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;

    const tick = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
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

  const togglePlay = () => setIsAutoPlaying((v) => !v);

  return (
    <section id="portfolio" className="relative bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Cases de modernização e automação
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
            Na RoboticsBr, cada projeto é uma oportunidade de transformar sua empresa. Desenvolvemos
            soluções personalizadas, automações inteligentes e estratégias de dados que geram
            resultados mensuráveis.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Tecnologia que transforma negócios
            </h3>
            <p className="mb-4 leading-relaxed text-slate-700">
              Desenvolvemos <strong>soluções personalizadas</strong>,{' '}
              <strong>automações inteligentes</strong> e <strong>estratégias de dados</strong> que
              geram resultados mensuráveis: otimização de custos, aumento de eficiência e novas
              oportunidades de negócio para sua empresa.
            </p>
            <p className="leading-relaxed text-slate-700">
              Nossa abordagem combina <strong>expertise técnica em automação</strong> com{' '}
              <strong>profundo entendimento de negócios</strong>, garantindo que cada solução seja
              prática, escalável e com retorno rápido sobre o investimento.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-50 shadow-2xl md:w-2/3">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative"
                  style={{ flex: '0 0 100%', width: '100%', minWidth: '100%', maxWidth: '100%' }}
                >
                  <div className="relative h-96 bg-slate-100 md:h-[500px]">
                    {erroredIds[item.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500">
                        <span className="px-8 text-center text-xl font-bold text-white/90">
                          {item.title}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-contain"
                        priority={idx === 0}
                        onError={() => setErroredIds((prev) => ({ ...prev, [item.id]: true }))}
                      />
                    )}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent">
                      <div className="rounded-t-2xl bg-slate-900/50 p-6 text-white backdrop-blur-sm md:p-8">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-semibold text-white">
                            {item.industry}
                          </span>
                          <div className="flex items-center space-x-2 text-sm text-slate-200">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                            <span>Projeto Concluído</span>
                          </div>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mb-4 text-base leading-relaxed text-slate-200 md:text-lg">
                          {item.shortDescription}
                        </p>
                        <Link
                          href={`/cases/${item.slug}`}
                          className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
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
              className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition-all hover:scale-110 hover:bg-white"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition-all hover:scale-110 hover:bg-white"
              aria-label="Próximo slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-6 flex w-full items-center justify-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-pressed={!isAutoPlaying}
              aria-label={isAutoPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'}
              className="rounded-full bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <div className="flex space-x-2">
              {cases.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? 'h-2 w-8 bg-slate-900'
                      : 'h-2 w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">47%</div>
            <div className="text-slate-600">Aumento em Produtividade</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">120h</div>
            <div className="text-slate-600">Economizadas por Mês</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">15 dias</div>
            <div className="text-slate-600">Para Primeiro Resultado</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">98%</div>
            <div className="text-slate-600">Satisfação dos Clientes</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cases"
            className="inline-flex transform items-center rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
          >
            Ver todos os cases →
          </Link>
        </div>
      </div>
    </section>
  );
}
