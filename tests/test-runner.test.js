/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const fakeJest = require('../src/utils/jest');
const fakeShell = require('../src/utils/shell');
jest.mock('../src/utils/project');
jest.mock('../src/utils/jest');
jest.mock('../src/utils/shell');

const runJest = require('../src/utils/test-runner');

const { jestPath } = require('../src/config');

const generateArgs = ({ args = {}, advanced = [] } = {}) => {
    args['_'] = advanced;
    return args;
};

const defaultArgs = generateArgs();

test('advanced params get passed to Jest', () => {
    const advancedParam = '--maxWorkers=4';
    const args = generateArgs({ advanced: [advancedParam] });
    let jestParams = [];
    fakeJest.jestRunner.run = jest.fn((array) => {
        jestParams = array;
    });
    runJest(args);
    expect(jestParams).toContain(advancedParam);
});

test('config is being passed', () => {
    let jestParams = [];
    fakeJest.jestRunner.run = jest.fn((array) => {
        jestParams = array;
    });
    runJest(defaultArgs);
    expect(jestParams.length).toBe(2);
    expect(jestParams).toContain('--config');
});

test('debug flag runs node debugger', () => {
    const debugAttr = '--inspect-brk';
    const args = generateArgs({ args: { debug: true } });
    const shallArgs = {};
    fakeJest.jestRunner.run = jest.fn();
    fakeShell.runCommand = jest.fn((command, args) => {
        shallArgs.command = command;
        shallArgs.args = args;
    });
    runJest(args);
    expect(fakeJest.jestRunner.run).not.toHaveBeenCalled();
    expect(shallArgs.args).toContain(debugAttr);
    expect(shallArgs.args).toContain(jestPath);
    expect(shallArgs.command).toBe('node');
});
