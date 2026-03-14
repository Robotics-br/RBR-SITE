import React from 'react';
import { XCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';

const SolutionHybrid: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Pare de contratar 3 empresas para resolver 1 problema.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Agência de social media que não entende de automação. Consultoria de processos que não entende de marketing. Fábrica de software que não entende de vendas. Sua empresa merece uma solução integrada.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-indigo-900 leading-relaxed">
              "Menos burocracia, mais relacionamento: modernizamos sua presença digital com estratégia e tecnologia de ponta."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                  <XCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">A empresa fragmentada</h3>
              <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                      <span>Uma agência para mídias sociais, outra para tecnologia, outra para processos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                      <span>Ferramentas desconectadas que não conversam entre si.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                      <span>Custos altos e resultados diluídos entre múltiplos fornecedores.</span>
                  </li>
              </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                  <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">A empresa parada no tempo</h3>
              <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                      <span>Mídias sociais manuais que consomem horas sem escalar resultados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                      <span>Processos repetitivos que poderiam ser automatizados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <XCircle size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                      <span>Concorrentes modernizados enquanto você ainda faz tudo manualmente.</span>
                  </li>
              </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                  <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Sua empresa com a RoboticsBr</h3>
              <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span>Automação, presença digital e processos integrados em um único parceiro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span>Processo criativo automatizado que libera sua equipe para o estratégico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span>Um único ponto de contato, custo otimizado e resultados integrados.</span>
                  </li>
              </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionHybrid;
