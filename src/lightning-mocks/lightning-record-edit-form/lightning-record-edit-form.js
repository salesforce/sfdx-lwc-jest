import { Element, api } from 'engine';

export default class Recordeditform extends Element {
    @api objectApiName
	@api recordId
	@api recordTypeId
    @api submit() {}
}