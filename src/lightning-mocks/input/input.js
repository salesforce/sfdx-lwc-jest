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
	@api type
	@api validity
	@api value
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}