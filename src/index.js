#!/usr/bin/env node

const yargs = require('yargs');
const runJest = require('./utils/testRunner');
const options = require('./options/options');

const {
    error,
    info,
} = require('./log');

const showWrongArgsError = (msg, err, yargs) => {
    if (err) {
        throw err;
    }

    let unrecognized;
    let token = 'Unknown argument: ';
    if (msg.startsWith(token)) {
        unrecognized = msg.substring(token.length);
    }

    let template = `The following argument(s) are not recognized by lts-jest: ${unrecognized}\n` +
        `If you wish to pass these arguments along to Jest, please add the '--' flag`;

    info(yargs.help());
    error(template);
}

const args = yargs
    .usage('`$0 [options]` will run Jest unit tests in SFDX workspace')
    .example('$0 --coverage', options.coverage.description)
    .example('$0 -- --json', 'All params after `--` will be directly passed to Jest')
    .options(options)
    .strict()
    .fail(showWrongArgsError)
    .help()
    .argv;

runJest(args)

process.on('unhandledRejection', reason => {
    error(reason);
});
