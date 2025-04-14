import { AccordionProvider } from '@/context/accordion-context';
import { ContrastProvider } from '@/context/contrast-context';
import { ThemeProvider } from '@/context/theme-context';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ContrastProvider>
        <AccordionProvider>{children}</AccordionProvider>
      </ContrastProvider>
    </ThemeProvider>
  );
};
