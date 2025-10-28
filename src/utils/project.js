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
let CUSTOM_PROJECT_JSON_PATH = null;

function setCustomProjectJsonPath(customPath) {
    CUSTOM_PROJECT_JSON_PATH = customPath;
    // Clear cached paths when project JSON changes
    PATHS = [];
}

function getSfdxProjectJson() {
    const sfdxProjectJson = CUSTOM_PROJECT_JSON_PATH
        ? path.resolve(CUSTOM_PROJECT_JSON_PATH)
        : path.join(PROJECT_ROOT, 'sfdx-project.json');

    if (!fs.existsSync(sfdxProjectJson)) {
        throw new Error(
            `Could not find ${sfdxProjectJson}. Make sure the project JSON file exists and 'lwc-jest' is run from project root`,
        );
    }

    return require(sfdxProjectJson);
}

// get relative path to 'lwc' directory from project root
// If jest is running in watch mode, caching the paths means that new modules will not be detected which might cause tests to fail.
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
    getModulePaths,
    setCustomProjectJsonPath,
};
