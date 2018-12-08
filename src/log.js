/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

/* eslint-disable no-console */

const chalk = require('chalk');

function info(message) {
    console.log(`${chalk.blue('info')} ${message}`);
}

function error(message, code = 1) {
    console.error(`${chalk.red('error')} ${message}`);
    process.exit(code);
}

module.exports = {
    info,
    error,
};
