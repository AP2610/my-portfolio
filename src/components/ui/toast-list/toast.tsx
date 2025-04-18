'use client';

import type { Toast as ToastType } from '@/context/toast-context';
import { memo, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from '../button';

type ToastProps = ToastType;

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  // Only re-render if the toast ID changes
  return prevProps.id === nextProps.id;
};

export const Toast = memo(({ id, message, destroy, duration }: ToastProps) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      destroy(id);
    }, duration);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="align-start flex justify-between gap-4 rounded-md border-2 border-toast-border-color bg-toast-bg p-4 shadow-lg">
      <p className="text-foreground">{message}</p>

      <Button
        variant="icon-button"
        className="!p-0 text-accent-lime transition-all duration-300 hover:text-lime-800"
        onClick={() => destroy(id)}
      >
        <IoCloseOutline className="h-6 w-6" />
      </Button>
    </div>
  );
}, shouldRerender);

Toast.displayName = 'Toast';
