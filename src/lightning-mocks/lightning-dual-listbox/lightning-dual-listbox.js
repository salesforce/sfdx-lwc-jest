import { Element, api } from 'engine';

export default class Dual-listbox extends Element {
    @api disabled
	@api label
	@api max
	@api min
	@api name
	@api options
	@api readonly
	@api required
	@api requiredOptions
	@api selectedLabel
	@api sourceLabel
	@api validity
	@api value
	@api values
	@api variant
    @api focus() {}
	@api showHelpMessageIfInvalid() {}
}