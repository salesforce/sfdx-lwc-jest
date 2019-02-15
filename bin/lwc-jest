#!/usr/bin/env node

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { getArgs } = require('../src/utils/yargs');
const { error } = require('../src/log');

const args = getArgs();
const runJest = require('../src/utils/test-runner');
runJest(args);

process.on('unhandledRejection', reason => {
    error(reason);
});
