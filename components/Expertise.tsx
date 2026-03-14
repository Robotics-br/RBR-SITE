import React from 'react';
import { Sparkles, Zap, Database, Globe, Shield, Layers, Megaphone, Palette } from 'lucide-react';

const technologies = [
  { name: 'OpenAI (GPT)', category: 'LLMs' },
  { name: 'Anthropic (Claude)', category: 'LLMs' },
  { name: 'Google AI (Gemini)', category: 'LLMs' },
  { name: 'n8n', category: 'Automação' },
  { name: 'Cursor AI', category: 'Desenvolvimento' },
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'Node.js / Python', category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', category: 'Dados' },
  { name: 'Midjourney / DALL-E', category: 'IA Criativa' },
  { name: 'Meta Business Suite', category: 'Social Media' },
  { name: 'Buffer / Hootsuite', category: 'Social Media' },
];

const capabilities = [
  {
    icon: Sparkles,
    title: 'Chatbots e Agentes IA',
    description: 'Atendimento automatizado, qualificação de leads e suporte 24/7 com linguagem natural.',
  },
  {
    icon: Megaphone,
    title: 'Social Media com IA',
    description: 'Estratégia de conteúdo, criação de posts, calendário editorial e análise de performance — tudo potencializado por IA generativa.',
  },
  {
    icon: Palette,
    title: 'Automação do Processo Criativo',
    description: 'Geração de textos, imagens e vídeos curtos com IA. Seu time criativo produz mais em menos tempo.',
  },
  {
    icon: Zap,
    title: 'Automação Inteligente',
    description: 'Workflows que eliminam tarefas repetitivas e conectam seus sistemas de ponta a ponta.',
  },
  {
    icon: Database,
    title: 'Análise de Dados com IA',
    description: 'Dashboards, previsões e insights acionáveis que transformam dados brutos em decisões.',
  },
  {
    icon: Globe,
    title: 'Integrações Complexas',
    description: 'Conectamos ERPs, CRMs, marketplaces e plataformas internas via API de forma segura.',
  },
  {
    icon: Shield,
    title: 'Segurança e Conformidade',
    description: 'Soluções implementadas seguindo boas práticas de segurança e conformidade com LGPD.',
  },
  {
    icon: Layers,
    title: 'Sistemas Sob Medida',
    description: 'Plataformas web, PWAs e painéis administrativos construídos para a realidade do seu negócio.',
  },
];

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Expertise completa: IA, Social Media e Automação
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dominamos IA, automação e social media — e unimos tudo para resolver os desafios específicos da sua empresa em um único ecossistema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Tecnologias que dominamos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-4 py-2 text-sm text-white font-medium transition-colors"
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
