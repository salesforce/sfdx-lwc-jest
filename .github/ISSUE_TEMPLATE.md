### Description

#### Steps to Reproduce

<!--
Please provide the following code snippets. Issues without sufficient info to
reproduce the issue will be closed.

- Simplified test case (foo.test.js)
- HTML + JS for component under test
- Any Jest config overrides
- Command run that causes issue
-->

```js
// simplified test case
it('does x when y', () => {
    ...
});
```

```html
<!-- HTML for component under test -->
<template>
    ...
</template>
```

```js
// JS for component under test
import { LightningElement } from 'lwc';

export default class Foo extends LightningElement {
    ...
}
```

```js
// Jest config overrides (if any)
const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
module.exports = {
    ...jestConfig,
    foo: 'bar',
};
```

```bash
# Command to repro
lwc-jest -- --no-cache
```

#### Expected Results

<!-- Example: No error is throw -->

#### Actual Results

<!-- Example: Error is thrown -->

### Version

-   @salesforce/sfdx-lwc-jest: x.x.x
-   Node: x.x.x

**Possible Solution**

<!--- Only if you have suggestions on a fix for the bug -->

**Additional context/Screenshots**

<!-- Add any other context about the problem here. If applicable, add screenshots to help explain. -->
