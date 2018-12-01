import { LightningElement, api } from 'lwc';

export default class Tab extends LightningElement {
    @api body
	@api iconAssistiveText
	@api iconName
	@api label
	@api showErrorIndicator
    @api focus() {}
}