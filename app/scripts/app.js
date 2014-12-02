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
    'news.post.controllers',
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
  })
  .run(function ($state) {
    $state.go('posts');
  });
