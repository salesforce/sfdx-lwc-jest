# Changelog

## 0.7.1 (March 3, 2020)

## Fixes

-   Update a variety of stubs, including adding missing `empApi` and `pageReferenceUtils` libraries [#134](https://github.com/salesforce/sfdx-lwc-jest/pull/134)
-   Add `selectedItem` attribute to `<lightning-tree>` stub [#126](https://github.com/salesforce/sfdx-lwc-jest/pull/126)
-   Add missing `<lightning-progress-ring>` stub [#132](https://github.com/salesforce/sfdx-lwc-jest/pull/132)

## Chores

-   Add code formatting and linting on all files [#135](https://github.com/salesforce/sfdx-lwc-jest/pull/135)

## 0.7.0 (January 22, 2020)

## Fixes

-   Fix null exit code in jest process exit [#120](https://github.com/salesforce/sfdx-lwc-jest/pull/120)

## Chores

-   Upgrade LWC to version 1.1.13-224.4

## 0.6.2 (November 25, 2019)

## Fixes

-   Add missing `required` property to `<lightning-input>` [#114](https://github.com/salesforce/sfdx-lwc-jest/pull/114)

## Chores

-   Upgrade `dependencies` and `devDependencies` [#112](https://github.com/salesforce/sfdx-lwc-jest/pull/112)
-   Update bin reference. The `sfdx-lwc-jest` package will now expose 2 aliases `sfdx-lwc-jest` and `lwc-jest` (legacy binary name) pointing to the same executable file. [#100](https://github.com/salesforce/sfdx-lwc-jest/pull/100)

## 0.6.1 (October 16, 2019)

## Fixes

-   Add missing `dateStyle` and `timeStyle` properties to `<lightning-input>` [#94](https://github.com/salesforce/sfdx-lwc-jest/pull/94)
-   Add missing `autocomplete` property to `<lightning-input>` [#92](https://github.com/salesforce/sfdx-lwc-jest/pull/92)

## Chores

-   Upgrade `lwc` related packages to the latest version [#100](https://github.com/salesforce/sfdx-lwc-jest/pull/100)

## 0.5.3 (August 8, 2019)

## Chores

-   Rename package to `@salesforce/sfdx-lwc-jest` to match project name [#86](https://github.com/salesforce/sfdx-lwc-jest/pull/86)

## 0.5.2 (August 7, 2019)

## Features

-   Add real implementation to `getFieldValue` and `getFieldDisplayValue` [#83](https://github.com/salesforce/sfdx-lwc-jest/pull/83)

## Fixes

-   Add missing `tooltip` and `density` properties to stubs [#81](https://github.com/salesforce/sfdx-lwc-jest/pull/81)
-   Add missing `variant` property to `<lightning-radio-group>` [#74](https://github.com/salesforce/sfdx-lwc-jest/pull/74)
-   Update code coverage paths so coverage is properly reported on Windows [#72](https://github.com/salesforce/sfdx-lwc-jest/pull/72)

## Chores

-   Upgrade `js-yaml` dependency to address security alert [#82](https://github.com/salesforce/sfdx-lwc-jest/pull/82)
-   Upgrade `lodash` dependency to address security alert [#78](https://github.com/salesforce/sfdx-lwc-jest/pull/78)

## 0.5.1 (June 18, 2019)

### Fixes

-   Add `title` property back to the `<lightning-card>` stub ([#69](https://github.com/salesforce/lwc-jest/pull/69))

### Chores

-   Upgrade LWC to version 0.37.4-220.2, removes `deasync` dependency :tada:

## 0.5.0 (May 13, 2019)

### Fixes

-   `platformResourceLoader` mock returns resolved Promise again

### Chores

-   Upgrade LWC to version 0.37.4
-   Expected API version check bumped to version 46.0 to match next major release
-   Upgrade Jest to version 24.8.0

## 0.4.14 (May 7, 2019)

### Fixes

-   Add missing `disabled` property to buttons components ([#54](https://github.com/salesforce/lwc-jest/pull/54))

### Chores

-   Remove old mock generation logic, rename mocks --> stubs ([#53](https://github.com/salesforce/lwc-jest/pull/53))

## 0.4.13 (May 2, 2019)

### Fixes

-   Update significant number of `lightning` stubs based on new generation script ([#50](https://github.com/salesforce/lwc-jest/pull/50))
-   Add `type` prop to `<lightning-tile>` stub ([#48](https://github.com/salesforce/lwc-jest/pull/48))
-   Add `formatFractionDigits` prop to `<lightning-input>` stub ([#47](https://github.com/salesforce/lwc-jest/pull/47))

### Chores

-   Upgrade LWC to version 0.34.8 ([#44](https://github.com/salesforce/lwc-jest/pull/44))
-   Update README with additional troubleshooting info on deasync ([#43](https://github.com/salesforce/lwc-jest/pull/43) [#49](https://github.com/salesforce/lwc-jest/pull/49))

## 0.4.12 (March 11, 2019)

### Fixes

-   `lightning/platformResourceLoader` mock APIs to return a resolved Promise ([#38](https://github.com/salesforce/lwc-jest/pull/38))

### Chores

-   Upgrade LWC to version 0.34.7

## 0.4.11 (March 8, 2019)

### Fixes

-   Set `process.env.NODE_ENV` to 'test' if unset for non-debug mode ([#34](https://github.com/salesforce/lwc-jest/pull/34))
-   Fix code coverage option and remove `testURL` config ([#32](https://github.com/salesforce/lwc-jest/pull/32))
-   Fix custom namespace resolution logic ([#30](https://github.com/salesforce/lwc-jest/pull/30))
-   Add missing functions to `<lightning-input>` mock ([#22](https://github.com/salesforce/lwc-jest/pull/22))
