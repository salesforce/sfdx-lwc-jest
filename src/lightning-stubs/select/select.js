/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Select extends LightningElement {
    @api accessKey;
    @api disabled;
    @api fieldLevelHelp;
    @api label;
    @api messageWhenValueMissing;
    @api multiple;
    @api name;
    @api options;
    @api required;
    @api size;
    @api validity;
    @api value;
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
