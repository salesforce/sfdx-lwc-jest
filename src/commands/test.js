const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const jest = require('jest');

const { error } = require('../log.js');
const { PROJECT_ROOT } = require('../utils/project.js');

function applyOverrides(config) {
    const jestConfig = path.resolve(PROJECT_ROOT, 'jest.config.js');
    const overrides = Object.assign({}, require(jestConfig));
    const supportedKeys = [
        'collectCoverageFrom',
        'coverageReporters',
        'coverageThreshold',
        'verbose',
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
            error(
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
            );
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
        const cwd = fs.realpathSync(process.cwd());
        if (!fs.existsSync(path.join(cwd, 'sfdx-project.json'))) {
            error('Could not find file sfdx-project.json in cwd, please run lts-test from SFDX project root.');
        }

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
            collectCoverageFrom: ['**/lightningcomponents/**/*.js']
        };
        const options = argv.options.split(' ');
        config = applyOverrides(config);
        jest.run(['--config', JSON.stringify(config)].concat(options));
    },
};