'use strict';

angular.module('news.post.controllers', [
		'ui.router',
		'news.post.services'
	])
	.controller('PostCtrl', function ($scope, $state, Post) {
		$scope.posts = Post.all;

	  $scope.post = {url: 'http://', 'title': ''};

	  $scope.submitPost = function () {
	    Post.create($scope.post).then(function (ref) {
	      $state.go('posts', {postId: ref.name()})
	    });
	  };

	  $scope.deletePost = function (post) {
	    Post.delete(post);
	  };
	})
	.controller('PostViewCtrl', function ($scope, $stateParams, Post) {
	  $scope.post = Post.get($stateParams.postId);
	});