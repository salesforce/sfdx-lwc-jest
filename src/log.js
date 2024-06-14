/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

/* eslint-disable no-console */

function blue(message) {
    // equivalent to chalk.blue()
    return `\x1B[34m${message}\x1B[39m`;
}

function yellow(message) {
    // equivalent to chalk.yellow()
    return `\x1B[33m${message}\x1B[39m`;
}

function red(message) {
    // equivalent to chalk.red()
    return `\x1B[31m${message}\x1B[39m`;
}

function info(message) {
    console.log(`${blue('info')} ${message}`);
}

function warn(message) {
    console.warn(`${yellow('warn')} ${message}`);
}

function error(message) {
    console.error(`${red('error')} ${message}`);
}

module.exports = {
    info,
    warn,
    error,
};
