import { LightningElement, api } from 'lwc';

export default class FormattedNumber extends LightningElement {
	@api formatStyle
    @api currencyCode
	@api currencyDisplayAs
	@api maximumFractionDigits
	@api maximumSignificantDigits
	@api minimumFractionDigits
	@api minimumIntegerDigits
	@api minimumSignificantDigits
	@api value
    
}