/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const MAX_IDS = 2 ** 20;

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

let registeredHandlers = {};
let registeredContainers = {};

const getRandomId = () => {
    let id;
    do {
        id = Math.floor(Math.random() * MAX_IDS);
    } while (
        registeredHandlers.hasOwnProperty(id.toString()) ||
        registeredContainers.hasOwnProperty(id.toString())
    );

    return id;
};

export const registerRefreshHandler = jest.fn((element, handler) => {
    let elementToRefresh = element;
    let eventHandler = handler;
    const registerId = getRandomId();
    registeredHandlers[registerId.toString()] = eventHandler.bind(elementToRefresh);

    return registerId;
});

export const unregisterRefreshHandler = jest.fn((id) => {
    delete registeredHandlers[id.toString()];
});

export const registerRefreshContainer = jest.fn((element, handler) => {
    let elementToRefresh = element;
    let eventHandler = handler;
    const registerId = getRandomId();
    registeredContainers[registerId.toString()] = eventHandler.bind(elementToRefresh);

    return registerId;
});

export const unregisterRefreshContainer = jest.fn((id) => {
    delete registeredContainers[id.toString()];
});
