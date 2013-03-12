'use strict';

angular.module('trummel')
	.controller('PanelCtrl',
		function($scope, wordpress, isotope) {
			// wordpress getters
			$scope.posts = wordpress.posts;
			$scope.tags = wordpress.tags;

			// return tag css classes
			$scope.getTags = function(post) {
				return post.tags.map(function(tag){
					return 'tag-class-' + tag.slug;
				}).join(' ');
			};

			// handle click on tag
			$scope.clickTag = function(tag) {
				isotope.toggleTag(tag);
				$("#post-list").isotope({
					itemSelector: ".post",
					layoutMode: "masonry",
					filter: isotope.getQuery()
				});
			};

			// isotope getters
			$scope.query = isotope.getQuery;
		}
	);
