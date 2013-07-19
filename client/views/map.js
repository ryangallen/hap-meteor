Template.map.rendered = function initialize () {

	if(!navigator.geolocation){
		alert('Your browser does not support geolocation.');
	}else{
		navigator.geolocation.getCurrentPosition(success, error);
	}

	function success(position){
		var lat = position.coords.latitude,
			lon = position.coords.longitude;

		var options = {
			center: new google.maps.LatLng( lat, lon ),
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById('map_canvas'), options);

		var mark = new google.maps.Marker({
	            position: new google.maps.LatLng (46.4675891, -84.3663831),
	            map: map,
	            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
	            title: "title",
	        });
	        mark.setMap(map);

	    var pins = Pins.find();
	    
		pins.forEach(function(pin){
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng (pin.lat, pin.lng),
		        map: map,
		        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		        title: pin.title,
		    });
		    marker.setMap(map);
		});
	}

	function error(error){
		console.log("Sorry, an error occured with geolocation.");
	}
}