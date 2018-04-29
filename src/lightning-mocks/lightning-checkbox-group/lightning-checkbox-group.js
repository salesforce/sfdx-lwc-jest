import { Element, api } from 'engine';

export default class CheckboxGroup extends Element {
    @api disabled
	@api label
	@api messageWhenValueMissing
	@api name
	@api options
	@api required
	@api value
    
}