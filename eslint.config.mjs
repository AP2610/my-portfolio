import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import typescript from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    languageOptions: {
      parser: typescript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      // '@typescript-eslint/ban-types': 'error',
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          printWidth: 130,
        },
      ],
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
