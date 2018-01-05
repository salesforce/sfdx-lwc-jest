const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const jest = require('jest');

// TODO: SFDX workspaces do not have package.json, how do we allow overrides?
function getOverrides(config) {
    const cwd = fs.realpathSync(process.cwd());
    const appPackageJson = path.resolve(cwd, 'package.json');
    const overrides = Object.assign({}, require(appPackageJson).jest);
    const supportedKeys = [
        'collectCoverageFrom',
        'coverageReporters',
        'coverageThreshold',
    ];
    if (overrides) {
        supportedKeys.forEach(key => {
            if (overrides.hasOwnProperty(key)) {
                config[key] = overrides[key];
                delete overrides[key];
            }
        });
        const unsupportedKeys = Object.keys(overrides);
        if (unsupportedKeys.length) {
            console.error(
                chalk.red(
                    'Out of the box, only the following Jest optiosn are supported:\n\n' +
                    supportedKeys.map(key => chalk.bold('  \u2022 ' + key)).join('\n') +
                    '.\n\n' +
                    'These options in your package.json Jest configuration ' +
                    'are not currently supported:\n\n' +
                    unsupportedKeys
                        .map(key => chalk.bold('  \u2022 ' + key))
                        .join('\n') +
                    '\n\nIf you wish to override other Jest options, please file ' +
                    'an issue to discuss supporting more options out of the box.\n'
                )
            );
            process.exit(1);
        }
    }
    return config;
}

module.exports = {
    command: 'test',

    description: 'Run Jest unit tests in SFDX workspace',

    builder: {
        options: {
            description: 'Jest CLI options',
            type: 'string',
            default: '',
        },
    },

    async handler(argv) {
        // TODO: validate in project root here (by checking existence of sfdx-project.json)? 
        let config = {
            moduleFileExtensions: ['js'],
            transform: {
                '^.+\\.(js|html|css)$': require.resolve('lwc-jest-transformer')
            },
            resolver: path.resolve(__dirname, '../resolver.js'),
            testPathIgnorePatterns: [
              '<rootDir>/node_modules/',
              '<rootDir>/test/specs/',
            ],
            collectCoverageFrom: ['src/modules/**/*.js'],
            verbose: true
        };
        const options = argv.options.split(' ');
        //config = getOverrides(config);
        jest.run(['--config', JSON.stringify(config)].concat(options));
    },
};