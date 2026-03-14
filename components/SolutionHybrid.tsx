import React from 'react';
import { AlertTriangle, ShieldOff, CheckCircle2 } from 'lucide-react';

const SolutionHybrid: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pare de contratar 3 empresas para resolver 1 problema.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Agência de social media que não entende de IA. Consultoria de IA que não entende de marketing. Fábrica de software que não entende de vendas. Sua empresa merece uma solução integrada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                  <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">A empresa fragmentada</h3>
              <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">&#10005;</span>
                      Uma agência para social media, outra para IA, outra para sistemas.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">&#10005;</span>
                      Processos desconectados que não conversam entre si.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">&#10005;</span>
                      Custos altos e resultados diluídos entre múltiplos fornecedores.
                  </li>
              </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                  <ShieldOff size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">A empresa parada no tempo</h3>
              <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1 flex-shrink-0">&#10005;</span>
                      Social media manual que consome horas e não escala.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1 flex-shrink-0">&#10005;</span>
                      Processos repetitivos que poderiam ser automatizados com IA.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1 flex-shrink-0">&#10005;</span>
                      Concorrentes já usando IA enquanto você ainda faz tudo manualmente.
                  </li>
              </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                  <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Sua empresa com a RoboticsBr</h3>
              <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#10003;</span>
                      IA, social media e automação integrados em um único parceiro.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#10003;</span>
                      Processo criativo automatizado que libera sua equipe para o estratégico.
                  </li>
                  <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#10003;</span>
                      Um único ponto de contato, custo otimizado e resultados integrados.
                  </li>
              </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionHybrid;
