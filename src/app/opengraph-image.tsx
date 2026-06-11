import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'RoboticsBr - Ecossistema completo de modernização';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #fb923c 100%)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: 'rgba(255,255,255,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          R
        </div>
        RoboticsBr
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 920 }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 4,
            opacity: 0.9,
          }}
        >
          Marketing + Tecnologia
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1.5,
          }}
        >
          Sua empresa mais ágil, seus processos mais lucrativos.
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, opacity: 0.92, lineHeight: 1.35 }}>
          Automação inteligente, presença digital estratégica e modernização em um único parceiro.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 22,
          fontWeight: 600,
          opacity: 0.95,
        }}
      >
        <span>www.roboticsbr.com</span>
        <span>Diagnóstico de Eficiência gratuito</span>
      </div>
    </div>,
    { ...size }
  );
}
