/* eslint-disable no-console */

const chalk = require('chalk');

function info(message) {
    console.log(`${chalk.blue('info')} ${message}`);
}

function error(message, code = 1) {
    console.error(`${chalk.red('error')} ${message}`);
    process.exit(code);
}

module.exports = {
    info,
    error,
};