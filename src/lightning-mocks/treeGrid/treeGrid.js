import { Element, api } from 'engine';

export default class TreeGrid extends Element {
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