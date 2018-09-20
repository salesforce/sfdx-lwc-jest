import { Element, api } from 'engine';

export default class FormattedAddress extends Element {
    @api city
	@api country
	@api disabled
	@api latitude
	@api longitude
	@api postalCode
	@api province
	@api street
    
}