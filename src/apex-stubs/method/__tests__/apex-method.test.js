/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import method from '../method';

describe('apex resources', () => {
    it('should return a resolved promise when apex method is invoked imperatively', () => {
        let resolved = false;
        method().then(() => (resolved = true));

        return Promise.resolve().then(() => {
            expect(resolved).toBe(true);
        });
    });
});
