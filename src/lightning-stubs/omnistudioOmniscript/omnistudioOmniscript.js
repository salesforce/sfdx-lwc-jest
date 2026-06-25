/*
 * Copyright (c) 2026, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class OmnistudioOmniscript extends LightningElement {
    @api direction;
    @api display;
    @api inlineLabel;
    @api inlineVariant;
    @api language;
    @api lwr;
    @api offline;
    @api prefill;
    @api recordId;
    @api subType;
    @api theme;
    @api type;
}
