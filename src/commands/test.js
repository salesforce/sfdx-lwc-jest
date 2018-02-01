const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const jest = require('jest');

const { error } = require('../log.js');
const { 
    PROJECT_ROOT,
    getModulePaths,
    getSfdxProjectJson,
} = require('../utils/project.js');

// CLI options we do not want to pass along to Jest
const OPTIONS_BLACKLIST = ['_', '$0', 'advancedMode', 'a'];

function applyOverrides(config) {
    const jestConfig = path.resolve(PROJECT_ROOT, 'jest.config.js');

    if (!fs.existsSync(jestConfig)) {
        return config;
    }

    const overrides = Object.assign({}, require(jestConfig));
    const supportedKeys = [
        'collectCoverageFrom',
        'coverageReporters',
        'coverageThreshold',
        'moduleNameMapper',
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

function getOptions(argv) {
    let options = [];

    Object.keys(argv).forEach(arg => {
        if (argv[arg] && !OPTIONS_BLACKLIST.includes(arg)) {
            options.push(`--${arg}`);
        }
    });

    return options;
}

function getCoveragePaths() {
    let paths = [];
    const modulePaths = getModulePaths();
    modulePaths.forEach((p) => {
        paths.push(path.join(p, '**/*.js'));
    });
}

module.exports = {
    command: 'test',

    description: 'Run Jest unit tests in SFDX workspace',

    builder: {
        advancedMode: {
            description: 'For advanced users only. Pass all CLI arguments directly to Jest',
            type: 'boolean',
            default: false,
            alias: 'a',
        },

        coverage: {
            description: 'Collect coverage and display in output',
            type: 'boolean',
            default: false,
        },

        updateSnapshot: {
            description: 'Re-record every snapshot that fails during a test run',
            type: 'boolean',
            default: false,
            alias: 'u',
        },

        verbose: {
            description: 'Display individual test results with the test suite hierarchy',
            type: 'boolean',
            default: false,
        },

        watch: {
            description: 'Watch files for changes and rerun tests related to changed files',
            type: 'boolean',
            default: false,
        },
    },

    async handler(argv) {
        const cwd = fs.realpathSync(process.cwd());

        if (!fs.existsSync(path.join(cwd, 'sfdx-project.json'))) {
            error('Could not find file sfdx-project.json in cwd, please run lts-test from SFDX project root.');
        }

        const sfdxProjectJson = getSfdxProjectJson();
        const apiVersion = sfdxProjectJson.sourceApiVersion;
        if (apiVersion !== '42.0') {
            error(`Invalid sourceApiVersion found in sfdx-project.json. Expected 42.0, found ${apiVersion}`);
        }

        let config = {
            rootDir: PROJECT_ROOT,
            moduleFileExtensions: ['js', 'html'],
            transform: {
                '^.+\\.(js|html|css)$': require.resolve('../resources/lwc-jest-transformer')
            },
            resolver: path.resolve(__dirname, '../resolver.js'),
            testPathIgnorePatterns: [
              '<rootDir>/node_modules/',
              '<rootDir>/test/specs/',
            ],
            collectCoverageFrom: getCoveragePaths(),
        };
        config = applyOverrides(config);
        const options = getOptions(argv);
        jest.run(['--config', JSON.stringify(config)].concat(options));
    },
};