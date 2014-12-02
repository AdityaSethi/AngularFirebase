'use strict';

/**
 * @ngdoc overview
 * @name angularFirebaseApp
 * @description
 * # angularFirebaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularFirebaseApp', [
    'ui.router',
    'news.common.filters',
    'news.post.controllers',
    'news.nav.controllers',
    'news.user.controllers',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://xebianews.firebaseIO.com/')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: 'posts',
        templateUrl: 'scripts/post/post.html',
        controller: 'PostCtrl'
      })
      .state('showpost', {
        url: 'posts/:postId',
        templateUrl: 'scripts/post/showpost.html',
        controller: 'PostViewCtrl'
      })
      .state('register', {
        url: 'register',
        templateUrl: 'scripts/user/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .state('login', {
        url: 'login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      });
  })
  .run(function ($state) {
    $state.go('posts');
  });
