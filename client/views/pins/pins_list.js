Template.pinsList.helpers({
	pins: function(){
		return Pins.find({}, {sort: {submitted: -1}});
	}
});