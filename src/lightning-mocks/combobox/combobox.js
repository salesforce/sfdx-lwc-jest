import { LightningElement, api } from 'lwc';

export default class Combobox extends LightningElement {
    @api disabled
	@api dropdownAlignment
	@api fieldLevelHelp
	@api label
	@api messageWhenValueMissing
	@api name
	@api options
	@api placeholder
	@api readonly
	@api required
	@api spinnerActive
	@api validity
	@api value
	@api variant
    @api showHelpMessageIfInvalid() {}
}