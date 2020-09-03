/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class ButtonIcon extends LightningElement {
    @api alternativeText;
    @api disabled;
    @api iconClass;
    @api iconName;
    @api name;
    @api size;
    @api tooltip;
    @api type;
    @api value;
    @api variant;
}
