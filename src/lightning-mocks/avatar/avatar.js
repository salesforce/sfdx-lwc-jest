import { LightningElement, api } from 'lwc';

export default class Avatar extends LightningElement {
    @api alternativeText
	@api fallbackIconName
	@api initials
	@api size
	@api src
	@api variant
    
}