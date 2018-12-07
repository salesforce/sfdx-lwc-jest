/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class InputName extends LightningElement {
    @api disabled
	@api fieldLevelHelp
	@api fieldsToDisplay
	@api firstName
	@api informalName
	@api label
	@api lastName
	@api middleName
	@api options
	@api readonly
	@api required
	@api salutation
	@api suffix
	@api variant
    
}