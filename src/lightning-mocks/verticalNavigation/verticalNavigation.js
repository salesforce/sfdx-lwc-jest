import { LightningElement, api } from 'lwc';

export default class VerticalNavigation extends LightningElement {
    @api ariaLabel
	@api compact
	@api selectedItem
	@api shaded
    
}