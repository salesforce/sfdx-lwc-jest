import { Element, api } from 'engine';

export default class Formattednumber extends Element {
    @api currencyCode
	@api currencyDisplayAs
	@api maximumFractionDigits
	@api maximumSignificantDigits
	@api minimumFractionDigits
	@api minimumIntegerDigits
	@api minimumSignificantDigits
	@api formatStyle
	@api value
    
}