/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class ToastContainer extends LightningElement {
    static instance() {}
    @api containerPosition;
    @api maxToasts;
    @api toastPosition;
    @api close() {}
}
