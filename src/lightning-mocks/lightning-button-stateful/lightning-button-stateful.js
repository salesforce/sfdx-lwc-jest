import { Element, api } from 'engine';

export default class Button-stateful extends Element {
    @api iconNameWhenHover
	@api iconNameWhenOff
	@api iconNameWhenOn
	@api labelWhenHover
	@api labelWhenOff
	@api labelWhenOn
	@api state
	@api variant
    @api focus() {}
}