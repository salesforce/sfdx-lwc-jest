/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Map extends LightningElement {
    @api center;
    @api listView;
    @api mapMarkers;
    @api markersTitle;
    @api selectedMarkerValue;
    @api showFooter;
    @api zoomLevel;
}
