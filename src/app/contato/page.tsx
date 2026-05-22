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

import {
  CONTACT_ADDRESS_DISPLAY as addressLine,
  CONTACT_EMAIL as emailInfo,
  CONTACT_PHONE_DISPLAY as phoneInfo,
  FORMSPREE_ENDPOINT as FORMSPREE_URL,
} from '@/lib/constants';

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContatoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
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
    if (honeypot) {
      setStatus('success');
      return;
    }
    if (!FORMSPREE_URL) {
      setStatus('error');
      setErrorMessage(
        'Servico de envio temporariamente indisponivel. Use o WhatsApp ou o e-mail abaixo.'
      );
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, _gotcha: honeypot }),
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
          typeof data?.error === 'string'
            ? data.error
            : 'Não foi possível enviar. Tente novamente em instantes.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Erro de rede. Verifique sua conexão e tente de novo.');
    }
  }

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 pt-28 pb-12 text-white md:pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 text-sm text-indigo-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contato</span>
          </nav>
          <h1 className="text-4xl font-extrabold md:text-5xl">Diagnóstico de Eficiência</h1>
          <p className="mt-4 max-w-2xl text-lg text-indigo-100/90">
            Conte-nos sobre sua operação. Retornamos em até 2h úteis com os próximos passos.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f9fc] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-2 text-2xl font-extrabold text-slate-900">Envie sua mensagem</h2>
                <p className="mb-8 text-sm text-slate-600 md:text-base">
                  Conte-nos sobre sua operacao e os principais gargalos. Respondemos em ate 2h uteis
                  nos dias de semana.
                </p>

                {status === 'success' && (
                  <div
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
                    role="status"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-bold">Mensagem enviada</p>
                      <p className="mt-1 text-sm text-emerald-800">
                        Recebemos seu contato e responderemos em breve.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-900"
                    role="alert"
                  >
                    <AlertCircle className="mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-bold">Não foi possível enviar</p>
                      <p className="mt-1 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                  />
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-slate-800"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-shadow outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-slate-800"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-shadow outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-semibold text-slate-800"
                    >
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-shadow outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-slate-800"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-shadow outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                  >
                    <Send size={18} />
                    {status === 'submitting' ? 'Enviando…' : 'Enviar mensagem'}
                  </button>
                </form>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-extrabold text-slate-900">Contato</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <MapPin className="shrink-0 text-indigo-600" size={20} />
                    <span className="text-sm leading-relaxed">{addressLine}</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="shrink-0 text-indigo-600" size={20} />
                    <a
                      href={`mailto:${emailInfo}`}
                      className="text-sm font-medium break-all text-indigo-700 hover:underline"
                    >
                      {emailInfo}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="shrink-0 text-indigo-600" size={20} />
                    <a
                      href="tel:+5516992967484"
                      className="text-sm font-medium text-indigo-700 hover:underline"
                    >
                      {phoneInfo}
                    </a>
                  </li>
                </ul>
                <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="shrink-0 text-indigo-600" />
                    <span>Resposta em até 2h úteis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="shrink-0 text-indigo-600" />
                    <span>Diagnóstico personalizado e sem custo inicial</span>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] min-h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <iframe
                  title="Mapa — RoboticsBr, São Carlos"
                  src="https://maps.google.com/maps?q=Rua+Ray+Wesley+Herrick+13565-090+São+Carlos+SP&hl=pt&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
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
