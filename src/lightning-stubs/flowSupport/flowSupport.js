/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export const FlowAttributeChangeEventName = 'lightning__flowattributechange';
export const FlowNavigationBackEventName = 'lightning__flownavigationback';
export const FlowNavigationNextEventName = 'lightning__flownavigationnext';
export const FlowNavigationPauseEventName = 'lightning__flownavigationpause';
export const FlowNavigationFinishEventName = 'lightning__flownavigationfinish';

export class FlowAttributeChangeEvent extends CustomEvent {
    constructor() {
        super(FlowAttributeChangeEventName, { bubbles: true, composed: true });
    }
}

export class FlowNavigationBackEvent extends CustomEvent {
    constructor() {
        super(FlowNavigationBackEventName, { bubbles: true, composed: true });
    }
}

export class FlowNavigationNextEvent extends CustomEvent {
    constructor() {
        super(FlowNavigationNextEventName, { bubbles: true, composed: true });
    }
}

export class FlowNavigationNextEvent extends CustomEvent {
    constructor() {
        super(FlowNavigationNextEventName, { bubbles: true, composed: true });
    }
}

export class FlowNavigationPauseEvent extends CustomEvent {
    constructor() {
        super(FlowNavigationPauseEventName, { bubbles: true, composed: true });
    }
}

export class FlowNavigationFinishEvent extends CustomEvent {
    constructor() {
        super(FlowNavigationFinishEventName, { bubbles: true, composed: true });
    }
}
