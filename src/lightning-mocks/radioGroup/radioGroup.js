import { Element, api } from 'engine';

export default class RadioGroup extends Element {
    @api disabled
	@api label
	@api messageWhenValueMissing
	@api name
	@api options
	@api readonly
	@api required
	@api type
	@api validity
	@api value
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}