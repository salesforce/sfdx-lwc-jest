const fs = require('fs');
const path = require('path');
const lwcResolver = require('lwc-jest-resolver');

const PROJECT_ROOT = fs.realpathSync(process.cwd());
const DEFAULT_NAMESPACE = 'c';
const PATH_TO_MODULES = path.join('main', 'default', 'lightningcomponents');

function getSfdxProjectJson() {
    const sfdxProjectJson = path.join(PROJECT_ROOT, 'sfdx-project.json');

    if (!fs.existsSync(sfdxProjectJson)) {
        throw new Error('Could not find sfdx-project.json. Make sure `lts-jest` is run from project root');
    }

    return require(sfdxProjectJson);
}

function getProjectPaths() {
    const paths = [];
    const packageDirectories = getSfdxProjectJson().packageDirectories;

    packageDirectories.forEach((entry) => {
        paths.push(entry.path);
    });

    return paths;
}

function getNamespace() {
    return getSfdxProjectJson().namespace || DEFAULT_NAMESPACE;
}

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
    if (isValidModuleName(modulePath)) {
        const { ns, name } = getInfoFromId(modulePath);
        const projectNs = getNamespace();

        if (projectNs !== ns) {
            return undefined;
        }

        const paths = getProjectPaths();
        for (let i = 0; i < paths.length; i++) {
            const modulesDir = path.join(PROJECT_ROOT, paths[i], PATH_TO_MODULES);
            const file = resolveAsFile(path.join(modulesDir, name, name), options.extensions);
            if (file) {
                return fs.realpathSync(file);
            }
        }
    }
}

module.exports = function (modulePath, options) {
    return  getModule(modulePath, options) || lwcResolver.apply(null, arguments);
};