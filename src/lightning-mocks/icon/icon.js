import { LightningElement, api } from 'lwc';

export default class Icon extends LightningElement {
    @api alternativeText
	@api iconName
	@api size
	@api src
	@api variant
    
}