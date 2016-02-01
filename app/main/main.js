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
        cache: false,
        url: '/activity',
        templateUrl: 'main/templates/activity.html',
        controller: 'ActivityCtrl as ctrl',
        params: {
            name: null
        }
    })
    .state('property', {
        url: '/property',
        templateUrl: 'main/templates/component.html',
        controller: 'ComponentCtrl as ctrl'
    })
    .state('filter', {
        url: '/filter',
        templateUrl: 'main/templates/filter.html',
        controller: 'FilterCtrl as ctrl',
        params: {
            name: null,
            activity: null
        }
    })
    .state('result', {
        url: '/result',
        templateUrl: 'main/templates/result.html',
        controller: 'ResultCtrl as ctrl'
    });

});
