import { Element, api } from 'engine';

export default class ButtonIcon extends Element {
    @api alternativeText
	@api ariaAtomic
	@api ariaControls
	@api ariaDescribedBy
	@api ariaExpanded
	@api ariaLabel
	@api ariaLive
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