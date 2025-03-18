'use client';

import { Button } from '@/components/buttons';
import clsx from 'clsx';
import { FaDownload } from 'react-icons/fa';

type DownloadButtonProps = {
  className?: string;
};

// TODO: Double check title logic
export const DownloadButton = ({ className }: DownloadButtonProps) => {
  const handleDownload = () => {
    document.title = 'Arjun-Puri-CV';
    window.print();
  };

  return (
    <Button
      onClick={handleDownload}
      variant="icon-button"
      className={clsx(
        '!rounded-full border-2 border-accent-lime text-accent-lime transition-colors duration-300 hover:bg-accent-lime/30',
        className
      )}
      title="Download CV as PDF"
      aria-label="Download CV as PDF"
    >
      <FaDownload className="tilt-shaking" />
    </Button>
  );
};
