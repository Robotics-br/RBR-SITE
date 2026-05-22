import { describe, expect, it } from 'vitest';
import { buildFaqJsonLd, organizationJsonLd, websiteJsonLd } from '../jsonld';

describe('jsonld helpers', () => {
  it('organizationJsonLd has required schema fields', () => {
    expect(organizationJsonLd['@type']).toBe('LocalBusiness');
    expect(organizationJsonLd.name).toBe('RoboticsBr');
    expect(organizationJsonLd.address['@type']).toBe('PostalAddress');
    expect(Array.isArray(organizationJsonLd.sameAs)).toBe(true);
  });

  it('websiteJsonLd references organization @id', () => {
    expect(websiteJsonLd['@type']).toBe('WebSite');
    expect(websiteJsonLd.publisher['@id']).toContain('#organization');
  });

  it('buildFaqJsonLd maps items into Question entities', () => {
    const items = [
      { question: 'P1', answer: 'A1' },
      { question: 'P2', answer: 'A2' },
    ];
    const schema = buildFaqJsonLd(items);
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0]['@type']).toBe('Question');
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe('A1');
  });
});
