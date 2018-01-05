# lts-jest

Run Jest against LWC components in SFDX workspace environment

## Installation

Globally install this project to execute tests inside your SFDX workspace via command line

```
yarn install
yarn link
```

## Usage

```
lts-jest test
```

## Updating .forceignore

After adding Jest tests, you will get errors trying to sync your local files with a scratch org because the `__tests__` directory will not be recognized. To ignore these test files, add this entry to your `.forceignore` file.

```
**__tests__
```

See [How to Exclude Source When Syncing or Converting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm) for more details.