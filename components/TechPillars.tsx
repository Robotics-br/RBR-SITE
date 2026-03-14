import React from 'react';
import { Brain, BarChart3, Rocket, Palette } from 'lucide-react';

const TechPillars: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white clip-diagonal pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A engenharia por trás do crescimento completo do seu negócio.</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                IA, automação, social media e dados — integrados em uma única estratégia para seu negócio.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Brain size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Soluções de IA Personalizadas</h3>
                <p className="text-slate-600 leading-relaxed">
                    Criamos agentes, chatbots e automações inteligentes focadas 100% nos processos e resultados da sua empresa. Zero templates prontos.
                </p>
            </div>

            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Palette size={32} className="text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Social Media & Automação Criativa</h3>
                <p className="text-slate-600 leading-relaxed">
                    Especialistas de social media + IA generativa para automatizar seu processo criativo: planejamento, criação de conteúdo, calendário editorial e publicação — tudo integrado.
                </p>
            </div>

            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <BarChart3 size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Inteligência de Dados</h3>
                <p className="text-slate-600 leading-relaxed">
                    Eliminamos o "achismo". Dashboards de BI, tracking avançado e análise de métricas de marketing e operações para decisões assertivas.
                </p>
            </div>

            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Rocket size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Growth com IA</h3>
                <p className="text-slate-600 leading-relaxed">
                    Funil de vendas otimizado com IA, testes contínuos e automações que aumentam o valor de cada cliente e reduzem seu custo de aquisição.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TechPillars;
