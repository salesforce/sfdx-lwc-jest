/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ShowToastEventName = 'lightning__showtoast';

export class ShowToastEvent extends CustomEvent {
    constructor() {
        super(ShowToastEventName, {
            composed: true,
            cancelable: true,
            bubbles: true,
        });
    }
}
