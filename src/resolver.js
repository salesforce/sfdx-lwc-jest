const fs = require('fs');
const path = require('path');
const GlobSync = require('glob').GlobSync;
const lwcResolver = require('lwc-jest-resolver');

const {
    PROJECT_ROOT,
    getSfdxProjectJson,
    getProjectPaths,
    getNamespace,
} = require('./utils/project.js');

const {
    PATH_TO_MODULES,
    isValidModuleName,
    getInfoFromId,
} = require('./utils/module.js');

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

function getModule(modulePath, options) {
    const { ns, name } = getInfoFromId(modulePath);
    const projectNs = getNamespace();

    if (isValidModuleName(modulePath) && projectNs === ns) {
        const paths = getProjectPaths();
        for (let i = 0; i < paths.length; i++) {
            const subProjectRoot = path.join(PROJECT_ROOT, paths[i]);
            const found = new GlobSync('**/lightningcomponents/', { cwd: subProjectRoot }).found
            for (let j = 0; j < found.length; j++) {
                const file = resolveAsFile(path.join(subProjectRoot, found[j], name, name), options.extensions);
                if (file) {
                    return fs.realpathSync(file);
                }
            };
        }
    }
}

module.exports = function (modulePath, options) {
    return  getModule(modulePath, options) || lwcResolver.apply(null, arguments);
};