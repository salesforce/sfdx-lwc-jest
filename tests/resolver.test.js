/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const resolver = require('../src/resolver');

test('resolver maps "lwc" to the CommonJS build of @lwc/engine-dom', () => {
    const resolved = resolver('lwc', {
        basedir: __dirname,
        extensions: ['.js', '.json'],
    });

    // Since LWC 9, @lwc/engine-dom is "type": "module" and its main entry is
    // the ES module build, which Jest cannot load. The resolver must hand
    // Jest the CommonJS build instead.
    expect(resolved).toBe(require.resolve('@lwc/engine-dom/dist/index.cjs'));
});
