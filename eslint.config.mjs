import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import * as espree from 'espree';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parser: espree,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                document: 'readonly',
                window: 'readonly',

                test: 'readonly',
                expect: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
            },
        },
        plugins: {
            react: reactPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
            },
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',

            'import/no-unresolved': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'never',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'prettier/prettier': 'error',
        },
    },
    prettierConfig,
];
