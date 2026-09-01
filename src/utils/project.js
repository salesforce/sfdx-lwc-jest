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
// If jest is running in watch mode, caching the paths means that new modules will not be detected which might cause tests to fail.
function getModulePaths() {
    if (PATHS.length > 0) return PATHS;
    // Use .slice() to avoid mutating the cached array returned by require(), then
    // reverse so that directories listed later in packageDirectories take precedence
    // over earlier ones – matching Salesforce's source-push override behaviour
    // where the last-defined package wins when component names collide (issue #252).
    const packageDirectories = getSfdxProjectJson().packageDirectories.slice().reverse();
    const projectPaths = packageDirectories.map((entry) => `${entry.path}/**/lwc`);
    PATHS = fg.sync(projectPaths, { onlyDirectories: true });
    return PATHS;
}

module.exports = {
    PROJECT_ROOT,
    getSfdxProjectJson,
    getModulePaths,
};
