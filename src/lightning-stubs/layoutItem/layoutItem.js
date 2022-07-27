/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class LayoutItem extends LightningElement {
    @api alignmentBump;
    @api flexibility;
    @api largeDeviceSize;
    @api mediumDeviceSize;
    @api padding;
    @api size;
    @api smallDeviceSize;
}
