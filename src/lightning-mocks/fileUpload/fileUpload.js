import { LightningElement, api } from 'lwc';

export default class FileUpload extends LightningElement {
    @api accept
	@api disabled
	@api label
	@api multiple
	@api name
	@api recordId
    
}