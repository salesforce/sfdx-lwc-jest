/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

// For testing purposes -- we can't mock "jest" itself,
// so we injecting it with a different name.
module.exports = {
    jestRunner: require('jest'),
};
