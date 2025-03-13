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
    const originalTitle = document.title;
    document.title = 'Arjun-Puri-CV-2025';

    window.print();
    document.title = originalTitle;
  };

  return (
    <Button
      onClick={handleDownload}
      variant="icon-button"
      className={clsx(
        '!rounded-full border-2 border-lime text-lime transition-colors duration-300 hover:bg-lime-400/30',
        className
      )}
      title="Download CV as PDF"
    >
      <FaDownload className="tilt-shaking" />
    </Button>
  );
};
