/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const testOptions = {
    coverage: {
        description: 'Collect coverage and display in output',
        type: 'boolean',
        default: false,
    },

    updateSnapshot: {
        description: 'Re-record every snapshot that fails during a test run',
        type: 'boolean',
        default: false,
        alias: 'u',
    },

    verbose: {
        description: 'Display individual test results with the test suite hierarchy',
        type: 'boolean',
        default: false,
    },

    watch: {
        description: 'Watch files for changes and rerun tests related to changed files',
        type: 'boolean',
        default: false,
    },

    debug: {
        description: 'Run tests in debug mode (https://jestjs.io/docs/en/troubleshooting)',
        type: 'boolean',
        default: false,
    },

    skipApiVersionCheck: {
        description:
            'Disable the "sourceApiVersion" field check before running tests. **Warning** By disabling this check you risk running tests against stale versions of the framework. See details here: https://github.com/salesforce/sfdx-lwc-jest#disabling-the-sourceApiVersion-check',
        type: 'boolean',
        default: false,
    },
};

module.exports = testOptions;
