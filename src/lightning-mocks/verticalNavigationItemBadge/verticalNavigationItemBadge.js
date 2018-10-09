import { LightningElement, api } from 'lwc';

export default class VerticalNavigationItemBadge extends LightningElement {
    @api assistiveText
	@api badgeCount
	@api href
	@api label
	@api name
    
}