import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
	@api title
    @api actions
	@api footer
	@api iconName
	@api variant
    
}