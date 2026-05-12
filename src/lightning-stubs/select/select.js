/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { api, LightningElement } from 'lwc';

export default class LightningSelect extends LightningElement {
    @api label;
    @api multiple;
    @api options;
    @api value;
    @api name;
    @api required;
    @api disabled;
    @api fieldLevelHelp;
    @api messageWhenValueMissing;
    @api placeholder;
    @api variant;

    @api checkValidity() {
        return true;
    }

    @api reportValidity() {
        return true;
    }

    @api setCustomValidity() {}

    @api focus() {}

    @api blur() {}
}
