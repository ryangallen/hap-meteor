Template.pinItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},

	date: function(){
		d = new Date(this.date + ' ' + this.time);
		var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var month = d.getMonth(),
			day = d.getDate(),
			year = d.getFullYear();
		return monthNames[month] + ' ' + day + ', ' + year;
	},

	time: function(){
		d = new Date(this.date + ' ' + this.time);
		var hour = d.getHours(),
			min = d.getMinutes(),
			period = 'am';
		if (hour > 12){hour = hour%12;period = 'pm';}
		return hour + ':' + pad(min) + ' ' + period;
	}
});

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}