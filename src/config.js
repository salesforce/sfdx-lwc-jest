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
    // temp workaround until this is released - https://github.com/facebook/jest/pull/6792
    testURL: "http://localhost/",
    snapshotSerializers: [
        require.resolve('@lwc/jest-serializer')
    ],
};

const expectedApiVersion = '45.0';

// Execute command is different on Windows.
const jestPath = process.platform == 'win32' ? './node_modules/jest/bin/jest.js' : 'node_modules/.bin/jest';

module.exports = { jestConfig, jestPath,  expectedApiVersion };
