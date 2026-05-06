'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'Por que minha empresa precisa se modernizar agora?',
    answer: 'O mercado está evoluindo rapidamente — empresas que modernizam seus processos ganham vantagem competitiva duradoura. Processos manuais consomem tempo, geram erros e impedem o crescimento sustentável. Quanto antes você começar, menor o custo de adaptação e maior o retorno acumulado.',
  },
  {
    question: 'Qual o custo de um projeto de modernização?',
    answer: 'Começamos com um Diagnóstico de Eficiência gratuito, que oferece um plano de ação claro e personalizado. Os projetos de implementação são modularizados para se adequar ao seu orçamento. Você escolhe por onde começar e escala conforme os resultados aparecem — sem surpresas.',
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer: 'O primeiro resultado concreto pode ser entregue em 10 a 15 dias após o diagnóstico. Economia de tempo, redução de erros e aumento de produtividade são os primeiros indicadores. Nosso foco é em resultados rápidos e retorno tangível desde o início.',
  },
  {
    question: 'Minha equipe vai ser treinada para usar as novas ferramentas?',
    answer: 'Sim. Nossa metodologia inclui treinamento completo da sua equipe. Não entregamos ferramentas — entregamos capacidade para que seu time opere com autonomia. O acompanhamento contínuo garante que dúvidas sejam resolvidas em tempo real.',
  },
  {
    question: 'E se a solução não funcionar como esperado?',
    answer: 'Nosso acompanhamento periódico permite identificar ajustes rapidamente. Trabalhamos com otimização contínua — a solução evolui junto com seu negócio. Seu controle é total: você participa de cada decisão e validação do processo.',
  },
  {
    question: 'Vocês oferecem acompanhamento após a implementação?',
    answer: 'Sim. Realizamos reuniões quinzenais para monitorar o progresso e analisar métricas. Entregamos relatórios claros para que você acompanhe o retorno do investimento. Somos parceiros de longo prazo — não desaparecemos após a entrega.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas frequentes sobre modernização e automação
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas antes de dar o próximo passo rumo à transformação do seu negócio.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-slate-900 pr-4">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
