import { Element, api } from 'engine';

export default class FormattedNumber extends Element {
    @api currencyCode
	@api currencyDisplayAs
	@api maximumFractionDigits
	@api maximumSignificantDigits
	@api minimumFractionDigits
	@api minimumIntegerDigits
	@api minimumSignificantDigits
	@api value
    
}