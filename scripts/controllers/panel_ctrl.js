'use strict';

angular.module('trummel')
	.controller('PanelCtrl',
		function($scope, wordpress) {
			$scope.feeds = wordpress.feeds;
		}
	);
