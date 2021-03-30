/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createApexTestWireAdapter } from '@salesforce/wire-service-jest-util';

export default createApexTestWireAdapter(jest.fn());
