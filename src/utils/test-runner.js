/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { jestRunner } = require('./jest');
const shell = require('./shell');

const { error, info } = require('../log');

const { PROJECT_ROOT, getSfdxProjectJson } = require('./project');

const { jestConfig, expectedApiVersion, jestPath } = require('../config');

// CLI options we do not want to pass along to Jest
const OPTIONS_BLACKLIST = ['_', '$0', 'debug', 'd'];

function getOptions(argv) {
    let options = [];

    Object.keys(argv).forEach((arg) => {
        if (argv[arg] && !OPTIONS_BLACKLIST.includes(arg)) {
            options.push(`--${arg}`);
        }
    });
    return options.concat(argv._);
}

async function testRunner(argv) {
    const sfdxProjectJson = getSfdxProjectJson();
    const apiVersion = sfdxProjectJson.sourceApiVersion;
    if (apiVersion !== expectedApiVersion) {
        error(
            `Invalid sourceApiVersion found in sfdx-project.json. Expected ${expectedApiVersion}, found ${apiVersion}`,
        );
    }

    const hasCustomConfig = fs.existsSync(path.resolve(PROJECT_ROOT, 'jest.config.js'));
    const config = hasCustomConfig ? [] : ['--config', JSON.stringify(jestConfig)];

    const options = getOptions(argv);
    if (argv.debug) {
        info('Running in debug mode...');
        let commandArgs = ['--inspect-brk', jestPath, '--runInBand'];
        commandArgs = commandArgs.concat(options);
        if (!hasCustomConfig) {
            commandArgs.push('--config=' + JSON.stringify(jestConfig));
        }
        const command = 'node';
        info(command + ' ' + commandArgs.join(' '));

        shell.runCommand(command, commandArgs);
    } else {
        // Jest will not set the env if not run from the bin executable
        if (process.env.NODE_ENV == null) {
            process.env.NODE_ENV = 'test';
        }
        jestRunner.run([...config, ...options]);
    }
}

module.exports = testRunner;
