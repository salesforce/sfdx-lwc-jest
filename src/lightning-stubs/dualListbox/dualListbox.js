/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class DualListbox extends LightningElement {
    @api addButtonLabel;
    @api disableReordering;
    @api disabled;
    @api downButtonLabel;
    @api fieldLevelHelp;
    @api label;
    @api max;
    @api messageWhenRangeOverflow;
    @api messageWhenRangeUnderflow;
    @api messageWhenValueMissing;
    @api min;
    @api name;
    @api options;
    @api removeButtonLabel;
    @api required;
    @api requiredOptions;
    @api selectedLabel;
    @api showActivityIndicator;
    @api size;
    @api sourceLabel;
    @api upButtonLabel;
    @api validity;
    @api value;
    @api variant;
    @api checkValidity() {}
    @api reportValidity() {}
    @api setCustomValidity() {}
    @api showHelpMessageIfInvalid() {}
}
