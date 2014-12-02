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
    'news.post.controllers'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: 'posts',
        templateUrl: 'scripts/post/post.html',
        controller: 'PostCtrl'
      })
  })
  .run(function ($state) {
    $state.go('posts');
  });
