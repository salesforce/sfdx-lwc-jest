import { Element, api } from 'engine';

export default class FormattedName extends Element {
    @api firstName
	@api format
	@api informalName
	@api lastName
	@api middleName
	@api salutation
	@api suffix
    
}