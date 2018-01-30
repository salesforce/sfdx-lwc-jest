const babelCore = require('babel-core');
const jestPreset = require('babel-preset-jest');
const lwcCompiler = require('../../lwc-compiler');

const { waitForPromise } = require('./utils');

const BABEL_CONFIG = {
    "presets": [
        // grab this projects preset module so we can run transformer against
        // other projects that may not have that dependency in their node_modules.
        // SFDX workspaces are an example of this.
        [require.resolve('babel-preset-env'), {
            targets: {
                node: true
            }
        }],
        jestPreset,
    ],
};

module.exports = {
    process(src, filePath) {
        // Set default module name and namespace value for the namespace because it can't be properly guessed from the path
        const transform = lwcCompiler.transform(src, filePath, {
            moduleName: 'test',
            moduleNamespace: 'x',
        });

        const { code } = waitForPromise(transform);
        const generated = babelCore.transform(code, BABEL_CONFIG);

        return generated.code;
    }
};
