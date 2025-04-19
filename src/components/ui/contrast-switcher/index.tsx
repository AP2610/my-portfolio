'use client';

import { ContrastContext } from '@/context/contrast-context';
import { useToast } from '@/hooks/use-toast';
import { useContext } from 'react';
import { TbContrast, TbContrastOff } from 'react-icons/tb';
import { Button } from '../button';

type ContrastSwitchProps = {
  className?: string;
};

const iconProps = {
  strokeWidth: 1.5,
  className: 'h-6 w-6 text-setting-button-color hover:text-setting-button-color-hover transition-all duration-300',
};

export const ContrastSwitcher = ({ className }: ContrastSwitchProps) => {
  const { isHighContrast, handleContrastToggle } = useContext(ContrastContext);
  const { showToast } = useToast();

  const handleClick = () => {
    handleContrastToggle();
    showToast('contrast-toggled', `High contrast mode ${isHighContrast ? 'disabled' : 'enabled'}`);
  };

  return (
    <Button
      title={isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      onClick={handleClick}
      variant="icon-button"
      className={className}
    >
      <span className="sr-only">Contrast switcher</span>
      {isHighContrast ? <TbContrastOff {...iconProps} /> : <TbContrast {...iconProps} />}
    </Button>
  );
};
