import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      semi: ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
    },
  },
  {
    files: ["./src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
			ecmaVersion: 2022,
			globals: {
				...globals.browser,
			},
		},
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
];
