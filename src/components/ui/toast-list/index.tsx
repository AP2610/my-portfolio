'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Toast } from './toast';
import { useToast } from '@/hooks/use-toast';

export const ToastList = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-8 right-1/2 z-50 w-full translate-x-1/2 px-6 md:right-4 md:max-w-80 md:translate-x-0 md:px-0">
      <ul className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.li
              key={toast.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring' }}
            >
              <Toast id={toast.id} message={toast.message} destroy={toast.destroy} duration={toast.duration} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
