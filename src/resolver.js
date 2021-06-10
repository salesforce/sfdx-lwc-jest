/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fs = require('fs');
const path = require('path');
const lwcResolver = require('@lwc/jest-resolver');

const { PROJECT_ROOT, getModulePaths } = require('./utils/project.js');

const { getInfoFromId } = require('./utils/module.js');

const DEFAULT_NAMESPACE = 'c';

function isFile(file) {
    let result;

    try {
        const stat = fs.statSync(file);
        result = stat.isFile() || stat.isFIFO();
    } catch (e) {
        if (!(e && e.code === 'ENOENT')) {
            throw e;
        }
        result = false;
    }

    return result;
}

function resolveAsFile(name, extensions) {
    if (isFile(name)) {
        return name;
    }

    for (let i = 0; i < extensions.length; i++) {
        const file = name + extensions[i];
        if (isFile(file)) {
            return file;
        }
    }

    return undefined;
}

function getModuleMock(modulePath, moduleName) {
    const p = path.join(__dirname, modulePath, moduleName);
    if (fs.existsSync(p)) {
        return path.join(p, moduleName + '.js');
    }
}

function getLightningMock(moduleName) {
    return getModuleMock('lightning-stubs', moduleName);
}

function getApexMock(moduleName) {
    return getModuleMock('apex-stubs', moduleName);
}

function getModule(modulePath, options) {
    const { ns, name } = getInfoFromId(modulePath);

    if (ns === 'lightning') {
        return getLightningMock(name);
    }

    // See https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_salesforce_modules
    if (
        modulePath.startsWith('@salesforce/apex/') ||
        modulePath.startsWith('@salesforce/apexContinuation/')
    ) {
        return getApexMock('method');
    }

    if (ns === DEFAULT_NAMESPACE) {
        const paths = getModulePaths();
        for (let i = 0; i < paths.length; i++) {
            const file = resolveAsFile(
                path.join(PROJECT_ROOT, paths[i], name, name),
                options.extensions,
            );
            if (file) {
                return fs.realpathSync(file);
            }
        }
    }
}

module.exports = function (modulePath, options) {
    if (modulePath === 'lwc') {
        return require.resolve('@lwc/engine-dom');
    }
    return getModule(modulePath, options) || lwcResolver.apply(null, arguments);
};
