import React from 'react';
import { Bot, Workflow, BarChart3, Megaphone, ArrowRight } from 'lucide-react';

const AudienceSegments: React.FC = () => {
  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
           <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
             <span className="text-xs font-bold tracking-wide uppercase text-indigo-600">
               One Stop Shop
             </span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tudo que sua empresa precisa, em um único parceiro.</h2>
           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
             Chega de contratar uma agência para social media, outra para tecnologia e outra para IA. Na RoboticsBr, unimos tudo: consultoria em IA, automação de processos e gestão de mídias sociais com inteligência artificial.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Bot size={28} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Agentes e Chatbots Inteligentes</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Automatize atendimento ao cliente, qualificação de leads e suporte interno com agentes de IA que aprendem e melhoram continuamente.
                </p>
                <a href="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-300">
                    <Workflow size={28} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Automação de Processos com IA</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Elimine tarefas manuais e repetitivas. Integramos seus sistemas com workflows inteligentes que economizam horas e reduzem erros.
                </p>
                <a href="/contact" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                    <span className="bg-pink-100 text-pink-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Exclusivo</span>
                </div>
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 transition-colors duration-300">
                    <Megaphone size={28} className="text-pink-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Social Media com IA</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Nossos especialistas de social media automatizam o processo criativo da sua empresa com IA: da estratégia de conteúdo à geração de posts, calendário editorial e análise de performance.
                </p>
                <a href="/contact" className="inline-flex items-center text-pink-600 font-bold hover:text-pink-700 transition-colors">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-300">
                    <BarChart3 size={28} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Inteligência de Dados e BI</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Transforme seus dados em decisões estratégicas. Dashboards, relatórios automatizados e insights acionáveis para sua empresa crescer com segurança.
                </p>
                <a href="/contact" className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors">
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                </a>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSegments;
