import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{
		ignores: ['.svelte-kit/**', '.vercel/**', 'build/**', '*.cjs']
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	{
		files: ['**/*.{js,ts,svelte}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2017,
				YT: 'readonly'
			}
		},
		plugins: {
			prettier: prettierPlugin
		},
		rules: {
			'prettier/prettier': 'error',
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: tsPlugin.configs.recommended.rules
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser
			}
		}
	}
];
