'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/constants';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    if (hasShownTooltip) return;
    const timer = setTimeout(() => {
      setIsTooltipVisible(true);
      setHasShownTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasShownTooltip]);

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="fixed right-6 bottom-6 z-[var(--z-toast)] flex items-end gap-3">
      {isTooltipVisible && (
        <div className="animate-fade-in-up relative max-w-[220px] rounded-xl border border-slate-200 bg-white p-4 shadow-2xl">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
            aria-label="Fechar"
          >
            <X size={12} className="text-slate-500" />
          </button>
          <p className="text-sm leading-snug font-medium text-slate-700">
            Quer modernizar sua empresa? Fale com a gente!
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="group relative flex h-16 w-16 transform items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] hover:shadow-[#25D366]/40"
      >
        <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"></div>
        <MessageCircle size={28} className="relative z-10 text-white" fill="currentColor" />
      </a>
    </div>
  );
}
