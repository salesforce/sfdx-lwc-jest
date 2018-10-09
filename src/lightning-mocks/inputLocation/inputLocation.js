import { LightningElement, api } from 'lwc';

export default class InputLocation extends LightningElement {
    @api disabled
	@api fieldLevelHelp
	@api label
	@api latitude
	@api longitude
	@api readonly
	@api required
	@api variant
    
}