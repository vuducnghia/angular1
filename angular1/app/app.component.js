'use strict';
angular.module('spaApp', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'home/home.component.html',
          controller: 'HomeController'
        })
        .when('/about', {
          templateUrl: 'about/about.component.html',
          controller: 'AboutController'
        })
        .when('/contact', {
          template: 'contact/contact.component.html',
          controller: 'ContactController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ])
  