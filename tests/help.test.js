/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { exec } = require('child_process');

const runInHelpMode = () => {
    return new Promise((resolve, reject) => {
        exec('node ./bin/sfdx-lwc-jest --help', (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
};

test('--help attribute shows help', () => {
    expect.assertions(1);
    return runInHelpMode().then((stdout) => {
        expect(stdout).toMatchSnapshot();
    });
});
