import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Cpu, Megaphone, TrendingUp, Brain } from 'lucide-react';
import TeamCarousel from '@/components/TeamCarousel';

export const metadata: Metadata = {
  title: 'Sobre - Ecossistema Completo de Modernização',
  description:
    'Conheça a RoboticsBr: parceria contínua em modernização, automação inteligente e presença digital integrada para sua empresa.',
  alternates: { canonical: 'https://www.roboticsbr.com/sobre' },
};

export default function SobrePage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative bg-[#f6f9fc] pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -top-[30%] right-[10%] h-[120%] w-[50%] rounded-full bg-gradient-to-bl from-indigo-50/50 via-purple-50/50 to-transparent opacity-60 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
            <Brain size={14} className="text-indigo-600" />
            <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
              Ecossistema Completo de Modernização
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
            Mais do que ferramentas.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Parceria contínua.
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
            Mais do que implementar ferramentas, somos o braço direito da sua transformação digital.
            Inovação não é um destino, é uma parceria contínua com suporte tecnológico.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 mix-blend-multiply transition-opacity group-hover:opacity-75"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-64 w-64">
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-4 border-indigo-500/20"></div>
                    <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border-4 border-purple-500/20"></div>
                    <div className="absolute inset-8 animate-[spin_8s_linear_infinite] rounded-full border-4 border-orange-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-16 w-16 text-slate-900 opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
                Por que a solução completa faz a diferença.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Empresas que contratam uma agência de social media, outra de tecnologia e outra de
                sistemas acabam com processos desconectados, custos altos e resultados fragmentados.
              </p>
              <p className="mb-8 text-lg leading-relaxed font-semibold text-slate-600">
                Na RoboticsBr, tudo é integrado — porque só assim funciona de verdade.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Combinamos{' '}
                <span className="font-bold text-slate-900">
                  consultoria em modernização de processos
                </span>
                , <span className="font-bold text-slate-900">especialistas de social media</span> e{' '}
                <span className="font-bold text-slate-900">automação do processo criativo</span> em
                um único ecossistema. Sua empresa ganha presença digital forte, operações
                automatizadas e decisões baseadas em dados — tudo com um único parceiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nossos Pilares</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              O que nos guia na construção de cada solução para nossos clientes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="cursor-default rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Target size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Foco em Resultado</h3>
              <p className="text-slate-600">
                Tecnologia por tecnologia é hobby. Usamos automação inteligente para mover ponteiros
                de produtividade, receita e eficiência operacional.
              </p>
            </div>

            <div className="cursor-default rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Cpu size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Automação Inteligente</h3>
              <p className="text-slate-600">
                Se pode ser automatizado, será. Tempo humano vai para estratégia, não para tarefas
                repetitivas.
              </p>
            </div>

            <div className="cursor-default rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                <Megaphone size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Social Media Integrado</h3>
              <p className="text-slate-600">
                Especialistas de social media que automatizam o processo criativo da sua empresa do
                início ao fim.
              </p>
            </div>

            <div className="cursor-default rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Acessibilidade Real</h3>
              <p className="text-slate-600">
                Soluções modulares que cabem no orçamento da sua empresa. Comece com resultados
                rápidos e escale conforme cresce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-900/30 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para modernizar sua empresa com um parceiro que entende seu negócio?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-200">
            Agende seu Diagnóstico Estratégico e descubra como unificar modernização, presença
            digital e automação para acelerar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >
              Agendar Diagnóstico Estratégico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
