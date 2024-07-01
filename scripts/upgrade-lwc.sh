#/bin/bash -e

# Copyright (c) 2018, salesforce.com, inc.
# All rights reserved.
# SPDX-License-Identifier: MIT
# For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT

LWC_VERSION=$1
LWC_TEST_VERSION=$2

yarn upgrade \
    @lwc/compiler@$LWC_VERSION \
    @lwc/engine-dom@$LWC_VERSION \
    @lwc/engine-server@$LWC_VERSION \
    @lwc/module-resolver@$LWC_VERSION \
    @lwc/wire-service@$LWC_VERSION \
    @lwc/synthetic-shadow@$LWC_VERSION \
    @lwc/jest-resolver@$LWC_TEST_VERSION \
    @lwc/jest-serializer@$LWC_TEST_VERSION \
    @lwc/jest-transformer@$LWC_TEST_VERSION \
    @lwc/jest-preset@$LWC_TEST_VERSION \
