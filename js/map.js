(function() {
    window.onload = function() {
        let mapDiv = document.getElementById('map');
        let latlng = new google.maps.LatLng(40.4406, -79.9959);
    
        let options = {
            center: latlng,
            zoom: 11,
            mapTypeId: 'hybrid'
        }
    
        let map = new google.maps.Map(mapDiv, options);
    }
})();