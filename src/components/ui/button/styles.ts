export const buttonStyles = {
  variants: {
    'icon-button': 'w-[fit-content] p-4',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/80 border-2 border-transparent',
    'primary-outline':
      'bg-cosmic-latte-600/20 dark:bg-primary/20 text-foreground border-2 border-cosmic-latte-600 dark:border-primary hover:bg-cosmic-latte-600/40 dark:hover:bg-primary/40',
    secondary: 'bg-accent-lime/20 text-accent-lime-foreground border-2 border-accent-lime hover:bg-accent-lime/5',
    'electric-blue-secondary': 'text-accent-electric-blue border-2 border-accent-electric-blue hover:bg-accent-electric-blue/10',
  },
  nonIconButtonStyles:
    'px-4 py-2 min-w-[160px] font-sans font-medium text-center text-base transition-all duration-300 flex items-center justify-center',
};
