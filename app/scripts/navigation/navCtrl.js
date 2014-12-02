'use strict';

angular.module('news.nav.controllers', [
		'ui.router',
		'news.post.services',
		'news.user.services'
	])
	.controller('NavCtrl', function ($scope, $state, Post, Auth) {
	  $scope.signedIn = Auth.signedIn;
		$scope.logout = Auth.logout;
	  
	  $scope.post = {url: 'http://', title: ''};

	  $scope.login = function () {
      Auth.login($scope.user).then(function () {
        $state.go('posts')
      })
    };

	  $scope.submitPost = function () {
	    Post.create($scope.post).then(function (ref) {
	      $state.go('posts', {postId: ref.name()});
	      $scope.post = {url: 'http://', title: ''};
	    });
	  };

	});