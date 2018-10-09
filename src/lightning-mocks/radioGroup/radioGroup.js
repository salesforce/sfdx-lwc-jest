import { LightningElement, api } from 'lwc';

export default class RadioGroup extends LightningElement {
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