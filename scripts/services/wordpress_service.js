angular.module('trummel')
	.factory('wordpress', function($http){
		var _url = "http://lit-shore-9728.herokuapp.com/api/",
				_feeds = [],
				_tags = [];

		$http.jsonp(_url + "get_recent_posts/?count=50&callback=JSON_CALLBACK")
			.then(function(result) {
				_feeds = result.data.posts;
				console.log(result);
			});
		$http.jsonp(_url + "get_tag_index/?callback=JSON_CALLBACK")
			.then(function(result) {
				console.log(result);
				_tags = result.data.tags;
			});

		return {
			feeds: function() { return _feeds; },
			tags: function() { return _tags; }
		}
	});
