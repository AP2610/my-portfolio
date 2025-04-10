'use client';

import { MyLink } from '@/components/ui/my-link';
import clsx from 'clsx';
import { FaDownload } from 'react-icons/fa';

type DownloadButtonProps = {
  className?: string;
};

export const DownloadButton = ({ className }: DownloadButtonProps) => {
  return (
    <MyLink
      href="/files/arjun-puri-cv.pdf"
      type="internal"
      variant="electric-blue-secondary"
      className={clsx('flex items-center gap-3 text-sm', className)}
      aria-label="Download CV as PDF"
      download
      target="_blank"
    >
      <FaDownload className="tilt-shaking h-4 w-4 text-accent-electric-blue" />
      <span>Download as PDF</span>
    </MyLink>
  );
};
