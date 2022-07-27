/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const APPLICATION_SCOPE = Symbol('APPLICATION_SCOPE');
export const createMessageChannel = jest.fn();
export const createMessageContext = jest.fn();
export const MessageContext = createTestWireAdapter(jest.fn());
export const publish = jest.fn();
export const releaseMessageContext = jest.fn();
export const subscribe = jest.fn();
export const unsubscribe = jest.fn();
