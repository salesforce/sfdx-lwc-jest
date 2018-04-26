import { Element, api } from 'engine';

export default class Buttoniconstateful extends Element {
    @api alternativeText
	@api disabled
	@api iconName
	@api name
	@api selected
	@api size
	@api value
	@api variant
    @api focus() {}
}