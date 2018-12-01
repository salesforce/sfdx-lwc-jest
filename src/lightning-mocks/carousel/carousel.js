import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
    @api disableAutoRefresh
	@api disableAutoScroll
	@api scrollDuration
    
}