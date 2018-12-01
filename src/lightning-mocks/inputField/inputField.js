import { LightningElement, api } from 'lwc';

export default class InputField extends LightningElement {
    @api disabled
	@api fieldName
	@api value
    
}