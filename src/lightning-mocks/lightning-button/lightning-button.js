import { Element, api } from 'engine';

export default class Button extends Element {
    @api disabled
	@api iconName
	@api iconPosition
	@api label
	@api name
	@api type
	@api value
	@api variant
    @api focus() {}
}