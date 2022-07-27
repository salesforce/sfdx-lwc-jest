/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const getObjectInfo = createLdsTestWireAdapter(jest.fn());
export const getObjectInfos = createLdsTestWireAdapter(jest.fn());
export const getPicklistValues = createLdsTestWireAdapter(jest.fn());
export const getPicklistValuesByRecordType = createLdsTestWireAdapter(jest.fn());
