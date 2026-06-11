export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.roboticsbr.com';

export const COMPANY_NAME = 'RoboticsBr';
export const COMPANY_LEGAL_NAME = 'RoboticsBr - Marketing e Tecnologia';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5516992967484';

export const CONTACT_EMAIL = 'roboticsbrasil@gmail.com';
export const CONTACT_PHONE_DISPLAY = '(16) 99296-7484';
export const CONTACT_PHONE_E164 = '+5516992967484';

export const CONTACT_ADDRESS = {
  street: 'Rua Ray Wesley Herrick',
  city: 'Sao Carlos',
  region: 'SP',
  postalCode: '13565-090',
  country: 'BR',
} as const;

export const CONTACT_ADDRESS_DISPLAY = 'Rua: Ray Wesley Herrick, CEP: 13565-090, SÃO CARLOS - SP';

export const SOCIAL = {
  instagram: 'https://instagram.com/roboticsbr',
  linkedin: 'https://linkedin.com/company/roboticsbr',
  youtube: 'https://youtube.com/@roboticsbr',
} as const;

export const WHATSAPP_DEFAULT_MSG =
  'Olá! Vim pelo site da RoboticsBr e gostaria de saber mais sobre modernização e automação para minha empresa.';

export const WHATSAPP_DISCOVERY_MSG =
  'Olá! Gostaria de agendar uma chamada de descoberta de 15 minutos.';

export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
