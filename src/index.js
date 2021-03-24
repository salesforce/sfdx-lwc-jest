/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const {
    createApexTestWireAdapter,
    createLdsTestWireAdapter,
    createTestWireAdapter,
    registerLdsTestWireAdapter,
    registerApexTestWireAdapter,
    registerTestWireAdapter,
} = require('@salesforce/wire-service-jest-util');

module.exports = {
    createApexTestWireAdapter,
    createLdsTestWireAdapter,
    createTestWireAdapter,
    registerLdsTestWireAdapter,
    registerApexTestWireAdapter,
    registerTestWireAdapter,
};
