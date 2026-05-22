import { Search, Cog, LineChart, ArrowRight, TrendingUp } from 'lucide-react';

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico de Eficiência',
    description:
      'Entrevista aprofundada de 1-2h com sua equipe, análise dos processos atuais e identificação de oportunidades. Em até 7 dias, você recebe um diagnóstico escrito com um plano de ação claro e personalizado para sua empresa.',
    details: [
      'Mapeamento de processos',
      'Identificação de gargalos',
      'Plano de ação priorizado',
      'Estimativa de retorno',
    ],
    color: 'indigo',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Estruturação e Implementação',
    description:
      'Desenvolvimento da solução personalizada, integração com seus sistemas atuais e treinamento completo da sua equipe. Primeiro resultado concreto entregue em 10-15 dias.',
    details: [
      'Desenvolvimento sob medida',
      'Integração de sistemas',
      'Testes rigorosos',
      'Treinamento da equipe',
    ],
    color: 'purple',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Acompanhamento e Evolução',
    description:
      'Reuniões periódicas para monitorar o progresso, analisar métricas e otimizar continuamente a solução. Relatórios claros para você acompanhar o retorno do investimento.',
    details: [
      'Reuniões quinzenais',
      'Otimização contínua',
      'Relatórios de performance',
      'Suporte humano dedicado',
    ],
    color: 'orange',
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', badge: 'bg-orange-500' },
};

const roadmap = [
  {
    period: '3 meses',
    result:
      'Processos-chave automatizados, primeiras métricas de eficiência e presença digital otimizada.',
  },
  {
    period: '6 meses',
    result:
      'Operação rodando com autonomia, equipe treinada e crescimento visível nos indicadores.',
  },
  {
    period: '12 meses',
    result: 'Ecossistema completo integrado, decisões baseadas em dados e expansão sustentável.',
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-[#f6f9fc] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1">
            <span className="text-xs font-bold tracking-wide text-indigo-600 uppercase">
              Como funcionamos
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Nossa metodologia em 3 fases
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Um processo transparente e colaborativo para modernizar sua empresa — sem surpresas, sem
            complexidade desnecessária.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {phases.map((phase) => {
            const colors = colorMap[phase.color];
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`absolute -top-4 left-8 h-8 w-8 ${colors.badge} flex items-center justify-center rounded-full text-sm font-bold text-white shadow-lg`}
                >
                  {phase.number}
                </div>
                <div
                  className={`h-14 w-14 ${colors.bg} mt-2 mb-6 flex items-center justify-center rounded-2xl`}
                >
                  <Icon size={28} className={colors.text} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{phase.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-600">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-slate-500">
                      <ArrowRight size={12} className={colors.text} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mb-16 max-w-3xl">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Abordagem de co-criação</h3>
            <p className="leading-relaxed text-slate-600">
              Não entregamos soluções prontas e desaparecemos. Trabalhamos{' '}
              <span className="font-semibold text-slate-900">junto com sua equipe</span>, entendendo
              sua realidade de perto e construindo cada etapa em parceria. Seu time participa, opina
              e cresce junto com o processo — porque modernização de verdade é feita a quatro mãos.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-900">
            Caminho do cliente: o que esperar
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {roadmap.map((item, index) => (
              <div
                key={item.period}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-lg font-bold text-slate-900">{item.period}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.result}</p>
                {index < roadmap.length - 1 && (
                  <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-slate-200 md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
