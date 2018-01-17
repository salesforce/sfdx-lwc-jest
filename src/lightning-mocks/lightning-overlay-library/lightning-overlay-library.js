import { Element, api } from 'engine';

export default class Overlay-library extends Element {
    
    @api close() {}
	@api hide() {}
	@api show() {}
	@api showCustomModal() {}
	@api showCustomPopover() {}
}