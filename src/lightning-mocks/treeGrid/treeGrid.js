import { LightningElement, api } from 'lwc';

export default class TreeGrid extends LightningElement {
    @api columns
	@api data
	@api expandedRows
	@api hideCheckboxColumn
	@api isLoading
	@api keyField
	@api maxColumnWidth
	@api minColumnWidth
	@api resizeColumnDisabled
	@api rowNumberOffset
	@api selectedRows
	@api showRowNumberColumn
    
}