import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    {
        files: ['src/lightning-stubs/**'],
        languageOptions: {
            globals: { ...globals.browser },
            sourceType: 'module',
            // Use babel parser for decorator support
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
                },
            },
        },
    },
]);
