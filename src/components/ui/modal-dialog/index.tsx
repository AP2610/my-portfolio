'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from '../button';
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

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClick = (event: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();

      // Check if the click is inside the dialog because the backdrop is also considered the dialog
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        dialog.close();
      }
    };

    dialog.addEventListener('click', handleClick);

    return () => {
      dialog.removeEventListener('click', handleClick);
    };
  }, [ref]);

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
        {children}
      </div>
    </dialog>
  );
};
