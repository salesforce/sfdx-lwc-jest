import { Element, api } from 'engine';

export default class ProgressIndicator extends Element {
    @api currentStep
	@api hasError
	@api type
	@api variant
    
}