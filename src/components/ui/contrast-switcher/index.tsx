'use client';

import { ContrastContext } from '@/context/contrast-context';
import { useContext } from 'react';
import { TbContrast } from 'react-icons/tb';
import { TbContrastOff } from 'react-icons/tb';
import { Button } from '../button';

type ContrastSwitchProps = {
  className?: string;
};

const iconProps = {
  strokeWidth: 1.5,
  className: 'h-6 w-6 text-sidebar-setting-button-color hover:text-sidebar-setting-button-color-hover',
};

export const ContrastSwitch = ({ className }: ContrastSwitchProps) => {
  const { isHighContrast, handleContrastToggle } = useContext(ContrastContext);

  return (
    <Button title="Toggle high contrast mode" onClick={handleContrastToggle} variant="icon-button" className={className}>
      {isHighContrast ? <TbContrastOff {...iconProps} /> : <TbContrast {...iconProps} />}
    </Button>
  );
};
