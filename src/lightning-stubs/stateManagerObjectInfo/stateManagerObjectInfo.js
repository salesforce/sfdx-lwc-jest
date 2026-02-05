/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { stateManagerInstanceMock } from '@lwc/state-test-utils';

/**
 * Mock factory for stateManagerObjectInfo state manager
 */
const stateManagerObjectInfo = jest.fn(() => {
    return stateManagerInstanceMock({
        status: 'unconfigured',
        error: undefined,
        data: undefined,
        // Configuration setters (Jest mocks) included in initial object
        setConfig: jest.fn(),
        setObjectApiName: jest.fn(),
    });
});

export default stateManagerObjectInfo;
