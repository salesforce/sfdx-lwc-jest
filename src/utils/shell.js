/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const spawn = require('child_process').spawn;
const { error, info } = require('../log');

const runCommand = (command, args) => {
    const jestProcess = spawn(command, args);
    jestProcess.on('error', (err) => {
        error('error', err);
    });

    jestProcess.stdout.on('data', function (data) {
        info('stdout: ' + String(data));
    });

    jestProcess.stderr.on('data', function (data) {
        info('stderr: ' + String(data));
    });

    jestProcess.on('exit', function (code) {
        info('Exited with code ' + String(code));
    });
};

module.exports = { runCommand };
