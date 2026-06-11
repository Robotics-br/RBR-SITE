'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ShieldCheck } from 'lucide-react';
import { GA_MEASUREMENT_ID } from '@/lib/constants';

const COOKIE_CONSENT_KEY = 'rbr-cookie-consent-v2';

type Consent = 'accepted' | 'declined' | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(state: 'granted' | 'denied') {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  // Use the dataLayer push API directly so it works even before gtag.js loads
  window.dataLayer.push({
    event: 'consent_update',
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as Consent;
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
      if (stored === 'accepted') pushConsent('granted');
    } else {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setIsVisible(false);
    pushConsent('granted');
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setConsent('declined');
    setIsVisible(false);
    pushConsent('denied');
  };

  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {isVisible && consent === null && (
        <output
          aria-live="polite"
          className="fixed right-0 bottom-0 left-0 z-[var(--z-toast)] block p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:flex-row sm:items-center">
            <div className="flex flex-1 items-start gap-3">
              <ShieldCheck size={24} className="mt-0.5 flex-shrink-0 text-indigo-600" />
              <p className="text-sm leading-relaxed text-slate-700">
                Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego
                do site, em conformidade com a <strong>LGPD</strong>. Saiba mais em nossa{' '}
                <Link
                  href="/politica-de-privacidade"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-3">
              <button
                type="button"
                onClick={decline}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-700"
              >
                Aceitar
              </button>
            </div>
          </div>
        </output>
      )}
    </>
  );
}
