export const buttonStyles = {
  base: {
    'w-[fit-content] p-4': 'icon-button',
    'bg-white text-black hover:bg-white-600 border-2 border-white hover:border-white-600': 'primary',
    'border-2 border-lime text-lime hover:bg-lime/10': 'secondary',
    'border-2 border-blue text-blue hover:bg-blue/10': 'blue-secondary',
    'px-4 py-2 min-w-[160px] font-sans text-center text-base transition-all duration-300 flex items-center justify-center': true,
  },
  variants: {
    'icon-button': 'w-[fit-content] p-4',
    primary: 'bg-white text-black hover:bg-white-600 border-2 border-white hover:border-white-600',
    secondary: 'border-2 border-lime text-lime hover:bg-lime/10',
    'blue-secondary': 'border-2 border-blue text-blue hover:bg-blue/10',
  },
  nonIconButtonStyles:
    'px-4 py-2 min-w-[160px] font-sans text-center text-base transition-all duration-300 flex items-center justify-center',
};
