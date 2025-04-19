'use client';

import { ToastContext } from '@/context/toast-context';
import { useContext } from 'react';

export const useToast = () => {
  const { toasts, showToast } = useContext(ToastContext);

  return {
    toasts,
    showToast,
  };
};
