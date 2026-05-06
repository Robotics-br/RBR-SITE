import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '5516992967484';
const DEFAULT_MESSAGE = 'Olá! Vim pelo site da RoboticsBr e gostaria de saber mais sobre modernização e automação para minha empresa.';

const WhatsAppButton: React.FC = () => {
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {isTooltipVisible && (
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 max-w-[220px] animate-fade-in-up relative">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X size={12} className="text-slate-500" />
          </button>
          <p className="text-sm text-slate-700 font-medium leading-snug">
            Quer modernizar sua empresa? Fale com a gente!
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle size={28} className="text-white relative z-10" fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
