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
        '^.+\\.(js|html|css)$': require.resolve('lwc-jest-transformer')
    },
    transformIgnorePatterns: ["/node_modules/(?:(?!lightning-mocks.*(js|html|css)))*$"],
    resolver: path.resolve(__dirname, './resolver.js'),
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/test/specs/',
    ],
    collectCoverageFrom: getCoveragePaths(),
    // temp workaround until this is released - https://github.com/facebook/jest/pull/6792
    testURL: "http://localhost/",
};

module.exports = { jestConfig };