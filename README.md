# @salesforce/lwc-jest

Run Jest against Lightning web components in an SFDX workspace environment.

## Installation

Add this project as a devDependency:

```bash
yarn add -D @salesforce/lwc-jest
``` 

Update your projects unit testing script in package.json to execute `lwc-jest`:

```json
{
    "scripts": {
        "test:unit": "lwc-jest"
    }
}
```

Alternatively, you can globally install the package and run directly from the command line.

## Usage

```
`lwc-jest [options]` will run Jest unit tests in SFDX workspace

Options:
  --version             Show version number                            [boolean]
  --coverage            Collect coverage and display in output
                                                      [boolean] [default: false]
  --updateSnapshot, -u  Re-record every snapshot that fails during a test run
                                                      [boolean] [default: false]
  --verbose             Display individual test results with the test suite
                        hierarchy                     [boolean] [default: false]
  --watch               Watch files for changes and rerun tests related to
                        changed files                 [boolean] [default: false]
  --debug               Run tests in debug mode
                        (https://jestjs.io/docs/en/troubleshooting)
                                                      [boolean] [default: false]
  --help                Show help                                      [boolean]

Examples:
  lwc-jest --coverage  Collect coverage and display in output
  lwc-jest -- --json   All params after `--` will be directly passed to Jest
```

## Passing Additional Jest CLI Options

To pass any additional Jest CLI options to your run, pass them after the `--` flag. All CLI parameters after the flag are passed along directly to Jest.

```bash
lwc-jest -- --json
```

See the Jest [doc](http://facebook.github.io/jest/docs/en/cli.html) for all CLI options.

## Debug mode

Debug mode lets you use debugger in your jest tests.
- Put a `debugger;` into your code
- Open `chrome://inspect` 
- Run `lwc-jest` with the `--debug` flag.

Pass other parameters to jest after the `--` flag. For example,
```
lwc-jest --debug -- --no-cache
```

### Debugging in VSCode

If you prefer to debug directly inside the VSCode IDE, follow these steps:
- From the VSCode dropdowns, select Debug --> Add Configuration...
- Replace the contents of generated `launch.json` with the [`Debug Jest Tests` configuration](https://jestjs.io/docs/en/troubleshooting#debugging-in-vs-code) provided by Jest
- Add a `jest.config.json` file to the root of the SFDX project as described [here](#overriding-jest-config)
- Run tests by pressing F5 or selecting Debug --> Start Debugging

## Overriding Jest Config

`lwc-jest` sets up all the necessary Jest [configs](http://facebook.github.io/jest/docs/en/configuration.html) for you to run tests out of the box without any additional tweaks. To override any options or set additional ones, create a file called `jest.config.js` at the root of your SFDX project, import the default config from `lwc-jest`, modify as you please, and then export the new config.

```js
const { jestConfig } = require('@salesforce/lwc-jest/config');
module.exports = {
    ...jestConfig,
    // add any custom configurations here
};
```

## Updating .forceignore

After adding Jest tests, you'll get errors trying to sync your local files with a scratch org because the `__tests__` directory will not be recognized. To ignore these test files, add this entry to your `.forceignore` file:

```
**__tests__
```

See [How to Exclude Source When Syncing or Converting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm) for more details.

## Resolving External Lightning Web Components

Any Ligntning web components not located in your local `lwc` directory of your SFDX workspace will need to be mocked in your Jest tests. Included in this package are a set of mocks for all the `lightning` namespaced components.

### Lightning Namespaced Component Mocks

When this package is installed, a new set of mocks for all `lightning` namespaced components is generated into the `lightning-mocks` folder. These mocks are generated based off the `lwc-standard.json` metadata file. The mocks are auto-generated and the Jest resolver automatically uses these mocks in the tests. These work out-of-the-box, you don't need to do anything.

### Other Component Mocks

For components from other namespaces, not in your local `lwc` directory, create your own mock and update the Jest config to map the name of these components to the mock file. 

Let's go through an example. Given the following template, `helloWorld.html`, we want to test:

```html
<template>
    Hello From a Lightning Web Component!
    <lightning-button onclick={doSomething}></lightning-button>
    <foo-fancy-button onclick={doSomethingElse}></foo-button>
</template>
```

We know out of the box the `lightning-button` will be handled by the package automatically. `foo-fancy-button`, however, will need to be resolved. First, create a `jest.config.js` file at the root of the SFDX project workspace and add the following:

```js
const { jestConfig } = require('@salesforce/lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^foo/fancyButton$': '<rootDir>/force-app/test/jest-mocks/foo/fancyButton',
    }
};
```

This tells Jest to map the import for `foo-fancy-button` to the provided file. Notice that the first dash is converted to a forward slash and the rest of the component name goes from kebab to camel case. The reason for the forward slash is because the module resolver treats everything before the first dash as the namespace. Here, `<rootDir>` maps to the root of the SFDX workspace. Note that this file location is not required, just an example.

You also have the freedom to make these mock implementations as sophisticated or simple as you'd like. In this example, we'll keep `foo-fancy-button` simple with an empty template and no functionality in the `.js` file, but you can always add whatever markup you'd like or implement functionality like any other Lightning web component.

Finally, we need to create the mock `foo-fancy-button` files. In the `force-app/test/jest-mocks/foo` directory create the following files:

```html
<!-- fancyButton.html -->
<template></template>
```

```js
// fancyButton.js
import { LightningElement, api } from 'lwc';
export default class FancyButton extends LightningElement {
  @api label
  // any other implementation you may want to expose here
}
```
