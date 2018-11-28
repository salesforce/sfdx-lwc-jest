import { LightningElement, api } from 'lwc';

export default class Map extends LightningElement {
    @api center
	@api mapMarkers
	@api markersTitle
	@api showFooter
	@api zoomLevel
    
}