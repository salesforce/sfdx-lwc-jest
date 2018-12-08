/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { getArgs } = require('./utils/yargs');
const { error } = require('./log');

const args = getArgs();
const runJest = require('./utils/test-runner');
runJest(args);

process.on('unhandledRejection', reason => {
    error(reason);
});
