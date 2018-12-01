const path = require('path');

const PATH_TO_MODULES = path.join('main', 'default', 'lwc');

function getInfoFromId(id) {
    const [ns, ...rest] = id.split('/');
    return {
        ns,
        name: rest.join('/'),
    };
}

module.exports = {
    PATH_TO_MODULES,
    getInfoFromId
}