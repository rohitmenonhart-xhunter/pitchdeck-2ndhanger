interface RetroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark';
  onClick?: () => void;
  className?: string;
}

export function RetroButton({
  children,
  variant = 'primary',
  onClick,
  className = '',
}: RetroButtonProps) {
  const variantClass = {
    primary: 'retro-btn retro-btn-primary',
    secondary: 'retro-btn retro-btn-secondary',
    dark: 'retro-btn retro-btn-dark',
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClass[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
