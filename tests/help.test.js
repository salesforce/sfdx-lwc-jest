const { exec } = require('child_process');

const runInHelpMode = () => {
    return new Promise((resolve, reject) => {
        exec('node ./src/index.js --help', (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    })
}

test('--help attribute shows help', () => {
    expect.assertions(1);
    return runInHelpMode().then((stdout) => {
        expect(stdout).toMatchSnapshot();
    });
});
