import { AccordionProvider } from '@/context/accordion-context';
import { ContrastProvider } from '@/context/contrast-context';
import { ThemeProvider } from '@/context/theme-context';
import { ToastProvider } from '@/context/toast-context';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ContrastProvider>
        <ToastProvider>
          <AccordionProvider>{children}</AccordionProvider>
        </ToastProvider>
      </ContrastProvider>
    </ThemeProvider>
  );
};
