/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { stateManagerInstanceMock } from '@lwc/state-test-utils';

/**
 * Mock factory for stateManagerRelatedListRecords state manager
 */
const stateManagerRelatedListRecords = jest.fn(() => {
    return stateManagerInstanceMock({
        status: 'unconfigured',
        error: undefined,
        data: undefined,
        // Configuration setters (Jest mocks) included in initial object
        setConfig: jest.fn(),
        setParentRecordId: jest.fn(),
        setRelatedListId: jest.fn(),
        setFields: jest.fn(),
        setOptionalFields: jest.fn(),
        setPageSize: jest.fn(),
        setSortBy: jest.fn(),
        setWhere: jest.fn(),
    });
});

export default stateManagerRelatedListRecords;
