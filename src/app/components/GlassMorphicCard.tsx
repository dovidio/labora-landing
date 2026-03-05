import { ReactNode } from 'react';

interface GlassMorphicCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
}

export function GlassMorphicCard({ children, className = '', blur = 'md' }: GlassMorphicCardProps) {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  }[blur];
  
  return (
    <div
      className={`bg-white/40 ${blurClass} rounded-3xl border border-white/60 shadow-xl ${className}`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {children}
    </div>
  );
}
