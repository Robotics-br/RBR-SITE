import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)',
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: -1,
        borderRadius: 6,
      }}
    >
      R
    </div>,
    { ...size }
  );
}
