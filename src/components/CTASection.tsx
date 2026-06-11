import Link from 'next/link';
import { ArrowRight, Clock, ShieldCheck, Phone } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_DISCOVERY_MSG } from '@/lib/constants';

export default function CTASection() {
  const discoveryUrl = buildWhatsAppUrl(WHATSAPP_DISCOVERY_MSG);
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-900/30 blur-3xl"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold tracking-widest text-indigo-300 uppercase">
          Sua empresa não pode esperar
        </p>
        <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-5xl">
          Em 7 dias você sabe exatamente o que automatizar primeiro.
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-indigo-200">
          O Diagnóstico de Eficiência mapeia sua operação, identifica os 3 maiores gargalos e
          devolve um plano com prioridades, prazos e investimento estimado.
        </p>
        <p className="mb-10 text-sm text-indigo-300/80">
          Projetos modulares a partir de R$ 2.500 — adequados à realidade do seu negócio.
        </p>
        <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="inline-flex transform items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-indigo-500/40"
          >
            Quero meu Diagnóstico de Eficiência Gratuito
            <ArrowRight size={18} className="ml-2" />
          </Link>
          <a
            href={discoveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/20"
          >
            <Phone size={16} className="mr-2" />
            Chamada de Descoberta de 15 min
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-sm text-indigo-300 sm:flex-row">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Resposta em até 2h úteis</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>Diagnóstico personalizado e gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}
