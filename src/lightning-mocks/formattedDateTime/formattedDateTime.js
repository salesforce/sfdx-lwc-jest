import { Element, api } from 'engine';

export default class FormattedDateTime extends Element {
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