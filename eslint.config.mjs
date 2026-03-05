import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = [
  ...nextCoreWebVitals,
  eslintConfigPrettier,
  { ignores: ['public/sw.js', 'public/sw.js.map'] },
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
];

export default eslintConfig;
