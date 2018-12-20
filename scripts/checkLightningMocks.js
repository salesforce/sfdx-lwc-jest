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
const pathToComponents = process.argv[2];

function checkIsExposed(bundleDir, file) {
    const metaXmlPath = path.join(bundleDir, file + '.js-meta.xml');
    const metaXml = fs.existsSync(metaXmlPath) && fs.readFileSync(metaXmlPath, 'utf8');
    return metaXml && metaXml.indexOf('<isExposed>true</isExposed>') !== -1;
}

function getSlotCount(htmlPath) {
    let slotCount = 0;
    const slotRegex = new RegExp(/<\/slot>/g);
    const contents = fs.existsSync(htmlPath) && fs.readFileSync(htmlPath, 'utf8');
    for (slotCount = 0; slotRegex.test(contents); slotCount++);
    return slotCount;
}

if (!pathToComponents) {
    console.log('Error: Missing path to lightning modules directory. Usage: "node checkLightningMocks.js ~/path/to/lightning/modules"');
    process.exit(1);
}

// exposed lightning components with an html file and at least one <slot> present in markup
let matches = [];
lightningNamespaces.forEach(ns => {
    const nsDir = path.join(pathToComponents, ns);
    fs.readdirSync(nsDir).forEach(file => {
        const bundleDir = path.join(nsDir, file);
        const htmlPath = path.join(bundleDir, file + '.html');
        const hasHtml = fs.existsSync(htmlPath);
        const isExposed = checkIsExposed(bundleDir, file);
        if (hasHtml && isExposed) {
            const slots = getSlotCount(htmlPath);
            if (slots > 0) {
                matches.push({ file, slots });
            }
        }
    });
});

let missingMocks = [];
let missingSlots = [];
matches.forEach(entry => {
    const file = entry.file;
    const bundleDir = path.join(pathToMocks, file);

    if (!fs.existsSync(bundleDir)) {
        missingMocks.push(file);
        return;
    }

    const htmlPath = path.join(bundleDir, file + '.html');
    const slots = getSlotCount(htmlPath);
    if (slots !== entry.slots) {
        missingSlots.push({
            file,
            expectedSlotCount: entry.slots,
            actualSlotCount: slots,
        });
    }
});

if (missingMocks.length > 0) {
    console.log('Missing lightning mocks: ', missingMocks);
    process.exit(1);
}

if (missingSlots.length > 0) {
    console.log('Missing slots on the following mocks: ', missingSlots);
    process.exit(1);
}
