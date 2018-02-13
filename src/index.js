#!/usr/bin/env node

const yargs = require('yargs');

const { 
    error,
    info,
} = require('./log');
const test = require('./commands/test');

const isAdvanced = yargs.argv.advancedMode || yargs.argv.a;

yargs
    .command(test)
    .demandCommand()
    .strict(!isAdvanced)
    .fail((msg, err, yargs) => {
        if (err) {
            throw err;
        }

        let unrecognized;
        let token = 'Unknown argument: ';
        if (msg.startsWith(token)) {
            unrecognized = msg.substring(token.length);
        }
        token = 'Unknown arguments: ';
        if (msg.startsWith(token)) {
            unrecognized = msg.substring(token.length);
        }

        let template = `The following argument(s) are not recognized by lts-jest: ${unrecognized}\n` +
        `If you wish to pass these arguments along to Jest, please add the --advancedMode flag`;

        info(yargs.help());
        error(template);
    })
    .help()
    .argv;

process.on('unhandledRejection', reason => {
    error(reason);
});