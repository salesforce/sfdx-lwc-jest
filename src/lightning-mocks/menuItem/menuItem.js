import { LightningElement, api } from 'lwc';

export default class MenuItem extends LightningElement {
    @api checked
	@api disabled
	@api draftAlternativeText
	@api href
	@api iconName
	@api isDraft
	@api label
	@api prefixIconName
	@api value
    @api focus() {}
}