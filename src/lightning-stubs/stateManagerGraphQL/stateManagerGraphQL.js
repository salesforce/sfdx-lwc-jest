/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { stateManagerInstanceMock } from '@lwc/state-test-utils';

/**
 * Mock factory for stateManagerGraphQL state manager.
 *
 * Unlike the UI API record-family state managers, the GraphQL state manager
 * surfaces `errors` (a plural array) rather than a single `error`, and always
 * exposes a `refresh()` action, so the initial mock shape mirrors that.
 */
const stateManagerGraphQL = jest.fn(() => {
    return stateManagerInstanceMock({
        status: 'unconfigured',
        errors: undefined,
        data: undefined,
        refresh: jest.fn(() => Promise.resolve()),
        // Configuration setters (Jest mocks) included in initial object
        setConfig: jest.fn(),
        setQuery: jest.fn(),
        setVariables: jest.fn(),
        setOperationName: jest.fn(),
    });
});

export default stateManagerGraphQL;
