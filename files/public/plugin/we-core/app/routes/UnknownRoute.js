App.UnknownRoute = Ember.Route.extend({
	renderTemplate: function() {
	  this.render('404');
	},
	init: function () {
	  this._super();
	  console.log('404 :: 404 page');
	}
});
