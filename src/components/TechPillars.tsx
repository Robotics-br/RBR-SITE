import { Cog, Palette, BarChart3, Rocket } from 'lucide-react';

export default function TechPillars() {
  return (
    <section id="servicos" className="clip-diagonal bg-white py-24 pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            A engenharia por trás do crescimento completo do seu negócio.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Automação inteligente, presença digital otimizada e dados estratégicos — integrados em
            uma única solução para sua empresa.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <Cog size={32} className="text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Automação de Processos</h3>
            <p className="leading-relaxed text-slate-600">
              Criamos fluxos inteligentes e arquiteturas robustas focadas 100% na otimização dos
              seus processos e na geração de resultados para sua empresa. Zero templates prontos.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <Palette size={32} className="text-pink-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Gestão Estratégica de Mídias Sociais
            </h3>
            <p className="leading-relaxed text-slate-600">
              Especialistas de social media com automação criativa para planejamento, criação de
              conteúdo, calendário editorial e publicação — tudo integrado à sua estratégia de
              negócio.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <BarChart3 size={32} className="text-purple-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Inteligência de Dados e BI</h3>
            <p className="leading-relaxed text-slate-600">
              Eliminamos o &ldquo;achismo&rdquo;. Dashboards inteligentes, tracking avançado e
              análise de métricas de marketing e operações para decisões assertivas.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <Rocket size={32} className="text-orange-500" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Growth e Otimização</h3>
            <p className="leading-relaxed text-slate-600">
              Funil de vendas otimizado com tecnologia de suporte, testes contínuos e automações que
              aumentam o valor de cada cliente e reduzem seu custo de aquisição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
