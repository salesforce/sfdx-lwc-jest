import { LightningElement, api } from 'lwc';

export default class OverlayLibrary extends LightningElement {
    
    @api close() {}
	@api hide() {}
	@api show() {}
	@api showCustomModal() {}
	@api showCustomPopover() {}
}