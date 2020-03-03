/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const path = require('path');

const PATH_TO_MODULES = path.join('main', 'default', 'lwc');

function getInfoFromId(id) {
    const [ns, ...rest] = id.split('/');
    return {
        ns,
        name: rest.join('/'),
    };
}

module.exports = {
    PATH_TO_MODULES,
    getInfoFromId,
};
