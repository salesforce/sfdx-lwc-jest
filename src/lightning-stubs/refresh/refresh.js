/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export const RefreshEventName = 'lightning__refresh';
export class RefreshEvent extends CustomEvent {
    constructor() {
        super(RefreshEventName, {
            composed: true,
            cancelable: true,
            bubbles: true,
        });
    }
}

const registeredHandlers = new Map();
const registeredContainers = new Map();
let lastAssignedId = -1;

export const registerRefreshHandler = jest.fn((element, handler) => {
    let elementToRefresh = element;
    let eventHandler = handler;

    registeredHandlers.set(++lastAssignedId, eventHandler.bind(elementToRefresh));
    return lastAssignedId;
});

export const unregisterRefreshHandler = jest.fn((id) => {
    registeredHandlers.delete(id);
});

export const registerRefreshContainer = jest.fn((element, handler) => {
    let elementToRefresh = element;
    let eventHandler = handler;

    registeredContainers.set(++lastAssignedId, eventHandler.bind(elementToRefresh));
    return lastAssignedId;
});

export const unregisterRefreshContainer = jest.fn((id) => {
    registeredContainers.delete(id);
});
