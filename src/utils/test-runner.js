/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const { PROJECT_ROOT, getSfdxProjectJson } = require('./project');

const { error, info } = require('../log');
const { jestConfig, expectedApiVersion, jestPath } = require('../config');

// CLI options we do not want to pass along to Jest
// prettier-ignore
const OPTIONS_DISALLOW_LIST = [
    '_', 
    '$0', 
    'debug', 'd', 
    'skipApiVersionCheck', 'skip-api-version-check'
];

function getOptions(argv) {
    let options = [];

    Object.keys(argv).forEach((arg) => {
        if (argv[arg] && !OPTIONS_DISALLOW_LIST.includes(arg)) {
            options.push(`--${arg}`);
        }
    });
    return options.concat(argv._);
}

function getJestCommandArgs(argv, options) {
    const commandArgs = [];

    if (argv.debug) {
        commandArgs.push('--inspect-brk');
    }

    commandArgs.push(jestPath);

    if (argv.debug) {
        ('--runInBand');
    }

    const hasCustomConfig = fs.existsSync(path.resolve(PROJECT_ROOT, 'jest.config.js'));
    if (!hasCustomConfig) {
        commandArgs.push(`--config=${JSON.stringify(jestConfig)}`);
    }

    commandArgs.push(...options);

    return commandArgs;
}

function validSourceApiVersion() {
    const sfdxProjectJson = getSfdxProjectJson();
    const apiVersion = sfdxProjectJson.sourceApiVersion;
    if (apiVersion !== expectedApiVersion) {
        error(
            `Invalid sourceApiVersion found in sfdx-project.json. Expected ${expectedApiVersion}, found ${apiVersion}`,
        );
    }
}

async function testRunner(argv) {
    if (!argv.skipApiVersionCheck) {
        validSourceApiVersion();
    }

    const options = getOptions(argv);

    const command = 'node';
    const commandArgs = getJestCommandArgs(argv, options);

    if (argv.debug) {
        info('Running in debug mode...');
        info(`${command} ${commandArgs.join(' ')}`);
    }

    const jestProcess = spawn(command, commandArgs);

    if (argv.debug) {
        jestProcess.on('error', (err) => {
            error('error', err);
        });

        jestProcess.stdout.on('data', (data) => {
            info('stdout: ' + String(data));
        });

        jestProcess.stderr.on('data', (data) => {
            info('stderr: ' + String(data));
        });

        jestProcess.on('exit', (code) => {
            info('Exited with code ' + String(code));
        });
    }
}

module.exports = testRunner;
