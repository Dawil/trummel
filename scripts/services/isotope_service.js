angular.module('trummel')
	.factory('isotope', function($rootScope){
		var _tags = {},
				_selector,
				_config,
				_runFilter = function(query) {
			$(_selector).isotope( {filter: query });
		}, 	
				_getQuery = function() {
			var query = "";
			for (var tagId in _tags) {
				if (_tags.hasOwnProperty(tagId)) {
					query += '.tag-class-' + _tags[tagId].slug;
				}
			}
			return query;
		},
				_toggleTag = function(tag) {
			console.log(tag);
			if ( _tags.hasOwnProperty(tag.id) ) {
				delete _tags[tag.id];
			} else {
				_tags[tag.id] = tag;
			}
			_runFilter( _getQuery() );
		};
		return {
			init: function(selector, config) {
				_selector = selector;
				_config = config;
				$(_selector).isotope(_config);
			},
			toggleTag: _toggleTag,
			getQuery: _getQuery
		};
	});
