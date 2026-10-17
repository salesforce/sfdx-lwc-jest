/*
 * Copyright (c) 2026, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fs = require('fs');
const path = require('path');
const resolver = require('../src/resolver');

const resolveLightning = (id) =>
    resolver(id, {
        basedir: __dirname,
        extensions: ['.js', '.ts', '.html'],
        moduleDirectory: ['node_modules'],
        paths: [],
    });

test('resolves lightning/logger stub', () => {
    const resolved = resolveLightning('lightning/logger');
    expect(resolved).toBe(path.join(__dirname, '../src/lightning-stubs/logger/logger.js'));
    expect(fs.existsSync(resolved)).toBe(true);
});

test('resolves lightning/uiLayoutApi stub', () => {
    const resolved = resolveLightning('lightning/uiLayoutApi');
    expect(resolved).toBe(
        path.join(__dirname, '../src/lightning-stubs/uiLayoutApi/uiLayoutApi.js'),
    );
    expect(fs.existsSync(resolved)).toBe(true);
});
