'use strict';

angular.module('news.post.services', [
		'ngResource'
	])
	.factory('Post', function ($resource) {
	  return $resource('https://xebianews.firebaseIO.com/posts/:id.json');
	});