import { Element, api } from 'engine';

export default class Input-rich-text extends Element {
    @api ariaDescribedby
	@api ariaLabel
	@api ariaLabelledby
	@api disabled
	@api disabledCategories
	@api messageWhenBadInput
	@api placeholder
	@api valid
	@api value
	@api variant
    @api focus() {}
}