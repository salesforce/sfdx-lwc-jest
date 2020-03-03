/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const options = require('../options/options');
const yargs = require('yargs');

const { error, info } = require('../log');

const argError = (msg, err, yargs) => {
    if (err) {
        throw err;
    }

    let unrecognized;
    let token = 'Unknown argument: ';
    if (msg.startsWith(token)) {
        unrecognized = msg.substring(token.length);
    }

    let template =
        `The following argument(s) are not recognized by lwc-jest: ${unrecognized}\n` +
        `If you wish to pass these arguments along to Jest, please add the '--' flag`;

    info(yargs.help());
    error(template);
};

const getArgs = () => {
    return yargs
        .usage('`$0 [options]` runs Jest unit tests in SFDX workspace')
        .example('$0 --coverage', options.coverage.description)
        .example('$0 -- --json', 'All params after `--` are directly passed to Jest')
        .options(options)
        .strict()
        .fail(argError)
        .help().argv;
};

module.exports = { getArgs };
