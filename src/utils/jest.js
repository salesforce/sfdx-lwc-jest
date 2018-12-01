// For testing purposes -- we can't mock "jest" itself,
// so we injecting it with a different name.
module.exports = {
    jestRunner: require('jest')
}
