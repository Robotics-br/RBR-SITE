import React from 'react';
import { Terminal, BarChart3, TrendingUp } from 'lucide-react';

const TechPillars: React.FC = () => {
  return (
    <section className="py-24 bg-white clip-diagonal pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A engenharia por trás do seu resultado.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <Terminal size={32} className="text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Desenvolvimento High-End</h3>
                <p className="text-slate-600 leading-relaxed">
                    Não usamos templates prontos. Criamos sistemas web, PWAs e arquiteturas de vendas robustas focadas 100% na conversão e na estabilidade, mesmo em picos de tráfego.
                </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <BarChart3 size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Inteligência de Dados (BI)</h3>
                <p className="text-slate-600 leading-relaxed">
                    Eliminamos o "achismo". Implementamos tracking avançado server-side e dashboards de BI para que toda decisão de marketing seja tomada com base em números reais.
                </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start">
                <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <TrendingUp size={32} className="text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Growth Marketing</h3>
                <p className="text-slate-600 leading-relaxed">
                    Estratégias de tráfego pago e funil de vendas otimizadas pela tecnologia. A/B testing contínuo e automações que aumentam o LTV e diminuem o CAC.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TechPillars;