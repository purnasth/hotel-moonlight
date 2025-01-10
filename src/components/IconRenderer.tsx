import React from 'react';
import { getIconComponent } from '../utils/iconMap';

interface IconRendererProps {
  iconName?: string | null;
  iconPath?: string | null;
  className?: string;
  alt?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({
  iconName,
  iconPath,
  className,
  alt,
}) => {
  const IconComponent = iconName ? getIconComponent(iconName) : null;

  if (IconComponent) {
    return <IconComponent className={`w-full ${className}`} />;
  }

  if (iconPath) {
    return (
      <img
        src={iconPath}
        alt={alt || 'Icon'}
        className={`object-contain ${className}`}
      />
    );
  }

  return null;
};

export default IconRenderer;
