Meteor.publish('pins', function(){
	return Pins.find();
});