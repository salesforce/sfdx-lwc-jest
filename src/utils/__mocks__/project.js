/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

module.exports = {
    PROJECT_ROOT: 'projectRoot',
    getSfdxProjectJson: () => {
        return { mock: true };
    },
    getModulePaths: () => ['force-app/main/unix/lwc', 'force-app\\main\\windows\\lwc'],
};
