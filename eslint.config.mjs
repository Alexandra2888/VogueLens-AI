import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintConfigPrettier,
  {
    ignores: [
      'public/sw.js',
      'public/sw.js.map',
      'app/sw.ts',
      'env.d.ts',
      'global.d.ts',
      'jest.config.js',
      'jest.setup.js',
    ],
  },
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-console': 'warn',
    },
  },
];

export default eslintConfig;
