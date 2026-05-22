import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import ScrollProgress from '@/components/ScrollProgress';
import { organizationJsonLd, websiteJsonLd } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RoboticsBr - Automação de Processos e Modernização Digital para Empresas',
    template: '%s | RoboticsBr',
  },
  description:
    'Modernize sua empresa com um único parceiro. Automação inteligente, gestão estratégica de mídias sociais e acompanhamento contínuo. Diagnóstico de eficiência gratuito.',
  keywords: [
    'automação de processos',
    'modernização digital',
    'automação para empresas',
    'agência de automação com IA',
    'automação inteligente',
    'transformação digital',
    'n8n para empresas',
  ],
  authors: [{ name: 'RoboticsBr' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'RoboticsBr',
    title: 'RoboticsBr - Ecossistema Completo de Modernização',
    description:
      'Chega de contratar 3 empresas. Automação, presença digital e modernização de processos em um único parceiro. Diagnóstico de eficiência gratuito.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoboticsBr - Ecossistema Completo de Modernização',
    description:
      'Chega de contratar 3 empresas. Automação, presença digital e modernização de processos em um único parceiro.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#f6f9fc] font-sans text-slate-900">
          <ScrollProgress />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[var(--z-skip)] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Pular para o conteudo
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
