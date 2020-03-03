/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class FormattedDateTime extends LightningElement {
    @api day;
    @api era;
    @api hour;
    @api hour12;
    @api minute;
    @api month;
    @api second;
    @api timeZone;
    @api timeZoneName;
    @api value;
    @api weekday;
    @api year;
}
