/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

jest.mock('../src/utils/project');
const { jestConfig } = require('../src/config');

test('coveragePaths correctly build', () => {
    expect(jestConfig.collectCoverageFrom).toStrictEqual([
        'force-app/main/unix/lwc/**/*',
        '!force-app/main/unix/lwc/**/*.html',
        '!force-app/main/unix/lwc/**/*.css',
        'force-app/main/windows/lwc/**/*',
        '!force-app/main/windows/lwc/**/*.html',
        '!force-app/main/windows/lwc/**/*.css',
    ]);
});
