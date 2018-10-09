import { LightningElement, api } from 'lwc';

export default class FormattedDateTime extends LightningElement {
    @api day
	@api era
	@api hour
	@api hour12
	@api minute
	@api month
	@api second
	@api timeZone
	@api timeZoneName
	@api value
	@api weekday
	@api year
    
}