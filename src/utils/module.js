const path = require('path');

const PATH_TO_MODULES = path.join('main', 'default', 'lightningcomponents');

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

module.exports = {
    PATH_TO_MODULES,
    isValidModuleName,
    getInfoFromId
}