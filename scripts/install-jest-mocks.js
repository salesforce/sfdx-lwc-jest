#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const metadata = require(path.join(__dirname, '..', 'src', 'resources', 'lwc-standard.json'));

const globalHTMLProperties = [
    'id',
    'accesskey',
    'accessKey',
    'class',
    'contenteditable',
    'contentEditable',
    'contextMenu',
    'contextmenu',
    'dataset',
    'dir',
    'draggable',
    'dropzone',
    'hidden',
    'itemScope',
    'itemType',
    'itemId',
    'itemRef',
    'itemProp',
    'itemValue',
    'lang',
    'maxlength',
    'offsetHeight',
    'offsetLeft',
    'offsetParent',
    'offsetTop',
    'offsetWidth',
    'spellcheck',
    'style',
    'tabindex',
    'tabIndex',
    'title',
    'role',
    'slot',
];

Object.keys(metadata).forEach((cmp) => {
    const className = cmp.split('-').map(entry => {
        return entry.charAt(0).toUpperCase() + entry.substring(1);
    }).join('');

    let attributes = [];
    metadata[cmp].attributes && metadata[cmp].attributes.forEach((attr) => {
        const name = attr.name;
        if (!globalHTMLProperties.includes(name) && !name.startsWith('on')) {
            attributes.push(`@api ${attr.name}`);
        }
    });

    let methods = [];
    metadata[cmp].methods && metadata[cmp].methods.forEach((method) => {
        methods.push(`@api ${method.name}() {}`);
    });

    let template = `import { LightningElement, api } from 'lwc';

export default class ${className} extends LightningElement {
    ${attributes.join('\n\t')}
    ${methods.join('\n\t')}
}`;

    writeFiles(className, template);
});

function writeFiles(cmp, template) {
    const mocksFolder = path.join(__dirname, '..', 'src', 'lightning-mocks');
    if (!fs.existsSync(mocksFolder)) {
        fs.mkdirSync(mocksFolder);
    }

    const cmpName = cmp.charAt(0).toLowerCase() + cmp.substring(1);
    const html = '<template></template>';
    const mocksDir = path.join(__dirname, '..', 'src', 'lightning-mocks');
    const dir = path.join(mocksDir, cmpName);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(path.join(dir, cmpName + '.html'), html);
    fs.writeFileSync(path.join(dir, cmpName + '.js'), template);
}
