/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputLocation extends LightningElement {
    @api disabled;
    @api fieldLevelHelp;
    @api label;
    @api latitude;
    @api longitude;
    @api readOnly;
    @api required;
    @api validity;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidityForField() {}
    @api showHelpMessageIfInvalid() {}
}
