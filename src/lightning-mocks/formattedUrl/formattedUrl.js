import { LightningElement, api } from 'lwc';

export default class FormattedUrl extends LightningElement {
    @api label
	@api target
	@api tooltip
	@api value
    
}