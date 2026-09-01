/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

/**
 * Integration tests for src/utils/project.js – getModulePaths() ordering.
 *
 * Regression test for issue #252:
 *   When two packageDirectories contain a component with the same name,
 *   getModulePaths() must return the directory listed *last* in
 *   sfdx-project.json first in its result array, so the resolver picks it up
 *   before the earlier one – matching Salesforce's source-push "last wins"
 *   override behaviour.
 *
 * Strategy: spin up a real temp directory on disk with an actual
 * sfdx-project.json and real lwc sub-folders, then chdir into it and
 * require project.js fresh (jest.resetModules()) so PROJECT_ROOT resolves
 * correctly. No mocks needed – this exercises the full code path.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Create a temporary SFDX project directory tree and return its absolute path.
 *
 * Layout:
 *   <tmpDir>/
 *     sfdx-project.json           { packageDirectories: dirs }
 *     <dirs[0].path>/main/default/lwc/
 *     <dirs[1].path>/main/default/lwc/
 *     ...
 */
function createTempProject(packageDirectories) {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sfdx-lwc-jest-test-'));

    fs.writeFileSync(
        path.join(tmpDir, 'sfdx-project.json'),
        JSON.stringify({ packageDirectories }),
    );

    for (const { path: pkgPath } of packageDirectories) {
        fs.mkdirSync(path.join(tmpDir, pkgPath, 'main', 'default', 'lwc'), {
            recursive: true,
        });
    }

    return tmpDir;
}

/** Recursively remove a directory (cross-platform). */
function removeTempProject(dir) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// ─── test lifecycle ──────────────────────────────────────────────────────────

let originalCwd;
let tmpDir;

beforeEach(() => {
    originalCwd = process.cwd();
    // Clear the module registry so project.js re-evaluates PROJECT_ROOT and
    // the PATHS cache each time.
    jest.resetModules();
});

afterEach(() => {
    // Always restore CWD and remove the temp dir, even on failure.
    process.chdir(originalCwd);
    if (tmpDir) {
        removeTempProject(tmpDir);
        tmpDir = undefined;
    }
});

// ─── tests ───────────────────────────────────────────────────────────────────

describe('getModulePaths – issue #252 resolution order', () => {
    it('returns the last-defined packageDirectory first when two packages share a component name', () => {
        // force-app is listed first, force-app-wip is listed second.
        // When pushed to Salesforce, force-app-wip wins (last defined).
        // getModulePaths() must reflect that same order.
        tmpDir = createTempProject([
            { path: 'force-app', default: true },
            { path: 'force-app-wip', default: false },
        ]);

        process.chdir(tmpDir);
        const { getModulePaths } = require('../src/utils/project');
        const paths = getModulePaths();

        // force-app-wip must be searched first so the resolver finds it before force-app.
        const names = paths.map((p) => p.split(/[/\\]/)[0]);
        expect(names[0]).toBe('force-app-wip');
        expect(names[1]).toBe('force-app');
    });

    it('preserves a single packageDirectory without error', () => {
        tmpDir = createTempProject([{ path: 'force-app', default: true }]);

        process.chdir(tmpDir);
        const { getModulePaths } = require('../src/utils/project');
        const paths = getModulePaths();

        expect(paths).toHaveLength(1);
        expect(paths[0]).toMatch(/force-app/);
    });

    it('reverses three or more packageDirectories so the last-defined comes first', () => {
        tmpDir = createTempProject([{ path: 'core' }, { path: 'extensions' }, { path: 'wip' }]);

        process.chdir(tmpDir);
        const { getModulePaths } = require('../src/utils/project');
        const paths = getModulePaths();

        const names = paths.map((p) => p.split(/[/\\]/)[0]);
        expect(names[0]).toBe('wip');
        expect(names[1]).toBe('extensions');
        expect(names[2]).toBe('core');
    });

    it('does not mutate the packageDirectories array in sfdx-project.json', () => {
        tmpDir = createTempProject([
            { path: 'force-app', default: true },
            { path: 'force-app-wip', default: false },
        ]);

        process.chdir(tmpDir);
        const { getSfdxProjectJson, getModulePaths } = require('../src/utils/project');

        // Capture the order before calling getModulePaths.
        const before = getSfdxProjectJson().packageDirectories.map((d) => d.path);
        getModulePaths();
        const after = getSfdxProjectJson().packageDirectories.map((d) => d.path);

        // The original sfdx-project.json data must not be mutated.
        expect(after).toEqual(before);
        expect(after[0]).toBe('force-app');
        expect(after[1]).toBe('force-app-wip');
    });
});
