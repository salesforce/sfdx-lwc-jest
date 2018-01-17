# lts-jest

Run Jest against LWC components in SFDX workspace environment

## Installation

Globally install this project to execute tests inside your SFDX workspace via command line

```
git clone git@git.soma.salesforce.com:tbliss/lts-jest.git
cd lts-jest
yarn install
yarn link
```

Once this package is published to the npm repository, simply run the following:

```
yarn global add lts-jest
```

## Usage

Run the `lts-jest test` command from the root level of your SFDX workspace.

```
lts-jest test

Run Jest unit tests in SFDX workspace

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --options  Jest CLI options                             [string] [default: ""]

```

## Passing Additional Jest CLI Options

To pass any additional Jest CLI options to your run, pass in a string to the `--options` param of `lts-jest test`. For example, to run Jest in watch mode and set the verbose flag, run:

```bash
lts-jest test --options='--watch --verbose'
```

See the Jest [doc](http://facebook.github.io/jest/docs/en/cli.html) for all CLI options.

## Overriding Jest Config

`lts-jest` will set up all the necessary Jest [configs](http://facebook.github.io/jest/docs/en/configuration.html) for you to run tests out of the box without any additional tweaks. Some, but not all, options can be overriden. To override an option, create a `jest.config.js` file in the project root and set the options as [documented](http://facebook.github.io/jest/docs/en/configuration.html#options). 

For example:
```js
module.exports = {
    verbose: true,
};
```

## Updating .forceignore

After adding Jest tests, you will get errors trying to sync your local files with a scratch org because the `__tests__` directory will not be recognized. To ignore these test files, add this entry to your `.forceignore` file:

```
**__tests__
```

See [How to Exclude Source When Syncing or Converting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm) for more details.
