'use strict';

angular.module('trummel')
	.controller('PanelCtrl',
		function($scope, wordpress, isotope) {
			// wordpress getters
			$scope.posts = wordpress.posts;
			$scope.tags = wordpress.tags;

			$scope.tagColumns = "span2";
			$scope.postColumns = "span10";

			// return tag css classes
			$scope.getTags = function(post) {
				return post.tags.map(function(tag){
					return 'tag-class-' + tag.id;
				}).join(' ');
			};

			// handle click on tag
			$scope.clickTag = function(tag) {
				isotope.toggleTag(tag.id);
			};
			$scope.initIsotope = function(flag) {
				if (flag) {
					isotope.init("#post-list", {
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
