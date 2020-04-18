// mapbox code initializations
L.mapbox.accessToken = 'pk.eyJ1IjoiaWFtcjBiMHR4IiwiYSI6ImNrOHJtdm5pbTA0MHUzbHBqZ292ODdnYjAifQ.NkW4bdn3I8VXvbP7-IeE5w';
var map = L.mapbox.map('map', 'mapbox.streets');

var markers = new L.MarkerClusterGroup();

for (var i = 0; i < addressPoints.length; i++) {
    var a = addressPoints[i];
    var title = a[2];
    var marker = L.marker(new L.LatLng(a[0], a[1]), {
        icon: L.mapbox.marker.icon({ 'marker-symbol': 'post', 'marker-color': '0044FF' }),
        title: title
    });
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);

var marker = L.marker([0, 0], {
    icon: L.mapbox.marker.icon({
        'marker-color': '#f86767'
    }),
    clickable: true,
    draggable: true,
}).addTo(map);

map.on('click', function (e) {
    alert(e.latlng.lat); // e is an event object (MouseEvent in this case)
});

