/**
 * this file runs after load all app files
 */

// App.HomeRoute = App.ArticlesIndexRoute;

// wait document ready ...
$( document ).ready(function() {

  App.HomeController.reopen({
    limit: 7,

    blogBgImageStyle: '',
    haveMoreArticles: ''
  });

  moment.lang(Ember.get(we,'configs.client.language'));
  // remove noscripts tags on start
  $('noscript').remove();

  // set wembed api url
  // App.set('wembedApiUrl', Ember.get(we, 'configs.server.providers.wembed') + '/api/v1/json?url=');

  App.advanceReadiness();

});
