import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.roboticsbr.com'),
  title: {
    default: 'RoboticsBr - Automação de Processos e Modernização Digital para Empresas',
    template: '%s | RoboticsBr',
  },
  description: 'Modernize sua empresa com um único parceiro. Automação inteligente, gestão estratégica de mídias sociais e acompanhamento contínuo. Diagnóstico de eficiência gratuito.',
  keywords: ['automação de processos', 'modernização digital', 'automação para empresas', 'agência de automação com IA', 'automação inteligente', 'transformação digital', 'n8n para empresas'],
  authors: [{ name: 'RoboticsBr' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.roboticsbr.com',
    siteName: 'RoboticsBr',
    title: 'RoboticsBr - Ecossistema Completo de Modernização',
    description: 'Chega de contratar 3 empresas. Automação, presença digital e modernização de processos em um único parceiro. Diagnóstico de eficiência gratuito.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoboticsBr - Ecossistema Completo de Modernização',
    description: 'Chega de contratar 3 empresas. Automação, presença digital e modernização de processos em um único parceiro.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="font-sans text-slate-900 bg-[#f6f9fc] min-h-screen flex flex-col overflow-x-hidden">
          <ScrollProgress />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
            Pular para o conteúdo
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
