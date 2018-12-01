import { LightningElement, api } from 'lwc';

export default class RecordForm extends LightningElement {
    @api columns
	@api fields
	@api layoutType
	@api mode
	@api objectApiName
	@api recordId
	@api recordTypeId
    
}