import { LightningElement, api } from 'lwc';

export default class FormattedAddress extends LightningElement {
    @api city
	@api country
	@api disabled
	@api latitude
	@api longitude
	@api postalCode
	@api province
	@api street
    
}