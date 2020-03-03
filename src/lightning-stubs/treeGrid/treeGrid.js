/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class TreeGrid extends LightningElement {
    @api columns;
    @api data;
    @api expandedRows;
    @api hideCheckboxColumn;
    @api isLoading;
    @api keyField;
    @api maxColumnWidth;
    @api minColumnWidth;
    @api resizeColumnDisabled;
    @api rowNumberOffset;
    @api selectedRows;
    @api showRowNumberColumn;
    @api collapseAll() {}
    @api expandAll() {}
    @api getCurrentExpandedRows() {}
    @api getSelectedRows() {}
}
