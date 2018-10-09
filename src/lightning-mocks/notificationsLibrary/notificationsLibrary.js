import { LightningElement, api } from 'lwc';

export default class NotificationsLibrary extends LightningElement {
    
    @api showNotice() {}
	@api showToast() {}
}