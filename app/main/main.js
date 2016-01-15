'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/plan');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('plan', {
      url: '/plan',
      templateUrl: 'main/templates/plan.html',
      controller: 'PlanCtrl as ctrl'
    })
    .state('activity', {
      url: '/activity',
      templateUrl: 'main/templates/activity.html',
      controller: 'ActivityCtrl as ctrl'
    })
    .state('property', {
      url: '/property',
      templateUrl: 'main/templates/property.html',
      controller: 'PropertyCtrl as ctrl'
    })
    .state('preferences', {
      url: '/preferences',
      templateUrl: 'main/templates/preferences.html',
      controller: 'PreferencesCtrl as ctrl'
    });

});
