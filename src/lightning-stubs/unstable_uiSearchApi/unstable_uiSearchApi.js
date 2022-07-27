/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const unstable_getSearchResults = createLdsTestWireAdapter(jest.fn());
export const unstable_getKeywordSearchResults = createLdsTestWireAdapter(jest.fn());
export const unstable_getSearchFilterOptions = createLdsTestWireAdapter(jest.fn());
