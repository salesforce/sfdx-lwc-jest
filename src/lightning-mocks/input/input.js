/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class Input extends LightningElement {
    @api accept
	@api ariaControls
	@api ariaDescribedBy
	@api ariaLabel
	@api ariaLabelledBy
	@api checked
	@api dateAriaControls
	@api dateAriaDescribedBy
	@api dateAriaLabel
	@api dateAriaLabelledBy
	@api disabled
	@api fieldLevelHelp
	@api files
	@api formatter
	@api isLoading
	@api label
	@api max
	@api messageToggleActive
	@api messageToggleInactive
	@api messageWhenBadInput
	@api messageWhenPatternMismatch
	@api messageWhenRangeOverflow
	@api messageWhenRangeUnderflow
	@api messageWhenStepMismatch
	@api messageWhenTooLong
	@api messageWhenTooShort
	@api messageWhenTypeMismatch
	@api messageWhenValueMissing
	@api min
	@api minlength
	@api multiple
	@api name
	@api pattern
	@api placeholder
	@api readonly
	@api required
	@api step
	@api timeAriaControls
	@api timeAriaDescribedBy
	@api timeAriaLabel
	@api timeAriaLabelledBy
	@api timezone
	@api type
	@api validity
	@api value
	@api variant
    @api focus() {}
    @api showHelpMessageIfInvalid() {}
    @api checkValidity() {}
    @api setCustomValidity() {}
    @api reportValidity() {}
    @api blur() {}
}
