import { Element, api } from 'engine';

export default class OverlayLibrary extends Element {
    
    @api close() {}
	@api hide() {}
	@api show() {}
	@api showCustomModal() {}
	@api showCustomPopover() {}
}