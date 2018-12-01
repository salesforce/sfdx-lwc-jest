import { LightningElement, api } from 'lwc';

export default class Layout extends LightningElement {
    @api body
	@api horizontalAlign
	@api multipleRows
	@api pullToBoundary
	@api verticalAlign
    
}