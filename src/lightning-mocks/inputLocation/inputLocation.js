import { Element, api } from 'engine';

export default class InputLocation extends Element {
    @api disabled
	@api fieldLevelHelp
	@api label
	@api latitude
	@api longitude
	@api readonly
	@api required
	@api variant
    
}