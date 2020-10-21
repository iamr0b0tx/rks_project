// mapbox code initializations
L.mapbox.accessToken = 'pk.eyJ1IjoiaWFtcjBiMHR4IiwiYSI6ImNrOHJtdm5pbTA0MHUzbHBqZ292ODdnYjAifQ.NkW4bdn3I8VXvbP7-IeE5w';
var map = L.mapbox.map('map', 'mapbox.streets');
var markers = new L.MarkerClusterGroup();

// the id current data working with
var land_id = '';
var hidden_marker;

send_get_request(window.location.origin + "/api/land_mini/", function (data, status){
    if (status != 200 && status != 201) return
    console.log(data);

    data.forEach(element => {
        var lat = element.latitude;
        var long = element.longitude;
        var title = lat.slice(0, 8) + ', ' + long.slice(0, 8);

        var marker = L.marker(new L.LatLng(lat, long), {
            icon: L.mapbox.marker.icon({ 'marker-symbol': 'post', 'marker-color': '0044FF' }),
            clickable: true,
            draggable: false,
            title: title,
            alt: element.land_id
        });

        marker.on('click', function (e) {
            send_get_request(window.location.origin + "/api/land/" + marker.options.alt + "/", function (data, status) {
                if (status != 200 && status != 201) return
                
                land_id = marker.options.alt;
                submit_btn.innerHTML = "Update";

                marker.setZIndexOffset(-1);
                marker.setOpacity(0);

                edit_marker.setOpacity(1);
                edit_marker.setZIndexOffset(10);
                edit_marker.setLatLng(e.latlng);
                
                hidden_marker.setZIndexOffset(1);
                hidden_marker.setOpacity(1);

                // keep track of hidden marker
                hidden_marker = marker;
                
                longitude.value = data.longitude
                latitude.value = data.latitude
                size.value = data.size
                productive_quality.value = data.productive_quality
                land_type.value = data.land_type
                quality.value = data.quality
                mineral_quantity.value = data.mineral_quantity
                road_type.value = data.road_type
                distance_to_paved_road.value = data.distance_to_paved_road
                distance_to_nearest_town.value = data.distance_to_nearest_town
                nearest_town_size.value = data.nearest_town_size
                distance_to_principal_city.value = data.distance_to_principal_city
                distance_to_metropolitan_center.value = data.distance_to_metropolitan_center
                distance_to_city_towns.value = data.distance_to_city_towns
                wheat_allotment.value = data.wheat_allotment
                cotton_allotment.value = data.cotton_allotment
                peanut_allotment.value = data.peanut_allotment
                land_value.value = data.land_value

                
            });  
        });

        marker.bindPopup(title);
        markers.addLayer(marker);
    });

    map.addLayer(markers);
});

var edit_marker = L.marker(new L.LatLng(10, 10), {
    icon: L.mapbox.marker.icon({
        'marker-color': '#f86767'
    }), 
    opacity: 0,
    clickable: true,
    draggable: true,
}).addTo(map);

// initilize hidden marker
hidden_marker = edit_marker;

edit_marker.on('drag', function (e) {
    longitude.value = e.latlng.lng; // e is an event object (MouseEvent in this case)
    latitude.value = e.latlng.lat; // e is an event object (MouseEvent in this case)
});

var new_marker = L.marker(new L.LatLng(0, 0), {
    icon: L.mapbox.marker.icon({
        'marker-color': '#0062cc'
    }), 
    clickable: true,
    draggable: true,
}).addTo(map);

new_marker.on('drag', function (e) {
    submit_btn.innerHTML = "Upload";

    // hide the edit marker
    edit_marker.setOpacity(0);
    edit_marker.setZIndexOffset(-10);

    // show the hidden
    hidden_marker.setZIndexOffset(1);
    hidden_marker.setOpacity(1);

    longitude.value = e.latlng.lng; // e is an event object (MouseEvent in this case)
    latitude.value = e.latlng.lat; // e is an event object (MouseEvent in this case)

    // toggle Submit
    query_btn.style.opacity = 0.5;
    upload_btn.style.opacity = 1.0;
    submit_btn.innerHTML = "Upload";
    value_input.removeAttribute("disabled");
});
