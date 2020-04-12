// mapbox code initializations
mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtcjBiMHR4IiwiYSI6ImNrOHJtdm5pbTA0MHUzbHBqZ292ODdnYjAifQ.NkW4bdn3I8VXvbP7-IeE5w';
var coordinates = document.getElementById('coordinates');

// code initializations
var username_label = document.getElementById('username');
var value_input = document.getElementById('value_input');

var query_btn = document.getElementById('query_btn');
var submit_btn = document.getElementById('submit_btn');
var upload_btn = document.getElementById('upload_btn');

// the form inputs
var longitude = document.getElementById('longitude');
var latitude = document.getElementById('latitude');

var size = document.getElementById('size');
var productive_quality = document.getElementById('productive_quality');
var land_type = document.getElementById('land_type');
var quality = document.getElementById('quality');
var mineral_quantity = document.getElementById('mineral_quantity');
var road_type = document.getElementById('road_type');
var distance_to_paved_road = document.getElementById('distance_to_paved_road');
var distance_to_nearest_town = document.getElementById('distance_to_nearest_town');
var nearest_town_size = document.getElementById('nearest_town_size');
var distance_to_principal_city = document.getElementById('distance_to_principal_city');
var distance_to_metropolitan_center = document.getElementById('distance_to_metropolitan_center');
var distance_to_city_towns = document.getElementById('distance_to_city_towns');
var wheat_allotment = document.getElementById('wheat_allotment');
var cotton_allotment = document.getElementById('cotton_allotment');
var peanut_allotment = document.getElementById('peanut_allotment');

var land_value = document.getElementById('value_input');

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
    coordinates.style.display = 'hidden';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    // update input field
    longitude.value = lngLat.lng;
    latitude.value = lngLat.lat;
}

marker.on('dragend', onDragEnd);

// custom code starts here
username_label.innerHTML = sessionStorage.getItem('username');

function submit(element) {
    if (element.innerHTML == "Upload") {
        send_post_request("api/land/",
            {
                "longitude": longitude.value,
                "latitude": latitude.value,
                "size": size.value,
                "productive_quality": productive_quality.value,
                "land_type": land_type.value,
                "quality": quality.value,
                "mineral_quantity": mineral_quantity.value,
                "road_type": road_type.value,
                "distance_to_paved_road": distance_to_paved_road.value,
                "distance_to_nearest_town": distance_to_nearest_town.value,
                "nearest_town_size": nearest_town_size.value,
                "distance_to_principal_city": distance_to_principal_city.value,
                "distance_to_metropolitan_center": distance_to_metropolitan_center.value,
                "distance_to_city_towns": distance_to_city_towns.value,
                "wheat_allotment": wheat_allotment.value,
                "cotton_allotment": cotton_allotment.value,
                "peanut_allotment": peanut_allotment.value,
                "land_value": land_value.value,

            }, function (data, status) {
                console.log(data);
                console.log(status);

                // get response if succesfull or not
                var message = (status == 200) ? "Successful" : "Failed! Make sure to fill all fields with numbers!";
                alert('Data upload ' + message + '!');
            });
    }
}

function logout() {
    send_post_request("api/rest-auth/logout/", {}, function (data, status) {
        location.href = 'accounts/login/'
    });
}