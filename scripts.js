var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -3.7318616, lng: -38.5266704},
    zoom: 12
  });

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
  	geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
	var address = document.getElementById('address').value;
  	geocoder.geocode({'address': address}, function(results, status) {
    	if (status === google.maps.GeocoderStatus.OK) {
	    	resultsMap.setCenter(results[0].geometry.location);
	    	alert(results[0].geometry.location)
	      	var marker = new google.maps.Marker({
		        map: resultsMap,
		        position: results[0].geometry.location
	      	});
	    } else {
	    	alert('Geocode was not successful for the following reason: ' + status);
	    }
	});
}