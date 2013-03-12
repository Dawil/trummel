angular.module('trummel')
	.factory('wordpress', function($http, $rootScope){
		var _url = "http://lit-shore-9728.herokuapp.com/api/",
				_posts = [],
				_tags = [];

		$http.jsonp(_url + "get_recent_posts/?count=50&callback=JSON_CALLBACK")
			.then(function(result) {
				_posts = result.data.posts;
				console.log(result);
			});
		$http.jsonp(_url + "get_tag_index/?callback=JSON_CALLBACK")
			.then(function(result) {
				console.log(result);
				_tags = result.data.tags;
			});

		return {
			posts: function() { return _posts; },
			tags: function() { return _tags; }
		}
	});
