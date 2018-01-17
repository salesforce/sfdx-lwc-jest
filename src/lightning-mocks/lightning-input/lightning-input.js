import { Element, api } from 'engine';

export default class Input extends Element {
    @api accept
	@api checked
	@api disabled
	@api files
	@api formatter
	@api isLoading
	@api label
	@api max
	@api maxlength
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
	@api type
	@api validity
	@api value
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}