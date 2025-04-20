'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeOnEscape = (event: KeyboardEvent) => {
    console.log('event:', event);
  };

  const Modal = ({ title, children }: { title: string; children: React.ReactNode }) => {
    useEffect(() => {
      window.addEventListener('keydown', closeOnEscape);

      return window.removeEventListener('keydown', closeOnEscape);
    });

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-100 fixed inset-0 h-full w-full bg-rich-black/50 backdrop-blur-md"
          >
            <motion.article>
              <header className="relative">
                {title}
                <Button
                  variant="icon-button"
                  className="absolute right-0 top-0 text-accent-lime transition-all duration-300 hover:text-lime-800 focus:outline-none"
                  onClick={() => closeModal()}
                >
                  <IoCloseOutline className="h-6 w-6" />
                </Button>
              </header>

              <main>{children}</main>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>
    );
  };

  return {
    showModal,
    closeModal,
    Modal,
  };
};
