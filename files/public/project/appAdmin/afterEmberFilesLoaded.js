/**
 * this file runs after load all app files
 */

// wait document ready ...
$( document ).ready(function() {
	// app router config
	App.Router.reopen({
		location: 'hash'
	});

  // configure moment.js
  moment.lang(Ember.get(we,'configs.client.language'));
  // remove noscripts tags on start
  $('noscript').remove();

  // var serviceName = we.configs.client.publicVars.oauthNetworkServiceName;
  // if (!serviceName) {
  //   serviceName = 'network';
  // }

  // set wembed api url
  App.set('wembedApiUrl', Ember.get(we, 'configs.server.providers.wembed') + '/api/v1/json?url=');

  // // create auth object and set default vars
  // App.auth = Ember.auth.create({
  //   serviceName: serviceName,
  //   token: we.configs.client.publicVars.authToken,
  //   domain: we.configs.server.providers.cookieDomain,
  //   loginUrl: we.configs.server.providers.accounts+ '/login',
  //   logoutUrl: we.configs.server.providers.accounts+ '/auth/logout',
  //   register: we.configs.server.providers.accounts+ '/signup'
  // });

  App.advanceReadiness();

});
