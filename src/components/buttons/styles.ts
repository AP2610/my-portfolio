export const buttonStyles = {
  variants: {
    'icon-button': 'w-[fit-content] p-4',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
    'primary-outline':
      'bg-white-600/20 dark:bg-primary/20 text-foreground border-2 border-white-600 dark:border-primary hover:bg-white-600/40 dark:hover:bg-primary/40',
    secondary: 'bg-accent-lime/20 text-accent-lime-foreground border-2 border-accent-lime hover:bg-accent-lime/5',
    'blue-secondary': 'text-accent-blue border-2 border-accent-blue hover:bg-accent-blue/10',
  },
  nonIconButtonStyles:
    'px-4 py-2 min-w-[160px] font-sans font-medium text-center text-base transition-all duration-300 flex items-center justify-center',
};
