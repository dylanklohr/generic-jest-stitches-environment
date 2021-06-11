# generic-jest-stitches-environment

## Prerequisites

- yarn v. 1.22
## Steps to Reproduce

1. Install dependencies (`yarn`)
2. Execute tests (`yarn test`)
3. Observe error

```
generic-jest-stitches-environment git:(main) ✗ yarn test
yarn run v1.22.10
$ jest --config ./jest.config.js
 FAIL  src/__tests__/index.ts
  ● Test suite failed to run

    TypeError: t.rules.themed.group.insertRule is not a function

      1 | import * as Stitches from '@stitches/react';
      2 |
    > 3 | const stitchesConfig = Stitches.createCss({
        |                                 ^
      4 | 	prefix: 'foobar010',
      5 |
      6 | 	theme: {

      at Object.s [as toString] (node_modules/@stitches/react/dist/index.cjs:1:14386)
      at Object.<anonymous> (src/stitches-config.ts:3:33)
      at Object.<anonymous> (src/index.ts:1:1)
      at Object.<anonymous> (src/__tests__/index.ts:1:1)


=============================== Coverage summary ===============================
Statements   : Unknown% ( 0/0 )
Branches     : Unknown% ( 0/0 )
Functions    : Unknown% ( 0/0 )
Lines        : Unknown% ( 0/0 )
================================================================================
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.648 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
➜  generic-jest-stitches-environment git:(main)
```
