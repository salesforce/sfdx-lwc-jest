/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const path = require('path');

module.exports = {
    moduleFileExtensions: ['js', 'html'],
    transform: {
        '^.+\\.(js|html|css)$': require.resolve('@lwc/jest-transformer'),
    },
    resolver: path.resolve(__dirname, './src/resolver.js'),
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    snapshotSerializers: [require.resolve('@lwc/jest-serializer')],
};
