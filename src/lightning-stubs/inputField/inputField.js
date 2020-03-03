/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputField extends LightningElement {
    @api dirty;
    @api disabled;
    @api fieldName;
    @api readonly;
    @api required;
    @api value;
    @api variant;
    @api reportValidity() {}
    @api reset() {}
    @api setErrors() {}
    @api updateDependentField() {}
    @api wirePicklistValues() {}
    @api wireRecordUi() {}
}
