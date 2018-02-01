const path = require('path');
const { 
    PROJECT_ROOT,
    getModulePaths,
} = require('./utils/project.js');

function getCoveragePaths() {
    let paths = [];
    const modulePaths = getModulePaths();
    modulePaths.forEach((p) => {
        paths.push(path.join(p, '**/*.js'));
    });
}

const jestConfig = {
    rootDir: PROJECT_ROOT,
    moduleFileExtensions: ['js', 'html'],
    transform: {
        '^.+\\.(js|html|css)$': require.resolve('./resources/lwc-jest-transformer')
    },
    resolver: path.resolve(__dirname, './resolver.js'),
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/test/specs/',
    ],
    collectCoverageFrom: getCoveragePaths(),
};

module.exports = { jestConfig };