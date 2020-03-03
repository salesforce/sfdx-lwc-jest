/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Textarea extends LightningElement {
    @api disabled;
    @api fieldLevelHelp;
    @api label;
    @api maxLength;
    @api messageWhenBadInput;
    @api messageWhenTooLong;
    @api messageWhenTooShort;
    @api messageWhenValueMissing;
    @api minLength;
    @api name;
    @api placeholder;
    @api readOnly;
    @api required;
    @api validity;
    @api value;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidity() {}
    @api showHelpMessageIfInvalid() {}
}
