'use strict';

angular.module('trummel',[])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'templates/panel.html',
				controller: 'PanelCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
