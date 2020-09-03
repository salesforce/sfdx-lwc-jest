/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Tab extends LightningElement {
    @api endIconAlternativeText;
    @api endIconName;
    @api iconAssistiveText;
    @api iconName;
    @api label;
    @api showErrorIndicator;
    @api value;
    @api loadContent() {}
}
