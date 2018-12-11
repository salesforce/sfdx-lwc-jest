#/bin/bash -e

# Copyright (c) 2018, salesforce.com, inc.
# All rights reserved.
# SPDX-License-Identifier: MIT
# For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT

LWC_VERSION=$1

yarn upgrade @lwc/compiler@$LWC_VERSION
yarn upgrade @lwc/engine@$LWC_VERSION
yarn upgrade @lwc/jest-resolver@$LWC_VERSION
yarn upgrade @lwc/jest-serializer@$LWC_VERSION
yarn upgrade @lwc/jest-transformer@$LWC_VERSION
yarn upgrade @lwc/module-resolver@$LWC_VERSION
yarn upgrade @lwc/wire-service@$LWC_VERSION
yarn upgrade @lwc/jest-preset@$LWC_VERSION
