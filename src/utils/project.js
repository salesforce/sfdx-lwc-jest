const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = fs.realpathSync(process.cwd());
const DEFAULT_NAMESPACE = 'c';

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

module.exports = {
    PROJECT_ROOT,
    getSfdxProjectJson,
    getProjectPaths,
    getNamespace
};