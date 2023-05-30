/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createTestWireAdapter } from '@salesforce/wire-service-jest-util';

export class graphql extends createTestWireAdapter() {
    static emit(value, filterFn) {
        super.emit({ data: value, errors: undefined }, filterFn);
    }

    static emitErrors(errors, filterFn) {
        super.emit({ data: undefined, errors }, filterFn);
    }

    constructor(dataCallback) {
        super(dataCallback);

        graphql.emit(undefined);
    }
}

export const gql = jest.fn();
export const refreshGraphQL = jest.fn();
