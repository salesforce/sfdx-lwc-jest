#!/usr/bin/env node

const { getArgs } = require('./utils/yargs');
const { error } = require('./log');

const args = getArgs();
const runJest = require('./utils/test-runner');
runJest(args);

process.on('unhandledRejection', reason => {
    error(reason);
});
