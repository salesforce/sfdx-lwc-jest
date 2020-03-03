/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { expectedApiVersion } = require('../../config');

module.exports = {
    PROJECT_ROOT: 'projectRoot',
    getSfdxProjectJson: () => {
        return { mock: true, sourceApiVersion: expectedApiVersion };
    },
    getModulePaths: () => ['C:/WIN32/SYSTEM'],
};
