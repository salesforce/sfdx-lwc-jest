const { expectedApiVersion } = require('../../config');

module.exports = {
    PROJECT_ROOT: 'projectRoot',
    getSfdxProjectJson: () => {
        return { mock: true, sourceApiVersion: expectedApiVersion }
    },
    getNamespace: 'mockedNamespace',
    getModulePaths: () => ['C:/WIN32/SYSTEM']
};
