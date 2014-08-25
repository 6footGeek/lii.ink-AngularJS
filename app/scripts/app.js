/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @author 6footgeek
 * @name Lii.ink
 * @description
 * # Lii.ink link sharing
 *
 * Main module of the application.
 */
var app = angular.module('LiiinkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'])
.constant('FIREBASE_URL', 'https://liiink.firebaseio.com/');


/*Set routes *URLS* */


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })

      .when('/about', {

        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
