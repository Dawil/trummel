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
					var postList = "#post-list";
					$(postList).imagesLoaded(function(){
						isotope.init(postList, {
							itemSelector: ".post",
							layoutMode: "masonry",
						});
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

angular.module('trummel')
	.factory('isotope', function($rootScope){
		var _tags = {},
				_selector,
				_config,
				_isotope = {
			runFilter: function(query) {
				$(_selector).isotope({ filter: query });
			}, 	getQuery: function() {
				var query = "";
				for (var tagId in _tags) {
					if (_tags.hasOwnProperty(tagId)) {
						if (_tags[tagId] === true) {
							query += '.tag-class-' + tagId;
						} else if(_tags[tagId] === false) {
							query += ':not(.tag-class-' + tagId + ')';
						}
					}
				}
				console.log(query);
				return query;
			},	toggleTag: function(tagId) {
				if (_tags[tagId] === false) {
					_tags[tagId] = null;
				} else if (_tags[tagId] === true) {
					_tags[tagId] = false;
				} else {
					_tags[tagId] = true;
				}
				_isotope.runFilter( _isotope.getQuery() );
			},	tagClass: function(tag) {
				var flag = _tags[tag.id];
				return flag === true ? "btn-info" :
							flag === false ? "btn-warning" :
															 "btn-link";
			}, init: function(selector, config) {
				_selector = selector;
				_config = config;
				$(_selector).isotope(_config);
			}
		};
		return _isotope;
	});

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
