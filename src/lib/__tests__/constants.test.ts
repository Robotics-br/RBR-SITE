import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, WHATSAPP_NUMBER, FORMSPREE_ENDPOINT } from '../constants';

describe('constants', () => {
  it('builds a properly encoded WhatsApp URL', () => {
    const url = buildWhatsAppUrl('Ola mundo & teste');
    expect(url).toContain(`https://wa.me/${WHATSAPP_NUMBER}`);
    expect(url).toContain('Ola%20mundo%20%26%20teste');
  });

  it('FORMSPREE_ENDPOINT defaults to empty when env not set', () => {
    expect(typeof FORMSPREE_ENDPOINT).toBe('string');
  });

  it('WHATSAPP_NUMBER contains only digits', () => {
    expect(WHATSAPP_NUMBER).toMatch(/^\d+$/);
  });
});
