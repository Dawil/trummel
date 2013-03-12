angular.module('trummel')
	.factory('isotope', function(){
		var _tags = {};
		return {
			toggleTag: function(tag) {
				console.log(tag);
				if ( _tags.hasOwnProperty(tag.id) ) {
					delete _tags[tag.id];
				} else {
					_tags[tag.id] = tag;
				}
			},
			getQuery: function() {
				var query = "";
				for (var tagId in _tags) {
					if (_tags.hasOwnProperty(tagId)) {
						query += '.tag-class-' + _tags[tagId].slug;
					}
				}
				return query;
			}
		};
	});
