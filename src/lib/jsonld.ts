import {
  COMPANY_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  SITE_URL,
  SOCIAL,
} from './constants';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}#organization`,
  name: COMPANY_NAME,
  legalName: 'RoboticsBr - Marketing e Tecnologia',
  url: SITE_URL,
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  description:
    'Ecossistema completo de modernização para empresas: automação, presença digital e inteligência de dados em um único parceiro.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_ADDRESS.street,
    addressLocality: CONTACT_ADDRESS.city,
    addressRegion: CONTACT_ADDRESS.region,
    postalCode: CONTACT_ADDRESS.postalCode,
    addressCountry: CONTACT_ADDRESS.country,
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: [SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.youtube],
  priceRange: 'R$ 2.500+',
  openingHours: 'Mo-Fr 09:00-18:00',
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: COMPANY_NAME,
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE_URL}#organization` },
};

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqJsonLd(items: ReadonlyArray<FaqItem>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
