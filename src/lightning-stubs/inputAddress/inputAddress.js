/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputAddress extends LightningElement {
    @api addressLabel;
    @api city;
    @api cityLabel;
    @api country;
    @api countryLabel;
    @api countryOptions;
    @api disabled;
    @api fieldLevelHelp;
    @api postalCode;
    @api postalCodeLabel;
    @api province;
    @api provinceLabel;
    @api provinceOptions;
    @api readOnly;
    @api required;
    @api showAddressLookup;
    @api street;
    @api streetLabel;
    @api validity;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidityForField() {}
    @api showHelpMessageIfInvalid() {}
}
