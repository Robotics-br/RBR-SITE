import React from 'react';
import { ArrowRight, CheckCircle2, Brain, Sparkles, TrendingUp, Megaphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#f6f9fc]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[150%] bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent rounded-[3rem] transform -skew-x-12 rotate-12 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 mb-12 lg:mb-0 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
              <Brain size={14} className="text-indigo-600" />
              <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
                IA + Social Media + Automação — Tudo em um só lugar
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              IA, Social Media e<br />
              Automação reunidos para<br />
              <span className="inline-block mt-2 bg-stripe-gradient text-white px-4 py-1 rounded-lg shadow-xl transform -rotate-1 origin-left">
                fazer seu negócio crescer.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Sua empresa precisa de IA, presença digital forte e processos automatizados — mas não quer contratar 3 fornecedores diferentes. Na RoboticsBr, você encontra tudo: consultoria em IA, gestão de mídias sociais e automação do processo criativo, em um único parceiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1">
                Agende Seu Diagnóstico Estratégico de IA
              </a>
              <a href="#metodologia" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors group">
                Como funciona
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Primeiro agente IA em 10-15 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Social media com IA integrada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Processo criativo automatizado</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative z-10 perspective-1000">
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-xl mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-200/40 via-purple-200/40 to-orange-100/40 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-2 transition-transform hover:rotate-1 duration-500 flex flex-col">
                   <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex justify-between items-center backdrop-blur-sm">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">ai-agent.dashboard</div>
                   </div>

                   <div className="flex-1 p-8 flex flex-col relative">
                      <div className="flex-1 w-full relative min-h-[160px] flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                           <defs>
                              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
                                 <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                              </linearGradient>
                           </defs>
                           <path d="M0,150 L0,110 C50,100 100,120 150,90 C200,60 250,80 300,50 C350,20 380,30 400,10 L400,150 Z" fill="url(#chartGradient)" />
                           <path d="M0,110 C50,100 100,120 150,90 C200,60 250,80 300,50 C350,20 380,30 400,10" fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-end">
                         <div>
                            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Eficiência Operacional</div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">+47% produtividade</div>
                         </div>
                         <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full flex items-center mb-1">
                            IA ativa
                         </div>
                      </div>
                   </div>
                </div>

                <div className="absolute right-8 top-28 bg-white p-3 pr-5 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3.5s' }}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                         <Sparkles size={20} className="text-purple-500" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-400 font-semibold">Processos automatizados</div>
                         <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                            12 ativos <span className="text-emerald-500 text-xs">↗</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="absolute left-4 bottom-24 bg-white p-3 pr-5 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '4.2s', animationDelay: '1s' }}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                         <Megaphone size={20} className="text-pink-500" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-400 font-semibold">Posts criados com IA</div>
                         <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                            48/mês <span className="text-emerald-500 text-xs">↗</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="absolute left-12 bottom-4 bg-white p-3 pr-5 rounded-xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                         <TrendingUp size={20} className="text-orange-500" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-400 font-semibold">Horas economizadas/mês</div>
                         <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                            120h <span className="text-emerald-500 text-xs">↗</span>
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
};

export default Hero;
