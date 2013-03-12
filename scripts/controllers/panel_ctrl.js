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
					return 'tag-class-' + tag.id;
				}).join(' ');
			};

			// handle click on tag
			$scope.clickTag = function(tag) {
				isotope.toggleTag(tag.id);
				$("#post-list").isotope({ filter: isotope.getQuery() });
			};
			$scope.initIsotope = function(flag) {
				if (flag) {
					$("#post-list").isotope({
						itemSelector: ".post",
						layoutMode: "masonry",
					});
				}
			};

			// calculate tag status css class
			$scope.tagClass = function(tag) {
				return isotope.tagClass(tag);
			};

			// isotope getters
			$scope.query = isotope.getQuery;
		}
	);
