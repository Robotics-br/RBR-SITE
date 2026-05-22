'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  variant?: 'light' | 'dark';
}

const LOGO_SRC = '/images/logo-roboticsbr.png';

export default function Logo({
  className = '',
  height = 40,
  variant = 'light',
}: Readonly<LogoProps>) {
  const [errored, setErrored] = useState(false);
  const width = Math.round(height * 4); // razao aproximada do logo

  if (errored) {
    return (
      <div
        className={className}
        style={{
          height: `${height}px`,
          display: 'flex',
          alignItems: 'center',
          color: variant === 'light' ? '#1e293b' : '#FFFFFF',
          fontWeight: 700,
          fontSize: `${Math.max(16, height * 0.45)}px`,
          letterSpacing: '-0.5px',
          whiteSpace: 'nowrap',
        }}
      >
        RoboticsBr
      </div>
    );
  }

  return (
    <Image
      src={LOGO_SRC}
      alt="RoboticsBr"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
      onError={() => setErrored(true)}
    />
  );
}
