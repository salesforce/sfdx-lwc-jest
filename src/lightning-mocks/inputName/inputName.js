import { LightningElement, api } from 'lwc';

export default class InputName extends LightningElement {
    @api disabled
	@api fieldLevelHelp
	@api fieldsToDisplay
	@api firstName
	@api informalName
	@api label
	@api lastName
	@api middleName
	@api options
	@api readonly
	@api required
	@api salutation
	@api suffix
	@api variant
    
}