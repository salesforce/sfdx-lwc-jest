import { LightningElement, api } from 'lwc';

export default class InputRichText extends LightningElement {
    @api ariaDescribedby
	@api ariaLabel
	@api ariaLabelledby
	@api disabled
	@api disabledCategories
	@api label
	@api labelVisible
	@api messageWhenBadInput
	@api placeholder
	@api shareWithEntityId
	@api valid
	@api value
	@api variant
    @api focus() {}
}