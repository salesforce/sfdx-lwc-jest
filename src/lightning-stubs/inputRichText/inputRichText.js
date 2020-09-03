/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputRichText extends LightningElement {
    @api customButtons;
    @api disabled;
    @api disabledCategories;
    @api formats;
    @api label;
    @api labelVisible;
    @api messageWhenBadInput;
    @api placeholder;
    @api shareWithEntityId;
    @api valid;
    @api value;
    @api variant;
    @api getFormat() {}
    @api insertTextAtCursor() {}
    @api setFormat() {}
}
