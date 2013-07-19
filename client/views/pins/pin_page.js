Template.pinPage.helpers({
  currentPin: function() {
    return Pins.findOne(Session.get('currentPinId'));
  }
});