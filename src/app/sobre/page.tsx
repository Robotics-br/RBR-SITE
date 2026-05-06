import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Cpu, Megaphone, TrendingUp, Brain } from 'lucide-react';
import TeamCarousel from '@/components/TeamCarousel';

export const metadata: Metadata = {
  title: 'Sobre - Ecossistema Completo de Modernização',
  description:
    'Conheça a RoboticsBr: parceria contínua em modernização, automação inteligente e presença digital integrada para sua empresa.',
};

export default function SobrePage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#f6f9fc]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[30%] right-[10%] w-[50%] h-[120%] bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
            <Brain size={14} className="text-indigo-600" />
            <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
              Ecossistema Completo de Modernização
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
            Mais do que ferramentas.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">
              Parceria contínua.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mais do que implementar ferramentas, somos o braço direito da sua transformação digital. Inovação não é um destino, é uma parceria contínua com suporte tecnológico.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-[4/3] group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-8 border-4 border-orange-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-slate-900 opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Por que a solução completa faz a diferença.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Empresas que contratam uma agência de social media, outra de tecnologia e outra de sistemas acabam com processos desconectados, custos altos e resultados fragmentados.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-semibold">
                Na RoboticsBr, tudo é integrado — porque só assim funciona de verdade.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Combinamos <span className="font-bold text-slate-900">consultoria em modernização de processos</span>, <span className="font-bold text-slate-900">especialistas de social media</span> e <span className="font-bold text-slate-900">automação do processo criativo</span> em um único ecossistema. Sua empresa ganha presença digital forte, operações automatizadas e decisões baseadas em dados — tudo com um único parceiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              O que nos guia na construção de cada solução para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-indigo-600">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Foco em Resultado</h3>
              <p className="text-slate-600">
                Tecnologia por tecnologia é hobby. Usamos automação inteligente para mover ponteiros de produtividade, receita e eficiência operacional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-purple-600">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automação Inteligente</h3>
              <p className="text-slate-600">
                Se pode ser automatizado, será. Tempo humano vai para estratégia, não para tarefas repetitivas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-pink-600">
                <Megaphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Social Media Integrado</h3>
              <p className="text-slate-600">
                Especialistas de social media que automatizam o processo criativo da sua empresa do início ao fim.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-default">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto text-orange-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Acessibilidade Real</h3>
              <p className="text-slate-600">
                Soluções modulares que cabem no orçamento da sua empresa. Comece com resultados rápidos e escale conforme cresce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/30 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para modernizar sua empresa com um parceiro que entende seu negócio?</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
            Agende seu Diagnóstico Estratégico e descubra como unificar modernização, presença digital e automação para acelerar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Agendar Diagnóstico Estratégico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
