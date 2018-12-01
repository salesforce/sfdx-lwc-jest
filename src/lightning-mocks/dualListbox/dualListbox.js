import { LightningElement, api } from 'lwc';

export default class DualListbox extends LightningElement {
    @api addButtonLabel
	@api disableReordering
	@api disabled
	@api downButtonLabel
	@api fieldLevelHelp
	@api label
	@api max
	@api min
	@api name
	@api options
	@api readonly
	@api removeButtonLabel
	@api required
	@api requiredOptions
	@api selectedLabel
	@api showActivityIndicator
	@api size
	@api sourceLabel
	@api upButtonLabel
	@api validity
	@api value
	@api values
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}