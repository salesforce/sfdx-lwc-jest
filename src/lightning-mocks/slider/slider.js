import { Element, api } from 'engine';

export default class Slider extends Element {
    @api disabled
	@api label
	@api max
	@api messageWhenBadInput
	@api messageWhenPatternMismatch
	@api messageWhenRangeOverflow
	@api messageWhenRangeUnderflow
	@api messageWhenStepMismatch
	@api messageWhenTooLong
	@api messageWhenTypeMismatch
	@api messageWhenValueMissing
	@api min
	@api size
	@api step
	@api type
	@api value
	@api variant
    @api blur() {}
	@api checkValidity() {}
	@api focus() {}
	@api setCustomValidity() {}
	@api showHelpMessageIfInvalid() {}
}