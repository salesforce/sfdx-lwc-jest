import { Element, api } from 'engine';

export default class Button extends Element {
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