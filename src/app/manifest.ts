import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoboticsBr - Modernizacao e Automacao',
    short_name: 'RoboticsBr',
    description:
      'Ecossistema completo de modernizacao para empresas: automacao, presenca digital e inteligencia de dados em um unico parceiro.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f9fc',
    theme_color: '#4f46e5',
    lang: 'pt-BR',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' }],
  };
}
