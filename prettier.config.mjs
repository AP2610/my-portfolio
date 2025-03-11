const prettierConfig = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 130,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStyleSheet: './src/app/globals.css',
  tailwindConfig: './tailwind.config.ts',
};

export default prettierConfig;
