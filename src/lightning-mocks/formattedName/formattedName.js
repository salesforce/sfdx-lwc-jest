import { LightningElement, api } from 'lwc';

export default class FormattedName extends LightningElement {
    @api firstName
	@api format
	@api informalName
	@api lastName
	@api middleName
	@api salutation
	@api suffix
    
}