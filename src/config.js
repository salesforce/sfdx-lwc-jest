/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const path = require('path');
const {
    PROJECT_ROOT,
    getModulePaths,
} = require('./utils/project.js');

function getCoveragePaths() {
    let paths = [];
    const modulePaths = getModulePaths();
    modulePaths.forEach((p) => {
        paths.push(path.join(p, '**/*.js'));
    });
    return paths;
}

const jestConfig = {
    rootDir: PROJECT_ROOT,
    moduleFileExtensions: ['js', 'html'],
    transform: {
        '^.+\\.(js|html|css)$': require.resolve('@lwc/jest-transformer')
    },
    transformIgnorePatterns: ["/node_modules/(?:(?!lightning-mocks.*(js|html|css)))*$"],
    resolver: path.resolve(__dirname, './resolver.js'),
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/test/specs/',
    ],
    collectCoverageFrom: getCoveragePaths(),
    snapshotSerializers: [
        require.resolve('@lwc/jest-serializer')
    ],
};

// Execute command is different on Windows.
const jestPath = process.platform == 'win32' ? './node_modules/jest/bin/jest.js' : 'node_modules/.bin/jest';

module.exports = { jestConfig, jestPath };
