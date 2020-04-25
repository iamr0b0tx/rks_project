var map, study_area, study_area_merged;

map = new L.Map('mapdiv', {
	center: new L.LatLng(parseFloat(latitude), parseFloat(longitude)), 
	zoom: 14});

   


/*
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);  */

   var satellite = L.tileLayer('http://www.google.com/maps/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
        //http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}
            attribution: 'google'
        });

    satellite.addTo(map);

    var baseMap = {
        "Google Satellite": satellite
    };

    var overlayMaps = {
    };

    // add layer control

     toc = L.control.layers(baseMap, overlayMaps, { position: 'bottomright', collapsed: false }).addTo(map);




L.marker([parseFloat(latitude), parseFloat(longitude)]).addTo(map);





            
