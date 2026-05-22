import { XCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SolutionHybrid() {
  return (
    <section id="solucoes" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Pare de contratar 3 empresas para resolver 1 problema.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Agência de social media que não entende de automação. Consultoria de processos que não
            entende de marketing. Fábrica de software que não entende de vendas. Sua empresa merece
            uma solução integrada.
          </p>
        </div>

        <div className="mx-auto mb-16 max-w-2xl">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center">
            <p className="text-lg leading-relaxed font-semibold text-indigo-900">
              &ldquo;Menos burocracia, mais relacionamento: modernizamos sua presença digital com
              estratégia e tecnologia de ponta.&rdquo;
            </p>
          </div>
        </div>

        <div className="relative z-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <XCircle size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">A empresa fragmentada</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                <span>
                  Uma agência para mídias sociais, outra para tecnologia, outra para processos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Ferramentas desconectadas que não conversam entre si.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-red-400" />
                <span>Custos altos e resultados diluídos entre múltiplos fornecedores.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <AlertTriangle size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">A empresa parada no tempo</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>Mídias sociais manuais que consomem horas sem escalar resultados.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>Processos repetitivos que poderiam ser automatizados.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 flex-shrink-0 text-orange-400" />
                <span>Concorrentes modernizados enquanto você ainda faz tudo manualmente.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-indigo-900">Sua empresa com a RoboticsBr</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-emerald-500" />
                <span>
                  Automação, presença digital e processos integrados em um único parceiro.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-emerald-500" />
                <span>
                  Processo criativo automatizado que libera sua equipe para o estratégico.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-emerald-500" />
                <span>Um único ponto de contato, custo otimizado e resultados integrados.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
