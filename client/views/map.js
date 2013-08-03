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

		map = new google.maps.Map(document.getElementById('map_canvas'), options);
		infowindow = new google.maps.InfoWindow({maxWidth: 350});

		$('#searchMap').fadeIn();
	    var pins = Pins.find();
		pins.forEach(function(pin){
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng (pin.lat, pin.lng),
		        map: map,
		        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		        pin: pin
		    });
		    google.maps.event.addListener(marker, 'click', showPinInfo);
		    marker.setMap(map);
		});
	}

	function showPinInfo() {
		pinInfo = '<div class="pinInfoWindow">
			<h3 class="pin-title">'+this.pin.title+'</h3>
			<h4><span class="pin-date">'+this.pin.date+'</span> <span class="pin-time">'+this.pin.time+'</span></h4>
			<h4><span class="pin-location">'+this.pin.location+'</span></h4>
			<p class="pin-description">'+this.pin.description+'</p>
			<p class="pin-link"><a href="'+this.pin.url+'" target="_blank">more info...</a></p></div>';
        infowindow.setContent(pinInfo);
        infowindow.open(map, this);
	}

	function error(error){
		console.log("Sorry, an error occured with geolocation.");
	}

	codeAddress = function() {
		var address = document.getElementById('address').value;
		geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
			} else {
				alert("Sorry, couldn't find" + address);
			}
		});
	}
}

Template.map.events = {
	'click #geocode' : function(){codeAddress();},
	'keypress #address' : function(e){if (e.keyCode == 13) {codeAddress();}},
	'click .pin' : function(){
		infowindow.close();
		map.setCenter(new google.maps.LatLng(this.lat,this.lng));
	}
}