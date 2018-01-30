const { resolve, extname, join } = require('path');
const { default: defaultResolver } = require('jest-resolve/build/default_resolver');

const GLOBAL_CSS_MOCK = resolve(__dirname, '..', 'resources', 'globalStyleMock.js');

function getLwcPath(path) {

    if (extname(path) === '.css') {
        return GLOBAL_CSS_MOCK;
    }

    if (path === 'engine') {
        return join(__dirname, '..', '..', 'lwc-engine', 'engine.js');
    }

    return path;s
}

module.exports = function (path, options) {
    return defaultResolver(getLwcPath(path), options);
};
