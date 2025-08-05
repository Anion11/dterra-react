import eslintJs from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import tsRecommended from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', '.eslint.config.js', 'vite.config.ts'] },
  {
    extends: [
      eslintJs.configs.recommended,
      reactRecommended,
      ...tseslint.configs.recommended,
      prettierConfig
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      '@typescript-eslint': tsRecommended,
      'simple-import-sort': simpleImportSort,
      import: importPlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/indent': 'off',
      'react/button-has-type': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'import/extensions': 'off',
      'import/newline-after-import': ['error', { count: 1 }],
      '@typescript-eslint/quotes': 'off',
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^(shared)(/.*|$)', '^(entities)(/.*|$)', '^(features)(/.*|$)', '^(widgets)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(scss)$']
          ]
        }
      ]
    }
  }
);
