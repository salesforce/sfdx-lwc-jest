import { LightningElement, api } from 'lwc';

export default class ButtonStateful extends LightningElement {
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