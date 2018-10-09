import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api ariaAtomic
	@api ariaControls
	@api ariaDescribedBy
	@api ariaExpanded
	@api ariaLabel
	@api ariaLive
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