/*
 * Copyright (c) 2026, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class EmptyState extends LightningElement {
    @api alternativeText;
    @api headingLevel;
    @api illustrationName;
    @api size;
    @api title;
}
