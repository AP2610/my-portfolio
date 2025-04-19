'use client';

import { createContext, useState } from 'react';

export type Toast = {
  id: string;
  message: string;
  destroy: (id: string) => void;
  duration?: number;
};

type ToastContextType = {
  toasts: Toast[];
  showToast: (id: string, message: string) => void;
  removeToast: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => {},
  removeToast: () => {},
});

type ToastProviderProps = {
  children: React.ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (id: string, message: string, duration: number = 5000) => {
    const toastId = `${id}-${crypto.randomUUID()}`;
    setToasts((prevToasts) => [{ id: toastId, message, destroy: () => removeToast(toastId), duration }, ...prevToasts]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue = {
    toasts,
    showToast,
    removeToast,
  };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
