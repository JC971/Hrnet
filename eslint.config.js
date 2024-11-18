// CommonJS imports for ESLint configuration
const globals = require('globals');
const jsConfig = require('@eslint/eslint-plugin'); // Make sure this is the correct plugin
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

module.exports = {
  // Ignoring files in 'dist' directory
  ignorePatterns: ['dist/**'],

  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      parserOptions: {
        ecmaVersion: 'latest', // setting 'latest' to automatically pick the latest version
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect', // Automatically detect the React version
        }
      },
      plugins: [
        'react',
        'react-hooks',
        'react-refresh'
      ],
      rules: {
        ...jsConfig.configs.recommended.rules,
        ...reactPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooksPlugin.configs.recommended.rules,
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
      globals: {
        ...globals.browser,
      }
    },
  ],
};
