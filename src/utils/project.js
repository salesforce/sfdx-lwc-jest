/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');

const PROJECT_ROOT = fs.realpathSync(process.cwd());
const DEFAULT_NAMESPACE = 'c';

let PATHS = [];

function getSfdxProjectJson() {
    const sfdxProjectJson = path.join(PROJECT_ROOT, 'sfdx-project.json');

    if (!fs.existsSync(sfdxProjectJson)) {
        throw new Error(
            'Could not find sfdx-project.json. Make sure `lwc-jest` is run from project root',
        );
    }

    return require(sfdxProjectJson);
}

// get relative path to 'lwc' directory from project root
function getModulePaths() {
    if (PATHS.length > 0) return PATHS;
    const packageDirectories = getSfdxProjectJson().packageDirectories;
    const projectPaths = packageDirectories.map((entry) => `${entry.path}/**/lwc`);
    PATHS = fg.sync(projectPaths, { onlyDirectories: true });
    return PATHS;
}

module.exports = {
    PROJECT_ROOT,
    getSfdxProjectJson,
    DEFAULT_NAMESPACE,
    getModulePaths,
};
