'use strict';

angular.module('trummel')
	.controller('PanelCtrl',
		function($scope, wordpress, isotope) {
			// wordpress getters
			$scope.feeds = wordpress.feeds;
			$scope.tags = wordpress.tags;

			// return tag css classes
			$scope.getTags = function(feed) {
				return feed.tags.map(function(tag){
					return 'tag-class-' + tag.slug;
				}).join(' ');
			};

			// handle click on tag
			$scope.clickTag = function(tag) {
				isotope.toggleTag(tag);
			};

			// isotope getters
			$scope.query = isotope.getQuery;
		}
	);
