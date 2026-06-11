import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoboticsBr - Modernização e Automação',
    short_name: 'RoboticsBr',
    description:
      'Ecossistema completo de modernização para empresas: automação, presença digital e inteligência de dados em um único parceiro.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f9fc',
    theme_color: '#4f46e5',
    lang: 'pt-BR',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' }],
  };
}
