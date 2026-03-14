import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-900/30 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest mb-4">
          Sua empresa não pode esperar
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          IA, Social Media e Automação — tudo em um único parceiro. Comece agora.
        </h2>
        <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Chega de fornecedores fragmentados. Agende seu Diagnóstico Estratégico e receba um plano personalizado que une inteligência artificial, presença digital e automação para o futuro da sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg hover:shadow-indigo-500/40 transform hover:-translate-y-1"
          >
            Agendar Diagnóstico Estratégico
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="https://wa.me/5516999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20consultoria%20de%20IA%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all transform hover:-translate-y-1"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-indigo-300">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Resposta em até 2h úteis</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>Diagnóstico personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
