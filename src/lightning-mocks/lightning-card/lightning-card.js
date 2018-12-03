import { Element, api } from 'engine';

export default class Card extends Element {
	@api title
    @api actions
	@api footer
	@api iconName
	@api variant
    
}