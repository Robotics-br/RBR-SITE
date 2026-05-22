import Link from 'next/link';
import { ArrowRight, CheckCircle2, Layers, Sparkles, TrendingUp, Megaphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[150%] w-[80%] rotate-12 -skew-x-12 transform rounded-[3rem] bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent opacity-60"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="relative z-10 mb-12 lg:col-span-6 lg:mb-0">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
              <Layers size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
                Ecossistema completo de modernização
              </span>
            </div>

            <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Sua empresa mais ágil,
              <br />
              seus processos mais
              <br />
              <span className="bg-stripe-gradient mt-2 inline-block origin-left -rotate-1 transform rounded-lg px-4 py-1 text-white shadow-xl">
                lucrativos.
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
              Diagnostico em 7 dias, primeiros resultados em 15. Tiramos da sua mesa o que e
              repetitivo e devolvemos tempo para o que cresce o negocio.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex transform items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/30"
              >
                Quero meu Diagnóstico de Eficiência Gratuito
              </Link>
              <Link
                href="/metodologia"
                className="group inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-indigo-200 hover:text-indigo-600"
              >
                Conheça nossa metodologia
                <ArrowRight
                  size={18}
                  className="ml-2 transform transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Primeiro resultado em 10-15 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Presença digital otimizada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Acompanhamento humano contínuo</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-xl md:aspect-[4/3]">
              <div className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-200/40 via-purple-200/40 to-orange-100/40 blur-3xl"></div>

              <div className="absolute inset-0 flex rotate-2 transform flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl transition-transform duration-500 hover:rotate-1">
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 p-5 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">painel.modernizacao</div>
                </div>

                <div className="relative flex flex-1 flex-col p-8">
                  <div className="relative flex min-h-[160px] w-full flex-1 items-end">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 400 150"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 L0,110 C50,100 100,120 150,90 C200,60 250,80 300,50 C350,20 380,30 400,10 L400,150 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,110 C50,100 100,120 150,90 C200,60 250,80 300,50 C350,20 380,30 400,10"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-slate-50 pt-4">
                    <div>
                      <div className="mb-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Eficiência Operacional
                      </div>
                      <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                        +47% produtividade
                      </div>
                    </div>
                    <div className="mb-1 flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      Otimizado
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-28 right-8 animate-bounce rounded-xl border border-slate-100 bg-white p-3 pr-5 shadow-xl"
                style={{ animationDuration: '3.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                    <Sparkles size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Processos automatizados
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                      12 ativos <span className="text-xs text-emerald-500">↗</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-24 left-4 animate-bounce rounded-xl border border-slate-100 bg-white p-3 pr-5 shadow-xl"
                style={{ animationDuration: '4.2s', animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                    <Megaphone size={20} className="text-pink-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Conteúdos publicados</div>
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                      48/mês <span className="text-xs text-emerald-500">↗</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-4 left-12 animate-bounce rounded-xl border border-slate-100 bg-white p-3 pr-5 shadow-xl"
                style={{ animationDuration: '5s', animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <TrendingUp size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Horas economizadas/mês
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                      120h <span className="text-xs text-emerald-500">↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
