/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export default class Toast {
    static show() {}
    
    @api labelLinks;
    @api messageLinks;
    @api label;
    @api message;
    @api variant;
    @api mode;
    @api focus() {}
}
