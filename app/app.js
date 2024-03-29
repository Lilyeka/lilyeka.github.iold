'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'dndLists',
  'myApp.welcome',
  'myApp.view1',
  'myApp.view2',
  'myApp.puzzle',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider
      .when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'WelcomeCtrl'
  })
      .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
      .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
      .when('/puzzle', {
        templateUrl: 'puzzle/puzzle.html',
        controller: 'PuzzleCtrl'
      })
      .otherwise({redirectTo: '/welcome'});

}]);
