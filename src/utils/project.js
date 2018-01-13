const fs = require('fs');
const path = require('path');
const GlobSync = require('glob').GlobSync;

const PROJECT_ROOT = fs.realpathSync(process.cwd());
const DEFAULT_NAMESPACE = 'c';

function getSfdxProjectJson() {
    const sfdxProjectJson = path.join(PROJECT_ROOT, 'sfdx-project.json');

    if (!fs.existsSync(sfdxProjectJson)) {
        throw new Error('Could not find sfdx-project.json. Make sure `lts-jest` is run from project root');
    }

    return require(sfdxProjectJson);
}

// get relative path to 'lightningcomponents' directory from project root
function getModulePaths() {
    const paths = [];
    const projectPaths = [];
    const packageDirectories = getSfdxProjectJson().packageDirectories;

    packageDirectories.forEach((entry) => {
        projectPaths.push(entry.path);
    });

    for (let i = 0; i < projectPaths.length; i++) {
        const found = new GlobSync('**/lightningcomponents/', { cwd: projectPaths[i] }).found;
        for (let j = 0; j < found.length; j++) {
            paths.push(path.join(projectPaths[i], found[j]));
        }
    }

    return paths;
}

function getNamespace() {
    return getSfdxProjectJson().namespace || DEFAULT_NAMESPACE;
}

module.exports = {
    PROJECT_ROOT,
    getSfdxProjectJson,
    getNamespace,
    getModulePaths,
};