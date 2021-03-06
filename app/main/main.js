'use strict';
angular.module('main', [
    'ionic',
    'ngCordova',
    'ui.router',
    'ngLodash'
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
        controller: 'PlanCtrl as ctrl',
        params: {
          clearHistory: false
        }
      })
      .state('activity', {
        cache: false,
        url: '/activity',
        templateUrl: 'main/templates/activity.html',
        controller: 'ActivityCtrl as ctrl',
        params: {
          activity: null
        }
      })
      .state('filter', {
        url: '/filter',
        templateUrl: 'main/templates/filter.html',
        controller: 'FilterCtrl as ctrl',
        params: {
          filter: null,
          activity: null
        }
      })
      .state('result', {
        url: '/result',
        templateUrl: 'main/templates/result.html',
        controller: 'ResultCtrl as ctrl',
        params: {
          response: null
        }
      });

  })
  .run(function (Root) {
    Root.fetchDataSource();
  });
