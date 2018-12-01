const spawn = require('child_process').spawn;
const {
    error,
    info,
} = require('../log');

const runCommand = (command, args) => {
    const jestProcess = spawn(command, args);
    jestProcess.on('error', (err) => {
        error('error', err);
    });

    jestProcess.stdout.on('data', function (data) {
        info('stdout: ' + data.toString());
    });

    jestProcess.stderr.on('data', function (data) {
        info('stderr: ' + data.toString());
    });

    jestProcess.on('exit', function (code) {
        info('Exited with code ' + code.toString());
    });
}

module.exports = { runCommand };

