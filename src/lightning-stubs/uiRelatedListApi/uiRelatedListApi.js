/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const getRelatedListCount = createLdsTestWireAdapter(jest.fn());
export const getRelatedListInfo = createLdsTestWireAdapter(jest.fn());
export const getRelatedListInfoBatch = createLdsTestWireAdapter(jest.fn());
export const getRelatedListRecordsBatch = createLdsTestWireAdapter(jest.fn());
export const getRelatedListRecords = createLdsTestWireAdapter(jest.fn());
export const getRelatedListsInfo = createLdsTestWireAdapter(jest.fn());
