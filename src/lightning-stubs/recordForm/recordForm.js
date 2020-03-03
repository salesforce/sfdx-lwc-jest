/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class RecordForm extends LightningElement {
    @api columns;
    @api density;
    @api fields;
    @api layoutType;
    @api mode;
    @api objectApiName;
    @api recordId;
    @api recordTypeId;
    @api submit() {}
}
