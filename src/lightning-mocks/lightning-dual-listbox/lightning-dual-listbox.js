import { Element, api } from 'engine';

export default class Duallistbox extends Element {
    @api addButtonLabel
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
	@api sourceLabel
	@api upButtonLabel
	@api validity
	@api value
	@api values
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}