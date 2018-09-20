import { Element, api } from 'engine';

export default class RecordEditForm extends Element {
    @api objectApiName
	@api recordId
	@api recordTypeId
    @api submit() {}
}