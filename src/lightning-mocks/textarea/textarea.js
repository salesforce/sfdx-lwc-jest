import { LightningElement, api } from 'lwc';

export default class Textarea extends LightningElement {
    @api disabled
	@api label
	@api messageWhenBadInput
	@api messageWhenTooLong
	@api messageWhenTooShort
	@api messageWhenValueMissing
	@api minlength
	@api name
	@api placeholder
	@api readonly
	@api required
	@api validity
	@api value
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}