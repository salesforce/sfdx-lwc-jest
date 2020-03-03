/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Combobox extends LightningElement {
    @api disabled;
    @api dropdownAlignment;
    @api fieldLevelHelp;
    @api label;
    @api messageWhenValueMissing;
    @api name;
    @api options;
    @api placeholder;
    @api readOnly;
    @api required;
    @api spinnerActive;
    @api validity;
    @api value;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidity() {}
    @api showHelpMessageIfInvalid() {}
}
