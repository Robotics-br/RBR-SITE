import {
  MessageSquare,
  Zap,
  Database,
  Globe,
  Shield,
  Layers,
  Megaphone,
  Palette,
} from 'lucide-react';

const technologies = [
  { name: 'OpenAI (GPT)' },
  { name: 'Anthropic (Claude)' },
  { name: 'Google Gemini' },
  { name: 'n8n' },
  { name: 'React / Next.js' },
  { name: 'Node.js / Python' },
  { name: 'PostgreSQL / MongoDB' },
  { name: 'Midjourney / DALL-E' },
  { name: 'Meta Business Suite' },
  { name: 'Buffer / Hootsuite' },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Atendimento Automatizado e Fluido',
    description:
      'Assistentes digitais para qualificação de leads, suporte 24/7 e interações naturais com seus clientes.',
  },
  {
    icon: Megaphone,
    title: 'Presença Digital Otimizada',
    description:
      'Estratégia de conteúdo, automação criativa, calendário editorial e análise de performance — tudo integrado.',
  },
  {
    icon: Palette,
    title: 'Automação do Processo Criativo',
    description:
      'Geração de textos, imagens e materiais visuais automatizados. Sua equipe criativa produz mais em menos tempo.',
  },
  {
    icon: Zap,
    title: 'Automação Inteligente de Processos',
    description:
      'Workflows que eliminam tarefas repetitivas e conectam seus sistemas de ponta a ponta, sem fricção.',
  },
  {
    icon: Database,
    title: 'Inteligência de Dados',
    description:
      'Dashboards, previsões e insights acionáveis que transformam dados brutos em decisões estratégicas.',
  },
  {
    icon: Globe,
    title: 'Integrações de Sistemas',
    description:
      'Conectamos ERPs, CRMs, marketplaces e plataformas internas via API de forma segura e eficiente.',
  },
  {
    icon: Shield,
    title: 'Segurança e Conformidade',
    description:
      'Soluções implementadas seguindo boas práticas de segurança e conformidade com LGPD.',
  },
  {
    icon: Layers,
    title: 'Sistemas e Plataformas Sob Medida',
    description:
      'Plataformas web, PWAs e painéis administrativos construídos para a realidade do seu negócio.',
  },
];

export default function Expertise() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Expertise completa: tecnologia, criatividade e estratégia
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Dominamos automação, presença digital e inteligência de dados — e unimos tudo para
            resolver os desafios específicos da sua empresa em um único ecossistema.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{cap.description}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-slate-900 p-8 text-center md:p-12">
          <h3 className="mb-6 text-xl font-bold text-white">
            Tecnologias que impulsionam sua modernização
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
