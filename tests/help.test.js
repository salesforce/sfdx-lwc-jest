/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const { exec } = require('child_process');
const { promisify } = require('util');

const promiseExec = promisify(exec);

test('--help attribute shows help', async () => {
    const { stdout } = await promiseExec('node ./bin/sfdx-lwc-jest --help');
    expect(stdout).toMatchSnapshot();
});
