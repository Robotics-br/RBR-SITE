import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  variant?: 'light' | 'dark';
  imageName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  height = 40, 
  variant = 'light',
  imageName
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  
  // Tenta diferentes nomes e formatos de imagem
  const possibleNames = imageName 
    ? [imageName]
    : [
        'logo-roboticsbr.png',
        'logo-roboticsbr.jpg',
        'logo-roboticsbr.jpeg',
        'logo-roboticsbr.webp',
        'logo.png',
        'logo.jpg',
        'roboticsbr-logo.png',
        'roboticsbr-logo.jpg'
      ];
  
  const imagePath = `/images/${possibleNames[currentImageIndex]}`;
  
  const handleImageError = () => {
    // Tenta o próximo nome na lista apenas uma vez
    if (currentImageIndex < possibleNames.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
        } else {
          // Se nenhuma imagem funcionou, mostra placeholder
          setShowPlaceholder(true);
        }
  };
  
  // Se deve mostrar placeholder
  if (showPlaceholder) {
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
          whiteSpace: 'nowrap'
        }}
      >
        RoboticsBr
      </div>
    );
  }
  
  return (
    <img 
      key={currentImageIndex} // Force re-render quando o índice mudar
      src={imagePath} 
      alt="RoboticsBr Logo" 
      className={className}
      style={{ 
        height: `${height}px`,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        maxWidth: '100%'
      }}
      onError={handleImageError}
    />
  );
};

export default Logo;
