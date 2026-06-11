export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqItems: ReadonlyArray<FaqItem> = [
  {
    question: 'Por que minha empresa precisa se modernizar agora?',
    answer:
      'O mercado está evoluindo rapidamente - empresas que modernizam seus processos ganham vantagem competitiva duradoura. Processos manuais consomem tempo, geram erros e impedem o crescimento sustentável. Quanto antes você começar, menor o custo de adaptação e maior o retorno acumulado.',
  },
  {
    question: 'Qual o custo de um projeto de modernização?',
    answer:
      'Começamos com um Diagnóstico de Eficiência gratuito, que oferece um plano de ação claro e personalizado. Os projetos de implementação são modularizados para se adequar ao seu orçamento. Você escolhe por onde começar e escala conforme os resultados aparecem - sem surpresas.',
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer:
      'O primeiro resultado concreto pode ser entregue em 10 a 15 dias após o diagnóstico. Economia de tempo, redução de erros e aumento de produtividade são os primeiros indicadores. Nosso foco é em resultados rápidos e retorno tangível desde o início.',
  },
  {
    question: 'Minha equipe vai ser treinada para usar as novas ferramentas?',
    answer:
      'Sim. Nossa metodologia inclui treinamento completo da sua equipe. Não entregamos ferramentas - entregamos capacidade para que seu time opere com autonomia. O acompanhamento contínuo garante que dúvidas sejam resolvidas em tempo real.',
  },
  {
    question: 'E se a solução não funcionar como esperado?',
    answer:
      'Nosso acompanhamento periódico permite identificar ajustes rapidamente. Trabalhamos com otimização contínua - a solução evolui junto com seu negócio. Seu controle é total: você participa de cada decisão e validação do processo.',
  },
  {
    question: 'Vocês oferecem acompanhamento após a implementação?',
    answer:
      'Sim. Realizamos reuniões quinzenais para monitorar o progresso e analisar métricas. Entregamos relatórios claros para que você acompanhe o retorno do investimento. Somos parceiros de longo prazo - não desaparecemos após a entrega.',
  },
];
