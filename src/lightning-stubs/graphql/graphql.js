/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createTestWireAdapter } from '@salesforce/wire-service-jest-util';
export class graphql extends createTestWireAdapter() {
    static emit(value, filterFn, refreshFn) {
        super.emit(
            {
                data: value,
                errors: undefined,
                ...(refreshFn !== undefined && { refresh: refreshFn }),
            },
            filterFn,
        );
    }

    static emitErrors(errors, filterFn, refreshFn) {
        super.emit(
            {
                data: undefined,
                errors,
                ...(refreshFn !== undefined && { refresh: refreshFn }),
            },
            filterFn,
        );
    }

    constructor(dataCallback) {
        super(dataCallback);

        graphql.emit(undefined);
    }
}
export const gql = jest.fn();
