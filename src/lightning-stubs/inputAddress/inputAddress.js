/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputAddress extends LightningElement {
    @api addressLabel;
    @api addressLookupPlaceholder;
    @api city;
    @api cityLabel;
    @api cityPlaceholder;
    @api country;
    @api countryDisabled;
    @api countryLabel;
    @api countryOptions;
    @api countryPlaceholder;
    @api disabled;
    @api fieldLevelHelp;
    @api postalCode;
    @api postalCodeLabel;
    @api postalCodePlaceholder;
    @api province;
    @api provinceLabel;
    @api provinceOptions;
    @api provincePlaceholder;
    @api readOnly;
    @api required;
    @api showAddressLookup;
    @api street;
    @api streetLabel;
    @api streetPlaceholder;
    @api validity;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidityForField() {}
    @api showHelpMessageIfInvalid() {}
}
