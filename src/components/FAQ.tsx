'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homeFaqItems } from '@/data/faq';

const faqItems = homeFaqItems;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Perguntas frequentes sobre modernização e automação
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas antes de dar o próximo passo rumo à transformação do seu negócio.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-slate-200 transition-all duration-200 hover:border-slate-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-base font-semibold text-slate-900">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5">
                  <p className="leading-relaxed text-slate-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
