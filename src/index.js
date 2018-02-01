#!/usr/bin/env node

const yargs = require('yargs');

const { error } = require('./log');
const test = require('./commands/test');

const isAdvanced = yargs.argv.advancedMode;

yargs
    .command(test)
    .demandCommand()
    .strict(!isAdvanced)
    .help()
    .argv;

process.on('unhandledRejection', reason => {
    error(reason);
});