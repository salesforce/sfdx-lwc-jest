import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import header from 'eslint-plugin-header';
import babelParser from '@babel/eslint-parser';

// Workaround for plugin schema validation failing in eslint v9
// Ref: https://github.com/Stuk/eslint-plugin-header/issues/57#issuecomment-2378485611
header.rules.header.meta.schema = false;

export default defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        plugins: { header },
        rules: {
            'header/header': [
                'error',
                'block',
                [
                    '',
                    {
                        pattern:
                            '^ \\* Copyright \\(c\\) \\d{4}, ([sS]alesforce.com, inc|Salesforce, Inc)\\.$',
                        // This copyright text should match the text used in the rollup config
                        template: ` * Copyright (c) ${new Date().getFullYear()}, Salesforce, Inc.`,
                    },
                    ' * All rights reserved.',
                    ' * SPDX-License-Identifier: MIT',
                    ' * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT',
                    ' ',
                ],
                1 /* newline after header */,
            ],
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
