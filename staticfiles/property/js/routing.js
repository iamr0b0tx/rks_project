var dir, drawControl, drawnItems, start_lat, start_long;

drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

drawControl = new L.Control.Draw({
    draw : {
        position : 'topleft',
        polyline : false,
        rectangle : false,
        circle : false,
        polygon: false,
        circlemarker: false,
        marker: {
            // marker options here
        }
    },
    edit: { featureGroup: drawnItems }
});

map.addControl(drawControl); 

map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;

        drawnItems.addLayer(layer);
        coords = layer.getLatLng();
        start_lat = coords.lat;
        start_lng = coords.lng;

        $( "#dirbtn" ).prop( "disabled", false );
    });


function getRoute(){

	dir = MQ.routing.directions();

	dir.route({
	  locations: [
	    { latLng: { lat: start_lat, lng: start_lng } },
	    { latLng: { lat: parseFloat(latitude), lng: parseFloat(longitude) } }
	  ]
	});

	map.addLayer(MQ.routing.routeLayer({
	  directions: dir,
	  fitBounds: true
	}));

}



