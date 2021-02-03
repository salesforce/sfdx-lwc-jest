/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const child_process = require('child_process');
const runJest = require('../src/utils/test-runner');

jest.mock('child_process');
jest.mock('../src/log');
jest.mock('../src/utils/project');

beforeEach(() => {
    child_process.spawn.mockReset();

    child_process.spawn.mockImplementation(() => {
        return {
            on(name, cb) {
                if (name === 'close') cb(0);
            },
        };
    });
});

test('invokes node executable with jest path', async () => {
    await runJest({ _: [] });
    const [[cmd, args]] = child_process.spawn.mock.calls;

    expect(cmd).toContain('node');
    expect(args[0]).toMatch(/bin\/jest\.js$/);
});

test('invokes jest with --runInBand and --inspect-brk in debug mode', async () => {
    await runJest({ debug: true, _: [] });
    const [[, args]] = child_process.spawn.mock.calls;

    expect(args).toContain('--inspect-brk');
    expect(args).toContain('--runInBand');
});

test.each(['coverage', 'updateSnapshot', 'verbose', 'watch'])(
    'invokes jest with option %s when present',
    async (option) => {
        await runJest({ [option]: true, _: [] });
        const [[, args]] = child_process.spawn.mock.calls;

        expect(args).toContain(`--${option}`);
    },
);

test('invokes jest with position arguments when present', async () => {
    await runJest({ _: ['--showConfig', 'my/test.js'] });
    const [[, args]] = child_process.spawn.mock.calls;

    expect(args).toContain(`--showConfig`);
    expect(args).toContain(`my/test.js`);
});

test('resolves with jest command exit code', async () => {
    const EXIT_CODE = 42;
    child_process.spawn.mockImplementation(() => {
        return {
            on(name, cb) {
                if (name === 'close') {
                    cb(EXIT_CODE);
                }
            },
        };
    });

    const res = await runJest({ _: [] });
    expect(res).toBe(EXIT_CODE);
});
