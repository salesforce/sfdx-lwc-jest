#/bin/bash -e

# Copyright (c) 2018, salesforce.com, inc.
# All rights reserved.
# SPDX-License-Identifier: MIT
# For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT

LWC_VERSION=$1
LWC_TEST_VERSION=$2

yarn upgrade @lwc/compiler@$LWC_VERSION
yarn upgrade @lwc/engine@$LWC_VERSION
yarn upgrade @lwc/module-resolver@$LWC_VERSION
yarn upgrade @lwc/wire-service@$LWC_VERSION
yarn upgrade @lwc/synthetic-shadow@$LWC_VERSION

yarn upgrade @lwc/jest-resolver@$LWC_TEST_VERSION
yarn upgrade @lwc/jest-serializer@$LWC_TEST_VERSION
yarn upgrade @lwc/jest-transformer@$LWC_TEST_VERSION
yarn upgrade @lwc/jest-preset@$LWC_TEST_VERSION
