Pins = new Meteor.Collection('pins');

Meteor.methods({
	post: function(pinAttributes) {
		var user = Meteor.user(),
			pinWithSameLink = Pins.findOne({url: pinAttributes.url});

		//ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new pins");

		//ensure the pin has a title
		if (!pinAttributes.title)
			throw new Meteor.Error(422, 'Please fill in a title');

		// ensure the pin has a location
		if (!pinAttributes.location)
			throw new Meteor.Error(422, 'Please fill in a location');

		// ensure the pin has a date
		if (!pinAttributes.date)
			throw new Meteor.Error(422, 'Please fill in a date');

		// ensure the pin has a time
		if (!pinAttributes.time)
			throw new Meteor.Error(422, 'Please fill in a time');

		// ensure the pin has a description
		if (!pinAttributes.description)
			throw new Meteor.Error(422, 'Please fill in a description');

		// check that there are no previous pins with the same link
		if (pinAttributes.url && pinWithSameLink) {
			throw new Meteor.Error(302, 
				'This link has already been pinned', 
				pinWithSameLink._id);
		}

		// pick out the whitelisted keys
		var pin = _.extend(_.pick(pinAttributes, 'title', 'location', 'lat', 'lng', 'date', 'time', 'url', 'description'), {
			userId: user._id, 
			author: user.username, 
			submitted: new Date().getTime()
		});

		var pinId = Pins.insert(pin);

		return pinId;
	}
});
