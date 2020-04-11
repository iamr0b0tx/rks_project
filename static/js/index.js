// mapbox code initializations
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtcjBiMHR4IiwiYSI6ImNrOHJtdm5pbTA0MHUzbHBqZ292ODdnYjAifQ.NkW4bdn3I8VXvbP7-IeE5w';
var coordinates = document.getElementById('coordinates');

// code initializations
var value_input = document.getElementById('value_input');

var query_btn = document.getElementById('query_btn');
var submit_btn = document.getElementById('submit_btn');
var upload_btn = document.getElementById('upload_btn');

var longitude = document.getElementById('longitude');
var latitude = document.getElementById('latitude');

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    // update input field
    longitude.value = lngLat.lng;
    latitude.value = lngLat.lat;
}

marker.on('dragend', onDragEnd);