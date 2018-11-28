import { LightningElement, api } from 'lwc';

export default class CheckboxGroup extends LightningElement {
    @api disabled
	@api label
	@api messageWhenValueMissing
	@api name
	@api options
	@api required
	@api value
    @api checkValidity() {}
	@api focus() {}
	@api reportValidity() {}
	@api setCustomValidity() {}
	@api showHelpMessageIfInvalid() {}
}