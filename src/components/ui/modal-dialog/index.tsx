'use client';

import { IoCloseOutline } from 'react-icons/io5';
import { Button } from '../button';
import clsx from 'clsx';
import styles from './styles.module.scss';

type ModalDialogProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDialogElement | null>;
  className?: string;
};

export const ModalDialog = ({ children, className, ref }: ModalDialogProps) => {
  const dialogClasses = clsx(
    'fixed inset-0 m-auto max-h-[90vh] max-w-2xl rounded-md bg-background shadow-md backdrop:bg-black/60 backdrop:backdrop-blur-[2px]',
    styles.dialog,
    className
  );

  return (
    <dialog ref={ref} className={dialogClasses}>
      <div className="relative p-6">
        <Button
          variant="icon-button"
          className="absolute right-0 top-0 text-accent-lime-foreground transition-all duration-300 hover:text-lime-800"
          onClick={() => ref.current?.close()}
        >
          <IoCloseOutline className="h-6 w-6" />
        </Button>

        {/* Modal content */}
        <div>{children}</div>
      </div>
    </dialog>
  );
};
