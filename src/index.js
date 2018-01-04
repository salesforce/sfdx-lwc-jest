#!/usr/bin/env node

const yargs = require('yargs');

const { error } = require('./log');

const test = require('./commands/test');

yargs
    .command(test)
    .demandCommand()
    .strict()
    .help()
    .argv;

process.on('unhandledRejection', reason => {
    error(reason);
});
