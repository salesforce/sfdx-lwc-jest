# Changelog

## 0.5.1 (June 18, 2019)

### Fixes

- Add `title` property back to the `<lightning-card>` stub ([#69](https://github.com/salesforce/lwc-jest/pull/69))

### Chores

- Upgrade LWC to version 0.37.4-220.2, removes `deasync` dependency :tada:

## 0.5.0 (May 13, 2019)

### Fixes

- `platformResourceLoader` mock returns resolved Promise again

### Chores

- Upgrade LWC to version 0.37.4
- Expected API version check bumped to version 46.0 to match next major release
- Upgrade Jest to version 24.8.0

## 0.4.14 (May 7, 2019)

### Fixes

- Add missing `disabled` property to buttons components ([#54](https://github.com/salesforce/lwc-jest/pull/54))

### Chores

- Remove old mock generation logic, rename mocks --> stubs ([#53](https://github.com/salesforce/lwc-jest/pull/53))

## 0.4.13 (May 2, 2019)

### Fixes

- Update significant number of `lightning` stubs based on new generation script ([#50](https://github.com/salesforce/lwc-jest/pull/50))
- Add `type` prop to `<lightning-tile>` stub ([#48](https://github.com/salesforce/lwc-jest/pull/48))
- Add `formatFractionDigits` prop to `<lightning-input>` stub ([#47](https://github.com/salesforce/lwc-jest/pull/47))

### Chores

- Upgrade LWC to version 0.34.8  ([#44](https://github.com/salesforce/lwc-jest/pull/44))
- Update README with additional troubleshooting info on deasync ([#43](https://github.com/salesforce/lwc-jest/pull/43) [#49](https://github.com/salesforce/lwc-jest/pull/49))

## 0.4.12 (March 11, 2019)

### Fixes

- `lightning/platformResourceLoader` mock APIs to return a resolved Promise ([#38](https://github.com/salesforce/lwc-jest/pull/38))

### Chores

- Upgrade LWC to version 0.34.7

## 0.4.11 (March 8, 2019)

### Fixes

- Set `process.env.NODE_ENV` to 'test' if unset for non-debug mode ([#34](https://github.com/salesforce/lwc-jest/pull/34))
- Fix code coverage option and remove `testURL` config ([#32](https://github.com/salesforce/lwc-jest/pull/32))
- Fix custom namespace resolution logic ([#30](https://github.com/salesforce/lwc-jest/pull/30))
- Add missing functions to `<lightning-input>` mock ([#22](https://github.com/salesforce/lwc-jest/pull/22))

