angular.module('trummel')
	.factory('wordpress', function($http){
		var _feeds = [];

		$http.jsonp("http://lit-shore-9728.herokuapp.com/api/get_recent_posts/?count=50&callback=JSON_CALLBACK")
			.then(function(result) {
				_feeds = result.data.posts;
				console.log(result);
			});

		return {
			feeds: function() { return _feeds; }
		}
	});
