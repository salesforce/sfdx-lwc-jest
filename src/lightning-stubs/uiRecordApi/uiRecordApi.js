/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export const getRecord = jest.fn();
export const getRecordCreateDefaults = jest.fn();
export const updateRecord = jest.fn().mockResolvedValue({});
export const createRecord = jest.fn().mockResolvedValue({});
export const deleteRecord = jest.fn().mockResolvedValue();
export const generateRecordInputForCreate = jest.fn();
export const generateRecordInputForUpdate = jest.fn();
export const createRecordInputFilteredByEditedFields = jest.fn();
export const getRecordInput = jest.fn();
export const refresh = jest.fn().mockResolvedValue();
export const getRecordUi = jest.fn();
export const getFieldValue = jest.fn((record, field) => {
    const unqualifiedField = splitQualifiedFieldApiName(getFieldApiName(field))[1];
    const fields = unqualifiedField.split(".");
    let r = record;
    while (fields.length > 0 && r && r.fields) {
        const f = fields.shift();
        const fvr = r.fields[f];
        if (fvr === undefined) {
            return undefined;
        }
        else {
            r = fvr.value;
        }
    }
    return r;
});
export const getFieldDisplayValue = jest.fn();

/**
 * Returns the field API name, qualified with an object name if possible.
 * @param value The value from which to get the qualified field API name.
 * @return The qualified field API name.
 */
function getFieldApiName(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (value && typeof value.objectApiName === "string" && typeof value.fieldApiName === "string") {
        return value.objectApiName + "." + value.fieldApiName;
    }
    throw new TypeError("Value is not a string or FieldId.");
}

/**
 * Split the object API name and field API name from a qualified field name.
 * Eg: Opportunity.Title returns ['Opportunity', 'Title']
 * Eg: Opportunity.Account.Name returns ['Opportunity', 'Account.Name']
 * @param fieldApiName The qualified field name.
 * @return The object and field API names.
 */
function splitQualifiedFieldApiName(fieldApiName) {
    const idx = fieldApiName.indexOf(".");
    if (idx < 1) {
        // object api name must non-empty
        throw new TypeError("Value does not include an object API name.");
    }
    return [fieldApiName.substring(0, idx), fieldApiName.substring(idx + 1)];
}
