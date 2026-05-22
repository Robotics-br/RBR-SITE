import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #fb923c 100%)',
        color: '#ffffff',
        fontSize: 110,
        fontWeight: 800,
        letterSpacing: -3,
        borderRadius: 32,
      }}
    >
      R
    </div>,
    { ...size }
  );
}
