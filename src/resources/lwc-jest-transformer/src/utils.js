const deasync = require('deasync');

function waitForPromise(promise) {
    let resolved = false;
    let err = undefined;
    let res = undefined;

    promise
        .then(result => (res = result), error => (err = error))
        .then(() => (resolved = true));

    deasync.loopWhile(() => !resolved);

    if (err) {
        throw err;
    }

    return res;
}

module.exports = {
    waitForPromise
};
