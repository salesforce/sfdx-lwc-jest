import { Element, api } from 'engine';

export default class Button-icon extends Element {
    @api alternativeText
	@api disabled
	@api iconClass
	@api iconName
	@api name
	@api size
	@api type
	@api value
	@api variant
    @api focus() {}
}