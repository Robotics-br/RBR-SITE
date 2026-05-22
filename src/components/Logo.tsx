import Image from 'next/image';

interface LogoProps {
  className?: string;
  height?: number;
  variant?: 'light' | 'dark';
}

const LOGO_SRC = '/images/logo-roboticsbr.webp';

export default function Logo({ className = '', height = 40 }: Readonly<LogoProps>) {
  const width = Math.round(height * 4);

  return (
    <Image
      src={LOGO_SRC}
      alt="RoboticsBr"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
    />
  );
}
