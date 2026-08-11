// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig(
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    {
        files: ['**/*.{js,ts}'],

        extends: [js.configs.recommended, tseslint.configs.recommended],

        languageOptions: {
            globals: globals.node,
        },
        rules: {
            //'no-console':'error',
            //'dot-notation':'error',
        },
    },
);
