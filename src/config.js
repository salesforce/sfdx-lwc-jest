/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const path = require('path');
const jestPreset = require('@lwc/jest-preset');
const { PROJECT_ROOT, getModulePaths } = require('./utils/project.js');

function getCoveragePaths() {
    const modulePaths = getModulePaths();
    return modulePaths
        .map((p) => {
            // convert back to forward slashes here on Windows for Jest to be happy
            const prefix = p.replace(/\\/g, '/');
            return [
                // Note no `*.js` here - Jest will not find `.js` files unless you use a bare `*`
                prefix + '/**/*',
                // Specifically exclude HTML/CSS files since Jest doesn't understand the syntax
                '!' + prefix + '/**/*.html',
                '!' + prefix + '/**/*.css',
            ];
        })
        .flat();
}

const jestConfig = {
    // Inherited from @lwc/jest-preset
    moduleFileExtensions: jestPreset.moduleFileExtensions || ['ts', 'js', 'html'],
    testEnvironment: jestPreset.testEnvironment || 'jsdom',
    transform: {
        ...jestPreset.transform,
        '^.+\\.(js|ts|html|css)$': require.resolve('@lwc/jest-transformer'),
    },
    setupFilesAfterEnv: jestPreset.setupFilesAfterEnv || [],
    snapshotSerializers: jestPreset.snapshotSerializers || [
        require.resolve('@lwc/jest-serializer'),
    ],
    // Specific to sfdx-lwc-jest
    collectCoverageFrom: getCoveragePaths(),
    resolver: path.join(__dirname, './resolver.js'),
    rootDir: PROJECT_ROOT,
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/specs/'],
    transformIgnorePatterns: [
        '/node_modules/(?!(.*@salesforce/sfdx-lwc-jest/src/lightning-stubs)/)',
    ],
};

module.exports = { jestConfig };
