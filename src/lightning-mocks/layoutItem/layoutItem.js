import { LightningElement, api } from 'lwc';

export default class LayoutItem extends LightningElement {
    @api alignmentBump
	@api body
	@api flexibility
	@api largeDeviceSize
	@api mediumDeviceSize
	@api padding
	@api size
	@api smallDeviceSize
    
}