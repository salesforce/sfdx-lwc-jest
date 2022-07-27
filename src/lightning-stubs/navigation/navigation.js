/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const CurrentPageReference = createTestWireAdapter(jest.fn());

const Navigate = Symbol('Navigate');
const GenerateUrl = Symbol('GenerateUrl');
export const NavigationMixin = (Base) => {
    return class extends Base {
        [Navigate]() {}
        [GenerateUrl]() {
            return Promise.resolve('https://www.example.com');
        }
    };
};
NavigationMixin.Navigate = Navigate;
NavigationMixin.GenerateUrl = GenerateUrl;
