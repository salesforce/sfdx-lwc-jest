const fs = require('fs');
const path = require('path');
const lwcResolver = require('lwc-jest-resolver');

const LAYOUT = { NAMSPECED: true };

module.exports = function (modulePath, options) {
    const layout = LAYOUT.NAMESPACED;

    if (isValidModuleName(modulePath)) {
        const { modulesDir, namespaces } = getProjectInfo(layout);
        const { ns, name } = getInfoFromId(modulePath);
        let file;

        if (layout === LAYOUT.NAMESPACED && namespaces.includes(ns)) {
            file = resolveAsFile(path.join(modulesDir, ns, name, name), options.extensions);
        } else if (layout === LAYOUT.STANDARD) {
            const moduleName = `{ns}-{name}`;
            file = resolveAsFile(path.join(modulesDir, moduleName, moduleName), options.extensions);
        }

        if (file) {
            console.log('>>> file: ', file);
            return fs.realpathSync(file);
        }
    }

    return lwcResolver.apply(null, arguments);
};

function isValidModuleName(id) {
    return id.match(/^(\w+-?)+$/);
}

function getInfoFromId(id) {
    const [ns, ...rest] = id.split('-');
    return {
        ns,
        name: rest.join('-'),
    };
}

function getProjectInfo(layout) {
    const cwd = fs.realpathSync(process.cwd());
    const modulesDir = path.join(cwd + '', 'force-app', 'main', 'default', 'lightningcomponents');
    let namespaces = [];
    if (layout === LAYOUT.NAMESPACED) {
        namespaces = fs.readdirSync(modulesDir); 
    }
    return { modulesDir, namespaces };
}

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