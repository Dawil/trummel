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
