import { LightningElement, api } from 'lwc';

export default class ProgressIndicator extends LightningElement {
    @api currentStep
	@api hasError
	@api type
	@api variant
    
}