Template.pinAdd.events({
	'submit form': function(e){
		e.preventDefault();			

		var pin = {
			title: $(e.target).find('[name=title]').val(),
			location: $(e.target).find('[name=location]').val(),
			date: $(e.target).find('[name=date]').val(),
			time: $(e.target).find('[name=time]').val(),
			url: $(e.target).find('[name=url]').val(),
			description: $(e.target).find('[name=description]').val()
		}

		geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': pin.location}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				pin.lat = results[0].geometry.location.lat();
				pin.lng = results[0].geometry.location.lng();

				Meteor.call('post', pin, function(error, id){
					if (error)
						return alert(error.reason);

					Meteor.Router.to('pinPage', id);
				});
			} else {
				alert('Sorry, can\'t find ' + pin.location + 'on the map.');
			}
		});
	}
});