import { Element, api } from 'engine';

export default class Datatable extends Element {
    @api columns
	@api data
	@api defaultSortDirection
	@api enableInfiniteLoading
	@api errors
	@api hideCheckboxColumn
	@api isLoading
	@api keyField
	@api loadMoreOffset
	@api maxColumnWidth
	@api maxRowSelection
	@api minColumnWidth
	@api resizeColumnDisabled
	@api resizeStep
	@api rowNumberOffset
	@api selectedRows
	@api showRowNumberColumn
	@api sortedBy
	@api sortedDirection
    @api getSelectedRows() {}
}