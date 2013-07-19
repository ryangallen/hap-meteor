Meteor.Router.add({
	'/': 'map',
	'/add': 'pinAdd',
	'/pin/:_id':{
		to: 'pinPage',
		and: function(id){ Session.set('currentPinId', id); }
	}
});

Meteor.Router.filters({
	'requireLogin': function(page){
		if (Meteor.user())
			return page;
		else
			return 'accessDenied';
	}
});

Meteor.Router.filter('requireLogin', {only: 'postSubmit'});