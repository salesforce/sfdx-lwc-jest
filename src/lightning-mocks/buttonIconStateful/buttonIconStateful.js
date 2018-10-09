import { LightningElement, api } from 'lwc';

export default class ButtonIconStateful extends LightningElement {
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