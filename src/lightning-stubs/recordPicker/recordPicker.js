/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class RecordPicker extends LightningElement {
    @api displayInfo;
    @api filter;
    @api label;
    @api matchingInfo;
    @api objectApiName;
    @api placeholder;
    @api required;
    @api value;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidity() {}
}
