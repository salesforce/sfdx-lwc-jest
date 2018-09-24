const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const jest = require('jest');

const { error } = require('../log.js');
const {
    PROJECT_ROOT,
    getSfdxProjectJson,
} = require('../utils/project.js');

const {
    jestConfig,
} = require('../config');

// CLI options we do not want to pass along to Jest
const OPTIONS_BLACKLIST = ['_', '$0', 'advancedMode', 'a'];

function getOptions(argv) {
    let options = [];

    Object.keys(argv).forEach(arg => {
        if (argv[arg] && !OPTIONS_BLACKLIST.includes(arg)) {
            options.push(`--${arg}`);
        }
    });

    return options;
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
        const expectedApiVersion = '45.0';
        if (apiVersion !== expectedApiVersion) {
            error(`Invalid sourceApiVersion found in sfdx-project.json. Expected ${expectedApiVersion}, found ${apiVersion}`);
        }

        const hasCustomConfig = fs.existsSync(path.resolve(PROJECT_ROOT, 'jest.config.js'));
        const config = !hasCustomConfig ? ['--config', JSON.stringify(jestConfig)] : [];

        const options = getOptions(argv);
        jest.run([...config, ...options]);
    },
};
