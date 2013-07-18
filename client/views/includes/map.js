Template.map.rendered = function initialize () {
	var mapOptions = {
		center: new google.maps.LatLng(42.43, -83.05),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
	mapOptions);

	var pins = [
		['1', 42.490, -83.145],
		['2', 42.461, -83.135],
		['3', 42.681, -83.150],
		['4', 42.626, -83.034],
		['5', 42.361, -83.046],
		['6', 42.594, -83.171],
		['7', 42.567, -83.160],
		['8', 42.585, -83.187],
		['9', 42.423, -83.078],
		['10', 42.534, -83.092],
		['11', 42.397, -83.181],
		['12', 42.265, -83.179],
		['13', 42.583, -83.157],
		['14', 42.325, -83.132],
		['15', 42.436, -83.134],
		['16', 42.347, -83.188],
		['17', 42.664, -83.168],
		['18', 42.383, -83.196],
		['19', 42.322, -83.241],
		['20', 42.437, -83.329],
		['21', 42.397, -83.381],
		['22', 42.265, -83.379],
		['23', 42.583, -83.357],
		['24', 42.325, -83.332],
		['25', 42.436, -82.934],
		['26', 42.347, -82.988],
		['27', 42.664, -82.968],
		['28', 42.383, -82.996],
		['29', 42.322, -82.941],
		['30', 42.437, -82.929],
	];

	for (var i = 0; i < pins.length; i++) {
		var pin = pins [i];
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng (pin[1], pin[2]),
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: pin[0],
        });
        marker.setMap(map);
    }
}
