/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

/**
 * Script that takes in a path to the lightning components "modules" directory
 * and verifies all exposed components with an html file are present in the
 * lightning-mocks directory, and verifies the mocks have the correct number
 * of <slot> elements present in their markup.
 */
const fs = require('fs');
const path = require('path');

const pathToMocks = path.join(__dirname, '..', 'src', 'lightning-mocks');
const lightningNamespaces = [ 'lightning', 'interop' ];
/*
 * some components have multiple html files in the bundle and dynamically
 * which to load in the render() method. Map to the most standard or default
 * html to get the slot count.
 */
const dynamicHtmlMapper = {
    'tile': 'standardTile',
    'progressStep': 'base',
}
const pathToComponents = process.argv[2];

function checkIsExposed(bundleDir, file) {
    const metaXmlPath = path.join(bundleDir, file + '.js-meta.xml');
    const metaXml = fs.existsSync(metaXmlPath) && fs.readFileSync(metaXmlPath, 'utf8');
    return metaXml
        && metaXml.indexOf('<isExposed>true</isExposed>') !== -1
        && metaXml.indexOf('</minApiVersion>') !== -1;
}

function getSlotCount(htmlPath) {
    let slotCount = 0;
    const slotRegex = new RegExp(/<\/slot>/g);
    const contents = fs.existsSync(htmlPath) && fs.readFileSync(htmlPath, 'utf8');
    for (slotCount = 0; slotRegex.test(contents); slotCount++);
    return slotCount;
}

function getHtmlPath(base, fileName) {
    // we don't use the dynamic html files in the mocks
    if (base.indexOf('lightning-mocks') === -1 && dynamicHtmlMapper[fileName]) {
        fileName = dynamicHtmlMapper[fileName];
    }
    return path.join(base, fileName + '.html');
}

if (!pathToComponents) {
    console.log('Error: Missing path to lightning modules directory. Usage: "node checkLightningMocks.js ~/path/to/lightning/modules"');
    process.exit(1);
}

let exposed = [];
lightningNamespaces.forEach(ns => {
    const nsDir = path.join(pathToComponents, ns);
    fs.readdirSync(nsDir).forEach(file => {
        const bundleDir = path.join(nsDir, file);
        const isExposed = checkIsExposed(bundleDir, file);

        if (!isExposed) {
            return;
        }

        const htmlPath = getHtmlPath(bundleDir, file);
        const hasHtml = fs.existsSync(htmlPath);
        const slotCount = hasHtml && getSlotCount(htmlPath) || 0;
        exposed.push({
            file,
            slotCount,
        });
    });
});

let missingMocks = [];
let missingSlots = [];
exposed.forEach(entry => {
    const file = entry.file;
    const mocksDir = path.join(pathToMocks, file);

    if (!fs.existsSync(mocksDir)) {
        missingMocks.push(file);
        return;
    }

    const htmlPath = getHtmlPath(mocksDir, file);
    const slotCount = getSlotCount(htmlPath);
    if (slotCount !== entry.slotCount) {
        missingSlots.push({
            file,
            expectedSlotCount: entry.slotCount,
            actualSlotCount: slotCount,
        });
    }

});

let exitCode = 0;
if (missingMocks.length > 0) {
    console.log('Missing lightning mocks: ', missingMocks);
    exitCode = 1;
}

if (missingSlots.length > 0) {
    console.log('Missing slots on the following mocks: ', missingSlots);
    exitCode = 1;
}

console.log('Exiting with exit code ', exitCode);
process.exit(exitCode);
