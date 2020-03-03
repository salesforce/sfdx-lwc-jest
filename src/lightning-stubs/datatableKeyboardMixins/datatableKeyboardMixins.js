/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { api } from 'lwc';

const updateActionables = Symbol('updateActionables');
const handleArrowKeyDown = Symbol('handleArrowKeyDown');
const handleArrowLeft = Symbol('handleArrowLeft');
const handleArrowRight = Symbol('handleArrowRight');
const handleTabKey = Symbol('handleTabKey');
const getActiveElement = Symbol('getActiveElement');
const moveToPreviousOf = Symbol('moveToPreviousOf');
const moveToNextOf = Symbol('moveToNextOf');

export const baseNavigation = superclass => {
    return class extends superclass {
        @api keyboardMode;
        @api focus;
        [updateActionables]() {}
        [handleArrowKeyDown]() {}
        [handleArrowLeft]() {}
        [handleArrowRight]() {}
        [handleTabKey]() {}
        [getActiveElement]() {}
        [moveToPreviousOf]() {}
        [moveToNextOf]() {}
    };
};
