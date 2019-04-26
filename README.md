# @salesforce/lwc-jest

Run Jest against Lightning web components in a Salesforce DX workspace environment.

## Installation

Add this project as a devDependency:

```bash
yarn add -D @salesforce/lwc-jest
```

Update your project's unit testing script in package.json to execute `lwc-jest`:

```json
{
    "scripts": {
        "test:unit": "lwc-jest",
        "test:unit:watch": "lwc-jest --watch",
        "test:unit:debug": "lwc-jest --debug"
    }
}
```

`test:unit` runs all your tests. `test:unit:watch` and `test:unit:debug` run Jest in watch and debug mode (see below).

Alternatively, you can globally install the package and run directly from the command line.

### Troubleshooting `deasync` Installation Errors

This project has a transitive dependency on `deasync` to compile Lightning web components during test runs. Depending on your operating system and Node version combination, `deasync` may attempt to compile C++ code during installation of this project. This has been known to create issues for some Windows users.

The most common solution on Windows is to globally install `windows-build-tools`. Run the following as administrator:

```bash
npm install --global --production windows-build-tools
```

If that does not work or you are on a different operating system, follow the instructions in the installation section of the `deasync` [README](https://github.com/abbr/deasync#installation).

If all of the above fail, try pinning the version of `deasync` to the latest release using `yarn`'s "resolutions" entry inside the consuming project's package.json file. This approach requires using `yarn` instead of `npm` to install and build. Add the following to your package.json and run the `yarn` command from the consuming project root:

```json
"resolutions": {
    "deasync": "0.1.14"
}
```

## Updating .forceignore

After adding Jest tests, pushing your local files to a scratch org causes errors because the `__tests__` directory isn't recognized. To ignore these test files, add this entry to your `.forceignore` file:

```
**/__tests__/**
```

See [How to Exclude Source When Syncing or Converting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm) for more details.

## Usage

```
`lwc-jest [options]` runs Jest unit tests

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

To pass any additional Jest CLI options to your run, pass them after the `--` flag. All CLI parameters after the flag are passed directly to Jest.

```bash
lwc-jest -- --json
```

See the [Jest documentation](http://facebook.github.io/jest/docs/en/cli.html) for all CLI options.

## Debug mode

Debug mode lets you easily debug your Jest tests.
- Put a `debugger;` into your code
- Open `chrome://inspect`
- Run `lwc-jest` with the `--debug` flag.

Pass other parameters to Jest after the `--` flag. For example,
```
lwc-jest --debug -- --no-cache
```

### Debugging in Visual Studio Code

If you prefer to debug inside Visual Studio Code, follow these steps:
- From the Visual Studio Code dropdowns, select Debug > Add Configuration....
- If you're prompted for an Environment choose any value.
- Replace the contents of the generated `launch.json` with the following.
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/.bin/jest",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9229
    }
  ]
}
```
- Add a `jest.config.js` file to the root of the Salesforce DX project as described [here](#overriding-jest-config). You must add this file to run Jest from Visual Studio Code.
- To run tests, press F5 or select Debug > Start Debugging.


## Watch mode

Watch mode causes Jest to monitor files for changes and rerun tests related to the changed files. This is a great way to rapidly make component and test changes while monitoring tests results.


## Overriding Jest Config

`lwc-jest` sets up all the necessary Jest [configs](http://facebook.github.io/jest/docs/en/configuration.html) for you to run tests out of the box without any additional changes. To override any options or set additional ones, create a file called `jest.config.js` at the root of your Salesforce DX project, import the default config from `lwc-jest`, modify as you please, and then export the new config.

```js
const { jestConfig } = require('@salesforce/lwc-jest/config');
module.exports = {
    ...jestConfig,
    // add any custom configurations here
};
```

## Resolving External Lightning Web Components

If a Lightning web component isn't located in the local `lwc` directory of your Salesforce DX project, you must mock it in your Jest tests. This package includes a set of mocks for all components in the `lightning` namespace.

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

Because it's in the `lightning` namespace, the `lightning-button` just works. However, you must write some code to help the Jest resolver find the `foo-fancy-button component`. First, create a `jest.config.js` file at the root of the Salesforce DX project workspace and add the following:

```js
const { jestConfig } = require('@salesforce/lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^foo/fancyButton$': '<rootDir>/force-app/test/jest-mocks/foo/fancyButton',
    }
};
```

This tells Jest to map the import for `foo-fancy-button` to the provided file. Notice that the first dash is converted to a forward slash and the rest of the component name goes from kebab to camel case. The reason for the forward slash is because the module resolver treats everything before the first dash as the namespace. Here, `<rootDir>` maps to the root of the Salesforce DX workspace. Note that this file location is not required, just an example.

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

## Testing @wire Adapters

To provision data through `@wire` adapters in unit tests, use the APIs provided by [`@salesforce/wire-service-jest-util`](https://github.com/salesforce/wire-service-jest-util). These APIs are exposed through this package so you do not need to include another dependency in your package.json. 

```js
import {
    registerTestWireAdapter,
    registerLdsTestWireAdapter,
    registerApexTestWireAdapter
} from '@salesforce/lwc-jest';
```

See the `@salesforce/wire-service-jest-util` [README](https://github.com/salesforce/wire-service-jest-util/blob/master/README.md) for further documentation on these APIs.
