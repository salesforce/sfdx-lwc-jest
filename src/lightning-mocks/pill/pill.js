import { LightningElement, api } from 'lwc';

export default class Pill extends LightningElement {
    @api hasError
	@api href
	@api label
	@api media
	@api name
    
}