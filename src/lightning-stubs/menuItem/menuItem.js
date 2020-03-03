/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class MenuItem extends LightningElement {
    @api checked;
    @api disabled;
    @api download;
    @api draftAlternativeText;
    @api href;
    @api iconName;
    @api isDraft;
    @api label;
    @api prefixIconName;
    @api value;
}
