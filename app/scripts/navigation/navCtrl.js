'use strict';

angular.module('news.nav.controllers', [
		'ui.router',
		'news.post.services'
	])
	.controller('NavCtrl', function ($scope, $state, Post) {
	  $scope.post = {url: 'http://', title: ''};

	  $scope.submitPost = function () {
	    Post.create($scope.post).then(function (ref) {
	      $state.go('posts', {postId: ref.name()});
	      $scope.post = {url: 'http://', title: ''};
	    });
	  };

	});