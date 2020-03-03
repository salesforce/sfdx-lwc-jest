/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class ButtonMenu extends LightningElement {
    @api alternativeText;
    @api disabled;
    @api draftAlternativeText;
    @api iconName;
    @api iconSize;
    @api isDraft;
    @api isLoading;
    @api label;
    @api loadingStateAlternativeText;
    @api menuAlignment;
    @api nubbin;
    @api tooltip;
    @api value;
    @api variant;
}
