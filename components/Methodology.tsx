import React from 'react';
import { Search, Cog, LineChart, ArrowRight } from 'lucide-react';

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico Estratégico',
    description: 'Entrevista aprofundada de 1-2h com sua equipe, análise dos processos atuais e identificação de oportunidades. Em até 7 dias, você recebe um diagnóstico escrito com um plano de ação claro e personalizado para sua empresa.',
    details: ['Mapeamento de processos', 'Identificação de quick wins', 'Plano de ação priorizado', 'Estimativa de ROI'],
    color: 'indigo',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Implementação',
    description: 'Desenvolvimento da solução de IA personalizada, integração com seus sistemas atuais e treinamento completo da sua equipe. Primeiro agente funcional entregue em 10-15 dias.',
    details: ['Desenvolvimento sob medida', 'Integração de sistemas', 'Testes rigorosos', 'Treinamento da equipe'],
    color: 'purple',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Acompanhamento Contínuo',
    description: 'Reuniões quinzenais para monitorar o progresso, analisar métricas e otimizar continuamente a solução. Relatórios claros para você acompanhar o retorno do investimento.',
    details: ['Reuniões quinzenais', 'Otimização contínua', 'Relatórios de performance', 'Suporte dedicado'],
    color: 'orange',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-200', badge: 'bg-orange-500' },
};

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
            <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
              Como funcionamos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nossa metodologia em 3 fases
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Um processo transparente e comprovado para levar IA à sua empresa — sem surpresas, sem complexidade desnecessária.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => {
            const colors = colorMap[phase.color];
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative"
              >
                <div className={`absolute -top-4 left-8 w-8 h-8 ${colors.badge} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                  {phase.number}
                </div>

                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 mt-2`}>
                  <Icon size={28} className={colors.text} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{phase.description}</p>

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
      </div>
    </section>
  );
};

export default Methodology;
