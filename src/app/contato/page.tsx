'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Clock,
} from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

const addressLine = 'Rua: Ray Wesley Herrick, CEP: 13565-090, SÃO CARLOS - SP';
const emailInfo = 'roboticsbrasil@gmail.com';
const phoneInfo = '(16) 99296-7484';

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContatoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = 'Informe seu nome.';
    if (!email.trim()) next.email = 'Informe seu e-mail.';
    else if (!isValidEmail(email)) next.email = 'E-mail inválido.';
    if (!subject.trim()) next.subject = 'Informe o assunto.';
    if (!message.trim()) next.message = 'Escreva sua mensagem.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage('');
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMessage(
          typeof data?.error === 'string' ? data.error : 'Não foi possível enviar. Tente novamente em instantes.',
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Erro de rede. Verifique sua conexão e tente de novo.');
    }
  }

  return (
    <>
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-indigo-200 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contato</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold">Diagnóstico de Eficiência</h1>
          <p className="mt-4 text-lg text-indigo-100/90 max-w-2xl">
            Conte-nos sobre sua operação. Retornamos em até 2h úteis com os próximos passos.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f6f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 md:p-10">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Envie sua mensagem</h2>
                <p className="text-slate-600 mb-8 text-sm md:text-base">
                  Substitua <code className="text-xs bg-slate-100 px-1 rounded">YOUR_FORM_ID</code> no código pelo ID do seu formulário Formspree.
                </p>

                {status === 'success' && (
                  <div
                    className="mb-6 flex gap-3 items-start rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
                    role="status"
                  >
                    <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-bold">Mensagem enviada</p>
                      <p className="text-sm mt-1 text-emerald-800">Recebemos seu contato e responderemos em breve.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    className="mb-6 flex gap-3 items-start rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-900"
                    role="alert"
                  >
                    <AlertCircle className="shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-bold">Não foi possível enviar</p>
                      <p className="text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-y min-h-[120px]"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:pointer-events-none text-white font-bold shadow-lg transition-colors"
                  >
                    <Send size={18} />
                    {status === 'submitting' ? 'Enviando…' : 'Enviar mensagem'}
                  </button>
                </form>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
                <h2 className="text-lg font-extrabold text-slate-900 mb-4">Contato</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <MapPin className="shrink-0 text-indigo-600" size={20} />
                    <span className="text-sm leading-relaxed">{addressLine}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="shrink-0 text-indigo-600" size={20} />
                    <a href={`mailto:${emailInfo}`} className="text-sm font-medium text-indigo-700 hover:underline break-all">
                      {emailInfo}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="shrink-0 text-indigo-600" size={20} />
                    <a href="tel:+5516992967484" className="text-sm font-medium text-indigo-700 hover:underline">
                      {phoneInfo}
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-indigo-600 shrink-0" />
                    <span>Resposta em até 2h úteis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-indigo-600 shrink-0" />
                    <span>Diagnóstico personalizado e sem custo inicial</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[4/3] min-h-[220px]">
                <iframe
                  title="Mapa — RoboticsBr, São Carlos"
                  src="https://maps.google.com/maps?q=Rua+Ray+Wesley+Herrick+13565-090+São+Carlos+SP&hl=pt&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
