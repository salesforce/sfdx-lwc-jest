/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const EventEmitter = require('events');
const child_process = require('child_process');
const shell = require('../../src/utils/shell');
const log = require('../../src/log');
const { runCommand } = shell;

jest.mock('child_process');
const processEventEmitter = new EventEmitter();
const stdoutEmitter = new EventEmitter();
const stderrEmitter = new EventEmitter();
child_process.spawn.mockImplementation(() => {
    const toReturn = processEventEmitter;
    toReturn.stdout = stdoutEmitter;
    toReturn.stderr = stderrEmitter;
    return toReturn;
});

jest.mock('../../src/log', () => {
    return {
        info: jest.fn(),
        error: jest.fn(),
    };
});

beforeEach(() => {
    jest.clearAllMocks();
});

const mockCommand = 'mockCommand';
const mockArgs = [];

test('Should log error with log level error on jestProcess error', () => {
    runCommand(mockCommand, mockArgs);
    const mockError = 'mock error';
    processEventEmitter.emit('error', mockError);
    expect(log.error).toHaveBeenCalledWith('error', mockError);
});

test('Should log data with log level info on jestProcess stdout data', () => {
    runCommand(mockCommand, mockArgs);
    const mockData = 'mock data';
    stdoutEmitter.emit('data', mockData);
    expect(log.info).toHaveBeenCalledWith('stdout: mock data');
});

test('Should log data with log level info on jestProcess stderr data', () => {
    runCommand(mockCommand, mockArgs);
    const mockData = 'mock data';
    stderrEmitter.emit('data', mockData);
    expect(log.info).toHaveBeenCalledWith('stderr: mock data');
});

test('Should log exit code with log level info on jestProcess exit', () => {
    runCommand(mockCommand, mockArgs);
    const mockExitCode = '1';
    processEventEmitter.emit('exit', mockExitCode);
    expect(log.info).toHaveBeenCalledWith('Exited with code 1');
});

test('Should not throw error if exit code is null', () => {
    runCommand(mockCommand, mockArgs);
    expect(() => {
        processEventEmitter.emit('exit', null);
    }).not.toThrow();
    expect(log.info).toHaveBeenCalledWith('Exited with code null');
});
