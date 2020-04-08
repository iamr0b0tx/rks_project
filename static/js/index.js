// mapbox code
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtcjBiMHR4IiwiYSI6ImNrOHJtdm5pbTA0MHUzbHBqZ292ODdnYjAifQ.NkW4bdn3I8VXvbP7-IeE5w';
var coordinates = document.getElementById('coordinates');
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
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);

// custom code
var query_btn = document.getElementById('query_btn');
var upload_btn = document.getElementById('upload_btn');
