import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Por que minha empresa precisa de IA agora?',
    answer: 'O mercado está mudando rapidamente. Empresas que adotam IA ganham eficiência, reduzem custos operacionais e tomam decisões mais inteligentes. Quanto mais cedo você começar, maior será sua vantagem competitiva em relação a concorrentes que ainda dependem de processos manuais.',
  },
  {
    question: 'Qual o custo de uma consultoria em IA?',
    answer: 'Começamos com um Diagnóstico Estratégico de IA, que oferece um plano de ação claro e personalizado para sua empresa. Os projetos de implementação são modularizados para se adequar ao seu orçamento — você escolhe por onde começar e escala conforme os resultados aparecem.',
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer: 'O primeiro agente de IA funcional pode ser entregue em 10 a 15 dias após o diagnóstico. Os resultados concretos (economia de tempo, redução de erros, aumento de produtividade) começam a aparecer já nas primeiras semanas de uso. Nosso foco é em quick wins e ROI rápido.',
  },
  {
    question: 'Minha equipe será treinada para usar a IA?',
    answer: 'Sim, absolutamente. Nossa metodologia inclui o treinamento completo da sua equipe para garantir a adoção e o sucesso a longo prazo da solução implementada. Não entregamos ferramentas — entregamos capacidade.',
  },
  {
    question: 'O que acontece se a solução de IA não funcionar como esperado?',
    answer: 'Nosso acompanhamento quinzenal permite identificar ajustes rapidamente. Oferecemos um processo contínuo de otimização para garantir que a solução esteja gerando o máximo valor para sua empresa. Trabalhamos até que o resultado esteja dentro das expectativas.',
  },
  {
    question: 'Vocês oferecem acompanhamento após a implementação?',
    answer: 'Sim. Realizamos reuniões quinzenais para monitorar o progresso, analisar métricas e garantir que a IA esteja gerando o máximo valor para sua empresa. Além disso, entregamos relatórios claros para que você acompanhe o retorno do investimento.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas frequentes sobre IA para empresas
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas antes de dar o próximo passo rumo à transformação digital.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-slate-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
