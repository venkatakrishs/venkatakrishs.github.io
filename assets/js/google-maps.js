function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 12.9915, lng: 80.2337 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chennai, TN, India' // Title Location
    });
}