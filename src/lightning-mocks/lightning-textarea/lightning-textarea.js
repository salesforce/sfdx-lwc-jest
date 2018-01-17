import { Element, api } from 'engine';

export default class Textarea extends Element {
    @api disabled
	@api label
	@api maxlength
	@api messageWhenBadInput
	@api messageWhenTooLong
	@api messageWhenValueMissing
	@api minlength
	@api name
	@api placeholder
	@api readonly
	@api required
	@api validity
	@api value
	@api variant
    @api showHelpMessageIfInvalid() {}
}