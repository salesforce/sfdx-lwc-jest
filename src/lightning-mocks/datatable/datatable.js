import { LightningElement, api } from 'lwc';

export default class Datatable extends LightningElement {
    @api columns
	@api data
	@api defaultSortDirection
	@api draftValues
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