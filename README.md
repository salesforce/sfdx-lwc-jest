# @salesforce/sfdx-lwc-jest

Run Jest against Lightning web components in a Salesforce DX workspace environment.

## Master vs. Prerelease

To test your components against Salesforce production instances, use the master branch. The latest release off of this branch is tagged with the npm dist-tag of `latest`.

To test against sandbox instances, use the `prerelease` branch and the version tagged as `prerelease`.

### Invalid sourceApiVersion found in sfdx-project.json

If you see this error while running tests in your Salesforce DX project, it most likely means you are using the incorrect version of this project.

For example, the error message `Invalid sourceApiVersion found in sfdx-project.json. Expected 45.0, found 46.0` means this project is targeted to API version 45.0, which maps to Spring '19, but the Salesforce DX project the tests are run in is using API version 46.0, which maps to Summer '19. To fix this issue, use the `prerelease` version of this project.

## Installation

Add this project as a devDependency:

```bash
yarn add -D @salesforce/sfdx-lwc-jest
```

Update your project's unit testing script in `package.json` to execute `sfdx-lwc-jest`:

```json
{
    "scripts": {
        "test:unit": "sfdx-lwc-jest",
        "test:unit:watch": "sfdx-lwc-jest --watch",
        "test:unit:debug": "sfdx-lwc-jest --debug"
    }
}
```

`test:unit` runs all your tests. `test:unit:watch` and `test:unit:debug` run Jest in watch and debug mode (see below).

Alternatively, you can globally install the package and run directly from the command line.

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
  sfdx-lwc-jest --coverage  Collect coverage and display in output
  sfdx-lwc-jest -- --json   All params after `--` will be directly passed to Jest
```

## Passing Additional Jest CLI Options

To pass any additional Jest CLI options to your run, pass them after the `--` flag. All CLI parameters after the flag are passed directly to Jest.

```bash
sfdx-lwc-jest -- --json
```

See the [Jest documentation](http://facebook.github.io/jest/docs/en/cli.html) for all CLI options.

## Debug mode

Debug mode lets you easily debug your Jest tests.

-   Put a `debugger;` into your code
-   Open `chrome://inspect`
-   Run `sfdx-lwc-jest` with the `--debug` flag.

Pass other parameters to Jest after the `--` flag. For example,

```bash
sfdx-lwc-jest --debug -- --no-cache
```

### Debugging in Visual Studio Code

If you prefer to debug inside Visual Studio Code, follow these steps:

-   From the Visual Studio Code dropdowns, select Debug > Add Configuration....
-   If you're prompted for an Environment choose any value.
-   Mac users, replace the contents of the generated `launch.json` with the following. (for Windows users see the [Jest website](https://jestjs.io/docs/en/troubleshooting#debugging-in-vs-code) for launch.json contents).

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

-   Add a `jest.config.js` file to the root of the Salesforce DX project as described [here](#overriding-jest-config). You must add this file to run Jest from Visual Studio Code.
-   To run tests, press F5 or select Debug > Start Debugging.

## Watch mode

Watch mode causes Jest to monitor files for changes and rerun tests related to the changed files. This is a great way to rapidly make component and test changes while monitoring tests results.

## Overriding Jest Config

`sfdx-lwc-jest` sets up all the necessary Jest [configs](http://facebook.github.io/jest/docs/en/configuration.html) for you to run tests out of the box without any additional changes. To override any options or set additional ones, create a file called `jest.config.js` at the root of your Salesforce DX project, import the default config from `sfdx-lwc-jest`, modify as you please, and then export the new config.

```js
const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
module.exports = {
    ...jestConfig,
    // add any custom configurations here
};
```

## Resolving External Lightning Web Components

If a Lightning web component isn't located in the local `lwc` directory of your Salesforce DX project, you must mock it in your Jest tests. This package includes a set of stubs for all components in the `lightning` namespace.

### Lightning Namespaced Component Stubs

This package installs stubs for the `lightning` base components to the `src/lightning-stubs` directory. These stubs are used automatically when running tests through `sfdx-lwc-jest`. To override the default stub provided for your project, override the `moduleNameMapper` config as described in [Other Component Mocks](#other-component-mocks).

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
const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^foo/fancyButton$': '<rootDir>/force-app/test/jest-mocks/foo/fancyButton',
    },
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
    @api label;
    // any other implementation you may want to expose here
}
```

## Testing @wire Adapters

To provision data through `@wire` adapters in unit tests, use the APIs provided by [`@salesforce/wire-service-jest-util`](https://github.com/salesforce/wire-service-jest-util). These APIs are exposed through this package so you do not need to include another dependency in your package.json.

```js
import {
    registerTestWireAdapter,
    registerLdsTestWireAdapter,
    registerApexTestWireAdapter,
} from '@salesforce/sfdx-lwc-jest';
```

See the `@salesforce/wire-service-jest-util` [README](https://github.com/salesforce/wire-service-jest-util/blob/master/README.md) for further documentation on these APIs.
